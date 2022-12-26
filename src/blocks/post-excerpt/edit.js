import { useEntityProp } from "@wordpress/core-data";
const { useMemo, Fragment, useEffect } = wp.element;
import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
    generateBlockId,
    generateCss,
    typographyCss,
    paddingCss,
    marginCss,
} from "@pbg/helpers";
import {
    ResponsiveSingleRangeControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumTypo,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    WebfontLoader,
} from "@pbg/components";
const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;
import classNames from "classnames";
const { withSelect } = wp.data;

function Excerpt(props) {
    const {
        context: { postId, postType, queryId },
        attributes,
        setAttributes,
        deviceType,
        clientId,
    } = props;
    const {
        blockId,
        showContent,
        displayPostExcerpt,
        excerptType,
        excerptLen,
        fullWidth,
        readMoreText,
        typography,
        margin,
        color,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes;
    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId: "premium-post-content-" + generateBlockId(clientId),
        });
    }, []);

    const [
        rawExcerpt,
        setExcerpt,
        { rendered: renderedExcerpt, protected: isProtected } = {},
    ] = useEntityProp("postType", postType, "excerpt", postId);

    const strippedRenderedExcerpt = useMemo(() => {
        if (!renderedExcerpt) return "";
        const document = new window.DOMParser().parseFromString(
            renderedExcerpt,
            "text/html"
        );
        return document.body.textContent || document.body.innerText || "";
    }, [renderedExcerpt]);
    console.log(strippedRenderedExcerpt, rawExcerpt, renderedExcerpt);
    const words = strippedRenderedExcerpt.split(" ");
    let exLength = excerptLen ? excerptLen : 25;
    let excerpt, Content;
    if (exLength >= words.length) {
        excerpt = strippedRenderedExcerpt;
    } else {
        const truncated = words.slice(0, exLength);
        excerpt = truncated.join(" ");
        excerpt += " ...";
    }
    if (showContent && displayPostExcerpt === "Post Excerpt") {
        Content = (
            <p
                style={{
                    color: color,
                    ...typographyCss(typography, deviceType),
                }}
            >
                {excerpt}
            </p>
        );
    } else if (showContent && displayPostExcerpt === "Post Full Content") {
        Content = (
            <p
                style={{
                    color: color,
                    ...typographyCss(typography, deviceType),
                }}
            >
                {strippedRenderedExcerpt}
            </p>
        );
    } else {
        Content = null;
    }

    const blockProps = useBlockProps({
        className: classNames(
            blockId,
            "premium-blog-entry-content__container",
            {
                " premium-desktop-hidden": hideDesktop,
                " premium-tablet-hidden": hideTablet,
                " premium-mobile-hidden": hideMobile,
            }
        ),
        style: {
            ...marginCss(margin, deviceType),
        },
    });

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "Post Content",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
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
                        <PremiumTypo
                            value={typography}
                            onChange={(newValue) =>
                                setAttributes({ titleTypography: newValue })
                            }
                        />
                        <AdvancedPopColorControl
                            label={__(
                                "Overlay Color",
                                "premium-blocks-for-gutenberg"
                            )}
                            colorValue={color}
                            colorDefault={""}
                            onColorChange={(newValue) =>
                                setAttributes({ color: newValue })
                            }
                        />
                        <SpacingComponent
                            label={__(
                                "Text Margin",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={margin}
                            onChange={(value) =>
                                setAttributes({ margin: value })
                            }
                            showUnits={true}
                            responsive={true}
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
            <div {...blockProps}> {Content}</div>
        </Fragment>
    );
}
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select(
        "core/edit-post"
    );
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        // Editor preview device.
        deviceType: deviceType,
    };
})(Excerpt);
