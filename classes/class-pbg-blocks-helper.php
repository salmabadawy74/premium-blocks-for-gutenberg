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
				'background-color' => $attr['fancyTextBGColor'],
				'letter-spacing'   => self::get_css_value( $attr['fancyTextLetter'], 'px' ),
				'text-transform'   => $attr['fancyTextUpper'] ? 'uppercase' : 'none',
				'font-style'       => $attr['fancyTextStyle'],
				'font-weight'      => $attr['fancyTextWeight'],
				'text-shadow'      => self::get_css_value( $attr['shadowHorizontal'], 'px ' ) . self::get_css_value( $attr['shadowVertical'], 'px ' ) . self::get_css_value( $attr['shadowBlur'], 'px ' ) . $attr['shadowColor'],
			),
			' .premium-fancy-text-title-slide' => array(
				'font-size'        => self::get_css_value( $attr['fancyTextfontSize'], $attr['fancyTextfontSizeUnit'] ),
				'color'            => $attr['fancyTextColor'],
				'background-color' => $attr['fancyTextBGColor'],
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
				'background-color' => $attr['textBGColor'],
				'letter-spacing'   => self::get_css_value( $attr['textLetter'], 'px' ),
				'text-transform'   => $attr['textUpper'] ? 'uppercase' : 'none',
				'font-style'       => self::get_css_value( $attr['textStyle'], ' !important' ),
				'font-weight'      => self::get_css_value( $attr['textWeight'], ' !important' ),
			),
			' .premium-fancy-text-suffix-text' => array(
				'font-size'        => self::get_css_value( $attr['textfontSize'], $attr['textfontSizeUnit'] ),
				'color'            => $attr['textColor'],
				'background-color' => $attr['textBGColor'],
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
			' .premium-fancy-text-title'        => array(
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
