<?php
// Move this file to "blocks-config" folder with name "price.php".

/**
 * Server-side rendering of the `premium/price` block.
 *
 * @package WordPress
 */

function get_premium_price_css( $attributes, $unique_id ) {
	$block_helpers          = pbg_blocks_helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	// Desktop Styles.
	// Container.
	if ( isset( $attributes['padding'] ) ) {
		$padding = $attributes['padding'];

		$css->set_selector( ".{$unique_id}" );
		$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
	}

	if ( isset( $attributes['margin'] ) ) {
		$margin = $attributes['margin'];

		$css->set_selector( ".{$unique_id}" );
		$css->add_property( 'margin', $css->render_spacing( $margin['Desktop'], $margin['unit'] ) );
	}
	if ( isset( $attributes['align'] ) ) {
		$align = $css->get_responsive_css( $attributes['align'], 'Desktop' );

		$css->set_selector( ".{$unique_id}" );
		$css->add_property( 'justify-content', $align );
	}
	// Slashed Price.
	if ( isset( $attributes['slashedTypography'] ) ) {
		$slashed_typography = $attributes['slashedTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-slash" );
		$css->render_typography( $slashed_typography, 'Desktop' );
	}

	if ( isset( $attributes['slashedAlign'] ) ) {
		$slashed_align = $attributes['slashedAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-slash" );
		$css->add_property( 'align-self', $css->get_responsive_css( $slashed_align, 'Desktop' ) );
	}
	// Currency.
	if ( isset( $attributes['currencyTypography'] ) ) {
		$currency_typography = $attributes['currencyTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-currency" );
		$css->render_typography( $currency_typography, 'Desktop' );
	}

	if ( isset( $attributes['currencyAlign'] ) ) {
		$currency_align = $attributes['currencyAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-currency" );
		$css->add_property( 'align-self', $css->get_responsive_css( $currency_align, 'Desktop' ) );
	}
	// Price.
	if ( isset( $attributes['priceTypography'] ) ) {
		$price_typography = $attributes['priceTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-val" );
		$css->render_typography( $price_typography, 'Desktop' );
	}

	if ( isset( $attributes['priceAlign'] ) ) {
		$price_align = $attributes['priceAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-val" );
		$css->add_property( 'align-self', $css->get_responsive_css( $price_align, 'Desktop' ) );
	}
	// Divider.
	if ( isset( $attributes['dividerTypography'] ) ) {
		$divider_typography = $attributes['dividerTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-divider" );
		$css->render_typography( $divider_typography, 'Desktop' );
	}

	if ( isset( $attributes['dividerAlign'] ) ) {
		$divider_align = $attributes['dividerAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-divider" );
		$css->add_property( 'align-self', $css->get_responsive_css( $divider_align, 'Desktop' ) );
	}
	// Duration.
	if ( isset( $attributes['durationTypography'] ) ) {
		$duration_typography = $attributes['durationTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-dur" );
		$css->render_typography( $duration_typography, 'Desktop' );
	}

	if ( isset( $attributes['durationAlign'] ) ) {
		$duration_align = $attributes['durationAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-dur" );
		$css->add_property( 'align-self', $css->get_responsive_css( $duration_align, 'Desktop' ) );
	}

	$css->start_media_query( $media_query['tablet'] );
	// Tablet Styles.
	// Container.
	if ( isset( $attributes['padding'] ) ) {
		$padding = $attributes['padding'];

		$css->set_selector( ".{$unique_id}" );
		$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
	}

	if ( isset( $attributes['margin'] ) ) {
		$margin = $attributes['margin'];

		$css->set_selector( ".{$unique_id}" );
		$css->add_property( 'margin', $css->render_spacing( $margin['Tablet'], $margin['unit'] ) );
	}
	if ( isset( $attributes['align'] ) ) {
		$align = $css->get_responsive_css( $attributes['align'], 'Tablet' );

		$css->set_selector( ".{$unique_id}" );
		$css->add_property( 'justify-content', $align );
	}
	// Slashed Price.
	if ( isset( $attributes['slashedTypography'] ) ) {
		$slashed_typography = $attributes['slashedTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-slash" );
		$css->render_typography( $slashed_typography, 'Tablet' );
	}

	if ( isset( $attributes['slashedAlign'] ) ) {
		$slashed_align = $attributes['slashedAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-slash" );
		$css->add_property( 'align-self', $css->get_responsive_css( $slashed_align, 'Tablet' ) );
	}
	// Currency.
	if ( isset( $attributes['currencyTypography'] ) ) {
		$currency_typography = $attributes['currencyTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-currency" );
		$css->render_typography( $currency_typography, 'Tablet' );
	}

	if ( isset( $attributes['currencyAlign'] ) ) {
		$currency_align = $attributes['currencyAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-currency" );
		$css->add_property( 'align-self', $css->get_responsive_css( $currency_align, 'Tablet' ) );
	}
	// Price.
	if ( isset( $attributes['priceTypography'] ) ) {
		$price_typography = $attributes['priceTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-val" );
		$css->render_typography( $price_typography, 'Tablet' );
	}

	if ( isset( $attributes['priceAlign'] ) ) {
		$price_align = $attributes['priceAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-val" );
		$css->add_property( 'align-self', $css->get_responsive_css( $price_align, 'Tablet' ) );
	}
	// Divider.
	if ( isset( $attributes['dividerTypography'] ) ) {
		$divider_typography = $attributes['dividerTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-divider" );
		$css->render_typography( $divider_typography, 'Tablet' );
	}

	if ( isset( $attributes['dividerAlign'] ) ) {
		$divider_align = $attributes['dividerAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-divider" );
		$css->add_property( 'align-self', $css->get_responsive_css( $divider_align, 'Tablet' ) );
	}
	// Duration.
	if ( isset( $attributes['durationTypography'] ) ) {
		$duration_typography = $attributes['durationTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-dur" );
		$css->render_typography( $duration_typography, 'Tablet' );
	}

	if ( isset( $attributes['durationAlign'] ) ) {
		$duration_align = $attributes['durationAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-dur" );
		$css->add_property( 'align-self', $css->get_responsive_css( $duration_align, 'Tablet' ) );
	}

	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );
	// Mobile Styles.
	// Container.
	if ( isset( $attributes['padding'] ) ) {
		$padding = $attributes['padding'];

		$css->set_selector( ".{$unique_id}" );
		$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
	}

	if ( isset( $attributes['margin'] ) ) {
		$margin = $attributes['margin'];

		$css->set_selector( ".{$unique_id}" );
		$css->add_property( 'margin', $css->render_spacing( $margin['Mobile'], $margin['unit'] ) );
	}
	if ( isset( $attributes['align'] ) ) {
		$align = $css->get_responsive_css( $attributes['align'], 'Mobile' );

		$css->set_selector( ".{$unique_id}" );
		$css->add_property( 'justify-content', $align );
	}
	// Slashed Price.
	if ( isset( $attributes['slashedTypography'] ) ) {
		$slashed_typography = $attributes['slashedTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-slash" );
		$css->render_typography( $slashed_typography, 'Mobile' );
	}

	if ( isset( $attributes['slashedAlign'] ) ) {
		$slashed_align = $attributes['slashedAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-slash" );
		$css->add_property( 'align-self', $css->get_responsive_css( $slashed_align, 'Mobile' ) );
	}
	// Currency.
	if ( isset( $attributes['currencyTypography'] ) ) {
		$currency_typography = $attributes['currencyTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-currency" );
		$css->render_typography( $currency_typography, 'Mobile' );
	}

	if ( isset( $attributes['currencyAlign'] ) ) {
		$currency_align = $attributes['currencyAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-currency" );
		$css->add_property( 'align-self', $css->get_responsive_css( $currency_align, 'Mobile' ) );
	}
	// Price.
	if ( isset( $attributes['priceTypography'] ) ) {
		$price_typography = $attributes['priceTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-val" );
		$css->render_typography( $price_typography, 'Mobile' );
	}

	if ( isset( $attributes['priceAlign'] ) ) {
		$price_align = $attributes['priceAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-val" );
		$css->add_property( 'align-self', $css->get_responsive_css( $price_align, 'Mobile' ) );
	}
	// Divider.
	if ( isset( $attributes['dividerTypography'] ) ) {
		$divider_typography = $attributes['dividerTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-divider" );
		$css->render_typography( $divider_typography, 'Mobile' );
	}

	if ( isset( $attributes['dividerAlign'] ) ) {
		$divider_align = $attributes['dividerAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-divider" );
		$css->add_property( 'align-self', $css->get_responsive_css( $divider_align, 'Mobile' ) );
	}
	// Duration.
	if ( isset( $attributes['durationTypography'] ) ) {
		$duration_typography = $attributes['durationTypography'];

		$css->set_selector( ".{$unique_id} .premium-pricing-dur" );
		$css->render_typography( $duration_typography, 'Mobile' );
	}

	if ( isset( $attributes['durationAlign'] ) ) {
		$duration_align = $attributes['durationAlign'];

		$css->set_selector( ".{$unique_id} .premium-pricing-dur" );
		$css->add_property( 'align-self', $css->get_responsive_css( $duration_align, 'Mobile' ) );
	}

	$css->stop_media_query();

	return $css->css_output();
}

/**
 * Renders the `premium/price` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_price( $attributes, $content, $block ) {

	$unique_id = rand( 100, 10000 );
	$id        = 'premium-navigation-' . esc_attr( $unique_id );
	$block_id  = ( ! empty( $attributes['blockId'] ) ) ? $attributes['blockId'] : $id;

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
		$css = get_premium_price_css( $attributes, $block_id );
		if ( ! empty( $css ) ) {
			$block_helpers = pbg_blocks_helper();
			$block_helpers->render_inline_css( $css, $unique_id, true );
		}
	};

	// Block css file from "assets/css" after run grunt task.
	wp_enqueue_style(
		'pbg-price-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/price.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);

	return $content;
}


/**
 * Register the Price block.
 *
 * @uses render_block_pbg_price()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_price() {
	register_block_type(
		'premium/price',
		array(
			'render_callback' => 'render_block_pbg_price',
		)
	);
}

add_action( 'init', 'register_block_pbg_price' );


register_block_pbg_price();
