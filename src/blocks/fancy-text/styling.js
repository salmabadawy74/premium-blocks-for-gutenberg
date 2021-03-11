import generateCSS from '../../../assets/js/blocks/generateCss'
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {

    const {
        block_id,
        classMigrate,
        fancyTextColor,
        fancyTextfontSize,
        fancyTextfontSizeMobile,
        fancyTextfontSizeTablet,
        fancyTextfontSizeUnit,
        fancyTextWeight,
        fancyTextUpper,
        fancyTextStyle,
        fancyTextLetter,
        fancyTextBGColor,
        shadowColor,
        shadowBlur,
        shadowHorizontal,
        shadowVertical,
        cursorColor,
        textColor,
        textfontSize,
        textfontSizeMobile,
        textfontSizeTablet,
        textfontSizeUnit,
        textWeight,
        textLetter,
        textUpper,
        textStyle,
        textBGColor
    } = props.attributes

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        " .premium-fancy-text-title": {
            "font-size": generateCSSUnit(fancyTextfontSize, fancyTextfontSizeUnit),
            "color": fancyTextColor,
            "font-weight": fancyTextWeight,
            "letter-spacing": fancyTextLetter + "px",
            "text-transform": fancyTextUpper ? "uppercase" : "none",
            "font-style": fancyTextStyle,
            "background-color": fancyTextBGColor,
            "text-shadow": `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
        },
        " .premium-fancy-text-title-slide": {
            "font-size": generateCSSUnit(fancyTextfontSize, fancyTextfontSizeUnit),
            "color": fancyTextColor,
            "font-weight": fancyTextWeight,
            "letter-spacing": fancyTextLetter + "px",
            "text-transform": fancyTextUpper ? "uppercase" : "none",
            "font-style": fancyTextStyle,
            "background-color": fancyTextBGColor,
            "text-shadow": `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
        },
        " .typed-cursor": {
            "color": cursorColor
        },
        " .premium-fancy-text-prefix-text": {
            "font-size": generateCSSUnit(textfontSize, textfontSizeUnit),
            "color": textColor,
            "font-weight": textWeight,
            "letter-spacing": textLetter + "px",
            "text-transform": textUpper ? "uppercase" : "none",
            "font-style": textStyle,
            "background-color": textBGColor
        },
        " .premium-fancy-text-suffix-text": {
            "font-size": generateCSSUnit(textfontSize, textfontSizeUnit),
            "color": textColor,
            "font-weight": textWeight,
            "letter-spacing": textLetter + "px",
            "text-transform": textUpper ? "uppercase" : "none",
            "font-style": textStyle,
            "background-color": textBGColor
        },
    }

    mobile_selectors = {
        " .premium-fancy-text-title": {
            "font-size": generateCSSUnit(fancyTextfontSizeMobile, fancyTextfontSizeUnit)
        },
        " .premium-fancy-text-title-slide": {
            "font-size": generateCSSUnit(fancyTextfontSizeMobile, fancyTextfontSizeUnit)
        },
        " .premium-fancy-text-prefix-text": {
            "font-size": generateCSSUnit(textfontSizeMobile, textfontSizeUnit)
        },
        " .premium-fancy-text-suffix-text": {
            "font-size": generateCSSUnit(textfontSizeMobile, textfontSizeUnit)
        },
    }

    tablet_selectors = {
        " .premium-fancy-text-title": {
            "font-size": generateCSSUnit(fancyTextfontSizeTablet, fancyTextfontSizeUnit)
        },
        " .premium-fancy-text-title-slide": {
            "font-size": generateCSSUnit(fancyTextfontSizeTablet, fancyTextfontSizeUnit)
        },
        " .premium-fancy-text-prefix-text": {
            "font-size": generateCSSUnit(textfontSizeTablet, textfontSizeUnit)
        },
        " .premium-fancy-text-suffix-text": {
            "font-size": generateCSSUnit(textfontSizeTablet, textfontSizeUnit)
        },
    }

    var styling_css = ""
    var id = `#premium-fancy-text-${block_id}`
    if (classMigrate) {
        id = `.premium-block-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css
}

export default styling