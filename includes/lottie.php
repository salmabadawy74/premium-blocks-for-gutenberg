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
							'default' => '100',
						),
						'bottom'       => array(
							'type'    => 'number',
							'default' => '0',
						),
						'scrollSpeed'  => array(
							'type'    => 'number',
							'default' => '0',
						),
						// Style.
						'size'         => array(
							'type'    => 'number',
							'default' => '200',
						),
						'sizeTablet'   => array(
							'type'    => 'number',
							'default' => '200',
						),
						'sizeMobile'   => array(
							'type'    => 'number',
							'default' => '200',
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
						'target'       => array(
							'type'    => 'boolean',
							'default' => false,
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
			$wrap_class = array( 'premium-lottie-animation', 'premium-lottie-' . $attributes['render'] );

			ob_start();

			?>
			<div class="<?php echo esc_attr( implode( ' ', $main_classes ) ); ?>">
				<div id="<?php echo esc_attr( implode( ' ', $main_id ) ); ?>"  class="<?php echo esc_attr( implode( ' ', $wrap_class ) ); ?>"  >
					<?php
					if ( $attributes['link'] ) {
						?>
						<a target='<?php echo esc_html( $attributes['target'] ) ? '_blank' : '_self'; ?> ' href='<?php echo esc_html( $attributes['url'] ); ?>'></a>
						<?php
					}
					?>
				</div>
			</div>

			<?php
			return ob_get_clean();
		}

		public function render_lottie_script() {
			if ( isset( self::$grid_settings['lottie'] ) && ! empty( self::$grid_settings['lottie'] ) ) {
				foreach ( self::$grid_settings['lottie'] as $key => $value ) {
					?>

					<script id="Lottie-script" type="text/javascript">
						jQuery(document).ready(function($) {

							var lottieContainer = document.querySelector('.premium-lottie-<?php echo esc_html( $value['block_id'] ); ?>');
							var setSpeed = <?php echo esc_html( $value['speed'] ); ?>;
							var trigger = '<?php echo esc_html( $value['trigger'] ); ?>';
							var loop = '<?php echo esc_html( $value['loop'] ); ?>';
							var path = '<?php echo esc_html( $value['lottieURl'] ); ?>';
							var render = '<?php echo esc_html( $value['render'] ); ?>';
							var endEvent = '<?php echo esc_html( $value['top'] ); ?>';
							var startEvent = '<?php echo esc_html( $value['bottom'] ); ?>';
							var scrollSpeed = '<?php echo esc_html( $value['scrollSpeed'] ); ?>';
							var reverse = Boolean(<?php echo esc_html( $value['reverse'] ); ?>);
							var animation = bodymovin.loadAnimation({
								container: document.getElementById('premium-lottie-animation-<?php echo esc_html( $value['block_id'] ); ?>'),
								renderer: render || 'svg',
								loop: Boolean(loop),
								autoplay: Boolean(trigger === 'none'),
								path: path,
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid',
									className: "premium-lottie-inner"
								},
								width:'<?php echo esc_html( $value['size'] ); ?>',
								height:'<?php echo esc_html( $value['size'] ); ?>'
							})

							animation.setSpeed(setSpeed)

							const reversedir = Boolean(reverse) ? -1 : 1

							animation.setDirection(reversedir)
							animation.addEventListener('DOMLoaded', function() {


								if (trigger === 'hover') {
									animation.pause();
									$(lottieContainer).hover(function() {
										animation.play();
									}, function() {
										animation.pause();
									});
								}
								if ('scroll' === trigger || 'viewport' === trigger) {
									var animateSettings = {
										animate: {
											speed: trigger === 'viewport' ? "viewport" : scrollSpeed,
											range: {
												start: startEvent,
												end: endEvent
											},
											triggerEvent:trigger
										},

										effects: ['animate']
									};


									animateInstance = new premiumEffects(lottieContainer, animateSettings, animation);

									animateInstance.init();
								}
							})

							window.premiumEffects = function(element, settings, lottieInstance) {


								var self = this,
									$el = $(element),
									elementSettings = settings;
								self.elementRules = {};

								self.getPercents = function() {

									var dimensions = self.getDimensions();

									elementTopWindowPoint = dimensions.elementTop - pageYOffset,
										elementEntrancePoint = elementTopWindowPoint - innerHeight;

									passedRangePercents = 100 / dimensions.range * (elementEntrancePoint * -1);



									return passedRangePercents;

								};

								self.init = function () {

								$(window).on('scroll load', self.initScroll);

								 };
								self.initScroll = function() {

									self.initScrollEffects();

								};

								self.initScrollEffects = function() {

									var percents = self.getPercents();

									if (elementSettings.effects.includes('animate')) {
										self.animate(percents,elementSettings.animate);
									}

								};
								self.getDimensions = function() {

									var elementOffset = $el.offset();

									var dimensions = {
										elementHeight: $el.outerHeight(),
										elementTop: elementOffset.top,
										elementLeft: elementOffset.left
									};

									dimensions.range = dimensions.elementHeight + innerHeight;

									return dimensions;

								};

								self.animate = function(percents,data) {


									var stopFrame = lottieInstance.totalFrames;

									if (data.range) {

										if (data.range.start > percents) {
											percents = data.range.start;
										}

										if (data.range.end < percents) {
											percents = data.range.end;
										}

									}

									var currframe = ((percents) / 100) * (stopFrame);

									if (data.speed === "viewport") {

										if (data.range.start !== percents && data.range.end !== percents) {
											lottieInstance.play();
										} else {

											lottieInstance.pause();
										}
									} else {
										lottieInstance.goToAndStop(currframe, true);
									}

								};


							};

						})
					</script>
					<?php
				}
			}
		}
	}
	/**
	 *  Prepare if class 'PBG_Lottie' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	PBG_Lottie::get_instance();
}
