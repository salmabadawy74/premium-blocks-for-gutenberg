<?php

/**
 * Server-side rendering of the `core/query` block.
 *
 * @package WordPress
 */

function get_premium_post_grid_css_style($attr, $unique_id)
{
    $css                    = new Premium_Blocks_css();
    $media_query            = array();
    $media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
    $media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
    $media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');

    if (isset($attributes['typography'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
        $css->render_typography($attributes['typography'], 'Desktop');
    }
    if (isset($attributes['bottomSpacing'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
        $css->add_property('margin-bottom', $css->get_responsive_css($attr['bottomSpacing'], 'Desktop'));
    }
    if (isset($attributes['textColor'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title  a');
        $css->add_property('color', $css->render_color($attr["textColor"]));
    }
    if (isset($attributes['hoverColor'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container:hover .premium-blog-entry-title  a');
        $css->add_property('color', $css->render_color($attr["hoverColor"]));
    }


    $css->start_media_query($media_query['tablet']);
    if (isset($attributes['typography'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
        $css->render_typography($attributes['typography'], 'Tablet');
    }
    if (isset($attributes['bottomSpacing'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
        $css->add_property('margin-bottom', $css->get_responsive_css($attr['bottomSpacing'], 'Tablet'));
    }
    $css->stop_media_query();
    $css->start_media_query($media_query['mobile']);
    if (isset($attributes['typography'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
        $css->render_typography($attributes['typography'], 'Mobile');
    }
    if (isset($attributes['bottomSpacing'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
        $css->add_property('margin-bottom', $css->get_responsive_css($attr['bottomSpacing'], 'Mobile'));
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
        // If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
        // $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
        // $attributes=array_merge($attributes,)
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
