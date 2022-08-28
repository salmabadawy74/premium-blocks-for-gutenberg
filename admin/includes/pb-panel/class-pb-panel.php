<?php
/**
 * Panel
 *
 * @package Pb Addons
 */

define( 'PREMIUM_BLOCKS_PANEL_DIR', PREMIUM_BLOCKS_PATH . 'admin/includes/pb-panel/' );
define( 'PREMIUM_BLOCKS_PANEL_URL', PREMIUM_BLOCKS_URL . 'admin/includes/pb-panel/' );

if ( ! class_exists( 'Pb_Panel' ) ) {

	/**
	 * Pb Panel
	 *
	 * @since 1.0.0
	 */
	class Pb_Panel {

		/**
		 * Default values
		 *
		 * @var array defaults
		 */
		private $defaults = array();

		/**
		 * Member Variable
		 *
		 * @var object instance
		 */
		private static $instance;

		/**
		 * Instance
		 *
		 * @return object
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 *  Constructor
		 */
		public function __construct() {

			add_action( 'wp_ajax_pb-panel-update-option', array( $this, 'update_option' ) );
			add_action( 'admin_menu', array( $this, 'register_custom_menu_page' ), 100 );
			add_action( 'admin_bar_menu', array( $this, 'admin_bar_item' ), 1000 );
			add_filter( 'pb_options', array( $this, 'add_default_options' ) );
		}

		public function add_default_options( $options ) {
			$default_options = array(
				'trigger'     => true,
				'breadcrumbs' => true,
				'search'      => true,
				'banner'      => true,
				'button'      => true,
			);

			return array_merge( $default_options, $options );
		}



		/**
		 * update_option
		 *
		 * @return void
		 */
		public function update_option() {
			check_ajax_referer( 'pb-panel', 'nonce' );

			$option = isset( $_POST['option'] ) ? sanitize_text_field( wp_unslash( $_POST['option'] ) ) : ''; // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
			$value  = isset( $_POST['value'] ) ? sanitize_text_field( wp_unslash( $_POST['value'] ) ) : '';
			$value  = 'true' === $value ? true : false;
			// $options = apply_filters( 'pb_options', get_option( 'pb_options', array() ) );
			$options = get_option( 'pb_options' );
			$options = ! is_array( $options ) ? array() : $options;

			if ( '' !== $value && '' !== $option ) {
				$options[ $option ] = $value;
				update_option( 'pb_options', $options );
				wp_send_json_success(
					array(
						'success' => true,
						'values'  => $options,
					)
				);
			}

			wp_send_json_error();
		}


		/**
		 * Add Premium Blocks panel to admin bar
		 *
		 * @param WP_Admin_Bar $admin_bar admin bar.
		 * @return void
		 */
		public function admin_bar_item( WP_Admin_Bar $admin_bar ) {
			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}
			$admin_bar->add_menu(
				array(
					'id'     => 'menu-id',
					'parent' => null,
					'group'  => null,
					'title'  => __( 'Premium Blocks', 'premium-blocks-for-gutenberg' ), // you can use img tag with image link. it will show the image icon Instead of the title.
					'href'   => admin_url( 'admin.php?page=pb_panel' ),
					'meta'   => array(
						'title' => __( 'Premium Blocks', 'premium-blocks-for-gutenberg' ), // This title will show on hover.
					),
				)
			);
		}

		/**
		 * Add Premium Blocks panel menu
		 *
		 * @return void
		 */
		public function register_custom_menu_page() {
			$page = add_menu_page(
				__( 'PB Settings', 'premium-blocks-for-gutenberg' ),
				__( 'PB Settings', 'premium-blocks-for-gutenberg' ),
				'manage_options',
				'pb_panel',
				array( $this, 'render' ),
				null
			);
			if ( ! defined( 'PREMIUM_ADMIN_PAGE' ) ) {
				define( 'PREMIUM_ADMIN_PAGE', $page );
			}
			add_action( 'admin_print_styles-' . $page, array( $this, 'enqueue_admin_script' ) );
		}

		/**
		 * Render panel html
		 *
		 * @return void
		 */
		public function render() { ?>
			<div id="pb-dashboard"></div>
			<?php
		}

		/**
		 * Get system info
		 *
		 * @return array
		 */
		public static function get_system_info() {
			global $wpdb;

			$info = array(
				'home_url'          => home_url(),
				'version'           => get_bloginfo( 'version' ),
				'multisite'         => is_multisite(),
				'memory_limit'      => wp_convert_hr_to_bytes( WP_MEMORY_LIMIT ),
				'memory_limit_size' => size_format( wp_convert_hr_to_bytes( WP_MEMORY_LIMIT ) ),
				'theme_version'     => esc_html( PREMIUM_BLOCKS_VERSION ),
				'wp_path'           => esc_html( ABSPATH ),
				'debug'             => defined( 'WP_DEBUG' ) && WP_DEBUG,
				'lang'              => esc_html( get_locale() ),
				'server'            => isset( $_SERVER['SERVER_SOFTWARE'] ) ? esc_html( sanitize_text_field( wp_unslash( $_SERVER['SERVER_SOFTWARE'] ) ) ) : '',
				'php_version'       => function_exists( 'phpversion' ) ? phpversion() : '',
				'mysql_version'     => $wpdb->db_version(),
				'max_upload'        => esc_html( size_format( wp_max_upload_size() ) ),
				'ini_get'           => function_exists( 'ini_get' ),
			);
			if ( function_exists( 'ini_get' ) ) {
				$info['php_memory_limit']   = esc_html( size_format( wp_convert_hr_to_bytes( ini_get( 'memory_limit' ) ) ) );
				$info['post_max_size']      = esc_html( size_format( wp_convert_hr_to_bytes( ini_get( 'post_max_size' ) ) ) );
				$info['max_execution_time'] = ini_get( 'max_execution_time' );
				$info['max_input_vars']     = esc_html( ini_get( 'max_input_vars' ) );
				$info['suhosin']            = extension_loaded( 'suhosin' );
			}

			$active_plugins = (array) get_option( 'active_plugins', array() );
			$plugins        = array();
			if ( is_multisite() ) {
				$network_activated_plugins = array_keys( get_site_option( 'active_sitewide_plugins', array() ) );
				$active_plugins            = array_merge( $active_plugins, $network_activated_plugins );
			}

			foreach ( $active_plugins as $plugin ) {
				$plugin_data    = get_plugin_data( WP_PLUGIN_DIR . '/' . $plugin );
				$dirname        = dirname( $plugin );
				$version_string = '';
				$network_string = '';

				if ( ! empty( $plugin_data['Name'] ) ) {
					$plugins[ $plugin ] = array(
						'name'    => $plugin_data['Name'],
						'author'  => $plugin_data['Author'],
						'version' => $plugin_data['Version'],

					);

					if ( ! empty( $plugin_data['PluginURI'] ) ) {
						$plugins[ $plugin ]['PluginURI'] = $plugin_data['PluginURI'];
					}
				}
			}

			$info['active_plugins'] = $plugins;

			return $info;
		}
		/**
		 * panel_options
		 *
		 * @return array
		 */
		public static function panel_options() {
			$options = array(
				'trigger'     => array(
					'type'     => 'pb-button',
					'label'    => __( 'Trigger', 'premium-blocks-for-gutenberg' ),
					'category' => 'all',
				),
				'breadcrumbs' => array(
					'type'     => 'pb-button',
					'label'    => __( 'Breadcrumbs', 'premium-blocks-for-gutenberg' ),
					'category' => 'new',
				),
				'search'      => array(
					'type'     => 'pb-button',
					'label'    => __( 'Search', 'premium-blocks-for-gutenberg' ),
					'category' => 'creative',
				),
				'banner'      => array(
					'type'     => 'pb-button',
					'label'    => __( 'Banner', 'premium-blocks-for-gutenberg' ),
					'category' => 'all',
				),
				'button'      => array(
					'type'     => 'pb-button',
					'label'    => __( 'Button', 'premium-blocks-for-gutenberg' ),
					'category' => 'new',
				),
			);
				return apply_filters( 'pb_panel_options', $options );
		}

		/**
		 * Enqueue a script in the WordPress admin on edit.php
		 *
		 * @return void
		 */
		public function enqueue_admin_script() {

			wp_enqueue_style( 'pb-panel-css', PREMIUM_BLOCKS_PANEL_URL . 'assets/js/build/index.css', false, PREMIUM_BLOCKS_VERSION );
			wp_enqueue_script(
				'pb-panel-js',
				PREMIUM_BLOCKS_PANEL_URL . 'assets/js/build/index.js',
				array(
					'wp-i18n',
					'wp-components',
					'wp-element',
					'wp-media-utils',
					'wp-block-editor',
				),
				PREMIUM_BLOCKS_VERSION,
				true
			);

			wp_localize_script(
				'pb-panel-js',
				'PremiumBlocksPanelData',
				array(
					'options'     => self::panel_options(),
					'values'      => apply_filters( 'pb_options', get_option( 'pb_options', array() ) ),
					// 'values'      => array(
					// 'options' => get_option( 'pb_options', array() ),
					// ),
					'ajaxurl'     => admin_url( 'admin-ajax.php' ),
					'nonce'       => wp_create_nonce( 'pb-panel' ),
					'system_info' => self::get_system_info(),
					'images_url'  => PREMIUM_BLOCKS_PANEL_URL . 'assets/images/',
				)
			);
		}
	}
	Pb_Panel::get_instance();
}
