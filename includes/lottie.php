<?php
/**
 * PBG - Lottie
 *
 * @package PBG_lottie
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'PBG_Lottie' ) ) {

	/**
	 * Class PBG_Lottie.
	 *
	 * @since 1.20.0
	 */
	class PBG_Lottie {

		/**
		 * Member Variable
		 *
		 * @since 1.20.0
		 * @var instance
		 */
		private static $instance;
        private static $grid_settings;

		/**
		 *  Initiator
		 *
		 * @since 1.20.0
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.20.0
		 */
		public function __construct() {
			// Activation hook.
            $this->register_blocks();
            add_action( 'wp_footer', array( $this, 'render_lottie_script' ), 1000 );

		}




		/**
		 * Registers the `PBG/lottie` block on server.
		 *
		 * @since 1.20.0
		 */


		public  function register_blocks() {

			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {

			}


			register_block_type(
				'premium/lottie',
				array(
					'attributes'      => array(
						'block_id'         => array(
							'type' => 'string',
						),
						'lottieURl'        => array(
							'type'    => 'string',
							'default' => '',
						),
						'lottieJson'       => array(
							'type' => 'object',
						),
						// Controls.
						'loop'             => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'speed'            => array(
							'type'    => 'number',
							'default' => 1,
						),
						'reverse'          => array(
							'type'    => 'boolean',
							'default' => false,
						),

						'trigger'           => array(
							'type'    => 'string',
							'default' => 'none',
						),
						// Style.
						'size'       => array(
							'type' => 'number',
						),
                        'render'       => array(
							'type' => 'string',
                            'default' => 'svg'
						),
                        'rotate'           => array(
							'type' => 'number',
                            'default' => 0
						),
						'backgroundColor'  => array(
							'type'    => 'string',
							'default' => '',
						),
						'backgroundHColor' => array(
							'type'    => 'string',
							'default' => ''
						),
                        'align' => array(
							'type'    => 'string',
							'default' => 'center'
						),
                        'link'          => array(
							'type'    => 'boolean',
							'default' => false
						),
                        'url'        =>array(
                            'type'  => 'string'
                        ),
                        'backColor'  =>array(
                            'type'  =>  'string'
                        ),
                        'backOpacity' =>array(
                            'type' => 'number',
                            'default' => 1
                        ),
                        'blur' =>  array(
                            'type' => 'number',
                            'default' =>0
                        ),
                        'bright' =>array(
                            'type' =>'number',
                            'default' =>100
                        ),
                        'contrast' =>array(
                            'type' =>'number',
                            'default' =>100
                        ),
                        'saturation' =>array(
                            'type'=>'number',
                            'default' =>'100'
                        ),
                        'hue' =>array(
                            'type' =>'number',
                            'default' =>0
                        ),
                        'borderType' =>array(
                            'type' =>'string',
                            'default'=>'none'
                        ),
                        'borderWidth' =>array(
                            'type' => 'number',
                            'default' => 0
                        ),
                        'borderColor' =>array(
                            'type' =>'string'
                        ),
                        'borderRadius' =>array(
                            'type' =>'number',
                            'default' =>0
                        ),
                        'paddingT' =>array(
                            'type' =>'number',
                            'default' =>0
                        ),
                        'paddingR' =>array(
                            'type' =>'number',
                            'default' =>0
                        ),
                        'paddingB' =>array(
                            'type' =>'number',
                            'default' =>0
                        ),
                        'paddingL' =>array(
                            'type' =>'number',
                            'default' =>0
                        ),
                        'paddingU' =>array(
                            'type' =>'string',
                            'default' =>'px'
                        )

					),
					'render_callback' => array( $this, 'render_html' ),
				)
			);
		}

		/**
		 * Render Lottie HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.20.0
		 */
		public static function render_html( $attributes ) {

			$block_id = '';

			if ( isset( $attributes['block_id'] ) ) {
				$block_id = $attributes['block_id'];
			}
            self::$grid_settings['lottie'][ $attributes['block_id'] ] = $attributes;

			$main_classes = array(
				'premium-lottie-' . $block_id,
				'premium-lottie-wrap',
			);
			ob_start();

	?>
  				<div class = "<?php echo esc_attr( implode( ' ', $main_classes ) ); ?>" >
                  <div class="premium-lottie-animation">
                  </div>
                  </div>


    <?php
				return ob_get_clean();
        }

        public function render_lottie_script()
        {
            // if ( ! isset( self::$grid_settings['lottie'] ) ) {
            foreach ( self::$grid_settings['lottie'] as $key => $value ) {
            ?>

            <script id="Lottie-script" type="text/javascript">

            jQuery( document ).ready( function( $ ) {
                var lottieContainer= document.querySelector('.premium-lottie-wrap');
                var animation = bodymovin.loadAnimation({
                container: document.querySelector('.premium-lottie-animation'),
                renderer:'<?php echo esc_html( $value['render'] ); ?>',
                loop: Boolean( '<?php echo esc_html( $value['loop'] ); ?>' ),
                autoplay: Boolean( '<?php echo esc_html( $value['trigger'] )  ==='none'? true : false  ?>' ) ,
                path:'<?php echo esc_html( $value['lottieURl'] ); ?>' ,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid',
                    className:"premium-lottie-inner"
                },

                })

                animation.setSpeed(<?php echo esc_html( $value['speed'] ); ?>)

            const reversedir = Boolean( <?php echo esc_html( $value['reverse'] ); ?> ) ? -1 : 1

            animation.setDirection(reversedir)

            if( 'hover' === '<?php echo esc_html( $value['trigger'] ); ?>'){
                lottieContainer.addEventListener("mouseenter", function() {
                    animation.play()
                });
                lottieContainer.addEventListener("mouseleave", function() {
                    animation.stop()
                });
            } else if ( 'click' === '<?php echo esc_html( $value['trigger'] ); ?>'){
                lottieContainer.addEventListener("click", function() {
                    animation.stop();
                    animation.play();



                });
            } else if ( 'scroll' ==='<?php echo esc_html( $value['trigger'] ); ?>') {
                window.addEventListener("scroll", function() {
                    animation.stop();
                    animation.play();
                });
            }
       })

         </script>
         <?php
        }

    }
}





	/**
	 *  Prepare if class 'PBG_Lottie' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	PBG_Lottie::get_instance();
}