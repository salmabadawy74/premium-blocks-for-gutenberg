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

			add_action( 'init', array( $this, 'register_blocks' ) );

			add_action( 'wp_ajax_subscribe_newsletter', array( $this, 'subscribe_newsletter' ) );
			add_action( 'wp_ajax_nopriv_subscribe_newsletter', array( $this, 'subscribe_newsletter' ) );
			 add_action( 'wp_footer', array( $this, 'add_post_dynamic_script' ), 1000 );
		}

		// Check if the register function exists.
		public function register_blocks() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}
			$common_attributes = $this->get_post_attributes();
			register_block_type(
				'premium/newsletter',
				array(
					'attributes'      => $common_attributes,
					'render_callback' => array( $this, 'post_callback' ),
				)
			);
		}
		/**
		 * Get Post common attributes
		 *
		 * @since 0.0.1
		 */
		public function get_post_attributes() {
			return array(
				'block_id'        => array(
					'type'    => 'string',
					'default' => 'not-set',
				),
				'api'             => array(
					'type'    => 'string',
					'default' => '',
				),
				'list_id'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'success_message' => array(
					'type'    => 'string',
					'default' => '',
				),
				'error_message'   => array(
					'type'    => 'string',
					'default' => '',
				),
				'columnGap'       => array(
					'type'    => 'number',
					'default' => 0,
				),
				'rowGap'          => array(
					'type'    => 'number',
					'default' => 10,
				),
				'eMail'           => array(
					'type' => 'string',
				),
				'inputStyles'     => array(
					'type'    => 'array',
					'default' => array(
						array(
							'showLabel'        => true,
							'label'            => __( 'Email' ),
							'placeholder'      => __( 'Email' ),
							'required'         => true,
							'inputColumnWidth' => '100',
						),
					),
				),
			);
		}
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
		public function get_post_html( $attributes ) {
			$id     = 'premium-newsLetter-' . $attributes['block_id'];
			$column = array(
				'premium-newsletter-input__wrapper',
				'col-' . $attributes['inputStyles'][0]['inputColumnWidth'],
			);
			?>
			 <div
			 id="<?php echo esc_html( $id ); ?>"
			  class="premium-newsletter__wrapper ">
			<div class="<?php echo esc_html( implode( ' ', $column ) ); ?>">
			  <?php if ( $attributes['inputStyles'][0]['showLabel'] ) : ?>
				<label for="form-field-email" class="premium-newsletter__label"><?php $attributes['inputStyles'][0]['label']; ?></label>
				<?php endif; ?>
				<input class="premium-newsletter-input" type="email" value="<?php echo esc_html( $attributes['eMail'] ); ?>" name="form_fields[email]" id="pa_news_email" class="" placeholder="Email" required="required" aria-required="true" />				</div>
			<div class="premium-newsletter-button__wrapper">
				<button type="submit" class="premium-newsletter-button-submit" id="submit-newsletter">
					<span class="">Submit</span>
				</button>
			</div>
		</div>
			<?php
		}

		/**
		 * Render Posts HTML
		 *
		 * @param object $query WP_Query object.
		 * @param array  $attributes Array of block attributes.
		 * @since 1.18.1
		 */
		public function subscribe_newsletter( $attributes ) {

			$email = $attributes['eMail'];
			if ( empty( $email ) ) {
				return false;
			}

			if ( ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
				return false;
			}
			$apikey  = $attributes['api'];
			$list_id = $attributes['list_id'];
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
				echo json_encode( $results );

		}
		/**
		 * Render Script of the block.
		 *
		 * @since 0.0.1
		 */
		public function add_post_dynamic_script() {

			foreach ( self::$newsletter_settings as $key => $value ) {
				?>
				<script type="text/javascript" id="NewsLetter">
					jQuery( document ).ready( function( $ ) {
				 $('.premium-newsletter-button-submit').on('click', function (e) {
					e.preventDefault();
					var email = $("#pa_news_email").val();
					console.log(email)
					if (checkEmail(email)) {
						$.ajax(
							{
								url: settings.ajaxurl,
								type: 'POST',
								data: {
									action: 'subscribe_newsletter',
									security: settings.nonce,
									attributes:<?php array( $value['api'], $value['list_id'], $value['eMail'] ); ?>
								},
								success: function (response) {
										
									
								  
					$value['success_message']="Thank you for submitting Form"
								},
								error: function (err) {
									console.log("err", err);
								}
							}
						);
						} else {
						
						}

					})
				function checkEmail(emailAddress) {
					var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
					return pattern.test(emailAddress);
				}
			})
					</script>
				<?php
			}
		}
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

