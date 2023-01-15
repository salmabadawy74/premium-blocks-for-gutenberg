<?php
// Move this file to "blocks-config" folder with name "author.php".

/**
 * Server-side rendering of the `premium/author` block.
 *
 * @package WordPress
 */

function get_premium_author_css($attributes, $unique_id) {
	$block_helpers          = pbg_blocks_helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	// Desktop Styles.
    if (isset($attributes['align'])) {
		$css->set_selector('.' . $unique_id);
		$css->add_property('text-align', $css->get_responsive_css($attributes['align'], 'Desktop'));
	}
	if (isset($attributes['authorTypography'])) {
		$css->set_selector('.' . $unique_id . ' > .premium-testimonial__author');
		$css->render_typography($attributes['authorTypography'], 'Desktop');
	}
    if (isset($attributes['companyTypography'])) {
		$css->set_selector('.' . $unique_id . ' > .premium-testimonial__author_comp');
		$css->render_typography($attributes['companyTypography'], 'Desktop');
	}

	$css->start_media_query($media_query['tablet']);

	// Tablet Styles.
	if (isset($attributes['align'])) {
		$css->set_selector('.' . $unique_id);
		$css->add_property('text-align', $css->get_responsive_css($attributes['align'], 'Tablet'));
	}
	if (isset($attributes['authorTypography'])) {
		$css->set_selector('.' . $unique_id . ' > .premium-testimonial__author');
		$css->render_typography($attributes['authorTypography'], 'Tablet');
	}
    if (isset($attributes['companyTypography'])) {
		$css->set_selector('.' . $unique_id . ' > .premium-testimonial__author_comp');
		$css->render_typography($attributes['companyTypography'], 'Tablet');
	}

	$css->stop_media_query();
	$css->start_media_query( $media_query['mobile'] );

	// Mobile Styles.
	if (isset($attributes['align'])) {
		$css->set_selector('.' . $unique_id);
		$css->add_property('text-align', $css->get_responsive_css($attributes['align'], 'Mobile'));
	}
	if (isset($attributes['authorTypography'])) {
		$css->set_selector('.' . $unique_id . ' > .premium-testimonial__author');
		$css->render_typography($attributes['authorTypography'], 'Mobile');
	}
    if (isset($attributes['companyTypography'])) {
		$css->set_selector('.' . $unique_id . ' > .premium-testimonial__author_comp');
		$css->render_typography($attributes['companyTypography'], 'Mobile');
	}

	$css->stop_media_query();

	return $css->css_output();
}

/**
 * Renders the `premium/author` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_pbg_author( $attributes, $content, $block ) {

	$unique_id = rand( 100, 10000 );
	$id        = 'premium-author-' . esc_attr( $unique_id );
	$block_id  = ( ! empty( $attributes['blockId'] ) ) ? $attributes['blockId'] : $id;

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'author', $unique_id ) ) {
		$css = get_premium_author_css( $attributes, $block_id );
		if ( ! empty( $css ) ) {
			$block_helpers = pbg_blocks_helper();
			$block_helpers->render_inline_css( $css, $unique_id, true );
		}
	};

	return $content;
}


/**
 * Register the Author block.
 *
 * @uses render_block_pbg_author()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_pbg_author() {
	register_block_type(
		'premium/author',
		array(
			'render_callback' => 'render_block_pbg_author',
			'editor_style'    => 'premium-blocks-editor-css',
			'editor_script'   => 'pbg-blocks-js',
		)
	);
}

register_block_pbg_author();

