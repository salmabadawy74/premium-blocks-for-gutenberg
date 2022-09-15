<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit();
}

/**
 * Global Settings
 */
if ( ! class_exists( 'Pbg_Global_Settings' ) ) {

	/**
	 * Global Settings
	 */
	class Pbg_Global_Settings {

		/**
		 * Instance
		 *
		 * @access private
		 * @var object
		 */
		private static $instance;

		/**
		 * Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'enqueue_block_editor_assets', array( $this, 'script_enqueue' ) );
			add_action( 'init', array( $this, 'register_pbg_global_settings' ) );
		}

		/**
		 * Register Global Settings.
		 *
		 * @return void
		 */
		public function register_pbg_global_settings() {
			// Global Typography Schema.
			$responsive_schema = array(
				'type'       => 'object',
				'properties' => array(
					'Desktop' => array(
						'type' => 'number',
					),
					'Tablet'  => array(
						'type' => 'number',
					),
					'Mobile'  => array(
						'type' => 'number',
					),
					'unit'    => array(
						'type' => 'string',
					),
				),
			);

			$typography_schema = array(
				'type'       => 'object',
				'properties' => array(
					'fontWeight'     => array(
						'type' => 'string',
					),
					'fontStyle'      => array(
						'type' => 'string',
					),
					'textTransform'  => array(
						'type' => 'string',
					),
					'fontFamily'     => array(
						'type' => 'string',
					),
					'textDecoration' => array(
						'type' => 'string',
					),
					'fontSize'       => $responsive_schema,
					'lineHeight'     => $responsive_schema,
					'letterSpacing'  => $responsive_schema,
				),
			);
			// Global Typography Setting register.
			register_setting(
				'pbg_global_settings',
				'pbg_global_typography',
				array(
					'type'         => 'object',
					'description'  => __( 'Config Premium Blocks For Gutenberg Global Typography Settings', 'premium-block-for-gutenberg' ),
					'show_in_rest' => array(
						'schema' => array(
							'properties' => array(
								'heading1'  => $typography_schema,
								'heading2'  => $typography_schema,
								'heading3'  => $typography_schema,
								'heading4'  => $typography_schema,
								'heading5'  => $typography_schema,
								'heading6'  => $typography_schema,
								'button'    => $typography_schema,
								'paragraph' => $typography_schema,
							),
						),
					),
					'default'      => array(),
				)
			);
			// Global Colors Setting register.
			register_setting(
				'pbg_global_settings',
				'pbg_global_colors',
				array(
					'type'         => 'array',
					'description'  => __( 'Config Premium Blocks For Gutenberg Global Colors Settings', 'premium-block-for-gutenberg' ),
					'show_in_rest' => array(
						'schema' => array(
							'items' => array(
								'type'       => 'object',
								'properties' => array(
									'name'    => array(
										'type' => 'string',
									),
									'slug'    => array(
										'type' => 'string',
									),
									'color'   => array(
										'type' => 'string',
									),
									'default' => array(
										'type' => 'boolean',
									),
									'type'    => array(
										'type' => 'string',
									),
								),
							),
						),
					),
					'default'      => array(),
				)
			);
			// Default Color Pallet.
			register_setting(
				'pbg_global_settings',
				'pbg_global_color_pallet',
				array(
					'type'              => 'string',
					'description'       => __( 'Config Premium Blocks For Gutenberg Global Color Pallet Settings', 'premium-block-for-gutenberg' ),
					'sanitize_callback' => 'sanitize_text_field',
					'show_in_rest'      => true,
					'default'           => 'theme',
				)
			);
		}

		/**
		 * Enqueue Script for Meta options
		 */
		public function script_enqueue() {
			wp_enqueue_script(
				'pbg-global-settings-js',
				PREMIUM_BLOCKS_URL . 'src/global-settings/build/index.js',
				array(
					'wp-edit-post',
					'wp-i18n',
					'wp-components',
					'wp-element',
					'wp-media-utils',
					'wp-block-editor',
				),
				PREMIUM_BLOCKS_VERSION,
				true
			);
			wp_enqueue_style(
				'pbg-global-settings-css',
				PREMIUM_BLOCKS_URL . 'src/global-settings/build/style-index.css',
				array(),
				PREMIUM_BLOCKS_VERSION,
				'all'
			);
		}
	}
}

/**
 *  Kicking this off by calling 'get_instance()' method
 */
Pbg_Global_Settings::get_instance();
