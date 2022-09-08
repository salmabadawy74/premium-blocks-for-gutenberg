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
			$responsive = array(
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

			$typography_default_values = array(
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
				'fontSize'       => $responsive,
				'lineHeight'     => $responsive,
				'letterSpacing'  => $responsive,
			);

			register_setting(
				'pbg_global_settings',
				'pbg_global_settings',
				array(
					'type'         => 'object',
					'description'  => __( 'Config Premium Blocks For Gutenberg Global Settings', 'premium-block-for-gutenberg' ),
					'show_in_rest' => array(
						'schema' => array(
							'type'       => 'object',
							'properties' => array(
								'typography'         => array(
									'type'       => 'object',
									'properties' => array(
										'heading1'  => array(
											'type'       => 'object',
											'properties' => $typography_default_values,
										),
										'heading2'  => array(
											'type'       => 'object',
											'properties' => $typography_default_values,
										),
										'heading3'  => array(
											'type'       => 'object',
											'properties' => $typography_default_values,
										),
										'heading4'  => array(
											'type'       => 'object',
											'properties' => $typography_default_values,
										),
										'heading5'  => array(
											'type'       => 'object',
											'properties' => $typography_default_values,
										),
										'heading6'  => array(
											'type'       => 'object',
											'properties' => $typography_default_values,
										),
										'button'    => array(
											'type'       => 'object',
											'properties' => $typography_default_values,
										),
										'paragraph' => array(
											'type'       => 'object',
											'properties' => $typography_default_values,
										),
									),
								),
								'colors'             => array(
									'type'       => 'object',
									'properties' => array(
										'headings' => array(
											'type' => 'string',
										),
									),
								),
								'container-settings' => array(
									'type'       => 'object',
									'properties' => array(
										'tablet_breakpoint' => array(
											'type' => 'string',
										),
									),
								),
							),
						),
					),
					'default'      => array(
						'typography'         => array(),
						'colors'             => array(),
						'container-settings' => array(),
					),
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
