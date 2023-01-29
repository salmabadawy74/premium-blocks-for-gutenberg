<?php

/**
 * Server-side rendering of the `core/query` block.
 *
 * @package WordPress
 */

/**
 * Registers the `core/query` block on the server.
 */
function register_block_pbg_post_grid()
{
    if (!function_exists('register_block_type')) {
        return;
    }

    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/post-grid',
        array(
            'editor_style'  => 'premium-blocks-editor-css',
            'editor_script' => 'pbg-blocks-js',
        )
    );
}

register_block_pbg_post_grid();
