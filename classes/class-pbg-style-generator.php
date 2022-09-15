<?php
/**
 * Generator Class
 *
 * @package     Pbg
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Pbg_Style_Generator' ) ) {

	/**
	 * Pbg_Merged_Style
	 */
	class Pbg_Style_Generator {

		/**
		 * Css files
		 *
		 * @var array
		 */
		private static $css_files = array();

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
			add_action( 'enqueue_block_editor_assets', array( $this, 'merge_all_scripts' ) );
		}

		/**
		 * Merge all js files
		 *
		 * @return void
		 */
		public function merge_all_scripts() {
			$merged_css_url = self::get_css_url();

			if ( false != $merged_css_url ) {
				wp_enqueue_style( 'pbg-editor-css', $merged_css_url, array(), PREMIUM_BLOCKS_VERSION, 'all' );
			}

			wp_add_inline_style( 'pbg-editor-css', apply_filters( 'pbg_dynamic_css', '' ) );
		}

		/**
		 * Css url
		 *
		 * @return mixed
		 */
		public static function get_css_url() {

			$css_files    = self::get_css_files();
			$files_count  = count( $css_files );
			$merged_style = '';
			/* new */
			if ( $files_count > 0 ) {
				$merged_file = '';
				foreach ( $css_files as $k => $file ) {
					if ( ini_get( 'allow_url_fopen' ) ) {
						$merged_style .= file_get_contents( $file );
					} else {
						$merged_style .= self::file_get_contents( $file );
					}
					require_once ABSPATH . 'wp-admin/includes/file.php'; // We will probably need to load this file.
					global $wp_filesystem;
					$upload_dir = wp_upload_dir(); // Grab uploads folder array.
					$dir        = trailingslashit( $upload_dir['basedir'] ) . 'premium-blocks-for-gutenberg/'; // Set storage directory path.

					WP_Filesystem(); // Initial WP file system.
					$wp_filesystem->mkdir( $dir ); // Make a new folder for storing our file.
					$wp_filesystem->put_contents( $dir . 'style.css', $merged_style, 0777 | 0644 ); // Finally, store the file :D.
					$wp_upload_dir = $upload_dir['baseurl'] . '/' . 'premium-blocks-for-gutenberg/';
					$merged_file   = $wp_upload_dir . 'style.css';
				}
				return $merged_file;
			} else {
				return false;
			}

		}

		/**
		 * Get File Content.
		 *
		 * @param string $path file path.
		 *
		 * @return string
		 */
		public static function file_get_contents( $url ) {
			$ch = curl_init();

			curl_setopt( $ch, CURLOPT_AUTOREFERER, true );
			curl_setopt( $ch, CURLOPT_HEADER, 0 );
			curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
			curl_setopt( $ch, CURLOPT_URL, $url );
			curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
			curl_setopt( $ch, CURLOPT_TIMEOUT, 10 );

			$data = curl_exec( $ch );
			curl_close( $ch );

			return $data;
		}

		/**
		 * Css files
		 *
		 * @return mixed
		 */
		public static function get_css_files() {

			if ( 1 > count( self::$css_files ) ) {
				do_action( 'pbg_get_css_files' );
			}

			return apply_filters( 'pbg_pbg_add_css_file', self::$css_files );
		}

		/**
		 * Add css
		 *
		 * @param string  $src source.
		 * @param boolean $handle handle.
		 * @return void
		 */
		public static function pbg_add_css( $src = null, $handle = false ) {
			if ( false != $handle ) {
				self::$css_files[ $handle ] = $src;
			} else {
				self::$css_files[] = $src;
			}
		}
	}

	Pbg_Style_Generator::get_instance();
}