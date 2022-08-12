<?php
/**
 * Server-side rendering of the `pbg/breadcrumbs` block.
 *
 * @package WordPress
 */

function get_trigger_css_style( $attr, $unique_id ) {
	$block_helpers          = pbg_blocks_helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button svg' );
		$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	}

	if ( isset( $attr['iconAlignment'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-trigger-icon-container' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlignment'], 'Desktop' ) );
	}

	if ( isset( $attr['labelTypography'] ) ) {
		$typography = $attr['labelTypography'];
		$css->set_selector( '.' . $unique_id . ' .trigger-label' );
		$css->render_typography( $typography, 'Desktop' );
	}

	if ( isset( $attr['triggerSpacing'] ) ) {
		$padding = $attr['triggerSpacing'];
		$css->set_selector( '.' . $unique_id . ' .premium-trigger-canvas-container .premium-popup-content' );
		$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
	}

	if ( isset( $attr['triggerBorder'] ) ) {
		$border        = $attr['triggerBorder'];
		$border_width  = $attr['triggerBorder']['borderWidth'];
		$border_radius = $attr['triggerBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], ' . '.' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
	}

	if ( isset( $attr['hOffset']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . '.float-position-topright, .' . $unique_id . '.float-position-topleft' );
		$css->add_property( 'top', ( $attr['vOffset']['Desktop'] . ( isset( $attr['vOffset']['unit'] ) ? $attr['vOffset']['unit'] : 'px' ) . '!important' ) );
		$css->set_selector( '.' . $unique_id . '.float-position-bottomright, .' . $unique_id . '.float-position-bottomleft' );
		$css->add_property( 'bottom', ( $attr['vOffset']['Desktop'] . ( isset( $attr['vOffset']['unit'] ) ? $attr['vOffset']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['hOffset']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . '.float-position-topright, .' . $unique_id . '.float-position-bottomright' );
		$css->add_property( 'right', ( $attr['hOffset']['Desktop'] . ( isset( $attr['hOffset']['unit'] ) ? $attr['hOffset']['unit'] : 'px' ) . '!important' ) );
		$css->set_selector( '.' . $unique_id . '.float-position-topleft, .' . $unique_id . '.float-position-bottomleft' );
		$css->add_property( 'left', ( $attr['hOffset']['Desktop'] . ( isset( $attr['hOffset']['unit'] ) ? $attr['hOffset']['unit'] : 'px' ) . '!important' ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button svg' );
		$css->add_property( 'font-size', ( $attr['iconSize']['Tablet'] . 'px' ) );
	}

	if ( isset( $attr['iconAlignment'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-trigger-icon-container' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlignment'], 'Tablet' ) );
	}

	if ( isset( $attr['labelTypography'] ) ) {
		$typography = $attr['labelTypography'];
		$css->set_selector( '.' . $unique_id . ' .trigger-label' );
		$css->render_typography( $typography, 'Tablet' );
	}

	if ( isset( $attr['triggerSpacing'] ) ) {
		$padding = $attr['triggerSpacing'];
		$css->set_selector( '.' . $unique_id . ' .premium-trigger-canvas-container .premium-popup-content' );
		$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
	}
	if ( isset( $attr['triggerBorder'] ) ) {
		$border        = $attr['triggerBorder'];
		$border_width  = $attr['triggerBorder']['borderWidth'];
		$border_radius = $attr['triggerBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], ' . '.' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
	}

	if ( isset( $attr['vOffset']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . '.float-position-topright, .' . $unique_id . ' float-position-topleft' );
		$css->add_property( 'top', ( $attr['vOffset']['Tablet'] . ( isset( $attr['vOffset']['unit'] ) ? $attr['vOffset']['unit'] : 'px' ) . '!important' ) );
		$css->set_selector( '.' . $unique_id . '.float-position-bottomright, .' . $unique_id . '.float-position-bottomleft' );
		$css->add_property( 'top', ( $attr['vOffset']['Tablet'] . ( isset( $attr['vOffset']['unit'] ) ? $attr['vOffset']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['hOffset']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . '.float-position-topright, .' . $unique_id . '.float-position-bottomright' );
		$css->add_property( 'right', ( $attr['hOffset']['Tablet'] . ( isset( $attr['hOffset']['unit'] ) ? $attr['hOffset']['unit'] : 'px' ) . '!important' ) );
		$css->set_selector( '.' . $unique_id . '.float-position-bottomright, .' . $unique_id . '.float-position-bottomleft' );
		$css->add_property( 'left', ( $attr['hOffset']['Tablet'] . ( isset( $attr['hOffset']['unit'] ) ? $attr['hOffset']['unit'] : 'px' ) . '!important' ) );
	}

	 $css->stop_media_query();

	 $css->start_media_query( $media_query['mobile'] );

	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button svg' );
		$css->add_property( 'font-size', ( $attr['iconSize']['Mobile'] . 'px' ) );
	}

	if ( isset( $attr['iconAlignment'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-trigger-icon-container' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlignment'], 'Mobile' ) );
	}

	if ( isset( $attr['labelTypography'] ) ) {
		$typography = $attr['labelTypography'];
		$css->set_selector( '.' . $unique_id . ' .trigger-label' );
		$css->render_typography( $typography, 'Mobile' );
	}

	if ( isset( $attr['triggerSpacing'] ) ) {
		$padding = $attr['triggerSpacing'];
		$css->set_selector( '.' . $unique_id . ' .premium-trigger-canvas-container .premium-popup-content' );
		$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
	}

	if ( isset( $attr['triggerBorder'] ) ) {
		$border        = $attr['triggerBorder'];
		$border_width  = $attr['triggerBorder']['borderWidth'];
		$border_radius = $attr['triggerBorder']['borderRadius'];

		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], ' . '.' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
	}
	if ( isset( $attr['vOffset']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . '.float-position-topright, .' . $unique_id . '.float-position-topleft' );
		$css->add_property( 'top', ( $attr['vOffset']['Mobile'] . ( isset( $attr['vOffset']['unit'] ) ? $attr['vOffset']['unit'] : 'px' ) . '!important' ) );
		$css->set_selector( '.' . $unique_id . '.float-position-bottomright, .' . $unique_id . '.float-position-bottomleft' );
		$css->add_property( 'top', ( $attr['vOffset']['Mobile'] . ( isset( $attr['vOffset']['unit'] ) ? $attr['vOffset']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['hOffset']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . '.float-position-topright, .' . $unique_id . '.float-position-bottomright' );
		$css->add_property( 'right', ( $attr['hOffset']['Mobile'] . ( isset( $attr['hOffset']['unit'] ) ? $attr['hOffset']['unit'] : 'px' ) . '!important' ) );
		$css->set_selector( '.' . $unique_id . '.float-position-bottomright, .' . $unique_id . '.float-position-bottomleft' );
		$css->add_property( 'left', ( $attr['hOffset']['Mobile'] . ( isset( $attr['hOffset']['unit'] ) ? $attr['hOffset']['unit'] : 'px' ) . '!important' ) );
	}

	 $css->stop_media_query();

	return $css->css_output();
}
function should_render_trigger_inline( $name, $unique_id ) {

	if ( doing_filter( 'the_content' ) || apply_filters( 'premium_blocks_force_render_inline_css_in_content', false, $name, $unique_id ) || is_customize_preview() ) {
		return true;
	}
	return false;

}


function render_block_pbg_trigger( $attributes, $content ) {

	if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
		$unique_id = $attributes['blockId'];
	} else {
		$unique_id = rand( 100, 10000 );
	}

	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );

	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_trigger_css_style( $attributes, $unique_id );

		if ( ! empty( $css ) ) {
			$block_helpers = pbg_blocks_helper();
			if ( should_render_inline( 'trigger', $unique_id ) ) {
				$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
			} else {
				$block_helpers->render_inline_css( $css, $style_id, true );
			}
		}
	};
	return $content;

}




/**
 * Registers the `pbg/trigger` block on the server.
 */
function register_block_pbg_trigger() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/trigger',
		array(
			'render_callback' => 'render_block_pbg_trigger',
		)
	);
}
add_action( 'init', 'register_block_pbg_trigger' );

function trigger_enqueue() {
	wp_register_script(
		'premium-trigger-block-script',
		PREMIUM_BLOCKS_URL . 'src/blocks/trigger/trigger.js',
		array( 'jquery' ),
		PREMIUM_BLOCKS_VERSION,
		true
	);
}
add_action( 'enqueue_block_assets', 'trigger_enqueue' );
