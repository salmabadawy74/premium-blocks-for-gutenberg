<?php

if( ! defined( 'ABSPATH' ) ) exit();

class Premium_Blocks_Integration {
    
    private static $instance = null;
    
    /**
    * Class Constructor
    */
    public function __construct() {
        
        //Enqueue Editor Assets
        add_action('enqueue_block_editor_assets', array( $this, 'premium_gutenberg_editor') );
        
        //Enqueue Frontend Styles
        //add_action('enqueue_block_assets',array( $this, 'premium_gutenberg_frontend') );
        
        //Enqueue Frontend Scripts
        add_action( 'wp_enqueue_scripts', array( $this, 'public_scripts' ) );
        
        //Register Premium Blocks category
        add_filter('block_categories', array( $this, 'register_premium_category'), 10, 1 );
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
            PREMIUM_BLOCKS_URL . 'assets/js/main.js', 
            array(
                'wp-blocks',
                'wp-i18n',
                'wp-element'
            ),
            filemtime( PREMIUM_BLOCKS_URL . 'build/index.build.js' )
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