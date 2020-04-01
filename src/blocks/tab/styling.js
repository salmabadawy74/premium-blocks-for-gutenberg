import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

  const {
    classMigrate,
    tabborderType,
    tabborderWidth,
    tabborderColor,
    tabborderRadius,
    tabBGColor,
    activetitleColor,
    titleColor,
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
    type,
    tabsBorderColor,
    tabShadowBlur,
    tabShadowColor,
    tabShadowHorizontal,
    tabShadowVertical,
    tabShadowPosition,
    activetabBGColor,
    arrowColor,
    iconColor,
    activeiconColor,
    hovericonColor,
    iconfontSize,
    iconfontSizeType,
    iconfontSizeMobile,
    iconfontSizeTablet,
    iconborderType,
    iconborderRadius,
    iconborderWidth,
    iconborderColor,
    iconshadowBlur,
    iconshadowColor,
    iconshadowHorizontal,
    iconshadowVertical,
    hovertitleColor,
    titleborderType,
    titleborderRadius,
    titleborderWidth,
    titleborderColor,
    titleshadowBlur,
    titleshadowColor,
    titleshadowHorizontal,
    titleshadowVertical,
  } = props.attributes

  var selectors = {}
  var tablet_selectors = {}
  var mobile_selectors = {}

  selectors = {
    " .premium-tab-link-icon": {
      "border-style": tabborderType,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
      "border-radius": generateCSSUnit(tabborderRadius, "px"),
      "box-shadow": `${tabShadowHorizontal}px ${tabShadowVertical}px ${tabShadowBlur}px ${tabShadowColor} ${tabShadowPosition}`,
      "background-color": tabBGColor
    },
    " .premium-tab-nav-list-item::after": {
      "background-color": tabsBorderColor
    },
    " .premium-tab-link-icon-flipped": {
      "border-style": tabborderType,
      "border-width": generateCSSUnit(tabborderWidth, "px"),
      "border-color": tabborderColor,
      "border-radius": generateCSSUnit(tabborderRadius, "px"),
      "box-shadow": `${tabShadowHorizontal}px ${tabShadowVertical}px ${tabShadowBlur}px ${tabShadowColor} ${tabShadowPosition}`,
      "background-color": tabBGColor
    },
    " .tab-current .premium-tab-link-icon":{
      "background-color": activetabBGColor + "!important"
    },
    " .tab-current .premium-tab-link-icon-flipped":{
      "background-color": activetabBGColor + "!important"
    },
    " .premium-tab-horizontal .tab-current .premium-tab-link-icon::after": {
      "border-top-color": arrowColor + "!important"
    },
    " .premium-tab-vertical .tab-current .premium-tab-link-icon::after": {
      "border-left-color": arrowColor + "!important"
    },
    " .premium-tab-title-icon": {
      "color": iconColor,
      "font-size": generateCSSUnit(iconfontSize, iconfontSizeType),
      "border-style": iconborderType,
      "border-width": generateCSSUnit(iconborderWidth, "px"),
      "border-color": iconborderColor,
      "border-radius": generateCSSUnit(iconborderRadius, "px"),
      "text-shadow": `${iconshadowHorizontal}px ${iconshadowVertical}px ${iconshadowBlur}px ${iconshadowColor}`,
    },
    " .tab-current .premium-tab-title-icon": {
      "color": activeiconColor + "!important"
    },
    " .premium-tab-nav-list-item:hover .premium-tab-title-icon": {
      "color": hovericonColor + "!important"
    },
    " .tab-current .premium-tab-title": {
      "color": activetitleColor + "!important"
    },
    " .premium-tab-nav-list-item .premium-tab-title": {
      "color": titleColor,
      "font-size": generateCSSUnit(titlefontSize, titlefontSizeType),
      "letter-spacing": titleLetter + "px",
      "text-transform": titleUpper ? "uppercase" : "none" + "!important",
      "font-style": titleStyle + "!important",
      "font-weight": titleWeight + "!important",
      "border-style": titleborderType,
      "border-width": generateCSSUnit(titleborderWidth, "px"),
      "border-color": titleborderColor,
      "border-radius": generateCSSUnit(titleborderRadius, "px"),
      "text-shadow": `${titleshadowHorizontal}px ${titleshadowVertical}px ${titleshadowBlur}px ${titleshadowColor}`,
    },
    " .premium-tab-nav-list-item:hover .premium-tab-title": {
      "color": hovertitleColor + "!important"
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
   " .premium-tab-title-icon": {
     "font-size": generateCSSUnit(iconfontSizeMobile, iconfontSizeType),
   },
   " .premium-tab-nav-list-item .premium-tab-title": {
     "font-size": generateCSSUnit(titlefontSizeMobile, titlefontSizeType)
   },
  }

  tablet_selectors = {
    " .premium-tab-title-icon": {
      "font-size": generateCSSUnit(iconfontSizeTablet, iconfontSizeType),
    },
    " .premium-tab-nav-list-item .premium-tab-title": {
      "font-size": generateCSSUnit(titlefontSizeTablet, titlefontSizeType)
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