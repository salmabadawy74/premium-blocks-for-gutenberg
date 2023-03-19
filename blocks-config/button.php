<?php
// Move this file to "blocks-config" folder with name "badge.php".

/**
 * Server-side rendering of the `premium/badge` block.
 *
 * @package WordPress
 */

function get_premium_button_css_style( $attr, $unique_id ) {
	$block_helpers          = pbg_blocks_helper();
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

	if ( isset( $attr['margin'] ) ) {
		$margin = $attr['margin'];
		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'margin', $css->render_spacing( $margin['Desktop'], $margin['unit'] ) );
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
	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' );
		$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Desktop' ) );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	}
	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' . '> svg' );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	}
	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' . '> svg' );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	}
	if ( isset( $attr['iconSpacing'] ) ) {
		$icon_spacing = $attr['iconSpacing'];
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' );
		$css->add_property( 'margin', $css->render_spacing( $icon_spacing['Desktop'], $icon_spacing['unit'] ) );
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

	if ( isset( $attr['margin'] ) ) {
		$margin = $attr['margin'];
		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'margin', $css->render_spacing( $margin['Tablet'], $margin['unit'] ) );
	}

	if ( isset( $attr['border'] ) ) {
		$border        = $attr['border'];
		$border_width  = $border['borderWidth'];
		$border_radius = $border['borderRadius'];

		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
	}

	// icon styles
	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' );
		$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Tablet' ) );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	}
	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' . '> svg' );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	}
	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' . '> svg' );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	}
	if ( isset( $attr['iconSpacing'] ) ) {
		$icon_spacing = $attr['iconSpacing'];
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' );
		$css->add_property( 'margin', $css->render_spacing( $icon_spacing['Tablet'], $icon_spacing['unit'] ) );
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

	if ( isset( $attr['margin'] ) ) {
		$margin = $attr['margin'];
		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'margin', $css->render_spacing( $margin['Mobile'], $margin['unit'] ) );
	}

	if ( isset( $attr['border'] ) ) {
		$border        = $attr['border'];
		$border_width  = $border['borderWidth'];
		$border_radius = $border['borderRadius'];

		$css->set_selector( $unique_id . '> .premium-button' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
	}

	// icon styles
	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' );
		$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Mobile' ) );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	}
	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' . '> svg' );
		$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	}
	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' . '> svg' );
		$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	}
	if ( isset( $attr['iconSpacing'] ) ) {
		$icon_spacing = $attr['iconSpacing'];
		$css->set_selector( $unique_id . '> .premium-button' . '> .premium-button-icon' );
		$css->add_property( 'margin', $css->render_spacing( $icon_spacing['Mobile'], $icon_spacing['unit'] ) );
	}

	$css->stop_media_query();
	return $css->css_output();
}

/**
 * Renders the `premium/badge` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_button( $attributes, $content, $block ) {

	$unique_id = rand( 100, 10000 );
	$id        = 'premium-button-' . esc_attr( $unique_id );
	$block_id  = ( ! empty( $attributes['blockId'] ) ) ? $attributes['blockId'] : $id;

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'button', $unique_id ) ) {
		$css = get_premium_button_css_style( $attributes, $block_id );
		if ( ! empty( $css ) ) {
			$block_helpers = pbg_blocks_helper();
			$block_helpers->add_custom_block_css( $css );
		}
	};

	// Block css file from 'assets/css' after run grunt task.
	wp_enqueue_style(
		'pbg-button-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/button.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);

	return $content;
}


/**
 * Register the Badge block.
 *
 * @uses render_block_pbg_button()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_button() {
	register_block_type(
		'premium/button',
		array(
			'render_callback' => 'render_block_pbg_button',
			'editor_style'    => 'premium-blocks-editor-css',
			'editor_script'   => 'pbg-blocks-js',
		)
	);
}

register_block_pbg_button();

