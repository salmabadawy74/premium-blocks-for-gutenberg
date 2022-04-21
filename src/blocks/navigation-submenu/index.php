<?php

function get_premium_submenu_navigation_css( $attributes, $unique_id ) {
	$block_helpers          = new PBG_Blocks_Helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	if ( isset( $attributes['megaMenu'] ) && $attributes['megaMenu'] ) {

		if ( isset( $attributes['megaMenuBackground'] ) ) {
			$background      = $attributes['megaMenuBackground'];
			$container_grid  = '';
			$container_grid2 = '';
			$container_bg    = '';
			if ( 'gradient' === $background['backgroundType'] ) {
				$container_grid  = $background['containerBack'] ? $background['containerBack'] : 'rgba(255,255,255,0)';
				$container_grid2 = $background['gradientColorTwo'] ? $background['gradientColorTwo'] : '#777';
				if ( 'radial' === $background['gradientType'] ) {
					$container_bg = 'radial-gradient(at ' . $background['gradientPosition'] . ', ' . $container_grid . ' ' . $background['gradientLocationOne'] . '%, ' . $container_grid2 . ' ' . $background['gradientLocationTwo'] . '%)';
				} elseif ( 'radial' !== $background['backgroundType'] ) {
					$container_bg = 'linear-gradient(' . $background['gradientAngle'] . 'deg, ' . $container_grid . ' ' . $background['gradientLocationOne'] . '%, ' . $container_grid2 . ' ' . $background['gradientLocationTwo'] . '%)';
				}
			} else {
				$container_bg = $background['backgroundImageURL'] ? 'url(' . $background['backgroundImageURL'] . ');' : '';
			}

			$css->set_selector( '#' . $unique_id . ' > .premium-navigation__submenu-container' );
			$css->add_property( 'background-color', $css->render_color( 'solid' === $background['backgroundType'] ? $background['containerBack'] : '' ) );
			$css->add_property( 'background-image', $css->render_color( $container_bg ) );
			$css->add_property( 'background-repeat', $css->render_color( $background['backgroundRepeat'] ) );
			$css->add_property( 'background-size', $css->render_color( $background['backgroundSize'] ) );
			$css->add_property( 'background-attachment', $css->render_color( $background['fixed'] ? 'fixed' : 'unset' ) );
			$css->add_property( 'background-position', $css->render_color( $background['backgroundPosition'] ) );
		}

		if ( isset( $attributes['spacing'] ) ) {
			$spacing = $attributes['spacing'];
			if ( $spacing['padding'] ) {
				$padding = $spacing['padding'];
				$css->set_selector( '#' . $unique_id . ' > .premium-navigation__submenu-container' );
				$css->add_property( 'padding-top', $css->render_color( $padding['desktop']['top'] . 'px' ) );
				$css->add_property( 'padding-right', $css->render_color( $padding['desktop']['right'] . 'px' ) );
				$css->add_property( 'padding-bottom', $css->render_color( $padding['desktop']['bottom'] . 'px' ) );
				$css->add_property( 'padding-left', $css->render_color( $padding['desktop']['left'] . 'px' ) );
			}

			if ( $spacing['columnPadding'] ) {
				$item_padding = $spacing['columnPadding'];
				$css->set_selector( '#' . $unique_id . ' > .premium-navigation__submenu-container > *' );
				$css->add_property( 'padding-top', $css->render_color( $item_padding['desktop']['top'] . 'px' ) );
				$css->add_property( 'padding-right', $css->render_color( $item_padding['desktop']['right'] . 'px' ) );
				$css->add_property( 'padding-bottom', $css->render_color( $item_padding['desktop']['bottom'] . 'px' ) );
				$css->add_property( 'padding-left', $css->render_color( $item_padding['desktop']['left'] . 'px' ) );
			}

			$css->start_media_query( $media_query['tablet'] );

			if ( $spacing['padding'] ) {
				$padding = $spacing['padding'];
				$css->set_selector( '#' . $unique_id . ' > .premium-navigation__submenu-container' );
				$css->add_property( 'padding-top', $css->render_color( $padding['tablet']['top'] . 'px' ) );
				$css->add_property( 'padding-right', $css->render_color( $padding['tablet']['right'] . 'px' ) );
				$css->add_property( 'padding-bottom', $css->render_color( $padding['tablet']['bottom'] . 'px' ) );
				$css->add_property( 'padding-left', $css->render_color( $padding['tablet']['left'] . 'px' ) );
			}

			if ( $spacing['columnPadding'] ) {
				$item_padding = $spacing['columnPadding'];
				$css->set_selector( '#' . $unique_id . ' > .premium-navigation__submenu-container > *' );
				$css->add_property( 'padding-top', $css->render_color( $item_padding['tablet']['top'] . 'px' ) );
				$css->add_property( 'padding-right', $css->render_color( $item_padding['tablet']['right'] . 'px' ) );
				$css->add_property( 'padding-bottom', $css->render_color( $item_padding['tablet']['bottom'] . 'px' ) );
				$css->add_property( 'padding-left', $css->render_color( $item_padding['tablet']['left'] . 'px' ) );
			}

			$css->stop_media_query();
			$css->start_media_query( $media_query['mobile'] );

			if ( $spacing['padding'] ) {
				$padding = $spacing['padding'];
				$css->set_selector( '#' . $unique_id . ' > .premium-navigation__submenu-container' );
				$css->add_property( 'padding-top', $css->render_color( $padding['mobile']['top'] . 'px' ) );
				$css->add_property( 'padding-right', $css->render_color( $padding['mobile']['right'] . 'px' ) );
				$css->add_property( 'padding-bottom', $css->render_color( $padding['mobile']['bottom'] . 'px' ) );
				$css->add_property( 'padding-left', $css->render_color( $padding['mobile']['left'] . 'px' ) );
			}

			if ( $spacing['columnPadding'] ) {
				$item_padding = $spacing['columnPadding'];
				$css->set_selector( '#' . $unique_id . ' > .premium-navigation__submenu-container > *' );
				$css->add_property( 'padding-top', $css->render_color( $item_padding['mobile']['top'] . 'px' ) );
				$css->add_property( 'padding-right', $css->render_color( $item_padding['mobile']['right'] . 'px' ) );
				$css->add_property( 'padding-bottom', $css->render_color( $item_padding['mobile']['bottom'] . 'px' ) );
				$css->add_property( 'padding-left', $css->render_color( $item_padding['mobile']['left'] . 'px' ) );
			}

			$css->stop_media_query();
		}
	}

	return $css->css_output();
}

/**
 * Renders the `premium/navigation-submenu` block.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_premium_navigation_submenu( $attributes, $content, $block ) {

	$mega_menu              = isset( $attributes['megaMenu'] ) ? $attributes['megaMenu'] : false;
	$mega_menu_width        = isset( $attributes['megaMenuWidth'] ) ? $attributes['megaMenuWidth'] : 'content';
	$mega_menu_columns      = isset( $attributes['megaMenuColumns'] ) ? $attributes['megaMenuColumns'] : '2';
	$mega_menu_layout       = isset( $attributes['megaMenuLayout'] ) ? $attributes['megaMenuLayout'] : 'equal';
	$navigation_link_has_id = isset( $attributes['id'] ) && is_numeric( $attributes['id'] );
	$is_post_type           = isset( $attributes['kind'] ) && 'post-type' === $attributes['kind'];
	$is_post_type           = $is_post_type || isset( $attributes['type'] ) && ( 'post' === $attributes['type'] || 'page' === $attributes['type'] );
	$navigation_link_icon   = isset( $attributes['linkCustomIcon'] ) ? $attributes['linkCustomIcon'] : '';
	$navigation_link_badge  = isset( $attributes['badgeText'] ) ? $attributes['badgeText'] : '';
	$badge_colors           = isset( $attributes['badgeColors'] ) ? $attributes['badgeColors'] : '';
	$layout                 = wp_get_global_settings( array( 'layout' ) );

	$badge_style = '';
	if ( $badge_colors ) {
		$badge_style .= $badge_colors['text'] ? 'color: ' . $badge_colors['text'] . ';' : '';
		$badge_style .= $badge_colors['background'] ? 'background-color: ' . $badge_colors['background'] . ';' : '';
	}

	// Don't render the block's subtree if it is a draft.
	if ( $is_post_type && $navigation_link_has_id && 'publish' !== get_post_status( $attributes['id'] ) ) {
		return '';
	}

	// Don't render the block's subtree if it has no label.
	if ( empty( $attributes['label'] ) ) {
		return '';
	}

	$has_submenu = count( $block->inner_blocks ) > 0;
	$is_active   = ! empty( $attributes['id'] ) && ( get_the_ID() === $attributes['id'] );

	$show_submenu_indicators = isset( $block->context['showSubmenuIcon'] ) && $block->context['showSubmenuIcon'];
	$open_on_click           = isset( $block->context['openSubmenusOnClick'] ) && $block->context['openSubmenusOnClick'];
	$open_on_hover_and_click = isset( $block->context['openSubmenusOnClick'] ) && ! $block->context['openSubmenusOnClick'] &&
		$show_submenu_indicators;
	$wrapper_attrs           = array(
		'class' => 'premium-navigation-item' . ( $has_submenu ? ' has-child' : '' ) .
		( $open_on_click ? ' open-on-click' : '' ) . ( $open_on_hover_and_click ? ' open-on-hover-click' : '' ) .
		( $is_active ? ' current-menu-item' : '' ) . ( $mega_menu ? ' premiun-mega-menu' : '' ),
	);

	if ( $mega_menu ) {
		wp_enqueue_script(
			'premium-navigation-submenu-view',
			PREMIUM_BLOCKS_URL . 'src/blocks/navigation-submenu/view/view.js',
			array(),
			PREMIUM_BLOCKS_VERSION,
			true
		);
		wp_localize_script(
			'premium-navigation-submenu-view',
			'PBGMegaMenu',
			array(
				'layout'             => $layout,
				'is_responsive_menu' => isset( $block->context['overlayMenu'] ) ? $block->context['overlayMenu'] : 'never',
				'openOnClick'        => $open_on_click,
			)
		);

		$wrapper_attrs['data-width'] = esc_attr( $mega_menu_width );
	}
	$wrapper_attributes = get_block_wrapper_attributes( $wrapper_attrs );

	$label = '';

	if ( isset( $attributes['label'] ) ) {
		$label .= wp_kses_post( $attributes['label'] );
	}

	$aria_label = sprintf(
		/* translators: Accessibility text. %s: Parent page title. */
		__( '%s submenu' ),
		wp_strip_all_tags( $label )
	);

	$unique_id = rand( 100, 10000 );
	$id        = 'pbg-block-' . esc_attr( $unique_id );

	$html = '<li id="' . esc_attr( $id ) . '"' . $wrapper_attributes . '>';

	// If Submenus open on hover, we render an anchor tag with attributes.
	// If submenu icons are set to show, we also render a submenu button, so the submenu can be opened on click.
	if ( ! $open_on_click ) {
		$item_url = isset( $attributes['url'] ) ? $attributes['url'] : '';
		// Start appending HTML attributes to anchor tag.
		$html .= '<a class="premium-navigation-item__content" href="' . esc_url( $item_url ) . '"';

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

		if ( $navigation_link_icon ) {
			$html .= '<span class="pbg-navigation-link-icon ' . esc_attr( $navigation_link_icon ) . '"></span>';
		}

		$html .= $label;

		if ( $navigation_link_badge ) {
			$html .= '<span class="pbg-navigation-link-label" ' . ( $badge_style ? 'style="' . esc_attr( $badge_style ) . '"' : '' ) . '>' . esc_html( $navigation_link_badge ) . '</span>';
		}

		if ( $show_submenu_indicators ) {
			// The submenu icon is rendered in a button here
			// so that there's a clickable element to open the submenu.
			$html .= '<button aria-label="' . esc_attr( $aria_label ) . '" class="premium-navigation__submenu-icon premium-navigation-submenu__toggle" aria-expanded="false">' . block_core_navigation_submenu_render_submenu_icon() . '</button>';
		}

		$html .= '</a>';
		// End anchor tag content.

	} else {
		// If menus open on click, we render the parent as a button.
		$html .= '<button aria-label="' . esc_attr( $aria_label ) . '" class="premium-navigation-item__content premium-navigation-submenu__toggle" aria-expanded="false">';

		if ( $navigation_link_icon ) {
			$html .= '<span class="pbg-navigation-link-icon ' . esc_attr( $navigation_link_icon ) . '"></span>';
		}

		// Wrap title with span to isolate it from submenu icon.
		$html .= '<span class="premium-navigation-item__label">';

		$html .= $label;

		$html .= '</span>';

		if ( $navigation_link_badge ) {
			$html .= '<span class="pbg-navigation-link-label" ' . ( $badge_style ? 'style="' . esc_attr( $badge_style ) . '"' : '' ) . '>' . esc_html( $navigation_link_badge ) . '</span>';
		}

		$html .= '<span class="premium-navigation__submenu-icon">' . block_core_navigation_submenu_render_submenu_icon() . '</span>';

		$html .= '</button>';

	}

	if ( $has_submenu ) {
		$inner_blocks_html = '';
		foreach ( $block->inner_blocks as $inner_block ) {
			$inner_blocks_html .= $inner_block->render();
		}

		$html .= sprintf(
			'<ul class="premium-navigation__submenu-container' . ( $mega_menu ? ' layout-' . esc_attr( $mega_menu_layout ) : '' ) . ( $mega_menu ? ' col-' . esc_attr( $mega_menu_columns ) : '' ) . '">%s</ul>',
			$inner_blocks_html
		);
	}

	$html .= '</li>';

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			$css = get_premium_submenu_navigation_css( $attributes, $id );
		if ( ! empty( $css ) ) {
			$block_helpers = new PBG_Blocks_Helper();
			$block_helpers->render_inline_css( $css, $unique_id, true );
		}
	};

	return $html;
}

/**
 * Register the navigation submenu block.
 *
 * @uses render_block_premium_navigation_submenu()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_premium_navigation_submenu() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/navigation-submenu',
		array(
			'render_callback' => 'render_block_premium_navigation_submenu',
		)
	);
}
add_action( 'init', 'register_block_premium_navigation_submenu' );
