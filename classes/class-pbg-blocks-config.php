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
					'premium/fancy-text'     => array(
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
					'premium/accordion'      => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'titleSize'       => '20',
							'titleSizeUnit'   => 'px',
							'titleSizeTablet' => '20',
							'titleSizeMobile' => '20',
							'descSize'        => '20',
							'descSizeTablet'  => '20',
							'descSizeMobile'  => '20',
							'descSizeUnit'    => 'px',
							'classMigrate'    => false,
						),
					),
					'premium/banner'         => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'classMigrate'    => false,
							'descSize'        => '20',
							'descSizeTablet'  => '20',
							'descSizeMobile'  => '20',
							'descSizeUnit'    => 'px',
							'titleSize'       => '20',
							'titleSizeUnit'   => 'px',
							'titleSizeTablet' => '20',
							'titleSizeMobile' => '20',
							'block_id'        => '',
						),
					),
					'premium/button'         => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'classMigrate'   => false,
							'textSize'       => '20',
							'textSizeTablet' => '20',
							'textSizeMobile' => '20',
							'textSizeUnit'   => 'px',
							'block_id'       => '',
						),
					),
					'premium/countup'        => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'         => '',
							'classMigrate'     => false,
							'numberSize'       => '20',
							'numberSizeTablet' => '20',
							'numberSizeMobile' => '20',
							'numberSizeUnit'   => 'px',
							'prefixSize'       => '20',
							'prefixSizeTablet' => '20',
							'prefixSizeMobile' => '20',
							'prefixSizeUnit'   => 'px',
							'suffixSize'       => '20',
							'suffixSizeTablet' => '20',
							'suffixSizeMobile' => '20',
							'suffixSizeUnit'   => 'px',
							'titleSize'        => '20',
							'titleSizeTablet'  => '20',
							'titleSizeMobile'  => '20',
							'titleSizeUnit'    => 'px',
						),
					),
					'premium/dheading-block' => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'         => '',
							'classMigrate'     => false,
							'firstSize'        => '20',
							'firstSizeTablet'  => '20',
							'firstSizeMobile'  => '20',
							'firstSizeUnit'    => 'px',
							'secondSize'       => '20',
							'secondSizeTablet' => '20',
							'secondSizeMobile' => '20',
							'secondSizeUnit'   => 'px',
						),
					),
					'premium/icon-box'       => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'        => '',
							'classMigrate'    => false,
							'titleSize'       => '20',
							'titleSizeTablet' => '20',
							'titleSizeMobile' => '20',
							'titleSizeUnit'   => 'px',
							'descSize'        => '20',
							'descSizeTablet'  => '20',
							'descSizeMobile'  => '20',
							'descSizeUnit'    => 'px',
							'btnSize'         => '20',
							'btnSizeTablet'   => '20',
							'btnSizeMobile'   => '20',
							'btnSizeUnit'     => 'px',
						),
					),
					'premium/pricing-table'  => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'            => '',
							'classMigrate'        => false,
							'titleSize'           => '20',
							'titleSizeTablet'     => '20',
							'titleSizeMobile'     => '20',
							'titleSizeUnit'       => 'px',
							'descSize'            => '20',
							'descSizeTablet'      => '20',
							'descSizeMobile'      => '20',
							'descSizeUnit'        => 'px',
							'slashSize'           => '20',
							'slashSizeTablet'     => '20',
							'slashSizeMobile'     => '20',
							'slashSizeUnit'       => 'px',
							'currSize'            => '20',
							'currSizeTablet'      => '20',
							'currSizeMobile'      => '20',
							'currSizeUnit'        => 'px',
							'valSize'             => '20',
							'valSizeTablet'       => '20',
							'valSizeMobile'       => '20',
							'valSizeUnit'         => 'px',
							'divSize'             => '20',
							'divSizeTablet'       => '20',
							'divSizeMobile'       => '20',
							'divSizeUnit'         => 'px',
							'durSize'             => '20',
							'durSizeTablet'       => '20',
							'durSizeMobile'       => '20',
							'durSizeUnit'         => 'px',
							'btnSize'             => '20',
							'btnSizeTablet'       => '20',
							'btnSizeMobile'       => '20',
							'btnSizeUnit'         => 'px',
							'badgeTextSize'       => '20',
							'badgeTextSizeTablet' => '20',
							'badgeTextSizeMobile' => '20',
							'badgeTextUnit'       => 'px',
							'listSize'            => '20',
							'listSizeTablet'      => '20',
							'listSizeMobile'      => '20',
							'listSizeUnit'        => 'px',
						),
					),
					'premium/testimonial'    => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'            => '',
							'classMigrate'        => false,
							'authorSize'          => '20',
							'authorSizeTablet'    => '20',
							'authorSizeMobile'    => '20',
							'authorSizeUnit'      => 'px',
							'authorComSize'       => '20',
							'authorComSizeTablet' => '20',
							'authorComSizeMobile' => '20',
							'authorComSizeUnit'   => 'px',
							'bodySize'            => '20',
							'bodySizeTablet'      => '20',
							'bodySizeMobile'      => '20',
							'bodySizeUnit'        => 'px',
						),
					),
					'premium/video-box'      => array(
						'slug'       => '',
						'default'    => true,
						'attributes' => array(
							'block_id'            => '',
							'classMigrate'        => false,
							'videoDescSize'       => '20',
							'videoDescSizeTablet' => '20',
							'videoDescSizeMobile' => '20',
							'videoDescSizeUnit'   => 'px',
						),
					),
				);
			}
			return self::$block_attributes;
		}
	}
}
