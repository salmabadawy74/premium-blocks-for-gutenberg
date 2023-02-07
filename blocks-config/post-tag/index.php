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
function render_block_premium_post_tag($attributes, $content, $block)
{
    if (!isset($block->context['postId'])) {
        return '';
    }
    if (!$attributes['displayPostTags']) {
        return;
    }
    if ($attributes['displayPostTags'] && has_tag()) {
        ob_start(); ?>
        <div class="premium-blog-post-tags-container">
            <i class="fa fa-tags fa-fw"></i>
            <?php the_tags(' ', ', '); ?>
        </div>
<?php
        return ob_get_clean();
    }
}

/**
 * Registers the `premium/post-title` block on the server.
 */
function register_block_premium_post_tag()
{
    if (!function_exists('register_block_type')) {
        return;
    }

    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/post-tag',
        array(
            'render_callback' => 'render_block_premium_post_tag',
        )
    );
}
register_block_premium_post_tag();
