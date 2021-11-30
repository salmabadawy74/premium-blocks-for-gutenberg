<?php
/**
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package Kadence Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class to Enqueue CSS/JS of all the blocks.
 *
 * @category class
 */
class Premium_Blocks_Frontend {

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
	 * Google schema to add to head
	 *
	 * @var null
	 */
	public static $faq_schema = null;

	/**
	 * Instance of this class
	 *
	 * @var null
	 */
	private static $instance = null;

	/**
	 * Instance Control
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	/**
	 * Class Constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'on_init' ), 20 );

	}
	/**
	 * Check for logged in, logged out visibility settings.
	 *
	 * @param mixed $block_content The block content.
	 * @param array $block The block data.
	 *
	 * @return mixed Returns the block content.
	 */



	/**
	 * On init startup.
	 */
	public function on_init() {
		if ( defined( 'TOOLSET_VERSION' ) ) {
			add_filter( 'kadence_blocks_render_head_css', array( $this, 'add_toolset_depreciated_filter_compatibility' ), 10, 3 );
		}
		// Only load if Gutenberg is available.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}
		register_block_type(
			'premium/newsletter',
			array(
				'render_callback' => array( $this, 'render_form_css' ),
				'editor_script'   => 'kadence-blocks-js',
				'editor_style'    => 'kadence-blocks-editor-css',
			)
		);

	}
	/**
	 * Allow Columns to be looked at for inner content.
	 *
	 * @param array $allowed inner blocks.
	 */

	/**
	 * Render Inline CSS helper function
	 *
	 * @param array  $css the css for each rendered block.
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
	 * Render Row  Block
	 *
	 * @param array $attributes the blocks attribtues.
	 */

	/**
	 * Check if block should render inline.
	 *
	 * @param string $name the blocks name.
	 * @param string $unique_id the blocks unique id.
	 */
	public function should_render_inline( $name, $unique_id ) {
		if ( doing_filter( 'the_content' ) || apply_filters( 'kadence_blocks_force_render_inline_css_in_content', false, $name, $unique_id ) || is_customize_preview() ) {
			return true;
		}
		return false;
	}


	/**
	 * Render form CSS In Head
	 *
	 * @param array $attributes the blocks attributes.
	 */
	public function render_form_css_head( $attributes ) {
		if ( ! wp_style_is( 'kadence-blocks-form', 'enqueued' ) ) {
			$this->enqueue_style( 'kadence-blocks-form' );
		}
		if ( isset( $attributes['uniqueID'] ) ) {
			$unique_id = $attributes['uniqueID'];
			$style_id  = 'kt-blocks' . esc_attr( $unique_id );
			if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'kadence_blocks_render_head_css', true, 'form', $attributes ) ) {
				// Filter attributes for easier dynamic css.
				$attributes = apply_filters( 'kadence_blocks_form_render_block_attributes', $attributes );
				$css        = $this->blocks_form_array( $attributes, $unique_id );
				if ( ! empty( $css ) ) {
					$this->render_inline_css( $css, $style_id );
				}
			}
		}
	}
	/**
	 * Render form CSS Inline
	 *
	 * @param array  $attributes the blocks attributes.
	 * @param string $content the blocks content.
	 */
	public function render_form_css( $attributes, $content ) {
		if ( ! wp_style_is( 'kadence-blocks-form', 'enqueued' ) ) {
			wp_enqueue_style( 'kadence-blocks-form' );
		}
		if ( isset( $attributes['uniqueID'] ) ) {
			$unique_id = $attributes['uniqueID'];
			$style_id  = 'kt-blocks' . esc_attr( $unique_id );
			if ( ! wp_style_is( $style_id, 'enqueued' ) ) {
				// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
				$attributes = apply_filters( 'kadence_blocks_form_render_block_attributes', $attributes );
				wp_enqueue_script( 'kadence-blocks-form' );
				if ( isset( $attributes['recaptcha'] ) && $attributes['recaptcha'] ) {
					if ( isset( $attributes['recaptchaVersion'] ) && 'v2' === $attributes['recaptchaVersion'] ) {
						wp_enqueue_script( 'kadence-blocks-google-recaptcha-v2' );
					} else {
						wp_enqueue_script( 'kadence-blocks-google-recaptcha-v3' );
					}
				}
				$css = $this->blocks_form_array( $attributes, $unique_id );
				if ( ! empty( $css ) ) {
					if ( $this->should_render_inline( 'form', $unique_id ) ) {
						$content = '<style id="' . $style_id . '">' . $css . '</style>' . $content;
					} else {
						$this->render_inline_css( $css, $style_id, true );
					}
				}
			}
		}
		return $content;
	}
	/**
	 * Render Gallery CSS in Head
	 *
	 * @param array $attributes the blocks attribtues.
	 */
	public function render_advancedgallery_css_head( $attributes ) {
		if ( ! wp_style_is( 'kadence-blocks-gallery', 'enqueued' ) ) {
			$this->enqueue_style( 'kadence-blocks-gallery' );
		}
		if ( isset( $attributes['uniqueID'] ) ) {
			$unique_id = $attributes['uniqueID'];
			$style_id  = 'kt-blocks' . esc_attr( $unique_id );
			if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'kadence_blocks_render_head_css', true, 'advancedgallery', $attributes ) ) {
				// Filter attributes for easier dynamic css.
				$attributes = apply_filters( 'kadence_blocks_advancedgallery_render_block_attributes', $attributes );
				$css        = $this->blocks_advancedgallery_array( $attributes, $unique_id );
				if ( ! empty( $css ) ) {
					$this->render_inline_css( $css, $style_id );
				}
			}
		}
	}
	/**
	 * Render Gallery CSS
	 *
	 * @param array  $attributes the blocks attribtues.
	 * @param string $content the blocks content.
	 */

	/**
	 *
	 * Register and Enqueue block assets
	 *
	 * @since 1.0.0
	 */

	/**
	 * Registers scripts and styles.
	 */
	public function register_scripts() {
		// If in the backend, bail out.
		if ( is_admin() || $this->is_rest() ) {
			return;
		}
		// Lets register all the block styles.
		wp_register_style( 'kadence-blocks-restaurant-menu', KADENCE_BLOCKS_URL . 'dist/blocks/restaurant.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-rowlayout', KADENCE_BLOCKS_URL . 'dist/blocks/row.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-accordion', KADENCE_BLOCKS_URL . 'dist/blocks/accordion.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-btn', KADENCE_BLOCKS_URL . 'dist/blocks/btn.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-gallery', KADENCE_BLOCKS_URL . 'dist/blocks/gallery.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		// wp_register_style( 'kadence-blocks-icon', KADENCE_BLOCKS_URL . 'dist/blocks/icon.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-icon', false );
		wp_register_style( 'kadence-blocks-iconlist', KADENCE_BLOCKS_URL . 'dist/blocks/iconlist.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-tabs', KADENCE_BLOCKS_URL . 'dist/blocks/tabs.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-spacer', KADENCE_BLOCKS_URL . 'dist/blocks/spacer.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-infobox', KADENCE_BLOCKS_URL . 'dist/blocks/infobox.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		// wp_register_style( 'kadence-blocks-heading', KADENCE_BLOCKS_URL . 'dist/blocks/heading.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-heading', false );
		wp_register_style( 'kadence-blocks-form', KADENCE_BLOCKS_URL . 'dist/blocks/form.style.build.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_style( 'kadence-blocks-testimonials', KADENCE_BLOCKS_URL . 'dist/blocks/testimonials.style.build.css', array(), KADENCE_BLOCKS_VERSION );

		// wp_enqueue_style( 'kadence-blocks-style-css', KADENCE_BLOCKS_URL . 'dist/blocks.style.build.css', array(), KADENCE_BLOCKS_VERSION );

		// Next all the extras that are shared.
		wp_register_style( 'kadence-simplelightbox-css', KADENCE_BLOCKS_URL . 'dist/assets/css/simplelightbox.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_script( 'kadence-simplelightbox', KADENCE_BLOCKS_URL . 'dist/assets/js/simplelightbox.min.js', array(), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-videolight-js', KADENCE_BLOCKS_URL . 'dist/assets/js/kb-init-video-popup.min.js', array( 'kadence-simplelightbox' ), KADENCE_BLOCKS_VERSION, true );
		wp_register_style( 'kadence-blocks-magnific-css', KADENCE_BLOCKS_URL . 'dist/magnific.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_script( 'magnific-popup', KADENCE_BLOCKS_URL . 'dist/magnific.js', array(), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-magnific-js', KADENCE_BLOCKS_URL . 'dist/kt-init-video-popup.js', array( 'jquery', 'magnific-popup' ), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-gallery-magnific-init', KADENCE_BLOCKS_URL . 'dist/kb-gallery-magnific-init.js', array( 'jquery', 'magnific-popup' ), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-simplelightbox-init', KADENCE_BLOCKS_URL . 'dist/kb-gallery-simple-init.js', array( 'kadence-simplelightbox' ), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-accordion-js', KADENCE_BLOCKS_URL . 'dist/kt-accordion-min.js', array(), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-tabs-js', KADENCE_BLOCKS_URL . 'dist/kt-tabs-min.js', array( 'jquery' ), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'jarallax', KADENCE_BLOCKS_URL . 'dist/jarallax.min.js', array(), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-form', KADENCE_BLOCKS_URL . 'dist/assets/js/kb-form-block.min.js', array(), KADENCE_BLOCKS_VERSION, true );
		wp_localize_script(
			'kadence-blocks-form',
			'kadence_blocks_form_params',
			array(
				'ajaxurl'       => admin_url( 'admin-ajax.php' ),
				'error_message' => __( 'Please fix the errors to proceed', 'kadence-blocks' ),
				'nonce'         => wp_create_nonce( 'kb_form_nonce' ),
				'required'      => __( 'is required', 'kadence-blocks' ),
				'mismatch'      => __( 'does not match', 'kadence-blocks' ),
				'validation'    => __( 'is not valid', 'kadence-blocks' ),
				'duplicate'     => __( 'requires a unique entry and this value has already been used', 'kadence-blocks' ),
				'item'          => __( 'Item', 'kadence-blocks' ),
			)
		);
		$recaptcha_site_key = get_option( 'kadence_blocks_recaptcha_site_key' );
		if ( ! $recaptcha_site_key ) {
			$recaptcha_site_key = 'missingkey';
		}
		wp_register_script( 'kadence-blocks-google-recaptcha-v3', 'https://www.google.com/recaptcha/api.js?render=' . esc_attr( $recaptcha_site_key ), array(), KADENCE_BLOCKS_VERSION, true );
		$recaptcha_script = "grecaptcha.ready(function () { var recaptchaResponse = document.getElementById('kb_recaptcha_response'); if ( recaptchaResponse ) { grecaptcha.execute('" . esc_attr( $recaptcha_site_key ) . "', { action: 'kb_form' }).then(function (token) { recaptchaResponse.value = token; }); } var kb_recaptcha_inputs = document.getElementsByClassName('kb_recaptcha_response'); if ( ! kb_recaptcha_inputs.length ) { return; } for (var i = 0; i < kb_recaptcha_inputs.length; i++) { const e = i; grecaptcha.execute('" . esc_attr( $recaptcha_site_key ) . "', { action: 'kb_form' }).then(function (token) { kb_recaptcha_inputs[e].setAttribute('value', token); }); } });";
		wp_add_inline_script( 'kadence-blocks-google-recaptcha-v3', $recaptcha_script, 'after' );
		// ?render=explicit&onload=kbOnloadV2Callback
		wp_register_script( 'kadence-blocks-google-recaptcha-v2', 'https://www.google.com/recaptcha/api.js?render=explicit&onload=kbOnloadV2Callback', array( 'jquery' ), KADENCE_BLOCKS_VERSION, true );
		// wp_register_script( 'kadence-blocks-recaptcha-v2-form', KADENCE_BLOCKS_URL . 'dist/assets/js/kb-form-recaptcha-v2.js', array( 'jquery', 'kadence-blocks-google-recaptcha-v2' ), KADENCE_BLOCKS_VERSION, true );
		// wp_localize_script(
		// 'kadence-blocks-recaptcha-v2-form',
		// 'kadence_blocks_recaptcha_v2_form_params',
		// array(
		// 'sitekey' => $recaptcha_site_key,
		// )
		// );
		// $recaptcha_v2_script = "var kbOnloadV2Callback = function(){ var kb_block_forms = document.getElementsByClassName('.kadence-blocks-g-recaptcha-v2'); if ( ! kb_block_forms ) { return; } for (var i = 0; i < kb_block_forms.length; i++) { const e = kb_block_forms[i].id; grecaptcha.render( kb_block_forms[i].id, {'sitekey' : '" . esc_attr( $recaptcha_site_key ) . "',}); }}";
		$recaptcha_v2_script = "var kbOnloadV2Callback = function(){jQuery( '.wp-block-kadence-form' ).find( '.kadence-blocks-g-recaptcha-v2' ).each( function() {grecaptcha.render( jQuery( this ).attr( 'id' ), {'sitekey' : '" . esc_attr( $recaptcha_site_key ) . "',});});}";
		wp_add_inline_script( 'kadence-blocks-google-recaptcha-v2', $recaptcha_v2_script, 'before' );

		wp_register_script( 'kadence-blocks-parallax-js', KADENCE_BLOCKS_URL . 'dist/kt-init-parallax.js', array( 'jarallax' ), KADENCE_BLOCKS_VERSION, true );
		wp_register_style( 'kadence-blocks-pro-slick', KADENCE_BLOCKS_URL . 'dist/vendor/kt-blocks-slick.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_script( 'kadence-slick', KADENCE_BLOCKS_URL . 'dist/vendor/slick.min.js', array( 'jquery' ), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-slick-init', KADENCE_BLOCKS_URL . 'dist/kt-slick-init.js', array( 'jquery', 'kadence-slick' ), KADENCE_BLOCKS_VERSION, true );
		wp_register_style( 'kadence-blocks-tiny-slider', KADENCE_BLOCKS_URL . 'dist/assets/css/tiny-slider.css', array(), KADENCE_BLOCKS_VERSION );
		wp_register_script( 'kadence-blocks-tiny-slider', KADENCE_BLOCKS_URL . 'dist/assets/js/tiny-slider.min.js', array(), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-tiny-slider-init', KADENCE_BLOCKS_URL . 'dist/assets/js/kb-tiny-init.min.js', array( 'kadence-blocks-tiny-slider' ), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-video-bg', KADENCE_BLOCKS_URL . 'dist/kb-init-html-bg-video.js', array(), KADENCE_BLOCKS_VERSION, true );
		wp_register_script( 'kadence-blocks-masonry-init', KADENCE_BLOCKS_URL . 'dist/kb-masonry-init.js', array( 'masonry' ), KADENCE_BLOCKS_VERSION, true );
	}
	/**
	 * Registers and enqueue's script.
	 *
	 * @param string $handle the handle for the script.
	 */
	public function enqueue_script( $handle ) {
		if ( ! wp_script_is( $handle, 'registered' ) ) {
			$this->register_scripts();
		}
		wp_enqueue_script( $handle );
	}
	/**
	 * Registers and enqueue's styles.
	 *
	 * @param string $handle the handle for the script.
	 */
	public function enqueue_style( $handle ) {
		if ( ! wp_style_is( $handle, 'registered' ) ) {
			$this->register_scripts();
		}
		wp_enqueue_style( $handle );
		if ( 'kadence-blocks-icon' === $handle ) {
			$icon_css = '.kt-svg-style-stacked .kt-svg-icon{border:0px solid #444444;transition:all .3s ease-in-out}.kt-svg-icon-wrap{display:inline-block}.kt-svg-icon-wrap a.kt-svg-icon-link{display:block;border:0;text-decoration:none;box-shadow:none}.kt-svg-icon-wrap a.kt-svg-icon-link:hover{box-shadow:none}.kb-icon-valign-top{-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-flex;display:flex}.kb-icon-valign-middle{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}.kb-icon-valign-bottom{-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-flex;display:flex}';
			wp_add_inline_style( 'kadence-blocks-icon', $icon_css );
		}
		if ( 'kadence-blocks-heading' === $handle ) {
			$heading_css = '.wp-block-kadence-advancedheading mark{color:#f76a0c;background:transparent;border-style:solid;border-width:0}';
			// Short term fix for an issue with heading wrapping.
			if ( class_exists( '\Kadence\Theme' ) ) {
				$heading_css .= '.single-content .kadence-advanced-heading-wrapper h1, .single-content .kadence-advanced-heading-wrapper h2, .single-content .kadence-advanced-heading-wrapper h3, .single-content .kadence-advanced-heading-wrapper h4, .single-content .kadence-advanced-heading-wrapper h5, .single-content .kadence-advanced-heading-wrapper h6 {margin: 1.5em 0 .5em;}.single-content .kadence-advanced-heading-wrapper+* { margin-top:0;}';
			}
			wp_add_inline_style( 'kadence-blocks-heading', $heading_css );
		}
	}






}
Premium_Blocks_Frontend::get_instance();
