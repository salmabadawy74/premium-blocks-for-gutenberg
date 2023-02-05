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

    do_action('pbg_single_post_before_meta', get_the_ID(), $attributes);
    $meta_sequence = array('author', 'date', 'comment', 'taxonomy');
?>
    <div class="premium-blog-entry-meta">
        <?php
        foreach ($meta_sequence as $key => $sequence) {
            switch ($sequence) {
                case 'author':
                    render_meta_author($attributes);
                    break;
                case 'date':
                    render_meta_date($attributes);
                    break;
                case 'comment':
                    render_meta_comment($attributes);
                    break;
                case 'taxonomy':
                    render_meta_taxonomy($attributes);
                    break;
                default:
                    break;
            }
        }
        ?>
    </div>
<?php
    do_action('pbg_single_post_after_meta', get_the_ID(), $attributes);
}

function render_meta_author($attributes)
{
    if (!$attributes['displayPostAuthor']) {
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
    if (!$attributes['displayPostDate']) {
        return;
    }
    global $post;
?>
    <div class="premium-blog-post-time premium-blog-meta-data">
        <time datetime="<?php echo esc_attr(get_the_date('c', $post_ID)); ?>" class="premium-blog-post-time premium-blog-meta-data">
            <span class="dashicons-calendar dashicons"></span>
            <?php echo esc_html(get_the_date('', $post_ID)); ?>
        </time>
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
function render_meta_comment($attributes)
{
    if (!$attributes['displayPostComment']) {
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
    if (!$attributes['displayPostCategories']) {
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
        'premium/post-meta',
        array(
            'render_callback' => 'render_block_core_post_meta',
        )
    );
}
register_block_post_meta();
