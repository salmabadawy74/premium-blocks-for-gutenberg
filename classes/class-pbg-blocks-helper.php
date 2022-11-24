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

		self::$config = apply_filters( 'pb_settings', get_option( 'pbg_blocks_settings', array() ) );
		$allow_json   = isset( self::$config['premium-upload-json'] ) ? self::$config['premium-upload-json'] : true;
		if ( $allow_json ) {
			add_filter( 'upload_mimes', array( $this, 'pbg_mime_types' ) ); // phpcs:ignore WordPressVIPMinimum.Hooks.RestrictedHooks.upload_mimes
			add_filter( 'wp_check_filetype_and_ext', array( $this, 'fix_mime_type_json' ), 75, 4 );
		}
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

		add_action( 'wp_enqueue_scripts', array( $this, 'load_dashicons_front_end' ) );

		add_action( 'pbg_get_css_files', array( $this, 'add_blocks_editor_styles' ) );
	}





	/**
	 * Add blocks editor style
	 *
	 * @return void
	 */
	public function add_blocks_editor_styles() {
		Pbg_Style_Generator::pbg_add_css( 'assets/css/minified/blockseditor.min.css' );
		Pbg_Style_Generator::pbg_add_css( 'assets/css/minified/editorpanel.min.css' );

		$is_rtl = is_rtl() ? true : false;
		$is_rtl ? Pbg_Style_Generator::pbg_add_css( 'assets/css/minified/style-blocks-rtl.min.css' ) : '';

		if ( is_array( self::$blocks ) && ! empty( self::$blocks ) ) {
			foreach ( self::$blocks as $slug => $value ) {

				if ( false === $value ) {
					continue;
				}

				if ( 'pricing-table' === $slug ) {
					Pbg_Style_Generator::pbg_add_css( 'assets/css/minified/price.min.css' );
					Pbg_Style_Generator::pbg_add_css( 'assets/css/minified/badge.min.css' );
				}
				if ( 'pricing-table' === $slug || 'icon-box' === $slug || 'person' === $slug ) {
					Pbg_Style_Generator::pbg_add_css( 'assets/css/minified/text.min.css' );
				}
				if ( 'person' === $slug ) {
					Pbg_Style_Generator::pbg_add_css( 'assets/css/minified/image.min.css' );
					Pbg_Style_Generator::pbg_add_css( 'assets/css/minified/icon-group.min.css' );
				}

				Pbg_Style_Generator::pbg_add_css( "assets/css/minified/{$slug}.min.css" );
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
		$settings_data       = array(
			'ajaxurl'           => esc_url( admin_url( 'admin-ajax.php' ) ),
			'nonce'             => wp_create_nonce( 'pa-blog-block-nonce' ),
			'settingPath'       => admin_url( 'admin.php?page=pb_panel&path=settings' ),
			'defaultAuthImg'    => PREMIUM_BLOCKS_URL . 'assets/img/author.jpg',
			'activeBlocks'      => self::$blocks,
			'tablet_breakpoint' => PBG_TABLET_BREAKPOINT,
			'mobile_breakpoint' => PBG_MOBILE_BREAKPOINT,
			'shapes'            => $this->getSvgShapes(),
			'admin_url'         => admin_url(),
		);

		wp_register_script(
			'pbg-settings-js',
			PREMIUM_BLOCKS_URL . 'assets/js/build/pbg.js',
			array( 'wp-element' ),
			PREMIUM_BLOCKS_VERSION,
			true
		);

		wp_register_script(
			'pbg-blocks-js',
			PREMIUM_BLOCKS_URL . 'assets/js/build/index.js',
			array( 'wp-api-fetch', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-api', 'wp-edit-post', 'pbg-settings-js' ),
			PREMIUM_BLOCKS_VERSION,
			true
		);

		wp_localize_script(
			'pbg-blocks-js',
			'PremiumBlocksSettings',
			$settings_data
		);

		wp_localize_script(
			'pbg-settings-js',
			'PremiumBlocksSettings',
			$settings_data
		);

		wp_localize_script(
			'pbg-settings-js',
			'FontAwesomeConfig',
			array(
				'FontAwesomeEnabled' => $is_fa_enabled,
			)
		);
		wp_localize_script(
			'pbg-settings-js',
			'JsonUploadFile',
			array(
				'JsonUploadEnabled' => $allow_json,
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

		$is_rtl = is_rtl() ? true : false;

		if ( $is_rtl ) {
			wp_enqueue_style(
				'pbg-style',
				PREMIUM_BLOCKS_URL . 'assets/css/minified/style-blocks-rtl.min.css',
				array(),
				PREMIUM_BLOCKS_VERSION,
				'all'
			);
		}

		if ( $is_fa_enabled ) {
			wp_enqueue_style(
				'pbg-fontawesome',
				// 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
				'https://use.fontawesome.com/releases/v5.15.1/css/all.css'
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
			if ( file_exists( PREMIUM_BLOCKS_PATH . "blocks-config/{$slug}/index.php" ) ) {
				require_once PREMIUM_BLOCKS_PATH . "blocks-config/{$slug}/index.php";
			}
			if ( 'pricing-table' === $slug || 'icon-box' === $slug || 'person' === $slug ) {
				require_once PREMIUM_BLOCKS_PATH . 'blocks-config/text.php';
				if ( 'pricing-table' === $slug ) {
					require_once PREMIUM_BLOCKS_PATH . 'blocks-config/price.php';
					require_once PREMIUM_BLOCKS_PATH . 'blocks-config/badge.php';
				}
				if ( 'person' === $slug ) {
					require_once PREMIUM_BLOCKS_PATH . 'blocks-config/image.php';
					require_once PREMIUM_BLOCKS_PATH . 'blocks-config/icon-group.php';
				}
			} elseif ( $slug === 'content-switcher' ) {
				require_once PREMIUM_BLOCKS_PATH . 'blocks-config/switcher-child.php';
			}
		}

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

		if ( isset( $attr['imageBorder'] ) ) {
			$image_border        = $attr['imageBorder'];
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

		if ( isset( $attr['imageBorder'] ) ) {
			$image_border        = $attr['imageBorder'];
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

		if ( isset( $attr['imageBorder'] ) ) {
			$image_border        = $attr['imageBorder'];
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
