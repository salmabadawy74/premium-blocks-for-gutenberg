<?php
/**
 * PBG_Blocks_Config.
 *
 * @package PBG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'PBG_Blocks_Config' ) ) {

	/**
	 * Class PBG_Blocks_Config.
	 */
	class PBG_Blocks_Config {

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
		 * @since 1.8.2
		 *
		 * @return array blocks attributes.
		 */
		public static function get_block_attributes() {

			if ( null === self::$block_attributes ) {

				self::$block_attributes = array(
					'premium/fancy-text' => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'classMigrate'            => false,
							'align'                   => 'center',
							'block_id'                => '',
							'fancyTextColor'          => '#6ec1e4',
							'fancyTextfontSize'       => '20',
							'fancyTextfontSizeMobile' => '20',
							'fancyTextfontSizeTablet' => '20',
							'fancyTextfontSizeUnit'   => 'px',
							'fancyTextWeight'         => '600',
							'fancyTextUpper'          => false,
							'fancyTextStyle'          => '',
							'fancyTextLetter'         => '',
							'fancyTextBGColor'        => '',
							'shadowColor'             => '',
							'shadowBlur'              => '1',
							'shadowHorizontal'        => '1',
							'shadowVertical'          => '1',
							'cursorColor'             => '#6ec1e4',
							'textColor'               => '#54595f',
							'textfontSize'            => '20',
							'textfontSizeMobile'      => '20',
							'textfontSizeTablet'      => '20',
							'textfontSizeUnit'        => 'px',
							'textWeight'              => '600',
							'textLetter'              => '',
							'textUpper'               => false,
							'textStyle'               => '',
							'textBGColor'             => '',
						),
					),

					'premium/container'  => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'classMigrate' => false,
							'showDesk'     => false,
							'showTablet'   => false,
							'showMobile'   => false,
							'block_id'     => false,
						),
					),
				);

			}

			return self::$block_attributes;
		}
	}
}
