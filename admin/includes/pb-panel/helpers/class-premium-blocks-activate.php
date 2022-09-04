<?php

/**
 * Premium Blocks enable
 *
 * @package Premium Blocks
 */

/**
 * Enable Addons
 *
 * @since 1.0
 */
final class Premium_Blocks_Activate
{

	/**
	 * Construct
	 */
	public function __construct()
	{

		$this->load_premium_blocks();
		add_action('init', array($this, 'register_pbg_setting'));
	}



	/**
	 * Load Premium Blocks
	 *
	 * @return void
	 */
	public function load_premium_blocks()
	{

		$enabled_block = apply_filters('pb_options', get_option('pb_options', array()));

		if (is_array($enabled_block) && 0 < count($enabled_block)) {

			foreach ($enabled_block as $slug => $value) {

				if (false === $value) {
					continue;
				}

				$block_path = PREMIUM_BLOCKS_PATH . 'src/blocks/' . esc_attr($slug) . '/index.php';

				if (file_exists($block_path)) {
					require_once $block_path;
				}
			}
		}
	}
}

new Premium_Blocks_Activate();
