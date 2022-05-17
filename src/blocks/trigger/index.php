<?php
/**
 * Server-side rendering of the `pbg/breadcrumbs` block.
 *
 * @package WordPress
 */

function get_trigger_css_style( $attributes, $unique_id ) {
	$block_helpers          = new PBG_Blocks_Helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
	$unique_id = $attributes['block_id'];

	if ( isset( $attributes['triggerStyles']['iconSize'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .toggle-button svg' );
		$css->add_property( 'font-size', $css->render_color( $attributes['triggerStyles']['iconSize'] . 'px' . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Desktop']['top'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . '  .gpb-popup-content' );
		$css->add_property( 'padding-top', ( $attributes['triggerSpacing']['Desktop']['top'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Desktop']['right'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .gpb-popup-content' );
		$css->add_property( 'padding-right', ( $attributes['triggerSpacing']['Desktop']['right'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Desktop']['bottom'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .gpb-popup-content' );
		$css->add_property( 'padding-bottom', ( $attributes['triggerSpacing']['Desktop']['bottom'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Desktop']['left'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .gpb-popup-content' );
		$css->add_property( 'padding-left', ( $attributes['triggerSpacing']['Desktop']['left'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerStyles']['vOffset'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-topright, #premium-trigger-' . $unique_id . ' .float-position-topleft' );
		$css->add_property( 'top', $css->render_color( $attributes['triggerStyles']['vOffset'] . 'px' . '!important' ) );
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-bottomright, #premium-trigger-' . $unique_id . ' .float-position-bottomleft' );
		$css->add_property( 'bottom', $css->render_color( $attributes['triggerStyles']['vOffset'] . 'px' . '!important' ) );
	}
	if ( isset( $attributes['triggerStyles']['hOffset'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-topright, #premium-trigger-' . $unique_id . ' .float-position-bottomright' );
		$css->add_property( 'right', $css->render_color( $attributes['triggerStyles']['hOffset'] . 'px' . '!important' ) );
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-bottomright, #premium-trigger-' . $unique_id . ' .float-position-bottomleft' );
		$css->add_property( 'left', $css->render_color( $attributes['triggerStyles']['hOffset'] . 'px' . '!important' ) );
	}


	$css->start_media_query( $media_query['tablet'] );

	if ( isset( $attributes['triggerStyles']['iconSizeTablet'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .toggle-button svg' );
		$css->add_property( 'font-size', $css->render_color( $attributes['triggerStyles']['iconSizeTablet'] . 'px' . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Tablet']['top'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . '  .gpb-popup-content' );
		$css->add_property( 'padding-top', ( $attributes['triggerSpacing']['Tablet']['top'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Tablet']['right'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .gpb-popup-content' );
		$css->add_property( 'padding-right', ( $attributes['triggerSpacing']['Tablet']['right'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Tablet']['bottom'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .gpb-popup-content' );
		$css->add_property( 'padding-bottom', ( $attributes['triggerSpacing']['Tablet']['bottom'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Tablet']['left'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .gpb-popup-content' );
		$css->add_property( 'padding-left', ( $attributes['triggerSpacing']['Tablet']['left'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerStyles']['vOffsetTablet'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-topright, #premium-trigger-' . $unique_id . ' .float-position-topleft' );
		$css->add_property( 'top', $css->render_color( $attributes['triggerStyles']['vOffsetTablet'] . 'px' . '!important' ) );
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-bottomright, #premium-trigger-' . $unique_id . ' .float-position-bottomleft' );
		$css->add_property( 'bottom', $css->render_color( $attributes['triggerStyles']['vOffsetTablet'] . 'px' . '!important' ) );
	}
	if ( isset( $attributes['triggerStyles']['hOffsetTablet'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-topright, #premium-trigger-' . $unique_id . ' .float-position-bottomright' );
		$css->add_property( 'right', $css->render_color( $attributes['triggerStyles']['hOffsetTablet'] . 'px' . '!important' ) );
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-bottomright, #premium-trigger-' . $unique_id . ' .float-position-bottomleft' );
		$css->add_property( 'left', $css->render_color( $attributes['triggerStyles']['hOffsetTablet'] . 'px' . '!important' ) );
	}


	$css->stop_media_query();

	$css->start_media_query( $media_query['mobile'] );

	if ( isset( $attributes['triggerStyles']['iconSizeMobile'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .toggle-button svg' );
		$css->add_property( 'font-size', $css->render_color( $attributes['triggerStyles']['iconSizeMobile'] . 'px' . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Mobile']['top'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . '  .gpb-popup-content' );
		$css->add_property( 'padding-top', ( $attributes['triggerSpacing']['Mobile']['top'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Mobile']['right'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .gpb-popup-content' );
		$css->add_property( 'padding-right', ( $attributes['triggerSpacing']['Mobile']['right'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Mobile']['bottom'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .gpb-popup-content' );
		$css->add_property( 'padding-bottom', ( $attributes['triggerSpacing']['Mobile']['bottom'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerSpacing']['Mobile']['left'] ) && isset( $attributes['triggerSpacing']['unit'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .gpb-popup-content' );
		$css->add_property( 'padding-left', ( $attributes['triggerSpacing']['Mobile']['left'] . ( isset( $attributes['triggerSpacing']['unit'] ) ? $attributes['triggerSpacing']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['triggerStyles']['vOffsetMobile'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-topright, #premium-trigger-' . $unique_id . ' .float-position-topleft' );
		$css->add_property( 'top', $css->render_color( $attributes['triggerStyles']['vOffsetMobile'] . 'px' . '!important' ) );
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-bottomright, #premium-trigger-' . $unique_id . ' .float-position-bottomleft' );
		$css->add_property( 'bottom', $css->render_color( $attributes['triggerStyles']['vOffsetMobile'] . 'px' . '!important' ) );
	}
	if ( isset( $attributes['triggerStyles']['hOffsetMobile'] ) ) {
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-topright, #premium-trigger-' . $unique_id . ' .float-position-bottomright' );
		$css->add_property( 'right', $css->render_color( $attributes['triggerStyles']['hOffsetMobile'] . 'px' . '!important' ) );
		$css->set_selector( '#premium-trigger-' . $unique_id . ' .float-position-bottomright, #premium-trigger-' . $unique_id . ' .float-position-bottomleft' );
		$css->add_property( 'left', $css->render_color( $attributes['triggerStyles']['hOffsetMobile'] . 'px' . '!important' ) );
	}

	$css->stop_media_query();

	return $css->css_output();
}
function should_render_inline( $name, $unique_id ) {

	if ( doing_filter( 'the_content' ) || apply_filters( 'premium_blocks_force_render_inline_css_in_content', false, $name, $unique_id ) || is_customize_preview() ) {
		return true;
	}
	return false;

}


 function render_block_pbg_trigger( $attributes, $content ) {
	$wrapper_attributes = get_block_wrapper_attributes();
	$unique_id = $attributes['block_id'];
	$align_class_name   = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $align_class_name ) );
	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	$id                 = 'premium-trigger-' . esc_attr( $unique_id );

	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'trigger', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_trigger_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			$block_helpers = new PBG_Blocks_Helper();
			if ( should_render_inline( 'trigger', $unique_id ) ) {
			$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
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
		'gpb-trigger-block-script',
			PREMIUM_BLOCKS_URL . 'src/blocks/trigger/trigger.js',
			array( 'jquery' ),
			PREMIUM_BLOCKS_VERSION,
			true
	);
}
add_action( 'enqueue_block_assets', 'trigger_enqueue' );