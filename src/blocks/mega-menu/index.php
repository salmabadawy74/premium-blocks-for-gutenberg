<?php
/**
 * Server-side rendering of the `kemet/mega-menu` block.
 *
 * @package WordPress
 */


/**
 * Renders the `kemet/mega-menu` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function kemet_render_block_mega_menu( $attributes, $content, $block ) {

	// Flag used to indicate whether the rendered output is considered to be
	// a fallback (i.e. the block has no menu associated with it).
	$is_fallback = false;

	/**
	 * Deprecated:
	 * The rgbTextColor and rgbBackgroundColor attributes
	 * have been deprecated in favor of
	 * customTextColor and customBackgroundColor ones.
	 * Move the values from old attrs to the new ones.
	 */
	if ( isset( $attributes['rgbTextColor'] ) && empty( $attributes['textColor'] ) ) {
		$attributes['customTextColor'] = $attributes['rgbTextColor'];
	}

	if ( isset( $attributes['rgbBackgroundColor'] ) && empty( $attributes['backgroundColor'] ) ) {
		$attributes['customBackgroundColor'] = $attributes['rgbBackgroundColor'];
	}

	unset( $attributes['rgbTextColor'], $attributes['rgbBackgroundColor'] );

	/**
	 * This is for backwards compatibility after `isResponsive` attribute has been removed.
	 */
	$has_old_responsive_attribute = ! empty( $attributes['isResponsive'] ) && $attributes['isResponsive'];
	$is_responsive_menu           = isset( $attributes['overlayMenu'] ) && 'never' !== $attributes['overlayMenu'] || $has_old_responsive_attribute;

	$inner_blocks = $block->inner_blocks;

	// Ensure that blocks saved with the legacy ref attribute name (navigationMenuId) continue to render.
	if ( array_key_exists( 'navigationMenuId', $attributes ) ) {
		$attributes['ref'] = $attributes['navigationMenuId'];
	}

	// If:
	// - the gutenberg plugin is active
	// - `__unstableLocation` is defined
	// - we have menu items at the defined location
	// - we don't have a relationship to a `wp_navigation` Post (via `ref`).
	// ...then create inner blocks from the classic menu assigned to that location.
	if (
		defined( 'IS_GUTENBERG_PLUGIN' ) && IS_GUTENBERG_PLUGIN &&
		array_key_exists( '__unstableLocation', $attributes ) &&
		! array_key_exists( 'ref', $attributes ) &&
		! empty( block_core_navigation_get_menu_items_at_location( $attributes['__unstableLocation'] ) )
	) {
		$menu_items = block_core_navigation_get_menu_items_at_location( $attributes['__unstableLocation'] );
		if ( empty( $menu_items ) ) {
			return '';
		}

		$menu_items_by_parent_id = block_core_navigation_sort_menu_items_by_parent_id( $menu_items );
		$parsed_blocks           = block_core_navigation_parse_blocks_from_menu_items( $menu_items_by_parent_id[0], $menu_items_by_parent_id );
		$inner_blocks            = new WP_Block_List( $parsed_blocks, $attributes );
	}

	// Load inner blocks from the navigation post.
	if ( array_key_exists( 'ref', $attributes ) ) {
		$navigation_post = get_post( $attributes['ref'] );
		if ( ! isset( $navigation_post ) ) {
			return '';
		}

		$parsed_blocks = parse_blocks( $navigation_post->post_content );

		// 'parse_blocks' includes a null block with '\n\n' as the content when
		// it encounters whitespace. This code strips it.
		$compacted_blocks = block_core_navigation_filter_out_empty_blocks( $parsed_blocks );

		// TODO - this uses the full navigation block attributes for the
		// context which could be refined.
		$inner_blocks = new WP_Block_List( $compacted_blocks, $attributes );
	}

	// If there are no inner blocks then fallback to rendering an appropriate fallback.
	if ( empty( $inner_blocks ) ) {
		$is_fallback = true; // indicate we are rendering the fallback.

		$fallback_blocks = block_core_navigation_get_fallback_blocks();

		// Fallback my have been filtered so do basic test for validity.
		if ( empty( $fallback_blocks ) || ! is_array( $fallback_blocks ) ) {
			return '';
		}

		$inner_blocks = new WP_Block_List( $fallback_blocks, $attributes );

	}

	$layout_justification = array(
		'left'          => 'items-justified-left',
		'right'         => 'items-justified-right',
		'center'        => 'items-justified-center',
		'space-between' => 'items-justified-space-between',
	);

	// Restore legacy classnames for submenu positioning.
	$layout_class = '';
	if ( isset( $attributes['layout']['justifyContent'] ) ) {
		$layout_class .= $layout_justification[ $attributes['layout']['justifyContent'] ];
	}
	if ( isset( $attributes['layout']['orientation'] ) && 'vertical' === $attributes['layout']['orientation'] ) {
		$layout_class .= ' is-vertical';
	}

	if ( isset( $attributes['layout']['flexWrap'] ) && 'nowrap' === $attributes['layout']['flexWrap'] ) {
		$layout_class .= ' no-wrap';
	}

	$colors     = block_core_navigation_build_css_colors( $attributes );
	$font_sizes = block_core_navigation_build_css_font_sizes( $attributes );
	$classes    = array_merge(
		$colors['css_classes'],
		$font_sizes['css_classes'],
		$is_responsive_menu ? array( 'is-responsive' ) : array(),
		$layout_class ? array( $layout_class ) : array(),
		$is_fallback ? array( 'is-fallback' ) : array()
	);

	$inner_blocks_html = '';
	$is_list_open      = false;
	foreach ( $inner_blocks as $inner_block ) {
		if ( ( 'kemet/navigation-link' === $inner_block->name || 'core/home-link' === $inner_block->name || 'core/site-title' === $inner_block->name || 'core/site-logo' === $inner_block->name || 'kemet/navigation-submenu' === $inner_block->name ) && ! $is_list_open ) {
			$is_list_open       = true;
			$inner_blocks_html .= '<ul class="premium-navigation__container">';
		}
		if ( 'kemet/navigation-link' !== $inner_block->name && 'core/home-link' !== $inner_block->name && 'core/site-title' !== $inner_block->name && 'core/site-logo' !== $inner_block->name && 'kemet/navigation-submenu' !== $inner_block->name && $is_list_open ) {
			$is_list_open       = false;
			$inner_blocks_html .= '</ul>';
		}
		if ( 'core/site-title' === $inner_block->name || 'core/site-logo' === $inner_block->name ) {
			$inner_blocks_html .= '<li class="premium-navigation-item">' . $inner_block->render() . '</li>';
		} else {
			$inner_blocks_html .= $inner_block->render();
		}
	}

	if ( $is_list_open ) {
		$inner_blocks_html .= '</ul>';
	}

	$block_styles = isset( $attributes['styles'] ) ? $attributes['styles'] : '';

	$wrapper_attributes = get_block_wrapper_attributes(
		array(
			'class' => implode( ' ', $classes ),
			'style' => $block_styles . $colors['inline_styles'] . $font_sizes['inline_styles'],
		)
	);

	$modal_unique_id = wp_unique_id( 'modal-' );

	// Determine whether or not navigation elements should be wrapped in the markup required to make it responsive,
	// return early if they don't.
	if ( ! $is_responsive_menu ) {
		return sprintf(
			'<nav %1$s>%2$s</nav>',
			$wrapper_attributes,
			$inner_blocks_html
		);
	}

	$is_hidden_by_default = isset( $attributes['overlayMenu'] ) && 'always' === $attributes['overlayMenu'];

	$responsive_container_classes = array(
		'premium-navigation__responsive-container',
		$is_hidden_by_default ? 'hidden-by-default' : '',
		implode( ' ', $colors['overlay_css_classes'] ),
	);
	$open_button_classes          = array(
		'premium-navigation__responsive-container-open',
		$is_hidden_by_default ? 'always-shown' : '',
	);

	$toggle_button_icon        = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="7.5" width="16" height="1.5" /><rect x="4" y="15" width="16" height="1.5" /></svg>';
	$should_display_icon_label = isset( $attributes['hasIcon'] ) && true === $attributes['hasIcon'];
	$toggle_button_content     = $should_display_icon_label ? $toggle_button_icon : 'Menu';

	$responsive_container_markup = sprintf(
		'<button aria-haspopup="true" aria-label="%3$s" class="%6$s" data-micromodal-trigger="%1$s">%9$s</button>
			<div class="%5$s" style="%7$s" id="%1$s">
				<div class="premium-navigation__responsive-close" tabindex="-1" data-micromodal-close>
					<div class="premium-navigation__responsive-dialog" aria-label="%8$s">
							<button aria-label="%4$s" data-micromodal-close class="premium-navigation__responsive-container-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg></button>
						<div class="premium-navigation__responsive-container-content" id="%1$s-content">
							%2$s
						</div>
					</div>
				</div>
			</div>',
		esc_attr( $modal_unique_id ),
		$inner_blocks_html,
		__( 'Open menu' ), // Open button label.
		__( 'Close menu' ), // Close button label.
		esc_attr( implode( ' ', $responsive_container_classes ) ),
		esc_attr( implode( ' ', $open_button_classes ) ),
		safecss_filter_attr( $colors['overlay_inline_styles'] ),
		__( 'Menu' ),
		$toggle_button_content
	);

	return sprintf(
		'<nav %1$s>%2$s</nav>',
		$wrapper_attributes,
		$responsive_container_markup
	);
}

/**
 * Register the navigation block.
 *
 * @uses render_block_mega_menu()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_mega_menu() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/mega-menu',
		array(
			'render_callback' => 'kemet_render_block_mega_menu',
		)
	);
}

add_action( 'init', 'register_block_mega_menu' );

