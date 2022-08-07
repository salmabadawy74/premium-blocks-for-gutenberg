const { InnerBlocks } = wp.editor;
const className = "premium-container";
import hexToRgba from 'hex-to-rgba'

const attributes = {
    stretchSection: {
        type: "boolean",
        default: false
    },
    innerWidthType: {
        type: "string",
        default: "boxed"
    },
    isUpdated: {
        type: "boolean",
        default: false
    },
    horAlign: {
        type: "string",
        default: "center"
    },
    height: {
        type: "string",
        default: "min"
    },
    innerWidth: {
        type: "number"
    },
    minHeight: {
        type: "number"
    },
    minHeightUnit: {
        type: "string"
    },
    vPos: {
        type: "string",
        default: "top"
    },
    color: {
        type: "string"
    },
    opacity: {
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
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderTop: {
        type: "number"
    },
    borderRight: {
        type: "number"
    },
    borderBottom: {
        type: "number"
    },
    borderLeft: {
        type: "number"
    },
    borderRadius: {
        type: "number"
    },
    borderColor: {
        type: "string"
    },
    marginTop: {
        type: "number"
    },
    marginBottom: {
        type: "number"
    },
    marginLeft: {
        type: "number"
    },
    marginRight: {
        type: "number"
    },
    marginUnit: {
        type: "string"
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
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    shadowPosition: {
        type: "string",
        default: ""
    },
    block_id: {
        type: "string"
    },
    hideDesktop: {
        type: "boolean",
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
const new_Attributes = {
    containerStyles: {
        type: "array",
        default: [
            {
                containerBack: '',
                opacity: 1,
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                borderType: "none",
                borderWidth: 1,
                borderRadius: '',
                borderColor: '',
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
                shadowPosition: '',
                marginUnit: 'px',
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
    }
}
const deprecated_Attributes = Object.assign(attributes, new_Attributes)

const new_Attributes_0_1 = {
    blockId: {
        type: "string"
    },
    padding: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
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
    },
    margin: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
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
    },
    boxShadow: {
        type: "object",
        default: {
            color: "undefined",
            blur: "10",
            horizontal: "0",
            vertical: "0",
            position: " ",
        },
    },
    border: {
        type: "object",
        default: {
            borderType: "none",
            borderColor: "",
            borderWidth: {
                Desktop: {
                    top: "",
                    right: "",
                    bottom: "",
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
            },
            borderRadius: {
                Desktop: {
                    top: "",
                    right: "",
                    bottom: "",
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
            },
        },
    },
    background: {
        type: "object",
        default: {
            backgroundType: "",
            backgroundColor: "",
            backgroundImageID: "",
            backgroundImageURL: "",
            backgroundPosition: "center center",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            fixed: false,
            gradientLocationOne: "0",
            gradientColorTwo: "",
            gradientLocationTwo: "100",
            gradientAngle: "180",
            gradientPosition: "center center",
            gradientType: "linear"
        },
    },
}
const deprecatedContent = [
    {
        attributes: Object.assign(deprecated_Attributes, new_Attributes_0_1),
        migrate: attributes => {
            let newAttributes = {
                blockId: attributes.block_id ? `premium-container-${attributes.block_id.split('-')[6]}` : '',
                padding: {
                    Desktop: {
                        top: attributes?.paddingTop,
                        right: attributes?.paddingRight,
                        bottom: attributes?.paddingBottom,
                        left: attributes?.paddingLeft,
                    },
                    Tablet: {
                        top: attributes?.paddingTTablet,
                        right: attributes?.paddingRTablet,
                        bottom: attributes?.paddingBTablet,
                        left: attributes?.paddingLTablet,
                    },
                    Mobile: {
                        top: attributes?.paddingTMobile,
                        right: attributes?.paddingRMobile,
                        bottom: attributes?.paddingBMobile,
                        left: attributes?.paddingLMobile,
                    },
                    unit: "px",

                },
                margin: {
                    Desktop: {
                        top: attributes?.marginTop,
                        right: attributes?.marginRight,
                        bottom: attributes.marginBottom,
                        left: attributes.marginLeft,
                    },
                    Tablet: {
                        top: attributes?.marginTTablet,
                        right: attributes?.marginRTablet,
                        bottom: attributes?.marginBTablet,
                        left: attributes?.marginLTablet,
                    },
                    Mobile: {
                        top: attributes?.marginTMobile,
                        right: attributes?.marginRMobile,
                        bottom: attributes?.marginBMobile,
                        left: attributes?.marginLMobile,

                    },
                    unit: "px",

                },
                boxShadow: {
                    color: attributes?.containerStyles[0].shadowColor,
                    blur: attributes?.containerStyles[0].shadowBlur,
                    horizontal: attributes?.containerStyles[0].shadowHorizontal,
                    vertical: attributes?.containerStyles[0].shadowVertical,
                    position: attributes?.containerStyles[0].shadowPosition,
                },
                border: {
                    borderType: attributes?.containerStyle[0].borderStyle,
                    borderColor: attributes?.containerStyles[0].borderColor,
                    borderWidth: {
                        Desktop: {
                            top: attributes?.borderTop,
                            right: attributes?.borderRight,
                            bottom: attributes?.borderBottom,
                            left: attributes?.borderLeft,
                        },
                        Tablet: {
                            top: '',
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
                    },
                    borderRadius: {
                        Desktop: {
                            top: attributes?.containerStyle[0].borderRadius,
                            right: attributes?.containerStyle[0].borderRadius,
                            bottom: attributes?.containerStyle[0].borderRadius,
                            left: attributes?.containerStyle[0].borderRadius,
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
                    },
                },
                background: {
                    backgroundType: attributes?.backgroundType,
                    backgroundColor: attributes?.containerStyles[0].containerBack,
                    backgroundImageID: attributes?.containerStyles[0].backgroundImageID,
                    backgroundImageURL: attributes?.containerStyles[0].backgroundImageURL,
                    backgroundPosition: attributes?.containerStyle[0].backgroundPosition,
                    backgroundRepeat: attributes?.containerStyles[0].backgroundRepeat,
                    backgroundSize: attributes?.containerStyles[0].backgroundSize,
                    fixed: attributes?.containerStyles[0].fixed,
                    gradientLocationOne: attributes?.containerStyles[0].gradientLocationOne,
                    gradientColorTwo: attributes?.containerStyles[0].gradientColorTwo,
                    gradientLocationTwo: attributes?.containerStyles[0].gradientLocationTwo,
                    gradientAngle: attributes?.containerStyles[0].gradientAngle,
                    gradientPosition: attributes?.containerStyles[0].gradientPosition,
                    gradientType: attributes?.containerStyles[0].gradientType
                },
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {

            const {
                stretchSection,
                innerWidthType,
                isUpdated,
                horAlign,
                height,
                innerWidth,
                minHeight,
                minHeightUnit,
                vPos,
                block_id,
                hideDesktop,
                hideTablet,
                hideMobile,
                containerStyles,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                backgroundType
            } = props.attributes;



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
                btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
            }

            return (
                <div
                    className={`${className} premium-container__stretch_${stretchSection} premium-container__${innerWidthType} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: horAlign,
                        minHeight:
                            "fit" === height ? "100vh" : minHeight + minHeightUnit,
                        backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                        borderStyle: containerStyles[0].borderType,
                        borderWidth: isUpdated
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : containerStyles[0].borderWidth + "px",
                        borderRadius: containerStyles[0].borderRadius + "px",
                        borderColor: containerStyles[0].borderColor,
                        backgroundImage: btnbg,
                        backgroundRepeat: containerStyles[0].backgroundRepeat,
                        backgroundPosition: containerStyles[0].backgroundPosition,
                        backgroundSize: containerStyles[0].backgroundSize,
                        backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                        boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`
                    }}
                >
                    <div
                        className={`premium-container__content_wrap premium-container__${vPos}`}
                        style={{
                            maxWidth:
                                "boxed" == innerWidthType && stretchSection
                                    ? innerWidth
                                        ? innerWidth + "px"
                                        : "1140px"
                                    : "100%",
                            minHeight:
                                "fit" === height ? "100vh" : minHeight + minHeightUnit,
                        }}
                    >
                        <div className={`premium-container__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        }
    },
    {
        attributes: deprecated_Attributes,
        save: (props) => {
            const {
                stretchSection,
                innerWidthType,
                isUpdated,
                horAlign,
                height,
                innerWidth,
                minHeight,
                minHeightUnit,
                vPos,
                block_id,
                hideDesktop,
                hideTablet,
                hideMobile,
                containerStyles,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                backgroundType
            } = props.attributes;



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
                btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
            }

            return (
                <div
                    className={`${className} premium-container__stretch_${stretchSection} premium-container__${innerWidthType} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: horAlign,
                        minHeight:
                            "fit" === height ? "100vh" : minHeight + minHeightUnit,
                        backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                        borderStyle: containerStyles[0].borderType,
                        borderWidth: isUpdated
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : containerStyles[0].borderWidth + "px",
                        borderRadius: containerStyles[0].borderRadius + "px",
                        borderColor: containerStyles[0].borderColor,
                        backgroundImage: btnbg,
                        backgroundRepeat: containerStyles[0].backgroundRepeat,
                        backgroundPosition: containerStyles[0].backgroundPosition,
                        backgroundSize: containerStyles[0].backgroundSize,
                        backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                        boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`
                    }}
                >
                    <div
                        className={`premium-container__content_wrap premium-container__${vPos}`}
                        style={{
                            maxWidth:
                                "boxed" == innerWidthType && stretchSection
                                    ? innerWidth
                                        ? innerWidth + "px"
                                        : "1140px"
                                    : "100%"
                        }}
                    >
                        <div className={`premium-container__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                containerStyles: [
                    {
                        containerBack: attributes.color,
                        opacity: attributes.opacity,
                        backgroundImageID: attributes.imageID,
                        backgroundImageURL: attributes.imageURL,
                        backgroundRepeat: attributes.backgroundRepeat,
                        backgroundPosition: attributes.backgroundPosition,
                        backgroundSize: attributes.backgroundSize,
                        fixed: attributes.fixed,
                        borderType: attributes.borderType,
                        borderWidth: attributes.borderWidth,
                        borderRadius: attributes.borderRadius,
                        borderColor: attributes.borderColor,
                        shadowColor: attributes.shadowColor,
                        shadowBlur: attributes.shadowBlur,
                        shadowHorizontal: attributes.shadowHorizontal,
                        shadowVertical: attributes.shadowVertical,
                        shadowPosition: attributes.shadowPosition,
                        marginUnit: attributes.marginUnit,
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
                marginTTablet: '',
                marginRTablet: '',
                marginBTablet: '',
                marginLTablet: '',
                marginTMobile: '',
                marginRMobile: '',
                marginBMobile: '',
                marginLMobile: '',
                paddingTTablet: '',
                paddingRTablet: '',
                paddingBTablet: '',
                paddingLTablet: '',
                paddingTMobile: '',
                paddingRMobile: '',
                paddingLMobile: '',
                paddingBMobile: ''
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const {
                block_id,
                isUpdated,
                stretchSection,
                horAlign,
                innerWidthType,
                innerWidth,
                height,
                vPos,
                minHeight,
                minHeightUnit,
                color,
                opacity,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderTop,
                borderRight,
                borderBottom,
                borderLeft,
                borderColor,
                borderRadius,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                marginUnit,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                paddingUnit,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;

            return (
                <div
                    className={`${className} premium-container__stretch_${stretchSection} premium-container__${innerWidthType} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: horAlign,
                        minHeight:
                            "fit" === height ? "100vh" : minHeight + minHeightUnit,
                        backgroundColor: color
                            ? hexToRgba(color, opacity)
                            : "transparent",
                        borderStyle: borderType,
                        borderWidth: isUpdated
                            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                            : borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        marginTop: marginTop + marginUnit,
                        marginBottom: marginBottom + marginUnit,
                        marginLeft: marginLeft + marginUnit,
                        marginRight: marginRight + marginUnit,
                        paddingTop: paddingTop + paddingUnit,
                        paddingBottom: paddingBottom + paddingUnit,
                        paddingLeft: paddingLeft + paddingUnit,
                        paddingRight: paddingRight + paddingUnit,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
                    }}
                >
                    <div
                        className={`premium-container__content_wrap premium-container__${vPos}`}
                        style={{
                            maxWidth:
                                "boxed" == innerWidthType && stretchSection
                                    ? innerWidth
                                        ? innerWidth + "px"
                                        : "1140px"
                                    : "100%"
                        }}
                    >
                        <div className={`premium-container__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        }
    },
    {
        attributes: attributes,

        save: (props) => {
            const {
                stretchSection,
                horAlign,
                innerWidthType,
                innerWidth,
                height,
                vPos,
                minHeight,
                color,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderColor,
                borderRadius,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                marginUnit,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                paddingUnit,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            return (
                <div
                    className={`${className} ${className}__stretch_${stretchSection} ${className}__${innerWidthType}`}
                    style={{
                        textAlign: horAlign,
                        minHeight: "fit" === height ? "100vh" : minHeight,
                        backgroundColor: color,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        marginTop: marginTop + marginUnit,
                        marginBottom: marginBottom + marginUnit,
                        marginLeft: marginLeft + marginUnit,
                        marginRight: marginRight + marginUnit,
                        paddingTop: paddingTop + paddingUnit,
                        paddingBottom: paddingBottom + paddingUnit,
                        paddingLeft: paddingLeft + paddingUnit,
                        paddingRight: paddingRight + paddingUnit,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div
                        className={`${className}__content_wrap ${className}__${vPos}`}
                        style={{
                            maxWidth:
                                "boxed" == innerWidthType && stretchSection
                                    ? innerWidth
                                        ? innerWidth + "px"
                                        : "1140px"
                                    : "100%",
                        }}
                    >
                        <div className={`${className}__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                marginUnit: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                stretchSection,
                horAlign,
                innerWidthType,
                innerWidth,
                height,
                vPos,
                minHeight,
                color,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderColor,
                borderRadius,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                paddingUnit,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            return (
                <div
                    className={`${className} ${className}__stretch_${stretchSection} ${className}__${innerWidthType}`}
                    style={{
                        textAlign: horAlign,
                        minHeight: "fit" === height ? "100vh" : minHeight,
                        backgroundColor: color,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        marginTop: marginTop + "px",
                        marginBottom: marginBottom + "px",
                        marginLeft: marginLeft + "px",
                        marginRight: marginRight + "px",
                        paddingTop: paddingTop + paddingUnit,
                        paddingBottom: paddingBottom + paddingUnit,
                        paddingLeft: paddingLeft + paddingUnit,
                        paddingRight: paddingRight + paddingUnit,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div
                        className={`${className}__content_wrap ${className}__${vPos}`}
                        style={{
                            maxWidth:
                                "boxed" == innerWidthType && stretchSection
                                    ? innerWidth
                                        ? innerWidth + "px"
                                        : "1140px"
                                    : "100%",
                        }}
                    >
                        <div className={`${className}__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                paddingUnit: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                stretchSection,
                horAlign,
                innerWidthType,
                innerWidth,
                height,
                vPos,
                minHeight,
                color,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderColor,
                borderRadius,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            return (
                <div
                    className={`${className} ${className}__stretch_${stretchSection} ${className}__${innerWidthType}`}
                    style={{
                        textAlign: horAlign,
                        minHeight: "fit" === height ? "100vh" : minHeight,
                        backgroundColor: color,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        marginTop: marginTop + "px",
                        marginBottom: marginBottom + "px",
                        paddingTop: paddingTop + "px",
                        marginLeft: marginLeft + "px",
                        marginRight: marginRight + "px",
                        paddingBottom: paddingBottom + "px",
                        paddingLeft: paddingLeft + "px",
                        paddingRight: paddingRight + "px",
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div
                        className={`${className}__content_wrap ${className}__${vPos}`}
                        style={{
                            maxWidth:
                                "boxed" == innerWidthType && stretchSection
                                    ? innerWidth
                                        ? innerWidth + "px"
                                        : "1140px"
                                    : "100%",
                        }}
                    >
                        <div className={`${className}__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        save: (props) => {
            const {
                horAlign,
                innerWidth,
                height,
                vPos,
                minHeight,
                color,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderColor,
                borderRadius,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            return (
                <div
                    className={className}
                    style={{
                        textAlign: horAlign,
                        height: "fit" === height ? "100vh" : minHeight,
                        backgroundColor: color,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        marginTop: marginTop + "px",
                        marginBottom: marginBottom + "px",
                        paddingTop: paddingTop + "px",
                        marginLeft: marginLeft + "px",
                        marginRight: marginRight + "px",
                        paddingBottom: paddingBottom + "px",
                        paddingLeft: paddingLeft + "px",
                        paddingRight: paddingRight + "px",
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div
                        className={`${className}__content_wrap ${className}__${vPos}`}
                        style={{ width: innerWidth ? innerWidth + "%" : "100%" }}
                    >
                        <div className={`${className}__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        },
    },
];

export default deprecatedContent;