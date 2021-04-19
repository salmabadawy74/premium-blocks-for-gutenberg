<?php
/**
 * Premium_Blocks_Gutenberg
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define class 'Premium_Blocks_Gutenberg' if not Exists.
if ( ! class_exists( 'Premium_Blocks_Gutenberg' ) ) {

	/**
	 * Define Premium_Blocks_Gutenberg class
	 */
	class Premium_Blocks_Gutenberg {

		/**
		 * Class instance
		 *
		 * @var instance
		 */
		private static $instance = null;

		/**
		 * Constructor for the class
		 */
		public function __construct() {

			// Enqueue the required files.
			$this->premium_gutenberg_setup();

		}

		/**
		 * Premium Gutenberg Setup
		 *
		 * Triggers initial functions
		 *
		 * @since 1.0.0
		 * @access public
		 *
		 * @return void
		 */
		public function premium_gutenberg_setup() {

			$this->load_domain();
			$this->load_plugin();
			$this->init_files();

		}

		public static function load_domain() {
			load_plugin_textdomain( 'premium-blocks-for-gutenberg', false, dirname( PREMIUM_BLOCKS_BASENAME ) . '/languages/' );
		}


		 /*
		 * Load necessary files
		 * @since 1.0.0
		 * @access public
		 * @return void
		 */
		public function load_plugin() {

			require_once PREMIUM_BLOCKS_PATH . 'includes/lottie.php';
		}

		/**
		 * Load Domain
		 *
		 * Load Premium Block for Gutenberg text domain
		 *
		 * @since 1.0.0
		 * @access public
		 *
		 * @return void
		 */


		/**
		 * Init Files
		 *
		 * Load necessary files
		 *
		 * @since 1.0.0
		 * @access public
		 *
		 * @return void
		 */
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
		}

		/**
		 * Creates and returns an instance of the class
		 *
		 * @since 1.0.0
		 * @access public
		 *
		 * @return object
		 */
		public static function get_instance() {

			if ( ! isset( self::$instance ) ) {

				self::$instance = new self();
			}

			return self::$instance;
		}

	}

}
