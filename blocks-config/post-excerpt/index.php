<?php

/**
 * Server-side rendering of the `premium/post-excerpt` block.
 *
 * @package WordPress
 */

/**
 * Renders the `premium/post-excerpt` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post excerpt for the current post wrapped inside "p" tags.
 */
function render_block_premium_post_excerpt($attributes, $content, $block)
{
    if (!isset($block->context['postId'])) {
        return '';
    }

    if (!$attributes['showContent']) {
        return;
    }
    $src          = $attributes['displayPostExcerpt'];
    $excerpt_type = $attributes['excerptType'];
    $excerpt_text = $attributes['readMoreText'];
    $length       = $attributes['excerptLen'];
    $content = "";
    $content .=   '<p class="premium-blog-post-content">' . render_post_content($src, $length, $excerpt_type, $excerpt_text) . "</p>";


    if ('Link' === $excerpt_type) {
        if (empty($excerpt_text)) {
            return;
        }
        $wrapbutton = 'premium-blog-excerpt-link-wrap';
        $wrapbutton .= (isset($attributes['fullWidth']) && $attributes["fullWidth"]) ? " premium-blog-full-link" : '';
        $wrapper_class
            = get_block_wrapper_attributes(array('class' => trim($wrapbutton)));
        $button_content = '<a class="premium-blog-excerpt-link " href="' . esc_url(get_the_permalink($block->context['postId'])) . '">' . wp_kses_post($attributes['readMoreText']) . '</a>';
        $content .=   sprintf(
            '<div %1$s>%2$s</div>',
            $wrapper_class,
            $button_content
        );
    }
    return  $content;
}


function render_post_content($source, $excerpt_length, $cta_type)
{

    $excerpt = '';
    if ('Post Full Content' === $source) {
        // Print post full content.
        $excerpt = get_the_content();
    } else {

        $excerpt = trim(get_the_excerpt());
        $words   = explode(' ', $excerpt, $excerpt_length + 1);
        if (count($words) > $excerpt_length) {
            if (!has_excerpt()) {
                array_pop($words);
                if ('dots' === $cta_type) {
                    array_push($words, '…');
                }
            }
        }
        $excerpt = implode(' ', $words);
    }
    return $excerpt;
}

/**
 * Registers the `core/post-excerpt` block on the server.
 */
function register_block_premium_post_excerpt()
{
    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/post-excerpt',
        array(
            'render_callback' => 'render_block_premium_post_excerpt',
        )
    );
}

register_block_premium_post_excerpt();
