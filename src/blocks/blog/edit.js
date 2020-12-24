import PremiumSizeUnits from "../../components/premium-size-units";
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
  __experimentalNumberControl: NumberControl,
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
  componentDidMount() {}
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
    const orderSelect = [
      { label: "None", value: "None" },
      { label: "ID", value: "ID" },
      { label: "Author", value: "Author" },
      { label: "Title", value: "Title" },
      { label: "Name", value: "Name" },
      { label: "Date", value: "Date" },
      { label: "last Modified", value: "last Modified" },
      { label: "Random", value: "Random" },
      { label: "Number Of Comments", value: "Number Of Comments" },
    ];
    const hoverEffects = [
      { label: "None", value: "None" },
      { label: "Zoom in", value: "Zoom in " },
      { label: "Zoom out", value: "Zoom out" },
      { label: "Scale", value: "Scale" },
      { label: "GrayScale", value: "GrayScale" },
      { label: "Blur", value: "Blur" },
      { label: "Bright", value: "Bright" },
      { label: "Sepia", value: "Sepia" },
      { label: "Translate", value: "Translate" },
    ];

    const {
      attributes,
      categoriesList,
      setAttributes,
      latestPosts,
      isSelected,
      taxonomyList,
    } = this.props;
    const {
      filter_rule,
      author_rule,
      post_rule,
      skinValue,
      gridCheck,
      categoryFilter,
      offsetNum,
      sourceValue,
      equalHeight,
      numOfColumns,
      numOfPosts,
      displayStickyPosts,
      currentPost,
      featuredImage,
      hoverEffect,
      height,
      HeightU,
      postPosition,
      fullWidth,
      block_id,
      displayPostContent,
      displayPostExcerpt,
      displayPostDate,
      displayPostComment,
      displayPostCategories,
      displayPostTags,
      excerptType,
      readMoreText,
      displayPostAuthor,
      filterTabs,
      getTabsFrom,
      tabLabel,
      linkNewTab,
      filterPosition,
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
      rowGapUnit,
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
    console.log(categoriesList);

    let choices = [];
    if (latestPosts) {
      latestPosts.forEach((post) => {
        choices.push(post);
      });
    } else {
      choices.push({ value: 0, label: __("Loading...", "awhitepixel") });
    }

    return [
      isSelected && (
        <InspectorControls>
          <PanelBody
            title={__("General")}
            className="premium-panel-body"
            initialOpen={true}
          >
            <ToggleControl
              label={__("Grid")}
              checked={gridCheck}
              onChange={(newCheck) => setAttributes({ gridCheck: newCheck })}
            />

            <ToggleControl
              label={__("Equal Height")}
              checked={equalHeight}
              onChange={(newEqual) => setAttributes({ equalHeight: newEqual })}
            />

            <SelectControl
              label={__("Number of Columns")}
              value={numOfColumns}
              options={[
                { label: "2 Columns", value: 2 },
                { label: "3 Columns", value: 3 },
                { label: "4 Columns", value: 4 },
                { label: "5 Columns", value: 5 },
                { label: "6 Columns", value: 6 },
              ]}
              onChange={(newNumberofCol) =>
                setAttributes({ numOfColumns: newNumberofCol })
              }
            />
            <NumberControl
              label={__("Number of Posts Per Page")}
              isShiftStepEnabled={true}
              onChange={(newNumberofPosts) =>
                setAttributes({ numOfPosts: newNumberofPosts })
              }
              shiftStep={1}
              value={numOfPosts}
              min={1}
            />
          </PanelBody>
          <PanelBody
            title={__("Query")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <SelectControl
              label={__("Source")}
              options={Source}
              value={sourceValue}
              onChange={(newSource) =>
                setAttributes({ sourceValue: newSource })
              }
            />
            <hr />
            <SelectControl
              label={__("Categories Filter Rule")}
              options={[
                { value: "Match Categories", label: __("Match Categories") },
                {
                  value: "Exclude Categories",
                  label: __("Exclude Categories"),
                },
              ]}
              value={filter_rule}
              onChange={(newFilterRule) =>
                setAttributes({ filter_rule: newFilterRule })
              }
            />
            <hr />
            <SelectControl
              label={__("Author Filter Rule")}
              options={[
                { value: "Match Authors", label: __("Match Authors") },
                { value: "Exclude Authors", label: __("Exclude Authors") },
              ]}
              value={author_rule}
              onChange={(newAuthorRule) =>
                setAttributes({ author_rule: newAuthorRule })
              }
            />
            <hr />
            <SelectControl
              label={__("Filter by Post Rule")}
              options={[
                { value: "Match Posts", label: __("Match Posts") },
                { value: "Exclude Posts", label: __("Exclude Posts") },
              ]}
              value={post_rule}
              onChange={(newPostRule) =>
                setAttributes({ post_rule: newPostRule })
              }
            />
            <ToggleControl
              label={__("Ignore Sticky Posts")}
              checked={displayStickyPosts}
              onChange={() =>
                setAttributes({ displayStickyPosts: !displayStickyPosts })
              }
            />
            <NumberControl
              label={__("Offset")}
              isShiftStepEnabled={true}
              onChange={(newOffsetNum) =>
                setAttributes({ offsetNum: newOffsetNum })
              }
              shiftStep={1}
              value={offsetNum}
              min={0}
            />
            <ToggleControl
              label={__("Exclude Current Post")}
              checked={currentPost}
              help={
                currentPost
                  ? "This option will remove the current post from the query. "
                  : " "
              }
              onChange={() => setAttributes({ currentPost: !currentPost })}
            />
            <hr />
            <SelectControl
              label={__("Order By")}
              options={orderSelect}
              value={orderBy}
              onChange={(Orderby) => setAttributes({ orderBy: Orderby })}
            />
            <SelectControl
              label={__("Order")}
              options={[
                { label: "Descending", value: "Desc" },
                { label: "Ascending", value: "Asc" },
              ]}
              value={order}
              onChange={(NewOrder) => setAttributes({ order: NewOrder })}
            />
          </PanelBody>
          <PanelBody
            title={__("Featured Image")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ToggleControl
              label={__("Show Featured Iamge")}
              checked={featuredImage}
              onChange={() => setAttributes({ featuredImage: !featuredImage })}
            />
            {featuredImage && [
              <SelectControl
                label={__("Hover Effect")}
                options={hoverEffects}
                value={hoverEffect}
                onChange={(newEffect) =>
                  setAttributes({ hoverEffect: newEffect })
                }
              />,
              <PremiumSizeUnits
                units={["px", "em"]}
                onChangeSizeUnit={(newValue) => {
                  setAttributes({ HeightU: newValue });
                }}
              />,
              <RangeControl
                label={__("Height")}
                value={height}
                onChange={(newHeight) => setAttributes({ height: newHeight })}
                max={HeightU === "em" ? 50 : 800}
              />,
            ]}
          </PanelBody>
          <PanelBody
            title={__("Display Options")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <SelectControl
              label={__("Title HTML Tag")}
              options={[
                { label: "H1", value: "h1" },
                { label: "H2", value: "h2" },
                { label: "H3", value: "h3" },
                { label: "H4", value: "h4" },
                { label: "H5", value: "h5" },
                { label: "H6", value: "h6" },
                { label: "div", value: "div" },
                { label: "span", value: "span" },
                { label: "p", value: "p" },
              ]}
              value={titleTag}
              onChange={(newTag) => setAttributes({ titleTag: newTag })}
            />
            <PremiumSizeUnits
              onChangeSizeUnit={(newUnit) => {
                setAttributes({ rowGapUnit: newUnit });
              }}
            />
            <RangeControl
              label={__("Row Spacing")}
              value={rowGap}
              onChange={(newRowGap) => setAttributes({ rowGap: newRowGap })}
              max={rowGapUnit === "em" ? 10 : 200}
            />
            <RangeControl
              label={__("Column Spacing")}
              value={columnGap}
              onChange={(newcolumnGap) =>
                setAttributes({ columnGap: newcolumnGap })
              }
              max={50}
            />
            <h2> {__("Alignment")}</h2>
            <IconButton
              key={"left"}
              icon="editor-alignleft"
              label="Left"
              onClick={() => setAttributes({ filterPosition: "left" })}
              aria-pressed={"left" === filterPosition}
              isPrimary={"left" === filterPosition}
            />
            <IconButton
              key={"center"}
              icon="editor-aligncenter"
              label="Right"
              onClick={() => setAttributes({ filterPosition: "center" })}
              aria-pressed={"center" === filterPosition}
              isPrimary={"center" === filterPosition}
            />
            <IconButton
              key={"right"}
              icon="editor-alignright"
              label="Right"
              onClick={() => setAttributes({ filterPosition: "right" })}
              aria-pressed={"right" === filterPosition}
              isPrimary={"right" === filterPosition}
            />
          </PanelBody>
          <PanelBody
            title={__("Post Options")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ToggleControl
              label={__("Show Post Content")}
              checked={displayPostContent}
              onChange={() =>
                setAttributes({ displayPostContent: !displayPostContent })
              }
            />
            {displayPostContent && [
              <SelectControl
                label={__("Get Content From")}
                options={[
                  { label: "Post Full Content", value: "Post Full Content" },
                  { label: "Post Excerpt", value: "Post Excerpt" },
                ]}
                value={displayPostExcerpt}
                onChange={(newExcerpt) =>
                  setAttributes({ displayPostExcerpt: newExcerpt })
                }
              />,
              <SelectControl
                label={__("Excerpt Type")}
                options={[
                  { label: "Dots", value: "Dots" },
                  { label: "Link", value: "Link" },
                ]}
                value={excerptType}
                onChange={(newExcerptType) =>
                  setAttributes({ excerptType: newExcerptType })
                }
              />,
              excerptType === "Link"
                ? [
                    <ToggleControl
                      label={__("Full Width")}
                      checked={fullWidth}
                      onChange={() =>
                        setAttributes({
                          fullWidth: !fullWidth,
                        })
                      }
                    />,
                    <TextControl
                      label={__("Read More Text")}
                      value={readMoreText}
                      onChange={(newText) =>
                        setAttributes({ readMoreText: newText })
                      }
                    />,
                  ]
                : null,
            ]}
            <ToggleControl
              label={__("Author Meta")}
              checked={displayPostAuthor}
              onChange={() =>
                setAttributes({ displayPostAuthor: !displayPostAuthor })
              }
            />
            <ToggleControl
              label={__("Date Meta")}
              checked={displayPostDate}
              onChange={() =>
                setAttributes({ displayPostDate: !displayPostDate })
              }
            />
            <ToggleControl
              label={__("Category Meta")}
              checked={displayPostCategories}
              onChange={() =>
                setAttributes({ displayPostCategories: !displayPostCategories })
              }
            />
            <ToggleControl
              label={__("Comments Meta")}
              checked={displayPostComment}
              onChange={() =>
                setAttributes({ displayPostComment: !displayPostComment })
              }
            />
            <ToggleControl
              label={__("Tags Meta")}
              checked={displayPostTags}
              onChange={() =>
                setAttributes({ displayPostTags: !displayPostTags })
              }
            />
          </PanelBody>
          <PanelBody
            title={__("Advanced Settings")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ToggleControl
              label={__("Filter Tabs")}
              checked={filterTabs}
              onChange={() => setAttributes({ filterTabs: !filterTabs })}
            />
            <SelectControl
              label={__("Get Tabs From")}
              options={[
                {
                  label: "Categories",
                  value: "Categories",
                },
                { label: "Tags", value: "Tags" },
              ]}
              value={getTabsFrom}
              onChange={(newTabsFrom) =>
                setAttributes({ getTabsFrom: newTabsFrom })
              }
            />
            <TextControl
              label={__("First Tab Label")}
              value={tabLabel}
              onChange={(newLabel) => setAttributes({ tabLabel: newLabel })}
            />
            <h2> {__("Alignment")}</h2>
            <IconButton
              key={"left"}
              icon="editor-alignleft"
              label="Left"
              onClick={() => setAttributes({ postPosition: "left" })}
              aria-pressed={"left" === postPosition}
              isPrimary={"left" === postPosition}
            />
            <IconButton
              key={"center"}
              icon="editor-aligncenter"
              label="Right"
              onClick={() => setAttributes({ postPosition: "center" })}
              aria-pressed={"center" === postPosition}
              isPrimary={"center" === postPosition}
            />
            <IconButton
              key={"right"}
              icon="editor-alignright"
              label="Right"
              onClick={() => setAttributes({ postPosition: "right" })}
              aria-pressed={"right" === postPosition}
              isPrimary={"right" === postPosition}
            />
            <ToggleControl
              label={__("Link in New Tabs")}
              checked={linkNewTab}
              onChange={() => setAttributes({ linkNewTab: !linkNewTab })}
            />
          </PanelBody>
        </InspectorControls>
      ),
      <Blog
        latestPosts={choices}
        attributes={attributes}
        categoriesList={categoriesList}
      />,
    ];
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
    paginationMarkup,
    postPagination,
    excludeCurrentPost,
  } = props.attributes;
  const { setAttributes } = props;
  const { getEntityRecords } = select("core");

  let allTaxonomy = uagb_blocks_info.all_taxonomy;
  let currentTax = allTaxonomy[postType];
  let taxonomy = "";
  let categoriesList = wp.data
    .select("core")
    .getEntityRecords("taxonomy", "category");
  let rest_base = "";

  if (true === postPagination && "empty" === paginationMarkup) {
    $.ajax({
      url: uagb_blocks_info.ajax_url,
      data: {
        action: "uagb_post_pagination",
        attributes: props.attributes,
        nonce: uagb_blocks_info.uagb_ajax_nonce,
      },
      dataType: "json",
      type: "POST",
      success: function (data) {
        setAttributes({ paginationMarkup: data.data });
      },
    });
  }

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

  return {
    latestPosts: getEntityRecords("postType", "post"),
    categoriesList: categoriesList,
  };
})(edit);
