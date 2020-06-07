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
        require( PREMIUM_BLOCKS_PATH . 'includes/class-pbg-blocks-config.php' );

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
                'activeBlocks'      => self::$blocks,
                'tablet_breakpoint' => PBG_TABLET_BREAKPOINT,
				'mobile_breakpoint' => PBG_MOBILE_BREAKPOINT,
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

        $is_persons_enabled = self::$blocks['persons'];

				$is_icon_list_enabled = self::$blocks['iconList'];
				
				$is_content_switcher_enabled = self::$blocks['contentSwitcher'];
				
				$is_progress_bar_enabled = self::$blocks['progressBar'];
						
				$is_tab_enabled = self::$blocks['tab'];
		
				$is_fancy_text_enabled = self::$blocks['fancyText'];
				
        $is_title_enabled = self::$blocks['title'];

        
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

        if( $is_persons_enabled ) {
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

		if( $is_content_switcher_enabled ) {
            wp_enqueue_script(
                'content-switcher-js',
                PREMIUM_BLOCKS_URL . 'assets/js/content-switcher.js',
                array('jquery'),
                PREMIUM_BLOCKS_VERSION
            );
		}

		if( $is_tab_enabled) {
			wp_enqueue_script(
            'tab-js',
            PREMIUM_BLOCKS_URL . 'assets/js/tab.js',
            array('jquery'),
            PREMIUM_BLOCKS_VERSION
      		);
		}

		if( $is_title_enabled) {
			wp_enqueue_script(
            'title-js',
            PREMIUM_BLOCKS_URL . 'assets/js/title.js',
            array('jquery'),
            PREMIUM_BLOCKS_VERSION
      		);
		}
		
		if( $is_fancy_text_enabled) {
			wp_enqueue_script(
				'fancy-text-js',
				PREMIUM_BLOCKS_URL . 'assets/js/fancy-text.js',
				array('jquery'),
				PREMIUM_BLOCKS_VERSION
			);
			  
			wp_enqueue_script(
				'pbg-vticket-js',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/vticker.js',
				array('jquery'),
				PREMIUM_BLOCKS_VERSION
			);
			wp_enqueue_script(
				'pbg-typed-js',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/typed.js',
				array('jquery'),
				PREMIUM_BLOCKS_VERSION
			);
		}

		if( $is_progress_bar_enabled ) {

			wp_enqueue_script(
				'waypoints_lib',
				PREMIUM_BLOCKS_URL . 'assets/js/lib/jquery.waypoints.js',
				array('jquery'),
				PREMIUM_BLOCKS_VERSION
            );

            wp_enqueue_script(
				'progress-bar-js',
				PREMIUM_BLOCKS_URL . 'assets/js/progress-bar.js',
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
								case 'premium/content-switcher':
									$css += $this->get_content_switcher_css( $blockattr, $block_id );
									break;
								case 'premium/progress-bar':
									$css += $this->get_progress_bar_css( $blockattr, $block_id );
									break;
								case 'premium/tab':
									$css += $this->get_tab_css( $blockattr, $block_id );
									break;
								case 'premium/fancy-text':
									$css += $this->get_fancy_text_css( $blockattr, $block_id );
									break;
								case 'premium/title':
									$css += $this->get_title_css( $blockattr, $block_id );
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

			$selectors = array(
				// Desktop Icon Size CSS starts.
				" .premium-icon-list__icon-wrap img" => array(
					"width" => self::get_css_value( $attr['size'], $attr['sizeType'] )
				),
					" .premium-icon-list__icon-wrap" => array(
					"padding" => self::get_css_value( $attr['iconPadding'], $attr['iconPaddingType'] ),
					"margin-right" => $attr['iconPosition'] == "left" ? self::get_css_value( $attr['iconSpacing'], $attr['iconSpacingType']) : "",
					"margin-left" => $attr['iconPosition'] == "right" ? self::get_css_value( $attr['iconSpacing'], $attr['iconSpacingType']): "",
					"margin-bottom" => $attr['iconPosition'] == "top" ? self::get_css_value( $attr['iconSpacing'], $attr['iconSpacingType']) : "",
				),
				" .premium-icon-list__content-icon" => array(
					"width" => self::get_css_value( $attr['size'], $attr['sizeType'] ),
					"height" => self::get_css_value( $attr['size'], $attr['sizeType'] )
				),
				" .premium-icon-list__content-icon i" => array(
					"width" => self::get_css_value( $attr['size'], $attr['sizeType'] ),
                    "height" => self::get_css_value( $attr['size'], $attr['sizeType'] ),
                    "font-size" => self::get_css_value( $attr['size'], $attr['sizeType'] )
				),
				" .premium-icon-list__content-icon:before"=> array(
					"width" => self::get_css_value( $attr['size'], $attr['sizeType'] ),
					"height" => self::get_css_value( $attr['size'], $attr['sizeType'] ),
					"font-size" => self::get_css_value( $attr['size'], $attr['sizeType'] )
                )
            );
            // Desktop Icon Size CSS ends.

			// Mobile Icon Size CSS starts.
			$m_selectors = array(
				" .premium-icon-list__icon-wrap img" => array(
					"width" => self::get_css_value( $attr['sizeMobile'], $attr['sizeType'] )
				),
				" .premium-icon-list__icon-wrap" => array(
					"padding" => self::get_css_value( $attr['iconPaddingMobile'], $attr['iconPaddingType'] ),
					"margin-right" => $attr['iconPosition'] == "left" ? self::get_css_value( $attr['iconSpacingMobile'], $attr['iconSpacingType']) : "",
					"margin-left" => $attr['iconPosition'] == "right" ? self::get_css_value( $attr['iconSpacingMobile'], $attr['iconSpacingType']): "",
					"margin-bottom" => $attr['iconPosition'] == "top" ? self::get_css_value( $attr['iconSpacingMobile'], $attr['iconSpacingType']) : "",
				),
				" .premium-icon-list__content-icon" => array(
					"width" => self::get_css_value( $attr['sizeMobile'], $attr['sizeType'] ),
					"height" => self::get_css_value( $attr['sizeMobile'], $attr['sizeType'] ),
				),
				" .premium-icon-list__content-icon i" => array(
					"width" => self::get_css_value( $attr['sizeMobile'], $attr['sizeType'] ),
                    "height" => self::get_css_value( $attr['sizeMobile'], $attr['sizeType'] ),
                    "font-size" => self::get_css_value( $attr['sizeMobile'], $attr['sizeType'] )
				),
				" .premium-icon-list__content-icon:before" => array(
					"width" => self::get_css_value( $attr['sizeMobile'], $attr['sizeType'] ),
					"height" => self::get_css_value( $attr['sizeMobile'], $attr['sizeType'] ),
					"font-size" => self::get_css_value( $attr['sizeMobile'], $attr['sizeType'] )
				),
			);
			// Mobile Icon Size CSS ends.

			// Tablet Icon Size CSS starts.
			$t_selectors = array(
				" .premium-icon-list__icon-wrap img" => array(
					"width" => self::get_css_value( $attr['sizeTablet'], $attr['sizeType'] )
				),
				" .premium-icon-list__icon-wrap" => array(
					"padding" => self::get_css_value( $attr['iconPaddingTablet'], $attr['iconPaddingType'] ),
					"margin-right" => $attr['iconPosition'] == "left" ? self::get_css_value( $attr['iconSpacingTablet'], $attr['iconSpacingType']) : "",
					"margin-left" => $attr['iconPosition'] == "right" ? self::get_css_value( $attr['iconSpacingTablet'], $attr['iconSpacingType']): "",
					"margin-bottom" => $attr['iconPosition'] == "top" ? self::get_css_value( $attr['iconSpacingTablet'], $attr['iconSpacingType']) : "",
				),
				" .premium-icon-list__content-icon" => array(
					"width" => self::get_css_value( $attr['sizeTablet'], $attr['sizeType'] ),
					"height" => self::get_css_value( $attr['sizeTablet'], $attr['sizeType'] ),
				),
				" .premium-icon-list__content-icon i" => array(
					"width" => self::get_css_value( $attr['sizeTablet'], $attr['sizeType'] ),
                    "height" => self::get_css_value( $attr['sizeTablet'], $attr['sizeType'] ),
                    "font-size" => self::get_css_value( $attr['sizeTablet'], $attr['sizeType'] )
				),
				" .premium-icon-list__content-icon:before" => array(
					"width" => self::get_css_value( $attr['sizeTablet'], $attr['sizeType'] ),
					"height" => self::get_css_value( $attr['sizeTablet'], $attr['sizeType'] ),
					"font-size" => self::get_css_value( $attr['sizeTablet'], $attr['sizeType'] )
				),
			);
			// Tablet Icon Size CSS ends.

			foreach ( $attr['icons'] as $key => $icon ) {
                $icon['icon_color'] = ( isset( $icon['icon_color'] ) ) ? $icon['icon_color'] : '';
				$icon['icon_hover_color'] = ( isset( $icon['icon_hover_color'] ) ) ? $icon['icon_hover_color'] : '';
				$icon['icon_bg_color'] = ( isset( $icon['icon_bg_color'] ) ) ? $icon['icon_bg_color'] : '';
				$icon['icon_bg_hover_color'] = ( isset( $icon['icon_bg_hover_color'] ) ) ? $icon['icon_bg_hover_color'] : '';
				$icon['item_bg_color'] = ( isset( $icon['item_bg_color'] ) ) ? $icon['item_bg_color'] : '';
				$icon['item_bg_hover_color'] = ( isset( $icon['item_bg_hover_color'] ) ) ? $icon['item_bg_hover_color'] : '';
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
					"font-size" => self::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
				);

				$selectors[" .premium-icon-list-content" . $key . ":hover .premium-icon-list__label"] = array (
                    "color" => $icon['label_hover_color'],
				);

				$selectors[" .premium-icon-list-content" . $key . ":hover .premium-icon-list__content-wrap"] = array (
                    "background" => $icon['item_bg_hover_color'],
				);

				$selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__icon-wrap"] = array(
					"background" => $icon['icon_bg_color'],
				);

				$selectors[" .premium-icon-list-content" . $key . ":hover .premium-icon-list__icon-wrap"] = array(
					"background" => $icon['icon_bg_hover_color']
				);

				$selectors[" .premium-icon-list-content" . $key] = array(
					"padding" => self::get_css_value( $attr['titlePadding'], $attr['titlePaddingType'] ),
				);

					$m_selectors[" .premium-icon-list-content" . $key] = array (
					"padding" => self::get_css_value( $attr['titlePaddingMobile'], $attr['titlePaddingType'] ),
				);

				$t_selectors[" .premium-icon-list-content" . $key] = array (
					"padding" => self::get_css_value( $attr['titlePaddingTablet'], $attr['titlePaddingType'] ),
				);

				$m_selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__label"] = array (
					"font-size" => self::get_css_value( $attr['fontSizeMobile'], $attr['fontSizeType'] ),
				);

				$t_selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__label"] = array (
					"font-size" => self::get_css_value( $attr['fontSizeTablet'], $attr['fontSizeType'] ),
				);

				$selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__content-wrap"] = array(
					"background" => $icon['item_bg_color'],
					"margin-top" => $attr['layoutPos'] == 'block' ? self::get_css_value( $attr['marginTop'], $attr['marginTopType'] ):"",
					"margin-bottom" => $attr['layoutPos'] == 'block'? self::get_css_value( $attr['marginBottom'], $attr['marginBottomType'] ): "",
					"margin-right" => $attr['layoutPos'] == 'block'? "" :self::get_css_value( $attr['marginRight'], $attr['marginRightType'] ),
					"margin-left" => $attr['layoutPos'] == 'block'? "" :self::get_css_value( $attr['marginLeft'], $attr['marginLeftType'] ),
				);
				$m_selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__content-wrap"] = array (
					"margin-top" => $attr['layoutPos'] == 'block' ? self::get_css_value( $attr['marginTopMobile'], $attr['marginTopType'] ): "",
					"margin-bottom" => $attr['layoutPos'] == 'block' ? self::get_css_value( $attr['marginBottomMobile'], $attr['marginBottomType'] ): "",
					"margin-right" => $attr['layoutPos'] == 'block' ? "" :self::get_css_value( $attr['marginRightMobile'], $attr['marginRightType'] ),
					"margin-left" => $attr['layoutPos'] == 'block' ? "" :self::get_css_value( $attr['marginLeftMobile'], $attr['marginLeftType'] ),
				);

				$t_selectors[" .premium-icon-list-content" . $key . " .premium-icon-list__content-wrap"] = array (
					"margin-top" => $attr['layoutPos'] == 'block' ? self::get_css_value( $attr['marginTopTablet'], $attr['marginTopType'] ): "",
					"margin-bottom" => $attr['layoutPos'] == 'block' ? self::get_css_value( $attr['marginBottomTablet'], $attr['marginBottomType'] ) : "",
					"margin-right" => $attr['layoutPos'] == 'block' ? "" :self::get_css_value( $attr['marginRightTablet'], $attr['marginRightType'] ),
					"margin-left" => $attr['layoutPos'] == 'block' ? "" :self::get_css_value( $attr['marginLeftTablet'], $attr['marginLeftType'] ),
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
		
		public static function get_content_switcher_css( $attr, $id ) { 			// @codingStandardsIgnoreStart
            
			$defaults = self::$block_list['premium/content-switcher']['attributes'];
            
			$attr = array_merge( $defaults, (array) $attr );

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array(
				// Desktop Icon Size CSS starts.
				" .premium-content-switcher-toggle-switch" => array(
                    "font-size" => self::get_css_value( $attr['switchSize'], $attr['switchSizeType'] )
				),
				" .premium-content-switcher-toggle-" . $attr['display'] => array(
                    "margin-bottom" => self::get_css_value( $attr['bottomSpacing'], $attr['bottomSpacingType'] )
				),
				" .premium-content-switcher-toggle-switch-slider::before" => array(
					"background" => $attr['firstStateColor'] ,
					"border-radius" => self::get_css_value( $attr['switchRadius'] , $attr['switchRadiusType'] )
				),
				" .premium-content-switcher-toggle-switch-label input:checked + .premium-content-switcher-toggle-switch-slider::before" => array(
					"background" => $attr['secondStateColor'],
					"border-radius" => self::get_css_value( $attr['switchRadius'] , $attr['switchRadiusType'] )
				),
				" .premium-content-switcher-toggle-switch-slider" => array(
                    "background" => $attr['switcherBGColor'] 
				),
				" .premium-content-switcher-first-label" => array(
					"margin-right" => $attr['display'] == 'inline' ?self::get_css_value( $attr['labelSpacing'], $attr['labelSpacingType'] ) : "",
					"margin-bottom" => $attr['display'] == 'block' ?self::get_css_value( $attr['labelSpacing'], $attr['labelSpacingType'] ) : "",
				),
				" .premium-content-switcher-first-label h3" => array(
                    "font-size" => self::get_css_value( $attr['firstLabelfontSize'], $attr['firstLabelfontSizeType'] )
				),
				" .premium-content-switcher-second-label" => array(
					"margin-left" => $attr['display'] == 'inline' ? self::get_css_value( $attr['labelSpacing'], $attr['labelSpacingType'] ): "",
					"margin-top" => $attr['display'] == 'block' ? self::get_css_value( $attr['labelSpacing'], $attr['labelSpacingType'] ): "",
				),
				" .premium-content-switcher-second-label h3" => array(
                    "font-size" => self::get_css_value( $attr['secondLabelfontSize'], $attr['secondLabelfontSizeType'] )
				),
				" .premium-content-switcher-first-list" => array(
					"min-height" => self::get_css_value( $attr['firstContentHeight'], $attr['firstContentHeightType'] ),
					"padding-top"  => self::get_css_value( $attr['firstpaddingTop'], $attr['firstpaddingTopType']),
					"padding-bottom" => self::get_css_value( $attr['firstpaddingBottom'], $attr['firstpaddingBottomType']),
					"padding-right"=> self::get_css_value( $attr['firstpaddingRight'], $attr['firstpaddingRightType']),
					"padding-left"=> self::get_css_value( $attr['firstpaddingLeft'], $attr['firstpaddingLeftType']),
				),
				" .premium-content-switcher-second-list" => array(
                    "min-height" => self::get_css_value( $attr['secondContentHeight'], $attr['secondContentHeightType'] ),
					"padding-top"  => self::get_css_value( $attr['secondpaddingTop'], $attr['secondpaddingTopType']),
					"padding-bottom" => self::get_css_value( $attr['secondpaddingBottom'], $attr['secondpaddingBottomType']),
					"padding-right"=> self::get_css_value( $attr['secondpaddingRight'], $attr['secondpaddingRightType']),
					"padding-left"=> self::get_css_value( $attr['secondpaddingLeft'], $attr['secondpaddingLeftType']),
				),
				" .premium-content-switcher-first-content" => array(
					"font-size" => self::get_css_value( $attr['firstContentfontSize'], $attr['firstContentfontSizeType'] ),
					"letter-spacing" => self::get_css_value($attr['firstContentLetter'] , $attr['switchRadiusType']) ,
            		"text-transform" => $attr['firstContentUpper'] ? "uppercase" : "none" ,
            		"font-style" => $attr['firstContentStyle'] ,
            		"font-weight" => $attr['firstContentWeight'] ,
				),
				" .premium-content-switcher-second-content" => array(
					"font-size" => self::get_css_value( $attr['secondContentfontSize'], $attr['secondContentfontSizeType'] ),
					"letter-spacing" => self::get_css_value($attr['secondContentLetter'] , $attr['switchRadiusType']) ,
            		"text-transform" => $attr['secondContentUpper'] ? "uppercase" : "none" ,
            		"font-style" => $attr['secondContentStyle'] ,
            		"font-weight" => $attr['secondContentWeight'],
				),
            );
            // Desktop Icon Size CSS ends.

			// Mobile Icon Size CSS starts.
			$m_selectors = array(
				" .premium-content-switcher-toggle-switch" => array(
                    "font-size" => self::get_css_value( $attr['switchSizeMobile'], $attr['switchSizeType'] )
				),
				" .premium-content-switcher-toggle-" . $attr['display'] => array(
                    "margin-bottom" => self::get_css_value( $attr['bottomSpacingMobile'], $attr['bottomSpacingType'] )
				),
				" .premium-content-switcher-first-label" => array(
					"margin-right" => $attr['display'] == 'inline' ?self::get_css_value( $attr['labelSpacingMobile'], $attr['labelSpacingType'] ): "",
					"margin-bottom" => $attr['display'] == 'block' ?self::get_css_value( $attr['labelSpacingMobile'], $attr['labelSpacingType'] ): "",
				),
				" .premium-content-switcher-first-label h3" => array(
                    "font-size" => self::get_css_value( $attr['firstLabelfontSizeMobile'], $attr['firstLabelfontSizeType'] )
				),
				" .premium-content-switcher-second-label" => array(
					"margin-left" => $attr['display'] == 'inline' ?self::get_css_value( $attr['labelSpacingMobile'], $attr['labelSpacingType'] ): "",
                    "margin-top" => $attr['display'] == 'block' ?self::get_css_value( $attr['labelSpacingMobile'], $attr['labelSpacingType'] ): "",
				),
				" .premium-content-switcher-second-label h3" => array(
                    "font-size" => self::get_css_value( $attr['secondLabelfontSizeMobile'], $attr['secondLabelfontSizeType'] )
				),
				" .premium-content-switcher-first-list" => array(
                    "min-height" => self::get_css_value( $attr['firstContentHeightMobile'], $attr['firstContentHeightType'] ),
					"padding-top"  => self::get_css_value( $attr['firstpaddingTopMobile'], $attr['firstpaddingTopType']),
					"padding-bottom" => self::get_css_value( $attr['firstpaddingBottomMobile'], $attr['firstpaddingBottomType']),
					"padding-right"=> self::get_css_value( $attr['firstpaddingRightMobile'], $attr['firstpaddingRightType']),
					"padding-left"=> self::get_css_value( $attr['firstpaddingLeftMobile'], $attr['firstpaddingLeftType']),
				),
				" .premium-content-switcher-second-list" => array(
                    "min-height" => self::get_css_value( $attr['secondContentHeightMobile'], $attr['secondContentHeightType'] ),
					"padding-top"  => self::get_css_value( $attr['secondpaddingTopMobile'], $attr['secondpaddingTopType']),
					"padding-bottom" => self::get_css_value( $attr['secondpaddingBottomMobile'], $attr['secondpaddingBottomType']),
					"padding-right"=> self::get_css_value( $attr['secondpaddingRightMobile'], $attr['secondpaddingRightType']),
					"padding-left"=> self::get_css_value( $attr['secondpaddingLeftMobile'], $attr['secondpaddingLeftType']),
				),
				" .premium-content-switcher-first-content" => array(
                    "font-size" => self::get_css_value( $attr['firstContentfontSizeMobile'], $attr['firstContentfontSizeType'] )
				),
				" .premium-content-switcher-second-content" => array(
                    "font-size" => self::get_css_value( $attr['secondContentfontSizeMobile'], $attr['secondContentfontSizeType'] )
				),
			);
			// Mobile Icon Size CSS ends.

			// Tablet Icon Size CSS starts.
			$t_selectors = array(
				" .premium-content-switcher-toggle-switch" => array(
                    "font-size" => self::get_css_value( $attr['switchSizeTablet'], $attr['switchSizeType'] )
				),
				" .premium-content-switcher-toggle-" . $attr['display'] => array(
                    "margin-bottom" => self::get_css_value( $attr['bottomSpacingTablet'], $attr['bottomSpacingType'] )
				),
				" .premium-content-switcher-first-label" => array(
					"margin-right" => $attr['display'] == 'inline' ?self::get_css_value( $attr['labelSpacingTablet'], $attr['labelSpacingType'] ):"",
					"margin-bottom" => $attr['display'] == 'block' ?self::get_css_value( $attr['labelSpacingTablet'], $attr['labelSpacingType'] ):"",
				),
				" .premium-content-switcher-first-label h3" => array(
                    "font-size" => self::get_css_value( $attr['firstLabelfontSizeTablet'], $attr['firstLabelfontSizeType'] )
				),
				" .premium-content-switcher-second-label" => array(
					"margin-left" => $attr['display'] == 'inline' ?self::get_css_value( $attr['labelSpacingTablet'], $attr['labelSpacingType'] ):"",
					"margin-top" => $attr['display'] == 'block' ?self::get_css_value( $attr['labelSpacingTablet'], $attr['labelSpacingType'] ):"",
				),
				" .premium-content-switcher-second-label h3" => array(
                    "font-size" => self::get_css_value( $attr['secondLabelfontSizeTablet'], $attr['secondLabelfontSizeType'] )
				),
				" .premium-content-switcher-first-list" => array(
                    "min-height" => self::get_css_value( $attr['firstContentHeightTablet'], $attr['firstContentHeightType'] ),
					"padding-top"  => self::get_css_value( $attr['firstpaddingTopTablet'], $attr['firstpaddingTopType']),
					"padding-bottom" => self::get_css_value( $attr['firstpaddingBottomTablet'], $attr['firstpaddingBottomType']),
					"padding-right"=> self::get_css_value( $attr['firstpaddingRightTablet'], $attr['firstpaddingRightType']),
					"padding-left"=> self::get_css_value( $attr['firstpaddingLeftTablet'], $attr['firstpaddingLeftType']),
				),
				" .premium-content-switcher-second-list" => array(
                    "min-height" => self::get_css_value( $attr['secondContentHeightTablet'], $attr['secondContentHeightType'] ),
					"padding-top"  => self::get_css_value( $attr['secondpaddingTopTablet'], $attr['secondpaddingTopType']),
					"padding-bottom" => self::get_css_value( $attr['secondpaddingBottomTablet'], $attr['secondpaddingBottomType']),
					"padding-right"=> self::get_css_value( $attr['secondpaddingRightTablet'], $attr['secondpaddingRightType']),
					"padding-left"=> self::get_css_value( $attr['secondpaddingLeftTablet'], $attr['secondpaddingLeftType']),
				),
				" .premium-content-switcher-first-content" => array(
                    "font-size" => self::get_css_value( $attr['firstContentfontSizeTablet'], $attr['firstContentfontSizeType'] )
				),
				" .premium-content-switcher-second-content" => array(
                    "font-size" => self::get_css_value( $attr['secondContentfontSizeTablet'], $attr['secondContentfontSizeType'] )
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
		
		public static function get_progress_bar_css( $attr, $id ){
			$defaults = self::$block_list['premium/progress-bar']['attributes'];
            
			$attr = array_merge( $defaults, (array) $attr );

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array(
				// Desktop Icon Size CSS starts.
				" .premium-progress-bar-progress" => array(
					"height" => self::get_css_value( $attr['progressBarHeight'], $attr['progressBarHeightType'] ),
					"border-radius" => self::get_css_value( $attr['progressBarRadius'], $attr['progressBarRadiusType'] ),
					"background-color" => $attr['progressBarbgColor']
				),
				" .premium-progress-bar-progress-bar" => array(
					"height" => self::get_css_value( $attr['progressBarHeight'], $attr['progressBarHeightType'] ),
					"border-radius" => self::get_css_value( $attr['progressBarRadius'], $attr['progressBarRadiusType'] ),
					"background-color" => $attr['progressBarColor'],
					// "transition"  => 'width ' . $attr['speeds'].'s ease-in-out'
				),
				" .premium-progress-bar-left-label" => array(
					"color" => $attr['labelColor'],
					"font-weight" => $attr['LabelWeight'],
					"letter-spacing" => self::get_css_value($attr['LabelLetter'], 'px' ),
					"text-transform" => $attr['LabelUpper'] ? "uppercase" : "none" ,
					"font-style" => $attr['LabelStyle'],
					"font-size" => self::get_css_value( $attr['LabelfontSize'], $attr['LabelfontSizeType'] ),
				),
				" .premium-progress-bar-right-label" => array(
					"color" => $attr['percentageColor'],
					"font-weight" => $attr['percentageWeight'],
					"letter-spacing" => self::get_css_value($attr['percentageLetter'], 'px' ),
					"font-style" => $attr['percentageStyle'],
					"font-size" => self::get_css_value( $attr['percentagefontSize'], $attr['percentagefontSizeType'] ),
				),
				" .premium-progress-bar-center-label" => array(
					"color" => $attr['labelColor'],
					"font-weight" => $attr['LabelWeight'],
					"letter-spacing" => self::get_css_value( $attr['LabelLetter'], 'px' ),
					"text-transform" => $attr['LabelUpper'] ? "uppercase" : "none" ,
					"font-style" => $attr['LabelStyle'],
					"font-size" => self::get_css_value( $attr['LabelfontSize'], $attr['LabelfontSizeType'] ),
				),
				" .premium-progress-bar-percentage" => array(
					"color" => $attr['percentageColor'],
					"font-weight" => $attr['percentageWeight'],
					"letter-spacing" => self::get_css_value( $attr['percentageLetter'], 'px !important' ),
					"font-style" => $attr['percentageStyle'],
					"font-size" => self::get_css_value( $attr['percentagefontSize'], $attr['percentagefontSizeType'] ),
				),
				" .premium-progress-bar-arrow" => array(
					"color" => $attr['arrowColor'],
					"border-width" => self::get_css_value( $attr['arrow'], $attr['arrowType'] ),
				),
				" .premium-progress-bar-pin" => array(
					"border-color" => $attr['pinColor'],
					"border-left-width" => self::get_css_value( $attr['pin'], $attr['pinType'] ),
					"height" => self::get_css_value( $attr['pinHeight'], $attr['pinHeightType'] ),
				),
            );
            // Desktop Icon Size CSS ends.

			// Mobile Icon Size CSS starts.
			$m_selectors = array(
				" .premium-progress-bar-progress" => array(
					"height" => self::get_css_value( $attr['progressBarHeightMobile'], $attr['progressBarHeightType'] ),
					"border-radius" => self::get_css_value( $attr['progressBarRadiusMobile'], $attr['progressBarRadiusType'] ),
				),
				" .premium-progress-bar-progress-bar" => array(
					"height" => self::get_css_value( $attr['progressBarHeightMobile'], $attr['progressBarHeightType'] ),
					"border-radius" => self::get_css_value( $attr['progressBarRadiusMobile'], $attr['progressBarRadiusType'] ),
				),
				" .premium-progress-bar-left-label" => array(
					"font-size" => self::get_css_value( $attr['LabelfontSizeMobile'], $attr['LabelfontSizeType'] ),
				),
				" .premium-progress-bar-right-label" => array(
					"font-size" => self::get_css_value( $attr['percentagefontSizeMobile'], $attr['percentagefontSizeType'] ),
				),
				" .premium-progress-bar-center-label" => array(
					"font-size" => self::get_css_value( $attr['LabelfontSizeMobile'], $attr['LabelfontSizeType'] ),
				),
				" .premium-progress-bar-percentage" => array(
					"font-size" => self::get_css_value( $attr['percentagefontSizeMobile'], $attr['percentagefontSizeType'] ),
				),
				" .premium-progress-bar-arrow" => array(
					"border-width" => self::get_css_value( $attr['arrowMobile'], $attr['arrowType'] ),
				),
				" .premium-progress-bar-pin" => array(
					"border-left-width" => self::get_css_value( $attr['pinMobile'], $attr['pinType'] ),
					"height" => self::get_css_value( $attr['pinHeightMobile'], $attr['pinHeightType'] ),
				),
			);
			// Mobile Icon Size CSS ends.

			// Tablet Icon Size CSS starts.
			$t_selectors = array(
				" .premium-progress-bar-progress" => array(
					"height" => self::get_css_value( $attr['progressBarHeightTablet'], $attr['progressBarHeightType'] ),
					"border-radius" => self::get_css_value( $attr['progressBarRadiusTablet'], $attr['progressBarRadiusType'] ),
				),
				" .premium-progress-bar-progress-bar" => array(
					"height" => self::get_css_value( $attr['progressBarHeightTablet'], $attr['progressBarHeightType'] ),
					"border-radius" => self::get_css_value( $attr['progressBarRadiusTablet'], $attr['progressBarRadiusType'] ),
				),
				" .premium-progress-bar-left-label" => array(
					"font-size" => self::get_css_value( $attr['LabelfontSizeTablet'], $attr['LabelfontSizeType'] ),
				),
				" .premium-progress-bar-right-label" => array(
					"font-size" => self::get_css_value( $attr['percentagefontSizeTablet'], $attr['percentagefontSizeType'] ),
				),
				" .premium-progress-bar-center-label" => array(
					"font-size" => self::get_css_value( $attr['LabelfontSizeTablet'], $attr['LabelfontSizeType'] ),
				),
				" .premium-progress-bar-percentage" => array(
					"font-size" => self::get_css_value( $attr['percentagefontSizeTablet'], $attr['percentagefontSizeType'] ),
				),
				" .premium-progress-bar-arrow" => array(
					"border-width" => self::get_css_value( $attr['arrowTablet'], $attr['arrowType'] ),
				),
				" .premium-progress-bar-pin" => array(
					"border-left-width" => self::get_css_value( $attr['pinTablet'], $attr['pinType'] ),
					"height" => self::get_css_value( $attr['pinHeightTablet'], $attr['pinHeightType'] ),
				),
			);
			// Tablet Icon Size CSS ends.

			// @codingStandardsIgnoreEnd

			$base_selector = ( $attr['classMigrate'] ) ? '.premium-block-' : '#premium-progress-bar-';

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

		public static function get_tab_css ( $attr, $id ){
			$defaults = self::$block_list['premium/tab']['attributes'];
            
			$attr = array_merge( $defaults, (array) $attr );

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array(
				// Desktop Icon Size CSS starts.
				" .premium-tab-link-icon" => array(
					"border-style" => $attr['tabborderType'],
					"border-width" =>  self::get_css_value($attr['tabborderWidth'] , 'px'),
					"border-color" => $attr['tabborderColor'],
					"border-radius" => self::get_css_value($attr['tabborderRadius'], 'px'),
					"background-color" => $attr['tabBGColor'],
					"box-shadow" => self::get_css_value($attr['tabShadowHorizontal'], 'px ') . self::get_css_value($attr['tabShadowVertical'],'px ') . self::get_css_value($attr['tabShadowBlur'],'px ') .  self::get_css_value($attr['tabShadowColor'], " ") . $attr[ 'tabShadowPosition']
				),
				" .premium-tab-horizontal .premium-tab-nav-list-item::after" => array(
					"background-color" => self::get_css_value($attr['tabsBorderColor'], " !important")
				),
				" .premium-tab-vertical .premium-tab-nav-list-item::after" => array(
					"background-color" => self::get_css_value($attr['tabsBorderColor'], " !important")
				),
				" .premium-tab-horizontal .premium-tab-nav-list-item:last-child::after" => array(
					"background-color" =>"#ffffff00 !important"
				),
				" .premium-tab-vertical .premium-tab-nav-list-item:last-child::after" => array(
					"background-color" =>  "#ffffff00 !important"
				),
				" .premium-tab-link-icon-flipped" => array(
					"border-style" => $attr['tabborderType'],
					"border-width" =>  self::get_css_value($attr['tabborderWidth'] , 'px'),
					"border-color" => $attr['tabborderColor'],
					"border-radius" => self::get_css_value($attr['tabborderRadius'], 'px'),
					"box-shadow" => self::get_css_value($attr['tabShadowHorizontal'], 'px ') . self::get_css_value($attr['tabShadowVertical'],'px ') . self::get_css_value($attr['tabShadowBlur'],'px ') .  self::get_css_value($attr['tabShadowColor'], " ") . $attr[ 'tabShadowPosition']
				),
				" .tab-current .premium-tab-link-icon" => array(
					"background-color" => self::get_css_value($attr['activetabBGColor'], " !important")
				),
				" .premium-tab-nav-list-item-flipped" => array(
					"background-color" => $attr['tabBGColor'],
				),
				" .tab-current .premium-tab-link-icon-flipped::after" => array(
					"background-color" => self::get_css_value($attr['activetabBGColor'], " !important")
				),
				" .premium-tab-horizontal .tab-current .premium-tab-link-icon::after" => array(
					"border-top-color" => $attr['arrowColor']
				),
				" .premium-tab-vertical .tab-current .premium-tab-link-icon::after" => array(
					"border-left-color" => $attr['arrowColor']
				),
				" .premium-tab-title-icon" => array(
					"font-size" => self::get_css_value($attr['iconfontSize'], $attr['iconfontSizeType']),
					"color" => self::get_css_value($attr['iconColor'], '!important'),
					"border-style" => $attr['iconborderType'],
					"border-width" =>  self::get_css_value($attr['iconborderWidth'] , 'px'),
					"border-color" => $attr['iconborderColor'],
					"border-radius" => self::get_css_value($attr['iconborderRadius'], 'px'),
					"text-shadow" => self::get_css_value($attr['iconshadowHorizontal'],'px ') .self::get_css_value($attr['iconshadowVertical'],'px ') . self::get_css_value($attr['iconshadowBlur'], 'px ') . $attr['iconshadowColor'],
					"padding" =>  self::get_css_value($attr['iconPadding'], $attr['iconPaddingType']),
				),
				" .tab-current .premium-tab-title-icon" => array(
					"color" => self::get_css_value($attr['activeiconColor'], " !important")
				),
				" .premium-tab-nav-list-item:hover .premium-tab-title-icon" => array(
					"color" => self::get_css_value($attr['hovericonColor'], " !important")
				),
				" .tab-current .premium-tab-title" => array(
					"color" => self::get_css_value($attr['activetitleColor'], " !important")
				),
				" .premium-tab-nav-list-item .premium-tab-title" => array(
					"color" => $attr['titleColor'],
					"font-size" => self::get_css_value($attr['titlefontSize'], $attr['titlefontSizeType']),
					"letter-spacing" => self::get_css_value($attr['titleLetter'] , 'px') ,
					"text-transform" => $attr['titleUpper'] ? "uppercase" : "none" ,
					"font-style" => self::get_css_value($attr['titleStyle'], " !important") ,
					"font-weight" => self::get_css_value($attr['titleWeight'], " !important") ,
					"text-shadow" => self::get_css_value($attr['titleshadowHorizontal'], 'px ') .self::get_css_value($attr['titleshadowVertical'],'px ') . self::get_css_value($attr['titleshadowBlur'], 'px ') . $attr['titleshadowColor'],
					"margin" =>  self::get_css_value($attr['titleMargin'], $attr['titleMarginType']),
				),
				" .premium-tab-nav-list-item:hover .premium-tab-title" => array(
					"color" => self::get_css_value($attr['hovertitleColor'], '!important')
				),
				" .premium-tab-content-wrap-inner" => array(
					"color" => $attr['contentColor']
				),
				" .premium-tab-content-section .premium-tab-content" => array(
					"font-size" => self::get_css_value($attr['contentfontSize'], $attr['contentfontSizeType']),
					"letter-spacing" => self::get_css_value($attr['contentLetter'] , 'px') ,
					"text-transform" => $attr['contentUpper'] ? "uppercase" : "none" ,
					"font-style" => self::get_css_value($attr['contentStyle'], " !important") ,
					"font-weight" => self::get_css_value($attr['contentWeight'], " !important") ,
					"color" => self::get_css_value($attr['contentColor'], " !important") ,
					"background-color" => $attr['contentBGColor'],
					"border-style" => $attr['contentborderType'],
					"border-width" =>  self::get_css_value($attr['contentborderWidth'] , 'px'),
					"border-color" => $attr['contentborderColor'],
					"border-radius" => self::get_css_value($attr['contentborderRadius'], 'px'),
					"text-shadow" => self::get_css_value($attr['contentshadowHorizontal'], 'px ') .self::get_css_value($attr['contentshadowVertical'],'px ') . self::get_css_value($attr['contentshadowBlur'], 'px ') . $attr['contentshadowColor'],
					"padding" =>  self::get_css_value($attr['contentPadding'], $attr['contentPaddingType']),
				),
				" .premium-tab-nav-list-item a:hover" => array(
					"background-color" => self::get_css_value($attr['tabBGHoverColor'], '!important'),
					"border-width" => self::get_css_value($attr['tabhoverborderWidth'], 'px'),
					"border-color" => $attr['tabhoverborderColor'],
					"border-style" => $attr['tabhoverborderType'],
					"border-radius" => self::get_css_value($attr['tabhoverborderRadius'], 'px'),
					"box-shadow" => self::get_css_value($attr['tabhoverShadowHorizontal'], 'px ') .self::get_css_value($attr['tabhoverShadowVertical'],'px ') .self::get_css_value($attr['tabhoverShadowBlur'],'px ') .self::get_css_value( $attr['tabhoverShadowColor'], " ") . $attr['tabhoverShadowPosition']
				),
				" .premium-tab-horizontal .tab-current a:hover::after" => array(
					"border-top-color" => self::get_css_value($attr['tabBGHoverColor'], '!important')
				),
				" .premium-tab-vertical .tab-current .premium-tab-link-icon:hover::after" => array(
					"border-left-color" => self::get_css_value($attr['tabBGHoverColor'], '!important')
				),
				" .premium-tab-nav-list-item a" => array(
					"padding" => self::get_css_value($attr['tabPadding'], $attr['tabPaddingType']),
					"margin" => self::get_css_value($attr['tabMargin'], $attr['tabMarginType']),
				),
				" .premium-tab-horizontal .premium-tab-nav-list-item:hover .premium-tab-link-icon::after" => array(
					"border-top-color" => $attr['iconHoverColor']
				),
				" .premium-tab-vertical .premium-tab-nav-list-item:hover .premium-tab-link-icon::after" => array(
					"border-left-color" => $attr['iconHoverColor']
				),
				" .premium-tab-vertical .premium-tab-content-wrap" => array(
					"width" => self::get_css_value($attr['tabWidth'], '% !important')
				),
      );
            // Desktop Icon Size CSS ends.

			// Mobile Icon Size CSS starts.
			$m_selectors = array(
				" .premium-tab-title-icon"  => array(
					"font-size" => self::get_css_value($attr['iconfontSizeMobile'], $attr['iconfontSizeType']) . "!important",
					"padding" => self::get_css_value($attr['iconPaddingMobile'], $attr['iconPaddingType']) . "!important",
				),
				" .premium-tab-nav-list-item .premium-tab-title"  => array(
					"font-size" => self::get_css_value($attr['titlefontSizeMobile'], $attr['titlefontSizeType']) . "!important",
					"margin" => self::get_css_value($attr['titleMarginMobile'], $attr['titleMarginType']) . "!important",
				),
					" .premium-tab-content" => array(
					"font-size" => self::get_css_value($attr['contentfontSizeMobile'], $attr['contentfontSizeType']). "!important",
					"padding" => self::get_css_value($attr['contentPaddingMobile'], $attr['contentPaddingType']) . "!important",
					),
					" .premium-tab-nav-list-item a" => array(
						"padding" => self::get_css_value($attr['tabPaddingMobile'], $attr['tabPaddingType']),
						"margin" => self::get_css_value($attr['tabMarginMobile'], $attr['tabMarginType']) . "!important",
					)
			);
			// Mobile Icon Size CSS ends.

			// Tablet Icon Size CSS starts.
			$t_selectors = array(
				" .premium-tab-title-icon"  => array(
					"font-size" => self::get_css_value($attr['iconfontSizeTablet'], $attr['iconfontSizeType']) . "!important",
					"padding" => self::get_css_value($attr['iconPaddingTablet'], $attr['iconPaddingType']) . "!important",
				),
				" .premium-tab-nav-list-item .premium-tab-title"  => array(
					"font-size" => self::get_css_value($attr['titlefontSizeTablet'], $attr['titlefontSizeType']) . "!important",
					"margin" => self::get_css_value($attr['titleMarginTablet'], $attr['titleMarginType']) . "!important",
				),
					" .premium-tab-content" => array(
					"font-size" => self::get_css_value($attr['contentfontSizeTablet'], $attr['contentfontSizeType']). "!important",
					"padding" => self::get_css_value($attr['contentPaddingTablet'], $attr['contentPaddingType']) . "!important",
					),
					" .premium-tab-nav-list-item a" => array(
						"padding" => self::get_css_value($attr['tabPaddingTablet'], $attr['tabPaddingType']),
						"margin" => self::get_css_value($attr['tabMarginTablet'], $attr['tabMarginType']) . "!important",
					)
			);
			// Tablet Icon Size CSS ends.

			// @codingStandardsIgnoreEnd

			$base_selector = ( $attr['classMigrate'] ) ? '.premium-block-' : '#premium-progress-bar-';

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

		public static function get_fancy_text_css ( $attr, $id ){
			$defaults = self::$block_list['premium/fancy-text']['attributes'];
            
			$attr = array_merge( $defaults, (array) $attr );

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array(
				// Desktop Icon Size CSS starts.
				" .premium-fancy-text-title" => array(
					"font-size" =>  self::get_css_value($attr['fancyTextfontSize'] , $attr['fancyTextfontSizeType'] ),
					"color" => $attr['fancyTextColor'],
					"background-color" => $attr['fancyTextBGColor'],
					"letter-spacing" => self::get_css_value($attr['fancyTextLetter'] , 'px') ,
					"text-transform" => $attr['fancyTextUpper'] ? "uppercase" : "none" ,
					"font-style" => self::get_css_value($attr['fancyTextStyle'], " !important") ,
					"font-weight" => self::get_css_value($attr['fancyTextWeight'], " !important") ,
					"text-shadow" => self::get_css_value($attr['shadowHorizontal'],'px ') .self::get_css_value($attr['shadowVertical'],'px ') . self::get_css_value($attr['shadowBlur'], 'px ') . $attr['shadowColor'],
				),
				" .premium-fancy-text-title-slide" => array(
					"font-size" =>  self::get_css_value($attr['fancyTextfontSize'] , $attr['fancyTextfontSizeType'] ),
					"color" => $attr['fancyTextColor'],
					"background-color" => $attr['fancyTextBGColor'],
					"letter-spacing" => self::get_css_value($attr['fancyTextLetter'] , 'px') ,
					"text-transform" => $attr['fancyTextUpper'] ? "uppercase" : "none" ,
					"font-style" => self::get_css_value($attr['fancyTextStyle'], " !important") ,
					"font-weight" => self::get_css_value($attr['fancyTextWeight'], " !important") ,
					"text-shadow" => self::get_css_value($attr['shadowHorizontal'],'px ') .self::get_css_value($attr['shadowVertical'],'px ') . self::get_css_value($attr['shadowBlur'], 'px ') . $attr['shadowColor'],
				),
				" .typed-cursor" => array(
					"color" => $attr['cursorColor'],
				),
				" .premium-fancy-text-prefix-text" => array(
					"font-size" =>  self::get_css_value($attr['TextfontSize'] , $attr['TextfontSizeType'] ),
					"color" => $attr['textColor'],
					"background-color" => $attr['TextBGColor'],
					"letter-spacing" => self::get_css_value($attr['TextLetter'] , 'px') ,
					"text-transform" => $attr['TextUpper'] ? "uppercase" : "none" ,
					"font-style" => self::get_css_value($attr['TextStyle'], " !important") ,
					"font-weight" => self::get_css_value($attr['TextWeight'], " !important") ,
				),
				" .premium-fancy-text-suffix-text" => array(
					"font-size" =>  self::get_css_value($attr['TextfontSize'] , $attr['TextfontSizeType'] ),
					"color" => $attr['textColor'],
					"background-color" => $attr['TextBGColor'],
					"letter-spacing" => self::get_css_value($attr['TextLetter'] , 'px') ,
					"text-transform" => $attr['TextUpper'] ? "uppercase" : "none" ,
					"font-style" => self::get_css_value($attr['TextStyle'], " !important") ,
					"font-weight" => self::get_css_value($attr['TextWeight'], " !important") ,
				),
      );
            // Desktop Icon Size CSS ends.

			// Mobile Icon Size CSS starts.
			$m_selectors = array(
				" premium-fancy-text-title"  => array(
					"font-size" => self::get_css_value($attr['fancyTextfontSizeMobile'], $attr['fancyTextfontSizeType']) . "!important"
				),
				" .premium-fancy-text-title-slide"  => array(
					"font-size" => self::get_css_value($attr['fancyTextfontSizeMobile'], $attr['fancyTextfontSizeType']) . "!important"
				),
				" .premium-fancy-text-prefix-text" => array(
				"font-size" => self::get_css_value($attr['TextfontSizeMobile'], $attr['TextfontSizeType']). "!important"
				),
				" .premium-fancy-text-suffix-text" => array(
				"font-size" => self::get_css_value($attr['TextfontSizeMobile'], $attr['TextfontSizeType']). "!important"
				),
			);
			// Mobile Icon Size CSS ends.

			// Tablet Icon Size CSS starts.
			$t_selectors = array(
				" .premium-fancy-text-title"  => array(
					"font-size" => self::get_css_value($attr['fancyTextfontSizeTablet'], $attr['fancyTextfontSizeType']) . "!important"
				),
				" .premium-fancy-text-title-slide"  => array(
					"font-size" => self::get_css_value($attr['fancyTextfontSizeTablet'], $attr['fancyTextfontSizeType']) . "!important"
				),
				" .premium-fancy-text-prefix-text" => array(
				"font-size" => self::get_css_value($attr['TextfontSizeTablet'], $attr['TextfontSizeType']). "!important"
				),
				" .premium-fancy-text-suffix-text" => array(
					"padding" => self::get_css_value($attr['TextfontSizeTablet'], $attr['TextfontSizeType'])
				)
			);
			// Tablet Icon Size CSS ends.

			// @codingStandardsIgnoreEnd

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

		public static function get_title_css ( $attr, $id ){
			$defaults = self::$block_list['premium/title']['attributes'];
            
			$attr = array_merge( $defaults, (array) $attr );

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array(
				// Desktop Icon Size CSS starts.
				" .premium-title-style7-stripe__wrap" => array(
					"margin-top" =>  self::get_css_value($attr['stripeTopSpacing'] , 'px'),
					"margin-bottom" =>  self::get_css_value($attr['stripeBottomSpacing'] , 'px')
				),
				" .premium-title-style7-stripe-span" => array(
					"width" =>  self::get_css_value($attr['stripeWidth'] , 'px'),
					"height" =>  self::get_css_value($attr['stripeHeight'] , 'px'),
					"background-color" => $attr['stripeColor']
				),
				" .premium-title-header" => array(
					"font-size" =>  self::get_css_value($attr['titlefontSize'] , $attr['titlefontSizeType'] ),
					"color" => self::get_css_value($attr['titleColor'], '!important') ,
					"letter-spacing" => self::get_css_value($attr['titleLetter'] , 'px') ,
					"text-transform" => $attr['titleUpper'] ? "uppercase" : "none" ,
					"font-style" => self::get_css_value($attr['titleStyle'], " !important") ,
					"font-weight" => self::get_css_value($attr['titleWeight'], " !important") ,
					"text-shadow" => self::get_css_value($attr['titleshadowHorizontal'],'px ') .self::get_css_value($attr['titleshadowVertical'],'px ') . self::get_css_value($attr['titleshadowBlur'], 'px ') . $attr['titleshadowColor']
				),
				" .premium-title .style1 .premium-title-header" => array(
					"border-left" => $attr['titleborderWidth'] > '0'? self::get_css_value($attr['titleborderWidth'],'px ') . $attr['titleborderType'] . $attr['titleborderColor'] . "!important":"",
					"border-width" => self::get_css_value($attr['titleborderWidth'], 'px'),
					"border-color" => $attr['titleborderColor'],
					"border-style" => $attr['titleborderType'],
					"border-radius" => self::get_css_value($attr['titleborderRadius'], 'px')
				),
				" .premium-title-style2__wrap" => array(
					"background-color" => $attr['BGColor']
				),
				" .premium-title-style3__wrap" => array(
					"background-color" => $attr['BGColor']
				),
				" .premium-title .style2" => array(
					"border-bottom" => $attr['titleborderWidth'] > '0'? self::get_css_value($attr['titleborderWidth'],'px ') . $attr['titleborderType'] . $attr['titleborderColor'] . "!important":"",
					"border-width" => self::get_css_value($attr['titleborderWidth'], 'px'),
					"border-color" => $attr['titleborderColor'],
					"border-style" => $attr['titleborderType'],
					"border-radius" => self::get_css_value($attr['titleborderRadius'], 'px')
				),
				" .premium-title .style4" => array(
					"border-bottom" => $attr['titleborderWidth'] > '0'? self::get_css_value($attr['titleborderWidth'],'px ') . $attr['titleborderType'] . $attr['titleborderColor'] . "!important":"",
					"border-width" => self::get_css_value($attr['titleborderWidth'], 'px'),
					"border-color" => $attr['titleborderColor'],
					"border-style" => $attr['titleborderType'],
					"border-radius" => self::get_css_value($attr['titleborderRadius'], 'px')
				),
				" .premium-title .style5" => array(
					"border-bottom" => $attr['titleborderWidth'] > '0'? self::get_css_value($attr['titleborderWidth'],'px ') . $attr['titleborderType'] . $attr['titleborderColor'] . "!important":"",
					"border-width" => self::get_css_value($attr['titleborderWidth'], 'px'),
					"border-color" => $attr['titleborderColor'],
					"border-style" => $attr['titleborderType'],
					"border-radius" => self::get_css_value($attr['titleborderRadius'], 'px')
				),
				" .premium-title .style6" => array(
					"border-bottom" => $attr['titleborderWidth'] > '0'? self::get_css_value($attr['titleborderWidth'],'px ') . $attr['titleborderType'] . $attr['titleborderColor'] . "!important":"",
					"border-width" => self::get_css_value($attr['titleborderWidth'], 'px'),
					"border-color" => $attr['titleborderColor'],
					"border-style" => $attr['titleborderType'],
					"border-radius" => self::get_css_value($attr['titleborderRadius'], 'px')
				),
				" .premium-title-style5__wrap" => array(
					"border-bottom" => '2px solid ' . $attr['lineColor']
				),
				" .premium-title-style6__wrap" => array(
					"border-bottom" => '2px solid ' . $attr['lineColor']
				),
				" .premium-title-style6__wrap:before" => array(
					"border-bottom-color" => $attr['triangleColor']
				),
				" .premium-title-icon" => array(
					"font-size" =>  self::get_css_value($attr['iconSize'] , $attr['iconSizeType'] ),
					"color" => $attr['iconColor'],
					"background-color" => $attr['iconBGColor'],
					"border-width" => self::get_css_value($attr['iconborderWidth'], 'px'),
					"border-color" => $attr['iconborderColor'],
					"border-style" => $attr['iconborderType'],
					"border-radius" => self::get_css_value($attr['iconborderRadius'], 'px'),
					"text-shadow" => self::get_css_value($attr['iconshadowHorizontal'],'px ') .self::get_css_value($attr['iconshadowVertical'],'px ') . self::get_css_value($attr['iconshadowBlur'], 'px ') . $attr['iconshadowColor'],
					"padding" => self::get_css_value($attr['iconPadding'], $attr['iconPaddingType']),
					"margin" => self::get_css_value($attr['iconSpacing'], $attr['iconSpacingType'])
				),
				" .premium-title-text-title" => array(
					"padding" => self::get_css_value($attr['titlePadding'], $attr['titlePaddingType']),
					"margin" => self::get_css_value($attr['titleMargin'], $attr['titleMarginType'])
				),
				" .premium-title-header img" => array(
					"width" => self::get_css_value($attr['iconSize'] , $attr['iconSizeType'] ),
					"height" => self::get_css_value($attr['iconSize'] , $attr['iconSizeType'] )
				),
      );
            // Desktop Icon Size CSS ends.

			// Mobile Icon Size CSS starts.
			$m_selectors = array(
				" .premium-title-header"  => array(
					"font-size" => self::get_css_value($attr['titlefontSizeMobile'], $attr['titlefontSizeType']) . "!important"
				),
				" .premium-title-icon"  => array(
					"font-size" => self::get_css_value($attr['iconSizeMobile'], $attr['iconSizeType']) . "!important",
					"margin" => self::get_css_value($attr['iconSpacingMobile'], $attr['iconSpacingType']) . "!important",
					"padding" => self::get_css_value($attr['iconPaddingMobile'], $attr['iconPaddingType']) . "!important"
				),
				" .premium-title-text-title"  => array(
					"margin" => self::get_css_value($attr['titleMarginMobile'], $attr['titleMarginType']) . "!important",
					"padding" => self::get_css_value($attr['titlePaddingMobile'], $attr['titlePaddingType']) . "!important"
				),
				" .premium-title-header img" => array(
					"width" => self::get_css_value($attr['iconSizeMobile'] , $attr['iconSizeType'] ),
					"height" => self::get_css_value($attr['iconSizeMobile'] , $attr['iconSizeType'] )
				),
			);
			// Mobile Icon Size CSS ends.

			// Tablet Icon Size CSS starts.
			$t_selectors = array(
				" .premium-title-header"  => array(
					"font-size" => self::get_css_value($attr['titlefontSizeTablet'], $attr['titlefontSizeType']) . "!important"
				),
				" .premium-title-icon"  => array(
					"font-size" => self::get_css_value($attr['iconSizeTablet'], $attr['iconSizeType']) . "!important",
					"margin" => self::get_css_value($attr['iconSpacingTablet'], $attr['iconSpacingType']) . "!important",
					"padding" => self::get_css_value($attr['iconPaddingTablet'], $attr['iconPaddingType']) . "!important"
				),
				" .premium-title-text-title"  => array(
					"margin" => self::get_css_value($attr['titleMarginTablet'], $attr['titleMarginType']) . "!important",
					"padding" => self::get_css_value($attr['titlePaddingTablet'], $attr['titlePaddingType']) . "!important"
				),
				" .premium-title-header img" => array(
					"width" => self::get_css_value($attr['iconSizeTablet'] , $attr['iconSizeType'] ),
					"height" => self::get_css_value($attr['iconSizeTablet'] , $attr['iconSizeType'] )
				),
			);
			// Tablet Icon Size CSS ends.

			// @codingStandardsIgnoreEnd

			$base_selector = ( $attr['classMigrate'] ) ? '.premium-block-' : '#premium-title-';

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
		public static function get_css_value( $value = '', $unit = '' ) {

			// @codingStandardsIgnoreStart
			
			if ( '' == $value ) {
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