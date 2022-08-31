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
    if ( ! function_exists( 'register_block_type' ) ) {
			return;
        }
	    register_block_type(
			'premium/switcher-child'
		);
}

add_action( 'init', 'register_block_pbg_switcher_child' );