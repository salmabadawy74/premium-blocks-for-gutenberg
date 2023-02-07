<?php

/**
 * Server-side rendering of the `premium/post-title` block.
 *
 * @package WordPress
 */

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
