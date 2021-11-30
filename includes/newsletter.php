<?php

/**
 * Form Ajax Handing.
 *
 * @package Premium Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Main plugin class
 */
class PBG_Ajax_Form {


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
		 add_action( 'wp_ajax_pb_process_ajax_submit', array( $this, 'process_ajax' ) );
		add_action( 'wp_ajax_nopriv_pb_process_ajax_submit', array( $this, 'process_ajax' ) );
	}

	public function process_ajax() {
		if ( isset( $_POST['_kb_form_id'] ) && ! empty( $_POST['_kb_form_id'] ) && isset( $_POST['_kb_form_post_id'] ) && ! empty( $_POST['_kb_form_post_id'] ) ) {
			$valid = true;
			if ( apply_filters( 'premium_blocks_form_verify_nonce', false ) ) {
				$valid = check_ajax_referer( 'kb_form_nonce', '_kb_form_verify', false );
			}
			$form_id = sanitize_text_field( wp_unslash( $_POST['_kb_form_id'] ) );
			if ( $valid ) {
				$form_id   = sanitize_text_field( wp_unslash( $_POST['_kb_form_id'] ) );
				$post_id   = sanitize_text_field( wp_unslash( $_POST['_kb_form_post_id'] ) );
				$form_args = $this->get_form_args( $post_id, $form_id );
				if ( ! $form_args ) {
					$this->process_bail( __( 'Submission Failed', 'premium-blocks' ), __( 'Data not Found', 'premium-blocks' ) );
				}
				$api_key = get_option( 'mail_chimp_api' );
				if ( empty( $api_key ) ) {
					return;
				}
				$mailchimp_default   = array(
					'list'        => array(),
					'groups'      => array(),
					'tags'        => array(),
					'map'         => array(),
					'doubleOptin' => false,
				);
				$mailchimp_args      = ( isset( $form_args['mailchimp'] ) && is_array( $form_args['mailchimp'] ) && isset( $form_args['mailchimp'][0] ) && is_array( $form_args['mailchimp'][0] ) ? $form_args['mailchimp'][0] : $mailchimp_default );
						$list        = ( isset( $mailchimp_args['list'] ) ? $mailchimp_args['list'] : '' );
						$groups      = ( isset( $mailchimp_args['groups'] ) && is_array( $mailchimp_args['groups'] ) ? $mailchimp_args['groups'] : array() );
						$tags        = ( isset( $mailchimp_args['tags'] ) && is_array( $mailchimp_args['tags'] ) ? $mailchimp_args['tags'] : array() );
						$doubleOptin = ( isset( $mailchimp_args['doubleOptin'] ) ? $mailchimp_args['doubleOptin'] : false );
				$body                = array(
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
					$base_url  = 'https://' . $key_parts[1] . '.api.mailchimp.com/3.0/';
						$email = false;
				if ( ! empty( $groups ) ) {
					foreach ( $groups as $id => $label ) {
						if ( ! isset( $body['interests'] ) ) {
							$body['interests'] = array();
						}
						$body['interests'][ $label['value'] ] = true;
					}
				}
				$list_id = '';
				if ( empty( $list_id ) ) {
					return;
				}

				if ( isset( $body['email_address'] ) ) {
					$subscriber_hash = md5( strtolower( $body['email_address'] ) );
					$api_url         = $base_url . 'lists/' . $list_id . '/members/' . $subscriber_hash;
					$response        = wp_remote_post(
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

						// $error_message = $response->get_error_message();
						// error_log( "Something went wrong: $error_message" );
					} else {
						if ( ! isset( $response['response'] ) || ! isset( $response['response']['code'] ) ) {
							// error_log( __('Failed to Connect to MailChimp', 'premium-blocks-pro' ) );

						}
						if ( 400 === $response['response']['code'] || 404 === $response['response']['code'] ) {
							// error_log( $response['response']['message'] );

						}
					}
				}
			}
		}
	}
	/**
	 * Sanitize the field
	 *
	 * @param string $field_type the field type.
	 * @param mixed  $value the field value.
	 */
	private function sanitize_field( $field_type, $value, $multi_select = false ) {
		switch ( $field_type ) {
			case 'text':
			case 'tel':
			case 'password':
			case 'hidden':
			case 'search':
			case 'select':
				$value = ( $multi_select && is_array( $value ) ? sanitize_text_field( implode( ', ', $value ) ) : sanitize_text_field( $value ) );
				break;
			case 'checkbox':
				$value = ( is_array( $value ) ? sanitize_text_field( implode( ', ', $value ) ) : sanitize_text_field( $value ) );
				break;
			case 'radio':
				$value = ( is_array( $value ) ? sanitize_text_field( implode( ', ', $value ) ) : sanitize_text_field( $value ) );
				break;
			case 'url':
				$value = esc_url_raw( trim( $value ) );
				break;
			case 'textarea':
				$value = sanitize_textarea_field( $value );
				break;
			case 'email':
				$value = sanitize_email( trim( $value ) );
				break;
			case 'accept':
				$value = esc_html__( 'Accept', 'premium-blocks' );
				break;
			default:
				/**
				 * Sanitize field value.
				 * Filters the value of the form field for sanitization purpose.
				 * The dynamic portion of the hook name, `$field_type`, refers to the field type.
				 *
				 * @param string $value The field value.
				 */
				$value = apply_filters( "premium_blocks_form_sanitize_{$field_type}", $value );
		}

		return $value;
	}
	/**
	 * Bail out something isn't correct.
	 *
	 * @param string $error Error to display.
	 * @param string $note Note to show in console.
	 * @param string $action action to take if any.
	 */
	public function process_bail( $error, $note, $required = null ) {
		$notices                  = array();
		$notices['error']['note'] = $error;
		$out                      = array(
			'html'     => $this->html_from_notices( $notices ),
			'console'  => $note,
			'required' => $required,
		);
		$this->send_json( $out, true );
	}

	/**
	 * Create HTML string from notices
	 *
	 * @param array $notices Notices to display.
	 *
	 * @return string
	 */
	public function html_from_notices( $notices = array() ) {
		$html = '';
		foreach ( $notices as $note_type => $notice ) {
			if ( ! empty( $notice['note'] ) ) {
				$html .= '<div class="premium-blocks-form-message premium-blocks-form-warning">' . $notice['note'] . '</div>';
			}
		}

		return $html;
	}
	/**
	 * Starts a flushable buffer
	 */
	public function start_buffer() {
		if ( ! did_action( 'premium_blocks_forms_buffer_started' ) ) {

			ob_start();

			/**
			 * Runs when buffer is started
			 *
			 * Used to prevent starting buffer twice
			 */
			do_action( 'premium_blocks_forms_buffer_started' );
		}
	}

	/**
	 * Wrapper for wp_send_json() with output buffering
	 *
	 * @since 1.8.0
	 *
	 * @param array $data Data to return
	 * @param bool  $is_error Optional. Is this an error. Default false.
	 */
	public function send_json( $data = array(), $is_error = false ) {

		$buffer = ob_get_clean();
		/**
		 * Runs before Premium Blocks Forms returns json via wp_send_json() exposes output buffer
		 *
		 * @param string|null $buffer Buffer contents
		 * @param bool $is_error If we think this is an error response or not.
		 */
		do_action( 'premium_blocks_forms_buffer_flushed', $buffer, $is_error );
		$data['headers_sent'] = headers_sent();
		if ( ! $is_error ) {
			// status_header( 200 );
			$data['success']      = true;
			$data['show_message'] = true;
			wp_send_json( $data );
		} else {
			wp_send_json_error( $data );
		}
		return $buffer;
	}
	/**
	 * Get form args
	 *
	 * @param string $content the post content.
	 */
	public function parse_blocks( $content ) {
		$parser_class = apply_filters( 'block_parser_class', 'WP_Block_Parser' );
		if ( class_exists( $parser_class ) ) {
			$parser = new $parser_class();
			return $parser->parse( $content );
		} elseif ( function_exists( 'gutenberg_parse_blocks' ) ) {
			// return gutenberg_parse_blocks( $content );

		} else {
			return false;
		}
	}

	/**
	 * Get form args
	 *
	 * @param integer $post_id the form post id.
	 * @param string  $form_id the form id.
	 */

	private function get_form_args( $post_id, $form_id ) {
		$form_args = false;
		$blocks    = '';
		if ( strpos( $post_id, 'block' ) !== false ) {
			$widget_data = get_option( 'widget_block' );
			$post_id_int = preg_replace( '/[^0-9]/', '', $post_id );
			if ( ! empty( $widget_data[ absint( $post_id_int ) ] ) ) {
				$form_content = $widget_data[ absint( $post_id_int ) ];
				$blocks       = $this->parse_blocks( $form_content['content'] );
			}
		} else {
			$post_data = get_post( absint( $post_id ) );
			if ( is_object( $post_data ) ) {
				$blocks = $this->parse_blocks( $post_data->post_content );
			}
		}
		if ( ! is_array( $blocks ) || empty( $blocks ) ) {
				$this->process_bail( __( 'Submission Failed', 'kadence-blocks' ), __( 'Data not found', 'kadence-blocks' ) );
		}

		foreach ( $blocks as $indexkey => $block ) {
			if ( ! is_object( $block ) && is_array( $block ) && isset( $block['blockName'] ) ) {
				if ( 'premium/newsletter' === $block['blockName'] ) {
					if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) && isset( $block['attrs']['block_id'] ) && $form_id === $block['attrs']['block_id'] ) {
						var_dump( $block );
						$form_args = $block['attrs'];
						break;
					}
				}
			}
			var_dump( $block, 'Block' );
		}
		return $form_args;
	}
	/**
	 * Get form args
	 *
	 * @param array  $blocks the post inner blocks.
	 * @param string $form_id the form Id.
	 */

}
PBG_Ajax_Form::get_instance();
