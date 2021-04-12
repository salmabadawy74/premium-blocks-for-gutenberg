import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling(props) {
    const {
        block_id,
        classMigrate,
        titleSizeUnit,
        descSizeUnit,
        descSize,
        descSizeTablet,
        descSizeMobile,
        titleSize,
        titleSizeTablet,
        titleSizeMobile,
        btnSizeUnit,
        btnSize,
        btnSizeTablet,
        btnSizeMobile,
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
        btnPaddingU,
        btnPaddingT,
        btnPaddingR,
        btnPaddingB,
        btnPaddingL,
        btnPaddingTTablet,
        btnPaddingRTablet,
        btnPaddingBTablet,
        btnPaddingLTablet,
        btnPaddingTMobile,
        btnPaddingRMobile,
        btnPaddingBMobile,
        btnPaddingLMobile
    } = props.attributes;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingT, paddingU),
            "padding-right": generateCSSUnit(paddingR, paddingU),
            "padding-bottom": generateCSSUnit(paddingB, paddingU),
            "padding-left": generateCSSUnit(paddingL, paddingU)
        },
        " .premium-icon-box__title_wrap .premium-icon-box__title ": {
            "font-size": generateCSSUnit(titleSize, titleSizeUnit)
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit(descSize, descSizeUnit)
        },
        " .premium-icon-box__btn": {
            "font-size": generateCSSUnit(btnSize, btnSizeUnit),
            "padding-top": generateCSSUnit(btnPaddingT, btnPaddingU),
            "padding-right": generateCSSUnit(btnPaddingR, btnPaddingU),
            "padding-bottom": generateCSSUnit(btnPaddingB, btnPaddingU),
            "padding-left": generateCSSUnit(btnPaddingL, btnPaddingU)
        }
    }

    tablet_selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTTablet, paddingU),
            "padding-right": generateCSSUnit(paddingRTablet, paddingU),
            "padding-bottom": generateCSSUnit(paddingBTablet, paddingU),
            "padding-left": generateCSSUnit(paddingLTablet, paddingU)
        },
        " .premium-icon-box__title_wrap .premium-icon-box__title ": {
            "font-size": generateCSSUnit(titleSizeTablet, titleSizeUnit)
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit(descSizeTablet, descSizeUnit)
        },
        " .premium-icon-box__btn": {
            "font-size": generateCSSUnit(btnSizeTablet, btnSizeUnit),
            "padding-top": generateCSSUnit(btnPaddingTTablet, btnPaddingU),
            "padding-right": generateCSSUnit(btnPaddingRTablet, btnPaddingU),
            "padding-bottom": generateCSSUnit(btnPaddingBTablet, btnPaddingU),
            "padding-left": generateCSSUnit(btnPaddingLTablet, btnPaddingU)
        }
    }

    mobile_selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTMobile, paddingU),
            "padding-right": generateCSSUnit(paddingRMobile, paddingU),
            "padding-bottom": generateCSSUnit(paddingBMobile, paddingU),
            "padding-left": generateCSSUnit(paddingLMobile, paddingU)
        },
        " .premium-icon-box__title_wrap .premium-icon-box__title ": {
            "font-size": generateCSSUnit(titleSizeMobile, titleSizeUnit)
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit(descSizeMobile, descSizeUnit)
        },
        " .premium-icon-box__btn": {
            "font-size": generateCSSUnit(btnSizeMobile, btnSizeUnit),
            "padding-top": generateCSSUnit(btnPaddingTMobile, btnPaddingU),
            "padding-right": generateCSSUnit(btnPaddingRMobile, btnPaddingU),
            "padding-bottom": generateCSSUnit(btnPaddingBMobile, btnPaddingU),
            "padding-left": generateCSSUnit(btnPaddingLMobile, btnPaddingU)
        }
    }

    let styling_css = ''
    let id = `#premium-icon-box-${block_id}`
    if (classMigrate) {
        id = `.premium-icon-box-${block_id}`
    }


    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling