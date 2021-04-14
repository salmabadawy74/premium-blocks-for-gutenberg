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
        wrapMarginT,
        wrapMarginR,
        wrapMarginB,
        wrapMarginL,
        wrapMarginTTablet,
        wrapMarginRTablet,
        wrapMarginBTablet,
        wrapMarginLTablet,
        wrapMarginTMobile,
        wrapMarginRMobile,
        wrapMarginBMobile,
        wrapMarginLMobile,
        marginT,
        marginR,
        marginB,
        marginL,
        marginTTablet,
        marginRTablet,
        marginBTablet,
        marginLTablet,
        marginTMobile,
        marginRMobile,
        marginBMobile,
        marginLMobile,
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
            "margin-top": generateCSSUnit(marginT, 'px'),
            "margin-right": generateCSSUnit(marginR, 'px'),
            "margin-bottom": generateCSSUnit(marginB, 'px'),
            "margin-left": generateCSSUnit(marginL, 'px'),
        },
        " ": {
            "padding-top": generateCSSUnit(wrapPaddingT, 'px'),
            "padding-right": generateCSSUnit(wrapPaddingR, 'px'),
            "padding-bottom": generateCSSUnit(wrapPaddingB, 'px'),
            "padding-left": generateCSSUnit(wrapPaddingL, 'px'),
            "margin-top": generateCSSUnit(wrapMarginT, 'px'),
            "margin-right": generateCSSUnit(wrapMarginR, 'px'),
            "margin-bottom": generateCSSUnit(wrapMarginB, 'px'),
            "margin-left": generateCSSUnit(wrapMarginL, 'px'),
        }
    }

    tablet_selectors = {
        " .premium-icon": {

            "padding-top": generateCSSUnit(paddingTTablet, paddingU),
            "padding-right": generateCSSUnit(paddingRTablet, paddingU),
            "padding-bottom": generateCSSUnit(paddingBTablet, paddingU),
            "padding-left": generateCSSUnit(paddingLTablet, paddingU),
            "margin-top": generateCSSUnit(marginTTablet, 'px'),
            "margin-right": generateCSSUnit(marginRTablet, 'px'),
            "margin-bottom": generateCSSUnit(marginBTablet, 'px'),
            "margin-left": generateCSSUnit(marginLTablet, 'px'),
        },
        " ": {
            "padding-top": generateCSSUnit(wrapPaddingTTablet, 'px'),
            "padding-right": generateCSSUnit(wrapPaddingRTablet, 'px'),
            "padding-bottom": generateCSSUnit(wrapPaddingBTablet, 'px'),
            "padding-left": generateCSSUnit(wrapPaddingLTablet, 'px'),
            "margin-top": generateCSSUnit(wrapMarginTTablet, 'px'),
            "margin-right": generateCSSUnit(wrapMarginRTablet, 'px'),
            "margin-bottom": generateCSSUnit(wrapMarginBTablet, 'px'),
            "margin-left": generateCSSUnit(wrapMarginLTablet, 'px'),
        }
    }

    mobile_selectors = {
        " .premium-icon": {

            "padding-top": generateCSSUnit(paddingTMobile, paddingU),
            "padding-right": generateCSSUnit(paddingRMobile, paddingU),
            "padding-bottom": generateCSSUnit(paddingBMobile, paddingU),
            "padding-left": generateCSSUnit(paddingLMobile, paddingU),
            "margin-top": generateCSSUnit(marginTMobile, 'px'),
            "margin-right": generateCSSUnit(marginRMobile, 'px'),
            "margin-bottom": generateCSSUnit(marginBMobile, 'px'),
            "margin-left": generateCSSUnit(marginLMobile, 'px'),
        },
        " ": {
            "padding-top": generateCSSUnit(wrapPaddingTMobile, 'px'),
            "padding-right": generateCSSUnit(wrapPaddingRMobile, 'px'),
            "padding-bottom": generateCSSUnit(wrapPaddingBMobile, 'px'),
            "padding-left": generateCSSUnit(wrapPaddingLMobile, 'px'),
            "margin-top": generateCSSUnit(wrapMarginTMobile, 'px'),
            "margin-right": generateCSSUnit(wrapMarginRMobile, 'px'),
            "margin-bottom": generateCSSUnit(wrapMarginBMobile, 'px'),
            "margin-left": generateCSSUnit(wrapMarginLMobile, 'px'),
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