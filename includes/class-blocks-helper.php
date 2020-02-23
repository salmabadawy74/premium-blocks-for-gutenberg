<?php

//Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) exit();

/**
* Define Premium_Blocks_Integration class
*/
class Premium_Blocks_Integration {
    
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
        require( PREMIUM_BLOCKS_PATH . 'includes/class-config.php' );

		self::$block_list      = Config::get_block_attributes();

        //Gets Active Blocks
        self::$blocks = Premium_Guten_Admin::get_enabled_keys();
        
        //Gets Plugin Admin Settings
        self::$config = Premium_Guten_Maps::get_enabled_keys();
        
        //Enqueue Editor Assets
        add_action( 'enqueue_block_editor_assets', array( $this, 'premium_gutenberg_editor' ) );
        
        //Enqueue Frontend Styles
        add_action( 'enqueue_block_assets', array( $this, 'premium_gutenberg_frontend' ) );
        
        add_action( 'wp', array( $this, 'generate_stylesheet' ), 99 );
        //Enqueue Styles
        add_action( 'wp_head', array( $this, 'print_stylesheet' ), 80 );

        //Register Premium Blocks category
        add_filter( 'block_categories', array( $this, 'register_premium_category' ), 10, 1 );

    }
    
    /**
    * Enqueue Editor CSS/JS for Premium Blocks
    * @since 1.0.0
    * @access public
    * @return void
    */
    public function premium_gutenberg_editor() {

        $is_fa_enabled = isset( self::$config['premium-fa-css'] ) ? self::$config['premium-fa-css'] : true;
        
        wp_enqueue_script(
            'pbg-editor',
            PREMIUM_BLOCKS_URL . 'assets/js/build.js', 
            array( 'wp-blocks',
                'wp-i18n',
                'wp-element',
                'wp-components',
                'wp-data', 
                'wp-editor'
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
                'activeBlocks'      => self::$blocks
			)
        );

        wp_localize_script(
            'pbg-editor',
            'FontAwesomeConfig',
            array(
                'FontAwesomeEnabled'    => $is_fa_enabled,
            )
        );
    }
    
    /**
    * Enqueue Frontend CSS for Premium Blocks
    * @since 1.0.0
    * @access public
    * @return void
    */
    public function premium_gutenberg_frontend() {
       
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

        $is_person_enabled = self::$blocks['person'];

        $is_icon_list_enabled = self::$blocks['iconList'];
        
        wp_enqueue_style(
            'pbg-frontend',
            PREMIUM_BLOCKS_URL . 'assets/css/style.css',
            array('dashicons'),
            PREMIUM_BLOCKS_VERSION
        );
        
        if( $is_fa_enabled ) {
            wp_enqueue_style(
                'pbg-fontawesome',
                'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
            );
        }
        
        if( $is_banner_enabled ) {
            wp_enqueue_script(
                'banner-js',
                PREMIUM_BLOCKS_URL . 'assets/js/banner.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
        }
        
        if( $is_button_enabled ) {
            wp_enqueue_script(
                'button-js',
                PREMIUM_BLOCKS_URL . 'assets/js/button.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
        }
        
        if( $is_dual_enabled ) {
            wp_enqueue_script(
                'dual-heading-js',
                PREMIUM_BLOCKS_URL . 'assets/js/dual-heading.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
        }
        
        if( $is_counter_enabled ) {
            wp_enqueue_script(
                'waypoints_lib',
                PREMIUM_BLOCKS_URL . 'assets/js/lib/jquery.waypoints.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
            
            wp_enqueue_script(
                'counter_lib',
                PREMIUM_BLOCKS_URL . 'assets/js/lib/countUpmin.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
            
            wp_enqueue_script(
                'countup-js',
                PREMIUM_BLOCKS_URL . 'assets/js/countup.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
        }
        
        if( $is_accordion_enabled ) {
            wp_enqueue_script(
                'accordion-js',
                PREMIUM_BLOCKS_URL . 'assets/js/accordion.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
        }
        
        if( $is_section_enabled ) {
            wp_enqueue_script(
                'section-js',
                PREMIUM_BLOCKS_URL . 'assets/js/section.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
            
            $is_rtl = is_rtl() ? true : false;
            
            wp_localize_script(
                'section-js',
                'siteDirection',
                array(
                    'isRTL'    => $is_rtl,
                )
            );
        }
        
        if( $is_video_enabled ) {
            wp_enqueue_script(
                'video-box-js',
                PREMIUM_BLOCKS_URL . 'assets/js/video-box.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
        }
        
        if( $is_icon_box_enabled ) {
            wp_enqueue_script(
                'icon-box-js',
                PREMIUM_BLOCKS_URL . 'assets/js/icon-box.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
        }

        if( $is_person_enabled ) {
            wp_enqueue_script(
                'person-js',
                PREMIUM_BLOCKS_URL . 'assets/js/person.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
        }

        if( $is_icon_list_enabled ) {
            wp_enqueue_script(
                'icon-list-js',
                PREMIUM_BLOCKS_URL . 'assets/js/icon-list.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
        }

        //Enqueue Google Maps API Script
        if( $is_maps_enabled && $is_enabled ) {
            if( ! empty( $api_key ) && '1' !== $api_key ) {
                wp_enqueue_script(
                    'premium-map-block',
                    'https://maps.googleapis.com/maps/api/js?key=' . $api_key
                );
            }
        }
        
    }
    
    /**
    * Add Premium Blocks category to Blocks Categories
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
                    'title' => __('Premium Blocks', 'premium-blocks-for-gutenberg')
                )
            )
        );
        
    }


    /**
    * Creates and returns an instance of the class
    * @since 1.0.0
    * @access public
    * return object
    */
    public static function get_instance() {
        if( self::$instance == null ) {
            self::$instance = new self;
        }
        return self::$instance;
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

			ob_start();
			?>
			<style type="text/css" media="all" id="premium-style-frontend"><?php echo self::$stylesheet; ?></style>
			<?php
			ob_end_flush();
        }
        
        /**
		 * Generates CSS recurrsively.
		 *
		 * @param object $block The block object.
		 * @since 0.0.1
		 */
        public function get_block_css( $block ) {

            // @codingStandardsIgnoreStart

            $block = ( array ) $block;

            $name = $block['blockName'];
            $css  = array();
            $block_id = '';

            if( ! isset( $name ) ) {
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
                case 'premium/icon-list':
                    $css += $this->get_icon_list_css( $blockattr, $block_id );
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
                        $css_tablet = ( isset( $css['tablet'] ) ? $css['tablet'] : '' );
                        $css_mobile = ( isset( $css['mobile'] ) ? $css['mobile'] : '' );

                        if( isset( $inner_block_css['desktop'] ) ){
	                        $css['desktop'] = $css_desktop . $inner_block_css['desktop'];
	                        $css['tablet'] = $css_tablet . $inner_block_css['tablet'];
	                        $css['mobile'] = $css_mobile . $inner_block_css['mobile'];
                        }
                    }
                }
            }

            self::$current_block_list = array_unique( self::$current_block_list );

            return $css;

            // @codingStandardsIgnoreEnd
        }
        
        public static function get_icon_list_css( $attr, $id ) { 			// @codingStandardsIgnoreStart
            
			$defaults = self::$block_list['premium/icon-list']['attributes'];
            
			$attr = array_merge( $defaults, (array) $attr );

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array();


			// Tablet Icon Size CSS ends.

			foreach ( $attr['icons'] as $key => $icon ) {
                $icon['icon_color'] = ( isset( $icon['icon_color'] ) ) ? $icon['icon_color'] : '';
				$icon['icon_hover_color'] = ( isset( $icon['icon_hover_color'] ) ) ? $icon['icon_hover_color'] : '';
				$icon['icon_bg_color'] = ( isset( $icon['icon_bg_color'] ) ) ? $icon['icon_bg_color'] : '';
				$icon['icon_bg_hover_color'] = ( isset( $icon['icon_bg_hover_color'] ) ) ? $icon['icon_bg_hover_color'] : '';
				$icon['icon_border_color'] = ( isset( $icon['icon_border_color'] ) ) ? $icon['icon_border_color'] : '';
				$icon['icon_border_hover_color'] = ( isset( $icon['icon_border_hover_color'] ) ) ? $icon['icon_border_hover_color'] : '';
				$icon['label_color'] = ( isset( $icon['label_color'] ) ) ? $icon['label_color'] : '';
				$icon['label_hover_color'] = ( isset( $icon['label_hover_color'] ) ) ? $icon['label_hover_color'] : '';


				if ( $attr['multiTitleCount'] <= $key ) {
					break;
				}

				$selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__content-icon"] = array (
					"color" => $icon['icon_color']
				);

				$selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__content-icon i"] = array (
					"fill" => $icon['icon_color']
				);

				$selectors[" .premium-icon-list-content" . $key . ":hover .premium-icon-list__content-icon"] = array (
					"color" => $icon['icon_hover_color']
				);

				$selectors[" .premium-icon-list-content" . $key . ":hover .premium-icon-list__content-icon i"] = array (
					"fill" => $icon['icon_hover_color']
				);

				$selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__label"] = array (
					"color" => $icon['label_color'],
				);

				$selectors[" .premium-icon-list-content" . $key . ":hover .premium-icon-list__label"] = array (
					"color" => $icon['label_hover_color']
				);

				$selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__icon-wrap"] = array(
					"background" => $icon['icon_bg_color'],
					"border-color" => $icon['icon_border_color'],
				);

				$selectors[" .premium-icon-list-content" . $key . ":hover .premium-icon-list__icon-wrap"] = array(
					"background" => $icon['icon_bg_hover_color'],
					"border-color" => $icon['icon_border_hover_color']
				);
			}

			// @codingStandardsIgnoreEnd

			$base_selector = ( $attr['classMigrate'] ) ? '.premium-block-' : '#premium-icon-list-';

			$desktop = self::generate_css( $selectors, $base_selector . $id );
			$generated_css = array(
				'desktop' => $desktop
			);
            
            return $generated_css;
           
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
				$tab_styling_css .= '@media only screen and (max-width: ' . UAGB_TABLET_BREAKPOINT . 'px) {';
				$tab_styling_css .= $tablet;
				$tab_styling_css .= '}';
			}

			if ( ! empty( $mobile ) ) {
				$mob_styling_css .= '@media only screen and (max-width: ' . UAGB_MOBILE_BREAKPOINT . 'px) {';
				$mob_styling_css .= $mobile;
				$mob_styling_css .= '}';
			}

			return $desktop . $tab_styling_css . $mob_styling_css;
		}
}
    

if ( ! function_exists( 'premium_blocks_integration' ) ) {

	/**
	 * Returns an instance of the plugin class.
	 * @since  1.0.0
	 * @return object
	 */
	function premium_blocks_integration() {
		return Premium_Blocks_Integration::get_instance();
	}
}
premium_blocks_integration();