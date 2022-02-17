<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define class 'PBG_Plugin' if not Exists
if ( ! class_exists( 'PBG_Plugin' ) ) {

	/**
	 * Define PBG_Plugin class
	 */
	class PBG_Plugin {


		private static $instance = null;

		/**
		 * Constructor for the class
		 */
		public function __construct() {

			// Enqueue the required files
			$this->pbg_setup();

			add_action( 'plugins_loaded', array( $this, 'load_plugin' ) );
			add_action( 'rest_api_init', array( $this, 'register_api_endpoints' ) );
            add_filter('upload_mimes', array( $this, 'pbg_mime_types'));
add_filter( 'wp_check_filetype_and_ext', array( $this, 'fix_mime_type_json' ), 75, 4 );
			if ( ! $this->is_gutenberg_active() ) {

				return;
			}
		}

		/*
		 * Triggers initial functions
		 * @since 1.0.0
		 * @access public
		 * @return void
		 */
		public function pbg_setup() {

			$this->load_domain();

			$this->init_files();
		}

		/*
		 * Load Premium Block for Gutenberg text domain
		 * @since 1.0.0
		 * @access public
		 * @return void
		 */
		public function load_domain() {
			load_plugin_textdomain( 'premium-blocks-for-gutenberg', false, dirname( PREMIUM_BLOCKS_BASENAME ) . '/languages/' );
		}
         public function pbg_mime_types($mimes) {
            $mimes['json'] = 'application/json'; 
            $mimes['svg'] = 'image/svg+xml'; 
            return $mimes; 
             } 

        public function fix_mime_type_json( $data = null, $file = null, $filename = null, $mimes = null ) {
		$ext = isset( $data['ext'] ) ? $data['ext'] : '';
		if ( 1 > strlen( $ext ) ) {
			$exploded = explode( '.', $filename );
			$ext      = strtolower( end( $exploded ) );
		}
		if ( 'json' === $ext ) {
			$data['type'] = 'application/json';
			$data['ext']  = 'json';
		}
		return $data;
	    }


		/*
		 * Load necessary files
		 * @since 1.0.0
		 * @access public
		 * @return void
		 */
		public function load_plugin() {
			require_once PREMIUM_BLOCKS_PATH . 'includes/newsletter.php';
			 require_once PREMIUM_BLOCKS_PATH . 'includes/premium-form.php';
			require_once PREMIUM_BLOCKS_PATH . 'includes/newsletter-mailchimp-rest-api.php';
			require_once PREMIUM_BLOCKS_PATH . 'includes/premium-blocks-css.php';

		}
		/**
		 * Setup the post select API endpoint.
		 *
		 * @return void
		 */
		function register_api_endpoints() {

			$mailchimp_controller = new Premium_MailChimp_REST_Controller();
			$mailchimp_controller->register_routes();

		}
		public function is_gutenberg_active() {
			return function_exists( 'register_block_type' );
		}

		public function init_files() {

			require_once PREMIUM_BLOCKS_PATH . 'admin/settings/elements.php';
			require_once PREMIUM_BLOCKS_PATH . 'admin/settings/assets.php';
			if ( is_admin() ) {
				require_once PREMIUM_BLOCKS_PATH . 'admin/reports/deps/data.php';
				require_once PREMIUM_BLOCKS_PATH . 'admin/includes/rollback.php';
				require_once PREMIUM_BLOCKS_PATH . 'admin/includes/version-control.php';
				require_once PREMIUM_BLOCKS_PATH . 'admin/reports/system-info.php';
				require_once PREMIUM_BLOCKS_PATH . 'admin/reports/about.php';
				require_once PREMIUM_BLOCKS_PATH . 'admin/includes/notices.php';
			}

			require_once PREMIUM_BLOCKS_PATH . 'classes/class-pbg-blocks-helper.php';
			// require_once PREMIUM_BLOCKS_PATH . 'includes/premium-blocks-frontend.php';
		}

		/**
		 * Creates and returns an instance of the class
		 *
		 * @since 1.0.0
		 * @access public
		 * return object
		 */
		public static function get_instance() {

			if ( self::$instance == null ) {
				self::$instance = new self();
			}

			return self::$instance;
		}
	}
}

if ( ! function_exists( 'pbg_plugin' ) ) {

	/**
	 * Returns an instance of the plugin class.
	 *
	 * @since  1.0.0
	 * @return object
	 */
	function pbg_plugin() {
		return PBG_Plugin::get_instance();
	}
}

pbg_plugin();
