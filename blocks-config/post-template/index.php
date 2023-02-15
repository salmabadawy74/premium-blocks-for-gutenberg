<?php

/**
 * Server-side rendering of the `premium/post-template` block.
 *
 * @package WordPress
 */
function get_premium_post_tag_css_style($attributes, $unique_id)
{
    $css                    = new Premium_Blocks_css();
    $media_query            = array();
    $media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
    $media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
    $media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');


    if (isset($attributes['typography'])) {
        $css->set_selector('.premium-blog-post-outer-container' . '  .premium-blog-post-tags-container > * a ');
        $css->render_typography($attributes['typography'], 'Desktop');
    }
    if (isset($attributes['color'])) {
        $css->set_selector('.premium-blog-post-outer-container' . '  .premium-blog-post-tags-container > * a ');
        $css->add_property('color', $css->render_color($attributes["color"]));
    }
    if (isset($attributes['hoverColor'])) {
        $css->set_selector('.premium-blog-post-outer-container' . '  .premium-blog-post-tags-container > * a ');
        $css->add_property('color', $css->render_color($attributes["hoverColor"]));
    }


    $css->start_media_query($media_query['tablet']);
    if (isset($attributes['typography'])) {
        $css->set_selector('.premium-blog-post-outer-container' . '  .premium-blog-post-tags-container > * a ');
        $css->render_typography($attributes['typography'], 'Tablet');
    }
    $css->stop_media_query();
    $css->start_media_query($media_query['mobile']);
    if (isset($attributes['typography'])) {
        $css->set_selector('.premium-blog-post-outer-container' . '  .premium-blog-post-tags-container > * a ');
        $css->render_typography($attributes['typography'], 'Mobile');
    }
    $css->stop_media_query();
    return $css->css_output();
}

function get_premium_feature_image_css_style($attr, $unique_id)
{
    $css                    = new Premium_Blocks_css();
    $media_query            = array();
    $media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
    $media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
    $media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');


    if (isset($attr['thumbnail'])) {
        $css->set_selector('.premium-blog-post-outer-container .premium-blog-thumbnail-container img ');
        $css->add_property('object-fit', $attr['thumbnail']);
    }
    if (isset($attr['height'])) {
        $css->set_selector('.premium-blog-post-outer-container  .premium-blog-thumb-effect-wrapper .premium-blog-thumbnail-container ');
        $css->add_property('height', $css->render_range($attr['height'], 'Desktop'));
    }
    if (isset($attr['filter'])) {
        $css->set_selector('.premium-blog-post-outer-container .premium-blog-thumbnail-container img');
        $css->add_property(
            'filter',
            'brightness(' . $attr['filter']['bright'] . '%)' . 'contrast(' .  $attr['filter']['contrast'] . '%) ' . 'saturate(' . $attr['filter']['saturation'] . '%) ' . 'blur(' . $attr['filter']['blur'] . 'px) ' . 'hue-rotate(' . $attr['filter']['hue'] . 'deg)'
        );
    }
    if (isset($attr['Hoverfilter'])) {
        $css->set_selector('.premium-blog-post-outer-container .premium-blog-thumbnail-container:hover img');
        $css->add_property(
            'filter',
            'brightness(' . $attr['Hoverfilter']['bright'] . '%)' . 'contrast(' .  $attr['Hoverfilter']['contrast'] . '%) ' . 'saturate(' . $attr['Hoverfilter']['saturation'] . '%) ' . 'blur(' . $attr['Hoverfilter']['blur'] . 'px) ' . 'hue-rotate(' . $attr['Hoverfilter']['hue'] . 'deg)'
        );
    }


    $css->start_media_query($media_query['tablet']);
    if (isset($attr['height'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-thumbnail-container img');
        $css->add_property('height', $css->render_range($attr['height'], 'Tablet'));
    }
    $css->stop_media_query();
    $css->start_media_query($media_query['mobile']);
    if (isset($attr['height'])) {
        $css->set_selector('.' . $unique_id . '.premium-blog-thumbnail-container img');
        $css->add_property('height', $css->render_range($attr['height'], 'Mobile'));
    }
    $css->stop_media_query();
    return $css->css_output();
}

function get_premium_post_title_css_style($attributes, $unique_id)
{

    $css                    = new Premium_Blocks_css();
    $media_query            = array();
    $media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
    $media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
    $media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');


    if (isset($attributes['Typography'])) {
        $css->set_selector('.premium-blog-post-outer-container' . '  .premium-blog-entry-title > * ');
        $css->render_typography($attributes['Typography'], 'Desktop');
    }
    if (isset($attributes['bottomSpacing'])) {
        $css->set_selector('.' . $unique_id . ' .premium-blog-entry-title ');
        $css->add_property('margin-bottom', $css->get_responsive_css($attributes['bottomSpacing'], 'Desktop'));
    }
    if (isset($attributes['textColor'])) {
        $css->set_selector('.premium-blog-post-outer-container' . ' .premium-blog-entry-title  > *');
        $css->add_property('color', $css->render_color($attributes["textColor"]));
    }
    if (isset($attributes['hoverColor'])) {
        $css->set_selector('.premium-blog-post-outer-container' . ' .premium-blog-entry-title:hover  > *');
        $css->add_property('color', $css->render_color($attributes["hoverColor"]));
    }


    $css->start_media_query($media_query['tablet']);
    if (isset($attributes['Typography'])) {
        $css->set_selector('.premium-blog-post-outer-container' . '  .premium-blog-entry-title > * ');
        $css->render_typography($attributes['Typography'], 'Tablet');
    }
    if (isset($attributes['bottomSpacing'])) {
        $css->set_selector('.' . $unique_id . ' .premium-blog-entry-title ');
        $css->add_property('margin-bottom', $css->get_responsive_css($attributes['bottomSpacing'], 'Tablet'));
    }
    $css->stop_media_query();
    $css->start_media_query($media_query['mobile']);
    if (isset($attributes['Typography'])) {
        $css->set_selector('.premium-blog-post-outer-container' . '  .premium-blog-entry-title > * ');
        $css->render_typography($attributes['Typography'], 'Mobile');
    }
    if (isset($attributes['bottomSpacing'])) {
        $css->set_selector('.' . $unique_id . ' .premium-blog-entry-title ');
        $css->add_property('margin-bottom', $css->get_responsive_css($attributes['bottomSpacing'], 'Mobile'));
    }
    $css->stop_media_query();
    return $css->css_output();
}
function get_premium_post_meta_css_style($attributes, $unique_id)
{
    $css                    = new Premium_Blocks_css();
    $media_query            = array();
    $media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
    $media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
    $media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');


    if (isset($attributes['typography'])) {
        $css->set_selector('.premium-blog-post-outer-container' . ' .premium-blog-meta-data');
        $css->render_typography($attributes['typography'], 'Desktop');
    }
    if (isset($attributes['color'])) {
        $css->set_selector('.premium-blog-post-outer-container' .  ' .wp-block-premium-post-meta .premium-blog-meta-data');
        $css->add_property('color', $css->render_color($attributes["color"]));
    }
    if (isset($attributes['hoverColor'])) {
        $css->set_selector('.premium-blog-post-outer-container' .  ' .premium-blog-meta-data:hover ');
        $css->add_property('color', $css->render_color($attributes["hoverColor"]));
    }

    if (isset($attributes['sepColor'])) {
        $css->set_selector('.premium-blog-post-outer-container' .  ' .premium-blog-meta-separtor');
        $css->add_property('color', $css->render_color($attributes["sepColor"]));
    }

    $css->start_media_query($media_query['tablet']);
    if (isset($attributes['typography'])) {
        $css->set_selector('.premium-blog-post-outer-container' .  ' .premium-blog-meta-data');
        $css->render_typography($attributes['typography'], 'Tablet');
    }

    $css->stop_media_query();
    $css->start_media_query($media_query['mobile']);
    if (isset($attributes['typography'])) {
        $css->set_selector('.premium-blog-post-outer-container' .  ' .premium-blog-meta-data');
        $css->render_typography($attributes['typography'], 'Mobile');
    }
    $css->stop_media_query();
    return $css->css_output();
}


function get_premium_post_template_css_style($attributes, $unique_id)
{
    $css                    = new Premium_Blocks_css();
    $media_query            = array();
    $media_query['mobile']  = apply_filters('Premium_BLocks_mobile_media_query', '(max-width: 767px)');
    $media_query['tablet']  = apply_filters('Premium_BLocks_tablet_media_query', '(max-width: 1024px)');
    $media_query['desktop'] = apply_filters('Premium_BLocks_tablet_media_query', '(min-width: 1025px)');

    if (isset($attributes['border'])) {
        $content_border_width  = $attributes['border']['borderWidth'];
        $content_border_radius = $attributes['border']['borderRadius'];
        $content_border_color = $attributes['border']['borderColor'];
        $content_border_type = $attributes['border']['borderType'];

        $css->set_selector('.premium-blog-post-outer-container');
        $css->add_property('border-color', $css->render_color($content_border_color));
        $css->add_property('border-style', $content_border_type);

        $css->add_property('border-width', $css->render_spacing($content_border_width['Desktop'], 'px'));
        $css->add_property('border-radius', $css->render_spacing($content_border_radius['Desktop'], 'px'));
    }
    if (isset($attributes['margin'])) {
        $content_margin = $attributes['margin'];
        $css->set_selector('.premium-blog-post-outer-container');
        $css->add_property('padding', $css->render_spacing($content_margin['Desktop'], $content_margin['unit']));
    }
    if (isset($attr['padding'])) {
        $content_padding = $attributes['padding'];
        $css->set_selector('.premium-blog-post-outer-container');
        $css->add_property('padding', $css->render_spacing($content_padding['Desktop'], $content_padding['unit']));
    }

    if (isset($attributes['containerBackground'])) {
        $background = $attributes['containerBackground'];
        error_log(wp_json_encode($background));
        $container_grid  = '';
        $container_grid2 = '';
        $container_bg    = '';
        if ('gradient' === $background['backgroundType']) {
            $container_grid  = $background['backgroundColor'] ? $background['backgroundColor'] : 'rgba(255,255,255,0)';
            $container_grid2 = $background['gradientColorTwo'] ? $background['gradientColorTwo'] : '.777';
            if ('radial' === $background['gradientType']) {
                $container_bg = 'radial-gradient(at ' . $background['gradientPosition'] . ', ' . $container_grid . ' ' . $background['gradientLocationOne'] . '%, ' . $container_grid2 . ' ' . $background['gradientLocationTwo'] . '%)';
            } elseif ('radial' !== $background['backgroundType']) {
                $container_bg = 'linear-gradient(' . $background['gradientAngle'] . 'deg, ' . $container_grid . ' ' . $background['gradientLocationOne'] . '%, ' . $container_grid2 . ' ' . $background['gradientLocationTwo'] . '%)';
            }
        } else {
            $container_bg = $background['backgroundImageURL'] ? 'url(' . $background['backgroundImageURL'] . ');' : '';
        }

        $css->set_selector('.premium-blog-post-outer-container');
        $css->add_property('background-color', $css->render_color('solid' === $background['backgroundType'] ? $background['backgroundColor'] : ''));
        $css->add_property('background-image', $css->render_color($container_bg));
        $css->add_property('background-repeat', $css->render_color($background['backgroundRepeat']));
        $css->add_property('background-size', $css->render_color($background['backgroundSize']));
        $css->add_property('background-attachment', $css->render_color($background['fixed'] ? 'fixed' : 'unset'));
        $css->add_property('background-position', $css->render_color($background['backgroundPosition']));
    }
    if (isset($attr['boxShadow'])) {
        $css->set_selector('.premium-blog-post-outer-container');
        $css->add_property('box-shadow', $css->render_shadow($attributes['boxShadow']));
    }



    $css->start_media_query($media_query['tablet']);
    if (isset($attributes['border'])) {
        $content_border_width  = $attributes['border']['borderWidth'];
        $content_border_radius = $attributes['border']['borderRadius'];
        $content_border_color = $attributes['border']['borderColor'];
        $content_border_type = $attributes['border']['borderType'];

        $css->set_selector('.premium-blog-post-outer-container');

        $css->add_property('border-width', $css->render_spacing($content_border_width['Tablet'], 'px'));
        $css->add_property('border-radius', $css->render_spacing($content_border_radius['Tablet'], 'px'));
    }
    if (isset($attributes['margin'])) {
        $content_margin = $attributes['margin'];
        $css->set_selector('.premium-blog-post-outer-container');
        $css->add_property('padding', $css->render_spacing($content_margin['Tablet'], $content_margin['unit']));
    }
    if (isset($attr['padding'])) {
        $content_padding = $attributes['padding'];
        $css->set_selector('.premium-blog-post-outer-container');
        $css->add_property('padding', $css->render_spacing($content_padding['Tablet'], $content_padding['unit']));
    }

    $css->stop_media_query();
    return $css->css_output();
}

/**
 * Determines whether a block list contains a block that uses the featured image.
 *
 * @param WP_Block_List $inner_blocks Inner block instance.
 *
 * @return bool Whether the block list contains a block that uses the featured image.
 */
function block_premium_post_template_uses_featured_image($inner_blocks)
{
    foreach ($inner_blocks as $block) {
        if ('premium/post-featured-image' === $block->name) {
            return true;
        }
        if (
            'premium/cover' === $block->name &&
            !empty($block->attributes['useFeaturedImage'])
        ) {
            return true;
        }
        if ($block->inner_blocks && block_premium_post_template_uses_featured_image($block->inner_blocks)) {
            return true;
        }
    }

    return false;
}

/**
 * Renders the `premium/post-template` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns the output of the query, structured using the layout defined by the block's inner blocks.
 */
function render_block_premium_post_template($attributes, $content, $block)
{
    $style_css = '';

    $page_key = isset($block->context['queryId']) ? 'query-' . $block->context['queryId'] . '-page' : 'query-page';
    $page     = empty($_GET[$page_key]) ? 1 : (int) $_GET[$page_key];



    $query_args = build_query_vars_from_query_block($block, $page);
    $query      = new WP_Query($query_args);

    if (!$query->have_posts()) {
        return " ";
    }

    if (block_premium_post_template_uses_featured_image($block->inner_blocks)) {
        update_post_thumbnail_cache($query);
    }

    $classnames = '';
    $classnames .= ' premium-blog-wrap ';


    $wrapper_attributes = get_block_wrapper_attributes(array('class' => trim($classnames)));
    $content = '';
    wp_enqueue_style(
        'pbg-post-style',
        PREMIUM_BLOCKS_URL . 'assets/css/minified/pagination.min.css',
        array(),
        PREMIUM_BLOCKS_VERSION,
        'all'
    );
    if (
        isset($attributes['blockId']) && !empty($attributes['blockId'])
    ) {
        $unique_id = ".{$attributes['blockId']}";
    }

    $style_id = 'pbg-blocks-style' . esc_attr($unique_id);

    $style_css .= get_premium_post_template_css_style($attributes, $unique_id);


    while ($query->have_posts()) {
        $query->the_post();

        // Get an instance of the current Post Template block.
        $block_instance = $block->parsed_block;

        // Set the block name to one that does not correspond to an existing registered block.
        // This ensures that for the inner instances of the Post Template block, we do not render any block supports.
        $block_instance['blockName'] = 'premium/null';

        if (isset($block_instance['innerBlocks'])) {
            foreach ($block_instance['innerBlocks'] as $j => $inner_block) {
                $name = $inner_block['blockName'];
                $block_id = '';
                if (!isset($name)) {
                    return;
                }
                if (isset($inner_block['attrs']) && is_array($inner_block['attrs'])) {
                    $blockattr = $inner_block['attrs'];
                    if (isset($blockattr['blockId'])) {
                        $block_id = $blockattr['blockId'];
                    }
                }
                switch ($name) {
                    case 'premium/post-featured-image':
                        $style_css .= get_premium_feature_image_css_style($blockattr, $block_id);
                        break;
                    case 'premium/post-title':
                        $style_css .= get_premium_post_title_css_style($blockattr, $block_id);
                        break;
                    case 'premium/post-meta':
                        $style_css .= get_premium_post_meta_css_style($blockattr, $block_id);
                        break;
                    case 'premium/post-tag':
                        $style_css .= get_premium_post_tag_css_style($blockattr, $block_id);
                        break;
                    default:
                        // Nothing to do here.
                        break;
                }
            }
        }
        // `render_callback` and ensure that no wrapper markup is included.
        $block_content = (new WP_Block(
            $block_instance,

            array(
                'postType' => get_post_type(),
                'postId'   => get_the_ID(),
            )
        )
        )->render(array('dynamic' => true));
        // Wrap the render inner blocks in a `li` element with the appropriate post classes.
        $post_classes = implode(' ', get_post_class('premium-blog-post-outer-container'));
        $content     .= '<div class="' . esc_attr($post_classes) . '">' . '<style id=' . $style_id . '>' . $style_css . '</style>' .  $block_content . '</div>';
    }

    /*
	 * Use this function to restore the context of the template tags
	 * from a secondary query loop back to the main query loop.
	 * Since we use two custom loops, it's safest to always restore.
	*/
    wp_reset_postdata();
    return sprintf(
        '<div %1$s>%2$s</div>',
        $wrapper_attributes,
        $content
    );
}

/**
 * Registers the `premium/post-template` block on the server.
 */
function register_block_premium_post_template()
{
    if (!function_exists('register_block_type')) {
        return;
    }

    register_block_type(
        PREMIUM_BLOCKS_PATH . '/blocks-config/post-template/block.json',
        array(
            'render_callback'   => 'render_block_premium_post_template',
            'skip_inner_blocks' => false,
        )
    );
}
register_block_premium_post_template();
