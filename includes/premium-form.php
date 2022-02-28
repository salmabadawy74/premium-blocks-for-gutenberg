<?php
/**
 * Form Action Handling.
 *
 * @package Premium Blocks for Gutenberg
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Main plugin class
 */
class PBG_Form_Actions {

	/**
	 * Instance Control
	 *
	 * @var null
	 */
	private static $instance = null;
	/**
	 * Instance Control
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	/**
	 * Class Constructor.
	 */
	public function __construct() {
		add_action( 'premium_blocks_form_submission', array( $this, 'process_actions' ), 10, 4 );
	}
	/**
	 * Process the form submit.
	 *
	 * @param array  $form_args the form settings.
	 * @param array  $fields the form fields.
	 * @param string $form_id the form ID.
	 * @param int    $post_id the post ID.
	 */
	public function process_actions( $form_args, $fields, $form_id, $post_id ) {

	}

}
PBG_Form_Actions::get_instance();
