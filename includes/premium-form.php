<?php
/**
 * Form Action Handling.
 *
 * @package Premium Blocks for Gutenberg
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Main plugin class
 */
class PBG_Form_Actions {

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
		if ( isset( $form_args ) && is_array( $form_args ) ) {

			$api_key = get_option( 'mail_chimp_api' );
			if ( empty( $api_key ) ) {
				return;
			}
						$mailchimp_default = array(
							'list'        => array(),
							'groups'      => array(),
							'tags'        => array(),
							'map'         => array(),
							'doubleOptin' => false,
						);
						$mailchimp_args    = ( isset( $form_args['mailchimp'] ) && is_array( $form_args['mailchimp'] ) && isset( $form_args['mailchimp'][0] ) && is_array( $form_args['mailchimp'][0] ) ? $form_args['mailchimp'][0] : $mailchimp_default );
						$list              = ( isset( $mailchimp_args['list'] ) ? $mailchimp_args['list'] : '' );
						$groups            = ( isset( $mailchimp_args['groups'] ) && is_array( $mailchimp_args['groups'] ) ? $mailchimp_args['groups'] : array() );
						$tags              = ( isset( $mailchimp_args['tags'] ) && is_array( $mailchimp_args['tags'] ) ? $mailchimp_args['tags'] : array() );
						$map               = ( isset( $mailchimp_args['map'] ) && is_array( $mailchimp_args['map'] ) ? $mailchimp_args['map'] : array() );
						$doubleOptin       = ( isset( $mailchimp_args['doubleOptin'] ) ? $mailchimp_args['doubleOptin'] : false );
						$body              = array(
							'email_address' => '',
							'status_if_new' => 'subscribed',
							'status'        => 'subscribed',
						);
						if ( $doubleOptin ) {
							$body['status_if_new'] = 'pending';
							$body['double_optin']  = true;
						}
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
						$tags_array = array();
						if ( ! empty( $tags ) ) {
							foreach ( $tags as $id => $tag_item ) {
								if ( ! isset( $body['tags'] ) ) {
									$body['tags'] = array();
								}
								$body['tags'][] = $tag_item['label'];
								$tags_array[]   = array(
									'name'   => $tag_item['label'],
									'status' => 'active',
								);
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
							} else {
								if ( ! isset( $response['response'] ) || ! isset( $response['response']['code'] ) ) {
									return;
								}
								if ( 400 === $response['response']['code'] || 404 === $response['response']['code'] ) {
									return;
								} elseif ( 200 === $response['response']['code'] ) {
									$needs_update = false;
									$body         = json_decode( wp_remote_retrieve_body( $response ), true );
									if ( ! empty( $tags_array ) && empty( $body['tags'] ) ) {
										$needs_update = true;
									} elseif ( ! empty( $tags_array ) && ! empty( $body['tags'] ) && is_array( $body['tags'] ) ) {
										$current_tags = array();
										foreach ( $body['tags'] as $key => $data ) {
											$current_tags[] = $data['name'];
										}
										foreach ( $tags_array as $key => $data ) {
											if ( ! in_array( $data['name'], $current_tags ) ) {
												$needs_update = true;
												break;
											}
										}
									}
									if ( $needs_update ) {
										$tag_url      = $base_url . 'lists/' . $list_id . '/members/' . $subscriber_hash . '/tags';
										$tag_response = wp_remote_post(
											$tag_url,
											array(
												'method'  => 'POST',
												'timeout' => 10,
												'headers' => array(
													'accept'       => 'application/json',
													'content-type' => 'application/json',
													'Authorization' => 'Basic ' . base64_encode( 'user:' . $api_key ),
												),
												'body'    => json_encode( array( 'tags' => $tags_array ) ),
											)
										);
										if ( is_wp_error( $tag_response ) ) {
											$error_message = $tag_response->get_error_message();
										} else {
											if ( ! isset( $tag_response['response'] ) || ! isset( $tag_response['response']['code'] ) ) {
												return;
											}
											if ( 204 === $tag_response['response']['code'] ) {
												return;
											}
										}
									}
								}
							}
						}
		}
	}

}
PBG_Form_Actions::get_instance();
