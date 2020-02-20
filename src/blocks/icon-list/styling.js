import generateCSS from './generateCss'
function styling(props) {

	const {
		multiTitleCount,
		classMigrate,
		icons
	} = props.attributes

	var selectors = {}

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
		}

		selectors[" .premium-icon-list-content" + index + ":hover .premium-icon-list__label"] = {
			"color": icon.label_hover_color
		}
		selectors[" .premium-icon-list-content" + index + " .premium-icon-list__icon-wrap"] = {
			"background": icon.icon_bg_color,
			"border-color": icon.icon_border_color
		}

		selectors[" .premium-icon-list-content" + index + ":hover .premium-icon-list__icon-wrap"] = {
			"background": icon.icon_bg_hover_color,
			"border-color": icon.icon_border_hover_color
		}
	})


	var styling_css = ""
	var id = `#premium-icon-list-${props.clientId}`
	if (classMigrate) {
		id = `.premium-block-${props.clientId}`
	}

	styling_css = generateCSS(selectors, id)


	return styling_css
}

export default styling