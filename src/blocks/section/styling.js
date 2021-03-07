import generateCSS from "../../../assets/js/blocks/generateCss";

function styling(props) {
    const {
        block_id,
        classMigrate,
        showDesk,
        showTablet,
        showMobile,
    } = props.attributes;

    var selectors = {};
    var tablet_selectors = {};
    var mobile_selectors = {};

    selectors = {
        " .premium-container": {
            display: showDesk ? "none" : "block",
        },
    };

    tablet_selectors = {
        " .premium-container": {
            display: showTablet ? "none" : "block",
        },
    };

    mobile_selectors = {
        " .premium-container": {
            display: showMobile ? "none" : "block",
        },
    };

    var styling_css = "";

    var id = `#premium-container-${block_id}`;
    if (classMigrate) {
        id = `.premium-container-${block_id}`;
    }

    styling_css = generateCSS( selectors, id );

    styling_css += generateCSS(tablet_selectors, id, true, "tablet");

    styling_css += generateCSS(mobile_selectors, id, true, "mobile");

    return styling_css;
}

export default styling;
