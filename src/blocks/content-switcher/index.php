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
	if ( isset( $attr['containerborder']['borderWidth']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-width', ( $attr['containerborder']['borderWidth']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderWidth']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-right-width', ( $attr['containerborder']['borderWidth']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderWidth']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-width', ( $attr['containerborder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderWidth']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-left-width', ( $attr['containerborder']['borderWidth']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-left-radius', ( $attr['containerborder']['borderRadius']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-right-radius', ( $attr['containerborder']['borderRadius']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-right-radius', ( $attr['containerborder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-left-radius', ( $attr['containerborder']['borderRadius']['Desktop']['left'] . 'px' ) );
	}

	//First Label styles
	if ( isset( $attributes['firstLabelTypography']['fontSize']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['firstLabelTypography']['fontSize']['Desktop'] . ( isset( $attributes['firstLabelTypography']['fontSize']['unit'] ) ? $attributes['firstLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['labelSpacing']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-right', ( $attributes['labelSpacing']['Desktop'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-bottom', ( $attributes['labelSpacing']['Desktop'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-width', ( $attr['firstLabelborder']['borderWidth']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-right-width', ( $attr['firstLabelborder']['borderWidth']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-width', ( $attr['firstLabelborder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-left-width', ( $attr['firstLabelborder']['borderWidth']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-left-radius', ( $attr['firstLabelborder']['borderRadius']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-right-radius', ( $attr['firstLabelborder']['borderRadius']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['firstLabelborder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['firstLabelborder']['borderRadius']['Desktop']['left'] . 'px' ) );
	}

	//Second Label styles
	if ( isset( $attributes['secondLabelTypography']['fontSize']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['secondLabelTypography']['fontSize']['Desktop'] . ( isset( $attributes['secondLabelTypography']['fontSize']['unit'] ) ? $attributes['secondLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['labelSpacing']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-second-label');
		$css->add_property( 'margin-left', ( $attributes['labelSpacing']['Desktop'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'margin-top', ( $attributes['labelSpacing']['Desktop'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-width', ( $attr['secondLabelborder']['borderWidth']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-right-width', ( $attr['secondLabelborder']['borderWidth']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-width', ( $attr['secondLabelborder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-left-width', ( $attr['secondLabelborder']['borderWidth']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-left-radius', ( $attr['secondLabelborder']['borderRadius']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-right-radius', ( $attr['secondLabelborder']['borderRadius']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['secondLabelborder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['secondLabelborder']['borderRadius']['Desktop']['left'] . 'px' ) );
	}

	//Switch styles
	if ( isset( $attributes['switchSize']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch');
		$css->add_property( 'font-size', ( $attributes['switchSize']['Desktop'] . 'px !important' ) );
	}
	if ( isset( $attributes['switchRadius'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switchRadius'] . ( isset( $attributes['switchRadiusUnit'] ) ? $attributes['switchRadiusUnit'] : 'em' ) . '!important' ) );
	}
	if ( isset( $attributes['containerRadius'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider::before');
		$css->add_property( 'border-radius', $css->render_color( $attributes['containerRadius'] . ( isset( $attributes['containerRadiusUnit'] ) ? $attributes['containerRadiusUnit'] : '%' ) . '!important' ) );
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
	if ( isset( $attributes['contentHeight']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'min-height', ( $attributes['contentHeight']['Desktop'] . ( isset( $attributes['contentHeight']['unit'] ) ? $attributes['contentHeight']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentTypography']['fontSize']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' . ' > .premium-content-switcher-first-content' );
		$css->add_property( 'font-size', ( $attributes['firstContentTypography']['fontSize']['Desktop'] . ( isset( $attributes['firstContentTypography']['fontSize']['unit'] ) ? $attributes['firstContentTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attr['firstContentborder']['borderWidth']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-top-width', ( $attr['firstContentborder']['borderWidth']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderWidth']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-right-width', ( $attr['firstContentborder']['borderWidth']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderWidth']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-bottom-width', ( $attr['firstContentborder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderWidth']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-left-width', ( $attr['firstContentborder']['borderWidth']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-top-left-radius', ( $attr['firstContentborder']['borderRadius']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-top-right-radius', ( $attr['firstContentborder']['borderRadius']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['firstContentborder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['firstContentborder']['borderRadius']['Desktop']['left'] . 'px' ) );
	}

	//Second Content styles
	if ( isset( $attributes['contentHeight']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'min-height', ( $attributes['contentHeight']['Desktop'] . ( isset( $attributes['contentHeight']['unit'] ) ? $attributes['contentHeight']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondContentTypography']['fontSize']['Desktop'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' . ' > .premium-content-switcher-second-content' );
		$css->add_property( 'font-size', ( $attributes['secondContentTypography']['fontSize']['Desktop'] . ( isset( $attributes['secondContentTypography']['fontSize']['unit'] ) ? $attributes['secondContentTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attr['secondContentborder']['borderWidth']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-top-width', ( $attr['secondContentborder']['borderWidth']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderWidth']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-right-width', ( $attr['secondContentborder']['borderWidth']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderWidth']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-bottom-width', ( $attr['secondContentborder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderWidth']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-left-width', ( $attr['secondContentborder']['borderWidth']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Desktop']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-top-left-radius', ( $attr['secondContentborder']['borderRadius']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Desktop']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-top-right-radius', ( $attr['secondContentborder']['borderRadius']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Desktop']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['secondContentborder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Desktop']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['secondContentborder']['borderRadius']['Desktop']['left'] . 'px' ) );
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
	if ( isset( $attr['containerborder']['borderWidth']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-width', ( $attr['containerborder']['borderWidth']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderWidth']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-right-width', ( $attr['containerborder']['borderWidth']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderWidth']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-width', ( $attr['containerborder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderWidth']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-left-width', ( $attr['containerborder']['borderWidth']['Tablet']['left'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-left-radius', ( $attr['containerborder']['borderRadius']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-right-radius', ( $attr['containerborder']['borderRadius']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-right-radius', ( $attr['containerborder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-left-radius', ( $attr['containerborder']['borderRadius']['Tablet']['left'] . 'px' ) );
	}

	//First Label styles
	if ( isset( $attributes['firstLabelTypography']['fontSize']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['firstLabelTypography']['fontSize']['Tablet'] . ( isset( $attributes['firstLabelTypography']['fontSize']['unit'] ) ? $attributes['firstLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['labelSpacing']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-right', ( $attributes['labelSpacing']['Tablet'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-bottom', ( $attributes['labelSpacing']['Tablet'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-width', ( $attr['firstLabelborder']['borderWidth']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-right-width', ( $attr['firstLabelborder']['borderWidth']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-width', ( $attr['firstLabelborder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-left-width', ( $attr['firstLabelborder']['borderWidth']['Tablet']['left'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-left-radius', ( $attr['firstLabelborder']['borderRadius']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-right-radius', ( $attr['firstLabelborder']['borderRadius']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['firstLabelborder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['firstLabelborder']['borderRadius']['Tablet']['left'] . 'px' ) );
	}

	//Second Label styles
	if ( isset( $attributes['secondLabelTypography']['fontSize']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['secondLabelTypography']['fontSize']['Tablet'] . ( isset( $attributes['secondLabelTypography']['fontSize']['unit'] ) ? $attributes['secondLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['labelSpacing']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-second-label');
		$css->add_property( 'margin-left', ( $attributes['labelSpacing']['Tablet'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'margin-top', ( $attributes['labelSpacing']['Tablet'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-width', ( $attr['secondLabelborder']['borderWidth']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-right-width', ( $attr['secondLabelborder']['borderWidth']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-width', ( $attr['secondLabelborder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-left-width', ( $attr['secondLabelborder']['borderWidth']['Tablet']['left'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-left-radius', ( $attr['secondLabelborder']['borderRadius']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-right-radius', ( $attr['secondLabelborder']['borderRadius']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['secondLabelborder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['secondLabelborder']['borderRadius']['Tablet']['left'] . 'px' ) );
	}

	//Switch styles
	if ( isset( $attributes['switchSize']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch');
		$css->add_property( 'font-size', ( $attributes['switchSize']['Tablet'] . 'px !important' ) );
	}
	if ( isset( $attributes['switchRadius'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switchRadius'] . ( isset( $attributes['switchRadiusUnit'] ) ? $attributes['switchRadiusUnit'] : 'em' ) . '!important' ) );
	}
	if ( isset( $attributes['containerRadius'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider::before');
		$css->add_property( 'border-radius', $css->render_color( $attributes['containerRadius'] . ( isset( $attributes['containerRadiusUnit'] ) ? $attributes['containerRadiusUnit'] : '%' ) . '!important' ) );
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
	if ( isset( $attributes['contentHeight']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'min-height', ( $attributes['contentHeight']['Tablet'] . ( isset( $attributes['contentHeight']['unit'] ) ? $attributes['contentHeight']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentTypography']['fontSize']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' . ' > .premium-content-switcher-first-content' );
		$css->add_property( 'font-size', ( $attributes['firstContentTypography']['fontSize']['Tablet'] . ( isset( $attributes['firstContentTypography']['fontSize']['unit'] ) ? $attributes['firstContentTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attr['firstContentborder']['borderWidth']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-top-width', ( $attr['firstContentborder']['borderWidth']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderWidth']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-right-width', ( $attr['firstContentborder']['borderWidth']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderWidth']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-bottom-width', ( $attr['firstContentborder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderWidth']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-left-width', ( $attr['firstContentborder']['borderWidth']['Tablet']['left'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-top-left-radius', ( $attr['firstContentborder']['borderRadius']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-top-right-radius', ( $attr['firstContentborder']['borderRadius']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['firstContentborder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['firstContentborder']['borderRadius']['Tablet']['left'] . 'px' ) );
	}

	//Second Content styles
	if ( isset( $attributes['contentHeight']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'min-height', ( $attributes['contentHeight']['Tablet'] . ( isset( $attributes['contentHeight']['unit'] ) ? $attributes['contentHeight']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondContentTypography']['fontSize']['Tablet'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' . ' > .premium-content-switcher-second-content' );
		$css->add_property( 'font-size', ( $attributes['secondContentTypography']['fontSize']['Tablet'] . ( isset( $attributes['secondContentTypography']['fontSize']['unit'] ) ? $attributes['secondContentTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attr['secondContentborder']['borderWidth']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-top-width', ( $attr['secondContentborder']['borderWidth']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderWidth']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-right-width', ( $attr['secondContentborder']['borderWidth']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderWidth']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-bottom-width', ( $attr['secondContentborder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderWidth']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-left-width', ( $attr['secondContentborder']['borderWidth']['Tablet']['left'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Tablet']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-top-left-radius', ( $attr['secondContentborder']['borderRadius']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Tablet']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-top-right-radius', ( $attr['secondContentborder']['borderRadius']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Tablet']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['secondContentborder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Tablet']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['secondContentborder']['borderRadius']['Tablet']['left'] . 'px' ) );
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
	if ( isset( $attr['containerborder']['borderWidth']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-width', ( $attr['containerborder']['borderWidth']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderWidth']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-right-width', ( $attr['containerborder']['borderWidth']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderWidth']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-width', ( $attr['containerborder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderWidth']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-left-width', ( $attr['containerborder']['borderWidth']['Mobile']['left'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-left-radius', ( $attr['containerborder']['borderRadius']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-right-radius', ( $attr['containerborder']['borderRadius']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-right-radius', ( $attr['containerborder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['containerborder']['borderRadius']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-left-radius', ( $attr['containerborder']['borderRadius']['Mobile']['left'] . 'px' ) );
	}

	//First Label styles
	if ( isset( $attributes['firstLabelTypography']['fontSize']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['firstLabelTypography']['fontSize']['Mobile'] . ( isset( $attributes['firstLabelTypography']['fontSize']['unit'] ) ? $attributes['firstLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['labelSpacing']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-right', ( $attributes['labelSpacing']['Mobile'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-bottom', ( $attributes['labelSpacing']['Mobile'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-width', ( $attr['firstLabelborder']['borderWidth']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-right-width', ( $attr['firstLabelborder']['borderWidth']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-width', ( $attr['firstLabelborder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderWidth']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-left-width', ( $attr['firstLabelborder']['borderWidth']['Mobile']['left'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-left-radius', ( $attr['firstLabelborder']['borderRadius']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-right-radius', ( $attr['firstLabelborder']['borderRadius']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['firstLabelborder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstLabelborder']['borderRadius']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['firstLabelborder']['borderRadius']['Mobile']['left'] . 'px' ) );
	}

	//Second Label styles
	if ( isset( $attributes['secondLabelTypography']['fontSize']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['secondLabelTypography']['fontSize']['Mobile'] . ( isset( $attributes['secondLabelTypography']['fontSize']['unit'] ) ? $attributes['secondLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attributes['labelSpacing']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-second-label');
		$css->add_property( 'margin-left', ( $attributes['labelSpacing']['Mobile'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'margin-top', ( $attributes['labelSpacing']['Mobile'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-width', ( $attr['secondLabelborder']['borderWidth']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-right-width', ( $attr['secondLabelborder']['borderWidth']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-width', ( $attr['secondLabelborder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderWidth']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-left-width', ( $attr['secondLabelborder']['borderWidth']['Mobile']['left'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-left-radius', ( $attr['secondLabelborder']['borderRadius']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-right-radius', ( $attr['secondLabelborder']['borderRadius']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['secondLabelborder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondLabelborder']['borderRadius']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['secondLabelborder']['borderRadius']['Mobile']['left'] . 'px' ) );
	}

	//Switch styles
	if ( isset( $attributes['switchSize']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch');
		$css->add_property( 'font-size', ( $attributes['switchSize']['Mobile'] . 'px !important' ) );
	}
	if ( isset( $attributes['switchRadius'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switchRadius'] . ( isset( $attributes['switchRadiusUnit'] ) ? $attributes['switchRadiusUnit'] : 'em' ) . '!important' ) );
	}
	if ( isset( $attributes['containerRadius'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider::before');
		$css->add_property( 'border-radius', $css->render_color( $attributes['containerRadius'] . ( isset( $attributes['containerRadiusUnit'] ) ? $attributes['containerRadiusUnit'] : '%' ) . '!important' ) );
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
	if ( isset( $attributes['contentHeight']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'min-height', ( $attributes['contentHeight']['Mobile'] . ( isset( $attributes['contentHeight']['unit'] ) ? $attributes['contentHeight']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstContentTypography']['fontSize']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' . ' > .premium-content-switcher-first-content' );
		$css->add_property( 'font-size', ( $attributes['firstContentTypography']['fontSize']['Mobile'] . ( isset( $attributes['firstContentTypography']['fontSize']['unit'] ) ? $attributes['firstContentTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attr['firstContentborder']['borderWidth']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-top-width', ( $attr['firstContentborder']['borderWidth']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderWidth']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-right-width', ( $attr['firstContentborder']['borderWidth']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderWidth']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-bottom-width', ( $attr['firstContentborder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderWidth']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-left-width', ( $attr['firstContentborder']['borderWidth']['Mobile']['left'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-top-left-radius', ( $attr['firstContentborder']['borderRadius']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-top-right-radius', ( $attr['firstContentborder']['borderRadius']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['firstContentborder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['firstContentborder']['borderRadius']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-first-list' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['firstContentborder']['borderRadius']['Mobile']['left'] . 'px' ) );
	}

	//Second Content styles
	if ( isset( $attributes['contentHeight']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'min-height', ( $attributes['contentHeight']['Mobile'] . ( isset( $attributes['contentHeight']['unit'] ) ? $attributes['contentHeight']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondContentTypography']['fontSize']['Mobile'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' . ' > .premium-content-switcher-second-content' );
		$css->add_property( 'font-size', ( $attributes['secondContentTypography']['fontSize']['Mobile'] . ( isset( $attributes['secondContentTypography']['fontSize']['unit'] ) ? $attributes['secondContentTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
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
	if ( isset( $attr['secondContentborder']['borderWidth']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-top-width', ( $attr['secondContentborder']['borderWidth']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderWidth']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-right-width', ( $attr['secondContentborder']['borderWidth']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderWidth']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-bottom-width', ( $attr['secondContentborder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderWidth']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-left-width', ( $attr['secondContentborder']['borderWidth']['Mobile']['left'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Mobile']['top'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-top-left-radius', ( $attr['secondContentborder']['borderRadius']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Mobile']['right'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-top-right-radius', ( $attr['secondContentborder']['borderRadius']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Mobile']['bottom'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-bottom-right-radius', ( $attr['secondContentborder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attr['secondContentborder']['borderRadius']['Mobile']['left'] ) ) {
		$css->set_selector( '#premium-content-switcher-' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-list' . ' > .premium-content-switcher-two-content' . ' > .premium-content-switcher-second-list' );
		$css->add_property( 'border-bottom-left-radius', ( $attr['secondContentborder']['borderRadius']['Mobile']['left'] . 'px' ) );
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