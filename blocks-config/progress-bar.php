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
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-left-label, ' . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap' . '> .premium-progressbar-circle-content' . '> .premium-progress-bar-left-label,' . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-circle-wrap' . '> .premium-progressbar-circle-content' . '> .premium-progress-bar-left-label' );
        $css->render_typography($attributes['labelTypography'], 'Desktop');
    }

    if (isset($attributes['labelMargin'])) {
        $label_margin = $attributes['labelMargin'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-left-label, ' . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap' . '> .premium-progressbar-circle-content' . '> .premium-progress-bar-left-label,' . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-circle-wrap' . '> .premium-progressbar-circle-content' . '> .premium-progress-bar-left-label' );
        $css->add_property('margin', $css->render_spacing($label_margin['Desktop'], $label_margin['unit']));
    }

    //percentage styles
    if (isset($attributes['percentageTypography'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-right-label, ' . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap' . '> .premium-progressbar-circle-content' . '> .premium-progress-bar-right-label,' . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-circle-wrap' . '> .premium-progressbar-circle-content' . '> .premium-progress-bar-right-label' );
        $css->render_typography($attributes['percentageTypography'], 'Desktop');
    }

    if (isset($attributes['percentageMargin'])) {
        $percentage_margin = $attributes['percentageMargin'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-labels-wrap' . '> .premium-progress-bar-right-label, ' . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap' . '> .premium-progressbar-circle-content' . '> .premium-progress-bar-right-label,' . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-circle-wrap' . '> .premium-progressbar-circle-content' . '> .premium-progress-bar-right-label' );
        $css->add_property('margin', $css->render_spacing($percentage_margin['Desktop'], $percentage_margin['unit']));
    }

    //line type
    if (isset($attributes['progressBarMargin'])) {
        $progressBar_margin = $attributes['progressBarMargin'];
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap');
        $css->add_property('margin', $css->render_spacing($progressBar_margin['Desktop'], $progressBar_margin['unit']));
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-dots');
        $css->add_property('margin', $css->render_spacing($progressBar_margin['Desktop'], $progressBar_margin['unit']));
    }
    if (isset($attributes['progressBarRadius'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap');
        $css->add_property('border-radius', $css->render_range($attributes['progressBarRadius'], 'Desktop'));
    }
    if (isset($attributes['progressBarHeight'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap');
        $css->add_property('height', $css->render_range($attributes['progressBarHeight'], 'Desktop'));
    }

    if (isset($attributes['progressBarHeight'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap' . '> .premium-progress-bar-bar');
        $css->add_property('height', $css->render_range($attributes['progressBarHeight'], 'Desktop'));
    }
    if (isset($attributes['progressBarRadius'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progress-bar-wrap' . '> .premium-progress-bar-bar');
        $css->add_property('border-radius', $css->render_range($attributes['progressBarRadius'], 'Desktop'));
    }

    //half circle type
    if (isset($attributes['progressBarSize'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap');
        $css->add_property('width', $css->render_range($attributes['progressBarSize'], 'Desktop'));
    }
    if (isset($attributes['progressBarSize'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap');
        $css->add_property('height', 'calc(' . $attributes['progressBarSize']['Desktop'] . '/ 2 * 1px)');
    }
    if (isset($attributes['progressBarSize'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap' . '> .premium-progressbar-hf-container,'  . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . '> .premium-progressbar-circle-wrap' );
        $css->add_property('width', $css->render_range($attributes['progressBarSize'], 'Desktop'));
    }
    if (isset($attributes['progressBarSize'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap' . '> .premium-progressbar-hf-container,'  . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . '> .premium-progressbar-circle-wrap' );
        $css->add_property('height', $css->render_range($attributes['progressBarSize'], 'Desktop'));
    }
    if (isset($attributes['borderWidth'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap' . '> .premium-progressbar-hf-container' . '> .premium-progressbar-hf-circle' . '> .premium-progressbar-hf-circle-progress');
        $css->add_property('border-width', $css->render_range($attributes['borderWidth'], 'Desktop'));
    }
    if (isset($attributes['borderWidth'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-circle-wrap' . '> .premium-progressbar-hf-container' . '> .premium-progressbar-circle-inner');
        $css->add_property('border-width', $css->render_range($attributes['borderWidth'], 'Desktop'));
    }
    if (isset($attributes['progressBarSize'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-labels');
        $css->add_property('width', $css->render_range($attributes['progressBarSize'], 'Desktop'));
    }
    if (isset($attributes['topSpacing'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-labels');
        $css->add_property('margin-top', $css->render_range($attributes['topSpacing'], 'Desktop'));
    }
    if (isset($attributes['PrefixTypography'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-labels' . '> .premium-progressbar-hf-label-left');
        $css->render_typography($attributes['PrefixTypography'], 'Desktop');
    }
    if (isset($attributes['PrefixMargin'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-labels' . '> .premium-progressbar-hf-label-left');
        $css->add_property('margin-left', $css->render_range($attributes['PrefixMargin'], 'Desktop'));
    }
    if (isset($attributes['suffixTypography'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-labels' . '> .premium-progressbar-hf-label-right');
        $css->render_typography($attributes['suffixTypography'], 'Desktop');
    }
    if (isset($attributes['suffixMargin'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-hf-labels' . '> .premium-progressbar-hf-label-right');
        $css->add_property('margin-right', $css->render_range($attributes['suffixMargin'], 'Desktop'));
    }

    //circle type
    if (isset($attributes['borderWidth'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . ' > .premium-progressbar-circle-wrap' . '> .premium-progressbar-circle-base,'  . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . '> .premium-progressbar-circle-wrap' . '> .premium-progressbar-circle' . '> .premium-progressbar-circle-left,'  . '.' . $unique_id . '> div' . '> .premium-progressbar-hf-wrapper' . '> .premium-progressbar-circle-wrap' . '> .premium-progressbar-circle' . '> .premium-progressbar-circle-right' );
        $css->add_property('border-width', $css->render_range($attributes['borderWidth'], 'Desktop'));
    }

    //dots type
    if (isset($attributes['dotSize'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-dots' . ' > .progress-segment');
        $css->add_property('width', $css->render_range($attributes['dotSize'], 'Desktop'));
        $css->add_property('height', $css->render_range($attributes['dotSize'], 'Desktop'));
    }
    if (isset($attributes['progressBarRadius'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-dots' . ' > .progress-segment');
        $css->add_property('border-radius', $css->render_range($attributes['progressBarRadius'], 'Desktop'));
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-dots');
        $css->add_property('border-radius', $css->render_range($attributes['progressBarRadius'], 'Desktop'));
    }
    if (isset($attributes['dotSpacing'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-dots' . ' > .progress-segment:first-child');
        $css->add_property('margin-right', 'calc(' . $attributes['dotSpacing']['Desktop'] . $attributes['dotSpacing']['unit'] . '/ 2)' );
    }
    if (isset($attributes['dotSpacing'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-dots' . ' > .progress-segment:not(:first-child):not(:last-child)');
        $css->add_property('margin-right', 'calc(' . $attributes['dotSpacing']['Desktop'] . $attributes['dotSpacing']['unit'] . '/ 2)' );
        $css->add_property('margin-left', 'calc(' . $attributes['dotSpacing']['Desktop'] . $attributes['dotSpacing']['unit'] . '/ 2)' );
    }
    if (isset($attributes['dotSpacing'])) {
        $css->set_selector('.' . $unique_id . '> div' . '> .premium-progressbar-dots' . ' > .progress-segment:last-child');
        $css->add_property('margin-left', 'calc(' . $attributes['dotSpacing']['Desktop'] . $attributes['dotSpacing']['unit'] . '/ 2)' );
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
    wp_enqueue_script(
        'pbg-progress-bar',
        PREMIUM_BLOCKS_URL . 'assets/js/progress-bar.js',
        array('jquery'),
        PREMIUM_BLOCKS_VERSION,
        true
    );

    wp_enqueue_script(
        'pbg-waypoints',
        PREMIUM_BLOCKS_URL . 'assets/js/lib/jquery.waypoints.js',
        array('jquery'),
        PREMIUM_BLOCKS_VERSION,
        true
    );

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