<?php
/**
 * Rendering of the `premium/search` block.
 *
 * @package gutenberg_premium_blocks
 */

function get_premium_search_css( $attributes, $unique_id ) {
	$block_helpers          = pbg_blocks_helper();
	$css                    = new Premium_Blocks_css();
	$media_query            = array();
	$media_query['Mobile']  = apply_filters( 'Premium_BLocks_mobile_media_query', '(max-width: 767px)' );
	$media_query['Tablet']  = apply_filters( 'Premium_BLocks_tablet_media_query', '(max-width: 1024px)' );
	$media_query['Desktop'] = apply_filters( 'Premium_BLocks_tablet_media_query', '(min-width: 1025px)' );

	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];

		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__input' );
		$css->add_property( 'font-family', $css->render_color( $typography['fontFamily'] ) );
		$css->add_property( 'font-weight', $css->render_color( $typography['fontWeight'] ) );
		$css->add_property( 'font-style', $css->render_color( $typography['fontStyle'] ) );
		$css->add_property( 'text-transform', $css->render_color( $typography['textTransform'] ) );
		$css->add_property( 'text-decoration', $css->render_color( $typography['textDecoration'] ) );
		$css->render_typography( $typography, 'Desktop' );
	}

	if ( isset( $attributes['floatValues'] ) ) {
		$button_position = $attributes['floatValues'];

		$css->set_selector( '.' . $unique_id . '.button-style-float.button-float-top-right' );
		$css->add_property( 'top', $css->render_color( $button_position['top'] . 'px' ) );
		$css->add_property( 'right', $css->render_color( $button_position['right'] . 'px' ) );
		$css->set_selector( '.' . $unique_id . '.button-style-float.button-float-top-left' );
		$css->add_property( 'top', $css->render_color( $button_position['top'] . 'px' ) );
		$css->add_property( 'left', $css->render_color( $button_position['left'] . 'px' ) );
		$css->set_selector( '.' . $unique_id . '.button-style-float.button-float-bottom-right' );
		$css->add_property( 'bottom', $css->render_color( $button_position['bottom'] . 'px' ) );
		$css->add_property( 'right', $css->render_color( $button_position['right'] . 'px' ) );
		$css->set_selector( '.' . $unique_id . '.button-style-float.button-float-bottom-left' );
		$css->add_property( 'bottom', $css->render_color( $button_position['bottom'] . 'px' ) );
		$css->add_property( 'left', $css->render_color( $button_position['left'] . 'px' ) );
	}

	if ( isset( $attributes['buttonTypography'] ) ) {
		$button_typography = $attributes['buttonTypography'];

		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__button' );
		$css->add_property( 'font-family', $css->render_color( $button_typography['fontFamily'] ) );
		$css->add_property( 'font-weight', $css->render_color( $button_typography['fontWeight'] ) );
		$css->add_property( 'font-style', $css->render_color( $button_typography['fontStyle'] ) );
		$css->add_property( 'text-transform', $css->render_color( $button_typography['textTransform'] ) );
		$css->add_property( 'text-decoration', $css->render_color( $button_typography['textDecoration'] ) );
		$css->render_typography( $button_typography, 'Desktop' );
	}

	if ( isset( $attributes['border'] ) ) {
		$border        = $attributes['border'];
		$border_width  = $attributes['border']['borderWidth'];
		$border_radius = $attributes['border']['borderRadius'];

		$css->set_selector( '.' . $unique_id . ':not(.wp-block-search__button-inside) .wp-block-premium-search__input, .' . $unique_id . '.wp-block-search__button-inside .wp-block-premium-search__inside-wrapper' );
		$css->add_property( 'border-style', $css->render_color( $border['borderType'] ) );
		$css->add_property( 'border-color', $css->render_color( $border['borderColor'] ) );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Desktop'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Desktop'], 'px' ) );
	}

	if ( isset( $attributes['colors'] ) ) {
		$colors = $attributes['colors'];

		$css->set_selector( '.' . $unique_id . ':not(.wp-block-search__button-inside) .wp-block-premium-search__input, .' . $unique_id . '.wp-block-search__button-inside .wp-block-premium-search__inside-wrapper' );
		$css->add_property( 'background-color', $css->render_color( $colors['background'] ) );
		$css->add_property( 'color', $css->render_color( $colors['text'] ) );
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__button' );
		$css->add_property( 'background-color', $css->render_color( $colors['btnBackground'] ) );
		$css->add_property( 'color', $css->render_color( $colors['btnText'] ) );
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__button:hover' );
		$css->add_property( 'background-color', $css->render_color( $colors['btnHoverBackground'] ) );
		$css->add_property( 'color', $css->render_color( $colors['btnHoverText'] ) );
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__label' );
		$css->add_property( 'color', $css->render_color( $colors['label'] ) );
		$css->set_selector( '.' . $unique_id );
		$css->add_property( '--pbg-dropdown-bg-color', $css->render_color( $colors['dropdown'] ) );
		$css->add_property( '--pbg-link-color', $css->render_color( $colors['link'] ) );
		$css->add_property( '--pbg-link-hover-color', $css->render_color( $colors['linkHover'] ) );
		$css->add_property( '--pbg-modal-bg-color', $css->render_color( $colors['modal'] ) );
	}

	if ( isset( $attributes['spacing'] ) ) {
		$spacing = $attributes['spacing'] ? $attributes['spacing'] : array(
			'padding'       => null,
			'buttonPadding' => null,
		);

		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '.' . $unique_id . ':not(.wp-block-search__button-inside) .wp-block-premium-search__input, .' . $unique_id . '.wp-block-search__button-inside .wp-block-premium-search__inside-wrapper' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Desktop'], $padding['unit'] ) );
		}

		if ( $spacing['buttonPadding'] ) {
			$button_padding = $spacing['buttonPadding'];
			$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__button' );
			$css->add_property( 'padding', $css->render_spacing( $button_padding['Desktop'], $button_padding['unit'] ) );
		}
	}

	$css->start_media_query( $media_query['Tablet'] );
	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__input' );
		$css->render_typography( $typography, 'Tablet' );
	}

	if ( isset( $attributes['buttonTypography'] ) ) {
		$button_typography = $attributes['buttonTypography'];
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__button' );
		$css->render_typography( $button_typography, 'Tablet' );
	}

	if ( isset( $attributes['border'] ) ) {
		$border        = $attributes['border'];
		$border_width  = $attributes['border']['borderWidth'];
		$border_radius = $attributes['border']['borderRadius'];

		$css->set_selector( '.' . $unique_id . ':not(.wp-block-search__button-inside) .wp-block-premium-search__input, .' . $unique_id . '.wp-block-search__button-inside .wp-block-premium-search__inside-wrapper' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Tablet'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Tablet'], 'px' ) );
	}

	if ( isset( $attributes['spacing'] ) ) {
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '.' . $unique_id . ':not(.wp-block-search__button-inside) .wp-block-premium-search__input, .' . $unique_id . '.wp-block-search__button-inside .wp-block-premium-search__inside-wrapper' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Tablet'], $padding['unit'] ) );
		}

		if ( $spacing['buttonPadding'] ) {
			$button_padding = $spacing['buttonPadding'];
			$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__button' );
			$css->add_property( 'padding', $css->render_spacing( $button_padding['Tablet'], $button_padding['unit'] ) );
		}
	}
	$css->stop_media_query();
	$css->start_media_query( $media_query['Mobile'] );
	if ( isset( $attributes['typography'] ) ) {
		$typography = $attributes['typography'];
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__input' );
		$css->render_typography( $typography, 'Mobile' );
	}

	if ( isset( $attributes['buttonTypography'] ) ) {
		$button_typography = $attributes['buttonTypography'];
		$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__button' );
		$css->render_typography( $button_typography, 'Mobile' );
	}

	if ( isset( $attributes['border'] ) ) {
		$border        = $attributes['border'];
		$border_width  = $attributes['border']['borderWidth'];
		$border_radius = $attributes['border']['borderRadius'];

		$css->set_selector( '.' . $unique_id . ':not(.wp-block-search__button-inside) .wp-block-premium-search__input, .' . $unique_id . '.wp-block-search__button-inside .wp-block-premium-search__inside-wrapper' );
		$css->add_property( 'border-width', $css->render_spacing( $border_width['Mobile'], 'px' ) );
		$css->add_property( 'border-radius', $css->render_spacing( $border_radius['Mobile'], 'px' ) );
	}

	if ( isset( $attributes['spacing'] ) ) {
		if ( $spacing['padding'] ) {
			$padding = $spacing['padding'];
			$css->set_selector( '.' . $unique_id . ':not(.wp-block-search__button-inside) .wp-block-premium-search__input, .' . $unique_id . '.wp-block-search__button-inside .wp-block-premium-search__inside-wrapper' );
			$css->add_property( 'padding', $css->render_spacing( $padding['Mobile'], $padding['unit'] ) );
		}

		if ( $spacing['buttonPadding'] ) {
			$button_padding = $spacing['buttonPadding'];
			$css->set_selector( '.' . $unique_id . ' .wp-block-premium-search__button' );
			$css->add_property( 'padding', $css->render_spacing( $button_padding['Mobile'], $button_padding['unit'] ) );
		}
	}

	$css->stop_media_query();

	return $css->css_output();
}

/**
 * Dynamically renders the `premium/search` block.
 *
 * @param array $attributes The block attributes.
 *
 * @return string The search block markup.
 */
function render_block_premium_search( $attributes ) {
	static $instance_id = 0;

	// Older versions of the Search block defaulted the label and buttonText
	// attributes to `__( 'Search' )` meaning that many posts contain `<!--
	// wp:search /-->`. Support these by defaulting an undefined label and
	// buttonText to `__( 'Search' )`.
	$attributes = wp_parse_args(
		$attributes,
		array(
			'label'      => __( 'Search' ),
			'buttonText' => __( 'Search' ),
		)
	);

	wp_enqueue_script(
		'premium-search-view',
		PREMIUM_BLOCKS_URL . 'src/blocks/search/view/view.js',
		array( 'wp-element' ),
		PREMIUM_BLOCKS_VERSION,
		true
	);

	wp_localize_script(
		'premium-search-view',
		'PBGSearch',
		array(
			'rest_url' => get_rest_url(),
		)
	);

	$unique_id = rand( 100, 10000 );
	$id        = 'premium-search-' . esc_attr( $unique_id );

	$form_style            = ( ! empty( $attributes['formStyle'] ) ) ? $attributes['formStyle'] : 'default';
	$enable_ajax           = ( ! empty( $attributes['ajaxSearch'] ) ) ? $attributes['ajaxSearch'] : true;
	$button_position       = ( ! empty( $attributes['position'] ) ) ? $attributes['position'] : 'static';
	$button_float_position = ( ! empty( $attributes['floatPosition'] ) ) ? $attributes['floatPosition'] : 'top-right';
	$input_id              = 'wp-block-premium-search__input-' . ++$instance_id;
	$classnames            = classnames_for_block_core_search( $attributes );
	$show_label            = ( ! empty( $attributes['showLabel'] ) ) ? true : false;
	$use_icon_button       = ( ! empty( $attributes['buttonUseIcon'] ) ) ? true : false;
	$show_input            = ( ! empty( $attributes['buttonPosition'] ) && 'button-only' === $attributes['buttonPosition'] ) ? false : true;
	$show_button           = ( ! empty( $attributes['buttonPosition'] ) && 'no-button' === $attributes['buttonPosition'] ) ? false : true;
	$input_markup          = '';
	$button_markup         = '';
	$block_id              = ( ! empty( $attributes['blockId'] ) ) ? $attributes['blockId'] : $id;
	$hide_desktop          = ( ! empty( $attributes['hideDesktop'] ) ) ? $attributes['hideDesktop'] : false;
	$hide_mobile           = ( ! empty( $attributes['hideMobile'] ) ) ? $attributes['hideMobile'] : false;
	$hide_tablet           = ( ! empty( $attributes['hideTablet'] ) ) ? $attributes['hideTablet'] : false;

	$is_button_inside = ! empty( $attributes['buttonPosition'] ) &&
		'button-inside' === $attributes['buttonPosition'];

	$label_inner_html = empty( $attributes['label'] ) ? __( 'Search' ) : wp_kses_post( $attributes['label'] );

	$label_markup = sprintf(
		'<label for="%1$s" class="wp-block-premium-search__label screen-reader-text">%2$s</label>',
		esc_attr( $input_id ),
		$label_inner_html
	);
	if ( $show_label && ! empty( $attributes['label'] ) ) {
		$label_markup = sprintf(
			'<label for="%1$s" class="wp-block-premium-search__label">%2$s</label>',
			$input_id,
			$label_inner_html
		);
	}
	$classnames .= ' ' . $block_id;
	$classnames .= ' premium-style-' . $form_style;

	if ( $enable_ajax ) {
		$classnames .= ' premium-ajax-search';
	}

	if ( $hide_desktop ) {
		$classnames .= ' premium-desktop-hidden';
	}

	if ( $hide_tablet ) {
		$classnames .= ' premium-tablet-hidden';
	}

	if ( $hide_mobile ) {
		$classnames .= ' premium-mobile-hidden';
	}

	if ( 'float' === $button_position && 'button' === $form_style ) {
		$classnames .= ' button-style-float';
		$classnames .= ' button-float-' . esc_attr( $button_float_position );
	}

	if ( 'default' === $form_style && $show_input ) {
		$input_markup = sprintf(
			'<input type="search" id="%s" class="wp-block-premium-search__input" name="s" value="%s" placeholder="%s" required />',
			$input_id,
			esc_attr( get_search_query() ),
			esc_attr( $attributes['placeholder'] )
		);
	}

	if ( $show_button ) {
		$button_internal_markup = '';
		$button_classes         = '';
		$aria_label             = '';

		if ( ! $use_icon_button ) {
			if ( ! empty( $attributes['buttonText'] ) ) {
				$button_internal_markup = wp_kses_post( $attributes['buttonText'] );
			}
		} else {
			$aria_label      = sprintf( 'aria-label="%s"', esc_attr( wp_strip_all_tags( $attributes['buttonText'] ) ) );
			$button_classes .= ' has-icon';

			$button_internal_markup =
				'<svg class="search-icon" viewBox="0 0 24 24" width="24" height="24">
					<path d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
				</svg>';
		}

		$button_markup = sprintf(
			'<button type="submit" class="wp-block-premium-search__button" %s %s>%s</button>',
			esc_attr( $button_classes ),
			$aria_label,
			$button_internal_markup
		);
	}

	$field_markup = sprintf(
		'<div class="wp-block-premium-search__inside-wrapper">%s</div>',
		$input_markup . $button_markup
	);

	$wrapper_attributes = get_block_wrapper_attributes(
		array(
			'class' => $classnames,
		)
	);

	if ( ! wp_style_is( $unique_id, 'enqueued' ) && apply_filters( 'Premium_BLocks_blocks_render_inline_css', true, 'column', $unique_id ) ) {
		$css = get_premium_search_css( $attributes, $block_id );
		if ( ! empty( $css ) ) {
			$block_helpers = pbg_blocks_helper();
			$block_helpers->render_inline_css( $css, $unique_id, true );
		}
	};

	$modal_markup = '';
	if ( 'button' === $form_style ) {
		$modal_input   = sprintf( '<input type="search" name="search" placeholder="%s" required />', esc_html__( 'Search', 'premium-blocks-for-gutenberg' ) );
		$icon_svg      = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-hidden="true" focusable="false"><path d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path></svg>';
		$modal_icon    = sprintf( '<div class="%s">%s</div>', esc_attr( 'premium-advanced-search-icon' ), $icon_svg );
		$modal_markup .= '<div class="premium-search-modal">';
		$modal_markup .= '<div class="premium-modal-actions">';
		$modal_markup .= '<button>';
		$modal_markup .= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg>';
		$modal_markup .= '</button>';
		$modal_markup .= '</div>';
		$modal_markup .= '<div class="premium-modal-content">';
		$modal_markup .= sprintf(
			'<form role="search" class="%s" method="get" action="%s"><div>%s</div></form>',
			esc_attr( 'premium-advanced-search-form' ),
			esc_url( home_url( '/' ) ),
			$modal_input . $modal_icon
		);
		$modal_markup .= '</div>';
		$modal_markup .= '</div>';

		return sprintf(
			'<div %s><div class="premium-search-actions">%s</div>%s</div>',
			$wrapper_attributes,
			$label_markup . $button_markup,
			$modal_markup
		);
	}

	return sprintf(
		'<form role="search" method="get" action="%s" %s>%s</form>',
		esc_url( home_url( '/' ) ),
		$wrapper_attributes,
		$label_markup . $field_markup
	);
}

/**
 * Registers the `premium/search` block on the server.
 */
function register_block_premium_search() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/search',
		array(
			'render_callback' => 'render_block_premium_search',
		)
	);
}
add_action( 'init', 'register_block_premium_search' );

function search_enqueue() {

    wp_enqueue_style(
        'pbg-search-style',
        PREMIUM_BLOCKS_URL . 'assets/css/minified/search.min.css',
        array(),
         PREMIUM_BLOCKS_VERSION, 
        'all' 
    );
}

add_action( 'enqueue_block_assets', 'search_enqueue' );