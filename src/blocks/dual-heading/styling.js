import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {

    const {
        block_id,
        classMigrate,
        firstSize,
        firstSizeUnit,
        firstSizeTablet,
        firstSizeMobile,
        secondSize,
        secondSizeUnit,
        secondSizeTablet,
        secondSizeMobile,
        firstPadding,
        secondPadding,
        firstPaddingT,
        firstPaddingR,
        firstPaddingB,
        firstPaddingL,
        firstPaddingTTablet,
        firstPaddingRTablet,
        firstPaddingBTablet,
        firstPaddingLTablet,
        firstPaddingTMobile,
        firstPaddingRMobile,
        firstPaddingBMobile,
        firstPaddingLMobile,
        secondPaddingT,
        secondPaddingR,
        secondPaddingB,
        secondPaddingL,
        secondPaddingTTablet,
        secondPaddingRTablet,
        secondPaddingBTablet,
        secondPaddingLTablet,
        secondPaddingTMobile,
        secondPaddingRMobile,
        secondPaddingBMobile,
        secondPaddingLMobile,
        firstMarginR,
        firstMarginL,
        firstMarginRTablet,
        firstMarginLTablet,
        firstMarginRMobile,
        firstMarginLMobile,
        secondMarginL,
        secondMarginR,
        secondMarginLTablet,
        secondMarginRTablet,
        secondMarginLMobile,
        secondMarginRMobile,
        firstPadUpdate,
        secondPadUpdate
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-dheading-block__first": {
            "font-size": generateCSSUnit(firstSize, firstSizeUnit),
            "padding": firstPadUpdate ? `${firstPaddingT}px ${firstPaddingR}px ${firstPaddingB}px ${firstPaddingL}px` : `${firstPadding}px`,
            "margin-right": `${firstMarginR}px`,
            "margin-left": `${firstMarginL} px`

        },
        " .premium-dheading-block__second": {
            'font-size': generateCSSUnit(secondSize, secondSizeUnit),
            "padding": secondPadUpdate ? `${secondPaddingT}px ${secondPaddingR}px ${secondPaddingB}px ${secondPaddingL}px` : `${secondPadding}px`,
            "margin-right": `${secondMarginR}px`,
            "margin-left": `${secondMarginL} px`
        }
    }
    tablet_selectors = {
        " .premium-dheading-block__first": {
            "font-size": generateCSSUnit(firstSizeTablet, firstSizeUnit),
            "padding": firstPadUpdate ? `${firstPaddingTTablet}px ${firstPaddingRTablet}px ${firstPaddingBTablet}px ${firstPaddingLTablet}px` : `${firstPadding}px`,

            "margin-right": `${firstMarginRTablet}px`,
            "margin-left": `${firstMarginLTablet} px`
        },
        " .premium-dheading-block__second": {
            'font-size': generateCSSUnit(secondSizeTablet, secondSizeUnit),
            "padding": secondPadUpdate ? `${secondPaddingTTablet}px ${secondPaddingRTablet}px ${secondPaddingBTablet}px ${secondPaddingLTablet}px` : `${secondPadding}px`,
            "margin-right": `${secondMarginRTablet}px`,
            "margin-left": `${secondMarginLTablet} px`
        }
    }
    mobile_selectors = {
        " .premium-dheading-block__first": {
            "font-size": generateCSSUnit(firstSizeMobile, firstSizeUnit),
            "padding": firstPadUpdate ? `${firstPaddingTMobile}px ${firstPaddingRMobile}px ${firstPaddingBMobile}px ${firstPaddingLMobile}px` : `${firstPadding}px`,

            "margin-right": `${firstMarginRMobile}px`,
            "margin-left": `${firstMarginLMobile} px`
        },
        " .premium-dheading-block__second": {
            'font-size': generateCSSUnit(secondSizeMobile, secondSizeUnit),
            "padding": secondPadUpdate ? `${secondPaddingTMobile}px ${secondPaddingRMobile}px ${secondPaddingBMobile}px ${secondPaddingLMobile}px` : `${secondPadding}px`,

            "margin-right": `${secondMarginRMobile}px`,
            "margin-left": `${secondMarginLMobile} px`
        }
    }

    var styling_css = ""
    var id = `#premium-dheading-block-${block_id}`
    if (classMigrate) {
        id = `.premium-dheading-${block_id}`
    }

    styling_css = generateCSS(selectors, id)

    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling;