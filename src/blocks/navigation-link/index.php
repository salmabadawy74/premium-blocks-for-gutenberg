<?php

/**
 * Renders the `premium/navigation-link` block.
 *
 * @param array    $attributes The block attributes.
 * @param string   $content    The saved content.
 * @param WP_Block $block      The parsed block.
 *
 * @return string Returns the post content with the legacy widget added.
 */
function render_block_premium_navigation_link( $attributes, $content, $block ) {
	$navigation_link_has_id = isset( $attributes['id'] ) && is_numeric( $attributes['id'] );
	$make_heading           = isset( $attributes['makeHeading'] ) && $attributes['makeHeading'];
	$is_post_type           = isset( $attributes['kind'] ) && 'post-type' === $attributes['kind'];
	$navigation_link_icon   = isset( $attributes['linkCustomIcon'] ) ? $attributes['linkCustomIcon'] : '';
	$enable_link_badge      = isset( $attributes['linkBadge'] ) ? $attributes['linkBadge'] : false;
	$navigation_link_badge  = isset( $attributes['badgeText'] ) ? $attributes['badgeText'] : '';
	$badge_colors           = isset( $attributes['badgeColors'] ) ? $attributes['badgeColors'] : '';
	$is_post_type           = $is_post_type || isset( $attributes['type'] ) && ( 'post' === $attributes['type'] || 'page' === $attributes['type'] );
	$block_id               = ( ! empty( $attributes['blockId'] ) ) ? $attributes['blockId'] : '';

	$badge_style = '';
	if ( $badge_colors ) {
		$badge_style .= $badge_colors['text'] ? 'color: ' . $badge_colors['text'] . ';' : '';
		$badge_style .= $badge_colors['background'] ? 'background-color: ' . $badge_colors['background'] . ';' : '';
	}

	// Don't render the block's subtree if it is a draft or if the ID does not exist.
	if ( $is_post_type && $navigation_link_has_id ) {
		$post = get_post( $attributes['id'] );
		if ( ! $post || 'publish' !== $post->post_status ) {
			return '';
		}
	}

	// Don't render the block's subtree if it has no label.
	if ( empty( $attributes['label'] ) ) {
		return '';
	}

	$has_submenu = count( $block->inner_blocks ) > 0;
	$is_active   = ! empty( $attributes['id'] ) && ( get_the_ID() === $attributes['id'] );

	$wrapper_attributes = get_block_wrapper_attributes(
		array(
			'class' => 'premium-navigation-item' . ( $has_submenu ? ' has-child' : '' ) .
				( $is_active ? ' current-menu-item' : '' ) . ( $make_heading && ( isset( $block->context['megaMenu'] ) && $block->context['megaMenu'] ) ? ' heading-item' : '' ) . ' ' . $block_id,
		)
	);
	$html               = '<li ' . $wrapper_attributes . '>' .
		'<a class="premium-navigation-item__content" ';

	// Start appending HTML attributes to anchor tag.
	if ( isset( $attributes['url'] ) ) {
		$html .= ' href="' . esc_url( $attributes['url'] ) . '"';
	}

	if ( $is_active ) {
		$html .= ' aria-current="page"';
	}

	if ( isset( $attributes['opensInNewTab'] ) && true === $attributes['opensInNewTab'] ) {
		$html .= ' target="_blank"  ';
	}

	if ( isset( $attributes['rel'] ) ) {
		$html .= ' rel="' . esc_attr( $attributes['rel'] ) . '"';
	} elseif ( isset( $attributes['nofollow'] ) && $attributes['nofollow'] ) {
		$html .= ' rel="nofollow"';
	}

	if ( isset( $attributes['title'] ) ) {
		$html .= ' title="' . esc_attr( $attributes['title'] ) . '"';
	}

	// End appending HTML attributes to anchor tag.

	// Start anchor tag content.
	$html .= '>';

	if ( $navigation_link_icon ) {
		$html .= '<span class="pbg-navigation-link-icon ' . esc_attr( $navigation_link_icon ) . '"></span>';
	}
	// Wrap title with span to isolate it from submenu icon.
	$html .= '<span class="premium-navigation-item__label">';

	if ( isset( $attributes['label'] ) ) {
		$html .= wp_kses_post( $attributes['label'] );
	}

	$html .= '</span>';

	if ( $enable_link_badge ) {
		$html .= '<span class="pbg-navigation-link-label" ' . ( $badge_style ? 'style="' . esc_attr( $badge_style ) . '"' : '' ) . '>' . esc_html( $navigation_link_badge ) . '</span>';
	}

	$html .= '</a>';
	// End anchor tag content.

	if ( isset( $block->context['showSubmenuIcon'] ) && $block->context['showSubmenuIcon'] && $has_submenu ) {
		// The submenu icon can be hidden by a CSS rule on the Navigation Block.
		$html .= '<span class="premium-navigation__submenu-icon">' . block_core_navigation_link_render_submenu_icon() . '</span>';
	}

	if ( $has_submenu ) {
		$inner_blocks_html = '';
		foreach ( $block->inner_blocks as $inner_block ) {
			$inner_blocks_html .= $inner_block->render();
		}

		$html .= sprintf(
			'<ul class="premium-navigation__submenu-container">%s</ul>',
			$inner_blocks_html
		);
	}

	$html .= '</li>';
	return $html;
}


/**
 * Register the navigation link block.
 *
 * @uses render_block_core_navigation()
 * @throws WP_Error An WP_Error exception parsing the block definition.
 */
function register_block_premium_navigation_link() {
	$post_types = get_post_types( array( 'show_in_nav_menus' => true ), 'objects' );
	$taxonomies = get_taxonomies( array( 'show_in_nav_menus' => true ), 'objects' );

	// Use two separate arrays as a way to order the variations in the UI.
	// Known variations (like Post Link and Page Link) are added to the
	// `built_ins` array. Variations for custom post types and taxonomies are
	// added to the `variations` array and will always appear after `built-ins.
	$built_ins  = array();
	$variations = array();

	if ( $post_types ) {
		foreach ( $post_types as $post_type ) {
			$variation = build_variation_for_navigation_link( $post_type, 'post-type' );
			if ( $post_type->_builtin ) {
				$built_ins[] = $variation;
			} else {
				$variations[] = $variation;
			}
		}
	}
	if ( $taxonomies ) {
		foreach ( $taxonomies as $taxonomy ) {
			$variation = build_variation_for_navigation_link( $taxonomy, 'taxonomy' );
			if ( $taxonomy->_builtin ) {
				$built_ins[] = $variation;
			} else {
				$variations[] = $variation;
			}
		}
	}

	register_block_type_from_metadata(
		PREMIUM_BLOCKS_PATH . 'src/blocks/navigation-link',
		array(
			'render_callback' => 'render_block_premium_navigation_link',
			'variations'      => array_merge( $built_ins, $variations ),
		)
	);
}
add_action( 'init', 'register_block_premium_navigation_link' );


if ( ! function_exists( 'build_variation_for_navigation_link' ) ) {
	/**
	 * Returns a navigation link variation
	 *
	 * @param WP_Taxonomy|WP_Post_Type $entity post type or taxonomy entity.
	 * @param string                   $kind string of value 'taxonomy' or 'post-type'.
	 *
	 * @return array
	 */
	function build_variation_for_navigation_link( $entity, $kind ) {
		$title       = '';
		$description = '';

		if ( property_exists( $entity->labels, 'item_link' ) ) {
			$title = $entity->labels->item_link;
		}
		if ( property_exists( $entity->labels, 'item_link_description' ) ) {
			$description = $entity->labels->item_link_description;
		}

		$variation = array(
			'name'        => $entity->name,
			'title'       => $title,
			'description' => $description,
			'attributes'  => array(
				'type' => $entity->name,
				'kind' => $kind,
			),
		);

		// Tweak some value for the variations.
		$variation_overrides = array(
			'post_tag'    => array(
				'name'       => 'tag',
				'attributes' => array(
					'type' => 'tag',
					'kind' => $kind,
				),
			),
			'post_format' => array(
				// The item_link and item_link_description for post formats is the
				// same as for tags, so need to be overridden.
				'title'       => __( 'Post Format Link' ),
				'description' => __( 'A link to a post format' ),
				'attributes'  => array(
					'type' => 'post_format',
					'kind' => $kind,
				),
			),
		);

		if ( array_key_exists( $entity->name, $variation_overrides ) ) {
			$variation = array_merge(
				$variation,
				$variation_overrides[ $entity->name ]
			);
		}

		return $variation;
	}
}

if ( ! function_exists( 'block_core_navigation_link_render_submenu_icon' ) ) {
	/**
	 * Returns the top-level submenu SVG chevron icon.
	 *
	 * @return string
	 */
	function block_core_navigation_link_render_submenu_icon() {
		return '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false"><path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path></svg>';
	}
}
