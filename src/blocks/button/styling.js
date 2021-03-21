import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {
    const {
        textSizeUnit,
        textSize,
        textSizeTablet,
        textSizeMobile,
        block_id,
        classMigrate
    } = props.attributes;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        " .premium-button": {
            "font-size": generateCSSUnit(textSize, textSizeUnit),
        }
    }
    tablet_selectors = {
        " .premium-button": {
            "font-size": generateCSSUnit(textSizeTablet, textSizeUnit)
        }
    }
    mobile_selectors = {
        " .premium-button": {
            "font-size": generateCSSUnit(textSizeMobile, textSizeUnit)
        }
    }

    let styling_css = ""
    var id = `#premium-button-wrap-${block_id}`
    if (classMigrate) {
        id = `.premium-button-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css


}
export default styling;