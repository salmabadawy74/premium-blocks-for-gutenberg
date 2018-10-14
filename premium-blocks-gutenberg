<?php
/*
 * Plugin Name: Premium Blocks for Gutenberg
 * Description: Premium Blocks for Gutenberg is a brand new blocks collection plugin which we are currently developing to be fully ready with Gutenberg stable version release.
 * Author: Leap13
 * Author URI: http://leap13.com/
 * Version: 0.1
 * Text Domain: premium-blocks-for-gutenberg
 * License: GNU General Public License v3.0
 * @package Gutenberg_Premium_Blocks
 */

if( !defined( 'ABSPATH' ) ) exit;

define( 'PREMIUM_GUTENBERG_FBLOCKS_URL', plugins_url('/', __FILE__ ) );

function enqueue_pa_gfb_editor_assets(){
    
    wp_enqueue_script('pa-gfb-block',PREMIUM_GUTENBERG_FBLOCKS_URL . 'blocks/blocks.js',array('wp-blocks','wp-i18n','wp-element'), filemtime(PREMIUM_GUTENBERG_FBLOCKS_URL . 'blocks/blocks.js'));
    
    wp_enqueue_style('pa-gfb-editor', PREMIUM_GUTENBERG_FBLOCKS_URL . 'assets/css/editor.css',array('wp-edit-blocks'), filemtime(PREMIUM_GUTENBERG_FBLOCKS_URL . 'assets/css/editor.css' ));
}

add_action('enqueue_block_editor_assets','enqueue_pa_gfb_editor_assets');

function enqueue_pa_gfb_frontend_assets(){
    wp_enqueue_style('pa-gfb-frontend', PREMIUM_GUTENBERG_FBLOCKS_URL . 'assets/css/style.css',array('wp-blocks'), filemtime(PREMIUM_GUTENBERG_FBLOCKS_URL . 'assets/css/style.css' ));
}

add_action('enqueue_block_assets','enqueue_pa_gfb_frontend_assets');