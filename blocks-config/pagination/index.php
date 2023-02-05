<?php

/**
 * Server-side rendering of the `premium/pagination` block.
 *
 * @package WordPress
 */

/**
 * Renders the `premium/pagination` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the next posts link for the query pagination.
 */
function render_premium_pagination($attributes, $content, $block)
{
    $page_key = isset($block->context['queryId']) ? 'query-' . $block->context['queryId'] . '-page' : 'query-page';
    $page     = empty($_GET[$page_key]) ? 1 : (int) $_GET[$page_key];
    $max_page = isset($block->context['query']['pages']) ? (int) $block->context['query']['pages'] : 0;

    $wrapper_attributes = get_block_wrapper_attributes();
    $label              = isset($attributes['label']) && !empty($attributes['label']) ? esc_html($attributes['label']) : $default_label;

    $content = '';

    // Check if the pagination is for Query that inherits the global context.
    if (isset($block->context['query']['inherit']) && $block->context['query']['inherit']) {
        $filter_link_attributes = function () use ($wrapper_attributes) {
            return $wrapper_attributes;
        };
        add_filter('next_posts_link_attributes', $filter_link_attributes);
        // Take into account if we have set a bigger `max page`
        // than what the query has.
        global $wp_query;
        if ($max_page > $wp_query->max_num_pages) {
            $max_page = $wp_query->max_num_pages;
        }
        $content = get_next_posts_link($label, $max_page);
        remove_filter('next_posts_link_attributes', $filter_link_attributes);
    } elseif (!$max_page || $max_page > $page) {
        $custom_query           = new WP_Query(build_query_vars_from_query_block($block, $page));
        $custom_query_max_pages = (int) $custom_query->max_num_pages;
        if ($custom_query_max_pages && $custom_query_max_pages !== $page) {
            $content = sprintf(
                '<a href="%1$s" %2$s>%3$s</a>',
                esc_url(add_query_arg($page_key, $page + 1)),
                $wrapper_attributes,
                $label
            );
        }
        wp_reset_postdata(); // Restore original Post Data.
    }
    return $content;
}

/**
 * Registers the `core/query-pagination-next` block on the server.
 */
function register_premium_pagination()
{
    if (!function_exists('register_block_type')) {
        return;
    }
    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/pagination',
        array(
            'render_callback' => 'render_premium_pagination',
        )
    );
}

register_premium_pagination();
