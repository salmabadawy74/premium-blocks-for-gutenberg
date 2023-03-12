import { usePostTypes, useTaxonomies } from "../util";
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    Icons,
    MultiButtonsControl as ResponsiveRadioControl,
    PremiumBackgroundControl,
    PremiumBorder,
    PremiumShadow,
    ResponsiveSingleRangeControl,
    ResponsiveRangeControl,
    TaxonomyControls,
    AuthorControl,
    OrderControl,
    RadioComponent,
    Shape,
    PremiumTypo,
    InsideTabs,
    InsideTab,
    PremiumFilters
} from "@pbg/components";
import { generateBlockId, paddingCss } from "@pbg/helpers";
const { __ } = wp.i18n;
import { useSelect, useDispatch, select } from "@wordpress/data";
const { PanelBody, ToggleControl, SelectControl, TextControl } = wp.components;
const { InspectorControls } = wp.blockEditor;

export default function Inspector({ attributes, setQuery, setAttributes }) {
    const {
        query,
        columns,
        level,
        isLink,
        currentPost,
        equalHeight,
        ContainerBackground,
        border,
        boxShadow,
        padding,
        margin,
        titleTypography,
        titleColor,
        titleHoverColor,
        titleBottomSpacing,
        hideDesktop,
        hideTablet,
        hideMobile,
        postDisplaytext,
        showAuthor,
        showDate,
        showCategories,
        showComments,

        metaTypography,
        metaColor,
        metaHoverColor,
        sepColor,
        featuredImage,
        hoverEffect,
        height,
        thumbnail,
        imageSize,
        filter,
        Hoverfilter,
        colorOverlay,
        shapeBottom,
        showContent,
        displayPostExcerpt,
        excerptType,
        excerptLen,
        fullWidth,
        readMoreText,
        contentTypography,
        contentMargin,
        contentColor,
        btnTypography,
        buttonSpacing,
        buttonColor,
        buttonBackground,
        buttonhover,
        hoverBackground,
        btnBorder,
        btnBorderHover,
        btnPadding,
        Autoplay,
        slideToScroll,
        autoplaySpeed,
        centerMode,
        slideSpacing,
        navigationDots,
        navigationArrow,
        arrowPosition
    } = attributes;
    const {
        order,
        orderBy,
        author: authorIds,
        postType,
        sticky,
        inherit,
        taxQuery,
        parents,
        perPage,
        pages,
        exclude,
        offset,
    } = query;
    const { postTypesTaxonomiesMap, postTypesSelectOptions } = usePostTypes();
    const onPostTypeChange = (newValue) => {
        const updateQuery = { postType: newValue };
        const supportedTaxonomies = postTypesTaxonomiesMap[newValue];
        const updatedTaxQuery = Object.entries(taxQuery || {}).reduce(
            (accumulator, [taxonomySlug, terms]) => {
                if (supportedTaxonomies.includes(taxonomySlug)) {
                    accumulator[taxonomySlug] = terms;
                }
                return accumulator;
            },
            {}
        );
        updateQuery.taxQuery = !!Object.keys(updatedTaxQuery).length
            ? updatedTaxQuery
            : undefined;

        if (newValue !== "post") {
            updateQuery.sticky = "";
        }
        // We need to reset `parents` because they are tied to each post type.
        updateQuery.parents = [];
        setQuery(updateQuery);
    };
    const handleCurrentPost = (value) => {
        setAttributes({ currentPost: value });
        console.log(value);
        let newQuery = { ...query };
        if (currentPost) {
            newQuery.exclude = select("core/editor").getCurrentPostId;
        }
        setQuery(newQuery);
    };
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
    const imageSizes = [
        { value: "thumbnail", label: __("Thumbnail", "premium-blocks-for-gutenberg") },
        { value: "medium", label: __("Medium", "premium-blocks-for-gutenberg") },
        { value: "large", label: __("Large", "premium-blocks-for-gutenberg") },
        { value: "full", label: __("Full Size", "premium-blocks-for-gutenberg") },
    ];

    return (
        <InspectorControls key={"inspector"}>
            <InspectorTabs tabs={["layout", "style", "advance"]}>
                <InspectorTab key={"layout"}>
                    <PanelBody
                        title={__("General", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <ResponsiveRangeControl
                            defaultValue={3}
                            label={__(
                                "Number of Columns",
                                "premium-blocks-for-gutenberg"
                            )}
                            onChange={(value) =>
                                setAttributes({ columns: value })
                            }
                            value={columns}
                            min={1}
                            max={6}
                            showUnits={false}
                        />
                        <ResponsiveSingleRangeControl
                            defaultValue={4}
                            label={__(
                                "Number of Posts Per Page",
                                "premium-blocks-for-gutenberg"
                            )}
                            onChange={(value) => setQuery({ perPage: value })}
                            value={perPage}
                            min={1}
                            showUnits={false}
                        />
                        <ToggleControl
                            label={__(
                                "Equal Height",
                                "premium-blocks-for-gutenberg"
                            )}
                            checked={equalHeight}
                            onChange={(value) =>
                                setAttributes({
                                    equalHeight: value,
                                })
                            }
                        />
                        <SelectControl
                            options={postTypesSelectOptions}
                            value={postType}
                            label={__("Post type")}
                            onChange={onPostTypeChange}
                        />
                        <TaxonomyControls onChange={setQuery} query={query} />
                        <AuthorControl value={authorIds} onChange={setQuery} />
                        <OrderControl
                            {...{ order, orderBy }}
                            onChange={setQuery}
                        />
                        <ToggleControl
                            label={__(
                                "Ignore Sticky Posts",
                                "premium-blocks-for-gutenberg"
                            )}
                            checked={sticky}
                            onChange={(value) =>
                                setQuery({
                                    sticky: value,
                                })
                            }
                        />
                        <ResponsiveSingleRangeControl
                            defaultValue={0}
                            label={__("Offset", "premium-blocks-for-gutenberg")}
                            onChange={(newOffsetNum) =>
                                setQuery({ offset: newOffsetNum })
                            }
                            value={offset}
                            min={0}
                            showUnits={false}
                        />
                        <ToggleControl
                            label={__("Exclude Current Post")}
                            checked={currentPost}
                            help={
                                currentPost
                                    ? "This option will remove the current post from the query. "
                                    : " "
                            }
                            onChange={(value) => handleCurrentPost(value)}
                        />
                        <h2>
                            {__(
                                "If Posts Not Found",
                                "premium-blocks-for-gutenberg"
                            )}
                        </h2>
                        <TextControl
                            label={__(
                                "Display Message",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={postDisplaytext}
                            onChange={(value) =>
                                setAttributes({ postDisplaytext: value })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Carousel", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Auto Play", "premium-blocks-for-gutenberg")}
                            checked={Autoplay}
                            onChange={() => setAttributes({ Autoplay: !Autoplay })}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Slides To Scroll", "premium-blocks-for-gutenberg")}
                            value={slideToScroll}
                            onChange={(newSlideScroll) =>
                                setAttributes({ slideToScroll: newSlideScroll })
                            }
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Autoplay Speed", "premium-blocks-for-gutenberg")}
                            value={autoplaySpeed}
                            onChange={(newSpeed) =>
                                setAttributes({ autoplaySpeed: newSpeed })
                            }
                            min={100}
                            max={2000}
                        />
                        <ToggleControl
                            label={__("Center Mode", "premium-blocks-for-gutenberg")}
                            checked={centerMode}
                            onChange={(centerModeValue) =>
                                setAttributes({ centerMode: centerModeValue })
                            }
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Slides' Spacing", "premium-blocks-for-gutenberg")}
                            value={slideSpacing}
                            onChange={(slideSpacingValue) =>
                                setAttributes({ slideSpacing: slideSpacingValue })
                            }
                        />
                        <ToggleControl
                            label={__("Navigation Dots", "premium-blocks-for-gutenberg")}
                            checked={navigationDots}
                            onChange={() =>
                                setAttributes({ navigationDots: !navigationDots })
                            }
                        />
                        <ToggleControl
                            label={__("Navigation Arrows", "premium-blocks-for-gutenberg")}
                            checked={navigationArrow}
                            onChange={() =>
                                setAttributes({ navigationArrow: !navigationArrow })
                            }
                        />
                        {!navigationArrow && <ResponsiveSingleRangeControl
                            label={__("Arrows Position", "premium-blocks-for-gutenberg")}
                            value={arrowPosition}
                            onChange={(arrowPositionValue) =>
                                setAttributes({ arrowPosition: arrowPositionValue })
                            }
                        />}
                    </PanelBody>
                    <PanelBody
                        title={__("Title", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <RadioComponent
                            choices={[
                                {
                                    value: "h1",
                                    label: __(
                                        "H1",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                },
                                {
                                    value: "h2",
                                    label: __(
                                        "H2",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                },
                                {
                                    value: "h3",
                                    label: __(
                                        "H3",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                },
                                {
                                    value: "h4",
                                    label: __(
                                        "H4",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                },
                                {
                                    value: "h5",
                                    label: __(
                                        "H5",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                },
                                {
                                    value: "h6",
                                    label: __(
                                        "H6",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                },
                            ]}
                            value={level}
                            onChange={(newValue) =>
                                setAttributes({ level: newValue })
                            }
                            label={__(
                                "Title Tag",
                                "premium-blocks-for-gutenberg"
                            )}
                        />

                        <ToggleControl
                            label={__(
                                "Link",
                                "premium-blocks-for-gutenberg"
                            )}
                            checked={isLink}
                            onChange={(value) =>
                                setAttributes({ isLink: value })
                            }
                        />
                        {isLink && (
                            <Fragment>
                                <p>
                                    {__(
                                        "URL",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                </p>
                                <TextControl
                                    value={rel}
                                    onChange={(value) =>
                                        setAttributes({ rel: value })
                                    }
                                    placeholder={__(
                                        "Enter URL",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                />
                                <ToggleControl
                                    checked={linkTarget}
                                    label={__(
                                        "Open Link in new Tab",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    onChange={(value) =>
                                        setAttributes({ linkTarget: value })
                                    }
                                />
                            </Fragment>
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__(
                            "Featured Image",
                            "premium-blocks-for-gutenberg"
                        )}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Show Feature Image")}
                            checked={featuredImage}
                            onChange={(value) => setAttributes({ featuredImage: value })}
                        />
                        <SelectControl
                            label={__("Hover Effect")}
                            options={hoverEffects}
                            value={hoverEffect}
                            onChange={(newEffect) =>
                                setAttributes({
                                    hoverEffect: newEffect,
                                })
                            }
                        />
                        <SelectControl
                            label={__("Image Size")}
                            options={imageSizes}
                            value={imageSize}
                            onChange={(newSizeImage) =>
                                setAttributes({
                                    imageSize: newSizeImage,
                                })
                            }
                        />
                        <ResponsiveRangeControl
                            label={__(
                                "Height",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={height}
                            onChange={(newValue) =>
                                setAttributes({ height: newValue })
                            }
                            units={["px", "em"]}
                            showUnit={true}
                            min={0}
                            max={600}
                            step={1}
                        />
                        <SelectControl
                            options={ThumbnailSelect}
                            label={__("Thumbnail Fit")}
                            value={thumbnail}
                            onChange={(value) =>
                                setAttributes({ thumbnail: value })
                            }
                        />
                        <Shape
                            shapeType="bottom"
                            value={shapeBottom}
                            onChange={(val) =>
                                setAttributes({ shapeBottom: val })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__(
                            "Meta ",
                            "premium-blocks-for-gutenberg"
                        )}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <ToggleControl
                            label={__("Author Meta")}
                            checked={showAuthor}
                            onChange={() =>
                                setAttributes({ showAuthor: !showAuther })
                            }
                        />
                        <ToggleControl
                            label={__("Date Meta")}
                            checked={showDate}
                            onChange={() =>
                                setAttributes({ showDate: !showDate })
                            }
                        />
                        <ToggleControl
                            label={__("Category Meta")}
                            checked={showCategories}
                            onChange={() =>
                                setAttributes({
                                    showCategories: !showCategories,
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Comments Meta")}
                            checked={showComments}
                            onChange={() =>
                                setAttributes({ showComments: !showComments })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__(
                            "Post Content",
                            "premium-blocks-for-gutenberg"
                        )}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__(
                                "Show Post Content",
                                "premium-blocks-for-gutenberg"
                            )}
                            checked={showContent}
                            onChange={(value) =>
                                setAttributes({ showContent: value })
                            }
                        />
                        <SelectControl
                            label={__("Get Content From")}
                            options={[
                                {
                                    label: "Post Full Content",
                                    value: "Post Full Content",
                                },
                                {
                                    label: "Post Excerpt",
                                    value: "Post Excerpt",
                                },
                            ]}
                            value={displayPostExcerpt}
                            onChange={(newExcerpt) =>
                                setAttributes({
                                    displayPostExcerpt: newExcerpt,
                                })
                            }
                        />
                        <ResponsiveSingleRangeControl
                            label={__(
                                "Excerpt Length",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={excerptLen}
                            min="1"
                            max="1600"
                            onChange={(newValue) =>
                                setAttributes({
                                    excerptLen: newValue,
                                })
                            }
                            defaultValue={0}
                            showUnit={false}
                        />
                        <SelectControl
                            label={__("Excerpt Type")}
                            options={[
                                { label: "Dots", value: "Dots" },
                                { label: "Link", value: "Link" },
                            ]}
                            value={excerptType}
                            onChange={(newExcerptType) =>
                                setAttributes({
                                    excerptType: newExcerptType,
                                })
                            }
                        />
                        {excerptType === "Link"
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
                                        setAttributes({
                                            readMoreText: newText,
                                        })
                                    }
                                />,
                            ]
                            : null}
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={"style"}>
                    <PanelBody
                        title={__("Title Style", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <PremiumTypo
                            value={titleTypography}
                            onChange={(newValue) =>
                                setAttributes({ titleTypography: newValue })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Color", "premium-blocks-for-gutenberg")}
                            colorValue={titleColor}
                            colorDefault={""}
                            onColorChange={(newValue) =>
                                setAttributes({ titleColor: newValue })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                " Hover Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={titleHoverColor}
                            colorDefault={""}
                            onColorChange={(newValue) =>
                                setAttributes({ titleHoverColor: newValue })
                            }
                        />
                        <ResponsiveRangeControl
                            label={__(
                                "Bottom Spacing",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={titleBottomSpacing}
                            onChange={(newValue) =>
                                setAttributes({ titleBottomSpacing: newValue })
                            }
                            units={["px", "em", "%"]}
                            showUnit={true}
                            min={0}
                            max={360}
                            step={1}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Image Style", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <AdvancedPopColorControl
                            label={__(
                                "Overlay Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={colorOverlay}
                            colorDefault={""}
                            onColorChange={(newValue) =>
                                setAttributes({ colorOverlay: newValue })
                            }
                        />
                        <InsideTabs>
                            <InsideTab
                                tabTitle={__(
                                    "Normal",
                                    "premium-blocks-for-gutenberg"
                                )}
                            >
                                <PremiumFilters
                                    label={__("CSS Filters")}
                                    value={filter}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            filter: newValue,
                                        })
                                    }
                                />
                            </InsideTab>
                            <InsideTab
                                tabTitle={__(
                                    "Hover",
                                    "premium-blocks-for-gutenberg"
                                )}
                            >
                                <PremiumFilters
                                    label={__("CSS Filters")}
                                    value={Hoverfilter}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            Hoverfilter: newValue,
                                        })
                                    }
                                />
                            </InsideTab>
                        </InsideTabs>
                    </PanelBody>
                    <PanelBody
                        title={__("Meta", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={[
                                "responsiveSize",
                                "weight",
                                "family",
                                "spacing",
                                "style",
                                "Upper",
                                "line",
                                "Decoration",
                            ]}
                            value={metaTypography}
                            onChange={(newValue) =>
                                setAttributes({ metaTypography: newValue })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                "Metadata Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={metaColor}
                            colorDefault={""}
                            onColorChange={(value) =>
                                setAttributes({ metaColor: value })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                "Links Hover Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={metaHoverColor}
                            colorDefault={""}
                            onColorChange={(value) =>
                                setAttributes({ metaHoverColor: value })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                "Separator Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={sepColor}
                            colorDefault={""}
                            onColorChange={(value) =>
                                setAttributes({ sepColor: value })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Post Content", "premium-blocks-for-gutenberg")}
                        className={`premium-panel-body`}
                        initialOpen={false}
                    >
                        <PremiumTypo
                            value={contentTypography}
                            onChange={(newValue) =>
                                setAttributes({ contentTypography: newValue })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__("Color", "premium-blocks-for-gutenberg")}
                            colorValue={contentColor}
                            colorDefault={""}
                            onColorChange={(newValue) =>
                                setAttributes({ contentColor: newValue })
                            }
                        />
                        <SpacingComponent
                            label={__(
                                "Text Margin",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={contentMargin}
                            onChange={(value) =>
                                setAttributes({ contentMargin: value })
                            }
                            showUnits={true}
                            responsive={true}
                        />
                        {excerptType === "Link" ? (
                            <PanelBody
                                title={__("Button Style ")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={btnTypography}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            btnTypography: newValue,
                                        })
                                    }
                                />
                                <ResponsiveRangeControl
                                    label={__(
                                        "Button Spacing ",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={buttonSpacing}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            buttonSpacing: newValue,
                                        })
                                    }
                                    showUnit={false}
                                    min={0}
                                    max={360}
                                    step={1}
                                />
                                <InsideTabs>
                                    <InsideTab
                                        tabTitle={__(
                                            "Normal",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={buttonColor}
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                setAttributes({
                                                    buttonColor: newValue,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Background Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={buttonBackground}
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                setAttributes({
                                                    buttonBackground: newValue,
                                                })
                                            }
                                        />
                                        <PremiumBorder
                                            label={__(
                                                "Border",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={btnBorder}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnBorder: value,
                                                })
                                            }
                                        />
                                    </InsideTab>
                                    <InsideTab
                                        tabTitle={__(
                                            "Hover",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Hover Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={buttonhover}
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                setAttributes({
                                                    buttonhover: newValue,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Hover Background Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={hoverBackground}
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                setAttributes({
                                                    hoverBackground: newValue,
                                                })
                                            }
                                        />
                                        <PremiumBorder
                                            label={__(
                                                "Border",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={btnBorderHover}
                                            onChange={(value) =>
                                                setAttributes({
                                                    btnBorderHover: value,
                                                })
                                            }
                                        />
                                    </InsideTab>
                                </InsideTabs>
                                <SpacingComponent
                                    value={btnPadding}
                                    responsive={true}
                                    showUnits={true}
                                    label={__(
                                        "Padding",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    onChange={(value) =>
                                        setAttributes({ btnPadding: value })
                                    }
                                />
                            </PanelBody>
                        ) : null}
                    </PanelBody>
                    <PanelBody
                        title={__("Container ", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumBackgroundControl
                            value={ContainerBackground}
                            onChange={(value) =>
                                setAttributes({
                                    ContainerBackground: value,
                                })
                            }
                        />
                        <PremiumBorder
                            label={__("Border", "premium-blocks-for-gutenberg")}
                            value={border}
                            onChange={(value) =>
                                setAttributes({ border: value })
                            }
                        />

                        <PremiumShadow
                            boxShadow={true}
                            value={boxShadow}
                            onChange={(value) =>
                                setAttributes({ boxShadow: value })
                            }
                        />
                        <SpacingComponent
                            value={padding}
                            responsive={true}
                            showUnits={true}
                            label={__(
                                "Padding",
                                "premium-blocks-for-gutenberg"
                            )}
                            onChange={(value) =>
                                setAttributes({ padding: value })
                            }
                        />
                        <SpacingComponent
                            value={margin}
                            responsive={true}
                            showUnits={true}
                            label={__("Margin", "premium-blocks-for-gutenberg")}
                            onChange={(value) =>
                                setAttributes({ margin: value })
                            }
                        />
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={"advance"}>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) =>
                            setAttributes({
                                hideDesktop: value
                                    ? " premium-desktop-hidden"
                                    : "",
                            })
                        }
                        onChangeTablet={(value) =>
                            setAttributes({
                                hideTablet: value
                                    ? " premium-tablet-hidden"
                                    : "",
                            })
                        }
                        onChangeMobile={(value) =>
                            setAttributes({
                                hideMobile: value
                                    ? " premium-mobile-hidden"
                                    : "",
                            })
                        }
                    />
                </InspectorTab>
            </InspectorTabs>
        </InspectorControls>
    );
}
