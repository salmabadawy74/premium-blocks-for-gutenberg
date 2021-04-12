import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling(props) {
    const {
        textSizeUnit,
        textSize,
        textSizeTablet,
        textSizeMobile,
        block_id,
        classMigrate,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        paddingTTablet,
        paddingRTablet,
        paddingBTablet,
        paddingLTablet,
        paddingTMobile,
        paddingRMobile,
        paddingBMobile,
        paddingLMobile,
        paddingU,
    } = props.attributes;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        " .premium-button": {
            "font-size": generateCSSUnit(textSize, textSizeUnit),
            "padding-top": generateCSSUnit(paddingT, paddingU),
            "padding-right": generateCSSUnit(paddingR, paddingU),
            "padding-bottom": generateCSSUnit(paddingB, paddingU),
            "padding-left": generateCSSUnit(paddingL, paddingU)
        }
    }
    tablet_selectors = {
        " .premium-button": {
            "font-size": generateCSSUnit(textSizeTablet, textSizeUnit),
            "padding-top": generateCSSUnit(paddingTTablet, paddingU),
            "padding-right": generateCSSUnit(paddingRTablet, paddingU),
            "padding-bottom": generateCSSUnit(paddingBTablet, paddingU),
            "padding-left": generateCSSUnit(paddingLTablet, paddingU)
        }
    }
    mobile_selectors = {
        " .premium-button": {
            "font-size": generateCSSUnit(textSizeMobile, textSizeUnit),
            "padding-top": generateCSSUnit(paddingTMobile, paddingU),
            "padding-right": generateCSSUnit(paddingRMobile, paddingU),
            "padding-bottom": generateCSSUnit(paddingBMobile, paddingU),
            "padding-left": generateCSSUnit(paddingLMobile, paddingU)
        }
    }

    let styling_css = ""
    var id = `#premium-button-wrap-${block_id}`
    if (classMigrate) {
        id = `.premium-button-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css


}
export default styling;