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
            // add_action( 'wp_footer', array( $this, 'add_post_dynamic_script' ), 1000 );
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
            
            ob_start();
            $this->get_post_html( $attributes, $query );
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
             ?><div className="premium-newsletter__wrapper">
            <div className="premium-newsletter-input__wrapper">
                <label for="form-field-email" className=" premium-newsletter__label">Email</label>
                <input className={`premium-newsletter-input`} type="email" name="form_fields[email]" id="pa_news_email" className="" placeholder="Email" required="required" aria-required="true" />				</div>
            <div className="premium-newsletter-button__wrapper">
                <button type="submit" className="premium-newsletter-button-submit" id="submit-newsletter">
                    <span className="">Submit</span>
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

		$email =$attributes['email'];
        if ( empty( $email ) ) {
            return false;
        }
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
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
            $response_body = curl_exec( $ch );
            $httpCode      = curl_getinfo( $ch, CURLINFO_HTTP_CODE );
            curl_close( $ch );
            if ( $httpCode == 200 ) {
                $status = true;
            }
        }
	
        $response = array(
            'status'  => $status,
        );
	    return $response;
	
    }
        // public function post_pagination() {
        //     if ( isset( $_POST['attributes'] ) ) {
        //         $query             = PBG_Blocks_Helper::get_query_posts( $_POST['attributes'] );
        //         $pagination_markup = $this->render_pagination( $query, $_POST['attributes'] );
        //         wp_send_json_success( $pagination_markup );
        //     }
        //     wp_send_json_error( ' No attributes recieved' );
        // }
        // public function render_pagination( $query, $attributes ) {
        //     $paged      = PBG_Blocks_Helper::get_paged( $query );
        //     $page_limit = min( $attributes['pageLimit'], $query->max_num_pages );
        //     $page_limit = isset( $page_limit ) ? $page_limit : $attributes['postsToShow'];
        //     $attributes['numOfPosts'];
        //     $links = paginate_links(
        //         array(
        //             'current' => ( ! $paged ) ? 1 : $paged,
        //             'total'   => $page_limit,
        //             'type'    => 'array',
        //         )
        //     );
        //     if ( isset( $links ) ) {
        //         return wp_kses_post( implode( PHP_EOL, $links ) );
        //     }
        //     return '';
        // }

        /**
         * Render Post Meta - Author HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.14.0
         */
        public function render_meta_author( $attributes ) {
            if ( ! $attributes['displayPostAuthor'] ) {
                return;
            }
            ?>
            <span class="premium-blog-post-author premium-blog-meta-data">
                <span class="dashicons-admin-users dashicons"></span>
                <?php the_author_posts_link(); ?>
            </span>
            <span class="premium-blog-meta-separtor">.</span>
            <?php
        }
        /**
         * Render Post Meta - Date HTML.
         *
         * @param array $attributes Array of block attributes.
         *
         * @since 1.14.0
         */
        public function render_meta_date( $attributes ) {
            if ( ! $attributes['displayPostDate'] ) {
                return;
            }
            global $post;
            ?>
            <div class="premium-blog-post-time premium-blog-meta-data">
            <time datetime="<?php echo esc_attr( get_the_date( 'c', $post->ID ) ); ?>"
                class="premium-blog-post-time premium-blog-meta-data">
                <span class="dashicons-calendar dashicons"></span>
                <?php echo esc_html( get_the_date( '', $post->ID ) ); ?>
            </time>
            <span class="premium-blog-meta-separtor">.</span>
            </div>
            <?php
        }
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
            if ( isset( self::$grid_settings['masonry'] ) && ! isset( self::$grid_settings['carousel'] ) ) {
                foreach ( self::$grid_settings['masonry'] as $key => $value ) {
                    ?>
                    <script type="text/javascript" id="Post_Masnory">
                    jQuery( document ).ready( function( $ ) {
                $( '.premium-blog-wrap' ).each( function() {    
                    var selector    = $(this);
                var masonryArgs = {
                    itemSelector    : '.premium-blog-post-outer-container',
                    percentPosition : true,
                    layoutMode      : 'masonry',
                };
                var $isotopeObj = {};
                selector.imagesLoaded( function() {
                    $isotopeObj = selector.isotope( masonryArgs );
                    $isotopeObj.imagesLoaded().progress(function() {
                        $isotopeObj.isotope("layout");
                    });
                    selector.find('.premium-blog-post-outer-container').resize( function() {
                        $isotopeObj.isotope( 'layout' );
                                    });
                                });
                });
                });
                    </script>
                    <?php
                }
            }
            if ( isset( self::$grid_settings['carousel'] ) ) {

                foreach ( self::$grid_settings['carousel'] as $key => $value ) {
                    $dots          = ( 'dots' === $value['navigationDots'] || 'arrows_dots' === $value['navigationDots'] ) ? true : false;
                    $arrows        = ( 'arrows' === $value['navigationArrow'] || 'arrows_dots' === $value['navigationArrow'] ) ? true : false;
                    $tcolumns      = ( isset( $value['tcolumns'] ) ) ? $value['tcolumns'] : 2;
                    $mcolumns      = ( isset( $value['mcolumns'] ) ) ? $value['mcolumns'] : 1;
                    $slideToScroll = ( isset( $value['slideToScroll'] ) );
                    $is_rtl        = is_rtl();
                    ?>
                                <script type="text/javascript" id="Post_Carousel ">
                                
                                jQuery( document ).ready( function( $ ) {
                                    var cols = parseInt( '<?php echo esc_html( $value['columns'] ); ?>' );
                                    var $scope = $( '.premium-blog' ).find( '.premium-blog-wrap' );
                                    if ( cols >= $scope.children().length ) {
                                        return;
                                    }
                                    var setting = {
                                    'slidesToShow' :cols,
                                    'slidesToScroll' :<?php echo esc_html( $value['slideToScroll'] ); ?> ,
                                    'autoplaySpeed' : <?php echo esc_html( $value['autoplaySpeed'] ); ?>,
                                    'autoplay' : Boolean( '<?php echo esc_html( $value['Autoplay'] ); ?>' ),
                                    'arrows' : Boolean( '<?php echo esc_html( $value['navigationArrow'] ); ?>' ),
                                    'dots' : Boolean( '<?php echo esc_html( $value['navigationDots'] ); ?>' ),
                                    'centerMode' :  Boolean( '<?php echo esc_html( $value['centerMode'] ); ?>' ),       
                                    'responsive' : [
                                        {
                                            'breakpoint' : 1024,
                                            'settings' : {
                                                'slidesToShow' : <?php echo esc_html( $tcolumns ); ?> ,
                                                'slidesToScroll' : 1,
                                            }
                                        },
                                        {
                                            'breakpoint' : 767,
                                            'settings' : {
                                                'slidesToShow' :<?php echo esc_html( $mcolumns ); ?>,
                                                'slidesToScroll' : 1,
                                            }
                                        }
                                    ]
                                                    };
                                    $scope.imagesLoaded( function() {
                                    $scope.slick(
                                        setting
                                    );
                                    });
                                })
                                </script>
                
                    <?php
                }
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
    /**
     *  Prepare if class 'PBG_Post' exist.
     *  Kicking this off by calling 'get_instance()' method
     */
    PBG_NewsLetter::get_instance();
}

