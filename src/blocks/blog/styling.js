import generateCSS from "./GenerateCss";
import generateCSSUnit from "./GenerateCssUnit";
function styling(props) {
  const {
    height,
    HeightU,
    classMigrate,
    marginBottomType,
    marginBottomMobile,
    marginBottomTablet,
    marginBottom,
    columns,
    mcolumns,
    tcolumns,
    thumbnail,
    thumbnailMobile,
    thumbnailTablet,
    PostmarginBottomType,
    PostmarginBottom,
    PostmarginBottomMobile,
    PostmarginBottomTablet,
    PostmarginTopType,
    PostmarginTop,
    PostmarginTopMobile,
    PostmarginTopTablet,
    postSpacingType,
    postSpacing,
    postSpacingMobile,
    postSpacingTablet,
    postContentfontSizeType,
    postContentfontSize,
    postContentfontSizeMobile,
    postContentfontSizeTablet,
    PostmarginRightType,
    PostmarginRight,
    PostmarginRightMobile,
    PostmarginRightTablet,
    PostmarginLeftType,
    PostmarginLeft,
    PostmarginLeftMobile,
    PostmarginLeftTablet,
    postContentLetter,
    postContentStyle,
    postContentUpper,
    postContentWeight,
    backgroundPostContent,
    containerShadowColor,
    containerShadowBlur,
    containerShadowHorizontal,
    containerShadowVertical,
    containerShadowPosition,
    textColor,
    rowGap,
    rowGapUnit,
    columnGap,
    filterPosition,
    overlayColor,
    bright,
    contrast,
    saturation,
    blur,
    hue,
    firstContentfontSize,
    secondContentfontSizeMobile,
    secondContentfontSizeTablet,
    firstContentfontSizeType,
    firstContentfontSizeMobile,
    firstContentWeight,
    firstContentStyle,
    firstContentUpper,
    firstContentLetter,
    typoColor,
    hoverColor,
    secondContentfontSize,
    secondContentfontSizeType,
    secondContentWeight,
    secondContentStyle,
    secondContentUpper,
    secondContentLetter,
    metaColor,
    linkColor,
    sepaColor,
    buttonfontSize,
    buttonfontSizeType,
    buttonWeight,
    buttonStyle,
    buttonUpper,
    buttonLetter,
    firstContentfontSizeTablet,
    buttonfontSizeMobile,
    buttonfontSizeTablet,
    buttonSpacingType,
    buttonSpacing,
    buttonSpacingMobile,
    buttonSpacingTablet,
    buttonColor,
    buttonhover,
    buttonBackground,
    hoverBackground,
    borderType,
    borderWidth,
    borderColor,
    borderRadius,
    buttonPaddingType,
    buttonPadding,
    buttonPaddingMobile,
    buttonPaddingTablet,
    tagsfontSize,
    tagsfontSizeType,
    tagsWeight,
    tagsStyle,
    tagsUpper,
    tagsLetter,
    tagColor,
    hoverTag,
    tagsfontSizeTablet,
    tagsfontSizeMobile,
    paginationPosition
  } = props.attributes;
  const { latestPosts } = props;
  var selectors = {};
  var tablet_selectors = {};
  var mobile_selectors = {};
  selectors = {
    " .premium-blog-post-outer-container": {
      "margin-bottom": generateCSSUnit(rowGap , rowGapUnit),
      "padding-right": `calc( ${columnGap}px/2 );`,
      "padding-left": `calc( ${columnGap}px/2 );`,
    },
    " .premium-blog-post-outer-container .premium-blog-post-container .premium-blog-content-wrapper ": {
      "text-align": `${filterPosition}`,
    },
    " .premium-blog-thumbnail-overlay": {
      "background-color": `${overlayColor}`,
    },
    " .premium-blog-post-outer-container img": {
      "object-fit": `${ thumbnail }`,
      "height": generateCSSUnit( height, HeightU )
    },
    " .premium-blog-post-outer-container:hover img": {

      filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
    },
    " .premium-blog-post-container .premium-blog-entry-title h2 a ": {
      "margin-bottom": generateCSSUnit(marginBottom, marginBottomType),
      "font-size": generateCSSUnit(firstContentfontSize,firstContentfontSizeType),
      "font-weight": `${firstContentWeight};`,
      "font-style": `${firstContentStyle};`,
      "text-transform": `${firstContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${firstContentLetter}px ;`,
      color: `${typoColor} !important ;`,
    },
    ".premium-blog-entry-title:hover a": {
      color: `${hoverColor};`,
    },
    " .premium-blog-even": {
      width: `${100 / columns}%`,
     
    },
    " .premium-blog-post-container .premium-blog-content-wrapper-inner p": {
      "font-size": generateCSSUnit(postContentfontSize,postContentfontSizeType) ,
      "margin-bottom":generateCSSUnit(PostmarginBottom,PostmarginBottomType)  ,
      "margin-top": generateCSSUnit(PostmarginTop, PostmarginTopType),
      "margin-right": generateCSSUnit (PostmarginRight, PostmarginRightType),
      "margin-left": generateCSSUnit (PostmarginLeft,PostmarginLeftType),
      " padding": generateCSSUnit (postSpacing ,postSpacingType),
      "font-weight": `${postContentWeight} !important;`,
      "font-style": `${postContentStyle};`,
      "text-transform": `${postContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${postContentLetter}px ;`,
      " color": `${textColor};`,
      "background-color": `${backgroundPostContent};`,
      "box-shadow": `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
    },
    " .premium-blog-meta-data": {
      "font-size":  generateCSSUnit(secondContentfontSize,secondContentfontSizeType),
      "font-weight": `${secondContentWeight};`,
      "font-style": `${secondContentStyle};`,
      "text-transform": `${secondContentUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${secondContentLetter}px ;`,
      color: `${metaColor};`,
    },
    " .premium-blog-meta-data:hover": {
      color: `${linkColor}`,
    },
    " .premium-blog-meta-separtor": {
      color: `${sepaColor};`,
    },
    " .premium-blog-excerpt-link-wrap ": {
      " padding": generateCSSUnit(buttonSpacing,buttonSpacingType),
    },
    " .premium-blog-excerpt-link-wrap .premium-blog-excerpt-link": {
      "font-size": generateCSSUnit(buttonfontSize,buttonfontSizeType),
      "font-weight": `${buttonWeight};`,
      "font-style": `${buttonStyle};`,
      "text-transform": `${buttonUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${buttonLetter}px ;`,
      color: ` ${buttonColor}`,
      background: `${buttonBackground}`,
      "border-radius": `${borderRadius}px`,
      border: `${borderWidth}px ${borderType} ${borderColor}`,
      padding: generateCSSUnit(`${buttonPadding}`, `${buttonPaddingType}`),
    },
    " .premium-blog-excerpt-link-wrap .premium-blog-excerpt-link:hover": {
      color: `${buttonhover}`,
      background: `${hoverBackground}`,
    },
    " .premium-blog-post-tags-container ": {
      "font-size": generateCSSUnit(  tagsfontSize , tagsfontSizeType ),
      "font-weight": `${tagsWeight};`,
      "font-style": `${tagsStyle};`,
      "text-transform": `${tagsUpper ? "uppercase" : null} ;`,
      "letter-spacing": `${ tagsLetter }px ;`,
      "color": `${ tagColor }`,
      
      
    },
    " .premium-blog-post-container .premium-blog-content-wrapper .premium-blog-post-tags-container:hover span": {
      "color" : `${hoverTag}`,
    },
    " .premium-blog-pagination-container": {
      "text-align" :`${paginationPosition}`
    }
  };
  mobile_selectors = {
    " .premium-blog-post-container .premium-blog-entry-title h2": {
      "margin-bottom": generateCSSUnit(marginBottomMobile, marginBottomType),
      "font-size": generateCSSUnit(firstContentfontSizeMobile,firstContentfontSizeType),
    },
    " .premium-blog-even": {
      width: `${100 / mcolumns}%`,
   
    },
    " .premium-blog-post-container .premium-blog-content-wrapper-inner p": {
      "font-size": generateCSSUnit(postContentfontSizeMobile,postContentfontSizeType) ,
      "margin-bottom":generateCSSUnit(PostmarginBottomMobile,PostmarginBottomType) ,
      "margin-top": generateCSSUnit(PostmarginTopMobile, PostmarginTopType),
      "margin-right": generateCSSUnit (PostmarginRightMobile, PostmarginRightType),
      "margin-left": generateCSSUnit (PostmarginLeftMobile ,PostmarginLeftType),
      " padding": generateCSSUnit (postSpacingMobile ,postSpacingType),
    },
    " .premium-blog-post-outer-container img": {
      "object-fit":`${thumbnailMobile}`
    },
    " .premium-blog-meta-data": {
      "font-size":  generateCSSUnit(secondContentfontSizeMobile,secondContentfontSizeType),
    },
    " .premium-blog-meta-data:hover": {
      color: `${linkColor}`,
    }, 
    " .premium-blog-excerpt-link-wrap ": {
      " padding": generateCSSUnit(buttonSpacingMobile,buttonSpacingType),
    },
    " .premium-blog-excerpt-link-wrap .premium-blog-excerpt-link": {
      "font-size": generateCSSUnit(buttonfontSizeMobile,buttonfontSizeType),
      padding: generateCSSUnit(buttonPaddingMobile, buttonPaddingType),
    },
    " .premium-blog-post-tags-container ": {
      "font-size": generateCSSUnit(  tagsfontSizeMobile , tagsfontSizeType ),
    }
  };
  tablet_selectors = {
    " .premium-blog-post-container .premium-blog-entry-title h2": {
      "margin-bottom": generateCSSUnit(marginBottomTablet, marginBottomType),
      "font-size": generateCSSUnit(firstContentfontSizeTablet,firstContentfontSizeType),
    },
    " .premium-blog-even": {
      width: `${100 / tcolumns}%`,
     
    },
    " .premium-blog-post-container .premium-blog-content-wrapper-inner p": {
      "font-size": generateCSSUnit(postContentfontSizeTablet,postContentfontSizeType) ,
      "margin-bottom":generateCSSUnit(PostmarginBottomTablet,PostmarginBottomType) ,
      "margin-top": generateCSSUnit(PostmarginTopTablet, PostmarginTopType),
      "margin-right": generateCSSUnit (PostmarginRightTablet, PostmarginRightType),
      "margin-left": generateCSSUnit (PostmarginLeftTablet ,PostmarginLeftType),
      " padding": generateCSSUnit (postSpacingTablet ,postSpacingType),

    },
    " .premium-blog-meta-data": {
      "font-size":  generateCSSUnit(secondContentfontSizeTablet,secondContentfontSizeType),
    },
  
    " .premium-blog-excerpt-link-wrap ": {
      " padding": generateCSSUnit(buttonSpacingTablet,buttonSpacingType),
    },
    " .premium-blog-excerpt-link-wrap .premium-blog-excerpt-link": {
      "font-size": generateCSSUnit(buttonfontSizeTablet,buttonfontSizeType),
      padding: generateCSSUnit(buttonPaddingTablet,buttonPaddingType),
    },
    " .premium-blog-post-outer-container img": {
      "object-fit":`${thumbnailTablet}`
    },

    " .premium-blog-post-tags-container ": {
      "font-size": generateCSSUnit(tagsfontSizeTablet , tagsfontSizeType),
    }
  };

  let styling_css = "";
  let id = `#premium-blog-${props.clientId}`;
  if (classMigrate) {
    id = `.premium-blog-${props.clientId}`;
  }
  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS( mobile_selectors, id, true, "mobile" );
  return styling_css;
  
}
export default styling;
