import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling ( props ) {
    const {
        block_id,
        classMigrate,
        accordionId,
        titleSizeUnit,
        titleSize,
        titleSizeTablet,
        titleSizeMobile,
        descSizeUnit,
        descSize,
        descSizeTablet,
        descSizeMobile,
     
    } = props.attributes
    
    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-accordion__title": {
           "font-size" : generateCSSUnit(titleSize,titleSizeUnit),
        },
        " .premium-accordion__desc": {
            "font-size" :generateCSSUnit(descSize,descSizeUnit)
        }
    }

    tablet_selectors = {
        " .premium-accordion__title ": {
            "font-size" :generateCSSUnit(titleSizeTablet,titleSizeUnit),
        },
        " .premium-accordion__desc": {
            "font-size" :generateCSSUnit(descSizeTablet,descSizeUnit)
        }
    }

    mobile_selectors = {
        " .premium-accordion__title": {
            "font-size" : generateCSSUnit(titleSizeMobile,titleSizeUnit),
        },
        " .premium-accordion__desc": {
            "font-size" :generateCSSUnit(descSizeMobile,descSizeUnit)
        }
    }

    var styling_css = ""
    var id = `#${accordionId}`
    if (classMigrate) {
        id = `.premium-accordion-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling