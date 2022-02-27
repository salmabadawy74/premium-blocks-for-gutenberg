<?php
/*
 * Plugin Name: Premium Blocks for Gutenberg
 * Description: Gutenberg blocks that will help you build amazing pages with the new WordPress Gutenberg editor.
 * Plugin URI: https://premiumblocks.io/
 * Author: Leap13
 * Author URI: https://leap13.com/
 * Version: 1.9.0
 * Text Domain: premium-blocks-for-gutenberg
 * Domain Path: /languages
 * License: GNU General Public License v3.0
 * @package gutenberg_premium_blocks
 */

/**
 * Exit if accessed directly
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define plugin constants
define( 'PREMIUM_BLOCKS_VERSION', '1.9.0' );
define( 'PREMIUM_BLOCKS_URL', plugins_url( '/', __FILE__ ) );
define( 'PREMIUM_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define( 'PREMIUM_BLOCKS_FILE', __FILE__ );
define( 'PREMIUM_BLOCKS_BASENAME', plugin_basename( __FILE__ ) );
define( 'PREMIUM_BLOCKS_STABLE_VERSION', '1.8.9' );
define( 'PBG_TABLET_BREAKPOINT', '976' );
define( 'PBG_MOBILE_BREAKPOINT', '767' );

require_once PREMIUM_BLOCKS_PATH . 'includes/plugin.php';

/*
 * Initialize Plugin Main Class
 * @return void
 */
add_action( 'init', array( 'Premium_Blocks_Gutenberg', 'get_instance' ) );
add_action(
	'init',
	'gutenberg_register_gutenberg_patterns'
);
add_action( 'init', 'my_plugin_register_my_patterns' );

function my_plugin_register_my_patterns() {
	$content = "<h2>Test</h2>";

	$patterns = array(
		'buttons'                 => array(
			'title'       => __( 'Two buttons', 'my-plugin' ),
			'categories' => array( 'hero' ),
	// Assigning the pattern the "header" area.
	'blockTypes' => array( 'core/hero' ),
			'description' => _x( 'Two horizontal buttons, the left button is filled in, and the right button is outlined.', 'Block pattern description', 'my-plugin' ),
			'content'     => "<!-- wp:buttons {\"align\":\"center\"} -->\n<div class=\"wp-block-buttons aligncenter\"><!-- wp:button {\"backgroundColor\":\"very-dark-gray\",\"borderRadius\":0} -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link has-background has-very-dark-gray-background-color no-border-radius\">" . esc_html__( 'Button One', 'my-plugin' ) . "</a></div>\n<!-- /wp:button -->\n\n<!-- wp:button {\"textColor\":\"very-dark-gray\",\"borderRadius\":0,\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button is-style-outline\"><a class=\"wp-block-button__link has-text-color has-very-dark-gray-color no-border-radius\">" . esc_html__( 'Button Two', 'my-plugin' ) . "</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->",
		),
		'headers'                   => array(
			'title'       => __( 'Two headers', 'my-plugin' ),
			'categories' => array( 'hero' ),
	// Assigning the pattern the "header" area.
	'blockTypes' => array( 'core/hero' ),
			'description' => _x( 'Two horizontal buttons, the left button is filled in, and the right button is outlined.', 'Block pattern description', 'my-plugin' ),
			'content'     => "<h2>Test<\/h2>",
		)
	);

	foreach ( $patterns as $name => $pattern ) {
		$pattern_name = 'core/' . $name;
		if ( ! WP_Block_Patterns_Registry::get_instance()->is_registered( $pattern_name ) ) {
			register_block_pattern( $pattern_name, $pattern );
		}
	}
  }

function gutenberg_register_gutenberg_patterns() {
	print_r('hjj');
	// Register categories used for block patterns.
	// if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( 'hero' ) ) {
		register_block_pattern_category(
			'hero',
			array( 'label' => __( 'Hero', 'my-plugin' ) )
		);
	// }

// 		if ( class_exists( 'WP_Block_Patterns_Registry' ) ) {

// 			$content = '<!-- wp:heading {\"align\":\"center\"} -->\n<h2 class=\"has-text-align-center\"><strong>Our approach reflects the people we serve. We are diverse, yet the same.</strong></h2>\n<!-- /wp:heading -->\n\n<!-- wp:buttons {\"align\":\"center\"} -->\n<div class=\"wp-block-buttons aligncenter\"><!-- wp:button {\"borderRadius\":7,\"style\":{\"color\":{\"gradient\":\"linear-gradient(135deg,rgb(0,0,0) 0%,rgb(0,0,0) 50%,rgb(0,0,0) 100%)\"}}} -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link has-background\" style=\"border-radius:7px;background:linear-gradient(135deg,rgb(0,0,0) 0%,rgb(0,0,0) 50%,rgb(0,0,0) 100%)\">Learn More</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->\n\n<!-- wp:spacer {\"height\":59} -->\n<div style=\"height:59px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:gallery {\"ids\":[621,624],\"sizeSlug\":\"full\",\"align\":\"wide\"} -->\n<figure class=\"wp-block-gallery alignwide columns-2 is-cropped\"><ul class=\"blocks-gallery-grid\"><li class=\"blocks-gallery-item\"><figure><img src=\"https://iceberg.test/wp-content/uploads/2020/07/home-image-3.jpg\" alt=\"\" data-id=\"621\" class=\"wp-image-621\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"https://iceberg.test/wp-content/uploads/2020/07/home-image-2.jpg\" alt=\"\" data-id=\"624\" data-full-url=\"https://iceberg.test/wp-content/uploads/2020/07/home-image-2.jpg\" data-link=\"https://iceberg.test/?attachment_id=624\" class=\"wp-image-624\"/></figure></li></ul></figure>\n<!-- /wp:gallery -->';

// 	register_block_pattern(
// 		'tabor/cover',
// 		array(
// 			'title'         => __( 'rtyh', 'tabor' ),
// 			'description'   => _x( 'A call to action with a beautiful two-column gallery below.', 'tabor' ),
// 			'content'       => trim($content),
// 			'categories'    => ['cover'],
// 							'blockTypes'    => array( 'core/cover' ),
// 		)
// 	);

// }
}