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
    type
  } = props.attributes

  var selectors = {}
  var tablet_selectors = {}
  var mobile_selectors = {}

  selectors = {
    [" .premium-tab-title-active-" + type]: {
      "border-style": tabborderType,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
      "background-color": tabBGColor
    },
    [" .premium-tab-title-" +type]: {
      "font-size": generateCSSUnit(titlefontSize, titlefontSizeType),
      "letter-spacing": titleLetter + "px" + "!important",
      "text-transform": titleUpper ? "uppercase" : "none" + "!important",
      "font-style": titleStyle + "!important",
      "font-weight": titleWeight + "!important",
    },
    " .premium-tab-title-active-vertical": {
      "border-style": tabborderType,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
      "background-color": tabBGColor
    },
    " .premium-tab-content-vertical p": {
      "font-size": generateCSSUnit(contentfontSize, contentfontSizeType),
      "letter-spacing": contentLetter + "px",
      "text-transform": contentUpper ? "uppercase" : "none" + "!important",
      "font-style": contentStyle + "!important",
      "font-weight": contentWeight + "!important",
      "color": contentColor + " !important"
    },
    " .premium-tab-content-horizontal p": {
      "font-size": generateCSSUnit(contentfontSize, contentfontSizeType),
      "letter-spacing": contentLetter + "px",
      "text-transform": contentUpper ? "uppercase" : "none" + "!important",
      "font-style": contentStyle + "!important",
      "font-weight": contentWeight + "!important",
      "color": contentColor + " !important"
    },
    " .premium-tab-title-active-horizontal a": {
      "color": activetitleColor + " !important"
    },
    " .premium-tab-title-active-vertical a": {
      "color": activetitleColor + " !important"
    },
    " .premium-tab-content-active-horizontal": {
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
    },
    " .premium-tab-content-active-vertical": {
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
    },
    " .premium-tab-content__wrap-view-horizontal": {
      "background-color": tabBGColor,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
    },
    " .premium-tab-content__wrap-view-vertical": {
      "background-color": tabBGColor,
      "border-color": tabborderColor,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
    },
    " .premium-tab-title-active-horizontal::after": {
      "border-color": tabborderColor + " !important",
      "border-width" : generateCSSUnit(tabborderWidth, "px"),
    },
    " .premium-tab-title-active-horizontal::before": {
      "border-color": tabborderColor + " !important",
      "border-width" : generateCSSUnit(tabborderWidth, "px"),
    },
     " .premium-tab-title-active-vertical::after": {
       "border-color": tabborderColor + " !important",
       "border-width": generateCSSUnit(tabborderWidth, "px"),
     },
     " .premium-tab-title-active-vertical::before": {
       "border-color": tabborderColor + " !important",
       "border-width": generateCSSUnit(tabborderWidth, "px"),
     }
  }

  mobile_selectors = {
   [ " .premium-tab-title" + type]: {
      "font-size": generateCSSUnit(titlefontSizeMobile, titlefontSizeType)
    },
    " .premium-tab-content-vertical p": {
      "font-size": generateCSSUnit(contentfontSizeMobile, contentfontSizeType)
    },
    " .premium-tab-content-horizontal p": {
      "font-size": generateCSSUnit(contentfontSizeMobile, contentfontSizeType)
    },
  }

  tablet_selectors = {
    [ " .premium-tab-title" + type]: {
      "font-size": generateCSSUnit(titlefontSizeTablet, titlefontSizeType)
    },
    " .premium-tab-content-vertical p": {
      "font-size": generateCSSUnit(contentfontSizeTablet, contentfontSizeType)
    },
    " .premium-tab-content-horizontal p": {
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