<?php
/**
 * Server-side rendering of the `pbg/video-box` block.
 *
 * @package WordPress
 */

/**
 * Get Video Box Block CSS
 *
 * Return Frontend CSS for Video Box.
 *
 * @access public
 *
 * @param string $attr option attribute.
 * @param string $unique_id option For block ID.
 */
function get_premium_video_box_css_style( $attr, $unique_id ) {
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	// Container style
	if ( isset( $attr['boxBorder'] ) ) {
		$box_border        = $attr['boxBorder'];
		$box_border_width  = $box_border['borderWidth'];
		$box_border_radius = $box_border['borderRadius'];

		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $box_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $box_border_radius['Desktop'], 'px' ) );
	}

	// icon Style
	if ( isset( $attr['playBorder'] ) ) {
		$play_border        = $attr['playBorder'];
		$play_border_width  = $play_border['borderWidth'];
		$play_border_radius = $play_border['borderRadius'];

		$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
		$css->add_property( 'border-width', $css->render_spacing( $play_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $play_border_radius['Desktop'], 'px' ) );
	}
	if ( isset( $attr['playPadding'] ) ) {
		$desc_padding = $attr['playPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
		$css->add_property( 'padding', $css->render_spacing( $desc_padding['Desktop'], $desc_padding['unit'] ) );
	}

	// Style Description.
	if ( isset( $attr['videoDescTypography'] ) ) {
		$desc_typography = $attr['videoDescTypography'];

		$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
		$css->render_typography( $desc_typography, 'Desktop' );
	}
	if ( isset( $attr['descPadding'] ) ) {
		$desc_padding = $attr['descPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
		$css->add_property( 'padding', $css->render_spacing( $desc_padding['Desktop'], $desc_padding['unit'] ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	// Container style
	if ( isset( $attr['boxBorder'] ) ) {
		$box_border        = $attr['boxBorder'];
		$box_border_width  = $box_border['borderWidth'];
		$box_border_radius = $box_border['borderRadius'];

		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $box_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $box_border_radius['Tablet'], 'px' ) );
	}

	// icon Style
	if ( isset( $attr['playBorder'] ) ) {
		$play_border        = $attr['playBorder'];
		$play_border_width  = $play_border['borderWidth'];
		$play_border_radius = $play_border['borderRadius'];

		$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
		$css->add_property( 'border-width', $css->render_spacing( $play_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $play_border_radius['Tablet'], 'px' ) );
	}
	if ( isset( $attr['playPadding'] ) ) {
		$desc_padding = $attr['playPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
		$css->add_property( 'padding', $css->render_spacing( $desc_padding['Tablet'], $desc_padding['unit'] ) );
	}

	// Style Description.
	if ( isset( $attr['videoDescTypography'] ) ) {
		$desc_typography = $attr['videoDescTypography'];

		$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
		$css->render_typography( $desc_typography, 'Tablet' );
	}
	if ( isset( $attr['descPadding'] ) ) {
		$desc_padding = $attr['descPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
		$css->add_property( 'padding', $css->render_spacing( $desc_padding['Tablet'], $desc_padding['unit'] ) );
	}

	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );

	// Container style
	if ( isset( $attr['boxBorder'] ) ) {
		$box_border        = $attr['boxBorder'];
		$box_border_width  = $box_border['borderWidth'];
		$box_border_radius = $box_border['borderRadius'];

		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $box_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $box_border_radius['Mobile'], 'px' ) );
	}

	// icon Style
	if ( isset( $attr['playBorder'] ) ) {
		$play_border        = $attr['playBorder'];
		$play_border_width  = $play_border['borderWidth'];
		$play_border_radius = $play_border['borderRadius'];

		$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
		$css->add_property( 'border-width', $css->render_spacing( $play_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $play_border_radius['Mobile'], 'px' ) );
	}
	if ( isset( $attr['playPadding'] ) ) {
		$desc_padding = $attr['playPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
		$css->add_property( 'padding', $css->render_spacing( $desc_padding['Mobile'], $desc_padding['unit'] ) );
	}

	// Style Description.
	if ( isset( $attr['videoDescTypography'] ) ) {
		$desc_typography = $attr['videoDescTypography'];

		$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
		$css->render_typography( $desc_typography, 'Mobile' );
	}
	if ( isset( $attr['descPadding'] ) ) {
		$desc_padding = $attr['descPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
		$css->add_property( 'padding', $css->render_spacing( $desc_padding['Mobile'], $desc_padding['unit'] ) );
	}

	$css->stop_media_query();
	return $css->css_output();
}

/**
 * Renders the `premium/video-box` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_video_box( $attributes, $content, $block ) {
	$block_helpers = pbg_blocks_helper();
	if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
		$unique_id = $attributes['blockId'];
	} else {
		$unique_id = rand( 100, 10000 );
	}

	if ( $block_helpers->it_is_not_amp() ) {
		wp_enqueue_script(
			'pbg-video-box',
			PREMIUM_BLOCKS_URL . 'assets/js/video-box.js',
			array( 'jquery' ),
			PREMIUM_BLOCKS_VERSION,
			true
		);
	}

	wp_enqueue_style(
		'pbg-video-box-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/video-box.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);
	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'video-box', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_premium_video_box_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			if ( $block_helpers->should_render_inline( 'video-box', $unique_id ) ) {
				$block_helpers->add_custom_block_css( $css );
			} else {
				$block_helpers->render_inline_css( $css, $style_id, true );
			}
		}
	};

	return $content;
}

/**
 * Register the video_box block.
 *
 * @uses render_block_pbg_video_box()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_video_box() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type(
		PREMIUM_BLOCKS_PATH . '/blocks-config/video-box',
		array(
			'render_callback' => 'render_block_pbg_video_box',
		)
	);
}

register_block_pbg_video_box();
