import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumRange from "../../components/premium-range-responsive";

import Blog from "./blog";

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

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
  componentDidMount() {}
  render() {
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
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    let categoryListOptions = [{ value: "", label: __("All") }];
    if (categoriesList) {
      Object.keys(categoriesList).map((item, thisIndex) => {
        return categoryListOptions.push({
          value: categoriesList[item]["id"],
          label: categoriesList[item]["name"],
        });
      });
    }
    const {
      attributes,
      categoriesList,
      setAttributes,
      latestPosts,
      isSelected,
      taxonomyList,
    } = this.props;
    const {
      blockID,
      DisplayTitle,
      DisplayDate,
      DisplayComment,
      DisplayExcert,
      DisplayAuthor,
      DisplayImage,
      DisplayTaxonomy,
      DisplayPostLink,
      newTab,
      borderWidth,
      ctaText,
      borderRadius,
      borderColor,
      vPadding,
      hPadding,
      categories,
      rowGap,
      imageSize,

      bgColor,
      contentPadding,
      contentPaddingMobile,
      gridCheck,
      equalHeight,

      numOfPosts,
      numOfColumns,
      offsetNum,
      currentPost,
      orderBy,
      order,
      featuredImage,
      hoverEffect,
      height,
      HeightU,

      rowGapUnit,
      columnGap,
      postPosition,
      displayPostContent,
      displayPostExcerpt,
      excerptType,
      fullWidth,
      readMoreText,
      displayPostAuthor,
      displayPostDate,
      displayPostCategories,
      displayPostComment,
      displayPostTags,
      filterTabs,
      getTabsFrom,
      tabLabel,
      filterPosition,

      linkNewTab,
      layoutValue,
      postFilter,
      sizeType,
      size,
      sizeMobile,
      sizeTablet,
      Carousel,
      Autoplay,
      slideToScroll,
      autoplaySpeed,
      centerMode,
      slideSpacing,
      navigationDots,
      navigationArrow,
      arrowPosition,
      pagination,
      pageLimit,
      paginationPosition,
    } = attributes;
    console.log(attributes);
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
            {
              gridCheck && [
                <SelectControl
                  label={__("Layout")}
                  options={[
                    { label: "Even", value: "Even" },
                    {
                      label: "Masonry",
                      value: "Masonry",
                    },
                  ]}
                  value={layoutValue}
                  onChange={(newLayout) =>
                    setAttributes({ layoutValue: newLayout })
                  }
                />,

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
                />,
              ]
              // <PremiumRange
              //   setAttributes={setAttributes}
              //   rangeType={{
              //     value: sizeType,
              //     label: __("switchSizeType"),
              //   }}
              //   range={{ value: size, label: __("switchSize") }}
              //   rangeMobile={{
              //     value: sizeMobile,
              //     label: __("switchSizeMobile"),
              //   }}
              //   rangeTablet={{
              //     value: sizeTablet,
              //     label: __("switchSizeTablet"),
              //   }}
              //   rangeLabel={__("Number of Columns")}
              // />
            }

            <RangeControl
              label={__("Number of Posts Per Page")}
              onChange={(newNumberofPosts) =>
                setAttributes({ numOfPosts: newNumberofPosts })
              }
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
              label={__("Filter By")}
              options={[
                { label: "Default", value: "Default" },
                { label: "Categories", value: "Categories" },
                { label: "Tags", value: "Tags" },
              ]}
              value={postFilter}
              onChange={(newPostFilter) =>
                setAttributes({ postFilter: newPostFilter })
              }
            />

            {"Default" !== postFilter && (
              <SelectControl
                label={__(`${postFilter}`)}
                options={[
                  { label: "Default", value: "Default" },
                  { label: "Categories", value: "Categories" },
                  { label: "Tags", value: "Tages" },
                ]}
                value={"First Category"}
                onChange={() => console.log(categoriesList)}
              />
            )}
            <RangeControl
              label={__("Offset")}
              onChange={(newOffsetNum) =>
                setAttributes({ offsetNum: newOffsetNum })
              }
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
              <SelectControl
                label={__("Image Size")}
                options={[
                  { label: "1536x1536", value: "1536x1536" },
                  { label: "2048x2048", value: "2048x2048" },
                  {
                    label: "ab-block-post-grid-landscape",
                    value: "ab-block-post-grid-landscape",
                  },
                  {
                    label: "ab-block-post-grid-square",
                    value: "ab-block-post-grid-square",
                  },
                  { label: "full", value: "full" },
                  { label: "large", value: "large" },
                  { label: "medium", value: "medium" },
                  { label: "medium_large", value: "medium_large" },
                  { label: "thumbnail", value: "thumbnail" },
                ]}
                value={imageSize}
                onChange={(newSizeImage) =>
                  setAttributes({ imageSize: newSizeImage })
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
          {!pagination && (
            <PanelBody
              title={__("Carousel")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Carousel")}
                checked={Carousel}
                onChange={() => setAttributes({ Carousel: !Carousel })}
              />
              {Carousel && (
                <Fragment>
                  <ToggleControl
                    label={__("Auto Play")}
                    checked={Autoplay}
                    onChange={() => setAttributes({ Autoplay: !Autoplay })}
                  />
                  <RangeControl
                    label={__("Slides To Scroll")}
                    value={slideToScroll}
                    onChange={(newSlideScroll) =>
                      setAttributes({ slideToScroll: newSlideScroll })
                    }
                  />
                  <RangeControl
                    label={__("Autoplay Speed")}
                    value={autoplaySpeed}
                    onChange={(newSpeed) =>
                      setAttributes({ autoplaySpeed: newSpeed })
                    }
                  />
                  <ToggleControl
                    label={__("Center Mode")}
                    checked={centerMode}
                    onChange={(centerModeValue) =>
                      setAttributes({ centerMode: centerModeValue })
                    }
                  />
                  <RangeControl
                    label={__("Slides' Spacing")}
                    value={slideSpacing}
                    onChange={(slideSpacingValue) =>
                      setAttributes({ slideSpacing: slideSpacingValue })
                    }
                  />
                  <ToggleControl
                    label={__("Navigation Dots")}
                    checked={navigationDots}
                    onChange={() =>
                      setAttributes({ navigationDots: !navigationDots })
                    }
                  />
                  <ToggleControl
                    label={__("Navigation Arrows")}
                    checked={navigationArrow}
                    onChange={() =>
                      setAttributes({ navigationArrow: !navigationArrow })
                    }
                  />
                  {navigationArrow && (
                    <RangeControl
                      label={__("Arrows Position")}
                      value={arrowPosition}
                      onChange={(arrowPositionValue) =>
                        setAttributes({ arrowPosition: arrowPositionValue })
                      }
                    />
                  )}
                </Fragment>
              )}
            </PanelBody>
          )}
          {!Carousel && (
            <PanelBody
              title={__("Pagination")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <ToggleControl
                label={__("Enable Pagination")}
                checked={pagination}
                onChange={() => setAttributes({ pagination: !pagination })}
              />
              {pagination && (
                <Fragment>
                  <RangeControl
                    label={__("Page Limit")}
                    value={pageLimit}
                    onChange={(pageLimitValue) =>
                      setAttributes({ pageLimit: pageLimitValue })
                    }
                  />
                  <h2> {__("Alignment")}</h2>
                  <IconButton
                    key={"left"}
                    icon="editor-alignleft"
                    label="Left"
                    onClick={() =>
                      setAttributes({ paginationPosition: "left" })
                    }
                    aria-pressed={"left" === paginationPosition}
                    isPrimary={"left" === paginationPosition}
                  />
                  <IconButton
                    key={"center"}
                    icon="editor-aligncenter"
                    label="Right"
                    onClick={() =>
                      setAttributes({ paginationPosition: "center" })
                    }
                    aria-pressed={"center" === paginationPosition}
                    isPrimary={"center" === paginationPosition}
                  />
                  <IconButton
                    key={"right"}
                    icon="editor-alignright"
                    label="Right"
                    onClick={() =>
                      setAttributes({ paginationPosition: "right" })
                    }
                    aria-pressed={"right" === paginationPosition}
                    isPrimary={"right" === paginationPosition}
                  />
                </Fragment>
              )}
            </PanelBody>
          )}
        </InspectorControls>
      ),
      latestPosts && categoriesList ? (
        <Blog
          latestPosts={latestPosts}
          attributes={attributes}
          categoriesList={categoriesList}
        />
      ) : (
        <Spinner />
      ),
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
    currentPost,
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
  // let latestPostsQuery = {
  //   order: order,
  //   orderby: orderBy,
  //   per_page: postsToShow,
  // };
  let latestPostsQuery = {};
  if (currentPost) {
    latestPostsQuery["exclude"] = select("core/editor").getCurrentPostId();
  }

  return {
    latestPosts: getEntityRecords("postType", "post", latestPostsQuery),
    categoriesList: categoriesList,
  };
})(edit);
