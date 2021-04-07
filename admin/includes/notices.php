<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit();
}

/**
 * Class Premium_Gutenberg_Admin_Notices.
 */
class Premium_Gutenberg_Admin_Notices {

	/**
	 * Class instance
	 *
	 * @var instance
	 */
	private static $instance = null;

	/**
	 * Constructor for the class
	 */
	public function __construct() {
		add_action( 'admin_init', array( $this, 'init' ) );

		add_action( 'admin_notices', array( $this, 'check_admin_notices' ) );
	}

	/**
	 * Init required functions
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function init() {
		$this->handle_review_notice();
	}

	/**
	 * Check Admin Notices
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function check_admin_notices() {
		$this->get_review_notice();
	}

	/**
	 * Checks if review message is dismissed.
	 *
	 * @access public
	 * @return void
	 */
	public function handle_review_notice() {

		if ( ! isset( $_GET['pbg_review'] ) ) {
			return;
		}

		if ( 'opt_out' === $_GET['pbg_review'] ) {
			check_admin_referer( 'opt_out' );

			update_option( 'pbg_review_notice', '1' );
		}

		wp_redirect( remove_query_arg( 'pbg_review' ) );
		exit;
	}


	/**
	 * Get Review Text
	 *
	 * Renders admin review notice HTML.
	 *
	 * @param string $review_url url.
	 * @param string $optout_url redirection url.
	 *
	 * @since 2.8.4
	 */
	public function get_review_text( $review_url, $optout_url ) {
		$notice = sprintf(
			'<p>' . __( 'Did you like', 'premium-blocks-for-gutenberg' ) . '<strong>&nbspPremium Blocks for Gutenberg&nbsp</strong>' . __( 'Plugin?', 'premium-blocks-for-gutenberg' ) . '</p>
            <p>' . __( 'Could you please do us a BIG favor ? if you could take 2 min of your time, we\'d really appreciate if you give Premium Blocks for Gutenberg 5-star rating on WordPress. By spreading the love, we can create even greater free stuff in the future!', 'premium-blocks-for-gutenberg' ) . '</p>
            <p><a class="button button-primary" href="%s" target="_blank"><span><i class="dashicons dashicons-external"></i>' . __( 'Leave a Review', 'premium-blocks-for-gutenberg' ) . '</span></a>
                <a class="button button-secondary" href="%2$s"><span><i class="dashicons dashicons-calendar-alt"></i>' . __( 'Maybe Later', 'premium-blocks-for-gutenberg' ) . '</span></a>
                <a class="button button-secondary" href="%2$s"><span><i class="dashicons dashicons-smiley"></i>' . __( 'I Already did', 'premium-blocks-for-gutenberg' ) . '</span></a>
            </p>',
			$review_url,
			$optout_url
		);

		return $notice;
	}

	/**
	 * Checks if review admin notice is dismissed
	 *
	 * @since 2.6.8
	 * @return void
	 */
	public function get_review_notice() {

		$review = get_option( 'pbg_review_notice' );

		$review_url = 'https://wordpress.org/support/plugin/premium-blocks-for-gutenberg/reviews/?filter=5';

		if ( '1' === $review ) {
			return;
		} elseif ( '1' !== $review ) {
			$optout_url = wp_nonce_url( add_query_arg( 'pbg_review', 'opt_out' ), 'opt_out' );
			?>

		<div class="error pb-notice-wrap">
			<div class="pb-img-wrap">
				<img src="<?php echo esc_url( PREMIUM_BLOCKS_URL . 'admin/images/premium-blocks-logo.png' ); ?>">
			</div>
			<div class="pb-text-wrap">
				<?php echo $this->get_review_text( $review_url, $optout_url ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</div>
			<div class="pb-notice-close">
				<a href="<?php echo esc_url( $optout_url ); ?>"><span class="dashicons dashicons-dismiss"></span></a>
			</div>
		</div>

			<?php
		}

	}

	/**
	 * Renders an admin notice error message
	 *
	 * @since 1.0.0
	 * @access private
	 *
	 * @param string $message message markup.
	 *
	 * @return void
	 */
	private function render_admin_notices( $message ) {
		?>
			<div class="error">
				<?php echo $message; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</div>
		<?php
	}

	/**
	 *
	 * Creates and returns an instance of the class
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return object
	 */
	public static function get_instance() {

		if ( ! isset( self::$instance ) ) {

			self::$instance = new self();

		}

		return self::$instance;
	}

}

if ( ! function_exists( 'get_pbg_notices_instance' ) ) {
	/**
	 * Returns an instance of the plugin class.
	 *
	 * @since  1.1.1
	 * @return object
	 */
	function get_pbg_notices_instance() {
		return Premium_Gutenberg_Admin_Notices::get_instance();
	}
}
get_pbg_notices_instance();
