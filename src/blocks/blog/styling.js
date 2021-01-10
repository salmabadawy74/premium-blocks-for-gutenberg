import generateCSS from "./GenerateCss";
import generateCSSUnit from "./GenerateCssUnit";
function styling(props) {
  const {
    classMigrate,
    marginBottomType,
    marginBottomMobile,
    marginBottomTablet,
    marginBottom,
    cols,
    colsMobile,
    colsTablet,
  } = props.attributes;
  const { latestPosts } = props;
  var selectors = {};
  var tablet_selectors = {};
  var mobile_selectors = {};
  selectors = {
    "  .premium-blog-post-container .premium-blog-entry-title h2": {
      "margin-bottom": generateCSSUnit(marginBottom, marginBottomType),
    },
  };
  mobile_selectors = {
    " .premium-blog-post-container .premium-blog-entry-title h2": {
      "margin-bottom": generateCSSUnit(marginBottomMobile, marginBottomType),
    },
  };
  tablet_selectors = {
    " .premium-blog-post-container .premium-blog-entry-title h2": {
      "margin-bottom": generateCSSUnit(marginBottomTablet, marginBottomType),
    },
  };
  if (latestPosts) {
    latestPosts.map((post, index) => {
      selectors[
        " .premium-blog-post-outer-container" +
          index +
          ".premium-blog-post-container .premium-blog-entry-title h2"
      ] = {
        marginBottom: post.marginBottom,
      };
      selectors[" .premium-blog-post-outer-container" + index] = {
        "width": `${100 / cols}%`,
      };

      mobile_selectors[
        "  .premium-blog-post-outer-container" +
          index +
          " .premium-blog-post-container .premium-blog-entry-title h2"
      ] = {
        "margin-bottom": generateCSSUnit(marginBottomMobile, marginBottomType),
      };
      mobile_selectors[
        "  .premium-blog-post-outer-container" +
          index 
      ] = {
        "width": generateCSSUnit(marginBottomMobile, marginBottomType),
      };
      tablet_selectors[
        "  .premium-blog-post-outer-container" +
          index +
          " .premium-blog-post-container .premium-blog-entry-title h2"
      ] = {
        "margin-bottom": generateCSSUnit(marginBottomTablet, marginBottomType),
      };
    });
  }
  let styling_css = "";
  let id = `#premium-blog-${props.clientId}`;
  if (classMigrate) {
    id = `.premium-blog-${props.clientId}`;
  }
  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");
  console.log(styling_css);
  return styling_css;
}
export default styling;
