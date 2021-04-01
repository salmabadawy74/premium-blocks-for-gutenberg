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
	 * @since 1.8.8
	 */
	class PBG_Lottie {

		/**
		 * Member Variable
		 *
		 * @since 1.8.8
		 * @var instance
		 */
		private static $instance;

		private static $grid_settings;

		/**
		 *  Initiator
		 *
		 * @since 1.8.8
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
		 * @since 1.8.8
		 */
		public function __construct() {
			// Activation hook.
			$this->register_blocks();
			add_action( 'wp_footer', array( $this, 'render_lottie_script' ), 1000 );

		}
		/**
		 * Registers the `PBG/lottie` block on server.
		 *
		 * @since 1.8.8
		 */

		public function register_blocks() {

			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}
			register_block_type(
				'premium/lottie',
				array(
					'attributes'      => array(
						'block_id'     => array(
							'type' => 'string',
						),
						'lottieURl'    => array(
							'type'    => 'string',
							'default' => '',
						),
						'lottieJson'   => array(
							'type' => 'object',
						),
						// Controls.
						'loop'         => array(
							'type'    => 'boolean',
							'default' => true,
						),
						'speed'        => array(
							'type'    => 'number',
							'default' => 1,
						),
						'reverse'      => array(
							'type'    => 'boolean',
							'default' => false,
						),

						'trigger'      => array(
							'type'    => 'string',
							'default' => 'none',
						),
						'top'          => array(
							'type'    => 'number',
							'default' => '0',
						),
						'bottom'       => array(
							'type'    => 'number',
							'default' => '0',
						),
						// Style.
						'size'         => array(
							'type' => 'number',
						),
						'render'       => array(
							'type'    => 'string',
							'default' => 'svg',
						),
						'rotate'       => array(
							'type'    => 'number',
							'default' => 0,
						),
						'align'        => array(
							'type'    => 'string',
							'default' => 'center',
						),
						'link'         => array(
							'type'    => 'boolean',
							'default' => false,
						),
						'url'          => array(
							'type' => 'string',
						),
						'backColor'    => array(
							'type' => 'string',
						),
						'backOpacity'  => array(
							'type'    => 'number',
							'default' => 1,
						),
						'blur'         => array(
							'type'    => 'number',
							'default' => 0,
						),
						'bright'       => array(
							'type'    => 'number',
							'default' => 100,
						),
						'contrast'     => array(
							'type'    => 'number',
							'default' => 100,
						),
						'saturation'   => array(
							'type'    => 'number',
							'default' => '100',
						),
						'hue'          => array(
							'type'    => 'number',
							'default' => 0,
						),
						'borderType'   => array(
							'type'    => 'string',
							'default' => 'none',
						),
						'borderWidth'  => array(
							'type'    => 'number',
							'default' => 0,
						),
						'borderColor'  => array(
							'type' => 'string',
						),
						'borderRadius' => array(
							'type'    => 'number',
							'default' => 0,
						),
						'paddingT'     => array(
							'type'    => 'number',
							'default' => 0,
						),
						'paddingR'     => array(
							'type'    => 'number',
							'default' => 0,
						),
						'paddingB'     => array(
							'type'    => 'number',
							'default' => 0,
						),
						'paddingL'     => array(
							'type'    => 'number',
							'default' => 0,
						),
						'paddingU'     => array(
							'type'    => 'string',
							'default' => 'px',
						),

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
		 * @since 1.8.8
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
			$main_id      = array(
				'premium-lottie-animation-' . $block_id,
			);
			ob_start();

			?>
			  <div class = "<?php echo esc_attr( implode( ' ', $main_classes ) ); ?>" >
				<div id="<?php echo esc_attr( implode( ' ', $main_id ) ); ?>"  class="premium-lottie-animation">
					<?php
					if ( $attributes['link'] ) {
						?>
						<a href='<?php echo esc_html( $attributes['url'] ); ?>'></a>
						<?php
					}
					?>
				</div>
			</div>

			<?php
			return ob_get_clean();
		}

		public function render_lottie_script() {
			// if ( ! isset( self::$grid_settings['lottie'] ) ) {
			foreach ( self::$grid_settings['lottie'] as $key => $value ) {
				?>

			<script id="Lottie-script" type="text/javascript">

			jQuery( document ).ready( function( $ ) {

				var lottieContainer= document.querySelector('.premium-lottie-wrap-<?php echo esc_html( $value['block_id'] ); ?>');
				var setSpeed = <?php echo esc_html( $value['speed'] ); ?>;
				var tigger = <?php echo esc_html( $value['trigger'] ); ?>;
				var loop = '<?php echo esc_html( $value['loop'] ); ?>' ;
				var path ='<?php echo esc_html( $value['lottieURl'] ); ?>';
				var render ='<?php echo esc_html( $value['render'] ); ?>' ;
				var reverse = <?php echo esc_html( $value['reverse'] ); ?> ;

				var animation = bodymovin.loadAnimation({
				container: document.getElementById('premium-lottie-animation-<?php echo esc_html( $value['block_id'] ); ?>'),
				renderer:render || 'svg',
				loop: Boolean( loop ),
				autoplay: Boolean(trigger ==='none' ) ,
				path:path ,
				rendererSettings: {
					preserveAspectRatio: 'xMidYMid',
					className:"premium-lottie-inner"
				},
			})

			animation.setSpeed(setSpeed)

			const reversedir = Boolean( reverse ) ? -1 : 1

			animation.setDirection(reversedir)
			animation.addEventListener('DOMLoaded', function () {
				if (scroll || viewPort) {
					animation.pause();
				}


			})

			function initLottie(event) {
					// function visible(selector, partial, hidden) {

					var vpHeight = $(window).outerHeight(),
						clientSize = true;

						if (typeof $layer[0].getBoundingClientRect === "function") {

						var rec = lottieContainer.getBoundingClientRect();

						var tViz = rec.top >= 0 && rec.top < vpHeight,
							bViz = rec.bottom > 0 && rec.bottom <= vpHeight,
							vVisible = false ? tViz || bViz : tViz && bViz,
							vVisible = rec.top < 0 && rec.bottom > vpHeight ? true : vVisible;
							clientSize && vVisible ? animItem.play() : animItem.pause();
						}

				}

			if( 'hover' === '<?php echo esc_html( $value['trigger'] ); ?>'){
				lottieContainer.addEventListener("mouseenter", function() {
					animation.play()
				});
				lottieContainer.addEventListener("mouseleave", function() {
					animation.stop()
				});

			}
			else if ( 'scroll' ==='<?php echo esc_html( $value['trigger'] ); ?>') {
				window.addEventListener("scroll", function() {
					animation.play();
				});
			}
			else if ( 'viewport' ==='<?php echo esc_html( $value['trigger'] ); ?>') {
				window.addEventListener("scroll", function() {
				 var elementHeight=document.querySelector('.premium-lottie-inner').clientHeight;
				 var top=<?php echo esc_html( $value['top'] ); ?>;
				 var bottom=<?php echo esc_html( $value['bottom'] ); ?>;
				 var scrollHeight=document.documentElement.scrollHeight;
				 var scrollTop=document.documentElement.scrollTop;
				 var pageRange=document.documentElement.clientHeight;
				 var precentage= (scrollTop*100) /scrollHeight;
				 var pageEnd=((scrollTop+pageRange)*100)/scrollHeight;

				 if('<?php echo esc_html( $value['bottom'] ); ?>' < precentage && pageEnd < '<?php echo esc_html( $value['top'] ); ?>'  ){
					animation.play();
				 }
				 else{
					animation.stop();
				 }
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
