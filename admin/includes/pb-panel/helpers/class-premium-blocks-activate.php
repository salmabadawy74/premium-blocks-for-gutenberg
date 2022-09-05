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
final class Premium_Blocks_Activate {

	/**
	 * Construct
	 */
	public function __construct() {

		$this->load_premium_blocks();
		add_action( 'init', array( $this, 'register_pbg_setting' ) );
	}

	/**
	 * Register Global Settings.
	 *
	 * @return void
	 */
	public function register_pbg_setting() {
		register_setting(
			'pbg_maps_settings',
			'pbg_maps_settings',
			array(
				'type'         => 'object',
				'description'  => __( 'Config Premium Blocks For Gutenberg Api', 'premium=block-for-gutenberg' ),
				'show_in_rest' => array(
					'schema' => array(
						'type'       => 'object',
						'properties' => array(
							'premium-map-key'     => array(
								'type' => 'string',
							),
							'premium-map-api'     => array(
								'type' => 'boolean',
							),
							'premium-fa-css'      => array(
								'type' => 'boolean',
							),
							'premium-upload-json' => array(
								'type' => 'boolean',
							),
						),
					),
				),
				'default'      => array(
					'premium-map-key'     => '',
					'premium-map-api'     => false,
					'premium-fa-css'      => false,
					'premium-upload-json' => false,
				),
			)
		);
	}

	/**
	 * Load Premium Blocks
	 *
	 * @return void
	 */
	public function load_premium_blocks() {

		$enabled_block = apply_filters( 'pb_options', get_option( 'pb_options', array() ) );

		if ( is_array( $enabled_block ) && 0 < count( $enabled_block ) ) {

			foreach ( $enabled_block as $slug => $value ) {

				if ( false === $value ) {
					continue;
				}

				$block_path = PREMIUM_BLOCKS_PATH . 'src/blocks/' . esc_attr( $slug ) . '/index.php';

				if ( file_exists( $block_path ) ) {
					require_once $block_path;
				}
			}
		}
	}
}

new Premium_Blocks_Activate();
