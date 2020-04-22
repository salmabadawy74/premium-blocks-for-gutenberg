import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

  const {
    classMigrate,
    fancyTextColor,
    fancyTextfontSize,
    fancyTextfontSizeMobile,
    fancyTextfontSizeTablet,
    fancyTextfontSizeType,
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
    TextfontSize,
    TextfontSizeMobile,
    TextfontSizeTablet,
    TextfontSizeType,
    TextWeight,
    TextLetter,
    TextUpper,
    TextStyle,
    TextBGColor
  } = props.attributes

  var selectors = {}
  var tablet_selectors = {}
  var mobile_selectors = {}

  selectors = {
    " .premium-fancy-text-title": {
      "font-size": generateCSSUnit(fancyTextfontSize, fancyTextfontSizeType),
      "color": fancyTextColor,
      "font-weight": fancyTextWeight,
      "letter-spacing": fancyTextLetter + "px" + "!important",
      "text-transform": fancyTextUpper ? "uppercase" : "none" + "!important",
      "font-style": fancyTextStyle + "!important",
      "background-color": fancyTextBGColor,
      "text-shadow": `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
    },
    " .premium-fancy-text-cursor":{
      "color": cursorColor
    },
    " .premium-fancy-text-prefix-text": {
      "font-size": generateCSSUnit(TextfontSize, TextfontSizeType),
      "color": textColor,
      "font-weight": TextWeight,
      "letter-spacing": TextLetter + "px" + "!important",
      "text-transform": TextUpper ? "uppercase" : "none" + "!important",
      "font-style": TextStyle + "!important",
      "background-color": TextBGColor
    },
    " .premium-fancy-text-suffix-text":{
      "font-size": generateCSSUnit(TextfontSize, TextfontSizeType),
      "color": textColor,
      "font-weight": TextWeight,
      "letter-spacing": TextLetter + "px" + "!important",
      "text-transform": TextUpper ? "uppercase" : "none" + "!important",
      "font-style": TextStyle + "!important",
      "background-color": TextBGColor
    },
  }

  mobile_selectors = {
    " .premium-fancy-text-title": {
      "font-size": generateCSSUnit(fancyTextfontSizeMobile, fancyTextfontSizeType)
    },
    " .premium-fancy-text-prefix-text": {
      "font-size": generateCSSUnit(TextfontSizeMobile, TextfontSizeType)
    },
    " .premium-fancy-text-suffix-text": {
      "font-size": generateCSSUnit(TextfontSizeMobile, TextfontSizeType)
    },
  }

  tablet_selectors = {
    " .premium-fancy-text-title": {
      "font-size": generateCSSUnit(fancyTextfontSizeTablet, fancyTextfontSizeType)
    },
    " .premium-fancy-text-prefix-text": {
      "font-size": generateCSSUnit(TextfontSizeTablet, TextfontSizeType)
    },
    " .premium-fancy-text-suffix-text": {
      "font-size": generateCSSUnit(TextfontSizeTablet, TextfontSizeType)
    },
  }

  var styling_css = ""
  var id = `#premium-fancy-text-${props.clientId}`
  if (classMigrate) {
    id = `.premium-block-${props.clientId}`
  }

  styling_css = generateCSS(selectors, id)
  styling_css += generateCSS(tablet_selectors, id, true, "tablet")

  styling_css += generateCSS(mobile_selectors, id, true, "mobile")

  return styling_css
}

export default styling