<?php

/*
 * Plugin Name: Premium Blocks for Gutenberg
 * Description: Premium Blocks for Gutenberg is a brand new blocks collection plugin which we are currently developing to be fully ready with Gutenberg stable version release.
 * Plugin URI: https://premiumaddons.com
 * Author: Leap13
 * Author URI: http://leap13.com/
 * Version: 1.0.0
 * Text Domain: premium-gutenberg
 * License: GNU General Public License v3.0
 * @package Gutenberg_Premium_Blocks
 */

namespace PremiumGutenberg;

/**
 * Exit if accessed directly
 */
if( ! defined( 'ABSPATH' ) ) exit;

//Define plugin constants
define( 'PREMIUM_BLOCKS_URL', plugins_url('/', __FILE__ ) );
define( 'PREMIUM_BLOCKS_VERSION', '1.1.0');
define( 'PREMIUM_BLOCKS_URL', plugins_url('/', __FILE__) );
define( 'PREMIUM_BLOCKS_PATH', plugin_dir_path(__FILE__) );
define( 'PREMIUM_BLOCKS_FILE', __FILE__);
define( 'PREMIUM_BLOCKS_BASENAME', plugin_basename(__FILE__) );
define( 'PREMIUM_BLOCKS_STABLE_VERSION', '1.0.0');

// Define class 'Premium_Blocks_Gutenberg' if not Exists
if( ! class_exists( 'Premium_Blocks_Gutenberg' ) ) {
    
    class Premium_Blocks_Gutenberg {
        
        private static $instance = null;
        
        /**
        * Sets up needed actions/filters for the plug-in to initialize.
        * @since 1.0.0
        * @access public
        * @return void
        */
        public function __construct() {
            //Enqueue the required files
            add_action('plugins_loaded',array( $this, 'init_files') );
            
            
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
         * Initialize the requir
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

if ( ! function_exists( 'premium_gutenberg' ) ) {
	/**
	 * Returns an instance of the plugin class.
	 * @since  1.0.0
	 * @return object
	 */
	function premium_gutenberg() {
		return Premium_Blocks_Gutenberg::get_instance();
	}
}
premium_gutenberg();


