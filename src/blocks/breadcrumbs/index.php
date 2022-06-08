<?php
/**
 * Server-side rendering of the `pbg/breadcrumbs` block.
 *
 * @package WordPress
 */

require_once PREMIUM_BLOCKS_PATH . 'src/blocks/breadcrumbs/class-pbg-breadcrumb-trail.php';

function get_breadcrumbs_css( $attributes, $unique_id ) {
	$block_helpers          = pbg_blocks_helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];
		$block_helpers->add_gfont(
			array(
				'fontFamily'  => ( isset( $typography['fontFamily'] ) ? $typography['fontFamily'] : '' ),
				'fontVariant' => ( isset( $typography['fontWeight'] ) ? $typography['fontWeight'] : '' ),
			)
		);
		$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail, #' . $unique_id . ' > .premium-breadcrumb-trail a, #' . $unique_id . ' > .premium-breadcrumb-trail span' );
		$css->add_property( 'font-family', $css->render_color( $typography['fontFamily'] ) );
		$css->add_property( 'font-weight', $css->render_color( $typography['fontWeight'] ) );
		$css->add_property( 'font-style', $css->render_color( $typography['fontStyle'] ) );
		if ( isset( $typography['size'] ) ) {
			$css->add_property( 'font-size', $css->render_color( $typography['size']['Desktop'] . $typography['size']['unit'] ) );
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
		$css->set_selector( '#' . $unique_id . '.pbg-breadcrumbs-advanced .premium-breadcrumb-trail li' );
		$css->add_property( '--item-bg-color', $css->render_color( $color['item'] ) );
		$css->set_selector( '#' . $unique_id . '.pbg-breadcrumbs-advanced .premium-breadcrumb-trail li' );
		$css->add_property( '--separator-color', $css->render_color( $color['separator'] ) );
	}
	if ( isset( $attributes['spacing'] ) ) {
		$spacing = $attributes['spacing'];
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'padding-top', $css->render_color( $padding['Desktop']['top'] . 'px' ) );
			$css->add_property( 'padding-right', $css->render_color( $padding['Desktop']['right'] . 'px' ) );
			$css->add_property( 'padding-bottom', $css->render_color( $padding['Desktop']['bottom'] . 'px' ) );
			$css->add_property( 'padding-left', $css->render_color( $padding['Desktop']['left'] . 'px' ) );
		}
		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'margin-top', $css->render_color( $margin['Desktop']['top'] . 'px' ) );
			$css->add_property( 'margin-right', $css->render_color( $margin['Desktop']['right'] . 'px' . '!important' ) );
			$css->add_property( 'margin-bottom', $css->render_color( $margin['Desktop']['bottom'] . 'px' ) );
			$css->add_property( 'margin-left', $css->render_color( $margin['Desktop']['left'] . 'px' . '!important' ) );
		}

		if ( $spacing['itemPadding'] ) {
			$item_padding = $spacing['itemPadding'];
			$css->set_selector( '#' . $unique_id . '.pbg-breadcrumbs-advanced .premium-breadcrumb-trail li > *' );
			$css->add_property( 'padding-top', $css->render_color( $item_padding['Desktop']['top'] . 'px' ) );
			$css->add_property( 'padding-right', $css->render_color( $item_padding['Desktop']['right'] . 'px' ) );
			$css->add_property( 'padding-bottom', $css->render_color( $item_padding['Desktop']['bottom'] . 'px' ) );
			$css->add_property( 'padding-left', $css->render_color( $item_padding['Desktop']['left'] . 'px' ) );
		}

		$css->start_media_query( $media_query['tablet'] );
		if ( isset( $attributes['typography'] ) ) {
			$typography = $attributes['typography'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail, #' . $unique_id . ' > .premium-breadcrumb-trail a, #' . $unique_id . ' > .premium-breadcrumb-trail span' );
			if ( isset( $typography['size'] ) ) {
				$css->add_property( 'font-size', $css->render_color( $typography['size']['Tablet'] . $typography['size']['unit'] ) );
			}
		}
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'padding-top', $css->render_color( $padding['Tablet']['top'] . 'px' ) );
			$css->add_property( 'padding-right', $css->render_color( $padding['Tablet']['right'] . 'px' ) );
			$css->add_property( 'padding-bottom', $css->render_color( $padding['Tablet']['bottom'] . 'px' ) );
			$css->add_property( 'padding-left', $css->render_color( $padding['Tablet']['left'] . 'px' ) );
		}

		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'margin-top', $css->render_color( $margin['Tablet']['top'] . 'px' ) );
			$css->add_property( 'margin-right', $css->render_color( $margin['Tablet']['right'] . 'px' ) );
			$css->add_property( 'margin-bottom', $css->render_color( $margin['Tablet']['bottom'] . 'px' ) );
			$css->add_property( 'margin-left', $css->render_color( $margin['Tablet']['left'] . 'px' ) );
		}

		if ( $spacing['itemPadding'] ) {
			$item_padding = $spacing['itemPadding'];
			$css->set_selector( '#' . $unique_id . '.pbg-breadcrumbs-advanced .premium-breadcrumb-trail li > *' );
			$css->add_property( 'padding-top', $css->render_color( $item_padding['Tablet']['top'] . 'px' ) );
			$css->add_property( 'padding-right', $css->render_color( $item_padding['Tablet']['right'] . 'px' ) );
			$css->add_property( 'padding-bottom', $css->render_color( $item_padding['Tablet']['bottom'] . 'px' ) );
			$css->add_property( 'padding-left', $css->render_color( $item_padding['Tablet']['left'] . 'px' ) );
		}

		$css->stop_media_query();
		$css->start_media_query( $media_query['mobile'] );
		if ( isset( $attributes['typography'] ) ) {
			$typography = $attributes['typography'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail, #' . $unique_id . ' > .premium-breadcrumb-trail a, #' . $unique_id . ' > .premium-breadcrumb-trail span' );
			if ( isset( $typography['size'] ) ) {
				$css->add_property( 'font-size', $css->render_color( $typography['size']['Mobile'] . $typography['size']['unit'] ) );
			}
		}
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'padding-top', $css->render_color( $padding['Mobile']['top'] . 'px' ) );
			$css->add_property( 'padding-right', $css->render_color( $padding['Mobile']['right'] . 'px' ) );
			$css->add_property( 'padding-bottom', $css->render_color( $padding['Mobile']['bottom'] . 'px' ) );
			$css->add_property( 'padding-left', $css->render_color( $padding['Mobile']['left'] . 'px' ) );
		}

		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '#' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'margin-top', $css->render_color( $margin['Mobile']['top'] . 'px' ) );
			$css->add_property( 'margin-right', $css->render_color( $margin['Mobile']['right'] . 'px' ) );
			$css->add_property( 'margin-bottom', $css->render_color( $margin['Mobile']['bottom'] . 'px' ) );
			$css->add_property( 'margin-left', $css->render_color( $margin['Mobile']['left'] . 'px' ) );
		}

		if ( $spacing['itemPadding'] ) {
			$item_padding = $spacing['itemPadding'];
			$css->set_selector( '#' . $unique_id . '.pbg-breadcrumbs-advanced .premium-breadcrumb-trail li > *' );
			$css->add_property( 'padding-top', $css->render_color( $item_padding['Mobile']['top'] . 'px' ) );
			$css->add_property( 'padding-right', $css->render_color( $item_padding['Mobile']['right'] . 'px' ) );
			$css->add_property( 'padding-bottom', $css->render_color( $item_padding['Mobile']['bottom'] . 'px' ) );
			$css->add_property( 'padding-left', $css->render_color( $item_padding['Mobile']['left'] . 'px' ) );
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
	$breadcrumb = apply_filters( 'breadcrumb_trail_object', null );
	$style      = isset( $attributes['breadcrumbsStyle'] ) ? $attributes['breadcrumbsStyle'] : 'normal';
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
	$align_class_name   = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']} ";
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $align_class_name . 'pbg-breadcrumbs-' . $style ) );

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
		$css = get_breadcrumbs_css( $attributes, $id );
		if ( ! empty( $css ) ) {
			$block_helpers = pbg_blocks_helper();
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
