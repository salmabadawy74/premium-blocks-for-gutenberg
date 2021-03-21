import generateCSS from '../../../assets/js/blocks/generateCss'
import generateCSSUnit from '../../../assets/js/blocks/generateCssUnit'

function styling(props) {
    const {
        block_id,
        videoBoxId,
        classMigrate,
        videoDescSizeUnit,
        videoDescSize,
        videoDescSizeMobile,
        videoDescSizeTablet,
    } = props.attributes;

    let selectors = {}
    let tablet_selectors = {}
    let mobile_selectors = {}

    selectors = {
        " .premium-video-box__desc_text": {
            "font-size": generateCSSUnit(videoDescSize, videoDescSizeUnit)
        }
    };

    tablet_selectors = {
        " .premium-video-box__desc_text": {
            "font-size": generateCSSUnit(videoDescSizeTablet, videoDescSizeUnit)
        }
    };

    mobile_selectors = {
        " .premium-video-box__desc_text": {
            "font-size": generateCSSUnit(videoDescSizeMobile, videoDescSizeUnit)
        }
    }

    var styling_css = ""
    var id = `.premium-video-box-${block_id}`
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
