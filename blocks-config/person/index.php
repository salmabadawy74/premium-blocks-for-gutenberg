<?php
/**
 * Server-side rendering of the `pbg/person` block.
 *
 * @package WordPress
 */

/**
 * Get Person Block CSS
 *
 * Return Frontend CSS for Person.
 *
 * @access public
 *
 * @param string $attr option attribute.
 * @param string $unique_id option For block ID.
 */
function get_premium_person_css_style( $attr, $unique_id ) {
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	// style for container
	if ( isset( $attr['align'] ) ) {
		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
	}

	// style for Content
	if ( isset( $attr['contentPadding'] ) ) {
		$content_padding = $attr['contentPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' );
		$css->add_property( 'padding', $css->render_spacing( $content_padding['Desktop'], $content_padding['unit'] ) );
	}

	// style for image
	if ( isset( $attr['imageBorder'] ) ) {
		$image_border        = $attr['imageBorder'];
		$image_border_width  = $image_border['borderWidth'];
		$image_border_radius = $image_border['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
		$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Desktop'], 'px' ) );
		$css->add_property( 'border-color', $image_border['borderColor'] );
		$css->add_property( 'border-style', $image_border['borderType'] );

		$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Desktop'], 'px' ) );
	}
	if ( isset( $attr['imgHeight']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
		$css->add_property( 'height', $css->render_range( $attr['imgHeight'], 'Desktop' ) );
	}
	if ( isset( $attr['imgWidth']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
		$css->add_property( 'width', $css->render_range( $attr['imgWidth'], 'Desktop' ) );
	}

	// Style for Name.
	if ( isset( $attr['nameTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
		$css->render_typography( $attr['nameTypography'], 'Desktop' );
	}
	if ( isset( $attr['namePadding'] ) ) {
		$name_padding = $attr['namePadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
		$css->add_property( 'padding', $css->render_spacing( $name_padding['Desktop'], $name_padding['unit'] ) );
	}

	// Style for Title.
	if ( isset( $attr['titleTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
		$css->render_typography( $attr['titleTypography'], 'Desktop' );
	}
	if ( isset( $attr['titlePadding'] ) ) {
		$title_padding = $attr['titlePadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
		$css->add_property( 'padding', $css->render_spacing( $title_padding['Desktop'], $title_padding['unit'] ) );
	}
	if ( isset( $attr['titleMargin'] ) ) {
		$title_margin = $attr['titleMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
		$css->add_property( 'margin', $css->render_spacing( $title_margin['Desktop'], $title_margin['unit'] ) );
	}

	// Style for Desc.
	if ( isset( $attr['descTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
		$css->render_typography( $attr['descTypography'], 'Desktop' );
	}
	if ( isset( $attr['descPadding'] ) ) {
		$desc_padding = $attr['descPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
		$css->add_property( 'padding', $css->render_spacing( $desc_padding['Desktop'], $desc_padding['unit'] ) );
	}

	// Style for Social Icon Effect2.
	if ( isset( $attr['socialIconSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' . ' > .premium-social-media-icon' );
		$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Desktop' ) );
		$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Desktop' ) );
	}
	if ( isset( $attr['socialIconPadding'] ) ) {
		$socialIcon_padding = $attr['socialIconPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Desktop'], $socialIcon_padding['unit'] ) );
	}
	if ( isset( $attr['socialIconMargin'] ) ) {
		$socialIcon_margin = $attr['socialIconMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Desktop'], $socialIcon_margin['unit'] ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Desktop'], 'px' ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Desktop'], 'px' ) );
	}

	// Style for Social Icon Effect1.
	if ( isset( $attr['socialIconSize']['Desktop'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' . ' > .premium-social-media-icon' );
		$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Desktop' ) );
		$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Desktop' ) );
	}
	if ( isset( $attr['socialIconPadding'] ) ) {
		$socialIcon_padding = $attr['socialIconPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Desktop'], $socialIcon_padding['unit'] ) );
	}
	if ( isset( $attr['socialIconMargin'] ) ) {
		$socialIcon_margin = $attr['socialIconMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Desktop'], $socialIcon_margin['unit'] ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Desktop'], 'px' ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Desktop'], 'px' ) );
	}

	$css->start_media_query( $media_query['tablet'] );

	// style for container
	if ( isset( $attr['align'] ) ) {
		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
	}

	// style for Content
	if ( isset( $attr['contentPadding'] ) ) {
		$content_padding = $attr['contentPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' );
		$css->add_property( 'padding', $css->render_spacing( $content_padding['Tablet'], $content_padding['unit'] ) );
	}

	// style for image
	if ( isset( $attr['imageBorder'] ) ) {
		$image_border        = $attr['imageBorder'];
		$image_border_width  = $image_border['borderWidth'];
		$image_border_radius = $image_border['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
		$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Tablet'], 'px' ) );
		$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Tablet'], 'px' ) );
	}
	if ( isset( $attr['imgHeight']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
		$css->add_property( 'height', $css->render_range( $attr['imgHeight'], 'Tablet' ) );
	}
	if ( isset( $attr['imgWidth']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
		$css->add_property( 'width', $css->render_range( $attr['imgWidth'], 'Tablet' ) );
	}

	// Style for Name.
	if ( isset( $attr['nameTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
		$css->render_typography( $attr['nameTypography'], 'Tablet' );
	}
	if ( isset( $attr['namePadding'] ) ) {
		$name_padding = $attr['namePadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
		$css->add_property( 'padding', $css->render_spacing( $name_padding['Tablet'], $name_padding['unit'] ) );
	}

	// Style for Title.
	if ( isset( $attr['titleTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
		$css->render_typography( $attr['titleTypography'], 'Tablet' );
	}
	if ( isset( $attr['titlePadding'] ) ) {
		$title_padding = $attr['titlePadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
		$css->add_property( 'padding', $css->render_spacing( $title_padding['Tablet'], $title_padding['unit'] ) );
	}
	if ( isset( $attr['titleMargin'] ) ) {
		$title_margin = $attr['titleMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
		$css->add_property( 'margin', $css->render_spacing( $title_margin['Tablet'], $title_margin['unit'] ) );
	}

	// Style for Desc.
	if ( isset( $attr['descTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
		$css->render_typography( $attr['descTypography'], 'Tablet' );
	}
	if ( isset( $attr['descPadding'] ) ) {
		$desc_padding = $attr['descPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
		$css->add_property( 'padding', $css->render_spacing( $desc_padding['Tablet'], $desc_padding['unit'] ) );
	}

	// Style for Social Icon Effect2.
	if ( isset( $attr['socialIconSize']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' . ' > .premium-social-media-icon' );
		$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Tablet' ) );
		$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Tablet' ) );
	}
	if ( isset( $attr['socialIconPadding'] ) ) {
		$socialIcon_padding = $attr['socialIconPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Tablet'], $socialIcon_padding['unit'] ) );
	}
	if ( isset( $attr['socialIconMargin'] ) ) {
		$socialIcon_margin = $attr['socialIconMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Tablet'], $socialIcon_margin['unit'] ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Tablet'], 'px' ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Tablet'], 'px' ) );
	}

	// Style for Social Icon Effect1.
	if ( isset( $attr['socialIconSize']['Tablet'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' . ' > .premium-social-media-icon' );
		$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Tablet' ) );
		$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Tablet' ) );
	}
	if ( isset( $attr['socialIconPadding'] ) ) {
		$socialIcon_padding = $attr['socialIconPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Tablet'], $socialIcon_padding['unit'] ) );
	}
	if ( isset( $attr['socialIconMargin'] ) ) {
		$socialIcon_margin = $attr['socialIconMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Tablet'], $socialIcon_margin['unit'] ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Tablet'], 'px' ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Tablet'], 'px' ) );
	}

	$css->stop_media_query();

	$css->start_media_query( $media_query['mobile'] );

	// style for container
	if ( isset( $attr['align'] ) ) {
		$css->set_selector( '.' . $unique_id );
		$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
	}

	// style for Content
	if ( isset( $attr['contentPadding'] ) ) {
		$content_padding = $attr['contentPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' );
		$css->add_property( 'padding', $css->render_spacing( $content_padding['Mobile'], $content_padding['unit'] ) );
	}

	// style for image
	if ( isset( $attr['imageBorder'] ) ) {
		$image_border        = $attr['imageBorder'];
		$image_border_width  = $image_border['borderWidth'];
		$image_border_radius = $image_border['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
		$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Mobile'], 'px' ) );
		$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Mobile'], 'px' ) );
	}
	if ( isset( $attr['imgHeight'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
		$css->add_property( 'height', $css->render_range( $attr['imgHeight'], 'Mobile' ) );
	}
	if ( isset( $attr['imgWidth'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
		$css->add_property( 'width', $css->render_range( $attr['imgWidth'], 'Mobile' ) );
	}

	// Style for Name.
	if ( isset( $attr['nameTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
		$css->render_typography( $attr['nameTypography'], 'Mobile' );
	}
	if ( isset( $attr['namePadding'] ) ) {
		$name_padding = $attr['namePadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
		$css->add_property( 'padding', $css->render_spacing( $name_padding['Mobile'], $name_padding['unit'] ) );
	}

	// Style for Title.
	if ( isset( $attr['titleTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
		$css->render_typography( $attr['titleTypography'], 'Mobile' );
	}
	if ( isset( $attr['titlePadding'] ) ) {
		$title_padding = $attr['titlePadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
		$css->add_property( 'padding', $css->render_spacing( $title_padding['Mobile'], $title_padding['unit'] ) );
	}
	if ( isset( $attr['titleMargin'] ) ) {
		$title_margin = $attr['titleMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
		$css->add_property( 'margin', $css->render_spacing( $title_margin['Mobile'], $title_margin['unit'] ) );
	}

	// Style for Desc.
	if ( isset( $attr['descTypography'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
		$css->render_typography( $attr['descTypography'], 'Mobile' );
	}
	if ( isset( $attr['descPadding'] ) ) {
		$desc_padding = $attr['descPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
		$css->add_property( 'padding', $css->render_spacing( $desc_padding['Mobile'], $desc_padding['unit'] ) );
	}

	// Style for Social Icon Effect2.
	if ( isset( $attr['socialIconSize']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' . ' > .premium-social-media-icon' );
		$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Mobile' ) );
		$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Mobile' ) );
	}
	if ( isset( $attr['socialIconPadding'] ) ) {
		$socialIcon_padding = $attr['socialIconPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Mobile'], $socialIcon_padding['unit'] ) );
	}
	if ( isset( $attr['socialIconMargin'] ) ) {
		$socialIcon_margin = $attr['socialIconMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Mobile'], $socialIcon_margin['unit'] ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Mobile'], 'px' ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
		$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Mobile'], 'px' ) );
	}

	// Style for Social Icon Effect1.
	if ( isset( $attr['socialIconSize']['Mobile'] ) ) {
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' . ' > .premium-social-media-icon' );
		$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Mobile' ) );
		$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Mobile' ) );
	}
	if ( isset( $attr['socialIconPadding'] ) ) {
		$socialIcon_padding = $attr['socialIconPadding'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Mobile'], $socialIcon_padding['unit'] ) );
	}
	if ( isset( $attr['socialIconMargin'] ) ) {
		$socialIcon_margin = $attr['socialIconMargin'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Mobile'], $socialIcon_margin['unit'] ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Mobile'], 'px' ) );
	}
	if ( isset( $attr['socialIconBorder'] ) ) {
		$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
		$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
		$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Mobile'], 'px' ) );
	}

	$css->stop_media_query();
	return $css->css_output();
}

/**
 * Renders the `premium/person` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_person( $attributes, $content, $block ) {
	$block_helpers = pbg_blocks_helper();
	if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
		$unique_id = $attributes['blockId'];
	} else {
		$unique_id = rand( 100, 10000 );
	}
	wp_enqueue_style(
		'pbg-person-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/person.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);
	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'person', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_premium_person_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			if ( $block_helpers->should_render_inline( 'person', $unique_id ) ) {
				$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
			} else {
				$block_helpers->render_inline_css( $css, $style_id, true );
			}
		}
	};

	return $content;
}




/**
 * Register the person block.
 *
 * @uses render_block_pbg_person()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_person() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type(
		PREMIUM_BLOCKS_PATH . '/blocks-config/person',
		array(
			'render_callback' => 'render_block_pbg_person',
		)
	);
}

register_block_pbg_person();
