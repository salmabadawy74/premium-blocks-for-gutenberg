<?php

namespace PremiumGutenberg\Includes;

if( ! defined( 'ABSPATH' ) ) exit();

class Premium_Blocks_Integration {
    
    private static $instance = null;
    
    public function __construct() {
        
        //Enqueue Editor Assets
//        add_action('enqueue_block_editor_assets', array( $this, 'premium_gutenberg_editor') );
//        
//        //Enqueue Frontend Assets
//        add_action('enqueue_block_assets',array( $this, 'premium_gutenberg_frontend') );
        
        add_action('init', array( $this, 'register_block') );
        
        //Register Premium Blocks category
        add_filter('block_categories', array( $this, 'register_premium_category'), 10, 1 );
    }
    
    /**
    * Triggers required functions to register our blocks
    * @since 1.0.0
    * @access public
    * @return void
    */
    public function register_block(){
        
        $this->register_block_assets();
        
    }
    
    /**
    * Registers block required CSS/JS
    * @since 1.0.0
    * @access public
    * @return void
    */
    public function register_block_assets() {
        
        // Gutenberg is not installed or active.
        if ( ! function_exists('register_block_type') ) {
            wp_die();
            return;
        }
        
        wp_register_script(
            'premium-dheading',
            PREMIUM_BLOCKS_URL . 'blocks/dual-heading/block.js',
            array(
                'wp-editor',
                'wp-blocks',
                'wp-i18n',
                'wp-element',
                'underscore'
            ),
            filemtime( PREMIUM_BLOCKS_URL . 'blocks/dual-heading/block.js' )
        );

        wp_register_style(
            'premium-dheading-editor',
            PREMIUM_BLOCKS_URL . 'blocks/dual-heading/styles/editor.css',
            array('wp-edit-blocks'),
            filemtime( PREMIUM_BLOCKS_URL . 'blocks/dual-heading/styles/editor.css' )
        );

        wp_register_style(
            'premium-dheading-frontend',
            PREMIUM_BLOCKS_URL . 'blocks/dual-heading/styles/style.css',
            array(),
            filemtime( PREMIUM_BLOCKS_URL . 'blocks/dual-heading/styles/style.css' )
        );

        $this->register_block_type();
        
        
    }
    
    /**
    * Registers block type
    * @since 1.0.0
    * @access public
    * @return void
    */
    public function register_block_type() {
        register_block_type(
           'premium/dheading-block',
            array(
               'editor_script'    =>  'premium-dheading',
               'editor_style'     =>  'premium-dheading-editor',
               'style'            =>  'premium-dheading-frontend'
            )
        );
        
        wp_add_inline_script(
            'premium-dheading',
            sprintf( 
                'var premium_dheading = { localeData: %s };', 
                json_encode( gutenberg_get_jed_locale_data( 'premium-gutenberg' ) ) 
            ),
            'before'
        );
        
    }
    
    /**
    * Enqueue Editor CSS/JS for Premium Blocks
    * @since 1.0.0
    * @access public
    * @return void
    */
    public function premium_gutenberg_editor() {
        
        wp_enqueue_script(
            'pbg-editor',
            PREMIUM_BLOCKS_URL . 'blocks/blocks.js', 
            array(
                'wp-blocks',
                'wp-i18n',
                'wp-element'
            ),
            filemtime( PREMIUM_BLOCKS_URL . 'blocks/blocks.js' )
        );
    
        wp_enqueue_style(
            'pbg-editor-css',
            PREMIUM_BLOCKS_URL . 'assets/css/editor.css',
            array('wp-edit-blocks'),
            filemtime( PREMIUM_BLOCKS_URL . 'assets/css/editor.css' )
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
            'pbg-frontend',
            PREMIUM_BLOCKS_URL . 'assets/css/style.css',
            array('wp-blocks'),
            filemtime( PREMIUM_BLOCKS_URL . 'assets/css/style.css' )
        );
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