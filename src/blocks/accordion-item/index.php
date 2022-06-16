<?php
/**
 * Register the accordion item block.
 *
 * @uses register_block_accordion_item()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_accordion_item() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/accordion-item'
	);
}
add_action( 'init', 'register_block_accordion_item' );
