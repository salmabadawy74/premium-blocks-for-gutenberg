<?php
/**
 * Rendering of the `premium/search` block.
 *
 * @package gutenberg_premium_blocks
 */

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

	$input_id         = 'wp-block-premium-search__input-' . ++$instance_id;
	$classnames       = classnames_for_block_core_search( $attributes );
	$show_label       = ( ! empty( $attributes['showLabel'] ) ) ? true : false;
	$use_icon_button  = ( ! empty( $attributes['buttonUseIcon'] ) ) ? true : false;
	$show_input       = ( ! empty( $attributes['buttonPosition'] ) && 'button-only' === $attributes['buttonPosition'] ) ? false : true;
	$show_button      = ( ! empty( $attributes['buttonPosition'] ) && 'no-button' === $attributes['buttonPosition'] ) ? false : true;
	$input_markup     = '';
	$button_markup    = '';
	$inline_styles    = styles_for_block_core_search( $attributes );
	$color_classes    = get_color_classes_for_block_core_search( $attributes );
	$is_button_inside = ! empty( $attributes['buttonPosition'] ) &&
		'button-inside' === $attributes['buttonPosition'];
	// Border color classes need to be applied to the elements that have a border color.
	$border_color_classes = get_border_color_classes_for_block_core_search( $attributes );

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

	if ( $show_input ) {
		$input_classes = ! $is_button_inside ? $border_color_classes : '';
		$input_markup  = sprintf(
			'<input type="search" id="%s" class="wp-block-premium-search__input %s" name="s" value="%s" placeholder="%s" %s required />',
			$input_id,
			esc_attr( $input_classes ),
			esc_attr( get_search_query() ),
			esc_attr( $attributes['placeholder'] ),
			$inline_styles['input']
		);
	}

	if ( $show_button ) {
		$button_internal_markup = '';
		$button_classes         = $color_classes;
		$aria_label             = '';

		if ( ! $is_button_inside ) {
			$button_classes .= ' ' . $border_color_classes;
		}
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
			'<button type="submit" class="wp-block-premium-search__button %s" %s %s>%s</button>',
			esc_attr( $button_classes ),
			$inline_styles['button'],
			$aria_label,
			$button_internal_markup
		);
	}

	$field_markup_classes = $is_button_inside ? $border_color_classes : '';
	$field_markup         = sprintf(
		'<div class="wp-block-premium-search__inside-wrapper %s" %s>%s</div>',
		esc_attr( $field_markup_classes ),
		$inline_styles['wrapper'],
		$input_markup . $button_markup
	);
	$wrapper_attributes   = get_block_wrapper_attributes( array( 'class' => $classnames ) );

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