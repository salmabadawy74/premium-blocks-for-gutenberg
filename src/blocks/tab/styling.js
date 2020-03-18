import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

  const {
    classMigrate,
    tabborderType,
    tabborderWidth,
    tabborderColor,
    tabBGColor,
    titleColor,
    activetitleColor
  } = props.attributes

  var selectors = {}
  var tablet_selectors = {}
  var mobile_selectors = {}

  selectors = {
    " .premium-tab-title-active": {
      "border-style": tabborderType,
        "border-width": generateCSSUnit(tabborderWidth , "px"),
        "border-color": tabborderColor,
        "background-color": tabBGColor
    },
    " .premium-tab-title": {
      // "color": titleColor + " !important"
    },
    " .premium-tab-title-active a":{
      "color": activetitleColor + " !important"
    },
    " .premium-tab-title a": {
      "color": titleColor + " !important"
    },
    " .premium-tab-content-active": {
      "border-style": tabborderType,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
    },
    " .premium-tab-content__wrap": {
      "background-color": tabBGColor
    }
  }

  mobile_selectors = {
    // " .premium-content-switcher-toggle-switch": {
    //   "font-size": generateCSSUnit(switchSizeMobile, switchSizeType)
    // },
  }

  tablet_selectors = {
    // " .premium-content-switcher-toggle-switch": {
    //   "font-size": generateCSSUnit(switchSizeTablet, switchSizeType)
    // },
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