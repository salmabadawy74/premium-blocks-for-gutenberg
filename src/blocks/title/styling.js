import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

    const {
        block_id,
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
        stripeColor,
        titleborderType,
        titleborderRadius,
        titleborderWidth,
        titleborderColor,
        BGColor,
        lineColor,
        triangleColor,
        iconColor,
        iconSize,
        iconSizeType,
        iconSizeTablet,
        iconSizeMobile,
        iconborderRadius,
        iconborderColor,
        iconshadowBlur,
        iconshadowColor,
        iconshadowHorizontal,
        iconshadowVertical,
        iconBGColor,
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
        titlePaddingType,
        titleMarginT,
        titleMarginR,
        titleMarginB,
        titleMarginL,
        titleMarginTTablet,
        titleMarginRTablet,
        titleMarginBTablet,
        titleMarginLTablet,
        titleMarginTMobile,
        titleMarginRMobile,
        titleMarginBMobile,
        titleMarginLMobile,
        titleMarginType,
        iconPaddingT,
        iconPaddingR,
        iconPaddingL,
        iconPaddingB,
        iconPaddingTTablet,
        iconPaddingRTablet,
        iconPaddingLTablet,
        iconPaddingBTablet,
        iconPaddingTMobile,
        iconPaddingRMobile,
        iconPaddingLMobile,
        iconPaddingBMobile,
        iconPaddingType,
        iconSpacingT,
        iconSpacingR,
        iconSpacingB,
        iconSpacingL,
        iconSpacingTTablet,
        iconSpacingRTablet,
        iconSpacingBTablet,
        iconSpacingLTablet,
        iconSpacingTMobile,
        iconSpacingRMobile,
        iconSpacingBMobile,
        iconSpacingLMobile,
        iconSpacingType,

        strokeColor,
        strokeFull,
        BackText,
        textWidth,
        textBackColor,
        textBackfontSizeType,
        textBackfontSize,
        textBackfontSizeMobile,
        textBackfontSizeTablet,
        titleBorderLeft,
        titleBorderTop,
        titleBorderRight,
        titleBorderBottom,
        iconborderType,
        iconBorderTop,
        iconBorderRight,
        iconBorderBottom,
        iconBorderLeft,
        textBackWeight,
        textBackStyle,
        textBackLetter,
        textBackUpper,
        textBackshadowColor,
        textBackshadowBlur,
        textBackshadowHorizontal,
        textBackshadowVertical,
        horizontalText,
        verticalText,
        blend,
        zIndex,
        rotateText
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {

        " .premium-title-bg-text:before": {
            "content": BackText,
            "position": "absolute",
            "top": `${verticalText}px`,
            "left": `${horizontalText}px`,
            "color": textBackColor,
            "width": textWidth,
            "transform": `rotate(${rotateText}deg)`,
            "font-size": generateCSSUnit(textBackfontSize, textBackfontSizeType),
            "font-weight": textBackWeight,
            "font-style": textBackStyle,
            "text-transform": textBackUpper ? "uppercase" : "none",
            "letter-spacing": textBackLetter + 'px',
            "text-shadow": `${textBackshadowHorizontal}px ${textBackshadowVertical}px ${textBackshadowBlur}px ${textBackshadowColor}`,
            "mix-blend-mode": blend,
            "z-index": zIndex

        },
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
            "text-shadow": `${titleshadowHorizontal}px ${titleshadowVertical}px ${titleshadowBlur}px ${titleshadowColor}`
        },
        " .premium-title .style1 .premium-title-header": {
            "border-left": titleBorderLeft >= '1' ? `${titleBorderLeft}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": `${titleBorderTop}px ${titleBorderRight}px  ${titleBorderBottom}px ${titleBorderLeft}px`,
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title-style2__wrap": {
            "background-color": BGColor
        },
        " .premium-title-style3__wrap": {
            "background-color": BGColor
        },
        " .premium-title .style2": {
            "border-bottom": titleBorderBottom >= '1' ? `${titleBorderBottom}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`,
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title .style4": {
            "border-bottom": titleBorderBottom >= '1' ? `${titleBorderBottom}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`,
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title .style5": {
            "border-bottom": titleBorderBottom >= '1' ? `${titleBorderBottom}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`,
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title .style6": {
            "border-bottom": titleBorderBottom >= '1' ? `${titleBorderBottom}px ${titleborderType} ${titleborderColor} !important` : "",
            "border-style": titleborderType,
            "border-width": `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`,
            "border-color": titleborderColor,
            "border-radius": generateCSSUnit(titleborderRadius, "px"),
        },
        " .premium-title-style5__wrap": {
            "border-bottom": `2px solid ${lineColor}`
        },
        " .premium-title-style6__wrap": {
            "border-bottom": `2px solid ${lineColor}`
        },
        " .premium-title-style6__wrap:before": {
            "border-bottom-color": triangleColor
        },
        " .premium-title-icon": {
            "color": iconColor,
            "font-size": generateCSSUnit(iconSize, iconSizeType),
            "border-style": iconborderType,
            "border-width": `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px`,
            "border-color": iconborderColor,
            "border-radius": generateCSSUnit(iconborderRadius, "px"),
            "text-shadow": `${iconshadowHorizontal}px ${iconshadowVertical}px ${iconshadowBlur}px ${iconshadowColor}`,
            "background-color": iconBGColor,
            "padding-top": generateCSSUnit(iconPaddingT, iconPaddingType),
            "padding-right": generateCSSUnit(iconPaddingR, iconPaddingType),
            "padding-bottom": generateCSSUnit(iconPaddingB, iconPaddingType),
            "padding-left": generateCSSUnit(iconPaddingL, iconPaddingType),
            "margin-top": generateCSSUnit(iconSpacingT, iconSpacingType),
            "margin-right": generateCSSUnit(iconSpacingR, iconSpacingType),
            "margin-bottom": generateCSSUnit(iconSpacingB, iconSpacingType),
            "margin-left": generateCSSUnit(iconSpacingL, iconSpacingType),
        },
        ' .premium-lottie-animation': {
            "width": `${iconSize}${iconSizeType} !important`,
            "height": `${iconSize}${iconSizeType} !important`
        },
        " .premium-title-text-title": {
            "padding-top": generateCSSUnit(titlePaddingT, titlePaddingType),
            "padding-right": generateCSSUnit(titlePaddingR, titlePaddingType),
            "padding-bottom": generateCSSUnit(titlePaddingB, titlePaddingType),
            "padding-left": generateCSSUnit(titlePaddingL, titlePaddingType),
            "margin-top": generateCSSUnit(titleMarginT, titleMarginType),
            "margin-right": generateCSSUnit(titleMarginR, titleMarginType),
            "margin-bottom": generateCSSUnit(titleMarginB, titleMarginType),
            "margin-left": generateCSSUnit(titleMarginL, titleMarginType),
            "-webkit-text-stroke-color": strokeColor,
            "-webkit-text-stroke-width": `${strokeFull}px`,

        },
        " .premium-title-header img": {
            "width": generateCSSUnit(iconSize, iconSizeType),
            "height": generateCSSUnit(iconSize, iconSizeType)
        }
    }

    mobile_selectors = {
        " .premium-title-header": {
            "font-size": generateCSSUnit(titlefontSizeMobile, titlefontSizeType)
        },
        " .premium-title-icon": {
            "font-size": generateCSSUnit(iconSizeMobile, iconSizeType),
            "padding-top": generateCSSUnit(iconPaddingTMobile, iconPaddingType),
            "padding-right": generateCSSUnit(iconPaddingRMobile, iconPaddingType),
            "padding-bottom": generateCSSUnit(iconPaddingBMobile, iconPaddingType),
            "padding-left": generateCSSUnit(iconPaddingLMobile, iconPaddingType),
            "margin-top": generateCSSUnit(iconSpacingTMobile, iconSpacingType),
            "margin-right": generateCSSUnit(iconSpacingRMobile, iconSpacingType),
            "margin-bottom": generateCSSUnit(iconSpacingBMobile, iconSpacingType),
            "margin-left": generateCSSUnit(iconSpacingLMobile, iconSpacingType),
        },
        " .premium-title-text-title": {
            "padding-top": generateCSSUnit(titlePaddingTMobile, titlePaddingType),
            "padding-right": generateCSSUnit(titlePaddingRMobile, titlePaddingType),
            "padding-bottom": generateCSSUnit(titlePaddingBMobile, titlePaddingType),
            "padding-left": generateCSSUnit(titlePaddingLMobile, titlePaddingType),
            "margin-top": generateCSSUnit(titleMarginTMobile, titleMarginType),
            "margin-right": generateCSSUnit(titleMarginRMobile, titleMarginType),
            "margin-bottom": generateCSSUnit(titleMarginBMobile, titleMarginType),
            "margin-left": generateCSSUnit(titleMarginLMobile, titleMarginType),
        },
        " .premium-title-header img": {
            "width": generateCSSUnit(iconSizeMobile, iconSizeType),
            "height": generateCSSUnit(iconSizeMobile, iconSizeType)
        },
        ' .premium-lottie-animation': {
            "width": `${iconSizeMobile}${iconSizeType} !important`,
            "height": `${iconSizeMobile}${iconSizeType} !important`
        },

    }

    tablet_selectors = {
        " .premium-title-header": {
            "font-size": generateCSSUnit(titlefontSizeTablet, titlefontSizeType)
        },
        " .premium-title-icon": {
            "font-size": generateCSSUnit(iconSizeTablet, iconSizeType),
            "padding-top": generateCSSUnit(iconPaddingTTablet, iconPaddingType),
            "padding-right": generateCSSUnit(iconPaddingRTablet, iconPaddingType),
            "padding-bottom": generateCSSUnit(iconPaddingBTablet, iconPaddingType),
            "padding-left": generateCSSUnit(iconPaddingLTablet, iconPaddingType),
            "margin-top": generateCSSUnit(iconSpacingTTablet, iconSpacingType),
            "margin-right": generateCSSUnit(iconSpacingRTablet, iconSpacingType),
            "margin-bottom": generateCSSUnit(iconSpacingBTablet, iconSpacingType),
            "margin-left": generateCSSUnit(iconSpacingLTablet, iconSpacingType),
        },
        " .premium-title-text-title": {
            "padding-top": generateCSSUnit(titlePaddingTTablet, titlePaddingType),
            "padding-right": generateCSSUnit(titlePaddingRTablet, titlePaddingType),
            "padding-bottom": generateCSSUnit(titlePaddingBTablet, titlePaddingType),
            "padding-left": generateCSSUnit(titlePaddingLTablet, titlePaddingType),
            "margin-top": generateCSSUnit(titleMarginTTablet, titleMarginType),
            "margin-right": generateCSSUnit(titleMarginRTablet, titleMarginType),
            "margin-bottom": generateCSSUnit(titleMarginBTablet, titleMarginType),
            "margin-left": generateCSSUnit(titleMarginLTablet, titleMarginType),
        },
        " .premium-title-header img": {
            "width": generateCSSUnit(iconSizeTablet, iconSizeType),
            "height": generateCSSUnit(iconSizeTablet, iconSizeType)
        },
        ' .premium-lottie-animation': {
            "width": `${iconSizeTablet}${iconSizeType} !important`,
            "height": `${iconSizeTablet}${iconSizeType} !important`
        },
    }

    var styling_css = ""
    var id = `#premium-title-${block_id}`
    if (classMigrate) {
        id = `.premium-block-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css
}

export default styling