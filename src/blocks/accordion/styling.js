import generateCSS from '../../../assets/js/blocks/generateCss';

function styling ( props ) {
    const {
        classMigrate,
        accordionId,
        titleSize,
        titleSizeTablet,
        titleSizeMobile,
        descSize,
        descSizeTablet,
        descSizeMobile
    } = props.attributes
    
    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-accordion__title": {
           "font-size" : titleSize +'px',
        },
        " .premium-accordion__desc": {
            "font-size" : descSize + "px"
        }
    }

    tablet_selectors = {
        " .premium-accordion__title": {
            "font-size" : titleSizeTablet +'px',
        },
        " .premium-accordion__desc": {
            "font-size" : descSizeTablet + "px"
        }
    }

    mobile_selectors = {
        " .premium-accordion__title": {
            "font-size" : titleSizeMobile +'px',
        },
        " .premium-accordion__desc": {
            "font-size" : descSizeMobile + "px"
        }
    }

    var styling_css = ""
    var id = `.${accordionId}`
    if (classMigrate) {
        id = `#${ accordionId }`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling