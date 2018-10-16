<?php

//Exit if accessed directly
if( ! defined('ABSPATH') ) exit;

// Define class 'Premium_Blocks_Gutenberg' if not Exists
if( ! class_exists( 'Premium_Blocks_Gutenberg' ) ) {
    
    class Premium_Blocks_Gutenberg {
        
        private static $instance = null;
        
        /**
         * Class Constructor
         * Triggers plugin setup function
        */
        public function __construct() {
            
            //Enqueue the required files
            $this->premium_gutenberg_setup();
            
        }
        
        /*
         * Triggers initial functions
         * @since 1.0.0
         * @access public
         * @return void
         */
        public function premium_gutenberg_setup() {
            
            $this->load_domain();
            
            $this->init_files();
            
        }
        
        /*
         * Load Premium Block for Gutenberg text domain
         * @since 1.0.0
         * @access public
         * @return void
         */
        public function load_domain() {
            load_plugin_textdomain( 'premium-gutenberg', false, dirname( plugin_basename ( __FILE__ ) ) . '/languages/' );
        }
        
        /*
         * Initialize blocks helper file
         * @since 1.0.0
         * @access public
         * @return void
         */
        public function init_files() {
            
            require_once ( PREMIUM_BLOCKS_PATH . 'includes/class-blocks-helper.php' );
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
    
}