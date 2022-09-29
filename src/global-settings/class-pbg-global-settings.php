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
			// add_action( 'pbg_dynamic_css', array( $this, 'add_global_color_to_editor' ) );
			// add_action( 'pbg_dynamic_css', array( $this, 'add_global_typography_to_editor' ) );
			add_action( 'wp_footer', array( $this, 'pbg_fronend_global_styles' ) );
		}



		/**
		 * pbg_fronend_global_styles
		 *
		 * @return void
		 */
		function pbg_fronend_global_styles() {
			printf( "<style type='text/css' class='kemet-pbg-inline-style'>%s</style>", $this->add_global_color_to_editor() . $this->add_global_typography_to_editor() );
		}

		/**
		 * add_global_typography_to_editor
		 *
		 * @param  string $dynamic_css
		 * @return string
		 */
		public function add_global_typography_to_editor( $dynamic_css = '' ) {
			$global_typography      = get_option( 'pbg_global_typography', array() );
			$css                    = new Premium_Blocks_css();
			$media_query            = array();
			$media_query['Mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
			$media_query['Tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
			$media_query['Desktop'] = apply_filters( 'Premium_BLocks_desktop_media_query', '(min-width: 1025px)' );

			if ( isset( $global_typography['heading1'] ) ) {
				$h1_typography = $global_typography['heading1'];

				$css->set_selector( 'div[class*="wp-block-premium"] h1' );
				$css->add_property( 'font-family', $css->render_color( $h1_typography['fontFamily'] ) );
				$css->add_property( 'font-weight', $css->render_color( $h1_typography['fontWeight'] ) );
				$css->add_property( 'font-style', $css->render_color( $h1_typography['fontStyle'] ) );
				$css->add_property( 'text-transform', $css->render_color( $h1_typography['textTransform'] ) );
				$css->add_property( 'text-decoration', $css->render_color( $h1_typography['textDecoration'] ) );
				$css->render_typography( $h1_typography, 'Desktop' );
			}

			if ( isset( $global_typography['heading2'] ) ) {
				$h2_typography = $global_typography['heading2'];

				$css->set_selector( 'div[class*="wp-block-premium"] h2' );
				$css->add_property( 'font-family', $css->render_color( $h2_typography['fontFamily'] ) );
				$css->add_property( 'font-weight', $css->render_color( $h2_typography['fontWeight'] ) );
				$css->add_property( 'font-style', $css->render_color( $h2_typography['fontStyle'] ) );
				$css->add_property( 'text-transform', $css->render_color( $h2_typography['textTransform'] ) );
				$css->add_property( 'text-decoration', $css->render_color( $h2_typography['textDecoration'] ) );
				$css->render_typography( $h1_typography, 'Desktop' );
			}

			if ( isset( $global_typography['heading3'] ) ) {
				$h3_typography = $global_typography['heading3'];

				$css->set_selector( 'div[class*="wp-block-premium"] h3' );
				$css->add_property( 'font-family', $css->render_color( $h3_typography['fontFamily'] ) );
				$css->add_property( 'font-weight', $css->render_color( $h3_typography['fontWeight'] ) );
				$css->add_property( 'font-style', $css->render_color( $h3_typography['fontStyle'] ) );
				$css->add_property( 'text-transform', $css->render_color( $h3_typography['textTransform'] ) );
				$css->add_property( 'text-decoration', $css->render_color( $h3_typography['textDecoration'] ) );
				$css->render_typography( $h3_typography, 'Desktop' );
			}

			if ( isset( $global_typography['heading4'] ) ) {
				$h4_typography = $global_typography['heading4'];

				$css->set_selector( 'div[class*="wp-block-premium"] h4' );
				$css->add_property( 'font-family', $css->render_color( $h4_typography['fontFamily'] ) );
				$css->add_property( 'font-weight', $css->render_color( $h4_typography['fontWeight'] ) );
				$css->add_property( 'font-style', $css->render_color( $h4_typography['fontStyle'] ) );
				$css->add_property( 'text-transform', $css->render_color( $h4_typography['textTransform'] ) );
				$css->add_property( 'text-decoration', $css->render_color( $h4_typography['textDecoration'] ) );
				$css->render_typography( $h4_typography, 'Desktop' );
			}

			if ( isset( $global_typography['heading5'] ) ) {
				$h5_typography = $global_typography['heading5'];

				$css->set_selector( 'div[class*="wp-block-premium"] h5' );
				$css->add_property( 'font-family', $css->render_color( $h5_typography['fontFamily'] ) );
				$css->add_property( 'font-weight', $css->render_color( $h5_typography['fontWeight'] ) );
				$css->add_property( 'font-style', $css->render_color( $h5_typography['fontStyle'] ) );
				$css->add_property( 'text-transform', $css->render_color( $h5_typography['textTransform'] ) );
				$css->add_property( 'text-decoration', $css->render_color( $h5_typography['textDecoration'] ) );
				$css->render_typography( $h5_typography, 'Desktop' );
			}

			if ( isset( $global_typography['heading6'] ) ) {
				$h6_typography = $global_typography['heading6'];

				$css->set_selector( 'div[class*="wp-block-premium"] h6' );
				$css->add_property( 'font-family', $css->render_color( $h6_typography['fontFamily'] ) );
				$css->add_property( 'font-weight', $css->render_color( $h6_typography['fontWeight'] ) );
				$css->add_property( 'font-style', $css->render_color( $h6_typography['fontStyle'] ) );
				$css->add_property( 'text-transform', $css->render_color( $h6_typography['textTransform'] ) );
				$css->add_property( 'text-decoration', $css->render_color( $h6_typography['textDecoration'] ) );
				$css->render_typography( $h6_typography, 'Desktop' );
			}

			if ( isset( $global_typography['button'] ) ) {
				$button_typography = $global_typography['button'];

				$css->set_selector( '[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-pricing-table__button_link, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close' );
				$css->add_property( 'font-family', $css->render_color( $button_typography['fontFamily'] ) );
				$css->add_property( 'font-weight', $css->render_color( $button_typography['fontWeight'] ) );
				$css->add_property( 'font-style', $css->render_color( $button_typography['fontStyle'] ) );
				$css->add_property( 'text-transform', $css->render_color( $button_typography['textTransform'] ) );
				$css->add_property( 'text-decoration', $css->render_color( $button_typography['textDecoration'] ) );
				$css->render_typography( $button_typography, 'Desktop' );
			}

			if ( isset( $global_typography['paragraph'] ) ) {
				$p_typography = $global_typography['paragraph'];

				$css->set_selector( 'div[class*="wp-block-premium"] p' );
				$css->add_property( 'font-family', $css->render_color( $p_typography['fontFamily'] ) );
				$css->add_property( 'font-weight', $css->render_color( $p_typography['fontWeight'] ) );
				$css->add_property( 'font-style', $css->render_color( $p_typography['fontStyle'] ) );
				$css->add_property( 'text-transform', $css->render_color( $p_typography['textTransform'] ) );
				$css->add_property( 'text-decoration', $css->render_color( $p_typography['textDecoration'] ) );
				$css->render_typography( $p_typography, 'Desktop' );
			}

			$css->start_media_query( $media_query['Tablet'] );

			if ( isset( $global_typography['heading1'] ) ) {
				$h1_typography = $global_typography['heading1'];

				$css->set_selector( 'div[class*="wp-block-premium"] h1' );
				$css->render_typography( $h1_typography, 'Tablet' );
			}

			if ( isset( $global_typography['heading2'] ) ) {
				$h2_typography = $global_typography['heading2'];

				$css->set_selector( 'div[class*="wp-block-premium"] h2' );
				$css->render_typography( $h1_typography, 'Tablet' );
			}

			if ( isset( $global_typography['heading3'] ) ) {
				$h3_typography = $global_typography['heading3'];

				$css->set_selector( 'div[class*="wp-block-premium"] h3' );
				$css->render_typography( $h3_typography, 'Tablet' );
			}

			if ( isset( $global_typography['heading4'] ) ) {
				$h4_typography = $global_typography['heading4'];

				$css->set_selector( 'div[class*="wp-block-premium"] h4' );
				$css->render_typography( $h4_typography, 'Tablet' );
			}

			if ( isset( $global_typography['heading5'] ) ) {
				$h5_typography = $global_typography['heading5'];

				$css->set_selector( 'div[class*="wp-block-premium"] h5' );
				$css->render_typography( $h5_typography, 'Tablet' );
			}

			if ( isset( $global_typography['heading6'] ) ) {
				$h6_typography = $global_typography['heading6'];

				$css->set_selector( 'div[class*="wp-block-premium"] h6' );
				$css->render_typography( $h6_typography, 'Tablet' );
			}

			if ( isset( $global_typography['button'] ) ) {
				$button_typography = $global_typography['button'];

				$css->set_selector( '[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-pricing-table__button_link, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close' );
				$css->render_typography( $button_typography, 'Tablet' );
			}

			if ( isset( $global_typography['paragraph'] ) ) {
				$p_typography = $global_typography['paragraph'];

				$css->set_selector( 'div[class*="wp-block-premium"] p' );
				$css->render_typography( $p_typography, 'Tablet' );
			}

			$css->stop_media_query();
			$css->start_media_query( $media_query['Mobile'] );

			if ( isset( $global_typography['heading1'] ) ) {
				$h1_typography = $global_typography['heading1'];

				$css->set_selector( 'div[class*="wp-block-premium"] h1' );
				$css->render_typography( $h1_typography, 'Mobile' );
			}

			if ( isset( $global_typography['heading2'] ) ) {
				$h2_typography = $global_typography['heading2'];

				$css->set_selector( 'div[class*="wp-block-premium"] h2' );
				$css->render_typography( $h1_typography, 'Mobile' );
			}

			if ( isset( $global_typography['heading3'] ) ) {
				$h3_typography = $global_typography['heading3'];

				$css->set_selector( 'div[class*="wp-block-premium"] h3' );
				$css->render_typography( $h3_typography, 'Mobile' );
			}

			if ( isset( $global_typography['heading4'] ) ) {
				$h4_typography = $global_typography['heading4'];

				$css->set_selector( 'div[class*="wp-block-premium"] h4' );
				$css->render_typography( $h4_typography, 'Mobile' );
			}

			if ( isset( $global_typography['heading5'] ) ) {
				$h5_typography = $global_typography['heading5'];

				$css->set_selector( 'div[class*="wp-block-premium"] h5' );
				$css->render_typography( $h5_typography, 'Mobile' );
			}

			if ( isset( $global_typography['heading6'] ) ) {
				$h6_typography = $global_typography['heading6'];

				$css->set_selector( 'div[class*="wp-block-premium"] h6' );
				$css->render_typography( $h6_typography, 'Mobile' );
			}

			if ( isset( $global_typography['button'] ) ) {
				$button_typography = $global_typography['button'];

				$css->set_selector( '[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-pricing-table__button_link, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close' );
				$css->render_typography( $button_typography, 'Mobile' );
			}

			if ( isset( $global_typography['paragraph'] ) ) {
				$p_typography = $global_typography['paragraph'];

				$css->set_selector( 'div[class*="wp-block-premium"] p' );
				$css->render_typography( $p_typography, 'Mobile' );
			}

			$css->stop_media_query();

			$dynamic_css .= $css->css_output();

			return $dynamic_css;
		}

		/**
		 * add_global_color_to_editor
		 *
		 * @param  string $dynamic_css
		 * @return string
		 */
		public function add_global_color_to_editor( $dynamic_css = '' ) {
			$global_color_pallet = get_option('pbg_global_color_pallet','theme' );
			if($global_color_pallet === 'theme'){
				return $dynamic_css;
			}
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
			$css->set_selector( '[class*="wp-block-premium"] h1, [class*="wp-block-premium"] h2, [class*="wp-block-premium"] h3,[class*="wp-block-premium"] h4,[class*="wp-block-premium"] h5,[class*="wp-block-premium"] h6, [class*="wp-block-premium"] a:not([class*="button"])' );
			$css->add_property( 'color', $css->render_color( 'var(--pbg-global-color2)' ) );
			$css->set_selector( '[class*="wp-block-premium"] a:not([class*="button"]):hover' );
			$css->add_property( 'color', $css->render_color( 'var(--pbg-global-color1)' ) );
			$css->set_selector( '[class*="wp-block-premium"] .premium-button, [class*="wp-block-premium"] .premium-pricing-table__button_link, [class*="wp-block-premium"] .premium-modal-box-modal-lower-close' );
			$css->add_property( 'color', $css->render_color( '#ffffff' ) );
			$css->add_property( 'background-color', $css->render_color( 'var(--pbg-global-color1)' ) );
			$css->add_property( 'border-color', $css->render_color( 'var(--pbg-global-color4)' ) );

			$dynamic_css .= $css->css_output();

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
						'type' => 'string',
					),
					'Tablet'  => array(
						'type' => 'string',
					),
					'Mobile'  => array(
						'type' => 'string',
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
					),
				)
			);

			register_setting(
				'pbg_global_settings',
				'pbg_custom_colors',
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
