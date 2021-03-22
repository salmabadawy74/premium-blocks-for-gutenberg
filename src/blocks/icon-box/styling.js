import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {
    const {
        block_id,
        classMigrate,
        titleSizeUnit,
        descSizeUnit,
        descSize,
        descSizeTablet,
        descSizeMobile,
        titleSize,
        titleSizeTablet,
        titleSizeMobile,
        btnSizeUnit,
        btnSize,
        btnSizeTablet,
        btnSizeMobile
    } = props.attributes;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        "  .premium-icon-box__title": {
            "font-size": generateCSSUnit(titleSize, titleSizeUnit)
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit(descSize, descSizeUnit)
        },
        " .premium-icon-box__btn": {
            "font-size": generateCSSUnit(btnSize, btnSizeUnit)
        }
    }

    tablet_selectors = {
        " .premium-icon-box__title": {
            "font-size": generateCSSUnit(titleSizeTablet, titleSizeUnit)
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit(descSizeTablet, descSizeUnit)
        },
        " .premium-icon-box__btn": {
            "font-size": generateCSSUnit(btnSizeTablet, btnSizeUnit)
        }
    }

    mobile_selectors = {
        " .premium-icon-box__title": {
            "font-size": generateCSSUnit(titleSizeMobile, titleSizeUnit)
        },
        " .premium-icon-box__desc": {
            "font-size": generateCSSUnit(descSizeMobile, descSizeUnit)
        },
        " .premium-icon-box__btn": {
            "font-size": generateCSSUnit(btnSizeMobile, btnSizeUnit)
        }
    }

    let styling_css = ''
    let id = `#premium-icon-box-${block_id}`
    if (classMigrate) {
        id = `.premium-icon-box-${block_id}`
    }


    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")
    console.log(styling_css)
    return styling_css

}
export default styling