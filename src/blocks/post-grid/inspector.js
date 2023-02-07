import { usePostTypes, useTaxonomies } from "./utils";
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
} from "@pbg/components";
import { generateBlockId, paddingCss } from "@pbg/helpers";
import { TaxonomyControls } from "./taxonomy-controls";
import AuthorControl from "./author-control";
import OrderControl from "./order-control";
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
const { PanelBody, ToggleControl, SelectControl, TextControl } = wp.components;
const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor;

export default function Inspector({ attributes, setQuery, setAttributes }) {
    const {
        query,
        columns,
        equalHeight,
        containerBackground,
        border,
        advancedBorder,
        advancedBorderValue,
        boxShadow,
        padding,
        margin,
        hideDesktop,
        hideTablet,
        hideMobile,
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

    return (
        <InspectorControls key={"inspector"}>
            <InspectorTabs tabs={["layout", "style", "advance"]}>
                <InspectorTab key={"layout"}>
                    <PanelBody
                        title={__("General", "premium-blocks-for-gutenberg")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <ResponsiveSingleRangeControl
                            defaultValue={4}
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
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={"style"}>
                    <PremiumBackgroundControl
                        value={containerBackground}
                        onChange={(value) =>
                            setAttributes({
                                containerBackground: value,
                            })
                        }
                    />
                    <PremiumBorder
                        label={__("Border", "premium-blocks-for-gutenberg")}
                        value={border}
                        onChange={(value) => setAttributes({ border: value })}
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
                        label={__("Padding", "premium-blocks-for-gutenberg")}
                        onChange={(value) => setAttributes({ padding: value })}
                    />
                    <SpacingComponent
                        value={margin}
                        responsive={true}
                        showUnits={true}
                        label={__("Margin", "premium-blocks-for-gutenberg")}
                        onChange={(value) => setAttributes({ margin: value })}
                    />
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
