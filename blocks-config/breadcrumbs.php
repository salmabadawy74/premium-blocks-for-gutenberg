<?php
/**
 * Server-side rendering of the `pbg/breadcrumbs` block.
 *
 * @package WordPress
 */

require_once PREMIUM_BLOCKS_PATH . 'blocks-config/class-pbg-breadcrumb-trail.php';

function get_breadcrumbs_css( $attributes, $unique_id ) {
	$block_helpers          = pbg_blocks_helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];

		$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail, .' . $unique_id . ' > .premium-breadcrumb-trail a, .' . $unique_id . ' > .premium-breadcrumb-trail span' );
		$css->add_property( 'font-family', $css->render_color( $typography['fontFamily'] ) );
		$css->add_property( 'font-weight', $css->render_color( $typography['fontWeight'] ) );
		$css->add_property( 'font-style', $css->render_color( $typography['fontStyle'] ) );
		$css->add_property( 'text-transform', $css->render_color( $typography['textTransform'] ) );
		$css->add_property( 'text-decoration', $css->render_color( $typography['textDecoration'] ) );
		$css->render_typography( $typography, 'Desktop' );
	}

	if ( isset( $attributes['colors'] ) ) {
		$color = $attributes['colors'];
		$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail' );
		$css->add_property( 'color', $css->render_color( $color['text'] ) );
		$css->add_property( 'background-color', $css->render_color( $color['background'] ) );
		$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail a' );
		$css->add_property( 'color', $css->render_color( $color['link'] ) );
		$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail a:hover' );
		$css->add_property( 'color', $css->render_color( $color['linkHover'] ) );
		$css->set_selector( '.' . $unique_id . '.premium-breadcrumbs-advanced .premium-breadcrumb-trail li' );
		$css->add_property( '--item-bg-color', $css->render_color( $color['item'] ) );
		$css->set_selector( '.' . $unique_id . '.premium-breadcrumbs-advanced .premium-breadcrumb-trail li' );
		$css->add_property( '--separator-color', $css->render_color( $color['separator'] ) );
	}

	if ( isset( $attributes['spacing'] ) ) {
		$spacing = $attributes['spacing'];
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}
		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'margin', $css->render_spacing( $margin['Desktop'], $margin['unit'] ) );
		}

		if ( $spacing['itemPadding'] ) {
			$item_padding = $spacing['itemPadding'];
			$css->set_selector( '.' . $unique_id . '.premium-breadcrumbs-advanced .premium-breadcrumb-trail li > *' );
			$css->add_property( 'padding', $css->render_spacing( $item_padding['Desktop'], $item_padding['unit'] ) );
		}
	}

	$css->start_media_query( $media_query['tablet'] );

	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];
		$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail, .' . $unique_id . ' > .premium-breadcrumb-trail a, .' . $unique_id . ' > .premium-breadcrumb-trail span' );
		$css->render_typography( $typography, 'Tablet' );
	}

	if ( isset( $attributes['spacing'] ) ) {
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}

		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'margin', $css->render_spacing( $margin['Tablet'], $margin['unit'] ) );
		}

		if ( $spacing['itemPadding'] ) {
			$item_padding = $spacing['itemPadding'];
			$css->set_selector( '.' . $unique_id . '.premium-breadcrumbs-advanced .premium-breadcrumb-trail li > *' );
			$css->add_property( 'padding', $css->render_spacing( $item_padding['Tablet'], $item_padding['unit'] ) );
		}
	}

	$css->stop_media_query();

	$css->start_media_query( $media_query['mobile'] );

	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];
		$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail, .' . $unique_id . ' > .premium-breadcrumb-trail a, .' . $unique_id . ' > .premium-breadcrumb-trail span' );
		$css->render_typography( $typography, 'Mobile' );
	}

	if ( isset( $attributes['spacing'] ) ) {
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
		}

		if ( $spacing['margin'] ) {
			$margin = $spacing['margin'];
			$css->set_selector( '.' . $unique_id . ' > .premium-breadcrumb-trail' );
			$css->add_property( 'margin', $css->render_spacing( $margin['Mobile'], $margin['unit'] ) );
		}

		if ( $spacing['itemPadding'] ) {
			$item_padding = $spacing['itemPadding'];
			$css->set_selector( '.' . $unique_id . '.premium-breadcrumbs-advanced .premium-breadcrumb-trail li > *' );
			$css->add_property( 'padding', $css->render_spacing( $item_padding['Mobile'], $item_padding['unit'] ) );
		}
	}

	$css->stop_media_query();

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
    
	$unique_id = rand( 100, 10000 );
	$id        = 'premium-breadcrumbs-' . esc_attr( $unique_id );

	$breadcrumb   = apply_filters( 'breadcrumb_trail_object', null );
	$style        = isset( $attributes['breadcrumbsStyle'] ) ? $attributes['breadcrumbsStyle'] : 'normal';
	$block_id     = ( ! empty( $attributes['blockId'] ) ) ? $attributes['blockId'] : $id;
	$args         = array();
	$hide_desktop = ( ! empty( $attributes['hideDesktop'] ) ) ? $attributes['hideDesktop'] : false;
	$hide_mobile  = ( ! empty( $attributes['hideMobile'] ) ) ? $attributes['hideMobile'] : false;
	$hide_tablet  = ( ! empty( $attributes['hideTablet'] ) ) ? $attributes['hideTablet'] : false;

	if ( isset( $attributes['enablePrefix'] ) && $attributes['enablePrefix'] ) {
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

	$align_class_name   = empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']} ";
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $align_class_name . 'premium-breadcrumbs-' . $style . ' ' . $block_id . ( $hide_desktop ? ' premium-desktop-hidden' : '' ) . ( $hide_tablet ? ' premium-tablet-hidden' : '' ) . ( $hide_mobile ? ' premium-mobile-hidden' : '' ) ) );

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
		$css = get_breadcrumbs_css( $attributes, $block_id );
		if ( ! empty( $css ) ) {
			$block_helpers = pbg_blocks_helper();
			$block_helpers->render_inline_css( $css, $unique_id, true );
		}
	};

	return sprintf(
		'<div %1$s>%2$s</div>',
		$wrapper_attributes,
		// already pre-escaped if it is a link.
		$breadcrumb->get_trail()
	);
}

/**
 * Registers the `pbg/breadcrumbs` block on the server.
 */
function register_block_pbg_breadcrumbs() {
        if ( ! function_exists( 'register_block_type' ) ) {
			return;
        }
	    register_block_type(
			'premium/breadcrumbs',
			array(
			'render_callback' => 'render_block_pbg_breadcrumbs',	
			)
		);
}
add_action( 'init', 'register_block_pbg_breadcrumbs' );
function breadcrumbs_enqueue() {
	    wp_enqueue_style(
            'pbg-breadcrumbs-style',
        PREMIUM_BLOCKS_URL . 'assets/css/minified/breadcrumbs.min.css',
        array(), PREMIUM_BLOCKS_VERSION, 
        'all' 
     );
};
add_action( 'enqueue_block_assets', 'breadcrumbs_enqueue' );