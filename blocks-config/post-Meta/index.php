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
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 18.7023C18 15.6706 14.5 15 12 15C9.5 15 6 15.6706 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg> <?php the_author_posts_link(); ?>
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
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H4M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V11ZM15 3V7M9 3V7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_429_11233)">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_429_11233">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg> <?php comments_number(); ?>
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
        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M.5 9h9.75v1.25H.5zm0-3.25h15V7H.5zm0 6.5h15v1.25H.5zm0-9.75h9.75v1.25H.5z" />
        </svg> <?php the_category(', '); ?>
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
