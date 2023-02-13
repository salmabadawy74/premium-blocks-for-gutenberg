<?php

/**
 * Server-side rendering of the `premium/post-featured-image` block.
 *
 * @package WordPress
 */
// function get_premium_feature_image_css_style($attr, $unique_id)
// {
//     $css                    = new Premium_Blocks_css();
//     $media_query            = array();
//     $media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
//     $media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
//     $media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');


//     if (isset($attributes['thumbnail'])) {
//         $css->set_selector('.premium-blog-post-outer-container .premium-blog-thumbnail-container img ');
//         $css->add_property('object-fit', $attr['thumbnail']);
//     }
//     if (isset($attributes['height'])) {
//         var_dump($attr["height"]);
//         $css->set_selector('.premium-blog-post-outer-container  .premium-blog-thumb-effect-wrapper .premium-blog-thumbnail-container img');
//         $css->add_property('height', $css->render_range($attr['height'], 'Desktop'));
//     }
//     if (isset($attributes['filter'])) {
//         $css->set_selector('.premium-blog-post-outer-container .premium-blog-thumbnail-container img');
//         $css->add_property(
//             'filter',
//             'brightness(' . $attr['filter']['bright'] . '%)' . 'contrast(' .  $attr['filter']['contrast'] . '%) ' . 'saturate(' . $attr['filter']['saturation'] . '%) ' . 'blur(' . $attr['filter']['blur'] . 'px) ' . 'hue-rotate(' . $attr['filter']['hue'] . 'deg)'
//         );
//     }
//     if (isset($attributes['Hoverfilter'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-thumbnail-container:hover img');
//         $css->add_property(
//             'filter',
//             'brightness(' . $attr['Hoverfilter']['bright'] . '%)' . 'contrast(' .  $attr['Hoverfilter']['contrast'] . '%) ' . 'saturate(' . $attr['Hoverfilter']['saturation'] . '%) ' . 'blur(' . $attr['Hoverfilter']['blur'] . 'px) ' . 'hue-rotate(' . $attr['Hoverfilter']['hue'] . 'deg)'
//         );
//     }


//     $css->start_media_query($media_query['tablet']);
//     if (isset($attributes['height'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-thumbnail-container img');
//         $css->add_property('height', $css->render_range($attr['height'], 'Tablet'));
//     }
//     $css->stop_media_query();
//     $css->start_media_query($media_query['mobile']);
//     if (isset($attributes['height'])) {
//         $css->set_selector('.' . $unique_id . '.premium-blog-thumbnail-container img');
//         $css->add_property('height', $css->render_range($attr['height'], 'Mobile'));
//     }
//     $css->stop_media_query();
//     return $css->css_output();
// }


/**
 * Renders the `premium/post-featured-image` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the featured image for the current post.
 */
function render_block_premium_post_featured_image($attributes, $content, $block)
{
    if (!isset($block->context['postId'])) {
        return '';
    }
    $post_ID = $block->context['postId'];
    // Check is needed for backward compatibility with third-party plugins
    // that might rely on the `in_the_loop` check; calling `the_post` sets it to true.
    if (!in_the_loop() && have_posts()) {
        the_post();
    }
    if (!get_the_post_thumbnail_url()) {
        return;
    }

    $is_link        = isset($attributes['isLink']) && $attributes['isLink'];
    $size_slug      = isset($attributes['imageSize']) ? $attributes['imageSize'] : 'post-thumbnail';

    if ($is_link) {
        $attr['alt'] = trim(strip_tags(get_the_title($post_ID)));
    }


    $featured_image = get_the_post_thumbnail($post_ID, $size_slug);
    if (!$featured_image) {
        return '';
    }


    // return $featured_image;
    $wrapImage       = array(
        'premium-blog-thumbnail-container',
        'premium-blog-' .
            $attributes['hoverEffect'] .
            '-effect',
    );

    ob_start(); ?>
    <div class="premium-blog-thumb-effect-wrapper">
        <div class="<?php echo esc_html(implode(' ', $wrapImage)); ?>">
            <?php echo wp_get_attachment_image(get_post_thumbnail_id(), $attributes['imageSize']); ?>
        </div>
        <div class='premium-blog-thumbnail-overlay'>
            <a href="<?php the_permalink(); ?>">

            </a>
        </div>
    </div>
<?php
    return ob_get_clean();
}

/**
 * Generate markup for the HTML element that will be used for the overlay.
 *
 * @param array $attributes Block attributes.
 *
 * @return string HTML markup in string format.
 */

/**
 * Generates class names and styles to apply the border support styles for
 * the Post Featured Image block.
 *
 * @param array $attributes The block attributes.
 * @return array The border-related classnames and styles for the block.
 */

/**
 * Registers the `premium/post-featured-image` block on the server.
 */
function register_block_premium_post_featured_image()
{
    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/feature-image',
        array(
            'render_callback' => 'render_block_premium_post_featured_image',
        )
    );
}
register_block_premium_post_featured_image();
