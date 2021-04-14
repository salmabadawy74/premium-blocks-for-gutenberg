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
        btnPaddingLMobile,
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
        titleMarginT,
        titleMarginB,
        titleMarginTTablet,
        titleMarginBTablet,
        titleMarginTMobile,
        titleMarginBMobile,
        descMarginT,
        descMarginB,
        descMarginTTablet,
        descMarginBTablet,
        descMarginTMobile,
        descMarginBMobile,
        btnMarginT,
        btnMarginB,
        btnMarginTTablet,
        btnMarginBTablet,
        btnMarginTMobile,
        btnMarginBMobile,
    } = props.attributes;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingT, paddingU),
            "padding-right": generateCSSUnit(paddingR, paddingU),
            "padding-bottom": generateCSSUnit(paddingB, paddingU),
            "padding-left": generateCSSUnit(paddingL, paddingU),
            "margin-top": `${marginT}px`,
            "margin-right": `${marginR}px`,
            "margin-bottom": `${marginB}px`,
            "margin-left": `${marginL}px`
        },
        " .premium-icon-box__title_wrap .premium-icon-box__title ": {
            "font-size": generateCSSUnit(titleSize, titleSizeUnit)
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit(descSize, descSizeUnit)
        },
        " .premium-icon-box__title_wrap  .premium-icon-box__title_wrap": {
            "margin-top": `${titleMarginT}px`,
            "margin-bottom": `${titleMarginB}px`,
        },
        " .premium-icon-box__desc_wrap": {
            "margin-top": `${descMarginT}px`,
            "margin-bottom": `${descMarginB}px`,
        },
        " .premium-icon-box__btn_wrap": {
            "margin-top": `${btnMarginT}px`,
            "margin-bottom": `${btnMarginB}px`,
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
            "padding-left": generateCSSUnit(paddingLTablet, paddingU),
            "margin-top": `${marginTTablet}px`,
            "margin-right": `${marginRTablet}px`,
            "margin-bottom": `${marginBTablet}px`,
            "margin-left": `${marginLTablet}px`
        },
        " .premium-icon-box__title_wrap .premium-icon-box__title ": {
            "font-size": generateCSSUnit(titleSizeTablet, titleSizeUnit)
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit(descSizeTablet, descSizeUnit)
        },
        " .premium-icon-box__title_wrap  .premium-icon-box__title_wrap": {
            "margin-top": `${titleMarginTTablet}px`,
            "margin-bottom": `${titleMarginBTablet}px`,
        },
        " .premium-icon-box__desc_wrap": {
            "margin-top": `${descMarginTTablet}px`,
            "margin-bottom": `${descMarginBTablet}px`,
        },
        " .premium-icon-box__btn_wrap": {
            "margin-top": `${btnMarginTTablet}px`,
            "margin-bottom": `${btnMarginBTablet}px`,
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
            "padding-left": generateCSSUnit(paddingLMobile, paddingU),
            "margin-top": `${marginTMobile}px`,
            "margin-right": `${marginRMobile}px`,
            "margin-bottom": `${marginBMobile}px`,
            "margin-left": `${marginLMobile}px`
        },
        " .premium-icon-box__title_wrap  .premium-icon-box__title_wrap": {
            "margin-top": `${titleMarginTMobile}px`,
            "margin-bottom": `${titleMarginBMobile}px`,
        },
        " .premium-icon-box__title_wrap .premium-icon-box__title ": {
            "font-size": generateCSSUnit(titleSizeMobile, titleSizeUnit)
        },
        " .premium-icon-box__desc_wrap": {
            "margin-top": `${descMarginTMobile}px`,
            "margin-bottom": `${descMarginBMobile}px`,
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit(descSizeMobile, descSizeUnit)
        },

        " .premium-icon-box__btn_wrap": {
            "margin-top": `${btnMarginTMobile}px`,
            "margin-bottom": `${btnMarginBMobile}px`,
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