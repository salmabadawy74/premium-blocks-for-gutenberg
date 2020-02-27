import generateCSS from './../icon-list/generateCss'
import generateCSSUnit from './../icon-list/generateCssUnit'

function styling(props) {

    const {
        switchSize,
        switchSizeTablet,
        switchSizeType,
        switchSizeMobile,
        classMigrate
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-content-switcher-toggle-switch": {
            "font-size": generateCSSUnit(switchSize, switchSizeType)
        }
    }

    mobile_selectors = {
        " .premium-content-switcher-toggle-switch": {
            "font-size": generateCSSUnit(switchSizeMobile, switchSizeType)
        }
    }

    tablet_selectors = {
        " .premium-content-switcher-toggle-switch": {
            "font-size": generateCSSUnit(switchSizeTablet, switchSizeType)
        }
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