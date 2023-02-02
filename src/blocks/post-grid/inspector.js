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
} from "@pbg/components";
import { generateBlockId, paddingCss } from "@pbg/helpers";
import { TaxonomyControls } from "./taxonomy-controls";
import AuthorControl from "./author-control";
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
const { PanelBody, ToggleControl, SelectControl } = wp.components;
const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor;

export default function Inspector({ attributes, setQuery }) {
    const {
        query,
        alignment,
        containerBackground,
        iconBorder,
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
                        <ResponsiveRadioControl
                            label={__(
                                "Alignment",
                                "premium-blocks-for-gutenberg"
                            )}
                            choices={[
                                {
                                    value: "left",
                                    label: __(
                                        "Left",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.alignLeft,
                                },
                                {
                                    value: "center",
                                    label: __(
                                        "Center",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.alignCenter,
                                },
                                {
                                    value: "right",
                                    label: __(
                                        "Right",
                                        "premium-blocks-for-gutenberg"
                                    ),
                                    icon: Icons.alignRight,
                                },
                            ]}
                            value={alignment}
                            onChange={(newValue) =>
                                setAttributes({ alignment: newValue })
                            }
                            showIcons={true}
                        />
                        <SelectControl
                            options={postTypesSelectOptions}
                            value={postType}
                            label={__("Post type")}
                            onChange={onPostTypeChange}
                            help={__(
                                "WordPress contains different types of content and they are divided into collections called “Post types”. By default there are a few different ones such as blog posts and pages, but plugins could add more."
                            )}
                        />
                        <TaxonomyControls onChange={setQuery} query={query} />
                        <AuthorControl value={authorIds} onChange={setQuery} />
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
                    {!advancedBorder && (
                        <PremiumBorder
                            label={__("Border", "premium-blocks-for-gutenberg")}
                            value={iconBorder}
                            onChange={(value) =>
                                setAttributes({ iconBorder: value })
                            }
                        />
                    )}
                    <ToggleControl
                        label={__(
                            "Advanced Border Radius",
                            "premium-blocks-for-gutenberg"
                        )}
                        checked={advancedBorder}
                        onChange={(value) =>
                            setAttributes({ advancedBorder: value })
                        }
                    />
                    <div>
                        {__(
                            "Apply custom radius values. Get the radius value from here",
                            "premium-blocks-for-gutenberg"
                        )}
                        <a
                            target={"_blank"}
                            href={
                                "https://9elements.github.io/fancy-border-radius/"
                            }
                        >
                            {" "}
                            Here
                        </a>
                    </div>
                    {advancedBorder && (
                        <TextControl
                            label={__(
                                "Border Radius",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={advancedBorderValue}
                            onChange={(value) =>
                                setAttributes({
                                    advancedBorderValue: value,
                                })
                            }
                        />
                    )}
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
