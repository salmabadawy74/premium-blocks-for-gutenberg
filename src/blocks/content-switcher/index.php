<?php
/**
 * Server-side rendering of the `pbg/content-switcher` block.
 *
 * @package WordPress
 */

function get_content_switcher_css_style( $attributes, $unique_id ) {
	$block_helpers          = new pbg_blocks_helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
	$unique_id = $attributes['blockId'];

	if ( isset( $attributes['firstLabelTypography']['fontFamily'] ) ) {
		$block_helpers->add_gfont(
			array(
				'fontFamily'  => ( isset( $attributes['firstLabelTypography']['fontFamily'] ) ? $attributes['firstLabelTypography']['fontFamily'] : '' ),
				'fontVariant' => ( isset( $attributes['firstLabelTypography']['fontWeight'] ) ? $attributes['firstLabelTypography']['fontWeight'] : '' ),
				)
		);
	}
	if ( isset( $attributes['secondLabelTypography']['fontFamily'] ) ) {
		$block_helpers->add_gfont(
			array(
				'fontFamily'  => ( isset( $attributes['secondLabelTypography']['fontFamily'] ) ? $attributes['secondLabelTypography']['fontFamily'] : '' ),
				'fontVariant' => ( isset( $attributes['secondLabelTypography']['fontWeight'] ) ? $attributes['secondLabelTypography']['fontWeight'] : '' ),
				)
		);
	}

	//Container styles
	if ( isset( $attributes['align']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'text-align', ( $attributes['align']['Desktop'] . '!important' ) );
	}
	if ( isset( $attributes['align']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'text-align', ( $attributes['align']['Desktop'] . '!important' ) );
	}
	if ( isset( $attributes['align']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] );
		$css->add_property( 'text-align', ( $attributes['align']['Desktop'] . '!important' ) );
		$css->add_property( 'justify-content', (  $attributes['align']['Desktop'] == "right"  ? "flex-end" : ($attributes['align']['Desktop'] == "left" ? "flex-start" : $attributes['align']['Desktop']) . '!important' ) );
		$css->add_property( 'align-items', ( $attributes['display'] == "inline" ? "center" : ($attributes['align']['Desktop'] == "right"  ? "flex-end" : ($attributes['align']['Desktop'] == "left" ? "flex-start" : $attributes['align']['Desktop'])) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Desktop']['top'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-top', ( $attributes['containerPadding']['Desktop']['top'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Desktop']['right'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-right', ( $attributes['containerPadding']['Desktop']['right'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Desktop']['bottom'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-bottom', ( $attributes['containerPadding']['Desktop']['bottom'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Desktop']['left'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-left', ( $attributes['containerPadding']['Desktop']['left'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Desktop']['top'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-top', ( $attributes['containerMargin']['Desktop']['top'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Desktop']['right'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-right', ( $attributes['containerMargin']['Desktop']['right'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Desktop']['bottom'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-bottom', ( $attributes['containerMargin']['Desktop']['bottom'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Desktop']['left'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-left', ( $attributes['containerMargin']['Desktop']['left'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Desktop']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-width', ( $attributes['containerborder']['borderWidth']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Desktop']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-right-width', ( $attributes['containerborder']['borderWidth']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Desktop']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-width', ( $attributes['containerborder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Desktop']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-left-width', ( $attributes['containerborder']['borderWidth']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Desktop']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-left-radius', ( $attributes['containerborder']['borderRadius']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Desktop']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-right-radius', ( $attributes['containerborder']['borderRadius']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Desktop']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-right-radius', ( $attributes['containerborder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Desktop']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-left-radius', ( $attributes['containerborder']['borderRadius']['Desktop']['left'] . 'px' ) );
	}

	//First Label styles
	if ( isset( $attributes['firstLabelTypography']['fontSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['firstLabelTypography']['fontSize']['Desktop'] . ( isset( $attributes['firstLabelTypography']['fontSize']['unit'] ) ? $attributes['firstLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
	}
    if ( isset( $attributes['firstLabelTypography']['lineHeight']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'line-height', ( $attributes['firstLabelTypography']['lineHeight']['Desktop'] .  'px'  . '!important' ) );
	}
    if ( isset( $attributes['firstLabelTypography']['letterSpacing']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'letter-spacing', ( $attributes['firstLabelTypography']['letterSpacing']['Desktop'] .  'px'  . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Desktop']['top'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['firstLabelPadding']['Desktop']['top'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Desktop']['right'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['firstLabelPadding']['Desktop']['right'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Desktop']['bottom'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['firstLabelPadding']['Desktop']['bottom'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Desktop']['left'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['firstLabelPadding']['Desktop']['left'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelSpacing']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-right', ( $attributes['labelSpacing']['Desktop'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-bottom', ( $attributes['labelSpacing']['Desktop'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Desktop']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-width', ( $attributes['firstLabelborder']['borderWidth']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Desktop']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-right-width', ( $attributes['firstLabelborder']['borderWidth']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Desktop']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-width', ( $attributes['firstLabelborder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Desktop']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-left-width', ( $attributes['firstLabelborder']['borderWidth']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Desktop']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-left-radius', ( $attributes['firstLabelborder']['borderRadius']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Desktop']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-right-radius', ( $attributes['firstLabelborder']['borderRadius']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Desktop']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-right-radius', ( $attributes['firstLabelborder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Desktop']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-left-radius', ( $attributes['firstLabelborder']['borderRadius']['Desktop']['left'] . 'px' ) );
	}

	//Second Label styles
	if ( isset( $attributes['secondLabelTypography']['fontSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['secondLabelTypography']['fontSize']['Desktop'] . ( isset( $attributes['secondLabelTypography']['fontSize']['unit'] ) ? $attributes['secondLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
	}
    if ( isset( $attributes['secondLabelTypography']['lineHeight']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'line-height', ( $attributes['secondLabelTypography']['lineHeight']['Desktop'] .  'px'  . '!important' ) );
	}
    if ( isset( $attributes['secondLabelTypography']['letterSpacing']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'letter-spacing', ( $attributes['secondLabelTypography']['letterSpacing']['Desktop'] .  'px'  . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Desktop']['top'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['secondLabelPadding']['Desktop']['top'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Desktop']['right'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['secondLabelPadding']['Desktop']['right'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Desktop']['bottom'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['secondLabelPadding']['Desktop']['bottom'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Desktop']['left'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['secondLabelPadding']['Desktop']['left'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelSpacing']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-second-label');
		$css->add_property( 'margin-left', ( $attributes['labelSpacing']['Desktop'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'margin-top', ( $attributes['labelSpacing']['Desktop'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Desktop']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-width', ( $attributes['secondLabelborder']['borderWidth']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Desktop']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-right-width', ( $attributes['secondLabelborder']['borderWidth']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Desktop']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-width', ( $attributes['secondLabelborder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Desktop']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-left-width', ( $attributes['secondLabelborder']['borderWidth']['Desktop']['left'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Desktop']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-left-radius', ( $attributes['secondLabelborder']['borderRadius']['Desktop']['top'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Desktop']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-right-radius', ( $attributes['secondLabelborder']['borderRadius']['Desktop']['right'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Desktop']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-right-radius', ( $attributes['secondLabelborder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Desktop']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-left-radius', ( $attributes['secondLabelborder']['borderRadius']['Desktop']['left'] . 'px' ) );
	}

	//Switch styles
	if ( isset( $attributes['switchSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch');
		$css->add_property( 'font-size', ( $attributes['switchSize']['Desktop'] . 'px !important' ) );
	}
	if ( isset( $attributes['switchRadius'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switchRadius'] . ( isset( $attributes['switchRadiusUnit'] ) ? $attributes['switchRadiusUnit'] : 'em' ) . '!important' ) );
	}
	if ( isset( $attributes['containerRadius'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider::before');
		$css->add_property( 'border-radius', $css->render_color( $attributes['containerRadius'] . ( isset( $attributes['containerRadiusUnit'] ) ? $attributes['containerRadiusUnit'] : '%' ) . '!important' ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	//Container styles
	if ( isset( $attributes['align']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'text-align', ( $attributes['align']['Tablet'] . '!important' ) );
	}
	if ( isset( $attributes['align']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'text-align', ( $attributes['align']['Tablet'] . '!important' ) );
	}
	if ( isset( $attributes['align']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] );
		$css->add_property( 'text-align', ( $attributes['align']['Tablet'] . '!important' ) );
		$css->add_property( 'justify-content', (  $attributes['align']['Tablet'] == "right"  ? "flex-end" : ($attributes['align']['Tablet'] == "left" ? "flex-start" : $attributes['align']['Tablet']) . '!important' ) );
		$css->add_property( 'align-items', ( $attributes['display'] == "inline" ? "center" : ($attributes['align']['Tablet'] == "right"  ? "flex-end" : ($attributes['align']['Tablet'] == "left" ? "flex-start" : $attributes['align']['Tablet'])) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Tablet']['top'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-top', ( $attributes['containerPadding']['Tablet']['top'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Tablet']['right'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-right', ( $attributes['containerPadding']['Tablet']['right'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Tablet']['bottom'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-bottom', ( $attributes['containerPadding']['Tablet']['bottom'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Tablet']['left'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-left', ( $attributes['containerPadding']['Tablet']['left'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Tablet']['top'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-top', ( $attributes['containerMargin']['Tablet']['top'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Tablet']['right'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-right', ( $attributes['containerMargin']['Tablet']['right'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Tablet']['bottom'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-bottom', ( $attributes['containerMargin']['Tablet']['bottom'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Tablet']['left'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-left', ( $attributes['containerMargin']['Tablet']['left'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Tablet']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-width', ( $attributes['containerborder']['borderWidth']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Tablet']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-right-width', ( $attributes['containerborder']['borderWidth']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Tablet']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-width', ( $attributes['containerborder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Tablet']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-left-width', ( $attributes['containerborder']['borderWidth']['Tablet']['left'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Tablet']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-left-radius', ( $attributes['containerborder']['borderRadius']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Tablet']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-right-radius', ( $attributes['containerborder']['borderRadius']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Tablet']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-right-radius', ( $attributes['containerborder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Tablet']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-left-radius', ( $attributes['containerborder']['borderRadius']['Tablet']['left'] . 'px' ) );
	}

	//First Label styles
	if ( isset( $attributes['firstLabelTypography']['fontSize']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['firstLabelTypography']['fontSize']['Tablet'] . ( isset( $attributes['firstLabelTypography']['fontSize']['unit'] ) ? $attributes['firstLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
	}
    if ( isset( $attributes['firstLabelTypography']['lineHeight']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'line-height', ( $attributes['firstLabelTypography']['lineHeight']['Tablet'] .  'px'  . '!important' ) );
	}
    if ( isset( $attributes['firstLabelTypography']['letterSpacing']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'letter-spacing', ( $attributes['firstLabelTypography']['letterSpacing']['Tablet'] .  'px'  . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Tablet']['top'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['firstLabelPadding']['Tablet']['top'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Tablet']['right'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['firstLabelPadding']['Tablet']['right'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Tablet']['bottom'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['firstLabelPadding']['Tablet']['bottom'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Tablet']['left'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['firstLabelPadding']['Tablet']['left'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelSpacing']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-right', ( $attributes['labelSpacing']['Tablet'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-bottom', ( $attributes['labelSpacing']['Tablet'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Tablet']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-width', ( $attributes['firstLabelborder']['borderWidth']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Tablet']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-right-width', ( $attributes['firstLabelborder']['borderWidth']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Tablet']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-width', ( $attributes['firstLabelborder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Tablet']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-left-width', ( $attributes['firstLabelborder']['borderWidth']['Tablet']['left'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Tablet']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-left-radius', ( $attributes['firstLabelborder']['borderRadius']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Tablet']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-right-radius', ( $attributes['firstLabelborder']['borderRadius']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Tablet']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-right-radius', ( $attributes['firstLabelborder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Tablet']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-left-radius', ( $attributes['firstLabelborder']['borderRadius']['Tablet']['left'] . 'px' ) );
	}

	//Second Label styles
	if ( isset( $attributes['secondLabelTypography']['fontSize']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['secondLabelTypography']['fontSize']['Tablet'] . ( isset( $attributes['secondLabelTypography']['fontSize']['unit'] ) ? $attributes['secondLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
	}
    if ( isset( $attributes['secondLabelTypography']['lineHeight']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'line-height', ( $attributes['secondLabelTypography']['lineHeight']['Tablet'] .  'px'  . '!important' ) );
	}
    if ( isset( $attributes['secondLabelTypography']['letterSpacing']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'letter-spacing', ( $attributes['secondLabelTypography']['letterSpacing']['Tablet'] .  'px'  . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Tablet']['top'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['secondLabelPadding']['Tablet']['top'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Tablet']['right'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['secondLabelPadding']['Tablet']['right'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Tablet']['bottom'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['secondLabelPadding']['Tablet']['bottom'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Tablet']['left'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['secondLabelPadding']['Tablet']['left'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelSpacing']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-second-label');
		$css->add_property( 'margin-left', ( $attributes['labelSpacing']['Tablet'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'margin-top', ( $attributes['labelSpacing']['Tablet'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Tablet']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-width', ( $attributes['secondLabelborder']['borderWidth']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Tablet']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-right-width', ( $attributes['secondLabelborder']['borderWidth']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Tablet']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-width', ( $attributes['secondLabelborder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Tablet']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-left-width', ( $attributes['secondLabelborder']['borderWidth']['Tablet']['left'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Tablet']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-left-radius', ( $attributes['secondLabelborder']['borderRadius']['Tablet']['top'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Tablet']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-right-radius', ( $attributes['secondLabelborder']['borderRadius']['Tablet']['right'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Tablet']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-right-radius', ( $attributes['secondLabelborder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Tablet']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-left-radius', ( $attributes['secondLabelborder']['borderRadius']['Tablet']['left'] . 'px' ) );
	}

	//Switch styles
	if ( isset( $attributes['switchSize']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch');
		$css->add_property( 'font-size', ( $attributes['switchSize']['Tablet'] . 'px !important' ) );
	}
	if ( isset( $attributes['switchRadius'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switchRadius'] . ( isset( $attributes['switchRadiusUnit'] ) ? $attributes['switchRadiusUnit'] : 'em' ) . '!important' ) );
	}
	if ( isset( $attributes['containerRadius'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider::before');
		$css->add_property( 'border-radius', $css->render_color( $attributes['containerRadius'] . ( isset( $attributes['containerRadiusUnit'] ) ? $attributes['containerRadiusUnit'] : '%' ) . '!important' ) );
	}

	$css->stop_media_query();

	$css->start_media_query( $media_query['mobile'] );

	//Container styles
	if ( isset( $attributes['align']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'text-align', ( $attributes['align']['Mobile'] . '!important' ) );
	}
	if ( isset( $attributes['align']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'text-align', ( $attributes['align']['Mobile'] . '!important' ) );
	}
	if ( isset( $attributes['align']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] );
		$css->add_property( 'text-align', ( $attributes['align']['Mobile'] . '!important' ) );
		$css->add_property( 'justify-content', (  $attributes['align']['Mobile'] == "right"  ? "flex-end" : ($attributes['align']['Mobile'] == "left" ? "flex-start" : $attributes['align']['Mobile']) . '!important' ) );
		$css->add_property( 'align-items', ( $attributes['display'] == "inline" ? "center" : ($attributes['align']['Mobile'] == "right"  ? "flex-end" : ($attributes['align']['Mobile'] == "left" ? "flex-start" : $attributes['align']['Mobile'])) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Mobile']['top'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-top', ( $attributes['containerPadding']['Mobile']['top'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Mobile']['right'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' );
		$css->add_property( 'padding-right', ( $attributes['containerPadding']['Mobile']['right'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Mobile']['bottom'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-bottom', ( $attributes['containerPadding']['Mobile']['bottom'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerPadding']['Mobile']['left'] ) && isset( $attributes['containerPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'padding-left', ( $attributes['containerPadding']['Mobile']['left'] . ( isset( $attributes['containerPadding']['unit'] ) ? $attributes['containerPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Mobile']['top'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-top', ( $attributes['containerMargin']['Mobile']['top'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Mobile']['right'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-right', ( $attributes['containerMargin']['Mobile']['right'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Mobile']['bottom'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-bottom', ( $attributes['containerMargin']['Mobile']['bottom'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerMargin']['Mobile']['left'] ) && isset( $attributes['containerMargin']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'margin-left', ( $attributes['containerMargin']['Mobile']['left'] . ( isset( $attributes['containerMargin']['unit'] ) ? $attributes['containerMargin']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Mobile']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-width', ( $attributes['containerborder']['borderWidth']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Mobile']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-right-width', ( $attributes['containerborder']['borderWidth']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Mobile']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-width', ( $attributes['containerborder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderWidth']['Mobile']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-left-width', ( $attributes['containerborder']['borderWidth']['Mobile']['left'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Mobile']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-left-radius', ( $attributes['containerborder']['borderRadius']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Mobile']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-top-right-radius', ( $attributes['containerborder']['borderRadius']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Mobile']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-right-radius', ( $attributes['containerborder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['containerborder']['borderRadius']['Mobile']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher');
		$css->add_property( 'border-bottom-left-radius', ( $attributes['containerborder']['borderRadius']['Mobile']['left'] . 'px' ) );
	}

	//First Label styles
	if ( isset( $attributes['firstLabelTypography']['fontSize']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['firstLabelTypography']['fontSize']['Mobile'] . ( isset( $attributes['firstLabelTypography']['fontSize']['unit'] ) ? $attributes['firstLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
	}
    if ( isset( $attributes['firstLabelTypography']['lineHeight']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'line-height', ( $attributes['firstLabelTypography']['lineHeight']['Mobile'] .  'px'  . '!important' ) );
	}
    if ( isset( $attributes['firstLabelTypography']['letterSpacing']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'letter-spacing', ( $attributes['firstLabelTypography']['letterSpacing']['Mobile'] .  'px'  . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Mobile']['top'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['firstLabelPadding']['Mobile']['top'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Mobile']['right'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['firstLabelPadding']['Mobile']['right'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Mobile']['bottom'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['firstLabelPadding']['Mobile']['bottom'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['firstLabelPadding']['Mobile']['left'] ) && isset( $attributes['firstLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['firstLabelPadding']['Mobile']['left'] . ( isset( $attributes['firstLabelPadding']['unit'] ) ? $attributes['firstLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelSpacing']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-right', ( $attributes['labelSpacing']['Mobile'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-first-label' );
		$css->add_property( 'margin-bottom', ( $attributes['labelSpacing']['Mobile'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Mobile']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-width', ( $attributes['firstLabelborder']['borderWidth']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Mobile']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-right-width', ( $attributes['firstLabelborder']['borderWidth']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Mobile']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-width', ( $attributes['firstLabelborder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderWidth']['Mobile']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-left-width', ( $attributes['firstLabelborder']['borderWidth']['Mobile']['left'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Mobile']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-left-radius', ( $attributes['firstLabelborder']['borderRadius']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Mobile']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-top-right-radius', ( $attributes['firstLabelborder']['borderRadius']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Mobile']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-right-radius', ( $attributes['firstLabelborder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['firstLabelborder']['borderRadius']['Mobile']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'border-bottom-left-radius', ( $attributes['firstLabelborder']['borderRadius']['Mobile']['left'] . 'px' ) );
	}

	//Second Label styles
	if ( isset( $attributes['secondLabelTypography']['fontSize']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'font-size', ( $attributes['secondLabelTypography']['fontSize']['Mobile'] . ( isset( $attributes['secondLabelTypography']['fontSize']['unit'] ) ? $attributes['secondLabelTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
	}
    if ( isset( $attributes['secondLabelTypography']['lineHeight']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'line-height', ( $attributes['secondLabelTypography']['lineHeight']['Mobile'] .  'px'  . '!important' ) );
	}
    if ( isset( $attributes['secondLabelTypography']['letterSpacing']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-first-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'letter-spacing', ( $attributes['secondLabelTypography']['letterSpacing']['Mobile'] .  'px'  . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Mobile']['top'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-top', ( $attributes['secondLabelPadding']['Mobile']['top'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Mobile']['right'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-right', ( $attributes['secondLabelPadding']['Mobile']['right'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Mobile']['bottom'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-bottom', ( $attributes['secondLabelPadding']['Mobile']['bottom'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['secondLabelPadding']['Mobile']['left'] ) && isset( $attributes['secondLabelPadding']['unit'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-second-label' . ' > .premium-content-switcher-' . $attributes['display'] . '-editing' );
		$css->add_property( 'padding-left', ( $attributes['secondLabelPadding']['Mobile']['left'] . ( isset( $attributes['secondLabelPadding']['unit'] ) ? $attributes['secondLabelPadding']['unit'] : 'px' ) . '!important' ) );
	}
	if ( isset( $attributes['labelSpacing']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-inline' . ' > .premium-content-switcher-second-label');
		$css->add_property( 'margin-left', ( $attributes['labelSpacing']['Mobile'] . 'px' ) );
	}
	if ( isset( $attributes['labelSpacing']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'margin-top', ( $attributes['labelSpacing']['Mobile'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Mobile']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-width', ( $attributes['secondLabelborder']['borderWidth']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Mobile']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-right-width', ( $attributes['secondLabelborder']['borderWidth']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Mobile']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-width', ( $attributes['secondLabelborder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderWidth']['Mobile']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-left-width', ( $attributes['secondLabelborder']['borderWidth']['Mobile']['left'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Mobile']['top'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-left-radius', ( $attributes['secondLabelborder']['borderRadius']['Mobile']['top'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Mobile']['right'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-top-right-radius', ( $attributes['secondLabelborder']['borderRadius']['Mobile']['right'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Mobile']['bottom'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-right-radius', ( $attributes['secondLabelborder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
	}
	if ( isset( $attributes['secondLabelborder']['borderRadius']['Mobile']['left'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-block' . ' > .premium-content-switcher-second-label' );
		$css->add_property( 'border-bottom-left-radius', ( $attributes['secondLabelborder']['borderRadius']['Mobile']['left'] . 'px' ) );
	}

	//Switch styles
	if ( isset( $attributes['switchSize']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch');
		$css->add_property( 'font-size', ( $attributes['switchSize']['Mobile'] . 'px !important' ) );
	}
	if ( isset( $attributes['switchRadius'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider');
		$css->add_property( 'border-radius', $css->render_color( $attributes['switchRadius'] . ( isset( $attributes['switchRadiusUnit'] ) ? $attributes['switchRadiusUnit'] : 'em' ) . '!important' ) );
	}
	if ( isset( $attributes['containerRadius'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-content-switcher' . ' > .premium-content-switcher-toggle-' . $attributes['display'] . ' > .premium-content-switcher-toggle-switch' . ' > .premium-content-switcher-toggle-switch-label' . ' > .premium-content-switcher-toggle-switch-slider::before');
		$css->add_property( 'border-radius', $css->render_color( $attributes['containerRadius'] . ( isset( $attributes['containerRadiusUnit'] ) ? $attributes['containerRadiusUnit'] : '%' ) . '!important' ) );
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
	$unique_id = $attributes['blockId'];
	$align_class_name   = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $align_class_name ) );


	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	$id                 = 'premium-content-switcher-' . esc_attr( $unique_id );
	$unique_id = $attributes['blockId'];
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'content-switcher', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_content_switcher_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			$block_helpers = new pbg_blocks_helper();
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