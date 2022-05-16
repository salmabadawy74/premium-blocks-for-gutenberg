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
				'fontVariant' => ( isset( $labelStyles['firstLabelWeight'] ) ? $labelStyles['firstLabelWeight'] : '' ),
				'fontFamily'  => ( isset( $labelStyles['secondLabelFontFamily'] ) ? $labelStyles['secondLabelFontFamily'] : '' ),
				'fontVariant' => ( isset( $labelStyles['secondLabelWeight'] ) ? $labelStyles['secondLabelWeight'] : '' ),
			)
		);
	}

	if ( isset( $attributes['firstContentStyles'] ) ) {
		$firstContentStyles = $attributes['firstContentStyles'];
		$block_helpers->add_gfont(
			array(
				'fontFamily'  => ( isset( $firstContentStyles['firstContentFontFamily'] ) ? $firstContentStyles['firstContentFontFamily'] : '' ),
				'fontVariant' => ( isset( $firstContentStyles['firstContentWeight'] ) ? $firstContentStyles['firstContentWeight'] : '' )
			)
		);
	}

	if ( isset( $attributes['secondContentStyles'] ) ) {
		$secondContentStyles = $attributes['secondContentStyles'];
		$block_helpers->add_gfont(
			array(
				'fontFamily'  => ( isset( $secondContentStyles['secondContentFontFamily'] ) ? $secondContentStyles['secondContentFontFamily'] : '' ),
				'fontVariant' => ( isset( $secondContentStyles['secondContentWeight'] ) ? $secondContentStyles['secondContentWeight'] : '' )
			)
		);
	}

	//Container styles
	if ( isset( $attributes['containerPadding']['Desktop']['top'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-top', ( $attributes['containerPadding']['Desktop']['top'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Desktop']['right'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-right', ( $attributes['containerPadding']['Desktop']['right'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Desktop']['bottom'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-bottom', ( $attributes['containerPadding']['Desktop']['bottom'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Desktop']['left'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-left', ( $attributes['containerPadding']['Desktop']['left'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Desktop']['top'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-top', ( $attributes['containerMargin']['Desktop']['top'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Desktop']['right'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-right', ( $attributes['containerMargin']['Desktop']['right'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Desktop']['bottom'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-bottom', ( $attributes['containerMargin']['Desktop']['bottom'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Desktop']['left'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-left', ( $attributes['containerMargin']['Desktop']['left'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}

	//First Label styles
	if ( isset( $attributes['labelStyles'] ) ) {
		if ( isset( $attributes['labelStyles']['firstLabelfontSize'] ) && isset( $attributes['labelStyles']['firstLabelfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
			$css->add_property( 'font-size', $css->render_color( $attributes['labelStyles']['firstLabelfontSize'] . ( isset( $attributes['labelStyles']['firstLabelfontSizeType'] ) ? $attributes['labelStyles']['firstLabelfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['firstLabelPadding']['Desktop']['top'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['firstLabelPadding']['Desktop']['top'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Desktop']['right'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['firstLabelPadding']['Desktop']['right'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Desktop']['bottom'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['firstLabelPadding']['Desktop']['bottom'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Desktop']['left'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['firstLabelPadding']['Desktop']['left'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['secondLabelPadding']['Desktop']['top'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['secondLabelPadding']['Desktop']['top'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Desktop']['right'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['secondLabelPadding']['Desktop']['right'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Desktop']['bottom'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['secondLabelPadding']['Desktop']['bottom'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Desktop']['left'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['secondLabelPadding']['Desktop']['left'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['firstContentMargin']['Desktop']['top'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-top', ( $attributes['firstContentMargin']['Desktop']['top'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMargin']['Desktop']['right'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-right', ( $attributes['firstContentMargin']['Desktop']['right'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMargin']['Desktop']['bottom'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-bottom', ( $attributes['firstContentMargin']['Desktop']['bottom'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMargin']['Desktop']['left'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-left', ( $attributes['firstContentMargin']['Desktop']['left'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['contentPadding']['Desktop']['top'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-top', ( $attributes['contentPadding']['Desktop']['top'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Desktop']['right'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-right', ( $attributes['contentPadding']['Desktop']['right'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Desktop']['bottom'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-bottom', ( $attributes['contentPadding']['Desktop']['bottom'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Desktop']['left'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-left', ( $attributes['contentPadding']['Desktop']['left'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['contentPadding']['Desktop']['top'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-top', ( $attributes['contentPadding']['Desktop']['top'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Desktop']['right'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-right', ( $attributes['contentPadding']['Desktop']['right'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Desktop']['bottom'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-bottom', ( $attributes['contentPadding']['Desktop']['bottom'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Desktop']['left'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-left', ( $attributes['contentPadding']['Desktop']['left'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	//Container styles
	if ( isset( $attributes['containerPadding']['Tablet']['top'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-top', ( $attributes['containerPadding']['Tablet']['top'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Tablet']['right'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-right', ( $attributes['containerPadding']['Tablet']['right'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Tablet']['bottom'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-bottom', ( $attributes['containerPadding']['Tablet']['bottom'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Tablet']['left'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-left', ( $attributes['containerPadding']['Tablet']['left'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Tablet']['top'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-top', ( $attributes['containerMargin']['Tablet']['top'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Tablet']['right'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-right', ( $attributes['containerMargin']['Tablet']['right'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Tablet']['bottom'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-bottom', ( $attributes['containerMargin']['Tablet']['bottom'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Tablet']['left'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-left', ( $attributes['containerMargin']['Tablet']['left'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}

	//First Label styles
	if ( isset( $attributes['labelStyles'] ) ) {
		if ( isset( $attributes['labelStyles']['firstLabelfontSizeTablet'] ) && isset( $attributes['labelStyles']['firstLabelfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
			$css->add_property( 'font-size', $css->render_color( $attributes['labelStyles']['firstLabelfontSizeTablet'] . ( isset( $attributes['labelStyles']['firstLabelfontSizeType'] ) ? $attributes['labelStyles']['firstLabelfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['firstLabelPadding']['Tablet']['top'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['firstLabelPadding']['Tablet']['top'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Tablet']['right'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['firstLabelPadding']['Tablet']['right'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Tablet']['bottom'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['firstLabelPadding']['Tablet']['bottom'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Tablet']['left'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['firstLabelPadding']['Tablet']['left'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacingTablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-right', ( $attributes['labelStyles']['labelSpacingTablet'] . 'px !important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacingTablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-bottom', ( $attributes['labelStyles']['labelSpacingTablet'] . 'px !important' ) );
	}

	//Second Label styles
	if ( isset( $attributes['labelStyles'] ) ) {
		if ( isset( $attributes['labelStyles']['secondLabelfontSizeTablet'] ) && isset( $attributes['labelStyles']['secondLabelfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
			$css->add_property( 'font-size', $css->render_color( $attributes['labelStyles']['secondLabelfontSizeTablet'] . ( isset( $attributes['labelStyles']['secondLabelfontSizeType'] ) ? $attributes['labelStyles']['secondLabelfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['secondLabelPadding']['Tablet']['top'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['secondLabelPadding']['Tablet']['top'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Tablet']['right'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['secondLabelPadding']['Tablet']['right'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Tablet']['bottom'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['secondLabelPadding']['Tablet']['bottom'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Tablet']['left'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['secondLabelPadding']['Tablet']['left'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacingTablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-second-label');
		$css->add_property( 'margin-left', ( $attributes['labelStyles']['labelSpacingTablet'] . 'px !important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacingTablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'margin-top', ( $attributes['labelStyles']['labelSpacingTablet'] . 'px !important' ) );
	}

	//Switch styles
	if ( isset( $attributes['switcherStyles'] ) ) {
		if ( isset( $attributes['switcherStyles']['switchSizeTablet'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch');
			$css->add_property( 'font-size', $css->render_color( $attributes['switcherStyles']['switchSizeTablet'] . 'px !important' ) );
		}
	}
	if ( isset( $attributes['switcherStyles']['switchRadiusTablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switcherStyles']['switchRadiusTablet'] . ( isset( $attributes['switcherStyles']['switchRadiusType'] ) ? $attributes['switcherStyles']['switchRadiusType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['switcherStyles']['containerRadiusTablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider::before');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switcherStyles']['containerRadiusTablet'] . ( isset( $attributes['switcherStyles']['containerRadiusType'] ) ? $attributes['switcherStyles']['containerRadiusType'] : 'px' ) . '!important' ) );
	}

	//Content styles
	if ( isset( $attributes['firstContentMargin']['Tablet']['top'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-top', ( $attributes['firstContentMargin']['Tablet']['top'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMargin']['Tablet']['right'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-right', ( $attributes['firstContentMargin']['Tablet']['right'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMargin']['Tablet']['bottom'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-bottom', ( $attributes['firstContentMargin']['Tablet']['bottom'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMargin']['Tablet']['left'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-left', ( $attributes['firstContentMargin']['Tablet']['left'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	//First Content styles
	if ( isset( $attributes['contentStyles'] ) ) {
		if ( isset( $attributes['contentStyles']['contentHeightTablet'] ) && isset( $attributes['contentStyles']['contentHeightType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
			$css->add_property( 'min-height', $css->render_color( $attributes['contentStyles']['contentHeightTablet'] . ( isset( $attributes['contentStyles']['contentHeightType'] ) ? $attributes['contentStyles']['contentHeightType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['firstContentStyles'] ) ) {
		if ( isset( $attributes['firstContentStyles']['firstContentfontSizeTablet'] ) && isset( $attributes['firstContentStyles']['firstContentfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' . ' > .premium-content-switcher-first-content' );
			$css->add_property( 'font-size', $css->render_color( $attributes['firstContentStyles']['firstContentfontSizeTablet'] . ( isset( $attributes['firstContentStyles']['firstContentfontSizeType'] ) ? $attributes['firstContentStyles']['firstContentfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['contentPadding']['Tablet']['top'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-top', ( $attributes['contentPadding']['Tablet']['top'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Tablet']['right'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-right', ( $attributes['contentPadding']['Tablet']['right'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Tablet']['bottom'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-bottom', ( $attributes['contentPadding']['Tablet']['bottom'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Tablet']['left'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-left', ( $attributes['contentPadding']['Tablet']['left'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	//Second Content styles
	if ( isset( $attributes['contentStyles'] ) ) {
		if ( isset( $attributes['contentStyles']['contentHeightTablet'] ) && isset( $attributes['contentStyles']['contentHeightType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
			$css->add_property( 'min-height', $css->render_color( $attributes['contentStyles']['contentHeightTablet'] . ( isset( $attributes['contentStyles']['contentHeightType'] ) ? $attributes['contentStyles']['contentHeightType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['secondContentStyles'] ) ) {
		if ( isset( $attributes['secondContentStyles']['secondContentfontSizeTablet'] ) && isset( $attributes['secondContentStyles']['secondContentfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' . ' > .premium-content-switcher-second-content' );
			$css->add_property( 'font-size', $css->render_color( $attributes['secondContentStyles']['secondContentfontSizeTablet'] . ( isset( $attributes['secondContentStyles']['secondContentfontSizeType'] ) ? $attributes['secondContentStyles']['secondContentfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['contentPadding']['Tablet']['top'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-top', ( $attributes['contentPadding']['Tablet']['top'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Tablet']['right'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-right', ( $attributes['contentPadding']['Tablet']['right'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Tablet']['bottom'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-bottom', ( $attributes['contentPadding']['Tablet']['bottom'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Tablet']['left'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-left', ( $attributes['contentPadding']['Tablet']['left'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}

	$css->stop_media_query();

	$css->start_media_query( $media_query['mobile'] );

	//Container styles
	if ( isset( $attributes['containerPadding']['Mobile']['top'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-top', ( $attributes['containerPadding']['Mobile']['top'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Mobile']['right'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-right', ( $attributes['containerPadding']['Mobile']['right'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Mobile']['bottom'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-bottom', ( $attributes['containerPadding']['Mobile']['bottom'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Mobile']['left'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-left', ( $attributes['containerPadding']['Mobile']['left'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Mobile']['top'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-top', ( $attributes['containerMargin']['Mobile']['top'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Mobile']['right'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-right', ( $attributes['containerMargin']['Mobile']['right'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Mobile']['bottom'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-bottom', ( $attributes['containerMargin']['Mobile']['bottom'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Mobile']['left'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-left', ( $attributes['containerMargin']['Mobile']['left'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}

	//First Label styles
	if ( isset( $attributes['labelStyles'] ) ) {
		if ( isset( $attributes['labelStyles']['firstLabelfontSizeMobile'] ) && isset( $attributes['labelStyles']['firstLabelfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
			$css->add_property( 'font-size', $css->render_color( $attributes['labelStyles']['firstLabelfontSizeMobile'] . ( isset( $attributes['labelStyles']['firstLabelfontSizeType'] ) ? $attributes['labelStyles']['firstLabelfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['firstLabelPadding']['Mobile']['top'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['firstLabelPadding']['Mobile']['top'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Mobile']['right'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['firstLabelPadding']['Mobile']['right'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Mobile']['bottom'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['firstLabelPadding']['Mobile']['bottom'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Mobile']['left'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['firstLabelPadding']['Mobile']['left'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacingMobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-right', ( $attributes['labelStyles']['labelSpacingMobile'] . 'px !important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacingMobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-bottom', ( $attributes['labelStyles']['labelSpacingMobile'] . 'px !important' ) );
	}

	//Second Label styles
	if ( isset( $attributes['labelStyles'] ) ) {
		if ( isset( $attributes['labelStyles']['secondLabelfontSizeMobile'] ) && isset( $attributes['labelStyles']['secondLabelfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
			$css->add_property( 'font-size', $css->render_color( $attributes['labelStyles']['secondLabelfontSizeMobile'] . ( isset( $attributes['labelStyles']['secondLabelfontSizeType'] ) ? $attributes['labelStyles']['secondLabelfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['secondLabelPadding']['Mobile']['top'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['secondLabelPadding']['Mobile']['top'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Mobile']['right'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['secondLabelPadding']['Mobile']['right'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Mobile']['bottom'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['secondLabelPadding']['Mobile']['bottom'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Mobile']['left'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['secondLabelPadding']['Mobile']['left'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacingMobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-second-label');
		$css->add_property( 'margin-left', ( $attributes['labelStyles']['labelSpacingMobile'] . 'px !important' ) );
	}
	if ( isset( $attributes['labelStyles']['labelSpacingMobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'margin-top', ( $attributes['labelStyles']['labelSpacingMobile'] . 'px !important' ) );
	}

	//Switch styles
	if ( isset( $attributes['switcherStyles'] ) ) {
		if ( isset( $attributes['switcherStyles']['switchSizeMobile'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch');
			$css->add_property( 'font-size', $css->render_color( $attributes['switcherStyles']['switchSizeMobile'] . 'px !important' ) );
		}
	}
	if ( isset( $attributes['switcherStyles']['switchRadiusMobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switcherStyles']['switchRadiusMobile'] . ( isset( $attributes['switcherStyles']['switchRadiusType'] ) ? $attributes['switcherStyles']['switchRadiusType'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['switcherStyles']['containerRadiusMobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider::before');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switcherStyles']['containerRadiusMobile'] . ( isset( $attributes['switcherStyles']['containerRadiusType'] ) ? $attributes['switcherStyles']['containerRadiusType'] : 'px' ) . '!important' ) );
	}

	//Content styles
	if ( isset( $attributes['firstContentMargin']['Mobile']['top'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-top', ( $attributes['firstContentMargin']['Mobile']['top'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMargin']['Mobile']['right'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-right', ( $attributes['firstContentMargin']['Mobile']['right'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMargin']['Mobile']['bottom'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-bottom', ( $attributes['firstContentMargin']['Mobile']['bottom'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentMargin']['Mobile']['left'] ) && isset( $attributes['firstContentMargin']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list');
		$css->add_property( 'margin-left', ( $attributes['firstContentMargin']['Mobile']['left'] . ( isset( $attributes['firstContentMargin']['unit'] ) ? $attributes['firstContentMargin']['unit'] : 'px' ) . '!important' ) );
	}
	//First Content styles
	if ( isset( $attributes['contentStyles'] ) ) {
		if ( isset( $attributes['contentStyles']['contentHeightMobile'] ) && isset( $attributes['contentStyles']['contentHeightType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
			$css->add_property( 'min-height', $css->render_color( $attributes['contentStyles']['contentHeightMobile'] . ( isset( $attributes['contentStyles']['contentHeightType'] ) ? $attributes['contentStyles']['contentHeightType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['firstContentStyles'] ) ) {
		if ( isset( $attributes['firstContentStyles']['firstContentfontSizeMobile'] ) && isset( $attributes['firstContentStyles']['firstContentfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' . ' > .premium-content-switcher-first-content' );
			$css->add_property( 'font-size', $css->render_color( $attributes['firstContentStyles']['firstContentfontSizeMobile'] . ( isset( $attributes['firstContentStyles']['firstContentfontSizeType'] ) ? $attributes['firstContentStyles']['firstContentfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['contentPadding']['Mobile']['top'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-top', ( $attributes['contentPadding']['Mobile']['top'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Mobile']['right'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-right', ( $attributes['contentPadding']['Mobile']['right'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Mobile']['bottom'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-bottom', ( $attributes['contentPadding']['Mobile']['bottom'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Mobile']['left'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'padding-left', ( $attributes['contentPadding']['Mobile']['left'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	//Second Content styles
	if ( isset( $attributes['contentStyles'] ) ) {
		if ( isset( $attributes['contentStyles']['contentHeightMobile'] ) && isset( $attributes['contentStyles']['contentHeightType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
			$css->add_property( 'min-height', $css->render_color( $attributes['contentStyles']['contentHeightMobile'] . ( isset( $attributes['contentStyles']['contentHeightType'] ) ? $attributes['contentStyles']['contentHeightType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['secondContentStyles'] ) ) {
		if ( isset( $attributes['secondContentStyles']['secondContentfontSizeMobile'] ) && isset( $attributes['secondContentStyles']['secondContentfontSizeType'] ) ) {
			$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' . ' > .premium-content-switcher-second-content' );
			$css->add_property( 'font-size', $css->render_color( $attributes['secondContentStyles']['secondContentfontSizeMobile'] . ( isset( $attributes['secondContentStyles']['secondContentfontSizeType'] ) ? $attributes['secondContentStyles']['secondContentfontSizeType'] : 'px' ) . '!important' ) );
		}
	}
	if ( isset( $attributes['contentPadding']['Mobile']['top'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-top', ( $attributes['contentPadding']['Mobile']['top'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Mobile']['right'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-right', ( $attributes['contentPadding']['Mobile']['right'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Mobile']['bottom'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-bottom', ( $attributes['contentPadding']['Mobile']['bottom'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['contentPadding']['Mobile']['left'] ) && isset( $attributes['contentPadding']['unit'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'padding-left', ( $attributes['contentPadding']['Mobile']['left'] . ( isset( $attributes['contentPadding']['unit'] ) ? $attributes['contentPadding']['unit'] : 'px' ) . '!important' ) );
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