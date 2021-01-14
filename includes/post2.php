<?php

/**
 * PBG Post.
 *
 * @package PBG
 */
if (!defined('ABSPATH')) {
      exit; // Exit if accessed directly.
}
if (!class_exists('PBG_Post')) {
      /**
       * Class PBG_Post.
       */
      class PBG_Post
      {
            /**
             * Member Variable
             *
             * @since 1.18.1
             * @var instance
             */
            private static $instance;
            private static $settings;
            public static function get_instance()
            {
                  if (!isset(self::$instance)) {
                        self::$instance = new self();
                  }
                  return self::$instance;
            }
            /**
             * Constructor
             */
            public function __construct()
            {
                  add_action('init', array($this, 'register_blocks'));
                  add_action('wp_ajax_premium_post_pagination', array($this, 'post_pagination'));
                  add_action('wp_ajax_nopriv_premium_post_pagination', array($this, 'post_pagination'));
            }

            // Check if the register function exists.
            public function register_blocks()
            {
                  // Check if the register function exists.
                  if (!function_exists('register_block_type')) {
                        echo 'welcome world';
                  }
                  $common_attributes = $this->get_post_attributes();
                  register_block_type(
                        'premium/post-blog',
                        array(
                              'attributes'      => array_merge(
                                    $common_attributes,
                                    array(
                                          'pagination'              => array(
                                                'type'    => 'boolean',
                                                'default' => false,
                                          ),
                                          'pageLimit'                   => array(
                                                'type'    => 'number',
                                                'default' => 10,
                                          ),
                                          'paginationBgActiveColor'     => array(
                                                'type'    => 'string',
                                                'default' => '#e4e4e4',
                                          ),
                                          'paginationActiveColor'       => array(
                                                'type'    => 'string',
                                                'default' => '#333333',
                                          ),
                                          'paginationBgColor'           => array(
                                                'type'    => 'string',
                                                'default' => '#e4e4e4',
                                          ),
                                          'paginationColor'             => array(
                                                'type'    => 'string',
                                                'default' => '#777777',
                                          ),
                                          'paginationMarkup'            => array(
                                                'type'    => 'string',
                                                'default' => '',
                                          ),
                                          'paginationLayout'            => array(
                                                'type'    => 'string',
                                                'default' => 'filled',
                                          ),
                                          'paginationBorderActiveColor' => array(
                                                'type' => 'string',
                                          ),
                                          'paginationBorderColor'       => array(
                                                'type'    => 'string',
                                                'default' => '#888686',
                                          ),
                                          'paginationBorderRadius'      => array(
                                                'type' => 'number',
                                          ),
                                          'paginationBorderSize'        => array(
                                                'type'    => 'number',
                                                'default' => 1,
                                          ),
                                          'paginationSpacing'           => array(
                                                'type'    => 'number',
                                                'default' => 20,
                                          ),
                                          'paginationAlignment'         => array(
                                                'type'    => 'string',
                                                'default' => 'left',
                                          ),
                                          'paginationPrevText'          => array(
                                                'type'    => 'string',
                                                'default' => '« Previous',
                                          ),
                                          'paginationNextText'          => array(
                                                'type'    => 'string',
                                                'default' => 'Next »',
                                          ),
                                    )
                              ),
                              'render_callback' => array($this, 'post_callback'),
                        )
                  );
            }


            /**
             * Get Post common attributes 
             *
             * @since 0.0.1
             */
            public function get_post_attributes()
            {
                  return array(
                        'blockID'                => array(
                              'type'    => 'string',
                              'default' => 'not_set',
                        ),
                        'categories'              => array(
                              'type' => 'string',
                        ),
                        'postType'                => array(
                              'type'    => 'string',
                              'default' => 'post',
                        ),
                        'taxonomyType'            => array(
                              'type'    => 'string',
                              'default' => 'category',
                        ),
                        'numOfPosts'             => array(
                              'type'    => 'number',
                              'default' => 1,
                        ),
                        'displayPostDate'         => array(
                              'type'    => 'boolean',
                              'default' => true,
                        ),
                        'displayPostExcerpt'      => array(
                              'type'    => 'boolean',
                              'default' => true,
                        ),
                        'excerptLength'           => array(
                              'type'    => 'number',
                              'default' => 25,
                        ),
                        'displayPostAuthor'       => array(
                              'type'    => 'boolean',
                              'default' => true,
                        ),
                        'displayPostComment'      => array(
                              'type'    => 'boolean',
                              'default' => true,
                        ),
                        'displayPostCategories'     => array(
                              'type'    => 'boolean',
                              'default' => false,
                        ),
                        ' featuredImage'        => array(
                              'type'    => 'boolean',
                              'default' => true,
                        ),
                        'imageSize'                 => array(
                              'type'    => 'string',
                              'default' => 'large',
                        ),
                        'linkBox'                 => array(
                              'type' => 'boolean',
                        ),
                        'bgOverlayColor'          => array(
                              'type'    => 'string',
                              'default' => '#ffffff',
                        ),
                        'overlayOpacity'          => array(
                              'type'    => 'number',
                              'default' => '50',
                        ),
                        'displayPostLink'         => array(
                              'type'    => 'boolean',
                              'default' => true,
                        ),
                        'newTab'                  => array(
                              'type'    => 'boolean',
                              'default' => false,
                        ),
                        'ctaText'                 => array(
                              'type'    => 'string',
                              'default' => __('Read More', 'ultimate-addons-for-gutenberg'),
                        ),
                        'borderWidth'             => array(
                              'type'    => 'number',
                              'default' => 1,
                        ),
                        'btnHPadding'             => array(
                              'type'    => 'number',
                              'default' => 10,
                        ),
                        'btnVPadding'             => array(
                              'type'    => 'number',
                              'default' => 5,
                        ),
                        'borderStyle'             => array(
                              'type'    => 'string',
                              'default' => 'none',
                        ),
                        'borderColor'             => array(
                              'type'    => 'string',
                              'default' => '#3b3b3b',
                        ),
                        'borderHColor'            => array(
                              'type' => 'string',
                        ),
                        'borderRadius'            => array(
                              'type'    => 'number',
                              'default' => 0,
                        ),
                        'cols'                 => array(
                              'type'    => 'number',
                              'default' => 3,
                        ),
                        'colsTablet'                => array(
                              'type'    => 'number',
                              'default' => 2,
                        ),
                        'colsMobile'                => array(
                              'type'    => 'number',
                              'default' => 1,
                        ),
                        'align'                   => array(
                              'type'    => 'string',
                              'default' => 'left',
                        ),
                        'width'                   => array(
                              'type'    => 'string',
                              'default' => 'wide',
                        ),
                        'order'                   => array(
                              'type'    => 'string',
                              'default' => 'desc',
                        ),
                        'orderBy'                 => array(
                              'type'    => 'string',
                              'default' => 'date',
                        ),
                        'rowGap'                  => array(
                              'type'    => 'number',
                              'default' => 20,
                        ),
                        'columnGap'               => array(
                              'type'    => 'number',
                              'default' => 20,
                        ),
                        'bgColor'                 => array(
                              'type'    => 'string',
                              'default' => '#e4e4e4',
                        ),
                        // Title Attributes.
                        'titleColor'              => array(
                              'type'    => 'string',
                              'default' => '#3b3b3b',
                        ),
                        'titleTag'                => array(
                              'type'    => 'string',
                              'default' => 'h3',
                        ),
                        'titleFontSize'           => array(
                              'type'    => 'number',
                              'default' => '',
                        ),
                        'titleFontSizeType'       => array(
                              'type'    => 'string',
                              'default' => 'px',
                        ),
                        'titleFontSizeMobile'     => array(
                              'type' => 'number',
                        ),
                        'titleFontSizeTablet'     => array(
                              'type' => 'number',
                        ),
                        'titleFontFamily'         => array(
                              'type'    => 'string',
                              'default' => '',
                        ),
                        'titleFontWeight'         => array(
                              'type' => 'string',
                        ),
                        'titleFontSubset'         => array(
                              'type' => 'string',
                        ),
                        'titleLineHeightType'     => array(
                              'type'    => 'string',
                              'default' => 'em',
                        ),
                        'titleLineHeight'         => array(
                              'type' => 'number',
                        ),
                        'titleLineHeightTablet'   => array(
                              'type' => 'number',
                        ),
                        'titleLineHeightMobile'   => array(
                              'type' => 'number',
                        ),
                        'titleLoadGoogleFonts'    => array(
                              'type'    => 'boolean',
                              'default' => false,
                        ),
                        // Meta attributes.
                        'metaColor'               => array(
                              'type'    => 'string',
                              'default' => '#777777',
                        ),
                        'metaFontSize'            => array(
                              'type'    => 'number',
                              'default' => '',
                        ),
                        'metaFontSizeType'        => array(
                              'type'    => 'string',
                              'default' => 'px',
                        ),
                        'metaFontSizeMobile'      => array(
                              'type' => 'number',
                        ),
                        'metaFontSizeTablet'      => array(
                              'type' => 'number',
                        ),
                        'metaFontFamily'          => array(
                              'type'    => 'string',
                              'default' => '',
                        ),
                        'metaFontWeight'          => array(
                              'type' => 'string',
                        ),
                        'metaFontSubset'          => array(
                              'type' => 'string',
                        ),
                        'metaLineHeightType'      => array(
                              'type'    => 'string',
                              'default' => 'em',
                        ),
                        'metaLineHeight'          => array(
                              'type' => 'number',
                        ),
                        'metaLineHeightTablet'    => array(
                              'type' => 'number',
                        ),
                        'metaLineHeightMobile'    => array(
                              'type' => 'number',
                        ),
                        'metaLoadGoogleFonts'     => array(
                              'type'    => 'boolean',
                              'default' => false,
                        ),
                        // Excerpt Attributes.
                        'excerptColor'            => array(
                              'type'    => 'string',
                              'default' => '',
                        ),
                        'excerptFontSize'         => array(
                              'type'    => 'number',
                              'default' => '',
                        ),
                        'excerptFontSizeType'     => array(
                              'type'    => 'string',
                              'default' => 'px',
                        ),
                        'excerptFontSizeMobile'   => array(
                              'type' => 'number',
                        ),
                        'excerptFontSizeTablet'   => array(
                              'type' => 'number',
                        ),
                        'excerptFontFamily'       => array(
                              'type'    => 'string',
                              'default' => '',
                        ),
                        'excerptFontWeight'       => array(
                              'type' => 'string',
                        ),
                        'excerptFontSubset'       => array(
                              'type' => 'string',
                        ),
                        'excerptLineHeightType'   => array(
                              'type'    => 'string',
                              'default' => 'em',
                        ),
                        'excerptLineHeight'       => array(
                              'type' => 'number',
                        ),
                        'excerptLineHeightTablet' => array(
                              'type' => 'number',
                        ),
                        'excerptLineHeightMobile' => array(
                              'type' => 'number',
                        ),
                        'excerptLoadGoogleFonts'  => array(
                              'type'    => 'boolean',
                              'default' => false,
                        ),
                        'displayPostContentRadio' => array(
                              'type'    => 'string',
                              'default' => 'excerpt',
                        ),
                        // CTA attributes.
                        'ctaColor'                => array(
                              'type'    => 'string',
                              'default' => '#ffffff',
                        ),
                        'ctaBgColor'              => array(
                              'type'    => 'string',
                              'default' => '#333333',
                        ),
                        'ctaHColor'               => array(
                              'type' => 'string',
                        ),
                        'ctaBgHColor'             => array(
                              'type' => 'string',
                        ),
                        'ctaFontSize'             => array(
                              'type'    => 'number',
                              'default' => '',
                        ),
                        'ctaFontSizeType'         => array(
                              'type'    => 'string',
                              'default' => 'px',
                        ),
                        'ctaFontSizeMobile'       => array(
                              'type' => 'number',
                        ),
                        'ctaFontSizeTablet'       => array(
                              'type' => 'number',
                        ),
                        'ctaFontFamily'           => array(
                              'type'    => 'string',
                              'default' => '',
                        ),
                        'ctaFontWeight'           => array(
                              'type' => 'string',
                        ),
                        'ctaFontSubset'           => array(
                              'type' => 'string',
                        ),
                        'ctaLineHeightType'       => array(
                              'type'    => 'string',
                              'default' => 'em',
                        ),
                        'ctaLineHeight'           => array(
                              'type' => 'number',
                        ),
                        'ctaLineHeightTablet'     => array(
                              'type' => 'number',
                        ),
                        'ctaLineHeightMobile'     => array(
                              'type' => 'number',
                        ),
                        'ctaLoadGoogleFonts'      => array(
                              'type'    => 'boolean',
                              'default' => false,
                        ),
                        // Spacing Attributes.
                        'contentPadding'          => array(
                              'type'    => 'number',
                              'default' => 20,
                        ),
                        'contentPaddingMobile'    => array(
                              'type' => 'number',
                        ),
                        'titleBottomSpace'        => array(
                              'type'    => 'number',
                              'default' => 15,
                        ),
                        'metaBottomSpace'         => array(
                              'type'    => 'number',
                              'default' => 15,
                        ),
                        'excerptBottomSpace'      => array(
                              'type'    => 'number',
                              'default' => 25,
                        ),
                        // Exclude Current Post.
                        'currentPost'      => array(
                              'type'    => 'boolean',
                              'default' => false,
                        ),
                  );
            }
            /**
             * Renders the post grid block on server.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 0.0.1
             */
            public function post_callback($attributes)
            {

                  // Render query.
                  $query = PBG_Blocks_Helper::get_query($attributes);
                  // Cache the settings.
                  self::$settings['grid'] . $attributes['blockID'] = $attributes;
                  ob_start();
                  $this->get_post_html($attributes, $query);
                  // Output the post markup.
                  return ob_get_clean();
            }
            /**
             * Renders the post grid block on server.
             *
             * @param array  $attributes Array of block attributes.
             *
             * @param object $query WP_Query object.
            
             * @since 0.0.1
             */
            public function get_post_html($attributes, $query)
            {
                  $wrap = array('premium-blog-wrap');
                  $block_id  = 'premium-blog' . $attributes['blockID'];
                  $outerwrap = array(
                        'premium-blog-' . $attributes['blockID']
                  );
                  switch ($attributes['layoutValue']) {
                        case 'Masonary':
                              break;
                        case 'Even':
                              array_push($wrap, 'premium-blog-equal-height');
                              break;
                        default:
                              // Nothing to do here.
                              break;
                  }
?>
                  <div class="<?php echo esc_html(implode(' ', $outerwrap)); ?>">
                        <div class="<?php echo esc_html(implode(' ', $wrap)); ?>">
                              <?php
                              $this->posts_articles_markup($query, $attributes);
                              ?>
                        </div>
                        <?php
                        if ((isset($attributes['pagination']) && true === $attributes['postPagination'])) {
                        ?>
                              <div class="premium-post-pagination-wrap">
                                    <?php echo $this->render_pagination($query, $attributes); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
                                    ?>
                              </div>
                        <?php
                        }
                        ?>
                  </div>
                  <?php
            }
            /**
             * Renders the post post pagination on server.
             *
             * @param object $query WP_Query object.
             * @param array  $attributes Array of block attributes.
             * @since 1.18.1
             */
            public function render_pagination($query, $attributes)
            {
                  $permalink_structure =         get_option('permalink_structure');
                  $base                = untrailingslashit(wp_specialchars_decode(get_pagenum_link()));
                  $base                = PBG_Blocks_Helper::build_base_url($permalink_structure, $base);
                  $format              = PBG_Blocks_Helper::paged_format($permalink_structure, $base);
                  $paged               = PBG_Blocks_Helper::get_paged($query);
                  $page_limit          = min($attributes['pageLimit'], $query->max_num_pages);
                  $page_limit          = isset($page_limit) ? $page_limit : $attributes['numOfPosts'];
                  $attributes['numOfPosts'];
                  $links = paginate_links(
                        array(
                              'base'      => $base . '%_%',
                              'format'    => $format,
                              'current'   => (!$paged) ? 1 : $paged,
                              'total'     => $page_limit,
                              'type'      => 'array',
                              'mid_size'  => 4,
                              'end_size'  => 4,
                              'prev_text' => $attributes['paginationPrevText'],
                              'next_text' => $attributes['paginationNextText'],
                        )
                  );
                  if (isset($links)) {
                        return wp_kses_post(implode(PHP_EOL, $links));
                  }
                  return '';
            }
            /**
             * Sends the Post pagination markup to edit.js
             *
             * @since 1.14.9
             */
            public function post_pagination()
            {
                  check_ajax_referer('pbg_ajax_nonce', 'nonce');
                  if (isset($_POST['attributes'])) {
                        $query = PBG_Blocks_Helper::get_query($_POST['attributes']);
                        $pagination_markup = $this->render_pagination($query, $_POST['attributes']);
                        wp_send_json_success($pagination_markup);
                  }
                  wp_send_json_error(' No attributes recieved');
            }
            /**
             * Sends the Posts to Masonry AJAX.
             *
             * @since 1.18.1
             */
            /**
             * Render Posts HTML for Masonry Pagination.
             *
             * @param object $query WP_Query object.
             * @param array  $attributes Array of block attributes.
             * @since 1.18.1
             */
            public function posts_articles_markup($query, $attributes)
            {
                  while ($query->have_posts()) {
                        $query->the_post();
                        // Filter to modify the attributes based on content requirement.
                        $attributes = apply_filters('premium_post_alter_attributes', $attributes, get_the_ID());
                        do_action("premium_post_before_article_{$attributes}", get_the_ID(), $attributes);
                  ?>
                        <div class="premium-blog-post-outer-container">
                              <?php do_action("premium_post_before_inner_wrap_{$attributes}", get_the_ID(), $attributes); ?>
                              <div class="premium-blog-post-container">
                                    <?php $this->render_image($attributes); ?>
                                    <div class="pbg-post__text">
                                          <?php $this->render_meta($attributes); ?>
                                          <?php $this->render_excerpt($attributes); ?>
                                          <?php $this->render_button($attributes); ?>
                                    </div>
                              </div>
                              <?php do_action("premium_post_after_inner_wrap_{$attributes}", get_the_ID(), $attributes); ?>
                        </div>
                  <?php
                        do_action("premium_post_after_article_{$attributes}", get_the_ID(), $attributes);
                  }
                  wp_reset_postdata();
            }
            /**
             * Renders the post masonry related script.
             *
             * @since 0.0.1
             */
            /**
             * Render Image HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 0.0.1
             */
            public function render_image($attributes)
            {
                  if (!$attributes['displayPostImage']) {
                        return;
                  }
                  if (!get_the_post_thumbnail_url()) {
                        return;
                  }
                  do_action("pbg_single_post_before_featured_image_{$attributes['post_type']}", get_the_ID(), $attributes);
                  ?>
                  <div class='premium-blog-thumbnail-container'>
                        <a href="<?php echo esc_url(apply_filters(get_the_permalink(), get_the_ID(), $attributes)); ?>" rel="bookmark noopener noreferrer"><?php echo wp_get_attachment_image(get_post_thumbnail_id(), $attributes['imagSize']); ?>
                        </a>
                  </div>
            <?php
                  do_action("pbg_single_post_after_featured_image_{$attributes['post_type']}", get_the_ID(), $attributes);
            }
            /**
             * Render Post Title HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 0.0.1
             */
            /**
             * Render Post Meta - Author HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 1.14.0
             */
            public function render_meta_author($attributes)
            {
                  if (!$attributes['displayPostAuthor']) {
                        return;
                  }
            ?>
                  <span class="premium-blog-post-author premium-blog-meta-data">
                        <span class="dashicons-admin-users dashicons"></span>
                        <?php the_author_posts_link(); ?>
                  </span>
            <?php
            }
            /**
             * Render Post Meta - Date HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 1.14.0
             */
            public function render_meta_date($attributes)
            {
                  if (!$attributes['displayPostDate']) {
                        return;
                  }
                  global $post;
            ?>
                  <time datetime="<?php echo esc_attr(get_the_date('c', $post->ID)); ?>" class="premium-blog-post-time premium-blog-meta-data">
                        <span class="dashicons-calendar dashicons"></span>
                        <?php echo esc_html(get_the_date('', $post->ID)); ?>
                  </time>
            <?php
            }
            /**
             * Render Post Meta - Comment HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 1.14.0
             */
            public function render_meta_comment($attributes)
            {
                  if (!$attributes['displayPostComment']) {
                        return;
                  }
            ?>
                  <div class='premium-blog-post-comments premium-blog-meta-data'>
                        <span class="premium-post__comment">
                              <span class="dashicons-admin-comments dashicons"></span>
                              <?php comments_number(); ?>
                        </span>
                  </div>
            <?php
            }
            /**
             * Render Post Meta - Comment HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 1.14.0
             */
            public function render_meta_taxonomy($attributes)
            {
                  if (!$attributes['displayPostCategories']) {
                        return;
                  }
                  global $post;
                  $terms = get_the_terms($post->ID, $attributes['taxonomyType']);
                  if (is_wp_error($terms)) {
                        return;
                  }
                  if (!isset($terms[0])) {
                        return;
                  }
            ?>
                  <div class="premium-blog-post-categories premium-blog-meta-data">
                        <span class="premium-post__taxonomy">
                              <span class="dashicons-tag dashicons"></span>
                              <?php echo esc_html($terms[0]->name); ?>
                        </span>
                  </div>
            <?php
            }
            /**
             * Render Post Meta HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 0.0.1
             */
            public function render_meta($attributes)
            {
                  global $post;
                  do_action("pbg_single_post_before_meta", get_the_ID(), $attributes);
                  $meta_sequence = array('author', 'date', 'comment', 'taxonomy');
                  //   $meta_sequence = apply_filters("uagb_single_post_meta_sequence", $meta_sequence, get_the_ID(), $attributes);
            ?>
                  <div class="uagb-post-grid-byline">
                        <?php
                        foreach ($meta_sequence as $key => $sequence) {
                              switch ($sequence) {
                                    case 'author':
                                          $this->render_meta_author($attributes);
                                          break;
                                    case 'date':
                                          $this->render_meta_date($attributes);
                                          break;
                                    case 'comment':
                                          $this->render_meta_comment($attributes);
                                          break;
                                    case 'taxonomy':
                                          $this->render_meta_taxonomy($attributes);
                                          break;
                                    default:
                                          break;
                              }
                        }
                        ?>
                  </div>
            <?php
                  do_action("pbg_single_post_after_meta", get_the_ID(), $attributes);
            }
            /**
             * Render Post Excerpt HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 0.0.1
             */
            public function render_excerpt($attributes)
            {
                  if (!$attributes['displayPostExcerpt']) {
                        return;
                  }
                  $length = (isset($attributes['displayPostExcerpt'])) ? $attributes['displayPostExcerpt'] : 25;
                  if ('full_post' === $attributes['displayPostExcerpt']) {
                        $excerpt = get_the_content();
                  } else {
                        $excerpt = wp_trim_words(get_the_excerpt(), $length);
                  }
                  if (!$excerpt) {
                        $excerpt = null;
                  }
                  // $excerpt = apply_filters("uagb_single_post_excerpt", $excerpt, get_the_ID(), $attributes);
                  do_action("pbg_single_post_before_excerpt", get_the_ID(), $attributes);
            ?>
                  <div class="uagb-post__excerpt">
                        <?php echo wp_kses_post($excerpt); ?>
                  </div>
            <?php
                  do_action("pbg_single_post_after_excerpt", get_the_ID(), $attributes);
            }

            /**
             * Render Post CTA button HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 0.0.1
             */
            public function render_button($attributes)
            {
                  if (!$attributes['displayPostLink'] || "Post Full Content" === $attributes["displayPostExcerpt"]) {
                        return;
                  }
                  $target   = ($attributes['newTab']) ? '_blank' : '_self';
                  $cta_text = ($attributes['readMoreText']) ? $attributes['readMoreText'] : __('Read More');
                  do_action("pbg_single_post_before_cta", get_the_ID(), $attributes);
                  $wrap_classes = 'premium-blog-excerpt-link-wrap';
            ?>
                  <div class="<?php echo esc_html($wrap_classes); ?>">
                  </div>
<?php
                  do_action("pbg_single_post_after_cta", get_the_ID(), $attributes);
            }
            /**
             * Render Complete Box Link HTML.
             *
             * @param array $attributes Array of block attributes.
             *
             * @since 1.7.0
             */
      }

      /**
       *  Prepare if class 'PBG_Post' exist.
       *  Kicking this off by calling 'get_instance()' method
       */
      PBG_Post::get_instance();
}
