import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {
    const {
        classMigrate,
        iconType,
        iconSize,
        iconSizeType,
        iconSizeMobile,
        iconSizeTablet,
        gutter,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        blurHover,
        brightHover,
        contrastHover,
        saturationHover,
        hueHover,
        iconBorderRadius,
        iconBorderRadiusMobile,
        iconBorderRadiusTablet,
        iconBorderRadiusType,
        iconColor,
        iconBGColor,
        iconColorHover,
        iconBGColorHover,
        iconShadowBlur,
        iconShadowColor,
        iconShadowHorizontal,
        iconShadowVertical,
        iconPadding,
        iconPaddingMobile,
        iconPaddingTablet,
        iconPaddingType
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-image-separator-container": {
            "transform": `translateY( ${gutter}% )`,
            "filter": iconType === 'image' ? `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )` : ""
        },
        " .premium-image-separator-container:hover": {
            "filter": iconType === 'image' ? `brightness( ${brightHover}% ) contrast( ${contrastHover}% ) saturate( ${saturationHover}% ) blur( ${blurHover}px ) hue-rotate( ${hueHover}deg )` : ""
        },
        " .premium-image-separator-container img": {
            "width": generateCSSUnit(iconSize, iconSizeType),
            "border-radius": generateCSSUnit(iconBorderRadius, iconBorderRadiusType),
        },
        " .premium-image-separator-container i": {
            "font-size": generateCSSUnit(iconSize, iconSizeType),
            "border-radius": generateCSSUnit(iconBorderRadius, iconBorderRadiusType),
            "padding": generateCSSUnit(iconPadding, iconPaddingType),
        },
        " .premium-image-separator-container i:hover": {
            "color": iconColorHover,
            "background-color": iconBGColorHover
        },
    }

    mobile_selectors = {
        " .premium-image-separator-container i": {
            "font-size": generateCSSUnit(iconSizeMobile, iconSizeType),
            "padding": generateCSSUnit(iconPaddingMobile, iconPaddingType),
        },
        " .premium-image-separator-container img": {
            "width": generateCSSUnit(iconSizeMobile, iconSizeType),
            "border-radius": generateCSSUnit(iconBorderRadiusMobile, iconBorderRadiusType),
        }
    }

    tablet_selectors = {
        " .premium-image-separator-container i": {
            "font-size": generateCSSUnit(iconSizeTablet, iconSizeType),
            "padding": generateCSSUnit(iconPaddingTablet, iconPaddingType),
        },
        " .premium-image-separator-container img": {
            "width": generateCSSUnit(iconSizeTablet, iconSizeType),
            "border-radius": generateCSSUnit(iconBorderRadiusTablet, iconBorderRadiusType),
        }
    }

    var styling_css = ""
    var id = `#premium-image-separator-${props.clientId}`
    if (classMigrate) {
        id = `.premium-block-${props.clientId}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css
}

export default styling