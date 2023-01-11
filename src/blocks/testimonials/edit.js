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
                    : "",
                imgWidth: {
                    "Desktop": attributes.imgSize ? attributes.imgSize : "",
                    "Tablet": attributes.imgSize ? attributes.imgSize : "",
                    "Mobile": attributes.imgSize ? attributes.imgSize : "",
                    "unit": "px"
                },
                imageBorder: {
                    "borderType": attributes.imageBorder.borderType ? attributes.imageBorder.borderType : "none",
                    "borderColor": attributes.imageBorder.borderColor ? attributes.imageBorder.borderColor : "",
                    "borderWidth": {
                        "Desktop": {
                            "top": attributes.imageBorder.borderWidth['Desktop'].top ? attributes.imageBorder.borderWidth['Desktop'].top : "",
                            "right": attributes.imageBorder.borderWidth['Desktop'].right ? attributes.imageBorder.borderWidth['Desktop'].right : "",
                            "bottom": attributes.imageBorder.borderWidth['Desktop'].bottom ? attributes.imageBorder.borderWidth['Desktop'].bottom : "",
                            "left": attributes.imageBorder.borderWidth['Desktop'].left ? attributes.imageBorder.borderWidth['Desktop'].left : ""
                        },
                        "Tablet": {
                            "top": attributes.imageBorder.borderWidth['Tablet'].top ? attributes.imageBorder.borderWidth['Tablet'].top : "",
                            "right": attributes.imageBorder.borderWidth['Tablet'].right ? attributes.imageBorder.borderWidth['Tablet'].right : "",
                            "bottom": attributes.imageBorder.borderWidth['Tablet'].bottom ? attributes.imageBorder.borderWidth['Tablet'].bottom : "",
                            "left": attributes.imageBorder.borderWidth['Tablet'].left ? attributes.imageBorder.borderWidth['Tablet'].left : ""
                        },
                        "Mobile": {
                            "top": attributes.imageBorder.borderWidth['Mobile'].top ? attributes.imageBorder.borderWidth['Mobile'].top : "",
                            "right": attributes.imageBorder.borderWidth['Mobile'].right ? attributes.imageBorder.borderWidth['Mobile'].right : "",
                            "bottom": attributes.imageBorder.borderWidth['Mobile'].bottom ? attributes.imageBorder.borderWidth['Mobile'].bottom : "",
                            "left": attributes.imageBorder.borderWidth['Mobile'].left ? attributes.imageBorder.borderWidth['Mobile'].left : ""
                        }
                    },
                    "borderRadius": {
                        "Desktop": {
                            "top": attributes.imageBorder.borderRadius['Desktop'].top ? attributes.imageBorder.borderRadius['Desktop'].top : "",
                            "right": attributes.imageBorder.borderRadius['Desktop'].right ? attributes.imageBorder.borderRadius['Desktop'].right : "",
                            "bottom": attributes.imageBorder.borderRadius['Desktop'].bottom ? attributes.imageBorder.borderRadius['Desktop'].bottom : "",
                            "left": attributes.imageBorder.borderRadius['Desktop'].left ? attributes.imageBorder.borderRadius['Desktop'].left : ""
                        },
                        "Tablet": {
                            "top": attributes.imageBorder.borderRadius['Tablet'].top ? attributes.imageBorder.borderRadius['Tablet'].top : "",
                            "right": attributes.imageBorder.borderRadius['Tablet'].right ? attributes.imageBorder.borderRadius['Tablet'].right : "",
                            "bottom": attributes.imageBorder.borderRadius['Tablet'].bottom ? attributes.imageBorder.borderRadius['Tablet'].bottom : "",
                            "left": attributes.imageBorder.borderRadius['Tablet'].left ? attributes.imageBorder.borderRadius['Tablet'].left : ""
                        },
                        "Mobile": {
                            "top": attributes.imageBorder.borderRadius['Mobile'].top ? attributes.imageBorder.borderRadius['Mobile'].top : "",
                            "right": attributes.imageBorder.borderRadius['Mobile'].right ? attributes.imageBorder.borderRadius['Mobile'].right : "",
                            "bottom": attributes.imageBorder.borderRadius['Mobile'].bottom ? attributes.imageBorder.borderRadius['Mobile'].bottom : "",
                            "left": attributes.imageBorder.borderRadius['Mobile'].left ? attributes.imageBorder.borderRadius['Mobile'].left : ""
                        }
                    }
                }
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
                },
                typography: {
                    "fontWeight": attributes.bodyTypography.fontWeight ? attributes.bodyTypography.fontWeight : "400",
                    "fontStyle": attributes.bodyTypography.fontStyle ? attributes.bodyTypography.fontStyle : "",
                    "letterSpacing": {
                        "Desktop": attributes.bodyTypography.letterSpacing['Desktop'] ? attributes.bodyTypography.letterSpacing['Desktop'] : "",
                        "Tablet": attributes.bodyTypography.letterSpacing['Tablet'] ? attributes.bodyTypography.letterSpacing['Tablet'] : "",
                        "Mobile": attributes.bodyTypography.letterSpacing['Mobile'] ? attributes.bodyTypography.letterSpacing['Mobile'] : "",
                        "unit": attributes.bodyTypography.letterSpacing['unit'] ? attributes.bodyTypography.letterSpacing['unit'] : "px"
                    },
                    "fontFamily": attributes.bodyTypography.fontFamily ? attributes.bodyTypography.fontFamily : "Default",
                    "lineHeight": {
                        "Desktop": attributes.bodyTypography.lineHeight['Desktop'] ? attributes.bodyTypography.lineHeight['Desktop'] : "",
                        "Tablet": attributes.bodyTypography.lineHeight['Tablet'] ? attributes.bodyTypography.lineHeight['Tablet'] : "",
                        "Mobile": attributes.bodyTypography.lineHeight['Mobile'] ? attributes.bodyTypography.lineHeight['Mobile'] : "",
                        "unit": attributes.bodyTypography.lineHeight['unit'] ? attributes.bodyTypography.lineHeight['unit'] : "px"
                    },
                    "textDecoration": attributes.bodyTypography.textDecoration ? attributes.bodyTypography.textDecoration : "",
                    "textTransform": attributes.bodyTypography.textTransform ? attributes.bodyTypography.textTransform : "",
                    "fontSize": {
                        "Desktop": attributes.bodyTypography.fontSize['Desktop'] ? attributes.bodyTypography.fontSize['Desktop'] : "",
                        "Tablet": attributes.bodyTypography.fontSize['Tablet'] ? attributes.bodyTypography.fontSize['Tablet'] : "",
                        "Mobile": attributes.bodyTypography.fontSize['Mobile'] ? attributes.bodyTypography.fontSize['Mobile'] : "",
                        "unit": attributes.bodyTypography.fontSize['unit'] ? attributes.bodyTypography.fontSize['unit'] : "px"
                    }
                },
                margin: {
                    "Desktop": {
                        "top": attributes.bodyMargin['Desktop'].top ? attributes.bodyMargin['Desktop'].top : 20,
                        "right": attributes.bodyMargin['Desktop'].right ? attributes.bodyMargin['Desktop'].right : "",
                        "bottom": attributes.bodyMargin['Desktop'].bottom ? attributes.bodyMargin['Desktop'].bottom : 20,
                        "left": attributes.bodyMargin['Desktop'].left ? attributes.bodyMargin['Desktop'].left : ""
                    },
                    "Tablet": {
                        "top": attributes.bodyMargin['Tablet'].top ? attributes.bodyMargin['Tablet'].top : 20,
                        "right": attributes.bodyMargin['Tablet'].right ? attributes.bodyMargin['Tablet'].right : "",
                        "bottom": attributes.bodyMargin['Tablet'].bottom ? attributes.bodyMargin['Tablet'].bottom : 20,
                        "left": attributes.bodyMargin['Tablet'].left ? attributes.bodyMargin['Tablet'].left : ""
                    },
                    "Mobile": {
                        "top": attributes.bodyMargin['Mobile'].top ? attributes.bodyMargin['Mobile'].top : 20,
                        "right": attributes.bodyMargin['Mobile'].right ? attributes.bodyMargin['Mobile'].right : "",
                        "bottom": attributes.bodyMargin['Mobile'].bottom ? attributes.bodyMargin['Mobile'].bottom : 20,
                        "left": attributes.bodyMargin['Mobile'].left ? attributes.bodyMargin['Mobile'].left : ""
                    },
                    "unit": attributes.bodyMargin.unit ? attributes.bodyMargin.unit : "px"
                },
                color: attributes.contentStyle[0].bodyColor ? attributes.contentStyle[0].bodyColor : ""
            },
        ],
        [
            "premium/author",
            {
                align: {
                    "Desktop": "center",
                    "Tablet": "center",
                    "Mobile": "center"
                }
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
