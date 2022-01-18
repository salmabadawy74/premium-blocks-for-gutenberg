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

const deprecatedContent = [
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
                backgroundType: 'solid'
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