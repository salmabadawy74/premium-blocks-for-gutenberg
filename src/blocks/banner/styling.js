import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling(props) {
    const {
        titleSizeUnit,
        titleSize,
        titleSizeTablet,
        titleSizeMobile,
        descSizeUnit,
        descSize,
        descSizeTablet,
        descSizeMobile,
        block_id,
        classMigrate
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-banner__title_wrap .premium-banner__title": {
            "font-size": generateCSSUnit(titleSize, titleSizeUnit)
        },
        " .premium-banner__desc": {
            "font-size": generateCSSUnit(descSize, descSizeUnit)
        }
    }
    tablet_selectors = {
        " .premium-banner__title_wrap .premium-banner__title": {
            "font-size": generateCSSUnit(titleSizeTablet, titleSizeUnit)
        },
        " .premium-banner__desc": {
            "font-size": generateCSSUnit(descSizeTablet, descSizeUnit)
        }
    }
    mobile_selectors = {
        " .premium-banner__title_wrap .premium-banner__title": {
            "font-size": generateCSSUnit(titleSizeMobile, titleSizeUnit)
        },
        " .premium-banner__desc": {
            "font-size": generateCSSUnit(descSizeMobile, descSizeUnit)
        }
    }

    var styling_css = ""
    var id = `#premium-banner-${block_id}`
    if (classMigrate) {
        id = `.premium-banner-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling;