<?php
/**
 * Server-side rendering of the `pbg/breadcrumbs` block.
 *
 * @package WordPress
 */

function get_trigger_css_style( $attr, $unique_id ) {
	$block_helpers          = new PBG_Blocks_Helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
	// $unique_id = $attr['blockId'];
	// $unique_id = $attributes['blockId'];

	if ( isset( $attr['iconSize'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button svg' );
		$css->add_property( 'font-size', ( $attr['iconSize']['Desktop'] . 'px' ) );
	}
	if ( isset( $attr['triggerSpacing']['Desktop']['top'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . '  .premium-popup-content' );
		$css->add_property( 'padding-top', ( $attr['triggerSpacing']['Desktop']['top'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerSpacing']['Desktop']['right'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-popup-content' );
		$css->add_property( 'padding-right', ( $attr['triggerSpacing']['Desktop']['right'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerSpacing']['Desktop']['bottom'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-popup-content' );
		$css->add_property( 'padding-bottom', ( $attr['triggerSpacing']['Desktop']['bottom'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerSpacing']['Desktop']['left'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-popup-content' );
		$css->add_property( 'padding-left', ( $attr['triggerSpacing']['Desktop']['left'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Desktop']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-top-width', ( $attr['triggerBorder']['borderWidth']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Desktop']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-right-width', ( $attr['triggerBorder']['borderWidth']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Desktop']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-bottom-width', ( $attr['triggerBorder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Desktop']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-left-width', ( $attr['triggerBorder']['borderWidth']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Desktop']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-top-left-radius', ( $attr['triggerBorder']['borderRadius']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Desktop']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-top-right-radius', ( $attr['triggerBorder']['borderRadius']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Desktop']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['triggerBorder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Desktop']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['triggerBorder']['borderRadius']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attr['vOffset'] ) ) {
		$css->set_selector( '.' . $unique_id . '.float-position-topright, .' . $unique_id . '.float-position-topleft' );
		$css->add_property( 'top', ( $attr['vOffset']['Desktop'] . ( isset( $attr['vOffset']['unit'] ) ? $attr['vOffset']['unit'] : 'px' ) . '!important' ) );
		$css->set_selector( '.' . $unique_id . '.float-position-bottomright, .' . $unique_id . '.float-position-bottomleft' );
		$css->add_property( 'bottom', ( $attr['vOffset']['Desktop'] . ( isset( $attr['vOffset']['unit'] ) ? $attr['vOffset']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['hOffset'] ) ) {
		$css->set_selector( '.' . $unique_id . '.float-position-topright, .' . $unique_id . '.float-position-bottomright' );
		$css->add_property( 'right', ( $attr['hOffset']['Desktop'] . ( isset( $attr['hOffset']['unit'] ) ? $attr['hOffset']['unit'] : 'px' ) . '!important' ) );
		$css->set_selector( '.' . $unique_id . '.float-position-topleft, .' . $unique_id . '.float-position-bottomleft' );
		$css->add_property( 'left', ( $attr['hOffset']['Desktop'] . ( isset( $attr['hOffset']['unit'] ) ? $attr['hOffset']['unit'] : 'px' ) . '!important' ) );
	}


	$css->start_media_query( $media_query['tablet'] );

	if ( isset( $attr['iconSize']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button svg' );
		$css->add_property( 'font-size', ( $attr['iconSize']['Tablet'] . 'px' ) );
	}
	if ( isset( $attr['triggerSpacing']['Tablet']['top'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . '  .premium-popup-content' );
		$css->add_property( 'padding-top', ( $attr['triggerSpacing']['Tablet']['top'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerSpacing']['Tablet']['right'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-popup-content' );
		$css->add_property( 'padding-right', ( $attr['triggerSpacing']['Tablet']['right'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerSpacing']['Tablet']['bottom'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-popup-content' );
		$css->add_property( 'padding-bottom', ( $attr['triggerSpacing']['Tablet']['bottom'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerSpacing']['Tablet']['left'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-popup-content' );
		$css->add_property( 'padding-left', ( $attr['triggerSpacing']['Tablet']['left'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Tablet']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-top-width', ( $attr['triggerBorder']['borderWidth']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Tablet']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-right-width', ( $attr['triggerBorder']['borderWidth']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Tablet']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-bottom-width', ( $attr['triggerBorder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Tablet']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-left-width', ( $attr['triggerBorder']['borderWidth']['Tablet']['left'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Tablet']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-top-left-radius', ( $attr['triggerBorder']['borderRadius']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Tablet']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-top-right-radius', ( $attr['triggerBorder']['borderRadius']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Tablet']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['triggerBorder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Tablet']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['triggerBorder']['borderRadius']['Tablet']['left'] . 'px' ) );
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

	 if ( isset( $attr['iconSize']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button svg' );
		$css->add_property( 'font-size', ( $attr['iconSize']['Mobile'] . 'px' ) );
	}
	if ( isset( $attr['triggerSpacing']['Mobile']['top'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . '  .premium-popup-content' );
		$css->add_property( 'padding-top', ( $attr['triggerSpacing']['Mobile']['top'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerSpacing']['Mobile']['right'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-popup-content' );
		$css->add_property( 'padding-right', ( $attr['triggerSpacing']['Mobile']['right'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerSpacing']['Mobile']['bottom'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-popup-content' );
		$css->add_property( 'padding-bottom', ( $attr['triggerSpacing']['Mobile']['bottom'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerSpacing']['Mobile']['left'] ) && isset( $attr['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .premium-popup-content' );
		$css->add_property( 'padding-left', ( $attr['triggerSpacing']['Mobile']['left'] . ( isset( $attr['triggerSpacing']['unit'] ) ? $attr['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Mobile']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-top-width', ( $attr['triggerBorder']['borderWidth']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Mobile']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-right-width', ( $attr['triggerBorder']['borderWidth']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Mobile']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-bottom-width', ( $attr['triggerBorder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderWidth']['Mobile']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-left-width', ( $attr['triggerBorder']['borderWidth']['Mobile']['left'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Mobile']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-top-left-radius', ( $attr['triggerBorder']['borderRadius']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Mobile']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-top-right-radius', ( $attr['triggerBorder']['borderRadius']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Mobile']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['triggerBorder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['triggerBorder']['borderRadius']['Mobile']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' .toggle-button[data-style="outline"], .' . $unique_id . ' .toggle-button[data-style="solid"]' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['triggerBorder']['borderRadius']['Mobile']['left'] . 'px' ) );
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
			$block_helpers = new PBG_Blocks_Helper();
			if ( should_render_inline( 'trigger', $unique_id ) ) {
				$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
			} else {
				$block_helpers->render_inline_css( $css, $style_id, true );
			}
		}
	};
	return $content;



	// $wrapper_attributes = get_block_wrapper_attributes();
	// //$unique_id = $attributes['blockId'];
	// $align_class_name   = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";
	// $wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $align_class_name ) );
	// $style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	// $id                 = 'premium-trigger-' . esc_attr( $unique_id );

	// if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'trigger', $unique_id ) ) {
	// 	// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
	// 	// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
	// 	$css = get_trigger_css_style( $attributes, $unique_id );
	// 	if ( ! empty( $css ) ) {
	// 		$block_helpers = new PBG_Blocks_Helper();
	// 		if ( should_render_trigger_inline( 'trigger', $unique_id ) ) {
	// 		$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
	// 		 } else {
	// 			$block_helpers->render_inline_css( $css, $style_id, true );
	// 			}
	// 	}
	// };
	// return $content;

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