<?php
/**
 * Server-side rendering of the `pbg/icon` block.
 *
 * @package WordPress
 */

/**
 * Get Icon Block CSS
 *
 * Return Frontend CSS for Icon.
 *
 * @access public
 *
 * @param string $attr option attribute.
 * @param string $unique_id option For block ID.
 */
function get_premium_icon_css_style( $attr, $unique_id ) {
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	// Container Styles
	if ( isset( $attr['wrapMargin'] ) ) {
		$wrap_margin = $attr['wrapMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Desktop'], $wrap_margin['unit'] ) );
	}
	if ( isset( $attr['wrapPadding'] ) ) {
		$wrap_padding = $attr['wrapPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'padding', $css->render_spacing( $wrap_padding['Desktop'], $wrap_padding['unit'] ) );
	}
	if ( isset( $attr['containerBorder'] ) ) {
		$container_border_width  = $attr['containerBorder']['borderWidth'];
		$container_border_radius = $attr['containerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Desktop'], 'px' ) );
	}
	if ( isset( $attr['iconAlign'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Desktop' ) );
	}

	// icon Styles
	if ( isset( $attr['iconSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
		$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	}
	if ( isset( $attr['iconMargin'] ) ) {
		$icon_margin = $attr['iconMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon, ' . '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img'  );
		$css->add_property( 'margin', $css->render_spacing( $icon_margin['Desktop'], $icon_margin['unit'] ) );
	}
	if ( isset( $attr['iconPadding'] ) ) {
		$icon_padding = $attr['iconPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon, ' . '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img'  );
		$css->add_property( 'padding', $css->render_spacing( $icon_padding['Desktop'], $icon_padding['unit'] ) );
	}
	if ( isset( $attr['iconBorder'] ) ) {
		$icon_border_width  = $attr['iconBorder']['borderWidth'];
		$icon_border_radius = $attr['iconBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon, ' . '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img'  );
		$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Desktop'], 'px' ) );
	}

	//image style
	if ( isset( $attr['iconSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img' );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	// Container Styles
	if ( isset( $attr['wrapMargin'] ) ) {
		$wrap_margin = $attr['wrapMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Tablet'], $wrap_margin['unit'] ) );
	}
	if ( isset( $attr['wrapPadding'] ) ) {
		$wrap_padding = $attr['wrapPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'padding', $css->render_spacing( $wrap_padding['Tablet'], $wrap_padding['unit'] ) );
	}
	if ( isset( $attr['containerBorder'] ) ) {
		$container_border_width  = $attr['containerBorder']['borderWidth'];
		$container_border_radius = $attr['containerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Tablet'], 'px' ) );
	}
	if ( isset( $attr['iconAlign'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Tablet' ) );
	}

	// icon Styles
	if ( isset( $attr['iconSize']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
		$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	}
	if ( isset( $attr['iconMargin'] ) ) {
		$wrap_margin = $attr['iconMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon, ' . '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img'  );
		$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Tablet'], $wrap_margin['unit'] ) );
	}
	if ( isset( $attr['iconPadding'] ) ) {
		$icon_padding = $attr['iconPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon, ' . '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img'  );
		$css->add_property( 'padding', $css->render_spacing( $icon_padding['Tablet'], $icon_padding['unit'] ) );
	}
	if ( isset( $attr['iconBorder'] ) ) {
		$icon_border_width  = $attr['iconBorder']['borderWidth'];
		$icon_border_radius = $attr['iconBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon, ' . '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img'  );
		$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Tablet'], 'px' ) );
	}

	//image style
	if ( isset( $attr['iconSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img' );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	}

	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );

	// Container Styles
	if ( isset( $attr['wrapMargin'] ) ) {
		$wrap_margin = $attr['wrapMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Mobile'], $wrap_margin['unit'] ) );
	}
	if ( isset( $attr['wrapPadding'] ) ) {
		$wrap_padding = $attr['wrapPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'padding', $css->render_spacing( $wrap_padding['Mobile'], $wrap_padding['unit'] ) );
	}
	if ( isset( $attr['containerBorder'] ) ) {
		$container_border_width  = $attr['containerBorder']['borderWidth'];
		$container_border_radius = $attr['containerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Mobile'], 'px' ) );
	}
	if ( isset( $attr['iconAlign'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Mobile' ) );
	}

	// icon Styles
	if ( isset( $attr['iconSize']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
		$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	}
	if ( isset( $attr['iconMargin'] ) ) {
		$icon_margin = $attr['iconMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon, ' . '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img'  );
		$css->add_property( 'margin', $css->render_spacing( $icon_margin['Mobile'], $icon_margin['unit'] ) );
	}
	if ( isset( $attr['iconPadding'] ) ) {
		$icon_padding = $attr['iconPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon, ' . '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img'  );
		$css->add_property( 'padding', $css->render_spacing( $icon_padding['Mobile'], $icon_padding['unit'] ) );
	}
	if ( isset( $attr['iconBorder'] ) ) {
		$icon_border_width  = $attr['iconBorder']['borderWidth'];
		$icon_border_radius = $attr['iconBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon, ' . '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img'  );
		$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Mobile'], 'px' ) );
	}

	//image style
	if ( isset( $attr['iconSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > img' );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	}

	$css->stop_media_query();
	return $css->css_output();
}

/**
 * Renders the `premium/icon` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_icon( $attributes, $content, $block ) {
	$block_helpers = pbg_blocks_helper();
	if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
		$unique_id = $attributes['blockId'];
	} else {
		$unique_id = rand( 100, 10000 );
	}

	wp_enqueue_style(
		'pbg-icon-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/icon.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);
	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'icon', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_premium_icon_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			if ( $block_helpers->should_render_inline( 'icon', $unique_id ) ) {
				$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
			} else {
				$block_helpers->render_inline_css( $css, $style_id, true );
			}
		}
	};

	return $content;
}




/**
 * Register the icon block.
 *
 * @uses render_block_pbg_icon()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_icon() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type(
		PREMIUM_BLOCKS_PATH . '/blocks-config/icon',
		array(
			'render_callback' => 'render_block_pbg_icon',
		)
	);
}

register_block_pbg_icon();
