import generateCSS from '../../../assets/js/blocks/generateCss'
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {
    const {
        classMigrate,
        block_id,
        authorSizeUnit,
        authorSizeMobile,
        authorSizeTablet,
        authorSize,
        authorComSize,
        authorComSizeUnit,
        authorComSizeMobile,
        authorComSizeTablet,
        bodySize,
        bodySizeUnit,
        bodySizeMobile,
        bodySizeTablet,
    } = props.attributes;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        " .premium-testimonial__author": {
            "font-size": generateCSSUnit(authorSize, authorSizeUnit)
        },
        " .premium-testimonial__author_comp": {
            "font-size": generateCSSUnit(authorComSize, authorComSizeUnit)
        },
        ' .premium-testimonial__text': {
            "font-size": generateCSSUnit(bodySize, bodySizeUnit)
        }
    };

    tablet_selectors = {
        " .premium-testimonial__author": {
            "font-size": generateCSSUnit(authorSizeTablet, authorSizeUnit)
        },
        " .premium-testimonial__author_comp": {
            "font-size": generateCSSUnit(authorComSizeTablet, authorComSizeUnit)
        },
        ' .premium-testimonial__text': {
            "font-size": generateCSSUnit(bodySizeTablet, bodySizeUnit)
        }
    };

    mobile_selectors = {
        " .premium-testimonial__author": {
            "font-size": generateCSSUnit(authorSizeMobile, authorSizeUnit)
        },
        " .premium-testimonial__author_comp": {
            "font-size": generateCSSUnit(authorComSizeMobile, authorComSizeUnit)
        },
        ' .premium-testimonial__text': {
            "font-size": generateCSSUnit(bodySizeMobile, bodySizeUnit)
        }
    }

    var styling_css = ""
    var id = `#premium-testimonial-${block_id}`
    if (classMigrate) {
        id = `.premium-testimonial-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")
    console.log(styling_css)

    return styling_css


}
export default styling;