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
	 * Google fonts to enqueue
	 *
	 * @var array
	 */
	public static $gfonts = array();

	/**
	 * Google fonts to enqueue
	 *
	 * @var array
	 */
	public static $footer_gfonts = array();
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
	 *
	 * @var stylesheet
	 */
	public static $stylesheet;

	/**
	 * Page Blocks Variable
	 *
	 * @since 1.6.0
	 *
	 * @var instance
	 */
	public static $page_blocks;

	/**
	 * Member Variable
	 *
	 * @since 0.0.1
	 *
	 * @var instance
	 */
	public static $block_atts;

	/**
	 * PBG Block Flag
	 *
	 * @since 1.8.2
	 *
	 * @var premium_flag
	 */
	public static $premium_flag = false;

	/**
	 * Current Block List
	 *
	 * @since 1.8.2
	 *
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
		$allow_json   = isset( self::$config['premium-upload-json'] ) ? self::$config['premium-upload-json'] : true;
		if ( $allow_json ) {
			add_filter( 'upload_mimes', array( $this, 'pbg_mime_types' ) ); // phpcs:ignore WordPressVIPMinimum.Hooks.RestrictedHooks.upload_mimes
			add_filter( 'wp_check_filetype_and_ext', array( $this, 'fix_mime_type_json' ), 75, 4 );
		}
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
		add_action( 'wp_head', array( $this, 'frontend_gfonts' ), 90 );
		add_action( 'wp_footer', array( $this, 'frontend_footer_gfonts' ), 90 );
	}

	/**
	 * Load Json Files
	 */
	public function pbg_mime_types( $mimes ) {

			$mimes['json'] = 'application/json';
			$mimes['svg']  = 'image/svg+xml';
			return $mimes;

	}

	/**
	 * Fix File Of type JSON
	 */
	public function fix_mime_type_json( $data = null, $file = null, $filename = null, $mimes = null ) {

		$ext = isset( $data['ext'] ) ? $data['ext'] : '';
		if ( 1 > strlen( $ext ) ) {
			$exploded = explode( '.', $filename );
			$ext      = strtolower( end( $exploded ) );
		}
		if ( 'json' === $ext ) {
			$data['type'] = 'application/json';
			$data['ext']  = 'json';
		}
		return $data;

	}

	/**
	 * Enqueue Editor CSS/JS for Premium Blocks
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 *
	 * @return void
	 */
	public function pbg_editor() {
		$allow_json          = isset( self::$config['premium-upload-json'] ) ? self::$config['premium-upload-json'] : true;
		$is_fa_enabled       = isset( self::$config['premium-fa-css'] ) ? self::$config['premium-fa-css'] : true;
		$plugin_dependencies = array( 'wp-blocks', 'react', 'react-dom', 'wp-components', 'wp-compose', 'wp-data', 'wp-edit-post', 'wp-element', 'wp-hooks', 'wp-i18n', 'wp-plugins', 'wp-polyfill', 'wp-primitives', 'wp-api', 'wp-widgets', 'lodash' );

		wp_register_script(
			'pbg-blocks-js',
			PREMIUM_BLOCKS_URL . 'assets/js/build.js',
			array( 'wp-api-fetch', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-api', 'wp-edit-post' ),
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

		$gfonts_path      = PREMIUM_BLOCKS_URL . 'assets/gfonts.php';
		$gfont_names_path = PREMIUM_BLOCKS_URL . 'assets/gfonts-names.php';
		wp_localize_script(
			'pbg-blocks-js',
			'PremiumBlocksSettings',
			array(
				'ajaxurl'           => esc_url( admin_url( 'admin-ajax.php' ) ),
				'nonce'             => wp_create_nonce( 'pa-blog-block-nonce' ),
				'settingPath'       => admin_url( 'admin.php?page=premium-gutenberg-maps' ),
				'defaultAuthImg'    => PREMIUM_BLOCKS_URL . 'assets/img/author.jpg',
				'activeBlocks'      => self::$blocks,
				'tablet_breakpoint' => PBG_TABLET_BREAKPOINT,
				'mobile_breakpoint' => PBG_MOBILE_BREAKPOINT,
			)
		);

		wp_localize_script(
			'pbg-blocks-js',
			'FontAwesomeConfig',
			array(
				'FontAwesomeEnabled' => $is_fa_enabled,
			)
		);
		wp_localize_script(
			'pbg-blocks-js',
			'JsonUploadFile',
			array(
				'JsonUploadEnabled' => $allow_json,
			)
		);
		wp_enqueue_style(
			'pbg-editor-style',
			PREMIUM_BLOCKS_URL . 'assets/css/style.css',
			array( 'dashicons' ),
			PREMIUM_BLOCKS_VERSION
		);

	}

	/**
	 * Enqueue Settings For blocks
	 *
	 * @since 1.9.2
	 *
	 * @access public
	 */
	public function load_api_settings() {

		register_setting(
			'allow_json_upload',
			'allow_json_upload',
			array(
				'type'         => 'boolean',
				'description'  => __( 'Allow JSON Upload to Media Library.', 'otter-blocks' ),
				'show_in_rest' => true,
				'default'      => false,
			)
		);

	}

	/**
	 * PBG Frontend
	 *
	 * Enqueue Frontend Assets for Premium Blocks.
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 *
	 * @return void
	 */
	public function pbg_frontend() {

		$is_fa_enabled = isset( self::$config['premium-fa-css'] ) ? self::$config['premium-fa-css'] : true;

		$is_enabled = isset( self::$config['premium-map-api'] ) ? self::$config['premium-map-api'] : true;

		$api_key = isset( self::$config['premium-map-key'] ) ? self::$config['premium-map-key'] : '';

		$is_maps_enabled    = self::$blocks['maps'];
		$is_section_enabled = self::$blocks['container'];
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
			'pbg-blocks-js',
			'PremiumSettings',
			array(
				'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
				'nonce'   => wp_create_nonce( 'pa-blog-block-nonce' ),
			)
		);

	}

	/**
	 * On init startup.
	 */
	public function on_init() {

		wp_register_style(
			'premium-blocks-editor-css',
			PREMIUM_BLOCKS_URL . 'assets/css/style.css',
			array( 'dashicons' ),
			PREMIUM_BLOCKS_VERSION
		);

		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		register_block_type(
			'premium/accordion',
			array(
				'render_callback' => array( $this, 'get_accordion_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',

			)
		);

		register_block_type(
			'premium/banner',
			array(
				'render_callback' => array( $this, 'get_banner_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

		register_block_type(
			'premium/button',
			array(
				'render_callback' => array( $this, 'get_button_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

		register_block_type(
			'premium/countup',
			array(
				'render_callback' => array( $this, 'get_countup_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

		register_block_type(
			'premium/dheading-block',
			array(
				'render_callback' => array( $this, 'get_dual_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

		register_block_type(
			'premium/fancy-text',
			array(
				'render_callback' => array( $this, 'get_fancy_text_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);
		register_block_type(
			'premium/icon-box',
			array(
				'render_callback' => array( $this, 'get_iconbox_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',

			)
		);

		register_block_type(
			'premium/lottie',
			array(
				'render_callback' => array( $this, 'get_lottie_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',

			)
		);

		register_block_type(
			'premium/testimonial',
			array(
				'render_callback' => array( $this, 'get_testimonial_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

		register_block_type(
			'premium/video-box',
			array(
				'render_callback' => array( $this, 'get_videobox_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

		register_block_type(
			'premium/pricing-table',
			array(
				'render_callback' => array( $this, 'get_pricing_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);
		register_block_type(
			'premium/container',
			array(
				'render_callback' => array( $this, 'get_section_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);
        register_block_type(
			'premium/image-separator',
			array(
				'render_callback' => array( $this, 'get_image_seperator_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

	}

	/**
	 * Add Premium Blocks category to Blocks Categories
	 *
	 * @since 1.0.0
	 *
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
	 * Render Boolean is amp or Not
	 */
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
	 *
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
	 *
	 * @since 1.1.0
	 */
	public function parse( $content ) {

		global $wp_version;

		return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );

	}

	/**
	 * Print the Stylesheet in header.
	 *
	 * @since 1.8.2
	 *
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
	 * Generates CSS recurrsively.
	 *
	 * @since 1.8.2
	 *
	 * @access public
	 *
	 * @param object $block The block object.
	 */
	public function get_block_css( $block ) {

		$block    = (array) $block;
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
	 * Render Inline CSS helper function
	 *
	 * @param array  $css the css for each block.
	 * @param string $style_id the unique id for the rendered style.
	 * @param bool   $in_content the bool for whether or not it should run in content.
	 */
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

	/**
	 * Check if block should render inline.
	 *
	 * @param string $name the blocks name.
	 * @param string $unique_id the blocks block_id.
	 */
	public function should_render_inline( $name, $unique_id ) {

		if ( doing_filter( 'the_content' ) || apply_filters( 'premium_blocks_force_render_inline_css_in_content', false, $name, $unique_id ) || is_customize_preview() ) {
			return true;
		}
		return false;

	}

	/**
	 * Adds Google fonts for loading later
	 *
	 * @param array $attr the blocks attr.
	 */
	public function add_gfont( $attr ) {

		$defaults = array(
			'googleFont'     => true,
			'loadGoogleFont' => true,
			'fontFamily'     => '',
			'fontVariant'    => '',
		);
		$attr     = wp_parse_args( $attr, $defaults );

		if ( true == $attr['googleFont'] && true == $attr['loadGoogleFont'] && ! empty( $attr['fontFamily'] ) ) {
			// Check if the font has been added yet.
			if ( ! array_key_exists( $attr['fontFamily'], self::$gfonts ) ) {
				$add_font                            = array(
					'fontfamily'   => $attr['fontFamily'],
					'fontvariants' => ( isset( $attr['fontVariant'] ) && ! empty( $attr['fontVariant'] ) ? array( $attr['fontVariant'] ) : array() ),
				);
				self::$gfonts[ $attr['fontFamily'] ] = $add_font;
				// Check if wp_head has already run in which case we need to add to footer fonts.
				if ( did_action( 'wp_body_open' ) >= 1 ) {
					self::$footer_gfonts[ $attr['fontFamily'] ] = $add_font;
				}
			} else {
				if ( isset( $attr['fontVariant'] ) && ! empty( $attr['fontVariant'] ) ) {
					if ( ! in_array( $attr['fontVariant'], self::$gfonts[ $attr['fontFamily'] ]['fontvariants'], true ) ) {
						array_push( self::$gfonts[ $attr['fontFamily'] ]['fontvariants'], $attr['fontVariant'] );
						if ( did_action( 'wp_body_open' ) >= 1 ) {
							if ( ! array_key_exists( $attr['fontFamily'], self::$footer_gfonts ) ) {
								$add_font                                   = array(
									'fontfamily'   => $attr['fontFamily'],
									'fontvariants' => ( isset( $attr['fontVariant'] ) && ! empty( $attr['fontVariant'] ) ? array( $attr['fontVariant'] ) : array() ),
								);
								self::$footer_gfonts[ $attr['fontFamily'] ] = $add_font;
							} else {
								array_push( self::$footer_gfonts[ $attr['fontFamily'] ]['fontvariants'], $attr['fontVariant'] );
							}
						}
					}
				}
			}
		}

	}

	/**
	 * Load Google Font
	 *
	 * @since 1.9.2
	 *
	 * @access public
	 */
	public function frontend_gfonts() {

		if ( empty( self::$gfonts ) ) {
			return;
		}
		$print_google_fonts = apply_filters( 'pbg_blocks_print_google_fonts', true );
		if ( ! $print_google_fonts ) {
			return;
		}
		$this->load_google_font( self::$gfonts );

	}

	/**
	 * Print Google Font
	 *
	 * @since 1.9.2
	 *
	 * @access public
	 *
	 * @param object $gfont for google Font.
	 */
	public function load_google_font( $gfonts ) {

		$link    = '';
		$subsets = array();
		foreach ( $gfonts as $key => $gfont_values ) {
			if ( ! empty( $link ) ) {
				$link .= '%7C'; // Append a new font to the string.
			}
			$link .= $gfont_values['fontfamily'];
			if ( ! empty( $gfont_values['fontvariants'] ) ) {
				$link .= ':';
				$link .= implode( ',', $gfont_values['fontvariants'] );
			}
		}
		if ( apply_filters( 'pbg_display_swap_google_fonts', true ) ) {
			$link .= '&amp;display=swap';
		}
		echo '<link href="//fonts.googleapis.com/css?family=' . esc_attr( str_replace( '|', '%7C', $link ) ) . '" rel="stylesheet">';

	}

	/**
	 * Get Accordion Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for Content of Block.
	 */
	public function get_fancy_text_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
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
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
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

	/**
	 * Get Fancy Text Block CSS
	 *
	 * Return Frontend CSS for Fancy Text.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_fancy_text_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// FancyText Style
		if ( isset( $attr['fancyStyles'] ) ) {
			if ( isset( $attr['fancyStyles'][0]['fancyTextfontSize'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title' );
				$css->add_property( 'font-size', $css->render_color( $attr['fancyStyles'][0]['fancyTextfontSize'] . $attr['fancyStyles'][0]['fancyTextfontSizeUnit'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-title-slide' );
				$css->add_property( 'font-size', $css->render_color( $attr['fancyStyles'][0]['fancyTextfontSize'] . $attr['fancyStyles'][0]['fancyTextfontSizeUnit'] ) );
			}
		}
		// Prefix and Suffix Style
		if ( isset( $attr['PreStyles'] ) ) {
			if ( isset( $attr['PreStyles'][0]['textfontSize'] ) && isset( $attr['PreStyles'][0]['textfontSizeUnit'] ) ) {
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
				$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSize'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
				$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
				$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSize'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
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
		if ( isset( $attr['PreStyles'][0]['textfontSizeTablet'] ) && isset( $attr['PreStyles'][0]['textfontSizeUnit'] ) ) {
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
		if ( isset( $attr['PreStyles'][0]['textfontSizeMobile'] ) && isset( $attr['PreStyles'][0]['textfontSizeUnit'] ) ) {
			$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-prefix-text' );
			$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSizeMobile'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
			$css->set_selector( '#premium-fancy-text-' . $unique_id . '> .premium-fancy-text-suffix-text' );
			$css->add_property( 'font-size', ( $attr['PreStyles'][0]['textfontSizeMobile'] . $attr['PreStyles'][0]['textfontSizeUnit'] ) );
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get Accordion Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes for attribute.
	 * @param string $content for content of block.
	 */
	public function get_accordion_css( $attributes, $content ) {

		if ( isset( $attributes['accordionId'] ) && ! empty( $attributes['accordionId'] ) ) {
			$unique_id = $attributes['accordionId'];
		} else {
			$unique_id = rand( 100, 10000 );

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
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
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

	/**
	 * Get Accordion  Block CSS
	 *
	 * Return Frontend CSS for Fancy Text.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_accordion_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// Style.
		if ( isset( $attr['titleSize'] ) && isset( $attr['titleSizeUnit'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' . ' > .premium-accordion__title' . ' > .premium-accordion__title_text' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleSize'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingT'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-top', $css->render_color( $attr['titlePaddingT'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingR'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-right', $css->render_color( $attr['titlePaddingR'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingB'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-bottom', $css->render_color( $attr['titlePaddingB'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingL'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-left', $css->render_color( $attr['titlePaddingL'] . 'px' . '!important' ) );
		}
		// Desc Style
		if ( isset( $attr['descSize'] ) && isset( $attr['descSizeUnit'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' . ' > .premium-accordion__desc' );
			$css->add_property( 'font-size', $css->render_color( $attr['descSize'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingT'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-top', $css->render_color( $attr['descPaddingT'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingR'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-right', $css->render_color( $attr['descPaddingR'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingB'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-bottom', $css->render_color( $attr['descPaddingB'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingL'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-left', $css->render_color( $attr['descPaddingL'] . 'px' . '!important' ) );
		}
		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['titleSizeTablet'] ) && isset( $attr['descSizeUnit'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' . ' > .premium-accordion__title' . ' > .premium-accordion__title_text' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleSizeTablet'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingTTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-top', $css->render_color( $attr['titlePaddingTTablet'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingRTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-right', $css->render_color( $attr['titlePaddingRTablet'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingBTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-bottom', $css->render_color( $attr['titlePaddingBTablet'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingLTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-left', $css->render_color( $attr['titlePaddingLTablet'] . 'px' . '!important' ) );
		}
		// Desc Style
		if ( isset( $attr['descSizeTablet'] ) && isset( $attr['descSizeUnit'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' . ' > .premium-accordion__desc' );
			$css->add_property( 'font-size', $css->render_color( $attr['descSizeTablet'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingTTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-top', $css->render_color( $attr['descPaddingTTablet'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingRTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-right', $css->render_color( $attr['descPaddingRTablet'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingBTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-bottom', $css->render_color( $attr['descPaddingBTablet'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingLTablet'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-left', $css->render_color( $attr['descPaddingLTablet'] . 'px' . '!important' ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['titleSizeMobile'] ) && isset( $attr['descSizeUnit'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' . ' > .premium-accordion__title' . ' > .premium-accordion__title_text' );
			$css->add_property( 'font-size', $css->render_color( $attr['titleSizeMobile'] . 'px' . '!important' ) );

		}
		if ( isset( $attr['titlePaddingTMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-top', $css->render_color( $attr['titlePaddingTMobile'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingRMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-right', $css->render_color( $attr['titlePaddingRMobile'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingBMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-bottom', $css->render_color( $attr['titlePaddingBMobile'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['titlePaddingLMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding-left', $css->render_color( $attr['titlePaddingLMobile'] . 'px' . '!important' ) );
		}
		// Desc Style
		if ( isset( $attr['descSizeMobile'] ) && isset( $attr['descSizeUnit'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' . ' > .premium-accordion__desc' );
			$css->add_property( 'font-size', $css->render_color( $attr['descSizeMobile'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingTMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-top', $css->render_color( $attr['descPaddingTMobile'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingRMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-right', $css->render_color( $attr['descPaddingRMobile'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingBMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-bottom', $css->render_color( $attr['descPaddingBMobile'] . 'px' . '!important' ) );
		}
		if ( isset( $attr['descPaddingLMobile'] ) ) {
			$css->set_selector( '#' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding-left', $css->render_color( $attr['descPaddingLMobile'] . 'px' . '!important' ) );
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get Banner Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option For attribute.
	 * @param string $contnet for content of Block.
	 */
	public function get_banner_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
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
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'banner', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
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

	/**
	 * Get Banner Block CSS
	 *
	 * Return Frontend CSS for Banner Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For  block ID.
	 */
	public function get_banner_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// Style.
		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSize'] ) && isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-banner-' . $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' . ' > .premium-banner__title' );
				$css->add_property( 'font-size', $css->render_color( $attr['titleStyles'][0]['titleSize'] . 'px' . '!important' ) );
			}
		}
		// Desc Style
		if ( isset( $attr['descStyles'] ) ) {
			if ( isset( $attr['descStyles'][0]['descSize'] ) && isset( $attr['descStyles'][0]['descSizeUnit'] ) ) {
				$css->set_selector( '#premium-banner-' . $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' . ' > .premium-banner__desc' );
				$css->add_property( 'font-size', $css->render_color( $attr['descStyles'][0]['descSize'] . 'px' . '!important' ) );
			}
		}
		// Container Style
		if ( isset( $attr['paddingT'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-top', $css->render_color( $attr['paddingT'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingR'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-right', $css->render_color( $attr['paddingR'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingB'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-bottom', $css->render_color( $attr['paddingB'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingL'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-left', $css->render_color( $attr['paddingL'] . $attr['containerStyles'][0]['paddingU'] ) );
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
		// Container Style
		if ( isset( $attr['paddingTTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-top', $css->render_color( $attr['paddingTTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingRTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-right', $css->render_color( $attr['paddingRTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingBTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-bottom', $css->render_color( $attr['paddingBTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingLTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-left', $css->render_color( $attr['paddingLTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
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
		// Container Style
		if ( isset( $attr['paddingTMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-top', $css->render_color( $attr['paddingTMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingRMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-right', $css->render_color( $attr['paddingRMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingBMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-bottom', $css->render_color( $attr['paddingBMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingLMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-banner-' . $unique_id );
			$css->add_property( 'padding-left', $css->render_color( $attr['paddingLMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get Button Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_button_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );

		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'banner', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
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

	/**
	 * Get Button Block CSS
	 *
	 * Return Frontend CSS for Button Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_button_css_style( $attr, $unique_id ) {

		if ( isset( $attr['textStyles'][0]['textFontFamily'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['textStyles'][0]['textFontFamily'] ) ? $attr['textStyles'][0]['textFontFamily'] : '' ),
					'fontVariant' => ( isset( $attr['textStyles'][0]['textWeight'] ) ? $attr['textStyles'][0]['textWeight'] : '' ),
				)
			);
		}
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
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
	 * Get Count-up Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_countup_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
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
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'banner', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
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

	/**
	 * Get Count-up Block CSS
	 *
	 * Return Frontend CSS for Count-up Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_countup_css_style( $attr, $unique_id ) {

		if ( isset( $attr['titleStyles'][0]['titleFamily'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['titleStyles'][0]['titleFamily'] ) ? $attr['titleStyles'][0]['titleFamily'] : '' ),
					'fontVariant' => ( isset( $attr['textStyles'][0]['textWeight'] ) ? $attr['textStyles'][0]['textWeight'] : '' ),
				)
			);
		}
		if ( isset( $attr['suffixStyles'][0]['suffixFamily'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['suffixStyles'][0]['suffixFamily'] ) ? $attr['suffixStyles'][0]['suffixFamily'] : '' ),
					'fontVariant' => ( isset( $attr['textStyles'][0]['suffixWeight'] ) ? $attr['textStyles'][0]['suffixWeight'] : '' ),
				)
			);
		}
		if ( isset( $attr['prefixStyles'][0]['prefixFamily'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['prefixStyles'][0]['prefixFamily'] ) ? $attr['prefixStyles'][0]['prefixFamily'] : '' ),
					'fontVariant' => ( isset( $attr['textStyles'][0]['prefixWeight'] ) ? $attr['textStyles'][0]['prefixWeight'] : '' ),
				)
			);
		}
		if ( isset( $attr['counterFamily'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['counterFamily'] ) ? $attr['counterFamily'] : '' ),
					'fontVariant' => ( isset( $attr['numberStyles'][0]['numberWeight'] ) ? $attr['numberStyles'][0]['numberWeight'] : '' ),
				)
			);
		}
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// Number Style
		if ( isset( $attr['numberStyles'] ) ) {
			if ( isset( $attr['numberStyles'][0]['numberSize'] ) && isset( $attr['numberStyles'][0]['numberSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
				$css->add_property( 'font-size', ( $attr['numberStyles'][0]['numberSize'] . $attr['numberStyles'][0]['numberSizeUnit'] . '!important' ) );
			}
		}
		// Title Style
		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSize'] ) && isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . ' > .premium-countup__title' );
				$css->add_property( 'font-size', ( $attr['titleStyles'][0]['titleSize'] . $attr['titleStyles'][0]['titleSizeUnit'] . '!important' ) );
			}
		}
		// Prefix Style
		if ( isset( $attr['prefixStyles'] ) ) {
			if ( isset( $attr['prefixStyles'][0]['prefixSize'] ) && isset( $attr['prefixStyles'][0]['prefixSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
				$css->add_property( 'font-size', ( $attr['prefixStyles'][0]['prefixSize'] . $attr['prefixStyles'][0]['prefixSizeUnit'] . '!important' ) );
			}
		}
		// Suffix Style
		if ( isset( $attr['suffixStyles'] ) ) {
			if ( isset( $attr['suffixStyles'][0]['suffixSize'] ) && isset( $attr['suffixStyles'][0]['suffixSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
				$css->add_property( 'font-size', ( $attr['suffixStyles'][0]['suffixSize'] . $attr['suffixStyles'][0]['suffixSizeUnit'] . '!important' ) );
			}
		}
		// Container Style
		if ( isset( $attr['paddingT'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-top', ( $attr['paddingT'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingR'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-right', ( $attr['paddingR'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingB'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-bottom', ( $attr['paddingB'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingL'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-left', ( $attr['paddingL'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->start_media_query( $media_query['tablet'] );
		// Number Style Tablet
		if ( isset( $attr['numberStyles'] ) ) {
			if ( isset( $attr['numberStyles'][0]['numberSizeTablet'] ) && isset( $attr['numberStyles'][0]['numberSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
				$css->add_property( 'font-size', ( $attr['numberStyles'][0]['numberSizeTablet'] . $attr['numberStyles'][0]['numberSizeUnit'] . '!important' ) );
			}
		}
		// Title Style Tablet
		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSizeTablet'] ) && isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__title' );
				$css->add_property( 'font-size', ( $attr['titleStyles'][0]['titleSizeTablet'] . $attr['titleStyles'][0]['titleSizeUnit'] ) );
			}
		}
		// Prefix Style Tablet
		if ( isset( $attr['prefixStyles'] ) ) {
			if ( isset( $attr['prefixStyles'][0]['prefixSizeTablet'] ) && isset( $attr['prefixStyles'][0]['prefixSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
				$css->add_property( 'font-size', ( $attr['prefixStyles'][0]['prefixSizeTablet'] . $attr['prefixStyles'][0]['prefixSizeUnit'] ) );
			}
		}
		// Suffix Style Tablet
		if ( isset( $attr['suffixStyles'] ) ) {
			if ( isset( $attr['suffixStyles'][0]['suffixSizeTablet'] ) && isset( $attr['suffixStyles'][0]['suffixSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
				$css->add_property( 'font-size', ( $attr['suffixStyles'][0]['suffixSizeTablet'] . $attr['suffixStyles'][0]['suffixSizeUnit'] ) );
			}
		}
		// Container Style
		if ( isset( $attr['paddingTTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-top', ( $attr['paddingTTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingRTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-right', ( $attr['paddingRTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingBTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-bottom', ( $attr['paddingBTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingLTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-left', ( $attr['paddingLTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		// Number Style Mobile
		if ( isset( $attr['numberStyles'] ) ) {
			if ( isset( $attr['numberStyles'][0]['numberSizeMobile'] ) && isset( $attr['numberStyles'][0]['numberSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
				$css->add_property( 'font-size', ( $attr['numberStyles'][0]['numberSizeMobile'] . $attr['numberStyles'][0]['numberSizeUnit'] . '!important' ) );
			}
		}
		// Title Style Mobile
		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSizeMobile'] ) && isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__title' );
				$css->add_property( 'font-size', ( $attr['titleStyles'][0]['titleSizeMobile'] . $attr['titleStyles'][0]['titleSizeUnit'] ) );
			}
		}
		// Prefix Style Mobile
		if ( isset( $attr['prefixStyles'] ) ) {
			if ( isset( $attr['prefixStyles'][0]['prefixSizeMobile'] ) && isset( $attr['prefixStyles'][0]['prefixSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
				$css->add_property( 'font-size', ( $attr['prefixStyles'][0]['prefixSizeMobile'] . $attr['prefixStyles'][0]['prefixSizeUnit'] ) );
			}
		}
		// Suffix Style Mobile
		if ( isset( $attr['suffixStyles'] ) ) {
			if ( isset( $attr['suffixStyles'][0]['suffixSizeMobile'] ) && isset( $attr['suffixStyles'][0]['suffixSizeUnit'] ) ) {
				$css->set_selector( '#premium-countup-' . $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
				$css->add_property( 'font-size', ( $attr['suffixStyles'][0]['suffixSizeMobile'] . $attr['suffixStyles'][0]['suffixSizeUnit'] ) );
			}
		}
		// Container Style
		if ( isset( $attr['paddingTMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-top', ( $attr['paddingTMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingRMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-right', ( $attr['paddingRMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingBMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-bottom', ( $attr['paddingBMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingLMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-countup-' . $unique_id );
			$css->add_property( 'padding-left', ( $attr['paddingLMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get Dual-Heading Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_dual_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );

		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'banner', $unique_id ) ) {

			$css = $this->get_dual_css_style( $attributes, $unique_id );

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

	/**
	 * Get Dual-Heading Block CSS
	 *
	 * Return Frontend CSS for Dual-Heading Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_dual_css_style( $attr, $unique_id ) {

		if ( isset( $attr['firstStyles'][0]['firstFamily'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['firstStyles'][0]['firstFamily'] ) ? $attr['firstStyles'][0]['firstFamily'] : '' ),
					'fontVariant' => ( isset( $attr['firstStyles'][0]['firstWeight'] ) ? $attr['firstStyles'][0]['firstWeight'] : '' ),
				)
			);
		}
		if ( isset( $attr['secondStyles'][0]['secondFamily'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['secondStyles'][0]['secondFamily'] ) ? $attr['secondStyles'][0]['secondFamily'] : '' ),
					'fontVariant' => ( isset( $attr['secondStyles'][0]['secondWeight'] ) ? $attr['secondStyles'][0]['secondWeight'] : '' ),
				)
			);
		}
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// First Style FontSize.
		if ( isset( $attr['firstStyles'] ) ) {
			if ( isset( $attr['firstStyles'][0]['firstSize'] ) || isset( $attr['firstStyles'][0]['firstSizeUnit'] ) ) {
				$css->set_selector( '#premium-dheading-block-' . $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
				$css->add_property( 'font-size', ( $attr['firstStyles'][0]['firstSize'] . $attr['firstStyles'][0]['firstSizeUnit'] ) );
			}
		}
		// Second Style FontSize.
		if ( isset( $attr['secondStyles'] ) ) {
			if ( isset( $attr['secondStyles'][0]['secondSize'] ) && isset( $attr['secondStyles'][0]['secondSizeUnit'] ) ) {
				$css->set_selector( '#premium-dheading-block-' . $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
				$css->add_property( 'font-size', ( $attr['secondStyles'][0]['secondSize'] . $attr['secondStyles'][0]['secondSizeUnit'] ) );
			}
		}
		$css->start_media_query( $media_query['tablet'] );
		// First Style FontSizeTablet.
		if ( isset( $attr['firstStyles'] ) ) {
			if ( isset( $attr['firstStyles'][0]['firstSize'] ) || isset( $attr['firstStyles'][0]['firstSizeUnit'] ) ) {
				$css->set_selector( '#premium-dheading-block-' . $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
				$css->add_property( 'font-size', ( $attr['firstStyles'][0]['firstSize'] . $attr['firstStyles'][0]['firstSizeUnit'] ) );
			}
		}
		// Second Style FontSizeTablet.
		if ( isset( $attr['secondStyles'] ) ) {
			if ( isset( $attr['secondStyles'][0]['secondSize'] ) && isset( $attr['secondStyles'][0]['secondSizeUnit'] ) ) {
				$css->set_selector( '#premium-dheading-block-' . $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
				$css->add_property( 'font-size', ( $attr['secondStyles'][0]['secondSize'] . $attr['secondStyles'][0]['secondSizeUnit'] ) );
			}
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		// First Style FontSizeMobile.
		if ( isset( $attr['firstStyles'] ) ) {
			if ( isset( $attr['firstStyles'][0]['firstSize'] ) || isset( $attr['firstStyles'][0]['firstSizeUnit'] ) ) {
				$css->set_selector( '#premium-dheading-block-' . $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
				$css->add_property( 'font-size', ( $attr['firstStyles'][0]['firstSize'] . $attr['firstStyles'][0]['firstSizeUnit'] ) );
			}
		}
		// Second Style FontSizeMobile.
		if ( isset( $attr['secondStyles'] ) ) {
			if ( isset( $attr['secondStyles'][0]['secondSize'] ) && isset( $attr['secondStyles'][0]['secondSizeUnit'] ) ) {
				$css->set_selector( '#premium-dheading-block-' . $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
				$css->add_property( 'font-size', ( $attr['secondStyles'][0]['secondSize'] . $attr['secondStyles'][0]['secondSizeUnit'] ) );
			}
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get icon Box Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_iconbox_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {

			$css = $this->get_iconbox_css_style( $attributes, $unique_id );

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

	/**
	 * Get Icon Box Block CSS
	 *
	 * Return Frontend CSS for Icon Box Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_iconbox_css_style( $attr, $unique_id ) {

		if ( isset( $attr['titleStyles'][0]['titleFont'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['titleStyles'][0]['titleFont'] ) ? $attr['titleStyles'][0]['titleFont'] : '' ),
					'fontVariant' => ( isset( $attr['textStyles'][0]['titleWeight'] ) ? $attr['textStyles'][0]['titleWeight'] : '' ),
				)
			);
		}
		if ( isset( $attr['descStyles'][0]['descFont'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['descStyles'][0]['descFont'] ) ? $attr['descStyles'][0]['descFont'] : '' ),
					'fontVariant' => ( isset( $attr['descStyles'][0]['descWeight'] ) ? $attr['descStyles'][0]['descWeight'] : '' ),
				)
			);
		}
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSize'] ) || isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' . '> .premium-icon-box__title' );
				$css->add_property( 'font-size', ( $attr['titleStyles'][0]['titleSize'] . $attr['titleStyles'][0]['titleSizeUnit'] ) );
			}
		}
		if ( isset( $attr['titleMarginT'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' );
				$css->add_property( 'margin-top', ( $attr['titleMarginT'] . 'px' ) );
		}
		if ( isset( $attr['titleMarginB'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' );
				$css->add_property( 'margin-bottom', ( $attr['titleMarginB'] . 'px' ) );
		}
		if ( isset( $attr['descStyles'] ) ) {
			if ( isset( $attr['descStyles'][0]['descSize'] ) || isset( $attr['descStyles'][0]['descSizeUnit'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' . '> .premium-icon-box__desc' );
				$css->add_property( 'font-size', ( $attr['descStyles'][0]['descSize'] . $attr['descStyles'][0]['descSizeUnit'] ) );
			}
		}
		if ( isset( $attr['descMarginT'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' );
			$css->add_property( 'margin-top', ( $attr['descMarginT'] . 'px' ) );
		}
		if ( isset( $attr['descMarginB'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' );
			$css->add_property( 'margin-bottom', ( $attr['descMarginB'] . 'px' ) );
		}
		if ( isset( $attr['btnStyles'] ) ) {
			if ( isset( $attr['btnStyles'][0]['btnSize'] ) || isset( $attr['btnStyles'][0]['btnSizeUnit'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
				$css->add_property( 'font-size', ( $attr['btnStyles'][0]['btnSize'] . $attr['btnStyles'][0]['btnSizeUnit'] ) );
			}
		}
		if ( isset( $attr['btnMarginT'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' );
			$css->add_property( 'margin-top', ( $attr['btnMarginT'] . 'px' ) );
		}
		if ( isset( $attr['btnMarginB'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' );
			$css->add_property( 'margin-bottom', ( $attr['btnMarginB'] . 'px' ) );
		}
		if ( isset( $attr['marginT'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-top', ( $attr['marginT'] . 'px' ) );
		}
		if ( isset( $attr['marginR'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-right', ( $attr['marginR'] . 'px' ) );
		}
		if ( isset( $attr['marginB'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-bottom', ( $attr['marginB'] . 'px' ) );
		}
		if ( isset( $attr['marginL'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-left', ( $attr['marginL'] . 'px' ) );
		}
		if ( isset( $attr['paddingT'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-top', ( $attr['paddingT'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingR'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-right', ( $attr['paddingR'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingB'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-bottom', ( $attr['paddingB'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingL'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-left', ( $attr['paddingL'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->start_media_query( $media_query['tablet'] );
		// title Style for Tablet Device
		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSizeTablet'] ) || isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' . '> .premium-icon-box__title' );
				$css->add_property( 'font-size', ( $attr['titleStyles'][0]['titleSizeTablet'] . $attr['titleStyles'][0]['titleSizeUnit'] ) );
			}
		}
		if ( isset( $attr['titleMarginTTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' );
			$css->add_property( 'margin-top', ( $attr['titleMarginTTablet'] . 'px' ) );
		}
		if ( isset( $attr['titleMarginBTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' );
			$css->add_property( 'margin-bottom', ( $attr['titleMarginBTablet'] . 'px' ) );
		}
		  // description Style for Tablet Device
		if ( isset( $attr['descStyles'] ) ) {
			if ( isset( $attr['descStyles'][0]['descSizeTablet'] ) || isset( $attr['descStyles'][0]['descSizeUnit'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' . '> .premium-icon-box__desc' );
				$css->add_property( 'font-size', ( $attr['descStyles'][0]['descSizeTablet'] . $attr['descStyles'][0]['descSizeUnit'] ) );
			}
		}
		if ( isset( $attr['descMarginTTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' );
			$css->add_property( 'margin-top', ( $attr['descMarginTTablet'] . 'px' ) );
		}
		if ( isset( $attr['descMarginBTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' );
			$css->add_property( 'margin-bottom', ( $attr['descMarginBTablet'] . 'px' ) );
		}
		if ( isset( $attr['btnStyles'] ) ) {
			if ( isset( $attr['btnStyles'][0]['btnSizeTablet'] ) || isset( $attr['btnStyles'][0]['btnSizeUnit'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
				$css->add_property( 'font-size', ( $attr['btnStyles'][0]['btnSizeTablet'] . $attr['btnStyles'][0]['btnSizeUnit'] ) );
			}
		}
		if ( isset( $attr['btnMarginTTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' );
			$css->add_property( 'margin-top', ( $attr['btnMarginTTablet'] . 'px' ) );
		}
		if ( isset( $attr['btnMarginBTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' );
			$css->add_property( 'margin-bottom', ( $attr['btnMarginBTablet'] . 'px' ) );
		}
		if ( isset( $attr['marginTTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-top', ( $attr['marginTTablet'] . 'px' ) );
		}
		if ( isset( $attr['marginRTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-right', ( $attr['marginRTablet'] . 'px' ) );
		}
		if ( isset( $attr['marginBTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-bottom', ( $attr['marginBTablet'] . 'px' ) );
		}
		if ( isset( $attr['marginLTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-left', ( $attr['marginLTablet'] . 'px' ) );
		}
		if ( isset( $attr['paddingTTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-top', ( $attr['paddingTTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingRTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-right', ( $attr['paddingRTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingBTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-bottom', ( $attr['paddingBTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingLTablet'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-left', ( $attr['paddingLTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		  // title Style for Mobile Device
		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSizeMobile'] ) || isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' . '> .premium-icon-box__title' );
				$css->add_property( 'font-size', ( $attr['titleStyles'][0]['titleSizeMobile'] . $attr['titleStyles'][0]['titleSizeUnit'] ) );
			}
		}
		if ( isset( $attr['titleMarginTMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' );
			$css->add_property( 'margin-top', ( $attr['titleMarginTMobile'] . 'px' ) );
		}
		if ( isset( $attr['titleMarginBMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' );
			$css->add_property( 'margin-bottom', ( $attr['titleMarginBMobile'] . 'px' ) );
		}
		  // description  Style for Mobile Device
		if ( isset( $attr['descStyles'] ) ) {
			if ( isset( $attr['descStyles'][0]['descSizeMobile'] ) || isset( $attr['descStyles'][0]['descSizeUnit'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' . '> .premium-icon-box__desc' );
				$css->add_property( 'font-size', ( $attr['descStyles'][0]['descSizeMobile'] . $attr['descStyles'][0]['descSizeUnit'] ) );
			}
		}
		if ( isset( $attr['descMarginTMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' );
			$css->add_property( 'margin-top', ( $attr['descMarginTMobile'] . 'px' ) );
		}
		if ( isset( $attr['descMarginBMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' );
			$css->add_property( 'margin-bottom', ( $attr['descMarginBMobile'] . 'px' ) );
		}
		if ( isset( $attr['btnStyles'] ) ) {
			if ( isset( $attr['btnStyles'][0]['btnSizeMobile'] ) || isset( $attr['btnStyles'][0]['btnSizeUnit'] ) ) {
				$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
				$css->add_property( 'font-size', ( $attr['btnStyles'][0]['btnSizeMobile'] . $attr['btnStyles'][0]['btnSizeUnit'] ) );
			}
		}
		if ( isset( $attr['btnMarginTMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' );
			$css->add_property( 'margin-top', ( $attr['btnMarginTMobile'] . 'px' ) );
		}
		if ( isset( $attr['btnMarginBMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' );
			$css->add_property( 'margin-bottom', ( $attr['btnMarginBMobile'] . 'px' ) );
		}
		if ( isset( $attr['marginTMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-top', ( $attr['marginTMobile'] . 'px' ) );
		}
		if ( isset( $attr['marginRMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-right', ( $attr['marginRMobile'] . 'px' ) );
		}
		if ( isset( $attr['marginBMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-bottom', ( $attr['marginBMobile'] . 'px' ) );
		}
		if ( isset( $attr['marginLMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'margin-left', ( $attr['marginLMobile'] . 'px' ) );
		}
		if ( isset( $attr['paddingTMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-top', ( $attr['paddingTMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingRMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-right', ( $attr['paddingRMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingBMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-bottom', ( $attr['paddingBMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingLMobile'] ) ) {
			$css->set_selector( '#premium-icon-box-' . $unique_id );
			$css->add_property( 'padding-left', ( $attr['paddingLMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get Pricing Table Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_pricing_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );

		}

		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'price', $unique_id ) ) {

			$css = $this->get_pricing_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'pricing', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;

	}

	/**
	 * Get Pricing Table Block CSS
	 *
	 * Return Frontend CSS for Pricing Table Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_pricing_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		if ( isset( $attr['titleStyles'] ) ) {

			if ( isset( $attr['titleStyles'][0]['titleSize'] ) && isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__title_wrap' . '> .premium-pricing-table__title' );
				$css->add_property( 'font-size', ( $attr['titleStyles'][0]['titleSize'] . $attr['titleStyles'][0]['titleSizeUnit'] ) );
			}
		}
		if ( isset( $attr['priceStyles'] ) ) {
			if ( isset( $attr['priceStyles'][0]['slashSize'] ) && isset( $attr['priceStyles'][0]['slashSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__slash' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['slashSize'] . $attr['priceStyles'][0]['slashSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['currSize'] ) && isset( $attr['priceStyles'][0]['currSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__currency' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['currSize'] . $attr['priceStyles'][0]['currSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['valSize'] ) && isset( $attr['priceStyles'][0]['valSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__val' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['valSize'] . $attr['priceStyles'][0]['valSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['divSize'] ) && isset( $attr['priceStyles'][0]['divSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__divider' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['divSize'] . $attr['priceStyles'][0]['divSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['durSize'] ) && isset( $attr['priceStyles'][0]['durSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__dur' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['durSize'] . $attr['priceStyles'][0]['durSizeUnit'] ) );
			}
		}
		if ( isset( $attr['featureStyles'] ) ) {
			if ( isset( $attr['featureStyles'][0]['listSize'] ) && isset( $attr['featureStyles'][0]['listSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__list_wrap' . '> .premium-pricing-table__list ' );
				$css->add_property( 'font-size', ( $attr['featureStyles'][0]['listSize'] . $attr['featureStyles'][0]['listSizeUnit'] ) );
			}
		}
		if ( isset( $attr['descStyles'] ) ) {
			if ( isset( $attr['descStyles'][0]['descSize'] ) && isset( $attr['descStyles'][0]['descSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__desc_wrap' . ' > .premium-pricing-table__desc' );
				$css->add_property( 'font-size', ( $attr['descStyles'][0]['descSize'] . $attr['descStyles'][0]['descSizeUnit'] ) );
			}
		}
		if ( isset( $attr['buttonStyles'] ) ) {
			if ( isset( $attr['buttonStyles'][0]['btnSize'] ) && isset( $attr['buttonStyles'][0]['btnSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__button' . ' > .premium-pricing-table__button_link' );
				$css->add_property( 'font-size', ( $attr['buttonStyles'][0]['btnSize'] . $attr['buttonStyles'][0]['btnSizeUnit'] ) );
			}
		}
		if ( isset( $attr['badgeStyles'] ) ) {
			if ( isset( $attr['badgeStyles'][0]['badgeTextSize'] ) && isset( $attr['badgeStyles'][0]['badgeTextUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__badge_wrap' . ' > .premium-pricing-table__badge' . '> span' );
				$css->add_property( 'font-size', ( $attr['badgeStyles'][0]['badgeTextSize'] . $attr['badgeStyles'][0]['badgeTextUnit'] ) );
			}
		}
		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSizeTablet'] ) && isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__title_wrap' . '> .premium-pricing-table__title' );
				$css->add_property( 'font-size', ( $attr['titleStyles'][0]['titleSizeTablet'] . $attr['titleStyles'][0]['titleSizeUnit'] ) );
			}
		}
		if ( isset( $attr['priceStyles'] ) ) {
			if ( isset( $attr['priceStyles'][0]['slashSizeTablet'] ) && isset( $attr['priceStyles'][0]['slashSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__slash' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['slashSizeTablet'] . $attr['priceStyles'][0]['slashSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['currSizeTablet'] ) && isset( $attr['priceStyles'][0]['currSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__currency' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['currSizeTablet'] . $attr['priceStyles'][0]['currSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['valSizeTablet'] ) && isset( $attr['priceStyles'][0]['valSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__val' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['valSizeTablet'] . $attr['priceStyles'][0]['valSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['divSizeTablet'] ) && isset( $attr['priceStyles'][0]['divSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__divider' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['divSizeTablet'] . $attr['priceStyles'][0]['divSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['durSizeTablet'] ) && isset( $attr['priceStyles'][0]['durSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__dur' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['durSizeTablet'] . $attr['priceStyles'][0]['durSizeUnit'] ) );
			}
		}
		if ( isset( $attr['featureStyles'] ) ) {
			if ( isset( $attr['featureStyles'][0]['listSizeTablet'] ) && isset( $attr['featureStyles'][0]['listSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__list_wrap' . '> .premium-pricing-table__list ' );
				$css->add_property( 'font-size', ( $attr['featureStyles'][0]['listSizeTablet'] . $attr['featureStyles'][0]['listSizeUnit'] ) );
			}
		}
		if ( isset( $attr['descStyles'] ) ) {
			if ( isset( $attr['descStyles'][0]['descSizeTablet'] ) && isset( $attr['descStyles'][0]['descSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__desc_wrap' . ' > .premium-pricing-table__desc' );
				$css->add_property( 'font-size', ( $attr['descStyles'][0]['descSizeTablet'] . $attr['descStyles'][0]['descSizeUnit'] ) );
			}
		}
		if ( isset( $attr['buttonStyles'] ) ) {
			if ( isset( $attr['buttonStyles'][0]['btnSizeTablet'] ) && isset( $attr['buttonStyles'][0]['btnSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__button' . ' > .premium-pricing-table__button_link' );
				$css->add_property( 'font-size', ( $attr['buttonStyles'][0]['btnSizeTablet'] . $attr['buttonStyles'][0]['btnSizeUnit'] ) );
			}
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attr['titleStyles'] ) ) {
			if ( isset( $attr['titleStyles'][0]['titleSizeMobile'] ) && isset( $attr['titleStyles'][0]['titleSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__title_wrap' . '> .premium-pricing-table__title' );
				$css->add_property( 'font-size', ( $attr['titleStyles'][0]['titleSizeMobile'] . $attr['titleStyles'][0]['titleSizeUnit'] ) );
			}
		}
		if ( isset( $attr['priceStyles'] ) ) {
			if ( isset( $attr['priceStyles'][0]['slashSizeMobile'] ) && isset( $attr['priceStyles'][0]['slashSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__slash' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['slashSizeMobile'] . $attr['priceStyles'][0]['slashSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['currSizeMobile'] ) && isset( $attr['priceStyles'][0]['currSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__currency' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['currSizeMobile'] . $attr['priceStyles'][0]['currSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['valSizeMobile'] ) && isset( $attr['priceStyles'][0]['valSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__val' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['valSizeMobile'] . $attr['priceStyles'][0]['valSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['divSizeMobile'] ) && isset( $attr['priceStyles'][0]['divSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__divider' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['divSizeMobile'] . $attr['priceStyles'][0]['divSizeUnit'] ) );
			}
			if ( isset( $attr['priceStyles'][0]['durSizeMobile'] ) && isset( $attr['priceStyles'][0]['durSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__price_wrap' . '> .premium-pricing-table__dur' );
				$css->add_property( 'font-size', ( $attr['priceStyles'][0]['durSizeMobile'] . $attr['priceStyles'][0]['durSizeUnit'] ) );
			}
		}
		if ( isset( $attr['featureStyles'] ) ) {
			if ( isset( $attr['featureStyles'][0]['listSizeMobile'] ) && isset( $attr['featureStyles'][0]['listSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__list_wrap' . '> .premium-pricing-table__list ' );
				$css->add_property( 'font-size', ( $attr['featureStyles'][0]['listSizeMobile'] . $attr['featureStyles'][0]['listSizeUnit'] ) );
			}
		}
		if ( isset( $attr['descStyles'] ) ) {
			if ( isset( $attr['descStyles'][0]['descSizeMobile'] ) && isset( $attr['descStyles'][0]['descSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__desc_wrap' . ' > .premium-pricing-table__desc' );
				$css->add_property( 'font-size', ( $attr['descStyles'][0]['descSizeMobile'] . $attr['descStyles'][0]['descSizeUnit'] ) );
			}
		}
		if ( isset( $attr['buttonStyles'] ) ) {
			if ( isset( $attr['buttonStyles'][0]['btnSizeMobile'] ) && isset( $attr['buttonStyles'][0]['btnSizeUnit'] ) ) {
				$css->set_selector( '#premium-pricing-table-' . $unique_id . '> .premium-pricing-table__button' . ' > .premium-pricing-table__button_link' );
				$css->add_property( 'font-size', ( $attr['buttonStyles'][0]['btnSizeMobile'] . $attr['buttonStyles'][0]['btnSizeUnit'] ) );
			}
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get Lottie Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_lottie_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-lottie',
				PREMIUM_BLOCKS_URL . 'assets/js/lottie.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			$css = $this->get_lottie_css_style( $attributes, $unique_id );
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

	/**
	 * Get Lottie Block CSS
	 *
	 * Return Frontend CSS for Lottie Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_lottie_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		if ( isset( $attr['lottieStyles'] ) ) {
			if ( isset( $attr['lottieStyles'][0]['size'] ) || isset( $attr['lottieStyles'][0]['sizeUnit'] ) ) {
				$css->set_selector( '#premium-lottie-' . $unique_id . '> .premium-lottie-svg svg' );
				$css->add_property( 'width', ( $attr['lottieStyles'][0]['size'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
				$css->add_property( 'height', ( $attr['lottieStyles'][0]['size'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
				$css->set_selector( '#premium-lottie-' . $unique_id . '> .premium-lottie-canvas' );
				$css->add_property( 'width', ( $attr['lottieStyles'][0]['size'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
				$css->add_property( 'height', ( $attr['lottieStyles'][0]['size'] . $attr['lottieStyles'][0]['sizeUnit'] ) );

			}
		}
		if ( isset( $attr['paddingT'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-top', ( $attr['paddingT'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingR'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-right', ( $attr['paddingR'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingB'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-bottom', ( $attr['paddingB'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingL'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-bottom', ( $attr['paddingL'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->start_media_query( $media_query['tablet'] );
		if ( isset( $attr['lottieStyles'] ) ) {
			if ( isset( $attr['lottieStyles'][0]['sizeTablet'] ) || isset( $attr['lottieStyles'][0]['sizeUnit'] ) ) {
				$css->set_selector( '#premium-lottie-' . $unique_id . '> .premium-lottie-svg svg' );
				$css->add_property( 'width', ( $attr['lottieStyles'][0]['sizeTablet'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
				$css->add_property( 'height', ( $attr['lottieStyles'][0]['sizeTablet'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
				$css->set_selector( '#premium-lottie-' . $unique_id . '> .premium-lottie-canvas' );
				$css->add_property( 'width', ( $attr['lottieStyles'][0]['sizeTablet'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
				$css->add_property( 'height', ( $attr['lottieStyles'][0]['sizeTablet'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
			}
		}
		if ( isset( $attr['paddingTTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-top', ( $attr['paddingTTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingRTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-right', ( $attr['paddingRTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingBTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-bottom', ( $attr['paddingBTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingLTablet'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-bottom', ( $attr['paddingLTablet'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attr['lottieStyles'] ) ) {
			if ( isset( $attr['lottieStyles'][0]['sizeMobile'] ) || isset( $attr['lottieStyles'][0]['sizeUnit'] ) ) {
				$css->set_selector( '#premium-lottie-' . $unique_id . '> .premium-lottie-svg svg' );
				$css->add_property( 'width', ( $attr['lottieStyles'][0]['sizeMobile'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
				$css->add_property( 'height', ( $attr['lottieStyles'][0]['sizeMobile'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
				$css->set_selector( '#premium-lottie-' . $unique_id . '> .premium-lottie-canvas' );
				$css->add_property( 'width', ( $attr['lottieStyles'][0]['sizeMobile'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
				$css->add_property( 'height', ( $attr['lottieStyles'][0]['sizeMobile'] . $attr['lottieStyles'][0]['sizeUnit'] ) );
			}
		}
		if ( isset( $attr['paddingTMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-top', ( $attr['paddingTMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingRMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-right', ( $attr['paddingRMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingBMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-bottom', ( $attr['paddingBMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		if ( isset( $attr['paddingLMobile'] ) && isset( $attr['containerStyles'][0]['paddingU'] ) ) {
			$css->set_selector( '#premium-lottie-' . $unique_id . '.premium-lottie-animation' );
			$css->add_property( 'padding-bottom', ( $attr['paddingLMobile'] . $attr['containerStyles'][0]['paddingU'] ) );
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get Testimonial Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_testimonial_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			$css = $this->get_testimonial_css_style( $attributes, $unique_id );
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

	/**
	 * Get Testimonial Block CSS
	 *
	 * Return Frontend CSS for Testimonial Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_testimonial_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// Author Style FontSize.
		if ( isset( $attr['authorStyles'] ) ) {
			if ( isset( $attr['authorStyles'][0]['authorSize'] ) && isset( $attr['authorStyles'][0]['authorSizeUnit'] ) ) {
				$css->set_selector( '#premium-testimonial-' . $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author ' );
				$css->add_property( 'font-size', ( $attr['authorStyles'][0]['authorSize'] . $attr['authorStyles'][0]['authorSizeUnit'] ) );
			}
		}
		// Company Style FontSize.
		if ( isset( $attr['companyStyles'] ) ) {
			if ( isset( $attr['companyStyles'][0]['authorComSize'] ) && isset( $attr['companyStyles'][0]['authorComSizeUnit'] ) ) {
				$css->set_selector( '#premium-testimonial-' . $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . ' > .premium-testimonial__link_wrap' . '> .premium-testimonial__author_comp' );
				$css->add_property( 'font-size', ( $attr['companyStyles'][0]['authorComSize'] . $attr['companyStyles'][0]['authorComSizeUnit'] ) );
			}
		}
		// Body Style FontSize.
		if ( isset( $attr['contentStyle'] ) ) {
			if ( isset( $attr['contentStyle'][0]['bodySize'] ) && isset( $attr['contentStyle'][0]['bodySizeUnit'] ) ) {
				$css->set_selector( '#premium-testimonial-' . $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
				$css->add_property( 'font-size', ( $attr['contentStyle'][0]['bodySize'] . $attr['contentStyle'][0]['bodySizeUnit'] ) );
			}
		}
		// Container Style
		if ( isset( $attr['paddingTop'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-top', ( $attr['paddingTop'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingRight'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-right', ( $attr['paddingRight'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingBottom'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-bottom', ( $attr['paddingBottom'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingLeft'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-left', ( $attr['paddingLeft'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		$css->start_media_query( $media_query['tablet'] );
		// Author Style FontSize Tablet.
		if ( isset( $attr['authorStyles'] ) ) {
			if ( isset( $attr['authorStyles'][0]['authorSizeTablet'] ) && isset( $attr['authorStyles'][0]['authorSizeUnit'] ) ) {
				$css->set_selector( '#premium-testimonial-' . $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author ' );
				$css->add_property( 'font-size', ( $attr['authorStyles'][0]['authorSizeTablet'] . $attr['authorStyles'][0]['authorSizeUnit'] ) );
			}
		}
		// Company Style FontSize Tablet.
		if ( isset( $attr['companyStyles'] ) ) {
			if ( isset( $attr['companyStyles'][0]['authorComSizeTablet'] ) && isset( $attr['companyStyles'][0]['authorComSizeUnit'] ) ) {
				$css->set_selector( '#premium-testimonial-' . $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . ' > .premium-testimonial__link_wrap' . '> .premium-testimonial__author_comp' );
				$css->add_property( 'font-size', ( $attr['companyStyles'][0]['authorComSizeTablet'] . $attr['companyStyles'][0]['authorComSizeUnit'] ) );
			}
		}
		// Body Style FontSize Tablet.
		if ( isset( $attr['contentStyle'] ) ) {
			if ( isset( $attr['contentStyle'][0]['bodySizeTablet'] ) && isset( $attr['contentStyle'][0]['bodySizeUnit'] ) ) {
				$css->set_selector( '#premium-testimonial-' . $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
				$css->add_property( 'font-size', ( $attr['contentStyle'][0]['bodySizeTablet'] . $attr['contentStyle'][0]['bodySizeUnit'] ) );
			}
		}
		// Container Style Tablet
		if ( isset( $attr['paddingTTablet'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-top', ( $attr['paddingTTablet'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingRTablet'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-right', ( $attr['paddingRTablet'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingBTablet'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-bottom', ( $attr['paddingBTablet'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingLTablet'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-left', ( $attr['paddingLTablet'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		// Author Style FontSize Mobile.
		if ( isset( $attr['authorStyles'] ) ) {
			if ( isset( $attr['authorStyles'][0]['authorSizeMobile'] ) && isset( $attr['authorStyles'][0]['authorSizeUnit'] ) ) {
				$css->set_selector( '#premium-testimonial-' . $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author ' );
				$css->add_property( 'font-size', ( $attr['authorStyles'][0]['authorSizeMobile'] . $attr['authorStyles'][0]['authorSizeUnit'] ) );
			}
		}
		// Company Style FontSize Mobile.
		if ( isset( $attr['companyStyles'] ) ) {
			if ( isset( $attr['companyStyles'][0]['authorComSizeMobile'] ) && isset( $attr['companyStyles'][0]['authorComSizeUnit'] ) ) {
				$css->set_selector( '#premium-testimonial-' . $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . ' > .premium-testimonial__link_wrap' . '> .premium-testimonial__author_comp' );
				$css->add_property( 'font-size', ( $attr['companyStyles'][0]['authorComSizeMobile'] . $attr['companyStyles'][0]['authorComSizeUnit'] ) );
			}
		}
		// Body Style FontSize Mobile.
		if ( isset( $attr['contentStyle'] ) ) {
			if ( isset( $attr['contentStyle'][0]['bodySizeMobile'] ) && isset( $attr['contentStyle'][0]['bodySizeUnit'] ) ) {
				$css->set_selector( '#premium-testimonial-' . $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
				$css->add_property( 'font-size', ( $attr['contentStyle'][0]['bodySizeMobile'] . $attr['contentStyle'][0]['bodySizeUnit'] ) );
			}
		}
		// Container Style Mobile
		if ( isset( $attr['paddingTMobile'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-top', ( $attr['paddingTMobile'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingRMobile'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-right', ( $attr['paddingRMobile'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingBMobile'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-bottom', ( $attr['paddingBMobile'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingLMobile'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '#premium-testimonial-' . $unique_id );
			$css->add_property( 'padding-left', ( $attr['paddingLMobile'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get Section Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_section_css( $attributes, $content ) {
		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			$css = $this->get_section_css_style( $attributes, $unique_id );
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

	/**
	 * Get Section Block CSS
	 *
	 * Return Frontend CSS for Section Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_section_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		if ( isset( $attr['paddingTop'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-top', ( $attr['paddingTop'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingRight'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-right', ( $attr['paddingRight'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingBottom'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-bottom', ( $attr['paddingBottom'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingLeft'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-left', ( $attr['paddingLeft'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['marginTop'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-top', ( $attr['marginTop'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		if ( isset( $attr['marginRight'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-right', ( $attr['marginRight'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		if ( isset( $attr['marginBottom'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-bottom', ( $attr['marginBottom'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		if ( isset( $attr['marginLeft'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-left', ( $attr['marginLeft'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		$css->start_media_query( $media_query['tablet'] );
		if ( isset( $attr['paddingTTablet'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-top', ( $attr['paddingTTablet'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingRTablet'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-right', ( $attr['paddingRTablet'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingBTablet'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-bottom', ( $attr['paddingBTablet'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingLTablet'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-left', ( $attr['paddingLTablet'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['marginTTablet'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-top', ( $attr['marginTTablet'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		if ( isset( $attr['marginRTablet'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-right', ( $attr['marginRTablet'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		if ( isset( $attr['marginBTablet'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-bottom', ( $attr['marginBTablet'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		if ( isset( $attr['marginLTablet'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-left', ( $attr['marginLTablet'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attr['paddingTMobile'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-top', ( $attr['paddingTMobile'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingRMobile'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-right', ( $attr['paddingRMobile'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingBMobile'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-bottom', ( $attr['paddingBMobile'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['paddingLMobile'] ) && isset( $attr['containerStyles'][0]['paddingUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'padding-left', ( $attr['paddingLMobile'] . $attr['containerStyles'][0]['paddingUnit'] ) );
		}
		if ( isset( $attr['marginTMobile'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-top', ( $attr['marginTMobile'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		if ( isset( $attr['marginRMobile'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-right', ( $attr['marginRMobile'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		if ( isset( $attr['marginBMobile'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-bottom', ( $attr['marginBMobile'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		if ( isset( $attr['marginLMobile'] ) && isset( $attr['containerStyles'][0]['marginUnit'] ) ) {
			$css->set_selector( '.premium-container' );
			$css->add_property( 'margin-left', ( $attr['marginLMobile'] . $attr['containerStyles'][0]['marginUnit'] ) );
		}
		$css->stop_media_query();
		return $css->css_output();

	}

	/**
	 * Get Video Box Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_videobox_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-video-box',
				PREMIUM_BLOCKS_URL . 'assets/js/video-box.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			$css = $this->get_videobox_css_style( $attributes, $unique_id );
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

	/**
	 * Get Video Box Block CSS
	 *
	 * Return Frontend CSS for Video Box Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_videobox_css_style( $attr, $unique_id ) {

		if ( isset( $attr['descStyles'][0]['videoDescFamily'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['descStyles'][0]['videoDescFamily'] ) ? $attr['descStyles'][0]['videoDescFamily'] : '' ),
					'fontVariant' => ( isset( $attr['descStyles'][0]['videoDescWeight'] ) ? $attr['descStyles'][0]['videoDescWeight'] : '' ),
				)
			);
		}
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// Style Description.
		if ( isset( $attr['descStyles'] ) ) {
			if ( isset( $attr['descStyles'][0]['videoDescSize'] ) && isset( $attr['descStyles'][0]['videoDescSizeUnit'] ) ) {
				$css->set_selector( '.premium-video-box-' . $unique_id . '> .premium-video-box__desc' . ' > .premium-video-box__desc_text' );
				$css->add_property( 'font-size', ( $attr['descStyles'][0]['videoDescSize'] . $attr['descStyles'][0]['videoDescSizeUnit'] ) );
			}
		}
		$css->start_media_query( $media_query['tablet'] );
		if ( isset( $attr['descStyles'][0]['videoDescSizeTablet'] ) && isset( $attr['descStyles'][0]['videoDescSizeUnit'] ) ) {
			$css->set_selector( '.premium-video-box-' . $unique_id . '> .premium-video-box__desc' . ' > .premium-video-box__desc_text' );
			$css->add_property( 'font-size', ( $attr['descStyles'][0]['videoDescSizeTablet'] . $attr['descStyles'][0]['videoDescSizeUnit'] ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attr['descStyles'][0]['videoDescSizeMobile'] ) && isset( $attr['descStyles'][0]['videoDescSizeUnit'] ) ) {
			$css->set_selector( '.premium-video-box-' . $unique_id . '> .premium-video-box__desc' . ' > .premium-video-box__desc_text' );
			$css->add_property( 'font-size', ( $attr['descStyles'][0]['videoDescSizeMobile'] . $attr['descStyles'][0]['videoDescSizeUnit'] ) );
		}
		$css->stop_media_query();
		return $css->css_output();

	}

    /**
	 * Get Image Seperartor Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option For attribute.
	 * @param string $contnet for content of Block.
	 */
	public function get_image_seperator_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		
		$style_id = 'pbg-block-image-separator-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'banner', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_image_seperator_css_style( $attributes, $unique_id );
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

	/**
	 * Get Image Seperator Block CSS
	 *
	 * Return Frontend CSS for Image Seperator Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For  block ID.
	 */
	public function get_image_seperator_css_style( $attr, $unique_id ) {
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// Style.
		if ( isset( $attr['iconStyles'] ) ) {
			if ( isset( $attr['iconStyles'][0]['iconSize'] ) && isset( $attr['iconStyles'][0]['iconSizeType'] ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container'. '>i' );
				$css->add_property( 'font-size', $css->render_color( $attr['iconStyles'][0]['iconSize'] . $attr['iconStyles'][0]['iconSizeType'] . '!important' ) );
			}
            if ( isset( $attr['iconStyles'][0]['iconPadding'] ) && isset( $attr['iconStyles'][0]['iconPaddingType'] ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . '> i' );
				$css->add_property( 'padding', $css->render_color( $attr['iconStyles'][0]['iconPadding'] . $attr['iconStyles'][0]['iconPaddingType'] . '!important' ) );
			}
            if ( isset( $attr['iconStyles'][0]['iconColorHover'] )  ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . '> i:hover' );
				$css->add_property( 'color', $css->render_color($attr['iconStyles'][0]['iconColorHover'] . '!important' ) );
			}
            if ( isset( $attr['iconStyles'][0]['iconBGColorHover'] )  ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . '> i:hover' );
				$css->add_property( 'background-color', $css->render_color( $attr['iconStyles'][0]['iconBGColorHover'] . '!important' ) );
			}
            
		}
        
        if ( isset( $attr['iconStyles'] ) ) {
			if ( isset( $attr['iconStyles'][0]['iconSize'] ) && isset( $attr['iconStyles'][0]['iconSizeType'] ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' .' > img' );
				$css->add_property( 'width', $css->render_color( $attr['iconStyles'][0]['iconSize'] . $attr['iconStyles'][0]['iconSizeType'] . '!important' ) );
			}
            if ( (isset( $attr['iconStyles'][0]['iconBorderRadius'] ) && isset( $attr['iconStyles'][0]['iconBorderRadiusType'] )) || isset($attr['iconStyles'][0]['advancedBorder']) ) {
                $css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container'  .'> img' );
				$css->add_property( 'border-radius', $css->render_color( $attr['iconStyles'][0]['advancedBorder'] ? $attr['iconStyles'][0]['advancedBorderValue'] : $attr['iconStyles'][0]['iconBorderRadius'] . $attr['iconStyles'][0]['iconBorderRadiusType'] . '!important' ) );
			}
               if ( (isset( $attr['iconStyles'][0]['iconBorderRadius'] ) && isset( $attr['iconStyles'][0]['iconBorderRadiusType'] )) || isset($attr['iconStyles'][0]['advancedBorder']) ) {
                $css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container'  .'> i' );
				$css->add_property( 'border-radius', $css->render_color( $attr['iconStyles'][0]['advancedBorder'] ? $attr['iconStyles'][0]['advancedBorderValue'] : $attr['iconStyles'][0]['iconBorderRadius'] . $attr['iconStyles'][0]['iconBorderRadiusType'] . '!important' ) );
			}
		}
		if ( isset( $attr['brightHover'] ) || isset( $attr['contrastHover']  )|| isset( $attr['saturationHover']) || isset($attr['blurHover']) || isset($attr['hueHover']) ) { 
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container:hover img' );
				$css->add_property( 'filter', "brightness(" . (isset( $attr['brightHover'] )? $attr['brightHover'] :'100') . "% ) contrast( " . (isset( $attr['contrastHover'])? $attr['contrastHover'] : '100') . "% ) saturate( " . (isset( $attr['saturationHover'])? $attr['saturationHover'] :'100')  .'% ) blur( ' . (isset($attr['blurHover'])? $attr['blurHover'] :'0') . 'px ) hue-rotate( ' . (isset($attr['hueHover'])? $attr['hueHover'] :'0') ."deg )" );
		}	
        
        if ( isset( $attr['imgHeight']    ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . '> img' );
				$css->add_property( 'height', $css->render_color( $attr['imgHeight'] . (isset($attr['iconStyles'][0]['imgHeightType'])? $attr['iconStyles'][0]['imgHeightType'] :'px')  . '!important' ) );	
		}
		$css->start_media_query( $media_query['tablet'] );
        if ( isset( $attr['iconStyles'] ) ) {
			if ( isset( $attr['iconStyles'][0]['iconSizeTablet'] ) && isset( $attr['iconStyles'][0]['iconSizeType'] ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' .'> i' );
				$css->add_property( 'font-size', $css->render_color( $attr['iconStyles'][0]['iconSizeTablet'] . $attr['iconStyles'][0]['iconSizeType'] . '!important' ) );
			}
            if ( isset( $attr['iconStyles'][0]['iconPaddingTablet'] ) && isset( $attr['iconStyles'][0]['iconPaddingType'] ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container'. '> i' );
				$css->add_property( 'padding', $css->render_color( $attr['iconStyles'][0]['iconPaddingTablet'] . $attr['iconStyles'][0]['iconPaddingType'] . '!important' ) );
			}
		}
        if ( isset( $attr['iconStyles'] ) ) {
			if ( isset( $attr['iconStyles'][0]['iconSizeTablet'] ) && isset( $attr['iconStyles'][0]['iconSizeType'] ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container'. '> img' );
				$css->add_property( 'width', $css->render_color( $attr['iconStyles'][0]['iconSizeTablet'] . $attr['iconStyles'][0]['iconSizeType'] . '!important' ) );
			}
            if ( (isset( $attr['iconStyles'][0]['iconBorderRadiusTablet'] ) && isset( $attr['iconStyles'][0]['iconBorderRadiusType'] )) || isset($attr['iconStyles'][0]['advancedBorder']) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . '> img' );
				$css->add_property( 'border-radius', $css->render_color( isset($attr['iconStyles'][0]['advancedBorder']) ? $attr['iconStyles'][0]['advancedBorderValue'] : $attr['iconStyles'][0]['iconBorderRadiusTablet'] . $attr['iconStyles'][0]['iconBorderRadiusType'] . '!important' ) );
			}
            if ( (isset( $attr['iconStyles'][0]['iconBorderRadiusTablet'] ) && isset( $attr['iconStyles'][0]['iconBorderRadiusType'] )) || isset($attr['iconStyles'][0]['advancedBorder']) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . '> i' );
				$css->add_property( 'border-radius', $css->render_color( isset($attr['iconStyles'][0]['advancedBorder']) ? $attr['iconStyles'][0]['advancedBorderValue'] : $attr['iconStyles'][0]['iconBorderRadiusTablet'] . $attr['iconStyles'][0]['iconBorderRadiusType'] . '!important' ) );
			}
		}
		if ( isset( $attr['imgHeightTablet']  ) && isset( $attr['iconStyles'][0]['imgHeightType']  ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . '> img' );
				$css->add_property( 'height', $css->render_color( $attr['imgHeightTablet'] . $attr['iconStyles'][0]['imgHeightType'] . '!important' ) );	
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attr['iconStyles'] ) ) {
			if ( isset( $attr['iconStyles'][0]['iconSizeMobile'] ) && isset( $attr['iconStyles'][0]['iconSizeType'] ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container'. ' > i' );
				$css->add_property( 'font-size', $css->render_color( $attr['iconStyles'][0]['iconSizeMobile'] . $attr['iconStyles'][0]['iconSizeType'] . '!important' ) );
			}
            if ( isset( $attr['iconStyles'][0]['iconPaddingMobile'] ) && isset( $attr['iconStyles'][0]['iconPaddingType'] ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . '> i' );
				$css->add_property( 'padding', $css->render_color( $attr['iconStyles'][0]['iconPaddingMobile'] . $attr['iconStyles'][0]['iconPaddingType'] . '!important' ) );
			}
		}
        if ( isset( $attr['iconStyles'] ) ) {
			if ( isset( $attr['iconStyles'][0]['iconSizeMobile'] ) && isset( $attr['iconStyles'][0]['iconSizeType'] ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . ' > img' );
				$css->add_property( 'width', $css->render_color( $attr['iconStyles'][0]['iconSizeMobile'] . $attr['iconStyles'][0]['iconSizeType'] . '!important' ) );
			}
            if ( (isset( $attr['iconStyles'][0]['iconBorderRadiusMobile'] ) && isset( $attr['iconStyles'][0]['iconBorderRadiusType'] )) || isset($attr['iconStyles'][0]['advancedBorder']) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . ' > img' );
				$css->add_property( 'border-radius', $css->render_color( isset($attr['iconStyles'][0]['advancedBorder']) ? $attr['iconStyles'][0]['advancedBorderValue'] : $attr['iconStyles'][0]['iconBorderRadiusMobile'] . $attr['iconStyles'][0]['iconBorderRadiusType'] . '!important' ) );
			}
            if ( (isset( $attr['iconStyles'][0]['iconBorderRadiusMobile'] ) && isset( $attr['iconStyles'][0]['iconBorderRadiusType'] )) || isset($attr['iconStyles'][0]['advancedBorder']) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . ' > i' );
				$css->add_property( 'border-radius', $css->render_color( isset($attr['iconStyles'][0]['advancedBorder']) ? $attr['iconStyles'][0]['advancedBorderValue'] : $attr['iconStyles'][0]['iconBorderRadiusMobile'] . $attr['iconStyles'][0]['iconBorderRadiusType'] . '!important' ) );
			}
		}
		if ( isset( $attr['imgHeightMobile']  ) && isset( $attr['iconStyles'][0]['imgHeightType']  ) ) {
				$css->set_selector( '.premium-block-' . $unique_id . '> .premium-image-separator-container' . ' > img' );
				$css->add_property( 'height', $css->render_color( $attr['imgHeightMobile'] . $attr['iconStyles'][0]['imgHeightType'] . '!important' ) );	
		}
		$css->stop_media_query();
		return $css->css_output();
	}

	/**
	 * Converts color value from Hex to RGBA
	 *
	 * @since 1.8.2
	 *
	 * @access public
	 *
	 * @param string $hex_color value of Color.
	 */
	public function hex_to_rgba( $color, $opacity = false, $is_array = false ) {
		$default = $color;
		// Return default if no color provided.
		if ( empty( $color ) ) {
			return $default;
		}
		// Sanitize $color if "#" is provided.
		if ( '#' === $color[0] ) {
			$color = substr( $color, 1 );
		}
		// Check if color has 6 or 3 characters and get values.
		if ( strlen( $color ) === 6 ) {
				$hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
		} elseif ( strlen( $color ) === 3 ) {
				$hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
		} else {
				return $default;
		}
		// Convert hexadec to rgb.
		$rgb = array_map( 'hexdec', $hex );
		// Check if opacity is set(rgba or rgb).

		if ( false !== $opacity && '' !== $opacity ) {
			if ( abs( $opacity ) >= 1 ) {
				$opacity = $opacity / 100;
			}
			$output = 'rgba(' . implode( ',', $rgb ) . ',' . $opacity . ')';
		} else {
			$output = 'rgb(' . implode( ',', $rgb ) . ')';
		}
		if ( $is_array ) {
			return $rgb;
		} else {
			// Return rgb(a) color string.
			return $output;
		}

	}

	/**
	 * Generates stylesheet for reusable blocks.
	 *
	 * @since 1.1.0
	 *
	 * @param array $blocks blocks array.
	 */
	public function get_stylesheet( $blocks ) {

		$desktop         = '';
		$tablet          = '';
		$mobile          = '';
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
	 * Load Google Fonts in Frontend
	 */
	public function frontend_footer_gfonts() {

		if ( empty( self::$footer_gfonts ) ) {
			return;
		}
		$print_google_fonts = apply_filters( 'premium_blocks_print_footer_google_fonts', true );
		if ( ! $print_google_fonts ) {
			return;
		}
		$this->load_google_font( self::$footer_gfonts );

	}

	/**
	 * Creates and returns an instance of the class
	 *
	 * @since 1.0.0
	 *
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
	 *
	 * @return object
	 */
	function pbg_blocks_helper() {
		return pbg_blocks_helper::get_instance();
	}
}
pbg_blocks_helper();
