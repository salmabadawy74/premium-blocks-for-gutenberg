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
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	selectors = {
		" .premium-icon-list__icon-wrap img": {
			"width": generateCSSUnit(size, sizeType)
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
			"background": icon.item_bg_color,
			"font-size": generateCSSUnit(fontSize, fontSizeType),
		}

		selectors[" .premium-icon-list-content" + index + ":hover .premium-icon-list__label"] = {
			"color": icon.label_hover_color,
			"background": icon.item_bg_hover_color,
		}
		selectors[" .premium-icon-list-content" + index + " .premium-icon-list__icon-wrap"] = {
			"background": icon.icon_bg_color
		}

		selectors[" .premium-icon-list-content" + index + ":hover .premium-icon-list__icon-wrap"] = {
			"background": icon.icon_bg_hover_color
		}

		mobile_selectors[" .premium-icon-list-content" + index + " .premium-icon-list__label"] = {
			"font-size": generateCSSUnit(fontSizeMobile, fontSizeType),
		}

		tablet_selectors[" .premium-icon-list-content" + index + " .premium-icon-list__label"] = {
			"font-size": generateCSSUnit(fontSizeTablet, fontSizeType),
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