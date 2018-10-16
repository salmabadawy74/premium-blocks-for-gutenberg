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
 * @package gutenberg_premium_blocks
 */

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

require_once( PREMIUM_BLOCKS_PATH . 'includes/plugin.php' );

/*
 * Initialize Plugin Main Class
 * @return void
 */
add_action('init', array('Premium_Blocks_Gutenberg','get_instance') );