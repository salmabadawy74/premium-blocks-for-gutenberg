<?php
/**
 * Registers the `pbg/trigger` block on the server.
 */
function register_block_pbg_trigger() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/trigger',
		array(
			'render_callback' => 'render_block_pbg_trigger',
		)
	);
}
add_action( 'init', 'register_block_pbg_trigger' );

function trigger_enqueue() {
	wp_register_script(
		'gpb-trigger-block-script',
			PREMIUM_BLOCKS_URL . 'assets/js/trigger.js',
			array( 'jquery' ),
			PREMIUM_BLOCKS_VERSION,
			true
	);
}
add_action( 'enqueue_block_assets', 'trigger_enqueue' );