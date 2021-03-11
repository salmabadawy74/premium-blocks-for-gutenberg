import generateCSS from '../../../assets/js/blocks/generateCss'
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling ( props ) {
    const {
        videoBoxId,
        classMigrate,


     } = props;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        
    };

    tablet_selectors = {
        
    };

    mobile_selectors = {
        
    }

    var styling_css = ""
    var id = `.premium-video-box`
    if (classMigrate) {
       id = `#${videoBoxId}`
    }

    styling_css = generateCSS(selectors, id)
    styling_css += generateCSS(tablet_selectors, id, true, "tablet")

    styling_css += generateCSS(mobile_selectors, id, true, "mobile")

    console.log(styling_css)

    return styling_css

 }
export default styling;
