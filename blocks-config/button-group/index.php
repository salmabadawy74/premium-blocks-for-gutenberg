<?php
/**
 * Server-side rendering of the `pbg/button-group` block.
 *
 * @package WordPress
 */

/**
 * Get Button Group Block CSS
 *
 * Return Frontend CSS for Button Group.
 *
 * @access public
 *
 * @param string $attr option attribute.
 * @param string $unique_id option For block ID.
 */
function get_premium_button_group_css_style($attr, $unique_id) {
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
	$media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
	$media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');

	if (isset($attr['align'])) {
		$css->set_selector($unique_id);
		$css->add_property('text-align', $css->get_responsive_css($attr['align'], 'Desktop'));
	}

	if (isset($attr['align'])) {
		$css->set_selector($unique_id . ' > .premium-button-group-horizontal');
		$css->add_property('justify-content', $css->get_responsive_css($attr['align'], 'Desktop'));
		$css->add_property('column-gap', $css->get_responsive_css($attr['buttonGap'], 'Desktop') . 'px !important');
	}

	if (isset($attr['align'])) {
		$content_align      = $css->get_responsive_css($attr['align'], 'Desktop');
		$content_flex_align = 'left' === $content_align ? 'flex-start' : 'center';
		$content_flex_align = 'right' === $content_align ? 'flex-end' : $content_flex_align;

		$css->set_selector($unique_id . ' > .premium-button-group-vertical' );
		$css->add_property('align-items', $content_flex_align);
		$css->add_property('justify-content', $content_flex_align);
		$css->add_property('row-gap', $css->get_responsive_css($attr['buttonGap'], 'Desktop') . 'px !important');
	}

	if (isset($attr['typography'])) {
		$typography = $attr['typography'];
		$css->set_selector($unique_id . '> .premium-button-group_wrap' . '> .premium-button__wrap' . '> .premium-button' . '> .premium-button-text-edit');
		$css->render_typography( $typography, 'Desktop' );
	}

	if (isset( $attr['groupPadding'])) {
		$groupPadding = $attr['groupPadding'];
		$css->set_selector($unique_id . '> .premium-button-group_wrap' . '> .premium-button__wrap' . '> .premium-button');
		$css->add_property('padding', $css->render_spacing($groupPadding['Desktop'], $groupPadding['unit']));
	}

	if (isset( $attr['groupMargin'])) {
		$groupMargin = $attr['groupMargin'];
		$css->set_selector($unique_id . '> .premium-button-group_wrap' . '> .premium-button__wrap' . '> .premium-button');
		$css->add_property('margin', $css->render_spacing($groupMargin['Desktop'], $groupMargin['unit']));
	}

	$css->start_media_query($media_query['tablet']);

	if (isset($attr['align'])) {

		$css->set_selector($unique_id);
		$css->add_property('text-align', $css->get_responsive_css($attr['align'], 'Tablet'));
	}

	if (isset($attr['align'])) {
		$css->set_selector($unique_id . ' > .premium-button-group-horizontal');
		$css->add_property('justify-content', $css->get_responsive_css($attr['align'], 'Tablet'));
		$css->add_property('column-gap', $css->get_responsive_css($attr['buttonGap'], 'Tablet') . 'px !important');
	}

	if (isset($attr['align'])) {
		$content_align      = $css->get_responsive_css($attr['align'], 'Tablet');
		$content_flex_align = 'left' === $content_align ? 'flex-start' : 'center';
		$content_flex_align = 'right' === $content_align ? 'flex-end' : $content_flex_align;

		$css->set_selector($unique_id . ' > .premium-button-group-vertical' );
		$css->add_property('align-items', $content_flex_align);
		$css->add_property('justify-content', $content_flex_align);
		$css->add_property('row-gap', $css->get_responsive_css($attr['buttonGap'], 'Tablet') . 'px !important');
	}

	if (isset($attr['typography'])) {
		$typography = $attr['typography'];
		$css->set_selector($unique_id . '> .premium-button-group_wrap' . '> .premium-button__wrap' . '> .premium-button' . '> .premium-button-text-edit');
		$css->render_typography( $typography, 'Tablet' );
	}

	if (isset($attr['groupPadding'])) {
		$groupPadding = $attr['groupPadding'];
		$css->set_selector($unique_id . '> .premium-button-group_wrap' . '> .premium-button__wrap' . '> .premium-button');
		$css->add_property('padding', $css->render_spacing($groupPadding['Tablet'], $groupPadding['unit']));
	}

	if (isset( $attr['groupMargin'])) {
		$groupMargin = $attr['groupMargin'];
		$css->set_selector($unique_id . '> .premium-button-group_wrap' . '> .premium-button__wrap' . '> .premium-button');
		$css->add_property('margin', $css->render_spacing($groupMargin['Tablet'], $groupMargin['unit']));
	}

	$css->stop_media_query();
	$css->start_media_query($media_query['mobile']);

	if (isset($attr['align'])) {

		$css->set_selector($unique_id);
		$css->add_property('text-align', $css->get_responsive_css($attr['align'], 'Mobile'));
	}

	if (isset($attr['align'])) {
		$css->set_selector($unique_id . ' > .premium-button-group-horizontal');
		$css->add_property('justify-content', $css->get_responsive_css($attr['align'], 'Mobile'));
		$css->add_property('column-gap', $css->get_responsive_css($attr['buttonGap'], 'Mobile') . 'px !important');
	}

	if (isset($attr['align'])) {
		$content_align      = $css->get_responsive_css($attr['align'], 'Mobile');
		$content_flex_align = 'left' === $content_align ? 'flex-start' : 'center';
		$content_flex_align = 'right' === $content_align ? 'flex-end' : $content_flex_align;

		$css->set_selector($unique_id . ' > .premium-button-group-vertical' );
		$css->add_property('align-items', $content_flex_align);
		$css->add_property('justify-content', $content_flex_align);
		$css->add_property('row-gap', $css->get_responsive_css($attr['buttonGap'], 'Mobile') . 'px !important');
	}

	if (isset($attr['typography'])) {
		$typography = $attr['typography'];
		$css->set_selector($unique_id . '> .premium-button-group_wrap' . '> .premium-button__wrap' . '> .premium-button' . '> .premium-button-text-edit');
		$css->render_typography( $typography, 'Mobile' );
	}

	if (isset($attr['groupPadding'])) {
		$groupPadding = $attr['groupPadding'];
		$css->set_selector($unique_id . '> .premium-button-group_wrap' . '> .premium-button__wrap' . '> .premium-button');
		$css->add_property('padding', $css->render_spacing($groupPadding['Mobile'], $groupPadding['unit']));
	}

	if (isset( $attr['groupMargin'])) {
		$groupMargin = $attr['groupMargin'];
		$css->set_selector($unique_id . '> .premium-button-group_wrap' . '> .premium-button__wrap' . '> .premium-button');
		$css->add_property('margin', $css->render_spacing($groupMargin['Mobile'], $groupMargin['unit']));
	}

	$css->stop_media_query();
	return $css->css_output();
}

/**
 * Renders the `premium/button` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_button_group($attributes, $content, $block) {
	$block_helpers = pbg_blocks_helper();
	// if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
	// 	$unique_id = "#premium-button-wrap-{$attributes['block_id']}";
	// }

	if (isset($attributes['blockId'] ) && ! empty($attributes['blockId'])) {
		$unique_id = ".{$attributes['blockId']}";
	}

	wp_enqueue_style(
		'pbg-button-group-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/button-group.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);
	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters('Premium_BLocks_blocks_render_inline_css', true, 'button-group', $unique_id)) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_premium_button_group_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			if ($block_helpers->should_render_inline('button-group', $unique_id)) {
				$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
			} else {
				$block_helpers->render_inline_css($css, $style_id, true);
			}
		}
	};

	return $content;
}




/**
 * Register the button block.
 *
 * @uses render_block_pbg_button_group()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_button_group() {
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type(
		PREMIUM_BLOCKS_PATH . '/blocks-config/button-group',
		array(
			'render_callback' => 'render_block_pbg_button_group',
		)
	);
}

register_block_pbg_button_group();
