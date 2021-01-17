import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumRange from "../../components/premium-range-responsive";
import CarouselComponent from "./Carousel";
import PremiumFilters from "../../components/premium-filters";
import PremiumTypo from "../../components/premium-typo";
import Blog from "./blog";
import PremiumBorder from "./../../components/premium-border";
import styling from "./styling";
import Masonry from "./Masonry";
import PremiumMarginR from "../../components/premium-margin-responsive";
import PremiumBoxShadow from "./../../components/premium-box-shadow";
const { __ } = wp.i18n;
alert("borderWidths");
const { Component, Fragment } = wp.element;
const {
  PanelBody,
  RangeControl,
  SelectControl,
  Spinner,
  ToggleControl,
  TabPanel,
  Dashicon,
  TextControl,
  IconButton,
} = wp.components;
const { InspectorControls, ColorPalette } = wp.editor;
const { withSelect, select } = wp.data;
class edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {
    this.props.setAttributes({ blockID: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });
    const $style = document.createElement("style");
    $style.setAttribute("id", "premium-post-style-" + this.props.clientId);
    document.head.appendChild($style);
  }
  render() {
    const orderSelect = [
      { label: "None", value: "None" },
      { label: "ID", value: "id" },
      { label: "Author", value: "author" },
      { label: "Title", value: "title" },
      { label: "Name", value: "Name" },
      { label: "Date", value: "date" },
      { label: "last Modified", value: "modified" },
      { label: "Random", value: "rand" },
      { label: "Number Of Comments", value: "include" },
    ];
    const hoverEffects = [
      { label: "None", value: "None" },
      { label: "Zoom in", value: "zoomin" },
      { label: "Zoom out", value: "zoomout" },
      { label: "Scale", value: "scale" },
      { label: "GrayScale", value: "gray" },
      { label: "Blur", value: "blur" },
      { label: "Bright", value: "bright" },
      { label: "Sepia", value: "sepia" },
      { label: "Translate", value: "trans" },
    ];
    const ThumbnailSelect = [
      {
        label: "Cover",
        value: "cover",
      },
      {
        label: "Fill",
        value: "fill",
      },
      {
        label: "Contain",
        value: "contain",
      },
    ];
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;
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
      categories,
      rowGap,
      imageSize,
      gridCheck,
      numOfPosts,
      offsetNum,
      currentPost,
      orderBy,
      order,
      featuredImage,
      hoverEffect,
      height,
      HeightU,
      backgroundPostContent,
      rowGapUnit,
      columnGap,
      displayPostContent,
      displayPostExcerpt,
      excerptType,
      excerptLength,
      fullWidth,
      readMoreText,
      displayPostAuthor,
      displayPostDate,
      displayPostCategories,
      displayPostComment,
      displayPostTags,
      filterPosition,
      layoutValue,
      postFilter,
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
      overlayColor,
      blur,
      bright,
      contrast,
      saturation,
      hue,
      firstContentLetter,
      firstContentStyle,
      firstContentUpper,
      firstContentWeight,
      firstContentfontSize,
      firstContentfontSizeType,
      firstContentfontSizeMobile,
      firstContentfontSizeTablet,
      secondContentLetter,
      secondContentStyle,
      secondContentUpper,
      secondContentWeight,
      secondContentfontSize,
      secondContentfontSizeType,
      secondContentfontSizeMobile,
      secondContentfontSizeTablet,
      metaColor,
      typoColor,
      hoverColor,
      linkColor,
      sepaColor,
      postContentLetter,
      postContentStyle,
      postContentUpper,
      postContentWeight,
      textColor,
      tagColor,
      hoverTag,
      buttonColor,
      buttonhover,
      buttonBackground,
      hoverBackground,
      marginBottomType,
      marginBottomMobile,
      marginBottomTablet,
      marginBottom,
      columns,
      mcolumns,
      tcolumns,
      containerShadowColor,
      containerShadowBlur,
      containerShadowHorizontal,
      containerShadowVertical,
      containerShadowPosition,
      tagsfontSizeType,
      tagsfontSize,
      tagsfontSizeMobile,
      tagsfontSizeTablet,
      tagsWeight,
      tagsStyle,
      tagsLetter,
      tagsUpper,
      buttonfontSizeType,
      buttonfontSize,
      buttonfontSizeMobile,
      buttonfontSizeTablet,
      buttonWeight,
      buttonStyle,
      buttonLetter,
      buttonUpper,
      buttonSpacingType,
      buttonSpacing,
      buttonSpacingMobile,
      buttonSpacingTablet,
      borderType,
      buttonPaddingType,
      buttonPadding,
      buttonPaddingMobile,
      buttonPaddingTablet,
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
      borderWidth,
      borderColor,
      borderRadius,
    } = attributes;
    let categoryListOptions = [];
    if (categoriesList) {
      Object.keys(categoriesList).map((item, thisIndex) => {
        return categoryListOptions.push({
          value: categoriesList[item]["id"],
          label: categoriesList[item]["name"],
        });
      });
    }
    let element = document.getElementById(
      "premium-post-style-" + this.props.clientId
    );
    if (null != element) {
      element.innerHTML = styling(this.props);
    }
    // const hundleCarousel = (value) => {
    //   setAttributes({ layoutValue: "" });
    //   setAttributes({ Carousel: value });
    //   setAttributes({ gridCheck: false });
    // };
    // const hundleGrid = () => {
    //   setAttributes({ gridCheck: !gridCheck });
    //   setAttributes({ Carousel: false });
    // };
    const Inspectors = isSelected && (
      <InspectorControls>
        <PanelBody
          title={__("General")}
          className="premium-panel-body"
          initialOpen={true}
        >
          <ToggleControl
            label={__("Grid")}
            checked={gridCheck}
            onChange={() => setAttributes({ gridCheck: !gridCheck })}
          />
          {gridCheck && [
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
            <TabPanel
              className="uagb-size-type-field-tabs uagb-without-size-type"
              activeClass="active-tab"
              tabs={[
                {
                  name: "mobile",
                  title: <Dashicon icon="desktop" />,
                },
                {
                  name: "tablet",
                  title: <Dashicon icon="tablet" />,
                },
                {
                  name: "desktop",
                  title: <Dashicon icon="smartphone" />,
                },
              ]}
            >
              {(tab) => {
                let tabout;
                if ("mobile" === tab.name) {
                  tabout = (
                    <RangeControl
                      label={__("Columns")}
                      value={columns}
                      onChange={(value) => setAttributes({ columns: value })}
                    />
                  );
                } else if ("tablet" === tab.name) {
                  tabout = (
                    <RangeControl
                      label={__("Columns")}
                      value={tcolumns}
                      onChange={(value) => setAttributes({ tcolumns: value })}
                    />
                  );
                } else {
                  tabout = (
                    <RangeControl
                      label={__("Columns")}
                      value={mcolumns}
                      onChange={(value) => setAttributes({ mcolumns: value })}
                    />
                  );
                }

                return <div>{tabout}</div>;
              }}
            </TabPanel>,
          ]}

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
              { label: "Categories", value: "category" },
              { label: "Tags", value: "post_tag" },
            ]}
            value={postFilter}
            onChange={(newPostFilter) =>
              setAttributes({ postFilter: newPostFilter })
            }
          />

          {"Default" !== postFilter && (
            <SelectControl
              label={taxonomyList[postFilter]["label"]}
              options={categoryListOptions}
              value={categories}
              onChange={(value) => setAttributes({ categories: value })}
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
              { value: "desc", label: __("Descending") },
              { value: "asc", label: __("Ascending") },
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
              max={HeightU === "em" ? 60 : 800}
            />,
            <TabPanel
              className="uagb-size-type-field-tabs uagb-without-size-type"
              activeClass="active-tab"
              tabs={[
                {
                  name: "desktop",
                  title: <Dashicon icon="desktop" />,
                },
                {
                  name: "tablet",
                  title: <Dashicon icon="tablet" />,
                },
                {
                  name: "mobile",
                  title: <Dashicon icon="smartphone" />,
                },
              ]}
            >
              {(tab) => {
                let tabout;
                if ("mobile" === tab.name) {
                  tabout = (
                    <SelectControl
                      options={ThumbnailSelect}
                      label={__("Thumbnail Fit")}
                      value={thumbnailMobile}
                      onChange={(value) =>
                        setAttributes({ thumbnailMobile: value })
                      }
                    />
                  );
                } else if ("tablet" === tab.name) {
                  tabout = (
                    <SelectControl
                      options={ThumbnailSelect}
                      label={__("Thumbnail Fit")}
                      value={thumbnailTablet}
                      onChange={(value) =>
                        setAttributes({ thumbnailTablet: value })
                      }
                    />
                  );
                } else {
                  tabout = (
                    <SelectControl
                      options={ThumbnailSelect}
                      label={__("Thumbnail Fit")}
                      value={thumbnail}
                      onChange={(value) => setAttributes({ thumbnail: value })}
                    />
                  );
                }
                return <div>{tabout}</div>;
              }}
            </TabPanel>,
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
            "Post Excerpt" === displayPostExcerpt && [
              <RangeControl
                label={__("Excerpt Length")}
                value={excerptLength}
                onChange={(value) => setAttributes({ excerptLength: value })}
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
            ],
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
              onChange={(value) => hundleCarousel(value)}
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
                  onClick={() => setAttributes({ paginationPosition: "left" })}
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
                  onClick={() => setAttributes({ paginationPosition: "right" })}
                  aria-pressed={"right" === paginationPosition}
                  isPrimary={"right" === paginationPosition}
                />
              </Fragment>
            )}
          </PanelBody>
        )}
        <PanelBody
          title={__("Image Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <ColorPalette
            label={__("Overlay Color")}
            value={overlayColor}
            onChange={(newColorOverlay) =>
              setAttributes({ overlayColor: newColorOverlay })
            }
          />
          <PremiumFilters
            blur={blur}
            bright={bright}
            contrast={contrast}
            saturation={saturation}
            hue={hue}
            onChangeBlur={(value) => setAttributes({ blur: value })}
            onChangeBright={(value) => setAttributes({ bright: value })}
            onChangeContrast={(value) => setAttributes({ contrast: value })}
            onChangeSat={(value) => setAttributes({ saturation: value })}
            onChangeHue={(value) => setAttributes({ hue: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Post Title Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <PremiumTypo
            components={[
              "responsiveSize",
              "weight",
              "style",
              "upper",
              "spacing",
            ]}
            setAttributes={setAttributes}
            fontSizeType={{
              value: firstContentfontSizeType,
              label: __("firstContentfontSizeType"),
            }}
            fontSize={{
              value: firstContentfontSize,
              label: __("firstContentfontSize"),
            }}
            fontSizeMobile={{
              value: firstContentfontSizeMobile,
              label: __("firstContentfontSizeMobile"),
            }}
            fontSizeTablet={{
              value: firstContentfontSizeTablet,
              label: __("firstContentfontSizeTablet"),
            }}
            weight={firstContentWeight}
            style={firstContentStyle}
            spacing={firstContentLetter}
            upper={firstContentUpper}
            onChangeWeight={(newWeight) =>
              setAttributes({ firstContentWeight: newWeight || 500 })
            }
            onChangeStyle={(newStyle) =>
              setAttributes({ firstContentStyle: newStyle })
            }
            onChangeSpacing={(newValue) =>
              setAttributes({ firstContentLetter: newValue })
            }
            onChangeUpper={(check) =>
              setAttributes({ firstContentUpper: check })
            }
          />
          <ColorPalette
            label={__("Color")}
            value={typoColor}
            onChange={(newTypoColor) =>
              setAttributes({ typoColor: newTypoColor })
            }
          />
          <ColorPalette
            label={__("Hover Color")}
            value={hoverColor}
            onChange={(newHoverColor) =>
              setAttributes({ hoverColor: newHoverColor })
            }
          />
          <PremiumMarginR
            directions={["bottom"]}
            setAttributes={setAttributes}
            marginBottomType={{
              value: marginBottomType,
              label: __("marginBottomType"),
            }}
            marginBottom={{ value: marginBottom, label: __("marginBottom") }}
            marginBottomMobile={{
              value: marginBottomMobile,
              label: __("marginBottomMobile"),
            }}
            marginBottomTablet={{
              value: marginBottomTablet,
              label: __("marginBottomTablet"),
            }}
          />
        </PanelBody>
        <PanelBody
          title={__("Metadata Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <PremiumTypo
            components={[
              "responsiveSize",
              "weight",
              "style",
              "upper",
              "spacing",
            ]}
            setAttributes={setAttributes}
            fontSizeType={{
              value: secondContentfontSizeType,
              label: __("secondContentfontSizeType"),
            }}
            fontSize={{
              value: secondContentfontSize,
              label: __("secondContentfontSize"),
            }}
            fontSizeMobile={{
              value: secondContentfontSizeMobile,
              label: __("secondContentfontSizeMobile"),
            }}
            fontSizeTablet={{
              value: secondContentfontSizeTablet,
              label: __("secondContentfontSizeTablet"),
            }}
            weight={secondContentWeight}
            style={secondContentStyle}
            spacing={secondContentLetter}
            upper={secondContentUpper}
            onChangeWeight={(newWeight) =>
              setAttributes({ secondContentWeight: newWeight || 500 })
            }
            onChangeStyle={(newStyle) =>
              setAttributes({ secondContentStyle: newStyle })
            }
            onChangeSpacing={(newValue) =>
              setAttributes({ secondContentLetter: newValue })
            }
            onChangeUpper={(check) =>
              setAttributes({ secondContentUpper: check })
            }
          />
          <ColorPalette
            label={__("Text Color")}
            value={metaColor}
            onChange={(newMetaColor) =>
              setAttributes({ metaColor: newMetaColor })
            }
          />
          <ColorPalette
            label={__("Links Hover Color")}
            value={linkColor}
            onChange={(newLinkColor) =>
              setAttributes({ linkColor: newLinkColor })
            }
          />
          <ColorPalette
            label={__("Separator Color")}
            value={sepaColor}
            onChange={(newSepaColor) =>
              setAttributes({ sepaColor: newSepaColor })
            }
          />
        </PanelBody>
        <PanelBody
          title={__("Post Content Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <PremiumTypo
            components={[
              "responsiveSize",
              "weight",
              "style",
              "upper",
              "spacing",
            ]}
            setAttributes={setAttributes}
            fontSizeType={{
              value: postContentfontSizeType,
              label: __("postContentfontSizeType"),
            }}
            fontSize={{
              value: postContentfontSize,
              label: __("postContentfontSize"),
            }}
            fontSizeMobile={{
              value: postContentfontSizeMobile,
              label: __("postContentfontSizeMobile"),
            }}
            fontSizeTablet={{
              value: postContentfontSizeTablet,
              label: __("postContentfontSizeTablet"),
            }}
            weight={postContentWeight}
            style={postContentStyle}
            spacing={postContentLetter}
            upper={postContentUpper}
            onChangeWeight={(newWeight) =>
              setAttributes({ postContentWeight: newWeight || 500 })
            }
            onChangeStyle={(newStyle) =>
              setAttributes({ postContentStyle: newStyle })
            }
            onChangeSpacing={(newValue) =>
              setAttributes({ postContentLetter: newValue })
            }
            onChangeUpper={(check) =>
              setAttributes({ postContentUpper: check })
            }
          />
          <ColorPalette
            label={__("Text Color")}
            value={textColor}
            onChange={(newTextColor) =>
              setAttributes({ textColor: newTextColor })
            }
          />
          <PremiumMarginR
            directions={["bottom", "top", "right", "left"]}
            setAttributes={setAttributes}
            marginBottomType={{
              value: PostmarginBottomType,
              label: __("marginBottomType"),
            }}
            marginBottom={{
              value: PostmarginBottom,
              label: __("marginBottom"),
            }}
            marginBottomMobile={{
              value: PostmarginBottomMobile,
              label: __("marginBottomMobile"),
            }}
            marginBottomTablet={{
              value: PostmarginBottomTablet,
              label: __("marginBottomTablet"),
            }}
            marginTopType={{
              value: PostmarginTopType,
              label: __("marginTopType"),
            }}
            marginTop={{ value: PostmarginTop, label: __("marginTop") }}
            marginTopMobile={{
              value: PostmarginTopMobile,
              label: __("marginTopMobile"),
            }}
            marginTopTablet={{
              value: PostmarginTopTablet,
              label: __("marginTopTablet"),
            }}
            marginRightType={{
              value: PostmarginRightType,
              label: __("marginRightType"),
            }}
            marginRight={{
              value: PostmarginRight,
              label: __("marginRight"),
            }}
            marginRightMobile={{
              value: PostmarginRightMobile,
              label: __("marginRightMobile"),
            }}
            marginRightTablet={{
              value: PostmarginRightTablet,
              label: __("marginRightTablet"),
            }}
            marginLeftType={{
              value: PostmarginLeftType,
              label: __("marginLeftType"),
            }}
            marginLeft={{
              value: PostmarginLeft,
              label: __("marginLeft"),
            }}
            marginLeftMobile={{
              value: PostmarginLeftMobile,
              label: __("marginLeftMobile"),
            }}
            marginLeftTablet={{
              value: PostmarginLeftTablet,
              label: __("marginLeftTablet"),
            }}
          />
          <ColorPalette
            label={`Background Color`}
            value={backgroundPostContent}
            onChange={(value) =>
              setAttributes({ backgroundPostContent: value })
            }
          />
          <PremiumBoxShadow
            inner={true}
            color={containerShadowColor}
            blur={containerShadowBlur}
            horizontal={containerShadowHorizontal}
            vertical={containerShadowVertical}
            position={containerShadowPosition}
            onChangeColor={(newColor) =>
              setAttributes({
                containerShadowColor: newColor.hex,
              })
            }
            onChangeBlur={(newBlur) =>
              setAttributes({
                containerShadowBlur: newBlur,
              })
            }
            onChangehHorizontal={(newValue) =>
              setAttributes({
                containerShadowHorizontal: newValue,
              })
            }
            onChangeVertical={(newValue) =>
              setAttributes({
                containerShadowVertical: newValue,
              })
            }
            onChangePosition={(newValue) =>
              setAttributes({
                containerShadowPosition: newValue,
              })
            }
          />

          <PremiumRange
            setAttributes={setAttributes}
            rangeType={{
              value: postSpacingType,
              label: __("postSpacingType"),
            }}
            range={{ value: postSpacing, label: __("postSpacing") }}
            rangeMobile={{
              value: postSpacingMobile,
              label: __("postSpacingMobile"),
            }}
            rangeTablet={{
              value: postSpacingTablet,
              label: __("postSpacingTablet"),
            }}
            rangeLabel={__("Post Content Spacing ")}
          />
        </PanelBody>
        <PanelBody
          title={__("Tags Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <PremiumTypo
            components={[
              "responsiveSize",
              "weight",
              "style",
              "upper",
              "spacing",
            ]}
            setAttributes={setAttributes}
            fontSizeType={{
              value: tagsfontSizeType,
              label: __("tagsfontSizeType"),
            }}
            fontSize={{
              value: tagsfontSize,
              label: __("tagsfontSize"),
            }}
            fontSizeMobile={{
              value: tagsfontSizeMobile,
              label: __("tagsfontSizeMobile"),
            }}
            fontSizeTablet={{
              value: tagsfontSizeTablet,
              label: __("tagsfontSizeTablet"),
            }}
            weight={tagsWeight}
            style={tagsStyle}
            spacing={tagsLetter}
            upper={tagsUpper}
            onChangeWeight={(newWeight) =>
              setAttributes({ tagsWeight: newWeight || 500 })
            }
            onChangeStyle={(newStyle) => setAttributes({ tagsStyle: newStyle })}
            onChangeSpacing={(newValue) =>
              setAttributes({ tagsLetter: newValue })
            }
            onChangeUpper={(check) => setAttributes({ tagsUpper: check })}
          />
          <ColorPalette
            label={__("Tag Color")}
            value={tagColor}
            onChange={(newtagColor) => setAttributes({ tagColor: newtagColor })}
          />
          <ColorPalette
            label={__("Hover Color")}
            value={hoverTag}
            onChange={(newHoverTag) => setAttributes({ hoverTag: newHoverTag })}
          />
        </PanelBody>
        ,
        {excerptType === "Link" ? (
          <PanelBody
            title={__("Button Style ")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <PremiumTypo
              components={[
                "responsiveSize",
                "weight",
                "style",
                "upper",
                "spacing",
              ]}
              setAttributes={setAttributes}
              fontSizeType={{
                value: buttonfontSizeType,
                label: __("buttonfontSizeType"),
              }}
              fontSize={{
                value: buttonfontSize,
                label: __("buttonfontSize"),
              }}
              fontSizeMobile={{
                value: buttonfontSizeMobile,
                label: __("buttonfontSizeMobile"),
              }}
              fontSizeTablet={{
                value: buttonfontSizeTablet,
                label: __("buttonfontSizeTablet"),
              }}
              weight={buttonWeight}
              style={buttonStyle}
              spacing={buttonLetter}
              upper={buttonUpper}
              onChangeWeight={(newWeight) =>
                setAttributes({ buttonWeight: newWeight || 500 })
              }
              onChangeStyle={(newStyle) =>
                setAttributes({ buttonStyle: newStyle })
              }
              onChangeSpacing={(newValue) =>
                setAttributes({ buttonLetter: newValue })
              }
              onChangeUpper={(check) => setAttributes({ buttonUpper: check })}
            />
            <PremiumRange
              setAttributes={setAttributes}
              rangeType={{
                value: buttonSpacingType,
                label: __("buttonSpacingType"),
              }}
              range={{ value: buttonSpacing, label: __("buttonSpacing") }}
              rangeMobile={{
                value: buttonSpacingMobile,
                label: __("buttonSpacingMobile"),
              }}
              rangeTablet={{
                value: buttonSpacingTablet,
                label: __("buttonSpacingTablet"),
              }}
              rangeLabel={__("Button Spacing ")}
            />
            <ColorPalette
              label={__("Color")}
              value={buttonColor}
              onChange={(newButtonColor) =>
                setAttributes({ buttonColor: newButtonColor })
              }
            />
            <ColorPalette
              label={__("Hover Color")}
              value={buttonhover}
              onChange={(newButtonHover) =>
                setAttributes({ buttonhover: newButtonHover })
              }
            />
            <ColorPalette
              label={__("Background Color")}
              value={buttonBackground}
              onChange={(newBackground) =>
                setAttributes({ buttonBackground: newBackground })
              }
            />
            <ColorPalette
              label={__("Hover Background Color")}
              value={hoverBackground}
              onChange={(newhoverBackground) =>
                setAttributes({ hoverBackground: newhoverBackground })
              }
            />
            <PremiumBorder
              borderType={borderType}
              borderWidth={borderWidth}
              borderColor={borderColor}
              borderRadius={borderRadius}
              onChangeType={(newType) => setAttributes({ borderType: newType })}
              onChangeWidth={(newWidth) =>
                setAttributes({ borderWidth: newWidth })
              }
              onChangeColor={(colorValue) =>
                setAttributes({ borderColor: colorValue.hex })
              }
              onChangeRadius={(newrRadius) =>
                setAttributes({ borderRadius: newrRadius })
              }
            />
            <PremiumRange
              setAttributes={setAttributes}
              rangeType={{
                value: buttonPaddingType,
                label: __("buttonPaddingType"),
              }}
              range={{ value: buttonPadding, label: __("buttonPadding") }}
              rangeMobile={{
                value: buttonPaddingMobile,
                label: __("buttonPaddingMobile"),
              }}
              rangeTablet={{
                value: buttonPaddingTablet,
                label: __("buttonPaddingTablet"),
              }}
              rangeLabel={__("Button Padding ")}
            />
          </PanelBody>
        ) : null}
      </InspectorControls>
    );
    if (!latestPosts) {
      return (
        <Fragment>
          {Inspectors}
          <Spinner />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {Inspectors}
          <Blog
            latestPosts={latestPosts}
            categoriesList={categoriesList}
            attributes={attributes}
          />
        </Fragment>
      );
    }
  }
}

export default withSelect((select, props) => {
  const {
    categories,
    order,
    orderBy,
    postFilter,
    paginationMarkup,
    pagination,
    currentPost,
  } = props.attributes;
  const { setAttributes } = props;
  const { getEntityRecords } = select("core");

  let allTaxonomy = PremiumBlocksSettings.all_taxonomy;
  let currentTax = allTaxonomy["post"];
  let taxonomy = "";
  let categoriesList = [];
  let rest_base = "";
  categoriesList = wp.data
    .select("core")
    .getEntityRecords("taxonomy", "category");

  if (pagination) {
    $.ajax({
      url: uagb_blocks_info.ajaxurl,
      data: {
        action: "premium_post_pagination",
        attributes: props.attributes,
        nonce: uagb_blocks_info.nonce,
      },
      dataType: "json",
      type: "POST",
      success: function (data) {
        console.log(data, 1000);
      },
    });
  }

  if ("undefined" != typeof currentTax) {
    if ("undefined" != typeof currentTax["taxonomy"][postFilter]) {
      rest_base =
        currentTax["taxonomy"][postFilter]["rest_base"] == false ||
        currentTax["taxonomy"][postFilter]["rest_base"] == null
          ? currentTax["taxonomy"][postFilter]["name"]
          : currentTax["taxonomy"][postFilter]["rest_base"];
    }

    if ("" != postFilter) {
      if (
        "undefined" != typeof currentTax["terms"] &&
        "undefined" != typeof currentTax["terms"][postFilter]
      ) {
        categoriesList = currentTax["terms"][postFilter];
      }
    }
  }

  let latestPostsQuery = {
    order: order,
    orderby: orderBy,
  };

  if (currentPost) {
    latestPostsQuery["exclude"] = select("core/editor").getCurrentPostId();
  }

  latestPostsQuery[rest_base] = categories;
  return {
    latestPosts: getEntityRecords("postType", "post", latestPostsQuery),
    categoriesList: categoriesList,
    taxonomyList:
      "undefined" != typeof currentTax ? currentTax["taxonomy"] : [],
  };
})(edit);
