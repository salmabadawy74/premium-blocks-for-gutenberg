import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

    const {
        classMigrate,
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
        progress
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-progress-bar-progress": {
            "height": generateCSSUnit(progressBarHeight, progressBarHeightType),
            "border-radius": generateCSSUnit(progressBarRadius, progressBarRadiusType),
            "background-color": progressBarbgColor
        },
        " .premium-progress-bar-progress-bar": {
            "height": generateCSSUnit(progressBarHeight, progressBarHeightType),
            "border-radius": generateCSSUnit(progressBarRadius, progressBarRadiusType),
            "background-color": progressBarColor,
            "width": progress + "%" + "!important",
        },
        " .premium-progress-bar-left-label": {
            "color": labelColor,
            "font-weight": LabelWeight + "!important",
            "letter-spacing": LabelLetter + "px" + "!important",
            "text-transform": LabelUpper ? "uppercase" : "none" + "!important",
            "font-style": LabelStyle + "!important",
            "font-size": generateCSSUnit(LabelfontSize, LabelfontSizeType) + "!important",
        },
        " .premium-progress-bar-right-label": {
            "color": percentageColor,
            "font-weight": percentageWeight + "!important",
            "letter-spacing": percentageLetter + "px" + "!important",
            "font-style": percentageStyle + "!important",
            "font-size": generateCSSUnit(percentagefontSize, percentagefontSizeType) + "!important",
        },
        " .premium-progress-bar-center-label": {
            "color": labelColor,
            "font-weight": LabelWeight + "!important",
            "letter-spacing": LabelLetter + "px" + "!important",
            "text-transform": LabelUpper ? "uppercase" : "none" + "!important",
            "font-style": LabelStyle + "!important",
            "font-size": generateCSSUnit(LabelfontSize, LabelfontSizeType) + "!important",
        },
        " .premium-progress-bar-percentage": {
            "color": percentageColor,
            "font-weight": percentageWeight + "!important",
            "letter-spacing": percentageLetter + "px" + "!important",
            "font-style": percentageStyle + "!important",
            "font-size": generateCSSUnit(percentagefontSize, percentagefontSizeType) + "!important",
        },
        // " .premium-progress-bar-progress-bar": {
        //     "width": progress + "%" + "!important",
        // },
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
            "font-size": generateCSSUnit(percentagefontSizeMobile, percentagefontSizeType) + "!important",
        },
        " .premium-progress-bar-center-label": {
            "font-size": generateCSSUnit(LabelfontSizeMobile, LabelfontSizeType) + "!important",
        },
        " .premium-progress-bar-percentage": {
            "font-size": generateCSSUnit(percentagefontSizeMobile, percentagefontSizeType) + "!important",
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
            "font-size": generateCSSUnit(percentagefontSizeTablet, percentagefontSizeType) + "!important",
        },
        " .premium-progress-bar-center-label": {
            "font-size": generateCSSUnit(LabelfontSizeTablet, LabelfontSizeType) + "!important",
        },
        " .premium-progress-bar-percentage": {
            "font-size": generateCSSUnit(percentagefontSizeTablet, percentagefontSizeType) + "!important",
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