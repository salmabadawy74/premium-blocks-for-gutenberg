import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

	const {
		classMigrate,
		repeaterAccordion,
		height,
		heightType,
		heightTablet,
		heightMobile,
		overlayColor,
		overlayColorHover,
		blur,
		bright,
		contrast,
		saturation,
		hue,
		blurHover,
		brightHover,
		contrastHover,
		saturationHover,
		hueHover,
		iconColor,
		iconHoverColor,
		iconBGColor,
		iconHoverBGColor,
		iconSize,
		iconSizeTablet,
		iconSizeType,
		iconSizeMobile,
		iconShadowBlur,
		iconShadowColor,
		iconShadowHorizontal,
		iconShadowPosition,
		iconShadowVertical,
		iconMargin,
		iconMarginType,
		iconMarginTablet,
		iconMarginMobile,
		iconPadding,
		iconPaddingType,
		iconPaddingTablet,
		iconPaddingMobile,
		iconborderColor,
		iconborderRadius,
		iconborderWidth,
		iconborderType,
		titleColor,
		titleWeight,
		titleLetter,
		titleUpper,
		titleStyle,
		titleLine,
		titlefontSize,
		titlefontSizeMobile,
		titlefontSizeTablet,
		titlefontSizeType,
		titleshadowBlur,
		titleshadowColor,
		titleshadowHorizontal,
		titleshadowVertical,
		titleMargin,
		titleMarginTablet,
		titleMarginType,
		titleMarginMobile,
		descColor,
		descWeight,
		descLetter,
		descUpper,
		descStyle,
		descLine,
		descfontSize,
		descfontSizeMobile,
		descfontSizeTablet,
		descfontSizeType,
		descshadowBlur,
		descshadowColor,
		descshadowHorizontal,
		descshadowVertical,
		descMargin,
		descMarginType,
		descMarginTablet,
		descMarginMobile,
		descPadding,
		descPaddingTablet,
		descPaddingType,
		descPaddingMobile
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	selectors = {
		" .premium-accordion-horizontal .premium-accordion-li":{
			"height": generateCSSUnit(height, heightType),
		},
		" .premium-accordion-overlay-wrap":{
			"background-color": overlayColor
		},
		" .premium-accordion-li:hover .premium-accordion-overlay-wrap":{
			"background-color": overlayColorHover
		},
		" .premium-accordion-ul li.premium-accordion-li":{
			"filter": `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
		},
		" .premium-accordion-ul li.premium-accordion-li:hover":{
			"filter": `brightness( ${brightHover}% ) contrast( ${contrastHover}% ) saturate( ${saturationHover}% ) blur( ${blurHover}px ) hue-rotate( ${hueHover}deg )`
		},
		" .premium-accordion-section .premium-accordion-icon": {
			"color": iconColor,
			"background-color": iconBGColor,
			"border-style": iconborderType,
      "border-width": generateCSSUnit(iconborderWidth, "px"),
      "border-color": iconborderColor,
			"border-radius": generateCSSUnit(iconborderRadius, "px"),
			"margin": generateCSSUnit(iconMargin, iconMarginType),
			"padding": generateCSSUnit(iconPadding, iconPaddingType),
			"font-size": generateCSSUnit(iconSize, iconSizeType),
			"box-shadow": `${iconShadowHorizontal}px ${iconShadowVertical}px ${iconShadowBlur}px ${iconShadowColor} ${iconShadowPosition}`,
		},
		" .premium-accordion-section .premium-accordion-icon:hover": {
			"color": iconHoverColor,
			"background-color": iconHoverBGColor,
		},
		" .premium-accordion-section .premium-accordion-title": {
			"font-size": generateCSSUnit(titlefontSize, titlefontSizeType),
      "color": titleColor,
      "font-weight": titleWeight,
      "letter-spacing": titleLetter + "px" + "!important",
      "text-transform": titleUpper ? "uppercase" : "none" + "!important",
			"font-style": titleStyle + "!important",
			"line-height": titleLine>0 ? titleLine + "px" + "!important": "",
      "text-shadow": `${titleshadowHorizontal}px ${titleshadowVertical}px ${titleshadowBlur}px ${titleshadowColor}`,
      "margin": generateCSSUnit(titleMargin, titleMarginType),
		},
		" .premium-accordion-section .premium-accordion-description": {
			"font-size": generateCSSUnit(descfontSize, descfontSizeType),
      "color": descColor,
      "font-weight": descWeight,
      "letter-spacing": descLetter + "px" + "!important",
      "text-transform": descUpper ? "uppercase" : "none" + "!important",
			"font-style": descStyle + "!important",
			"line-height": descLine>0 ? descLine + "px" + "!important": "",
      "text-shadow": `${descshadowHorizontal}px ${descshadowVertical}px ${descshadowBlur}px ${descshadowColor}`,
			"margin": generateCSSUnit(descMargin, descMarginType),
      "padding": generateCSSUnit(descPadding, descPaddingType),
		},
	}

	mobile_selectors = {
		" .premium-accordion-horizontal .premium-accordion-li":{
			"height": generateCSSUnit(heightMobile, heightType),
		},
		" .premium-accordion-section .premium-accordion-icon": {
			"margin": generateCSSUnit(iconMarginMobile, iconMarginType),
			"padding": generateCSSUnit(iconPaddingMobile, iconPaddingType),
			"font-size": generateCSSUnit(iconSizeMobile, iconSizeType),
		},
		" .premium-accordion-section .premium-accordion-title": {
			"font-size": generateCSSUnit(titlefontSizeMobile, titlefontSizeType),
      "margin": generateCSSUnit(titleMarginMobile, titleMarginType),
		},
		" .premium-accordion-section .premium-accordion-description":{
			"font-size": generateCSSUnit(descfontSizeMobile, descfontSizeType),
			"margin": generateCSSUnit(descMarginMobile, descMarginType),
			"padding": generateCSSUnit(descPaddingMobile,descPaddingType),
		}
	}

	tablet_selectors = {
		" .premium-accordion-horizontal .premium-accordion-li":{
			"height": generateCSSUnit(heightTablet, heightType),
		},
		" .premium-accordion-section .premium-accordion-icon": {
			"margin": generateCSSUnit(iconMarginTablet, iconMarginType),
			"padding": generateCSSUnit(iconPaddingTablet, iconPaddingType),
			"font-size": generateCSSUnit(iconSizeTablet, iconSizeType),
		},
		" .premium-accordion-section .premium-accordion-title": {
			"font-size": generateCSSUnit(titlefontSizeTablet, titlefontSizeType),
      "margin": generateCSSUnit(titleMarginTablet, titleMarginType),
		},
		" .premium-accordion-section .premium-accordion-description": {
			"font-size": generateCSSUnit(descfontSizeTablet, descfontSizeType),
			"margin": generateCSSUnit(descMarginTablet, descMarginType),
			"padding": generateCSSUnit(descPaddingTablet,descPaddingType)
		}
	}

	repeaterAccordion.map((item, index) => {
		// width selector
		selectors[" .premium-accordion-li" + index + " .premium-accordion-background"] = {
      "background-image": item.ImgUrl?`url(" ${item.ImgUrl.url} ")`: "",
      "background-size": item.size === 'custom'? `${item.width}${item.widthType} auto` :item.size,
      "background-position": item.position,
      "background-repeat": item.repeat
		}
		mobile_selectors[" .premium-accordion-li" + index + " .premium-accordion-background"] = {
			"background-size": item.size === 'custom'? `${item.widthMobile}${item.widthType} auto` :item.size,
		}
		tablet_selectors[" .premium-accordion-li" + index + " .premium-accordion-background"] = {
			"background-size": item.size === 'custom'? `${item.widthTablet}${item.widthType} auto` :item.size,
		}

		selectors[" .premium-accordion-skew .premium-accordion-li::before"] = {
      "background-image": item.ImgUrl?`url(" ${item.ImgUrl.url} ")`: "",
      "background-size": item.size === 'custom'? `${item.width}${item.widthType} auto` :item.size,
      "background-position": item.position,
      "background-repeat": item.repeat
		}
		mobile_selectors[" .premium-accordion-skew .premium-accordion-li::before"] = {
			"background-size": item.size === 'custom'? `${item.widthMobile}${item.widthType} auto` :item.size,
		}
		tablet_selectors[" .premium-accordion-skew .premium-accordion-li::before"] = {
			"background-size": item.size === 'custom'? `${item.widthTablet}${item.widthType} auto` :item.size,
		}

		selectors[" .premium-accordion-li" + index + " .premium-accordion-content"] = {
      "left": generateCSSUnit(item.horizontal, item.horizontalType),
			"top": generateCSSUnit(item.vertical, item.verticalType),
			"position": 'absolute'
		}
		mobile_selectors[" .premium-accordion-li" + index + " .premium-accordion-content"] = {
			"left": generateCSSUnit(item.horizontalMobile, item.horizontalType),
			"top": generateCSSUnit(item.verticalMobile, item.verticalType),
			"position": 'absolute'
		}

		tablet_selectors[" .premium-accordion-li" + index + " .premium-accordion-content"] = {
			"left": generateCSSUnit(item.horizontalTablet, item.horizontalType),
			"top": generateCSSUnit(item.verticalTablet, item.verticalType),
			"position": 'absolute'
		}
	})


	var styling_css = ""
	var id = `#premium-image-accordion-${props.clientId}`
	if (classMigrate) {
		id = `.premium-block-${props.clientId}`
	}

	styling_css = generateCSS(selectors, id)
	styling_css += generateCSS(tablet_selectors, id, true, "tablet")

	styling_css += generateCSS(mobile_selectors, id, true, "mobile")

	return styling_css
}

export default styling