<?php
/**
 * Server-side rendering of the `pbg/breadcrumbs` block.
 *
 * @package WordPress
 */

require_once PREMIUM_BLOCKS_PATH . 'src/blocks/breadcrumbs/class-pbg-breadcrumb-trail.php';

function get_breadcrumbs_css( $attributes, $unique_id ) {
	$block_helpers          = new PBG_Blocks_Helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];
		$block_helpers->add_gfont(
			array(
				'fontFamily'  => ( isset( $typography['family'] ) ? $typography['family'] : '' ),
				'fontVariant' => ( isset( $typography['weight'] ) ? $typography['weight'] : '' ),
			)
		);
		$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail, #' . $unique_id . ' > .premium-breadcrumb-trail a, #' . $unique_id . ' > .premium-breadcrumb-trail span' );
		$css->add_property( 'font-family', $css->render_color( $typography['family'] ) );
		$css->add_property( 'font-weight', $css->render_color( $typography['weight'] ) );
		$css->add_property( 'font-style', $css->render_color( $typography['style'] ) );
		if ( isset( $typography['size'] ) ) {
			$css->add_property( 'font-size', $css->render_color( $typography['size']['desktop'] . $typography['size']['unit'] ) );
		}
		$css->add_property( 'line-height', $css->render_color( $typography['lineHeight'] . 'px' ) );
		$css->add_property( 'text-transform', $css->render_color( $typography['textTransform'] ) );
		$css->add_property( 'text-decoration', $css->render_color( $typography['textDecoration'] ) );
	}
	if ( isset( $attributes['colors'] ) ) {
		$color = $attributes['colors'];
		$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
		$css->add_property( 'color', $css->render_color( $color['text'] ) );
		$css->add_property( 'background-color', $css->render_color( $color['background'] ) );
		$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail a' );
		$css->add_property( 'color', $css->render_color( $color['link'] ) );
		$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail a:hover' );
		$css->add_property( 'color', $css->render_color( $color['linkHover'] ) );
	}
	if ( isset( $attributes['spacing'] ) ) {
		$spacing = $attributes['spacing'];
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			error_log( wp_json_encode( $spacing['padding'] ) );
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'padding-top', $css->render_color( $padding['desktop']['top'] . 'px' ) );
			$css->add_property( 'padding-right', $css->render_color( $padding['desktop']['right'] . 'px' ) );
			$css->add_property( 'padding-bottom', $css->render_color( $padding['desktop']['bottom'] . 'px' ) );
			$css->add_property( 'padding-left', $css->render_color( $padding['desktop']['left'] . 'px' ) );
		}
		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'margin-top', $css->render_color( $margin['desktop']['top'] . 'px' ) );
			$css->add_property( 'margin-right', $css->render_color( $margin['desktop']['right'] . 'px' . '!important' ) );
			$css->add_property( 'margin-bottom', $css->render_color( $margin['desktop']['bottom'] . 'px' ) );
			$css->add_property( 'margin-left', $css->render_color( $margin['desktop']['left'] . 'px' . '!important' ) );
		}

		$css->start_media_query( $media_query['tablet'] );
		if ( isset( $attributes['typography'] ) ) {
			$typography = $attributes['typography'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail, #' . $unique_id . ' > .premium-breadcrumb-trail a, #' . $unique_id . ' > .premium-breadcrumb-trail span' );
			if ( isset( $typography['size'] ) ) {
				$css->add_property( 'font-size', $css->render_color( $typography['size']['tablet'] . $typography['size']['unit'] ) );
			}
		}
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'padding-top', $css->render_color( $padding['tablet']['top'] . 'px' ) );
			$css->add_property( 'padding-right', $css->render_color( $padding['tablet']['right'] . 'px' ) );
			$css->add_property( 'padding-bottom', $css->render_color( $padding['tablet']['bottom'] . 'px' ) );
			$css->add_property( 'padding-left', $css->render_color( $padding['tablet']['left'] . 'px' ) );
		}

		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'margin-top', $css->render_color( $margin['tablet']['top'] . 'px' ) );
			$css->add_property( 'margin-right', $css->render_color( $margin['tablet']['right'] . 'px' ) );
			$css->add_property( 'margin-bottom', $css->render_color( $margin['tablet']['bottom'] . 'px' ) );
			$css->add_property( 'margin-left', $css->render_color( $margin['tablet']['left'] . 'px' ) );
		}
		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attributes['typography'] ) ) {
			$typography = $attributes['typography'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail, #' . $unique_id . ' > .premium-breadcrumb-trail a, #' . $unique_id . ' > .premium-breadcrumb-trail span' );
			if ( isset( $typography['size'] ) ) {
				$css->add_property( 'font-size', $css->render_color( $typography['size']['mobile'] . $typography['size']['unit'] ) );
			}
		}
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'padding-top', $css->render_color( $padding['mobile']['top'] . 'px' ) );
			$css->add_property( 'padding-right', $css->render_color( $padding['mobile']['right'] . 'px' ) );
			$css->add_property( 'padding-bottom', $css->render_color( $padding['mobile']['bottom'] . 'px' ) );
			$css->add_property( 'padding-left', $css->render_color( $padding['mobile']['left'] . 'px' ) );
		}

		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'margin-top', $css->render_color( $margin['mobile']['top'] . 'px' ) );
			$css->add_property( 'margin-right', $css->render_color( $margin['mobile']['right'] . 'px' ) );
			$css->add_property( 'margin-bottom', $css->render_color( $margin['mobile']['bottom'] . 'px' ) );
			$css->add_property( 'margin-left', $css->render_color( $margin['mobile']['left'] . 'px' ) );
		}
		$css->stop_media_query();
	}

	return $css->css_output();
}

/**
 * Renders the `pbg/breadcrumbs` block on the server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string The render.
 */
function render_block_pbg_breadcrumbs( $attributes ) {
	error_log( wp_json_encode( $attributes ) );
	$breadcrumb = apply_filters( 'breadcrumb_trail_object', null );
	$args       = array();
	if ( isset( $attributes['prefix'] ) ) {
		$args['prefix'] = $attributes['prefix'];
	}
	if ( isset( $attributes['divider'] ) ) {
		$args['divider'] = $attributes['divider'];
	}
	if ( isset( $attributes['homeItemType'] ) ) {
		$args['home_item_type'] = $attributes['homeItemType'];
	}
	if ( ! is_object( $breadcrumb ) ) {
		$breadcrumb = new PBG_Breadcrumb_Trail( $args );
	}
	$unique_id          = rand( 100, 10000 );
	$id                 = 'pbg-block-' . esc_attr( $unique_id );
	$align_class_name   = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $align_class_name ) );

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
		$css = get_breadcrumbs_css( $attributes, $id );
		if ( ! empty( $css ) ) {
			$block_helpers = new PBG_Blocks_Helper();
			$block_helpers->render_inline_css( $css, $unique_id, true );
		}
	};

	return sprintf(
		'<div id="%1$s" %2$s>%3$s</div>',
		esc_attr( $id ),
		$wrapper_attributes,
		// already pre-escaped if it is a link.
		$breadcrumb->get_trail()
	);
}

/**
 * Registers the `pbg/breadcrumbs` block on the server.
 */
function register_block_pbg_breadcrumbs() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/breadcrumbs',
		array(
			'render_callback' => 'render_block_pbg_breadcrumbs',
		)
	);
}
add_action( 'init', 'register_block_pbg_breadcrumbs' );
