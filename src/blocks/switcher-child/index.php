<?php
/**
 * Server-side rendering of the `pbg/content-switcher` block.
 *
 * @package WordPress
 */

/**
 * Registers the `pbg/content-switcher` block on the server.
 */
function register_block_pbg_switcher_child() {

    register_block_type_from_metadata(
        PREMIUM_BLOCKS_PATH . 'src/blocks/switcher-child'
    );
}

add_action( 'init', 'register_block_pbg_switcher_child' );