<?php
/**
 * PBG Rest API.
 *
 * @package PBG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'PBG_Rest_API' ) ) {

	/**
	 * Class PBG_Rest_API.
	 */
	final class PBG_Rest_API {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
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

			// Activation hook.
			add_action( 'rest_api_init', array( $this, 'blocks_register_rest_fields' ) );

		}

		/**
		 * Create API fields for additional info
		 *
		 * @since 0.0.1
		 */
		public function blocks_register_rest_fields() {
			
			$post_type = PBG_Blocks_Helper::get_post_types();

			foreach ( $post_type as $key => $value ) {
				// Add featured image source.
				register_rest_field(
					$value['value'],
					'pbg_featured_image_src',
					array(
						'get_callback'    => array( $this, 'get_image_src' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);

				// Add author info.
				register_rest_field(
					$value['value'],
					'pbg_author_info',
					array(
						'get_callback'    => array( $this, 'get_author_info' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);

				// Add comment info.
				register_rest_field(
					$value['value'],
					'pbg_comment_info',
					array(
						'get_callback'    => array( $this, 'get_comment_info' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);

				// Add excerpt info.
				register_rest_field(
					$value['value'],
					'pbg_excerpt',
					array(
						'get_callback'    => array( $this, 'get_excerpt' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);
				register_rest_field(
					$value['value'],
					'get_tag',
					array(
						'get_callback'    => array( $this, 'get_tag' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);

			}
		}

		/**
		 * Get featured image source for the rest field as per size
		 *
		 * @param object $object Post Object.
		 * @param string $field_name Field name.
		 * @param object $request Request Object.
		 * @since 0.0.1
		 */
		public function get_image_src( $object, $field_name, $request ) {
			$image_sizes = PBG_Blocks_Helper::get_image_sizes();

			$featured_images = array();

			if ( ! isset( $object['featured_media'] ) ) {
				return $featured_images;
			}

			foreach ( $image_sizes as $key => $value ) {
				$size = $value['value'];

				$featured_images[ $size ] = wp_get_attachment_image_src(
					$object['featured_media'],
					$size,
					false
				);
			}

			return $featured_images;
		}

		/**
		 * Get author info for the rest field
		 *
		 * @param object $object Post Object.
		 * @param string $field_name Field name.
		 * @param object $request Request Object.
		 * @since 0.0.1
		 */
		public function get_author_info( $object, $field_name, $request ) {

			$author = ( isset( $object['author'] ) ) ? $object['author'] : '';

			// Get the author name.
			$author_data['display_name'] = get_the_author_meta( 'display_name', $author );

			// Get the author link.
			$author_data['author_link'] = get_author_posts_url( $author );

			// Return the author data.
			return $author_data;
		}

		/**
		 * Get comment info for the rest field
		 *
		 * @param object $object Post Object.
		 * @param string $field_name Field name.
		 * @param object $request Request Object.
		 * @since 0.0.1
		 */
		public function get_comment_info( $object, $field_name, $request ) {
			// Get the comments link.
			$comments_count = wp_count_comments( $object['id'] );
			return $comments_count->total_comments;
		}

		/**
		 * Get excerpt for the rest field
		 *
		 * @param object $object Post Object.
		 * @param string $field_name Field name.
		 * @param object $request Request Object.
		 * @since 0.0.1
		 */
		public function get_excerpt( $object, $field_name, $request ) {
			$excerpt = wp_trim_words( get_the_excerpt( $object['id'] ) );
			if ( ! $excerpt ) {
				$excerpt = null;
			}
			return $excerpt;
		}
		public function get_tag($object, $field_name, $request){
			$tag = ( isset( $object['tag'] ) ) ? $object['tag'] : '';
			return $tag;
		}
		


	}

	/**
	 *  Prepare if class 'PBG_Rest_API' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	PBG_Rest_API::get_instance();
}
