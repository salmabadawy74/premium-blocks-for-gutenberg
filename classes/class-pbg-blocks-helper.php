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
	   * Load SvgShapes
	   *
	   * @since 1.0.0
	   */
	public function getSvgShapes() {
		$shape_path = PREMIUM_BLOCKS_PATH . 'src/components/shape';
		$shapes     = glob( $shape_path . '/*.svg', GLOB_BRACE );
		$shapeArray = array();
		if ( count( $shapes ) ) {
			foreach ( $shapes as $shape ) {
				$shapeArray[ str_replace( array( '.svg', $shape_path . '/' ), '', $shape ) ] = file_get_contents( $shape );
			}
		}
		return $shapeArray;
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
			PREMIUM_BLOCKS_URL . 'assets/js/build/index.js',
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
				'defaultAuthImg'    => PREMIUM_BLOCKS_URL . 'assets/img/placeholder.png',
				'activeBlocks'      => self::$blocks,
				'tablet_breakpoint' => PBG_TABLET_BREAKPOINT,
				'mobile_breakpoint' => PBG_MOBILE_BREAKPOINT,
				'shapes'            => $this->getSvgShapes(),
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
				'render_callback'  => array( $this, 'get_accordion_css' ),
				'editor_style'     => 'premium-blocks-editor-css',
				'editor_script'    => 'pbg-blocks-js',
				'provides_context' => array(
					'titleTag'    => 'titleTag',
					'contentType' => 'contentType',
					'direction'   => 'direction',
					'arrowStyles' => 'arrowStyles',
				),

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
			'premium/icon',
			array(
				'render_callback' => array( $this, 'get_icon_css' ),
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
		register_block_type(
			'premium/modal',
			array(
				'render_callback' => array( $this, 'get_modal_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

		register_block_type(
			'premium/bullet-list',
			array(
				'render_callback' => array( $this, 'get_bulletList_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',

			)
		);

		register_block_type(
			'premium/person',
			array(
				'render_callback' => array( $this, 'get_person_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

		register_block_type(
			'premium/heading',
			array(
				'render_callback' => array( $this, 'get_heading_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',

			)
		);
		register_block_type(
			'premium/row',
			array(
				'render_callback' => array( $this, 'get_row_css' ),
				'editor_style'    => 'premium-blocks-editor-css',
				'editor_script'   => 'pbg-blocks-js',
			)
		);

		register_block_type(
			'premium/maps',
			array(
				'render_callback' => array( $this, 'get_maps_css' ),
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

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = $attributes['blockId'];
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
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'fancy-text', $unique_id ) ) {
			$css = $this->get_fancy_text_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'fancy-text', $unique_id ) ) {
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
		if ( isset( $attr['fancyTextTypography'] ) ) {
			$fancy_typography = $attr['fancyTextTypography'];
			$fancy_size       = $fancy_typography['fontSize'];

			$css->set_selector( '.' . $unique_id . ' .premium-fancy-text-title' );
			$css->render_typography( $attr['fancyTextTypography'], 'Desktop' );
			$css->set_selector( '.' . $unique_id . ' .typed-cursor' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $fancy_size, 'Desktop', $fancy_size['unit'] ) );

		}
		// Suffix, Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {

			$css->set_selector( '.' . $unique_id . ' .premium-fancy-text-suffix-prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Desktop' );

		}

		if ( isset( $attr['fancyContenttAlign'] ) ) {

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', $css->render_color( $attr['fancyContenttAlign']['Desktop'] ) );

		}

		if ( isset( $attr['fancyTextAlign'] ) ) {

			$css->set_selector( '.' . $unique_id . ' .premium-fancy-text-title-slide' );
			$css->add_property( 'text-align', $css->render_color( $attr['fancyTextAlign']['Desktop'] ) );

		}

		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['fancyTextTypography'] ) ) {

			$css->set_selector( '.' . $unique_id . ' .premium-fancy-text-title' );
			$css->render_typography( $attr['fancyTextTypography'], 'Tablet' );

		}

		// Suffix, Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {

			$css->set_selector( '.' . $unique_id . ' .premium-fancy-text-suffix-prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Tablet' );

		}

		if ( isset( $attr['fancyContenttAlign'] ) ) {

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', $css->render_color( $attr['fancyContenttAlign']['Tablet'] ) );

		}

		if ( isset( $attr['fancyTextAlign'] ) ) {

			$css->set_selector( '.' . $unique_id . ' .premium-fancy-text-title-slide' );
			$css->add_property( 'text-align', $css->render_color( $attr['fancyTextAlign']['Tablet'] ) );

		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['fancyTextTypography'] ) ) {

			$css->set_selector( '.' . $unique_id . ' .premium-fancy-text-title' );
			$css->render_typography( $attr['fancyTextTypography'], 'Mobile' );

		}

		// Suffix, Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {

			$css->set_selector( '.' . $unique_id . ' .premium-fancy-text-suffix-prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Mobile' );

		}
		if ( isset( $attr['fancyContenttAlign'] ) ) {

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', $css->render_color( $attr['fancyContenttAlign']['Mobile'] ) );

		}

		if ( isset( $attr['fancyTextAlign'] ) ) {

			$css->set_selector( '.' . $unique_id . ' .premium-fancy-text-title-slide' );
			$css->add_property( 'text-align', $css->render_color( $attr['fancyTextAlign']['Mobile'] ) );

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

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = $attributes['blockId'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-accordion',
				PREMIUM_BLOCKS_URL . 'src/blocks/accordion/view/view.js',
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
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' . ' > .premium-accordion__title' . ' > .premium-accordion__title_text' );
			$css->render_typography( $title_typography, 'Desktop' );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Desktop'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleBorder'] ) ) {
			$title_border        = $attr['titleBorder'];
			$title_border_width  = $attr['titleBorder']['borderWidth'];
			$title_border_radius = $attr['titleBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Desktop'], 'px' ) );
		}

		// Desc Style
		if ( isset( $attr['descTypography'] ) ) {
			$desc_typography = $attr['descTypography'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' . ' > .premium-accordion__desc' );
			$css->render_typography( $desc_typography, 'Desktop' );
		}

		if ( isset( $attr['descPadding'] ) ) {
			$desc_padding = $attr['descPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Desktop'], $desc_padding['unit'] ) );
		}

		if ( isset( $attr['descBorder'] ) ) {
			$desc_border        = $attr['descBorder'];
			$desc_border_width  = $attr['descBorder']['borderWidth'];
			$desc_border_radius = $attr['descBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'border-width', $css->render_spacing( $desc_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $desc_border_radius['Desktop'], 'px' ) );
		}
		// content.
		if ( isset( $attr['descAlign'] ) ) {
			$align = $attr['descAlign'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'text-align', $css->get_responsive_css( $align, 'Desktop' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' . ' > .premium-accordion__title' . ' > .premium-accordion__title_text' );
			$css->render_typography( $title_typography, 'Tablet' );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Tablet'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleBorder'] ) ) {
			$title_border        = $attr['titleBorder'];
			$title_border_width  = $attr['titleBorder']['borderWidth'];
			$title_border_radius = $attr['titleBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Tablet'], 'px' ) );
		}

		// Desc Style
		if ( isset( $attr['descTypography'] ) ) {
			$desc_typography = $attr['descTypography'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' . ' > .premium-accordion__desc' );
			$css->render_typography( $desc_typography, 'Tablet' );
		}

		if ( isset( $attr['descPadding'] ) ) {
			$desc_padding = $attr['descPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Tablet'], $desc_padding['unit'] ) );
		}

		if ( isset( $attr['descBorder'] ) ) {
			$desc_border        = $attr['descBorder'];
			$desc_border_width  = $attr['descBorder']['borderWidth'];
			$desc_border_radius = $attr['descBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'border-width', $css->render_spacing( $desc_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $desc_border_radius['Tablet'], 'px' ) );
		}
		// content.
		if ( isset( $attr['descAlign'] ) ) {
			$align = $attr['descAlign'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'text-align', $css->get_responsive_css( $align, 'Tablet' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' . ' > .premium-accordion__title' . ' > .premium-accordion__title_text' );
			$css->render_typography( $title_typography, 'Mobile' );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Mobile'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleBorder'] ) ) {
			$title_border        = $attr['titleBorder'];
			$title_border_width  = $attr['titleBorder']['borderWidth'];
			$title_border_radius = $attr['titleBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Mobile'], 'px' ) );
		}

		// Desc Style
		if ( isset( $attr['descTypography'] ) ) {
			$desc_typography = $attr['descTypography'];
			$desc_size       = $desc_typography['fontSize'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' . ' > .premium-accordion__desc' );
			$css->render_typography( $desc_typography, 'Mobile' );
		}

		if ( isset( $attr['descPadding'] ) ) {
			$desc_padding = $attr['descPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Mobile'], $desc_padding['unit'] ) );
		}

		if ( isset( $attr['descBorder'] ) ) {
			$desc_border        = $attr['descBorder'];
			$desc_border_width  = $attr['descBorder']['borderWidth'];
			$desc_border_radius = $attr['descBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'border-width', $css->render_spacing( $desc_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $desc_border_radius['Mobile'], 'px' ) );
		}
		// content.
		if ( isset( $attr['descAlign'] ) ) {
			$align = $attr['descAlign'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__desc_wrap' );
			$css->add_property( 'text-align', $css->get_responsive_css( $align, 'Mobile' ) );
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
			$unique_id = "#premium-banner-{$attributes['block_id']}";
		}

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}

		$style_unique_id = rand( 100, 10000 );

		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-banner',
				PREMIUM_BLOCKS_URL . 'assets/js/banner.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $style_unique_id );
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

		if ( isset( $attr['contentAlign'] ) ) {

			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' );
			$css->add_property( 'text-align', $css->render_color( $attr['contentAlign']['Desktop'] ) );
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' );
			$css->add_property( 'text-align', $css->render_color( $attr['contentAlign']['Desktop'] ) );

		}

		if ( isset( $attr['titleTypography'] ) ) {

			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' . ' > .premium-banner__title' );
			$css->render_typography( $attr['titleTypography'], 'Desktop' );

		}

		// Desc Style
		if ( isset( $attr['descTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' . ' > .premium-banner__desc' );
			$css->render_typography( $attr['descTypography'], 'Desktop' );
		}

		// Container Style

		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-banner__inner' );

			$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );

			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['contentAlign'] ) ) {
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' );
			$css->add_property( 'text-align', $css->render_color( $attr['contentAlign']['Tablet'] ) );
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' );
			$css->add_property( 'text-align', $css->render_color( $attr['contentAlign']['Tablet'] ) );
		}

		if ( isset( $attr['titleTypography'] ) ) {

			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' . ' > .premium-banner__title' );
			$css->render_typography( $attr['titleTypography'], 'Tablet' );

		}

		// Desc Style
		if ( isset( $attr['descTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' . ' > .premium-banner__desc' );
			$css->render_typography( $attr['descTypography'], 'Tablet' );
		}

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-banner__inner' );

			$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );

			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();

		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['contentAlign'] ) ) {
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' );
			$css->add_property( 'text-align', $css->render_color( $attr['contentAlign']['Mobile'] ) );
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' );
			$css->add_property( 'text-align', $css->render_color( $attr['contentAlign']['Mobile'] ) );
		}

		if ( isset( $attr['titleTypography'] ) ) {

			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' . ' > .premium-banner__title' );
			$css->render_typography( $attr['titleTypography'], 'Mobile' );

		}

		// Desc Style
		if ( isset( $attr['descTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' . ' > .premium-banner__desc' );
			$css->render_typography( $attr['descTypography'], 'Mobile' );
		}

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-banner__inner' );

			$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );

			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
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
			$unique_id = "#premium-button-wrap-{$attributes['block_id']}";
		}

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}

		$style_unique_id = rand( 100, 10000 );

		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'button', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_button_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'button', $unique_id ) ) {
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

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// Title Style
		if ( isset( $attr['typography'] ) ) {
			$typography = $attr['typography'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->render_typography( $typography, 'Desktop' );
		}

		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Title Style
		if ( isset( $attr['typography'] ) ) {
			$typography = $attr['typography'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->render_typography( $typography, 'Tablet' );
		}

		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Title Style
		if ( isset( $attr['typography'] ) ) {
			$typography = $attr['typography'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->render_typography( $typography, 'Mobile' );
		}

		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
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
			$unique_id = "#premium-countup-{$attributes['block_id']}";
		}

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}

		$style_unique_id = rand( 100, 10000 );

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
		$style_id = 'pbg-blocks-style-' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'countup', $unique_id ) ) {

			$css = $this->get_countup_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'countup', $unique_id ) ) {
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
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_countup_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		// Align.
		if ( isset( $attr['align'] ) ) {
			$align = $css->get_responsive_css( $attr['align'], 'Desktop' );

			$css->set_selector( $unique_id );
			$css->add_property( 'justify-content', $align );
		}

		if ( isset( $attr['selfAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['selfAlign'], 'Desktop' );

			$css->set_selector( $unique_id . ' .premium-countup__icon_wrap, ' . $unique_id . ' .premium-countup__info, ' . $unique_id . ' .premium-countup__title' );
			$css->add_property( 'align-self', $align );
		}

		// Border.
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );

		}

		// Number Style
		if ( isset( $attr['numberTypography'] ) ) {

			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );

			$css->render_typography( $attr['numberTypography'], 'Desktop' );
		}

		// Title Style
		if ( isset( $attr['titleTypography'] ) ) {

			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->render_typography( $attr['titleTypography'], 'Desktop' );

		}

		// Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Desktop' );
		}

		// Suffix Style
		if ( isset( $attr['suffixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->render_typography( $attr['suffixTypography'], 'Desktop' );
		}

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Align.
		if ( isset( $attr['align'] ) ) {
			$align = $css->get_responsive_css( $attr['align'], 'Tablet' );

			$css->set_selector( $unique_id );
			$css->add_property( 'justify-content', $align );
		}

		if ( isset( $attr['selfAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['selfAlign'], 'Tablet' );
			$css->set_selector( $unique_id . ' .premium-countup__icon_wrap, ' . $unique_id . ' .premium-countup__info, ' . $unique_id . ' .premium-countup__title' );
			$css->add_property( 'align-self', $align );
		}
				// Border.
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];
			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
		}

		// Number Style
		if ( isset( $attr['numberTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->render_typography( $attr['numberTypography'], 'Tablet' );
		}

		// Title Style
		if ( isset( $attr['titleTypography'] ) ) {

			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->render_typography( $attr['titleTypography'], 'Tablet' );

		}

		// Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {

			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Tablet' );

		}

		// Suffix Style
		if ( isset( $attr['suffixTypography'] ) ) {

			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->render_typography( $attr['suffixTypography'], 'Tablet' );

		}

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );

		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Align.
		if ( isset( $attr['align'] ) ) {
			$align = $css->get_responsive_css( $attr['align'], 'Mobile' );

			$css->set_selector( $unique_id );
			$css->add_property( 'justify-content', $align );
		}

		if ( isset( $attr['selfAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['selfAlign'], 'Mobile' );

			$css->set_selector( $unique_id . ' .premium-countup__icon_wrap, ' . $unique_id . ' .premium-countup__info, ' . $unique_id . ' .premium-countup__title' );
			$css->add_property( 'align-self', $align );
		}

		// Border.
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );

		}

		// Number Style
		if ( isset( $attr['numberTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->render_typography( $attr['numberTypography'], 'Mobile' );
		}

		// Title Style
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->render_typography( $attr['titleTypography'], 'Mobile' );

		}

		// Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Mobile' );

		}

		// Suffix Style
		if ( isset( $attr['suffixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->render_typography( $attr['suffixTypography'], 'Mobile' );

		}

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );

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
			$unique_id = "#premium-dheading-block-{$attributes['block_id']}";
		}

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}

		$style_unique_id = rand( 100, 10000 );

		$style_id = 'pbg-blocks-style' . esc_attr( $style_unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'dual-heading', $unique_id ) ) {

			$css = $this->get_dual_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'dual-heading', $unique_id ) ) {
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

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $attr['containerBorder']['borderWidth'];
			$container_border_radius = $attr['containerBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $container_border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $container_border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $container_border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $container_border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $container_border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $container_border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $container_border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $container_border_radius, 'left', 'Desktop', 'px' ) );
		}

		// First Style FontSize.
		if ( isset( $attr['firstStyles'] ) ) {
			if ( isset( $attr['firstStyles'][0]['firstSize'] ) || isset( $attr['firstStyles'][0]['firstSizeUnit'] ) ) {
				$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
				$css->add_property( 'font-size', ( $attr['firstStyles'][0]['firstSize'] . $attr['firstStyles'][0]['firstSizeUnit'] ) );
			}
		}

		if ( isset( $attr['firstTypography'] ) ) {
			$first_typography = $attr['firstTypography'];
			$font_size        = $first_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $first_typography['fontFamily'] ) ? $first_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $first_typography['fontWeight'] ) ? $first_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Desktop', $font_size['unit'] ) );
		}

		if ( isset( $attr['firstBorder'] ) ) {
			$first_border        = $attr['firstBorder'];
			$first_border_width  = $attr['firstBorder']['borderWidth'];
			$first_border_radius = $attr['firstBorder']['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $first_border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $first_border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $first_border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $first_border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $first_border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $first_border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $first_border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $first_border_radius, 'left', 'Desktop', 'px' ) );
		}

		if ( isset( $attr['firstPadding'] ) ) {
			$first_padding = $attr['firstPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'padding-top', $css->render_color( $first_padding['Desktop']['top'] . $first_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $first_padding['Desktop']['right'] . $first_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $first_padding['Desktop']['bottom'] . $first_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $first_padding['Desktop']['left'] . $first_padding['unit'] ) );
		}

		if ( isset( $attr['firstMargin'] ) ) {
			$first_margin = $attr['firstMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'margin-top', $css->render_color( $first_margin['Desktop']['top'] . $first_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $first_margin['Desktop']['right'] . $first_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $first_margin['Desktop']['bottom'] . $first_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $first_margin['Desktop']['left'] . $first_margin['unit'] ) );
		}

		// Second Style FontSize.
		if ( isset( $attr['secondStyles'] ) ) {
			if ( isset( $attr['secondStyles'][0]['secondSize'] ) && isset( $attr['secondStyles'][0]['secondSizeUnit'] ) ) {
				$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
				$css->add_property( 'font-size', ( $attr['secondStyles'][0]['secondSize'] . $attr['secondStyles'][0]['secondSizeUnit'] ) );
			}
		}

		if ( isset( $attr['secondTypography'] ) ) {
			$second_typography = $attr['secondTypography'];
			$font_size         = $second_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $second_typography['fontFamily'] ) ? $second_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $second_typography['fontWeight'] ) ? $second_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Desktop', $font_size['unit'] ) );
		}

		if ( isset( $attr['secondBorder'] ) ) {
			$second_border        = $attr['secondBorder'];
			$second_border_width  = $attr['secondBorder']['borderWidth'];
			$second_border_radius = $attr['secondBorder']['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $second_border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $second_border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $second_border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $second_border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $second_border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $second_border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $second_border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $second_border_radius, 'left', 'Desktop', 'px' ) );
		}

		if ( isset( $attr['secondPadding'] ) ) {
			$second_padding = $attr['secondPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'padding-top', $css->render_color( $second_padding['Desktop']['top'] . $second_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $second_padding['Desktop']['right'] . $second_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $second_padding['Desktop']['bottom'] . $second_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $second_padding['Desktop']['left'] . $second_padding['unit'] ) );
		}

		if ( isset( $attr['secondMargin'] ) ) {
			$second_margin = $attr['secondMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'margin-top', $css->render_color( $second_margin['Desktop']['top'] . $second_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $second_margin['Desktop']['right'] . $second_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $second_margin['Desktop']['bottom'] . $second_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $second_margin['Desktop']['left'] . $second_margin['unit'] ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $attr['containerBorder']['borderWidth'];
			$container_border_radius = $attr['containerBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $container_border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $container_border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $container_border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $container_border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $container_border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $container_border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $container_border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $container_border_radius, 'left', 'Tablet', 'px' ) );
		}

		// First Style FontSizeTablet.
		if ( isset( $attr['firstStyles'] ) ) {
			if ( isset( $attr['firstStyles'][0]['firstSize'] ) || isset( $attr['firstStyles'][0]['firstSizeUnit'] ) ) {
				$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
				$css->add_property( 'font-size', ( $attr['firstStyles'][0]['firstSize'] . $attr['firstStyles'][0]['firstSizeUnit'] ) );
			}
		}

		if ( isset( $attr['firstTypography'] ) ) {
			$first_typography = $attr['firstTypography'];
			$font_size        = $first_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $first_typography['fontFamily'] ) ? $first_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $first_typography['fontWeight'] ) ? $first_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Tablet', $font_size['unit'] ) );
		}

		if ( isset( $attr['firstBorder'] ) ) {
			$first_border        = $attr['firstBorder'];
			$first_border_width  = $attr['firstBorder']['borderWidth'];
			$first_border_radius = $attr['firstBorder']['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $first_border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $first_border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $first_border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $first_border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $first_border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $first_border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $first_border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $first_border_radius, 'left', 'Tablet', 'px' ) );
		}

		if ( isset( $attr['firstPadding'] ) ) {
			$first_padding = $attr['firstPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'padding-top', $css->render_color( $first_padding['Tablet']['top'] . $first_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $first_padding['Tablet']['right'] . $first_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $first_padding['Tablet']['bottom'] . $first_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $first_padding['Tablet']['left'] . $first_padding['unit'] ) );
		}

		if ( isset( $attr['firstMargin'] ) ) {
			$first_margin = $attr['firstMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'margin-top', $css->render_color( $first_margin['Tablet']['top'] . $first_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $first_margin['Tablet']['right'] . $first_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $first_margin['Tablet']['bottom'] . $first_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $first_margin['Tablet']['left'] . $first_margin['unit'] ) );
		}

		// Second Style FontSizeTablet.
		if ( isset( $attr['secondStyles'] ) ) {
			if ( isset( $attr['secondStyles'][0]['secondSize'] ) && isset( $attr['secondStyles'][0]['secondSizeUnit'] ) ) {
				$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
				$css->add_property( 'font-size', ( $attr['secondStyles'][0]['secondSize'] . $attr['secondStyles'][0]['secondSizeUnit'] ) );
			}
		}

		if ( isset( $attr['secondTypography'] ) ) {
			$second_typography = $attr['secondTypography'];
			$font_size         = $second_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $second_typography['fontFamily'] ) ? $second_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $second_typography['fontWeight'] ) ? $second_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Tablet', $font_size['unit'] ) );
		}

		if ( isset( $attr['secondBorder'] ) ) {
			$second_border        = $attr['secondBorder'];
			$second_border_width  = $attr['secondBorder']['borderWidth'];
			$second_border_radius = $attr['secondBorder']['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $second_border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $second_border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $second_border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $second_border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $second_border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $second_border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $second_border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $second_border_radius, 'left', 'Tablet', 'px' ) );
		}

		if ( isset( $attr['secondPadding'] ) ) {
			$second_padding = $attr['secondPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'padding-top', $css->render_color( $second_padding['Tablet']['top'] . $second_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $second_padding['Tablet']['right'] . $second_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $second_padding['Tablet']['bottom'] . $second_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $second_padding['Tablet']['left'] . $second_padding['unit'] ) );
		}

		if ( isset( $attr['secondMargin'] ) ) {
			$second_margin = $attr['secondMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'margin-top', $css->render_color( $second_margin['Tablet']['top'] . $second_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $second_margin['Tablet']['right'] . $second_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $second_margin['Tablet']['bottom'] . $second_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $second_margin['Tablet']['left'] . $second_margin['unit'] ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $attr['containerBorder']['borderWidth'];
			$container_border_radius = $attr['containerBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $container_border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $container_border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $container_border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $container_border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $container_border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $container_border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $container_border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $container_border_radius, 'left', 'Mobile', 'px' ) );
		}

		// First Style FontSizeMobile.
		if ( isset( $attr['firstStyles'] ) ) {
			if ( isset( $attr['firstStyles'][0]['firstSize'] ) || isset( $attr['firstStyles'][0]['firstSizeUnit'] ) ) {
				$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
				$css->add_property( 'font-size', ( $attr['firstStyles'][0]['firstSize'] . $attr['firstStyles'][0]['firstSizeUnit'] ) );
			}
		}

		if ( isset( $attr['firstTypography'] ) ) {
			$first_typography = $attr['firstTypography'];
			$font_size        = $first_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $first_typography['fontFamily'] ) ? $first_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $first_typography['fontWeight'] ) ? $first_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Mobile', $font_size['unit'] ) );
		}

		if ( isset( $attr['firstBorder'] ) ) {
			$first_border        = $attr['firstBorder'];
			$first_border_width  = $attr['firstBorder']['borderWidth'];
			$first_border_radius = $attr['firstBorder']['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $first_border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $first_border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $first_border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $first_border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $first_border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $first_border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $first_border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $first_border_radius, 'left', 'Mobile', 'px' ) );
		}

		if ( isset( $attr['firstPadding'] ) ) {
			$first_padding = $attr['firstPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'padding-top', $css->render_color( $first_padding['Mobile']['top'] . $first_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $first_padding['Mobile']['right'] . $first_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $first_padding['Mobile']['bottom'] . $first_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $first_padding['Mobile']['left'] . $first_padding['unit'] ) );
		}

		if ( isset( $attr['firstMargin'] ) ) {
			$first_margin = $attr['firstMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'margin-top', $css->render_color( $first_margin['Mobile']['top'] . $first_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $first_margin['Mobile']['right'] . $first_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $first_margin['Mobile']['bottom'] . $first_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $first_margin['Mobile']['left'] . $first_margin['unit'] ) );
		}

		// Second Style FontSizeMobile.
		if ( isset( $attr['secondStyles'] ) ) {
			if ( isset( $attr['secondStyles'][0]['secondSize'] ) && isset( $attr['secondStyles'][0]['secondSizeUnit'] ) ) {
				$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
				$css->add_property( 'font-size', ( $attr['secondStyles'][0]['secondSize'] . $attr['secondStyles'][0]['secondSizeUnit'] ) );
			}
		}

		if ( isset( $attr['secondTypography'] ) ) {
			$second_typography = $attr['secondTypography'];
			$font_size         = $second_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $second_typography['fontFamily'] ) ? $second_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $second_typography['fontWeight'] ) ? $second_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Mobile', $font_size['unit'] ) );
		}

		if ( isset( $attr['secondBorder'] ) ) {
			$second_border        = $attr['secondBorder'];
			$second_border_width  = $attr['secondBorder']['borderWidth'];
			$second_border_radius = $attr['secondBorder']['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $second_border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $second_border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $second_border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $second_border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $second_border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $second_border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $second_border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $second_border_radius, 'left', 'Mobile', 'px' ) );
		}

		if ( isset( $attr['secondPadding'] ) ) {
			$second_padding = $attr['secondPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'padding-top', $css->render_color( $second_padding['Mobile']['top'] . $second_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $second_padding['Mobile']['right'] . $second_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $second_padding['Mobile']['bottom'] . $second_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $second_padding['Mobile']['left'] . $second_padding['unit'] ) );
		}

		if ( isset( $attr['secondMargin'] ) ) {
			$second_margin = $attr['secondMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'margin-top', $css->render_color( $second_margin['Mobile']['top'] . $second_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $second_margin['Mobile']['right'] . $second_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $second_margin['Mobile']['bottom'] . $second_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $second_margin['Mobile']['left'] . $second_margin['unit'] ) );
		}

		$css->stop_media_query();
		return $css->css_output();
	}

	/**
	 * Get icon Block Content & Style
	 *
	 * @access public
	 *
	 * @param string $attributes option attribute.
	 * @param string $content option for content of block.
	 */
	public function get_icon_css( $attributes, $content ) {

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = $attributes['blockId'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'icon', $unique_id ) ) {

			$css = $this->get_icon_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'icon', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		}
		return $content;

	}

	/**
	 * Get Icon Block CSS
	 *
	 * Return Frontend CSS for Icon Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For block ID.
	 */
	public function get_icon_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		// Container Styles
		if ( isset( $attr['wrapMargin'] ) ) {
			$wrap_margin = $attr['wrapMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Desktop'], $wrap_margin['unit'] ) );
		}
		if ( isset( $attr['wrapPadding'] ) ) {
			$wrap_padding = $attr['wrapPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'padding', $css->render_spacing( $wrap_padding['Desktop'], $wrap_padding['unit'] ) );
		}
		if ( isset( $attr['containerBorder'] ) ) {
			$container_border_width = $attr['containerBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Desktop'], 'px' ) );
		}
		if ( isset( $attr['containerBorder'] ) ) {
			$container_border_radius = $attr['containerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Desktop'], 'px' ) );
		}
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'text-align', ( $attr['iconAlign']['Desktop'] . '!important' ) );
		}

		// icon Styles
		if ( isset( $attr['iconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'font-size', ( ( isset( $attr['iconSize']['Desktop'] ) ? $attr['iconSize']['Desktop'] : '50' ) . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['iconMargin'] ) ) {
			$icon_margin = $attr['iconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'margin', $css->render_spacing( $icon_margin['Desktop'], $icon_margin['unit'] ) );
		}
		if ( isset( $attr['iconPadding'] ) ) {
			$icon_padding = $attr['iconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'padding', $css->render_spacing( $icon_padding['Desktop'], $icon_padding['unit'] ) );
		}
		if ( isset( $attr['iconBorder'] ) ) {
			$icon_border_width = $attr['iconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Desktop'], 'px' ) );
		}
		if ( isset( $attr['iconBorder'] ) ) {
			$icon_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Container Styles
		if ( isset( $attr['wrapMargin'] ) ) {
			$wrap_margin = $attr['wrapMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Tablet'], $wrap_margin['unit'] ) );
		}
		if ( isset( $attr['wrapPadding'] ) ) {
			$wrap_padding = $attr['wrapPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'padding', $css->render_spacing( $wrap_padding['Tablet'], $wrap_padding['unit'] ) );
		}
		if ( isset( $attr['containerBorder'] ) ) {
			$container_border_width = $attr['containerBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Tablet'], 'px' ) );
		}
		if ( isset( $attr['containerBorder'] ) ) {
			$container_border_radius = $attr['containerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Tablet'], 'px' ) );
		}
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'text-align', ( $attr['iconAlign']['Tablet'] . '!important' ) );
		}

		// icon Styles
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'font-size', ( $attr['iconSize']['Tablet'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['iconMargin'] ) ) {
			$wrap_margin = $attr['iconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Tablet'], $wrap_margin['unit'] ) );
		}
		if ( isset( $attr['iconPadding'] ) ) {
			$icon_padding = $attr['iconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'padding', $css->render_spacing( $icon_padding['Tablet'], $icon_padding['unit'] ) );
		}
		if ( isset( $attr['iconBorder'] ) ) {
			$icon_border_width = $attr['iconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Tablet'], 'px' ) );
		}
		if ( isset( $attr['iconBorder'] ) ) {
			$icon_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Container Styles
		if ( isset( $attr['wrapMargin'] ) ) {
			$wrap_margin = $attr['wrapMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Mobile'], $wrap_margin['unit'] ) );
		}
		if ( isset( $attr['wrapPadding'] ) ) {
			$wrap_padding = $attr['wrapPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'padding', $css->render_spacing( $wrap_padding['Mobile'], $wrap_padding['unit'] ) );
		}
		if ( isset( $attr['containerBorder'] ) ) {
			$container_border_width = $attr['containerBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Mobile'], 'px' ) );
		}
		if ( isset( $attr['containerBorder'] ) ) {
			$container_border_radius = $attr['containerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Mobile'], 'px' ) );
		}
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'text-align', ( $attr['iconAlign']['Mobile'] . '!important' ) );
		}

		// icon Styles
		if ( isset( $attr['iconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'font-size', ( $attr['iconSize']['Mobile'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['iconMargin'] ) ) {
			$icon_margin = $attr['iconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'margin', $css->render_spacing( $icon_margin['Mobile'], $icon_margin['unit'] ) );
		}
		if ( isset( $attr['iconPadding'] ) ) {
			$icon_padding = $attr['iconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'padding', $css->render_spacing( $icon_padding['Mobile'], $icon_padding['unit'] ) );
		}
		if ( isset( $attr['iconBorder'] ) ) {
			$icon_border_width = $attr['iconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Mobile'], 'px' ) );
		}
		if ( isset( $attr['iconBorder'] ) ) {
			$icon_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Mobile'], 'px' ) );
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

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = $attributes['blockId'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'iconBox', $unique_id ) ) {

			$css = $this->get_iconbox_css_style( $attributes, $unique_id );

			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'iconBox', $unique_id ) ) {
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

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		// icon style
		if ( isset( $attr['iconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> i' );
			$css->add_property( 'font-size', ( $attr['iconSize']['Desktop'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['iconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> img' );
			$css->add_property( 'width', ( $attr['iconSize']['Desktop'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['iconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> img' );
			$css->add_property( 'height', ( $attr['iconSize']['Desktop'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}

		// title style
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' . '> .premium-icon-box__title' );
			$css->render_typography( $attr['titleTypography'], 'Desktop' );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Desktop'], 'px' ) );
		}

		// desc style
		if ( isset( $attr['descTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' . '> .premium-icon-box__desc' );
			$css->render_typography( $attr['descTypography'], 'Desktop' );
		}

		if ( isset( $attr['descMargin'] ) ) {
			$desc_margin = $attr['descMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $desc_margin['Desktop'], 'px' ) );
		}

		// btn style
		if ( isset( $attr['btnTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
			$css->render_typography( $attr['btnTypography'], 'Desktop' );
		}

		if ( isset( $attr['btnMargin'] ) ) {
			$btn_margin = $attr['btnMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $btn_margin['Desktop'], 'px' ) );
		}

		if ( isset( $attr['btnBorder'] ) ) {
			$btn_border        = $attr['btnBorder'];
			$btn_border_width  = $attr['btnBorder']['borderWidth'];
			$btn_border_radius = $attr['btnBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
			$css->add_property( 'border-width', $css->render_spacing( $btn_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $btn_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['btnPadding'] ) ) {
			$btn_padding = $attr['btnPadding'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
			$css->add_property( 'padding', $css->render_spacing( $btn_padding['Desktop'], $btn_padding['unit'] ) );
		}

		// container style
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'text-align', ( $attr['align']['Desktop'] . '!important' ) );
		}

		if ( isset( $attr['containerMargin'] ) ) {
			$container_margin = $attr['containerMargin'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'margin', $css->render_spacing( $container_margin['Desktop'], $container_margin['unit'] ) );
		}

		if ( isset( $attr['containerPadding'] ) ) {
			$container_padding = $attr['containerPadding'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'padding', $css->render_spacing( $container_padding['Desktop'], $container_padding['unit'] ) );
		}

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $attr['containerBorder']['borderWidth'];
			$container_border_radius = $attr['containerBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// icon style
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> i' );
			$css->add_property( 'font-size', ( $attr['iconSize']['Tablet'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> img' );
			$css->add_property( 'width', ( $attr['iconSize']['Tablet'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> img' );
			$css->add_property( 'height', ( $attr['iconSize']['Tablet'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}

		// title style
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' . '> .premium-icon-box__title' );
			$css->render_typography( $attr['titleTypography'], 'Tablet' );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Tablet'], 'px' ) );
		}

		// desc style
		if ( isset( $attr['descTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' . '> .premium-icon-box__desc' );
			$css->render_typography( $attr['descTypography'], 'Tablet' );
		}

		if ( isset( $attr['descMargin'] ) ) {
			$desc_margin = $attr['descMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $desc_margin['Tablet'], 'px' ) );
		}

		// btn style
		if ( isset( $attr['btnTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
			$css->render_typography( $attr['btnTypography'], 'Tablet' );
		}

		if ( isset( $attr['btnMargin'] ) ) {
			$btn_margin = $attr['btnMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $btn_margin['Tablet'], 'px' ) );
		}

		if ( isset( $attr['btnBorder'] ) ) {
			$btn_border        = $attr['btnBorder'];
			$btn_border_width  = $attr['btnBorder']['borderWidth'];
			$btn_border_radius = $attr['btnBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
			$css->add_property( 'border-width', $css->render_spacing( $btn_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $btn_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['btnPadding'] ) ) {
			$btn_padding = $attr['btnPadding'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
			$css->add_property( 'padding', $css->render_spacing( $btn_padding['Tablet'], $btn_padding['unit'] ) );
		}

		// container style
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'text-align', ( $attr['align']['Tablet'] . '!important' ) );
		}

		if ( isset( $attr['containerMargin'] ) ) {
			$container_margin = $attr['containerMargin'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'margin', $css->render_spacing( $container_margin['Tablet'], $container_margin['unit'] ) );
		}

		if ( isset( $attr['containerPadding'] ) ) {
			$container_padding = $attr['containerPadding'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'padding', $css->render_spacing( $container_padding['Tablet'], $container_padding['unit'] ) );
		}

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $attr['containerBorder']['borderWidth'];
			$container_border_radius = $attr['containerBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// icon style
		if ( isset( $attr['iconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> i' );
			$css->add_property( 'font-size', ( $attr['iconSize']['Mobile'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['iconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> img' );
			$css->add_property( 'width', ( $attr['iconSize']['Mobile'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['iconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> img' );
			$css->add_property( 'height', ( $attr['iconSize']['Mobile'] . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}

		// title style
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' . '> .premium-icon-box__title' );
			$css->render_typography( $attr['titleTypography'], 'Mobile' );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__title_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Mobile'], 'px' ) );
		}

		// desc style
		if ( isset( $attr['descTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' . '> .premium-icon-box__desc' );
			$css->render_typography( $attr['descTypography'], 'Mobile' );
		}

		if ( isset( $attr['descMargin'] ) ) {
			$desc_margin = $attr['descMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__desc_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $desc_margin['Mobile'], 'px' ) );
		}

		// btn style
		if ( isset( $attr['btnTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
			$css->render_typography( $attr['btnTypography'], 'Mobile' );
		}

		if ( isset( $attr['btnMargin'] ) ) {
			$btn_margin = $attr['btnMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $btn_margin['Mobile'], 'px' ) );
		}

		if ( isset( $attr['btnBorder'] ) ) {
			$btn_border        = $attr['btnBorder'];
			$btn_border_width  = $attr['btnBorder']['borderWidth'];
			$btn_border_radius = $attr['btnBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
			$css->add_property( 'border-width', $css->render_spacing( $btn_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $btn_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['btnPadding'] ) ) {
			$btn_padding = $attr['btnPadding'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__content_wrap' . '> .premium-icon-box__btn_wrap' . '> .premium-icon-box__btn' );
			$css->add_property( 'padding', $css->render_spacing( $btn_padding['Mobile'], $btn_padding['unit'] ) );
		}

		// container style
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'text-align', ( $attr['align']['Mobile'] . '!important' ) );
		}

		if ( isset( $attr['containerMargin'] ) ) {
			$container_margin = $attr['containerMargin'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'margin', $css->render_spacing( $container_margin['Mobile'], $container_margin['unit'] ) );
		}

		if ( isset( $attr['containerPadding'] ) ) {
			$container_padding = $attr['containerPadding'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'padding', $css->render_spacing( $container_padding['Mobile'], $container_padding['unit'] ) );
		}

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $attr['containerBorder']['borderWidth'];
			$container_border_radius = $attr['containerBorder']['borderRadius'];

			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Mobile'], 'px' ) );
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
			$unique_id = "#premium-pricing-table-{$attributes['block_id']}";
		}

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}

		$style_unique_id = rand( 100, 10000 );

		$style_id = 'pbg-blocks-style' . esc_attr( $style_unique_id );
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

		// Table.
		if ( isset( $attr['tableBorder'] ) ) {
			$table_border        = $attr['tableBorder'];
			$table_border_width  = $attr['tableBorder']['borderWidth'];
			$table_border_radius = $attr['tableBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $table_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $table_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['tablePadding'] ) ) {
			$table_padding = $attr['tablePadding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $table_padding['Desktop'], $table_padding['unit'] ) );
		}

		// Button.
		if ( isset( $attr['buttonBorder'] ) ) {
			$button_border        = $attr['buttonBorder'];
			$button_border_width  = $attr['buttonBorder']['borderWidth'];
			$button_border_radius = $attr['buttonBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'border-width', $css->render_spacing( $button_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $button_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Desktop'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__title_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Desktop'], $title_margin['unit'] ) );
		}

		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__title' );
			$css->render_typography( $title_typography, 'Desktop' );
		}

		if ( isset( $attr['pricePadding'] ) ) {
			$price_padding = $attr['pricePadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__price_wrap' );
			$css->add_property( 'padding', $css->render_spacing( $price_padding['Desktop'], $price_padding['unit'] ) );
		}

		if ( isset( $attr['priceMargin'] ) ) {
			$price_margin = $attr['priceMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__price_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $price_margin['Desktop'], $price_margin['unit'] ) );
		}

		if ( isset( $attr['slashTypography'] ) ) {
			$slash_typography = $attr['slashTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__slash' );
			$css->render_typography( $slash_typography, 'Desktop' );
		}

		if ( isset( $attr['currTypography'] ) ) {
			$current_typography = $attr['currTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__currency' );
			$css->render_typography( $current_typography, 'Desktop' );
		}

		if ( isset( $attr['priceTypography'] ) ) {
			$price_typography = $attr['priceTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__val' );
			$css->render_typography( $price_typography, 'Desktop' );
		}

		if ( isset( $attr['dividerTypography'] ) ) {
			$divider_typography = $attr['dividerTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__divider' );
			$css->render_typography( $divider_typography, 'Desktop' );
		}

		if ( isset( $attr['durationTypography'] ) ) {
			$duration_typography = $attr['durationTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__dur' );
			$css->render_typography( $duration_typography, 'Desktop' );
		}

		if ( isset( $attr['slashVAlign'] ) ) {
			$slash_align = $css->get_responsive_css( $attr['slashVAlign'], 'Desktop' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__slash' );
			$css->add_property( 'align-self', $slash_align );
		}

		if ( isset( $attr['currVAlign'] ) ) {
			$curr_align = $css->get_responsive_css( $attr['currVAlign'], 'Desktop' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__currency' );
			$css->add_property( 'align-self', $curr_align );
		}

		if ( isset( $attr['valVAlign'] ) ) {
			$val_align = $css->get_responsive_css( $attr['valVAlign'], 'Desktop' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__val' );
			$css->add_property( 'align-self', $val_align );
		}

		if ( isset( $attr['divVAlign'] ) ) {
			$div_align = $css->get_responsive_css( $attr['divVAlign'], 'Desktop' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__divider' );
			$css->add_property( 'align-self', $div_align );
		}

		if ( isset( $attr['durVAlign'] ) ) {
			$dur_align = $css->get_responsive_css( $attr['durVAlign'], 'Desktop' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__dur' );
			$css->add_property( 'align-self', $dur_align );
		}

		if ( isset( $attr['featuresListPadding'] ) ) {
			$list_padding = $attr['featuresListPadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__list_wrap .premium-pricing-table__list' );
			$css->add_property( 'padding', $css->render_spacing( $list_padding['Desktop'], $list_padding['unit'] ) );
		}

		if ( isset( $attr['featuresListMargin'] ) ) {
			$list_margin = $attr['featuresListMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__list_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $list_margin['Desktop'], $list_margin['unit'] ) );
		}

		if ( isset( $attr['listTypography'] ) ) {
			$list_typography = $attr['listTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__list' );
			$css->render_typography( $list_typography, 'Desktop' );
		}

		if ( isset( $attr['descriptionPadding'] ) ) {
			$description_padding = $attr['descriptionPadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__desc' );
			$css->add_property( 'padding', $css->render_spacing( $description_padding['Desktop'], $description_padding['unit'] ) );
		}

		if ( isset( $attr['descriptionMargin'] ) ) {
			$description_margin = $attr['descriptionMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__desc' );
			$css->add_property( 'margin', $css->render_spacing( $description_margin['Desktop'], $description_margin['unit'] ) );
		}

		if ( isset( $attr['descTypography'] ) ) {
			$desc_typography = $attr['descTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__desc' );
			$css->render_typography( $desc_typography, 'Desktop' );
		}

		if ( isset( $attr['buttonPadding'] ) ) {
			$button_padding = $attr['buttonPadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'padding', $css->render_spacing( $button_padding['Desktop'], $button_padding['unit'] ) );
		}

		if ( isset( $attr['buttonMargin'] ) ) {
			$button_margin = $attr['buttonMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'margin', $css->render_spacing( $button_margin['Desktop'], $button_margin['unit'] ) );
		}

		if ( isset( $attr['buttonTypography'] ) ) {
			$button_typography = $attr['buttonTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->render_typography( $button_typography, 'Desktop' );
		}

		if ( isset( $attr['badgeTypography'] ) ) {
			$badge_typography = $attr['badgeTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__badge span' );
			$css->render_typography( $badge_typography, 'Desktop' );
		}

		// Feature Align.
		if ( isset( $attr['featureAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['featureAlign'], 'Desktop' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__list' );
			$css->add_property( 'text-align', $align );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Table.
		if ( isset( $attr['tableBorder'] ) ) {
			$table_border        = $attr['tableBorder'];
			$table_border_width  = $attr['tableBorder']['borderWidth'];
			$table_border_radius = $attr['tableBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $table_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $table_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['tablePadding'] ) ) {
			$table_padding = $attr['tablePadding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $table_padding['Tablet'], $table_padding['unit'] ) );
		}

		// Button.
		if ( isset( $attr['buttonBorder'] ) ) {
			$button_border        = $attr['buttonBorder'];
			$button_border_width  = $attr['buttonBorder']['borderWidth'];
			$button_border_radius = $attr['buttonBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'border-width', $css->render_spacing( $button_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $button_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Tablet'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__title_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Tablet'], $title_margin['unit'] ) );
		}

		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__title' );
			$css->render_typography( $title_typography, 'Tablet' );
		}

		if ( isset( $attr['pricePadding'] ) ) {
			$price_padding = $attr['pricePadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__price_wrap' );
			$css->add_property( 'padding', $css->render_spacing( $price_padding['Tablet'], $price_padding['unit'] ) );
		}

		if ( isset( $attr['priceMargin'] ) ) {
			$price_margin = $attr['priceMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__price_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $price_margin['Tablet'], $price_margin['unit'] ) );
		}

		if ( isset( $attr['slashTypography'] ) ) {
			$slash_typography = $attr['slashTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__slash' );
			$css->render_typography( $slash_typography, 'Tablet' );
		}

		if ( isset( $attr['currTypography'] ) ) {
			$current_typography = $attr['currTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__currency' );
			$css->render_typography( $current_typography, 'Tablet' );
		}

		if ( isset( $attr['priceTypography'] ) ) {
			$price_typography = $attr['priceTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__val' );
			$css->render_typography( $price_typography, 'Tablet' );
		}

		if ( isset( $attr['dividerTypography'] ) ) {
			$divider_typography = $attr['dividerTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__divider' );
			$css->render_typography( $divider_typography, 'Tablet' );
		}

		if ( isset( $attr['durationTypography'] ) ) {
			$duration_typography = $attr['durationTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__dur' );
			$css->render_typography( $duration_typography, 'Tablet' );
		}

		if ( isset( $attr['slashVAlign'] ) ) {
			$slash_align = $css->get_responsive_css( $attr['slashVAlign'], 'Tablet' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__slash' );
			$css->add_property( 'align-self', $slash_align );
		}

		if ( isset( $attr['currVAlign'] ) ) {
			$curr_align = $css->get_responsive_css( $attr['currVAlign'], 'Tablet' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__currency' );
			$css->add_property( 'align-self', $curr_align );
		}

		if ( isset( $attr['valVAlign'] ) ) {
			$val_align = $css->get_responsive_css( $attr['valVAlign'], 'Tablet' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__val' );
			$css->add_property( 'align-self', $val_align );
		}

		if ( isset( $attr['divVAlign'] ) ) {
			$div_align = $css->get_responsive_css( $attr['divVAlign'], 'Tablet' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__divider' );
			$css->add_property( 'align-self', $div_align );
		}

		if ( isset( $attr['durVAlign'] ) ) {
			$dur_align = $css->get_responsive_css( $attr['durVAlign'], 'Tablet' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__dur' );
			$css->add_property( 'align-self', $dur_align );
		}

		if ( isset( $attr['featuresListPadding'] ) ) {
			$list_padding = $attr['featuresListPadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__list_wrap .premium-pricing-table__list' );
			$css->add_property( 'padding', $css->render_spacing( $list_padding['Tablet'], $list_padding['unit'] ) );
		}

		if ( isset( $attr['featuresListMargin'] ) ) {
			$list_margin = $attr['featuresListMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__list_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $list_margin['Tablet'], $list_margin['unit'] ) );
		}

		if ( isset( $attr['listTypography'] ) ) {
			$list_typography = $attr['listTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__list' );
			$css->render_typography( $list_typography, 'Tablet' );
		}

		if ( isset( $attr['descriptionPadding'] ) ) {
			$description_padding = $attr['descriptionPadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__desc' );
			$css->add_property( 'padding', $css->render_spacing( $description_padding['Tablet'], $description_padding['unit'] ) );
		}

		if ( isset( $attr['descriptionMargin'] ) ) {
			$description_margin = $attr['descriptionMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__desc' );
			$css->add_property( 'margin', $css->render_spacing( $description_margin['Tablet'], $description_margin['unit'] ) );
		}

		if ( isset( $attr['descTypography'] ) ) {
			$desc_typography = $attr['descTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__desc' );
			$css->render_typography( $desc_typography, 'Tablet' );
		}

		if ( isset( $attr['buttonPadding'] ) ) {
			$button_padding = $attr['buttonPadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'padding', $css->render_spacing( $button_padding['Tablet'], $button_padding['unit'] ) );
		}

		if ( isset( $attr['buttonMargin'] ) ) {
			$button_margin = $attr['buttonMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'margin', $css->render_spacing( $button_margin['Tablet'], $button_margin['unit'] ) );
		}

		if ( isset( $attr['buttonTypography'] ) ) {
			$button_typography = $attr['buttonTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->render_typography( $button_typography, 'Tablet' );
		}

		if ( isset( $attr['badgeTypography'] ) ) {
			$badge_typography = $attr['badgeTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__badge span' );
			$css->render_typography( $badge_typography, 'Tablet' );
		}

		// Feature Align.
		if ( isset( $attr['featureAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['featureAlign'], 'Tablet' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__list' );
			$css->add_property( 'text-align', $align );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Table.
		if ( isset( $attr['tableBorder'] ) ) {
			$table_border        = $attr['tableBorder'];
			$table_border_width  = $attr['tableBorder']['borderWidth'];
			$table_border_radius = $attr['tableBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $table_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $table_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['tablePadding'] ) ) {
			$table_padding = $attr['tablePadding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $table_padding['Mobile'], $table_padding['unit'] ) );
		}

		// Button.
		if ( isset( $attr['buttonBorder'] ) ) {
			$button_border        = $attr['buttonBorder'];
			$button_border_width  = $attr['buttonBorder']['borderWidth'];
			$button_border_radius = $attr['buttonBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'border-width', $css->render_spacing( $button_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $button_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Mobile'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__title_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Mobile'], $title_margin['unit'] ) );
		}

		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__title' );
			$css->render_typography( $title_typography, 'Mobile' );
		}

		if ( isset( $attr['pricePadding'] ) ) {
			$price_padding = $attr['pricePadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__price_wrap' );
			$css->add_property( 'padding', $css->render_spacing( $price_padding['Mobile'], $price_padding['unit'] ) );
		}

		if ( isset( $attr['priceMargin'] ) ) {
			$price_margin = $attr['priceMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__price_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $price_margin['Mobile'], $price_margin['unit'] ) );
		}

		if ( isset( $attr['slashTypography'] ) ) {
			$slash_typography = $attr['slashTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__slash' );
			$css->render_typography( $slash_typography, 'Mobile' );
		}

		if ( isset( $attr['currTypography'] ) ) {
			$current_typography = $attr['currTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__currency' );
			$css->render_typography( $current_typography, 'Mobile' );
		}

		if ( isset( $attr['priceTypography'] ) ) {
			$price_typography = $attr['priceTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__val' );
			$css->render_typography( $price_typography, 'Mobile' );
		}

		if ( isset( $attr['dividerTypography'] ) ) {
			$divider_typography = $attr['dividerTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__divider' );
			$css->render_typography( $divider_typography, 'Mobile' );
		}

		if ( isset( $attr['durationTypography'] ) ) {
			$duration_typography = $attr['durationTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__dur' );
			$css->render_typography( $duration_typography, 'Mobile' );
		}

		if ( isset( $attr['slashVAlign'] ) ) {
			$slash_align = $css->get_responsive_css( $attr['slashVAlign'], 'Mobile' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__slash' );
			$css->add_property( 'align-self', $slash_align );
		}

		if ( isset( $attr['currVAlign'] ) ) {
			$curr_align = $css->get_responsive_css( $attr['currVAlign'], 'Mobile' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__currency' );
			$css->add_property( 'align-self', $curr_align );
		}

		if ( isset( $attr['valVAlign'] ) ) {
			$val_align = $css->get_responsive_css( $attr['valVAlign'], 'Mobile' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__val' );
			$css->add_property( 'align-self', $val_align );
		}

		if ( isset( $attr['divVAlign'] ) ) {
			$div_align = $css->get_responsive_css( $attr['divVAlign'], 'Mobile' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__divider' );
			$css->add_property( 'align-self', $div_align );
		}

		if ( isset( $attr['durVAlign'] ) ) {
			$dur_align = $css->get_responsive_css( $attr['durVAlign'], 'Mobile' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__dur' );
			$css->add_property( 'align-self', $dur_align );
		}

		if ( isset( $attr['featuresListPadding'] ) ) {
			$list_padding = $attr['featuresListPadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__list_wrap .premium-pricing-table__list' );
			$css->add_property( 'padding', $css->render_spacing( $list_padding['Mobile'], $list_padding['unit'] ) );
		}

		if ( isset( $attr['featuresListMargin'] ) ) {
			$list_margin = $attr['featuresListMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__list_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $list_margin['Mobile'], $list_margin['unit'] ) );
		}

		if ( isset( $attr['listTypography'] ) ) {
			$list_typography = $attr['listTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__list' );
			$css->render_typography( $list_typography, 'Mobile' );
		}

		if ( isset( $attr['descriptionPadding'] ) ) {
			$description_padding = $attr['descriptionPadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__desc' );
			$css->add_property( 'padding', $css->render_spacing( $description_padding['Mobile'], $description_padding['unit'] ) );
		}

		if ( isset( $attr['descriptionMargin'] ) ) {
			$description_margin = $attr['descriptionMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__desc' );
			$css->add_property( 'margin', $css->render_spacing( $description_margin['Mobile'], $description_margin['unit'] ) );
		}

		if ( isset( $attr['descTypography'] ) ) {
			$desc_typography = $attr['descTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__desc' );
			$css->render_typography( $desc_typography, 'Mobile' );
		}

		if ( isset( $attr['buttonPadding'] ) ) {
			$button_padding = $attr['buttonPadding'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'padding', $css->render_spacing( $button_padding['Mobile'], $button_padding['unit'] ) );
		}

		if ( isset( $attr['buttonMargin'] ) ) {
			$button_margin = $attr['buttonMargin'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'margin', $css->render_spacing( $button_margin['Mobile'], $button_margin['unit'] ) );
		}

		if ( isset( $attr['buttonTypography'] ) ) {
			$button_typography = $attr['buttonTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->render_typography( $button_typography, 'Mobile' );
		}

		if ( isset( $attr['badgeTypography'] ) ) {
			$badge_typography = $attr['badgeTypography'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__badge span' );
			$css->render_typography( $badge_typography, 'Mobile' );
		}

		// Feature Align.
		if ( isset( $attr['featureAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['featureAlign'], 'Mobile' );

			$css->set_selector( $unique_id . ' .premium-pricing-table__list' );
			$css->add_property( 'text-align', $align );
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
			$unique_id = "#premium-testimonial-{$attributes['block_id']}";
		}

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}

		$style_unique_id = rand( 100, 10000 );

		$style_id = 'pbg-blocks-style' . esc_attr( $style_unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'testimonial', $unique_id ) ) {
			$css = $this->get_testimonial_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'testimonial', $unique_id ) ) {
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

		// Align
		if ( isset( $attr['align'] ) ) {

			$css->set_selector( $unique_id . ' .premium-testimonial__content' );
			$css->add_property( 'text-align', $css->render_color( $attr['align']['Desktop'] ) );
		}

		// Author Style FontSize.
		if ( isset( $attr['authorTypography'] ) ) {
			$author_typography = $attr['authorTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author' );
			$css->render_typography( $author_typography, 'Desktop' );
		}

		if ( isset( $attr['imgBorder'] ) ) {
			$image_border        = $attr['imgBorder'];
			$image_border_width  = $attr['imgBorder']['borderWidth'];
			$image_border_radius = $attr['imgBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-testimonial__img_wrap .premium-testimonial__img' );
			$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Desktop'], 'px' ) );
		}

		// Company Style FontSize.
		if ( isset( $attr['companyTypography'] ) ) {
			$company_typography = $attr['companyTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . ' > .premium-testimonial__link_wrap' . '> .premium-testimonial__author_comp' );
			$css->render_typography( $company_typography, 'Desktop' );
		}

		// Body Style FontSize.
		if ( isset( $attr['bodyTypography'] ) ) {
			$body_typography = $attr['bodyTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
			$css->render_typography( $body_typography, 'Desktop' );
		}

		if ( isset( $attr['bodyMargin'] ) ) {
			$margin = $attr['bodyMargin'];
			$css->set_selector( $unique_id . ' > .premium-testimonial__container  > .premium-testimonial__content > .premium-testimonial__text' );
			$css->add_property( 'margin', $css->render_spacing( $margin['Desktop'], $margin['unit'] ) );
		}

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Align
		if ( isset( $attr['align'] ) ) {

			$css->set_selector( $unique_id . ' .premium-testimonial__content' );
			$css->add_property( 'text-align', $css->render_color( $attr['align']['Tablet'] ) );
		}

		// Author Style FontSize.
		if ( isset( $attr['authorTypography'] ) ) {
			$author_typography = $attr['authorTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author' );
			$css->render_typography( $author_typography, 'Tablet' );
		}

		if ( isset( $attr['imgBorder'] ) ) {
			$image_border        = $attr['imgBorder'];
			$image_border_width  = $attr['imgBorder']['borderWidth'];
			$image_border_radius = $attr['imgBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-testimonial__img_wrap .premium-testimonial__img' );
			$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Tablet'], 'px' ) );
		}

		// Company Style FontSize.
		if ( isset( $attr['companyTypography'] ) ) {
			$company_typography = $attr['companyTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . ' > .premium-testimonial__link_wrap' . '> .premium-testimonial__author_comp' );
			$css->render_typography( $company_typography, 'Tablet' );
		}

		// Body Style FontSize.
		if ( isset( $attr['bodyTypography'] ) ) {
			$body_typography = $attr['bodyTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
			$css->render_typography( $body_typography, 'Tablet' );
		}

		if ( isset( $attr['bodyMargin'] ) ) {
			$margin = $attr['bodyMargin'];
			$css->set_selector( $unique_id . ' > .premium-testimonial__container  > .premium-testimonial__content > .premium-testimonial__text' );
			$css->add_property( 'margin', $css->render_spacing( $margin['Tablet'], $margin['unit'] ) );
		}

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Align
		if ( isset( $attr['align'] ) ) {

			$css->set_selector( $unique_id . ' .premium-testimonial__content' );
			$css->add_property( 'text-align', $css->render_color( $attr['align']['Mobile'] ) );
		}

		// Author Style FontSize.
		if ( isset( $attr['authorTypography'] ) ) {
			$author_typography = $attr['authorTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author' );
			$css->render_typography( $author_typography, 'Mobile' );
		}

		if ( isset( $attr['imgBorder'] ) ) {
			$image_border        = $attr['imgBorder'];
			$image_border_width  = $attr['imgBorder']['borderWidth'];
			$image_border_radius = $attr['imgBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-testimonial__img_wrap .premium-testimonial__img' );
			$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Mobile'], 'px' ) );
		}

		// Company Style FontSize.
		if ( isset( $attr['companyTypography'] ) ) {
			$company_typography = $attr['companyTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . ' > .premium-testimonial__link_wrap' . '> .premium-testimonial__author_comp' );
			$css->render_typography( $company_typography, 'Mobile' );
		}

		// Body Style FontSize.
		if ( isset( $attr['bodyTypography'] ) ) {
			$body_typography = $attr['bodyTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
			$css->render_typography( $body_typography, 'Mobile' );
		}

		if ( isset( $attr['bodyMargin'] ) ) {
			$margin = $attr['bodyMargin'];
			$css->set_selector( $unique_id . ' > .premium-testimonial__container  > .premium-testimonial__content > .premium-testimonial__text' );
			$css->add_property( 'margin', $css->render_spacing( $margin['Mobile'], $margin['unit'] ) );
		}

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
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

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = $attributes['blockId'];
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
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'videoBox', $unique_id ) ) {
			$css = $this->get_videobox_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'videoBox', $unique_id ) ) {
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

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		if ( isset( $attr['videoDescTypography']['fontFamily'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['videoDescTypography']['fontFamily'] ) ? $attr['videoDescTypography']['fontFamily'] : '' ),
					'fontVariant' => ( isset( $attr['videoDescTypography']['fontWeight'] ) ? $attr['videoDescTypography']['fontWeight'] : '' ),
				)
			);
		}
		// Container style
		if ( isset( $attr['boxBorder']['borderWidth']['Desktop']['top'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-top-width', ( $attr['boxBorder']['borderWidth']['Desktop']['top'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderWidth']['Desktop']['right'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-right-width', ( $attr['boxBorder']['borderWidth']['Desktop']['right'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderWidth']['Desktop']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-bottom-width', ( $attr['boxBorder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderWidth']['Desktop']['left'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-left-width', ( $attr['boxBorder']['borderWidth']['Desktop']['left'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Desktop']['top'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-top-left-radius', ( $attr['boxBorder']['borderRadius']['Desktop']['top'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Desktop']['right'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-top-right-radius', ( $attr['boxBorder']['borderRadius']['Desktop']['right'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Desktop']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-bottom-right-radius', ( $attr['boxBorder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Desktop']['left'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-bottom-left-radius', ( $attr['boxBorder']['borderRadius']['Desktop']['left'] . 'px' ) );
		}

		// icon Style
		if ( isset( $attr['playBorder']['borderWidth']['Desktop']['top'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-top-width', ( $attr['playBorder']['borderWidth']['Desktop']['top'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderWidth']['Desktop']['right'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-right-width', ( $attr['playBorder']['borderWidth']['Desktop']['right'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderWidth']['Desktop']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-bottom-width', ( $attr['playBorder']['borderWidth']['Desktop']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderWidth']['Desktop']['left'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-left-width', ( $attr['playBorder']['borderWidth']['Desktop']['left'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Desktop']['top'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-top-left-radius', ( $attr['playBorder']['borderRadius']['Desktop']['top'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Desktop']['right'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-top-right-radius', ( $attr['playBorder']['borderRadius']['Desktop']['right'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Desktop']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-bottom-right-radius', ( $attr['playBorder']['borderRadius']['Desktop']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Desktop']['left'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-bottom-left-radius', ( $attr['playBorder']['borderRadius']['Desktop']['left'] . 'px' ) );
		}
		if ( isset( $attr['playPadding']['Desktop']['top'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-top', ( $attr['playPadding']['Desktop']['top'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['playPadding']['Desktop']['right'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-right', ( $attr['playPadding']['Desktop']['right'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['playPadding']['Desktop']['bottom'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-bottom', ( $attr['playPadding']['Desktop']['bottom'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['playPadding']['Desktop']['left'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-left', ( $attr['playPadding']['Desktop']['left'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}

		// Style Description.
		if ( isset( $attr['videoDescTypography']['fontSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->add_property( 'font-size', ( ( isset( $attr['videoDescTypography']['fontSize']['Desktop'] ) ? $attr['videoDescTypography']['fontSize']['Desktop'] : '20' ) . ( isset( $attr['videoDescTypography']['fontSize']['unit'] ) ? $attr['videoDescTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['videoDescTypography']['lineHeight']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->add_property( 'line-height', ( ( isset( $attr['videoDescTypography']['lineHeight']['Desktop'] ) ? $attr['videoDescTypography']['lineHeight']['Desktop'] : '20' ) . ( isset( $attr['videoDescTypography']['lineHeight']['unit'] ) ? $attr['videoDescTypography']['lineHeight']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['videoDescTypography']['letterSpacing']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->add_property( 'letter-spacing', ( ( isset( $attr['videoDescTypography']['letterSpacing']['Desktop'] ) ? $attr['videoDescTypography']['letterSpacing']['Desktop'] : '20' ) . ( isset( $attr['videoDescTypography']['letterSpacing']['unit'] ) ? $attr['videoDescTypography']['letterSpacing']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Desktop']['top'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-top', ( $attr['descPadding']['Desktop']['top'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Desktop']['right'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-right', ( $attr['descPadding']['Desktop']['right'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Desktop']['bottom'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-bottom', ( $attr['descPadding']['Desktop']['bottom'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Desktop']['left'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-left', ( $attr['descPadding']['Desktop']['left'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Container style
		if ( isset( $attr['boxBorder']['borderWidth']['Tablet']['top'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-top-width', ( $attr['boxBorder']['borderWidth']['Tablet']['top'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderWidth']['Tablet']['right'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-right-width', ( $attr['boxBorder']['borderWidth']['Tablet']['right'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderWidth']['Tablet']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-bottom-width', ( $attr['boxBorder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderWidth']['Tablet']['left'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-left-width', ( $attr['boxBorder']['borderWidth']['Tablet']['left'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Tablet']['top'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-top-left-radius', ( $attr['boxBorder']['borderRadius']['Tablet']['top'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Tablet']['right'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-top-right-radius', ( $attr['boxBorder']['borderRadius']['Tablet']['right'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Tablet']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-bottom-right-radius', ( $attr['boxBorder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Tablet']['left'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-bottom-left-radius', ( $attr['boxBorder']['borderRadius']['Tablet']['left'] . 'px' ) );
		}

		// icon Style
		if ( isset( $attr['playBorder']['borderWidth']['Tablet']['top'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-top-width', ( $attr['playBorder']['borderWidth']['Tablet']['top'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderWidth']['Tablet']['right'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-right-width', ( $attr['playBorder']['borderWidth']['Tablet']['right'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderWidth']['Tablet']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-bottom-width', ( $attr['playBorder']['borderWidth']['Tablet']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderWidth']['Tablet']['left'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-left-width', ( $attr['playBorder']['borderWidth']['Tablet']['left'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Tablet']['top'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-top-left-radius', ( $attr['playBorder']['borderRadius']['Tablet']['top'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Tablet']['right'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-top-right-radius', ( $attr['playBorder']['borderRadius']['Tablet']['right'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Tablet']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-bottom-right-radius', ( $attr['playBorder']['borderRadius']['Tablet']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Tablet']['left'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-bottom-left-radius', ( $attr['playBorder']['borderRadius']['Tablet']['left'] . 'px' ) );
		}
		if ( isset( $attr['playPadding']['Tablet']['top'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-top', ( $attr['playPadding']['Tablet']['top'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['playPadding']['Tablet']['right'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-right', ( $attr['playPadding']['Tablet']['right'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['playPadding']['Tablet']['bottom'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-bottom', ( $attr['playPadding']['Tablet']['bottom'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['playPadding']['Tablet']['left'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-left', ( $attr['playPadding']['Tablet']['left'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}

		// Style Description.
		if ( isset( $attr['videoDescTypography']['fontSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->add_property( 'font-size', ( ( isset( $attr['videoDescTypography']['fontSize']['Tablet'] ) ? $attr['videoDescTypography']['fontSize']['Tablet'] : '20' ) . ( isset( $attr['videoDescTypography']['fontSize']['unit'] ) ? $attr['videoDescTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['videoDescTypography']['lineHeight']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->add_property( 'line-height', ( ( isset( $attr['videoDescTypography']['lineHeight']['Tablet'] ) ? $attr['videoDescTypography']['lineHeight']['Tablet'] : '20' ) . ( isset( $attr['videoDescTypography']['lineHeight']['unit'] ) ? $attr['videoDescTypography']['lineHeight']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['videoDescTypography']['letterSpacing']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->add_property( 'letter-spacing', ( ( isset( $attr['videoDescTypography']['letterSpacing']['Tablet'] ) ? $attr['videoDescTypography']['letterSpacing']['Tablet'] : '0' ) . ( isset( $attr['videoDescTypography']['letterSpacing']['unit'] ) ? $attr['videoDescTypography']['letterSpacing']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Tablet']['top'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-top', ( $attr['descPadding']['Tablet']['top'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Tablet']['right'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-right', ( $attr['descPadding']['Tablet']['right'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Tablet']['bottom'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-bottom', ( $attr['descPadding']['Tablet']['bottom'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Tablet']['left'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-left', ( $attr['descPadding']['Tablet']['left'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Container style
		if ( isset( $attr['boxBorder']['borderWidth']['Mobile']['top'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-top-width', ( $attr['boxBorder']['borderWidth']['Mobile']['top'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderWidth']['Mobile']['right'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-right-width', ( $attr['boxBorder']['borderWidth']['Mobile']['right'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderWidth']['Mobile']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-bottom-width', ( $attr['boxBorder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderWidth']['Mobile']['left'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-left-width', ( $attr['boxBorder']['borderWidth']['Mobile']['left'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Mobile']['top'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-top-left-radius', ( $attr['boxBorder']['borderRadius']['Mobile']['top'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Mobile']['right'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-top-right-radius', ( $attr['boxBorder']['borderRadius']['Mobile']['right'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Mobile']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-bottom-right-radius', ( $attr['boxBorder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['boxBorder']['borderRadius']['Mobile']['left'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-bottom-left-radius', ( $attr['boxBorder']['borderRadius']['Mobile']['left'] . 'px' ) );
		}

		// icon Style
		if ( isset( $attr['playBorder']['borderWidth']['Mobile']['top'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-top-width', ( $attr['playBorder']['borderWidth']['Mobile']['top'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderWidth']['Mobile']['right'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-right-width', ( $attr['playBorder']['borderWidth']['Mobile']['right'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderWidth']['Mobile']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-bottom-width', ( $attr['playBorder']['borderWidth']['Mobile']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderWidth']['Mobile']['left'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-left-width', ( $attr['playBorder']['borderWidth']['Mobile']['left'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Mobile']['top'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-top-left-radius', ( $attr['playBorder']['borderRadius']['Mobile']['top'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Mobile']['right'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-top-right-radius', ( $attr['playBorder']['borderRadius']['Mobile']['right'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Mobile']['bottom'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-bottom-right-radius', ( $attr['playBorder']['borderRadius']['Mobile']['bottom'] . 'px' ) );
		}
		if ( isset( $attr['playBorder']['borderRadius']['Mobile']['left'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-bottom-left-radius', ( $attr['playBorder']['borderRadius']['Mobile']['left'] . 'px' ) );
		}
		if ( isset( $attr['playPadding']['Mobile']['top'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-top', ( $attr['playPadding']['Mobile']['top'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['playPadding']['Mobile']['right'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-right', ( $attr['playPadding']['Mobile']['right'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['playPadding']['Mobile']['bottom'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-bottom', ( $attr['playPadding']['Mobile']['bottom'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['playPadding']['Mobile']['left'] ) && isset( $attr['playPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding-left', ( $attr['playPadding']['Mobile']['left'] . ( isset( $attr['playPadding']['unit'] ) ? $attr['playPadding']['unit'] : 'px' ) . '!important' ) );
		}

		// Style Description.
		if ( isset( $attr['videoDescTypography']['fontSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->add_property( 'font-size', ( ( isset( $attr['videoDescTypography']['fontSize']['Mobile'] ) ? $attr['videoDescTypography']['fontSize']['Mobile'] : '20' ) . ( isset( $attr['videoDescTypography']['fontSize']['unit'] ) ? $attr['videoDescTypography']['fontSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['videoDescTypography']['lineHeight']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->add_property( 'line-height', ( ( isset( $attr['videoDescTypography']['lineHeight']['Mobile'] ) ? $attr['videoDescTypography']['lineHeight']['Mobile'] : '20' ) . ( isset( $attr['videoDescTypography']['lineHeight']['unit'] ) ? $attr['videoDescTypography']['lineHeight']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['videoDescTypography']['letterSpacing']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->add_property( 'letter-spacing', ( ( isset( $attr['videoDescTypography']['letterSpacing']['Mobile'] ) ? $attr['videoDescTypography']['letterSpacing']['Mobile'] : '0' ) . ( isset( $attr['videoDescTypography']['letterSpacing']['unit'] ) ? $attr['videoDescTypography']['letterSpacing']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Mobile']['top'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-top', ( $attr['descPadding']['Mobile']['top'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Mobile']['right'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-right', ( $attr['descPadding']['Mobile']['right'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Mobile']['bottom'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-bottom', ( $attr['descPadding']['Mobile']['bottom'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['descPadding']['Mobile']['left'] ) && isset( $attr['descPadding']['unit'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding-left', ( $attr['descPadding']['Mobile']['left'] . ( isset( $attr['descPadding']['unit'] ) ? $attr['descPadding']['unit'] : 'px' ) . '!important' ) );
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

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = $attributes['blockId'];
		} else {
			$unique_id = rand( 100, 10000 );
		}

		$style_id = 'pbg-block-image-separator-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'image-separator', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_image_seperator_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'image-separator', $unique_id ) ) {
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

			// container style
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', ( $attr['iconAlign']['Desktop'] . ' !important' ) );
		}

		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-image-separator-container' );
			$css->add_property( 'text-align', ( $attr['iconAlign']['Desktop'] . ' !important' ) );
		}

			// Icon Style.
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '>i' );
			$css->add_property( 'font-size', ( ( isset( $attr['iconSize']['Desktop'] ) ? $attr['iconSize']['Desktop'] : '200' ) . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['iconPadding'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'padding', $css->render_spacing( $attr['iconPadding']['Desktop'], ( isset( $attr['iconPadding']['unit'] ) ? $attr['iconPadding']['unit'] : 'px' ) ) );
		}

		if ( isset( $attr['iconBorder'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'border-width', $css->render_spacing( $attr['iconBorder']['borderWidth']['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $attr['iconBorder']['borderRadius']['Desktop'], 'px' ) );
		}
			// Image style
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'width', ( ( isset( $attr['iconSize']['Desktop'] ) ? $attr['iconSize']['Desktop'] : '200' ) . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['imgHeight'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'height', ( ( isset( $attr['imgHeight']['Desktop'] ) ? $attr['imgHeight']['Desktop'] : '200' ) . ( isset( $attr['imgHeight']['unit'] ) ? $attr['imgHeight']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['iconBorder'] ) && ( $attr['iconStyles'][0]['advancedBorder'] == false ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> img' );
			$css->add_property( 'border-width', $css->render_spacing( $attr['iconBorder']['borderWidth']['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $attr['iconBorder']['borderRadius']['Desktop'], 'px' ) );
		}
		if ( isset( $attr['iconStyles'][0]['advancedBorder'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> img' );
			$css->add_property( 'border-radius', $css->render_color( $attr['iconStyles'][0]['advancedBorder'] ? $attr['iconStyles'][0]['advancedBorderValue'] . '!important' : '' ) );
		}

		if ( isset( $attr['iconStyles'][0]['advancedBorder'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'border-radius', $css->render_color( $attr['iconStyles'][0]['advancedBorder'] ? $attr['iconStyles'][0]['advancedBorderValue'] . '!important' : '' ) );
		}

			$css->start_media_query( $media_query['tablet'] );

			// container style
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', ( $attr['iconAlign']['Tablet'] . '!important' ) );
		}

		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-image-separator-container' );
			$css->add_property( 'text-align', ( $attr['iconAlign']['Tablet'] . '!important' ) );
		}

			// Icon Style.
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '>i' );
			$css->add_property( 'font-size', ( ( isset( $attr['iconSize']['Tablet'] ) ? $attr['iconSize']['Tablet'] : '200' ) . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['iconPadding'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'padding', $css->render_spacing( $attr['iconPadding']['Tablet'], ( isset( $attr['iconPadding']['unit'] ) ? $attr['iconPadding']['unit'] : 'px' ) ) );
		}

		if ( isset( $attr['iconBorder'] ) && ( $attr['iconStyles'][0]['advancedBorder'] == false ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'border-width', $css->render_spacing( $attr['iconBorder']['borderWidth']['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $attr['iconBorder']['borderRadius']['Tablet'], 'px' ) );
		}

			// Image style
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'width', ( ( isset( $attr['iconSize']['Tablet'] ) ? $attr['iconSize']['Tablet'] : '200' ) . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['imgHeight']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'height', ( ( isset( $attr['imgHeight']['Tablet'] ) ? $attr['imgHeight']['Tablet'] : '200' ) . ( isset( $attr['imgHeight']['unit'] ) ? $attr['imgHeight']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['iconBorder'] ) && ( $attr['iconStyles'][0]['advancedBorder'] == false ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> img' );
			$css->add_property( 'border-width', $css->render_spacing( $attr['iconBorder']['borderWidth']['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $attr['iconBorder']['borderRadius']['Tablet'], 'px' ) );

		}

			$css->stop_media_query();
			$css->start_media_query( $media_query['mobile'] );

			// container style
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', ( $attr['iconAlign']['Mobile'] . '!important' ) );
		}

		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-image-separator-container' );
			$css->add_property( 'text-align', ( $attr['iconAlign']['Mobile'] . '!important' ) );
		}

			// Icon Style.
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '>i' );
			$css->add_property( 'font-size', ( ( isset( $attr['iconSize']['Mobile'] ) ? $attr['iconSize']['Mobile'] : '200' ) . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['iconPadding'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'padding', $css->render_spacing( $attr['iconPadding']['Mobile'], ( isset( $attr['iconPadding']['unit'] ) ? $attr['iconPadding']['unit'] : 'px' ) ) );
		}

		if ( isset( $attr['iconBorder'] ) && ( $attr['iconStyles'][0]['advancedBorder'] == false ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'border-width', $css->render_spacing( $attr['iconBorder']['borderWidth']['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $attr['iconBorder']['borderRadius']['Mobile'], 'px' ) );
		}

			// Image style
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'width', ( ( isset( $attr['iconSize']['Mobile'] ) ? $attr['iconSize']['Mobile'] : '200' ) . ( isset( $attr['iconSize']['unit'] ) ? $attr['iconSize']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['imgHeight'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'height', ( ( isset( $attr['imgHeight']['Mobile'] ) ? $attr['imgHeight']['Mobile'] : '200' ) . ( isset( $attr['imgHeight']['unit'] ) ? $attr['imgHeight']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['imgHeight'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'height', ( ( isset( $attr['imgHeight']['Mobile'] ) ? $attr['imgHeight']['Mobile'] : '200' ) . ( isset( $attr['imgHeight']['unit'] ) ? $attr['imgHeight']['unit'] : 'px' ) . '!important' ) );
		}

		if ( isset( $attr['iconBorder'] ) && ( $attr['iconStyles'][0]['advancedBorder'] == false ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> img' );
			$css->add_property( 'border-width', $css->render_spacing( $attr['iconBorder']['borderWidth']['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $attr['iconBorder']['borderRadius']['Mobile'], 'px' ) );

		}

			$css->stop_media_query();
			return $css->css_output();
	}


		/**
		 * Get Modal Block Content & Style
		 *
		 * @access public
		 *
		 * @param string $attributes option For attribute.
		 * @param string $contnet for content of Block.
		 */
	public function get_modal_css( $attributes, $content ) {

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
			wp_enqueue_script(
				'pbg-modal-box',
				PREMIUM_BLOCKS_URL . 'assets/js/modal-box.js',
				array( 'jquery', 'pbg-lottie' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			$css = $this->get_modal_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'modal', $unique_id ) ) {
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
		 *
		 * @param string $unique_id option For block ID.
		 */
	public function get_modal_css_style( $attr, $unique_id ) {
		if ( isset( $attr['triggerStyles'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['triggerStyles'][0]['triggerFamily'] ) ? $attr['triggerStyles'][0]['triggerFamily'] : '' ),
					'fontVariant' => ( isset( $attr['triggerStyles'][0]['triggerWeight'] ) ? $attr['triggerStyles'][0]['triggerWeight'] : '' ),
				)
			);
		}
		if ( isset( $attr['headerStyles'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['headerStyles'][0]['headerFamily'] ) ? $attr['headerStyles'][0]['headerFamily'] : '' ),
					'fontVariant' => ( isset( $attr['headerStyles'][0]['headerWeight'] ) ? $attr['headerStyles'][0]['headerWeight'] : '' ),
				)
			);
		}
		if ( isset( $attr['modalStyles'] ) ) {
			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $attr['modalStyles'][0]['modalFamily'] ) ? $attr['modalStyles'][0]['modalFamily'] : '' ),
					'fontVariant' => ( isset( $attr['modalStyles'][0]['modalWeight'] ) ? $attr['modalStyles'][0]['modalWeight'] : '' ),
				)
			);
		}
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// style For Icon /Image/Lottie in Header
		if ( isset( $attr['contentStyles'] ) ) {
			if ( isset( $attr['contentStyles'][0]['iconSize'] ) && isset( $attr['contentStyles'][0]['iconSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
				$css->add_property( 'font-size', ( $attr['contentStyles'][0]['iconSize'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
				$css->add_property( 'width', ( $attr['contentStyles'][0]['iconSize'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->add_property( 'height', ( $attr['contentStyles'][0]['iconSize'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
				$css->add_property( 'width', ( $attr['contentStyles'][0]['iconSize'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->add_property( 'height', ( $attr['contentStyles'][0]['iconSize'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
			}
		}

		if ( isset( $attr['iconSize'] ) ) {
			$icon_size = $attr['iconSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) );
		}

		// Trigger Sizr for Image/Lottie
		if ( isset( $attr['triggerSettings'] ) ) {
			if ( isset( $attr['triggerSettings'][0]['imageWidth'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container img' );
				$css->add_property( 'width', ( $attr['triggerSettings'][0]['imageWidth'] . 'px' ) );
				$css->add_property( 'height', ( $attr['triggerSettings'][0]['imageWidth'] . 'px' ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
				$css->add_property( 'width', ( $attr['triggerSettings'][0]['imageWidth'] . 'px' ) );
				$css->add_property( 'height', ( $attr['triggerSettings'][0]['imageWidth'] . 'px' ) );
			}
		}

		if ( isset( $attr['imageWidth'] ) ) {
			$image_width = $attr['imageWidth'];

			$css->add_property( 'width', $css->get_responsive_size_value( $image_width, 'Desktop', $image_width['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $image_width, 'Desktop', $image_width['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
			$css->add_property( 'width', $css->get_responsive_size_value( $image_width, 'Desktop', $image_width['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $image_width, 'Desktop', $icon_size['unit'] ) );
		}

		// Style For Button Trigger
		if ( isset( $attr['triggerStyles'] ) ) {
			if ( isset( $attr['triggerStyles'][0]['triggerSize'] ) && isset( $attr['triggerStyles'][0]['triggerSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
				$css->add_property( 'font-size', ( $attr['triggerStyles'][0]['triggerSize'] . $attr['triggerStyles'][0]['triggerSizeUnit'] ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > span' );
				$css->add_property( 'font-size', ( $attr['triggerStyles'][0]['triggerSize'] . $attr['triggerStyles'][0]['triggerSizeUnit'] ) );
			}
		}

		if ( isset( $attr['triggerTypography'] ) ) {
			$trigger_typography = $attr['triggerTypography'];
			$trigger_size       = $trigger_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $trigger_typography['fontFamily'] ) ? $trigger_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $trigger_typography['fontWeight'] ) ? $trigger_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $trigger_size, 'Desktop', $trigger_size['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > span' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $trigger_size, 'Desktop', $trigger_size['unit'] ) );
		}

		if ( isset( $attr['triggerPaddingT'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-top', ( $attr['triggerPaddingT'] . 'px' ) );
		}
		if ( isset( $attr['triggerPaddingR'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-right', ( $attr['triggerPaddingR'] . 'px' ) );
		}
		if ( isset( $attr['triggerPaddingB'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-bottom', ( $attr['triggerPaddingB'] . 'px' ) );
		}
		if ( isset( $attr['triggerPaddingL'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-left', ( $attr['triggerPaddingL'] . 'px' ) );
		}

		if ( isset( $attr['triggerPadding'] ) ) {
			$trigger_padding = $attr['triggerPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-top', $css->render_color( $trigger_padding['Desktop']['top'] . $trigger_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $trigger_padding['Desktop']['right'] . $trigger_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $trigger_padding['Desktop']['bottom'] . $trigger_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $trigger_padding['Desktop']['left'] . $trigger_padding['unit'] ) );
		}

		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border        = $attr['triggerBorder'];
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button, #premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > img, #premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $trigger_border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $trigger_border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $trigger_border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $trigger_border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $trigger_border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $trigger_border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $trigger_border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $trigger_border_radius, 'left', 'Desktop', 'px' ) );
		}

		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_h        = $attr['triggerBorderH'];
			$trigger_border_h_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_h_radius = $attr['triggerBorderH']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . ' .premium-modal-trigger-container img:hover, #premium-modal-box-' . $unique_id . ' .premium-modal-trigger-container:hover .premium-modal-trigger-text' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $trigger_border_h_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $trigger_border_h_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $trigger_border_h_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $trigger_border_h_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $trigger_border_h_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $trigger_border_h_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $trigger_border_h_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $trigger_border_h_radius, 'left', 'Desktop', 'px' ) );
		}

		// Style For Header in Modal
		if ( isset( $attr['headerStyles'] ) ) {
			if ( isset( $attr['headerStyles'][0]['headerSize'] ) && isset( $attr['headerStyles'][0]['headerSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
				$css->add_property( 'font-size', ( $attr['headerStyles'][0]['headerSize'] . $attr['headerStyles'][0]['headerSizeUnit'] ) );
			}
		}

		if ( isset( $attr['headerTypography'] ) ) {
			$header_typography = $attr['headerTypography'];
			$header_size       = $header_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $header_typography['fontFamily'] ) ? $header_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $header_typography['fontWeight'] ) ? $header_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $header_size, 'Desktop', $header_size['unit'] ) );
		}

		if ( isset( $attr['headerBorder'] ) ) {
			$header_border        = $attr['headerBorder'];
			$header_border_width  = $attr['headerBorder']['borderWidth'];
			$header_border_radius = $attr['headerBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $header_border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $header_border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $header_border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $header_border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $header_border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $header_border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $header_border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $header_border_radius, 'left', 'Desktop', 'px' ) );
		}

		// style for upper close button
		if ( isset( $attr['upperPaddingT'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', ( $attr['upperPaddingT'] . 'px' ) );
		}
		if ( isset( $attr['upperPaddingR'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-right', ( $attr['upperPaddingR'] . 'px' ) );
		}
		if ( isset( $attr['upperPaddingB'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-bottom', ( $attr['upperPaddingB'] . 'px' ) );
		}
		if ( isset( $attr['upperPaddingL'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-left', ( $attr['upperPaddingL'] . 'px' ) );
		}

		if ( isset( $attr['upperPadding'] ) ) {
			$upper_padding = $attr['upperPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', $css->render_color( $upper_padding['Desktop']['top'] . $upper_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $upper_padding['Desktop']['right'] . $upper_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $upper_padding['Desktop']['bottom'] . $upper_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $upper_padding['Desktop']['left'] . $upper_padding['unit'] ) );
		}

		if ( isset( $attr['upperBorder'] ) ) {
			$upper_border        = $attr['upperBorder'];
			$upper_border_width  = $attr['upperBorder']['borderWidth'];
			$upper_border_radius = $attr['upperBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $upper_border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $upper_border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $upper_border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $upper_border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $upper_border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $upper_border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $upper_border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $upper_border_radius, 'left', 'Desktop', 'px' ) );
		}

		// Style For font Size in  lower Close Button
		if ( isset( $attr['lowerStyles'] ) ) {
			if ( isset( $attr['lowerStyles'][0]['lowerSize'] ) && isset( $attr['lowerStyles'][0]['lowerSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
				$css->add_property( 'font-size', ( $attr['lowerStyles'][0]['lowerSize'] . $attr['lowerStyles'][0]['lowerSizeUnit'] ) );
			}
		}

		if ( isset( $attr['lowerTypography'] ) && isset( $attr['lowerTypography']['fontSize'] ) ) {
			$lower_size = $attr['lowerTypography']['fontSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $lower_size, 'Desktop', $lower_size['unit'] ) );
		}

		if ( isset( $attr['lowerBorder'] ) ) {
			$lower_border        = $attr['lowerBorder'];
			$lower_border_width  = $attr['lowerBorder']['borderWidth'];
			$lower_border_radius = $attr['lowerBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $lower_border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $lower_border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $lower_border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $lower_border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $lower_border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $lower_border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $lower_border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $lower_border_radius, 'left', 'Desktop', 'px' ) );
		}

		// style for Padding in lower Close Button
		if ( isset( $attr['lowerPaddingT'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', ( $attr['lowerPaddingT'] . 'px' ) );
		}
		if ( isset( $attr['lowerPaddingR'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-right', ( $attr['lowerPaddingR'] . 'px' ) );
		}
		if ( isset( $attr['lowerPaddingB'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-bottom', ( $attr['lowerPaddingB'] . 'px' ) );
		}
		if ( isset( $attr['lowerPaddingL'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-left', ( $attr['lowerPaddingL'] . 'px' ) );
		}

		if ( isset( $attr['lowerPadding'] ) ) {
			$lower_padding = $attr['lowerPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', $css->render_color( $lower_padding['Desktop']['top'] . $lower_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $lower_padding['Desktop']['right'] . $lower_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $lower_padding['Desktop']['bottom'] . $lower_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $lower_padding['Desktop']['left'] . $lower_padding['unit'] ) );
		}

		// Width & Height for Modal
		if ( isset( $attr['modalStyles'] ) ) {
			if ( isset( $attr['modalStyles'][0]['modalWidth'] ) && isset( $attr['modalStyles'][0]['modalWidthUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
				$css->add_property( 'width', ( $attr['modalStyles'][0]['modalWidth'] . $attr['modalStyles'][0]['modalWidthUnit'] ) );
			}
			if ( isset( $attr['modalStyles'][0]['modalHeight'] ) && isset( $attr['modalStyles'][0]['modalHeightUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
				$css->add_property( 'max-height', ( $attr['modalStyles'][0]['modalHeight'] . $attr['modalStyles'][0]['modalHeightUnit'] ) );
			}
			if ( isset( $attr['modalStyles'][0]['modalSize'] ) && isset( $attr['modalStyles'][0]['modalSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
				$css->add_property( 'font-size', ( $attr['modalStyles'][0]['modalSize'] . $attr['modalStyles'][0]['modalSizeUnit'] ) );
			}
		}

		if ( isset( $attr['modalTypography'] ) ) {
			$modal_typography = $attr['modalTypography'];
			$modal_size       = $modal_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $modal_typography['fontFamily'] ) ? $modal_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $modal_typography['fontWeight'] ) ? $modal_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $modal_size, 'Desktop', $modal_size['unit'] ) );
		}

		if ( isset( $attr['modalWidth'] ) ) {
			$modal_width = $attr['modalWidth'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'width', $css->get_responsive_size_value( $modal_width, 'Desktop', $modal_width['unit'] ) );
		}

		if ( isset( $attr['modalHeight'] ) ) {
			$modal_height = $attr['modalHeight'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'max-height', $css->get_responsive_size_value( $modal_height, 'Desktop', $modal_height['unit'] ) );
		}

		// padding & margin for Modal
		if ( isset( $attr['modalMarginT'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-top', ( $attr['modalMarginT'] . 'px' ) );
		}
		if ( isset( $attr['modalMarginR'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-right', ( $attr['modalMarginR'] . 'px' ) );
		}
		if ( isset( $attr['modalMarginB'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-bottom', ( $attr['modalMarginB'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingL'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-left', ( $attr['modalMarginL'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingT'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding-top', ( $attr['modalPaddingT'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingR'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding-right', ( $attr['modalPaddingR'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingB'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding-bottom', ( $attr['modalPaddingB'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingL'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' > .premium-modal-box-modal-body' );
			$css->add_property( 'padding-left', ( $attr['modalPaddingL'] . 'px' ) );
		}

		if ( isset( $attr['modalPadding'] ) ) {
			$modal_padding = $attr['modalPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' > .premium-modal-box-modal-body' );
			$css->add_property( 'padding-top', $css->render_color( $modal_padding['Desktop']['top'] . $modal_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $modal_padding['Desktop']['right'] . $modal_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $modal_padding['Desktop']['bottom'] . $modal_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $modal_padding['Desktop']['left'] . $modal_padding['unit'] ) );
		}

		if ( isset( $attr['modalMargin'] ) ) {
			$modal_margin = $attr['modalMargin'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-top', $css->render_color( $modal_margin['Desktop']['top'] . $modal_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $modal_margin['Desktop']['right'] . $modal_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $modal_margin['Desktop']['bottom'] . $modal_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $modal_margin['Desktop']['left'] . $modal_margin['unit'] ) );
		}

		if ( isset( $attr['modalBorder'] ) ) {
			$lower_border        = $attr['modalBorder'];
			$lower_border_width  = $attr['modalBorder']['borderWidth'];
			$lower_border_radius = $attr['modalBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $lower_border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $lower_border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $lower_border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $lower_border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $lower_border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $lower_border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $lower_border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $lower_border_radius, 'left', 'Desktop', 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );
		// style For Icon /Image/Lottie in Header
		if ( isset( $attr['contentStyles'] ) ) {
			if ( isset( $attr['contentStyles'][0]['iconSizeTablet'] ) && isset( $attr['contentStyles'][0]['iconSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
				$css->add_property( 'font-size', ( $attr['contentStyles'][0]['iconSizeTablet'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
				$css->add_property( 'width', ( $attr['contentStyles'][0]['iconSizeTablet'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->add_property( 'height', ( $attr['contentStyles'][0]['iconSizeTablet'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
				$css->add_property( 'width', ( $attr['contentStyles'][0]['iconSizeTablet'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->add_property( 'height', ( $attr['contentStyles'][0]['iconSizeTablet'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
			}
		}

		if ( isset( $attr['iconSize'] ) ) {
			$icon_size = $attr['iconSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) );
		}

		// Trigger Sizr for Image/Lottie
		if ( isset( $attr['triggerSettings'] ) ) {
			if ( isset( $attr['triggerSettings'][0]['imageWidthTablet'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container img' );
				$css->add_property( 'width', ( $attr['triggerSettings'][0]['imageWidthTablet'] . 'px' ) );
				$css->add_property( 'height', ( $attr['triggerSettings'][0]['imageWidthTablet'] . 'px' ) );

				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
				$css->add_property( 'width', ( $attr['triggerSettings'][0]['imageWidthTablet'] . 'px' ) );
				$css->add_property( 'height', ( $attr['triggerSettings'][0]['imageWidthTablet'] . 'px' ) );
			}
		}

		if ( isset( $attr['imageWidth'] ) ) {
			$image_width = $attr['imageWidth'];

			$css->add_property( 'width', $css->get_responsive_size_value( $image_width, 'Tablet', $image_width['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $image_width, 'Tablet', $image_width['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
			$css->add_property( 'width', $css->get_responsive_size_value( $image_width, 'Tablet', $image_width['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $image_width, 'Tablet', $icon_size['unit'] ) );
		}

		// Style For Button Trigger
		if ( isset( $attr['triggerStyles'] ) ) {
			if ( isset( $attr['triggerStyles'][0]['triggerSizeTablet'] ) && isset( $attr['triggerStyles'][0]['triggerSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
				$css->add_property( 'font-size', ( $attr['triggerStyles'][0]['triggerSize'] . $attr['triggerStyles'][0]['triggerSizeUnit'] ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > span' );
				$css->add_property( 'font-size', ( $attr['triggerStyles'][0]['triggerSize'] . $attr['triggerStyles'][0]['triggerSizeUnit'] ) );
			}
		}

		if ( isset( $attr['triggerTypography'] ) && isset( $attr['triggerTypography']['fontSize'] ) ) {
			$trigger_size = $attr['triggerTypography']['fontSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $trigger_size, 'Tablet', $trigger_size['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > span' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $trigger_size, 'Tablet', $trigger_size['unit'] ) );
		}

		if ( isset( $attr['triggerPaddingTTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-top', ( $attr['triggerPaddingTTablet'] . 'px' ) );
		}
		if ( isset( $attr['triggerPaddingRTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-right', ( $attr['triggerPaddingRTablet'] . 'px' ) );
		}
		if ( isset( $attr['triggerPaddingBTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-bottom', ( $attr['triggerPaddingBTablet'] . 'px' ) );
		}
		if ( isset( $attr['triggerPaddingLTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-left', ( $attr['triggerPaddingLTablet'] . 'px' ) );
		}

		if ( isset( $attr['triggerPadding'] ) ) {
			$trigger_padding = $attr['triggerPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-top', $css->render_color( $trigger_padding['Tablet']['top'] . $trigger_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $trigger_padding['Tablet']['right'] . $trigger_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $trigger_padding['Tablet']['bottom'] . $trigger_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $trigger_padding['Tablet']['left'] . $trigger_padding['unit'] ) );
		}

		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border        = $attr['triggerBorder'];
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button, #premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > img, #premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $trigger_border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $trigger_border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $trigger_border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $trigger_border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $trigger_border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $trigger_border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $trigger_border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $trigger_border_radius, 'left', 'Tablet', 'px' ) );
		}

		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_h        = $attr['triggerBorderH'];
			$trigger_border_h_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_h_radius = $attr['triggerBorderH']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . ' .premium-modal-trigger-container img:hover, #premium-modal-box-' . $unique_id . ' .premium-modal-trigger-container:hover .premium-modal-trigger-text' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $trigger_border_h_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $trigger_border_h_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $trigger_border_h_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $trigger_border_h_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $trigger_border_h_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $trigger_border_h_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $trigger_border_h_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $trigger_border_h_radius, 'left', 'Tablet', 'px' ) );
		}

		// Style For Header in Modal

		if ( isset( $attr['headerStyles'] ) ) {
			if ( isset( $attr['headerStyles'][0]['headerSizeTablet'] ) && isset( $attr['headerStyles'][0]['headerSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
				$css->add_property( 'font-size', ( $attr['headerStyles'][0]['headerSizeTablet'] . $attr['headerStyles'][0]['headerSizeUnit'] ) );
			}
		}

		if ( isset( $attr['headerTypography'] ) && isset( $attr['headerTypography']['fontSize'] ) ) {
			$header_size = $attr['headerTypography']['fontSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $header_size, 'Tablet', $header_size['unit'] ) );
		}

		if ( isset( $attr['headerBorder'] ) ) {
			$header_border        = $attr['headerBorder'];
			$header_border_width  = $attr['headerBorder']['borderWidth'];
			$header_border_radius = $attr['headerBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $header_border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $header_border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $header_border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $header_border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $header_border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $header_border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $header_border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $header_border_radius, 'left', 'Tablet', 'px' ) );
		}

		// style for upper close button
		if ( isset( $attr['upperPaddingTTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', ( $attr['upperPaddingTTablet'] . 'px' ) );
		}
		if ( isset( $attr['upperPaddingRTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-right', ( $attr['upperPaddingRTablet'] . 'px' ) );
		}
		if ( isset( $attr['upperPaddingBTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-bottom', ( $attr['upperPaddingBTablet'] . 'px' ) );
		}
		if ( isset( $attr['upperPaddingLTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-left', ( $attr['upperPaddingLTablet'] . 'px' ) );
		}

		if ( isset( $attr['upperPadding'] ) ) {
			$upper_padding = $attr['upperPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', $css->render_color( $upper_padding['Tablet']['top'] . $upper_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $upper_padding['Tablet']['right'] . $upper_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $upper_padding['Tablet']['bottom'] . $upper_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $upper_padding['Tablet']['left'] . $upper_padding['unit'] ) );
		}

		if ( isset( $attr['upperBorder'] ) ) {
			$upper_border        = $attr['upperBorder'];
			$upper_border_width  = $attr['upperBorder']['borderWidth'];
			$upper_border_radius = $attr['upperBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $upper_border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $upper_border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $upper_border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $upper_border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $upper_border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $upper_border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $upper_border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $upper_border_radius, 'left', 'Tablet', 'px' ) );
		}

		// Style For font Size in  lower Close Button
		if ( isset( $attr['lowerStyles'] ) ) {
			if ( isset( $attr['lowerStyles'][0]['lowerSizeTablet'] ) && isset( $attr['lowerStyles'][0]['lowerSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
				$css->add_property( 'font-size', ( $attr['lowerStyles'][0]['lowerSizeTablet'] . $attr['lowerStyles'][0]['lowerSizeUnit'] ) );
			}
		}

		if ( isset( $attr['lowerTypography'] ) && isset( $attr['lowerTypography']['fontSize'] ) ) {
			$lower_size = $attr['lowerTypography']['fontSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $lower_size, 'Tablet', $lower_size['unit'] ) );
		}

		if ( isset( $attr['lowerBorder'] ) ) {
			$lower_border        = $attr['lowerBorder'];
			$lower_border_width  = $attr['lowerBorder']['borderWidth'];
			$lower_border_radius = $attr['lowerBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $lower_border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $lower_border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $lower_border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $lower_border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $lower_border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $lower_border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $lower_border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $lower_border_radius, 'left', 'Tablet', 'px' ) );
		}

		// style for Padding in lower Close Button
		if ( isset( $attr['lowerPaddingTTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', ( $attr['lowerPaddingTTablet'] . 'px' ) );
		}
		if ( isset( $attr['lowerPaddingRTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-right', ( $attr['lowerPaddingRTablet'] . 'px' ) );
		}
		if ( isset( $attr['lowerPaddingBTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-bottom', ( $attr['lowerPaddingBTablet'] . 'px' ) );
		}
		if ( isset( $attr['lowerPaddingLTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-left', ( $attr['lowerPaddingLTablet'] . 'px' ) );
		}

		if ( isset( $attr['lowerPadding'] ) ) {
			$lower_padding = $attr['lowerPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', $css->render_color( $lower_padding['Tablet']['top'] . $lower_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $lower_padding['Tablet']['right'] . $lower_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $lower_padding['Tablet']['bottom'] . $lower_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $lower_padding['Tablet']['left'] . $lower_padding['unit'] ) );
		}

		// Width & Height for Modal
		if ( isset( $attr['modalStyles'] ) ) {
			if ( isset( $attr['modalStyles'][0]['modalWidthTablet'] ) && isset( $attr['modalStyles'][0]['modalWidthUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
				$css->add_property( 'width', ( $attr['modalStyles'][0]['modalWidthTablet'] . $attr['modalStyles'][0]['modalWidthUnit'] ) );
			}
			if ( isset( $attr['modalStyles'][0]['modalHeightTablet'] ) && isset( $attr['modalStyles'][0]['modalHeightUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
				$css->add_property( 'max-height', ( $attr['modalStyles'][0]['modalHeightTablet'] . $attr['modalStyles'][0]['modalHeightUnit'] ) );
			}
			if ( isset( $attr['modalStyles'][0]['modalSizeTablet'] ) && isset( $attr['modalStyles'][0]['modalSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
				$css->add_property( 'font-size', ( $attr['modalStyles'][0]['modalSizeTablet'] . $attr['modalStyles'][0]['modalSizeUnit'] ) );
			}
		}

		if ( isset( $attr['modalTypography'] ) && isset( $attr['modalTypography']['fontSize'] ) ) {
			$modal_size = $attr['modalTypography']['fontSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $modal_size, 'Tablet', $modal_size['unit'] ) );
		}

		if ( isset( $attr['modalWidth'] ) ) {
			$modal_width = $attr['modalWidth'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'width', $css->get_responsive_size_value( $modal_width, 'Tablet', $modal_width['unit'] ) );
		}

		if ( isset( $attr['modalHeight'] ) ) {
			$modal_height = $attr['modalHeight'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'max-height', $css->get_responsive_size_value( $modal_height, 'Tablet', $modal_height['unit'] ) );
		}

		// padding & margin for Modal
		if ( isset( $attr['modalMarginTTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-top', ( $attr['modalMarginTTablet'] . 'px' ) );
		}
		if ( isset( $attr['modalMarginRTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-right', ( $attr['modalMarginRTablet'] . 'px' ) );
		}
		if ( isset( $attr['modalMarginBTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-bottom', ( $attr['modalMarginBTablet'] . 'px' ) );
		}
		if ( isset( $attr['modalMarginLTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-left', ( $attr['modalMarginLTablet'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingTTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding-top', ( $attr['modalPaddingTTablet'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingRTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding-right', ( $attr['modalPaddingRTablet'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingBTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding-bottom', ( $attr['modalPaddingBTablet'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingLTablet'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' > .premium-modal-box-modal-body' );
			$css->add_property( 'padding-left', ( $attr['modalPaddingLTablet'] . 'px' ) );
		}

		if ( isset( $attr['modalPadding'] ) ) {
			$modal_padding = $attr['modalPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' > .premium-modal-box-modal-body' );
			$css->add_property( 'padding-top', $css->render_color( $modal_padding['Tablet']['top'] . $modal_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $modal_padding['Tablet']['right'] . $modal_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $modal_padding['Tablet']['bottom'] . $modal_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $modal_padding['Tablet']['left'] . $modal_padding['unit'] ) );
		}

		if ( isset( $attr['modalMargin'] ) ) {
			$modal_margin = $attr['modalMargin'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-top', $css->render_color( $modal_margin['Tablet']['top'] . $modal_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $modal_margin['Tablet']['right'] . $modal_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $modal_margin['Tablet']['bottom'] . $modal_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $modal_margin['Tablet']['left'] . $modal_margin['unit'] ) );
		}

		if ( isset( $attr['modalBorder'] ) ) {
			$lower_border        = $attr['modalBorder'];
			$lower_border_width  = $attr['modalBorder']['borderWidth'];
			$lower_border_radius = $attr['modalBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $lower_border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $lower_border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $lower_border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $lower_border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $lower_border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $lower_border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $lower_border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $lower_border_radius, 'left', 'Tablet', 'px' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		// style For Icon /Image/Lottie in Header
		if ( isset( $attr['contentStyles'] ) ) {
			if ( isset( $attr['contentStyles'][0]['iconSizeMobile'] ) && isset( $attr['contentStyles'][0]['iconSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
				$css->add_property( 'font-size', ( $attr['contentStyles'][0]['iconSizeMobile'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
				$css->add_property( 'width', ( $attr['contentStyles'][0]['iconSizeMobile'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->add_property( 'height', ( $attr['contentStyles'][0]['iconSizeMobile'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
				$css->add_property( 'width', ( $attr['contentStyles'][0]['iconSizeMobile'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );
				$css->add_property( 'height', ( $attr['contentStyles'][0]['iconSizeMobile'] . $attr['contentStyles'][0]['iconSizeUnit'] ) );

			}
		}

		if ( isset( $attr['iconSize'] ) ) {
			$icon_size = $attr['iconSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) );
		}

		// Trigger Size for Image/Lottie
		if ( isset( $attr['triggerSettings'] ) ) {
			if ( isset( $attr['triggerSettings'][0]['imageWidthMobile'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container img' );
				$css->add_property( 'width', ( $attr['triggerSettings'][0]['imageWidthMobile'] . 'px' ) );
				$css->add_property( 'height', ( $attr['triggerSettings'][0]['imageWidthMobile'] . 'px' ) );

				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
				$css->add_property( 'width', ( $attr['triggerSettings'][0]['imageWidthMobile'] . 'px' ) );
				$css->add_property( 'height', ( $attr['triggerSettings'][0]['imageWidthMobile'] . 'px' ) );
			}
		}

		if ( isset( $attr['imageWidth'] ) ) {
			$image_width = $attr['imageWidth'];

			$css->add_property( 'width', $css->get_responsive_size_value( $image_width, 'Mobile', $image_width['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $image_width, 'Mobile', $image_width['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
			$css->add_property( 'width', $css->get_responsive_size_value( $image_width, 'Mobile', $image_width['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $image_width, 'Mobile', $icon_size['unit'] ) );
		}

		// Style For Button Trigger
		if ( isset( $attr['triggerStyles'] ) ) {
			if ( isset( $attr['triggerStyles'][0]['triggerSizeMobile'] ) && isset( $attr['triggerStyles'][0]['triggerSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
				$css->add_property( 'font-size', ( $attr['triggerStyles'][0]['triggerSizeMobile'] . $attr['triggerStyles'][0]['triggerSizeUnit'] ) );
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > span' );
				$css->add_property( 'font-size', ( $attr['triggerStyles'][0]['triggerSizeMobile'] . $attr['triggerStyles'][0]['triggerSizeUnit'] ) );
			}
		}

		if ( isset( $attr['triggerTypography'] ) && isset( $attr['triggerTypography']['fontSize'] ) ) {
			$trigger_size = $attr['triggerTypography']['fontSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $trigger_size, 'Mobile', $trigger_size['unit'] ) );
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > span' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $trigger_size, 'Mobile', $trigger_size['unit'] ) );
		}

		if ( isset( $attr['triggerPaddingTMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-top', ( $attr['triggerPaddingTMobile'] . 'px' ) );
		}
		if ( isset( $attr['triggerPaddingRMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-right', ( $attr['triggerPaddingRMobile'] . 'px' ) );
		}
		if ( isset( $attr['triggerPaddingBMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-bottom', ( $attr['triggerPaddingBMobile'] . 'px' ) );
		}
		if ( isset( $attr['triggerPaddingLMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-left', ( $attr['triggerPaddingLMobile'] . 'px' ) );
		}

		if ( isset( $attr['triggerPadding'] ) ) {
			$trigger_padding = $attr['triggerPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding-top', $css->render_color( $trigger_padding['Mobile']['top'] . $trigger_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $trigger_padding['Mobile']['right'] . $trigger_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $trigger_padding['Mobile']['bottom'] . $trigger_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $trigger_padding['Mobile']['left'] . $trigger_padding['unit'] ) );
		}

		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border        = $attr['triggerBorder'];
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > button, #premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > img, #premium-modal-box-' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $trigger_border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $trigger_border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $trigger_border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $trigger_border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $trigger_border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $trigger_border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $trigger_border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $trigger_border_radius, 'left', 'Mobile', 'px' ) );
		}

		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_h        = $attr['triggerBorderH'];
			$trigger_border_h_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_h_radius = $attr['triggerBorderH']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . ' .premium-modal-trigger-container img:hover, #premium-modal-box-' . $unique_id . ' .premium-modal-trigger-container:hover .premium-modal-trigger-text' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $trigger_border_h_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $trigger_border_h_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $trigger_border_h_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $trigger_border_h_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $trigger_border_h_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $trigger_border_h_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $trigger_border_h_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $trigger_border_h_radius, 'left', 'Mobile', 'px' ) );
		}

		// Style For Header in Modal
		if ( isset( $attr['headerStyles'] ) ) {
			if ( isset( $attr['headerStyles'][0]['headerSizeMobile'] ) && isset( $attr['headerStyles'][0]['headerSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
				$css->add_property( 'font-size', ( $attr['headerStyles'][0]['headerSizeMobile'] . $attr['headerStyles'][0]['headerSizeUnit'] ) );
			}
		}

		if ( isset( $attr['headerTypography'] ) && isset( $attr['headerTypography']['fontSize'] ) ) {
			$header_size = $attr['headerTypography']['fontSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $header_size, 'Mobile', $header_size['unit'] ) );
		}

		if ( isset( $attr['headerBorder'] ) ) {
			$header_border        = $attr['headerBorder'];
			$header_border_width  = $attr['headerBorder']['borderWidth'];
			$header_border_radius = $attr['headerBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $header_border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $header_border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $header_border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $header_border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $header_border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $header_border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $header_border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $header_border_radius, 'left', 'Mobile', 'px' ) );
		}

		// style for upper close button
		if ( isset( $attr['upperPaddingTMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', ( $attr['upperPaddingTMobile'] . 'px' ) );
		}
		if ( isset( $attr['upperPaddingRMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-right', ( $attr['upperPaddingRMobile'] . 'px' ) );
		}
		if ( isset( $attr['upperPaddingBMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-bottom', ( $attr['upperPaddingBMobile'] . 'px' ) );
		}
		if ( isset( $attr['upperPaddingLMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-left', ( $attr['upperPaddingLMobile'] . 'px' ) );
		}

		if ( isset( $attr['upperPadding'] ) ) {
			$upper_padding = $attr['upperPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', $css->render_color( $upper_padding['Mobile']['top'] . $upper_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $upper_padding['Mobile']['right'] . $upper_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $upper_padding['Mobile']['bottom'] . $upper_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $upper_padding['Mobile']['left'] . $upper_padding['unit'] ) );
		}

		if ( isset( $attr['upperBorder'] ) ) {
			$upper_border        = $attr['upperBorder'];
			$upper_border_width  = $attr['upperBorder']['borderWidth'];
			$upper_border_radius = $attr['upperBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $upper_border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $upper_border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $upper_border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $upper_border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $upper_border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $upper_border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $upper_border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $upper_border_radius, 'left', 'Mobile', 'px' ) );
		}

		// Style For font Size in  lower Close Button
		if ( isset( $attr['lowerStyles'] ) ) {
			if ( isset( $attr['lowerStyles'][0]['lowerSizeMobile'] ) && isset( $attr['lowerStyles'][0]['lowerSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
				$css->add_property( 'font-size', ( $attr['lowerStyles'][0]['lowerSizeMobile'] . $attr['lowerStyles'][0]['lowerSizeUnit'] ) );
			}
		}

		if ( isset( $attr['lowerTypography'] ) && isset( $attr['lowerTypography']['fontSize'] ) ) {
			$lower_size = $attr['lowerTypography']['fontSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $lower_size, 'Mobile', $lower_size['unit'] ) );
		}

		if ( isset( $attr['lowerBorder'] ) ) {
			$lower_border        = $attr['lowerBorder'];
			$lower_border_width  = $attr['lowerBorder']['borderWidth'];
			$lower_border_radius = $attr['lowerBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $lower_border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $lower_border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $lower_border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $lower_border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $lower_border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $lower_border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $lower_border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $lower_border_radius, 'left', 'Mobile', 'px' ) );
		}

		// style for Padding in lower Close Button
		if ( isset( $attr['lowerPaddingTMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', ( $attr['lowerPaddingTMobile'] . 'px' ) );
		}
		if ( isset( $attr['lowerPaddingRMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-right', ( $attr['lowerPaddingRMobile'] . 'px' ) );
		}
		if ( isset( $attr['lowerPaddingBMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-bottom', ( $attr['lowerPaddingBMobile'] . 'px' ) );
		}
		if ( isset( $attr['lowerPaddingLMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-left', ( $attr['lowerPaddingLMobile'] . 'px' ) );
		}

		if ( isset( $attr['lowerPadding'] ) ) {
			$lower_padding = $attr['lowerPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'padding-top', $css->render_color( $lower_padding['Mobile']['top'] . $lower_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $lower_padding['Mobile']['right'] . $lower_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $lower_padding['Mobile']['bottom'] . $lower_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $lower_padding['Mobile']['left'] . $lower_padding['unit'] ) );
		}

		// Width & Height for Modal
		if ( isset( $attr['modalStyles'] ) ) {
			if ( isset( $attr['modalStyles'][0]['modalWidthMobile'] ) && isset( $attr['modalStyles'][0]['modalWidthUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
				$css->add_property( 'width', ( $attr['modalStyles'][0]['modalWidthMobile'] . $attr['modalStyles'][0]['modalWidthUnit'] ) );
			}
			if ( isset( $attr['modalStyles'][0]['modalHeightMobile'] ) && isset( $attr['modalStyles'][0]['modalHeightUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
				$css->add_property( 'max-height', ( $attr['modalStyles'][0]['modalHeightMobile'] . $attr['modalStyles'][0]['modalHeightUnit'] ) );
			}
			if ( isset( $attr['modalStyles'][0]['modalSizeMobile'] ) && isset( $attr['modalStyles'][0]['modalSizeUnit'] ) ) {
				$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
				$css->add_property( 'font-size', ( $attr['modalStyles'][0]['modalSizeMobile'] . $attr['modalStyles'][0]['modalSizeUnit'] ) );
			}
		}

		if ( isset( $attr['modalTypography'] ) && isset( $attr['modalTypography']['fontSize'] ) ) {
			$modal_size = $attr['modalTypography']['fontSize'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $modal_size, 'Mobile', $modal_size['unit'] ) );
		}

		if ( isset( $attr['modalWidth'] ) ) {
			$modal_width = $attr['modalWidth'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'width', $css->get_responsive_size_value( $modal_width, 'Mobile', $modal_width['unit'] ) );
		}

		if ( isset( $attr['modalHeight'] ) ) {
			$modal_height = $attr['modalHeight'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'max-height', $css->get_responsive_size_value( $modal_height, 'Mobile', $modal_height['unit'] ) );
		}

		// padding & margin for Modal
		if ( isset( $attr['modalMarginTMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-top', ( $attr['modalMarginTMobile'] . 'px' ) );
		}
		if ( isset( $attr['modalMarginRMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-right', ( $attr['modalMarginRMobile'] . 'px' ) );
		}
		if ( isset( $attr['modalMarginBMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-bottom', ( $attr['modalMarginBMobile'] . 'px' ) );
		}
		if ( isset( $attr['modalMarginLMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-left', ( $attr['modalMarginLMobile'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingTMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding-top', ( $attr['modalPaddingTMobile'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingRMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding-right', ( $attr['modalPaddingRMobile'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingBMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding-bottom', ( $attr['modalPaddingBMobile'] . 'px' ) );
		}
		if ( isset( $attr['modalPaddingLMobile'] ) ) {
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' > .premium-modal-box-modal-body' );
			$css->add_property( 'padding-left', ( $attr['modalPaddingLMobile'] . 'px' ) );
		}

		if ( isset( $attr['modalPadding'] ) ) {
			$modal_padding = $attr['modalPadding'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' > .premium-modal-box-modal-body' );
			$css->add_property( 'padding-top', $css->render_color( $modal_padding['Mobile']['top'] . $modal_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $modal_padding['Mobile']['right'] . $modal_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $modal_padding['Mobile']['bottom'] . $modal_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $modal_padding['Mobile']['left'] . $modal_padding['unit'] ) );
		}

		if ( isset( $attr['modalMargin'] ) ) {
			$modal_margin = $attr['modalMargin'];
			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin-top', $css->render_color( $modal_margin['Mobile']['top'] . $modal_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $modal_margin['Mobile']['right'] . $modal_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $modal_margin['Mobile']['bottom'] . $modal_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $modal_margin['Mobile']['left'] . $modal_margin['unit'] ) );
		}

		if ( isset( $attr['modalBorder'] ) ) {
			$lower_border        = $attr['modalBorder'];
			$lower_border_width  = $attr['modalBorder']['borderWidth'];
			$lower_border_radius = $attr['modalBorder']['borderRadius'];

			$css->set_selector( '#premium-modal-box-' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $lower_border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $lower_border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $lower_border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $lower_border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $lower_border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $lower_border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $lower_border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $lower_border_radius, 'left', 'Mobile', 'px' ) );
		}

		$css->stop_media_query();
		return $css->css_output();
	}

		/**
		 * Get BulletList Block Content & Style
		 *
		 * @access public
		 *
		 * @param string $attributes option For attribute.
		 * @param string $contnet for content of Block.
		 */
	public function get_bulletList_css( $attributes, $content ) {

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}

		$style_unique_id = rand( 100, 10000 );

		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-bullet-list',
				PREMIUM_BLOCKS_URL . 'assets/js/bullet-list.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $style_unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'bulletList', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_bulletList_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'bulletList', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;

	}

		/**
		 * Get BulletList Block CSS
		 *
		 * Return Frontend CSS for BulletList Block.
		 *
		 * @access public
		 *
		 * @param string $attr option attribute.
		 * @param string $unique_id option For  block ID.
		 */
	public function get_bulletList_css_style( $attr, $unique_id ) {
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		// Align.
		if ( isset( $attr['bulletAlign'] ) ) {
			$align      = $css->get_responsive_css( $attr['bulletAlign'], 'Desktop' );
			$flex_align = 'left' === $align ? 'flex-start' : 'center';
			$flex_align = 'right' === $align ? 'flex-end' : $flex_align;

			$css->set_selector( $unique_id . ' .premium-bullet-list__icon-wrap' );
			$css->add_property( 'align-self', $flex_align );
			$css->add_property( 'text-align', $align );
			$css->add_property( 'justify-content', $flex_align );
			$css->add_property( 'align-items', $flex_align );
		}

		if ( isset( $attr['align'] ) ) {
			$content_align      = $css->get_responsive_css( $attr['align'], 'Desktop' );
			$content_flex_align = 'left' === $content_align ? 'flex-start' : 'center';
			$content_flex_align = 'right' === $content_align ? 'flex-end' : $content_flex_align;

			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $content_align );
			$css->set_selector( $unique_id . ' .premium-bullet-list' );
			$css->add_property( 'justify-content', $content_flex_align );
			$css->set_selector( $unique_id . ' .premium-bullet-list__wrapper' );
			$css->add_property( 'justify-content', $content_flex_align );
			$css->set_selector( $unique_id . ' .premium-bullet-list__content-wrap' );
			$css->add_property( 'justify-content', $content_flex_align );
		}

		// Style for icon.
		if ( isset( $attr['generalpadding'] ) ) {
			$general_padding = $attr['generalpadding'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'padding', $css->render_spacing( $general_padding['Desktop'], $general_padding['unit'] ) );
		}

		if ( isset( $attr['generalmargin'] ) ) {
			$general_margin = $attr['generalmargin'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'margin', $css->render_spacing( $general_margin['Desktop'], $general_margin['unit'] ) );
		}

		if ( isset( $attr['generalBorder'] ) ) {
			$general_border        = $attr['generalBorder'];
			$general_border_width  = $attr['generalBorder']['borderWidth'];
			$general_border_radius = $attr['generalBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'border-width', $css->render_spacing( $general_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $general_border_radius['Desktop'], 'px' ) );
		}

		// style for link
		// Style for icon.
		if ( isset( $attr['bulletIconFontSize'] ) ) {
			$bullet_icon_size = $attr['bulletIconFontSize'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $bullet_icon_size, 'Desktop', $bullet_icon_size['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $bullet_icon_size, 'Desktop', $bullet_icon_size['unit'] ) );
		}

		if ( isset( $attr['dividerWidth'] ) ) {
			$divider_width = $attr['dividerWidth'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $divider_width, 'Desktop', $divider_width['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $divider_width, 'Desktop', $divider_width['unit'] ) );
		}

		if ( isset( $attr['dividerHeight'] ) ) {
			$divider_height = $attr['dividerHeight'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'height', $css->get_responsive_size_value( $divider_height, 'Desktop', $divider_height['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'height', $css->get_responsive_size_value( $divider_height, 'Desktop', $divider_height['unit'] ) );
		}

		if ( isset( $attr['bulletIconpadding'] ) ) {
			$bullet_icon_padding = $attr['bulletIconpadding'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'padding', $css->render_spacing( $bullet_icon_padding['Desktop'], $bullet_icon_padding['unit'] ) );
		}

		if ( isset( $attr['bulletIconBorder'] ) ) {
			$bullet_icon_border        = $attr['bulletIconBorder'];
			$bullet_icon_border_width  = $attr['bulletIconBorder']['borderWidth'];
			$bullet_icon_border_radius = $attr['bulletIconBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'border-width', $css->render_spacing( $bullet_icon_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $bullet_icon_border_radius['Desktop'], 'px' ) );
		}

		// Bullet Icon Style
		if ( isset( $attr['bulletIconmargin'] ) ) {
			$bullet_icon_margin = $attr['bulletIconmargin'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' );
			$css->add_property( 'margin', $css->render_spacing( $bullet_icon_margin['Desktop'], $bullet_icon_margin['unit'] ) );
		}

		// Style for title.
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__label-wrap' );
			$css->render_typography( $title_typography, 'Desktop' );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__label-wrap' );
			$css->render_typography( $title_typography, 'Desktop' );
		}

		if ( isset( $attr['titlemargin'] ) ) {
			$title_margin = $attr['titlemargin'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Desktop'], $title_margin['unit'] ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Align.
		if ( isset( $attr['bulletAlign'] ) ) {
			$align      = $css->get_responsive_css( $attr['bulletAlign'], 'Tablet' );
			$flex_align = 'left' === $align ? 'flex-start' : 'center';
			$flex_align = 'right' === $align ? 'flex-end' : $flex_align;

			$css->set_selector( $unique_id . ' .premium-bullet-list__icon-wrap' );
			$css->add_property( 'align-self', $flex_align );
			$css->add_property( 'text-align', $align );
			$css->add_property( 'justify-content', $flex_align );
			$css->add_property( 'align-items', $flex_align );
		}

		if ( isset( $attr['align'] ) ) {
			$content_align      = $css->get_responsive_css( $attr['align'], 'Tablet' );
			$content_flex_align = 'left' === $content_align ? 'flex-start' : 'center';
			$content_flex_align = 'right' === $content_align ? 'flex-end' : $content_flex_align;

			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $content_align );
			$css->set_selector( $unique_id . ' .premium-bullet-list' );
			$css->add_property( 'justify-content', $content_flex_align );
			$css->set_selector( $unique_id . ' .premium-bullet-list__wrapper' );
			$css->add_property( 'justify-content', $content_flex_align );
			$css->set_selector( $unique_id . ' .premium-bullet-list__content-wrap' );
			$css->add_property( 'justify-content', $content_flex_align );
		}
		// Style for image.
		if ( isset( $attr['generalpadding'] ) ) {
			$general_padding = $attr['generalpadding'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'padding', $css->render_spacing( $general_padding['Tablet'], $general_padding['unit'] ) );
		}

		if ( isset( $attr['generalmargin'] ) ) {
			$general_margin = $attr['generalmargin'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'margin', $css->render_spacing( $general_margin['Tablet'], $general_margin['unit'] ) );
		}

		if ( isset( $attr['generalBorder'] ) ) {
			$general_border        = $attr['generalBorder'];
			$general_border_width  = $attr['generalBorder']['borderWidth'];
			$general_border_radius = $attr['generalBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'border-width', $css->render_spacing( $general_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $general_border_radius['Tablet'], 'px' ) );
		}
		// style for link

		if ( isset( $attr['bulletIconFontSize'] ) ) {
			$bullet_icon_size = $attr['bulletIconFontSize'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $bullet_icon_size, 'Tablet', $bullet_icon_size['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $bullet_icon_size, 'Tablet', $bullet_icon_size['unit'] ) );
		}

		if ( isset( $attr['dividerWidth'] ) ) {
			$divider_width = $attr['dividerWidth'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $divider_width, 'Tablet', $divider_width['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $divider_width, 'Tablet', $divider_width['unit'] ) );
		}

		if ( isset( $attr['dividerHeight'] ) ) {
			$divider_height = $attr['dividerHeight'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'height', $css->get_responsive_size_value( $divider_height, 'Tablet', $divider_height['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'height', $css->get_responsive_size_value( $divider_height, 'Tablet', $divider_height['unit'] ) );
		}

		// Style for image.
		if ( isset( $attr['bulletIconpadding'] ) ) {
			$bullet_icon_padding = $attr['bulletIconpadding'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'padding', $css->render_spacing( $bullet_icon_padding['Tablet'], $bullet_icon_padding['unit'] ) );
		}

		if ( isset( $attr['bulletIconBorder'] ) ) {
			$bullet_icon_border        = $attr['bulletIconBorder'];
			$bullet_icon_border_width  = $attr['bulletIconBorder']['borderWidth'];
			$bullet_icon_border_radius = $attr['bulletIconBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'border-width', $css->render_spacing( $bullet_icon_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $bullet_icon_border_radius['Tablet'], 'px' ) );
		}

		// Bullet Icon Style
		if ( isset( $attr['bulletIconmargin'] ) ) {
			$bullet_icon_margin = $attr['bulletIconmargin'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' );
			$css->add_property( 'margin', $css->render_spacing( $bullet_icon_margin['Tablet'], $bullet_icon_margin['unit'] ) );
		}

		// Style for title.
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__label-wrap' );
			$css->render_typography( $title_typography, 'Tablet' );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__label-wrap' );
			$css->render_typography( $title_typography, 'Tablet' );
		}

		if ( isset( $attr['titlemargin'] ) ) {
			$title_margin = $attr['titlemargin'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Tablet'], $title_margin['unit'] ) );
		}

		$css->stop_media_query();

		$css->start_media_query( $media_query['mobile'] );

		// Align.
		if ( isset( $attr['bulletAlign'] ) ) {
			$align      = $css->get_responsive_css( $attr['bulletAlign'], 'Mobile' );
			$flex_align = 'left' === $align ? 'flex-start' : 'center';
			$flex_align = 'right' === $align ? 'flex-end' : $flex_align;

			$css->set_selector( $unique_id . ' .premium-bullet-list__icon-wrap' );
			$css->add_property( 'align-self', $flex_align );
			$css->add_property( 'text-align', $align );
			$css->add_property( 'justify-content', $flex_align );
			$css->add_property( 'align-items', $flex_align );
		}

		if ( isset( $attr['align'] ) ) {
			$content_align      = $css->get_responsive_css( $attr['align'], 'Mobile' );
			$content_flex_align = 'left' === $content_align ? 'flex-start' : 'center';
			$content_flex_align = 'right' === $content_align ? 'flex-end' : $content_flex_align;

			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $content_align );
			$css->set_selector( $unique_id . ' .premium-bullet-list' );
			$css->add_property( 'justify-content', $content_flex_align );
			$css->set_selector( $unique_id . ' .premium-bullet-list__wrapper' );
			$css->add_property( 'justify-content', $content_flex_align );
			$css->set_selector( $unique_id . ' .premium-bullet-list__content-wrap' );
			$css->add_property( 'justify-content', $content_flex_align );
		}

		// Style for general setting.
		if ( isset( $attr['generalpadding'] ) ) {
			$general_padding = $attr['generalpadding'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'padding', $css->render_spacing( $general_padding['Mobile'], $general_padding['unit'] ) );
		}

		if ( isset( $attr['generalmargin'] ) ) {
			$general_margin = $attr['generalmargin'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'margin', $css->render_spacing( $general_margin['Mobile'], $general_margin['unit'] ) );
		}

		if ( isset( $attr['generalBorder'] ) ) {
			$general_border        = $attr['generalBorder'];
			$general_border_width  = $attr['generalBorder']['borderWidth'];
			$general_border_radius = $attr['generalBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'border-width', $css->render_spacing( $general_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $general_border_radius['Mobile'], 'px' ) );
		}

		// style for link
		// Style for icon.
		if ( isset( $attr['bulletIconFontSize'] ) ) {
			$bullet_icon_size = $attr['bulletIconFontSize'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $bullet_icon_size, 'Mobile', $bullet_icon_size['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $bullet_icon_size, 'Mobile', $bullet_icon_size['unit'] ) );
		}

		if ( isset( $attr['dividerWidth'] ) ) {
			$divider_width = $attr['dividerWidth'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $divider_width, 'Mobile', $divider_width['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $divider_width, 'Mobile', $divider_width['unit'] ) );
		}

		if ( isset( $attr['dividerHeight'] ) ) {
			$divider_height = $attr['dividerHeight'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'height', $css->get_responsive_size_value( $divider_height, 'Mobile', $divider_height['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'height', $css->get_responsive_size_value( $divider_height, 'Mobile', $divider_height['unit'] ) );
		}

		// Style for image.
		if ( isset( $attr['bulletIconpadding'] ) ) {
			$bullet_icon_padding = $attr['bulletIconpadding'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'padding', $css->render_spacing( $bullet_icon_padding['Mobile'], $bullet_icon_padding['unit'] ) );
		}

		if ( isset( $attr['bulletIconBorder'] ) ) {
			$bullet_icon_border        = $attr['bulletIconBorder'];
			$bullet_icon_border_width  = $attr['bulletIconBorder']['borderWidth'];
			$bullet_icon_border_radius = $attr['bulletIconBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'border-width', $css->render_spacing( $bullet_icon_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $bullet_icon_border_radius['Mobile'], 'px' ) );
		}

		// Bullet Icon Style
		if ( isset( $attr['bulletIconmargin'] ) ) {
			$bullet_icon_margin = $attr['bulletIconmargin'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' );
			$css->add_property( 'margin', $css->render_spacing( $bullet_icon_margin['Mobile'], $bullet_icon_margin['unit'] ) );
		}
		// Style for title.
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__label-wrap' );
			$css->render_typography( $title_typography, 'Mobile' );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__label-wrap' );
			$css->render_typography( $title_typography, 'Mobile' );
		}

		if ( isset( $attr['titlemargin'] ) ) {
			$title_margin = $attr['titlemargin'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Mobile'], $title_margin['unit'] ) );
		}

		$css->stop_media_query();
		return $css->css_output();

	}

		/**
		 * Get Person Block Content & Style
		 *
		 * @access public
		 *
		 * @param string $attributes option attribute.
		 * @param string $content option for content of block.
		 */
	public function get_person_css( $attributes, $content ) {
		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = $attributes['blockId'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-person',
				PREMIUM_BLOCKS_URL . 'assets/js/person.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'person', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_person_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'person', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;

	}

		/**
		 * Get Person Block CSS
		 *
		 * Return Frontend CSS for Person Block.
		 *
		 * @access public
		 *
		 * @param string $attr option attribute.
		 * @param string $unique_id option For block ID.
		 */
	public function get_person_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		// style for container
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', ( $attr['align']['Desktop'] . '!important' ) );
		}

		// style for Content
		if ( isset( $attr['contentPadding'] ) ) {
			$content_padding = $attr['contentPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' );
			$css->add_property( 'padding', $css->render_spacing( $content_padding['Desktop'], $content_padding['unit'] ) );
		}

		// style for image
		if ( isset( $attr['imgHeight']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
			$css->add_property( 'height', ( $attr['imgHeight']['Desktop'] . ( isset( $attr['imgHeight']['unit'] ) ? $attr['imgHeight']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['imgWidth']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
			$css->add_property( 'width', ( $attr['imgWidth']['Desktop'] . ( isset( $attr['imgWidth']['unit'] ) ? $attr['imgWidth']['unit'] : 'px' ) . '!important' ) );
		}

		// Style for Name.
		if ( isset( $attr['nameTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
			$css->render_typography( $attr['nameTypography'], 'Desktop' );
		}
		if ( isset( $attr['namePadding'] ) ) {
			$name_padding = $attr['namePadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
			$css->add_property( 'padding', $css->render_spacing( $name_padding['Desktop'], $name_padding['unit'] ) );
		}

		// Style for Title.
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
			$css->render_typography( $attr['titleTypography'], 'Desktop' );
		}
		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Desktop'], $title_padding['unit'] ) );
		}
		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Desktop'], $title_margin['unit'] ) );
		}

		// Style for Desc.
		if ( isset( $attr['descTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
			$css->render_typography( $attr['descTypography'], 'Desktop' );
		}
		if ( isset( $attr['descPadding'] ) ) {
			$desc_padding = $attr['descPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Desktop'], $desc_padding['unit'] ) );
		}

		// Style for Social Icon Effect2.
		if ( isset( $attr['socialIconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', ( $attr['socialIconSize']['Desktop'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
			$css->add_property( 'height', ( $attr['socialIconSize']['Desktop'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['socialIconPadding'] ) ) {
			$socialIcon_padding = $attr['socialIconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Desktop'], $socialIcon_padding['unit'] ) );
		}
		if ( isset( $attr['socialIconMargin'] ) ) {
			$socialIcon_margin = $attr['socialIconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Desktop'], $socialIcon_margin['unit'] ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Desktop'], 'px' ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Desktop'], 'px' ) );
		}

		// Style for Social Icon Effect1.
		if ( isset( $attr['socialIconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', ( $attr['socialIconSize']['Desktop'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
			$css->add_property( 'height', ( $attr['socialIconSize']['Desktop'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['socialIconPadding'] ) ) {
			$socialIcon_padding = $attr['socialIconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Desktop'], $socialIcon_padding['unit'] ) );
		}
		if ( isset( $attr['socialIconMargin'] ) ) {
			$socialIcon_margin = $attr['socialIconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Desktop'], $socialIcon_margin['unit'] ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Desktop'], 'px' ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// style for container
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', ( $attr['align']['Tablet'] . '!important' ) );
		}

		// style for Content
		if ( isset( $attr['contentPadding'] ) ) {
			$content_padding = $attr['contentPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' );
			$css->add_property( 'padding', $css->render_spacing( $content_padding['Tablet'], $content_padding['unit'] ) );
		}

		// style for image
		if ( isset( $attr['imgHeight']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
			$css->add_property( 'height', ( $attr['imgHeight']['Tablet'] . ( isset( $attr['imgHeight']['unit'] ) ? $attr['imgHeight']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['imgWidth']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
			$css->add_property( 'width', ( $attr['imgWidth']['Tablet'] . ( isset( $attr['imgWidth']['unit'] ) ? $attr['imgWidth']['unit'] : 'px' ) . '!important' ) );
		}

		// Style for Name.
		if ( isset( $attr['nameTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
			$css->render_typography( $attr['nameTypography'], 'Tablet' );
		}
		if ( isset( $attr['namePadding'] ) ) {
			$name_padding = $attr['namePadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
			$css->add_property( 'padding', $css->render_spacing( $name_padding['Tablet'], $name_padding['unit'] ) );
		}

		// Style for Title.
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
			$css->render_typography( $attr['titleTypography'], 'Tablet' );
		}
		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Tablet'], $title_padding['unit'] ) );
		}
		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Tablet'], $title_margin['unit'] ) );
		}

		// Style for Desc.
		if ( isset( $attr['descTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
			$css->render_typography( $attr['descTypography'], 'Tablet' );
		}
		if ( isset( $attr['descPadding'] ) ) {
			$desc_padding = $attr['descPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Tablet'], $desc_padding['unit'] ) );
		}

		// Style for Social Icon Effect2.
		if ( isset( $attr['socialIconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', ( $attr['socialIconSize']['Tablet'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
			$css->add_property( 'height', ( $attr['socialIconSize']['Tablet'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['socialIconPadding'] ) ) {
			$socialIcon_padding = $attr['socialIconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Tablet'], $socialIcon_padding['unit'] ) );
		}
		if ( isset( $attr['socialIconMargin'] ) ) {
			$socialIcon_margin = $attr['socialIconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Tablet'], $socialIcon_margin['unit'] ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Tablet'], 'px' ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Tablet'], 'px' ) );
		}

		// Style for Social Icon Effect1.
		if ( isset( $attr['socialIconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', ( $attr['socialIconSize']['Tablet'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
			$css->add_property( 'height', ( $attr['socialIconSize']['Tablet'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['socialIconPadding'] ) ) {
			$socialIcon_padding = $attr['socialIconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Tablet'], $socialIcon_padding['unit'] ) );
		}
		if ( isset( $attr['socialIconMargin'] ) ) {
			$socialIcon_margin = $attr['socialIconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Tablet'], $socialIcon_margin['unit'] ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Tablet'], 'px' ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();

		$css->start_media_query( $media_query['mobile'] );

		// style for container
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', ( $attr['align']['Mobile'] . '!important' ) );
		}

		// style for Content
		if ( isset( $attr['contentPadding'] ) ) {
			$content_padding = $attr['contentPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' );
			$css->add_property( 'padding', $css->render_spacing( $content_padding['Mobile'], $content_padding['unit'] ) );
		}

		// style for image
		if ( isset( $attr['imgHeight']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
			$css->add_property( 'height', ( $attr['imgHeight']['Mobile'] . ( isset( $attr['imgHeight']['unit'] ) ? $attr['imgHeight']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['imgWidth']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
			$css->add_property( 'width', ( $attr['imgWidth']['Mobile'] . ( isset( $attr['imgWidth']['unit'] ) ? $attr['imgWidth']['unit'] : 'px' ) . '!important' ) );
		}

		// Style for Name.
		if ( isset( $attr['nameTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
			$css->render_typography( $attr['nameTypography'], 'Mobile' );
		}
		if ( isset( $attr['namePadding'] ) ) {
			$name_padding = $attr['namePadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__name' );
			$css->add_property( 'padding', $css->render_spacing( $name_padding['Mobile'], $name_padding['unit'] ) );
		}

		// Style for Title.
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
			$css->render_typography( $attr['titleTypography'], 'Mobile' );
		}
		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Mobile'], $title_padding['unit'] ) );
		}
		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__title' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Mobile'], $title_margin['unit'] ) );
		}

		// Style for Desc.
		if ( isset( $attr['descTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
			$css->render_typography( $attr['descTypography'], 'Mobile' );
		}
		if ( isset( $attr['descPadding'] ) ) {
			$desc_padding = $attr['descPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' . ' > .premium-person__desc' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Mobile'], $desc_padding['unit'] ) );
		}

		// Style for Social Icon Effect2.
		if ( isset( $attr['socialIconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', ( $attr['socialIconSize']['Mobile'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
			$css->add_property( 'height', ( $attr['socialIconSize']['Mobile'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['socialIconPadding'] ) ) {
			$socialIcon_padding = $attr['socialIconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Mobile'], $socialIcon_padding['unit'] ) );
		}
		if ( isset( $attr['socialIconMargin'] ) ) {
			$socialIcon_margin = $attr['socialIconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Mobile'], $socialIcon_margin['unit'] ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Mobile'], 'px' ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Mobile'], 'px' ) );
		}

		// Style for Social Icon Effect1.
		if ( isset( $attr['socialIconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', ( $attr['socialIconSize']['Mobile'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
			$css->add_property( 'height', ( $attr['socialIconSize']['Mobile'] . ( isset( $attr['socialIconSize']['unit'] ) ? $attr['socialIconSize']['unit'] : 'px' ) . '!important' ) );
		}
		if ( isset( $attr['socialIconPadding'] ) ) {
			$socialIcon_padding = $attr['socialIconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Mobile'], $socialIcon_padding['unit'] ) );
		}
		if ( isset( $attr['socialIconMargin'] ) ) {
			$socialIcon_margin = $attr['socialIconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Mobile'], $socialIcon_margin['unit'] ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Mobile'], 'px' ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' );
			$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Mobile'], 'px' ) );
		}

		$css->stop_media_query();
		return $css->css_output();

	}

		/**
		 * Get Heading Block Content & Style
		 *
		 * @access public
		 *
		 * @param string $attributes option For attribute.
		 * @param string $contnet for content of Block.
		 */
	public function get_heading_css( $attributes, $content ) {

		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {
			$unique_id = "#premium-title-{$attributes['block_id']}";
		}

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}

		$style_unique_id = rand( 100, 10000 );

		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-lottie',
				PREMIUM_BLOCKS_URL . 'assets/js/lottie.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);

			wp_enqueue_script(
				'pbg-heading',
				PREMIUM_BLOCKS_URL . 'assets/js/heading.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_id = 'pbg-blocks-style' . esc_attr( $style_unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'heading', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_heading_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'heading', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;
	}

	/**
	 * Get Heading Block CSS
	 *
	 * Return Frontend CSS for Heading Block.
	 *
	 * @access public
	 *
	 * @param string $attr option attribute.
	 * @param string $unique_id option For  block ID.
	 */
	public function get_heading_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		// Align.
		if ( isset( $attr['align'] ) ) {
			$align = $css->get_responsive_css( $attr['align'], 'Desktop' );

			$css->set_selector( $unique_id . ', ' . $unique_id . ' .premium-title' );
			$css->add_property( 'text-align', $align );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Desktop'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Desktop'], $title_margin['unit'] ) );
		}

		if ( isset( $attr['titleTypography'] ) ) {
			$typography_title = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header, ' . $unique_id . ' .premium-title-style9__wrap .premium-letters-container .premium-title-style9-letter' );
			$css->render_typography( $typography_title, 'Desktop' );
		}

		if ( isset( $attr['titleBorder'] ) ) {
			$title_border        = $attr['titleBorder'];
			$title_border_width  = $attr['titleBorder']['borderWidth'];
			$title_border_radius = $attr['titleBorder']['borderRadius'];
			$border_left_width   = $css->get_responsive_value( $title_border_width, 'left', 'Desktop', 'px' );
			$border_bottom_width = $css->get_responsive_value( $title_border_width, 'bottom', 'Desktop', 'px' );

			$css->set_selector( $unique_id . ' .premium-title .style1 .premium-title-header' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Desktop'], 'px' ) );
			if ( $border_left_width && 1 <= $border_left_width ) {
				$css->add_property( 'border-left', "{$border_left_width} {$title_border['borderType']} {$title_border['borderColor']}!important" );
			}
			$css->set_selector( $unique_id . ' .premium-title .style2, ' . $unique_id . ' .premium-title .style4, ' . $unique_id . ' .premium-title .style5, ' . $unique_id . ' .premium-title .style6' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Desktop'], 'px' ) );
			if ( $border_bottom_width && 0 <= $border_bottom_width ) {
				$css->add_property( 'border-bottom', "{$border_bottom_width} {$title_border['borderType']} {$title_border['borderColor']}!important" );
			}
		}

		// Style for icon.
		if ( isset( $attr['iconPadding'] ) ) {
			$icon_padding = $attr['iconPadding'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-icon' );
			$css->add_property( 'padding', $css->render_spacing( $icon_padding['Desktop'], $icon_padding['unit'] ) );
		}

		if ( isset( $attr['iconMargin'] ) ) {
			$icon_margin = $attr['iconMargin'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-icon' );
			$css->add_property( 'margin', $css->render_spacing( $icon_margin['Desktop'], $icon_margin['unit'] ) );
		}

		if ( isset( $attr['iconBorder'] ) ) {
			$icon_border        = $attr['iconBorder'];
			$icon_border_width  = $attr['iconBorder']['borderWidth'];
			$icon_border_radius = $attr['iconBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['iconSize'] ) ) {
			$icon_size = $attr['iconSize'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) . '!important' );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-lottie-animation' . ' > svg' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Desktop', $icon_size['unit'] ) );
		}

		// stripeStyles
		if ( isset( $attr['stripeTopSpacing'] ) ) {
			$stripe_top_spacing = $attr['stripeTopSpacing'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-top', $css->get_responsive_size_value( $stripe_top_spacing, 'Desktop', $stripe_top_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeBottomSpacing'] ) ) {
			$stripe_bottom_spacing = $attr['stripeBottomSpacing'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-bottom', $css->get_responsive_size_value( $stripe_bottom_spacing, 'Desktop', $stripe_bottom_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeWidth'] ) ) {
			$stripe_width = $attr['stripeWidth'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'width', $css->get_responsive_size_value( $stripe_width, 'Desktop', $stripe_width['unit'] ) );
		}

		if ( isset( $attr['stripeHeight'] ) ) {
			$stripe_height = $attr['stripeHeight'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'height', $css->get_responsive_size_value( $stripe_height, 'Desktop', $stripe_height['unit'] ) );
		}

		// background text

		if ( isset( $attr['verticalText'] ) ) {
			$vertical_text = $attr['verticalText'];

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'top', $css->get_responsive_size_value( $vertical_text, 'Desktop', $vertical_text['unit'] ) );
		}

		if ( isset( $attr['horizontalText'] ) ) {
			$horizontal_text = $attr['horizontalText'];

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'left', $css->get_responsive_size_value( $horizontal_text, 'Desktop', $horizontal_text['unit'] ) );
		}

		if ( isset( $attr['rotateText'] ) ) {
			$rotate_text = $attr['rotateText'];
			$value       = $css->get_responsive_css( $rotate_text, 'Desktop' );

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'transform', "rotate({$value}deg)!important" );
		}

		if ( isset( $attr['strokeFull'] ) ) {
			$stroke_full = $attr['strokeFull'];

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( '-webkit-text-stroke-width', $css->get_responsive_css( $stroke_full, 'Desktop' ) );
		}

		if ( isset( $attr['textTypography'] ) ) {
			$text_typography = $attr['textTypography'];

			$css->set_selector( $unique_id . ' .premium-title-bg-text:before' );
			$css->render_typography( $text_typography, 'Desktop' );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Align.
		if ( isset( $attr['align'] ) ) {
			$align = $css->get_responsive_css( $attr['align'], 'Tablet' );

			$css->set_selector( $unique_id . ', ' . $unique_id . ' .premium-title' );
			$css->add_property( 'text-align', $align );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Tablet'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Tablet'], $title_margin['unit'] ) );
		}

		if ( isset( $attr['titleTypography'] ) ) {
			$typography_title = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header, ' . $unique_id . ' .premium-title-style9__wrap .premium-letters-container .premium-title-style9-letter' );
			$css->render_typography( $typography_title, 'Tablet' );
		}

		if ( isset( $attr['titleBorder'] ) ) {
			$title_border        = $attr['titleBorder'];
			$title_border_width  = $attr['titleBorder']['borderWidth'];
			$title_border_radius = $attr['titleBorder']['borderRadius'];
			$border_left_width   = $css->get_responsive_value( $title_border_width, 'left', 'Tablet', 'px' );
			$border_bottom_width = $css->get_responsive_value( $title_border_width, 'bottom', 'Tablet', 'px' );

			$css->set_selector( $unique_id . ' .premium-title .style1 .premium-title-header' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Tablet'], 'px' ) );
			if ( $border_left_width && 1 <= $border_left_width ) {
				$css->add_property( 'border-left', "{$border_left_width} {$title_border['borderType']} {$title_border['borderColor']}!important" );
			}
			$css->set_selector( $unique_id . ' .premium-title .style2, ' . $unique_id . ' .premium-title .style4, ' . $unique_id . ' .premium-title .style5, ' . $unique_id . ' .premium-title .style6' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Tablet'], 'px' ) );
			if ( $border_bottom_width && 0 <= $border_bottom_width ) {
				$css->add_property( 'border-bottom', "{$border_bottom_width} {$title_border['borderType']} {$title_border['borderColor']}!important" );
			}
		}

		// Style for icon.
		if ( isset( $attr['iconPadding'] ) ) {
			$icon_padding = $attr['iconPadding'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-icon' );
			$css->add_property( 'padding', $css->render_spacing( $icon_padding['Tablet'], $icon_padding['unit'] ) );
		}

		if ( isset( $attr['iconMargin'] ) ) {
			$icon_margin = $attr['iconMargin'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-icon' );
			$css->add_property( 'margin', $css->render_spacing( $icon_margin['Tablet'], $icon_margin['unit'] ) );
		}

		if ( isset( $attr['iconBorder'] ) ) {
			$icon_border        = $attr['iconBorder'];
			$icon_border_width  = $attr['iconBorder']['borderWidth'];
			$icon_border_radius = $attr['iconBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['iconSize'] ) ) {
			$icon_size = $attr['iconSize'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) . '!important' );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-lottie-animation' . ' > svg' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Tablet', $icon_size['unit'] ) );
		}

		// stripeStyles
		if ( isset( $attr['stripeTopSpacing'] ) ) {
			$stripe_top_spacing = $attr['stripeTopSpacing'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-top', $css->get_responsive_size_value( $stripe_top_spacing, 'Tablet', $stripe_top_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeBottomSpacing'] ) ) {
			$stripe_bottom_spacing = $attr['stripeBottomSpacing'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-bottom', $css->get_responsive_size_value( $stripe_bottom_spacing, 'Tablet', $stripe_bottom_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeWidth'] ) ) {
			$stripe_width = $attr['stripeWidth'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'width', $css->get_responsive_size_value( $stripe_width, 'Tablet', $stripe_width['unit'] ) );
		}

		if ( isset( $attr['stripeHeight'] ) ) {
			$stripe_height = $attr['stripeHeight'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'height', $css->get_responsive_size_value( $stripe_height, 'Tablet', $stripe_height['unit'] ) );
		}

		// background text

		if ( isset( $attr['verticalText'] ) ) {
			$vertical_text = $attr['verticalText'];

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'top', $css->get_responsive_size_value( $vertical_text, 'Tablet', $vertical_text['unit'] ) );
		}

		if ( isset( $attr['horizontalText'] ) ) {
			$horizontal_text = $attr['horizontalText'];

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'left', $css->get_responsive_size_value( $horizontal_text, 'Tablet', $horizontal_text['unit'] ) );
		}

		if ( isset( $attr['rotateText'] ) ) {
			$rotate_text = $attr['rotateText'];
			$value       = $css->get_responsive_css( $rotate_text, 'Tablet' );

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'transform', "rotate({$value}deg)!important" );
		}

		if ( isset( $attr['strokeFull'] ) ) {
			$stroke_full = $attr['strokeFull'];

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( '-webkit-text-stroke-width', $css->get_responsive_css( $stroke_full, 'Tablet' ) );
		}

		if ( isset( $attr['textTypography'] ) ) {
			$text_typography = $attr['textTypography'];

			$css->set_selector( $unique_id . ' .premium-title-bg-text:before' );
			$css->render_typography( $text_typography, 'Tablet' );
		}

		$css->stop_media_query();

		$css->start_media_query( $media_query['mobile'] );

		// Align.
		if ( isset( $attr['align'] ) ) {
			$align = $css->get_responsive_css( $attr['align'], 'Mobile' );

			$css->set_selector( $unique_id . ', ' . $unique_id . ' .premium-title' );
			$css->add_property( 'text-align', $align );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Mobile'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Mobile'], $title_margin['unit'] ) );
		}

		if ( isset( $attr['titleTypography'] ) ) {
			$typography_title = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header, ' . $unique_id . ' .premium-title-style9__wrap .premium-letters-container .premium-title-style9-letter' );
			$css->render_typography( $typography_title, 'Mobile' );
		}

		if ( isset( $attr['titleBorder'] ) ) {
			$title_border        = $attr['titleBorder'];
			$title_border_width  = $attr['titleBorder']['borderWidth'];
			$title_border_radius = $attr['titleBorder']['borderRadius'];
			$border_left_width   = $css->get_responsive_value( $title_border_width, 'left', 'Mobile', 'px' );
			$border_bottom_width = $css->get_responsive_value( $title_border_width, 'bottom', 'Mobile', 'px' );

			$css->set_selector( $unique_id . ' .premium-title .style1 .premium-title-header' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Mobile'], 'px' ) );
			if ( $border_left_width && 1 <= $border_left_width ) {
				$css->add_property( 'border-left', "{$border_left_width} {$title_border['borderType']} {$title_border['borderColor']}!important" );
			}
			$css->set_selector( $unique_id . ' .premium-title .style2, ' . $unique_id . ' .premium-title .style4, ' . $unique_id . ' .premium-title .style5, ' . $unique_id . ' .premium-title .style6' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Mobile'], 'px' ) );
			if ( $border_bottom_width && 0 <= $border_bottom_width ) {
				$css->add_property( 'border-bottom', "{$border_bottom_width} {$title_border['borderType']} {$title_border['borderColor']}!important" );
			}
		}

		// Style for icon.
		if ( isset( $attr['iconPadding'] ) ) {
			$icon_padding = $attr['iconPadding'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-icon' );
			$css->add_property( 'padding', $css->render_spacing( $icon_padding['Mobile'], $icon_padding['unit'] ) );
		}

		if ( isset( $attr['iconMargin'] ) ) {
			$icon_margin = $attr['iconMargin'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-icon' );
			$css->add_property( 'margin', $css->render_spacing( $icon_margin['Mobile'], $icon_margin['unit'] ) );
		}

		if ( isset( $attr['iconBorder'] ) ) {
			$icon_border        = $attr['iconBorder'];
			$icon_border_width  = $attr['iconBorder']['borderWidth'];
			$icon_border_radius = $attr['iconBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['iconSize'] ) ) {
			$icon_size = $attr['iconSize'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) . '!important' );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-lottie-animation' . ' > svg' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > img' );
			$css->add_property( 'width', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) );
			$css->add_property( 'height', $css->get_responsive_size_value( $icon_size, 'Mobile', $icon_size['unit'] ) );
		}

		// stripeStyles
		if ( isset( $attr['stripeTopSpacing'] ) ) {
			$stripe_top_spacing = $attr['stripeTopSpacing'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-top', $css->get_responsive_size_value( $stripe_top_spacing, 'Mobile', $stripe_top_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeBottomSpacing'] ) ) {
			$stripe_bottom_spacing = $attr['stripeBottomSpacing'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-bottom', $css->get_responsive_size_value( $stripe_bottom_spacing, 'Mobile', $stripe_bottom_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeWidth'] ) ) {
			$stripe_width = $attr['stripeWidth'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'width', $css->get_responsive_size_value( $stripe_width, 'Mobile', $stripe_width['unit'] ) );
		}

		if ( isset( $attr['stripeHeight'] ) ) {
			$stripe_height = $attr['stripeHeight'];

			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'height', $css->get_responsive_size_value( $stripe_height, 'Mobile', $stripe_height['unit'] ) );
		}

		// background text

		if ( isset( $attr['verticalText'] ) ) {
			$vertical_text = $attr['verticalText'];

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'top', $css->get_responsive_size_value( $vertical_text, 'Mobile', $vertical_text['unit'] ) );
		}

		if ( isset( $attr['horizontalText'] ) ) {
			$horizontal_text = $attr['horizontalText'];

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'left', $css->get_responsive_size_value( $horizontal_text, 'Mobile', $horizontal_text['unit'] ) );
		}

		if ( isset( $attr['rotateText'] ) ) {
			$rotate_text = $attr['rotateText'];
			$value       = $css->get_responsive_css( $rotate_text, 'Mobile' );

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'transform', "rotate({$value}deg)!important" );
		}

		if ( isset( $attr['strokeFull'] ) ) {
			$stroke_full = $attr['strokeFull'];

			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( '-webkit-text-stroke-width', $css->get_responsive_css( $stroke_full, 'Mobile' ) );
		}

		if ( isset( $attr['textTypography'] ) ) {
			$text_typography = $attr['textTypography'];

			$css->set_selector( $unique_id . ' .premium-title-bg-text:before' );
			$css->render_typography( $text_typography, 'Mobile' );
		}

		$css->stop_media_query();
		return $css->css_output();
	}

		/**
		 * Get Row Block Content & Style
		 *
		 * @access public
		 *
		 * @param string $attributes option For attribute.
		 * @param string $contnet for content of Block.
		 */
	public function get_row_css( $attributes, $content ) {
		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {

			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
		}

		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-animation',
				PREMIUM_BLOCKS_URL . 'assets/js/animation.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);

		}
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'heading', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_row_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'row', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;
	}

			/**
			 * Get Heading Block CSS
			 *
			 * Return Frontend CSS for Heading Block.
			 *
			 * @access public
			 *
			 * @param string $attr option attribute.
			 * @param string $unique_id option For  block ID.
			 */
	public function get_row_css_style( $attr, $unique_id ) {

		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_color( $attr['minHeight']['Desktop'] . $attr['minHeight']['unit'] ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->render_color( $attr['direction']['Desktop'] ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->render_color( $attr['alignItems']['Desktop'] ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->render_color( $attr['justifyItems']['Desktop'] ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->render_color( $attr['wrapItems']['Desktop'] ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->render_color( $attr['alignContent']['Desktop'] ) );
		}

		$css->add_property( 'row-gap', $css->render_color( isset( $attr['rowGutter']['Desktop'] ) ? $attr['rowGutter']['Desktop'] . $attr['rowGutter']['unit'] : '20px' ) );
		$css->add_property( 'column-gap', $css->render_color( isset( $attr['rowGutter']['Desktop'] ) ? $attr['columnGutter']['Desktop'] . $attr['columnGutter']['unit'] : '20px' ) );
		$css->set_selector( '.wp-block-premium-container' . $unique_id );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_color( $attr['minHeight']['Desktop'] . $attr['minHeight']['unit'] ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->render_color( $attr['direction']['Desktop'] ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->render_color( $attr['alignItems']['Desktop'] ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->render_color( $attr['justifyItems']['Desktop'] ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->render_color( $attr['wrapItems']['Desktop'] ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->render_color( $attr['alignContent']['Desktop'] ) );
		}
		if ( isset( $attr['colWidth'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-is-root-container .premium-block-' . $unique_id );
			$css->add_property( 'max-width', $css->render_color( $attr['colWidth']['Desktop'] . $attr['colWidth']['unit'] ) );
			$css->add_property( 'width', $css->render_color( $attr['colWidth']['Desktop'] . $attr['colWidth']['unit'] ) );
		}
		if ( isset( $attr['shapeTop'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-shape svg' );
			$css->add_property( 'width', $css->render_color( $attr['shapeTop']['width']['Desktop'] . $attr['shapeTop']['width']['unit'] ) );
			$css->add_property( 'height', $css->render_color( $attr['shapeTop']['height']['Desktop'] . $attr['shapeTop']['height']['unit'] ) );
		}
		if ( isset( $attr['shapeBottom'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-bottom svg' );
			$css->add_property( 'width', $css->render_color( $attr['shapeBottom']['width']['Desktop'] . $attr['shapeBottom']['width']['unit'] ) );
			$css->add_property( 'height', $css->render_color( $attr['shapeBottom']['height']['Desktop'] . $attr['shapeBottom']['height']['unit'] ) );
		}
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'padding-top', $css->render_color( $padding['Desktop']['top'] . $padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $padding['Desktop']['right'] . $padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $padding['Desktop']['bottom'] . $padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $padding['Desktop']['left'] . $padding['unit'] ) );
		}
		if ( isset( $attr['margin'] ) ) {
			$margin = $attr['margin'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'margin-top', $css->render_color( $margin['Desktop']['top'] . $margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $margin['Desktop']['right'] . $margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $margin['Desktop']['bottom'] . $margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $margin['Desktop']['left'] . $margin['unit'] ) );
		}
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $border_radius, 'left', 'Desktop', 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_color( $attr['minHeight']['Tablet'] . $attr['minHeight']['unit'] ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->render_color( $attr['direction']['Tablet'] ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->render_color( $attr['alignItems']['Tablet'] ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->render_color( $attr['justifyItems']['Tablet'] ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->render_color( $attr['wrapItems']['Tablet'] ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->render_color( $attr['alignContent']['Tablet'] ) );
		}
		$css->add_property( 'row-gap', $css->render_color( isset( $attr['rowGutter']['Tablet'] ) ? $attr['rowGutter']['Tablet'] . $attr['rowGutter']['unit'] : '20px' ) );
		$css->add_property( 'column-gap', $css->render_color( isset( $attr['rowGutter']['Tablet'] ) ? $attr['columnGutter']['Tablet'] . $attr['columnGutter']['unit'] : '20px' ) );
		$css->set_selector( '.wp-block-premium-container' . $unique_id );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_color( $attr['minHeight']['Tablet'] . $attr['minHeight']['unit'] ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->render_color( $attr['direction']['Tablet'] ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->render_color( $attr['alignItems']['Tablet'] ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->render_color( $attr['justifyItems']['Tablet'] ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->render_color( $attr['wrapItems']['Tablet'] ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->render_color( $attr['alignContent']['Tablet'] ) );
		}
		if ( isset( $attr['colWidth'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-is-root-container .premium-block-' . $unique_id );
			$css->add_property( 'max-width', $css->render_color( $attr['colWidth']['Tablet'] . $attr['colWidth']['unit'] ) );
			$css->add_property( 'width', $css->render_color( $attr['colWidth']['Tablet'] . $attr['colWidth']['unit'] ) );
		}
		if ( isset( $attr['shapeTop'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-shape svg' );
			$css->add_property( 'width', $css->render_color( 'calc(' . $attr['shapeTop']['width']['Tablet'] . '% + 1.3px )' ) );
			$css->add_property( 'height', $css->render_color( $attr['shapeTop']['height']['Tablet'] . $attr['shapeTop']['height']['unit'] ) );
		}
		if ( isset( $attr['shapeBottom'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-bottom svg' );
			$css->add_property( 'width', $css->render_color( 'calc(' . $attr['shapeBottom']['width']['Tablet'] . '% + 1.3px )' ) );
			$css->add_property( 'height', $css->render_color( $attr['shapeBottom']['height']['Tablet'] . $attr['shapeBottom']['height']['unit'] ) );
		}
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'padding-top', $css->render_color( $padding['Tablet']['top'] . $padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $padding['Tablet']['right'] . $padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $padding['Tablet']['bottom'] . $padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $padding['Tablet']['left'] . $padding['unit'] ) );
		}
		if ( isset( $attr['margin'] ) ) {
			$margin = $attr['margin'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'margin-top', $css->render_color( $margin['Tablet']['top'] . $margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $margin['Tablet']['right'] . $margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $margin['Tablet']['bottom'] . $margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $margin['Tablet']['left'] . $margin['unit'] ) );
		}
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $border_radius, 'left', 'Tablet', 'px' ) );
		}

		$css->stop_media_query();

		$css->start_media_query( $media_query['mobile'] );

		$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_color( $attr['minHeight']['Mobile'] . $attr['minHeight']['unit'] ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->render_color( $attr['direction']['Mobile'] ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->render_color( $attr['alignItems']['Mobile'] ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->render_color( $attr['justifyItems']['Mobile'] ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->render_color( $attr['wrapItems']['Mobile'] ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->render_color( $attr['alignContent']['Mobile'] ) );
		}
		$css->add_property( 'row-gap', $css->render_color( isset( $attr['rowGutter']['Mobile'] ) ? $attr['rowGutter']['Mobile'] . $attr['rowGutter']['unit'] : '20px' ) );
		$css->add_property( 'column-gap', $css->render_color( isset( $attr['rowGutter']['Mobile'] ) ? $attr['columnGutter']['Mobile'] . $attr['columnGutter']['unit'] : '20px' ) );
		$css->set_selector( '.wp-block-premium-container' . $unique_id );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_color( $attr['minHeight']['Mobile'] . $attr['minHeight']['unit'] ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->render_color( $attr['direction']['Mobile'] ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->render_color( $attr['alignItems']['Mobile'] ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->render_color( $attr['justifyItems']['Mobile'] ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->render_color( $attr['wrapItems']['Mobile'] ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->render_color( $attr['alignContent']['Mobile'] ) );
		}
		if ( isset( $attr['colWidth'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-is-root-container .premium-block-' . $unique_id );
			$css->add_property( 'max-width', $css->render_color( $attr['colWidth']['Mobile'] . $attr['colWidth']['unit'] ) );
			$css->add_property( 'width', $css->render_color( $attr['colWidth']['Mobile'] . $attr['colWidth']['unit'] ) );
		}
		if ( isset( $attr['shapeTop'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-shape svg' );
			$css->add_property( 'width', $css->render_color( 'calc(' . $attr['shapeTop']['width']['Mobile'] . '% + 1.3px )' ) );
			$css->add_property( 'height', $css->render_color( $attr['shapeTop']['height']['Mobile'] . $attr['shapeTop']['height']['unit'] ) );
		}
		if ( isset( $attr['shapeBottom'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-bottom svg' );
			$css->add_property( 'width', $css->render_color( 'calc(' . $attr['shapeBottom']['width']['Mobile'] . '% + 1.3px )' ) );
			$css->add_property( 'height', $css->render_color( $attr['shapeBottom']['height']['Mobile'] . $attr['shapeBottom']['height']['unit'] ) );
		}
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'padding-top', $css->render_color( $padding['Mobile']['top'] . $padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $padding['Mobile']['right'] . $padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $padding['Mobile']['bottom'] . $padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $padding['Mobile']['left'] . $padding['unit'] ) );
		}
		if ( isset( $attr['margin'] ) ) {
			$margin = $attr['margin'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'margin-top', $css->render_color( $margin['Mobile']['top'] . $margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $margin['Mobile']['right'] . $margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $margin['Mobile']['bottom'] . $margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $margin['Mobile']['left'] . $margin['unit'] ) );
		}
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $attr['border']['borderWidth'];
			$border_radius = $attr['border']['borderRadius'];

			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $border_radius, 'left', 'Mobile', 'px' ) );
		}
		$css->stop_media_query();
		return $css->css_output();
	}

		/**
		 * Get Maps Block Content & Style
		 *
		 * @access public
		 *
		 * @param string $attributes option For attribute.
		 * @param string $contnet for content of Block.
		 */
	public function get_maps_css( $attributes, $content ) {

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}

		$style_unique_id = rand( 100, 10000 );

		$style_id = 'pbg-blocks-style-' . esc_attr( $style_unique_id );

		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'maps', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_maps_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'maps', $unique_id ) ) {
					$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
				} else {
					$this->render_inline_css( $css, $style_id, true );
				}
			}
		};
		return $content;
	}

		/**
		 * Get Maps Block CSS
		 *
		 * Return Frontend CSS for Maps Block.
		 *
		 * @access public
		 *
		 * @param string $attr option attribute.
		 * @param string $unique_id option For  block ID.
		 */
	public function get_maps_css_style( $attr, $unique_id ) {
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		// Map.
		if ( isset( $attr['mapPadding'] ) ) {
			$map_padding = $attr['mapPadding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding-top', $css->render_color( $map_padding['Desktop']['top'] . $map_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $map_padding['Desktop']['right'] . $map_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $map_padding['Desktop']['bottom'] . $map_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $map_padding['Desktop']['left'] . $map_padding['unit'] ) );
		}

		if ( isset( $attr['mapMargin'] ) ) {
			$map_margin = $attr['mapMargin'];
			$css->set_selector( $unique_id );
			$css->add_property( 'margin-top', $css->render_color( $map_margin['Desktop']['top'] . $map_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $map_margin['Desktop']['right'] . $map_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $map_margin['Desktop']['bottom'] . $map_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $map_margin['Desktop']['left'] . $map_margin['unit'] ) );
		}

		if ( isset( $attr['mapBorder'] ) ) {
			$map_border        = $attr['mapBorder'];
			$map_border_width  = $attr['mapBorder']['borderWidth'];
			$map_border_radius = $attr['mapBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $map_border_width, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $map_border_width, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $map_border_width, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $map_border_width, 'left', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $map_border_radius, 'top', 'Desktop', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $map_border_radius, 'right', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $map_border_radius, 'bottom', 'Desktop', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $map_border_radius, 'left', 'Desktop', 'px' ) );
		}
		// Title.
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];
			$font_size        = $title_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $title_typography['fontFamily'] ) ? $title_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $title_typography['fontWeight'] ) ? $title_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Tablet', $font_size['unit'] ) );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'padding-top', $css->render_color( $title_padding['Desktop']['top'] . $title_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $title_padding['Desktop']['right'] . $title_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $title_padding['Desktop']['bottom'] . $title_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $title_padding['Desktop']['left'] . $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'margin-top', $css->render_color( $title_margin['Desktop']['top'] . $title_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $title_margin['Desktop']['right'] . $title_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $title_margin['Desktop']['bottom'] . $title_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $title_margin['Desktop']['left'] . $title_margin['unit'] ) );
		}
		// Description.
		if ( isset( $attr['descriptionTypography'] ) ) {
			$description_typography = $attr['descriptionTypography'];
			$font_size              = $description_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $description_typography['fontFamily'] ) ? $description_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $description_typography['fontWeight'] ) ? $description_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Tablet', $font_size['unit'] ) );
		}

		if ( isset( $attr['descriptionPadding'] ) ) {
			$description_padding = $attr['descriptionPadding'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'padding-top', $css->render_color( $description_padding['Desktop']['top'] . $description_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $description_padding['Desktop']['right'] . $description_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $description_padding['Desktop']['bottom'] . $description_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $description_padding['Desktop']['left'] . $description_padding['unit'] ) );
		}

		if ( isset( $attr['descriptionMargin'] ) ) {
			$description_margin = $attr['descriptionMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'margin-top', $css->render_color( $description_margin['Desktop']['top'] . $description_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $description_margin['Desktop']['right'] . $description_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $description_margin['Desktop']['bottom'] . $description_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $description_margin['Desktop']['left'] . $description_margin['unit'] ) );
		}

		if ( isset( $attr['boxAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['boxAlign'], 'Desktop' );

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'text-align', $align );
		}
		$css->start_media_query( $media_query['tablet'] );

		// Map.
		if ( isset( $attr['mapPadding'] ) ) {
			$map_padding = $attr['mapPadding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding-top', $css->render_color( $map_padding['Tablet']['top'] . $map_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $map_padding['Tablet']['right'] . $map_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $map_padding['Tablet']['bottom'] . $map_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $map_padding['Tablet']['left'] . $map_padding['unit'] ) );
		}

		if ( isset( $attr['mapMargin'] ) ) {
			$map_margin = $attr['mapMargin'];
			$css->set_selector( $unique_id );
			$css->add_property( 'margin-top', $css->render_color( $map_margin['Tablet']['top'] . $map_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $map_margin['Tablet']['right'] . $map_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $map_margin['Tablet']['bottom'] . $map_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $map_margin['Tablet']['left'] . $map_margin['unit'] ) );
		}

		if ( isset( $attr['mapBorder'] ) ) {
			$map_border        = $attr['mapBorder'];
			$map_border_width  = $attr['mapBorder']['borderWidth'];
			$map_border_radius = $attr['mapBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $map_border_width, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $map_border_width, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $map_border_width, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $map_border_width, 'left', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $map_border_radius, 'top', 'Tablet', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $map_border_radius, 'right', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $map_border_radius, 'bottom', 'Tablet', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $map_border_radius, 'left', 'Tablet', 'px' ) );
		}
		// Title.
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];
			$font_size        = $title_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $title_typography['fontFamily'] ) ? $title_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $title_typography['fontWeight'] ) ? $title_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Tablet', $font_size['unit'] ) );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'padding-top', $css->render_color( $title_padding['Tablet']['top'] . $title_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $title_padding['Tablet']['right'] . $title_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $title_padding['Tablet']['bottom'] . $title_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $title_padding['Tablet']['left'] . $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'margin-top', $css->render_color( $title_margin['Tablet']['top'] . $title_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $title_margin['Tablet']['right'] . $title_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $title_margin['Tablet']['bottom'] . $title_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $title_margin['Tablet']['left'] . $title_margin['unit'] ) );
		}
		// Description.
		if ( isset( $attr['descriptionTypography'] ) ) {
			$description_typography = $attr['descriptionTypography'];
			$font_size              = $description_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $description_typography['fontFamily'] ) ? $description_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $description_typography['fontWeight'] ) ? $description_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Tablet', $font_size['unit'] ) );
		}

		if ( isset( $attr['descriptionPadding'] ) ) {
			$description_padding = $attr['descriptionPadding'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'padding-top', $css->render_color( $description_padding['Tablet']['top'] . $description_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $description_padding['Tablet']['right'] . $description_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $description_padding['Tablet']['bottom'] . $description_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $description_padding['Tablet']['left'] . $description_padding['unit'] ) );
		}

		if ( isset( $attr['descriptionMargin'] ) ) {
			$description_margin = $attr['descriptionMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'margin-top', $css->render_color( $description_margin['Tablet']['top'] . $description_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $description_margin['Tablet']['right'] . $description_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $description_margin['Tablet']['bottom'] . $description_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $description_margin['Tablet']['left'] . $description_margin['unit'] ) );
		}

		if ( isset( $attr['boxAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['boxAlign'], 'Tablet' );

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'text-align', $align );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Map.
		if ( isset( $attr['mapPadding'] ) ) {
			$map_padding = $attr['mapPadding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding-top', $css->render_color( $map_padding['Mobile']['top'] . $map_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $map_padding['Mobile']['right'] . $map_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $map_padding['Mobile']['bottom'] . $map_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $map_padding['Mobile']['left'] . $map_padding['unit'] ) );
		}

		if ( isset( $attr['mapMargin'] ) ) {
			$map_margin = $attr['mapMargin'];
			$css->set_selector( $unique_id );
			$css->add_property( 'margin-top', $css->render_color( $map_margin['Mobile']['top'] . $map_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $map_margin['Mobile']['right'] . $map_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $map_margin['Mobile']['bottom'] . $map_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $map_margin['Mobile']['left'] . $map_margin['unit'] ) );
		}

		if ( isset( $attr['mapBorder'] ) ) {
			$map_border        = $attr['mapBorder'];
			$map_border_width  = $attr['mapBorder']['borderWidth'];
			$map_border_radius = $attr['mapBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-top-width', $css->get_responsive_value( $map_border_width, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-right-width', $css->get_responsive_value( $map_border_width, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-width', $css->get_responsive_value( $map_border_width, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-left-width', $css->get_responsive_value( $map_border_width, 'left', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-left-radius', $css->get_responsive_value( $map_border_radius, 'top', 'Mobile', 'px' ) );
			$css->add_property( 'border-top-right-radius', $css->get_responsive_value( $map_border_radius, 'right', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-left-radius', $css->get_responsive_value( $map_border_radius, 'bottom', 'Mobile', 'px' ) );
			$css->add_property( 'border-bottom-right-radius', $css->get_responsive_value( $map_border_radius, 'left', 'Mobile', 'px' ) );
		}
		// Title.
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];
			$font_size        = $title_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $title_typography['fontFamily'] ) ? $title_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $title_typography['fontWeight'] ) ? $title_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Mobile', $font_size['unit'] ) );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'padding-top', $css->render_color( $title_padding['Mobile']['top'] . $title_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $title_padding['Mobile']['right'] . $title_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $title_padding['Mobile']['bottom'] . $title_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $title_padding['Mobile']['left'] . $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'margin-top', $css->render_color( $title_margin['Mobile']['top'] . $title_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $title_margin['Mobile']['right'] . $title_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $title_margin['Mobile']['bottom'] . $title_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $title_margin['Mobile']['left'] . $title_margin['unit'] ) );
		}
		// Description.
		if ( isset( $attr['descriptionTypography'] ) ) {
			$description_typography = $attr['descriptionTypography'];
			$font_size              = $description_typography['fontSize'];

			$this->add_gfont(
				array(
					'fontFamily'  => ( isset( $description_typography['fontFamily'] ) ? $description_typography['fontFamily'] : '' ),
					'fontVariant' => ( isset( $description_typography['fontWeight'] ) ? $description_typography['fontWeight'] : '' ),
				)
			);

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'font-size', $css->get_responsive_size_value( $font_size, 'Mobile', $font_size['unit'] ) );
		}

		if ( isset( $attr['descriptionPadding'] ) ) {
			$description_padding = $attr['descriptionPadding'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'padding-top', $css->render_color( $description_padding['Mobile']['top'] . $description_padding['unit'] ) );
			$css->add_property( 'padding-right', $css->render_color( $description_padding['Mobile']['right'] . $description_padding['unit'] ) );
			$css->add_property( 'padding-bottom', $css->render_color( $description_padding['Mobile']['bottom'] . $description_padding['unit'] ) );
			$css->add_property( 'padding-left', $css->render_color( $description_padding['Mobile']['left'] . $description_padding['unit'] ) );
		}

		if ( isset( $attr['descriptionMargin'] ) ) {
			$description_margin = $attr['descriptionMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'margin-top', $css->render_color( $description_margin['Mobile']['top'] . $description_margin['unit'] ) );
			$css->add_property( 'margin-right', $css->render_color( $description_margin['Mobile']['right'] . $description_margin['unit'] ) );
			$css->add_property( 'margin-bottom', $css->render_color( $description_margin['Mobile']['bottom'] . $description_margin['unit'] ) );
			$css->add_property( 'margin-left', $css->render_color( $description_margin['Mobile']['left'] . $description_margin['unit'] ) );
		}

		if ( isset( $attr['boxAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['boxAlign'], 'Mobile' );

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'text-align', $align );
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
