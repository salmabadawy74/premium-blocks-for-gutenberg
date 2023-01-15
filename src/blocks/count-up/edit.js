import classnames from "classnames";
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent,
    PremiumShadow,
    PremiumBackgroundControl
} from "@pbg/components";
import {
    gradientBackground,
    borderCss,
    paddingCss,
    generateBlockId,
} from "@pbg/helpers";

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { PanelBody } = wp.components;

const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor;

const { Fragment, useEffect } = wp.element;

function Edit(props) {
    const { setAttributes, className, clientId, attributes } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-countup-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

    const INNER_BLOCKS_TEMPLATE = [
        ['premium/container', {
            variationSelected: true,
            direction: { Desktop: "column", Tablet: "", Mobile: "" },
            wrapItems: { Desktop: "", Tablet: "", Mobile: "wrap" },
            isBlockRootParent: true,
            alignItems: {
                "Desktop": "center",
                "Tablet": "center",
                "Mobile": "center"
            },
            columnGutter: {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
                "unit": "px"
            },
            rowGutter: {
                "Desktop": 0,
                "Tablet": 0,
                "Mobile": 0,
                "unit": "px"
            },
            align: "alignwide"
        },
            [[
                "premium/icon",
                {
                    iconTypeFile: attributes.icon ? attributes.icon : 'icon',
                    selectedIcon: attributes.faIcon ? attributes.faIcon : 'dashicons dashicons-clock',
                    imageURL: attributes.imageURL ? attributes.imageURL : ''
                },
            ],
            [
                "premium/counter", {
                    prefix: attributes.prefix ? attributes.prefix : false,
                    suffix: attributes.suffix ? attributes.suffix : false,
                    increment: attributes.increment ? attributes.increment : 500,
                    suffixStyles: [
                        {
                            "suffixTxt": attributes.suffixStyles[0].suffixTxt ? attributes.suffixStyles[0].suffixTxt : "Suffix"
                        }
                    ],
                    prefixStyles: [
                        {
                            "prefixTxt": attributes.prefixStyles[0].prefixTxt ? attributes.prefixStyles[0].prefixTxt : "Prefix"
                        }
                    ]
                },
            ],
            [
                "premium/heading",
                {
                    title: attributes.titleTxt ? attributes.titleTxt : __("Premium Count Up", "premium-blocks-for-gutenberg"),
                    titleTag: "h4",
                    style: "default",
                    align: {
                        "Desktop": attributes.align['Desktop'] ? attributes.align['Desktop'] : "center",
                        "Tablet": attributes.align['Tablet'] ? attributes.align['Tablet'] : "center",
                        "Mobile": attributes.align['Mobile'] ? attributes.align['Mobile'] : "center"
                    }
                },
            ]]
        ]
    ];

    const ALLOWED_BLOCKS = ['premium/image', 'premium/icon', 'premium/heading', 'premium/container', "premium/lottie"];

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        padding,
        boxShadow,
        border,
        background
    } = attributes;

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["style", "advance"]}>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "Container",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <PremiumBackgroundControl
                                value={background}
                                onChange={(value) =>
                                    setAttributes({ background: value })
                                }
                            />
                            <PremiumShadow
                                boxShadow={true}
                                value={boxShadow}
                                onChange={(value) =>
                                    setAttributes({ boxShadow: value })
                                }
                            />
                            <hr />
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={border}
                                onChange={(value) =>
                                    setAttributes({ border: value })
                                }
                            />
                            <hr />
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
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({ hideDesktop: value })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({ hideTablet: value })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({ hideMobile: value })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `${blockId} premium-countup__wrap`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                    ...borderCss(border, props.deviceType),
                    ...paddingCss(padding, props.deviceType),
                    ...gradientBackground(background),
                }}
            >
                <InnerBlocks
                    template={INNER_BLOCKS_TEMPLATE}
                    templateLock={false}
                    allowedBlocks={ALLOWED_BLOCKS}
                />
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
})(Edit);