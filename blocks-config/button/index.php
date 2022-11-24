<?php
/**
 * Server-side rendering of the `pbg/content-switcher` block.
 *
 * @package WordPress
 */

/**
 * Get Button Block CSS
 *
 * Return Frontend CSS for Button.
 *
 * @access public
 *
 * @param string $attr option attribute.
 * @param string $unique_id option For block ID.
 */
function get_premium_button_css_style( $attr, $unique_id ) {
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
	// Title Style
	if ( isset( $attr['btnAlign'] ) ) {

		$css->set_selector( $unique_id );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['btnAlign'], 'Desktop' ) );
	}
	if ( isset( $attr['typography'] ) ) {
		$typography = $attr['typography'];

		$css->set_selector( $unique_id . '> .premium-button' . '> a' );
		$css->render_typography( $typography, 'Desktop' );
	}

	if ( isset( $attr['padding'] ) ) {
		$padding = $attr['padding'];

		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
	}

	if ( isset( $attr['border'] ) ) {
		$border        = $attr['border'];
		$border_width  = $border['borderWidth'];
		$border_radius = $border['borderRadius'];

		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
	}
	// icon styles
	if ( isset( $attr['iconSize']['Desktop'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' );
		$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	}
	if ( isset( $attr['iconSize']['Desktop'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	}
	if ( isset( $attr['iconSize']['Desktop'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	// Title Style
	if ( isset( $attr['btnAlign'] ) ) {

		$css->set_selector( $unique_id );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['btnAlign'], 'Tablet' ) );
	}
	if ( isset( $attr['typography'] ) ) {
		$typography = $attr['typography'];

		$css->set_selector( $unique_id . '> .premium-button' . '> a' );
		$css->render_typography( $typography, 'Tablet' );
	}

	if ( isset( $attr['padding'] ) ) {
		$padding = $attr['padding'];

		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
	}

	if ( isset( $attr['border'] ) ) {
		$border        = $attr['border'];
		$border_width  = $border['borderWidth'];
		$border_radius = $border['borderRadius'];

		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
	}

	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );

	// Title Style
	if ( isset( $attr['btnAlign'] ) ) {

		$css->set_selector( $unique_id );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['btnAlign'], 'Mobile' ) );
	}
	if ( isset( $attr['typography'] ) ) {
		$typography = $attr['typography'];

		$css->set_selector( $unique_id . '> .premium-button' . '> a' );
		$css->render_typography( $typography, 'Mobile' );
	}

	if ( isset( $attr['padding'] ) ) {
		$padding = $attr['padding'];

		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
	}

	if ( isset( $attr['border'] ) ) {
		$border        = $attr['border'];
		$border_width  = $border['borderWidth'];
		$border_radius = $border['borderRadius'];

		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
	}
	$css->stop_media_query();
	return $css->css_output();
}

/**
 * Renders the `premium/button` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_button( $attributes, $content, $block ) {
	$block_helpers = pbg_blocks_helper();
	if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
		$unique_id = "#premium-button-wrap-{$attributes['block_id']}";
	}

	if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
		$unique_id = ".{$attributes['blockId']}";
	}

	wp_enqueue_style(
		'pbg-button-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/button.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);
	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'button', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_premium_button_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			if ( $block_helpers->should_render_inline( 'button', $unique_id ) ) {
				$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
			} else {
				$block_helpers->render_inline_css( $css, $style_id, true );
			}
		}
	};

	return $content;
}




/**
 * Register the button block.
 *
 * @uses render_block_pbg_button()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_button() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type(
		PREMIUM_BLOCKS_PATH . '/blocks-config/button',
		array(
			'render_callback' => 'render_block_pbg_button',
		)
	);
}

register_block_pbg_button();
