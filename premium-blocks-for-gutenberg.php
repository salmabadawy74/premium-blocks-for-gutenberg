<?php
/*
 * Plugin Name: Premium Blocks for Gutenberg
 * Description: Gutenberg blocks that will help you build amazing pages with the new WordPress Gutenberg editor.
 * Plugin URI: https://premiumblocks.io/
 * Author: Leap13
 * Author URI: https://leap13.com/
 * Version: 1.9.2
 * Text Domain: premium-blocks-for-gutenberg
 * Domain Path: /languages
 * License: GNU General Public License v3.0
 * @package gutenberg_premium_blocks
 */

/**
 * Exit if accessed directly
 */
if( ! defined( 'ABSPATH' ) ) exit;

//Define plugin constants
define( 'PREMIUM_BLOCKS_VERSION', '1.8.4');
define( 'PREMIUM_BLOCKS_URL', plugins_url('/', __FILE__) );
define( 'PREMIUM_BLOCKS_PATH', plugin_dir_path(__FILE__) );
define( 'PREMIUM_BLOCKS_FILE', __FILE__);
define( 'PREMIUM_BLOCKS_BASENAME', plugin_basename(__FILE__) );
define( 'PREMIUM_BLOCKS_STABLE_VERSION', '1.8.3');
define( 'PBG_TABLET_BREAKPOINT', '976' );
define( 'PBG_MOBILE_BREAKPOINT', '767' );

require_once( PREMIUM_BLOCKS_PATH . 'includes/plugin.php' );

/*
 * Initialize Plugin Main Class
 * @return void
 */
// add_action('init', array('Premium_Blocks_Gutenberg','get_instance') );

/**
	* Register gutenberg patterns
    *
    *
    * @since 1.8.2
    * @access public
    *
*/

add_action('init','gutenberg_register_gutenberg_patterns');

function gutenberg_register_gutenberg_patterns() {

    // Register categories used for block patterns.
    $pattern_categories = [
        'work' => __( 'Work', 'premium_section' ),
        'carousel' => __( 'Carousel', 'premium_section' ),
        'brief' => __( 'Brief', 'premium_section' ),
        'premium_pattern' => __( 'Premium Pattern', 'premium_section' )
    ];

    if ( ! empty( $pattern_categories ) && is_array($pattern_categories) ) {

        foreach ( $pattern_categories as $pattern_category => $pattern_category_label ) {

            register_block_pattern_category(
                $pattern_category,
                [ 'label' => $pattern_category_label ]
            );
        }
    }
        $response = wp_remote_get( 'https://pg.premiumtemplates.io/wp-json/patemp/v2/templates/premium_section' );

        $content = wp_remote_retrieve_body( $response );

        $pattern = json_decode($content, true);

        foreach ( $pattern['templates'] as $title => $pattern ) {

            $pattern_name = 'core/' . $pattern['title'];
			
            if ( ! WP_Block_Patterns_Registry::get_instance()->is_registered( $pattern_name ) ) {
                register_block_pattern( $pattern_name, $pattern );
            }
        }
}
