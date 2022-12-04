<?php
// Move this file to "blocks-config" folder with name "my-block.php".

/**
 * Server-side rendering of the `premium/my-block` block.
 *
 * @package WordPress
 */

function get_premium_progress_bar_css( $attributes, $unique_id ) {
	$block_helpers          = pbg_blocks_helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	if (isset($attributes['align'])) {
        $css->set_selector('.' . $unique_id );
        $css->add_property('text-align', $css->get_responsive_css($attributes['align'], 'Desktop'));
    }

    //label styles
    if (isset($attributes['labelTypography'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-left-label');
        $css->render_typography($attributes['labelTypography'], 'Desktop');
    }

    if (isset($attributes['labelMargin'])) {
        $label_margin = $attributes['labelMargin'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-left-label');
        $css->add_property('margin', $css->render_spacing($label_margin['Desktop'], $label_margin['unit']));
    }

    //percentage styles
    if (isset($attributes['percentageTypography'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-right-label');
        $css->render_typography($attributes['percentageTypography'], 'Desktop');
    }

    if (isset($attributes['percentageMargin'])) {
        $percentage_margin = $attributes['percentageMargin'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-right-label');
        $css->add_property('margin', $css->render_spacing($percentage_margin['Desktop'], $percentage_margin['unit']));
    }

    //line type
    if (isset($attributes['progressBarMargin'])) {
        $progressBar_margin = $attributes['progressBarMargin'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap');
        $css->add_property('margin', $css->render_spacing($progressBar_margin['Desktop'], $progressBar_margin['unit']));
    }
    if (isset($attributes['progressBarHeight'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap');
        $css->add_property('height', $css->render_range($attributes['progressBarHeight'], 'Desktop'));
    }
    if (isset($attributes['progressBarRadius'])) {
        $progressBar_radius = $attributes['progressBarRadius'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap');
        $css->add_property('border-radius', $css->render_spacing($progressBar_radius['Desktop'], $progressBar_radius['unit']));
    }

    if (isset($attributes['progressBarHeight'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap' . '> .premium-progress-bar-bar');
        $css->add_property('height', $css->render_range($attributes['progressBarHeight'], 'Desktop'));
    }
    if (isset($attributes['progressBarRadius'])) {
        $progressBar_radius = $attributes['progressBarRadius'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap' . '> .premium-progress-bar-bar');
        $css->add_property('border-radius', $css->render_spacing($progressBar_radius['Desktop'], $progressBar_radius['unit']));
    }

    //half circle type
    if (isset($attributes['progressBarSize'])) {
        $progressBar_size = $attributes['progressBarSize'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap');
        $css->add_property('width', $css->render_spacing($progressBar_size['Desktop'], 'px'));
    }

    if (isset($attributes['progressBarSize'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap');
        $css->add_property('height', 'calc(' . $attributes['progressBarSize']['Desktop'] . '/ 2 * 1px)');
    }

    if (isset($attributes['progressBarMargin'])) {
        $progressBar_margin = $attributes['progressBarMargin'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-progress');
        $css->add_property('margin', $css->render_spacing($progressBar_margin['Desktop'], $progressBar_margin['unit']));
    }


    $css->start_media_query($media_query['tablet']);

    if (isset($attributes['align'])) {
        $css->set_selector('.' . $unique_id );
        $css->add_property('text-align', $css->get_responsive_css($attributes['align'], 'Tablet'));
    }

    //label styles
    if (isset($attributes['labelTypography'])) {
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-left-label');
        $css->render_typography($attributes['labelTypography'], 'Tablet');
    }

    if (isset($attributes['labelMargin'])) {
        $label_margin = $attributes['labelMargin'];
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-left-label');
        $css->add_property('margin', $css->render_spacing($label_margin['Tablet'], $label_margin['unit']));
    }

    //percentage styles
    if (isset($attributes['percentageTypography'])) {
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-right-label');
        $css->render_typography($attributes['percentageTypography'], 'Tablet');
    }

    if (isset($attributes['percentageMargin'])) {
        $percentage_margin = $attributes['percentageMargin'];
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-right-label');
        $css->add_property('margin', $css->render_spacing($percentage_margin['Tablet'], $percentage_margin['unit']));
    }

    if (isset($attributes['progressBarMargin'])) {
        $progressBar_margin = $attributes['progressBarMargin'];
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-progress');
        $css->add_property('margin', $css->render_spacing($progressBar_margin['Tablet'], $progressBar_margin['unit']));
    }

    $css->stop_media_query();
    $css->start_media_query($media_query['mobile']);

    if (isset($attributes['align'])) {
        $css->set_selector('.' . $unique_id );
        $css->add_property('text-align', $css->get_responsive_css($attributes['align'], 'Mobile'));
    }

    //label styles
    if (isset($attributes['labelTypography'])) {
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-left-label');
        $css->render_typography($attributes['labelTypography'], 'Mobile');
    }

    if (isset($attributes['labelMargin'])) {
        $label_margin = $attributes['labelMargin'];
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-left-label');
        $css->add_property('margin', $css->render_spacing($label_margin['Mobile'], $label_margin['unit']));
    }

    //percentage styles
    if (isset($attributes['percentageTypography'])) {
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-right-label');
        $css->render_typography($attributes['percentageTypography'], 'Mobile');
    }

    if (isset($attributes['percentageMargin'])) {
        $percentage_margin = $attributes['percentageMargin'];
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-right-label');
        $css->add_property('margin', $css->render_spacing($percentage_margin['Mobile'], $percentage_margin['unit']));
    }

    if (isset($attributes['progressBarMargin'])) {
        $progressBar_margin = $attributes['progressBarMargin'];
        $css->set_selector('.' . $unique_id . '> .premium-progress-bar-progress');
        $css->add_property('margin', $css->render_spacing($progressBar_margin['Mobile'], $progressBar_margin['unit']));
    }

    $css->stop_media_query();
    return $css->css_output();
}

/**
 * Renders the `premium/my-block` block on server.
 *
 * @param array    $attributesibutes The block attributesibutes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_progress_bar( $attributesibutes, $content, $block ) {

	$unique_id = rand( 100, 10000 );
	$id        = 'premium-progress-bar-' . esc_attr( $unique_id );
	$block_id  = ( ! empty( $attributesibutes['blockId'] ) ) ? $attributesibutes['blockId'] : $id;

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'progress-bar', $unique_id ) ) {
		$css = get_premium_progress_bar_css( $attributesibutes, $block_id );
		if ( ! empty( $css ) ) {
			$block_helpers = pbg_blocks_helper();
			$block_helpers->render_inline_css( $css, $unique_id, true );
		}
	};

	// View file after move it to "assets/js".
	// wp_enqueue_script(
	// 	'premium-my-block-view',
	// 	PREMIUM_BLOCKS_URL . 'assets/js/my-block.js',
	// 	array(),
	// 	PREMIUM_BLOCKS_VERSION,
	// 	true
	// );

	// Block css file from "assets/css" after run grunt task.
	wp_enqueue_style(
		'pbg-progress-bar-style',
		PREMIUM_BLOCKS_URL . 'assets/css/minified/progress-bar.min.css',
		array(),
		PREMIUM_BLOCKS_VERSION,
		'all'
	);

	return $content;
}


/**
 * Register the my block block.
 *
 * @uses render_block_pbg_progress_bar()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_progress_bar() {
	register_block_type(
		'premium/progress-bar',
		array(
			'render_callback' => 'render_block_pbg_progress_bar',
		)
	);
}

add_action( 'init', 'register_block_pbg_progress_bar' );