<?php
/**
 * Server-side rendering of the `pbg/modal` block.
 *
 * @package WordPress
 */

/**
 * Get Modal Block CSS
 *
 * Return Frontend CSS for Modal.
 *
 * @access public
 *
 * @param string $attr option attribute.
 * @param string $unique_id option For block ID.
 */
function get_premium_modal_css_style( $attr, $unique_id ) {
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	if ( isset( $attr['align']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
	}

	if ( isset( $attr['triggerIconSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn i' );
		$css->add_property( 'font-size', $css->render_range( $attr['triggerIconSize'], 'Desktop' ) );
		$css->add_property( 'width', $css->render_range( $attr['triggerIconSize'], 'Desktop' ) );
		$css->add_property( 'height', $css->render_range( $attr['triggerIconSize'], 'Desktop' ) );
	}

	if ( isset( $attr['triggerBorderH'] ) ) {
		$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn:hover' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
	}

	// style For Icon /Image/Lottie in Header
	// if ( isset( $attr['iconSize']['Desktop'] ) ) {
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
	// 	$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	// 	$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	// 	$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );

	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
	// 	$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	// 	$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );

	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
	// 	$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	// 	$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );
	// }

	// Trigger Style for Image/Lottie
	if ( isset( $attr['imageWidth']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container img' );
		$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Desktop' ) );
		$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Desktop' ) );

		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
		$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Desktop' ) );
		$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Desktop' ) );
	}

	// Style For Button Trigger
	if ( isset( $attr['triggerTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
		$css->add_property( 'font-size', $css->render_range( $attr['triggerTypography']['fontSize'], 'Desktop' ) );

		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' . '> span' );
		$css->render_typography( $attr['triggerTypography'], 'Desktop' );
	}
	if ( isset( $attr['triggerPadding'] ) ) {
		$trigger_padding = $attr['triggerPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
		$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Desktop'], $trigger_padding['unit'] ) );
	}
	if ( isset( $attr['triggerBorder'] ) ) {
		$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
	}
	// border Image
	if ( isset( $attr['triggerBorder'] ) ) {
		$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
	}
	// border text
	if ( isset( $attr['triggerBorder'] ) ) {
		$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
	}
	if ( isset( $attr['triggerTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
		$css->render_typography( $attr['triggerTypography'], 'Desktop' );
	}
	if ( isset( $attr['triggerPadding'] ) ) {
		$trigger_padding = $attr['triggerPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
		$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Desktop'], $trigger_padding['unit'] ) );
	}
	// hover border
	if ( isset( $attr['triggerBorderH'] ) ) {
		$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img:hover' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
	}
	// hover border text
	if ( isset( $attr['triggerBorderH'] ) ) {
		$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container:hover' . ' > .premium-modal-trigger-text' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
	}

	// Style For Header in Modal
	// if ( isset( $attr['headerTypography'] ) ) {
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
	// 	$css->render_typography( $attr['headerTypography'], 'Desktop' );
	// }
	// if ( isset( $attr['headerBorder'] ) ) {
	// 	$header_border_width  = $attr['headerBorder']['borderWidth'];
	// 	$header_border_radius = $attr['headerBorder']['borderRadius'];
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' );
	// 	$css->add_property( 'border-width', $css->render_spacing( $header_border_width['Desktop'], 'px' ) );
	// 	$css->add_property( 'border-radius', $css->render_spacing( $header_border_radius['Desktop'], 'px' ) );
	// }

	// style for upper close button
	if ( isset( $attr['upperPadding'] ) ) {
		$upper_padding = $attr['upperPadding'];
		// $css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
		$css->add_property( 'padding', $css->render_spacing( $upper_padding['Desktop'], $upper_padding['unit'] ) );
	}
	if ( isset( $attr['upperBorder'] ) ) {
		$upper_border_width  = $attr['upperBorder']['borderWidth'];
		$upper_border_radius = $attr['upperBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
		$css->add_property( 'border-width', $css->render_spacing( $upper_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $upper_border_radius['Desktop'], 'px' ) );
	}

	if ( isset( $attr['upperIconWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
		$css->add_property( 'font-size', $css->render_range( $attr['upperIconWidth'], 'Desktop' ) );
	}

	// Style For lower Close Button
	if ( isset( $attr['lowerTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->render_typography( $attr['lowerTypography'], 'Desktop' );
	}
	if ( isset( $attr['lowerBorder'] ) ) {
		$lower_border_width  = $attr['lowerBorder']['borderWidth'];
		$lower_border_radius = $attr['lowerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->add_property( 'border-width', $css->render_spacing( $lower_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $lower_border_radius['Desktop'], 'px' ) );
	}

	if ( isset( $attr['lowerPadding'] ) ) {
		$lower_padding = $attr['lowerPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->add_property( 'padding', $css->render_spacing( $lower_padding['Desktop'], $lower_padding['unit'] ) );
	}
	if ( isset( $attr['lowerIconWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->add_property( 'width', $css->render_range( $attr['lowerIconWidth'], 'Desktop' ) );
	}

	// Width & Height for Modal
	if ( isset( $attr['modalWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'width', $css->render_range( $attr['modalWidth'], 'Desktop' ) );
	}
	if ( isset( $attr['modalHeight'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'max-height', $css->render_range( $attr['modalHeight'], 'Desktop' ) );
	}
	if ( isset( $attr['modalMargin'] ) ) {
		$modal_margin = $attr['modalMargin'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'margin', $css->render_spacing( $modal_margin['Desktop'], $modal_margin['unit'] ) );
	}
	if ( isset( $attr['modalBorder'] ) ) {
		$modal_border_width  = $attr['modalBorder']['borderWidth'];
		$modal_border_radius = $attr['modalBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'border-width', $css->render_spacing( $modal_border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $modal_border_radius['Desktop'], 'px' ) );
	}

	// if ( isset( $attr['modalTypography'] ) ) {
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
	// 	$css->render_typography( $attr['modalTypography'], 'Desktop' );
	// }

	if ( isset( $attr['modalPadding'] ) ) {
		$modal_padding = $attr['modalPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
		$css->add_property( 'padding', $css->render_spacing( $modal_padding['Desktop'], $modal_padding['unit'] ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	if ( isset( $attr['align']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
	}

	if ( isset( $attr['triggerIconSize']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn i' );
		$css->add_property( 'font-size', $css->render_range( $attr['triggerIconSize'], 'Tablet' ) );
		$css->add_property( 'width', $css->render_range( $attr['triggerIconSize'], 'Tablet' ) );
		$css->add_property( 'height', $css->render_range( $attr['triggerIconSize'], 'Tablet' ) );
	}

	if ( isset( $attr['triggerBorderH'] ) ) {
		$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn:hover' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
	}

	// style For Icon /Image/Lottie in Header
	// if ( isset( $attr['iconSize']['Tablet'] ) ) {
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
	// 	$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	// 	$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	// 	$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );

	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
	// 	$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	// 	$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );

	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
	// 	$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	// 	$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );
	// }

	// Trigger Style for Image/Lottie
	if ( isset( $attr['imageWidth']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container img' );
		$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Tablet' ) );
		$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Tablet' ) );

		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
		$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Tablet' ) );
		$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Tablet' ) );
	}

	// Style For Button Trigger
	if ( isset( $attr['triggerTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
		$css->add_property( 'font-size', $css->render_range( $attr['triggerTypography']['fontSize'], 'Tablet' ) );

		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' . ' > span' );
		$css->render_typography( $attr['triggerTypography'], 'Tablet' );
	}
	if ( isset( $attr['triggerPadding'] ) ) {
		$trigger_padding = $attr['triggerPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
		$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Tablet'], $trigger_padding['unit'] ) );
	}
	if ( isset( $attr['triggerBorder'] ) ) {
		$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
	}
	// border Image
	if ( isset( $attr['triggerBorder'] ) ) {
		$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
	}
	// border text
	if ( isset( $attr['triggerBorder'] ) ) {
		$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
	}
	if ( isset( $attr['triggerTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
		$css->render_typography( $attr['triggerTypography'], 'Tablet' );
	}
	if ( isset( $attr['triggerPadding'] ) ) {
		$trigger_padding = $attr['triggerPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
		$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Tablet'], $trigger_padding['unit'] ) );
	}
	// hover border
	if ( isset( $attr['triggerBorderH'] ) ) {
		$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img:hover' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
	}
	// hover border text
	if ( isset( $attr['triggerBorderH'] ) ) {
		$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container:hover' . ' > .premium-modal-trigger-text' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
	}

	// Style For Header in Modal
	// if ( isset( $attr['headerTypography'] ) ) {
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
	// 	$css->render_typography( $attr['headerTypography'], 'Tablet' );
	// }
	// if ( isset( $attr['headerBorder'] ) ) {
	// 	$header_border_width  = $attr['headerBorder']['borderWidth'];
	// 	$header_border_radius = $attr['headerBorder']['borderRadius'];
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' );
	// 	$css->add_property( 'border-width', $css->render_spacing( $header_border_width['Tablet'], 'px' ) );
	// 	$css->add_property( 'border-radius', $css->render_spacing( $header_border_radius['Tablet'], 'px' ) );
	// }

	// style for upper close button
	if ( isset( $attr['upperPadding'] ) ) {
		$upper_padding = $attr['upperPadding'];
		// $css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
		$css->add_property( 'padding', $css->render_spacing( $upper_padding['Tablet'], $upper_padding['unit'] ) );
	}
	if ( isset( $attr['upperBorder'] ) ) {
		$upper_border_width  = $attr['upperBorder']['borderWidth'];
		$upper_border_radius = $attr['upperBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
		$css->add_property( 'border-width', $css->render_spacing( $upper_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $upper_border_radius['Tablet'], 'px' ) );
	}

	if ( isset( $attr['upperIconWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
		$css->add_property( 'font-size', $css->render_range( $attr['upperIconWidth'], 'Tablet' ) );
	}

	// Style For font Size in  lower Close Button
	if ( isset( $attr['lowerTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->render_typography( $attr['lowerTypography'], 'Tablet' );
	}
	if ( isset( $attr['lowerBorder'] ) ) {
		$lower_border_width  = $attr['lowerBorder']['borderWidth'];
		$lower_border_radius = $attr['lowerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->add_property( 'border-width', $css->render_spacing( $lower_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $lower_border_radius['Tablet'], 'px' ) );
	}

	if ( isset( $attr['lowerPadding'] ) ) {
		$lower_padding = $attr['lowerPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->add_property( 'padding', $css->render_spacing( $lower_padding['Tablet'], $lower_padding['unit'] ) );
	}
	if ( isset( $attr['lowerIconWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->add_property( 'width', $css->render_range( $attr['lowerIconWidth'], 'Tablet' ) );
	}

	// Width & Height for Modal
	if ( isset( $attr['modalWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'width', $css->render_range( $attr['modalWidth'], 'Tablet' ) );
	}
	if ( isset( $attr['modalHeight'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'max-height', $css->render_range( $attr['modalHeight'], 'Tablet' ) );
	}
	if ( isset( $attr['modalMargin'] ) ) {
		$modal_margin = $attr['modalMargin'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'margin', $css->render_spacing( $modal_margin['Tablet'], $modal_margin['unit'] ) );
	}
	if ( isset( $attr['modalBorder'] ) ) {
		$modal_border_width  = $attr['modalBorder']['borderWidth'];
		$modal_border_radius = $attr['modalBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'border-width', $css->render_spacing( $modal_border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $modal_border_radius['Tablet'], 'px' ) );
	}

	// if ( isset( $attr['modalTypography'] ) ) {
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
	// 	$css->render_typography( $attr['modalTypography'], 'Tablet' );
	// }

	if ( isset( $attr['modalPadding'] ) ) {
		$modal_padding = $attr['modalPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
		$css->add_property( 'padding', $css->render_spacing( $modal_padding['Tablet'], $modal_padding['unit'] ) );
	}

	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );

	if ( isset( $attr['align']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
	}

	if ( isset( $attr['triggerIconSize']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn i' );
		$css->add_property( 'font-size', $css->render_range( $attr['triggerIconSize'], 'Mobile' ) );
		$css->add_property( 'width', $css->render_range( $attr['triggerIconSize'], 'Mobile' ) );
		$css->add_property( 'height', $css->render_range( $attr['triggerIconSize'], 'Mobile' ) );
	}

	if ( isset( $attr['triggerBorderH'] ) ) {
		$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn:hover' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
	}

	// style For Icon /Image/Lottie in Header
	// if ( isset( $attr['iconSize']['Mobile'] ) ) {
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
	// 	$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	// 	$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	// 	$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );

	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
	// 	$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	// 	$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );

	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
	// 	$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	// 	$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );
	// }

	// Trigger Style for Image/Lottie
	if ( isset( $attr['imageWidth']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container img' );
		$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Mobile' ) );
		$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Mobile' ) );

		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
		$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Mobile' ) );
		$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Mobile' ) );
	}

	// Style For Button Trigger
	if ( isset( $attr['triggerTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
		$css->add_property( 'font-size', $css->render_range( $attr['triggerTypography']['fontSize'], 'Mobile' ) );

		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' . ' > span' );
		$css->render_typography( $attr['triggerTypography'], 'Mobile' );
	}
	if ( isset( $attr['triggerPadding'] ) ) {
		$trigger_padding = $attr['triggerPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
		$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Mobile'], $trigger_padding['unit'] ) );
	}
	if ( isset( $attr['triggerBorder'] ) ) {
		$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
	}
	// border Image
	if ( isset( $attr['triggerBorder'] ) ) {
		$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
	}
	// border text
	if ( isset( $attr['triggerBorder'] ) ) {
		$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
	}
	if ( isset( $attr['triggerTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
		$css->render_typography( $attr['triggerTypography'], 'Mobile' );
	}
	if ( isset( $attr['triggerPadding'] ) ) {
		$trigger_padding = $attr['triggerPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
		$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Mobile'], $trigger_padding['unit'] ) );
	}
	// hover border
	if ( isset( $attr['triggerBorderH'] ) ) {
		$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img:hover' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
	}
	// hover border text
	if ( isset( $attr['triggerBorderH'] ) ) {
		$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
		$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container:hover' . ' > .premium-modal-trigger-text' );
		$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
	}

	// Style For Header in Modal
	// if ( isset( $attr['headerTypography'] ) ) {
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
	// 	$css->render_typography( $attr['headerTypography'], 'Mobile' );
	// }
	// if ( isset( $attr['headerBorder'] ) ) {
	// 	$header_border_width  = $attr['headerBorder']['borderWidth'];
	// 	$header_border_radius = $attr['headerBorder']['borderRadius'];
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' );
	// 	$css->add_property( 'border-width', $css->render_spacing( $header_border_width['Mobile'], 'px' ) );
	// 	$css->add_property( 'border-radius', $css->render_spacing( $header_border_radius['Mobile'], 'px' ) );
	// }

	// style for upper close button
	if ( isset( $attr['upperPadding'] ) ) {
		$upper_padding = $attr['upperPadding'];
		// $css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
		$css->add_property( 'padding', $css->render_spacing( $upper_padding['Mobile'], $upper_padding['unit'] ) );
	}
	if ( isset( $attr['upperBorder'] ) ) {
		$upper_border_width  = $attr['upperBorder']['borderWidth'];
		$upper_border_radius = $attr['upperBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
		$css->add_property( 'border-width', $css->render_spacing( $upper_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $upper_border_radius['Mobile'], 'px' ) );
	}

	if ( isset( $attr['upperIconWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
		$css->add_property( 'font-size', $css->render_range( $attr['upperIconWidth'], 'Mobile' ) );
	}

	// Style For font Size in  lower Close Button
	if ( isset( $attr['lowerTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->render_typography( $attr['lowerTypography'], 'Mobile' );
	}
	if ( isset( $attr['lowerBorder'] ) ) {
		$lower_border_width  = $attr['lowerBorder']['borderWidth'];
		$lower_border_radius = $attr['lowerBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->add_property( 'border-width', $css->render_spacing( $lower_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $lower_border_radius['Mobile'], 'px' ) );
	}

	if ( isset( $attr['lowerPadding'] ) ) {
		$lower_padding = $attr['lowerPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->add_property( 'padding', $css->render_spacing( $lower_padding['Mobile'], $lower_padding['unit'] ) );
	}
	if ( isset( $attr['lowerIconWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
		$css->add_property( 'width', $css->render_range( $attr['lowerIconWidth'], 'Mobile' ) );
	}

	// Width & Height for Modal
	if ( isset( $attr['modalWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'width', $css->render_range( $attr['modalWidth'], 'Mobile' ) );
	}
	if ( isset( $attr['modalHeight'] ) ) {
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'max-height', $css->render_range( $attr['modalHeight'], 'Mobile' ) );
	}
	if ( isset( $attr['modalMargin'] ) ) {
		$modal_margin = $attr['modalMargin'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'margin', $css->render_spacing( $modal_margin['Mobile'], $modal_margin['unit'] ) );
	}
	if ( isset( $attr['modalBorder'] ) ) {
		$modal_border_width  = $attr['modalBorder']['borderWidth'];
		$modal_border_radius = $attr['modalBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
		$css->add_property( 'border-width', $css->render_spacing( $modal_border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $modal_border_radius['Mobile'], 'px' ) );
	}

	// if ( isset( $attr['modalTypography'] ) ) {
	// 	$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
	// 	$css->render_typography( $attr['modalTypography'], 'Mobile' );
	// }

	if ( isset( $attr['modalPadding'] ) ) {
		$modal_padding = $attr['modalPadding'];
		$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
		$css->add_property( 'padding', $css->render_spacing( $modal_padding['Mobile'], $modal_padding['unit'] ) );
	}

	$css->stop_media_query();
	return $css->css_output();
}

/**
 * Renders the `premium/modal` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_modal( $attributes, $content, $block ) {
	$block_helpers = pbg_blocks_helper();
	if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
		$unique_id = $attributes['blockId'];
	} else {
		$unique_id = rand( 100, 10000 );
	}

	if ( $block_helpers->it_is_not_amp() ) {
		wp_enqueue_script(
			'pbg-lottie',
			PREMIUM_BLOCKS_URL . 'assets/js/lottie.js',
			array( 'jquery' ),
			PREMIUM_BLOCKS_VERSION,
			true
		);
		wp_enqueue_script(
			'pbg-modal-box',
			PREMIUM_BLOCKS_URL . 'assets/js/modal-box.js',
			array( 'jquery', 'pbg-lottie' ),
			PREMIUM_BLOCKS_VERSION,
			true
		);
	}

	wp_enqueue_style(
		'pbg-modal-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/Modal.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);
	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'modal', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_premium_modal_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			if ( $block_helpers->should_render_inline( 'modal', $unique_id ) ) {
				$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
			} else {
				$block_helpers->render_inline_css( $css, $style_id, true );
			}
		}
	};

	return $content;
}




/**
 * Register the modal block.
 *
 * @uses render_block_pbg_modal()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_modal() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type(
		PREMIUM_BLOCKS_PATH . '/blocks-config/Modal',
		array(
			'render_callback' => 'render_block_pbg_modal',
		)
	);
}

register_block_pbg_modal();
