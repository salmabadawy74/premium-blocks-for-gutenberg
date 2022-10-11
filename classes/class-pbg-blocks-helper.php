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
		self::$blocks = apply_filters( 'pb_options', get_option( 'pb_options', array() ) );
		// Gets Plugin Admin Settings.

		self::$config = apply_filters( 'pbg_blocks_settings', get_option( 'pbg_blocks_settings', array() ) );
		$allow_json   = isset( self::$config['premium-upload-json'] ) ? self::$config['premium-upload-json'] : true;
		if ( $allow_json ) {
			add_filter( 'upload_mimes', array( $this, 'pbg_mime_types' ) ); // phpcs:ignore WordPressVIPMinimum.Hooks.RestrictedHooks.upload_mimes
			add_filter( 'wp_check_filetype_and_ext', array( $this, 'fix_mime_type_json' ), 75, 4 );
		}
		add_action( 'init', array( $this, 'load_api_settings' ) );
		add_action( 'init', array( $this, 'on_init' ), 20 );
		add_action( 'init', array( $this, 'register_pbg_setting' ) );

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

		add_action( 'wp_enqueue_scripts', array( $this, 'load_dashicons_front_end' ) );

		add_action( 'pbg_get_css_files', array( $this, 'add_blocks_editor_styles' ) );
	}




	public function register_pbg_setting() {
		register_setting(
			'pbg_blocks_settings',
			'pbg_blocks_settings',
			array(
				'type'         => 'object',
				'description'  => __( 'Config Premium Blocks For Gutenberg Api', 'premium-blocks-for-gutenberg' ),
				'show_in_rest' => array(
					'schema' => array(
						'type'       => 'object',
						'properties' => array(
							'premium-map-key'     => array(
								'type' => 'string',
							),
							'premium-map-api'     => array(
								'type' => 'boolean',
							),
							'premium-fa-css'      => array(
								'type' => 'boolean',
							),
							'premium-upload-json' => array(
								'type' => 'boolean',
							),
						),
					),
				),
				'default'      => array(
					'premium-map-key'     => '',
					'premium-map-api'     => false,
					'premium-fa-css'      => false,
					'premium-upload-json' => false,
				),
			)
		);
	}

	/**
	 * Add blocks editor style
	 *
	 * @return void
	 */
	public function add_blocks_editor_styles() {
		Pbg_Style_Generator::pbg_add_css( PREMIUM_BLOCKS_URL . 'assets/css/minified/blockseditor.min.css' );
		if ( is_array( self::$blocks ) && ! empty( self::$blocks ) ) {
			foreach ( self::$blocks as $slug => $value ) {

				if ( false === $value ) {
					continue;
				}

				Pbg_Style_Generator::pbg_add_css( PREMIUM_BLOCKS_URL . "assets/css/minified/{$slug}.min.css" );
			}
		}
	}

	function load_dashicons_front_end() {
		wp_enqueue_style( 'dashicons' );
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
		$shape_path = PREMIUM_BLOCKS_PATH . 'assets/icons/shape';
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
			PREMIUM_BLOCKS_URL . 'assets/css/minified/blockseditor.min.css',
			array( 'wp-edit-blocks' ),
			PREMIUM_BLOCKS_VERSION
		);

		wp_enqueue_style(
			'pbg-editor-panel-css',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/editorpanel.min.css',
			array( 'wp-edit-blocks' ),
			PREMIUM_BLOCKS_VERSION
		);

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
				'admin_url'         => admin_url(),
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
				'description'  => __( 'Allow JSON Upload to Media Library.', 'premium-blocks-for-gutenberg' ),
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

		$api_key         = isset( self::$config['premium-map-key'] ) ? self::$config['premium-map-key'] : '';
		$is_maps_enabled = self::$blocks['maps'];

		$is_section_enabled = self::$blocks['section'];

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
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}
		foreach ( self::$blocks as $slug => $value ) {
			if ( false === $value ) {
				continue;
			}
			if ( $slug === 'breadcrumbs' ) {

				require_once PREMIUM_BLOCKS_PATH . 'blocks-config/breadcrumbs.php';

				register_block_pbg_breadcrumbs();
			} elseif ( $slug === 'trigger' ) {
				wp_enqueue_script(
					'premium-trigger-block-script',
					PREMIUM_BLOCKS_URL . 'assets/js/trigger.js',
					array( 'jquery' ),
					PREMIUM_BLOCKS_VERSION,
					true
				);
				wp_enqueue_style(
					'pbg-trigger-style',
					PREMIUM_BLOCKS_URL . 'assets/css/minified/trigger.min.css',
					array(),
					PREMIUM_BLOCKS_VERSION,
					'all'
				);

				require_once PREMIUM_BLOCKS_PATH . 'blocks-config/trigger.php';

				register_block_pbg_trigger();
			} elseif ( $slug === 'content-switcher' ) {
				require_once PREMIUM_BLOCKS_PATH . 'blocks-config/switcher-child.php';

				require_once PREMIUM_BLOCKS_PATH . 'blocks-config/content-switcher.php';

				register_block_pbg_content_switcher();
			} elseif ( $slug === 'search' ) {
				require_once PREMIUM_BLOCKS_PATH . 'blocks-config/search.php';
				register_block_premium_search();
			}
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
			'premium/section',
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
			'premium/container',
			array(
				'render_callback' => array( $this, 'get_container_css' ),
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
		wp_enqueue_style(
			'pbg-fancyText-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/fancy-text.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-sectionfancy-text',
				PREMIUM_BLOCKS_URL . 'assets/js/fancy-text.js',
				array( 'jquery', 'pbg-typed' ),
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
		 $css                   = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		// FancyText Style
		if ( isset( $attr['fancyTextTypography'] ) ) {
			$fancy_typography = $attr['fancyTextTypography'];
			$fancy_size       = $fancy_typography['fontSize'];

			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .premium-fancy-text-title' );
			$css->render_typography( $attr['fancyTextTypography'], 'Desktop' );
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .typed-cursor' );
			$css->add_property( 'font-size', $css->render_range( $fancy_size, 'Desktop' ) );
		}
		// Suffix, Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .premium-fancy-text-suffix-prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Desktop' );
		}

		if ( isset( $attr['fancyContentAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['fancyContentAlign'], 'Desktop' ) );
		}

		if ( isset( $attr['fancyTextAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .premium-fancy-text-title-slide' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['fancyTextAlign'], 'Desktop' ) );
		}
		if ( isset( $attr['fancyContentAlign'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['fancyContentAlign'], 'Desktop' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['fancyTextTypography'] ) ) {
			$fancy_typography = $attr['fancyTextTypography'];
			$fancy_size       = $fancy_typography['fontSize'];

			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .premium-fancy-text-title' );
			$css->render_typography( $attr['fancyTextTypography'], 'Tablet' );
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .typed-cursor' );
			$css->add_property( 'font-size', $css->render_range( $fancy_size, 'Tablet' ) );
		}

		// Suffix, Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .premium-fancy-text-suffix-prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Tablet' );
		}

		if ( isset( $attr['fancyContentAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['fancyContentAlign'], 'Tablet' ) );
		}

		if ( isset( $attr['fancyTextAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .premium-fancy-text-title-slide' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['fancyTextAlign'], 'Tablet' ) );
		}
		if ( isset( $attr['fancyContentAlign'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['fancyContentAlign'], 'Tablet' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['fancyTextTypography'] ) ) {
			$fancy_typography = $attr['fancyTextTypography'];
			$fancy_size       = $fancy_typography['fontSize'];

			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .premium-fancy-text-title' );
			$css->render_typography( $attr['fancyTextTypography'], 'Mobile' );
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .typed-cursor' );
			$css->add_property( 'font-size', $css->render_range( $fancy_size, 'Mobile' ) );
		}

		// Suffix, Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .premium-fancy-text-suffix-prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Mobile' );
		}
		if ( isset( $attr['fancyContentAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['fancyContentAlign'], 'Mobile' ) );
		}

		if ( isset( $attr['fancyTextAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-fancy-text' . '> .premium-fancy-text-title-slide' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['fancyTextAlign'], 'Mobile' ) );
		}
		if ( isset( $attr['fancyContentAlign'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['fancyContentAlign'], 'Mobile' ) );
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
				PREMIUM_BLOCKS_URL . 'assets/js/accordion.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		wp_enqueue_style(
			'pbg-accordion-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/accordion.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
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
			$title_border_width  = $title_border['borderWidth'];
			$title_border_radius = $title_border['borderRadius'];

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
			$desc_border_width  = $desc_border['borderWidth'];
			$desc_border_radius = $desc_border['borderRadius'];

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
			$title_border_width  = $title_border['borderWidth'];
			$title_border_radius = $title_border['borderRadius'];

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
			$desc_border_width  = $desc_border['borderWidth'];
			$desc_border_radius = $desc_border['borderRadius'];

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
			$title_border_width  = $title_border['borderWidth'];
			$title_border_radius = $title_border['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-accordion__content_wrap' . ' > .premium-accordion__title_wrap' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Mobile'], 'px' ) );
		}

		// Desc Style
		if ( isset( $attr['descTypography'] ) ) {
			$desc_typography = $attr['descTypography'];

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
			$desc_border_width  = $desc_border['borderWidth'];
			$desc_border_radius = $desc_border['borderRadius'];

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
		wp_enqueue_style(
			'pbg-banner-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/banner.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
		$style_unique_id = rand( 100, 10000 );

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
		 $css                   = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// Style.

		if ( isset( $attr['contentAlign'] ) ) {
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['contentAlign'], 'Desktop' ) );
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['contentAlign'], 'Desktop' ) );
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
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-banner__inner' );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['contentAlign'] ) ) {
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['contentAlign'], 'Tablet' ) );
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['contentAlign'], 'Tablet' ) );
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
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-banner__inner' );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();

		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['contentAlign'] ) ) {
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__title_wrap' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['contentAlign'], 'Mobile' ) );
			$css->set_selector( $unique_id . '> .premium-banner__inner' . ' > .premium-banner__content' . ' > .premium-banner__desc_wrap' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['contentAlign'], 'Mobile' ) );
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
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

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
		wp_enqueue_style(
			'pbg-button-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/button.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);

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
		 $css                   = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		// Title Style

		if ( isset( $attr['btnAlign'] ) ) {

			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['btnAlign'], 'Desktop' ) );
		}
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
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Title Style
		if ( isset( $attr['btnAlign'] ) ) {

			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['btnAlign'], 'Tablet' ) );
		}
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
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-button' );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Title Style
		if ( isset( $attr['btnAlign'] ) ) {

			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['btnAlign'], 'Mobile' ) );
		}
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
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

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
		wp_enqueue_style(
			'pbg-countUp-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/count-up.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
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

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}
		// Align.
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'justify-content', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
		}
		// Border.
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['selfAlign'] ) ) {
			$css->set_selector( $unique_id . ' .premium-countup__info, ' . $unique_id . ' .premium-countup__title' );
			$css->add_property( 'align-self', $css->get_responsive_css( $attr['selfAlign'], 'Desktop' ) );
		}
		if ( isset( $attr['selfAlign'] ) ) {
			$align      = $css->get_responsive_css( $attr['selfAlign'], 'Desktop' );
			$flex_align = ( isset($attr['flexDir']) && $attr['flexDir'] == 'row-reverse') ? 'center' : $align ;
			$flex_align = ( isset($attr['flexDir']) && $attr['flexDir'] == 'row' ? 'center' : $flex_align );

			$css->set_selector( $unique_id . ' .premium-countup__icon_wrap ' );
			$css->add_property( 'align-self', $flex_align );
		}

		if ( isset( $attr['iconMargin'] ) ) {
			$wrap_margin = $attr['iconMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__icon_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Desktop'], $wrap_margin['unit'] ) );
		}

		// Number Style
		if ( isset( $attr['numberTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->render_typography( $attr['numberTypography'], 'Desktop' );
		}
		if ( isset( $attr['numberMargin'] ) ) {
			$number_margin = $attr['numberMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->add_property( 'margin', $css->render_spacing( $number_margin['Desktop'], $number_margin['unit'] ) );
		}
		if ( isset( $attr['numberPadding'] ) ) {
			$number_padding = $attr['numberPadding'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->add_property( 'padding', $css->render_spacing( $number_padding['Desktop'], $number_padding['unit'] ) );
		}

		// Title Style
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->render_typography( $attr['titleTypography'], 'Desktop' );
		}
		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Desktop'], $title_margin['unit'] ) );
		}
		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Desktop'], $title_padding['unit'] ) );
		}

		// Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Desktop' );
		}
		if ( isset( $attr['prefixMargin'] ) ) {
			$prefix_margin = $attr['prefixMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->add_property( 'margin', $css->render_spacing( $prefix_margin['Desktop'], $prefix_margin['unit'] ) );
		}
		if ( isset( $attr['prefixPadding'] ) ) {
			$prefix_padding = $attr['prefixPadding'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->add_property( 'padding', $css->render_spacing( $prefix_padding['Desktop'], $prefix_padding['unit'] ) );
		}

		// Suffix Style
		if ( isset( $attr['suffixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->render_typography( $attr['suffixTypography'], 'Desktop' );
		}
		if ( isset( $attr['suffixMargin'] ) ) {
			$suffix_margin = $attr['suffixMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->add_property( 'margin', $css->render_spacing( $suffix_margin['Desktop'], $suffix_margin['unit'] ) );
		}
		if ( isset( $attr['suffixPadding'] ) ) {
			$suffix_padding = $attr['suffixPadding'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->add_property( 'padding', $css->render_spacing( $suffix_padding['Desktop'], $suffix_padding['unit'] ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}
		// Align.
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'justify-content', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
		}
		// Border.
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['selfAlign'] ) ) {
			$css->set_selector( $unique_id . ' .premium-countup__info, ' . $unique_id . ' .premium-countup__title' );
			$css->add_property( 'align-self', $css->get_responsive_css( $attr['selfAlign'], 'Tablet' ) );
		}
		if ( isset( $attr['selfAlign'] ) ) {
			$align      = $css->get_responsive_css( $attr['selfAlign'], 'Tablet' );
			$flex_align = ( isset($attr['flexDir']) && $attr['flexDir'] == 'row-reverse') ? 'center' : $align ;
			$flex_align = ( isset($attr['flexDir']) && $attr['flexDir'] == 'row' ? 'center' : $flex_align );

			$css->set_selector( $unique_id . ' .premium-countup__icon_wrap ' );
			$css->add_property( 'align-self', $flex_align );
		}

		if ( isset( $attr['iconMargin'] ) ) {
			$wrap_margin = $attr['iconMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__icon_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Tablet'], $wrap_margin['unit'] ) );
		}

		// Number Style
		if ( isset( $attr['numberTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->render_typography( $attr['numberTypography'], 'Tablet' );
		}
		if ( isset( $attr['numberMargin'] ) ) {
			$number_margin = $attr['numberMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->add_property( 'margin', $css->render_spacing( $number_margin['Tablet'], $number_margin['unit'] ) );
		}
		if ( isset( $attr['numberPadding'] ) ) {
			$number_padding = $attr['numberPadding'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->add_property( 'padding', $css->render_spacing( $number_padding['Tablet'], $number_padding['unit'] ) );
		}

		// Title Style
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->render_typography( $attr['titleTypography'], 'Tablet' );
		}
		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Tablet'], $title_margin['unit'] ) );
		}
		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Tablet'], $title_padding['unit'] ) );
		}

		// Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Tablet' );
		}
		if ( isset( $attr['prefixMargin'] ) ) {
			$prefix_margin = $attr['prefixMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->add_property( 'margin', $css->render_spacing( $prefix_margin['Tablet'], $prefix_margin['unit'] ) );
		}
		if ( isset( $attr['prefixPadding'] ) ) {
			$prefix_padding = $attr['prefixPadding'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->add_property( 'padding', $css->render_spacing( $prefix_padding['Tablet'], $prefix_padding['unit'] ) );
		}

		// Suffix Style
		if ( isset( $attr['suffixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->render_typography( $attr['suffixTypography'], 'Tablet' );
		}
		if ( isset( $attr['suffixMargin'] ) ) {
			$suffix_margin = $attr['suffixMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->add_property( 'margin', $css->render_spacing( $suffix_margin['Tablet'], $suffix_margin['unit'] ) );
		}
		if ( isset( $attr['suffixPadding'] ) ) {
			$suffix_padding = $attr['suffixPadding'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->add_property( 'padding', $css->render_spacing( $suffix_padding['Tablet'], $suffix_padding['unit'] ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Container Style
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
		}
		// Align.
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'justify-content', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
		}
		// Border.
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['selfAlign'] ) ) {
			$css->set_selector( $unique_id . ' .premium-countup__info, ' . $unique_id . ' .premium-countup__title' );
			$css->add_property( 'align-self', $css->get_responsive_css( $attr['selfAlign'], 'Mobile' ) );
		}
		if ( isset( $attr['selfAlign'] ) ) {
			$align      = $css->get_responsive_css( $attr['selfAlign'], 'Mobile' );
			$flex_align = ( isset($attr['flexDir']) && $attr['flexDir'] == 'row-reverse') ? 'center' : $align ;
			$flex_align = ( isset($attr['flexDir']) && $attr['flexDir'] == 'row' ? 'center' : $flex_align );

			$css->set_selector( $unique_id . ' .premium-countup__icon_wrap ' );
			$css->add_property( 'align-self', $flex_align );
		}

		if ( isset( $attr['iconMargin'] ) ) {
			$wrap_margin = $attr['iconMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__icon_wrap' );
			$css->add_property( 'margin', $css->render_spacing( $wrap_margin['Mobile'], $wrap_margin['unit'] ) );
		}

		// Number Style
		if ( isset( $attr['numberTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->render_typography( $attr['numberTypography'], 'Mobile' );
		}
		if ( isset( $attr['numberMargin'] ) ) {
			$number_margin = $attr['numberMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->add_property( 'margin', $css->render_spacing( $number_margin['Mobile'], $number_margin['unit'] ) );
		}
		if ( isset( $attr['numberPadding'] ) ) {
			$number_padding = $attr['numberPadding'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__increment' );
			$css->add_property( 'padding', $css->render_spacing( $number_padding['Mobile'], $number_padding['unit'] ) );
		}

		// Title Style
		if ( isset( $attr['titleTypography'] ) ) {
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->render_typography( $attr['titleTypography'], 'Mobile' );
		}
		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Mobile'], $title_margin['unit'] ) );
		}
		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' > .premium-countup__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Mobile'], $title_padding['unit'] ) );
		}

		// Prefix Style
		if ( isset( $attr['prefixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->render_typography( $attr['prefixTypography'], 'Mobile' );
		}
		if ( isset( $attr['prefixMargin'] ) ) {
			$prefix_margin = $attr['prefixMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->add_property( 'margin', $css->render_spacing( $prefix_margin['Mobile'], $prefix_margin['unit'] ) );
		}
		if ( isset( $attr['prefixPadding'] ) ) {
			$prefix_padding = $attr['prefixPadding'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__prefix' );
			$css->add_property( 'padding', $css->render_spacing( $prefix_padding['Mobile'], $prefix_padding['unit'] ) );
		}

		// Suffix Style
		if ( isset( $attr['suffixTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->render_typography( $attr['suffixTypography'], 'Mobile' );
		}
		if ( isset( $attr['suffixMargin'] ) ) {
			$suffix_margin = $attr['suffixMargin'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->add_property( 'margin', $css->render_spacing( $suffix_margin['Mobile'], $suffix_margin['unit'] ) );
		}
		if ( isset( $attr['suffixPadding'] ) ) {
			$suffix_padding = $attr['suffixPadding'];
			$css->set_selector( $unique_id . '> .premium-countup__info' . ' > .premium-countup__desc' . ' > .premium-countup__suffix' );
			$css->add_property( 'padding', $css->render_spacing( $suffix_padding['Mobile'], $suffix_padding['unit'] ) );
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
		wp_enqueue_style(
			'pbg-dualHeading-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/dual-heading.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);

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
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		if ( isset( $attr['align'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
		}
		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $container_border['borderWidth'];
			$container_border_radius = $container_border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Desktop'], 'px' ) );
		}

		// First Style FontSize.

		if ( isset( $attr['firstTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->render_typography( $attr['firstTypography'], 'Desktop' );
		}

		if ( isset( $attr['firstBorder'] ) ) {
			$first_border        = $attr['firstBorder'];
			$first_border_width  = $first_border['borderWidth'];
			$first_border_radius = $first_border['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'border-width', $css->render_spacing( $first_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $first_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['firstPadding'] ) ) {
			$first_padding = $attr['firstPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'padding', $css->render_spacing( $first_padding['Desktop'], $first_padding['unit'] ) );
		}

		if ( isset( $attr['firstMargin'] ) ) {
			$first_margin = $attr['firstMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'margin', $css->render_spacing( $first_margin['Desktop'], $first_margin['unit'] ) );
		}

		// Second Style FontSize.

		if ( isset( $attr['secondTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->render_typography( $attr['secondTypography'], 'Desktop' );
		}

		if ( isset( $attr['secondBorder'] ) ) {
			$second_border        = $attr['secondBorder'];
			$second_border_width  = $second_border['borderWidth'];
			$second_border_radius = $second_border['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'border-width', $css->render_spacing( $second_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $second_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['secondPadding'] ) ) {
			$second_padding = $attr['secondPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'padding', $css->render_spacing( $second_padding['Desktop'], $second_padding['unit'] ) );
		}

		if ( isset( $attr['secondMargin'] ) ) {
			$second_margin = $attr['secondMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'margin', $css->render_spacing( $second_margin['Desktop'], $second_margin['unit'] ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['align'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
		}

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $container_border['borderWidth'];
			$container_border_radius = $container_border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Tablet'], 'px' ) );
		}

		// First Style FontSize.

		if ( isset( $attr['firstTypography'] ) ) {
			$first_typography = $attr['firstTypography'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->render_typography( $first_typography, 'Tablet' );
		}

		if ( isset( $attr['firstBorder'] ) ) {
			$first_border        = $attr['firstBorder'];
			$first_border_width  = $first_border['borderWidth'];
			$first_border_radius = $first_border['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'border-width', $css->render_spacing( $first_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $first_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['firstPadding'] ) ) {
			$first_padding = $attr['firstPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'padding', $css->render_spacing( $first_padding['Tablet'], $first_padding['unit'] ) );
		}

		if ( isset( $attr['firstMargin'] ) ) {
			$first_margin = $attr['firstMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'margin', $css->render_spacing( $first_margin['Tablet'], $first_margin['unit'] ) );
		}

		// Second Style FontSizeTablet.
		if ( isset( $attr['secondTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->render_typography( $attr['secondTypography'], 'Tablet' );
		}

		if ( isset( $attr['secondBorder'] ) ) {
			$second_border        = $attr['secondBorder'];
			$second_border_width  = $second_border['borderWidth'];
			$second_border_radius = $second_border['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );

			$css->add_property( 'border-width', $css->render_spacing( $second_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $second_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['secondPadding'] ) ) {
			$second_padding = $attr['secondPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'padding', $css->render_spacing( $second_padding['Tablet'], $second_padding['unit'] ) );
		}

		if ( isset( $attr['secondMargin'] ) ) {
			$second_margin = $attr['secondMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'margin', $css->render_spacing( $second_margin['Tablet'], $second_margin['unit'] ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['align'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
		}

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $container_border['borderWidth'];
			$container_border_radius = $container_border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Mobile'], 'px' ) );
		}

		// First Style FontSize.

		if ( isset( $attr['firstTypography'] ) ) {
			$first_typography = $attr['firstTypography'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->render_typography( $first_typography, 'Mobile' );
		}

		if ( isset( $attr['firstBorder'] ) ) {
			$first_border        = $attr['firstBorder'];
			$first_border_width  = $first_border['borderWidth'];
			$first_border_radius = $first_border['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'border-width', $css->render_spacing( $first_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $first_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['firstPadding'] ) ) {
			$first_padding = $attr['firstPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'padding', $css->render_spacing( $first_padding['Mobile'], $first_padding['unit'] ) );
		}

		if ( isset( $attr['firstMargin'] ) ) {
			$first_margin = $attr['firstMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__first' );
			$css->add_property( 'margin', $css->render_spacing( $first_margin['Mobile'], $first_margin['unit'] ) );
		}

		// Second Style FontSizeMobil.
		if ( isset( $attr['secondTypography'] ) ) {
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->render_typography( $attr['secondTypography'], 'Mobile' );
		}

		if ( isset( $attr['secondBorder'] ) ) {
			$second_border        = $attr['secondBorder'];
			$second_border_width  = $second_border['borderWidth'];
			$second_border_radius = $second_border['borderRadius'];

			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );

			$css->add_property( 'border-width', $css->render_spacing( $second_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $second_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['secondPadding'] ) ) {
			$second_padding = $attr['secondPadding'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'padding', $css->render_spacing( $second_padding['Mobile'], $second_padding['unit'] ) );
		}

		if ( isset( $attr['secondMargin'] ) ) {
			$second_margin = $attr['secondMargin'];
			$css->set_selector( $unique_id . '> .premium-dheading-block__wrap' . ' > .premium-dheading-block__title' . ' > .premium-dheading-block__second' );
			$css->add_property( 'margin', $css->render_spacing( $second_margin['Mobile'], $second_margin['unit'] ) );
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
		wp_enqueue_style(
			'pbg-icon-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/icon.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
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
			$container_border_width  = $attr['containerBorder']['borderWidth'];
			$container_border_radius = $attr['containerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Desktop'], 'px' ) );
		}
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Desktop' ) );
		}

		// icon Styles
		if ( isset( $attr['iconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Desktop' ) );
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
			$icon_border_width  = $attr['iconBorder']['borderWidth'];
			$icon_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Desktop'], 'px' ) );
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
			$container_border_width  = $attr['containerBorder']['borderWidth'];
			$container_border_radius = $attr['containerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Tablet'], 'px' ) );
		}
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Tablet' ) );
		}

		// icon Styles
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Tablet' ) );
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
			$icon_border_width  = $attr['iconBorder']['borderWidth'];
			$icon_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Tablet'], 'px' ) );
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
			$container_border_width  = $attr['containerBorder']['borderWidth'];
			$container_border_radius = $attr['containerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Mobile'], 'px' ) );
		}
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Mobile' ) );
		}

		// icon Styles
		if ( isset( $attr['iconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Mobile' ) );
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
			$icon_border_width  = $attr['iconBorder']['borderWidth'];
			$icon_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-container' . ' > .premium-icon__link' . ' > .premium-icon-hover' . ' > .premium-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Mobile'], 'px' ) );
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
		wp_enqueue_style(
			'pbg-iconBox-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/icon-box.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
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
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Desktop' ) );
		}
		if ( isset( $attr['iconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> img' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );
			$css->add_property( 'max-width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
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
			$btn_border_width  = $btn_border['borderWidth'];
			$btn_border_radius = $btn_border['borderRadius'];

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

			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
		}

		if ( isset( $attr['containerMargin'] ) ) {
			$container_margin = $attr['containerMargin'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $container_margin['Desktop'], $container_margin['unit'] ) );
		}

		if ( isset( $attr['containerPadding'] ) ) {
			$container_padding = $attr['containerPadding'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $container_padding['Desktop'], $container_padding['unit'] ) );
		}

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $container_border['borderWidth'];
			$container_border_radius = $container_border['borderRadius'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// icon style
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> i' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Tablet' ) );
		}
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> img' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );
			$css->add_property( 'max-width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
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
			$btn_border_width  = $btn_border['borderWidth'];
			$btn_border_radius = $btn_border['borderRadius'];

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
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
		}

		if ( isset( $attr['containerMargin'] ) ) {
			$container_margin = $attr['containerMargin'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $container_margin['Tablet'], $container_margin['unit'] ) );
		}

		if ( isset( $attr['containerPadding'] ) ) {
			$container_padding = $attr['containerPadding'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $container_padding['Tablet'], $container_padding['unit'] ) );
		}

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $container_border['borderWidth'];
			$container_border_radius = $container_border['borderRadius'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $container_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $container_border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// icon style
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> i' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Mobile' ) );
		}
		if ( isset( $attr['iconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-icon-box-container' . '> .premium-icon-box__icon_wrap' . '> img' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );
			$css->add_property( 'max-width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
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
			$btn_border_width  = $btn_border['borderWidth'];
			$btn_border_radius = $btn_border['borderRadius'];

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
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
		}

		if ( isset( $attr['containerMargin'] ) ) {
			$container_margin = $attr['containerMargin'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $container_margin['Mobile'], $container_margin['unit'] ) );
		}

		if ( isset( $attr['containerPadding'] ) ) {
			$container_padding = $attr['containerPadding'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $container_padding['Mobile'], $container_padding['unit'] ) );
		}

		if ( isset( $attr['containerBorder'] ) ) {
			$container_border        = $attr['containerBorder'];
			$container_border_width  = $container_border['borderWidth'];
			$container_border_radius = $container_border['borderRadius'];

			$css->set_selector( '.' . $unique_id );
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
		wp_enqueue_style(
			'pbg-pricingTable-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/pricing-table.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);

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
			$table_border_width  = $table_border['borderWidth'];
			$table_border_radius = $table_border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $table_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $table_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['tablePadding'] ) ) {
			$table_padding = $attr['tablePadding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $table_padding['Desktop'], $table_padding['unit'] ) );
		}

		// title
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

		// price
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
			$css->set_selector( $unique_id . ' .premium-pricing-table__list_wrap .premium-pricing-table__list' );
			$css->render_typography( $list_typography, 'Desktop' );
		}

		// desc
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

		// button
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

		if ( isset( $attr['buttonBorder'] ) ) {
			$button_border        = $attr['buttonBorder'];
			$button_border_width  = $button_border['borderWidth'];
			$button_border_radius = $button_border['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-pricing-table__button_link' );
			$css->add_property( 'border-width', $css->render_spacing( $button_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $button_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['badgeTypography'] ) ) {
			$badge_typography = $attr['badgeTypography'];
			$css->set_selector( $unique_id . ' .premium-pricing-table__badge span' );
			$css->render_typography( $badge_typography, 'Desktop' );
		}

		// Feature Align.
		if ( isset( $attr['featureAlign'] ) ) {
			$align = $css->get_responsive_css( $attr['featureAlign'], 'Desktop' );
			$css->set_selector( $unique_id . ' > .premium-pricing-table__list_wrap' . ' > .premium-pricing-table__list' );
			$css->add_property( 'text-align', $align );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Table.
		if ( isset( $attr['tableBorder'] ) ) {
			$table_border        = $attr['tableBorder'];
			$table_border_width  = $table_border['borderWidth'];
			$table_border_radius = $table_border['borderRadius'];

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
			$button_border_width  = $button_border['borderWidth'];
			$button_border_radius = $button_border['borderRadius'];

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
			$css->set_selector( $unique_id . ' .premium-pricing-table__list_wrap .premium-pricing-table__list' );
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
			$css->set_selector( $unique_id . ' > .premium-pricing-table__list_wrap' . ' > .premium-pricing-table__list' );
			$css->add_property( 'text-align', $align );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Table.
		if ( isset( $attr['tableBorder'] ) ) {
			$table_border        = $attr['tableBorder'];
			$table_border_width  = $table_border['borderWidth'];
			$table_border_radius = $table_border['borderRadius'];

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
			$button_border_width  = $button_border['borderWidth'];
			$button_border_radius = $button_border['borderRadius'];

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
			$css->set_selector( $unique_id . ' .premium-pricing-table__list_wrap .premium-pricing-table__list' );
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
			$css->set_selector( $unique_id . ' > .premium-pricing-table__list_wrap' . ' > .premium-pricing-table__list' );
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
			$unique_id = "#premium-lottie-{$attributes['block_id']}";
		}

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}
		wp_enqueue_style(
			'pbg-lottie-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/lottie.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
		if ( $this->it_is_not_amp() ) {
			wp_enqueue_script(
				'pbg-lottie',
				PREMIUM_BLOCKS_URL . 'assets/js/lottie.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION,
				true
			);
		}
		$style_unique_id = rand( 100, 10000 );

		$style_id = 'pbg-blocks-style' . esc_attr( $style_unique_id );
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
		 $css                   = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		if ( isset( $attr['lottieAlign'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['lottieAlign'], 'Desktop' ) );
		}

		if ( isset( $attr['size'] ) ) {
			$css->set_selector( $unique_id . '> .premium-lottie-svg svg' );
			$css->add_property( 'width', $css->render_range( $attr['size'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['size'], 'Desktop' ) );
			$css->set_selector( '#premium-lottie-' . $unique_id . '> .premium-lottie-canvas' );
			$css->add_property( 'width', $css->render_range( $attr['size'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['size'], 'Desktop' ) );
		}

		if ( isset( $attr['padding'] ) ) {
			$css->set_selector( $unique_id . ' .premium-lottie-animation' );
			$css->add_property( 'padding', $css->render_spacing( $attr['padding']['Desktop'], $attr['padding']['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$lottie_border        = $attr['border'];
			$lottie_border_width  = $lottie_border['borderWidth'];
			$lottie_border_radius = $lottie_border['borderRadius'];
			$css->set_selector( $unique_id . ' .premium-lottie-animation' );
			$css->add_property( 'border-width', $css->render_spacing( $lottie_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $lottie_border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );
		if ( isset( $attr['lottieAlign'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['lottieAlign'], 'Tablet' ) );
		}

		if ( isset( $attr['size'] ) ) {
			$css->set_selector( $unique_id . '> .premium-lottie-svg svg' );
			$css->add_property( 'width', $css->render_range( $attr['size'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['size'], 'Tablet' ) );
			$css->set_selector( $unique_id . '> .premium-lottie-canvas' );
			$css->add_property( 'width', $css->render_range( $attr['size'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['size'], 'Tablet' ) );
		}

		if ( isset( $attr['padding'] ) ) {
			$css->set_selector( $unique_id . ' .premium-lottie-animation' );
			$css->add_property( 'padding', $css->render_spacing( $attr['padding']['Tablet'], $attr['padding']['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$lottie_border        = $attr['border'];
			$lottie_border_width  = $lottie_border['borderWidth'];
			$lottie_border_radius = $lottie_border['borderRadius'];
			$css->set_selector( $unique_id . ' .premium-lottie-animation' );
			$css->add_property( 'border-width', $css->render_spacing( $lottie_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $lottie_border_radius['Tablet'], 'px' ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attr['lottieAlign'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['lottieAlign'], 'Mobile' ) );
		}

		if ( isset( $attr['size'] ) ) {
			$css->set_selector( $unique_id . '> .premium-lottie-svg svg' );
			$css->add_property( 'width', $css->render_range( $attr['size'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['size'], 'Mobile' ) );
			$css->set_selector( $unique_id . '> .premium-lottie-canvas' );
			$css->add_property( 'width', $css->render_range( $attr['size'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['size'], 'Mobile' ) );
		}

		if ( isset( $attr['padding'] ) ) {
			$css->set_selector( $unique_id . ' .premium-lottie-animation' );
			$css->add_property( 'padding', $css->render_spacing( $attr['padding']['Mobile'], $attr['padding']['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$lottie_border        = $attr['border'];
			$lottie_border_width  = $lottie_border['borderWidth'];
			$lottie_border_radius = $lottie_border['borderRadius'];
			$css->set_selector( $unique_id . ' .premium-lottie-animation' );
			$css->add_property( 'border-width', $css->render_spacing( $lottie_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $lottie_border_radius['Mobile'], 'px' ) );
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
		wp_enqueue_style(
			'pbg-testimonial-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/testimonials.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);

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
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
		}

		// Author Style FontSize.
		if ( isset( $attr['authorTypography'] ) ) {
			$author_typography = $attr['authorTypography'];
			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author' );
			$css->render_typography( $author_typography, 'Desktop' );
		}

		if ( isset( $attr['imgBorder'] ) ) {
			$image_border        = $attr['imgBorder'];
			$image_border_width  = $image_border['borderWidth'];
			$image_border_radius = $image_border['borderRadius'];

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
			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
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
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
		}

		// Author Style FontSize.
		if ( isset( $attr['authorTypography'] ) ) {
			$author_typography = $attr['authorTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author' );
			$css->render_typography( $author_typography, 'Tablet' );
		}

		if ( isset( $attr['imgBorder'] ) ) {
			$image_border        = $attr['imgBorder'];
			$image_border_width  = $image_border['borderWidth'];
			$image_border_radius = $image_border['borderRadius'];

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
			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
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
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
		}

		// Author Style FontSize.
		if ( isset( $attr['authorTypography'] ) ) {
			$author_typography = $attr['authorTypography'];

			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__info' . '> .premium-testimonial__author' );
			$css->render_typography( $author_typography, 'Mobile' );
		}

		if ( isset( $attr['imgBorder'] ) ) {
			$image_border        = $attr['imgBorder'];
			$image_border_width  = $image_border['borderWidth'];
			$image_border_radius = $image_border['borderRadius'];

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
			$css->set_selector( $unique_id . '> .premium-testimonial__container' . ' > .premium-testimonial__content' . ' > .premium-testimonial__text_wrap' . ' > div' . '> .premium-testimonial__text' );
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
			$unique_id = '.premium-container';
		}

		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = ".{$attributes['blockId']}";
		}
		wp_enqueue_style(
			'pbg-section-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/section.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
		$style_unique_id = rand( 100, 10000 );
		$style_id        = 'pbg-blocks-style' . esc_attr( $style_unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
			$css = $this->get_section_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'section', $unique_id ) ) {
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

		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}

		if ( isset( $attr['margin'] ) ) {
			$padding = $attr['margin'];
			$css->set_selector( $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
		}
		if ( isset( $attr['horAlign'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['horAlign'], 'Desktop' ) );
		}
		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}

		if ( isset( $attr['margin'] ) ) {
			$padding = $attr['margin'];
			$css->set_selector( $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['horAlign'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['horAlign'], 'Tablet' ) );
		}
		$css->stop_media_query();

		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
		}

		if ( isset( $attr['margin'] ) ) {
			$padding = $attr['margin'];
			$css->set_selector( $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
		}

		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['horAlign'] ) ) {
			$css->set_selector( $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['horAlign'], 'Mobile' ) );
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
		wp_enqueue_style(
			'pbg-videoBox-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/video-box.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
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

		// Container style
		if ( isset( $attr['boxBorder'] ) ) {
			$box_border        = $attr['boxBorder'];
			$box_border_width  = $box_border['borderWidth'];
			$box_border_radius = $box_border['borderRadius'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $box_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $box_border_radius['Desktop'], 'px' ) );
		}

		// icon Style
		if ( isset( $attr['playBorder'] ) ) {
			$play_border        = $attr['playBorder'];
			$play_border_width  = $play_border['borderWidth'];
			$play_border_radius = $play_border['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-width', $css->render_spacing( $play_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $play_border_radius['Desktop'], 'px' ) );
		}
		if ( isset( $attr['playPadding'] ) ) {
			$desc_padding = $attr['playPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Desktop'], $desc_padding['unit'] ) );
		}

		// Style Description.
		if ( isset( $attr['videoDescTypography'] ) ) {
			$desc_typography = $attr['videoDescTypography'];

			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->render_typography( $desc_typography, 'Desktop' );
		}
		if ( isset( $attr['descPadding'] ) ) {
			$desc_padding = $attr['descPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Desktop'], $desc_padding['unit'] ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		// Container style
		if ( isset( $attr['boxBorder'] ) ) {
			$box_border        = $attr['boxBorder'];
			$box_border_width  = $box_border['borderWidth'];
			$box_border_radius = $box_border['borderRadius'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $box_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $box_border_radius['Tablet'], 'px' ) );
		}

		// icon Style
		if ( isset( $attr['playBorder'] ) ) {
			$play_border        = $attr['playBorder'];
			$play_border_width  = $play_border['borderWidth'];
			$play_border_radius = $play_border['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-width', $css->render_spacing( $play_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $play_border_radius['Tablet'], 'px' ) );
		}
		if ( isset( $attr['playPadding'] ) ) {
			$desc_padding = $attr['playPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Tablet'], $desc_padding['unit'] ) );
		}

		// Style Description.
		if ( isset( $attr['videoDescTypography'] ) ) {
			$desc_typography = $attr['videoDescTypography'];

			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->render_typography( $desc_typography, 'Tablet' );
		}
		if ( isset( $attr['descPadding'] ) ) {
			$desc_padding = $attr['descPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Tablet'], $desc_padding['unit'] ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Container style
		if ( isset( $attr['boxBorder'] ) ) {
			$box_border        = $attr['boxBorder'];
			$box_border_width  = $box_border['borderWidth'];
			$box_border_radius = $box_border['borderRadius'];

			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $box_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $box_border_radius['Mobile'], 'px' ) );
		}

		// icon Style
		if ( isset( $attr['playBorder'] ) ) {
			$play_border        = $attr['playBorder'];
			$play_border_width  = $play_border['borderWidth'];
			$play_border_radius = $play_border['borderRadius'];

			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'border-width', $css->render_spacing( $play_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $play_border_radius['Mobile'], 'px' ) );
		}
		if ( isset( $attr['playPadding'] ) ) {
			$desc_padding = $attr['playPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__play' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Mobile'], $desc_padding['unit'] ) );
		}

		// Style Description.
		if ( isset( $attr['videoDescTypography'] ) ) {
			$desc_typography = $attr['videoDescTypography'];

			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' . '> .premium-video-box__desc_text' );
			$css->render_typography( $desc_typography, 'Mobile' );
		}
		if ( isset( $attr['descPadding'] ) ) {
			$desc_padding = $attr['descPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-video-box__desc' );
			$css->add_property( 'padding', $css->render_spacing( $desc_padding['Mobile'], $desc_padding['unit'] ) );
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
		wp_enqueue_style(
			'pbg-imageSeparator-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/image-separator.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);

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
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Desktop' ) );
		}

		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-image-separator-container' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Desktop' ) );
		}

		// Icon Style.
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '>i' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Desktop' ) );
		}

		if ( isset( $attr['iconPadding'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'padding', $css->render_spacing( $attr['iconPadding']['Desktop'], ( isset( $attr['iconPadding']['unit'] ) ? $attr['iconPadding']['unit'] : 'px' ) ) );
		}

		if ( isset( $attr['iconBorder'] ) && ( isset($attr['iconStyles']) && ($attr['iconStyles'][0]['advancedBorder']) == false ) ) {
			$title_border_width  = $attr['iconBorder']['borderWidth'];
			$title_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Desktop'], 'px' ) );
		}
		// Image style
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
		}

		if ( isset( $attr['imgHeight'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );
		}

		if ( isset( $attr['iconBorder'] ) ) {
			$title_border_width  = $attr['iconBorder']['borderWidth'];
			$title_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> img' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Desktop'], 'px' ) );
		}
		if ( isset( $attr['iconStyles'][0]['advancedBorder'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> img' );
			$css->add_property( 'border-radius', $attr['iconStyles'][0]['advancedBorder'] ? $attr['iconStyles'][0]['advancedBorderValue'] . '!important' : '' );
		}

		if ( isset( $attr['iconStyles'][0]['advancedBorder'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'border-radius', $attr['iconStyles'][0]['advancedBorder'] ? $attr['iconStyles'][0]['advancedBorderValue'] . '!important' : '' );
		}

		$css->start_media_query( $media_query['tablet'] );

		// container style
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Tablet' ) );
		}

		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-image-separator-container' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Tablet' ) );
		}

		// Icon Style.
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '>i' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Tablet' ) );
		}

		if ( isset( $attr['iconPadding'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'padding', $css->render_spacing( $attr['iconPadding']['Tablet'], ( isset( $attr['iconPadding']['unit'] ) ? $attr['iconPadding']['unit'] : 'px' ) ) );
		}

		if ( isset( $attr['iconBorder'] ) ) {
			$title_border_width  = $attr['iconBorder']['borderWidth'];
			$title_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Tablet'], 'px' ) );
		}

		// Image style
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
		}

		if ( isset( $attr['imgHeight']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );
		}

		if ( isset( $attr['iconBorder'] ) ) {
			$title_border_width  = $attr['iconBorder']['borderWidth'];
			$title_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> img' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// container style
		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Mobile' ) );
		}

		if ( isset( $attr['iconAlign'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-image-separator-container' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['iconAlign'], 'Mobile' ) );
		}

		// Icon Style.
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '>i' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Mobile' ) );
		}

		if ( isset( $attr['iconPadding'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'padding', $css->render_spacing( $attr['iconPadding']['Mobile'], ( isset( $attr['iconPadding']['unit'] ) ? $attr['iconPadding']['unit'] : 'px' ) ) );
		}

		if ( isset( $attr['iconBorder'] ) ) {
			$title_border_width  = $attr['iconBorder']['borderWidth'];
			$title_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> i' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Mobile'], 'px' ) );
		}

		// Image style
		if ( isset( $attr['iconSize'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
		}

		if ( isset( $attr['imgHeight'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . ' > img' );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );
		}

		if ( isset( $attr['iconBorder'] ) ) {
			$title_border_width  = $attr['iconBorder']['borderWidth'];
			$title_border_radius = $attr['iconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-image-separator-container' . ' > .premium-image-separator-link' . '> img' );
			$css->add_property( 'border-width', $css->render_spacing( $title_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $title_border_radius['Mobile'], 'px' ) );
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
		if ( isset( $attributes['blockId'] ) && ! empty( $attributes['blockId'] ) ) {
			$unique_id = $attributes['blockId'];
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
		wp_enqueue_style(
			'pbg-modal-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/Modal.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
		$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'modal', $unique_id ) ) {
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
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		if ( isset( $attr['align']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
		}

		if ( isset( $attr['triggerIconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn i' );
			$css->add_property( 'font-size', $css->render_range( $attr['triggerIconSize'], 'Desktop' ) );
			$css->add_property( 'width', $css->render_range( $attr['triggerIconSize'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['triggerIconSize'], 'Desktop' ) );
		}

		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn:hover' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
		}

		// style For Icon /Image/Lottie in Header
		if ( isset( $attr['iconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Desktop' ) );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Desktop' ) );
		}

		// Trigger Style for Image/Lottie
		if ( isset( $attr['imageWidth']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container img' );
			$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Desktop' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
			$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Desktop' ) );
		}

		// Style For Button Trigger
		if ( isset( $attr['triggerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'font-size', $css->render_range( $attr['triggerTypography']['fontSize'], 'Desktop' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' . '> span' );
			$css->render_typography( $attr['triggerTypography'], 'Desktop' );
		}
		if ( isset( $attr['triggerPadding'] ) ) {
			$trigger_padding = $attr['triggerPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Desktop'], $trigger_padding['unit'] ) );
		}
		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
		}
		// border Image
		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
		}
		// border text
		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
		}
		if ( isset( $attr['triggerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->render_typography( $attr['triggerTypography'], 'Desktop' );
		}
		if ( isset( $attr['triggerPadding'] ) ) {
			$trigger_padding = $attr['triggerPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Desktop'], $trigger_padding['unit'] ) );
		}
		// hover border
		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img:hover' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
		}
		// hover border text
		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container:hover' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Desktop'], 'px' ) );
		}

		// Style For Header in Modal
		if ( isset( $attr['headerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
			$css->render_typography( $attr['headerTypography'], 'Desktop' );
		}
		if ( isset( $attr['headerBorder'] ) ) {
			$header_border_width  = $attr['headerBorder']['borderWidth'];
			$header_border_radius = $attr['headerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' );
			$css->add_property( 'border-width', $css->render_spacing( $header_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $header_border_radius['Desktop'], 'px' ) );
		}

		// style for upper close button
		if ( isset( $attr['upperPadding'] ) ) {
			$upper_padding = $attr['upperPadding'];
			// $css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
			$css->add_property( 'padding', $css->render_spacing( $upper_padding['Desktop'], $upper_padding['unit'] ) );
		}
		if ( isset( $attr['upperBorder'] ) ) {
			$upper_border_width  = $attr['upperBorder']['borderWidth'];
			$upper_border_radius = $attr['upperBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
			$css->add_property( 'border-width', $css->render_spacing( $upper_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $upper_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['upperIconWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'font-size', $css->render_range( $attr['upperIconWidth'], 'Desktop' ) );
		}

		// Style For font Size in  lower Close Button
		if ( isset( $attr['lowerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->render_typography( $attr['lowerTypography'], 'Desktop' );
		}
		if ( isset( $attr['lowerBorder'] ) ) {
			$lower_border_width  = $attr['lowerBorder']['borderWidth'];
			$lower_border_radius = $attr['lowerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'border-width', $css->render_spacing( $lower_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $lower_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['lowerPadding'] ) ) {
			$lower_padding = $attr['lowerPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'padding', $css->render_spacing( $lower_padding['Desktop'], $lower_padding['unit'] ) );
		}
		if ( isset( $attr['lowerIconWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'width', $css->render_range( $attr['lowerIconWidth'], 'Desktop' ) );
		}

		// Width & Height for Modal
		if ( isset( $attr['modalWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'width', $css->render_range( $attr['modalWidth'], 'Desktop' ) );
		}
		if ( isset( $attr['modalHeight'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'max-height', $css->render_range( $attr['modalHeight'], 'Desktop' ) );
		}
		if ( isset( $attr['modalMargin'] ) ) {
			$modal_margin = $attr['modalMargin'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin', $css->render_spacing( $modal_margin['Desktop'], $modal_margin['unit'] ) );
		}
		if ( isset( $attr['modalBorder'] ) ) {
			$modal_border_width  = $attr['modalBorder']['borderWidth'];
			$modal_border_radius = $attr['modalBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'border-width', $css->render_spacing( $modal_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $modal_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['modalTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
			$css->render_typography( $attr['modalTypography'], 'Desktop' );
		}

		if ( isset( $attr['modalPadding'] ) ) {
			$modal_padding = $attr['modalPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding', $css->render_spacing( $modal_padding['Desktop'], $modal_padding['unit'] ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		if ( isset( $attr['align']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
		}

		if ( isset( $attr['triggerIconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn i' );
			$css->add_property( 'font-size', $css->render_range( $attr['triggerIconSize'], 'Tablet' ) );
			$css->add_property( 'width', $css->render_range( $attr['triggerIconSize'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['triggerIconSize'], 'Tablet' ) );
		}

		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn:hover' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
		}

		// style For Icon /Image/Lottie in Header
		if ( isset( $attr['iconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Tablet' ) );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Tablet' ) );
		}

		// Trigger Style for Image/Lottie
		if ( isset( $attr['imageWidth']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container img' );
			$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Tablet' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
			$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Tablet' ) );
		}

		// Style For Button Trigger
		if ( isset( $attr['triggerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'font-size', $css->render_range( $attr['triggerTypography']['fontSize'], 'Tablet' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' . ' > span' );
			$css->render_typography( $attr['triggerTypography'], 'Tablet' );
		}
		if ( isset( $attr['triggerPadding'] ) ) {
			$trigger_padding = $attr['triggerPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Tablet'], $trigger_padding['unit'] ) );
		}
		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
		}
		// border Image
		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
		}
		// border text
		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
		}
		if ( isset( $attr['triggerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->render_typography( $attr['triggerTypography'], 'Tablet' );
		}
		if ( isset( $attr['triggerPadding'] ) ) {
			$trigger_padding = $attr['triggerPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Tablet'], $trigger_padding['unit'] ) );
		}
		// hover border
		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img:hover' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
		}
		// hover border text
		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container:hover' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Tablet'], 'px' ) );
		}

		// Style For Header in Modal
		if ( isset( $attr['headerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
			$css->render_typography( $attr['headerTypography'], 'Tablet' );
		}
		if ( isset( $attr['headerBorder'] ) ) {
			$header_border_width  = $attr['headerBorder']['borderWidth'];
			$header_border_radius = $attr['headerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' );
			$css->add_property( 'border-width', $css->render_spacing( $header_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $header_border_radius['Tablet'], 'px' ) );
		}

		// style for upper close button
		if ( isset( $attr['upperPadding'] ) ) {
			$upper_padding = $attr['upperPadding'];
			// $css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
			$css->add_property( 'padding', $css->render_spacing( $upper_padding['Tablet'], $upper_padding['unit'] ) );
		}
		if ( isset( $attr['upperBorder'] ) ) {
			$upper_border_width  = $attr['upperBorder']['borderWidth'];
			$upper_border_radius = $attr['upperBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
			$css->add_property( 'border-width', $css->render_spacing( $upper_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $upper_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['upperIconWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'font-size', $css->render_range( $attr['upperIconWidth'], 'Tablet' ) );
		}

		// Style For font Size in  lower Close Button
		if ( isset( $attr['lowerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->render_typography( $attr['lowerTypography'], 'Tablet' );
		}
		if ( isset( $attr['lowerBorder'] ) ) {
			$lower_border_width  = $attr['lowerBorder']['borderWidth'];
			$lower_border_radius = $attr['lowerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'border-width', $css->render_spacing( $lower_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $lower_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['lowerPadding'] ) ) {
			$lower_padding = $attr['lowerPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'padding', $css->render_spacing( $lower_padding['Tablet'], $lower_padding['unit'] ) );
		}
		if ( isset( $attr['lowerIconWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'width', $css->render_range( $attr['lowerIconWidth'], 'Tablet' ) );
		}

		// Width & Height for Modal
		if ( isset( $attr['modalWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'width', $css->render_range( $attr['modalWidth'], 'Tablet' ) );
		}
		if ( isset( $attr['modalHeight'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'max-height', $css->render_range( $attr['modalHeight'], 'Tablet' ) );
		}
		if ( isset( $attr['modalMargin'] ) ) {
			$modal_margin = $attr['modalMargin'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin', $css->render_spacing( $modal_margin['Tablet'], $modal_margin['unit'] ) );
		}
		if ( isset( $attr['modalBorder'] ) ) {
			$modal_border_width  = $attr['modalBorder']['borderWidth'];
			$modal_border_radius = $attr['modalBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'border-width', $css->render_spacing( $modal_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $modal_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['modalTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
			$css->render_typography( $attr['modalTypography'], 'Tablet' );
		}

		if ( isset( $attr['modalPadding'] ) ) {
			$modal_padding = $attr['modalPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding', $css->render_spacing( $modal_padding['Tablet'], $modal_padding['unit'] ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		if ( isset( $attr['align']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
		}

		if ( isset( $attr['triggerIconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn i' );
			$css->add_property( 'font-size', $css->render_range( $attr['triggerIconSize'], 'Mobile' ) );
			$css->add_property( 'width', $css->render_range( $attr['triggerIconSize'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['triggerIconSize'], 'Mobile' ) );
		}

		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-btn:hover' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
		}

		// style For Icon /Image/Lottie in Header
		if ( isset( $attr['iconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 i' );
			$css->add_property( 'font-size', $css->render_range( $attr['iconSize'], 'Mobile' ) );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 img' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3 .premium-lottie-animation' );
			$css->add_property( 'width', $css->render_range( $attr['iconSize'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['iconSize'], 'Mobile' ) );
		}

		// Trigger Style for Image/Lottie
		if ( isset( $attr['imageWidth']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container img' );
			$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Mobile' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container ' . '> .premium-lottie-animation' );
			$css->add_property( 'width', $css->render_range( $attr['imageWidth'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['imageWidth'], 'Mobile' ) );
		}

		// Style For Button Trigger
		if ( isset( $attr['triggerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'font-size', $css->render_range( $attr['triggerTypography']['fontSize'], 'Mobile' ) );

			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' . ' > span' );
			$css->render_typography( $attr['triggerTypography'], 'Mobile' );
		}
		if ( isset( $attr['triggerPadding'] ) ) {
			$trigger_padding = $attr['triggerPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Mobile'], $trigger_padding['unit'] ) );
		}
		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > button' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
		}
		// border Image
		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
		}
		// border text
		if ( isset( $attr['triggerBorder'] ) ) {
			$trigger_border_width  = $attr['triggerBorder']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
		}
		if ( isset( $attr['triggerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->render_typography( $attr['triggerTypography'], 'Mobile' );
		}
		if ( isset( $attr['triggerPadding'] ) ) {
			$trigger_padding = $attr['triggerPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'padding', $css->render_spacing( $trigger_padding['Mobile'], $trigger_padding['unit'] ) );
		}
		// hover border
		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container' . ' > img:hover' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
		}
		// hover border text
		if ( isset( $attr['triggerBorderH'] ) ) {
			$trigger_border_width  = $attr['triggerBorderH']['borderWidth'];
			$trigger_border_radius = $attr['triggerBorderH']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-modal-trigger-container:hover' . ' > .premium-modal-trigger-text' );
			$css->add_property( 'border-width', $css->render_spacing( $trigger_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $trigger_border_radius['Mobile'], 'px' ) );
		}

		// Style For Header in Modal
		if ( isset( $attr['headerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header h3' );
			$css->render_typography( $attr['headerTypography'], 'Mobile' );
		}
		if ( isset( $attr['headerBorder'] ) ) {
			$header_border_width  = $attr['headerBorder']['borderWidth'];
			$header_border_radius = $attr['headerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' );
			$css->add_property( 'border-width', $css->render_spacing( $header_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $header_border_radius['Mobile'], 'px' ) );
		}

		// style for upper close button
		if ( isset( $attr['upperPadding'] ) ) {
			$upper_padding = $attr['upperPadding'];
			// $css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
			$css->add_property( 'padding', $css->render_spacing( $upper_padding['Mobile'], $upper_padding['unit'] ) );
		}
		if ( isset( $attr['upperBorder'] ) ) {
			$upper_border_width  = $attr['upperBorder']['borderWidth'];
			$upper_border_radius = $attr['upperBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container' );
			$css->add_property( 'border-width', $css->render_spacing( $upper_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $upper_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['upperIconWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-header' . '> .premium-modal-box-close-button-container button' );
			$css->add_property( 'font-size', $css->render_range( $attr['upperIconWidth'], 'Mobile' ) );
		}

		// Style For font Size in  lower Close Button
		if ( isset( $attr['lowerTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->render_typography( $attr['lowerTypography'], 'Mobile' );
		}
		if ( isset( $attr['lowerBorder'] ) ) {
			$lower_border_width  = $attr['lowerBorder']['borderWidth'];
			$lower_border_radius = $attr['lowerBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'border-width', $css->render_spacing( $lower_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $lower_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['lowerPadding'] ) ) {
			$lower_padding = $attr['lowerPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'padding', $css->render_spacing( $lower_padding['Mobile'], $lower_padding['unit'] ) );
		}
		if ( isset( $attr['lowerIconWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . ' >.premium-modal-box-modal-footer  button' );
			$css->add_property( 'width', $css->render_range( $attr['lowerIconWidth'], 'Mobile' ) );
		}

		// Width & Height for Modal
		if ( isset( $attr['modalWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'width', $css->render_range( $attr['modalWidth'], 'Mobile' ) );
		}
		if ( isset( $attr['modalHeight'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'max-height', $css->render_range( $attr['modalHeight'], 'Mobile' ) );
		}
		if ( isset( $attr['modalMargin'] ) ) {
			$modal_margin = $attr['modalMargin'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'margin', $css->render_spacing( $modal_margin['Mobile'], $modal_margin['unit'] ) );
		}
		if ( isset( $attr['modalBorder'] ) ) {
			$modal_border_width  = $attr['modalBorder']['borderWidth'];
			$modal_border_radius = $attr['modalBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' );
			$css->add_property( 'border-width', $css->render_spacing( $modal_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $modal_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['modalTypography'] ) ) {
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body p' );
			$css->render_typography( $attr['modalTypography'], 'Mobile' );
		}

		if ( isset( $attr['modalPadding'] ) ) {
			$modal_padding = $attr['modalPadding'];
			$css->set_selector( '.' . $unique_id . '> .premium-popup__modal_wrap' . ' > .premium-popup__modal_content' . '> .premium-modal-box-modal-body' );
			$css->add_property( 'padding', $css->render_spacing( $modal_padding['Mobile'], $modal_padding['unit'] ) );
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
		wp_enqueue_style(
			'pbg-bulletList-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/bullet-list.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
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
		 $css                   = new Premium_Blocks_css();
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
			$general_border_width  = $general_border['borderWidth'];
			$general_border_radius = $general_border['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'border-width', $css->render_spacing( $general_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $general_border_radius['Desktop'], 'px' ) );
		}

		// Style for icon.
		if ( isset( $attr['bulletIconFontSize'] ) ) {
			$bullet_icon_size = $attr['bulletIconFontSize'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->render_range( $bullet_icon_size, 'Desktop' ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->render_range( $bullet_icon_size, 'Desktop' ) );
		}

		if ( isset( $attr['bulletIconFontSize'] ) ) {
			$bullet_image_size = $attr['bulletIconFontSize'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->render_range( $bullet_image_size, 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $bullet_image_size, 'Desktop' ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->render_range( $bullet_image_size, 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $bullet_image_size, 'Desktop' ) );
		}

		if ( isset( $attr['bulletIconpadding'] ) ) {
			$bullet_icon_padding = $attr['bulletIconpadding'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'padding', $css->render_spacing( $bullet_icon_padding['Desktop'], $bullet_icon_padding['unit'] ) );
		}

		if ( isset( $attr['bulletAlign'] ) ) {
			$align      = $css->get_responsive_css( $attr['bulletAlign'], 'Desktop' );
			$flex_align = 'flex-start' === $align ? 'top' : 'middle';
			$flex_align = $align === 'flex-end' ? 'bottom' : $flex_align;

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'vertical-align', $flex_align );
		}

		if ( isset( $attr['bulletIconBorder'] ) ) {
			$bullet_icon_border        = $attr['bulletIconBorder'];
			$bullet_icon_border_width  = $bullet_icon_border['borderWidth'];
			$bullet_icon_border_radius = $bullet_icon_border['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
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

		// style for divider
		if ( isset( $attr['dividerWidth'] ) ) {
			$divider_width = $attr['dividerWidth'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-block:not(:last-child):after' );
			$css->add_property( 'width', $css->render_range( $divider_width, 'Desktop' ) );
		}

		if ( isset( $attr['dividerHeight'] ) ) {
			$divider_height = $attr['dividerHeight'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-block:not(:last-child):after' );
			$css->add_property( 'border-top-width', $css->render_range( $divider_height, 'Desktop' ) );
		}

		if ( isset( $attr['dividerWidth'] ) ) {
			$divider_width = $attr['dividerWidth'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-inline:not(:last-child):after' );
			$css->add_property( 'border-left-width', $css->render_range( $divider_width, 'Desktop' ) );
		}

		if ( isset( $attr['dividerHeight'] ) ) {
			$divider_height = $attr['dividerHeight'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-inline:not(:last-child):after' );
			$css->add_property( 'height', $css->render_range( $divider_height, 'Desktop' ) );
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
			$general_border_width  = $general_border['borderWidth'];
			$general_border_radius = $general_border['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'border-width', $css->render_spacing( $general_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $general_border_radius['Tablet'], 'px' ) );
		}
		// style for link

		if ( isset( $attr['bulletIconFontSize'] ) ) {
			$bullet_icon_size = $attr['bulletIconFontSize'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->render_range( $bullet_icon_size, 'Tablet' ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->render_range( $bullet_icon_size, 'Tablet' ) );
		}

		if ( isset( $attr['bulletIconFontSize'] ) ) {
			$bullet_image_size = $attr['bulletIconFontSize'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->render_range( $bullet_image_size, 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $bullet_image_size, 'Tablet' ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->render_range( $bullet_image_size, 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $bullet_image_size, 'Tablet' ) );
		}

		// Style for image.
		if ( isset( $attr['bulletIconpadding'] ) ) {
			$bullet_icon_padding = $attr['bulletIconpadding'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'padding', $css->render_spacing( $bullet_icon_padding['Tablet'], $bullet_icon_padding['unit'] ) );
		}

		if ( isset( $attr['bulletAlign'] ) ) {
			$align      = $css->get_responsive_css( $attr['bulletAlign'], 'Tablet' );
			$flex_align = 'flex-start' === $align ? 'top' : 'middle';
			$flex_align = $align === 'flex-end' ? 'bottom' : $flex_align;

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'vertical-align', $flex_align );
		}

		if ( isset( $attr['bulletIconBorder'] ) ) {
			$bullet_icon_border        = $attr['bulletIconBorder'];
			$bullet_icon_border_width  = $bullet_icon_border['borderWidth'];
			$bullet_icon_border_radius = $bullet_icon_border['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
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

		// style for divider
		if ( isset( $attr['dividerWidth'] ) ) {
			$divider_width = $attr['dividerWidth'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-block:not(:last-child):after' );
			$css->add_property( 'width', $css->render_range( $divider_width, 'Tablet' ) );
		}

		if ( isset( $attr['dividerHeight'] ) ) {
			$divider_height = $attr['dividerHeight'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-block:not(:last-child):after' );
			$css->add_property( 'border-top-width', $css->render_range( $divider_height, 'Tablet' ) );
		}

		if ( isset( $attr['dividerWidth'] ) ) {
			$divider_width = $attr['dividerWidth'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-inline:not(:last-child):after' );
			$css->add_property( 'border-left-width', $css->render_range( $divider_width, 'Tablet' ) );
		}

		if ( isset( $attr['dividerHeight'] ) ) {
			$divider_height = $attr['dividerHeight'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-inline:not(:last-child):after' );
			$css->add_property( 'height', $css->render_range( $divider_height, 'Tablet' ) );
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
			$general_border_width  = $general_border['borderWidth'];
			$general_border_radius = $general_border['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' );
			$css->add_property( 'border-width', $css->render_spacing( $general_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $general_border_radius['Mobile'], 'px' ) );
		}

		// style for link
		// Style for icon.
		if ( isset( $attr['bulletIconFontSize'] ) ) {
			$bullet_icon_size = $attr['bulletIconFontSize'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->render_range( $bullet_icon_size, 'Mobile' ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i' );
			$css->add_property( 'font-size', $css->render_range( $bullet_icon_size, 'Mobile' ) );
		}

		if ( isset( $attr['bulletIconFontSize'] ) ) {
			$bullet_image_size = $attr['bulletIconFontSize'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->render_range( $bullet_image_size, 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $bullet_image_size, 'Mobile' ) );
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'width', $css->render_range( $bullet_image_size, 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $bullet_image_size, 'Mobile' ) );
		}

		// Style for image.
		if ( isset( $attr['bulletIconpadding'] ) ) {
			$bullet_icon_padding = $attr['bulletIconpadding'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'padding', $css->render_spacing( $bullet_icon_padding['Mobile'], $bullet_icon_padding['unit'] ) );
		}

		if ( isset( $attr['bulletAlign'] ) ) {
			$align      = $css->get_responsive_css( $attr['bulletAlign'], 'Mobile' );
			$flex_align = 'flex-start' === $align ? 'top' : 'middle';
			$flex_align = $align === 'flex-end' ? 'bottom' : $flex_align;

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
			$css->add_property( 'vertical-align', $flex_align );
		}

		if ( isset( $attr['bulletIconBorder'] ) ) {
			$bullet_icon_border        = $attr['bulletIconBorder'];
			$bullet_icon_border_width  = $bullet_icon_border['borderWidth'];
			$bullet_icon_border_radius = $bullet_icon_border['borderRadius'];

			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > .premium-bullet-list__content-icon' . ' > i, ' . $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list__wrapper' . ' > a' . ' > .premium-bullet-list__content-wrap' . ' > .premium-bullet-list__icon-wrap' . ' > img' );
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

		// style for divider
		if ( isset( $attr['dividerWidth'] ) ) {
			$divider_width = $attr['dividerWidth'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-block:not(:last-child):after' );
			$css->add_property( 'width', $css->render_range( $divider_width, 'Mobile' ) );
		}

		if ( isset( $attr['dividerHeight'] ) ) {
			$divider_height = $attr['dividerHeight'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-block:not(:last-child):after' );
			$css->add_property( 'border-top-width', $css->render_range( $divider_height, 'Mobile' ) );
		}

		if ( isset( $attr['dividerWidth'] ) ) {
			$divider_width = $attr['dividerWidth'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-inline:not(:last-child):after' );
			$css->add_property( 'border-left-width', $css->render_range( $divider_width, 'Mobile' ) );
		}

		if ( isset( $attr['dividerHeight'] ) ) {
			$divider_height = $attr['dividerHeight'];
			$css->set_selector( $unique_id . ' > .premium-bullet-list' . '> .premium-bullet-list-divider-inline:not(:last-child):after' );
			$css->add_property( 'height', $css->render_range( $divider_height, 'Mobile' ) );
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
		wp_enqueue_style(
			'pbg-person-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/person.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
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
		 $css                   = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

		// style for container
		if ( isset( $attr['align'] ) ) {
			$css->set_selector( '.' . $unique_id );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Desktop' ) );
		}

		// style for Content
		if ( isset( $attr['contentPadding'] ) ) {
			$content_padding = $attr['contentPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' );
			$css->add_property( 'padding', $css->render_spacing( $content_padding['Desktop'], $content_padding['unit'] ) );
		}

		// style for image
		if ( isset( $attr['imageBorder'] ) ) {
			$image_border        = $attr['imageBorder'];
			$image_border_width  = $image_border['borderWidth'];
			$image_border_radius = $image_border['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
			$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Desktop'], 'px' ) );
			$css->add_property( 'border-color', $image_border['borderColor'] );
			$css->add_property( 'border-style', $image_border['borderType'] );

			$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Desktop'], 'px' ) );
		}
		if ( isset( $attr['imgHeight']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
			$css->add_property( 'height', $css->render_range( $attr['imgHeight'], 'Desktop' ) );
		}
		if ( isset( $attr['imgWidth']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
			$css->add_property( 'width', $css->render_range( $attr['imgWidth'], 'Desktop' ) );
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
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Desktop' ) );
		}
		if ( isset( $attr['socialIconPadding'] ) ) {
			$socialIcon_padding = $attr['socialIconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Desktop'], $socialIcon_padding['unit'] ) );
		}
		if ( isset( $attr['socialIconMargin'] ) ) {
			$socialIcon_margin = $attr['socialIconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Desktop'], $socialIcon_margin['unit'] ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Desktop'], 'px' ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Desktop'], 'px' ) );
		}

		// Style for Social Icon Effect1.
		if ( isset( $attr['socialIconSize']['Desktop'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Desktop' ) );
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
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Tablet' ) );
		}

		// style for Content
		if ( isset( $attr['contentPadding'] ) ) {
			$content_padding = $attr['contentPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' );
			$css->add_property( 'padding', $css->render_spacing( $content_padding['Tablet'], $content_padding['unit'] ) );
		}

		// style for image
		if ( isset( $attr['imageBorder'] ) ) {
			$image_border        = $attr['imageBorder'];
			$image_border_width  = $image_border['borderWidth'];
			$image_border_radius = $image_border['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
			$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Tablet'], 'px' ) );
			$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Tablet'], 'px' ) );
		}
		if ( isset( $attr['imgHeight']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
			$css->add_property( 'height', $css->render_range( $attr['imgHeight'], 'Tablet' ) );
		}
		if ( isset( $attr['imgWidth']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
			$css->add_property( 'width', $css->render_range( $attr['imgWidth'], 'Tablet' ) );
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
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Tablet' ) );
		}
		if ( isset( $attr['socialIconPadding'] ) ) {
			$socialIcon_padding = $attr['socialIconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Tablet'], $socialIcon_padding['unit'] ) );
		}
		if ( isset( $attr['socialIconMargin'] ) ) {
			$socialIcon_margin = $attr['socialIconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Tablet'], $socialIcon_margin['unit'] ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Tablet'], 'px' ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Tablet'], 'px' ) );
		}

		// Style for Social Icon Effect1.
		if ( isset( $attr['socialIconSize']['Tablet'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Tablet' ) );
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
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['align'], 'Mobile' ) );
		}

		// style for Content
		if ( isset( $attr['contentPadding'] ) ) {
			$content_padding = $attr['contentPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . '> .premium-person__inner' . ' > .premium-person__info' );
			$css->add_property( 'padding', $css->render_spacing( $content_padding['Mobile'], $content_padding['unit'] ) );
		}

		// style for image
		if ( isset( $attr['imageBorder'] ) ) {
			$image_border        = $attr['imageBorder'];
			$image_border_width  = $image_border['borderWidth'];
			$image_border_radius = $image_border['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > img' );
			$css->add_property( 'border-radius', $css->render_spacing( $image_border_radius['Mobile'], 'px' ) );
			$css->add_property( 'border-width', $css->render_spacing( $image_border_width['Mobile'], 'px' ) );
		}
		if ( isset( $attr['imgHeight'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
			$css->add_property( 'height', $css->render_range( $attr['imgHeight'], 'Mobile' ) );
		}
		if ( isset( $attr['imgWidth'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' );
			$css->add_property( 'width', $css->render_range( $attr['imgWidth'], 'Mobile' ) );
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
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Mobile' ) );
		}
		if ( isset( $attr['socialIconPadding'] ) ) {
			$socialIcon_padding = $attr['socialIconPadding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'padding', $css->render_spacing( $socialIcon_padding['Mobile'], $socialIcon_padding['unit'] ) );
		}
		if ( isset( $attr['socialIconMargin'] ) ) {
			$socialIcon_margin = $attr['socialIconMargin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'margin', $css->render_spacing( $socialIcon_margin['Mobile'], $socialIcon_margin['unit'] ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_width = $attr['socialIconBorder']['borderWidth'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-width', $css->render_spacing( $socialIcon_border_width['Mobile'], 'px' ) );
		}
		if ( isset( $attr['socialIconBorder'] ) ) {
			$socialIcon_border_radius = $attr['socialIconBorder']['borderRadius'];
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__img__container' . ' > .premium-person__img_wrap' . ' > .premium-person__socialEffect2' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content ' );
			$css->add_property( 'border-radius', $css->render_spacing( $socialIcon_border_radius['Mobile'], 'px' ) );
		}

		// Style for Social Icon Effect1.
		if ( isset( $attr['socialIconSize']['Mobile'] ) ) {
			$css->set_selector( '.' . $unique_id . ' > .premium-person-content' . ' > .premium-person__inner' . ' > .premium-person__info' . ' > div' . ' > .premium-person__social-List' . ' > li' . ' > .premium-person__socialIcon__link_content' . ' > .premium-social-media-icon' );
			$css->add_property( 'width', $css->render_range( $attr['socialIconSize'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['socialIconSize'], 'Mobile' ) );
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
		wp_enqueue_style(
			'pbg-heading-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/heading.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);

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
			$title_border_width  = $title_border['borderWidth'];
			$title_border_radius = $title_border['borderRadius'];
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
			$icon_border_width  = $icon_border['borderWidth'];
			$icon_border_radius = $icon_border['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Desktop'], 'px' ) );
		}

		if ( isset( $attr['iconSize'] ) ) {
			$icon_size = $attr['iconSize'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'font-size', $css->render_range( $icon_size, 'Desktop' ) );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-lottie-animation' . ' > svg' );
			$css->add_property( 'width', $css->render_range( $icon_size, 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $icon_size, 'Desktop' ) );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > img' );
			$css->add_property( 'width', $css->render_range( $icon_size, 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $icon_size, 'Desktop' ) );
		}

		// stripeStyles
		if ( isset( $attr['stripeTopSpacing'] ) ) {
			$stripe_top_spacing = $attr['stripeTopSpacing'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-top', $css->get_responsive_value( $stripe_top_spacing, 'top', 'Desktop', $stripe_top_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeBottomSpacing'] ) ) {
			$stripe_bottom_spacing = $attr['stripeBottomSpacing'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-bottom', $css->get_responsive_value( $stripe_bottom_spacing, 'bottom', 'Desktop', $stripe_bottom_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeWidth'] ) ) {
			$stripe_width = $attr['stripeWidth'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'width', $css->render_range( $stripe_width, 'Desktop' ) );
		}

		if ( isset( $attr['stripeHeight'] ) ) {
			$stripe_height = $attr['stripeHeight'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'height', $css->render_range( $stripe_height, 'Desktop' ) );
		}

		// background text
		if ( isset( $attr['verticalText'] ) ) {
			$vertical_text = $attr['verticalText'];
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'top', $css->render_range( $vertical_text, 'Desktop' ) );
		}

		if ( isset( $attr['horizontalText'] ) ) {
			$horizontal_text = $attr['horizontalText'];
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'left', $css->render_range( $horizontal_text, 'Desktop' ) );
		}

		if ( isset( $attr['rotateText'] ) ) {
			$rotate_text = $attr['rotateText'];
			$value       = $css->render_range( $rotate_text, 'Desktop' );
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'transform', "rotate({$value})!important" );
		}

		if ( isset( $attr['strokeFull'] ) ) {
			$stroke_full = $attr['strokeFull'];
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( '-webkit-text-stroke-width', $css->render_range( $stroke_full, 'Desktop' ) );
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
			$icon_border_width  = $icon_border['borderWidth'];
			$icon_border_radius = $icon_border['borderRadius'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Tablet'], 'px' ) );
		}

		if ( isset( $attr['iconSize'] ) ) {
			$icon_size = $attr['iconSize'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'font-size', $css->render_range( $icon_size, 'Tablet' ) );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-lottie-animation' . ' > svg' );
			$css->add_property( 'width', $css->render_range( $icon_size, 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $icon_size, 'Tablet' ) );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > img' );
			$css->add_property( 'width', $css->render_range( $icon_size, 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $icon_size, 'Tablet' ) );
		}

		// stripeStyles
		if ( isset( $attr['stripeTopSpacing'] ) ) {
			$stripe_top_spacing = $attr['stripeTopSpacing'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-top', $css->get_responsive_value( $stripe_top_spacing, 'top', 'Tablet', $stripe_top_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeBottomSpacing'] ) ) {
			$stripe_bottom_spacing = $attr['stripeBottomSpacing'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-bottom', $css->get_responsive_value( $stripe_bottom_spacing, 'bottom', 'Tablet', $stripe_bottom_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeWidth'] ) ) {
			$stripe_width = $attr['stripeWidth'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'width', $css->render_range( $stripe_width, 'Tablet' ) );
		}

		if ( isset( $attr['stripeHeight'] ) ) {
			$stripe_height = $attr['stripeHeight'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'height', $css->render_range( $stripe_height, 'Tablet' ) );
		}

		// background text
		if ( isset( $attr['verticalText'] ) ) {
			$vertical_text = $attr['verticalText'];
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'top', $css->render_range( $vertical_text, 'Tablet' ) );
		}

		if ( isset( $attr['horizontalText'] ) ) {
			$horizontal_text = $attr['horizontalText'];
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'left', $css->render_range( $horizontal_text, 'Tablet' ) );
		}

		if ( isset( $attr['rotateText'] ) ) {
			$rotate_text = $attr['rotateText'];
			$value       = $css->render_range( $rotate_text, 'Tablet' );
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'transform', "rotate({$value})!important" );
		}

		if ( isset( $attr['strokeFull'] ) ) {
			$stroke_full = $attr['strokeFull'];
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( '-webkit-text-stroke-width', $css->render_range( $stroke_full, 'Tablet' ) );
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
			$title_border_width  = $title_border['borderWidth'];
			$title_border_radius = $title_border['borderRadius'];
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
			$icon_border_width  = $icon_border['borderWidth'];
			$icon_border_radius = $icon_border['borderRadius'];
			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'border-width', $css->render_spacing( $icon_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $icon_border_radius['Mobile'], 'px' ) );
		}

		if ( isset( $attr['iconSize'] ) ) {
			$icon_size = $attr['iconSize'];

			$css->set_selector( $unique_id . ' .premium-title-icon' );
			$css->add_property( 'font-size', $css->render_range( $icon_size, 'Mobile' ) );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-lottie-animation' . ' > svg' );
			$css->add_property( 'width', $css->render_range( $icon_size, 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $icon_size, 'Mobile' ) );
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > img' );
			$css->add_property( 'width', $css->render_range( $icon_size, 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $icon_size, 'Mobile' ) );
		}

		// stripeStyles
		if ( isset( $attr['stripeTopSpacing'] ) ) {
			$stripe_top_spacing = $attr['stripeTopSpacing'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-top', $css->get_responsive_value( $stripe_top_spacing, 'top', 'Mobile', $stripe_top_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeBottomSpacing'] ) ) {
			$stripe_bottom_spacing = $attr['stripeBottomSpacing'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' );
			$css->add_property( 'margin-bottom', $css->get_responsive_value( $stripe_bottom_spacing, 'bottom', 'Mobile', $stripe_bottom_spacing['unit'] ) );
		}

		if ( isset( $attr['stripeWidth'] ) ) {
			$stripe_width = $attr['stripeWidth'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'width', $css->render_range( $stripe_width, 'Mobile' ) );
		}

		if ( isset( $attr['stripeHeight'] ) ) {
			$stripe_height = $attr['stripeHeight'];
			$css->set_selector( $unique_id . ' > .premium-title' . '> .premium-title-container' . ' > .premium-title-header' . ' > .premium-title-style7-stripe__wrap' . ' > .premium-title-style7-stripe-span' );
			$css->add_property( 'height', $css->render_range( $stripe_height, 'Mobile' ) );
		}

		// background text
		if ( isset( $attr['verticalText'] ) ) {
			$vertical_text = $attr['verticalText'];
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'top', $css->render_range( $vertical_text, 'Mobile' ) );
		}

		if ( isset( $attr['horizontalText'] ) ) {
			$horizontal_text = $attr['horizontalText'];
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'left', $css->render_range( $horizontal_text, 'Mobile' ) );
		}

		if ( isset( $attr['rotateText'] ) ) {
			$rotate_text = $attr['rotateText'];
			$value       = $css->render_range( $rotate_text, 'Mobile' );
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( 'transform', "rotate({$value})!important" );
		}

		if ( isset( $attr['strokeFull'] ) ) {
			$stroke_full = $attr['strokeFull'];
			$css->set_selector( $unique_id . ' > .premium-title-bg-text:before' );
			$css->add_property( '-webkit-text-stroke-width', $css->render_range( $stroke_full, 'Mobile' ) );
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
	public function get_container_css( $attributes, $content ) {
		if ( isset( $attributes['block_id'] ) && ! empty( $attributes['block_id'] ) ) {

			$unique_id = $attributes['block_id'];
		} else {
			$unique_id = rand( 100, 10000 );
		}
		wp_enqueue_style(
			'pbg-container-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/container.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);
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
		if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'container', $unique_id ) ) {
			// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
			// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
			$css = $this->get_container_css_style( $attributes, $unique_id );
			if ( ! empty( $css ) ) {
				if ( $this->should_render_inline( 'container', $unique_id ) ) {
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
	public function get_container_css_style( $attr, $unique_id ) {
		$css                    = new Premium_Blocks_css();
		$media_query            = array();
		$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
		$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
		$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );
		$css->set_selector( '.wp-block-premium-container.premium-is-root-container.premium-block-' . $unique_id . ' .premium-container-inner-blocks-wrap' );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_range( $attr['minHeight'], 'Desktop' ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->get_responsive_css( $attr['direction'], 'Desktop' ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->get_responsive_css( $attr['alignItems'], 'Desktop' ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->get_responsive_css( $attr['justifyItems'], 'Desktop' ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->get_responsive_css( $attr['wrapItems'], 'Desktop' ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->get_responsive_css( $attr['alignContent'], 'Desktop' ) );
		}

		$css->add_property( 'row-gap', isset( $attr['rowGutter']['Desktop'] ) ? $attr['rowGutter']['Desktop'] . $attr['rowGutter']['unit'] : '20px' );

		$css->add_property( 'column-gap', isset( $attr['rowGutter']['Desktop'] ) ? $attr['columnGutter']['Desktop'] . $attr['columnGutter']['unit'] : '20px' );

		$css->set_selector( '.wp-block-premium-container.premium-is-root-container .premium-block-' . $unique_id );

		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_range( $attr['minHeight'], 'Desktop' ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->get_responsive_css( $attr['direction'], 'Desktop' ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->get_responsive_css( $attr['alignItems'], 'Desktop' ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->get_responsive_css( $attr['justifyItems'], 'Desktop' ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->get_responsive_css( $attr['wrapItems'], 'Desktop' ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->get_responsive_css( $attr['alignContent'], 'Desktop' ) );
		}
		if ( isset( $attr['colWidth'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-is-root-container .premium-block-' . $unique_id );
			$css->add_property( 'max-width', $css->render_range( $attr['colWidth'], 'Desktop' ) );
			$css->add_property( 'width', $css->render_range( $attr['colWidth'], 'Desktop' ) );
		}
		if ( isset( $attr['shapeTop'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-shape svg' );
			$css->add_property( 'width', $css->render_range( $attr['shapeTop']['width'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['shapeTop']['height'], 'Desktop' ) );
		}
		if ( isset( $attr['shapeBottom'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-bottom svg' );
			$css->add_property( 'width', $css->render_range( $attr['shapeBottom']['width'], 'Desktop' ) );
			$css->add_property( 'height', $css->render_range( $attr['shapeBottom']['height'], 'Desktop' ) );
		}
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}
		if ( isset( $attr['margin'] ) ) {
			$margin = $attr['margin'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $margin['Desktop'], $margin['unit'] ) );
		}
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );

		$css->set_selector( '.wp-block-premium-container.premium-is-root-container.premium-block-' . $unique_id . ' .premium-container-inner-blocks-wrap' );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_range( $attr['minHeight'], 'Tablet' ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->get_responsive_css( $attr['direction'], 'Tablet' ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->get_responsive_css( $attr['alignItems'], 'Tablet' ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->get_responsive_css( $attr['justifyItems'], 'Tablet' ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->get_responsive_css( $attr['wrapItems'], 'Tablet' ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->get_responsive_css( $attr['alignContent'], 'Tablet' ) );
		}
		$css->add_property( 'row-gap', isset( $attr['rowGutter']['Tablet'] ) ? $attr['rowGutter']['Tablet'] . $attr['rowGutter']['unit'] : '20px' );
		$css->add_property( 'column-gap', isset( $attr['rowGutter']['Tablet'] ) ? $attr['columnGutter']['Tablet'] . $attr['columnGutter']['unit'] : '20px' );
		$css->set_selector( '.wp-block-premium-container.premium-is-root-container .premium-block-' . $unique_id );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_range( $attr['minHeight'], 'Tablet' ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->get_responsive_css( $attr['direction'], 'Tablet' ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->get_responsive_css( $attr['alignItems'], 'Tablet' ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->get_responsive_css( $attr['justifyItems'], 'Tablet' ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->get_responsive_css( $attr['wrapItems'], 'Tablet' ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->get_responsive_css( $attr['alignContent'], 'Tablet' ) );
		}
		if ( isset( $attr['colWidth'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-is-root-container .premium-block-' . $unique_id );
			$css->add_property( 'max-width', $css->render_range( $attr['colWidth'], 'Tablet' ) );
			$css->add_property( 'width', $css->render_range( $attr['colWidth'], 'Tablet' ) );
		}
		if ( isset( $attr['shapeTop'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-shape svg' );
			$css->add_property( 'width', $css->render_range( $attr['shapeTop']['width'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['shapeTop']['height'], 'Tablet' ) );
		}
		if ( isset( $attr['shapeBottom'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-bottom svg' );
			$css->add_property( 'width', $css->render_range( $attr['shapeBottom']['width'], 'Tablet' ) );
			$css->add_property( 'height', $css->render_range( $attr['shapeBottom']['height'], 'Tablet' ) );
		}
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}
		if ( isset( $attr['margin'] ) ) {
			$margin = $attr['margin'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $margin['Tablet'], $margin['unit'] ) );
		}
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
		}

		$css->stop_media_query();

		$css->start_media_query( $media_query['mobile'] );

		$css->set_selector( '.wp-block-premium-container.premium-is-root-container.premium-block-' . $unique_id . ' .premium-container-inner-blocks-wrap' );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_range( $attr['minHeight'], 'Mobile' ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->get_responsive_css( $attr['direction'], 'Mobile' ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->get_responsive_css( $attr['alignItems'], 'Mobile' ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->get_responsive_css( $attr['justifyItems'], 'Mobile' ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->get_responsive_css( $attr['wrapItems'], 'Mobile' ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->get_responsive_css( $attr['alignContent'], 'Mobile' ) );
		}
		$css->add_property( 'row-gap', isset( $attr['rowGutter']['Mobile'] ) ? $attr['rowGutter']['Mobile'] . $attr['rowGutter']['unit'] : '20px' );
		$css->add_property( 'column-gap', isset( $attr['rowGutter']['Mobile'] ) ? $attr['columnGutter']['Mobile'] . $attr['columnGutter']['unit'] : '20px' );
		$css->set_selector( '.wp-block-premium-container.premium-is-root-container .premium-block-' . $unique_id );
		if ( isset( $attr['minHeight'] ) ) {
			$css->add_property( 'min-height', $css->render_range( $attr['minHeight'], 'Mobile' ) );
		}
		if ( isset( $attr['direction'] ) ) {
			$css->add_property( 'flex-direction', $css->get_responsive_css( $attr['direction'], 'Mobile' ) );
		}
		if ( isset( $attr['alignItems'] ) ) {
			$css->add_property( 'align-items', $css->get_responsive_css( $attr['alignItems'], 'Mobile' ) );
		}
		if ( isset( $attr['justifyItems'] ) ) {
			$css->add_property( 'justify-content', $css->get_responsive_css( $attr['justifyItems'], 'Mobile' ) );
		}
		if ( isset( $attr['wrapItems'] ) ) {
			$css->add_property( 'flex-wrap', $css->get_responsive_css( $attr['wrapItems'], 'Mobile' ) );
		}
		if ( isset( $attr['alignContent'] ) ) {
			$css->add_property( 'align-content', $css->get_responsive_css( $attr['alignContent'], 'Mobile' ) );
		}
		if ( isset( $attr['colWidth'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-is-root-container .premium-block-' . $unique_id );
			$css->add_property( 'max-width', $css->render_range( $attr['colWidth'], 'Mobile' ) );
			$css->add_property( 'width', $css->render_range( $attr['colWidth'], 'Mobile' ) );
		}
		if ( isset( $attr['shapeTop'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-shape svg' );
			$css->add_property( 'width', $css->render_range( $attr['shapeTop']['width'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['shapeTop']['height'], 'Mobile' ) );
		}
		if ( isset( $attr['shapeBottom'] ) ) {
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id . ' .premium-top-bottom svg' );
			$css->add_property( 'width', $css->render_range( $attr['shapeBottom']['width'], 'Mobile' ) );
			$css->add_property( 'height', $css->render_range( $attr['shapeBottom']['height'], 'Mobile' ) );
		}
		if ( isset( $attr['padding'] ) ) {
			$padding = $attr['padding'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
		}
		if ( isset( $attr['margin'] ) ) {
			$margin = $attr['margin'];
			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $margin['Mobile'], $margin['unit'] ) );
		}
		if ( isset( $attr['border'] ) ) {
			$border        = $attr['border'];
			$border_width  = $border['borderWidth'];
			$border_radius = $border['borderRadius'];

			$css->set_selector( '.wp-block-premium-container.premium-block-' . $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
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
		wp_enqueue_style(
			'pbg-maps-style',
			PREMIUM_BLOCKS_URL . 'assets/css/minified/maps.min.css',
			array(),
			PREMIUM_BLOCKS_VERSION,
			'all'
		);

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
			$css->add_property( 'padding', $css->render_spacing( $map_padding['Desktop'], $map_padding['unit'] ) );
		}

		if ( isset( $attr['mapMargin'] ) ) {
			$map_margin = $attr['mapMargin'];
			$css->set_selector( $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $map_margin['Desktop'], $map_margin['unit'] ) );
		}

		if ( isset( $attr['mapBorder'] ) ) {
			$map_border        = $attr['mapBorder'];
			$map_border_width  = $map_border['borderWidth'];
			$map_border_radius = $map_border['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $map_border_width['Desktop'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $map_border_radius['Desktop'], 'px' ) );
		}
		if ( isset( $attr['mapBorder'] ) ) {
			$map_border        = $attr['mapBorder'];
			$map_border_radius = $map_border['borderRadius'];

			$css->set_selector( $unique_id . ' > .map-container' );
			$css->add_property( 'border-radius', $css->render_spacing( $map_border_radius['Desktop'], 'px' ) );
		}
		// Title.
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->render_typography( $title_typography, 'Desktop' );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Desktop'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Desktop'], $title_margin['unit'] ) );
		}
		// Description.
		if ( isset( $attr['descriptionTypography'] ) ) {
			$description_typography = $attr['descriptionTypography'];

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->render_typography( $description_typography, 'Desktop' );
		}

		if ( isset( $attr['descriptionPadding'] ) ) {
			$description_padding = $attr['descriptionPadding'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'padding', $css->render_spacing( $description_padding['Desktop'], $description_padding['unit'] ) );
		}

		if ( isset( $attr['descriptionMargin'] ) ) {
			$description_margin = $attr['descriptionMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'margin', $css->render_spacing( $description_margin['Desktop'], $description_margin['unit'] ) );
		}

		if ( isset( $attr['boxAlign'] ) ) {

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['boxAlign'], 'Desktop' ) );
		}
		$css->start_media_query( $media_query['tablet'] );

		// Map.
		if ( isset( $attr['mapPadding'] ) ) {
			$map_padding = $attr['mapPadding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $map_padding['Tablet'], $map_padding['unit'] ) );
		}

		if ( isset( $attr['mapMargin'] ) ) {
			$map_margin = $attr['mapMargin'];
			$css->set_selector( $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $map_margin['Tablet'], $map_margin['unit'] ) );
		}

		if ( isset( $attr['mapBorder'] ) ) {
			$map_border        = $attr['mapBorder'];
			$map_border_width  = $attr['mapBorder']['borderWidth'];
			$map_border_radius = $attr['mapBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $map_border_width['Tablet'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $map_border_radius['Tablet'], 'px' ) );
		}
		if ( isset( $attr['mapBorder'] ) ) {
			$map_border        = $attr['mapBorder'];
			$map_border_radius = $attr['mapBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' > .map-container' );
			$css->add_property( 'border-radius', $css->render_spacing( $map_border_radius['Tablet'], 'px' ) );
		}
		// Title.
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->render_typography( $title_typography, 'Tablet' );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Tablet'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Tablet'], $title_margin['unit'] ) );
		}
		// Description.
		if ( isset( $attr['descriptionTypography'] ) ) {
			$description_typography = $attr['descriptionTypography'];

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->render_typography( $description_typography, 'Tablet' );
		}

		if ( isset( $attr['descriptionPadding'] ) ) {
			$description_padding = $attr['descriptionPadding'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'padding', $css->render_spacing( $description_padding['Tablet'], $description_padding['unit'] ) );
		}

		if ( isset( $attr['descriptionMargin'] ) ) {
			$description_margin = $attr['descriptionMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'margin', $css->render_spacing( $description_margin['Tablet'], $description_margin['unit'] ) );
		}

		if ( isset( $attr['boxAlign'] ) ) {

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['boxAlign'], 'Tablet' ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );

		// Map.
		if ( isset( $attr['mapPadding'] ) ) {
			$map_padding = $attr['mapPadding'];
			$css->set_selector( $unique_id );
			$css->add_property( 'padding', $css->render_spacing( $map_padding['Mobile'], $map_padding['unit'] ) );
		}

		if ( isset( $attr['mapMargin'] ) ) {
			$map_margin = $attr['mapMargin'];
			$css->set_selector( $unique_id );
			$css->add_property( 'margin', $css->render_spacing( $map_margin['Mobile'], $map_margin['unit'] ) );
		}

		if ( isset( $attr['mapBorder'] ) ) {
			$map_border        = $attr['mapBorder'];
			$map_border_width  = $attr['mapBorder']['borderWidth'];
			$map_border_radius = $attr['mapBorder']['borderRadius'];

			$css->set_selector( $unique_id );
			$css->add_property( 'border-width', $css->render_spacing( $map_border_width['Mobile'], 'px' ) );
			$css->add_property( 'border-radius', $css->render_spacing( $map_border_radius['Mobile'], 'px' ) );
		}
		if ( isset( $attr['mapBorder'] ) ) {
			$map_border        = $attr['mapBorder'];
			$map_border_radius = $attr['mapBorder']['borderRadius'];

			$css->set_selector( $unique_id . ' > .map-container' );
			$css->add_property( 'border-radius', $css->render_spacing( $map_border_radius['Mobile'], 'px' ) );
		}
		// Title.
		if ( isset( $attr['titleTypography'] ) ) {
			$title_typography = $attr['titleTypography'];

			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->render_typography( $title_typography, 'Mobile' );
		}

		if ( isset( $attr['titlePadding'] ) ) {
			$title_padding = $attr['titlePadding'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'padding', $css->render_spacing( $title_padding['Mobile'], $title_padding['unit'] ) );
		}

		if ( isset( $attr['titleMargin'] ) ) {
			$title_margin = $attr['titleMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__title' );
			$css->add_property( 'margin', $css->render_spacing( $title_margin['Mobile'], $title_margin['unit'] ) );
		}
		// Description.
		if ( isset( $attr['descriptionTypography'] ) ) {
			$description_typography = $attr['descriptionTypography'];

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->render_typography( $description_typography, 'Mobile' );
		}

		if ( isset( $attr['descriptionPadding'] ) ) {
			$description_padding = $attr['descriptionPadding'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'padding', $css->render_spacing( $description_padding['Mobile'], $description_padding['unit'] ) );
		}

		if ( isset( $attr['descriptionMargin'] ) ) {
			$description_margin = $attr['descriptionMargin'];
			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'margin', $css->render_spacing( $description_margin['Mobile'], $description_margin['unit'] ) );
		}

		if ( isset( $attr['boxAlign'] ) ) {

			$css->set_selector( $unique_id . ' .premium-maps__desc' );
			$css->add_property( 'text-align', $css->get_responsive_css( $attr['boxAlign'], 'Mobile' ) );
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
		 $desktop        = '';
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
