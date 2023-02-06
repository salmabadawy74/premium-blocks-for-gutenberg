<?php

/**
 * Server-side rendering of the `core/post-date` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/post-date` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post date for the current post wrapped inside "time" tags.
 */
function render_block_core_post_meta($attributes, $content, $block)
{
    if (!isset($block->context['postId'])) {
        return '';
    }

    $post_ID            = $block->context['postId'];

    if (!$attributes['showDate']) {
        return;
    }
    $classes = array();
    $classes[] = 'premium-blog-post-time';
    $classes[] = 'premium-blog-meta-data';
    $wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));

    $formatted_date   = get_the_date(empty($attributes['format']) ? '' : $attributes['format'], $post_ID);
    $unformatted_date = esc_attr(get_the_date('c', $post_ID));
    var_dump("autho");
    return sprintf(
        '<div %1$s><time datetime="%2$s">%3$s</time></div>',
        $wrapper_attributes,
        $unformatted_date,
        $formatted_date
    );
}

function render_meta_author($attributes)
{
    if (!$attributes['showAuther']) {
        return;
    }
?>
    <span class="premium-blog-post-author premium-blog-meta-data">
        <span class="dashicons-admin-users dashicons"></span>
        <?php the_author_posts_link(); ?>
    </span>
    <span class="premium-blog-meta-separtor">.</span>
<?php
}
/**
 * Render Post Meta - Date HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 1.14.0
 */
function render_meta_date($attributes)
{
    if (!$attributes['showDate']) {
        return;
    }
    $classes = array();
    $classes[] = 'premium-blog-post-time';
    $classes[] = 'premium-blog-meta-data';
    $wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));

    $formatted_date   = get_the_date(empty($attributes['format']) ? '' : $attributes['format'], $post_ID);
    $unformatted_date = esc_attr(get_the_date('c', $post_ID));
    var_dump("autho");
    return sprintf(
        '<div %1$s><time datetime="%2$s">%3$s</time></div>',
        $wrapper_attributes,
        $unformatted_date,
        $formatted_date
    );
}
/**
 * Render Post Meta - Comment HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 1.14.0
 */
function render_meta_comment($attributes)
{
    if (!$attributes['showComments']) {
        return;
    }
?>
    <div class='premium-blog-post-comments premium-blog-meta-data'>
        <span class="premium-post__comment">
            <span class="dashicons-admin-comments dashicons"></span>
            <?php comments_number(); ?>
        </span>
        <span class="premium-blog-meta-separtor">.</span>
    </div>
<?php
}
/**
 * Render Post Meta - Comment HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 1.14.0
 */
function render_meta_taxonomy($attributes)
{
    if (!$attributes['showCategories']) {
        return;
    }
    global $post;
    $terms = get_the_terms($post_ID, 'category');
    if (is_wp_error($terms)) {
        return;
    }
    if (!isset($terms[0])) {
        return;
    }
?>
    <div class="premium-blog-post-categories premium-blog-meta-data">
        <i class="fa fa-align-left fa-fw"></i>
        <?php the_category(', '); ?>
    </div>
<?php
}


/**
 * Registers the `core/post-date` block on the server.
 */
function register_block_post_meta()
{
    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/post-meta',
        array(
            'render_callback' => 'render_block_core_post_meta',
        )
    );
}
register_block_post_meta();
