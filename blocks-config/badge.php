<?php
// Move this file to "blocks-config" folder with name "badge.php".

/**
 * Server-side rendering of the `premium/badge` block.
 *
 * @package WordPress
 */

function get_premium_badge_css( $attributes, $unique_id ) {
	$block_helpers          = pbg_blocks_helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	// Desktop Styles.
	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];

		$css->set_selector( ".{$unique_id} span" );
		$css->render_typography( $typography, 'Desktop' );
	}

	$css->start_media_query( $media_query['tablet'] );
	// Tablet Styles.
	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];

		$css->set_selector( ".{$unique_id} span" );
		$css->render_typography( $typography, 'Tablet' );
	}

	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );
	// Mobile Styles.
	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];

		$css->set_selector( ".{$unique_id} span" );
		$css->render_typography( $typography, 'Mobile' );
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
function render_block_pbg_badge( $attributes, $content, $block ) {

	$unique_id = rand( 100, 10000 );
	$id        = 'premium-navigation-' . esc_attr( $unique_id );
	$block_id  = ( ! empty( $attributes['blockId'] ) ) ? $attributes['blockId'] : $id;

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
		$css = get_premium_badge_css( $attributes, $block_id );
		if ( ! empty( $css ) ) {
			$block_helpers = pbg_blocks_helper();
			$block_helpers->render_inline_css( $css, $unique_id, true );
		}
	};

	// Block css file from 'assets/css' after run grunt task.
	wp_enqueue_style(
		'pbg-badge-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/badge.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);

	return $content;
}


/**
 * Register the Badge block.
 *
 * @uses render_block_pbg_badge()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_badge() {
	register_block_type(
		'premium/badge',
		array(
			'render_callback' => 'render_block_pbg_badge',
		)
	);
}

add_action( 'init', 'register_block_pbg_badge' );

register_block_pbg_badge();

