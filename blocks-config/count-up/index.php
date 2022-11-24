<?php
/**
 * Server-side rendering of the `pbg/count-up` block.
 *
 * @package WordPress
 */

/**
 * Get Count Up Block CSS
 *
 * Return Frontend CSS for Count Up.
 *
 * @access public
 *
 * @param string $attr option attribute.
 * @param string $unique_id option For block ID.
 */
function get_premium_count_up_css_style( $attr, $unique_id ) {
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	// Container Style
	if ( isset( $attr['padding'] ) ) {
		$padding = $attr['padding'];
		$css->set_selector( $unique_id );
		$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
	}
	// Align.
	if ( isset( $attr['align'] ) ) {
		$css->set_selector( $unique_id );
		$css->add_property( 'justify-content', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
	}
	// Border.
	if ( isset( $attr['border'] ) ) {
		$border        = $attr['border'];
		$border_width  = $border['borderWidth'];
		$border_radius = $border['borderRadius'];

		$css->set_selector( $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
	}

	if ( isset( $attr['selfAlign'] ) ) {
		$css->set_selector( $unique_id . ' .premium-countup__info, ' . $unique_id . ' .premium-countup__title' );
		$css->add_property( 'align-self', $css->get_responsive_css( $attr['selfAlign'], 'Desktop' ) );
	}
	if ( isset( $attr['selfAlign'] ) ) {
		$align      = $css->get_responsive_css( $attr['selfAlign'], 'Desktop' );
		$flex_align = ( isset( $attr['flexDir'] ) && $attr['flexDir'] == 'row-reverse' ) ? 'center' : $align;
		$flex_align = ( isset( $attr['flexDir'] ) && $attr['flexDir'] == 'row' ? 'center' : $flex_align );

		$css->set_selector( $unique_id . ' .premium-countup__icon_wrap ' );
		$css->add_property( 'align-self', $flex_align );
	}

	if ( isset( $attr['iconMargin'] ) ) {
		$wrap_margin = $attr['iconMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__icon_wrap' );
		$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Desktop'], $wrap_margin['unit'] ) );
	}

	// Number Style
	if ( isset( $attr['numberTypography'] ) ) {
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
		$css->render_typography( $attr['numberTypography'], 'Desktop' );
	}
	if ( isset( $attr['numberMargin'] ) ) {
		$number_margin = $attr['numberMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
		$css->add_property( 'margin', $css->render_spacing( $number_margin['Desktop'], $number_margin['unit'] ) );
	}
	if ( isset( $attr['numberPadding'] ) ) {
		$number_padding = $attr['numberPadding'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
		$css->add_property( 'padding', $css->render_spacing( $number_padding['Desktop'], $number_padding['unit'] ) );
	}

	// Title Style
	if ( isset( $attr['titleTypography'] ) ) {
		$css->set_selector( $unique_id . ' > .premium-countup__title' );
		$css->render_typography( $attr['titleTypography'], 'Desktop' );
	}
	if ( isset( $attr['titleMargin'] ) ) {
		$title_margin = $attr['titleMargin'];
		$css->set_selector( $unique_id . ' > .premium-countup__title' );
		$css->add_property( 'margin', $css->render_spacing( $title_margin['Desktop'], $title_margin['unit'] ) );
	}
	if ( isset( $attr['titlePadding'] ) ) {
		$title_padding = $attr['titlePadding'];
		$css->set_selector( $unique_id . ' > .premium-countup__title' );
		$css->add_property( 'padding', $css->render_spacing( $title_padding['Desktop'], $title_padding['unit'] ) );
	}

	// Prefix Style
	if ( isset( $attr['prefixTypography'] ) ) {
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
		$css->render_typography( $attr['prefixTypography'], 'Desktop' );
	}
	if ( isset( $attr['prefixMargin'] ) ) {
		$prefix_margin = $attr['prefixMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
		$css->add_property( 'margin', $css->render_spacing( $prefix_margin['Desktop'], $prefix_margin['unit'] ) );
	}
	if ( isset( $attr['prefixPadding'] ) ) {
		$prefix_padding = $attr['prefixPadding'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
		$css->add_property( 'padding', $css->render_spacing( $prefix_padding['Desktop'], $prefix_padding['unit'] ) );
	}

	// Suffix Style
	if ( isset( $attr['suffixTypography'] ) ) {
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
		$css->render_typography( $attr['suffixTypography'], 'Desktop' );
	}
	if ( isset( $attr['suffixMargin'] ) ) {
		$suffix_margin = $attr['suffixMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
		$css->add_property( 'margin', $css->render_spacing( $suffix_margin['Desktop'], $suffix_margin['unit'] ) );
	}
	if ( isset( $attr['suffixPadding'] ) ) {
		$suffix_padding = $attr['suffixPadding'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
		$css->add_property( 'padding', $css->render_spacing( $suffix_padding['Desktop'], $suffix_padding['unit'] ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	// Container Style
	if ( isset( $attr['padding'] ) ) {
		$padding = $attr['padding'];
		$css->set_selector( $unique_id );
		$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
	}
	// Align.
	if ( isset( $attr['align'] ) ) {
		$css->set_selector( $unique_id );
		$css->add_property( 'justify-content', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
	}
	// Border.
	if ( isset( $attr['border'] ) ) {
		$border        = $attr['border'];
		$border_width  = $border['borderWidth'];
		$border_radius = $border['borderRadius'];

		$css->set_selector( $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
	}

	if ( isset( $attr['selfAlign'] ) ) {
		$css->set_selector( $unique_id . ' .premium-countup__info, ' . $unique_id . ' .premium-countup__title' );
		$css->add_property( 'align-self', $css->get_responsive_css( $attr['selfAlign'], 'Tablet' ) );
	}
	if ( isset( $attr['selfAlign'] ) ) {
		$align      = $css->get_responsive_css( $attr['selfAlign'], 'Tablet' );
		$flex_align = ( isset( $attr['flexDir'] ) && $attr['flexDir'] == 'row-reverse' ) ? 'center' : $align;
		$flex_align = ( isset( $attr['flexDir'] ) && $attr['flexDir'] == 'row' ? 'center' : $flex_align );

		$css->set_selector( $unique_id . ' .premium-countup__icon_wrap ' );
		$css->add_property( 'align-self', $flex_align );
	}

	if ( isset( $attr['iconMargin'] ) ) {
		$wrap_margin = $attr['iconMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__icon_wrap' );
		$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Tablet'], $wrap_margin['unit'] ) );
	}

	// Number Style
	if ( isset( $attr['numberTypography'] ) ) {
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
		$css->render_typography( $attr['numberTypography'], 'Tablet' );
	}
	if ( isset( $attr['numberMargin'] ) ) {
		$number_margin = $attr['numberMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
		$css->add_property( 'margin', $css->render_spacing( $number_margin['Tablet'], $number_margin['unit'] ) );
	}
	if ( isset( $attr['numberPadding'] ) ) {
		$number_padding = $attr['numberPadding'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
		$css->add_property( 'padding', $css->render_spacing( $number_padding['Tablet'], $number_padding['unit'] ) );
	}

	// Title Style
	if ( isset( $attr['titleTypography'] ) ) {
		$css->set_selector( $unique_id . ' > .premium-countup__title' );
		$css->render_typography( $attr['titleTypography'], 'Tablet' );
	}
	if ( isset( $attr['titleMargin'] ) ) {
		$title_margin = $attr['titleMargin'];
		$css->set_selector( $unique_id . ' > .premium-countup__title' );
		$css->add_property( 'margin', $css->render_spacing( $title_margin['Tablet'], $title_margin['unit'] ) );
	}
	if ( isset( $attr['titlePadding'] ) ) {
		$title_padding = $attr['titlePadding'];
		$css->set_selector( $unique_id . ' > .premium-countup__title' );
		$css->add_property( 'padding', $css->render_spacing( $title_padding['Tablet'], $title_padding['unit'] ) );
	}

	// Prefix Style
	if ( isset( $attr['prefixTypography'] ) ) {
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
		$css->render_typography( $attr['prefixTypography'], 'Tablet' );
	}
	if ( isset( $attr['prefixMargin'] ) ) {
		$prefix_margin = $attr['prefixMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
		$css->add_property( 'margin', $css->render_spacing( $prefix_margin['Tablet'], $prefix_margin['unit'] ) );
	}
	if ( isset( $attr['prefixPadding'] ) ) {
		$prefix_padding = $attr['prefixPadding'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
		$css->add_property( 'padding', $css->render_spacing( $prefix_padding['Tablet'], $prefix_padding['unit'] ) );
	}

	// Suffix Style
	if ( isset( $attr['suffixTypography'] ) ) {
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
		$css->render_typography( $attr['suffixTypography'], 'Tablet' );
	}
	if ( isset( $attr['suffixMargin'] ) ) {
		$suffix_margin = $attr['suffixMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
		$css->add_property( 'margin', $css->render_spacing( $suffix_margin['Tablet'], $suffix_margin['unit'] ) );
	}
	if ( isset( $attr['suffixPadding'] ) ) {
		$suffix_padding = $attr['suffixPadding'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
		$css->add_property( 'padding', $css->render_spacing( $suffix_padding['Tablet'], $suffix_padding['unit'] ) );
	}

	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );

	// Container Style
	if ( isset( $attr['padding'] ) ) {
		$padding = $attr['padding'];
		$css->set_selector( $unique_id );
		$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
	}
	// Align.
	if ( isset( $attr['align'] ) ) {
		$css->set_selector( $unique_id );
		$css->add_property( 'justify-content', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
	}
	// Border.
	if ( isset( $attr['border'] ) ) {
		$border        = $attr['border'];
		$border_width  = $border['borderWidth'];
		$border_radius = $border['borderRadius'];

		$css->set_selector( $unique_id );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
	}

	if ( isset( $attr['selfAlign'] ) ) {
		$css->set_selector( $unique_id . ' .premium-countup__info, ' . $unique_id . ' .premium-countup__title' );
		$css->add_property( 'align-self', $css->get_responsive_css( $attr['selfAlign'], 'Mobile' ) );
	}
	if ( isset( $attr['selfAlign'] ) ) {
		$align      = $css->get_responsive_css( $attr['selfAlign'], 'Mobile' );
		$flex_align = ( isset( $attr['flexDir'] ) && $attr['flexDir'] == 'row-reverse' ) ? 'center' : $align;
		$flex_align = ( isset( $attr['flexDir'] ) && $attr['flexDir'] == 'row' ? 'center' : $flex_align );

		$css->set_selector( $unique_id . ' .premium-countup__icon_wrap ' );
		$css->add_property( 'align-self', $flex_align );
	}

	if ( isset( $attr['iconMargin'] ) ) {
		$wrap_margin = $attr['iconMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__icon_wrap' );
		$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Mobile'], $wrap_margin['unit'] ) );
	}

	// Number Style
	if ( isset( $attr['numberTypography'] ) ) {
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
		$css->render_typography( $attr['numberTypography'], 'Mobile' );
	}
	if ( isset( $attr['numberMargin'] ) ) {
		$number_margin = $attr['numberMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
		$css->add_property( 'margin', $css->render_spacing( $number_margin['Mobile'], $number_margin['unit'] ) );
	}
	if ( isset( $attr['numberPadding'] ) ) {
		$number_padding = $attr['numberPadding'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
		$css->add_property( 'padding', $css->render_spacing( $number_padding['Mobile'], $number_padding['unit'] ) );
	}

	// Title Style
	if ( isset( $attr['titleTypography'] ) ) {
		$css->set_selector( $unique_id . ' > .premium-countup__title' );
		$css->render_typography( $attr['titleTypography'], 'Mobile' );
	}
	if ( isset( $attr['titleMargin'] ) ) {
		$title_margin = $attr['titleMargin'];
		$css->set_selector( $unique_id . ' > .premium-countup__title' );
		$css->add_property( 'margin', $css->render_spacing( $title_margin['Mobile'], $title_margin['unit'] ) );
	}
	if ( isset( $attr['titlePadding'] ) ) {
		$title_padding = $attr['titlePadding'];
		$css->set_selector( $unique_id . ' > .premium-countup__title' );
		$css->add_property( 'padding', $css->render_spacing( $title_padding['Mobile'], $title_padding['unit'] ) );
	}

	// Prefix Style
	if ( isset( $attr['prefixTypography'] ) ) {
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
		$css->render_typography( $attr['prefixTypography'], 'Mobile' );
	}
	if ( isset( $attr['prefixMargin'] ) ) {
		$prefix_margin = $attr['prefixMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
		$css->add_property( 'margin', $css->render_spacing( $prefix_margin['Mobile'], $prefix_margin['unit'] ) );
	}
	if ( isset( $attr['prefixPadding'] ) ) {
		$prefix_padding = $attr['prefixPadding'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
		$css->add_property( 'padding', $css->render_spacing( $prefix_padding['Mobile'], $prefix_padding['unit'] ) );
	}

	// Suffix Style
	if ( isset( $attr['suffixTypography'] ) ) {
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
		$css->render_typography( $attr['suffixTypography'], 'Mobile' );
	}
	if ( isset( $attr['suffixMargin'] ) ) {
		$suffix_margin = $attr['suffixMargin'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
		$css->add_property( 'margin', $css->render_spacing( $suffix_margin['Mobile'], $suffix_margin['unit'] ) );
	}
	if ( isset( $attr['suffixPadding'] ) ) {
		$suffix_padding = $attr['suffixPadding'];
		$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
		$css->add_property( 'padding', $css->render_spacing( $suffix_padding['Mobile'], $suffix_padding['unit'] ) );
	}

	$css->stop_media_query();
	return $css->css_output();
}

/**
 * Renders the `premium/count-up` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_count_up( $attributes, $content, $block ) {
	$block_helpers = pbg_blocks_helper();
	if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
		$unique_id = "#premium-countup-{$attributes['block_id']}";
	}

	if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
		$unique_id = ".{$attributes['blockId']}";
	}

	if ( $block_helpers->it_is_not_amp() ) {
		wp_enqueue_script(
			'pbg-waypoints',
			PREMIUM_BLOCKS_URL . 'assets/js/lib/jquery.waypoints.js',
			array( 'jquery' ),
			PREMIUM_BLOCKS_VERSION,
			true
		);
		wp_enqueue_script(
			'pbg-counter',
			PREMIUM_BLOCKS_URL . 'assets/js/lib/countUpmin.js',
			array( 'jquery' ),
			PREMIUM_BLOCKS_VERSION,
			true
		);
		wp_enqueue_script(
			'pbg-countup',
			PREMIUM_BLOCKS_URL . 'assets/js/countup.js',
			array( 'jquery' ),
			PREMIUM_BLOCKS_VERSION,
			true
		);
	}

	wp_enqueue_style(
		'pbg-count-up-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/count-up.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);
	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'count-up', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_premium_count_up_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			if ( $block_helpers->should_render_inline( 'count-up', $unique_id ) ) {
				$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
			} else {
				$block_helpers->render_inline_css( $css, $style_id, true );
			}
		}
	};

	return $content;
}




/**
 * Register the count_up block.
 *
 * @uses render_block_pbg_count_up()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_count_up() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type(
		PREMIUM_BLOCKS_PATH . '/blocks-config/count-up',
		array(
			'render_callback' => 'render_block_pbg_count_up',
		)
	);
}

register_block_pbg_count_up();
