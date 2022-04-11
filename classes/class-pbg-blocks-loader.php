<?php
/**
 * Define PBG_Blocks_Loader class
 *
 * @package gutenberg_premium_blocks
 */

if ( ! class_exists( 'PBG_Blocks_Loader' ) ) {

	/**
	 * Define PBG_Blocks_Loader class
	 */
	class PBG_Blocks_Loader {

		/**
		 * Member Variable
		 *
		 * @var object instance
		 */
		private static $instance;

		/**
		 * Instance
		 *
		 * @return void
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
		}

		/**
		 *  Constructor
		 */
		public function __construct() {
            require_once PREMIUM_BLOCKS_PATH . 'src/blocks/breadcrumbs/index.php';
			require_once PREMIUM_BLOCKS_PATH . 'src/blocks/trigger/index.php';
		}
	}
}

PBG_Blocks_Loader::get_instance();
