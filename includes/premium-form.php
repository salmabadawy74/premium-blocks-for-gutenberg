<?php
/**
 * Form Action Handling.
 *
 * @package premium Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Main plugin class
 */
class Premium_Form_Actions {

	/**
	 * Instance Control
	 *
	 * @var null
	 */
	private static $instance = null;
	/**
	 * Instance Control
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	/**
	 * Class Constructor.
	 */
	public function __construct() {

		add_action( 'premium_blocks_form_submission', array( $this, 'process_actions' ), 10, 4 );
	}
	/**
	 * Process the form submit.
	 *
	 * @param array  $form_args the form settings.
	 * @param array  $fields the form fields.
	 * @param string $form_id the form ID.
	 * @param int    $post_id the post ID.
	 */
	public function process_actions( $form_args, $fields, $form_id, $post_id ) {
		
              if ( isset( $form_args ) && is_array( $form_args ) && isset( $form_args['actions'] ) ) {

			$api_key = get_option( 'mail_chimp_api' );
			if ( empty( $api_key ) ) {
				return;
			}
						$mailchimp_default = array(
							'list'        => array(),
							'groups'      => array(),
							'map'         => array(),
							'doubleOptin' => false,
						);
						$mailchimp_args    = ( isset( $form_args['mailchimp'] ) && is_array( $form_args['mailchimp'] ) && isset( $form_args['mailchimp'][0] ) && is_array( $form_args['mailchimp'][0] ) ? $form_args['mailchimp'][0] : $mailchimp_default );
						$list              = ( isset( $mailchimp_args['list'] ) ? '8286186162' : '8286186162' );
						$groups            = ( isset( $mailchimp_args['groups'] ) && is_array( $mailchimp_args['groups'] ) ? $mailchimp_args['groups'] : array() );
						$map               = ( isset( $mailchimp_args['map'] ) && is_array( $mailchimp_args['map'] ) ? $mailchimp_args['map'] : array() );
						$body              = array(
							'email_address' => '',
							'status_if_new' => 'subscribed',
							'status'        => 'subscribed',
						);

						if ( empty( $list ) || ! is_array( $list ) ) {
							return;

						}

						$key_parts = explode( '-', $api_key );
						if ( empty( $key_parts[1] ) || 0 !== strpos( $key_parts[1], 'us' ) ) {
							return;
						}
						$base_url = 'https://' . $key_parts[1] . '.api.mailchimp.com/3.0/';
						$email    = false;
						if ( ! empty( $groups ) ) {
							foreach ( $groups as $id => $label ) {
								if ( ! isset( $body['interests'] ) ) {
									$body['interests'] = array();
								}
								$body['interests'][ $label['value'] ] = true;
							}
						}
						if ( ! empty( $map ) ) {
							foreach ( $fields as $key => $data ) {
								if ( isset( $map[ $key ] ) && ! empty( $map[ $key ] ) ) {
									if ( 'email' === $map[ $key ] && ! $email ) {
										$email                 = $data['value'];
										$body['email_address'] = $data['value'];
									} else {
										if ( ! isset( $body['merge_fields'] ) ) {
											$body['merge_fields'] = array();
										}
										$body['merge_fields'][ $map[ $key ] ] = $data['value'];
									}
								}
							}
						} else {
							foreach ( $fields as $key => $data ) {
								if ( 'email' === $data['type'] ) {
									$email                 = $data['value'];
									$body['email_address'] = $data['value'];
									break;
								}
							}
						}
						$list_id = ( isset( $list['value'] ) && ! empty( $list['value'] ) ? $list['value'] : '' );
						if ( empty( $list_id ) ) {
							return;
						}
						if ( isset( $body['email_address'] ) ) {
							$subscriber_hash = md5( strtolower( $body['email_address'] ) );
							$api_url         = $base_url . 'lists/' . $list_id . '/members/' . $subscriber_hash;
							// error_log( $api_url );
							$response = wp_remote_post(
								$api_url,
								array(
									'method'  => 'PUT',
									'timeout' => 10,
									'headers' => array(
										'accept'        => 'application/json',
										'content-type'  => 'application/json',
										'Authorization' => 'Basic ' . base64_encode( 'user:' . $api_key ),
									),
									'body'    => json_encode( $body ),
								)
							);
							if ( is_wp_error( $response ) ) {
								$error_message = $response->get_error_message();
								// error_log( "Something went wrong: $error_message" );
							} else {
								if ( ! isset( $response['response'] ) || ! isset( $response['response']['code'] ) ) {
									// error_log( __('Failed to Connect to MailChimp', 'premium-blocks-pro' ) );
									return;
								}
								if ( 400 === $response['response']['code'] || 404 === $response['response']['code'] ) {
									// error_log( $response['response']['message'] );
									return;
								}
							}
						}
		}
	}


}
Premium_Form_Actions::get_instance();
