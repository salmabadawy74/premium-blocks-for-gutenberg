import Blog from "./blog";
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  PanelBody,
  Placeholder,
  QueryControls,
  RangeControl,
  SelectControl,
  Spinner,
  ToggleControl,
  TabPanel,
  ButtonGroup,
  Button,
  Dashicon,
  TextControl,
  IconButton,
  RadioControl,
} = wp.components;

const {
  InspectorControls,
  BlockAlignmentToolbar,
  BlockControls,
  ColorPalette,
} = wp.editor;
const { withSelect, select } = wp.data;
const latestPosts = null;
class edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {
    let choices = [];
    if (latestPosts) {
      latestPosts.forEach((post) => {
        choices.push(post);
      });
    } else {
      choices.push({ value: 0, label: __("Loading...", "awhitepixel") });
    }
  }
  render() {
    const Skin = [
      {
        value: "Classic",
        label: __("Classic"),
      },
      {
        value: "Modern",
        label: __("Modern"),
      },
      {
        value: "Cards",
        label: __("Cards"),
      },
      {
        value: "On Side",
        label: __("On Side"),
      },
      {
        value: "Banner",
        label: __("Banner"),
      },
    ];
    const Source = [
      {
        value: "Posts",
        label: __("Posts"),
      },
      {
        value: "Pages",
        label: __("Pages"),
      },
      {
        value: "Media",
        label: __("Media"),
      },
      {
        value: "My Templates",
        label: __("My Templates"),
      },
    ];
    const Filter_Rule = [
      { value: "Match Categories", label: __("Match Categories") },
      { value: "Exclude Categories", label: __("Exclude Categories") },
    ];
    const Author_Rule = [
      { value: "Match Authors", label: __("Match Authors") },
      { value: "Exclude Authors", label: __("Exclude Authors") },
    ];
    const {
      attributes,
      categoriesList,
      setAttributes,
      latestPosts,

      taxonomyList,
    } = this.props;
    const {
      filter_rule,
      author_rule,
      skinValue,
      gridCheck,
      numOfPosts,
      sourceValue,

      block_id,
      displayPostTitle,
      displayPostDate,
      displayPostComment,
      displayPostExcerpt,
      displayPostAuthor,
      displayPostImage,
      displayPostTaxonomy,
      imgSize,
      imgPosition,
      displayPostLink,
      newTab,
      ctaText,
      borderWidth,
      borderStyle,
      borderColor,
      borderHColor,
      borderRadius,
      btnVPadding,
      btnHPadding,
      align,
      columns,
      tcolumns,
      mcolumns,
      order,
      orderBy,
      categories,
      postsToShow,
      rowGap,
      columnGap,
      bgColor,
      contentPadding,
      contentPaddingMobile,
      titleColor,
      titleTag,
      titleFontSize,
      titleFontSizeType,
      titleFontSizeMobile,
      titleFontSizeTablet,
      titleFontFamily,
      titleFontWeight,
      titleFontSubset,
      titleLineHeightType,
      titleLineHeight,
      titleLineHeightTablet,
      titleLineHeightMobile,
      titleLoadGoogleFonts,
      metaFontSize,
      metaFontSizeType,
      metaFontSizeMobile,
      metaFontSizeTablet,
      metaFontFamily,
      metaFontWeight,
      metaFontSubset,
      metaLineHeightType,
      metaLineHeight,
      metaLineHeightTablet,
      metaLineHeightMobile,
      metaLoadGoogleFonts,
      excerptFontSize,
      excerptFontSizeType,
      excerptFontSizeTablet,
      excerptFontSizeMobile,
      excerptFontFamily,
      excerptFontWeight,
      excerptFontSubset,
      excerptLineHeightType,
      excerptLineHeight,
      excerptLineHeightTablet,
      excerptLineHeightMobile,
      excerptLoadGoogleFonts,
      ctaFontSize,
      ctaFontSizeType,
      ctaFontSizeTablet,
      ctaFontSizeMobile,
      ctaFontFamily,
      ctaFontWeight,
      ctaFontSubset,
      ctaLineHeightType,
      ctaLineHeight,
      ctaLineHeightTablet,
      ctaLineHeightMobile,
      ctaLoadGoogleFonts,
      metaColor,
      excerptColor,
      ctaColor,
      ctaBgColor,
      ctaHColor,
      ctaBgHColor,
      titleBottomSpace,
      metaBottomSpace,
      excerptBottomSpace,
    } = attributes;
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;
    console.log(latestPosts);

    let choices = [];
    if (latestPosts) {
      latestPosts.forEach((post) => {
        choices.push(post);
      });
    } else {
      choices.push({ value: 0, label: __("Loading...", "awhitepixel") });
    }

    return <Blog latestPosts={choices} attributes={attributes} />;
  }
}
export default withSelect((select, props) => {
  const {
    categories,
    postsToShow,
    order,
    orderBy,
    postType,
    taxonomyType,
    excludeCurrentPost,
  } = props.attributes;
  const { getEntityRecords } = select("core");

  let allTaxonomy = uagb_blocks_info.all_taxonomy;
  let currentTax = allTaxonomy[postType];
  let taxonomy = "";
  let categoriesList = [];
  let rest_base = "";

  if ("undefined" != typeof currentTax) {
    if ("undefined" != typeof currentTax["taxonomy"][taxonomyType]) {
      rest_base =
        currentTax["taxonomy"][taxonomyType]["rest_base"] == false ||
        currentTax["taxonomy"][taxonomyType]["rest_base"] == null
          ? currentTax["taxonomy"][taxonomyType]["name"]
          : currentTax["taxonomy"][taxonomyType]["rest_base"];
    }

    if ("" != taxonomyType) {
      if (
        "undefined" != typeof currentTax["terms"] &&
        "undefined" != typeof currentTax["terms"][taxonomyType]
      ) {
        categoriesList = currentTax["terms"][taxonomyType];
      }
    }
  }

  let latestPostsQuery = {
    order: order,
    orderby: orderBy,
    per_page: postsToShow,
  };

  if (excludeCurrentPost) {
    latestPostsQuery["exclude"] = select("core/editor").getCurrentPostId();
  }
  latestPostsQuery[rest_base] = categories;

  return {
    latestPosts: getEntityRecords("postType", "post"),
    categoriesList: categoriesList,
    taxonomyList:
      "undefined" != typeof currentTax ? currentTax["taxonomy"] : [],
  };
})(edit);
