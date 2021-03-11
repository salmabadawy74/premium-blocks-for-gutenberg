import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling ( props ) {

    const {
        classMigrate,
        id:block_id,
        titlefontSizeUnit,
        titleSize,
        titleSizeTablet,
        titleSizeMobile,
        descfontSizeUnit,
        descSize,
        descSizeTablet,
        descSizeMobile,
        btnfontSizeUnit,
        btnSize,
        btnSizeTablet,
        btnSizeMobile,
    } = props.attributes
    
    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-icon-box__title": {
            "font-size": generateCSSUnit( 30, titlefontSizeUnit )
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit( descSize, descfontSizeUnit )
        },
        " .premium-icon-box__btn": {
            "font-size": generateCSSUnit( btnSize, btnfontSizeUnit )
        }
    }

    tablet_selectors = {
        " .premium-icon-box__title": {
            "font-size": generateCSSUnit( titleSizeTablet, titlefontSizeUnit )
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit( descSizeTablet, descfontSizeUnit )
        },
        " .premium-icon-box__btn": {
            "font-size": generateCSSUnit( btnSizeTablet, btnfontSizeUnit )
        }
    }

    mobile_selectors = {
        " .premium-icon-box__title": {
            "font-size": generateCSSUnit( titleSizeMobile, titlefontSizeUnit )
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit( descSizeMobile, descfontSizeUnit )
        },
        " .premium-icon-box__btn": {
            "font-size": generateCSSUnit( btnSizeMobile, btnfontSizeUnit )
        }
    }

    var styling_css = ""
    var id = `#premium-icon-box-${ block_id }`
    if (classMigrate) {
        id = `.premium-icon-box`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")
    
console.log(styling_css)
    return styling_css

}
export default styling