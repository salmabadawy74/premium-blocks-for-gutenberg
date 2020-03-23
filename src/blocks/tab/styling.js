import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

  const {
    classMigrate,
    tabborderType,
    tabborderWidth,
    tabborderColor,
    tabBGColor,
    activetitleColor,
    titleWeight,
    titleLetter,
    titleUpper,
    titleStyle,
    titlefontSize,
    titlefontSizeMobile,
    titlefontSizeTablet,
    titlefontSizeType,
    contentColor,
    contentWeight,
    contentLetter,
    contentUpper,
    contentStyle,
    contentfontSize,
    contentfontSizeMobile,
    contentfontSizeTablet,
    contentfontSizeType,
  } = props.attributes

  var selectors = {}
  var tablet_selectors = {}
  var mobile_selectors = {}

  selectors = {
    " .premium-tab-title-active": {
      "border-style": tabborderType,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
      "background-color": tabBGColor
    },
    " .premium-tab-title": {
      "font-size": generateCSSUnit(titlefontSize, titlefontSizeType),
      "letter-spacing": titleLetter + "px" + "!important",
      "text-transform": titleUpper ? "uppercase" : "none" + "!important",
      "font-style": titleStyle + "!important",
      "font-weight": titleWeight + "!important",
    },
    " .premium-tab-title-vertical-active": {
      "border-style": tabborderType,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
      "background-color": tabBGColor
    },
    " .premium-tab-title-vertical": {
      "font-size": generateCSSUnit(titlefontSize, titlefontSizeType),
      "letter-spacing": titleLetter + "px" + "!important",
      "text-transform": titleUpper ? "uppercase" : "none" + "!important",
      "font-style": titleStyle + "!important",
      "font-weight": titleWeight + "!important",
    },
    " .premium-tab-content p": {
      "font-size": generateCSSUnit(contentfontSize, contentfontSizeType),
      "letter-spacing": contentLetter + "px",
      "text-transform": contentUpper ? "uppercase" : "none" + "!important",
      "font-style": contentStyle + "!important",
      "font-weight": contentWeight + "!important",
      "color": contentColor + " !important"
    },
    " .premium-tab-content-vertical p": {
      "font-size": generateCSSUnit(contentfontSize, contentfontSizeType),
      "letter-spacing": contentLetter + "px",
      "text-transform": contentUpper ? "uppercase" : "none" + "!important",
      "font-style": contentStyle + "!important",
      "font-weight": contentWeight + "!important",
      "color": contentColor + " !important"
    },
    " .premium-tab-title-active a": {
      "color": activetitleColor + " !important"
    },
    " .premium-tab-title-vertical-active a": {
      "color": activetitleColor + " !important"
    },
    " .premium-tab-content-active": {
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
    },
    " .premium-tab-content-vertical-active": {
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
    },
    " .premium-tab-content__wrap": {
      "background-color": tabBGColor,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
    },
    " .premium-tab-content__wrap-view-vertical": {
      "background-color": tabBGColor,
      "border-color": tabborderColor,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
    },
    " .premium-tab-title-active::after": {
      "border-color": tabborderColor + " !important",
      "border-width" : generateCSSUnit(tabborderWidth, "px"),
    },
    " .premium-tab-title-active::before": {
      "border-color": tabborderColor + " !important",
      "border-width" : generateCSSUnit(tabborderWidth, "px"),
    },
     " .premium-tab-title-vertical-active::after": {
       "border-color": tabborderColor + " !important",
       "border-width": generateCSSUnit(tabborderWidth, "px"),
     },
     " .premium-tab-title-vertical-active::before": {
       "border-color": tabborderColor + " !important",
       "border-width": generateCSSUnit(tabborderWidth, "px"),
     }
  }

  mobile_selectors = {
    " .premium-tab-title": {
      "font-size": generateCSSUnit(titlefontSizeMobile, titlefontSizeType)
    },
    " .premium-tab-title-vertical": {
      "font-size": generateCSSUnit(titlefontSizeMobile, titlefontSizeType)
    },
    " .premium-tab-content p": {
      "font-size": generateCSSUnit(contentfontSizeMobile, contentfontSizeType)
    },
    " .premium-tab-content-vertical p": {
      "font-size": generateCSSUnit(contentfontSizeMobile, contentfontSizeType)
    },
  }

  tablet_selectors = {
    " .premium-tab-title": {
      "font-size": generateCSSUnit(titlefontSizeTablet, titlefontSizeType)
    },
    " .premium-tab-title-vertical": {
      "font-size": generateCSSUnit(titlefontSizeTablet, titlefontSizeType)
    },
    " .premium-tab-content p": {
      "font-size": generateCSSUnit(contentfontSizeTablet, contentfontSizeType)
    },
    " .premium-tab-content-vertical p": {
      "font-size": generateCSSUnit(contentfontSizeTablet, contentfontSizeType)
    },
  }

  var styling_css = ""
  var id = `#premium-tab-${props.clientId}`
  if (classMigrate) {
    id = `.premium-block-${props.clientId}`
  }

  styling_css = generateCSS(selectors, id)
  styling_css += generateCSS(tablet_selectors, id, true, "tablet")

  styling_css += generateCSS(mobile_selectors, id, true, "mobile")

  return styling_css
}

export default styling