import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

    const {
        classMigrate,
        align,
        progressBarHeightTablet,
        progressBarHeightType,
        progressBarHeight,
        progressBarHeightMobile,
        progressBarRadius,
        progressBarRadiusType,
        progressBarRadiusTablet,
        progressBarRadiusMobile,
        progressBarbgColor,
        progressBarColor,
        labelColor,
        LabelfontSize,
        LabelfontSizeMobile,
        LabelfontSizeTablet,
        LabelfontSizeType,
        LabelWeight,
        LabelStyle,
        LabelUpper,
        LabelLetter,
        percentageColor,
        percentagefontSize,
        percentagefontSizeMobile,
        percentagefontSizeTablet,
        percentagefontSizeType,
        percentageWeight,
        percentageStyle,
        percentageLetter,
        progress,
        arrowColor,
        arrow,
        arrowType,
        arrowTablet,
        arrowMobile,
        pinColor,
        pin,
        pinType,
        pinTablet,
        pinMobile,
        pinHeight,
        pinHeightTablet,
        pinHeightType,
        pinHeightMobile
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-progress-bar-progress": {

        },

        " .premium-progress-bar-progress-bar": {

        },



        " .premium-progress-bar-right-label": {

        },

        " .premium-progress-bar-center-label": {
            "color": labelColor,
            "font-weight": LabelWeight + "!important",
            "letter-spacing": LabelLetter + "px" + "!important",
            "text-transform": LabelUpper ? "uppercase" : "none" + "!important",
            "font-style": LabelStyle + "!important",
            "font-size": generateCSSUnit(LabelfontSize, LabelfontSizeType) + "!important",
            "transform": align == 'right' ? "translateX(-10%)" : align == 'left' ? "translateX(-82%)" : "translateX(-45%)"
        },

        " .premium-progress-bar-percentage": {

        },

        " .premium-progress-bar-arrow": {

        },

        " .premium-progress-bar-pin": {

        },
    }

    mobile_selectors = {
        " .premium-progress-bar-progress": {
            "height": generateCSSUnit(progressBarHeightMobile, progressBarHeightType),
            "border-radius": generateCSSUnit(progressBarRadiusMobile, progressBarRadiusType),
        },
        " .premium-progress-bar-progress-bar": {
            "height": generateCSSUnit(progressBarHeightMobile, progressBarHeightType),
            "border-radius": generateCSSUnit(progressBarRadiusMobile, progressBarRadiusType),
        },
        " .premium-progress-bar-left-label": {
            "font-size": generateCSSUnit(LabelfontSizeMobile, LabelfontSizeType) + "!important",
        },
        " .premium-progress-bar-right-label": {
        },
        " .premium-progress-bar-center-label": {
            "font-size": generateCSSUnit(LabelfontSizeMobile, LabelfontSizeType) + "!important",
        },
        " .premium-progress-bar-percentage": {
            "font-size": generateCSSUnit(percentagefontSizeMobile, percentagefontSizeType) + "!important",
        },
        " .premium-progress-bar-arrow": {
            "border-width": generateCSSUnit(arrowMobile, arrowType) + "!important"
        },
        " .premium-progress-bar-pin": {
            "border-left-width": generateCSSUnit(pinMobile, pinType) + "!important",
            "height": generateCSSUnit(pinHeightMobile, pinHeightType) + "!important"
        },
    }

    tablet_selectors = {
        " .premium-progress-bar-progress": {
            "height": generateCSSUnit(progressBarHeightTablet, progressBarHeightType),
            "border-radius": generateCSSUnit(progressBarRadiusTablet, progressBarRadiusType),
        },
        " .premium-progress-bar-progress-bar": {
            "height": generateCSSUnit(progressBarHeightTablet, progressBarHeightType),
            "border-radius": generateCSSUnit(progressBarRadiusTablet, progressBarRadiusType),
        },
        " .premium-progress-bar-left-label": {
            "font-size": generateCSSUnit(LabelfontSizeTablet, LabelfontSizeType) + "!important",
        },
        " .premium-progress-bar-right-label": {
        },
        " .premium-progress-bar-center-label": {
            "font-size": generateCSSUnit(LabelfontSizeTablet, LabelfontSizeType) + "!important",
        },
        " .premium-progress-bar-percentage": {
            "font-size": generateCSSUnit(percentagefontSizeTablet, percentagefontSizeType) + "!important",
        },
        " .premium-progress-bar-arrow": {
            "border-width": generateCSSUnit(arrowTablet, arrowType) + "!important"
        },
        " .premium-progress-bar-pin": {
            "border-left-width": generateCSSUnit(pinTablet, pinType) + "!important",
            "height": generateCSSUnit(pinHeightTablet, pinHeightType) + "!important"
        },
    }

    var styling_css = ""
    var id = `#premium-progress-bar-${props.clientId}`
    if (classMigrate) {
        id = `.premium-block-${props.clientId}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")
    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css
}

export default styling