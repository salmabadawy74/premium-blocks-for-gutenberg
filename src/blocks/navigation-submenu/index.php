<?php

/**
 * Renders the `core/navigation-submenu` block.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_kemet_navigation_submenu( $attributes, $content, $block ) {

	$navigation_link_has_id = isset( $attributes['id'] ) && is_numeric( $attributes['id'] );
	$is_post_type           = isset( $attributes['kind'] ) && 'post-type' === $attributes['kind'];
	$is_post_type           = $is_post_type || isset( $attributes['type'] ) && ( 'post' === $attributes['type'] || 'page' === $attributes['type'] );

	// Don't render the block's subtree if it is a draft.
	if ( $is_post_type && $navigation_link_has_id && 'publish' !== get_post_status( $attributes['id'] ) ) {
		return '';
	}

	// Don't render the block's subtree if it has no label.
	if ( empty( $attributes['label'] ) ) {
		return '';
	}

	$colors          = block_core_navigation_submenu_build_css_colors( $block->context, $attributes );
	$font_sizes      = block_core_navigation_submenu_build_css_font_sizes( $block->context );
	$classes         = array_merge(
		$colors['css_classes'],
		$font_sizes['css_classes']
	);
	$style_attribute = ( $colors['inline_styles'] . $font_sizes['inline_styles'] );

	$css_classes = trim( implode( ' ', $classes ) );
	$has_submenu = count( $block->inner_blocks ) > 0;
	$is_active   = ! empty( $attributes['id'] ) && ( get_the_ID() === $attributes['id'] );

	$show_submenu_indicators = isset( $block->context['showSubmenuIcon'] ) && $block->context['showSubmenuIcon'];
	$open_on_click           = isset( $block->context['openSubmenusOnClick'] ) && $block->context['openSubmenusOnClick'];
	$open_on_hover_and_click = isset( $block->context['openSubmenusOnClick'] ) && ! $block->context['openSubmenusOnClick'] &&
		$show_submenu_indicators;

	$wrapper_attributes = get_block_wrapper_attributes(
		array(
			'class' => $css_classes . ' wp-block-navigation-item' . ( $has_submenu ? ' has-child' : '' ) .
			( $open_on_click ? ' open-on-click' : '' ) . ( $open_on_hover_and_click ? ' open-on-hover-click' : '' ) .
			( $is_active ? ' current-menu-item' : '' ),
			'style' => $style_attribute,
		)
	);

	$label = '';

	if ( isset( $attributes['label'] ) ) {
		$label .= wp_kses_post( $attributes['label'] );
	}

	$aria_label = sprintf(
		/* translators: Accessibility text. %s: Parent page title. */
		__( '%s submenu' ),
		wp_strip_all_tags( $label )
	);

	$html = '<li ' . $wrapper_attributes . '>';

	// If Submenus open on hover, we render an anchor tag with attributes.
	// If submenu icons are set to show, we also render a submenu button, so the submenu can be opened on click.
	if ( ! $open_on_click ) {
		$item_url = isset( $attributes['url'] ) ? $attributes['url'] : '';
		// Start appending HTML attributes to anchor tag.
		$html .= '<a class="wp-block-navigation-item__content" href="' . esc_url( $item_url ) . '"';

		if ( $is_active ) {
			$html .= ' aria-current="page"';
		}

		if ( isset( $attributes['opensInNewTab'] ) && true === $attributes['opensInNewTab'] ) {
			$html .= ' target="_blank"  ';
		}

		if ( isset( $attributes['rel'] ) ) {
			$html .= ' rel="' . esc_attr( $attributes['rel'] ) . '"';
		} elseif ( isset( $attributes['nofollow'] ) && $attributes['nofollow'] ) {
			$html .= ' rel="nofollow"';
		}

		if ( isset( $attributes['title'] ) ) {
			$html .= ' title="' . esc_attr( $attributes['title'] ) . '"';
		}

		$html .= '>';
		// End appending HTML attributes to anchor tag.

		$html .= $label;

		$html .= '</a>';
		// End anchor tag content.

		if ( $show_submenu_indicators ) {
			// The submenu icon is rendered in a button here
			// so that there's a clickable element to open the submenu.
			$html .= '<button aria-label="' . esc_attr( $aria_label ) . '" class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle" aria-expanded="false">' . block_core_navigation_submenu_render_submenu_icon() . '</button>';
		}
	} else {
		// If menus open on click, we render the parent as a button.
		$html .= '<button aria-label="' . esc_attr( $aria_label ) . '" class="wp-block-navigation-item__content wp-block-navigation-submenu__toggle" aria-expanded="false">';

		// Wrap title with span to isolate it from submenu icon.
		$html .= '<span class="wp-block-navigation-item__label">';

		$html .= $label;

		$html .= '</span>';

		$html .= '</button>';

		$html .= '<span class="wp-block-navigation__submenu-icon">' . block_core_navigation_submenu_render_submenu_icon() . '</span>';

	}

	if ( $has_submenu ) {
		$inner_blocks_html = '';
		foreach ( $block->inner_blocks as $inner_block ) {
			$inner_blocks_html .= $inner_block->render();
		}

		$html .= sprintf(
			'<ul class="wp-block-navigation__submenu-container">%s</ul>',
			$inner_blocks_html
		);
	}

	$html .= '</li>';

	return $html;
}

/**
 * Register the navigation submenu block.
 *
 * @uses render_block_kemet_navigation_submenu()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_kemet_navigation_submenu() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/navigation-submenu',
		array(
			'render_callback' => 'render_block_kemet_navigation_submenu',
		)
	);
}
add_action( 'init', 'register_block_kemet_navigation_submenu' );
