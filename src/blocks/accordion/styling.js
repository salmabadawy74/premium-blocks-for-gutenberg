import generateCSS from '../../../assets/js/blocks/generateCss';

function styling(props) {
    const {
        accordionId,
        classMigrate,
        block_id,
        titlePaddingT,
        titlePaddingR,
        titlePaddingB,
        titlePaddingL,
        titlePaddingTTablet,
        titlePaddingRTablet,
        titlePaddingBTablet,
        titlePaddingLTablet,
        titlePaddingTMobile,
        titlePaddingRMobile,
        titlePaddingBMobile,
        titlePaddingLMobile,
        arrowPaddingT,
        arrowPaddingR,
        arrowPaddingB,
        arrowPaddingL,
        arrowPaddingTTablet,
        arrowPaddingRTablet,
        arrowPaddingBTablet,
        arrowPaddingLTablet,
        arrowPaddingTMobile,
        arrowPaddingRMobile,
        arrowPaddingBMobile,
        arrowPaddingLMobile,
        descPaddingT,
        descPaddingR,
        descPaddingB,
        descPaddingL,
        descPaddingTTablet,
        descPaddingRTablet,
        descPaddingBTablet,
        descPaddingLTablet,
        descPaddingTMobile,
        descPaddingRMobile,
        descPaddingBMobile,
        descPaddingLMobile
    } = props.attributes
    console.log(arrowPaddingT, titlePaddingT, descPaddingT)
    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-accordion__icon_wrap": {
            "padding-top": `${arrowPaddingT}px`,
            "padding-right": `${arrowPaddingR}px`,
            "padding-bottom": `${arrowPaddingB}px`,
            "padding-left": `${arrowPaddingL}px`,
        },
        " .premium-accordion__title_wrap": {
            "padding-top": `${titlePaddingT}px`,
            "padding-right": `${titlePaddingR}px`,
            "padding-bottom": `${titlePaddingB}px`,
            "padding-left": `${titlePaddingL}px`,
        },
        " .premium-accordion__desc_wrap": {
            "padding-top": `${descPaddingT}px`,
            "padding-right": `${descPaddingR}px`,
            "padding-bottom": `${descPaddingB}px`,
            "padding-left": `${descPaddingL}px`,
        }


    }

    tablet_selectors = {
        " .premium-accordion__icon_wrap": {
            "padding-top": `${arrowPaddingTTablet}px`,
            "padding-right": `${arrowPaddingRTablet}px`,
            "padding-bottom": `${arrowPaddingBTablet}px`,
            "padding-left": `${arrowPaddingLTablet}px`,
        },
        " .premium-accordion__title_wrap": {
            "padding-top": `${titlePaddingTTablet}px`,
            "padding-right": `${titlePaddingRTablet}px`,
            "padding-bottom": `${titlePaddingBTablet}px`,
            "padding-left": `${titlePaddingLTablet}px`,
        },
        " .premium-accordion__desc_wrap": {
            "padding-top": `${descPaddingTTablet}px`,
            "padding-right": `${descPaddingRTablet}px`,
            "padding-bottom": `${descPaddingBTablet}px`,
            "padding-left": `${descPaddingLTablet}px`,
        }


    }

    mobile_selectors = {
        " .premium-accordion__icon_wrap": {
            "padding-top": `${arrowPaddingTMobile}px`,
            "padding-right": `${arrowPaddingRMobile}px`,
            "padding-bottom": `${arrowPaddingBMobile}px`,
            "padding-left": `${arrowPaddingLMobile}px`,
        },
        " .premium-accordion__title_wrap": {
            "padding-top": `${titlePaddingTMobile}px`,
            "padding-right": `${titlePaddingRMobile}px`,
            "padding-bottom": `${titlePaddingBMobile}px`,
            "padding-left": `${titlePaddingLMobile}px`,
        },
        " .premium-accordion__desc_wrap": {
            "padding-top": `${descPaddingTMobile}px`,
            "padding-right": `${descPaddingRMobile}px`,
            "padding-bottom": `${descPaddingBMobile}px`,
            "padding-left": `${descPaddingLMobile}px`,
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