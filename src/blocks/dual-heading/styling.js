import generateCSS from '../../../assets/js/blocks/generateCss';

function styling ( props ) { 

    const {
        block_id,
        classMigrate,
        firstSize,
        firstSizeTablet,
        firstSizeMobile,
        secondSize,
        secondSizeTablet,
        secondSizeMobile
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-dheading-block__first": {
            "font-size": firstSize + 'px'
        },
        " .premium-dheading-block__second": {
            'font-size' : secondSize +'px'
        }
    }
    tablet_selectors = {
        " .premium-dheading-block__first": {
            "font-size": firstSizeTablet + 'px'
        },
        " .premium-dheading-block__second": {
            'font-size' : secondSizeTablet +'px'
        }
    }
    mobile_selectors = {
        " .premium-dheading-block__first": {
            "font-size": firstSizeMobile + 'px'
        },
        " .premium-dheading-block__second": {
            'font-size' : secondSizeMobile +'px'
        }
    }
    
    var styling_css = ""
    var id = `#premium-dheading-block-${block_id}`
    if (classMigrate) {
        id=`.premium-dheading-block__container`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css




}
export default styling;