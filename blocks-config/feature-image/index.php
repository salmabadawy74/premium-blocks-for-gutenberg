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
function get_block_premium_post_featured_image_overlay_element_markup($attributes)
{
    $has_dim_background  = isset($attributes['dimRatio']) && $attributes['dimRatio'];
    $has_gradient        = isset($attributes['gradient']) && $attributes['gradient'];
    $has_custom_gradient = isset($attributes['customGradient']) && $attributes['customGradient'];
    $has_solid_overlay   = isset($attributes['overlayColor']) && $attributes['overlayColor'];
    $has_custom_overlay  = isset($attributes['customOverlayColor']) && $attributes['customOverlayColor'];
    $class_names         = array('wp-block-post-featured-image__overlay');
    $styles              = array();

    if (!$has_dim_background) {
        return '';
    }

    // Apply border classes and styles.
    $border_attributes = get_block_premium_post_featured_image_border_attributes($attributes);

    if (!empty($border_attributes['class'])) {
        $class_names[] = $border_attributes['class'];
    }

    if (!empty($border_attributes['style'])) {
        $styles[] = $border_attributes['style'];
    }

    // Apply overlay and gradient classes.
    if ($has_dim_background) {
        $class_names[] = 'has-background-dim';
        $class_names[] = "has-background-dim-{$attributes['dimRatio']}";
    }

    if ($has_solid_overlay) {
        $class_names[] = "has-{$attributes['overlayColor']}-background-color";
    }

    if ($has_gradient || $has_custom_gradient) {
        $class_names[] = 'has-background-gradient';
    }

    if ($has_gradient) {
        $class_names[] = "has-{$attributes['gradient']}-gradient-background";
    }

    // Apply background styles.
    if ($has_custom_gradient) {
        $styles[] = sprintf('background-image: %s;', $attributes['customGradient']);
    }

    if ($has_custom_overlay) {
        $styles[] = sprintf('background-color: %s;', $attributes['customOverlayColor']);
    }

    return sprintf(
        '<span class="%s" style="%s" aria-hidden="true"></span>',
        esc_attr(implode(' ', $class_names)),
        esc_attr(safecss_filter_attr(implode(' ', $styles)))
    );
}

/**
 * Generates class names and styles to apply the border support styles for
 * the Post Featured Image block.
 *
 * @param array $attributes The block attributes.
 * @return array The border-related classnames and styles for the block.
 */
function get_block_premium_post_featured_image_border_attributes($attributes)
{
    $border_styles = array();
    $sides         = array('top', 'right', 'bottom', 'left');

    // Border radius.
    if (isset($attributes['style']['border']['radius'])) {
        $border_styles['radius'] = $attributes['style']['border']['radius'];
    }

    // Border style.
    if (isset($attributes['style']['border']['style'])) {
        $border_styles['style'] = $attributes['style']['border']['style'];
    }

    // Border width.
    if (isset($attributes['style']['border']['width'])) {
        $border_styles['width'] = $attributes['style']['border']['width'];
    }

    // Border color.
    $preset_color           = array_key_exists('borderColor', $attributes) ? "var:preset|color|{$attributes['borderColor']}" : null;
    $custom_color           = _wp_array_get($attributes, array('style', 'border', 'color'), null);
    $border_styles['color'] = $preset_color ? $preset_color : $custom_color;

    // Individual border styles e.g. top, left etc.
    foreach ($sides as $side) {
        $border                 = _wp_array_get($attributes, array('style', 'border', $side), null);
        $border_styles[$side] = array(
            'color' => isset($border['color']) ? $border['color'] : null,
            'style' => isset($border['style']) ? $border['style'] : null,
            'width' => isset($border['width']) ? $border['width'] : null,
        );
    }

    $styles     = wp_style_engine_get_styles(array('border' => $border_styles));
    $attributes = array();
    if (!empty($styles['classnames'])) {
        $attributes['class'] = $styles['classnames'];
    }
    if (!empty($styles['css'])) {
        $attributes['style'] = $styles['css'];
    }
    return $attributes;
}

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
