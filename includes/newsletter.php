<?php

/**
 * Form Ajax Handing.
 *
 * @package Premium Blocks
 */

if (!defined('ABSPATH')) {
	exit;
}
/**
 * Main plugin class
 */
class PBG_Ajax_Form
{

	/**
	 * Instance Control
	 *
	 * @var null
	 */
	private static $instance = null;
	/**
	 * Instance Control
	 */
	public static function get_instance()
	{
		if (is_null(self::$instance)) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	/**
	 * Class Constructor.
	 */
	public function __construct()
	{
		add_action('wp_ajax_pb_process_ajax_submit', array($this, 'process_ajax'));
		add_action('wp_ajax_nopriv_pb_process_ajax_submit', array($this, 'process_ajax'));
	}

	/**
	 * Process the form submit.
	 */
	public function process_ajax()
	{
		$form_id   = sanitize_text_field(wp_unslash($_POST['_kb_form_id']));

		$email = 'dina.ss@yahoo.com';
		if (empty($email)) {
			return false;
		}

		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			return false;
		}

		$apikey  = get_option('mail_chimp_api');
		$list_id = '8286186162';
		$status  = false;
		if ($email && $apikey && $list_id) {
			$root = 'https://api.mailchimp.com/3.0';
			if (strstr($apikey, '-')) {
				list($key, $dc) = explode('-', $apikey, 2);
			}
			$root   = str_replace('https://api', 'https://' . $dc . '.api', $root);
			$root   = rtrim($root, '/') . '/';
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
			$params = json_encode($params);
			curl_setopt($ch, CURLOPT_URL, $root . '/lists/' . $list_id . '/members/' . $email);
			curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apikey);
			curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
			$response_body = curl_exec($ch);
			$httpCode      = curl_getinfo($ch, CURLINFO_HTTP_CODE);
			curl_close($ch);
			if ($httpCode == 200) {
				$status = true;
			}
		}

		$response = array(
			'status' => $status,
		);
		return $response;

		// if ( isset( $_POST['_kb_form_id'] ) && ! empty( $_POST['_kb_form_id'] ) && isset( $_POST['_kb_form_post_id'] ) && ! empty( $_POST['_kb_form_post_id'] ) ) {

		// $valid = true;

		// if ( apply_filters( 'premium_blocks_form_verify_nonce', false ) ) {
		// $valid = check_ajax_referer( 'kb_form_nonce', '_kb_form_verify', false );
		// }
		// if ( $valid ) {
		// Lets get form data.
		// $form_id   = sanitize_text_field( wp_unslash( $_POST['_kb_form_id'] ) );
		// $post_id   = sanitize_text_field( wp_unslash( $_POST['_kb_form_post_id'] ) );
		// $form_args = $this->get_form_args( $post_id, $form_id );
		// if ( ! $form_args ) {
		// $this->process_bail( __( 'Submission Failed', 'premium-blocks' ), __( 'Data not Found', 'premium-blocks' ) );
		// }
		// Check for default form actions.

		// if ( ! isset( $form_args['email'] ) ) {
		// $form_args['email'] = array(
		// 0 => array(
		// 'emailTo' => get_bloginfo( 'admin_email' ),
		// 'subject' => '[' . get_bloginfo( 'name' ) . ' ' . __( 'Submission', 'premium-blocks' ) . ']',
		// 'replyTo' => 'email_field',
		// 'html'    => true,
		// ),
		// );
		// }
		// Check for Message strings.
		// $messages = array(
		// 0 => array(
		// 'success'        => esc_html__( 'Submission Success, Thanks for getting in touch!', 'premium-blocks' ),
		// 'error'          => esc_html__( 'Submission Failed', 'premium-blocks' ),
		// 'recaptchaerror' => esc_html__( 'Submission Failed, reCaptcha spam prevention. Please reload your page and try again.', 'premium-blocks' ),
		// ),
		// );
		// if ( isset( $form_args['messages'] ) && isset( $form_args['messages'][0] ) ) {
		// if ( isset( $form_args['messages'][0]['recaptchaerror'] ) && ! empty( $form_args['messages'][0]['recaptchaerror'] ) ) {
		// $messages[0]['recaptchaerror'] = $form_args['messages'][0]['recaptchaerror'];
		// }
		// if ( isset( $form_args['messages'][0]['success'] ) && ! empty( $form_args['messages'][0]['success'] ) ) {
		// $messages[0]['success'] = $form_args['messages'][0]['success'];
		// }
		// if ( isset( $form_args['messages'][0]['error'] ) && ! empty( $form_args['messages'][0]['error'] ) ) {
		// $messages[0]['error'] = $form_args['messages'][0]['error'];
		// }
		// if ( isset( $form_args['messages'][0]['required'] ) && ! empty( $form_args['messages'][0]['required'] ) ) {
		// $messages[0]['required'] = $form_args['messages'][0]['required'];
		// }
		// if ( isset( $form_args['messages'][0]['invalid'] ) && ! empty( $form_args['messages'][0]['invalid'] ) ) {
		// $messages[0]['invalid'] = $form_args['messages'][0]['invalid'];
		// }
		// }
		// Check Honey Pot.
		// if ( isset( $form_args['honeyPot'] ) && true === $form_args['honeyPot'] ) {
		// $honeypot_check = filter_input( INPUT_POST, '_kb_verify_email', FILTER_SANITIZE_STRING );
		// if ( ! empty( $honeypot_check ) ) {
		// $this->process_bail( __( 'Submission Rejected', 'premium-blocks' ), __( 'Spam Detected', 'premium-blocks' ) );
		// }
		// }
		// Check Recaptcha.

		// unset( $_POST['_kb_form_sub_id'], $_POST['_kb_verify_email'] );
		// Get fields.
		// $fields = array();
		// if ( ! isset( $form_args['fields'] ) || ! is_array( $form_args['fields'] ) ) {
		// $form_args['fields'] = array(
		// 0 => array(
		// 'label'       => 'Name',
		// 'showLabel'   => true,
		// 'placeholder' => '',
		// 'default'     => '',
		// 'rows'        => 4,
		// 'options'     => array(),
		// 'multiSelect' => false,
		// 'inline'      => false,
		// 'showLink'    => false,
		// 'min'         => '',
		// 'max'         => '',
		// 'type'        => 'text',
		// 'required'    => false,
		// 'width'       => array( '100', '', '' ),
		// 'auto'        => '',
		// ),
		// 1 => array(
		// 'label'       => 'Email',
		// 'showLabel'   => true,
		// 'placeholder' => '',
		// 'default'     => '',
		// 'rows'        => 4,
		// 'options'     => array(),
		// 'multiSelect' => false,
		// 'inline'      => false,
		// 'showLink'    => false,
		// 'min'         => '',
		// 'max'         => '',
		// 'type'        => 'email',
		// 'required'    => true,
		// 'width'       => array( '100', '', '' ),
		// 'auto'        => '',
		// ),
		// 2 => array(
		// 'label'       => 'Message',
		// 'showLabel'   => true,
		// 'placeholder' => '',
		// 'default'     => '',
		// 'rows'        => 4,
		// 'options'     => array(),
		// 'multiSelect' => false,
		// 'inline'      => false,
		// 'showLink'    => false,
		// 'min'         => '',
		// 'max'         => '',
		// 'type'        => 'textarea',
		// 'required'    => true,
		// 'width'       => array( '100', '', '' ),
		// 'auto'        => '',
		// ),
		// );
		// }
		// $privacy_title = ( get_option( 'wp_page_for_privacy_policy' ) ? get_the_title( get_option( 'wp_page_for_privacy_policy' ) ) : '' );
		// foreach ( $form_args['fields'] as $key => $data ) {
		// check for required.
		// if ( $data['required'] && ( ! isset( $_POST[ 'kb_field_' . $key ] ) || empty( $_POST[ 'kb_field_' . $key ] ) ) ) {
		// $this->process_bail( $messages[0]['error'], __( 'Required Field Empty', 'premium-blocks' ), 'kb_field_' . $key );
		// }
		// if ( isset( $_POST[ 'kb_field_' . $key ] ) ) {
		// $fields[ $key ] = array(
		// 'type'  => $data['type'],
		// 'label' => str_replace( '{privacy_policy}', $privacy_title, $data['label'] ),
		// 'value' => $this->sanitize_field( $data['type'], wp_unslash( $_POST[ 'kb_field_' . $key ] ), $data['multiSelect'] ),
		// );
		// if ( 'hidden' === $data['type'] ) {
		// global $post;
		// $refer_id                = is_object( $post ) ? $post->ID : url_to_postid( wp_get_referer() );
		// $fields[ $key ]['value'] = str_replace( '{page_title}', get_the_title( $refer_id ), $fields[ $key ]['value'] );
		// $fields[ $key ]['value'] = str_replace( '{page_url}', wp_get_referer(), $fields[ $key ]['value'] );
		// }
		// unset( $_POST[ 'kb_field_' . $key ] );
		// }
		// }
		// $final_data = array(
		// 'redirect' => false,
		// );
		// foreach ( $form_args['actions'] as $data ) {
		// switch ( $data ) {
		// case 'email':
		// $to      = isset( $form_args['email'][0]['emailTo'] ) && ! empty( trim( $form_args['email'][0]['emailTo'] ) ) ? trim( $form_args['email'][0]['emailTo'] ) : get_option( 'admin_email' );
		// $subject = isset( $form_args['email'][0]['subject'] ) && ! empty( trim( $form_args['email'][0]['subject'] ) ) ? $form_args['email'][0]['subject'] : '[' . get_bloginfo( 'name' ) . ' ' . __( 'Submission', 'premium-blocks' ) . ']';
		// if ( strpos( $subject, '{field_' ) !== false ) {
		// preg_match_all( '/{field_(.*?)}/', $subject, $match );
		// if ( is_array( $match ) && isset( $match[1] ) && is_array( $match[1] ) ) {
		// foreach ( $match[1] as $field_id ) {
		// if ( isset( $field_id ) ) {
		// $real_id = absint( $field_id ) - 1;
		// if ( isset( $fields[ $real_id ] ) && is_array( $fields[ $real_id ] ) && isset( $fields[ $real_id ]['value'] ) ) {
		// $subject = str_replace( '{field_' . $field_id . '}', $fields[ $real_id ]['value'], $subject );
		// }
		// }
		// }
		// }
		// }
		// if ( strpos( $subject, '{page_title}' ) !== false ) {
		// global $post;
		// $refer_id = is_object( $post ) ? $post->ID : url_to_postid( wp_get_referer() );
		// $subject  = str_replace( '{page_title}', get_the_title( $refer_id ), $subject );
		// }
		// $email_content = '';
		// $reply_email   = false;
		// foreach ( $fields as $key => $data ) {
		// if ( 'email' === $data['type'] ) {
		// $reply_email = $data['value'];
		// }
		// }
		// if ( isset( $form_args['email'][0]['replyTo'] ) && 'from_email' === $form_args['email'][0]['replyTo'] ) {
		// $reply_email = isset( $form_args['email'][0]['fromEmail'] ) && ! empty( trim( $form_args['email'][0]['fromEmail'] ) ) ? sanitize_email( trim( $form_args['email'][0]['fromEmail'] ) ) : false;
		// }
		// if ( $form_args['email'][0]['html'] ) {
		// $args          = array( 'fields' => $fields );
		// $email_content = premium_blocks_get_template_html( 'form-email.php', $args );
		// } else {
		// foreach ( $fields as $key => $data ) {
		// if ( is_array( $data['value'] ) ) {
		// $data['value'] = explode( ', ', $data['value'] );
		// }
		// $email_content .= $data['label'] . ': ' . $data['value'] . "\n\n";
		// }
		// }
		// $body = $email_content;
		// if ( $form_args['email'][0]['html'] ) {
		// $headers = 'Content-Type: text/html; charset=UTF-8' . "\r\n";
		// } else {
		// $headers = 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
		// }
		// if ( $reply_email ) {
		// $headers .= 'Reply-To: <' . $reply_email . '>' . "\r\n";
		// }
		// if ( isset( $form_args['email'][0]['fromEmail'] ) && ! empty( trim( $form_args['email'][0]['fromEmail'] ) ) ) {
		// $from_name = ( isset( $form_args['email'][0]['fromName'] ) && ! empty( trim( $form_args['email'][0]['fromName'] ) ) ? trim( $form_args['email'][0]['fromName'] ) . ' ' : '' );
		// if ( strpos( $from_name, '{field_' ) !== false ) {
		// preg_match_all( '/{field_(.*?)}/', $from_name, $match );
		// if ( is_array( $match ) && isset( $match[1] ) && is_array( $match[1] ) ) {
		// foreach ( $match[1] as $field_id ) {
		// if ( isset( $field_id ) ) {
		// $real_id = absint( $field_id ) - 1;
		// if ( isset( $fields[ $real_id ] ) && is_array( $fields[ $real_id ] ) && isset( $fields[ $real_id ]['value'] ) ) {
		// $from_name = str_replace( '{field_' . $field_id . '}', $fields[ $real_id ]['value'], $from_name );
		// }
		// }
		// }
		// }
		// }
		// $headers .= 'From: ' . $from_name . '<' . sanitize_email( trim( $form_args['email'][0]['fromEmail'] ) ) . '>' . "\r\n";
		// }
		// $cc_headers = '';
		// if ( isset( $form_args['email'][0]['cc'] ) && ! empty( trim( $form_args['email'][0]['cc'] ) ) ) {
		// $cc_headers = 'Cc: ' . sanitize_email( trim( $form_args['email'][0]['cc'] ) ) . "\r\n";
		// }

		// wp_mail( $to, $subject, $body, $headers . $cc_headers );
		// if ( isset( $form_args['email'][0]['bcc'] ) && ! empty( trim( $form_args['email'][0]['bcc'] ) ) ) {
		// $bcc_emails = explode( ',', $form_args['email'][0]['bcc'] );
		// foreach ( $bcc_emails as $bcc_email ) {
		// wp_mail( sanitize_email( trim( $bcc_email ) ), $subject, $body, $headers );
		// }
		// }
		// break;
		// case 'redirect':
		// if ( isset( $form_args['redirect'] ) && ! empty( trim( $form_args['redirect'] ) ) ) {
		// $final_data['redirect'] = apply_filters( 'premium_blocks_form_redirect', trim( $form_args['redirect'] ), $form_args, $fields, $form_id, $post_id );
		// }
		// break;
		// case 'mailerlite':
		// $api_key = get_option( 'premium_blocks_mailerlite_api' );
		// if ( empty( $api_key ) ) {
		// return;
		// }
		// $mailerlite_default = array(
		// 'map'    => array(),
		// 'groupe' => '',
		// );
		// $mailerlite_args    = ( isset( $form_args['mailerlite'] ) && is_array( $form_args['mailerlite'] ) && isset( $form_args['mailerlite'][0] ) && is_array( $form_args['mailerlite'][0] ) ? $form_args['mailerlite'][0] : $mailerlite_default );
		// $groups             = ( isset( $mailerlite_args['group'] ) ? $mailerlite_args['group'] : array() );
		// $map                = ( isset( $mailerlite_args['map'] ) && is_array( $mailerlite_args['map'] ) ? $mailerlite_args['map'] : array() );
		// $body               = array(
		// 'fields' => array(),
		// );
		// $email              = false;
		// if ( ! empty( $map ) ) {
		// foreach ( $fields as $key => $data ) {
		// if ( isset( $map[ $key ] ) && ! empty( $map[ $key ] ) ) {
		// if ( 'email' === $map[ $key ] && ! $email ) {
		// $email         = $data['value'];
		// $body['email'] = $data['value'];
		// } else {
		// $body['fields'][ $map[ $key ] ] = $data['value'];
		// }
		// }
		// }
		// } else {
		// foreach ( $fields as $key => $data ) {
		// if ( 'email' === $data['type'] ) {
		// $email         = $data['value'];
		// $body['email'] = $data['value'];
		// break;
		// }
		// }
		// }
		// if ( empty( $body['fields'] ) ) {
		// unset( $body['fields'] );
		// }
		// if ( ! empty( $groups ) && is_array( $groups ) && isset( $groups[0] ) && ! empty( $groups[0] ) ) {
		// $group_id = $groups[0];
		// }
		// $body['resubscribe'] = true;
		// if ( isset( $body['email'] ) ) {
		// if ( ! empty( $group_id ) ) {
		// $api_url = 'https://api.mailerlite.com/api/v2/groups/' . $group_id . '/subscribers';
		// } else {
		// $api_url = 'https://api.mailerlite.com/api/v2/subscribers';
		// }
		// $response = wp_remote_post(
		// $api_url,
		// array(
		// 'method'  => 'POST',
		// 'timeout' => 10,
		// 'headers' => array(
		// 'accept'       => 'application/json',
		// 'content-type' => 'application/json',
		// 'X-MailerLite-ApiKey' => $api_key,
		// ),
		// 'body'    => json_encode( $body ),
		// )
		// );

		// if ( is_wp_error( $response ) ) {
		// $error_message = $response->get_error_message();
		// error_log( "Something went wrong: $error_message" );
		// } else {
		// if ( ! isset( $response['response'] ) || ! isset( $response['response']['code'] ) ) {
		// error_log( __( 'No Response from MailerLite', 'premium-blocks' ) );
		// }
		// if ( 400 === $response['response']['code'] ) {
		// error_log( print_r( $response['response'], true ) );
		// $this->process_bail( $response['response']['message'] . ' ' . __( 'MailerLite Misconfiguration', 'premium-blocks' ), __( 'MailerLite Failed', 'premium-blocks' ) );
		// }
		// }
		// }
		// break;
		// case 'fluentCRM':
		// $fluentcrm_default = array(
		// 'map'         => array(),
		// 'lists'       => array(),
		// 'tags'        => array(),
		// 'doubleOptin' => false,
		// );
		// $fluentcrm_args    = ( isset( $form_args['fluentcrm'] ) && is_array( $form_args['fluentcrm'] ) && isset( $form_args['fluentcrm'][0] ) && is_array( $form_args['fluentcrm'][0] ) ? $form_args['fluentcrm'][0] : $fluentcrm_default );
		// $map               = ( isset( $fluentcrm_args['map'] ) && is_array( $fluentcrm_args['map'] ) ? $fluentcrm_args['map'] : array() );
		// $double_optin      = ( isset( $fluentcrm_args['doubleOptin'] ) ? $fluentcrm_args['doubleOptin'] : false );
		// $fluent_data       = array();
		// $lists             = ( isset( $fluentcrm_args['lists'] ) ? $fluentcrm_args['lists'] : array() );
		// $tags              = ( isset( $fluentcrm_args['tags'] ) ? $fluentcrm_args['tags'] : array() );
		// if ( $double_optin ) {
		// $fluent_data['status'] = 'pending';
		// } else {
		// $fluent_data['status'] = 'subscribed';
		// }
		// if ( ! empty( $lists ) ) {
		// $fluent_data['lists'] = array();
		// foreach ( $lists as $key => $data ) {
		// $fluent_data['lists'][] = $data['value'];
		// }
		// }
		// if ( ! empty( $tags ) ) {
		// $fluent_data['tags'] = array();
		// foreach ( $tags as $key => $data ) {
		// $fluent_data['tags'][] = $data['value'];
		// }
		// }
		// $email = false;
		// if ( ! empty( $map ) ) {
		// foreach ( $fields as $key => $data ) {
		// if ( isset( $map[ $key ] ) && ! empty( $map[ $key ] ) ) {
		// if ( 'email' === $map[ $key ] && ! $email ) {
		// $email                = $data['value'];
		// $fluent_data['email'] = $data['value'];
		// } else {
		// $fluent_data[ $map[ $key ] ] = $data['value'];
		// }
		// }
		// }
		// } else {
		// foreach ( $fields as $key => $data ) {
		// if ( 'email' === $data['type'] ) {
		// $fluent_data['email'] = $data['value'];
		// break;
		// }
		// }
		// }
		// if ( isset( $fluent_data['email'] ) && ! empty( $fluent_data['email'] ) && function_exists( 'FluentCrmApi' ) ) {
		// $contact_api = FluentCrmApi( 'contacts' );
		// $contact     = $contact_api->createOrUpdate( $fluent_data );
		// if ( $double_optin && 'pending' === $contact->status ) {
		// $contact->sendDoubleOptinEmail();
		// }
		// }
		// break;
		// }
		// }
		// do_action( 'premium_blocks_form_submission', $form_args, $fields, $form_id, $post_id );

		// $success  = apply_filters( 'premium_blocks_form_submission_success', true, $form_args, $fields, $form_id, $post_id );
		// $messages = apply_filters( 'premium_blocks_form_submission_messages', $messages );
		// if ( ! $success ) {
		// $this->process_bail( $messages[0]['error'], __( 'Third Party Failed', 'premium-blocks' ) );
		// } else {
		// $final_data['html'] = '<div class="premium-blocks-form-message premium-blocks-form-success">' . $messages[0]['success'] . '</div>';
		// $this->send_json( $final_data );
		// }
		// } else {
		// $this->process_bail( __( 'Submission rejected, invalid security token. Reload the page and try again.', 'premium-blocks' ), __( 'Token invalid', 'premium-blocks' ) );
		// }
		// } else {
		// $this->process_bail( __( 'Submission failed', 'premium-blocks' ), __( 'No Data Found', 'premium-blocks' ) );
		// }
	}
	/**
	 * Sanitize the field
	 *
	 * @param string $field_type the field type.
	 * @param mixed  $value the field value.
	 */
	private function sanitize_field($field_type, $value, $multi_select = false)
	{
		switch ($field_type) {
			case 'text':
			case 'tel':
			case 'password':
			case 'hidden':
			case 'search':
			case 'select':
				$value = ($multi_select && is_array($value) ? sanitize_text_field(implode(', ', $value)) : sanitize_text_field($value));
				break;
			case 'checkbox':
				$value = (is_array($value) ? sanitize_text_field(implode(', ', $value)) : sanitize_text_field($value));
				break;
			case 'radio':
				$value = (is_array($value) ? sanitize_text_field(implode(', ', $value)) : sanitize_text_field($value));
				break;
			case 'url':
				$value = esc_url_raw(trim($value));
				break;
			case 'textarea':
				$value = sanitize_textarea_field($value);
				break;
			case 'email':
				$value = sanitize_email(trim($value));
				break;
			case 'accept':
				$value = esc_html__('Accept', 'premium-blocks');
				break;
			default:
				/**
				 * Sanitize field value.
				 * Filters the value of the form field for sanitization purpose.
				 * The dynamic portion of the hook name, `$field_type`, refers to the field type.
				 *
				 * @param string $value The field value.
				 */
				$value = apply_filters("premium_blocks_form_sanitize_{$field_type}", $value);
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
	public function process_bail($error, $note, $required = null)
	{
		$notices                  = array();
		$notices['error']['note'] = $error;
		$out                      = array(
			'html'     => $this->html_from_notices($notices),
			'console'  => $note,
			'required' => $required,
		);
		$this->send_json($out, true);
	}

	/**
	 * Create HTML string from notices
	 *
	 * @param array $notices Notices to display.
	 *
	 * @return string
	 */
	public function html_from_notices($notices = array())
	{
		$html = '';
		foreach ($notices as $note_type => $notice) {
			if (!empty($notice['note'])) {
				$html .= '<div class="premium-blocks-form-message premium-blocks-form-warning">' . $notice['note'] . '</div>';
			}
		}

		return $html;
	}
	/**
	 * Starts a flushable buffer
	 */
	public function start_buffer()
	{
		if (!did_action('premium_blocks_forms_buffer_started')) {

			ob_start();

			/**
			 * Runs when buffer is started
			 *
			 * Used to prevent starting buffer twice
			 */
			do_action('premium_blocks_forms_buffer_started');
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
	public function send_json($data = array(), $is_error = false)
	{

		$buffer = ob_get_clean();
		/**
		 * Runs before Premium Blocks Forms returns json via wp_send_json() exposes output buffer
		 *
		 * @param string|null $buffer Buffer contents
		 * @param bool $is_error If we think this is an error response or not.
		 */
		do_action('premium_blocks_forms_buffer_flushed', $buffer, $is_error);
		$data['headers_sent'] = headers_sent();
		if (!$is_error) {
			// status_header( 200 );
			$data['success']      = true;
			$data['show_message'] = true;
			wp_send_json($data);
		} else {
			wp_send_json_error($data);
		}
		return $buffer;
	}
	/**
	 * Get form args
	 *
	 * @param string $content the post content.
	 */
	public function parse_blocks($content)
	{
		$parser_class = apply_filters('block_parser_class', 'WP_Block_Parser');
		if (class_exists($parser_class)) {
			$parser = new $parser_class();
			return $parser->parse($content);
		} elseif (function_exists('gutenberg_parse_blocks')) {
			return gutenberg_parse_blocks($content);
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
	private function get_form_args()
	{
		$form_args=array(
			
		)
		return $form_args;
	}
	/**
	 * Get form args
	 *
	 * @param array  $blocks the post inner blocks.
	 * @param string $form_id the form Id.
	 */
	private function parse_inner_blocks($blocks, $form_id)
	{
		$form_args = false;
		foreach ($blocks as $indexkey => $block) {
			if ('premium/newsletter' === $block['blockName']) {
				if (isset($block['attrs']) && is_array($block['attrs']) && isset($block['attrs']['uniqueID']) && $form_id === $block['attrs']['uniqueID']) {
					$form_args = $block['attrs'];
					break;
				}
			}
		}
		return $form_args;
	}
}
PBG_Ajax_Form::get_instance();
