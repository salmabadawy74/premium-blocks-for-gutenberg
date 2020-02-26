<?php
/**
 *Config.
 *
 * @package
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Config' ) ) {

	/**
	 * Class Config.
	 */
	class Config {

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Block Assets
		 *
		 * @var block_attributes
		 */
		public static $block_assets = null;

		/**
		 * Get Widget List.
		 *
		 * @since 0.0.1
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_attributes() {

			if ( null === self::$block_attributes ) {
				self::$block_attributes = array(
					'premium/icon-list'         => array(
						'slug'        => '',
						'title'       => __( 'Icon List', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block allows you to place an image or icon in a list format.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'classMigrate'     => false,
							'align'            => 'left',
							'multiTitleCount'       => '1',
							'icons'            => array(
								array(
									'label'               => __( 'Title #1', 'premium-block-for-gutenberg' ),
									'image_icon'          => 'icon',
									'icon'                => 'fab fa-facebook',
									'image'               => '',
									'icon_color'          => '#3a3a3a',
									'icon_hover_color'    => '#3a3a3a',
									'icon_bg_color'       => '',
									'icon_bg_hover_color' => '',
									'item_bg_color'   => '',
									'item_bg_hover_color' => '',
									'label_color'         => '',
									'label_hover_color'   => '',
									'link'                => '#',
									'target'              => false,
								),
							),
							'layoutPos'              => 'block',
							'iconPosition'        => 'left',
							'linkTarget'             => 'false',
							'size'         => '20',
							'sizeType'         => 'px',
							'sizeMobile'       => '',
							'sizeTablet'       => '',
							'fontSize'         => '',
							'fontSizeType'     => 'px',
							'fontSizeMobile'   => '',
							'fontSizeTablet'   => '',
							'iconPaddingType'  => 'px',
							'iconPadding'           => '0',
							'iconPaddingMobile'           => '0',
							'iconPaddingTablet'     => '0',
							'titleLetter'       => '',
							'titleStyle'           => '0',
							'titleUpper'           => '0',
							'titleWeight'     => '500',
							'titleFont'         => '',
							'borderType'     => 'none',
							'borderWidth'   => '1',
							'borderRadius'   => '100',
							'borderColor'       => '',
							'iconSpacing'   => '10',
							'iconSpacingTablet' => '10',
							'iconSpacingMobile' => '10',
							'iconSpacingType' => 'px',
							'titlePaddingTablet' => 'px',
							'titlePadding' => '10',
							'titlePaddingTablet' => '10',
							'titlePaddingMobile' => '10',
							'titlePaddingType'  => 'px',
							'itemMarginL' => '1',
							'itemMarginR'       => '1',
							'itemMarginT'       => '1',
							'itemMarginB'       => '1  ',
							'marginTop'         => '',
							'marginTopType'     => 'px',
							'marginTopMobile'   => '',
							'marginTopTablet'   => '',
							'marginRight'         => '',
							'marginRightType'     => 'px',
							'marginRightMobile'   => '',
							'marginRightTablet'   => '',
							'marginBottom'         => '',
							'marginBottomType'     => 'px',
							'marginBottomMobile'   => '',
							'marginBottomTablet'   => '',
							'marginLeft'         => '',
							'marginLeftType'     => 'px',
							'marginLeftMobile'   => '',
							'marginLeftTablet'   => '',
						),
					)
				);
			}
			return self::$block_attributes;
		}
	}
}
