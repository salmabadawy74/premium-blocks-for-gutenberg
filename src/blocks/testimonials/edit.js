import classnames from "classnames";
import {
    generateBlockId,
    gradientBackground,
    typographyCss,
    paddingCss,
    marginCss,
    borderCss,
} from "@pbg/helpers";
import {
    AdvancedColorControl as AdvancedPopColorControl,
    RadioComponent,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent,
    MultiButtonsControl,
    Icons,
    PremiumBackgroundControl,
    ResponsiveSingleRangeControl,
    PremiumShadow,
    WebfontLoader,
    PremiumMediaUpload,
    PremiumUpperQuote,
    PremiumLowerQuote,
    DefaultImage,
    PremiumTypo,
} from "@pbg/components";
const { __ } = wp.i18n;
const { PanelBody, TextControl, ToggleControl } = wp.components;
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
        [
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
                author: attributes.author,
                authorCom: attributes.authorCom,
                authorStyles: [
                    {
                        "authorTag": attributes.authorStyles[0].authorTag ? attributes.authorStyles[0].authorTag : "h4",
                        "authorComTag": attributes.authorStyles[0].authorComTag ? attributes.authorStyles[0].authorComTag : "h5"
                    }
                ]
            },
        ]
    ];

    const ALLOWED_BLOCKS = ['premium/image', 'premium/text', 'premium/author'];

    const {
        blockId,
        align,
        authorImgId,
        authorImgUrl,
        imgSize,
        imageBorder,
        author,
        authorStyles,
        text,
        authorCom,
        hideDesktop,
        hideTablet,
        hideMobile,
        contentStyle,
        companyStyles,
        quoteStyles,
        padding,
        background,
        boxShadow,
        authorTypography,
        bodyMargin,
        bodyTypography,
        companyTypography,
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

    const saveAuthorStyle = (value) => {
        const newUpdate = authorStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            authorStyles: newUpdate,
        });
    };

    const saveContentStyle = (value) => {
        const newUpdate = contentStyle.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            contentStyle: newUpdate,
        });
    };

    const saveCompanyStyle = (value) => {
        const newUpdate = companyStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ companyStyles: newUpdate });
    };

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
                        style={{
                            textAlign: align?.[props.deviceType],
                        }}
                    >
                        <InnerBlocks
                            template={INNER_BLOCKS_TEMPLATE}
                            templateLock={false}
                            allowedBlocks={ALLOWED_BLOCKS}
                        />
                        {/* <div className={`premium-testimonial__img_wrap`}>
                            {authorImgUrl && (
                                <img
                                    className={`premium-testimonial__img`}
                                    src={`${authorImgUrl}`}
                                    alt="Author"
                                    style={{
                                        width: imgSize + "px",
                                        height: imgSize + "px",
                                        ...borderCss(
                                            imageBorder,
                                            props.deviceType
                                        ),
                                    }}
                                />
                            )}
                            {!authorImgUrl && (
                                <DefaultImage className={className} />
                            )}
                        </div> */}
                        {/* <div className={`premium-testimonial__text_wrap`}>
                            <div>
                                <RichText
                                    tagName="p"
                                    className={`premium-testimonial__text`}
                                    value={text}
                                    // placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                                    onChange={(newText) =>
                                        setAttributes({ text: newText })
                                    }
                                    style={{
                                        color: contentStyle[0].bodyColor,
                                        ...typographyCss(
                                            bodyTypography,
                                            props.deviceType
                                        ),
                                        ...marginCss(
                                            bodyMargin,
                                            props.deviceType
                                        ),
                                    }}
                                    keepPlaceholderOnFocus
                                />
                            </div>
                        </div> */}
                        {/* <div
                            className={`premium-testimonial__info`}
                            style={{
                                justifyContent: align?.[props.deviceType],
                            }}
                        >
                            <RichText
                                tagName={authorStyles[0].authorTag.toLowerCase()}
                                className={`premium-testimonial__author`}
                                value={author}
                                onChange={(newText) =>
                                    setAttributes({ author: newText })
                                }
                                style={{
                                    color: authorStyles[0].authorColor,
                                    ...typographyCss(
                                        authorTypography,
                                        props.deviceType
                                    ),
                                }}
                                keepPlaceholderOnFocus
                            />
                            <span
                                className={`premium-testimonial__sep`}
                                style={{
                                    color: companyStyles[0].dashColor,
                                }}
                            >
                                &nbsp;-&nbsp;
                            </span>
                            <RichText
                                tagName={authorStyles[0].authorComTag.toLowerCase()}
                                className={`premium-testimonial__author_comp`}
                                onChange={(newText) =>
                                    setAttributes({ authorCom: newText })
                                }
                                value={authorCom}
                                style={{
                                    color: companyStyles[0].authorComColor,
                                    ...typographyCss(
                                        companyTypography,
                                        props.deviceType
                                    ),
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div> */}
                    </div>
                    <span className={`premium-testimonial__lower`}>
                        <PremiumLowerQuote
                            size={quoteStyles[0].quotSize}
                            color={quoteStyles[0].quotColor}
                            opacity={quoteStyles[0].quotOpacity}
                        />
                    </span>
                </div>
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
