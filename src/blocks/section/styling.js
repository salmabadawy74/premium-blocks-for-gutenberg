import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling(props) {
    const {
        block_id,
        classMigrate,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginTopTablet,
        marginBottomTablet,
        marginLeftTablet,
        marginRightTablet,
        marginTopMobile,
        marginBottomMobile,
        marginLeftMobile,
        marginRightMobile,
        marginUnit,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        paddingTopTablet,
        paddingRightTablet,
        paddingBottomTablet,
        paddingLeftTablet,
        paddingTopMobile,
        paddingRightMobile,
        paddingBottomMobile,
        paddingLeftMobile,
        paddingUnit,
    } = props.attributes;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTop, paddingUnit),
            "padding-right": generateCSSUnit(paddingRight, paddingUnit),
            "padding-bottom": generateCSSUnit(paddingBottom, paddingUnit),
            "padding-left": generateCSSUnit(paddingLeft, paddingUnit),
            "margin-top": generateCSSUnit(marginTop, marginUnit),
            "margin-right": generateCSSUnit(marginRight, marginUnit),
            "margin-bottom": generateCSSUnit(marginBottom, marginUnit),
            "margin-left": generateCSSUnit(marginLeft, marginUnit)

        },

    }

    tablet_selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTopTablet, paddingUnit),
            "padding-right": generateCSSUnit(paddingRightTablet, paddingUnit),
            "padding-bottom": generateCSSUnit(paddingBottomTablet, paddingUnit),
            "padding-left": generateCSSUnit(paddingLeftTablet, paddingUnit),
            "margin-top": generateCSSUnit(marginTopTablet, marginUnit),
            "margin-right": generateCSSUnit(marginRightTablet, marginUnit),
            "margin-bottom": generateCSSUnit(marginBottomTablet, marginUnit),
            "margin-left": generateCSSUnit(marginLeftTablet, marginUnit)
        },


    }

    mobile_selectors = {
        " ": {
            "padding-top": generateCSSUnit(paddingTopMobile, paddingUnit),
            "padding-right": generateCSSUnit(paddingRightMobile, paddingUnit),
            "padding-bottom": generateCSSUnit(paddingBottomMobile, paddingUnit),
            "padding-left": generateCSSUnit(paddingLeftMobile, paddingUnit),
            "margin-top": generateCSSUnit(marginTopMobile, marginUnit),
            "margin-right": generateCSSUnit(marginRightMobile, marginUnit),
            "margin-bottom": generateCSSUnit(marginBottomMobile, marginUnit),
            "margin-left": generateCSSUnit(marginLeftMobile, marginUnit)
        },

    }

    let styling_css = ''
    let id = `#premium-container-${block_id}`
    if (classMigrate) {
        id = `.premium-container-${block_id}`
    }


    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling