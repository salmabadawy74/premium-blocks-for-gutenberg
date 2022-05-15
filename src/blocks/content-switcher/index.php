<?php
/**
 * Server-side rendering of the `pbg/content-switcher` block.
 *
 * @package WordPress
 */

function get_content_switcher_css_style( $attributes, $unique_id ) {
	$block_helpers          = new PBG_Blocks_Helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
	$unique_id = $attributes['block_id'];

	if ( isset( $attributes['labelStyles'] ) ) {
		$labelStyles = $attributes['labelStyles'];
		$block_helpers->add_gfont(
			array(
				'fontFamily'  => ( isset( $labelStyles['firstLabelFontFamily'] ) ? $labelStyles['firstLabelFontFamily'] : '' ),
				'fontVariant' => ( isset( $labelStyles['firstLabelWeight'] ) ? $labelStyles[0]['firstLabelWeight'] : '' ),
				'fontFamily'  => ( isset( $labelStyles['secondLabelFontFamily'] ) ? $labelStyles['secondLabelFontFamily'] : '' ),
				'fontVariant' => ( isset( $labelStyles['secondLabelWeight'] ) ? $labelStyles[0]['secondLabelWeight'] : '' ),
			)
		);
	}

	//Container styles
	if ( isset( $attributes['containerPaddingT'] ) && isset( $attributes['containerStyles']['containerPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-top', ( $attributes['containerPaddingT'] . ( isset( $attributes['containerStyles']['containerPaddingType'] ) ? $attributes['containerStyles']['containerPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPaddingR'] ) && isset( $attributes['containerStyles']['containerPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-right', ( $attributes['containerPaddingR'] . ( isset( $attributes['containerStyles']['containerPaddingType'] ) ? $attributes['containerStyles']['containerPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPaddingB'] ) && isset( $attributes['containerStyles']['containerPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-bottom', ( $attributes['containerPaddingB'] . ( isset( $attributes['containerStyles']['containerPaddingType'] ) ? $attributes['containerStyles']['containerPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPaddingL'] ) && isset( $attributes['containerStyles']['containerPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-left', ( $attributes['containerPaddingL'] . ( isset( $attributes['containerStyles']['containerPaddingType'] ) ? $attributes['containerStyles']['containerPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMarginT'] ) && isset( $attributes['containerStyles']['containerMarginType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-top', ( $attributes['containerMarginT'] . ( isset( $attributes['containerStyles']['containerMarginType'] ) ? $attributes['containerStyles']['containerMarginType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMarginR'] ) && isset( $attributes['containerStyles']['containerMarginType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-right', ( $attributes['containerMarginR'] . ( isset( $attributes['containerStyles']['containerMarginType'] ) ? $attributes['containerStyles']['containerMarginType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMarginB'] ) && isset( $attributes['containerStyles']['containerMarginType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-bottom', ( $attributes['containerMarginB'] . ( isset( $attributes['containerStyles']['containerMarginType'] ) ? $attributes['containerStyles']['containerMarginType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMarginL'] ) && isset( $attributes['containerStyles']['containerMarginType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-left', ( $attributes['containerMarginL'] . ( isset( $attributes['containerStyles']['containerMarginType'] ) ? $attributes['containerStyles']['containerMarginType'] : 'px' ) . '!important' ) );
	}

	//First Label styles
	if ( isset( $attributes['labelStyles'] ) ) {
		if ( isset( $attributes['labelStyles']['firstLabelfontSize'] ) && isset( $attributes['labelStyles']['firstLabelfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
			$css->add_property( 'font-size', $css->render_color( $attributes['labelStyles']['firstLabelfontSize'] . ( isset( $attributes['labelStyles']['firstLabelfontSizeType'] ) ? $attributes['labelStyles']['firstLabelfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['firstLabelPaddingT'] ) && isset( $attributes['labelStyles']['firstLabelPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['firstLabelPaddingT'] . ( isset( $attributes['labelStyles']['firstLabelPaddingType'] ) ? $attributes['labelStyles']['firstLabelPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPaddingR'] ) && isset( $attributes['labelStyles']['firstLabelPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['firstLabelPaddingR'] . ( isset( $attributes['labelStyles']['firstLabelPaddingType'] ) ? $attributes['labelStyles']['firstLabelPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPaddingB'] ) && isset( $attributes['labelStyles']['firstLabelPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['firstLabelPaddingB'] . ( isset( $attributes['labelStyles']['firstLabelPaddingType'] ) ? $attributes['labelStyles']['firstLabelPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPaddingL'] ) && isset( $attributes['labelStyles']['firstLabelPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['firstLabelPaddingL'] . ( isset( $attributes['labelStyles']['firstLabelPaddingType'] ) ? $attributes['labelStyles']['firstLabelPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacing'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-right', ( $attributes['labelStyles']['labelSpacing'] . 'px !important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacing'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-bottom', ( $attributes['labelStyles']['labelSpacing'] . 'px !important' ) );
	}

	//Second Label styles
	if ( isset( $attributes['labelStyles'] ) ) {
		if ( isset( $attributes['labelStyles']['secondLabelfontSize'] ) && isset( $attributes['labelStyles']['secondLabelfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
			$css->add_property( 'font-size', $css->render_color( $attributes['labelStyles']['secondLabelfontSize'] . ( isset( $attributes['labelStyles']['secondLabelfontSizeType'] ) ? $attributes['labelStyles']['secondLabelfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['secondLabelPaddingT'] ) && isset( $attributes['labelStyles']['secondLabelPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['secondLabelPaddingT'] . ( isset( $attributes['labelStyles']['secondLabelPaddingType'] ) ? $attributes['labelStyles']['secondLabelPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPaddingR'] ) && isset( $attributes['labelStyles']['secondLabelPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['secondLabelPaddingR'] . ( isset( $attributes['labelStyles']['secondLabelPaddingType'] ) ? $attributes['labelStyles']['secondLabelPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPaddingB'] ) && isset( $attributes['labelStyles']['secondLabelPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['secondLabelPaddingB'] . ( isset( $attributes['labelStyles']['secondLabelPaddingType'] ) ? $attributes['labelStyles']['secondLabelPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPaddingL'] ) && isset( $attributes['labelStyles']['secondLabelPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['secondLabelPaddingL'] . ( isset( $attributes['labelStyles']['secondLabelPaddingType'] ) ? $attributes['labelStyles']['secondLabelPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacing'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-second-label');
		$css->add_property( 'margin-left', ( $attributes['labelStyles']['labelSpacing'] . 'px !important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacing'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'margin-top', ( $attributes['labelStyles']['labelSpacing'] . 'px !important' ) );
	}

	//Switch styles
	if ( isset( $attributes['switcherStyles'] ) ) {
		if ( isset( $attributes['switcherStyles']['switchSize'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch');
			$css->add_property( 'font-size', $css->render_color( $attributes['switcherStyles']['switchSize'] . 'px !important' ) );
		}
	}
	if ( isset( $attributes['switcherStyles']['switchRadius'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switcherStyles']['switchRadius'] . ( isset( $attributes['switcherStyles']['switchRadiusType'] ) ? $attributes['switcherStyles']['switchRadiusType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['switcherStyles']['containerRadius'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider::before');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switcherStyles']['containerRadius'] . ( isset( $attributes['switcherStyles']['containerRadiusType'] ) ? $attributes['switcherStyles']['containerRadiusType'] : 'px' ) . '!important' ) );
	}

	//Content styles
	if ( isset( $attributes['firstContentMarginT'] ) && isset( $attributes['firstContentStyles']['firstContentMarginType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-top', ( $attributes['firstContentMarginT'] . ( isset( $attributes['firstContentStyles']['firstContentMarginType'] ) ? $attributes['firstContentStyles']['firstContentMarginType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMarginR'] ) && isset( $attributes['firstContentStyles']['firstContentMarginType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-right', ( $attributes['firstContentMarginR'] . ( isset( $attributes['firstContentStyles']['firstContentMarginType'] ) ? $attributes['firstContentStyles']['firstContentMarginType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMarginB'] ) && isset( $attributes['firstContentStyles']['firstContentMarginType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-bottom', ( $attributes['firstContentMarginB'] . ( isset( $attributes['firstContentStyles']['firstContentMarginType'] ) ? $attributes['firstContentStyles']['firstContentMarginType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMarginL'] ) && isset( $attributes['firstContentStyles']['firstContentMarginType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-left', ( $attributes['firstContentMarginL'] . ( isset( $attributes['firstContentStyles']['firstContentMarginType'] ) ? $attributes['firstContentStyles']['firstContentMarginType'] : 'px' ) . '!important' ) );
	}
	//First Content styles
	if ( isset( $attributes['contentStyles'] ) ) {
		if ( isset( $attributes['contentStyles']['contentHeight'] ) && isset( $attributes['contentStyles']['contentHeightType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
			$css->add_property( 'min-height', $css->render_color( $attributes['contentStyles']['contentHeight'] . ( isset( $attributes['contentStyles']['contentHeightType'] ) ? $attributes['contentStyles']['contentHeightType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['firstContentStyles'] ) ) {
		if ( isset( $attributes['firstContentStyles']['firstContentfontSize'] ) && isset( $attributes['firstContentStyles']['firstContentfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' . ' > .premium-content-switcher-first-content' );
			$css->add_property( 'font-size', $css->render_color( $attributes['firstContentStyles']['firstContentfontSize'] . ( isset( $attributes['firstContentStyles']['firstContentfontSizeType'] ) ? $attributes['firstContentStyles']['firstContentfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['contentPaddingT'] ) && isset( $attributes['firstContentStyles']['firstContentPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-top', ( $attributes['contentPaddingT'] . ( isset( $attributes['firstContentStyles']['firstContentPaddingType'] ) ? $attributes['firstContentStyles']['firstContentPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPaddingR'] ) && isset( $attributes['firstContentStyles']['firstContentPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-right', ( $attributes['contentPaddingR'] . ( isset( $attributes['firstContentStyles']['firstContentPaddingType'] ) ? $attributes['firstContentStyles']['firstContentPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPaddingB'] ) && isset( $attributes['firstContentStyles']['firstContentPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-bottom', ( $attributes['contentPaddingB'] . ( isset( $attributes['firstContentStyles']['firstContentPaddingType'] ) ? $attributes['firstContentStyles']['firstContentPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPaddingL'] ) && isset( $attributes['firstContentStyles']['firstContentPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-left', ( $attributes['contentPaddingL'] . ( isset( $attributes['firstContentStyles']['firstContentPaddingType'] ) ? $attributes['firstContentStyles']['firstContentPaddingType'] : 'px' ) . '!important' ) );
	}
	//Second Content styles
	if ( isset( $attributes['contentStyles'] ) ) {
		if ( isset( $attributes['contentStyles']['contentHeight'] ) && isset( $attributes['contentStyles']['contentHeightType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
			$css->add_property( 'min-height', $css->render_color( $attributes['contentStyles']['contentHeight'] . ( isset( $attributes['contentStyles']['contentHeightType'] ) ? $attributes['contentStyles']['contentHeightType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['secondContentStyles'] ) ) {
		if ( isset( $attributes['secondContentStyles']['secondContentfontSize'] ) && isset( $attributes['secondContentStyles']['secondContentfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' . ' > .premium-content-switcher-second-content' );
			$css->add_property( 'font-size', $css->render_color( $attributes['secondContentStyles']['secondContentfontSize'] . ( isset( $attributes['secondContentStyles']['secondContentfontSizeType'] ) ? $attributes['secondContentStyles']['secondContentfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['contentPaddingT'] ) && isset( $attributes['secondContentStyles']['secondContentPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-top', ( $attributes['contentPaddingT'] . ( isset( $attributes['secondContentStyles']['secondContentPaddingType'] ) ? $attributes['secondContentStyles']['secondContentPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPaddingR'] ) && isset( $attributes['secondContentStyles']['secondContentPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-right', ( $attributes['contentPaddingR'] . ( isset( $attributes['secondContentStyles']['secondContentPaddingType'] ) ? $attributes['secondContentStyles']['secondContentPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPaddingB'] ) && isset( $attributes['secondContentStyles']['secondContentPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-bottom', ( $attributes['contentPaddingB'] . ( isset( $attributes['secondContentStyles']['secondContentPaddingType'] ) ? $attributes['secondContentStyles']['secondContentPaddingType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPaddingL'] ) && isset( $attributes['secondContentStyles']['secondContentPaddingType'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-left', ( $attributes['contentPaddingL'] . ( isset( $attributes['secondContentStyles']['secondContentPaddingType'] ) ? $attributes['secondContentStyles']['secondContentPaddingType'] : 'px' ) . '!important' ) );
	}

	return $css->css_output();
}
function should_render_inline( $name, $unique_id ) {

	if ( doing_filter( 'the_content' ) || apply_filters( 'premium_blocks_force_render_inline_css_in_content', false, $name, $unique_id ) || is_customize_preview() ) {
		return true;
	}
	return false;

}


 function render_block_pbg_content_switcher( $attributes, $content ) {
	$wrapper_attributes = get_block_wrapper_attributes();
	$unique_id = $attributes['block_id'];
	$align_class_name   = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $align_class_name ) );


	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	$id                 = 'premium-content-switcher-' . esc_attr( $unique_id );
	$unique_id = $attributes['block_id'];
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'content-switcher', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_content_switcher_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			$block_helpers = new PBG_Blocks_Helper();
			if ( should_render_inline( 'content-switcher', $unique_id ) ) {
			$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
			 } else {
				$block_helpers->render_inline_css( $css, $style_id, true );
				}
		}
	};
	return $content;

	}



 
/**
 * Registers the `pbg/content-switcher` block on the server.
 */
function register_block_pbg_content_switcher() {
    register_block_type_from_metadata(
        PREMIUM_BLOCKS_PATH . 'src/blocks/content-switcher',
		array(
            'render_callback' => 'render_block_pbg_content_switcher',
            )
        );
        // wp_localize_script(
		// 	'pbg-blocks-js',
		// 	'PremiumBlocksSettings',
		// 	array(
		// 		'ajaxurl'           => esc_url( admin_url( 'admin-ajax.php' ) ),
		// 		'nonce'             => wp_create_nonce( 'pa-blog-block-nonce' ),
		// 		'settingPath'       => admin_url( 'admin.php?page=premium-gutenberg-maps' ),
		// 		'defaultAuthImg'    => PREMIUM_BLOCKS_URL . 'assets/img/author.jpg'
		// 	)
		// );
}
add_action( 'init', 'register_block_pbg_content_switcher' );

function content_switcher_enqueue() {
	wp_register_script(
		'gpb-content-switcher-block-script',
			PREMIUM_BLOCKS_URL . 'src/blocks/content-switcher/content-switcher.js',
			array( 'jquery' ),
			PREMIUM_BLOCKS_VERSION,
			true
    );
}
add_action( 'enqueue_block_assets', 'content_switcher_enqueue' );