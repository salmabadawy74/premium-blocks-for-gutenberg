import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling(props) {
    const {
        titleSizeUnit,
        titleSize,
        titleSizeTablet,
        titleSizeMobile,
        descSizeUnit,
        descSize,
        descSizeTablet,
        descSizeMobile,
        block_id,
        classMigrate,
        paddingB,
        paddingT,
        paddingR,
        paddingL,
        paddingBTablet,
        paddingTTablet,
        paddingRTablet,
        paddingLTablet,
        paddingBMobile,
        paddingTMobile,
        paddingRMobile,
        paddingLMobile,
        paddingU,
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingT, paddingU),
            "padding-right": generateCSSUnit(paddingR, paddingU),
            "padding-bottom": generateCSSUnit(paddingB, paddingU),
            "padding-left": generateCSSUnit(paddingL, paddingU)
        },
        " .premium-banner__title_wrap .premium-banner__title": {
            "font-size": generateCSSUnit(titleSize, titleSizeUnit)
        },
        " .premium-banner__desc": {
            "font-size": generateCSSUnit(descSize, descSizeUnit)
        }
    }
    tablet_selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTTablet, paddingU),
            "padding-right": generateCSSUnit(paddingRTablet, paddingU),
            "padding-bottom": generateCSSUnit(paddingBTablet, paddingU),
            "padding-left": generateCSSUnit(paddingLTablet, paddingU)
        },
        " .premium-banner__title_wrap .premium-banner__title": {
            "font-size": generateCSSUnit(titleSizeTablet, titleSizeUnit)
        },
        " .premium-banner__desc": {
            "font-size": generateCSSUnit(descSizeTablet, descSizeUnit)
        }
    }
    mobile_selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTMobile, paddingU),
            "padding-right": generateCSSUnit(paddingRMobile, paddingU),
            "padding-bottom": generateCSSUnit(paddingBMobile, paddingU),
            "padding-left": generateCSSUnit(paddingLMobile, paddingU)
        },
        " .premium-banner__title_wrap .premium-banner__title": {
            "font-size": generateCSSUnit(titleSizeMobile, titleSizeUnit)
        },
        " .premium-banner__desc": {
            "font-size": generateCSSUnit(descSizeMobile, descSizeUnit)
        }
    }

    var styling_css = ""
    var id = `#premium-banner-${block_id}`
    if (classMigrate) {
        id = `.premium-banner-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling;