import { usePostTypes, useTaxonomies } from "../post-grid/utils";
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
} from "@pbg/components";
import { generateBlockId, paddingCss } from "@pbg/helpers";
import { TaxonomyControls } from "../post-grid/taxonomy-controls";
import AuthorControl from "../post-grid/author-control";
import OrderControl from "../post-grid/order-control";
const { __ } = wp.i18n;
import { useSelect, useDispatch, select } from "@wordpress/data";
const { PanelBody, ToggleControl, SelectControl, TextControl } = wp.components;
const { InspectorControls } = wp.blockEditor;

export default function Inspector({ attributes, setQuery, setAttributes }) {
    const {
        query,
        columns,
        equalHeight,
        blogContainerBackground,
        blogBorder,
        blogBoxShadow,
        blogPadding,
        blogMargin,
        hideDesktop,
        hideTablet,
        hideMobile,
        currentPost,
        postDisplaytext,
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
    const taxonomies = useTaxonomies(postType);
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
                </InspectorTab>
                <InspectorTab key={"style"}>
                    <PanelBody
                        title={__("Container ", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <PremiumBackgroundControl
                            value={blogContainerBackground}
                            onChange={(value) =>
                                setAttributes({
                                    blogContainerBackground: value,
                                })
                            }
                        />
                        <PremiumBorder
                            label={__("Border", "premium-blocks-for-gutenberg")}
                            value={blogBorder}
                            onChange={(value) =>
                                setAttributes({ blogBorder: value })
                            }
                        />

                        <PremiumShadow
                            boxShadow={true}
                            value={blogBoxShadow}
                            onChange={(value) =>
                                setAttributes({ blogBoxShadow: value })
                            }
                        />
                        <SpacingComponent
                            value={blogPadding}
                            responsive={true}
                            showUnits={true}
                            label={__(
                                "Padding",
                                "premium-blocks-for-gutenberg"
                            )}
                            onChange={(value) =>
                                setAttributes({ blogPadding: value })
                            }
                        />
                        <SpacingComponent
                            value={blogMargin}
                            responsive={true}
                            showUnits={true}
                            label={__("Margin", "premium-blocks-for-gutenberg")}
                            onChange={(value) =>
                                setAttributes({ blogMargin: value })
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
