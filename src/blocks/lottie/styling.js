import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling(props) {
    const {
        block_id,
        classMigrate,
        sizeUnit,
        size,
        sizeTablet,
        sizeMobile
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-lottie-animation svg  ": {
            "width": `${size}${sizeUnit} !important`,
            "height": `${size}${sizeUnit} !important`
        },

    }

    tablet_selectors = {
        " .premium-lottie-animation svg  ": {
            "width": `${sizeTablet}${sizeUnit} !important`,
            "height": `${sizeTablet}${sizeUnit} !important`
        },

    }

    mobile_selectors = {
        " .premium-lottie-animation svg  ": {
            "width": generateCSSUnit(sizeMobile, sizeUnit),
            "height": generateCSSUnit(sizeMobile, sizeUnit)
        },
    }

    var styling_css = ""
    var id = `#premium-lottie-${block_id}`
    if (classMigrate) {
        id = `.premium-lottie-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")


    return styling_css


}
export default styling