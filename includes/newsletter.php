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
                "premium/newsletter",
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
                'block_id'                    => array(
                    'type'    => 'string',
                    'default' => '',
                ),
                'api'                  => array(
                    'type' => 'string',
                    'default' =>''
                ),
                'list_id'                  => array(
                    'type'    => 'string',
                    'default' => '',
                ),
                'success_message'                  => array(
                    'type'    => 'string',
                    'default' => '',
                ),
                'error_message'                 => array(
                    'type'    => 'string',
                    'default' => '',
                ),
                'columnGap'          => array(
                    'type'    => 'number',
                    'default' => 0,
                ),
                'rowGap'             => array(
                    'type'    => 'number',
                    'default' => 10,
                ),
                'inputStyles'         =>array(
                    'type'=>'array',
                    'default'=>array(
                       array(
                           'rowGap'=>'10',
                           'columns'=>'1',
                           'error_message'=>''

                       )
                    )
                )
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
            var_dump($attributes['inputStyles'][0]["rowGap"]);
            ob_start();
            $this->get_post_html( $attributes);
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
        public function get_post_html( $attributes) {
            $id="premium-newsLetter-" . $attributes["block_id"];
           
             ?>
             <div
             id="<?php echo esc_html( implode( ' ', $outerwrap ) ); ?>"
              class="premium-newsletter__wrapper ">
            <div class="premium-newsletter-input__wrapper">
                <label for="form-field-email" class=" premium-newsletter__label">Email</label>
                <input class={`premium-newsletter-input`} type="email" name="form_fields[email]" id="pa_news_email" class="" placeholder="Email" required="required" aria-required="true" />				</div>
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
    public function subscribe_newsletter() {

		$email ="salma.ehacccb@google.com";
        if ( empty( $email ) ) {
            return 4;
        }
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return false;
        }
        
        $apikey  = 'a53946fe4bfb630bac6432d2fc0ea00e-us20';
        $list_id = '8286186162';
        $status  = false;
        if ( $email && $apikey && $list_id ) {
            $root = 'https://api.mailchimp.com/3.0';
            if ( strstr( $apikey, '-' ) ) {
                list( $key, $dc ) = explode( '-', $apikey, 2 );
            }
            $root = str_replace( 'https://api', 'https://' . $dc . '.api', $root );
            $root = rtrim( $root, '/' ) . '/';
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
           
            $results = curl_exec($ch); // store response
            $response = curl_getinfo($ch, CURLINFO_HTTP_CODE); // get HTTP CODE
            $errors = curl_error($ch); // store errors
           
            }
	
                $results = array(
                'results' => $result_info,
                'response' => $response,
                'errors' => $errors
            );

             // Sends data back to the page OR the ajax() in your JS
            echo json_encode($results);
	
    }
      
        
      
        /**
         * Render Post Meta - Date HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.14.0
         */
       
        /**
         * Render Post Meta - Comment HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.14.0
         */

        /**
         * Render Post Meta - Comment HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.14.0
         */
        
        /**
         * Render Post Meta HTML.
         *
         * @param array $attributes Array of block attributes.
         */
        
            /****
             *
             *
             * Render The Post Title
             *
             * @param array $attributes Array of block attributes.
             */
       
        /**
         * Render Post Excerpt HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 0.0.1
         */
       
        /**
         * Render Script of the block.
         *
         * @since 0.0.1
         */
        public function add_post_dynamic_script() {
        
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
                                    email: email
                                },
                                success: function (response) {
                                            swal({
                                                title: 'Thanks for subscribing!',
                                                text: 'Click OK to continue',
                                                type: 'success'
                                            });
                                    
                                  

                                },
                                error: function (err) {
                                    console.log("err", err);
                                }
                            }
                        );
                        } else {
                            swal({
                                type: 'error',
                                title: 'Invalid Email Address...',
                                text: 'Please enter a valid email address!'
                            });
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

