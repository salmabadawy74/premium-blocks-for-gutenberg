import DefaultImage from "../../components/default-image";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import hexToRgba from 'hex-to-rgba'

const className = "premium-testimonial";

const { RichText } = wp.editor;

const attributes = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "center"
    },
    authorImgId: {
        type: "string"
    },
    authorImgUrl: {
        type: "string"
    },
    imgRadius: {
        type: "string",
        default: "50%"
    },
    imgSize: {
        type: "number"
    },
    imgBorder: {
        type: "number",
        default: "1"
    },
    imgBorderColor: {
        type: "string"
    },
    author: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author",
        default: "John Doe"
    },
    authorTag: {
        type: "string",
        default: "H3"
    },
    authorColor: {
        type: "string"
    },
    authorSize: {
        type: "number"
    },
    authorSizeUnit: {
        type: 'string',
        default: 'px'
    },
    authorSizeMobile: {
        type: "number"
    },
    authorSizeTablet: {
        type: "number"
    },
    authorLetter: {
        type: "number"
    },
    authorStyle: {
        type: "string"
    },
    authorUpper: {
        type: "boolean"
    },
    authorWeight: {
        type: "number",
        default: 500
    },
    authorComTag: {
        type: "string",
        default: "H4"
    },
    text: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__text"
    },
    authorCom: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author_comp",
        default: "Leap13"
    },
    authorComColor: {
        type: "string"
    },
    authorComSize: {
        type: "number"
    },
    authorComSizeUnit: {
        type: "string",
        default: 'px'
    },
    authorComSizeMobile: {
        type: 'number'
    },
    authorComSizeTablet: {
        type: 'number'
    },
    urlCheck: {
        type: "boolean",
        default: false
    },
    urlText: {
        type: "string"
    },
    urlTarget: {
        type: "boolean",
        default: false
    },
    quotSize: {
        type: "number"
    },
    quotColor: {
        type: "string"
    },
    quotOpacity: {
        type: "number"
    },
    bodyColor: {
        type: "string"
    },
    bodySize: {
        type: "number"
    },
    bodySizeUnit: {
        type: "string",
        default: 'px'
    },
    bodySizeMobile: {
        type: "number"
    },
    bodySizeTablet: {
        type: "string"
    },
    bodyLine: {
        type: "number"
    },
    bodyTop: {
        type: "number"
    },
    bodyBottom: {
        type: "number"
    },
    dashColor: {
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number"
    },
    shadowHorizontal: {
        type: "number"
    },
    shadowVertical: {
        type: "number"
    },
    shadowPosition: {
        type: "string"
    },
    backColor: {
        type: "string"
    },
    backOpacity: {
        type: "number",
        default: "1"
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    backgroundPosition: {
        type: "string",
        default: "top center"
    },
    backgroundSize: {
        type: "string",
        default: "auto"
    },
    fixed: {
        type: "boolean",
        default: false
    },
    paddingTop: {
        type: "number"
    },
    paddingRight: {
        type: "number"
    },
    paddingBottom: {
        type: "number"
    },
    paddingLeft: {
        type: "number"
    },
    paddingUnit: {
        type: "string",
        default: "px"
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    }
}

const v7Attributes = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "center"
    },
    authorImgId: {
        type: "string"
    },
    authorImgUrl: {
        type: "string"
    },
    imgRadius: {
        type: "string",
        default: "50%"
    },
    imgSize: {
        type: "number"
    },
    imgBorder: {
        type: "number",
        default: "1"
    },
    imgBorderColor: {
        type: "string"
    },
    author: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author",
        default: "John Doe"
    },
    authorStyles: {
        type: 'array',
        default: [
            {
                authorTag: "H3",
                authorColor: '',
                authorSize: '',
                authorSizeUnit: 'px',
                authorSizeMobile: '',
                authorSizeTablet: '',
                authorLetter: '',
                authorStyle: '',
                authorUpper: false,
                authorWeight: 500,
                authorComTag: "H4",
            }
        ]
    },

    paddingTop: {
        type: "number"
    },
    paddingRight: {
        type: "number"
    },
    paddingBottom: {
        type: "number"
    },
    paddingLeft: {
        type: "number"
    },
    text: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__text"
    },
    authorCom: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author_comp",
        default: "Leap13"
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    },
    contentStyle: {
        type: "array",
        default: [
            {
                bodySizeUnit: 'px',
                bodySize: '',
                bodySizeMobile: '',
                bodySizeTablet: '',
                bodyColor: '',
                bodyLine: '',
                bodyTop: '',
                bodyBottom: '',
            }
        ]

    },
    companyStyles: {
        type: "array",
        default: [
            {
                authorComTag: 'H4',
                authorComSizeUnit: 'px',
                authorComColor: '',
                authorComSize: '',
                authorComSizeMobile: '',
                authorComSizeTablet: '',
                dashColor: '',
                urlCheck: false,
                urlText: '',
                urlTarget: false,

            }
        ]
    },
    quoteStyles: {
        type: "array",
        default: [
            {
                quotSize: 2,
                quotColor: '',
                quotOpacity: 50,

            }
        ]
    },
    containerStyles: {
        type: "array",
        default: [
            {
                backOpacity: 1,
                containerBack: '',
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: '',
                shadowPosition: '',
                paddingUnit: 'px',
                gradientColorOne: '',
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center'
            }
        ]
    },
    backgroundType: {
        type: "string",
        default: ""
    },
    paddingTTablet: {
        type: "number"
    },
    paddingRTablet: {
        type: "number"
    },
    paddingBTablet: {
        type: "number"
    },
    paddingLTablet: {
        type: "number"
    },
    paddingTMobile: {
        type: "number"
    },
    paddingRMobile: {
        type: "number"
    },
    paddingBMobile: {
        type: "number"
    },
    paddingLMobile: {
        type: "number"
    },
};

const deprecatedContent = [
    {
        attributes: attributes,
        isEligible() {
            return true;
        },
        migrate: attributes => {
            let newAttributes = {
                blockId: attributes.block_id ? `premium-testimonials-${attributes.block_id}` : '',
                align: {
                    Desktop: attributes?.align,
                    Tablet: attributes?.align,
                    Mobile: attributes?.align
                },
                imgBorder: {
                    "borderType": 'solid',
                    "borderColor": attributes?.imgBorderColor || '',
                    "borderWidth": {
                        Desktop: {
                            top: attributes?.imgBorder,
                            right: attributes?.imgBorder,
                            bottom: attributes?.imgBorder,
                            left: attributes?.imgBorder
                        },
                        Tablet: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Mobile: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        }
                    },
                    "borderRadius": {
                        Desktop: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Tablet: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        },
                        Mobile: {
                            top: '',
                            right: '',
                            bottom: '',
                            left: ''
                        }
                    }
                },
                padding: {
                    "Desktop": {
                        top: attributes?.paddingTop || '',
                        right: attributes?.paddingRight || '',
                        bottom: attributes?.paddingBottom || '',
                        left: attributes?.paddingLeft || ''
                    },
                    "Tablet": {
                        top: attributes?.paddingTTablet || '',
                        right: attributes?.paddingRTablet || '',
                        bottom: attributes?.paddingBTablet || '',
                        left: attributes?.paddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes?.paddingTMobile || '',
                        right: attributes?.paddingRMobile || '',
                        bottom: attributes?.paddingBMobile || '',
                        left: attributes?.paddingLMobile || ''
                    },
                    "unit": attributes?.containerStyles?.[0]?.paddingUnit || "px"
                },
                bodySize: {
                    "Desktop": attributes?.contentStyle[0].bodySize || '',
                    'Tablet': attributes?.contentStyle[0].bodySizeTablet || '',
                    'Mobile': attributes?.contentStyle[0].bodySizeMobile || '',
                    'unit': attributes?.contentStyle[0].bodySizeUnit || 'px',
                },
                authorComSize: {
                    "Desktop": attributes?.companyStyles[0].authorComSize || '',
                    'Tablet': attributes?.companyStyles[0].authorComSizeTablet || '',
                    'Mobile': attributes?.companyStyles[0].authorComSizeMobile || '',
                    'unit': attributes?.companyStyles[0].authorComSizeUnit || 'px',
                },
                boxShadow: {
                    'color': attributes?.containerStyles[0].shadowColor || '',
                    'blur': attributes?.containerStyles[0].shadowBlur || '',
                    'horizontal': attributes?.containerStyles[0].shadowHorizontal || '',
                    'vertical': attributes?.containerStyles[0].shadowVertical || '',
                    'position': attributes?.containerStyles[0].shadowPosition || ''
                },
                background: {
                    'backgroundType': attributes?.backgroundType || '',
                    'backgroundColor': attributes?.containerStyles[0].containerBack || '',
                    'backgroundImageID': attributes?.containerStyles[0].backgroundImageID || '',
                    'backgroundImageURL': attributes?.containerStyles[0].backgroundImageURL || '',
                    'backgroundPosition': attributes?.containerStyles[0].backgroundPosition || '',
                    'backgroundRepeat': attributes?.containerStyles[0].backgroundRepeat || '',
                    'backgroundSize': attributes?.containerStyles[0].backgroundSize || '',
                    'fixed': attributes?.containerStyles[0].fixed || false,
                    'gradientLocationOne': attributes?.containerStyles[0].gradientLocationOne || '',
                    'gradientColorTwo': attributes?.containerStyles[0].gradientColorTwo || '',
                    'gradientLocationTwo': attributes?.containerStyles[0].gradientLocationTwo || '',
                    'gradientAngle': attributes?.containerStyles[0].gradientAngle || '',
                    'gradientPosition': attributes?.containerStyles[0].gradientPosition || '',
                    'gradientType': attributes?.containerStyles[0].gradientType || ''
                },
                authorTypography: {
                    fontWeight: attributes?.authorStyles[0].authorWeight || "400",
                    fontStyle: attributes?.authorStyles[0].authorStyle || '',
                    letterSpacing: {
                        Desktop: attributes?.authorStyles[0].authorLetter || '',
                        Tablet: attributes?.authorStyles[0].authorLetter || '',
                        Mobile: attributes?.authorStyles[0].authorLetter || '',
                        unit: "px",
                    },
                    fontFamily: "Default",
                    lineHeight: {
                        Desktop: attributes?.backgroundType || '',
                        Tablet: attributes?.backgroundType || '',
                        Mobile: attributes?.backgroundType || '',
                        unit: attributes?.backgroundType || "px",
                    },
                    textDecoration: '',
                    textTransform: attributes?.authorStyles[0].authorUpper || '',
                    fontSize: {
                        Desktop: attributes?.authorStyles[0].authorSize || '',
                        Tablet: attributes?.authorStyles[0].authorSizeTablet || '',
                        Mobile: attributes?.authorStyles[0].authorSizeMobile || '',
                        unit: attributes?.authorStyles[0].authorSizeUnit || "px",
                    },
                },
                bodyMargin: {
                    Desktop: {
                        top: attributes?.contentStyle[0].bodyTop || "",
                        right: "",
                        bottom: attributes?.contentStyle[0].bodyBottom || "",
                        left: "",
                    },
                    Tablet: {
                        top: "",
                        right: "",
                        bottom: "",
                        left: "",
                    },
                    Mobile: {
                        top: "",
                        right: "",
                        bottom: "",
                        left: "",
                    },
                    unit: "px",
                },
            };
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { className } = props;

            const {
                block_id,
                align,
                authorImgId,
                authorImgUrl,
                imgRadius,
                imgSize,
                imgBorder,
                imgBorderColor,
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
                containerStyles,
                backgroundType
            } = props.attributes;

            const mainClasses = classnames(className, 'premium-testimonial');

            let btnGrad, btnGrad2, btnbg;
            if (undefined !== backgroundType && 'gradient' === backgroundType) {
                btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
                btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
                if ('radial' === containerStyles[0].gradientType) {
                    btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
                } else if ('radial' !== containerStyles[0].gradientType) {
                    btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
                }
            } else {
                btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : 'none'
            }

            return (
                <div
                    id={`premium-testimonial-${block_id}`}
                    className={`${mainClasses}__wrap premium-testimonial-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`,
                        backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                        backgroundImage: btnbg,
                        backgroundRepeat: containerStyles[0].backgroundRepeat,
                        backgroundPosition: containerStyles[0].backgroundPosition,
                        backgroundSize: containerStyles[0].backgroundSize,
                        backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
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
                                textAlign: align
                            }}
                        >
                            <div className={`premium-testimonial__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`premium-testimonial__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px"
                                        }}
                                    />
                                )}
                                {!authorImgUrl && <DefaultImage className={className} />}
                            </div>
                            <div className={`premium-testimonial__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`premium-testimonial__text`}
                                        value={text}
                                        style={{
                                            color: contentStyle[0].bodyColor,
                                            lineHeight: contentStyle[0].bodyLine + "px",
                                            marginTop: contentStyle[0].bodyTop + "px",
                                            marginBottom: contentStyle[0].bodyBottom + "px"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`premium-testimonial__info`}
                                style={{ justifyContent: align }}
                            >
                                <RichText.Content
                                    tagName={authorStyles[0].authorTag.toLowerCase()}
                                    className={`premium-testimonial__author`}
                                    value={author}
                                    style={{
                                        color: authorStyles[0].authorColor,
                                        letterSpacing: authorStyles[0].authorLetter + "px",
                                        textTransform: authorStyles[0].authorUpper ? "uppercase" : "none",
                                        fontStyle: authorStyles[0].authorStyle,
                                        fontWeight: authorStyles[0].authorWeight
                                    }}
                                />
                                <span
                                    className={`premium-testimonial__sep`}
                                    style={{
                                        color: companyStyles[0].dashColor
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`premium-testimonial__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorStyles[0].authorComTag.toLowerCase()}
                                        className={`premium-testimonial__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: companyStyles[0].authorComColor,
                                        }}
                                    />
                                    {companyStyles[0].urlCheck && (
                                        <a
                                            rel="noopener noreferrer"
                                            href={companyStyles[0].urlText}
                                            target={companyStyles[0].urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`premium-testimonial__lower`}>
                            <PremiumLowerQuote
                                size={quoteStyles[0].quotSize}
                                color={quoteStyles[0].quotColor}
                                opacity={quoteStyles[0].quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                authorStyles: [
                    {
                        authorTag: attributes.authorTag,
                        authorColor: attributes.authorColor,
                        authorSize: attributes.authorSize,
                        authorSizeUnit: attributes.authorSizeUnit,
                        authorSizeMobile: attributes.authorSizeMobile,
                        authorSizeTablet: attributes.authorSizeTablet,
                        authorLetter: attributes.authorLetter,
                        authorStyle: attributes.authorStyle,
                        authorUpper: attributes.authorUpper,
                        authorWeight: attributes.authorWeight,
                        authorComTag: attributes.authorComTag,
                    }
                ],
                contentStyle: [
                    {
                        bodySizeUnit: attributes.bodySizeUnit,
                        bodySize: attributes.bodySize,
                        bodySizeMobile: attributes.bodySizeMobile,
                        bodySizeTablet: attributes.bodySizeTablet,
                        bodyColor: attributes.bodyColor,
                        bodyLine: attributes.bodyLine,
                        bodyTop: attributes.bodyTop,
                        bodyBottom: attributes.bodyBottom,
                    }
                ],
                companyStyles: [
                    {
                        authorComTag: attributes.authorComTag,
                        authorComSizeUnit: attributes.authorComSizeUnit,
                        authorComColor: attributes.authorComColor,
                        authorComSize: attributes.authorComSize,
                        authorComSizeMobile: attributes.authorComSizeMobile,
                        authorComSizeTablet: attributes.authorComSizeTablet,
                        dashColor: attributes.dashColor,
                        urlCheck: attributes.urlCheck,
                        urlText: attributes.urlText,
                        urlTarget: attributes.urlTarget,
                    }
                ],
                quoteStyles: [
                    {
                        quotSize: attributes.quotSize,
                        quotColor: attributes.quotColor,
                        quotOpacity: attributes.quotOpacity,

                    }
                ],
                containerStyles: [
                    {
                        backOpacity: attributes.backOpacity,
                        containerBack: attributes.backColor,
                        backgroundImageID: attributes.imageID,
                        backgroundImageURL: attributes.imageURL,
                        backgroundRepeat: attributes.backgroundRepeat,
                        backgroundPosition: attributes.backgroundPosition,
                        backgroundSize: attributes.backgroundSize,
                        fixed: attributes.fixed,
                        shadowColor: attributes.shadowColor,
                        shadowBlur: attributes.shadowBlur,
                        shadowHorizontal: attributes.shadowHorizontal,
                        shadowVertical: attributes.shadowVertical,
                        shadowPosition: attributes.shadowPosition,
                        paddingUnit: attributes.paddingUnit,
                        gradientColorOne: '',
                        gradientLocationOne: '0',
                        gradientColorTwo: '',
                        gradientLocationTwo: '100',
                        gradientType: 'linear',
                        gradientAngle: '180',
                        gradientPosition: 'center center'
                    }
                ],
                backgroundType: 'solid',
                paddingTTablet: '',
                paddingRTablet: '',
                paddingBTablet: '',
                paddingLTablet: '',
                paddingTMobile: '',
                paddingRMobile: '',
                paddingBMobile: '',
                paddingLMobile: '',
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const {
                block_id,
                align,
                authorImgUrl,
                imgRadius,
                imgBorder,
                imgBorderColor,
                imgSize,
                text,
                authorTag,
                authorColor,
                authorLetter,
                authorStyle,
                authorUpper,
                authorWeight,
                author,
                authorComTag,
                authorComColor,
                authorCom,
                quotSize,
                quotColor,
                quotOpacity,
                bodyColor,
                bodyLine,
                bodyTop,
                bodyBottom,
                dashColor,
                urlCheck,
                urlText,
                urlTarget,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                backColor,
                backOpacity,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                paddingUnit,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;

            return (
                <div
                    id={`premium-testimonial-${block_id}`}
                    className={`${className}__wrap premium-testimonial-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor
                            ? hexToRgba(backColor, backOpacity)
                            : "transparent",
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        paddingTop: paddingTop + paddingUnit,
                        paddingBottom: paddingBottom + paddingUnit,
                        paddingLeft: paddingLeft + paddingUnit,
                        paddingRight: paddingRight + paddingUnit
                    }}
                >
                    <div className={`premium-testimonial__container`}>
                        <span className={`premium-testimonial__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`premium-testimonial__content`}
                            style={{
                                textAlign: align
                            }}
                        >
                            <div className={`premium-testimonial__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`premium-testimonial__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px"
                                        }}
                                    />
                                )}
                                {!authorImgUrl && <DefaultImage className={className} />}
                            </div>
                            <div className={`premium-testimonial__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`premium-testimonial__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`premium-testimonial__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`premium-testimonial__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        letterSpacing: authorLetter + "px",
                                        textTransform: authorUpper ? "uppercase" : "none",
                                        fontStyle: authorStyle,
                                        fontWeight: authorWeight
                                    }}
                                />
                                <span
                                    className={`premium-testimonial__sep`}
                                    style={{
                                        color: dashColor
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`premium-testimonial__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`premium-testimonial__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                        }}
                                    />
                                    {urlCheck && (
                                        <a
                                            rel="noopener noreferrer"
                                            href={urlText}
                                            target={urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`premium-testimonial__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                classMigrate: false,
                block_id: '',
                bodySizeUnit: 'px',
                bodySizeTablet: '',
                bodySizeMobile: '',
                authorSizeUnit: 'px',
                authorComSizeTablet: '',
                authorSizeTablet: '',
                authorSizeMobile: '',
                authorComSizeMobile: '',
                authorComSizeUnit: 'px',
                backOpacity: "",
            }
            return Object.assign(attributes, newAttributes);
        },
        save: props => {
            const {
                align,
                authorImgUrl,
                imgRadius,
                imgBorder,
                imgBorderColor,
                imgSize,
                text,
                authorTag,
                authorColor,
                authorSize,
                authorLetter,
                authorStyle,
                authorUpper,
                authorWeight,
                author,
                authorComTag,
                authorComColor,
                authorComSize,
                authorCom,
                quotSize,
                quotColor,
                quotOpacity,
                bodyColor,
                bodySize,
                bodyLine,
                bodyTop,
                bodyBottom,
                dashColor,
                urlCheck,
                urlText,
                urlTarget,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                paddingUnit,
            } = props.attributes;

            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        paddingTop: paddingTop + paddingUnit,
                        paddingBottom: paddingBottom + paddingUnit,
                        paddingLeft: paddingLeft + paddingUnit,
                        paddingRight: paddingRight + paddingUnit,
                    }}
                >
                    <div className={`premium-testimonial__container`}>
                        <span className={`premium-testimonial__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`premium-testimonial__content`}
                            style={{
                                textAlign: align,
                            }}
                        >
                            <div className={`premium-testimonial__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`premium-testimonial__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`premium-testimonial__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`premium-testimonial__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`premium-testimonial__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`premium-testimonial__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        fontSize: authorSize + "px",
                                        letterSpacing: authorLetter + "px",
                                        textTransform: authorUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: authorStyle,
                                        fontWeight: authorWeight,
                                    }}
                                />
                                <span
                                    className={`premium-testimonial__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div
                                    className={`premium-testimonial__link_wrap`}
                                >
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`premium-testimonial__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
                                        }}
                                    />
                                    {urlCheck && (
                                        <a
                                            rel="noopener noreferrer"
                                            href={urlText}
                                            target={urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`premium-testimonial__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                paddingTop: "",
                paddingRight: "",
                paddingBottom: "",
                paddingLeft: "",
                paddingUnit: "px",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                align,
                authorImgUrl,
                imgRadius,
                imgBorder,
                imgBorderColor,
                imgSize,
                text,
                authorTag,
                authorColor,
                authorSize,
                authorLetter,
                authorStyle,
                authorUpper,
                authorWeight,
                author,
                authorComTag,
                authorComColor,
                authorComSize,
                authorCom,
                quotSize,
                quotColor,
                quotOpacity,
                bodyColor,
                bodySize,
                bodyLine,
                bodyTop,
                bodyBottom,
                dashColor,
                urlCheck,
                urlText,
                urlTarget,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                backColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
            } = props.attributes;

            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundColor: backColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    <div className={`${className}__container`}>
                        <span className={`${className}__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`${className}__content`}
                            style={{
                                textAlign: align,
                            }}
                        >
                            <div className={`${className}__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`${className}__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`${className}__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`${className}__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${className}__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`${className}__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        fontSize: authorSize + "px",
                                        letterSpacing: authorLetter + "px",
                                        textTransform: authorUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: authorStyle,
                                        fontWeight: authorWeight,
                                    }}
                                />
                                <span
                                    className={`${className}__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`${className}__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`${className}__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
                                        }}
                                    />
                                    {urlCheck && (
                                        <a
                                            rel="noopener noreferrer"
                                            href={urlText}
                                            target={urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`${className}__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                backColor: "",
                imageID: "",
                imageURL: "",
                fixed: false,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "auto",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                align,
                authorImgUrl,
                imgRadius,
                imgBorder,
                imgBorderColor,
                imgSize,
                text,
                authorTag,
                authorColor,
                authorSize,
                authorLetter,
                authorStyle,
                authorUpper,
                authorWeight,
                author,
                authorComTag,
                authorComColor,
                authorComSize,
                authorCom,
                quotSize,
                quotColor,
                quotOpacity,
                bodyColor,
                bodySize,
                bodyLine,
                bodyTop,
                bodyBottom,
                dashColor,
                urlCheck,
                urlText,
                urlTarget,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;

            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div className={`${className}__container`}>
                        <span className={`${className}__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`${className}__content`}
                            style={{
                                textAlign: align,
                            }}
                        >
                            <div className={`${className}__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`${className}__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`${className}__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`${className}__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${className}__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`${className}__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        fontSize: authorSize + "px",
                                        letterSpacing: authorLetter + "px",
                                        textTransform: authorUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: authorStyle,
                                        fontWeight: authorWeight,
                                    }}
                                />
                                <span
                                    className={`${className}__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`${className}__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`${className}__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
                                        }}
                                    />
                                    {urlCheck && (
                                        <a
                                            href={urlText}
                                            target={urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`${className}__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                shadowColor: "",
                shadowBlur: "",
                shadowHorizontal: "",
                shadowVertical: "",
                shadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                align,
                authorImgUrl,
                imgRadius,
                imgBorder,
                imgBorderColor,
                imgSize,
                text,
                authorTag,
                authorColor,
                authorSize,
                authorLetter,
                authorStyle,
                authorUpper,
                authorWeight,
                author,
                authorComTag,
                authorComColor,
                authorComSize,
                authorCom,
                quotSize,
                quotColor,
                quotOpacity,
                bodyColor,
                bodySize,
                bodyLine,
                bodyTop,
                bodyBottom,
                dashColor,
                urlCheck,
                urlText,
                urlTarget,
            } = props.attributes;

            return (
                <div className={`${className}__wrap`}>
                    <div className={`${className}__container`}>
                        <span className={`${className}__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`${className}__content`}
                            style={{
                                textAlign: align,
                            }}
                        >
                            <div className={`${className}__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`${className}__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`${className}__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`${className}__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${className}__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`${className}__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        fontSize: authorSize + "px",
                                        letterSpacing: authorLetter + "px",
                                        textTransform: authorUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: authorStyle,
                                        fontWeight: authorWeight,
                                    }}
                                />
                                <span
                                    className={`${className}__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`${className}__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`${className}__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
                                        }}
                                    />
                                    {urlCheck && (
                                        <a
                                            href={urlText}
                                            target={urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`${className}__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        save: (props) => {
            const {
                align,
                authorImgUrl,
                imgRadius,
                imgBorder,
                imgBorderColor,
                imgSize,
                text,
                authorTag,
                authorColor,
                authorSize,
                author,
                authorComTag,
                authorComColor,
                authorComSize,
                authorCom,
                quotSize,
                quotColor,
                quotOpacity,
                bodyColor,
                bodySize,
                bodyLine,
                bodyTop,
                bodyBottom,
                dashColor,
                urlCheck,
                urlText,
                urlTarget,
            } = props.attributes;

            return (
                <div className={`${className}__wrap`}>
                    <div className={`${className}__container`}>
                        <span className={`${className}__upper`}>
                            <PremiumUpperQuote
                                size={quotSize}
                                color={quotColor}
                                opacity={quotOpacity}
                            />
                        </span>
                        <div
                            className={`${className}__content`}
                            style={{
                                textAlign: align,
                            }}
                        >
                            <div className={`${className}__img_wrap`}>
                                {authorImgUrl && (
                                    <img
                                        className={`${className}__img`}
                                        src={`${authorImgUrl}`}
                                        alt="Author"
                                        style={{
                                            borderWidth: imgBorder + "px",
                                            borderRadius: imgRadius,
                                            borderColor: imgBorderColor,
                                            width: imgSize + "px",
                                            height: imgSize + "px",
                                        }}
                                    />
                                )}
                                {!authorImgUrl && (
                                    <DefaultImage className={className} />
                                )}
                            </div>
                            <div className={`${className}__text_wrap`}>
                                <div>
                                    <RichText.Content
                                        tagName="p"
                                        className={`${className}__text`}
                                        value={text}
                                        style={{
                                            color: bodyColor,
                                            fontSize: bodySize + "px",
                                            lineHeight: bodyLine + "px",
                                            marginTop: bodyTop + "px",
                                            marginBottom: bodyBottom + "px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${className}__info`}>
                                <RichText.Content
                                    tagName={authorTag.toLowerCase()}
                                    className={`${className}__author`}
                                    value={author}
                                    style={{
                                        color: authorColor,
                                        fontSize: authorSize + "px",
                                    }}
                                />
                                <span
                                    className={`${className}__sep`}
                                    style={{
                                        color: dashColor,
                                    }}
                                >
                                    &nbsp;-&nbsp;
                                </span>
                                <div className={`${className}__link_wrap`}>
                                    <RichText.Content
                                        tagName={authorComTag.toLowerCase()}
                                        className={`${className}__author_comp`}
                                        value={authorCom}
                                        style={{
                                            color: authorComColor,
                                            fontSize: authorComSize + "px",
                                        }}
                                    />
                                    {urlCheck && (
                                        <a
                                            href={urlText}
                                            target={urlTarget ? "_blank" : ""}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <span className={`${className}__lower`}>
                            <PremiumLowerQuote
                                color={quotColor}
                                size={quotSize}
                                opacity={quotOpacity}
                            />
                        </span>
                    </div>
                </div>
            );
        },
    },
];

export default deprecatedContent;