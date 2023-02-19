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
    $classes[] = 'premium-blog-entry-meta';
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
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <title />
            <g data-name="Layer 7" id="Layer_7">
                <path class="cls-1" d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z" />
            </g>
        </svg>
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
            <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="calendar_1_">
                    <path d="M29.334,3H25V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-6V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v2H9V1   c0-0.553-0.448-1-1-1S7,0.447,7,1v2H2.667C1.194,3,0,4.193,0,5.666v23.667C0,30.806,1.194,32,2.667,32h26.667   C30.807,32,32,30.806,32,29.333V5.666C32,4.193,30.807,3,29.334,3z M30,29.333C30,29.701,29.701,30,29.334,30H2.667   C2.299,30,2,29.701,2,29.333V5.666C2,5.299,2.299,5,2.667,5H7v2c0,0.553,0.448,1,1,1s1-0.447,1-1V5h6v2c0,0.553,0.448,1,1,1   s1-0.447,1-1V5h6v2c0,0.553,0.447,1,1,1s1-0.447,1-1V5h4.334C29.701,5,30,5.299,30,5.666V29.333z" fill="#333332" />
                    <rect fill="#333332" height="3" width="4" x="7" y="12" />
                    <rect fill="#333332" height="3" width="4" x="7" y="17" />
                    <rect fill="#333332" height="3" width="4" x="7" y="22" />
                    <rect fill="#333332" height="3" width="4" x="14" y="22" />
                    <rect fill="#333332" height="3" width="4" x="14" y="17" />
                    <rect fill="#333332" height="3" width="4" x="14" y="12" />
                    <rect fill="#333332" height="3" width="4" x="21" y="22" />
                    <rect fill="#333332" height="3" width="4" x="21" y="17" />
                    <rect fill="#333332" height="3" width="4" x="21" y="12" />
                </g>
            </svg>
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
            <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.98 8c0-2.21-1.77-4-3.98-4h-32c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28l8 8-.02-36zm-7.98 20h-24v-4h24v4zm0-6h-24v-4h24v4zm0-6h-24v-4h24v4z" />
                <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
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
        <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 30h-24v4h24v-4zm0-16h-24v4h24v-4zm-24 12h36v-4h-36v4zm0 16h36v-4h-36v4zm0-36v4h36v-4h-36z" />
            <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
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
