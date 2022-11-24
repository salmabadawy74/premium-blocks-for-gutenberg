<?php
/**
 * Server-side rendering of the `pbg/testimonials` block.
 *
 * @package WordPress
 */

/**
 * Get Testimonials Block CSS
 *
 * Return Frontend CSS for Testimonials.
 *
 * @access public
 *
 * @param string $attr option attribute.
 * @param string $unique_id option For block ID.
 */
function get_premium_testimonials_css_style( $attr, $unique_id ) {
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	// Align
	if ( isset( $attr['align'] ) ) {
		$css->set_selector( $unique_id . ' .premium-testimonial__content' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
	}

	// Author Style FontSize.
	if ( isset( $attr['authorTypography'] ) ) {
		$author_typography = $attr['authorTypography'];
		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author' );
		$css->render_typography( $author_typography, 'Desktop' );
	}

	if ( isset( $attr['imageBorder'] ) ) {
		$image_border        = $attr['imageBorder'];
		$image_border_width  = $image_border['borderWidth'];
		$image_border_radius = $image_border['borderRadius'];

		$css->set_selector( $unique_id . ' .premium-testimonial__img_wrap .premium-testimonial__img' );
		$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Desktop'], 'px' ) );
	}

	// Company Style FontSize.
	if ( isset( $attr['companyTypography'] ) ) {
		$company_typography = $attr['companyTypography'];

		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . ' > .premium-testimonial__link_wrap' . '> .premium-testimonial__author_comp' );
		$css->render_typography( $company_typography, 'Desktop' );
	}

	// Body Style FontSize.
	if ( isset( $attr['bodyTypography'] ) ) {
		$body_typography = $attr['bodyTypography'];
		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
		$css->render_typography( $body_typography, 'Desktop' );
	}

	if ( isset( $attr['bodyMargin'] ) ) {
		$margin = $attr['bodyMargin'];
		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
		$css->add_property( 'margin', $css->render_spacing( $margin['Desktop'], $margin['unit'] ) );
	}

	// Container Style
	if ( isset( $attr['padding'] ) ) {
		$padding = $attr['padding'];
		$css->set_selector( $unique_id );
		$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	// Align
	if ( isset( $attr['align'] ) ) {

		$css->set_selector( $unique_id . ' .premium-testimonial__content' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
	}

	// Author Style FontSize.
	if ( isset( $attr['authorTypography'] ) ) {
		$author_typography = $attr['authorTypography'];

		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author' );
		$css->render_typography( $author_typography, 'Tablet' );
	}

	if ( isset( $attr['imageBorder'] ) ) {
		$image_border        = $attr['imageBorder'];
		$image_border_width  = $image_border['borderWidth'];
		$image_border_radius = $image_border['borderRadius'];

		$css->set_selector( $unique_id . ' .premium-testimonial__img_wrap .premium-testimonial__img' );
		$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Tablet'], 'px' ) );
	}

	// Company Style FontSize.
	if ( isset( $attr['companyTypography'] ) ) {
		$company_typography = $attr['companyTypography'];

		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . ' > .premium-testimonial__link_wrap' . '> .premium-testimonial__author_comp' );
		$css->render_typography( $company_typography, 'Tablet' );
	}

	// Body Style FontSize.
	if ( isset( $attr['bodyTypography'] ) ) {
		$body_typography = $attr['bodyTypography'];

		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
		$css->render_typography( $body_typography, 'Tablet' );
	}

	if ( isset( $attr['bodyMargin'] ) ) {
		$margin = $attr['bodyMargin'];
		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
		$css->add_property( 'margin', $css->render_spacing( $margin['Tablet'], $margin['unit'] ) );
	}

	// Container Style
	if ( isset( $attr['padding'] ) ) {
		$padding = $attr['padding'];
		$css->set_selector( $unique_id );
		$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
	}
	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );

	// Align
	if ( isset( $attr['align'] ) ) {

		$css->set_selector( $unique_id . ' .premium-testimonial__content' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
	}

	// Author Style FontSize.
	if ( isset( $attr['authorTypography'] ) ) {
		$author_typography = $attr['authorTypography'];

		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author' );
		$css->render_typography( $author_typography, 'Mobile' );
	}

	if ( isset( $attr['imageBorder'] ) ) {
		$image_border        = $attr['imageBorder'];
		$image_border_width  = $image_border['borderWidth'];
		$image_border_radius = $image_border['borderRadius'];

		$css->set_selector( $unique_id . ' .premium-testimonial__img_wrap .premium-testimonial__img' );
		$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Mobile'], 'px' ) );
	}

	// Company Style FontSize.
	if ( isset( $attr['companyTypography'] ) ) {
		$company_typography = $attr['companyTypography'];

		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . ' > .premium-testimonial__link_wrap' . '> .premium-testimonial__author_comp' );
		$css->render_typography( $company_typography, 'Mobile' );
	}

	// Body Style FontSize.
	if ( isset( $attr['bodyTypography'] ) ) {
		$body_typography = $attr['bodyTypography'];

		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
		$css->render_typography( $body_typography, 'Mobile' );
	}

	if ( isset( $attr['bodyMargin'] ) ) {
		$margin = $attr['bodyMargin'];
		$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
		$css->add_property( 'margin', $css->render_spacing( $margin['Mobile'], $margin['unit'] ) );
	}

	// Container Style
	if ( isset( $attr['padding'] ) ) {
		$padding = $attr['padding'];
		$css->set_selector( $unique_id );
		$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
	}
	$css->stop_media_query();
	return $css->css_output();
}

/**
 * Renders the `premium/testimonials` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_testimonials( $attributes, $content, $block ) {
	$block_helpers = pbg_blocks_helper();
	if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
		$unique_id = "#premium-testimonial-{$attributes['block_id']}";
	}

	if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
		$unique_id = ".{$attributes['blockId']}";
	}
	wp_enqueue_style(
		'pbg-testimonials-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/testimonials.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);
	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'testimonials', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_premium_testimonials_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			if ( $block_helpers->should_render_inline( 'testimonials', $unique_id ) ) {
				$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
			} else {
				$block_helpers->render_inline_css( $css, $style_id, true );
			}
		}
	};

	return $content;
}




/**
 * Register the testimonials block.
 *
 * @uses render_block_pbg_testimonials()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_testimonials() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type(
		PREMIUM_BLOCKS_PATH . '/blocks-config/testimonials',
		array(
			'render_callback' => 'render_block_pbg_testimonials',
		)
	);
}

register_block_pbg_testimonials();
