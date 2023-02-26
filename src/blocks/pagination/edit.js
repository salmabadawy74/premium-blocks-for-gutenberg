import { useEntityProp, store as coreStore } from "@wordpress/core-data";
const { __ } = wp.i18n;
import classnames from "classnames";
import { paginationPresets } from "./presets";
const { withSelect, withDispatch } = wp.data;
import {
    generateBlockId,
    generateCss,
    typographyCss,
    paddingCss,
    marginCss,
} from "@pbg/helpers";
import {
    ResponsiveRangeControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    AdvancedColorControl as AdvancedPopColorControl,
    Shape,
    MultiButtonsControl as ResponsiveRadioControl,
    InsideTabs,
    InsideTab,
    Icons,
    PremiumTypo,
    PremiumBorder,
    SpacingComponent as SpacingControl,
    PBGPresets,
} from "@pbg/components";
const { useEffect, Fragment } = wp.element;
const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;
import {
    InspectorControls,
    useBlockProps,
    PlainText,
} from "@wordpress/block-editor";

function Pagination(props) {
    const {
        context: { postId, postType: postTypeSlug, queryId },
        attributes,
        deviceType,
        setAttributes,
        clientId,
        className,
    } = props;
    const {
        blockId,
        showPagnation,
        pageLimit,
        showPrevNext,
        prevString,
        nextString,
        alignment,
        typography,
        color,
        hoverColor,
        activeColor,
        backgroundColor,
        hoverbackgroundColor,
        activebackgroundColor,
        border,
        hoverBorder,
        activeborder,
        margin,
        padding,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes;

    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId: "premium-post-pagination-" + generateBlockId(clientId),
        });
    }, []);

    const createPaginationItem = (content, Tag = "a", extraClass = "") => (
        <Tag
            className={`page-numbers ${extraClass}`}
            style={{
                ...typographyCss(typography, deviceType),
                ...marginCss(margin, deviceType),
                ...paddingCss(padding, deviceType),
            }}
        >
            {content}
        </Tag>
    );
    const loadStyles = () => {
        const styles = {};
        styles[` #${blockId} .page-numbers `] = {
            color: `${color}`,
            "background-color": `${backgroundColor}`,
            "border-style": border?.borderType,
            "border-top-width": `${border?.borderWidth?.[deviceType]?.top}px`,
            "border-right-width": `${border?.borderWidth?.[deviceType]?.right}px`,
            "border-bottom-width": `${border?.borderWidth?.[deviceType]?.bottom}px`,
            "border-left-width": `${border?.borderWidth?.[deviceType]?.left}px`,
            "border-color": `${border?.borderColor}`,
            "border-top-left-radius": `${border?.borderRadius?.[deviceType].top}px`,
            "border-top-right-radius": `${border?.borderRadius?.[deviceType].right}px`,
            "border-bottom-left-radius": `${border?.borderRadius?.[deviceType].bottom}px`,
            "border-bottom-right-radius": `${border?.borderRadius?.[deviceType].left}px`,
        };
        styles[` #${blockId} .page-numbers:hover `] = {
            color: `${hoverColor}`,
            "background-color": `${hoverbackgroundColor}`,
            "border-style": hoverBorder?.borderType,
            "border-top-width": `${hoverBorder?.borderWidth?.[deviceType]?.top}px`,
            "border-right-width": `${hoverBorder?.borderWidth?.[deviceType]?.right}px`,
            "border-bottom-width": `${hoverBorder?.borderWidth?.[deviceType]?.bottom}px`,
            "border-left-width": `${hoverBorder?.borderWidth?.[deviceType]?.left}px`,
            "border-color": `${hoverBorder?.borderColor}`,
            "border-top-left-radius": `${hoverBorder?.borderRadius?.[deviceType].top}px`,
            "border-top-right-radius": `${hoverBorder?.borderRadius?.[deviceType].right}px`,
            "border-bottom-left-radius": `${hoverBorder?.borderRadius?.[deviceType].bottom}px`,
            "border-bottom-right-radius": `${hoverBorder?.borderRadius?.[deviceType].left}px`,
        };
        styles[` #${blockId} span.current `] = {
            color: `${activeColor}`,
            "background-color": `${activebackgroundColor}`,
            "border-style": activeborder?.borderType,
            "border-top-width": `${activeborder?.borderWidth?.[deviceType]?.top}px`,
            "border-right-width": `${activeborder?.borderWidth?.[deviceType]?.right}px`,
            "border-bottom-width": `${activeborder?.borderWidth?.[deviceType]?.bottom}px`,
            "border-left-width": `${activeborder?.borderWidth?.[deviceType]?.left}px`,
            "border-color": `${activeborder?.borderColor}`,
            "border-top-left-radius": `${activeborder?.borderRadius?.[deviceType].top}px`,
            "border-top-right-radius": `${activeborder?.borderRadius?.[deviceType].right}px`,
            "border-bottom-left-radius": `${activeborder?.borderRadius?.[deviceType].bottom}px`,
            "border-bottom-right-radius": `${activeborder?.borderRadius?.[deviceType].left}px`,
        };

        return generateCss(styles);
    };

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "Pagination",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PBGPresets
                                setAttributes={setAttributes}
                                presets={paginationPresets}
                                presetInputType="radioImage"
                            />
                            <ToggleControl
                                label={__(
                                    "Enable Pagination Next/Prev Strings",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={showPrevNext}
                                onChange={(value) =>
                                    setAttributes({ showPrevNext: value })
                                }
                            />
                            {showPrevNext && (
                                <Fragment>
                                    <TextControl
                                        label={__(
                                            "Previous Page String",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={prevString}
                                        onChange={(newText) =>
                                            setAttributes({
                                                prevString: newText,
                                            })
                                        }
                                    />
                                    <TextControl
                                        label={__(
                                            "Next Page String",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={nextString}
                                        onChange={(newText) =>
                                            setAttributes({
                                                nextString: newText,
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
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
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
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
                            value={typography}
                            onChange={(newValue) =>
                                setAttributes({
                                    typography: newValue,
                                })
                            }
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
                                    colorValue={color}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        setAttributes({ color: newValue })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__(
                                        "Background Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={backgroundColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        setAttributes({
                                            backgroundColor: newValue,
                                        })
                                    }
                                />
                                <PremiumBorder
                                    label={__(
                                        "Border",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={border}
                                    onChange={(value) =>
                                        setAttributes({
                                            border: value,
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
                                        "Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={hoverColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        setAttributes({ hoverColor: newValue })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__(
                                        "Background Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={hoverbackgroundColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        setAttributes({
                                            hoverbackgroundColor: newValue,
                                        })
                                    }
                                />
                                <PremiumBorder
                                    label={__(
                                        "Border",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={hoverBorder}
                                    onChange={(value) =>
                                        setAttributes({
                                            hoverBorder: value,
                                        })
                                    }
                                />
                            </InsideTab>
                            <InsideTab
                                tabTitle={__(
                                    "Active",
                                    "premium-blocks-for-gutenberg"
                                )}
                            >
                                <AdvancedPopColorControl
                                    label={__(
                                        "Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={activeColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        setAttributes({ activeColor: newValue })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__(
                                        "Background Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={activebackgroundColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        setAttributes({
                                            activebackgroundColor: newValue,
                                        })
                                    }
                                />
                                <PremiumBorder
                                    label={__(
                                        "Border",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={activeborder}
                                    onChange={(value) =>
                                        setAttributes({
                                            activeborder: value,
                                        })
                                    }
                                />
                            </InsideTab>
                        </InsideTabs>
                        <hr />
                        <SpacingControl
                            label={__(
                                "Padding",
                                "premium-blocks-for-gutenberg"
                            )}
                            value={padding}
                            onChange={(value) =>
                                setAttributes({
                                    padding: value,
                                })
                            }
                            showUnits={true}
                            responsive={true}
                        />
                        <hr />
                        <SpacingControl
                            label={__("Margin", "premium-blocks-for-gutenberg")}
                            value={margin}
                            onChange={(value) =>
                                setAttributes({
                                    margin: value,
                                })
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

            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-blog-pagination-container`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                id={blockId}
                style={{
                    textAlign: alignment[deviceType],
                }}
            >
                <style>{loadStyles()}</style>

                {showPrevNext &&
                    createPaginationItem(prevString, "div", "Prevstring")}
                {createPaginationItem(1)}
                {createPaginationItem(2)}
                {createPaginationItem(3, "span", "current")}
                {createPaginationItem(4)}
                {createPaginationItem(5)}
                {createPaginationItem("...", "a", "dits")}
                {createPaginationItem(8)}

                {showPrevNext &&
                    createPaginationItem(nextString, "div", "Nextstring")}
            </div>
        </Fragment>
    );
}
export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(Pagination);
