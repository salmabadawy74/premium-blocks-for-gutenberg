<?php
/**
 * Generator Class
 *
 * @package     Pbg
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Pbg_Assets_Generator' ) ) {

	/**
	 * Pbg_Merged_Style
	 */
	class Pbg_Assets_Generator {

		/**
		 * Css files
		 *
		 * @var array
		 */
		protected $css_files = array();

		/**
		 * Js files
		 *
		 * @var array
		 */
		protected $js_files = array();

		/**
		 * Prefix
		 *
		 * @var string
		 */
		protected $prefix = '';

		/**
		 * Constructor
		 */
		public function __construct( $prefix ) {
			$this->prefix = $prefix;
		}

		/**
		 * Css url
		 *
		 * @return mixed
		 */
		public function get_css_url() {
			$css_files    = $this->get_css_files();
			$files_count  = count( $css_files );
			$merged_style = '';
			/* new */
			if ( $files_count > 0 ) {
				$merged_file = '';
				foreach ( $css_files as $k => $file ) {
					require_once ABSPATH . 'wp-admin/includes/file.php'; // We will probably need to load this file.
					global $wp_filesystem;
					WP_Filesystem(); // Initial WP file system.
					$merged_style .= $wp_filesystem->get_contents( PREMIUM_BLOCKS_PATH . $file );

					$upload_dir = wp_upload_dir(); // Grab uploads folder array.
					$dir        = trailingslashit( $upload_dir['basedir'] ) . 'premium-blocks-for-gutenberg/'; // Set storage directory path.
					$wp_filesystem->mkdir( $dir ); // Make a new folder for storing our file.
					$wp_filesystem->put_contents( $dir . "{$this->prefix}-style.css", $merged_style, 0777 | 0644 ); // Finally, store the file :D.
					$wp_upload_dir = $upload_dir['baseurl'] . '/' . 'premium-blocks-for-gutenberg/';
					$merged_file   = $wp_upload_dir . "{$this->prefix}-style.css";
				}
				return $merged_file;
			} else {
				return false;
			}

		}

		/**
		 * Js url
		 *
		 * @return mixed
		 */
		public function get_js_url() {
			$js_files      = $this->get_js_files();
			$files_count   = count( $js_files );
			$merged_script = '';

			/* new */
			if ( $files_count ) {
				$merged_file = '';
				foreach ( $js_files as $k => $file ) {
					require_once ABSPATH . 'wp-admin/includes/file.php'; // We will probably need to load this file.
					global $wp_filesystem;
					WP_Filesystem(); // Initial WP file system.
					$merged_script .= $wp_filesystem->get_contents( PREMIUM_BLOCKS_PATH . $file );

					$upload_dir = wp_upload_dir(); // Grab uploads folder array.
					$dir        = trailingslashit( $upload_dir['basedir'] ) . 'premium-blocks-for-gutenberg/'; // Set storage directory path.
					$wp_filesystem->mkdir( $dir ); // Make a new folder for storing our file.
					$wp_filesystem->put_contents( $dir . "{$this->prefix}-script.js", $merged_script, 0777 | 0644 ); // Finally, store the file :D.
					$wp_upload_dir = $upload_dir['baseurl'] . '/' . 'premium-blocks-for-gutenberg/';
					$merged_file   = $wp_upload_dir . "{$this->prefix}-script.js";
				}
				return $merged_file;
			} else {
				return false;
			}
		}

		/**
		 * Css files
		 *
		 * @return mixed
		 */
		public function get_css_files() {
			return apply_filters( 'pbg_add_css_file', $this->css_files );
		}

		/**
		 * Js files
		 *
		 * @return mixed
		 */
		public function get_js_files() {

			if ( 1 > count( $this->js_files ) ) {
				do_action( 'pbg_get_js_files' );
			}

			return apply_filters( 'pbg_add_js_file', $this->js_files );
		}

		/**
		 * Add css
		 *
		 * @param string  $src source.
		 * @param boolean $handle handle.
		 * @return void
		 */
		public function pbg_add_css( $src = null, $handle = false ) {
			if ( false != $handle ) {
				$this->css_files[ $handle ] = $src;
			} else {
				$this->css_files[] = $src;
			}
		}

		/**
		 * Js files
		 *
		 * @var array
		 */
		public function pbg_add_js( $src, $handle = false ) {
			if ( false != $handle ) {
				$this->js_files[ $handle ] = $src;
			} else {
				$this->js_files[] = $src;
			}
		}
	}
}
