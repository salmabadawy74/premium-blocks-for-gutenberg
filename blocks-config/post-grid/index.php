<?php

/**
 * Server-side rendering of the `core/query` block.
 *
 * @package WordPress
 */

function get_premium_post_grid_css_style($attributes, $unique_id)
{
    $css                    = new Premium_Blocks_css();
    $media_query            = array();
    $media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
    $media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
    $media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');

    if (isset($attributes['columns'])) {
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('grid-template-columns', 'repeat(' . $attributes['columns']['Desktop'] . ',minmax(0,1fr))');
    }
    if (isset($attributes['rowGap'])) {
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('row-gap', $attributes['rowGap'] . 'px');
    }

    if (isset($attributes['columnGap'])) {
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('column-gap', $attributes['columnGap'] . 'px');
    }
    if (isset($attributes['border'])) {
        $content_border_width  = $attributes['border']['borderWidth'];
        $content_border_radius = $attributes['border']['borderRadius'];
        $content_border_color = $attributes['border']['borderColor'];
        $content_border_type = $attributes['border']['borderType'];

        $css->set_selector('.premium-blog-wrap');
        $css->add_property('border-color', $css->render_color($content_border_color));
        $css->add_property('border-style', $content_border_type);
        $css->add_property('border-width', $css->render_spacing($content_border_width['Desktop'], 'px'));
        $css->add_property('border-radius', $css->render_spacing($content_border_radius['Desktop'], 'px'));
    }
    if (isset($attributes['margin'])) {
        $content_margin = $attributes['margin'];
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('padding', $css->render_spacing($content_margin['Desktop'], $content_margin['unit']));
    }
    if (isset($attr['padding'])) {
        $content_padding = $attributes['padding'];
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('padding', $css->render_spacing($content_padding['Desktop'], $content_padding['unit']));
    }
    if (isset($attributes['containerBackground'])) {
        $background = $attributes['containerBackground'];
        error_log(wp_json_encode($background));
        $container_grid  = '';
        $container_grid2 = '';
        $container_bg    = '';
        if ('gradient' === $background['backgroundType']) {
            $container_grid  = $background['backgroundColor'] ? $background['backgroundColor'] : 'rgba(255,255,255,0)';
            $container_grid2 = $background['gradientColorTwo'] ? $background['gradientColorTwo'] : '.777';
            if ('radial' === $background['gradientType']) {
                $container_bg = 'radial-gradient(at ' . $background['gradientPosition'] . ', ' . $container_grid . ' ' . $background['gradientLocationOne'] . '%, ' . $container_grid2 . ' ' . $background['gradientLocationTwo'] . '%)';
            } elseif ('radial' !== $background['backgroundType']) {
                $container_bg = 'linear-gradient(' . $background['gradientAngle'] . 'deg, ' . $container_grid . ' ' . $background['gradientLocationOne'] . '%, ' . $container_grid2 . ' ' . $background['gradientLocationTwo'] . '%)';
            }
        } else {
            $container_bg = $background['backgroundImageURL'] ? 'url(' . $background['backgroundImageURL'] . ');' : '';
        }

        $css->set_selector('.premium-blog-wrap');
        $css->add_property('background-color', $css->render_color('solid' === $background['backgroundType'] ? $background['backgroundColor'] : ''));
        $css->add_property('background-image', $css->render_color($container_bg));
        $css->add_property('background-repeat', $css->render_color($background['backgroundRepeat']));
        $css->add_property('background-size', $css->render_color($background['backgroundSize']));
        $css->add_property('background-attachment', $css->render_color($background['fixed'] ? 'fixed' : 'unset'));
        $css->add_property('background-position', $css->render_color($background['backgroundPosition']));
    }
    if (isset($attr['boxShadow'])) {
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('box-shadow', $css->render_shadow($attributes['boxShadow']));
    }


    $css->start_media_query($media_query['tablet']);
    if (isset($attributes['border'])) {
        $content_border_width  = $attributes['border']['borderWidth'];
        $content_border_radius = $attributes['border']['borderRadius'];

        $css->set_selector('.premium-blog-wrap');
        $css->add_property('border-width', $css->render_spacing($content_border_width['Tablet'], 'px'));
        $css->add_property('border-radius', $css->render_spacing($content_border_radius['Tablet'], 'px'));
    }
    if (isset($attributes['margin'])) {
        $content_margin = $attributes['margin'];
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('padding', $css->render_spacing($content_margin['Tablet'], $content_margin['unit']));
    }
    if (isset($attr['padding'])) {
        $content_padding = $attributes['padding'];
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('padding', $css->render_spacing($content_padding['Tablet'], $content_padding['unit']));
    }

    $css->stop_media_query();
    $css->start_media_query($media_query['mobile']);
    if (isset($attributes['border'])) {
        $content_border_width  = $attributes['border']['borderWidth'];
        $content_border_radius = $attributes['border']['borderRadius'];

        $css->set_selector('.premium-blog-wrap');
        $css->add_property('border-width', $css->render_spacing($content_border_width['Mobile'], 'px'));
        $css->add_property('border-radius', $css->render_spacing($content_border_radius['Mobile'], 'px'));
    }
    if (isset($attributes['margin'])) {
        $content_margin = $attributes['margin'];
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('padding', $css->render_spacing($content_margin['Mobile'], $content_margin['unit']));
    }
    if (isset($attr['padding'])) {
        $content_padding = $attributes['padding'];
        $css->set_selector('.premium-blog-wrap');
        $css->add_property('padding', $css->render_spacing($content_padding['Mobile'], $content_padding['unit']));
    }

    $css->stop_media_query();
    return $css->css_output();
}

function get_post_grid_content($attributes, $content, $block)
{
    $block_helpers = pbg_blocks_helper();
    if (isset($attributes['blockId']) && !empty($attributes['blockId'])) {
        $unique_id = $attributes['blockId'];
    } else {
        $unique_id = rand(100, 10000);
    }

    wp_enqueue_style(
        'pbg-icon-box-style',
        PREMIUM_BLOCKS_URL . 'assets/css/minified/pagination.min.css',
        array(),
        PREMIUM_BLOCKS_VERSION,
        'all'
    );
    $style_id = 'pbg-blocks-style' . esc_attr($unique_id);
    if (!wp_style_is($style_id, 'enqueued') && apply_filters('Premium_BLocks_blocks_render_inline_css', true, 'post-grid', $unique_id)) {
        $css = get_premium_post_grid_css_style($attributes, $unique_id);
        if (!empty($css)) {
            if ($block_helpers->should_render_inline('icon-box', $unique_id)) {
                $content = '<style id="pbg-blocks-style' . esc_attr($unique_id) . '">' . $css . '</style>' . $content;
            } else {
                $block_helpers->render_inline_css($css, $style_id, true);
            }
        }
    };

    return $content;
}
/**
 * Registers the `core/query` block on the server.
 */
function register_block_pbg_post_grid()
{
    if (!function_exists('register_block_type')) {
        return;
    }

    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/post-grid',
        array(
            'render_callback' => "get_post_grid_content",
            'editor_style'  => 'premium-blocks-editor-css',
            'editor_script' => 'pbg-blocks-js',
        )
    );
}

register_block_pbg_post_grid();
