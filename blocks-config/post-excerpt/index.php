<?php

/**
 * Server-side rendering of the `core/post-excerpt` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/post-excerpt` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post excerpt for the current post wrapped inside "p" tags.
 */
    function get_post_content( $attributes ) {
    if (!isset($block->context['postId'])) {
        return '';
    }

    $excerpt = get_the_excerpt();
            $src          = $attributes['displayPostExcerpt'];
            $excerpt_type = $attributes['excerptType'];
            $excerpt_text = $attributes['readMoreText'];
            $length       = $attributes['excerptLength'];
            // Get post content.
            if ( 'Post Excerpt' === $src ) :
                        echo '<p class="premium-blog-post-content">';
            endif;
            echo wp_kses_post( $this->render_post_content( $src, $length, $excerpt_type, $excerpt_text ) );
            if ( 'Post Excerpt' === $src ) :
                        echo '</p>';
            endif;
            // Get post excerpt.
            if ( 'Link' === $excerpt_type ) :
                        $this->get_post_excerpt_link( $excerpt_text, $attributes );
            endif;
        }
        public function render_post_content( $source, $excerpt_length, $cta_type, $read_more ) {
            $excerpt = '';
            if ( 'Post Full Content' === $source ) {
                        // Print post full content.
                the_content();
            } else {
                $excerpt = trim( get_the_excerpt() );
                $words   = explode( ' ', $excerpt, $excerpt_length + 1 );
                if ( count( $words ) > $excerpt_length ) {
                    if ( ! has_excerpt() ) {
                        array_pop( $words );
                        if ( 'dots' === $cta_type ) {
                            array_push( $words, '…' );
                        }
                    }
                }
                $excerpt = implode( ' ', $words );
            }
            return $excerpt;
        }
        /**
         * Function runder Button
         *
         * @param [type] $read_more
         * @param [type] $attributes
         * @return void
         */
        public static function get_post_excerpt_link( $read_more, $attributes ) {
            if ( empty( $read_more ) ) {
                return;
            }
            $wrapbutton = array( 'premium-blog-excerpt-link-wrap', 'premium-blog-excerpt-link-' . $attributes['fullWidth'] );
            ?>
            <div class="<?php echo esc_html( implode( ' ', $wrapbutton ) ); ?>">
            <a  href="<?php the_permalink(); ?>" class="premium-blog-excerpt-link elementor-button">
            <?php echo wp_kses_post( $read_more ); ?>
            </a>
            </div>
            
            
            <?php
        }

/**
 * Registers the `core/post-excerpt` block on the server.
 */
function register_core_post_excerpt()
{
        register_block_type(
            PREMIUM_BLOCKS_PATH . '/blocks-config/post-excerpt',
        array(
            'render_callback' => 'get_post_content',
        )
    );
}
add_action('init', 'register_block_post_excerpt');
