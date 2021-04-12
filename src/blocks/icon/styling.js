import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling(props) {

    const {
        classMigrate,
        block_id,
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
        wrapPaddingT,
        wrapPaddingR,
        wrapPaddingB,
        wrapPaddingL,
        wrapPaddingTTablet,
        wrapPaddingRTablet,
        wrapPaddingBTablet,
        wrapPaddingLTablet,
        wrapPaddingTMobile,
        wrapPaddingRMobile,
        wrapPaddingBMobile,
        wrapPaddingLMobile,

    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-icon": {

            "padding-top": generateCSSUnit(paddingT, paddingU),
            "padding-right": generateCSSUnit(paddingR, paddingU),
            "padding-bottom": generateCSSUnit(paddingB, paddingU),
            "padding-left": generateCSSUnit(paddingL, paddingU),
        },
        " ": {
            "padding-top": generateCSSUnit(wrapPaddingT, 'px'),
            "padding-right": generateCSSUnit(wrapPaddingR, 'px'),
            "padding-bottom": generateCSSUnit(wrapPaddingB, 'px'),
            "padding-left": generateCSSUnit(wrapPaddingL, 'px'),
        }
    }

    tablet_selectors = {
        " .premium-icon": {

            "padding-top": generateCSSUnit(paddingTTablet, paddingU),
            "padding-right": generateCSSUnit(paddingRTablet, paddingU),
            "padding-bottom": generateCSSUnit(paddingBTablet, paddingU),
            "padding-left": generateCSSUnit(paddingLTablet, paddingU),
        },
        " ": {
            "padding-top": generateCSSUnit(wrapPaddingTTablet, 'px'),
            "padding-right": generateCSSUnit(wrapPaddingRTablet, 'px'),
            "padding-bottom": generateCSSUnit(wrapPaddingBTablet, 'px'),
            "padding-left": generateCSSUnit(wrapPaddingLTablet, 'px'),
        }
    }

    mobile_selectors = {
        " .premium-icon": {

            "padding-top": generateCSSUnit(paddingTMobile, paddingU),
            "padding-right": generateCSSUnit(paddingRMobile, paddingU),
            "padding-bottom": generateCSSUnit(paddingBMobile, paddingU),
            "padding-left": generateCSSUnit(paddingLMobile, paddingU),
        },
        " ": {
            "padding-top": generateCSSUnit(wrapPaddingTMobile, 'px'),
            "padding-right": generateCSSUnit(wrapPaddingRMobile, 'px'),
            "padding-bottom": generateCSSUnit(wrapPaddingBMobile, 'px'),
            "padding-left": generateCSSUnit(wrapPaddingLMobile, 'px'),
        }
    }

    var styling_css = ""
    var id = `#premium-icon-${block_id}`
    if (classMigrate) {
        id = `.premium-icon-${block_id}`
    }

    styling_css = generateCSS(selectors, id)

    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css


}

export default styling;