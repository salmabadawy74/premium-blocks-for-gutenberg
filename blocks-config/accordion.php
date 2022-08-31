<?php
/**
 * Register the accordion item block.
 *
 * @uses register_block_accordion_item()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_accordion_item() {
  if ( ! function_exists( 'register_block_type' ) ) {
			return;
        }
	    register_block_type(
			'premium/accordion-item'
		);;
}
add_action( 'init', 'register_block_accordion_item' );
