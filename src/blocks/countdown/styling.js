import generateCSS from '../../../assets/js/blocks/generateCss';
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit';

function styling(props) {
    const {

        block_id,
        classMigrate
    } = props.attributes;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}


    let styling_css = ""
    var id = `#premium-countdown-${block_id}`
    if (classMigrate) {
        id = `.premium-countdown-${block_id}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    return styling_css
}
export default styling;