import generateCSS from '../../../assets/js/blocks/generateCss'
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {
    const {
        classMigrate,
        block_id,
        titleSizeUnit,
        titleSizeMobile,
        titleSizeTablet,
        titleSize,
        slashSizeUnit,
        slashSize,
        slashSizeMobile,
        slashSizeTablet,
        currSizeUnit,
        currSize,
        currSizeMobile,
        currSizeTablet,
        valSizeUnit,
        valSize,
        valSizeMobile,
        valSizeTablet,
        divSizeUnit,
        divSize,
        divSizeMobile,
        divSizeTablet,
        durSizeUnit,
        durSize,
        durSizeMobile,
        durSizeTablet,
        listSizeUnit,
        listSize,
        listSizeMobile,
        listSizeTablet,
        descSizeUnit,
        descSize,
        descSizeMobile,
        descSizeTablet,
        btnSizeUnit,
        btnSize,
        btnSizeMobile,
        btnSizeTablet,
        badgeTextUnit,
        badgeTextSize,
        badgeTextSizeMobile,
        badgeTextSizeTablet,
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-pricing-table__title_wrap .premium-pricing-table__title": {
            "font-size": generateCSSUnit(titleSize, titleSizeUnit)
        },
        " .premium-pricing-table__slash": {
            "font-size": generateCSSUnit(slashSize, slashSizeUnit)
        },
        " .premium-pricing-table__currency": {
            "font-size": generateCSSUnit(currSize, currSizeUnit)
        },
        " .premium-pricing-table__val": {
            "font-size": generateCSSUnit(valSize, valSizeUnit)
        },
        " .premium-pricing-table__divider": {
            "font-size": generateCSSUnit(divSize, divSizeUnit)
        },
        ' .premium-pricing-table__dur': {
            "font-size": generateCSSUnit(durSize, durSizeUnit)
        },
        ' .premium-pricing-table__list': {
            "font-size": generateCSSUnit(listSize, listSizeUnit)
        },
        ' .premium-pricing-table__desc': {
            "font-size": generateCSSUnit(descSize, descSizeUnit)
        },
        ' .premium-pricing-table__button_link': {
            "font-size": generateCSSUnit(btnSize, btnSizeUnit)
        },
        " .premium-pricing-table__badge_wrap  span": {
            "font-size": generateCSSUnit(badgeTextSize, badgeTextUnit)
        }
    }

    tablet_selectors = {
        " .premium-pricing-table__title": {
            "font-size": generateCSSUnit(titleSizeTablet, titleSizeUnit)
        },
        " .premium-pricing-table__slash": {
            "font-size": generateCSSUnit(slashSizeTablet, slashSizeUnit)
        },
        " .premium-pricing-table__currency": {
            "font-size": generateCSSUnit(currSizeTablet, currSizeUnit)
        },
        " .premium-pricing-table__val": {
            "font-size": generateCSSUnit(valSizeTablet, valSizeUnit)
        },
        " .premium-pricing-table__divider": {
            "font-size": generateCSSUnit(divSizeTablet, divSizeUnit)
        },
        ' .premium-pricing-table__dur': {
            "font-size": generateCSSUnit(durSizeTablet, durSizeUnit)
        },
        ' .premium-pricing-table__list': {
            "font-size": generateCSSUnit(listSizeTablet, listSizeUnit)
        },
        ' .premium-pricing-table__desc': {
            "font-size": generateCSSUnit(descSizeTablet, descSizeUnit)
        },
        ' .premium-pricing-table__button_link': {
            "font-size": generateCSSUnit(btnSizeTablet, btnSizeUnit)
        },
        " .premium-pricing-table__badge_wrap  span": {
            "font-size": generateCSSUnit(badgeTextSizeTablet, badgeTextUnit)
        }
    }

    mobile_selectors = {
        " .premium-pricing-table__title": {
            "font-size": generateCSSUnit(titleSizeMobile, titleSizeUnit)
        },
        " .premium-pricing-table__slash": {
            "font-size": generateCSSUnit(slashSizeMobile, slashSizeUnit)
        },
        " .premium-pricing-table__currency": {
            "font-size": generateCSSUnit(currSizeMobile, currSizeUnit)
        },
        " .premium-pricing-table__val": {
            "font-size": generateCSSUnit(valSizeMobile, valSizeUnit)
        },
        " .premium-pricing-table__divider": {
            "font-size": generateCSSUnit(divSizeMobile, divSizeUnit)
        },
        ' .premium-pricing-table__dur': {
            "font-size": generateCSSUnit(durSizeMobile, durSizeUnit)
        },
        ' .premium-pricing-table__list': {
            "font-size": generateCSSUnit(listSizeMobile, listSizeUnit)
        },
        ' .premium-pricing-table__desc': {
            "font-size": generateCSSUnit(descSizeMobile, descSizeUnit)
        },
        ' .premium-pricing-table__button_link': {
            "font-size": generateCSSUnit(btnSizeMobile, btnSizeUnit)
        },
        " .premium-pricing-table__badge_wrap  span": {
            "font-size": generateCSSUnit(badgeTextSizeMobile, badgeTextUnit)
        }
    }

    var styling_css = ""
    var id = `#premium-pricing-table-${block_id}`
    if (classMigrate) {
        id = `.premium-pricing-table-${block_id}`
    }

    styling_css = generateCSS(selectors, id);

    styling_css += generateCSS(tablet_selectors, id, true, "tablet");

    styling_css += generateCSS(mobile_selectors, id, true, "mobile");

    return styling_css

}
export default styling;