import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {

    const {
        numberSizeUnit,
        numberSize,
        numberSizeMobile,
        numberSizeTablet,
        titleSizeUnit,
        titleSize,
        titleSizeMobile,
        titleSizeTablet,
        prefixSize,
        prefixSizeUnit,
        prefixSizeTablet,
        prefixSizeMobile,
        suffixSizeUnit,
        suffixSize,
        suffixSizeTablet,
        suffixSizeMobile,
        block_id,
        classMigrate
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-countup__increment": {
            "font-size": generateCSSUnit(numberSize, numberSizeUnit),
        },
        " .premium-countup__title": {
            "font-size": generateCSSUnit(titleSize, titleSizeUnit)
        },
        " .premium-countup__prefix": {
            "font-size": generateCSSUnit(prefixSize, prefixSizeUnit)
        },
        " .premium-countup__suffix": {
            "font-size": generateCSSUnit(suffixSize, suffixSizeUnit)
        }
    }
    tablet_selectors = {
        " .premium-countup__increment": {
            "font-size": generateCSSUnit(numberSizeTablet, numberSizeUnit),
        },
        " .premium-countup__title": {
            "font-size": generateCSSUnit(titleSizeTablet, titleSizeUnit)
        },
        " .premium-countup__prefix": {
            "font-size": generateCSSUnit(prefixSizeTablet, prefixSizeUnit)
        },
        " .premium-countup__suffix": {
            "font-size": generateCSSUnit(suffixSizeTablet, suffixSizeUnit)
        }
    }
    mobile_selectors = {
        " .premium-countup__increment": {
            "font-size": generateCSSUnit(numberSizeMobile, numberSizeUnit),
        },
        " .premium-countup__title": {
            "font-size": generateCSSUnit(titleSizeMobile, titleSizeUnit)
        },
        " .premium-countup__prefix": {
            "font-size": generateCSSUnit(prefixSizeMobile, prefixSizeUnit)
        },
        " .premium-countup__suffix": {
            "font-size": generateCSSUnit(suffixSizeMobile, suffixSizeUnit)
        }
    }

    var styling_css = ""
    var id = `.premium-countup-${block_id}`
    if (classMigrate) {
        id = `#premium-countup-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css


}
export default styling;