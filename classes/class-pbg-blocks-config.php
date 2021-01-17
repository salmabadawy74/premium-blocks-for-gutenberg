<?php
/**
 * PBG_Config.
 *
 * @package PBG
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'PBG_Config' ) ) {

	/**
	 * Class PBG_Config.
	 */
	class PBG_Config {

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
		 * @since 1.8.3
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
							'fancyTextfontSize'       => '40',
							'fancyTextfontSizeType'   => 'px',
							'fancyTextfontSizeMobile' => '40',
							'fancyTextfontSizeTablet' => '40',
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
							'TextfontSize'            => '40',
							'TextfontSizeType'        => 'px',
							'TextfontSizeMobile'      => '40',
							'TextfontSizeTablet'      => '40',
							'TextWeight'              => '600',
							'TextLetter'              => '',
							'TextUpper'               => false,
							'TextStyle'               => '',
							'TextBGColor'             => '',
						),
					),
				);
			}
			return self::$block_attributes;
		}
	}
}
