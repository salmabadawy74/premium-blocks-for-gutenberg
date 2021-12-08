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

		add_action( 'init', array( $this, 'load_api_settings' ) );
		add_action( 'init', array( $this, 'on_init' ), 20 );

		// Enqueue Editor Assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'pbg_editor' ) );

		// Enqueue Frontend Styles.
		add_action( 'enqueue_block_assets', array( $this, 'pbg_frontend' ) );

		// Register Premium Blocks category.
		add_filter( 'block_categories_all', array( $this, 'register_premium_category' ), 10, 1 );

		// Generate Blocks Stylesheet.
		// add_action( 'wp', array( $this, 'generate_stylesheet' ), 99 );
		add_action( 'wp_enqueue_scripts', array( $this, 'generate_stylesheet' ), 20 );

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
		$is_fa_enabled       = isset( self::$config['premium-fa-css'] ) ? self::$config['premium-fa-css'] : true;
		$plugin_dependencies = array( 'wp-blocks', 'react', 'react-dom', 'wp-components', 'wp-compose', 'wp-data', 'wp-edit-post', 'wp-element', 'wp-hooks', 'wp-i18n', 'wp-plugins', 'wp-polyfill', 'wp-primitives', 'wp-api', 'wp-widgets' );

		wp_enqueue_script(
			'pbg-editor',
			PREMIUM_BLOCKS_URL . 'assets/js/build.js',
			$plugin_dependencies,
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


	public function load_api_settings() {
		register_setting(
			'mail_chimp_api',
			'mail_chimp_api',
			array(
				'type'         => 'string',
				'description'  => __( 'Mail Chimp API Key', '' ),
				'show_in_rest' => true,
				'default'      => '',
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

		$is_lottie_enabled     = self::$blocks['lottie'];
		$is_newsletter_enabled = self::$blocks['newsletter'];

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

		if ( $is_fancy_text_enabled ) {

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
		if ( $is_newsletter_enabled ) {

			wp_enqueue_script(
				'pbg-newsletter-js',
				PREMIUM_BLOCKS_URL . 'assets/js/newsletter.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);

			wp_enqueue_script(
				'pbg-form-js',
				PREMIUM_BLOCKS_URL . 'assets/js/mailchimp.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
			wp_localize_script(
				'pbg-newsletter-js',
				'premium_blocks_form_params',
				array(
					'ajaxurl'       => admin_url( 'admin-ajax.php' ),
					'error_message' => __( 'Please fix the errors to proceed', 'premium-blocks' ),
					'nonce'         => wp_create_nonce( 'pa-newsletter-block-nonce' ),
					'required'      => __( 'is required', 'premium-blocks' ),
					'mismatch'      => __( 'does not match', 'premium-blocks' ),
					'validation'    => __( 'is not valid', 'premium-blocks' ),
					'duplicate'     => __( 'requires a unique entry and this value has already been used', 'premium-blocks' ),
					'item'          => __( 'Item', 'premium-blocks' ),
				)
			);
				wp_localize_script(
					'pbg-form-js',
					'settings',
					array(
						'ajaxurl'       => admin_url( 'admin-ajax.php' ),
						'error_message' => __( 'Please fix the errors to proceed', 'premium-blocks' ),
						'nonce'         => wp_create_nonce( 'pa-newsletter-block-nonce' ),
						'required'      => __( 'is required', 'premium-blocks' ),
						'mismatch'      => __( 'does not match', 'premium-blocks' ),
						'validation'    => __( 'is not valid', 'premium-blocks' ),
						'duplicate'     => __( 'requires a unique entry and this value has already been used', 'premium-blocks' ),
						'item'          => __( 'Item', 'premium-blocks' ),
					)
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
		wp_localize_script(
			'pbg-editor',
			'PremiumSettings',
			array(
				'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
				'nonce'   => wp_create_nonce( 'pa-blog-block-nonce' ),
			)
		);
	}





	public function on_init() {
		if ( defined( 'TOOLSET_VERSION' ) ) {
			add_filter( 'kadence_blocks_render_head_css', array( $this, 'add_toolset_depreciated_filter_compatibility' ), 10, 3 );
		}
		// Only load if Gutenberg is available.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}
		register_block_type(
			'premium/fancy-text',
			array(
				'render_callback' => array( $this, 'get_fancy_text_css' ),
			)
		);
		register_block_type(
			'premium/accordion',
			array(
				'render_callback' => array( $this, 'get_accordion_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
		register_block_type(
			'premium/banner',
			array(
				'render_callback' => array( $this, 'get_banner_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
		register_block_type(
			'premium/button',
			array(
				'render_callback' => array( $this, 'get_button_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
		register_block_type(
			'premium/countup',
			array(
				'render_callback' => array( $this, 'get_countup_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
		register_block_type(
			'premium/dheading-block',
			array(
				'render_callback' => array( $this, 'get_dual_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
		register_block_type(
			'premium/icon-box',
			array(
				'render_callback' => array( $this, 'get_iconbox_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
		register_block_type(
			'premium/testimonial',
			array(
				'render_callback' => array( $this, 'get_testimonial_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
		register_block_type(
			'premium/video-box',
			array(
				'render_callback' => array( $this, 'get_videobox_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);

		register_block_type(
			'premium/pricing-table',
			array(
				'render_callback' => array( $this, 'get_pricing_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
		register_block_type(
			'premium/lottie',
			array(
				'render_callback' => array( $this, 'get_lottie_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
		register_block_type(
			'premium/newsletter',
			array(
				'render_callback' => array( $this, 'get_newsLetter_css' ),
				// 'editor_script'   => 'kadence-blocks-js',
				// 'editor_style'    => 'kadence-blocks-editor-css',
			)
		);
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

	public function it_is_not_amp() {
		$not_amp = true;
		if ( function_exists( 'is_amp_endpoint' ) && is_amp_endpoint() ) {
			$not_amp = false;
		}
		return $not_amp;
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
		<style type="text/css" media="all" id="premium-style-frontend">
			<?php echo self::$stylesheet; ?>
		</style>
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
			case 'premium/newsletter':
				$css += $this->get_newsLetter_css( $blockattr, $block_id );
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
	public function get_fancy_text_css( $attributes, $content ) {
		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
			$pos       = strpos( $content, 'inner-column-' );
			if ( false !== $pos ) {
				$content = substr_replace( $content, 'kadence-column' . $unique_id . ' inner-column-', $pos, strlen( 'inner-column-' ) );
			}
		}
		if ( $this->it_is_not_amp() ) {
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
		$style_id = 'kt-blocks' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'kadence_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			$css = $this->get_fancy_text_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'accordion', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;
	}
	public function get_fancy_text_css_style( $attr, $unique_id ) {
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'kadence_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'kadence_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'kadence_tablet_media_query', '(min-width: 1025px)' );
		// FancyText Style
		if ( isset( $attr['fancyStyles'] ) ) {
			if ( isset( $attr['fancyStyles'][0]['fancyTextfontSize'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'font-size', $css->render_color( $attr['fancyStyles'][0]['fancyTextfontSize'] . $attr['fancyStyles'][0]['fancyTextfontSizeUnit'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'font-size', $css->render_color( $attr['fancyStyles'][0]['fancyTextfontSize'] . $attr['fancyStyles'][0]['fancyTextfontSizeUnit'] ) );
			}
			if ( isset( $attr['fancyStyles'][0]['fancyTextColor'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'color', $css->render_color( $attr['fancyStyles'][0]['fancyTextColor'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'color', $css->render_color( $attr['fancyStyles'][0]['fancyTextColor'] ) );
			}
			if ( isset( $attr['fancyStyles'][0]['fancyTextWeight'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'font-weight', $css->render_color( $attr['fancyStyles'][0]['fancyTextWeight'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'font-weight', $css->render_color( $attr['fancyStyles'][0]['fancyTextWeight'] ) );
			}
			if ( isset( $attr['fancyStyles'][0]['fancyTextLetter'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'letter-spacing', $css->render_color( $attr['fancyStyles'][0]['fancyTextLetter'] . 'px' ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'letter-spacing', $css->render_color( $attr['fancyStyles'][0]['fancyTextLetter'] . 'px' ) );
			}
			if ( isset( $attr['fancyStyles'][0]['fancyTextUpper'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'text-transform', $css->render_color( $attr['fancyStyles'][0]['fancyTextUpper'] ? 'uppercase' : 'none' ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'text-transform', $css->render_color( $attr['fancyStyles'][0]['fancyTextUpper'] ? 'uppercase' : 'none' ) );
			}
			if ( isset( $attr['fancyStyles'][0]['fancyTextStyle'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'font-style', $css->render_color( $attr['fancyStyles'][0]['fancyTextStyle'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'font-style', $css->render_color( $attr['fancyStyles'][0]['fancyTextStyle'] ) );
			}
			if ( isset( $attr['fancyStyles'][0]['fancyTextStyle'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'background-color', $css->render_color( $attr['fancyStyles'][0]['fancyTextBGColor'] ? 'rgba(' . self::hex_to_rgba( $attr['fancyStyles'][0]['fancyTextBGColor'] ) . ',' . $attr['fancyStyles'][0]['fancyTextBGOpacity'] . ')' : 'transparent' ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'background-color', $css->render_color( $attr['fancyStyles'][0]['fancyTextBGColor'] ? 'rgba(' . self::hex_to_rgba( $attr['fancyStyles'][0]['fancyTextBGColor'] ) . ',' . $attr['fancyStyles'][0]['fancyTextBGOpacity'] . ')' : 'transparent' ) );
			}
			if ( isset( $attr['fancyStyles'][0]['shadowHorizontal'] ) || $attr['fancyStyles'][0]['shadowVertical'] || $attr['fancyStyles'][0]['shadowBlur'] || $attr['fancyStyles'][0]['shadowColor'] ) {

				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'text-shadow', ( $attr['fancyStyles'][0]['shadowHorizontal'] . 'px ' . $attr['fancyStyles'][0]['shadowVertical'] . 'px ' . $attr['fancyStyles'][0]['shadowBlur'] . 'px ' . $css->render_color( $attr['fancyStyles'][0]['shadowColor'] ) ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'text-shadow', ( $attr['fancyStyles'][0]['shadowHorizontal'] . 'px ' . $attr['fancyStyles'][0]['shadowVertical'] . 'px ' . $attr['fancyStyles'][0]['shadowBlur'] . 'px ' . $css->render_color( $attr['fancyStyles'][0]['shadowColor'] ) ) );
			}
		}
		// Prefix and Suffix Style
		if ( isset( $attr['PreStyles'] ) ) {
			if ( isset( $attr['PreStyles'][0]['textfontSize'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
				$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSize'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
				$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSize'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
			}
			if ( isset( $attr['PreStyles'][0]['textWeight'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
				$css->add_property( 'font-weight', $css->render_color( $attr['PreStyles'][0]['textWeight'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
				$css->add_property( 'font-weight', $css->render_color( $attr['PreStyles'][0]['textWeight'] ) );
			}
			if ( isset( $attr['PreStyles'][0]['textLetter'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
				$css->add_property( 'letter-spacing', $css->render_color( $attr['PreStyles'][0]['textLetter'] . 'px' ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
				$css->add_property( 'letter-spacing', $css->render_color( $attr['PreStyles'][0]['textLetter'] . 'px' ) );
			}
			if ( isset( $attr['PreStyles'][0]['textUpper'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
				$css->add_property( 'text-transform', $css->render_color( $attr['PreStyles'][0]['textUpper'] ? 'uppercase' : 'none' ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
				$css->add_property( 'text-transform', $css->render_color( $attr['PreStyles'][0]['textUpper'] ? 'uppercase' : 'none' ) );
			}
			if ( isset( $attr['fancyStyles'][0]['textStyle'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
				$css->add_property( 'font-style', $css->render_color( $attr['fancyStyles'][0]['textStyle'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
				$css->add_property( 'font-style', $css->render_color( $attr['fancyStyles'][0]['textStyle'] ) );
			}
			if ( isset( $attr['PreStyles'][0]['textBGColor'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
				$css->add_property( 'background-color', $css->render_color( $attr['PreStyles'][0]['textBGColor'] ? 'rgba(' . self::hex_to_rgba( $attr['PreStyles'][0]['textBGColor'] ) . ',' . $attr['PreStyles'][0]['textBGOpacity'] . ')' : 'transparent' ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
				$css->add_property( 'background-color', $css->render_color( $attr['PreStyles'][0]['textBGColor'] ? 'rgba(' . self::hex_to_rgba( $attr['PreStyles'][0]['textBGColor'] ) . ',' . $attr['PreStyles'][0]['textBGOpacity'] . ')' : 'transparent' ) );
			}
		}
		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['fancyStyles'][0]['fancyTextfontSizeTablet'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'font-size', $css->render_color( $attr['fancyStyles'][0]['fancyTextfontSizeTablet'] . $attr['fancyStyles'][0]['fancyTextfontSizeUnit'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'font-size', $css->render_color( $attr['fancyStyles'][0]['fancyTextfontSizeTablet'] . $attr['fancyStyles'][0]['fancyTextfontSizeUnit'] ) );
		}
		// Prefix and Suffix Style
		if ( isset( $attr['PreStyles'][0]['textfontSizeTablet'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
				$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSizeTablet'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
				$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSizeTablet'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['fancyStyles'][0]['fancyTextfontSizeMobile'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'font-size', $css->render_color( $attr['fancyStyles'][0]['fancyTextfontSizeMobile'] . $attr['fancyStyles'][0]['fancyTextfontSizeUnit'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'font-size', $css->render_color( $attr['fancyStyles'][0]['fancyTextfontSizeMobile'] . $attr['fancyStyles'][0]['fancyTextfontSizeUnit'] ) );
		}
		// Prefix and Suffix Style
		if ( isset( $attr['PreStyles'][0]['textfontSizeMobile'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
				$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSizeMobile'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
				$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSizeMobile'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
		}
		$css->stop_media_query();
		if ( isset( $attr['kadenceBlockCSS'] ) && ! empty( $attr['kadenceBlockCSS'] ) ) {
			$css->add_css_string( str_replace( 'selector', '.kadence-column' . $unique_id, $attr['kadenceBlockCSS'] ) );
		}
		return $css->css_output();
	}

	public function get_accordion_css( $attributes, $content ) {

		if ( isset( $attributes['accordionId'] ) && ! empty( $attributes['accordionId'] ) ) {
			$unique_id = $attributes['accordionId'];
		} else {
			$unique_id = rand( 100, 10000 );
			$pos       = strpos( $content, 'inner-column-' );
			if ( false !== $pos ) {
				$content = substr_replace( $content, 'kadence-column' . $unique_id . ' inner-column-', $pos, strlen( 'inner-column-' ) );
			}
		}
		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-accordion',
				PREMIUM_BLOCKS_URL . 'assets/js/accordion.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'kt-blocks' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'kadence_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'kadence_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_accordion_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'accordion', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;

	}

	public function render_inline_css( $css, $style_id, $in_content = false ) {

		if ( ! is_admin() ) {
			wp_register_style( $style_id, false );
			wp_enqueue_style( $style_id );
			wp_add_inline_style( $style_id, $css );
			if ( 1 === did_action( 'wp_head' ) && $in_content ) {
				wp_print_styles( $style_id );

			}
		}
	}

	public function should_render_inline( $name, $unique_id ) {
		if ( doing_filter( 'the_content' ) || apply_filters( 'kadence_blocks_force_render_inline_css_in_content', false, $name, $unique_id ) || is_customize_preview() ) {
			return true;
		}
		return false;
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
	public function get_accordion_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'kadence_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'kadence_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'kadence_tablet_media_query', '(min-width: 1025px)' );
		// Style.
		if ( isset( $attr['titleSize'] ) || isset( $attr['titleSizeUnit'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' . ' > .premium-accordion__title' . ' > .premium-accordion__title_text' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleSize'] . 'px' . '!important' ) );
		}
		// Desc Style
		if ( isset( $attr['descSize'] ) || isset( $attr['descSizeUnit'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' . ' > .premium-accordion__desc' );
			$css->add_property( 'font-size', $css->render_color( $attr['descSize'] . 'px' . '!important' ) );
		}
		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['titleSizeTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' . ' > .premium-accordion__title' . ' > .premium-accordion__title_text' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleSizeTablet'] . 'px' . '!important' ) );
		}
		// Desc Style
		if ( isset( $attr['descSizeTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' . ' > .premium-accordion__desc' );
			$css->add_property( 'font-size', $css->render_color( $attr['descSizeTablet'] . 'px' . '!important' ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['titleSizeMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' . ' > .premium-accordion__title' . ' > .premium-accordion__title_text' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleSizeMobile'] . 'px' . '!important' ) );

		}
		// Desc Style
		if ( isset( $attr['descSizeMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' . ' > .premium-accordion__desc' );
			$css->add_property( 'font-size', $css->render_color( $attr['descSizeMobile'] . 'px' . '!important' ) );

		}
		$css->stop_media_query();
		if ( isset( $attr['kadenceBlockCSS'] ) && ! empty( $attr['kadenceBlockCSS'] ) ) {
			$css->add_css_string( str_replace( 'selector', '.kadence-column' . $unique_id, $attr['kadenceBlockCSS'] ) );
		}
		return $css->css_output();
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

	public function get_banner_css( $attributes, $content ) {
		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
			$pos       = strpos( $content, 'inner-column-' );
			if ( false !== $pos ) {
				$content = substr_replace( $content, 'kadence-column' . $unique_id . ' inner-column-', $pos, strlen( 'inner-column-' ) );
			}
		}
		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-banner',
				PREMIUM_BLOCKS_URL . 'assets/js/banner.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'kt-blocks-' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'kadence_blocks_render_inline_css', true, 'banner', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'kadence_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_banner_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'banner', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;
	}
	public function get_banner_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'kadence_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'kadence_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'kadence_tablet_media_query', '(min-width: 1025px)' );
		// Style.
		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSize'] ) || isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-banner-' . $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' . ' > .premium-banner__title' );
				$css->add_property( 'font-size', $css->render_color( $attr['titleStyles'][0]['titleSize'] . 'px' . '!important' ) );
			}
		}
		// Desc Style
		if ( isset( $attr['descStyles'] ) ) {
			if ( isset( $attr['descStyles'][0]['descSize'] ) || isset( $attr['descStyles'][0]['descSizeUnit'] ) ) {
				$css->set_selector( '#premium-banner-' . $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' . ' > .premium-banner__desc' );
				$css->add_property( 'font-size', $css->render_color( $attr['descStyles'][0]['descSize'] . 'px' . '!important' ) );
			}
		}
		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['titleStyles'][0]['titleSizeTablet'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' . ' > .premium-banner__title' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleStyles'][0]['titleSizeTablet'] . 'px' . '!important' ) );
		}
		// Desc Style
		if ( isset( $attr['descStyles'][0]['descSizeTablet'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' . ' > .premium-banner__desc' );
			$css->add_property( 'font-size', $css->render_color( $attr['descStyles'][0]['descSizeTablet'] . 'px' . '!important' ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attr['titleStyles'][0]['titleSizeMobile'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' . ' > .premium-banner__title' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleStyles'][0]['titleSizeMobile'] . 'px' . '!important' ) );

		}
		// Desc Style
		if ( isset( $attr['descStyles'][0]['descSizeMobile'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' . ' > .premium-banner__desc' );
			$css->add_property( 'font-size', $css->render_color( $attr['descStyles'][0]['descSizeMobile'] . 'px' . '!important' ) );

		}
		$css->stop_media_query();

		return $css->css_output();

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
	public function get_button_css( $attributes, $content ) {
		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
			$pos       = strpos( $content, 'inner-column-' );
			if ( false !== $pos ) {
				$content = substr_replace( $content, 'kadence-column' . $unique_id . ' inner-column-', $pos, strlen( 'inner-column-' ) );
			}
		}
		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-banner',
				PREMIUM_BLOCKS_URL . 'assets/js/banner.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'kt-blocks-' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'kadence_blocks_render_inline_css', true, 'banner', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'kadence_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_button_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'banner', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;
	}

	public function get_button_css_style( $attr, $unique_id ) {
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'kadence_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'kadence_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'kadence_tablet_media_query', '(min-width: 1025px)' );

		// Title Style
		if ( isset( $attr['textStyles'] ) ) {
			if ( isset( $attr['textStyles'][0]['textSize'] ) || isset( $attr['textStyles'][0]['textSizeUnit'] ) ) {
				$css->set_selector( '#premium-button-wrap-' . $unique_id . '> .premium-button' );
				$css->add_property( 'font-size', $css->render_color( $attr['textStyles'][0]['textSize'] . $attr['textStyles'][0]['textSizeUnit'] . '!important' ) );
			}
		}

		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['textStyles'][0]['textSizeTablet'] ) ) {
				$css->set_selector( '#premium-button-wrap-' . $unique_id . '> .premium-button' );
			$css->add_property( 'font-size', $css->render_color( $attr['textStyles'][0]['textSizeTablet'] . $attr['textStyles'][0]['textSizeUnit'] . '!important' ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attr['textStyles'][0]['textSizeMobile'] ) ) {
				$css->set_selector( '#premium-button-wrap-' . $unique_id . '> .premium-button' );
			$css->add_property( 'font-size', $css->render_color( $attr['textStyles'][0]['textSizeMobile'] . $attr['textStyles'][0]['textSizeUnit'] . '!important' ) );

		}

		$css->stop_media_query();

		return $css->css_output();
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
	public function get_countup_css( $attributes, $content ) {
		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
			$pos       = strpos( $content, 'inner-column-' );
			if ( false !== $pos ) {
				$content = substr_replace( $content, 'kadence-column' . $unique_id . ' inner-column-', $pos, strlen( 'inner-column-' ) );
			}
		}
		if ( $this->it_is_not_amp() ) {
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
		$style_id = 'kt-blocks-' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'kadence_blocks_render_inline_css', true, 'banner', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'kadence_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_countup_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'banner', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;
	}

	public function get_countup_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'kadence_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'kadence_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'kadence_tablet_media_query', '(min-width: 1025px)' );
		// Number Style
		if ( isset( $attr['numberSize'] ) || isset( $attr['numberSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->add_property( 'font-size', $css->render_color( $attr['numberSize'] . $attr['numberSizeUnit'] . '!important' ) );
		}
		// Title Style
		if ( isset( $attr['titleSize'] ) || isset( $attr['titleSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__title' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleSize'] . $attr['titleSizeUnit'] . '!important' ) );
		}
		// Prefix Style
		if ( isset( $attr['prefixSize'] ) || isset( $attr['prefixSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->add_property( 'font-size', $css->render_color( $attr['prefixSize'] . $attr['prefixSizeUnit'] . '!important' ) );
		}
		// Suffix Style
		if ( isset( $attr['suffixSize'] ) || isset( $attr['suffixSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->add_property( 'font-size', $css->render_color( $attr['suffixSize'] . $attr['suffixSizeUnit'] . '!important' ) );
		}
		$css->start_media_query( $media_query['tablet'] );
		// Number Style Tablet
		if ( isset( $attr['numberSize'] ) || isset( $attr['numberSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->add_property( 'font-size', $css->render_color( $attr['numberSizeTablet'] . $attr['numberSizeUnit'] . '!important' ) );
		}
		// Title Style Tablet
		if ( isset( $attr['titleSize'] ) || isset( $attr['titleSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__title' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleSizeTablet'] . $attr['titleSizeUnit'] . '!important' ) );
		}
		// Prefix Style Tablet
		if ( isset( $attr['prefixSize'] ) || isset( $attr['prefixSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->add_property( 'font-size', $css->render_color( $attr['prefixSizeTablet'] . $attr['prefixSizeUnit'] . '!important' ) );
		}
		// Suffix Style Tablet
		if ( isset( $attr['suffixSize'] ) || isset( $attr['suffixSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->add_property( 'font-size', $css->render_color( $attr['suffixSizeTablet'] . $attr['suffixSizeUnit'] . '!important' ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		// Number Style Mobile
		if ( isset( $attr['numberSize'] ) || isset( $attr['numberSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->add_property( 'font-size', $css->render_color( $attr['numberSizeMobile'] . $attr['numberSizeUnit'] . '!important' ) );
		}
		// Title Style Mobile
		if ( isset( $attr['titleSize'] ) || isset( $attr['titleSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__title' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleSizeMobile'] . $attr['titleSizeUnit'] . '!important' ) );
		}
		// Prefix Style Mobile
		if ( isset( $attr['prefixSize'] ) || isset( $attr['prefixSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->add_property( 'font-size', $css->render_color( $attr['prefixSizeMobile'] . $attr['prefixSizeUnit'] . '!important' ) );
		}
		// Suffix Style Mobile
		if ( isset( $attr['suffixSize'] ) || isset( $attr['suffixSizeUnit'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->add_property( 'font-size', $css->render_color( $attr['suffixSizeMobile'] . $attr['suffixSizeUnit'] . '!important' ) );
		}
		$css->stop_media_query();
		if ( isset( $attr['kadenceBlockCSS'] ) && ! empty( $attr['kadenceBlockCSS'] ) ) {
			$css->add_css_string( str_replace( 'selector', '.kadence-column' . $unique_id, $attr['kadenceBlockCSS'] ) );
		}
		return $css->css_output();

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


	public static function get_newsLetter_css( $attr, $id ) {
		$defaults = self::$block_atts['premium/newsletter']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();

		$selectors = array(

			' .premium-newsletter-input__wrapper '        => array(
				'padding-right' => 'calc(' . $attr['columnGap'] . 'px / 2 )',
				'padding-left'  => 'calc(' . $attr['columnGap'] . 'px / 2 )',
				'margin-bottom' => $attr['rowGap'] . 'px',
			),
			' .premium-newsletter-input__wrapper .premium-newsletter-input' => array(
				'color'            => $attr['inputStyles'][0]['textColor'],
				'font-family'      => $attr['inputStyles'][0]['textFontFamily'],
				'font-size'        => $attr['inputStyles'][0]['textSize'] . 'px',
				'font-weight'      => $attr['inputStyles'][0]['textWeight'],
				'font-style'       => $attr['inputStyles'][0]['textStyle'],
				'letter-spacing'   => $attr['inputStyles'][0]['textLetter'] . 'px',
				'text-transform'   => $attr['inputStyles'][0]['textUpper'] ? 'uppercase' : 'none',
				'line-height'      => $attr['inputStyles'][0]['textLine'],
				'background-color' => $attr['inputStyles'][0]['textBackColor'],
				'border-style'     => $attr['inputStyles'][0]['textBorderType'],
				'border-color'     => $attr['inputStyles'][0]['textBorderColor'],
				'border-radius'    => $attr['inputStyles'][0]['textBorderRadius'],

			),
			' .premium-newsletter-button__wrapper button' => array(
				'color'            => $attr['btnStyles'][0]['btnColor'],
				'background-color' => $attr['btnStyles'][0]['btnBackColor'],
				'font-family'      => $attr['btnStyles'][0]['btnFontFamily'],
				'font-weight'      => $attr['btnStyles'][0]['btnWeight'],
				'font-size'        => $attr['btnStyles'][0]['btnSize'] . 'px',
				'font-style'       => $attr['btnStyles'][0]['btnStyle'],
				'letter-spacing'   => $attr['btnStyles'][0]['btnLetter'],
				'text-transform'   => $attr['btnStyles'][0]['btnUpper'] ? 'uppercase' : 'none',
				'line-height'      => $attr['btnStyles'][0]['btnLine'],
				'border-style'     => $attr['btnStyles'][0]['btnBorderType'],
				'border-color'     => $attr['btnStyles'][0]['btnBorderColor'],
				'border-radius'    => $attr['btnStyles'][0]['btnBorderRadius'],
			),

		);

		$t_selectors = array(
			' .premium-newsletter-input__wrapper .premium-newsletter-input' => array(
				'font-size' => $attr['inputStyles'][0]['textSizeTablet'] . 'px',

			),
			' .premium-newsletter-button__wrapper button' => array(
				'font-size' => $attr['btnStyles'][0]['btnSizeTablet'] . 'px',
			),

		);

		$m_selectors = array(
			' .premium-newsletter-input__wrapper .premium-newsletter-input' => array(
				'font-size' => $attr['inputStyles'][0]['textSizeMobile'] . 'px',

			),
			' .premium-newsletter-button__wrapper button' => array(
				'font-size' => $attr['btnStyles'][0]['btnSizeMobile'] . 'px',
			),
		);

		$base_selector = '#premium-newsLetter-not-set';

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
	public function hex_to_rgba( $hex_color ) {

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
