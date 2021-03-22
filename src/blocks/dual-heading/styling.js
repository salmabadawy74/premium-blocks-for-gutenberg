import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {

    const {
        block_id,
        classMigrate,
        firstSize,
        firstSizeUnit,
        firstSizeTablet,
        firstSizeMobile,
        secondSize,
        secondSizeUnit,
        secondSizeTablet,
        secondSizeMobile
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-dheading-block__first": {
            "font-size": generateCSSUnit(firstSize, firstSizeUnit)
        },
        " .premium-dheading-block__second": {
            'font-size': generateCSSUnit(secondSize, secondSizeUnit)
        }
    }
    tablet_selectors = {
        " .premium-dheading-block__first": {
            "font-size": generateCSSUnit(firstSizeTablet, firstSizeUnit)
        },
        " .premium-dheading-block__second": {
            'font-size': generateCSSUnit(secondSizeTablet, secondSizeUnit)
        }
    }
    mobile_selectors = {
        " .premium-dheading-block__first": {
            "font-size": generateCSSUnit(firstSizeMobile, firstSizeUnit)
        },
        " .premium-dheading-block__second": {
            'font-size': generateCSSUnit(secondSizeMobile, secondSizeUnit)
        }
    }

    var styling_css = ""
    var id = `#premium-dheading-block-${block_id}`
    if (classMigrate) {
        id = `.premium-dheading-${block_id}`
    }

    styling_css = generateCSS(selectors, id)

    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling;