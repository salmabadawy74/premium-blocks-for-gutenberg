import generateCSS from './generateCss'
import generateCSSUnit from './generateCssUnit'

function styling(props) {

	const {
		multiTitleCount,
		classMigrate,
		icons,
		sizeType,
		size,
		sizeTablet,
		sizeMobile,
		fontSize,
		fontSizeType,
		fontSizeMobile,
		fontSizeTablet,
		iconPaddingType,
		iconPadding,
		iconPaddingTablet,
		iconPaddingMobile,
		titlePadding,
		titlePaddingMobile,
		titlePaddingTablet,
		titlePaddingType,
		layoutPos,
		marginTop,
		marginTopMobile,
		marginTopTablet,
		marginTopType,
		marginBottom,
		marginBottomMobile,
		marginBottomTablet,
		marginBottomType,
		marginLeft,
		marginLeftMobile,
		marginLeftType,
		marginLeftTablet,
		marginRightTablet,
		marginRight,
		marginRightMobile,
		marginRightType,
		iconSpacing,
		iconSpacingType,
		iconSpacingMobile,
		iconSpacingTablet,
		iconPosition
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	selectors = {
		" .premium-icon-list__icon-wrap img": {
			"width": generateCSSUnit(size, sizeType)
		},
		" .premium-icon-list__icon-wrap": {
			"padding": generateCSSUnit(iconPadding, iconPaddingType),
			"margin-right": iconPosition == "left" ? generateCSSUnit(iconSpacing, iconSpacingType) : "",
			"margin-left": iconPosition == "right" ? generateCSSUnit(iconSpacing, iconSpacingType) : "",
			"margin-bottom": iconPosition == "top" ? generateCSSUnit(iconSpacing, iconSpacingType) : "",
		},
		" .premium-icon-list__content-icon": {
			"width": generateCSSUnit(size, sizeType),
			"height": generateCSSUnit(size, sizeType)
		},
		" .premium-icon-list__content-icon i": {
			"width": generateCSSUnit(size, sizeType),
			"height": generateCSSUnit(size, sizeType),
			"font-size": generateCSSUnit(size, sizeType)
		},
		" .premium-icon-list__content-icon:before": {
			"width": generateCSSUnit(size, sizeType),
			"height": generateCSSUnit(size, sizeType),
			"font-size": generateCSSUnit(size, sizeType)
		}
	}

	mobile_selectors = {
		" .premium-icon-list__icon-wrap img": {
			"width": generateCSSUnit(sizeMobile, sizeType)
		},
		" .premium-icon-list__icon-wrap": {
			"padding": generateCSSUnit(iconPaddingMobile, iconPaddingType),
			"margin-right": iconPosition == "left" ? generateCSSUnit(iconSpacingMobile, iconSpacingType) : "",
			"margin-left": iconPosition == "right" ? generateCSSUnit(iconSpacingMobile, iconSpacingType) : "",
			"margin-bottom": iconPosition == "top" ? generateCSSUnit(iconSpacingMobile, iconSpacingType) : "",
		},
		" .premium-icon-list__content-icon": {
			"width": generateCSSUnit(sizeMobile, sizeType),
			"height": generateCSSUnit(sizeMobile, sizeType),
		},
		" .premium-icon-list__content-icon i": {
			"width": generateCSSUnit(sizeMobile, sizeType),
			"height": generateCSSUnit(sizeMobile, sizeType),
			"font-size": generateCSSUnit(sizeMobile, sizeType)
		},
		" .premium-icon-list__content-icon:before": {
			"width": generateCSSUnit(sizeMobile, sizeType),
			"height": generateCSSUnit(sizeMobile, sizeType),
			"font-size": generateCSSUnit(sizeMobile, sizeType)
		},
	}

	tablet_selectors = {
		" .premium-icon-list__icon-wrap img": {
			"width": generateCSSUnit(sizeTablet, sizeType)
		},
		" .premium-icon-list__icon-wrap": {
			"padding": generateCSSUnit(iconPaddingTablet, iconPaddingType),
			"margin-right": iconPosition == "left" ? generateCSSUnit(iconSpacingTablet, iconSpacingType) : "",
			"margin-left": iconPosition == "right" ? generateCSSUnit(iconSpacingTablet, iconSpacingType) : "",
			"margin-bottom": iconPosition == "top" ? generateCSSUnit(iconSpacingTablet, iconSpacingType) : "",
		},
		" .premium-icon-list__content-icon": {
			"width": generateCSSUnit(sizeTablet, sizeType),
			"height": generateCSSUnit(sizeTablet, sizeType)
		},
		" .premium-icon-list__content-icon i": {
			"width": generateCSSUnit(sizeTablet, sizeType),
			"height": generateCSSUnit(sizeTablet, sizeType),
			"font-size": generateCSSUnit(sizeTablet, sizeType)
		},
		" .premium-icon-list__content-icon:before": {
			"width": generateCSSUnit(sizeTablet, sizeType),
			"height": generateCSSUnit(sizeTablet, sizeType),
			"font-size": generateCSSUnit(sizeTablet, sizeType)
		}
	}

	icons.map((icon, index) => {

		if (multiTitleCount <= index) {
			return
		}

		selectors[" .premium-icon-list-content" + index + " .premium-icon-list__content-icon"] = {
			"color": icon.icon_color
		}

		selectors[" .premium-icon-list-content" + index + " .premium-icon-list__content-icon i"] = {
			"fill": icon.icon_color
		}

		selectors[" .premium-icon-list-content" + index + ":hover .premium-icon-list__content-icon"] = {
			"color": icon.icon_hover_color
		}

		selectors[" .premium-icon-list-content" + index + ":hover .premium-icon-list__content-icon i"] = {
			"fill": icon.icon_hover_color
		}

		selectors[" .premium-icon-list-content" + index + " .premium-icon-list__label"] = {
			"color": icon.label_color,
			"font-size": generateCSSUnit(fontSize, fontSizeType),
		}

		selectors[" .premium-icon-list-content" + index + ":hover .premium-icon-list__label"] = {
			"color": icon.label_hover_color,
		}

		selectors[" .premium-icon-list-content" + index + ":hover .premium-icon-list__content-wrap"] = {
			"background": icon.item_bg_hover_color,
		}

		selectors[" .premium-icon-list-content" + index + " .premium-icon-list__icon-wrap"] = {
			"background": icon.icon_bg_color
		}

		selectors[" .premium-icon-list-content" + index + ":hover .premium-icon-list__icon-wrap"] = {
			"background": icon.icon_bg_hover_color
		}
		// item Padding
		selectors[" .premium-icon-list-content" + index] = {
			"padding": generateCSSUnit(titlePadding, titlePaddingType),
		}

		mobile_selectors[" .premium-icon-list-content" + index] = {
			"padding": generateCSSUnit(titlePaddingMobile, titlePaddingType),
		}

		tablet_selectors[" .premium-icon-list-content" + index] = {
			"padding": generateCSSUnit(titlePaddingTablet, titlePaddingType),
		}

		mobile_selectors[" .premium-icon-list-content" + index + " .premium-icon-list__label"] = {
			"font-size": generateCSSUnit(fontSizeMobile, fontSizeType),
		}

		tablet_selectors[" .premium-icon-list-content" + index + " .premium-icon-list__label"] = {
			"font-size": generateCSSUnit(fontSizeTablet, fontSizeType),
		}
		//margins for Items
		selectors[" .premium-icon-list-content" + index + " .premium-icon-list__content-wrap"] = {
			"background": icon.item_bg_color,
			"margin-top": layoutPos == 'block' ? generateCSSUnit(marginTop, marginTopType) : "",
			"margin-bottom": layoutPos == 'block' ? generateCSSUnit(marginBottom, marginBottomType) : "",
			"margin-right": layoutPos == 'block' ? "" : generateCSSUnit(marginRight, marginRightType),
			"margin-left": layoutPos == 'block' ? "" : generateCSSUnit(marginLeft, marginLeftType),
		}

		mobile_selectors[" .premium-icon-list-content" + index + " .premium-icon-list__content-wrap"] = {
			"margin-top": layoutPos == 'block' ? generateCSSUnit(marginTopMobile, marginTopType) : "",
			"margin-top": layoutPos == 'block' ? generateCSSUnit(marginBottomMobile, marginBottomType) : "",
			"margin-right": layoutPos == 'block' ? "" : generateCSSUnit(marginRightMobile, marginRightType),
			"margin-left": layoutPos == 'block' ? "" : generateCSSUnit(marginLeftMobile, marginLeftType),
		}

		tablet_selectors[" .premium-icon-list-content" + index + " .premium-icon-list__content-wrap"] = {
			"margin-top": layoutPos == 'block' ? generateCSSUnit(marginTopTablet, marginTopType) : "",
			"margin-top": layoutPos == 'block' ? generateCSSUnit(marginBottomTablet, marginBottomType) : "",
			"margin-right": layoutPos == 'block' ? "" : generateCSSUnit(marginRightTablet, marginRightType),
			"margin-left": layoutPos == 'block' ? "" : generateCSSUnit(marginLeftTablet, marginLeftType),
		}

	})


	var styling_css = ""
	var id = `#premium-icon-list-${props.clientId}`
	if (classMigrate) {
		id = `.premium-block-${props.clientId}`
	}

	styling_css = generateCSS(selectors, id)
	styling_css += generateCSS(tablet_selectors, id, true, "tablet")

	styling_css += generateCSS(mobile_selectors, id, true, "mobile")

	return styling_css
}

export default styling