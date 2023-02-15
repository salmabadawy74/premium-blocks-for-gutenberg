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
    $wrapper_attributes = 'premium-blog-pagination-container';
    $next_Label              = isset($attributes['nextString']) && !empty($attributes['nextString']) ? esc_html($attributes['nextString']) : $default_label;
    $prev_Label = isset($attributes['prevString']) && !empty($attributes['prevString']) ? esc_html($attributes['prevString']) : $default_label;
    $content = '';
    $show_Next_Prev = $attributes['showPrevNext'];

    global $wp_query;
    if (!$max_page || $max_page > $page) {
        $custom_query           = new WP_Query(build_query_vars_from_query_block($block, $page));
        $custom_query_max_pages = (int) $custom_query->max_num_pages;
        $prev_wp_query = $wp_query;
        $wp_query      = $custom_query;
        $total         = !$max_page || $max_page > $wp_query->max_num_pages ? $wp_query->max_num_pages : $max_page;
        $paginate_args = array(
            'base'      => '%_%',
            'format'    => "?$page_key=%#%",
            'current'   => max(1, $page),
            'total'     => $total,
            'prev_next' => false,
        );

        wp_reset_postdata(); // Restore original Post Data.

        if (1 !== $page) {
            if ($show_Next_Prev) {
                $content .= sprintf(
                    '<a  class="prev page-numbers" href="%1$s" %2$s>%2$s</a>',
                    esc_url(add_query_arg($page_key, $page - 1)),
                    $prev_Label
                );
            }
            $paginate_args['add_args'] = array('cst' => '');
        }
        $paged = empty($_GET['paged']) ? null : (int) $_GET['paged'];
        if ($paged) {
            $paginate_args['add_args'] = array('paged' => $paged);
        }
        $content .= paginate_links($paginate_args);
        wp_reset_postdata(); // Restore original Post Data.
        $wp_query = $prev_wp_query;
    }
    if ($custom_query_max_pages && $custom_query_max_pages !== $page) {
        if ($show_Next_Prev) {

            $content .= sprintf(
                '<a class="next page-numbers" href="%1$s" %2$s>%2$s</a>',
                esc_url(add_query_arg($page_key, $page + 1)),
                $next_Label
            );
        }
    }

    if (
        empty($content)
    ) {
        return '';
    }
    return sprintf(
        '<div class=%1$s>%2$s</div>',
        $wrapper_attributes,
        $content
    );
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
