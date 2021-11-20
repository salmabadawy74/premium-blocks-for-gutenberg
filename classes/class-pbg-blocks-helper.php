<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit();
}

/**
 * Define PBG_Blocks_Helper class
 */
class PBG_Blocks_Helper {

	/**
	 * Class instance
	 *
	 * @var instance
	 */
	private static $instance = null;

	/**
	 * Blocks
	 *
	 * @var blocks
	 */
	public static $blocks;

	/**
	 * Config
	 *
	 * @var config
	 */
	public static $config;

	/**
	 * Stylesheet
	 *
	 * @since 1.13.4
	 * @var stylesheet
	 */
	public static $stylesheet;

	/**
	 * Page Blocks Variable
	 *
	 * @since 1.6.0
	 * @var instance
	 */
	public static $page_blocks;

	/**
	 * Member Variable
	 *
	 * @since 0.0.1
	 * @var instance
	 */
	public static $block_atts;

	/**
	 * PBG Block Flag
	 *
	 * @since 1.8.2
	 * @var premium_flag
	 */
	public static $premium_flag = false;

	/**
	 * Current Block List
	 *
	 * @since 1.8.2
	 * @var current_block_list
	 */
	public static $current_block_list = array();

	/**
	 * Constructor for the class
	 */
	public function __construct() {

		// Gets Active Blocks.
		self::$blocks = PBG_Admin::get_enabled_keys();

		// Gets Plugin Admin Settings.
		self::$config = PBG_Settings::get_enabled_keys();

		// Enqueue Editor Assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'pbg_editor' ) );

		// Enqueue Frontend Styles.
		add_action( 'enqueue_block_assets', array( $this, 'pbg_frontend' ) );

		// Register Premium Blocks category.
		add_filter( 'block_categories_all', array( $this, 'register_premium_category' ), 10, 1 );

		// Generate Blocks Stylesheet.
		add_action( 'wp', array( $this, 'generate_stylesheet' ), 99 );

		// Enqueue Generated stylesheet to WP Head.
		add_action( 'wp_head', array( $this, 'print_stylesheet' ), 80 );

		require PREMIUM_BLOCKS_PATH . 'classes/class-pbg-blocks-config.php';

		// Get Blocks Attributes.
		self::$block_atts = PBG_Blocks_Config::get_block_attributes();

	}

	/**
	 * Enqueue Editor CSS/JS for Premium Blocks
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return void
	 */
	public function pbg_editor() {

		$is_fa_enabled = isset( self::$config['premium-fa-css'] ) ? self::$config['premium-fa-css'] : true;

		wp_enqueue_script(
			'pbg-editor',
			PREMIUM_BLOCKS_URL . 'assets/js/build.js',
			array(
				'wp-blocks',
				'wp-i18n',
				'wp-element',
				'wp-components',
				'wp-data',
				'wp-editor',
			),
			PREMIUM_BLOCKS_VERSION,
			true
		);

		wp_enqueue_style(
			'pbg-editor-css',
			PREMIUM_BLOCKS_URL . 'assets/css/blockseditor.css',
			array( 'wp-edit-blocks' ),
			PREMIUM_BLOCKS_VERSION
		);

		wp_enqueue_style(
			'pbg-editor-panel-css',
			PREMIUM_BLOCKS_URL . 'assets/css/editorpanel.css',
			array( 'wp-edit-blocks' ),
			PREMIUM_BLOCKS_VERSION
		);

		wp_localize_script(
			'pbg-editor',
			'PremiumBlocksSettings',
			array(
				'defaultAuthImg'    => PREMIUM_BLOCKS_URL . 'assets/img/author.jpg',
				'activeBlocks'      => self::$blocks,
				'tablet_breakpoint' => PBG_TABLET_BREAKPOINT,
				'mobile_breakpoint' => PBG_MOBILE_BREAKPOINT,
			)
		);

		wp_localize_script(
			'pbg-editor',
			'FontAwesomeConfig',
			array(
				'FontAwesomeEnabled' => $is_fa_enabled,
			)
		);
	}

	/**
	 * PBG Frontend
	 *
	 * Enqueue Frontend Assets for Premium Blocks.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return void
	 */
	public function pbg_frontend() {

		$is_fa_enabled = isset( self::$config['premium-fa-css'] ) ? self::$config['premium-fa-css'] : true;

		$is_enabled = isset( self::$config['premium-map-api'] ) ? self::$config['premium-map-api'] : true;

		$api_key = isset( self::$config['premium-map-key'] ) ? self::$config['premium-map-key'] : '';

		$is_maps_enabled = self::$blocks['maps'];

		$is_counter_enabled = self::$blocks['countUp'];

		$is_banner_enabled = self::$blocks['banner'];

		$is_button_enabled = self::$blocks['button'];

		$is_accordion_enabled = self::$blocks['accordion'];

		$is_section_enabled = self::$blocks['container'];

		$is_video_enabled = self::$blocks['videoBox'];

		$is_dual_enabled = self::$blocks['dualHeading'];

		$is_icon_box_enabled = self::$blocks['iconBox'];

		$is_fancy_text_enabled = self::$blocks['fancyText'];

		$is_lottie_enabled = self::$blocks['lottie'];

		$is_template_enabled = self::$blocks['template'];

		wp_enqueue_style(
			'pbg-frontend',
			PREMIUM_BLOCKS_URL . 'assets/css/style.css',
			array( 'dashicons' ),
			PREMIUM_BLOCKS_VERSION
		);

		if ( $is_fa_enabled ) {
			wp_enqueue_style(
				'pbg-fontawesome',
				'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
			);
		}

		if ( $is_banner_enabled ) {
			wp_enqueue_script(
				'pbg-banner',
				PREMIUM_BLOCKS_URL . 'assets/js/banner.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}

		if ( $is_button_enabled ) {
			wp_enqueue_script(
				'pbg-button',
				PREMIUM_BLOCKS_URL . 'assets/js/button.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}

		if ( $is_dual_enabled ) {
			wp_enqueue_script(
				'pbg-dual-heading',
				PREMIUM_BLOCKS_URL . 'assets/js/dual-heading.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}

		if ( $is_counter_enabled ) {
			wp_enqueue_script(
				'pbg-waypoints',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/jquery.waypoints.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);

			wp_enqueue_script(
				'pbg-counter',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/countUpmin.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);

			wp_enqueue_script(
				'pbg-countup',
				PREMIUM_BLOCKS_URL . 'assets/js/countup.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}

		if ( $is_accordion_enabled ) {
			wp_enqueue_script(
				'pbg-accordion',
				PREMIUM_BLOCKS_URL . 'assets/js/accordion.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}

		if ( $is_section_enabled ) {
			wp_enqueue_script(
				'pbg-section',
				PREMIUM_BLOCKS_URL . 'assets/js/section.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);

			$is_rtl = is_rtl() ? true : false;

			wp_localize_script(
				'pbg-section',
				'siteDirection',
				array(
					'isRTL' => $is_rtl,
				)
			);
		}

		if ( $is_video_enabled ) {
			wp_enqueue_script(
				'pbg-video-box',
				PREMIUM_BLOCKS_URL . 'assets/js/video-box.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}

		if ( $is_icon_box_enabled ) {
			wp_enqueue_script(
				'pbg-sectionicon-box',
				PREMIUM_BLOCKS_URL . 'assets/js/icon-box.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}

		if($is_test_enabled) {
			wp_enqueue_script(
				'pbg-sectiontemplate',
				PREMIUM_BLOCKS_URL . 'assets/js/template.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}

		if ( $is_fancy_text_enabled ) {
			wp_enqueue_script(
				'pbg-sectionfancy-text',
				PREMIUM_BLOCKS_URL . 'assets/js/fancy-text.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);

			wp_enqueue_script(
				'pbg-vticker',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/vticker.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);

			wp_enqueue_script(
				'pbg-typed',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/typed.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}

		if ( $is_lottie_enabled ) {

			wp_enqueue_script(
				'pbg-lottie',
				PREMIUM_BLOCKS_URL . 'assets/js/lottie.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);

		}

		// Enqueue Google Maps API Script.
		if ( $is_maps_enabled && $is_enabled ) {
			if ( ! empty( $api_key ) && '1' != $api_key ) {
				wp_enqueue_script(
					'premium-map-block',
					'https://maps.googleapis.com/maps/api/js?key=' . $api_key,
					array(),
					PREMIUM_BLOCKS_VERSION,
					false
				);
			}
		}

	}

	/**
	 * Add Premium Blocks category to Blocks Categories
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $categories blocks categories.
	 */
	public function register_premium_category( $categories ) {

		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'premium-blocks',
					'title' => __( 'Premium Blocks', 'premium-blocks-for-gutenberg' ),
				),
			)
		);

	}

	/**
	 * Generate Stylesheet
	 *
	 * Generates stylesheet and appends in head tag.
	 *
	 * @since 1.8.2
	 */
	public function generate_stylesheet() {

		$this_post = array();

		if ( class_exists( 'WooCommerce' ) ) {

			if ( is_cart() ) {

				$id        = get_option( 'woocommerce_cart_page_id' );
				$this_post = get_post( $id );

			} elseif ( is_account_page() ) {

				$id        = get_option( 'woocommerce_myaccount_page_id' );
				$this_post = get_post( $id );

			} elseif ( is_checkout() ) {

				$id        = get_option( 'woocommerce_checkout_page_id' );
				$this_post = get_post( $id );

			} elseif ( is_checkout_pay_page() ) {

				$id        = get_option( 'woocommerce_pay_page_id' );
				$this_post = get_post( $id );

			} elseif ( is_shop() ) {

				$id        = get_option( 'woocommerce_shop_page_id' );
				$this_post = get_post( $id );
			}

			if ( is_object( $this_post ) ) {
				$this->generate_post_stylesheet( $this_post );
				return;
			}
		}

		if ( is_single() || is_page() || is_404() ) {

			global $post;
			$this_post = $post;

			if ( ! is_object( $this_post ) ) {
				return;
			}

			$this->generate_post_stylesheet( $this_post );

		} elseif ( is_archive() || is_home() || is_search() ) {

			global $wp_query;

			foreach ( $wp_query as $post ) {
				$this->generate_post_stylesheet( $post );
			}
		}

	}

	/**
	 * Generates stylesheet in loop.
	 *
	 * @param object $this_post Current Post Object.
	 * @since 1.8.2
	 */
	public function generate_post_stylesheet( $this_post ) {

		if ( ! is_object( $this_post ) ) {
			return;
		}

		if ( ! isset( $this_post->ID ) ) {
			return;
		}

		if ( has_blocks( $this_post->ID ) ) {

			if ( isset( $this_post->post_content ) ) {

				$blocks            = $this->parse( $this_post->post_content );
				self::$page_blocks = $blocks;

				if ( ! is_array( $blocks ) || empty( $blocks ) ) {
					return;
				}

				self::$stylesheet .= $this->get_stylesheet( $blocks );
			}
		}
	}

	/**
	 * Parse Guten Block.
	 *
	 * @param string $content the content string.
	 * @since 1.1.0
	 */
	public function parse( $content ) {

		global $wp_version;

		return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );
	}

	/**
	 * Print Stylsheet
	 *
	 * Print the Stylesheet in header.
	 *
	 * @since 1.8.2
	 * @access public
	 */
	public function print_stylesheet() {

		global $content_width;
		if ( is_null( self::$stylesheet ) || '' === self::$stylesheet ) {
			return;
		}

		self::$stylesheet = str_replace( '#CONTENT_WIDTH#', $content_width . 'px', self::$stylesheet );

		ob_start();

		?>
			<style type="text/css" media="all" id="premium-style-frontend"><?php echo self::$stylesheet; ?></style>
		<?php
		ob_end_flush();
	}

	/**
	 * Get Block CSS
	 *
	 * Generates CSS recurrsively.
	 *
	 * @since 1.8.2
	 * @access public
	 *
	 * @param object $block The block object.
	 */
	public function get_block_css( $block ) {

		$block = (array) $block;

		$name     = $block['blockName'];
		$css      = array();
		$block_id = '';

		if ( ! isset( $name ) ) {
			return;
		}

		if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
			$blockattr = $block['attrs'];
			if ( isset( $blockattr['block_id'] ) ) {
				$block_id = $blockattr['block_id'];
			}
		}

		self::$current_block_list[] = $name;

		if ( strpos( $name, 'premium/' ) !== false ) {
			self::$premium_flag = true;
		}

		switch ( $name ) {
			case 'premium/fancy-text':
				$css += $this->get_fancy_text_css( $blockattr, $block_id );
				break;
				case 'premium/template':
					$css += $this->get_test_css( $blockattr, $block_id );
					break;
			case 'premium/accordion':
				$css += $this->get_accordion_css( $blockattr, $block_id );
				break;
			case 'premium/banner':
				$css += $this->get_banner_css( $blockattr, $block_id );
				break;
			case 'premium/button':
				$css += $this->get_button_css( $blockattr, $block_id );
				break;
			case 'premium/countup':
				$css += $this->get_countup_css( $blockattr, $block_id );
				break;
			case 'premium/dheading-block':
				$css += $this->get_dual_css( $blockattr, $block_id );
				break;
			case 'premium/icon-box':
				$css += $this->get_iconbox_css( $blockattr, $block_id );
				break;
			case 'premium/testimonial':
				$css += $this->get_testimonial_css( $blockattr, $block_id );
				break;
			case 'premium/video-box':
				$css += $this->get_videobox_css( $blockattr, $block_id );
				break;
			case 'premium/pricing-table':
				$css += $this->get_pricing_css( $blockattr, $block_id );
				break;
			case 'premium/lottie':
				$css += $this->get_lottie_css( $blockattr, $block_id );
				break;
			default:
				// Nothing to do here.
				break;
		}

		if ( isset( $block['innerBlocks'] ) ) {
			foreach ( $block['innerBlocks'] as $j => $inner_block ) {
				if ( 'core/block' === $inner_block['blockName'] ) {
					$id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

					if ( $id ) {
						$content = get_post_field( 'post_content', $id );

						$reusable_blocks = $this->parse( $content );

						self::$stylesheet .= $this->get_stylesheet( $reusable_blocks );
					}
				} else {
					// Get CSS for the Block.
					$inner_block_css = $this->get_block_css( $inner_block );

					$css_desktop = ( isset( $css['desktop'] ) ? $css['desktop'] : '' );
					$css_tablet  = ( isset( $css['tablet'] ) ? $css['tablet'] : '' );
					$css_mobile  = ( isset( $css['mobile'] ) ? $css['mobile'] : '' );

					if ( isset( $inner_block_css['desktop'] ) ) {
						$css['desktop'] = $css_desktop . $inner_block_css['desktop'];
						$css['tablet']  = $css_tablet . $inner_block_css['tablet'];
						$css['mobile']  = $css_mobile . $inner_block_css['mobile'];
					}
				}
			}
		}

		self::$current_block_list = array_unique( self::$current_block_list );

		return $css;
	}

	public static function get_test1_css( $attr, $id ) {}

	/**
	 * Get Fancy Text Block CSS
	 *
	 * Return Frontend CSS for Fancy Text.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_fancy_text_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/fancy-text']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			// Desktop Icon Size CSS starts.
			' .premium-fancy-text-title'       => array(
				'font-size'        => self::get_css_value( $attr['fancyTextfontSize'], $attr['fancyTextfontSizeUnit'] ),
				'color'            => $attr['fancyTextColor'],
				'background-color' => $attr['fancyTextBGColor'] ? 'rgba(' . self::hex_to_rgba( $attr['fancyTextBGColor'] ) . ',' . $attr['fancyTextBGOpacity'] . ')' : 'transparent',
				'letter-spacing'   => self::get_css_value( $attr['fancyTextLetter'], 'px' ),
				'text-transform'   => $attr['fancyTextUpper'] ? 'uppercase' : 'none',
				'font-style'       => $attr['fancyTextStyle'],
				'font-weight'      => $attr['fancyTextWeight'],
				'text-shadow'      => self::get_css_value( $attr['shadowHorizontal'], 'px ' ) . self::get_css_value( $attr['shadowVertical'], 'px ' ) . self::get_css_value( $attr['shadowBlur'], 'px ' ) . $attr['shadowColor'],
			),
			' .premium-fancy-text-title-slide' => array(
				'font-size'        => self::get_css_value( $attr['fancyTextfontSize'], $attr['fancyTextfontSizeUnit'] ),
				'color'            => $attr['fancyTextColor'],
				'background-color' => $attr['fancyTextBGColor'] ? 'rgba(' . self::hex_to_rgba( $attr['fancyTextBGColor'] ) . ',' . $attr['fancyTextBGOpacity'] . ')' : 'transparent',
				'letter-spacing'   => self::get_css_value( $attr['fancyTextLetter'], 'px' ),
				'text-transform'   => $attr['fancyTextUpper'] ? 'uppercase' : 'none',
				'font-style'       => $attr['fancyTextStyle'],
				'font-weight'      => $attr['fancyTextWeight'],
				'text-shadow'      => self::get_css_value( $attr['shadowHorizontal'], 'px ' ) . self::get_css_value( $attr['shadowVertical'], 'px ' ) . self::get_css_value( $attr['shadowBlur'], 'px ' ) . $attr['shadowColor'],
			),
			' .typed-cursor'                   => array(
				'color' => $attr['cursorColor'],
			),
			' .premium-fancy-text-prefix-text' => array(
				'font-size'        => self::get_css_value( $attr['textfontSize'], $attr['textfontSizeUnit'] ),
				'color'            => $attr['textColor'],
				'background-color' => $attr['textBGColor'] ? 'rgba(' . self::hex_to_rgba( $attr['textBGColor'] ) . ',' . $attr['textBGOpacity'] . ')' : 'transparent',
				'letter-spacing'   => self::get_css_value( $attr['textLetter'], 'px' ),
				'text-transform'   => $attr['textUpper'] ? 'uppercase' : 'none',
				'font-style'       => self::get_css_value( $attr['textStyle'], ' !important' ),
				'font-weight'      => self::get_css_value( $attr['textWeight'], ' !important' ),
			),
			' .premium-fancy-text-suffix-text' => array(
				'font-size'        => self::get_css_value( $attr['textfontSize'], $attr['textfontSizeUnit'] ),
				'color'            => $attr['textColor'],
				'background-color' => $attr['textBGColor'] ? 'rgba(' . self::hex_to_rgba( $attr['textBGColor'] ) . ',' . $attr['textBGOpacity'] . ')' : 'transparent',
				'letter-spacing'   => self::get_css_value( $attr['textLetter'], 'px' ),
				'text-transform'   => $attr['textUpper'] ? 'uppercase' : 'none',
				'font-style'       => self::get_css_value( $attr['textStyle'], ' !important' ),
				'font-weight'      => self::get_css_value( $attr['textWeight'], ' !important' ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' .premium-fancy-text-title'       => array(
				'font-size' => self::get_css_value( $attr['fancyTextfontSizeTablet'], $attr['fancyTextfontSizeUnit'] ),
			),
			' .premium-fancy-text-title-slide' => array(
				'font-size' => self::get_css_value( $attr['fancyTextfontSizeTablet'], $attr['fancyTextfontSizeUnit'] ),
			),
			' .premium-fancy-text-prefix-text' => array(
				'font-size' => self::get_css_value( $attr['textfontSizeTablet'], $attr['textfontSizeUnit'] ),
			),
			' .premium-fancy-text-suffix-text' => array(
				'padding' => self::get_css_value( $attr['textfontSizeTablet'], $attr['textfontSizeUnit'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' .premium-fancy-text-title'       => array(
				'font-size' => self::get_css_value( $attr['fancyTextfontSizeMobile'], $attr['fancyTextfontSizeUnit'] ),
			),
			' .premium-fancy-text-title-slide' => array(
				'font-size' => self::get_css_value( $attr['fancyTextfontSizeMobile'], $attr['fancyTextfontSizeUnit'] ),
			),
			' .premium-fancy-text-prefix-text' => array(
				'font-size' => self::get_css_value( $attr['textfontSizeMobile'], $attr['textfontSizeUnit'] ),
			),
			' .premium-fancy-text-suffix-text' => array(
				'font-size' => self::get_css_value( $attr['textfontSizeMobile'], $attr['textfontSizeUnit'] ),
			),
		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '.premium-block-' : '#premium-fancy-text-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	/**
	 * Get Accordion Block CSS
	 *
	 * Return Frontend CSS for Accordion.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_accordion_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/accordion']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(

			'  .premium-accordion__title_text ' => array(
				'font-size' => self::get_css_value( $attr['titleSize'], $attr['titleSizeUnit'] ),
			),
			'  .premium-accordion__desc '       => array(
				'font-size' => self::get_css_value( $attr['descSize'], $attr['descSizeUnit'] ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' .premium-accordion__title_text  ' => array(
				'font-size' => self::get_css_value( $attr['titleSizeTablet'], $attr['titleSizeUnit'] ),
			),
			'  .premium-accordion__desc '       => array(
				'font-size' => self::get_css_value( $attr['descSizeTablet'], $attr['descSizeUnit'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' .premium-accordion__title_text  ' => array(
				'font-size' => self::get_css_value( $attr['titleSizeMobile'], $attr['titleSizeUnit'] ),
			),
			' .premium-accordion__desc'         => array(
				'font-size' => self::get_css_value( $attr['descSizeMobile'], $attr['descSizeUnit'] ),
			),
		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '.premium-accordion-' : '#block-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	/**
	 * Get Banner Block CSS
	 *
	 * Return Frontend CSS for Banner.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_banner_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/banner']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(

			' .premium-banner__title' => array(
				'font-size' => self::get_css_value( $attr['titleSize'], $attr['titleSizeUnit'] ),
			),
			' .premium-banner__desc'  => array(
				'font-size' => self::get_css_value( $attr['descSize'], $attr['descSizeUnit'] ),
			),
		);
			// Desktop Icon Size CSS ends.

			// Tablet CSS Start.
			$t_selectors = array(
				' .premium-banner__title' => array(
					'font-size' => self::get_css_value( $attr['titleSizeTablet'], $attr['titleSizeUnit'] ),
				),
				' .premium-banner__desc'  => array(
					'font-size' => self::get_css_value( $attr['descSizeTablet'], $attr['descSizeUnit'] ),
				),
			);
			// Tablet CSS End.

			// Mobile CSS Start.
			$m_selectors = array(
				' .premium-banner__title' => array(
					'font-size' => self::get_css_value( $attr['titleSizeMobile'], $attr['titleSizeUnit'] ),
				),
				' .premium-banner__desc'  => array(
					'font-size' => self::get_css_value( $attr['descSizeMobile'], $attr['descSizeUnit'] ),
				),
			);
			// Mobile CSS End.

			$base_selector = ( $attr['classMigrate'] ) ? '#premium-banner-' : '.premium-banner-';

			$desktop = self::generate_css( $selectors, $base_selector . $id );

			$tablet = self::generate_css( $t_selectors, $base_selector . $id );

			$mobile = self::generate_css( $m_selectors, $base_selector . $id );

			$generated_css = array(
				'desktop' => $desktop,
				'tablet'  => $tablet,
				'mobile'  => $mobile,
			);

			return $generated_css;
	}

	/**
	 * Get Button Block CSS
	 *
	 * Return Frontend CSS for Button.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_button_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/button']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' .premium-button' => array(
				'font-size' => self::get_css_value( $attr['textSize'], $attr['textSizeUnit'] ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' .premium-button' => array(
				'font-size' => self::get_css_value( $attr['textSizeTablet'], $attr['textSizeUnit'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' .premium-button' => array(
				'font-size' => self::get_css_value( $attr['textSizeMobile'], $attr['textSizeUnit'] ),
			),

		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '#premium-button-wrap-' : '.premium-button-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	/**
	 * Get Count Up Block CSS
	 *
	 * Return Frontend CSS for Count Up.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_countup_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/countup']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' .premium-countup__increment' => array(
				'font-size' => self::get_css_value( $attr['numberSize'], $attr['numberSizeUnit'] ),
			),
			' .premium-countup__title'     => array(
				'font-size' => self::get_css_value( $attr['titleSize'], $attr['titleSizeUnit'] ),
			),
			' .premium-countup__prefix'    => array(
				'font-size' => self::get_css_value( $attr['prefixSize'], $attr['prefixSizeUnit'] ),
			),
			' .premium-countup__suffix'    => array(
				'font-size' => self::get_css_value( $attr['suffixSize'], $attr['suffixSizeUnit'] ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' .premium-countup__increment' => array(
				'font-size' => self::get_css_value( $attr['numberSizeTablet'], $attr['numberSizeUnit'] ),
			),
			' .premium-countup__title'     => array(
				'font-size' => self::get_css_value( $attr['titleSizeTablet'], $attr['titleSizeUnit'] ),
			),
			' .premium-countup__prefix'    => array(
				'font-size' => self::get_css_value( $attr['prefixSizeTablet'], $attr['prefixSizeUnit'] ),
			),
			' .premium-countup__suffix'    => array(
				'font-size' => self::get_css_value( $attr['suffixSizeTablet'], $attr['suffixSizeUnit'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' .premium-countup__increment' => array(
				'font-size' => self::get_css_value( $attr['numberSizeMobile'], $attr['numberSizeUnit'] ),
			),
			' .premium-countup__title'     => array(
				'font-size' => self::get_css_value( $attr['titleSizeMobile'], $attr['titleSizeUnit'] ),
			),
			' .premium-countup__prefix'    => array(
				'font-size' => self::get_css_value( $attr['prefixSizeMobile'], $attr['prefixSizeUnit'] ),
			),
			' .premium-countup__suffix'    => array(
				'font-size' => self::get_css_value( $attr['suffixSizeMobile'], $attr['suffixSizeUnit'] ),
			),

		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '.premium-countup-' : '#premium-countup-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	/**
	 * Get Dual Heading Block CSS
	 *
	 * Return Frontend CSS for Dual Heading.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_dual_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/dheading-block']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' .premium-dheading-block__first'  => array(
				'font-size' => self::get_css_value( $attr['firstSize'], $attr['firstSizeUnit'] ),
			),
			' .premium-dheading-block__second' => array(
				'font-size' => self::get_css_value( $attr['secondSize'], $attr['secondSizeUnit'] ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' .premium-dheading-block__first'   => array(
				'font-size' => self::get_css_value( $attr['firstSizeTablet'], $attr['firstSizeUnit'] ),
			),
			'  .premium-dheading-block__second' => array(
				'font-size' => self::get_css_value( $attr['secondSizeTablet'], $attr['secondSizeUnit'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' .premium-dheading-block__first'   => array(
				'font-size' => self::get_css_value( $attr['firstSizeMobile'], $attr['firstSizeUnit'] ),
			),
			'  .premium-dheading-block__second' => array(
				'font-size' => self::get_css_value( $attr['secondSizeMobile'], $attr['secondSizeUnit'] ),
			),

		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '#premium-dheading-block-' : '.premium-dheading-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	/**
	 * Get Icon Box Block CSS
	 *
	 * Return Frontend CSS for Icon Box.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_iconbox_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/icon-box']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			'  .premium-icon-box__title' => array(
				'font-size' => self::get_css_value( $attr['titleSize'], $attr['titleSizeUnit'] ),
			),
			' .premium-icon-box__desc'   => array(
				'font-size' => self::get_css_value( $attr['descSize'], $attr['descSizeUnit'] ),
			),
			' .premium-icon-box__btn'    => array(
				'font-size' => self::get_css_value( $attr['btnSize'], $attr['btnSizeUnit'] ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			'  .premium-icon-box__title' => array(
				'font-size' => self::get_css_value( $attr['titleSizeTablet'], $attr['titleSizeUnit'] ),
			),
			' .premium-icon-box__desc'   => array(
				'font-size' => self::get_css_value( $attr['descSizeTablet'], $attr['descSizeUnit'] ),
			),
			' .premium-icon-box__btn'    => array(
				'font-size' => self::get_css_value( $attr['btnSizeTablet'], $attr['btnSizeUnit'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			'  .premium-icon-box__title' => array(
				'font-size' => self::get_css_value( $attr['titleSizeMobile'], $attr['titleSizeUnit'] ),
			),
			' .premium-icon-box__desc'   => array(
				'font-size' => self::get_css_value( $attr['descSizeMobile'], $attr['descSizeUnit'] ),
			),
			' .premium-icon-box__btn'    => array(
				'font-size' => self::get_css_value( $attr['btnSizeMobile'], $attr['btnSizeUnit'] ),
			),
		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '#premium-icon-box-' : '.premium-icon-box-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	/**
	 * Get Pricing Table Block CSS
	 *
	 * Return Frontend CSS for Pricing Table.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_pricing_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/pricing-table']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' .premium-pricing-table__title'            => array(
				'font-size' => self::get_css_value( $attr['titleSize'], $attr['titleSizeUnit'] ),
			),
			' .premium-pricing-table__slash'            => array(
				'font-size' => self::get_css_value( $attr['slashSize'], $attr['slashSizeUnit'] ),
			),
			' .premium-pricing-table__currency'         => array(
				'font-size' => self::get_css_value( $attr['currSize'], $attr['currSizeUnit'] ),
			),
			' .premium-pricing-table__val'              => array(
				'font-size' => self::get_css_value( $attr['valSize'], $attr['valSizeUnit'] ),
			),
			' .premium-pricing-table__divider'          => array(
				'font-size' => self::get_css_value( $attr['divSize'], $attr['divSizeUnit'] ),
			),
			' .premium-pricing-table__dur'              => array(
				'font-size' => self::get_css_value( $attr['durSize'], $attr['durSizeUnit'] ),
			),
			' .premium-pricing-table__list'             => array(
				'font-size' => self::get_css_value( $attr['listSize'], $attr['listSizeUnit'] ),
			),
			' .premium-pricing-table__desc'             => array(
				'font-size' => self::get_css_value( $attr['descSize'], $attr['descSizeUnit'] ),
			),
			' .premium-pricing-table__button_link'      => array(
				'font-size' => self::get_css_value( $attr['btnSize'], $attr['btnSizeUnit'] ),
			),
			' .premium-pricing-table__badge_wrap  span' => array(
				'font-size' => self::get_css_value( $attr['badgeTextSize'], $attr['badgeTextUnit'] ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' .premium-pricing-table__title'            => array(
				'font-size' => self::get_css_value( $attr['titleSizeTablet'], $attr['titleSizeUnit'] ),
			),
			' .premium-pricing-table__slash'            => array(
				'font-size' => self::get_css_value( $attr['slashSizeTablet'], $attr['slashSizeUnit'] ),
			),
			' .premium-pricing-table__currency'         => array(
				'font-size' => self::get_css_value( $attr['currSizeTablet'], $attr['currSizeUnit'] ),
			),
			' .premium-pricing-table__val'              => array(
				'font-size' => self::get_css_value( $attr['valSizeTablet'], $attr['valSizeUnit'] ),
			),
			' .premium-pricing-table__divider'          => array(
				'font-size' => self::get_css_value( $attr['divSizeTablet'], $attr['divSizeUnit'] ),
			),
			' .premium-pricing-table__dur'              => array(
				'font-size' => self::get_css_value( $attr['durSizeTablet'], $attr['durSizeUnit'] ),
			),
			' .premium-pricing-table__list'             => array(
				'font-size' => self::get_css_value( $attr['listSizeTablet'], $attr['listSizeUnit'] ),
			),
			' .premium-pricing-table__desc'             => array(
				'font-size' => self::get_css_value( $attr['descSizeTablet'], $attr['descSizeUnit'] ),
			),
			' .premium-pricing-table__button_link'      => array(
				'font-size' => self::get_css_value( $attr['btnSizeTablet'], $attr['btnSizeUnit'] ),
			),
			' .premium-pricing-table__badge_wrap  span' => array(
				'font-size' => self::get_css_value( $attr['badgeTextSizeTablet'], $attr['badgeTextUnit'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' .premium-pricing-table__title'            => array(
				'font-size' => self::get_css_value( $attr['titleSizeMobile'], $attr['titleSizeUnit'] ),
			),
			' .premium-pricing-table__slash'            => array(
				'font-size' => self::get_css_value( $attr['slashSizeMobile'], $attr['slashSizeUnit'] ),
			),
			' .premium-pricing-table__currency'         => array(
				'font-size' => self::get_css_value( $attr['currSizeMobile'], $attr['currSizeUnit'] ),
			),
			' .premium-pricing-table__val'              => array(
				'font-size' => self::get_css_value( $attr['valSizeMobile'], $attr['valSizeUnit'] ),
			),
			' .premium-pricing-table__divider'          => array(
				'font-size' => self::get_css_value( $attr['divSizeMobile'], $attr['divSizeUnit'] ),
			),
			' .premium-pricing-table__dur'              => array(
				'font-size' => self::get_css_value( $attr['durSizeMobile'], $attr['durSizeUnit'] ),
			),
			' .premium-pricing-table__list'             => array(
				'font-size' => self::get_css_value( $attr['listSizeMobile'], $attr['listSizeUnit'] ),
			),
			' .premium-pricing-table__desc'             => array(
				'font-size' => self::get_css_value( $attr['descSizeMobile'], $attr['descSizeUnit'] ),
			),
			' .premium-pricing-table__button_link'      => array(
				'font-size' => self::get_css_value( $attr['btnSizeMobile'], $attr['btnSizeUnit'] ),
			),
			' .premium-pricing-table__badge_wrap  span' => array(
				'font-size' => self::get_css_value( $attr['badgeTextSizeMobile'], $attr['badgeTextUnit'] ),
			),
		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '#premium-pricing-table-' : '.premium-pricing-table-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	/**
	 * Get Testimonial Block CSS
	 *
	 * Return Frontend CSS for Testimonial.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_testimonial_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/testimonial']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' .premium-testimonial__author'      => array(
				'font-size' => self::get_css_value( $attr['authorSize'], $attr['authorSizeUnit'] ),
			),
			' .premium-testimonial__author_comp' => array(
				'font-size' => self::get_css_value( $attr['authorComSize'], $attr['authorComSizeUnit'] ),
			),
			' .premium-testimonial__text'        => array(
				'font-size' => self::get_css_value( $attr['bodySize'], $attr['bodySizeUnit'] ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' .premium-testimonial__author'      => array(
				'font-size' => self::get_css_value( $attr['authorSizeTablet'], $attr['authorSizeUnit'] ),
			),
			' .premium-testimonial__author_comp' => array(
				'font-size' => self::get_css_value( $attr['authorComSizeTablet'], $attr['authorComSizeUnit'] ),
			),
			' .premium-testimonial__text'        => array(
				'font-size' => self::get_css_value( $attr['bodySizeTablet'], $attr['bodySizeUnit'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' .premium-testimonial__author'      => array(
				'font-size' => self::get_css_value( $attr['authorSizeMobile'], $attr['authorSizeUnit'] ),
			),
			' .premium-testimonial__author_comp' => array(
				'font-size' => self::get_css_value( $attr['authorComSizeMobile'], $attr['authorComSizeUnit'] ),
			),
			' .premium-testimonial__text'        => array(
				'font-size' => self::get_css_value( $attr['bodySizeMobile'], $attr['bodySizeUnit'] ),
			),
		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '#premium-testimonial-' : '.premium-testimonial-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	/**
	 * Get Video Box Block CSS
	 *
	 * Return Frontend CSS for Video Box.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $id block ID.
	 */
	public static function get_videobox_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/video-box']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			'  .premium-video-box__desc_text' => array(
				'font-size' => self::get_css_value( $attr['videoDescSize'], $attr['videoDescSizeUnit'] ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			'  .premium-video-box__desc_text' => array(
				'font-size' => self::get_css_value( $attr['videoDescSizeTablet'], $attr['videoDescSizeUnit'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			'  .premium-video-box__desc_text' => array(
				'font-size' => self::get_css_value( $attr['videoDescSizeMobile'], $attr['videoDescSizeUnit'] ),
			),
		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '.premium-video-box-' : '#premium-video-box-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	public static function get_lottie_css( $attr, $id ) {
		$defaults = self::$block_atts['premium/lottie']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(

			' .premium-lottie-svg svg  ' => array(
				'width'  => $attr['size'] . $attr['sizeUnit'],
				'height' => $attr['size'] . $attr['sizeUnit'],
			),
			' .premium-lottie-canvas '   => array(
				'width'  => $attr['size'] . $attr['sizeUnit'],
				'height' => $attr['size'] . $attr['sizeUnit'],
			),
		);

		$t_selectors = array(

			' .premium-lottie-svg svg  ' => array(
				'width'  => $attr['sizeTablet'] . $attr['sizeUnit'],
				'height' => $attr['sizeTablet'] . $attr['sizeUnit'],
			),
			' .premium-lottie-canvas '   => array(
				'width'  => $attr['sizeTablet'] . $attr['sizeUnit'],
				'height' => $attr['sizeTablet'] . $attr['sizeUnit'],
			),
		);

		$m_selectors = array(

			' .premium-lottie-svg svg  ' => array(
				'width'  => $attr['sizeMobile'] . $attr['sizeUnit'],
				'height' => $attr['sizeMobile'] . $attr['sizeUnit'],
			),
			' .premium-lottie-canvas '   => array(
				'width'  => $attr['sizeMobile'] . $attr['sizeUnit'],
				'height' => $attr['sizeMobile'] . $attr['sizeUnit'],
			),
		);

		$base_selector = ( $attr['classMigrate'] ) ? '.premium-lottie-' : '.premium-lottie-';

		$desktop = self::generate_css( $selectors, $base_selector . $id );

		$tablet = self::generate_css( $t_selectors, $base_selector . $id );

		$mobile = self::generate_css( $m_selectors, $base_selector . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}

	/**
	 * Generate CSS
	 *
	 * @since 1.8.2
	 * @access public
	 *
	 * @param array  $selectors CSS selectors.
	 * @param string $id base selectors ID.
	 */
	public static function generate_css( $selectors, $id ) {

		$styling_css = '';

		if ( empty( $selectors ) ) {
			return;
		}

		foreach ( $selectors as $key => $value ) {

			$css = '';

			foreach ( $value as $j => $val ) {

				if ( 'font-family' === $j && 'Default' === $val ) {
					continue;
				}

				if ( ! empty( $val ) || 0 === $val ) {
					$css .= $j . ': ' . $val . ';';
				}
			}

			if ( ! empty( $css ) ) {
				$styling_css .= $id;
				$styling_css .= $key . '{';
				$styling_css .= $css . '}';
			}
		}

		return $styling_css;
	}

	/**
	 * Get CSS value
	 *
	 * @since 1.8.2
	 * @access public
	 *
	 * @param string $value  CSS value.
	 * @param string $unit  CSS unit.
	 */
	public static function get_css_value( $value = '', $unit = '' ) {

		// phpcs:ignore WordPress.PHP.StrictComparisons.LooseComparison
		if ( '' == $value ) {
			return $value;
		}

		$css_val = '';

		if ( ! empty( $value ) ) {
			$css_val = esc_attr( $value ) . $unit;
		}

		return $css_val;
	}

	/**
	 * Get CSS value
	 *
	 * @since 1.8.2
	 * @access public
	 *
	 * @param string $hex_color value of Color.
	 */
	public static function hex_to_rgba( $hex_color ) {

		$color = str_replace( '#', '', $hex_color );

		if ( strlen( $color ) > 3 ) {
			$rgb =
				hexdec( substr( $color, 0, 2 ) ) . ',' . hexdec( substr( $color, 2, 2 ) ) .

				',' . hexdec( substr( $color, 4, 2 ) );

		} else {
			$color = str_replace( '#', '', $hex_color );
			$r     = substr( $color, 0, 1 ) . substr( $color, 0, 1 );
			$g     = substr( $color, 1, 1 ) . substr( $color, 1, 1 );
			$b     = substr( $color, 2, 1 ) . substr( $color, 2, 1 );
			$rgb   = hexdec( $r ) . ',' . hexdec( $g ) . ',' . hexdec( $b );
		}

		return $rgb;
	}

	/**
	 * Generates stylesheet for reusable blocks.
	 *
	 * @param array $blocks Blocks array.
	 * @since 1.1.0
	 */
	public function get_stylesheet( $blocks ) {

		$desktop = '';
		$tablet  = '';
		$mobile  = '';

		$tab_styling_css = '';
		$mob_styling_css = '';

		foreach ( $blocks as $i => $block ) {

			if ( is_array( $block ) ) {

				if ( '' === $block['blockName'] ) {
					continue;
				}
				if ( 'core/block' === $block['blockName'] ) {
					$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

					if ( $id ) {
						$content = get_post_field( 'post_content', $id );

						$reusable_blocks = $this->parse( $content );

						self::$stylesheet .= $this->get_stylesheet( $reusable_blocks );

					}
				} else {
					// Get CSS for the Block.
					$css = $this->get_block_css( $block );

					if ( isset( $css['desktop'] ) ) {
						$desktop .= $css['desktop'];
						$tablet  .= $css['tablet'];
						$mobile  .= $css['mobile'];
					}
				}
			}
		}

		if ( ! empty( $tablet ) ) {
			$tab_styling_css .= '@media only screen and (max-width: ' . PBG_TABLET_BREAKPOINT . 'px) {';
			$tab_styling_css .= $tablet;
			$tab_styling_css .= '}';
		}

		if ( ! empty( $mobile ) ) {
			$mob_styling_css .= '@media only screen and (max-width: ' . PBG_MOBILE_BREAKPOINT . 'px) {';
			$mob_styling_css .= $mobile;
			$mob_styling_css .= '}';
		}

		return $desktop . $tab_styling_css . $mob_styling_css;
	}

	/**
	 * Creates and returns an instance of the class
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return object
	 */
	public static function get_instance() {

		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

}


if ( ! function_exists( 'pbg_blocks_helper' ) ) {

	/**
	 * Returns an instance of the plugin class.
	 *
	 * @since  1.0.0
	 * @return object
	 */
	function pbg_blocks_helper() {
		return pbg_blocks_helper::get_instance();
	}
}
pbg_blocks_helper();
