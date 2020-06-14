import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

	const {
		classMigrate,
		repeaterAccordion,
    index,
    ImgId
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	selectors = {
	
	}

	mobile_selectors = {
		
	}

	tablet_selectors = {
		
	}

	repeaterAccordion.map((item, index) => {

		selectors[" .premium-accordion-li" + index + " .premium-accordion-background"] = {
      "background-image": `url(" ${item.ImgUrl.url} ")`,
      "background-size": item.size === 'custom'? "100% auto" :item.size,
      "background-position": item.position,
      "background-repeat": item.repeat
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