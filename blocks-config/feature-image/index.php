<?php

/**
 * Server-side rendering of the `premium/post-featured-image` block.
 *
 * @package WordPress
 */

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
    $block_helpers = pbg_blocks_helper();
    $shapes = $block_helpers->getSvgShapes();

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
    $bottomShapeClasses = "premium-shape-divider premium-bottom-shape";
    if (isset($attributes['shapeBottom']) && isset($attributes["shapeBottom"]['flipShapeDivider'])) {
        $bottomShapeClasses .= " premium-shape-flip";
    }
    if (isset($attributes['shapeBottom']) && isset($attributes["shapeBottom"]['front'])) {
        $bottomShapeClasses .= " premium-shape-above-content";
    }
    if (isset($attributes['shapeBottom']) && isset($attributes["shapeBottom"]['invertShapeDivider'])) {
        $bottomShapeClasses .= " premium-shape__invert";
    }


    ob_start(); ?>
    <div class="premium-blog-thumb-effect-wrapper">
        <div class="<?php echo esc_html(implode(' ', $wrapImage)); ?>">
            <?php echo wp_get_attachment_image(get_post_thumbnail_id(), $attributes['imageSize']);
            if (isset($attributes['shapeBottom']) && isset($attributes["shapeBottom"]['style'])) { ?>
                <div class="<?php echo ($bottomShapeClasses) ?>">
                    <?php echo ($shapes[$attributes["shapeBottom"]['style']]);
                    ?>
                </div>
            <?php }
            ?>
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
