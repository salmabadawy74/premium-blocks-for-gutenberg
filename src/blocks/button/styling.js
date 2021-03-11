import generateCSS from '../../../assets/js/blocks/generateCss';

function styling ( props ) { 
    const {
        textSize,
        textSizeTablet,
        textSizeMobile,
        id:block_id,
        classMigrate
    } = props.attributes;

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        " .premium-button": {
            "font-size":textSize + 'px',
        }
    }
    tablet_selectors = {
        " .premium-button": {
            "font-size": textSizeTablet + 'px'
        }
    }
    mobile_selectors = {
        " .premium-button": {
             "font-size" : textSizeMobile + 'px'
         }
    }
    
    var styling_css = ""
    var id = `#premium-button-wrap-${ block_id }`
    if (classMigrate) {
        id=`.premium-button__wrap`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css


}
export default styling;