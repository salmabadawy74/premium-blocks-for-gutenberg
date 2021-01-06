import generateCSS from "./GenerateCss";
import generateCSSUnit from "./GenerateCssUnit";
alert("FFFFFFF");
function styling(props) {
  alert("selector1");
  const {
    classMigrate,
    marginBottomType,
    marginBottomMobile,
    marginBottomTablet,
    marginBottom,
  } = props.attributes;
  const { latestPosts } = props;
  var selectors = {};
  var tablet_selectors = {};
  var mobile_selectors = {};

  selectors = {
    " .premium-blog-entry-title": {
      margin: generateCSSUnit(marginBottom, marginBottomType),
    },
  };

  mobile_selectors = {
    " .premium-blog-entry-title": {
      width: generateCSSUnit(marginBottomMobile, marginBottomType),
    },
  };

  tablet_selectors = {
    " .premium-blog-entry-title": {
      width: generateCSSUnit(marginBottomTablet, marginBottomType),
    },
  };
  alert("selector5");
  latestPosts.map(( index) => {
    selectors[
      " .premium-blog-post-outer-container" +
        index +
        ".premium-blog-entry-title"
    ] = {
      marginBottom: marginBottom,
    };

    mobile_selectors[
      "  .premium-blog-post-outer-container" +
        index +
        " .premium-blog-entry-title"
    ] = {
      marginBottom: generateCSSUnit(marginBottomMobile, marginBottomType),
    };

    tablet_selectors[
      "  .premium-blog-post-outer-container" +
        index +
        " .premium-blog-entry-title"
    ] = {
      marginBottom: generateCSSUnit(marginBottomTablet, marginBottomType),
    };
    //margins for Items
  });

  let styling_css = "";
  let id = `#premium-blog-${props.clientId}`;
  if (classMigrate) {
    alert("selector6");
    id = `.premium-block-${props.clientId}`;
  }

  styling_css = generateCSS(selectors, id);

  styling_css += generateCSS(tablet_selectors, id, true, "tablet");

  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default styling;
