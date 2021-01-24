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
	public static $block_list;
	public static $page_limit;

	/**
	 * UAG Block Flag
	 *
	 * @since 1.13.4
	 * @var premium_flag
	 */
	public static $premium_flag = false;

	/**
	 * Current Block List
	 *
	 * @since 1.13.4
	 * @var current_block_list
	 */
	public static $current_block_list = array();

	/**
	 * Constructor for the class
	 */

	public function __construct() {
		require PREMIUM_BLOCKS_PATH . 'includes/class-pbg-blocks-config.php';
		self::$block_list = Config::get_block_attributes();
		// Gets Active Blocks
		self::$blocks = PBG_Admin::get_enabled_keys();
		// Gets Plugin Admin Settings
		self::$config = PBG_Settings::get_enabled_keys();
		// Enqueue Editor Assets
		add_action( 'enqueue_block_editor_assets', array( $this, 'pbg_editor' ) );
		// Enqueue Frontend Styles
		add_action( 'enqueue_block_assets', array( $this, 'pbg_frontend' ) );
		add_action( 'wp', array( $this, 'generate_stylesheet' ), 99 );
		// Enqueue Styles
		add_action( 'wp_head', array( $this, 'print_stylesheet' ), 80 );
		add_filter( 'redirect_canonical', array( $this, 'override_canonical' ), 1, 2 );
		// Register Premium Blocks category
		add_filter( 'block_categories', array( $this, 'register_premium_category' ), 10, 1 );
		add_action( 'wp_ajax_nopriv_premium_pagination', array( $this, 'render_pagination' ) );

		add_action( 'wp_ajax_premium_pagination', array( $this, 'render_pagination' ) );
	}

	/**
	 * Enqueue Editor CSS/JS for Premium Blocks
	 *
	 * @since 1.0.0
	 * @access public
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
				'image_sizes'       => self::get_image_sizes(),
				'post_types'        => self::get_post_types(),
				'all_taxonomy'      => self::get_related_taxonomy(),
				'taxonomy_list'     => self::get_taxonomy_list(),
				'ajaxurl'           => admin_url( 'admin-ajax.php' ),
				'nonce'             => wp_create_nonce( 'pa-blog-block-nonce' ),

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
	 * Enqueue Frontend CSS for Premium Blocks
	 *
	 * @since 1.0.0
	 * @access public
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

	//	$is_person_enabled = self::$blocks['person'];

	//	$is_icon_list_enabled = self::$blocks['iconList'];
		$is_scroll_enabled    = self::$blocks['scroll'];
		$is_blog_enabled      = self::$blocks['blog'];

		$is_content_switcher_enabled = self::$blocks['contentSwitcher'];

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

		// if ( $is_person_enabled ) {
		// 	wp_enqueue_script(
		// 		'person-js',
		// 		PREMIUM_BLOCKS_URL . 'assets/js/person.js',
		// 		array( 'jquery' ),
		// 		PREMIUM_BLOCKS_VERSION
		// 	);
		// }

		// if ( $is_icon_list_enabled ) {
		// 	wp_enqueue_script(
		// 		'icon-list-js',
		// 		PREMIUM_BLOCKS_URL . 'assets/js/icon-list.js',
		// 		array( 'jquery' ),
		// 		PREMIUM_BLOCKS_VERSION
		// 	);
		// }

		if ( $is_content_switcher_enabled ) {
			wp_enqueue_script(
				'content-switcher-js',
				PREMIUM_BLOCKS_URL . 'assets/js/content-switcher.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		}
		if ( $is_scroll_enabled ) {
			wp_enqueue_script(
				'scroll-js',
				PREMIUM_BLOCKS_URL . 'assets/js/scroll.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
		
		}
		if ( $is_blog_enabled ) {
			wp_enqueue_script(
				'Blog-js',
				PREMIUM_BLOCKS_URL . 'assets/js/Blog.js',
				array( 'jquery' ),
				PREMIUM_BLOCKS_VERSION
			);
			wp_enqueue_script( 'slick.min-js', PREMIUM_BLOCKS_URL . 'assets/js/slick.min.js', array( 'jquery' )
			);
			wp_enqueue_script( 'isotope.min-js', PREMIUM_BLOCKS_URL . 'assets/js/isotope.min.js', array( 'jquery' ) );
			wp_enqueue_script( 'imagesloaded.min-js', PREMIUM_BLOCKS_URL . 'assets/js/imagesloaded.min.js',  array( 'jquery' ) );
			wp_enqueue_style( 'slick', PREMIUM_BLOCKS_URL . 'assets/css/slick.css');
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
		wp_localize_script(
			'pbg-editor',
			'PremiumSettings',
			array(
				'ajaxurl' => esc_url( admin_url( 'admin-ajax.php' ) ),
				'nonce'   => wp_create_nonce( 'pa-blog-block-nonce' ),
			)
		);
	}

	/**
	 * Add Premium Blocks category to Blocks Categories
	 *
	 * @since 1.0.0
	 * @access public
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

	public static function get_post_types() {
		
		$post_types = get_post_types(
			array(
				'public'       => true,
				'show_in_rest' => true,
			),
			'objects'
		);

		$options = array();

		foreach ( $post_types as $post_type ) {
			if ( 'product' === $post_type->name ) {
				continue;
			}

			if ( 'attachment' === $post_type->name ) {
				continue;
			}

			$options[] = array(
				'value' => $post_type->name,
				'label' => $post_type->label,
			);
		}

		return apply_filters( 'pbg_loop_post_types', $options );
	}

	/**
	 * Creates and returns an instance of the class
	 *
	 * @since 1.0.0
	 * @access public
	 * return object
	 */
	public static function get_instance() {
		if ( self::$instance == null ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	public static function get_image_sizes() {
		global $_wp_additional_image_sizes;

		$sizes       = get_intermediate_image_sizes();
		$image_sizes = array();

		$image_sizes[] = array(
			'value' => 'full',
			'label' => esc_html__( 'Full' ),
		);

		foreach ( $sizes as $size ) {
			if ( in_array( $size, array( 'thumbnail', 'medium', 'medium_large', 'large' ), true ) ) {
				$image_sizes[] = array(
					'value' => $size,
					'label' => ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
				);
			} else {
				$image_sizes[] = array(
					'value' => $size,
					'label' => sprintf(
						'%1$s (%2$sx%3$s)',
						ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
						$_wp_additional_image_sizes[ $size ]['width'],
						$_wp_additional_image_sizes[ $size ]['height']
					),
				);
			}
		}

		$image_sizes = apply_filters( 'pbg_post_featured_image_sizes', $image_sizes );

		return $image_sizes;
	}

	/**
	 * Generates stylesheet and appends in head tag.
	 *
	 * @since 0.0.1
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
				$this->_generate_stylesheet( $this_post );
				return;
			}
		}

		if ( is_single() || is_page() || is_404() ) {
			global $post;
			$this_post = $post;

			if ( ! is_object( $this_post ) ) {
				return;
			}

			$this->_generate_stylesheet( $this_post );
		} elseif ( is_archive() || is_home() || is_search() ) {
			global $wp_query;

			foreach ( $wp_query as $post ) {
				$this->_generate_stylesheet( $post );
			}
		}

		// self::file_write( self::$stylesheet, 'css' );
	}

	/**
	 * Generates stylesheet in loop.
	 *
	 * @param object $this_post Current Post Object.
	 * @since 1.7.0
	 */

	public function _generate_stylesheet( $this_post ) {
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
	 * Print the Stylesheet in header.
	 */

	public function print_stylesheet() {
		global $content_width;
		if ( is_null( self::$stylesheet ) || '' === self::$stylesheet ) {
			return;
		}

		self::$stylesheet = str_replace( '#CONTENT_WIDTH#', $content_width . 'px', self::$stylesheet );

		// self::file_write( self::$stylesheet, 'css' );

		ob_start(); ?>
<style type='text/css' media='all' id='premium-style-frontend'>
<?php echo self::$stylesheet;
?>

</style>
<?php
		ob_end_flush();
	}
	public static function get_related_taxonomy() {
		$post_types = self::get_post_types();

		$return_array = array();

		foreach ( $post_types as $key => $value ) {
			$post_type = $value['value'];

			$taxonomies = get_object_taxonomies( $post_type, 'objects' );
			$data       = array();

			foreach ( $taxonomies as $tax_slug => $tax ) {
				if ( ! $tax->public || ! $tax->show_ui || ! $tax->show_in_rest ) {
					continue;
				}

				$data[ $tax_slug ] = $tax;

				$terms = get_terms( $tax_slug );

				$related_tax = array();

				if ( ! empty( $terms ) ) {
					foreach ( $terms as $t_index => $t_obj ) {
						$related_tax[] = array(
							'id'   => $t_obj->term_id,
							'name' => $t_obj->name,
						);
					}

					$return_array[ $post_type ]['terms'][ $tax_slug ] = $related_tax;
				}
			}

			$return_array[ $post_type ]['taxonomy'] = $data;
		}

		return apply_filters( 'pbg_post_loop_taxonomies', $return_array );
	}

	/**
	 * Get all taxonomies list.
	 *
	 * @since 1.18.0
	 * @access public
	 */
	public static function get_taxonomy_list() {
		$post_types = self::get_post_types();

		$return_array = array();

		foreach ( $post_types as $key => $value ) {
			$post_type = $value['value'];

			$taxonomies = get_object_taxonomies( $post_type, 'objects' );
			$data       = array();

			$get_singular_name = get_post_type_object( $post_type );
			foreach ( $taxonomies as $tax_slug => $tax ) {
				if ( ! $tax->public || ! $tax->show_ui || ! $tax->show_in_rest ) {
					continue;
				}

				$data[ $tax_slug ] = $tax;

				$terms = get_terms( $tax_slug );

				$related_tax_terms = array();

				if ( ! empty( $terms ) ) {
					foreach ( $terms as $t_index => $t_obj ) {
						$related_tax_terms[] = array(
							'id'            => $t_obj->term_id,
							'name'          => $t_obj->name,
							'count'         => $t_obj->count,
							'link'          => get_term_link( $t_obj->term_id ),
							'singular_name' => $get_singular_name->labels->singular_name,
						);
					}

					$return_array[ $post_type ]['terms'][ $tax_slug ] = $related_tax_terms;
				}

				$newcategoriesList = get_terms(
					$tax_slug,
					array(
						'hide_empty' => true,
						'parent'     => 0,
					)
				);

				$related_tax = array();

				if ( ! empty( $newcategoriesList ) ) {
					foreach ( $newcategoriesList as $t_index => $t_obj ) {
						$child_arg     = array(
							'hide_empty' => true,
							'parent'     => $t_obj->term_id,
						);
						$child_cat     = get_terms( $tax_slug, $child_arg );
						$child_cat_arr = $child_cat ? $child_cat : null;
						$related_tax[] = array(
							'id'            => $t_obj->term_id,
							'name'          => $t_obj->name,
							'count'         => $t_obj->count,
							'link'          => get_term_link( $t_obj->term_id ),
							'singular_name' => $get_singular_name->labels->singular_name,
							'children'      => $child_cat_arr,
						);
					}

					$return_array[ $post_type ]['without_empty_taxonomy'][ $tax_slug ] = $related_tax;
				}

				$newcategoriesList_empty_tax = get_terms(
					$tax_slug,
					array(
						'hide_empty' => false,
						'parent'     => 0,
					)
				);

				$related_tax_empty_tax = array();

				if ( ! empty( $newcategoriesList_empty_tax ) ) {
					foreach ( $newcategoriesList_empty_tax as $t_index => $t_obj ) {
						$child_arg_empty_tax     = array(
							'hide_empty' => false,
							'parent'     => $t_obj->term_id,
						);
						$child_cat_empty_tax     = get_terms( $tax_slug, $child_arg_empty_tax );
						$child_cat_empty_tax_arr = $child_cat_empty_tax ? $child_cat_empty_tax : null;
						$related_tax_empty_tax[] = array(
							'id'            => $t_obj->term_id,
							'name'          => $t_obj->name,
							'count'         => $t_obj->count,
							'link'          => get_term_link( $t_obj->term_id ),
							'singular_name' => $get_singular_name->labels->singular_name,
							'children'      => $child_cat_empty_tax_arr,
						);
					}

					$return_array[ $post_type ]['with_empty_taxonomy'][ $tax_slug ] = $related_tax_empty_tax;
				}
			}
			$return_array[ $post_type ]['taxonomy'] = $data;
		}

		return apply_filters( 'pbg_taxonomies_list', $return_array );
	}

	/**
	 * Generates CSS recurrsively.
	 *
	 * @param object $block The block object.
	 * @since 0.0.1
	 */
	public function override_canonical( $redirect_url, $requested_url ) {

		global $wp_query;

		if ( is_array( $wp_query->query ) ) {

			if ( true === $wp_query->is_singular
				&& - 1 === $wp_query->current_post
				&& true === $wp_query->is_paged
			) {
				$redirect_url = false;
			}
		}

		return $redirect_url;
	}

	public function get_block_css( $block ) {

        // @codingStandardsIgnoreStart

        $block = ( array ) $block;

        $name = $block['blockName'];
        $css  = array();
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

        if (strpos($name, 'premium/') !== false) {
            self::$premium_flag = true;
        }

        switch ($name) {
            case 'premium/icon-list':
            $css += $this->get_icon_list_css($blockattr, $block_id);
            break;
            case 'premium/content-switcher':
            $css += $this->get_content_switcher_css($blockattr, $block_id);
            break;
            case 'premium/post-blog':
                $css += $this->post_css($blockattr, $block_id);
                break;
            default:
            // Nothing to do here.
            break;
        }

        if (isset($block['innerBlocks'])) {
            foreach ($block['innerBlocks'] as $j => $inner_block) {
                if ('core/block' == $inner_block['blockName']) {
                    $id = (isset($inner_block['attrs']['ref'])) ? $inner_block['attrs']['ref'] : 0;

                    if ($id) {
                        $content = get_post_field('post_content', $id);

                        $reusable_blocks = $this->parse($content);

                        self::$stylesheet .= $this->get_stylesheet($reusable_blocks);
                    }
                } else {
                    // Get CSS for the Block.
                    $inner_block_css = $this->get_block_css($inner_block);

                    $css_desktop = (isset($css['desktop']) ? $css['desktop'] : '');
                    $css_tablet = (isset($css['tablet']) ? $css['tablet'] : '');
                    $css_mobile = (isset($css['mobile']) ? $css['mobile'] : '');

                    if (isset($inner_block_css['desktop'])) {
                        $css['desktop'] = $css_desktop . $inner_block_css['desktop'];
                        $css['tablet'] = $css_tablet . $inner_block_css['tablet'];
                        $css['mobile'] = $css_mobile . $inner_block_css['mobile'];
                    }
                }
            }
        }

        self::$current_block_list = array_unique(self::$current_block_list);

        return $css;

        // @codingStandardsIgnoreEnd
	}

	public static function get_icon_list_css( $attr, $id ) {
        // @codingStandardsIgnoreStart

        $defaults = self::$block_list['premium/icon-list']['attributes'];

        $attr = array_merge($defaults, ( array ) $attr);

        $m_selectors = array();
        $t_selectors = array();

        $selectors = array(
            // Desktop Icon Size CSS starts.
            ' .premium-icon-list__icon-wrap img' => array(
                'width' => self::get_css_value($attr['size'], $attr['sizeType'])
            ),
            ' .premium-icon-list__icon-wrap' => array(
                'padding' => self::get_css_value($attr['iconPadding'], $attr['iconPaddingType']),
                'margin-right' => $attr['iconPosition'] == 'left' ? self::get_css_value($attr['iconSpacing'], $attr['iconSpacingType']) : '',
                'margin-left' => $attr['iconPosition'] == 'right' ? self::get_css_value($attr['iconSpacing'], $attr['iconSpacingType']) : '',
                'margin-bottom' => $attr['iconPosition'] == 'top' ? self::get_css_value($attr['iconSpacing'], $attr['iconSpacingType']) : '',
            ),
            ' .premium-icon-list__content-icon' => array(
                'width' => self::get_css_value($attr['size'], $attr['sizeType']),
                'height' => self::get_css_value($attr['size'], $attr['sizeType'])
            ),
            ' .premium-icon-list__content-icon i' => array(
                'width' => self::get_css_value($attr['size'], $attr['sizeType']),
                'height' => self::get_css_value($attr['size'], $attr['sizeType']),
                'font-size' => self::get_css_value($attr['size'], $attr['sizeType'])
            ),
            ' .premium-icon-list__content-icon:before' => array(
                'width' => self::get_css_value($attr['size'], $attr['sizeType']),
                'height' => self::get_css_value($attr['size'], $attr['sizeType']),
                'font-size' => self::get_css_value($attr['size'], $attr['sizeType'])
            )
        );
        // Desktop Icon Size CSS ends.

        // Mobile Icon Size CSS starts.
        $m_selectors = array(
            ' .premium-icon-list__icon-wrap img' => array(
                'width' => self::get_css_value($attr['sizeMobile'], $attr['sizeType'])
            ),
            ' .premium-icon-list__icon-wrap' => array(
                'padding' => self::get_css_value($attr['iconPaddingMobile'], $attr['iconPaddingType']),
                'margin-right' => $attr['iconPosition'] == 'left' ? self::get_css_value($attr['iconSpacingMobile'], $attr['iconSpacingType']) : '',
                'margin-left' => $attr['iconPosition'] == 'right' ? self::get_css_value($attr['iconSpacingMobile'], $attr['iconSpacingType']) : '',
                'margin-bottom' => $attr['iconPosition'] == 'top' ? self::get_css_value($attr['iconSpacingMobile'], $attr['iconSpacingType']) : '',
            ),
            ' .premium-icon-list__content-icon' => array(
                'width' => self::get_css_value($attr['sizeMobile'], $attr['sizeType']),
                'height' => self::get_css_value($attr['sizeMobile'], $attr['sizeType']),
            ),
            ' .premium-icon-list__content-icon i' => array(
                'width' => self::get_css_value($attr['sizeMobile'], $attr['sizeType']),
                'height' => self::get_css_value($attr['sizeMobile'], $attr['sizeType']),
                'font-size' => self::get_css_value($attr['sizeMobile'], $attr['sizeType'])
            ),
            ' .premium-icon-list__content-icon:before' => array(
                'width' => self::get_css_value($attr['sizeMobile'], $attr['sizeType']),
                'height' => self::get_css_value($attr['sizeMobile'], $attr['sizeType']),
                'font-size' => self::get_css_value($attr['sizeMobile'], $attr['sizeType'])
            ),
        );
        // Mobile Icon Size CSS ends.

        // Tablet Icon Size CSS starts.
        $t_selectors = array(
            ' .premium-icon-list__icon-wrap img' => array(
                'width' => self::get_css_value($attr['sizeTablet'], $attr['sizeType'])
            ),
            ' .premium-icon-list__icon-wrap' => array(
                'padding' => self::get_css_value($attr['iconPaddingTablet'], $attr['iconPaddingType']),
                'margin-right' => $attr['iconPosition'] == 'left' ? self::get_css_value($attr['iconSpacingTablet'], $attr['iconSpacingType']) : '',
                'margin-left' => $attr['iconPosition'] == 'right' ? self::get_css_value($attr['iconSpacingTablet'], $attr['iconSpacingType']) : '',
                'margin-bottom' => $attr['iconPosition'] == 'top' ? self::get_css_value($attr['iconSpacingTablet'], $attr['iconSpacingType']) : '',
            ),
            ' .premium-icon-list__content-icon' => array(
                'width' => self::get_css_value($attr['sizeTablet'], $attr['sizeType']),
                'height' => self::get_css_value($attr['sizeTablet'], $attr['sizeType']),
            ),
            ' .premium-icon-list__content-icon i' => array(
                'width' => self::get_css_value($attr['sizeTablet'], $attr['sizeType']),
                'height' => self::get_css_value($attr['sizeTablet'], $attr['sizeType']),
                'font-size' => self::get_css_value($attr['sizeTablet'], $attr['sizeType'])
            ),
            ' .premium-icon-list__content-icon:before' => array(
                'width' => self::get_css_value($attr['sizeTablet'], $attr['sizeType']),
                'height' => self::get_css_value($attr['sizeTablet'], $attr['sizeType']),
                'font-size' => self::get_css_value($attr['sizeTablet'], $attr['sizeType'])
            ),
        );
        // Tablet Icon Size CSS ends.

        foreach ($attr['icons'] as $key => $icon) {
            $icon['icon_color'] = (isset($icon['icon_color'])) ? $icon['icon_color'] : '';
            $icon['icon_hover_color'] = (isset($icon['icon_hover_color'])) ? $icon['icon_hover_color'] : '';
            $icon['icon_bg_color'] = (isset($icon['icon_bg_color'])) ? $icon['icon_bg_color'] : '';
            $icon['icon_bg_hover_color'] = (isset($icon['icon_bg_hover_color'])) ? $icon['icon_bg_hover_color'] : '';
            $icon['item_bg_color'] = (isset($icon['item_bg_color'])) ? $icon['item_bg_color'] : '';
            $icon['item_bg_hover_color'] = (isset($icon['item_bg_hover_color'])) ? $icon['item_bg_hover_color'] : '';
            $icon['label_color'] = (isset($icon['label_color'])) ? $icon['label_color'] : '';
            $icon['label_hover_color'] = (isset($icon['label_hover_color'])) ? $icon['label_hover_color'] : '';

            if ($attr['multiTitleCount'] <= $key) {
                break;
            }

            $selectors[' .premium-icon-list-content' . $key . ' .premium-icon-list__content-icon'] = array(
                'color' => $icon['icon_color']
            );

            $selectors[' .premium-icon-list-content' . $key . ' .premium-icon-list__content-icon i'] = array(
                'fill' => $icon['icon_color']
            );

            $selectors[' .premium-icon-list-content' . $key . ':hover .premium-icon-list__content-icon'] = array(
                'color' => $icon['icon_hover_color']
            );

            $selectors[' .premium-icon-list-content' . $key . ':hover .premium-icon-list__content-icon i'] = array(
                'fill' => $icon['icon_hover_color']
            );

            $selectors[' .premium-icon-list-content' . $key . ' .premium-icon-list__label'] = array(
                'color' => $icon['label_color'],
                'font-size' => self::get_css_value($attr['fontSize'], $attr['fontSizeType']),
            );

            $selectors[' .premium-icon-list-content' . $key . ':hover .premium-icon-list__label'] = array(
                'color' => $icon['label_hover_color'],
            );

            $selectors[' .premium-icon-list-content' . $key . ':hover .premium-icon-list__content-wrap'] = array(
                'background' => $icon['item_bg_hover_color'],
            );

            $selectors[' .premium-icon-list-content' . $key . ' .premium-icon-list__icon-wrap'] = array(
                'background' => $icon['icon_bg_color'],
            );

            $selectors[' .premium-icon-list-content' . $key . ':hover .premium-icon-list__icon-wrap'] = array(
                'background' => $icon['icon_bg_hover_color']
            );

            $selectors[' .premium-icon-list-content' . $key] = array(
                'padding' => self::get_css_value($attr['titlePadding'], $attr['titlePaddingType']),
            );

            $m_selectors[' .premium-icon-list-content' . $key] = array(
                'padding' => self::get_css_value($attr['titlePaddingMobile'], $attr['titlePaddingType']),
            );

            $t_selectors[' .premium-icon-list-content' . $key] = array(
                'padding' => self::get_css_value($attr['titlePaddingTablet'], $attr['titlePaddingType']),
            );

            $m_selectors[' .premium-icon-list-content' . $key . ' .premium-icon-list__label'] = array(
                'font-size' => self::get_css_value($attr['fontSizeMobile'], $attr['fontSizeType']),
            );

            $t_selectors[' .premium-icon-list-content' . $key . ' .premium-icon-list__label'] = array(
                'font-size' => self::get_css_value($attr['fontSizeTablet'], $attr['fontSizeType']),
            );

            $selectors[' .premium-icon-list-content' . $key . ' .premium-icon-list__content-wrap'] = array(
                'background' => $icon['item_bg_color'],
                'margin-top' => $attr['layoutPos'] == 'block' ? self::get_css_value($attr['marginTop'], $attr['marginTopType']) : '',
                'margin-bottom' => $attr['layoutPos'] == 'block' ? self::get_css_value($attr['marginBottom'], $attr['marginBottomType']) : '',
                'margin-right' => $attr['layoutPos'] == 'block' ? '' : self::get_css_value($attr['marginRight'], $attr['marginRightType']),
                'margin-left' => $attr['layoutPos'] == 'block' ? '' : self::get_css_value($attr['marginLeft'], $attr['marginLeftType']),
            );
            $m_selectors[' .premium-icon-list-content' . $key . ' .premium-icon-list__content-wrap'] = array(
                'margin-top' => $attr['layoutPos'] == 'block' ? self::get_css_value($attr['marginTopMobile'], $attr['marginTopType']) : '',
                'margin-bottom' => $attr['layoutPos'] == 'block' ? self::get_css_value($attr['marginBottomMobile'], $attr['marginBottomType']) : '',
                'margin-right' => $attr['layoutPos'] == 'block' ? '' : self::get_css_value($attr['marginRightMobile'], $attr['marginRightType']),
                'margin-left' => $attr['layoutPos'] == 'block' ? '' : self::get_css_value($attr['marginLeftMobile'], $attr['marginLeftType']),
            );

            $t_selectors[' .premium-icon-list-content' . $key . ' .premium-icon-list__content-wrap'] = array(
                'margin-top' => $attr['layoutPos'] == 'block' ? self::get_css_value($attr['marginTopTablet'], $attr['marginTopType']) : '',
                'margin-bottom' => $attr['layoutPos'] == 'block' ? self::get_css_value($attr['marginBottomTablet'], $attr['marginBottomType']) : '',
                'margin-right' => $attr['layoutPos'] == 'block' ? '' : self::get_css_value($attr['marginRightTablet'], $attr['marginRightType']),
                'margin-left' => $attr['layoutPos'] == 'block' ? '' : self::get_css_value($attr['marginLeftTablet'], $attr['marginLeftType']),
            );
        }

        // @codingStandardsIgnoreEnd

		$base_selector = ( $attr['classMigrate'] ) ? '.premium-block-' : '#premium-icon-list-';

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

	public static function get_content_switcher_css( $attr, $id ) {
        // @codingStandardsIgnoreStart

        $defaults = self::$block_list['premium/content-switcher']['attributes'];

        $attr = array_merge($defaults, ( array ) $attr);

        $m_selectors = array();
        $t_selectors = array();

        $selectors = array(
            // Desktop Icon Size CSS starts.
            ' .premium-content-switcher-toggle-switch' => array(
                'font-size' => self::get_css_value($attr['switchSize'], $attr['switchSizeType'])
            ),
            ' .premium-content-switcher-toggle-' . $attr['display'] => array(
                'margin-bottom' => self::get_css_value($attr['bottomSpacing'], $attr['bottomSpacingType'])
            ),
            ' .premium-content-switcher-toggle-switch-slider::before' => array(
                'background' => $attr['firstStateColor'],
                'border-radius' => self::get_css_value($attr['switchRadius'], $attr['switchRadiusType'])
            ),
            ' .premium-content-switcher-toggle-switch-label input:checked + .premium-content-switcher-toggle-switch-slider::before' => array(
                'background' => $attr['secondStateColor'],
                'border-radius' => self::get_css_value($attr['switchRadius'], $attr['switchRadiusType'])
            ),
            ' .premium-content-switcher-toggle-switch-slider' => array(
                'background' => $attr['switcherBGColor']
            ),
            ' .premium-content-switcher-first-label' => array(
                'margin-right' => $attr['display'] == 'inline' ? self::get_css_value($attr['labelSpacing'], $attr['labelSpacingType']) : '',
                'margin-bottom' => $attr['display'] == 'block' ? self::get_css_value($attr['labelSpacing'], $attr['labelSpacingType']) : '',
            ),
            ' .premium-content-switcher-first-label h3' => array(
                'font-size' => self::get_css_value($attr['firstLabelfontSize'], $attr['firstLabelfontSizeType'])
            ),
            ' .premium-content-switcher-second-label' => array(
                'margin-left' => $attr['display'] == 'inline' ? self::get_css_value($attr['labelSpacing'], $attr['labelSpacingType']) : '',
                'margin-top' => $attr['display'] == 'block' ? self::get_css_value($attr['labelSpacing'], $attr['labelSpacingType']) : '',
            ),
            ' .premium-content-switcher-second-label h3' => array(
                'font-size' => self::get_css_value($attr['secondLabelfontSize'], $attr['secondLabelfontSizeType'])
            ),
            ' .premium-content-switcher-first-list' => array(
                'min-height' => self::get_css_value($attr['firstContentHeight'], $attr['firstContentHeightType']),
                'padding-top'  => self::get_css_value($attr['firstpaddingTop'], $attr['firstpaddingTopType']),
                'padding-bottom' => self::get_css_value($attr['firstpaddingBottom'], $attr['firstpaddingBottomType']),
                'padding-right' => self::get_css_value($attr['firstpaddingRight'], $attr['firstpaddingRightType']),
                'padding-left' => self::get_css_value($attr['firstpaddingLeft'], $attr['firstpaddingLeftType']),
            ),
            ' .premium-content-switcher-second-list' => array(
                'min-height' => self::get_css_value($attr['secondContentHeight'], $attr['secondContentHeightType']),
                'padding-top'  => self::get_css_value($attr['secondpaddingTop'], $attr['secondpaddingTopType']),
                'padding-bottom' => self::get_css_value($attr['secondpaddingBottom'], $attr['secondpaddingBottomType']),
                'padding-right' => self::get_css_value($attr['secondpaddingRight'], $attr['secondpaddingRightType']),
                'padding-left' => self::get_css_value($attr['secondpaddingLeft'], $attr['secondpaddingLeftType']),
            ),
            ' .premium-content-switcher-first-content' => array(
                'font-size' => self::get_css_value($attr['firstContentfontSize'], $attr['firstContentfontSizeType']),
                'letter-spacing' => self::get_css_value($attr['firstContentLetter'], $attr['switchRadiusType']),
                'text-transform' => $attr['firstContentUpper'] ? 'uppercase' : 'none',
                'font-style' => $attr['firstContentStyle'],
                'font-weight' => $attr['firstContentWeight'],
            ),
            ' .premium-content-switcher-second-content' => array(
                'font-size' => self::get_css_value($attr['secondContentfontSize'], $attr['secondContentfontSizeType']),
                'letter-spacing' => self::get_css_value($attr['secondContentLetter'], $attr['switchRadiusType']),
                'text-transform' => $attr['secondContentUpper'] ? 'uppercase' : 'none',
                'font-style' => $attr['secondContentStyle'],
                'font-weight' => $attr['secondContentWeight'],
            ),
        );
        // Desktop Icon Size CSS ends.

        // Mobile Icon Size CSS starts.
        $m_selectors = array(
            ' .premium-content-switcher-toggle-switch' => array(
                'font-size' => self::get_css_value($attr['switchSizeMobile'], $attr['switchSizeType'])
            ),
            ' .premium-content-switcher-toggle-' . $attr['display'] => array(
                'margin-bottom' => self::get_css_value($attr['bottomSpacingMobile'], $attr['bottomSpacingType'])
            ),
            ' .premium-content-switcher-first-label' => array(
                'margin-right' => $attr['display'] == 'inline' ? self::get_css_value($attr['labelSpacingMobile'], $attr['labelSpacingType']) : '',
                'margin-bottom' => $attr['display'] == 'block' ? self::get_css_value($attr['labelSpacingMobile'], $attr['labelSpacingType']) : '',
            ),
            ' .premium-content-switcher-first-label h3' => array(
                'font-size' => self::get_css_value($attr['firstLabelfontSizeMobile'], $attr['firstLabelfontSizeType'])
            ),
            ' .premium-content-switcher-second-label' => array(
                'margin-left' => $attr['display'] == 'inline' ? self::get_css_value($attr['labelSpacingMobile'], $attr['labelSpacingType']) : '',
                'margin-top' => $attr['display'] == 'block' ? self::get_css_value($attr['labelSpacingMobile'], $attr['labelSpacingType']) : '',
            ),
            ' .premium-content-switcher-second-label h3' => array(
                'font-size' => self::get_css_value($attr['secondLabelfontSizeMobile'], $attr['secondLabelfontSizeType'])
            ),
            ' .premium-content-switcher-first-list' => array(
                'min-height' => self::get_css_value($attr['firstContentHeightMobile'], $attr['firstContentHeightType']),
                'padding-top'  => self::get_css_value($attr['firstpaddingTopMobile'], $attr['firstpaddingTopType']),
                'padding-bottom' => self::get_css_value($attr['firstpaddingBottomMobile'], $attr['firstpaddingBottomType']),
                'padding-right' => self::get_css_value($attr['firstpaddingRightMobile'], $attr['firstpaddingRightType']),
                'padding-left' => self::get_css_value($attr['firstpaddingLeftMobile'], $attr['firstpaddingLeftType']),
            ),
            ' .premium-content-switcher-second-list' => array(
                'min-height' => self::get_css_value($attr['secondContentHeightMobile'], $attr['secondContentHeightType']),
                'padding-top'  => self::get_css_value($attr['secondpaddingTopMobile'], $attr['secondpaddingTopType']),
                'padding-bottom' => self::get_css_value($attr['secondpaddingBottomMobile'], $attr['secondpaddingBottomType']),
                'padding-right' => self::get_css_value($attr['secondpaddingRightMobile'], $attr['secondpaddingRightType']),
                'padding-left' => self::get_css_value($attr['secondpaddingLeftMobile'], $attr['secondpaddingLeftType']),
            ),
            ' .premium-content-switcher-first-content' => array(
                'font-size' => self::get_css_value($attr['firstContentfontSizeMobile'], $attr['firstContentfontSizeType'])
            ),
            ' .premium-content-switcher-second-content' => array(
                'font-size' => self::get_css_value($attr['secondContentfontSizeMobile'], $attr['secondContentfontSizeType'])
            ),
        );
        // Mobile Icon Size CSS ends.

        // Tablet Icon Size CSS starts.
        $t_selectors = array(
            ' .premium-content-switcher-toggle-switch' => array(
                'font-size' => self::get_css_value($attr['switchSizeTablet'], $attr['switchSizeType'])
            ),
            ' .premium-content-switcher-toggle-' . $attr['display'] => array(
                'margin-bottom' => self::get_css_value($attr['bottomSpacingTablet'], $attr['bottomSpacingType'])
            ),
            ' .premium-content-switcher-first-label' => array(
                'margin-right' => $attr['display'] == 'inline' ? self::get_css_value($attr['labelSpacingTablet'], $attr['labelSpacingType']) : '',
                'margin-bottom' => $attr['display'] == 'block' ? self::get_css_value($attr['labelSpacingTablet'], $attr['labelSpacingType']) : '',
            ),
            ' .premium-content-switcher-first-label h3' => array(
                'font-size' => self::get_css_value($attr['firstLabelfontSizeTablet'], $attr['firstLabelfontSizeType'])
            ),
            ' .premium-content-switcher-second-label' => array(
                'margin-left' => $attr['display'] == 'inline' ? self::get_css_value($attr['labelSpacingTablet'], $attr['labelSpacingType']) : '',
                'margin-top' => $attr['display'] == 'block' ? self::get_css_value($attr['labelSpacingTablet'], $attr['labelSpacingType']) : '',
            ),
            ' .premium-content-switcher-second-label h3' => array(
                'font-size' => self::get_css_value($attr['secondLabelfontSizeTablet'], $attr['secondLabelfontSizeType'])
            ),
            ' .premium-content-switcher-first-list' => array(
                'min-height' => self::get_css_value($attr['firstContentHeightTablet'], $attr['firstContentHeightType']),
                'padding-top'  => self::get_css_value($attr['firstpaddingTopTablet'], $attr['firstpaddingTopType']),
                'padding-bottom' => self::get_css_value($attr['firstpaddingBottomTablet'], $attr['firstpaddingBottomType']),
                'padding-right' => self::get_css_value($attr['firstpaddingRightTablet'], $attr['firstpaddingRightType']),
                'padding-left' => self::get_css_value($attr['firstpaddingLeftTablet'], $attr['firstpaddingLeftType']),
            ),
            ' .premium-content-switcher-second-list' => array(
                'min-height' => self::get_css_value($attr['secondContentHeightTablet'], $attr['secondContentHeightType']),
                'padding-top'  => self::get_css_value($attr['secondpaddingTopTablet'], $attr['secondpaddingTopType']),
                'padding-bottom' => self::get_css_value($attr['secondpaddingBottomTablet'], $attr['secondpaddingBottomType']),
                'padding-right' => self::get_css_value($attr['secondpaddingRightTablet'], $attr['secondpaddingRightType']),
                'padding-left' => self::get_css_value($attr['secondpaddingLeftTablet'], $attr['secondpaddingLeftType']),
            ),
            ' .premium-content-switcher-first-content' => array(
                'font-size' => self::get_css_value($attr['firstContentfontSizeTablet'], $attr['firstContentfontSizeType'])
            ),
            ' .premium-content-switcher-second-content' => array(
                'font-size' => self::get_css_value($attr['secondContentfontSizeTablet'], $attr['secondContentfontSizeType'])
            ),
        );
        // Tablet Icon Size CSS ends.

        // @codingStandardsIgnoreEnd

		$base_selector = ( $attr['classMigrate'] ) ? '.premium-block-' : '#premium-content-switcher-';

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

	public static function get_query_args( $attributes ) {
		$paged     = self::get_paged();
		$tax_count = 0;
		$post_type = 'post';
		$post_args = array(

			'posts_per_page'   => empty( $attributes['numOfPosts'] ) ? 9999 : $attributes['numOfPosts'],
			'paged'            => $paged,
			'post_status'      => 'publish',
			'suppress_filters' => false,
		);

		$post_args['orderby'] = $attributes['orderBy'];
		$post_args['order']   = $attributes['order'];

		// Get all the taxanomies associated with the post type.
		if ( $attributes['currentPost'] ) {
			$post_args['post__not_in'] = array( get_the_ID() );
		}

		if ( isset( $attributes['categories'] ) ) {
			$post_args['tax_query'][] = array(
				'taxonomy' => ( isset( $attributes['postFilter'] ) ) ? $attributes['postFilter'] : 'category',
				'field'    => 'id',
				'terms'    => $attributes['categories'],
				'operator' => 'IN',
			);
		}

		if ( 0 < $attributes['offsetNum'] ) {
			$post_args['offset_to_fix'] = $attributes['offsetNum'];
		}

		return $post_args;
	}

	public static function post_css( $attr, $id ) {
		$defaults = self::$block_list['premium/post-blog']['attributes'];

		$attr = array_merge( $defaults, (array) $attr );

		$m_selectors = array();
		$t_selectors = array();
		$selectors   = array(
			' .premium-blog-wrap .premium-blog-post-outer-container' => array(
				"margin-bottom"=> self::get_css_value($attr['rowGap'], $attr['rowGapUnit']),
				"padding-right"=>$attr['columnGap']/2 . 'px',
				"padding-left"=>$attr['columnGap']/2 . 'px',
			),
			'.premium-blog-wrap .premium-blog-post-outer-container .premium-blog-post-container .premium-blog-content-wrapper' => array(
				 "text-align"=> $attr['filterPosition'],
				
			),
			'.premium-blog-wrap .premium-blog-thumbnail-overlay' =>array(
				'background'=> $attr['overlayColor']
			),
			" .premium-blog-post-outer-container:hover img" =>array(
				// 'filter' => brightness( $attr['bright']% ) contrast( $attr['contrast']% ) saturate( $attr['saturation']% ) blur( $attr['blur']px ) hue-rotate( $attr['hue']}deg) 
			),
			" .premium-blog-post-container .premium-blog-entry-title h2" =>array(
				"margin-bottom" =>self::get_css_value($attr['marginBottom'], $attr['marginBottomType']),
				"font-size" =>self::get_css_value($attr['firstContentfontSize'], $attr['firstContentfontSizeType']),
				"font-weight" =>$attr['firstContentWeight'],
				"font-style" =>$attr['firstContentStyle'],
				"text-transform" =>$attr['firstContentUpper'] ? "uppercase" : null ,
				"letter-spacing" => $attr['firstContentLetter'] . 'px',
				"color" =>$attr['typoColor']
			),
			".premium-blog-entry-title a:hover" =>array(
				"color" => $attr['hoverColor']
			),
			".premium-blog-even"=>array(
				"margin-bottom" =>"20px"
			),
			".premium-blog-post-container .premium-blog-content-wrapper-inner p" =>array(
				"font-size" =>self::get_css_value($attr['postContentfontSize'], $attr['postContentfontSizeType']),
				"margin-bottom" =>self::get_css_value($attr['PostmarginBottom'], $attr['PostmarginBottomType']),
				 "margin-top" =>self::get_css_value($attr['PostmarginTop'], $attr['PostmarginTopType']),
				 "margin-right"=> self::get_css_value($attr['PostmarginRight'], $attr['PostmarginRightType']),
				 "margin-left" =>self::get_css_value($attr['PostmarginLeft'], $attr['PostmarginLeftType']),
				 " padding" =>self::get_css_value($attr['postSpacing'], $attr['postSpacingType']),
				 "font-weight"=>$attr['postContentWeight'],
				 "font-style" =>$attr['postContentStyle'],
				 "text-transform" =>$attr['postContentUpper'] ? "uppercase" : null ,
				 "letter-spacing" =>$attr['postContentLetter'] . 'px',
				 "color" =>$attr['textColor'],
				 "background-color" => $attr['backgroundPostContent'] ,
				 "box-shadow" => $attr['containerShadowHorizontal'] . 'px' .  $attr['containerShadowVertical'] . 'px' . $attr['containerShadowBlur'] .'px'  .  $attr['containerShadowColor'] .  $attr['containerShadowPosition'],
				 
				
			),
		".premium-blog-meta-data" => array(
			"font-size" =>self::get_css_value($attr['secondContentfontSize'], $attr['secondContentfontSizeType']),
			"font-weight" =>$attr['secondContentWeight'],
			"font-style" =>$attr['secondContentStyle'],
			"text-transform" =>$attr['postContentUpper'] ? "uppercase" : null,
			"letter-spacing" =>$attr['secondContentLetter'] . 'px',
			"color" =>$attr['metaColor'],
		),
		" .premium-blog-meta-data:hover" =>array(
			"color" =>$attr['linkColor']
		),
		".premium-blog-meta-separtor" =>array(
			"color" =>$attr['sepaColor']
		),
		" .premium-blog-excerpt-link-wrap " =>array(
			"padding" =>self::get_css_value($attr['buttonSpacing'], $attr['buttonSpacingType'])
		),
		" .premium-blog-excerpt-link-wrap .premium-blog-excerpt-link" =>array(
			"font-size" =>self::get_css_value($attr['buttonfontSize'], $attr['buttonfontSizeType']),
		"font-weight" =>$attr['buttonWeight'],
			"font-style" =>$attr['buttonStyle'],
			"text-transform" =>$attr['buttonUpper'] ? "uppercase" : null,
			"letter-spacing" =>$attr['buttonLetter'] . 'px',
			"padding" =>self::get_css_value($attr['buttonPadding'], $attr['buttonPaddingType']),
			"color" =>$attr['buttonColor'],
			"background" =>$attr['buttonBackground'],
			"border-radius" =>$attr['borderRadius'],
			"border" => $attr['borderWidth'] . $attr['borderType'] . $attr['borderColor'],
			
		),
		" .premium-blog-excerpt-link-wrap .premium-blog-excerpt-link:hover" =>array(
		"color" =>$attr['buttonhover'],
		"background"=>$attr['hoverBackground'] 
		)
		
		);
	
		$m_selectors   = array(
			' ..premium-blog-post-outer-wrap' => array(
			
				'background' => '#f5f5f5',
			),
		);
		$t_selectors   = array(
			' ..premium-blog-post-outer-wrap' => array(
				'width'     => `100%`,
				'backround' => '#ff4422',
			),
		);
		$base_selector = ( $attr['classMigrate'] ) ? '.premium-block-not_set' : '#premium-blog-';

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
	 * Set Pagination Limit
	 *
	 * @since 3.20.8
	 * @access public
	 *
	 * @param integer $pages pages number.
	 */

	public static function set_pagination_limit( $pages ) {
		self::$page_limit = $pages;
	}

	public static function render_pagination( $attributes ) {
		
        $pages = self::$page_limit;

        if ( !empty( $attributes['pageLimit'] ) ) {
            $pages = min( $attributes['pageLimit'], $pages );
		}
		$permalink_structure = get_option( 'permalink_structure' );
			$base                = untrailingslashit( wp_specialchars_decode( get_pagenum_link() ) );
			$base                = self::build_base_url( $permalink_structure, $base );
			$format              = self::paged_format( $permalink_structure, $base );
        $paged = self::get_paged();
        $current_page = $paged;
        if ( !$current_page ) {
            $current_page = 1;
        }
        $nav_links = paginate_links(
            array(
			
				
				
                'current' => $current_page,
                'total' => $pages,
                'type' => 'array',
            )
		);

		?>
		
<nav class='premium-blog-pagination-container' role='navigation'
    aria-label="<?php echo esc_attr(__('Pagination', 'premium-addons-for-elementor')); ?>">
    <?php echo wp_kses_post( implode( PHP_EOL, $nav_links ) );
        ?>
</nav>
<?php
	}
	public function fix_query_offset( $query ) {
		if ( ! empty( $query->query_vars['offset_to_fix'] ) ) {
			if ( $query->is_paged ) {
				$query->query_vars['offset'] = $query->query_vars['offset_to_fix'] + ( ( $query->query_vars['paged'] - 1 ) * $query->query_vars['posts_per_page'] );
			} else {
				$query->query_vars['offset'] = $query->query_vars['offset_to_fix'];
			}
		}
	}
	public function fix_found_posts_query( $found_posts, $query ) {
		$offset_to_fix = $query->get( 'offset_to_fix' );

		if ( $offset_to_fix ) {
			$found_posts -= $offset_to_fix;
		}

		return $found_posts;
	}
	public static function get_taxnomies( $type ) {
		$taxonomies = get_object_taxonomies( 'post', 'objects' );
		$data       = array();

		foreach ( $taxonomies as $tax_slug => $tax ) {
			if ( ! $tax->public || ! $tax->show_ui ) {
				continue;
			}

			$data[ $tax_slug ] = $tax;
		}
	}

	public static function get_query_posts( $attributes ) {
		$post_args = self::get_query_args( $attributes );

		$defaults = array(
			'author'         => '',
			'category'       => '',
			'orderBy'        => '',
			'posts_per_page' => 1,
		);

		$query_args = wp_parse_args( $post_args, $defaults );

		$query = new \WP_Query( $query_args );

		$total_pages = $query->max_num_pages;

		self::set_pagination_limit( $total_pages );

		return $query;
	}
	public static function build_base_url( $permalink_structure, $base ) {
		// Check to see if we are using pretty permalinks.
		if ( ! empty( $permalink_structure ) ) {

			if ( strrpos( $base, 'paged-' ) ) {
				$base = substr_replace( $base, '', strrpos( $base, 'paged-' ), strlen( $base ) );
			}

			// Remove query string from base URL since paginate_links() adds it automatically.
			// This should also fix the WPML pagination issue that was added since 1.10.2.
			if ( count( $_GET ) > 0 ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
				$base = strtok( $base, '?' );
			}

			// Add trailing slash when necessary.
			if ( '/' === substr( $permalink_structure, -1 ) ) {
				$base = trailingslashit( $base );
			} else {
				$base = untrailingslashit( $base );
			}
		} else {
			$url_params = wp_parse_url( $base, PHP_URL_QUERY );

			if ( empty( $url_params ) ) {
				$base = trailingslashit( $base );
			}
		}

		return $base;
	}
	public static function paged_format( $permalink_structure, $base ) {

		$page_prefix = empty( $permalink_structure ) ? 'paged' : 'page';

		if ( ! empty( $permalink_structure ) ) {
			$format  = substr( $base, -1 ) !== '/' ? '/' : '';
			$format .= $page_prefix . '/';
			$format .= '%#%';
			$format .= substr( $permalink_structure, -1 ) === '/' ? '/' : '';
		} elseif ( empty( $permalink_structure ) || is_search() ) {
			$parse_url = wp_parse_url( $base, PHP_URL_QUERY );
			$format    = empty( $parse_url ) ? '?' : '&';
			$format   .= $page_prefix . '=%#%';
		}

		return $format;
	}

	public static function get_paged() {
		global $wp_the_query, $paged;
		if ( isset( $_POST['page_number'] ) && '' !== $_POST['page_number'] ) {
			return $_POST['page_number'];
		}
		// Check the 'paged' query var.
		$paged_qv = $wp_the_query->get( 'paged' );
		if ( is_numeric( $paged_qv ) ) {
			return $paged_qv;
		}
		// Check the 'page' query var.
		$page_qv = $wp_the_query->get( 'page' );
		if ( is_numeric( $page_qv ) ) {
			return $page_qv;
		}
		// Check the $paged global?
		if ( is_numeric( $paged ) ) {
			return $paged;
		}
		return 0;
	}


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
	 * Syntax:
	 *
	 *  get_css_value( VALUE, UNIT );
	 *
	 * E.g.
	 *
	 *  get_css_value( VALUE, 'em' );
	 *
	 * @param string $value  CSS value.
	 * @param string $unit  CSS unit.
	 * @since 1.13.4
	 */

	/**
	 * Returns the Paged Format.
	 *
	 * @param string $permalink_structure Premalink Structure.
	 * @param string $base Base.
	 * @since 1.14.9
	 */

	public static function get_css_value( $value = '', $unit = '' ) {

        // @codingStandardsIgnoreStart

        if ('' == $value) {
            return $value;
        }
        // @codingStandardsIgnoreEnd

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
}

if ( ! function_exists( 'PBG_Blocks_Helper' ) ) {

	/**
	 * Returns an instance of the plugin class.
	 *
	 * @since  1.0.0
	 * @return object
	 */

	function PBG_Blocks_Helper() {
		return PBG_Blocks_Helper::get_instance();
	}
}
PBG_Blocks_Helper();
