import classnames from "classnames";
import {
    MultiButtonsControl as ResponsiveRadioControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent as SpacingControl,
    AdvancedColorControl as AdvancedPopColorControl,
    Icons,
    BlockContent,
    AdvancedTabOptions
} from "@pbg/components";
import { generateBlockId, paddingCss } from "@pbg/helpers";

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
const { PanelBody } = wp.components;
const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor;

function Edit(props) {
    const { setAttributes, className, clientId, attributes } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-person-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    const INNER_BLOCKS_TEMPLATE = [
        [
            "premium/image",
            {
                ImgUrl: attributes.multiPersonContent[0].personImgUrl
                    ? attributes.multiPersonContent[0].personImgUrl
                    : "",
            },
        ],
        [
            "premium/heading",
            {
                title: attributes.multiPersonContent[0].name
                    ? attributes.multiPersonContent[0].name
                    : __("John Doe", "premium-blocks-for-gutenberg"),
                titleTag: attributes.nameTag ? attributes.nameTag : "h3",
                style: "default",
            },
        ],
        [
            "premium/heading",
            {
                title: attributes.multiPersonContent[0].title
                    ? attributes.multiPersonContent[0].title
                    : __("Senior Developer", "premium-blocks-for-gutenberg"),
                titleTag: attributes.titleTag ? attributes.titleTag : "h5",
                style: "default",
            },
        ],
        [
            "premium/text",
            {
                text: attributes.multiPersonContent[0].desc
                    ? attributes.multiPersonContent[0].desc
                    : __(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla",
                        "premium-blocks-for-gutenberg"
                    ),
            },
        ],
        [
            "premium/icon-group",
            {
                align: {
                    Desktop: attributes.align["Desktop"]
                        ? attributes.align["Desktop"]
                        : "center",
                    Tablet: attributes.align["Tablet"]
                        ? attributes.align["Tablet"]
                        : "center",
                    Mobile: attributes.align["Mobile"]
                        ? attributes.align["Mobile"]
                        : "center",
                },
            },
        ],
    ];

    const {
        blockId,
        align,
        contentColor,
        contentPadding,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = props.attributes;

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "General Settings",
                                "premium-blocks-for-gutenberg"
                            )}
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
                                value={align}
                                onChange={(newValue) =>
                                    setAttributes({ align: newValue })
                                }
                                showIcons={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "Content",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <div className="premium-control-toggle">
                                <AdvancedPopColorControl
                                    label={__(
                                        "Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={contentColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        setAttributes({
                                            contentColor: newValue,
                                        })
                                    }
                                />
                            </div>
                            <SpacingControl
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={contentPadding}
                                onChange={(value) =>
                                    setAttributes({ contentPadding: value })
                                }
                                showUnits={true}
                                responsive={true}
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
                        <AdvancedTabOptions {...props} />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-person ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    textAlign: align[props.deviceType],
                    backgroundColor: contentColor,
                    ...paddingCss(contentPadding, props.deviceType),
                }}
            >
                <BlockContent blockProps={props}>
                    <InnerBlocks
                        template={INNER_BLOCKS_TEMPLATE}
                        templateLock={false}
                    />
                </BlockContent>
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

    return { deviceType: deviceType };
})(Edit);
