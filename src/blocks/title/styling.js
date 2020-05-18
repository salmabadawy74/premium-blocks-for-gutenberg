import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

    const {
        classMigrate,
        stripeWidth,
        stripeHeight,
        stripeTopSpacing,
        stripeBottomSpacing,
        titleColor,
        titleWeight,
        titleLetter,
        titleUpper,
        titleStyle,
        titlefontSize,
        titlefontSizeMobile,
        titlefontSizeTablet,
        titlefontSizeType,
        titleshadowBlur,
        titleshadowColor,
        titleshadowHorizontal,
        titleshadowVertical,
        stripeColor
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-title-style7-stripe__wrap": {
            "margin-top": generateCSSUnit(stripeTopSpacing, 'px'),
            "margin-bottom": generateCSSUnit(stripeBottomSpacing, 'px'),
        },
        " .premium-title-style7-stripe-span": {
          "width": generateCSSUnit(stripeWidth, 'px'),
          "height": generateCSSUnit(stripeHeight, 'px'),
          "background-color": stripeColor
        },
        " .premium-title-header": {
          "color": titleColor + "!important",
          "font-size": generateCSSUnit(titlefontSize, titlefontSizeType),
          "letter-spacing": titleLetter + "px",
          "text-transform": titleUpper ? "uppercase" : "none" + "!important",
          "font-style": titleStyle + "!important",
          "font-weight": titleWeight + "!important",
          "text-shadow": `${titleshadowHorizontal}px ${titleshadowVertical}px ${titleshadowBlur}px ${titleshadowColor}`,
        }
    }

    mobile_selectors = {
        " .premium-title-header": {
            "font-size": generateCSSUnit(titlefontSizeMobile, titlefontSizeType)
        },
    }

    tablet_selectors = {
        " .premium-title-header": {
            "font-size": generateCSSUnit(titlefontSizeTablet, titlefontSizeType)
        },
    }

    var styling_css = ""
    var id = `#premium-title-${props.clientId}`
    if (classMigrate) {
        id = `.premium-block-${props.clientId}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css
}

export default styling