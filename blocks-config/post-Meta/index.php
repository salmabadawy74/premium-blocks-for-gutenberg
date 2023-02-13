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


    $post_ID = $block->context['postId'];
    $classes = [];
    $classes[] = '';
    $wrapper_attributes = get_block_wrapper_attributes(array('class' => implode(' ', $classes)));

    $meta_sequence = array('author', 'date', 'comment', 'taxonomy');
    foreach ($meta_sequence as $key => $sequence) {
        switch ($sequence) {
            case 'author':
                $content .=    render_meta_author($attributes, $post_ID);
                break;
            case 'date':
                $content .=  render_meta_date($attributes, $post_ID);
                break;
            case 'comment':
                $content .=  render_meta_comment($attributes, $post_ID);
                break;
            case 'taxonomy':
                $content .=  render_meta_taxonomy($attributes, $post_ID);
                break;
            default:
                break;
        }
    }
    return sprintf('<div %1$s>%2$s</div>', $wrapper_attributes, $content);
}

function render_meta_author($attributes, $postID)
{
    if (!$attributes['showAuther']) {
        return;
    }
    ob_start(); ?>
    <span class="premium-blog-post-author premium-blog-meta-data">
        <span class="dashicons-admin-users dashicons"></span>
        <?php the_author_posts_link(); ?>
    </span>
    <span class="premium-blog-meta-separtor">.</span>
<?php
    return ob_get_clean();
}
/**
 * Render Post Meta - Date HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 1.14.0
 */
function render_meta_date($attributes, $postID)
{
    if (!$attributes['showDate']) {
        return;
    }
    global $post;
    ob_start(); ?>
    <div class="premium-blog-post-time premium-blog-meta-data">
        <time datetime="<?php echo esc_attr(get_the_date('c', $postID)); ?>" class="premium-blog-post-time premium-blog-meta-data">
            <span class="dashicons-calendar dashicons"></span>
            <?php echo esc_html(get_the_date('', $postID)); ?>
        </time>
        <span class="premium-blog-meta-separtor">.</span>
    </div>
<?php
    return ob_get_clean();
}
/**
 * Render Post Meta - Comment HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 1.14.0
 */
function render_meta_comment($attributes, $postID)
{
    if (!$attributes['showComments']) {
        return;
    }
    ob_start(); ?>
    <div class='premium-blog-post-comments premium-blog-meta-data'>
        <span class="premium-post__comment">
            <span class="dashicons-admin-comments dashicons"></span>
            <?php comments_number(); ?>
        </span>
        <span class="premium-blog-meta-separtor">.</span>
    </div>
<?php
    return ob_get_clean();
}
/**
 * Render Post Meta - Comment HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 1.14.0
 */
function render_meta_taxonomy($attributes, $postID)
{
    if (!$attributes['showCategories']) {
        return;
    }

    $terms = get_the_terms($postID, 'category');
    if (is_wp_error($terms)) {
        return;
    }
    if (!isset($terms[0])) {
        return;
    }
    ob_start(); ?>

    <div class="premium-blog-post-categories premium-blog-meta-data">
        <i class="fa fa-align-left fa-fw"></i>
        <?php the_category(', '); ?>
    </div>
<?php
    return ob_get_clean();
}


/**
 * Registers the `core/post-date` block on the server.
 */
function register_block_post_meta()
{
    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/post-Meta',
        array(
            'render_callback' => 'render_block_core_post_meta',
        )
    );
}
register_block_post_meta();
