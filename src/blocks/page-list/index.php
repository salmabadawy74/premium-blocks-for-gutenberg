<?php

/**
 * Renders the `core/page-list` block on server.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the page list markup.
 */
function render_block_kemet_page_list( $attributes, $content, $block ) {
	static $block_id = 0;
	$block_id++;

	$all_pages = get_pages(
		array(
			'sort_column' => 'menu_order,post_title',
			'order'       => 'asc',
		)
	);

	// If there are no pages, there is nothing to show.
	if ( empty( $all_pages ) ) {
		return;
	}

	$top_level_pages = array();

	$pages_with_children = array();

	$active_page_ancestor_ids = array();

	foreach ( (array) $all_pages as $page ) {
		$is_active = ! empty( $page->ID ) && ( get_the_ID() === $page->ID );

		if ( $is_active ) {
			$active_page_ancestor_ids = get_post_ancestors( $page->ID );
		}

		if ( $page->post_parent ) {
			$pages_with_children[ $page->post_parent ][ $page->ID ] = array(
				'page_id'   => $page->ID,
				'title'     => $page->post_title,
				'link'      => get_permalink( $page->ID ),
				'is_active' => $is_active,
			);
		} else {
			$top_level_pages[ $page->ID ] = array(
				'page_id'   => $page->ID,
				'title'     => $page->post_title,
				'link'      => get_permalink( $page->ID ),
				'is_active' => $is_active,
			);

		}
	}

	$colors          = block_core_page_list_build_css_colors( $attributes, $block->context );
	$font_sizes      = block_core_page_list_build_css_font_sizes( $block->context );
	$classes         = array_merge(
		$colors['css_classes'],
		$font_sizes['css_classes']
	);
	$style_attribute = ( $colors['inline_styles'] . $font_sizes['inline_styles'] );
	$css_classes     = trim( implode( ' ', $classes ) );

	$nested_pages = block_core_page_list_nest_pages( $top_level_pages, $pages_with_children );

	// Limit the number of items to be visually displayed.
	if ( ! empty( $attributes['__unstableMaxPages'] ) ) {
		$nested_pages = array_slice( $nested_pages, 0, $attributes['__unstableMaxPages'] );
	}

	$is_navigation_child = array_key_exists( 'showSubmenuIcon', $block->context );

	$open_submenus_on_click = array_key_exists( 'openSubmenusOnClick', $block->context ) ? $block->context['openSubmenusOnClick'] : false;

	$show_submenu_icons = array_key_exists( 'showSubmenuIcon', $block->context ) ? $block->context['showSubmenuIcon'] : false;

	$wrapper_markup = '<ul %1$s>%2$s</ul>';

	$items_markup = block_core_page_list_render_nested_page_list( $open_submenus_on_click, $show_submenu_icons, $is_navigation_child, $nested_pages, $active_page_ancestor_ids, $colors );

	$wrapper_attributes = get_block_wrapper_attributes(
		array(
			'class' => $css_classes,
			'style' => $style_attribute,
		)
	);

	return sprintf(
		$wrapper_markup,
		$wrapper_attributes,
		$items_markup
	);
}

	/**
	 * Registers the `core/pages` block on server.
	 */
function register_block_kemet_page_list() {
	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/page-list',
		array(
			'render_callback' => 'render_block_kemet_page_list',
		)
	);
}
	add_action( 'init', 'register_block_kemet_page_list' );
