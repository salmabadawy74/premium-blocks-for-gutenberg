<?php

//Exit if accessed directly
if( ! defined( 'ABSPATH' ) ) exit();

/**
* Define Premium_Blocks_Integration class
*/
class Premium_Blocks_Integration {
    
    private static $instance = null;
    
    /**
    * Constructor for the class
    */
    public function __construct() {
        
        //Enqueue Editor Assets
        add_action( 'enqueue_block_editor_assets', array( $this, 'premium_gutenberg_editor' ) );
        
        //Enqueue Frontend Styles
        add_action( 'enqueue_block_assets', array( $this, 'premium_gutenberg_frontend' ) );
        
        //Enqueue Frontend Scripts
//        add_action( 'wp_enqueue_scripts', array( $this, 'public_scripts' ) );
        
        //Register Premium Blocks category
        add_filter( 'block_categories', array( $this, 'register_premium_category' ), 10, 1 );
        
//        add_filter('the_content', array( $this, 'check_used_blocks'));
    }
    
    /**
    * Enqueue Editor CSS/JS for Premium Blocks
    * @since 1.0.0
    * @access public
    * @return void
    */
    public function premium_gutenberg_editor() {
        
        $enabled_blocks = Premium_Guten_Admin::get_enabled_keys();
        
        wp_enqueue_script(
            'pbg-editor',
            PREMIUM_BLOCKS_URL . 'assets/js/build.js', 
            array(
                'wp-blocks',
                'wp-i18n',
                'wp-element'
            ),
            PREMIUM_BLOCKS_VERSION
        );
        
//        wp_localize_script(
//            'pbg-editor',
//            'BlocksSettings',
//            array(
//                'PremiumBanner' => 'Hello'
//            )
//        );
    
        wp_enqueue_style(
            'pbg-editor-css',
            PREMIUM_BLOCKS_URL . 'assets/css/editor.css',
            array( 'wp-edit-blocks' ),
            PREMIUM_BLOCKS_VERSION
        );
        
        wp_localize_script(
            'pbg-editor',
            'PremiumBlocksSettings',
            array(
				'defaultAuthImg'    => PREMIUM_BLOCKS_URL . 'assets/img/author.jpg',
                'activeBlocks'      => $enabled_blocks
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
        wp_enqueue_style(
            'pbg-fontawesome',
            'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        );
        
        
        wp_enqueue_style(
            'pbg-frontend',
            PREMIUM_BLOCKS_URL . 'assets/css/style.css',
            array('wp-blocks'),
            PREMIUM_BLOCKS_VERSION
        );
        
        $map_config = Premium_Guten_Maps::get_enabled_keys();
        
        $is_enabled = isset( $map_config['premium-map-api'] ) ? $map_config['premium-map-api'] : true;
        
        $api_key = isset( $map_config['premium-map-key'] ) ? $map_config['premium-map-key'] : '';
        
        $is_block_enabled = Premium_Guten_Admin::get_enabled_keys()['maps'];
        
        wp_enqueue_script(
            'waypoints_lib',
            PREMIUM_BLOCKS_URL . 'src/blocks/count-up/assets/lib/jquery.waypoints.js',
            array('jquery'),
            PREMIUM_BLOCKS_VERSION
        );
        
        wp_enqueue_script(
            'counter_lib',
            PREMIUM_BLOCKS_URL . 'src/blocks/count-up/assets/lib/countUpmin.js',
            array('jquery'),
            PREMIUM_BLOCKS_VERSION
        );
        
        wp_enqueue_script(
            'countup-js',
            PREMIUM_BLOCKS_URL . 'src/blocks/count-up/assets/countup.js',
            array('jquery'),
            PREMIUM_BLOCKS_VERSION
        );
        
        //Enqueue Google Maps API key Script
        if( $is_block_enabled && $is_enabled && ! empty( $api_key ) ) {
            wp_enqueue_script(
                'premium-map-block',
                'https://maps.googleapis.com/maps/api/js?key=' . $api_key
            );
        }
        
    }
    
    public function check_used_blocks($content) {
        
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
                    'title' => __('Premium Blocks', 'premium-gutenberg')
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
   public static function get_instance(){
       if( self::$instance == null ) {
           self::$instance = new self;
       }
       return self::$instance;
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