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
			add_action( 'pbg_dynamic_css', array( $this, 'add_global_color_to_editor' ) );
		}

		public function add_global_color_to_editor( $dynamic_css ) {
			$default_value = array(
				'colors'         => array(
					array(
						'slug'  => 'color1',
						'color' => '#0085ba',
					),
					array(
						'slug'  => 'color2',
						'color' => '#333333',
					),
					array(
						'slug'  => 'color3',
						'color' => '#444140',
					),
					array(
						'slug'  => 'color4',
						'color' => '#eaeaea',
					),
					array(
						'slug'  => 'color5',
						'color' => '#ffffff',
					),
				),
				'current_palett' => 'pallet-1',
				'custom_colors'  => array(),
			);
			$global_colors = get_option( 'pbg_global_colors', $default_value );
			$css           = new Premium_Blocks_css();
			$css->set_selector( ':root' );
			$css->add_property( '--pbg-global-color1', $css->render_color( $global_colors['colors'][0]['color'] ) );
			$css->add_property( '--pbg-global-color2', $css->render_color( $global_colors['colors'][1]['color'] ) );
			$css->add_property( '--pbg-global-color3', $css->render_color( $global_colors['colors'][2]['color'] ) );
			$css->add_property( '--pbg-global-color4', $css->render_color( $global_colors['colors'][3]['color'] ) );
			$css->add_property( '--pbg-global-color5', $css->render_color( $global_colors['colors'][3]['color'] ) );
			$css->set_selector( '[class*="wp-block-premium"]' );
			$css->add_property( 'color', $css->render_color( 'var(--pbg-global-color3)' ) );
			$css->set_selector( '[class*="wp-block-premium"] h1, [class*="wp-block-premium"] h2, [class*="wp-block-premium"] h3,[class*="wp-block-premium"] h4,[class*="wp-block-premium"] h5,[class*="wp-block-premium"] h6, [class*="wp-block-premium"] a' );
			$css->add_property( 'color', $css->render_color( 'var(--pbg-global-color2)' ) );
			$css->set_selector( '[class*="wp-block-premium"] a:hover' );
			$css->add_property( 'color', $css->render_color( 'var(--pbg-global-color1)' ) );

			$dynamic_css .= $css->css_output();
			error_log( $dynamic_css );
			return $dynamic_css;
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
					'type'         => 'object',
					'description'  => __( 'Config Premium Blocks For Gutenberg Global Colors Settings', 'premium-block-for-gutenberg' ),
					'show_in_rest' => array(
						'schema' => array(
							'properties' => array(
								'colors'         => array(
									'type'  => 'array',
									'items' => array(
										'type'       => 'object',
										'properties' => array(
											'slug'  => array(
												'type' => 'string',
											),
											'color' => array(
												'type' => 'string',
											),
										),
									),
								),
								'current_palett' => array(
									'type' => 'string',
								),
								'custom_colors'  => array(
									'type'  => 'array',
									'items' => array(
										'type'       => 'object',
										'properties' => array(
											'slug'  => array(
												'type' => 'string',
											),
											'color' => array(
												'type' => 'string',
											),
											'name'  => array(
												'type' => 'string',
											),
										),
									),
								),
							),
						),
					),
					'default'      => array(
						'colors'         => array(
							array(
								'slug'  => 'color1',
								'color' => '#0085ba',
							),
							array(
								'slug'  => 'color2',
								'color' => '#333333',
							),
							array(
								'slug'  => 'color3',
								'color' => '#444140',
							),
							array(
								'slug'  => 'color4',
								'color' => '#eaeaea',
							),
							array(
								'slug'  => 'color5',
								'color' => '#ffffff',
							),
						),
						'current_palett' => 'pallet-1',
						'custom_colors'  => array(),
					),
				)
			);

			register_setting(
				'pbg_global_settings',
				'pbg_theme_custom_colors',
				array(
					'type'         => 'array',
					'description'  => __( 'Config Premium Blocks For Gutenberg Global Colors Settings', 'premium-block-for-gutenberg' ),
					'show_in_rest' => array(
						'schema' => array(
							'items' => array(
								'type'       => 'object',
								'properties' => array(
									'name'  => array(
										'type' => 'string',
									),
									'slug'  => array(
										'type' => 'string',
									),
									'color' => array(
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

			// Global Colors Setting register.
			register_setting(
				'pbg_global_settings',
				'pbg_global_color_pallets',
				array(
					'type'         => 'array',
					'description'  => __( 'Config Premium Blocks For Gutenberg Global Colors Settings', 'premium-block-for-gutenberg' ),
					'show_in_rest' => array(
						'schema' => array(
							'items' => array(
								'type'       => 'object',
								'properties' => array(
									'id'            => array(
										'type' => 'string',
									),
									'name'          => array(
										'type' => 'string',
									),
									'active'        => array(
										'type' => 'boolean',
									),
									'colors'        => array(
										'type'  => 'array',
										'items' => array(
											'type'       => 'object',
											'properties' => array(
												'slug'  => array(
													'type' => 'string',
												),
												'color' => array(
													'type' => 'string',
												),
											),
										),
									),
									'custom_colors' => array(
										'type'  => 'array',
										'items' => array(
											'type'       => 'object',
											'properties' => array(
												'slug'  => array(
													'type' => 'string',
												),
												'color' => array(
													'type' => 'string',
												),
												'name'  => array(
													'type' => 'string',
												),
											),
										),
									),
									'type'          => array(
										'type' => 'string',
									),
									'skin'          => array(
										'type' => 'string',
									),
								),
							),
						),
					),
					'default'      => array(),
				)
			);

			register_setting(
				'pbg_global_settings',
				'pbg_global_layout',
				array(
					'type'         => 'object',
					'description'  => __( 'Config Premium Blocks For Gutenberg Global Layout Settings', 'premium-block-for-gutenberg' ),
					'show_in_rest' => array(
						'schema' => array(
							'properties' => array(
								'container_width'   => array(
									'type' => 'number',
								),
								'tablet_breakpoint' => array(
									'type' => 'number',
								),
								'mobile_breakpoint' => array(
									'type' => 'number',
								),
							),
						),
					),
					'default'      => array(
						'container_width'   => 1200,
						'tablet_breakpoint' => 1024,
						'mobile_breakpoint' => 767,
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
			wp_localize_script(
				'pbg-global-settings-js',
				'pbgGlobalSettings',
				array(
					'pallets' => get_option( 'pbg_global_color_pallets', array() ),
				)
			);
		}
	}
}

/**
 *  Kicking this off by calling 'get_instance()' method
 */
Pbg_Global_Settings::get_instance();
