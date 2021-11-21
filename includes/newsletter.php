<?php
/**
 * PBG NewsLetter.
 *
 * @package PBG
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
if ( ! class_exists( 'PBG_NewsLetter' ) ) {
	/**
	 * Class PBG_NewsLetter.
	 */
	class PBG_NewsLetter {
		/**
		 * Member Variable
		 *
		 * @since 1.18.1
		 * @var instance
		 */
		private static $instance;
		private static $newsletter_settings;

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

			add_action( 'wp_ajax_subscribe_newsletter', array( $this, 'subscribe_newsletter' ) );
			add_action( 'wp_ajax_nopriv_subscribe_newsletter', array( $this, 'subscribe_newsletter' ) );
		}

		// Check if the register function exists.

		/**
		 * Get Post common attributes
		 *
		 * @since 0.0.1
		 */
		/**
		 * Renders the post  block on server.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */
		public function post_callback( $attributes ) {

			// Render query.

			// Cache the settings.
				self::$newsletter_settings = $attributes;

			ob_start();
			$this->get_post_html( $attributes );
			// Output the post markup.
			return ob_get_clean();
		}
		/**
		 * Renders the post grid block on server.
		 *
		 * @param array  $attributes Array of block attributes.
		 *
		 * @param object $query WP_Query object.
		 * @since 0.0.1
		 */


		/**
		 * Render Posts HTML
		 *
		 * @param object $query WP_Query object.
		 * @param array  $attributes Array of block attributes.
		 * @since 1.18.1
		 */
		public function subscribe_newsletter() {
			$email = $_POST['email'];
			if ( empty( $email ) ) {
				return false;
			}
			if ( ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
				return false;
			}
			$apikey  = get_option( 'mail_chimp_api' );
			$list_id = '8286186162';
			$status  = false;
			if ( $email && $apikey && $list_id ) {
				$root = 'https://api.mailchimp.com/3.0';
				if ( strstr( $apikey, '-' ) ) {
					list( $key, $dc ) = explode( '-', $apikey, 2 );
				}
				$root   = str_replace( 'https://api', 'https://' . $dc . '.api', $root );
				$root   = rtrim( $root, '/' ) . '/';
				$params = array(
					'apikey'            => $apikey,
					'id'                => $list_id,
					'email_address'     => $email,
					'status'            => 'subscribed',
					'double_optin'      => false,
					'send_welcome'      => false,
					'replace_interests' => false,
					'update_existing'   => true,
				);
				$ch     = curl_init();
				$params = json_encode( $params );
				curl_setopt( $ch, CURLOPT_URL, $root . '/lists/' . $list_id . '/members/' . $email );
				curl_setopt( $ch, CURLOPT_USERPWD, 'user:' . $apikey );
				curl_setopt( $ch, CURLOPT_HTTPHEADER, array( 'Content-Type: application/json' ) );
				curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
				curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'PUT' );
				curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
				curl_setopt( $ch, CURLOPT_POSTFIELDS, $params );

				$results  = curl_exec( $ch ); // store response
				$response = curl_getinfo( $ch, CURLINFO_HTTP_CODE ); // get HTTP CODE
				$errors   = curl_error( $ch ); // store errors

			}

				$results = array(
					'results'  => $result_info,
					'response' => $response,
					'errors'   => $errors,
				);

				 // Sends data back to the page OR the ajax() in your JS
				return $results;

		}
		/**
		 * Render Script of the block.
		 *
		 * @since 0.0.1
		 */

		/**
		 * Render Complete Box Link HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.7.0
		 */
	}

	PBG_NewsLetter::get_instance();
}

