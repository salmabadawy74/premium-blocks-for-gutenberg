<?php

/**
 * Server-side rendering of the `core/post-title` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/post-title` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the filtered post title for the current post wrapped inside "h1" tags.
 */
function render_post_title($attributes, $content, $block)
{
    if (!isset($block->context['postId'])) {
        return '';
    }

    $post_ID = $block->context['postId'];
    $title   = get_the_title();

    if (!$title) {
        return '';
    }
?>
    <div class="premium-blog-entry-title">
        <h2>
            <a href="<?php the_permalink($post_ID); ?>">
                <?php esc_html(the_title()); ?>
            </a>
        </h2>
    </div>
<?php
}

/**
 * Registers the `core/post-title` block on the server.
 */
function register_block_post_title()
{
    if (!function_exists('register_block_type')) {
        return;
    }

    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/post-title',
        array(
            'render_callback' => 'render_post_title',
        )
    );
}
register_block_post_title();
