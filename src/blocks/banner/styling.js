import generateCSS from '../../../assets/js/blocks/generateCss';

function styling ( props ) { 
    const {
        titleSize,
        titleSizeTablet,
        titleSizeMobile,
        id:block_id,
        classMigrate
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-banner__title": {
            "font-size":titleSize + 'px',
        }
    }
    tablet_selectors = {
        " .premium-banner__title": {
            "font-size": titleSizeTablet + 'px'
        }
    }
    mobile_selectors = {
        " .premium-banner__title": {
             "font-size" : titleSizeMobile + 'px'
         }
    }
    
    var styling_css = ""
    var id = `#premium-banner-${ block_id}`
    if (classMigrate) {
        id=`.premium-banner`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css

}
export default styling;