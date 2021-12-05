<?php
/**
 * Form Ajax Handing.
 *
 * @package Premium Blocks For Gutenberg
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

	/**
	 * Process the form submit.
	 */
	public function process_ajax() {
		if ( isset( $_POST['_pbg_form_id'] ) && ! empty( $_POST['_pbg_form_id'] ) && isset( $_POST['_pbg_form_post_id'] ) && ! empty( $_POST['_pbg_form_post_id'] ) ) {
			 $this->start_buffer();
			$valid = true;
			if ( apply_filters( 'premium_blocks_form_verify_nonce', false ) ) {
				$valid = check_ajax_referer( 'pbg_form_nonce', '_kb_form_verify', false );
			}
			if ( $valid ) {
				// Lets get form data.
				$form_id   = sanitize_text_field( wp_unslash( $_POST['_pbg_form_id'] ) );
				$post_id   = sanitize_text_field( wp_unslash( $_POST['_pbg_form_post_id'] ) );
				$form_args = $this->get_form_args( $post_id, $form_id );
				if ( ! $form_args ) {

					$this->process_bail( __( 'Submission Failed', 'premium-block-for-gutenberg' ), __( 'Data notsss Found', 'premium-block-for-gutenberg' ) );
				}
				// Check for default form actions.

				// Check for Message strings.
				$messages = array(
					0 => array(
						'success' => esc_html__( 'Submission Success, Thanks for getting in touch!', 'premium-block-for-gutenberg' ),
						'error'   => esc_html__( 'Submission Failed', 'premium-block-for-gutenberg' ),
					),
				);
				if ( isset( $form_args['messages'] ) && isset( $form_args['messages'][0] ) ) {

					if ( isset( $form_args['messages'][0]['success'] ) && ! empty( $form_args['messages'][0]['success'] ) ) {
						$messages[0]['success'] = $form_args['messages'][0]['success'];
					}
					if ( isset( $form_args['messages'][0]['error'] ) && ! empty( $form_args['messages'][0]['error'] ) ) {
						$messages[0]['error'] = $form_args['messages'][0]['error'];
					}
					if ( isset( $form_args['messages'][0]['required'] ) && ! empty( $form_args['messages'][0]['required'] ) ) {
						$messages[0]['required'] = $form_args['messages'][0]['required'];
					}
					if ( isset( $form_args['messages'][0]['invalid'] ) && ! empty( $form_args['messages'][0]['invalid'] ) ) {
						$messages[0]['invalid'] = $form_args['messages'][0]['invalid'];
					}
				}

				// Check Recaptcha.

				// unset( $_POST['_kb_form_sub_id'], $_POST['_kb_verify_email'] );
				// Get fields.
				$fields = array();
				if ( ! isset( $form_args['fields'] ) || ! is_array( $form_args['fields'] ) ) {
					$form_args['fields'] = array(

						1 => array(
							'label'       => 'Email',
							'showLabel'   => true,
							'placeholder' => '',
							'default'     => '',
							'rows'        => 4,
							'options'     => array(),
							'multiSelect' => false,
							'inline'      => false,
							'showLink'    => false,
							'min'         => '',
							'max'         => '',
							'type'        => 'email',
							'required'    => true,
							'width'       => array( '100', '', '' ),
							'auto'        => '',
						),

					);
				}
				// $privacy_title = ( get_option( 'wp_page_for_privacy_policy' ) ? get_the_title( get_option( 'wp_page_for_privacy_policy' ) ) : '' );
				foreach ( $form_args['fields'] as $key => $data ) {
					// check for required.
					if ( $data['required'] && ( ! isset( $_POST[ 'pbg_field_' . $key ] ) || empty( $_POST[ 'pbg_field_' . $key ] ) ) ) {
						$this->process_bail( $messages[0]['error'], __( 'Required Field Empty', 'premium-block-for-gutenberg' ), 'pbg_field_' . $key );
					}
					if ( isset( $_POST[ 'pbg_field_' . $key ] ) ) {
						$fields[ $key ] = array(
							'type'  => $data['type'],
							'label' => str_replace( '{privacy_policy}', $privacy_title, $data['label'] ),
							'value' => $this->sanitize_field( $data['type'], wp_unslash( $_POST[ 'pbg_field_' . $key ] ), $data['multiSelect'] ),
						);
						if ( 'hidden' === $data['type'] ) {
							global $post;
							$refer_id                = is_object( $post ) ? $post->ID : url_to_postid( wp_get_referer() );
							$fields[ $key ]['value'] = str_replace( '{page_title}', get_the_title( $refer_id ), $fields[ $key ]['value'] );
							$fields[ $key ]['value'] = str_replace( '{page_url}', wp_get_referer(), $fields[ $key ]['value'] );
						}
						unset( $_POST[ 'pbg_field_' . $key ] );
					}
				}
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
							$success = false;
							return;
						}
						if ( 400 === $response['response']['code'] || 404 === $response['response']['code'] ) {
							$success = false;
							return;
						} elseif ( 200 === $response['response']['code'] ) {
							$success = true;

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
				$messages = apply_filters( 'premium_blocks_form_submission_messages', $messages );
				if ( ! $success ) {
					$this->process_bail( $messages[0]['error'], __( 'Third Party Failed', 'premium-block-for-gutenberg' ) );
				} else {
					$final_data['html'] = '<div class="premium-blocks-form-message premium-blocks-form-success">' . $messages[0]['success'] . '</div>';
					$this->send_json( $final_data );
				}
			} else {
				$this->process_bail( __( 'Submission rejected, invalid security token. Reload the page and try again.', 'premium-block-for-gutenberg' ), __( 'Token invalid', 'premium-block-for-gutenberg' ) );
			}
		} else {
			$this->process_bail( __( 'Submission failed', 'premium-block-for-gutenberg' ), __( 'No Data', 'premium-block-for-gutenberg' ) );
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
				$value = esc_html__( 'Accept', 'premium-block-for-gutenberg' );
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
		 * Runs before  Premium Blocks Newsletter returns json via wp_send_json() exposes output buffer
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
			return gutenberg_parse_blocks( $content );
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
		if ( strpos( $post_id, 'block-unknown' ) !== false ) {
			$widget_data = get_option( 'widget_block' );
			if ( is_array( $widget_data ) ) {
				foreach ( $widget_data as $key => $data_array ) {
					if ( ! empty( $data_array['content'] ) && strpos( $data_array['content'], '<!-- wp:premium/newsletter {"uniqueID":"' . $form_id . '"' ) !== false ) {
						$blocks = $this->parse_blocks( $data_array['content'] );
						break;
					}
				}
			}
		} elseif ( strpos( $post_id, 'block' ) !== false ) {
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
			$this->process_bail( __( 'Submission Failed', 'premium-block-for-gutenberg' ), __( 'Data not found', 'premium-block-for-gutenberg' ) );
		}
		foreach ( $blocks as $indexkey => $block ) {
			if ( ! is_object( $block ) && is_array( $block ) && isset( $block['blockName'] ) ) {
				if ( 'premium/newsletter' === $block['blockName'] ) {
					if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) && isset( $block['attrs']['block_id'] ) && $form_id === $block['attrs']['block_id'] ) {
						$form_args = $block['attrs'];
						break;
					}
				}
			}
		}
		return $form_args;
	}
	/**
	 * Get form args
	 *
	 * @param array  $blocks the post inner blocks.
	 * @param string $form_id the form Id.
	 */
	private function parse_inner_blocks( $blocks, $form_id ) {
		$form_args = false;
		foreach ( $blocks as $indexkey => $block ) {
			if ( 'premium/newsletter' === $block['blockName'] ) {
				if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) && isset( $block['attrs']['block_id'] ) && $form_id === $block['attrs']['block_id'] ) {
					$form_args = $block['attrs'];
					break;
				}
			}
		}
		return $form_args;
	}
}
PBG_Ajax_Form::get_instance();
