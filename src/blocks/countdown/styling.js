import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling(props) {
    const {
        block_id,
        classMigrate,
        digitSizeUnit,
        digitSize,
        digitSizeMobile,
        digitSizeTablet,
        backgroundSize,
        backgroundSizeMobile,
        backgroundSizeTablet,
        unitSizeUnit,
        unitSize,
        unitSizeMobile,
        unitSizeTablet,
        marginType,
        paddingType,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        marginTopTablet,
        marginRightTablet,
        marginBottomTablet,
        marginLeftTablet,
        marginTopMobile,
        marginRightMobile,
        marginBottomMobile,
        marginLeftMobile,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        paddingTopTablet,
        paddingRightTablet,
        paddingBottomTablet,
        paddingLeftTablet,
        paddingTopMobile,
        paddingRightMobile,
        paddingBottomMobile,
        paddingLeftMobile,
        expireColor,
        expireBG,
        textSizeUnit,
        textSize,
        textSizeTablet,
        textSizeMobile,
        textWeight,
        textStyle,
        textLetter,
        textUpper,
        textLine,
        textBorderType,
        textBorderTop,
        textBorderRight,
        textBorderBottom,
        textBorderLeft,
        textBorderColor,
        textBorderRadius,
        textShadowColor,
        textShadowBlur,
        textShadowHorizontal,
        textShadowVertical,
        textShadowPosition,
        textMarginType,
        textMarginTop,
        textMarginRight,
        textMarginBottom,
        textMarginLeft,
        textMarginTopTablet,
        textMarginRightTablet,
        textMarginBottomTablet,
        textMarginLeftTablet,
        textMarginTopMobile,
        textMarginRightMobile,
        textMarginBottomMobile,
        textMarginLeftMobile,
        textPaddingTop,
        textPaddingRight,
        textPaddingBottom,
        textPaddingLeft,
        textPaddingTopTablet,
        textPaddingRightTablet,
        textPaddingBottomTablet,
        textPaddingLeftTablet,
        textPaddingTopMobile,
        textPaddingRightMobile,
        textPaddingBottomMobile,
        textPaddingLeftMobile,
        textPaddingType,
    } = props.attributes;

    let selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTop, paddingType),
            "padding-right": generateCSSUnit(paddingRight, paddingType),
            "padding-bottom": generateCSSUnit(paddingBottom, paddingType),
            "padding-left": generateCSSUnit(paddingLeft, paddingType),
            "margin-top": generateCSSUnit(marginTop, marginType),
            "margin-right": generateCSSUnit(marginRight, marginType),
            "margin-bottom": generateCSSUnit(marginBottom, marginType),
            "margin-left": generateCSSUnit(marginLeft, marginType),
        },
        " .pre_countdown-amount": {
            "font-size": generateCSSUnit(digitSize, digitSizeUnit) + "!important",
            "padding": generateCSSUnit(backgroundSize, "px")
        },
        " .pre_countdown-period": {
            "font-size": generateCSSUnit(unitSize, unitSizeUnit) + "!important"
        },
        " .premium-countdown-exp-message": {
            "color": expireColor,
            "background-color": expireBG,
            "font-size": generateCSSUnit(textSize, textSizeUnit),
            "font-weight": textWeight,
            "font-style": textStyle,
            "letter-space": textLetter,
            "line-height": textLine,
            "text-transform": textUpper ? "upperCase" : "none",
            "border-style": textBorderType,
            "border-width": `${textBorderTop}px ${textBorderRight}px ${textBorderBottom}px ${textBorderLeft}px`,
            "border-radius": `${textBorderRadius}px`,
            "margin-top": generateCSSUnit(textMarginTop, textMarginType),
            "margin-right": generateCSSUnit(textMarginRight, textMarginType),
            "margin-bottom": generateCSSUnit(textMarginBottom, textMarginType),
            "margin-left": generateCSSUnit(textMarginLeft, textMarginType),
            "padding-top": generateCSSUnit(textPaddingTop, textPaddingType),
            "padding-right": generateCSSUnit(textPaddingRight, textPaddingType),
            "padding-bottom": generateCSSUnit(textPaddingBottom, textPaddingType),
            "padding-left": generateCSSUnit(textPaddingLeft, textPaddingType),
            "box-shadow": `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColor} ${textShadowPosition}`
        }
    }
    let tablet_selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTopTablet, paddingType),
            "padding-right": generateCSSUnit(paddingRightTablet, paddingType),
            "padding-bottom": generateCSSUnit(paddingBottomTablet, paddingType),
            "padding-left": generateCSSUnit(paddingLeftTablet, paddingType),
            "margin-top": generateCSSUnit(marginTopTablet, marginType),
            "margin-right": generateCSSUnit(marginRightTablet, marginType),
            "margin-bottom": generateCSSUnit(marginBottomTablet, marginType),
            "margin-left": generateCSSUnit(marginLeftTablet, marginType),
        },
        " .pre_countdown-amount": {
            "font-size": generateCSSUnit(digitSizeTablet, digitSizeUnit),
            "padding": generateCSSUnit(backgroundSizeTablet, "px")
        },
        " .pre_countdown-period": {
            "font-size": generateCSSUnit(unitSizeTablet, unitSizeUnit)
        },
        " .premium-countdown-exp-message": {
            "font-size": generateCSSUnit(textSizeTablet, textSizeUnit),

            "margin-top": generateCSSUnit(textMarginTopTablet, textMarginType),
            "margin-right": generateCSSUnit(textMarginRightTablet, textMarginType),
            "margin-bottom": generateCSSUnit(textMarginBottomTablet, textMarginType),
            "margin-left": generateCSSUnit(textMarginLeftTablet, textMarginType),
            "padding-top": generateCSSUnit(textPaddingTopTablet, textPaddingType),
            "padding-right": generateCSSUnit(textPaddingRightTablet, textPaddingType),
            "padding-bottom": generateCSSUnit(textPaddingBottomTablet, textPaddingType),
            "padding-left": generateCSSUnit(textPaddingLeftTablet, textPaddingType),
        }
    }
    let mobile_selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTopMobile, paddingType),
            "padding-right": generateCSSUnit(paddingRightMobile, paddingType),
            "padding-bottom": generateCSSUnit(paddingBottomMobile, paddingType),
            "padding-left": generateCSSUnit(paddingLeftMobile, paddingType),
            "margin-top": generateCSSUnit(marginTopMobile, marginType),
            "margin-right": generateCSSUnit(marginRightMobile, marginType),
            "margin-bottom": generateCSSUnit(marginBottomMobile, marginType),
            "margin-left": generateCSSUnit(marginLeftMobile, marginType),
        },
        " .pre_countdown-amount": {
            "font-size": generateCSSUnit(digitSizeMobile, digitSizeUnit),
            "padding": generateCSSUnit(backgroundSizeMobile, "px")
        },
        " .pre_countdown-period": {
            "font-size": generateCSSUnit(unitSizeMobile, unitSizeUnit)
        },
        " .premium-countdown-exp-message": {
            "font-size": generateCSSUnit(textSizeMobile, textSizeUnit),
            "margin-top": generateCSSUnit(textMarginTopMobile, textMarginType),
            "margin-right": generateCSSUnit(textMarginRightMobile, textMarginType),
            "margin-bottom": generateCSSUnit(textMarginBottomMobile, textMarginType),
            "margin-left": generateCSSUnit(textMarginLeftMobile, textMarginType),
            "padding-top": generateCSSUnit(textPaddingTopMobile, textPaddingType),
            "padding-right": generateCSSUnit(textPaddingRightMobile, textPaddingType),
            "padding-bottom": generateCSSUnit(textPaddingBottomMobile, textPaddingType),
            "padding-left": generateCSSUnit(textPaddingLeftMobile, textPaddingType),
        }
    }


    let styling_css = ""
    var id = `#premium-countdown-${block_id}`
    if (classMigrate) {
        id = `.premium-countdown-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css
}
export default styling;