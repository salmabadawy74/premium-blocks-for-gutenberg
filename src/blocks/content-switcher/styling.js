import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

    const {
        switchSize,
        switchSizeTablet,
        switchSizeType,
        switchSizeMobile,
        classMigrate,
        display,
        bottomSpacingType,
        bottomSpacing,
        bottomSpacingMobile,
        bottomSpacingTablet,
        secondStateColor,
        firstStateColor,
        switcherBGColor,
        labelSpacingTablet,
        labelSpacingType,
        labelSpacing,
        labelSpacingMobile,
        firstLabelfontSizeTablet,
        firstLabelfontSize,
        firstLabelfontSizeType,
        firstLabelfontSizeMobile,
        secondLabelfontSize,
        secondLabelfontSizeMobile,
        secondLabelfontSizeTablet,
        secondLabelfontSizeType,
        firstContentHeightTablet,
        firstContentHeightType,
        firstContentHeight,
        firstContentHeightMobile,
        secondContentHeightTablet,
        secondContentHeightType,
        secondContentHeight,
        secondContentHeightMobile,
        firstpaddingTop,
        firstpaddingTopType,
        firstpaddingTopMobile,
        firstpaddingTopTablet,
        firstpaddingRight,
        firstpaddingRightMobile,
        firstpaddingRightTablet,
        firstpaddingRightType,
        firstpaddingLeft,
        firstpaddingLeftMobile,
        firstpaddingLeftTablet,
        firstpaddingLeftType,
        firstpaddingBottom,
        firstpaddingBottomMobile,
        firstpaddingBottomTablet,
        firstpaddingBottomType,
        secondpaddingTop,
        secondpaddingTopType,
        secondpaddingTopMobile,
        secondpaddingTopTablet,
        secondpaddingRight,
        secondpaddingRightMobile,
        secondpaddingRightTablet,
        secondpaddingRightType,
        secondpaddingLeft,
        secondpaddingLeftMobile,
        secondpaddingLeftTablet,
        secondpaddingLeftType,
        secondpaddingBottom,
        secondpaddingBottomMobile,
        secondpaddingBottomTablet,
        secondpaddingBottomType
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-content-switcher-toggle-switch": {
            "font-size": generateCSSUnit(switchSize, switchSizeType)
        },
        [" .premium-content-switcher-toggle-" + display]: {
            "margin-bottom": generateCSSUnit(bottomSpacing, bottomSpacingType)
        },
        " .premium-content-switcher-toggle-switch-slider::before": {
            "background": firstStateColor
        },
        " .premium-content-switcher-toggle-switch-label input:checked + .premium-content-switcher-toggle-switch-slider::before": {
            "background": secondStateColor
        },
        " .premium-content-switcher-toggle-switch-slider": {
            "background": switcherBGColor
        },
        " .premium-content-switcher-first-label": {
            "margin-right": generateCSSUnit(labelSpacing, labelSpacingType)
        },
        " .premium-content-switcher-first-label h3": {
            "font-size": generateCSSUnit(firstLabelfontSize, firstLabelfontSizeType)
        },
        " .premium-content-switcher-second-label": {
            "margin-left": generateCSSUnit(labelSpacing, labelSpacingType)
        },
        " .premium-content-switcher-second-label h3": {
            "font-size": generateCSSUnit(secondLabelfontSize, secondLabelfontSizeType)
        },
        " .premium-content-switcher-first-list": {
            "min-height": generateCSSUnit(firstContentHeight, firstContentHeightType),
            "padding-top": generateCSSUnit(firstpaddingTop, firstpaddingTopType),
			"padding-bottom": generateCSSUnit(firstpaddingBottom, firstpaddingBottomType),
			"padding-right": generateCSSUnit(firstpaddingRight, firstpaddingRightType),
			"padding-left": generateCSSUnit(firstpaddingLeft, firstpaddingLeftType),
		},
        " .premium-content-switcher-second-list": {
            "min-height": generateCSSUnit(secondContentHeight, secondContentHeightType),
            "padding-top": generateCSSUnit(secondpaddingTop, secondpaddingTopType),
			"padding-bottom": generateCSSUnit(secondpaddingBottom, secondpaddingBottomType),
			"padding-right": generateCSSUnit(secondpaddingRight, secondpaddingRightType),
			"padding-left": generateCSSUnit(secondpaddingLeft, secondpaddingLeftType),
        },
    }

    mobile_selectors = {
        " .premium-content-switcher-toggle-switch": {
            "font-size": generateCSSUnit(switchSizeMobile, switchSizeType)
        },
        [" .premium-content-switcher-toggle-" + display]: {
            "margin-bottom": generateCSSUnit(bottomSpacingMobile, bottomSpacingType)
        },
        " .premium-content-switcher-first-label": {
            "margin-right": generateCSSUnit(labelSpacingMobile, labelSpacingType)
        },
        " .premium-content-switcher-first-label h3": {
            "font-size": generateCSSUnit(firstLabelfontSizeMobile, firstLabelfontSizeType)
        },
        " .premium-content-switcher-second-label": {
            "margin-left": generateCSSUnit(labelSpacingMobile, labelSpacingType)
        },
        " .premium-content-switcher-second-label h3": {
            "font-size": generateCSSUnit(secondLabelfontSizeMobile, secondLabelfontSizeType)
        },
        " .premium-content-switcher-first-list": {
            "min-height": generateCSSUnit(firstContentHeightMobile, firstContentHeightType),
            "padding-top": generateCSSUnit(firstpaddingTopMobile, firstpaddingTopType),
			"padding-bottom": generateCSSUnit(firstpaddingBottomMobile, firstpaddingBottomType),
			"padding-right": generateCSSUnit(firstpaddingRightMobile, firstpaddingRightType),
			"padding-left": generateCSSUnit(firstpaddingLeftMobile, firstpaddingLeftType),
        },
        " .premium-content-switcher-second-list": {
            "min-height": generateCSSUnit(secondContentHeightMobile, secondContentHeightType),
            "padding-top": generateCSSUnit(secondpaddingTopMobile, secondpaddingTopType),
			"padding-bottom": generateCSSUnit(secondpaddingBottomMobile, secondpaddingBottomType),
			"padding-right": generateCSSUnit(secondpaddingRightMobile, secondpaddingRightType),
			"padding-left": generateCSSUnit(secondpaddingLeftMobile, secondpaddingLeftType),
        },
    }

    tablet_selectors = {
        " .premium-content-switcher-toggle-switch": {
            "font-size": generateCSSUnit(switchSizeTablet, switchSizeType)
        },
        [" .premium-content-switcher-toggle-" + display]: {
            "margin-bottom": generateCSSUnit(bottomSpacingTablet, bottomSpacingType)
        },
        " .premium-content-switcher-first-label": {
            "margin-right": generateCSSUnit(labelSpacingTablet, labelSpacingType)
        },
        " .premium-content-switcher-first-label h3": {
            "font-size": generateCSSUnit(firstLabelfontSizeTablet, firstLabelfontSizeType)
        },
        " .premium-content-switcher-second-label": {
            "margin-left": generateCSSUnit(labelSpacingTablet, labelSpacingType)
        },
        " .premium-content-switcher-second-label h3": {
            "font-size": generateCSSUnit(secondLabelfontSizeTablet, secondLabelfontSizeType)
        },
        " .premium-content-switcher-first-list": {
            "min-height": generateCSSUnit(firstContentHeightTablet, firstContentHeightType),
            "padding-top": generateCSSUnit(firstpaddingTopTablet, firstpaddingTopType),
			"padding-bottom": generateCSSUnit(firstpaddingBottomTablet, firstpaddingBottomType),
			"padding-right": generateCSSUnit(firstpaddingRightTablet, firstpaddingRightType),
			"padding-left": generateCSSUnit(firstpaddingLeftTablet, firstpaddingLeftType),
        },
        " .premium-content-switcher-second-list": {
            "min-height": generateCSSUnit(secondContentHeightTablet, secondContentHeightType),
            "padding-top": generateCSSUnit(secondpaddingTopTablet, secondpaddingTopType),
			"padding-bottom": generateCSSUnit(secondpaddingBottomTablet, secondpaddingBottomType),
			"padding-right": generateCSSUnit(secondpaddingRightTablet, secondpaddingRightType),
			"padding-left": generateCSSUnit(secondpaddingLeftTablet, secondpaddingLeftType),
        },
    }

    var styling_css = ""
    var id = `#premium-content-switcher-${props.clientId}`
    if (classMigrate) {
        id = `.premium-block-${props.clientId}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css
}

export default styling