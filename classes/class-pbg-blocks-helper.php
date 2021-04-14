<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit();
}

/**
 * Define PBG_Blocks_Helper class
 */
class PBG_Blocks_Helper {

	private static $instance = null;

	public static $blocks;

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

		// Gets Active Blocks
		self::$blocks = PBG_Admin::get_enabled_keys();

		// Gets Plugin Admin Settings
		self::$config = PBG_Settings::get_enabled_keys();

		// Enqueue Editor Assets
		add_action( 'enqueue_block_editor_assets', array( $this, 'pbg_editor' ) );

		// Enqueue Frontend Styles
		add_action( 'enqueue_block_assets', array( $this, 'pbg_frontend' ) );

		// Register Premium Blocks category.
		add_filter( 'block_categories', array( $this, 'register_premium_category' ), 10, 1 );

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
			PREMIUM_BLOCKS_VERSION
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
				'banner-js',
				PREMIUM_BLOCKS_URL . 'assets/js/banner.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		}

		if ( $is_button_enabled ) {
			wp_enqueue_script(
				'button-js',
				PREMIUM_BLOCKS_URL . 'assets/js/button.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		}

		if ( $is_dual_enabled ) {
			wp_enqueue_script(
				'dual-heading-js',
				PREMIUM_BLOCKS_URL . 'assets/js/dual-heading.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		}

		if ( $is_counter_enabled ) {
			wp_enqueue_script(
				'waypoints_lib',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/jquery.waypoints.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);

			wp_enqueue_script(
				'counter_lib',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/countUpmin.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);

			wp_enqueue_script(
				'countup-js',
				PREMIUM_BLOCKS_URL . 'assets/js/countup.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		}

		if ( $is_accordion_enabled ) {
			wp_enqueue_script(
				'accordion-js',
				PREMIUM_BLOCKS_URL . 'assets/js/accordion.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		}

		if ( $is_section_enabled ) {
			wp_enqueue_script(
				'section-js',
				PREMIUM_BLOCKS_URL . 'assets/js/section.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);

			$is_rtl = is_rtl() ? true : false;

			wp_localize_script(
				'section-js',
				'siteDirection',
				array(
					'isRTL' => $is_rtl,
				)
			);
		}

		if ( $is_video_enabled ) {
			wp_enqueue_script(
				'video-box-js',
				PREMIUM_BLOCKS_URL . 'assets/js/video-box.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		}

		if ( $is_icon_box_enabled ) {
			wp_enqueue_script(
				'icon-box-js',
				PREMIUM_BLOCKS_URL . 'assets/js/icon-box.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		}

		if ( $is_fancy_text_enabled ) {
			wp_enqueue_script(
				'fancy-text-js',
				PREMIUM_BLOCKS_URL . 'assets/js/fancy-text.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);

			wp_enqueue_script(
				'pbg-vticker-js',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/vticker.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);

			wp_enqueue_script(
				'pbg-typed-js',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/typed.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		}

		// Enqueue Google Maps API Script
		if ( $is_maps_enabled && $is_enabled ) {
			if ( ! empty( $api_key ) && '1' != $api_key ) {
				wp_enqueue_script(
					'premium-map-block',
					'https://maps.googleapis.com/maps/api/js?key=' . $api_key
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
	 * @return void
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
				$this->_generate_post_stylesheet( $this_post );
				return;
			}
		}

		if ( is_single() || is_page() || is_404() ) {

			global $post;
			$this_post = $post;

			if ( ! is_object( $this_post ) ) {
				return;
			}

			$this->_generate_post_stylesheet( $this_post );

		} elseif ( is_archive() || is_home() || is_search() ) {

			global $wp_query;

			foreach ( $wp_query as $post ) {
				$this->_generate_post_stylesheet( $post );
			}
		}

	}

	/**
	 * Generates stylesheet in loop.
	 *
	 * @param object $this_post Current Post Object.
	 * @since 1.8.2
	 */
	public function _generate_post_stylesheet( $this_post ) {

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

		// self::file_write( self::$stylesheet, 'css' );

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
			case 'premium/icon':
				$css += $this->get_icon_css( $blockattr, $block_id );
				break;
			case 'premium/icon-box':
				$css += $this->get_iconBox_css( $blockattr, $block_id );
				break;
			case 'premium/container':
				$css += $this->get_section_css( $blockattr, $block_id );
				break;
			case 'premium/testimonial':
				$css += $this->get_testimonial_css( $blockattr, $block_id );
				break;
			case 'premium/video-box':
				$css += $this->get_videoBox_css( $blockattr, $block_id );
				break;
			case 'premium/pricing-table':
				$css += $this->get_pricing_css( $blockattr, $block_id );
				break;
			default:
				// Nothing to do here.
				break;
		}

		if ( isset( $block['innerBlocks'] ) ) {
			foreach ( $block['innerBlocks'] as $j => $inner_block ) {
				if ( 'core/block' == $inner_block['blockName'] ) {
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
			' .premium-accordion__icon_wrap'    => array(
				'padding-top'    => $attr['arrowPaddingT'] . 'px',
				'padding-right'  => $attr['arrowPaddingR'] . 'px',
				'padding-bottom' => $attr['arrowPaddingB'] . 'px',
				'padding-left'   => $attr['arrowPaddingL'] . 'px',
			),
			' .premium-accordion__title_wrap'   => array(
				'padding-top'    => $attr['titlePaddingT'] . 'px',
				'padding-right'  => $attr['titlePaddingR'] . 'px',
				'padding-bottom' => $attr['titlePaddingB'] . 'px',
				'padding-left'   => $attr['titlePaddingL'] . 'px',
			),
			' .premium-accordion__desc_wrap'    => array(
				'padding-top'    => $attr['descPaddingT'] . 'px',
				'padding-right'  => $attr['descPaddingR'] . 'px',
				'padding-bottom' => $attr['descPaddingB'] . 'px',
				'padding-left'   => $attr['descPaddingL'] . 'px',
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
			' .premium-accordion__icon_wrap'    => array(
				'padding-top'    => $attr['arrowPaddingTTablet'] . 'px',
				'padding-right'  => $attr['arrowPaddingRTablet'] . 'px',
				'padding-bottom' => $attr['arrowPaddingBTablet'] . 'px',
				'padding-left'   => $attr['arrowPaddingLTablet'] . 'px',
			),
			' .premium-accordion__title_wrap'   => array(
				'padding-top'    => $attr['titlePaddingTTablet'] . 'px',
				'padding-right'  => $attr['titlePaddingRTablet'] . 'px',
				'padding-bottom' => $attr['titlePaddingBTablet'] . 'px',
				'padding-left'   => $attr['titlePaddingLTablet'] . 'px',
			),
			' .premium-accordion__desc_wrap'    => array(
				'padding-top'    => $attr['descPaddingTTablet'] . 'px',
				'padding-right'  => $attr['descPaddingRTablet'] . 'px',
				'padding-bottom' => $attr['descPaddingBTablet'] . 'px',
				'padding-left'   => $attr['descPaddingLTablet'] . 'px',
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
			' .premium-accordion__icon_wrap'    => array(
				'padding-top'    => $attr['arrowPaddingTMobile'] . 'px',
				'padding-right'  => $attr['arrowPaddingRMobile'] . 'px',
				'padding-bottom' => $attr['arrowPaddingBMobile'] . 'px',
				'padding-left'   => $attr['arrowPaddingLMobile'] . 'px',
			),
			' .premium-accordion__title_wrap'   => array(
				'padding-top'    => $attr['titlePaddingTMobile'] . 'px',
				'padding-right'  => $attr['titlePaddingRMobile'] . 'px',
				'padding-bottom' => $attr['titlePaddingBMobile'] . 'px',
				'padding-left'   => $attr['titlePaddingLMobile'] . 'px',
			),
			' .premium-accordion__desc_wrap'    => array(
				'padding-top'    => $attr['descPaddingTMobile'] . 'px',
				'padding-right'  => $attr['descPaddingRMobile'] . 'px',
				'padding-bottom' => $attr['descPaddingBMobile'] . 'px',
				'padding-left'   => $attr['descPaddingLMobile'] . 'px',
			),
		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '.premium-accordion-' : '#premium-accordion-';

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

			' '                       => array(
				'padding-top'    => self::get_css_value( $attr['paddingT'], $attr['paddingU'] ),
				'padding-right'  => self::get_css_value( $attr['paddingR'], $attr['paddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingB'], $attr['paddingU'] ),
				'padding-left'   => self::get_css_value( $attr['paddingL'], $attr['paddingU'] ),
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

			' '                       => array(
				'padding-top'    => self::get_css_value( $attr['paddingTTablet'], $attr['paddingU'] ),
				'padding-right'  => self::get_css_value( $attr['paddingRTablet'], $attr['paddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingBTablet'], $attr['paddingU'] ),
				'padding-left'   => self::get_css_value( $attr['paddingLTablet'], $attr['paddingU'] ),
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
			' '                       => array(
				'padding-top'    => self::get_css_value( $attr['paddingTMobile'], $attr['paddingU'] ),
				'padding-right'  => self::get_css_value( $attr['paddingRMobile'], $attr['paddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingBMobile'], $attr['paddingU'] ),
				'padding-left'   => self::get_css_value( $attr['paddingLMobile'], $attr['paddingU'] ),
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

	public static function get_button_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/button']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' .premium-button' => array(
				'font-size' => self::get_css_value( $attr['textSize'], $attr['textSizeUnit'] ),

				'padding'   => $attr['paddingUpdate'] ? $attr['paddingT'] . $attr['paddingU'] . ' ' . $attr['paddingR'] . $attr['paddingU'] . ' ' . $attr['paddingB'] . $attr['paddingU'] . ' ' . $attr['paddingL'] . $attr['paddingU'] : $attr['padding'] . $attr['paddingU'],
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' .premium-button' => array(
				'font-size' => self::get_css_value( $attr['textSizeTablet'], $attr['textSizeUnit'] ),
				'padding'   => $attr['paddingUpdate'] ? $attr['paddingTTablet'] . $attr['paddingU'] . ' ' . $attr['paddingRTablet'] . $attr['paddingU'] . ' ' . $attr['paddingBTablet'] . $attr['paddingU'] . ' ' . $attr['paddingLTablet'] . $attr['paddingU'] : $attr['padding'] . $attr['paddingU'],

			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' .premium-button' => array(
				'font-size' => self::get_css_value( $attr['textSizeMobile'], $attr['textSizeUnit'] ),
				'padding'   => $attr['paddingUpdate'] ? $attr['paddingTMobile'] . $attr['paddingU'] . ' ' . $attr['paddingRMobile'] . $attr['paddingU'] . ' ' . $attr['paddingBMobile'] . $attr['paddingU'] . ' ' . $attr['paddingLMobile'] . $attr['paddingU'] : $attr['padding'] . $attr['paddingU'],
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
				'font-size'     => self::get_css_value( $attr['titleSize'], $attr['titleSizeUnit'] ),
				'margin-top'    => $attr['titleT'] . 'px',
				'margin-bottom' => $attr['titleB'] . 'px',
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
				'font-size'     => self::get_css_value( $attr['titleSizeTablet'], $attr['titleSizeUnit'] ),
				'margin-top'    => $attr['titleTTablet'] . 'px',
				'margin-bottom' => $attr['titleBTablet'] . 'px',
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
				'font-size'     => self::get_css_value( $attr['titleSizeMobile'], $attr['titleSizeUnit'] ),
				'margin-top'    => $attr['titleTMobile'] . 'px',
				'margin-bottom' => $attr['titleBMobile'] . 'px',
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

	public static function get_dual_css( $attr, $id ) {

		$defaults = self::$block_atts['premium/dheading-block']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' .premium-dheading-block__first'       => array(
				'font-size'      => self::get_css_value( $attr['firstSize'], $attr['firstSizeUnit'] ),
				'padding-top'    => $attr['firstPaddingT'] . 'px',
				'padding-right'  => $attr['firstPaddingR'] . 'px',
				'padding-bottom' => $attr['firstPaddingB'] . 'px',
				'padding-left'   => $attr['firstPaddingL'] . 'px',
				'margin-right'   => $attr['firstMarginR'] . 'px',
				'margin-left'    => $attr['firstMarginL'] . 'px',
			),
			' . premium - dheading - block__second' => array(
				'font - size'    => self::get_css_value( $attr['secondSize'], $attr['secondSizeUnit'] ),
				'padding-top'    => $attr['secondPaddingT'] . 'px',
				'padding-right'  => $attr['secondPaddingR'] . 'px',
				'padding-bottom' => $attr['secondPaddingB'] . 'px',
				'padding-left'   => $attr['secondPaddingL'] . 'px',
				'margin-right'   => $attr['secondMarginR'] . 'px',
				'margin-left'    => $attr['secondMarginL'] . 'px',
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' . premium - dheading - block__first' => array(
				'font - size'    => self::get_css_value( $attr['firstSizeTablet'], $attr['firstSizeUnit'] ),
				'padding-top'    => $attr['firstPaddingTTablet'] . 'px',
				'padding-right'  => $attr['firstPaddingRTablet'] . 'px',
				'padding-bottom' => $attr['firstPaddingBTablet'] . 'px',
				'padding-left'   => $attr['firstPaddingLTablet'] . 'px',
				'margin-right'   => $attr['firstMarginRTablet'] . 'px',
				'margin-left'    => $attr['firstMarginLTablet'] . 'px',
			),
			' . premium-dheading-block__second'    => array(
				'font-size'      => self::get_css_value( $attr['secondSizeTablet'], $attr['secondSizeUnit'] ),
				'padding-top'    => $attr['secondPaddingTTablet'] . 'px',
				'padding-right'  => $attr['secondPaddingRTablet'] . 'px',
				'padding-bottom' => $attr['secondPaddingBTablet'] . 'px',
				'padding-left'   => $attr['secondPaddingLTablet'] . 'px',
				'margin-right'   => $attr['secondMarginRTablet'] . 'px',
				'margin-left'    => $attr['secondMarginLTablet'] . 'px',
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' . premium - dheading - block__first'  => array(
				'font - size'      => self::get_css_value( $attr['firstSizeMobile'], $attr['firstSizeUnit'] ),
				'padding - top'    => $attr['firstPaddingTMobile'] . 'px',
				'padding - right'  => $attr['firstPaddingRMobile'] . 'px',
				'padding - bottom' => $attr['firstPaddingBMobile'] . 'px',
				'padding - left'   => $attr['firstPaddingLMobile'] . 'px',
				'margin-right'     => $attr['firstMarginRMobile'] . 'px',
				'margin-left'      => $attr['firstMarginLMobile'] . 'px',
			),
			' . premium - dheading - block__second' => array(
				'font - size'      => self::get_css_value( $attr['secondSizeMobile'], $attr['secondSizeUnit'] ),
				'padding - top'    => $attr['secondPaddingTMobile'] . 'px',
				'padding - right'  => $attr['secondPaddingRMobile'] . 'px',
				'padding - bottom' => $attr['secondPaddingBMobile'] . 'px',
				'padding - left'   => $attr['secondPaddingLMobile'] . 'px',
				'margin-right'     => $attr['secondMarginRMobile'] . 'px',
				'margin-left'      => $attr['secondMarginLMobile'] . 'px',
			),

		);
		// Mobile CSS End.

		$base_selector = ( $attr['classMigrate'] ) ? '// premium-dheading-block-' : '.premium-dheading-';

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
	public static function get_icon_css( $attr, $id ) {
		$defaults = self::$block_atts['premium/icon']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' '              => array(
				'padding-top'    => $attr['wrapPaddingT'] . 'px',
				'padding-right'  => $attr['wrapPaddingR'] . 'px',
				'padding-bottom' => $attr['wrapPaddingB'] . 'px',
				'padding-left'   => $attr['wrapPaddingL'] . 'px',
				'margin-top'     => $attr['wrapMarginT'] . 'px',
				'margin-right'   => $attr['wrapMarginR'] . 'px',
				'margin-bottom'  => $attr['wrapMarginB'] . 'px',
				'margin-left'    => $attr['wrapMarginL'] . 'px',
			),
			' .premium-icon' => array(
				'padding-top'    => self::get_css_value( $attr['paddingT'], $attr['paddingU'] ),
				'padding-right'  => self::get_css_value( $attr['paddingR'], $attr['paddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingB'], $attr['paddingU'] ),
				'padding-left'   => self::get_css_value( $attr['paddingL'], $attr['paddingU'] ),
				'margin-top'     => $attr['marginT'] . 'px',
				'margin-right'   => $attr['marginR'] . 'px',
				'margin-bottom'  => $attr['marginB'] . 'px',
				'margin-left'    => $attr['marginL'] . 'px',
			),
		);

		$t_selectors = array(
			' '              => array(
				'padding-top'    => $attr['wrapPaddingTTablet'] . 'px',
				'padding-right'  => $attr['wrapPaddingRTablet'] . 'px',
				'padding-bottom' => $attr['wrapPaddingBTablet'] . 'px',
				'padding-left'   => $attr['wrapPaddingLTablet'] . 'px',
				'margin-top'     => $attr['wrapMarginTTablet'] . 'px',
				'margin-right'   => $attr['wrapMarginRTablet'] . 'px',
				'margin-bottom'  => $attr['wrapMarginBTablet'] . 'px',
				'margin-left'    => $attr['wrapMarginLTablet'] . 'px',
			),
			' .premium-icon' => array(
				'padding-top'    => self::get_css_value( $attr['paddingTTablet'], $attr['paddingU'] ),
				'padding-right'  => self::get_css_value( $attr['paddingRTablet'], $attr['paddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingBTablet'], $attr['paddingU'] ),
				'padding-left'   => self::get_css_value( $attr['paddingLTablet'], $attr['paddingU'] ),
				'margin-top'     => $attr['marginTTablet'] . 'px',
				'margin-right'   => $attr['marginRTablet'] . 'px',
				'margin-bottom'  => $attr['marginBTablet'] . 'px',
				'margin-left'    => $attr['marginLTablet'] . 'px',
			),
		);

		$m_selectors   = array(
			' '              => array(
				'padding-top'    => $attr['wrapPaddingTMobile'] . 'px',
				'padding-right'  => $attr['wrapPaddingRMobile'] . 'px',
				'padding-bottom' => $attr['wrapPaddingBMobile'] . 'px',
				'padding-left'   => $attr['wrapPaddingLMobile'] . 'px',
				'margin-top'     => $attr['wrapMarginTMobile'] . 'px',
				'margin-right'   => $attr['wrapMarginRMobile'] . 'px',
				'margin-bottom'  => $attr['wrapMarginBMobile'] . 'px',
				'margin-left'    => $attr['wrapMarginLMobile'] . 'px',
			),
			' .premium-icon' => array(
				'padding-top'    => self::get_css_value( $attr['paddingTMobile'], $attr['paddingU'] ),
				'padding-right'  => self::get_css_value( $attr['paddingRMobile'], $attr['paddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingBMobile'], $attr['paddingU'] ),
				'padding-left'   => self::get_css_value( $attr['paddingLMobile'], $attr['paddingU'] ),
				'margin-top'     => $attr['marginTMobile'] . 'px',
				'margin-right'   => $attr['marginRMobile'] . 'px',
				'margin-bottom'  => $attr['marginBMobile'] . 'px',
				'margin-left'    => $attr['marginLMobile'] . 'px',
			),
		);
		$base_selector = ( $attr['classMigrate'] ) ? '#premium-icon-' : '.premium-icon-';

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

	public static function get_iconBox_css( $attr, $id ) {
		$defaults = self::$block_atts['premium/icon-box']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' '                              => array(
				'padding-top'    => self::get_css_value( $attr['paddingT'], $attr['paddingU'] ),
				'padding-right'  => self::get_css_value( $attr['paddingR'], $attr['paddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingB'], $attr['paddingU'] ),
				'padding-left'   => self::get_css_value( $attr['paddingL'], $attr['paddingU'] ),
				'margin-top'     => $attr['marginT'] . 'px',
				'margin-right'   => $attr['marginR'] . 'px',
				'margin-bottom'  => $attr['marginB'] . 'px',
				'margin-left'    => $attr['marginL'] . 'px',
			),
			' .premium-icon-box__title_wrap  .premium-icon-box__title_wrap' => array(
				'margin-top'    => $attr['titleMarginT'] . 'px',
				'margin-bottom' => $attr['titleMarginB'] . 'px',
			),
			'  .premium-icon-box__desc_wrap' => array(
				'margin-top'    => $attr['descMarginT'] . 'px',
				'margin-bottom' => $attr['descMarginB'] . 'px',
			),
			' .premium-icon-box__btn_wrap'   => array(
				'margin-top'    => $attr['btnMarginT'] . 'px',
				'margin-bottom' => $attr['btnMarginB'] . 'px',
			),
			'  .premium-icon-box__title'     => array(
				'font-size' => self::get_css_value( $attr['titleSize'], $attr['titleSizeUnit'] ),
			),
			' .premium-icon-box__desc'       => array(
				'font-size' => self::get_css_value( $attr['descSize'], $attr['descSizeUnit'] ),
			),
			' .premium-icon-box__btn'        => array(
				'font-size'      => self::get_css_value( $attr['btnSize'], $attr['btnSizeUnit'] ),
				'padding-top'    => self::get_css_value( $attr['btnPaddingT'], $attr['btnPaddingU'] ),
				'padding-right'  => self::get_css_value( $attr['btnPaddingR'], $attr['btnPaddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['btnPaddingB'], $attr['btnPaddingU'] ),
				'padding-left'   => self::get_css_value( $attr['btnPaddingL'], $attr['btnPaddingU'] ),
			),
		);
		// Desktop Icon Size CSS ends.

		// Tablet CSS Start.
		$t_selectors = array(
			' '                              => array(
				'padding-top'    => self::get_css_value( $attr['paddingTTablet'], $attr['paddingU'] ),
				'padding-right'  => self::get_css_value( $attr['paddingRTablet'], $attr['paddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingBTablet'], $attr['paddingU'] ),
				'padding-left'   => self::get_css_value( $attr['paddingLTablet'], $attr['paddingU'] ),
				'margin-top'     => $attr['marginTTablet'] . 'px',
				'margin-right'   => $attr['marginRTablet'] . 'px',
				'margin-bottom'  => $attr['marginBTablet'] . 'px',
				'margin-left'    => $attr['marginLTablet'] . 'px',
			),
			' .premium-icon-box__title_wrap  .premium-icon-box__title_wrap' => array(
				'margin-top'    => $attr['titleMarginTTablet'] . 'px',
				'margin-bottom' => $attr['titleMarginBTablet'] . 'px',
			),
			'  .premium-icon-box__desc_wrap' => array(
				'margin-top'    => $attr['descMarginTTablet'] . 'px',
				'margin-bottom' => $attr['descMarginBTablet'] . 'px',
			),
			' .premium-icon-box__btn_wrap'   => array(
				'margin-top'    => $attr['btnMarginTTablet'] . 'px',
				'margin-bottom' => $attr['btnMarginBTablet'] . 'px',
			),
			'  .premium-icon-box__title'     => array(
				'font-size' => self::get_css_value( $attr['titleSizeTablet'], $attr['titleSizeUnit'] ),
			),
			' .premium-icon-box__desc'       => array(
				'font-size' => self::get_css_value( $attr['descSizeTablet'], $attr['descSizeUnit'] ),
			),
			' .premium-icon-box__btn'        => array(
				'font-size'      => self::get_css_value( $attr['btnSizeTablet'], $attr['btnSizeUnit'] ),
				'padding-top'    => self::get_css_value( $attr['btnPaddingTTablet'], $attr['btnPaddingU'] ),
				'padding-right'  => self::get_css_value( $attr['btnPaddingRTablet'], $attr['btnPaddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['btnPaddingBTablet'], $attr['btnPaddingU'] ),
				'padding-left'   => self::get_css_value( $attr['btnPaddingLTablet'], $attr['btnPaddingU'] ),
			),
		);
		// Tablet CSS End.

		// Mobile CSS Start.
		$m_selectors = array(
			' '                              => array(
				'padding-top'    => self::get_css_value( $attr['paddingTMobile'], $attr['paddingU'] ),
				'padding-right'  => self::get_css_value( $attr['paddingRMobile'], $attr['paddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingBMobile'], $attr['paddingU'] ),
				'padding-left'   => self::get_css_value( $attr['paddingLMobile'], $attr['paddingU'] ),
				'margin-top'     => $attr['marginTMobile'] . 'px',
				'margin-right'   => $attr['marginRMobile'] . 'px',
				'margin-bottom'  => $attr['marginBMobile'] . 'px',
				'margin-left'    => $attr['marginLMobile'] . 'px',
			),
			' .premium-icon-box__title_wrap  .premium-icon-box__title_wrap' => array(
				'margin-top'    => $attr['titleMarginTMobile'] . 'px',
				'margin-bottom' => $attr['titleMarginBMobile'] . 'px',
			),
			'  .premium-icon-box__desc_wrap' => array(
				'margin-top'    => $attr['descMarginTMobile'] . 'px',
				'margin-bottom' => $attr['descMarginBMobile'] . 'px',
			),
			' .premium-icon-box__btn_wrap'   => array(
				'margin-top'    => $attr['btnMarginTMobile'] . 'px',
				'margin-bottom' => $attr['btnMarginBMobile'] . 'px',
			),
			'  .premium-icon-box__title'     => array(
				'font-size' => self::get_css_value( $attr['titleSizeMobile'], $attr['titleSizeUnit'] ),
			),
			' .premium-icon-box__desc'       => array(
				'font-size' => self::get_css_value( $attr['descSizeMobile'], $attr['descSizeUnit'] ),
			),
			' .premium-icon-box__btn'        => array(
				'font-size'      => self::get_css_value( $attr['btnSizeMobile'], $attr['btnSizeUnit'] ),
				'padding-top'    => self::get_css_value( $attr['btnPaddingTMobile'], $attr['btnPaddingU'] ),
				'padding-right'  => self::get_css_value( $attr['btnPaddingRMobile'], $attr['btnPaddingU'] ),
				'padding-bottom' => self::get_css_value( $attr['btnPaddingBMobile'], $attr['btnPaddingU'] ),
				'padding-left'   => self::get_css_value( $attr['btnPaddingLMobile'], $attr['btnPaddingU'] ),
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

	public static function get_section_css( $attr, $id ) {
		$defaults = self::$block_atts['premium/container']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(
			' ' => array(
				'padding-top'    => $attr['paddingTop'] . 'px',
				'padding-right'  => $attr['paddingRight'] . 'px',
				'padding-bottom' => $attr['paddingBottom'] . 'px',
				'padding-left'   => $attr['paddingLeft'] . 'px',
				'margin-top'     => $attr['marginTop'] . 'px',
				'margin-right'   => $attr['marginRight'] . 'px',
				'margin-bottom'  => $attr['marginBottom'] . 'px',
				'margin-left'    => $attr['marginLeft'] . 'px',
			),

		);

		$t_selectors = array(
			' ' => array(
				'padding-top'    => $attr['paddingTopTablet'] . 'px',
				'padding-right'  => $attr['paddingRightTablet'] . 'px',
				'padding-bottom' => $attr['paddingBottomTablet'] . 'px',
				'padding-left'   => $attr['paddingLeftTablet'] . 'px',
				'margin-top'     => $attr['marginTopTablet'] . 'px',
				'margin-right'   => $attr['marginRightTablet'] . 'px',
				'margin-bottom'  => $attr['marginBottomTablet'] . 'px',
				'margin-left'    => $attr['marginLeftTablet'] . 'px',
			),

		);

		$m_selectors = array(
			' ' => array(
				'padding-top'    => $attr['paddingTopMobile'] . 'px',
				'padding-right'  => $attr['paddingRightMobile'] . 'px',
				'padding-bottom' => $attr['paddingBottomMobile'] . 'px',
				'padding-left'   => $attr['paddingLeftMobile'] . 'px',
				'margin-top'     => $attr['marginTopMobile'] . 'px',
				'margin-right'   => $attr['marginRightMobile'] . 'px',
				'margin-bottom'  => $attr['marginBottomMobile'] . 'px',
				'margin-left'    => $attr['marginLeftMobile'] . 'px',
			),

		);
		$base_selector = ( $attr['classMigrate'] ) ? '#premium-container-' : '.premium-container-';

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

			''                                   => array(
				'padding-top'    => self::get_css_value( $attr['paddingTop'], $attr['paddingUnit'] ),
				'padding-right'  => self::get_css_value( $attr['paddingRight'], $attr['paddingUnit'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingBottom'], $attr['paddingUnit'] ),
				'padding-left'   => self::get_css_value( $attr['paddingLeft'], $attr['paddingUnit'] ),
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
			''                                   => array(
				'padding-top'    => self::get_css_value( $attr['paddingTopTablet'], $attr['paddingUnit'] ),
				'padding-right'  => self::get_css_value( $attr['paddingRightTablet'], $attr['paddingUnit'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingBottomTablet'], $attr['paddingUnit'] ),
				'padding-left'   => self::get_css_value( $attr['paddingLeftTablet'], $attr['paddingUnit'] ),
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
			''                                   => array(
				'padding-top'    => self::get_css_value( $attr['paddingTopMobile'], $attr['paddingUnit'] ),
				'padding-right'  => self::get_css_value( $attr['paddingRightMobile'], $attr['paddingUnit'] ),
				'padding-bottom' => self::get_css_value( $attr['paddingBottomMobile'], $attr['paddingUnit'] ),
				'padding-left'   => self::get_css_value( $attr['paddingLeftMobile'], $attr['paddingUnit'] ),
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

	public static function get_videoBox_css( $attr, $id ) {
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

		// Ignore PHPCS Comment For Strict Comparison.
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
		 * @param string $hexColor value of Color.
		 */
	public static function hex_to_rgba( $hexColor ) {

		$color = str_replace( '#', '', $hexColor );

		if ( strlen( $color ) > 3 ) {
			$rgb =
			hexdec( substr( $color, 0, 2 ) ) . ',' . hexdec( substr( $color, 2, 2 ) ) .

			',' . hexdec( substr( $color, 4, 2 ) );

		} else {
			$color = str_replace( '#', '', $hexColor );
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
