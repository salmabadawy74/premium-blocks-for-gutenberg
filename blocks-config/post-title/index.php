<?php

/**
 * Server-side rendering of the `premium/post-title` block.
 *
 * @package WordPress
 */
// function get_premium_post_title_css_style($attr, $unique_id)
// {
//     $css                    = new Premium_Blocks_css();
//     $media_query            = array();
//     $media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
//     $media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
//     $media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');


//     if (isset($attributes['typography'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
//         $css->render_typography($attributes['typography'], 'Desktop');
//     }
//     if (isset($attributes['bottomSpacing'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
//         $css->add_property('margin-bottom', $css->get_responsive_css($attr['bottomSpacing'], 'Desktop'));
//     }
//     if (isset($attributes['textColor'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title  a');
//         $css->add_property('color', $css->render_color($attr["textColor"]));
//     }
//     if (isset($attributes['hoverColor'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container:hover .premium-blog-entry-title  a');
//         $css->add_property('color', $css->render_color($attr["hoverColor"]));
//     }


//     $css->start_media_query($media_query['tablet']);
//     if (isset($attributes['typography'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
//         $css->render_typography($attributes['typography'], 'Tablet');
//     }
//     if (isset($attributes['bottomSpacing'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
//         $css->add_property('margin-bottom', $css->get_responsive_css($attr['bottomSpacing'], 'Tablet'));
//     }
//     $css->stop_media_query();
//     $css->start_media_query($media_query['mobile']);
//     if (isset($attributes['typography'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
//         $css->render_typography($attributes['typography'], 'Mobile');
//     }
//     if (isset($attributes['bottomSpacing'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-entry-title__container .premium-blog-entry-title ');
//         $css->add_property('margin-bottom', $css->get_responsive_css($attr['bottomSpacing'], 'Mobile'));
//     }
//     $css->stop_media_query();
//     return $css->css_output();
// }

/**
 * Renders the `premium/post-title` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the filtered post title for the current post wrapped inside "h1" tags.
 */
function render_block_premium_post_title($attributes, $content, $block)
{
    if (!isset($block->context['postId'])) {
        return '';
    }

    // if (
    //     isset($attributes['blockId']) && !empty($attributes['blockId'])
    // ) {
    //     $unique_id = ".{$attributes['blockId']}";
    // }

    // $style_id = 'pbg-blocks-style' . esc_attr($unique_id);
    // if (
    //     !wp_style_is($style_id, 'enqueued') && apply_filters('Premium_BLocks_blocks_render_inline_css', true, 'lottie', $unique_id)
    // ) {
    //     $css = get_premium_post_title_css_style($attributes, $unique_id);
    //     if (!empty($css)) {
    //         if ($block_helpers->should_render_inline('post-title', $unique_id)) {
    //             $content = '<style id="pbg-blocks-style' . esc_attr($unique_id) . '">' . $css . '</style>' . $content;
    //         } else {
    //             $block_helpers->render_inline_css($css, $style_id, true);
    //         }
    //     }
    // };

    $post_ID = $block->context['postId'];
    $title   = get_the_title();

    if (!$title) {
        return '';
    }

    $tag_name = 'h2';
    if (isset($attributes['level'])) {
        $tag_name = 0 === $attributes['level'] ? 'p' :   $attributes['level'];
    }

    if (isset($attributes['isLink']) && $attributes['isLink']) {
        $rel   = !empty($attributes['rel']) ? 'rel="' . esc_attr($attributes['rel']) . '"' : '';
        $title = sprintf('<a href="%1$s" target="%2$s" %3$s>%4$s</a>', get_the_permalink($post_ID), esc_attr($attributes['linkTarget']), $rel, $title);
    }

    $classes = array();
    $classes[] = "premium-blog-entry-title";
    $wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));

    $content = sprintf(
        '<%1$s >%2$s</%1$s>',
        $tag_name,
        $title
    );
    return sprintf('<div %1$s>%2$s</div>', $wrapper_attributes, $content);
}

/**
 * Registers the `premium/post-title` block on the server.
 */
function register_block_premium_post_title()
{
    if (!function_exists('register_block_type')) {
        return;
    }

    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/post-title',
        array(
            'render_callback' => 'render_block_premium_post_title',
        )
    );
}
register_block_premium_post_title();
