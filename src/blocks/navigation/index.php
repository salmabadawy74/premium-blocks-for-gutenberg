<?php
/**
 * Server-side rendering of the `premium/navigation` block.
 *
 * @package WordPress
 */

function get_premium_navigation_css( $attributes, $unique_id ) {
	$block_helpers          = new PBG_Blocks_Helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	if ( isset( $attributes['overlayMenuWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '.overlay-menu-slide .premium-navigation__responsive-container' );
		$css->add_property( '--overlay-menu-width', $css->render_color( $attributes['overlayMenuWidth'] . 'px' ) );
	}
	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];

		$css->set_selector( '.' . $unique_id . ', .' . $unique_id . ' .premium-navigation-item__content' );
		$css->render_typography( $typography, 'Desktop' );
	}

	if ( isset( $attributes['menuBorder'] ) ) {
		$menu_border        = $attributes['menuBorder'];
		$menu_border_width  = $attributes['menuBorder']['borderWidth'];
		$menu_border_radius = $attributes['menuBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'border-style', $css->render_color( $menu_border['borderType'] ) );
		$css->add_property( 'border-color', $css->render_color( $menu_border['borderColor'] ) );
		$css->add_property( 'border-width', $css->render_spacing( $menu_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $menu_border_radius['Desktop'], 'px' ) );
	}

	if ( isset( $attributes['submenuBorder'] ) ) {
		$submenu_border        = $attributes['submenuBorder'];
		$submenu_border_width  = $attributes['submenuBorder']['borderWidth'];
		$submenu_border_radius = $attributes['submenuBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id . ' .premium-navigation__submenu-container' );
		$css->add_property( 'border-style', $css->render_color( $submenu_border['borderType'] ) );
		$css->add_property( 'border-color', $css->render_color( $submenu_border['borderColor'] ) );
		$css->add_property( 'border-width', $css->render_spacing( $submenu_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $submenu_border_radius['Desktop'], 'px' ) );
	}

	if ( isset( $attributes['overlayMenuBorder'] ) ) {
		$overlay_menu_border        = $attributes['overlayMenuBorder'];
		$overlay_menu_border_width  = $attributes['overlayMenuBorder']['borderWidth'];
		$overlay_menu_border_radius = $attributes['overlayMenuBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id . ' .premium-navigation__responsive-container.is-menu-open' );
		$css->add_property( 'border-style', $css->render_color( $overlay_menu_border['borderType'] ) );
		$css->add_property( 'border-color', $css->render_color( $overlay_menu_border['borderColor'] ) );
		$css->add_property( 'border-width', $css->render_spacing( $overlay_menu_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $overlay_menu_border_radius['Desktop'], 'px' ) );
	}

	if ( isset( $attributes['submenuTypography'] ) ) {
		$submenu_typography = $attributes['submenuTypography'];

		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-navigation-submenu, .' . $unique_id . ' .wp-block-premium-navigation-submenu .premium-navigation-item__content' );
		$css->render_typography( $submenu_typography, 'Desktop' );
	}

	if ( isset( $attributes['menuColors'] ) ) {
		$menu_colors = $attributes['menuColors'];

		$css->set_selector( '.' . $unique_id . ' .premium-navigation-item__content' );
		$css->add_property( '--pbg-links-color', $css->render_color( $menu_colors['link'] ) );
		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'background-color', $css->render_color( $menu_colors['background'] ) );
		$css->set_selector( '.' . $unique_id . ' .premium-navigation-item__content:hover' );
		$css->add_property( '--pbg-links-hover-color', $css->render_color( $menu_colors['linkHover'] ) );
	}

	if ( isset( $attributes['submenuColors'] ) ) {
		$submenu_colors = $attributes['submenuColors'];
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-navigation-submenu .premium-navigation-item__content' );
		$css->add_property( '--pbg-links-color', $css->render_color( $submenu_colors['link'] ) );
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-navigation-submenu' );
		$css->add_property( 'background-color', $css->render_color( $submenu_colors['background'] ) );
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-navigation-submenu .premium-navigation-item__content:hover' );
		$css->add_property( '--pbg-links-hover-color', $css->render_color( $submenu_colors['linkHover'] ) );
	}

	if ( isset( $attributes['overlayColors'] ) ) {
		$overlay_menu_colors = $attributes['overlayColors'];
		$css->set_selector( '.' . $unique_id . ' .premium-navigation__responsive-container-open' );
		$css->add_property( 'color', $css->render_color( $overlay_menu_colors['icon'] ) );
		$css->set_selector( '.' . $unique_id . ' .premium-navigation__responsive-container-open:hover' );
		$css->add_property( 'color', $css->render_color( $overlay_menu_colors['iconHover'] ) );
		$css->set_selector( '.' . $unique_id . ' .premium-navigation__responsive-container.is-menu-open .premium-navigation-item__content, .' . $unique_id . ' .premium-navigation__responsive-container.is-menu-open .wp-block-premium-navigation-submenu .premium-navigation-item__content' );
		$css->add_property( '--pbg-links-color', $css->render_color( $overlay_menu_colors['link'] ) );
		$css->set_selector( '.' . $unique_id . ' .premium-navigation__responsive-container.is-menu-open' );
		$css->add_property( 'background-color', $css->render_color( $overlay_menu_colors['background'] ) );
		$css->set_selector( '.' . $unique_id . ' .premium-navigation__responsive-container.is-menu-open .premium-navigation-item__content:hover, .' . $unique_id . ' .premium-navigation__responsive-container.is-menu-open .wp-block-premium-navigation-submenu .premium-navigation-item__content:hover' );
		$css->add_property( '--pbg-links-hover-color', $css->render_color( $overlay_menu_colors['linkHover'] ) );
	}

	if ( isset( $attributes['spacing'] ) ) {
		$spacing = $attributes['spacing'] ? $attributes['spacing'] : array(
			'padding'     => null,
			'itemPadding' => null,
			'margin'      => null,
		);

		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '.' . $unique_id . ' .premium-navigation__container' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}

		if ( $spacing['itemPadding'] ) {
			$item_padding = $spacing['itemPadding'];
			$css->set_selector( '.' . $unique_id . ' .premium-navigation__container > .premium-navigation-item > .premium-navigation-item__content' );
			$css->add_property( 'padding', $css->render_spacing( $item_padding['Desktop'], $item_padding['unit'] ) );
		}

		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '.' . $unique_id . ' .premium-navigation__container' );
			$css->add_property( 'margin', $css->render_spacing( $margin['Desktop'], $margin['unit'] ) );
		}
	}

	$css->start_media_query( $media_query['tablet'] );
	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];

		$css->set_selector( '.' . $unique_id . ', .' . $unique_id . ' .premium-navigation-item__content' );
		$css->render_typography( $typography, 'Tablet' );
	}

	if ( isset( $attributes['menuBorder'] ) ) {
		$menu_border        = $attributes['menuBorder'];
		$menu_border_width  = $attributes['menuBorder']['borderWidth'];
		$menu_border_radius = $attributes['menuBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $menu_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $menu_border_radius['Tablet'], 'px' ) );
	}

	if ( isset( $attributes['submenuBorder'] ) ) {
		$submenu_border        = $attributes['submenuBorder'];
		$submenu_border_width  = $attributes['submenuBorder']['borderWidth'];
		$submenu_border_radius = $attributes['submenuBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $submenu_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $submenu_border_radius['Tablet'], 'px' ) );
	}

	if ( isset( $attributes['overlayMenuBorder'] ) ) {
		$overlay_menu_border        = $attributes['overlayMenuBorder'];
		$overlay_menu_border_width  = $attributes['overlayMenuBorder']['borderWidth'];
		$overlay_menu_border_radius = $attributes['overlayMenuBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' .premium-navigation__responsive-container.is-menu-open' );
		$css->add_property( 'border-width', $css->render_spacing( $overlay_menu_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $overlay_menu_border_radius['Tablet'], 'px' ) );
	}

	if ( isset( $attributes['submenuTypography'] ) ) {
		$submenu_typography = $attributes['submenuTypography'];
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-navigation-submenu, .' . $unique_id . ' .wp-block-premium-navigation-submenu .premium-navigation-item__content' );
		$css->render_typography( $submenu_typography, 'Tablet' );
	}

	if ( isset( $attributes['spacing'] ) ) {
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '.' . $unique_id . ' .premium-navigation__container' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}

		if ( $spacing['itemPadding'] ) {
			$item_padding = $spacing['itemPadding'];
			$css->set_selector( '.' . $unique_id . ' .premium-navigation__container > .premium-navigation-item > .premium-navigation-item__content' );
			$css->add_property( 'padding', $css->render_spacing( $item_padding['Tablet'], $item_padding['unit'] ) );
		}

		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '.' . $unique_id . ' .premium-navigation__container' );
			$css->add_property( 'margin', $css->render_spacing( $margin['Tablet'], $margin['unit'] ) );
		}
	}

	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );

	if ( isset( $attributes['menuBorder'] ) ) {
		$menu_border        = $attributes['menuBorder'];
		$menu_border_width  = $attributes['menuBorder']['borderWidth'];
		$menu_border_radius = $attributes['menuBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $menu_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $menu_border_radius['Mobile'], 'px' ) );
	}

	if ( isset( $attributes['submenuBorder'] ) ) {
		$submenu_border        = $attributes['submenuBorder'];
		$submenu_border_width  = $attributes['submenuBorder']['borderWidth'];
		$submenu_border_radius = $attributes['submenuBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $submenu_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $submenu_border_radius['Mobile'], 'px' ) );
	}

	if ( isset( $attributes['overlayMenuBorder'] ) ) {
		$overlay_menu_border        = $attributes['overlayMenuBorder'];
		$overlay_menu_border_width  = $attributes['overlayMenuBorder']['borderWidth'];
		$overlay_menu_border_radius = $attributes['overlayMenuBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' .premium-navigation__responsive-container.is-menu-open' );
		$css->add_property( 'border-width', $css->render_spacing( $overlay_menu_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $overlay_menu_border_radius['Mobile'], 'px' ) );
	}

	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];

		$css->set_selector( '.' . $unique_id . ', .' . $unique_id . ' .premium-navigation-item__content' );
		$css->render_typography( $typography, 'Mobile' );
	}

	if ( isset( $attributes['submenuTypography'] ) ) {
		$submenu_typography = $attributes['submenuTypography'];
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-navigation-submenu, .' . $unique_id . ' .wp-block-premium-navigation-submenu .premium-navigation-item__content' );
		$css->render_typography( $submenu_typography, 'Mobile' );
	}

	if ( isset( $attributes['spacing'] ) ) {
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '.' . $unique_id . ' .premium-navigation__container' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
		}

		if ( $spacing['itemPadding'] ) {
			$item_padding = $spacing['itemPadding'];
			$css->set_selector( '.' . $unique_id . ' .premium-navigation__container > .premium-navigation-item > .premium-navigation-item__content' );
			$css->add_property( 'padding', $css->render_spacing( $item_padding['Mobile'], $item_padding['unit'] ) );
		}

		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '.' . $unique_id . ' .premium-navigation__container' );
			$css->add_property( 'margin', $css->render_spacing( $margin['Mobile'], $margin['unit'] ) );
		}
	}

	$css->stop_media_query();

	return $css->css_output();
}

/**
 * Renders the `premium/navigation` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function premium_render_block_navigation( $attributes, $content, $block ) {

	// Flag used to indicate whether the rendered output is considered to be
	// a fallback (i.e. the block has no menu associated with it).
	$is_fallback = false;

	$unique_id = rand( 100, 10000 );
	$id        = 'premium-navigation-' . esc_attr( $unique_id );

	/**
	 * This is for backwards compatibility after `isResponsive` attribute has been removed.
	 */
	$has_old_responsive_attribute = ! empty( $attributes['isResponsive'] ) && $attributes['isResponsive'];
	$is_responsive_menu           = isset( $attributes['overlayMenu'] ) && 'never' !== $attributes['overlayMenu'] || $has_old_responsive_attribute;
	$break_point                  = isset( $attributes['mobileBreakPoint'] ) ? $attributes['mobileBreakPoint'] : '600';
	$break_point                  = isset( $attributes['overlayMenu'] ) && 'custom' === $attributes['overlayMenu'] ? $break_point : '600';
	$overlay_menu_style           = isset( $attributes['overlayMenuStyle'] ) && $is_responsive_menu ? $attributes['overlayMenuStyle'] : '';
	$block_id                     = ( ! empty( $attributes['blockId'] ) ) ? $attributes['blockId'] : $id;

	wp_enqueue_script(
		'premium-navigation-view',
		PREMIUM_BLOCKS_URL . 'src/blocks/navigation/view/view.js',
		array(),
		PREMIUM_BLOCKS_VERSION,
		true
	);

	wp_localize_script(
		'premium-navigation-view',
		'PBGNav',
		array(
			'overlayMenu'      => isset( $attributes['overlayMenu'] ) ? $attributes['overlayMenu'] : '',
			'mobileBreakPoint' => isset( $attributes['mobileBreakPoint'] ) ? $attributes['mobileBreakPoint'] : '',
		)
	);

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

	$styles_classes = '';
	if ( isset( $attributes['menuStyle'] ) && $attributes['menuStyle'] ) {
		$styles_classes .= 'effect-' . $attributes['menuStyle'];
	}

	if ( isset( $attributes['dropdownReveal'] ) && $attributes['dropdownReveal'] ) {
		$styles_classes .= ' submenu-' . $attributes['dropdownReveal'];
	}

	if ( $overlay_menu_style ) {
		$styles_classes .= ' overlay-menu-' . $overlay_menu_style;
	}

	$classes = array_merge(
		$is_responsive_menu ? array( 'is-responsive' ) : array(),
		$layout_class ? array( $layout_class ) : array(),
		$is_fallback ? array( 'is-fallback' ) : array(),
		$styles_classes ? array( $styles_classes ) : array(),
		array( $block_id )
	);

	$inner_blocks_html = '';
	$is_list_open      = false;
	foreach ( $inner_blocks as $inner_block ) {
		if ( ( 'premium/navigation-link' === $inner_block->name || 'core/home-link' === $inner_block->name || 'core/site-title' === $inner_block->name || 'core/site-logo' === $inner_block->name || 'premium/navigation-submenu' === $inner_block->name ) && ! $is_list_open ) {
			$is_list_open       = true;
			$inner_blocks_html .= '<ul class="premium-navigation__container">';
		}
		if ( 'premium/navigation-link' !== $inner_block->name && 'core/home-link' !== $inner_block->name && 'core/site-title' !== $inner_block->name && 'core/site-logo' !== $inner_block->name && 'premium/navigation-submenu' !== $inner_block->name && $is_list_open ) {
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
			'class'            => implode( ' ', $classes ),
			'fontStyle'        => $block_styles,
			'data-break-point' => $break_point,
		)
	);

	$modal_unique_id = wp_unique_id( 'modal-' );

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
		$css = get_premium_navigation_css( $attributes, $block_id );
		if ( ! empty( $css ) ) {
			$block_helpers = new PBG_Blocks_Helper();
			$block_helpers->render_inline_css( $css, $unique_id, true );
		}
	};

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
	);
	$open_button_classes          = array(
		'premium-navigation__responsive-container-open',
		$is_hidden_by_default ? 'always-shown' : '',
	);

	$toggle_button_icon        = '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="7.5" width="16" height="1.5" /><rect x="4" y="15" width="16" height="1.5" /></svg>';
	$should_display_icon_label = isset( $attributes['hasIcon'] ) && true === $attributes['hasIcon'];
	$toggle_button_content     = $should_display_icon_label ? $toggle_button_icon : 'Menu';

	$responsive_container_markup = sprintf(
		'<button aria-haspopup="true" aria-label="%3$s" class="%6$s" data-micromodal-trigger="%1$s">%8$s</button>
			<div class="%5$s" id="%1$s">
				<div class="premium-navigation__responsive-close" tabindex="-1" data-micromodal-close>
					<div class="premium-navigation__responsive-dialog" aria-label="%7$s">
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
 * @uses render_block_premium_navigation()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_premium_navigation() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/navigation',
		array(
			'render_callback' => 'premium_render_block_navigation',
		)
	);
}

add_action( 'init', 'register_block_premium_navigation' );

