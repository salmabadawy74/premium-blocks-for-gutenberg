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
        secondpaddingBottomType,
        switchRadius,
        switchRadiusType,
        firstContentfontSizeTablet,
        firstContentfontSizeType,
        firstContentfontSize,
        firstContentfontSizeMobile,
        firstContentLetter,
        firstContentStyle,
        firstContentUpper,
        firstContentWeight,
        secondContentfontSize,
        secondContentfontSizeTablet,
        secondContentfontSizeType,
        secondContentfontSizeMobile,
        secondContentUpper,
        secondContentWeight,
        secondContentStyle,
        secondContentLetter
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
            "background": firstStateColor,
            "border-radius" : generateCSSUnit(switchRadius , switchRadiusType)
        },
        " .premium-content-switcher-toggle-switch-label input:checked + .premium-content-switcher-toggle-switch-slider::before": {
            "background": secondStateColor,
            "border-radius" : generateCSSUnit(switchRadius , switchRadiusType)
        },
        " .premium-content-switcher-toggle-switch-slider": {
            "background": switcherBGColor
        },
        " .premium-content-switcher-first-label": {
            "margin-right": display=='inline' ? generateCSSUnit(labelSpacing, labelSpacingType) : "",
            "margin-bottom": display=='block' ? generateCSSUnit(labelSpacing, labelSpacingType) : ""
        },
        " .premium-content-switcher-first-label h3": {
            "font-size": generateCSSUnit(firstLabelfontSize, firstLabelfontSizeType)
        },
        " .premium-content-switcher-second-label": {
            "margin-left": display=='inline' ? generateCSSUnit(labelSpacing, labelSpacingType) : "",
            "margin-top": display=='block' ? generateCSSUnit(labelSpacing, labelSpacingType) : ""
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
        " .premium-content-switcher-first-content": {
            "font-size": generateCSSUnit(firstContentfontSize, firstContentfontSizeType) + "!important",
            "letter-spacing" : firstContentLetter + "px" + "!important",
            "text-transform" : firstContentUpper ? "uppercase" : "none" + "!important",
            "font-style" : firstContentStyle + "!important",
            "font-weight" : firstContentWeight + "!important",
        },
        " .premium-content-switcher-second-content": {
            "font-size": generateCSSUnit(secondContentfontSize, secondContentfontSizeType) + "!important",
            "letter-spacing" : secondContentLetter + "px" + "!important",
            "text-transform" : secondContentUpper ? "uppercase" : "none" + "!important",
            "font-style" : secondContentStyle + "!important",
            "font-weight" : secondContentWeight + "!important",
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
            "margin-right": display=='inline' ? generateCSSUnit(labelSpacingMobile, labelSpacingType) : "",
            "margin-bottom": display=='block' ? generateCSSUnit(labelSpacingMobile, labelSpacingType) : ""
        },
        " .premium-content-switcher-first-label h3": {
            "font-size": generateCSSUnit(firstLabelfontSizeMobile, firstLabelfontSizeType)
        },
        " .premium-content-switcher-second-label": {
            "margin-left": display=='inline' ? generateCSSUnit(labelSpacingMobile, labelSpacingType): "",
            "margin-top": display=='block' ? generateCSSUnit(labelSpacingMobile, labelSpacingType) : ""
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
        " .premium-content-switcher-first-content": {
            "font-size": generateCSSUnit(firstContentfontSizeMobile, firstContentfontSizeType) + "!important"
        },
        " .premium-content-switcher-second-content": {
            "font-size": generateCSSUnit(secondContentfontSizeMobile, secondContentfontSizeType) + "!important"
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
            "margin-right": display=='inline' ? generateCSSUnit(labelSpacingTablet, labelSpacingType): "",
            "margin-bottom": display=='block' ? generateCSSUnit(labelSpacingTablet, labelSpacingType) : ""
        },
        " .premium-content-switcher-first-label h3": {
            "font-size": generateCSSUnit(firstLabelfontSizeTablet, firstLabelfontSizeType)
        },
        " .premium-content-switcher-second-label": {
            "margin-left": display=='inline' ? generateCSSUnit(labelSpacingTablet, labelSpacingType) : "",
            "margin-top": display=='block' ? generateCSSUnit(labelSpacingTablet, labelSpacingType) : ""
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
        " .premium-content-switcher-first-content": {
            "font-size": generateCSSUnit(firstContentfontSizeTablet, firstContentfontSizeType) + "!important"
        },
        " .premium-content-switcher-second-content": {
            "font-size": generateCSSUnit(secondContentfontSizeTablet, secondContentfontSizeType) + "!important"
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