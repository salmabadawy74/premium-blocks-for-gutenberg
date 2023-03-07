import classnames from "classnames";
import {
    generateBlockId,
    gradientBackground,
    paddingCss
} from "@pbg/helpers";
import {
    AdvancedColorControl as AdvancedPopColorControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent,
    PremiumBackgroundControl,
    ResponsiveSingleRangeControl,
    PremiumShadow,
    WebfontLoader,
    PremiumUpperQuote,
    PremiumLowerQuote,
    BlockContent,
    AdvancedTabOptions
} from "@pbg/components";

const { __ } = wp.i18n;
const { PanelBody } = wp.components;
const { InspectorControls, InnerBlocks, useBlockProps } = wp.blockEditor;
const { useEffect, Fragment } = wp.element;
const { withSelect } = wp.data;

function Edit(props) {
    const { setAttributes, className, clientId, attributes } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-testimonials-" + generateBlockId(clientId),
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
                "premium/image",
                {
                    ImgUrl: attributes.authorImgUrl
                        ? attributes.authorImgUrl
                        : ""
                },
            ],
            [
                "premium/text",
                {
                    text: attributes.text
                        ? attributes.text
                        : __(
                            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.",
                            "premium-blocks-for-gutenberg"
                        ),
                    align: {
                        "Desktop": "center",
                        "Tablet": "center",
                        "Mobile": "center"
                    }
                },
            ],
            [
                "premium/author",
                {
                    align: {
                        "Desktop": "center",
                        "Tablet": "center",
                        "Mobile": "center"
                    },
                    author: attributes.author ? attributes.author : 'John Doe',
                    authorCom: attributes.authorCom ? attributes.authorCom : 'Leap13',
                    authorStyles: [
                        {
                            "authorTag": attributes.authorStyles[0].authorTag ? attributes.authorStyles[0].authorTag : "h4",
                            "authorComTag": attributes.authorStyles[0].authorComTag ? attributes.authorStyles[0].authorComTag : "h5"
                        }
                    ]
                },
            ]]
        ]
    ];

    const ALLOWED_BLOCKS = ['premium/image', 'premium/text', 'premium/author', 'premium/container'];

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        quoteStyles,
        padding,
        background,
        boxShadow,
        bodyTypography
    } = attributes;

    let loadBodyGoogleFonts;

    if (bodyTypography?.fontFamily !== "Default") {
        const bodyConfig = {
            google: {
                families: [bodyTypography.fontFamily],
            },
        };
        loadBodyGoogleFonts = (
            <WebfontLoader config={bodyConfig}></WebfontLoader>
        );
    }

    const saveQuoteStyles = (value) => {
        const newUpdate = quoteStyles.map((item, i) => {
            if (0 === i) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ quoteStyles: newUpdate });
    };

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["style", "advance"]}>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "Quotations",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Size (EM)",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={quoteStyles[0].quotSize}
                                min="1"
                                max="12"
                                onChange={(newSize) =>
                                    saveQuoteStyles({ quotSize: newSize })
                                }
                                showUnit={false}
                                defaultValue={0}
                            />
                            <AdvancedPopColorControl
                                label={__(
                                    "Quotations Color",
                                    "premium-blocks-for-gutenberg"
                                )}
                                colorValue={quoteStyles[0].quotColor}
                                colorDefault={""}
                                onColorChange={(newValue) =>
                                    saveQuoteStyles({ quotColor: newValue })
                                }
                            />
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Opacity",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={quoteStyles[0].quotOpacity}
                                onChange={(newValue) =>
                                    saveQuoteStyles({ quotOpacity: newValue })
                                }
                                showUnit={false}
                                defaultValue={0}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__(
                                "Container",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
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
                        `premium-testimonial ${blockId} premium-testimonial__wrap`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                    ...gradientBackground(background),
                    ...paddingCss(padding, props.deviceType),
                }}
            >
                <BlockContent blockProps={props}>
                    <div className={`premium-testimonial__container`}>
                        <span className={`premium-testimonial__upper`}>
                            <PremiumUpperQuote
                                size={quoteStyles[0].quotSize}
                                color={quoteStyles[0].quotColor}
                                opacity={quoteStyles[0].quotOpacity}
                            />
                        </span>
                        <div
                            className={`premium-testimonial__content`}
                        >
                            <InnerBlocks
                                template={INNER_BLOCKS_TEMPLATE}
                                templateLock={false}
                                allowedBlocks={ALLOWED_BLOCKS}
                            />
                        </div>
                        <span className={`premium-testimonial__lower`}>
                            <PremiumLowerQuote
                                size={quoteStyles[0].quotSize}
                                color={quoteStyles[0].quotColor}
                                opacity={quoteStyles[0].quotOpacity}
                            />
                        </span>
                    </div>
                </BlockContent>
                {loadBodyGoogleFonts}
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
