<?php
/**
 * Server-side rendering of the `pbg/content-switcher` block.
 *
 * @package WordPress
 */

function get_content_switcher_css_style( $attributes, $unique_id ) {
	$block_helpers          = new PBG_Blocks_Helper();
	$css                    = new Premium_Blocks_css();
	$unique_id = $attributes['block_id'];

	// if ( isset( $attributes['triggerStyles'] ) ) {
		// $triggerStyle = $attributes['triggerStyles'];
		// $css->set_selector( '#premium-trigger-' . $unique_id . ' .toggle-button svg' );
		// $css->add_property( 'fill', $css->render_color( $triggerStyle['iconColor'] ) );
		// $css->set_selector( '#premium-trigger-' . $unique_id . ' .toggle-button:hover svg' );
		// $css->add_property( 'fill', $css->render_color( $triggerStyle['iconHoverColor'] ) );
		// $css->set_selector( '#premium-trigger-' . $unique_id . ' .toggle-button' );
		// $css->add_property( 'background-color', $css->render_color( $triggerStyle['iconBgColor'] ) );
		// $css->set_selector( '#premium-trigger-' . $unique_id . ' .toggle-button:hover' );
		// $css->add_property( 'background-color', $css->render_color( $triggerStyle['iconBgHoverColor'] ) );
	// }

	return $css->css_output();
}
function should_render_inline( $name, $unique_id ) {

	if ( doing_filter( 'the_content' ) || apply_filters( 'premium_blocks_force_render_inline_css_in_content', false, $name, $unique_id ) || is_customize_preview() ) {
		return true;
	}
	return false;

}


 function render_block_pbg_content_switcher( $attributes, $content ) {
	$wrapper_attributes = get_block_wrapper_attributes();
	$unique_id = $attributes['block_id'];
	$align_class_name   = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $align_class_name ) );


	$style_id = 'pbg-blocks-style' . esc_attr( $unique_id );
	$id                 = 'premium-content-switcher-' . esc_attr( $unique_id );
	$unique_id = $attributes['block_id'];
	if ( ! wp_style_is( $style_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'content-switcher', $unique_id ) ) {
		// If filter didn't run in header (which would have enqueued the specific css id ) then filter attributes for easier dynamic css.
		// $attributes = apply_filters( 'Premium_BLocks_blocks_column_render_block_attributes', $attributes );
		$css = get_content_switcher_css_style( $attributes, $unique_id );
		if ( ! empty( $css ) ) {
			$block_helpers = new PBG_Blocks_Helper();
			if ( should_render_inline( 'content-switcher', $unique_id ) ) {
			$content = '<style id="pbg-blocks-style' . esc_attr( $unique_id ) . '">' . $css . '</style>' . $content;
			 } else {
				$block_helpers->render_inline_css( $css, $style_id, true );
				}
		}
	};
	return $content;

	}



 
/**
 * Registers the `pbg/content-switcher` block on the server.
 */
function register_block_pbg_content_switcher() {
    register_block_type_from_metadata(
        PREMIUM_BLOCKS_PATH . 'src/blocks/content-switcher',
		array(
            'render_callback' => 'render_block_pbg_content_switcher',
            )
        );
        wp_localize_script(
			'pbg-blocks-js',
			'PremiumBlocksSettings',
			array(
				'ajaxurl'           => esc_url( admin_url( 'admin-ajax.php' ) ),
				'nonce'             => wp_create_nonce( 'pa-blog-block-nonce' ),
				'settingPath'       => admin_url( 'admin.php?page=premium-gutenberg-maps' ),
				'defaultAuthImg'    => PREMIUM_BLOCKS_URL . 'assets/img/author.jpg'
			)
		);
}
add_action( 'init', 'register_block_pbg_content_switcher' );

function content_switcher_enqueue() {
	wp_register_script(
		'gpb-content-switcher-block-script',
			PREMIUM_BLOCKS_URL . 'src/blocks/content-switcher/content-switcher.js',
			array( 'jquery' ),
			PREMIUM_BLOCKS_VERSION,
			true
    );
}
add_action( 'enqueue_block_assets', 'content_switcher_enqueue' );