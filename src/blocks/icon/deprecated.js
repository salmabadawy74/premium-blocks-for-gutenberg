const className = "premium-icon";
const { __ } = wp.i18n;
import hexToRgba from 'hex-to-rgba'


const attributes = {
    iconBorder: {
        type: "boolean",
        default: false,
    },
    wrapBorder: {
        type: "boolean",
        default: false,
    },
    iconType: {
        type: "string",
        default: "dash"
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site"
    },
    align: {
        type: "string",
        default: "center"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    iconSize: {
        type: "number"
    },
    iconSizeUnit: {
        type: "string",
        default: "px"
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4"
    },
    iconBack: {
        type: "string"
    },
    iconOpacity: {
        type: "number",
        default: "1"
    },
    padding: {
        type: "string",
        default: "up"
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
    paddingT: {
        type: "number"
    },
    paddingR: {
        type: "number"
    },
    paddingB: {
        type: "number"
    },
    paddingL: {
        type: "number"
    },
    paddingU: {
        type: "string",
        default: "px"
    },
    margin: {
        type: "string",
        default: "up"
    },
    marginT: {
        type: "number"
    },
    marginR: {
        type: "number"
    },
    marginB: {
        type: "number"
    },
    marginL: {
        type: "number"
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    iconBorderTop: {
        type: "number",
        default: 1
    },
    iconBorderRight: {
        type: "number",
        default: 1
    },
    iconBorderBottom: {
        type: "number",
        default: 1
    },
    iconBorderLeft: {
        type: "number",
        default: 1
    },
    borderRadius: {
        type: "number",
        default: 100
    },
    borderColor: {
        type: "string"
    },
    backgroundColor: {
        type: "string"
    },
    backgroundOpacity: {
        type: "number",
        default: "1"
    },
    background: {
        type: "string"
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
    wrapBorderType: {
        type: "string",
        default: "none"
    },
    wrapBorderWidth: {
        type: "number",
        default: "1"
    },
    wrapBorderTop: {
        type: "number",
        default: 1
    },
    wrapBorderRight: {
        type: "number",
        default: 1
    },
    wrapBorderBottom: {
        type: "number",
        default: 1
    },
    wrapBorderLeft: {
        type: "number",
        default: 1
    },
    wrapBorderRadius: {
        type: "number"
    },
    wrapBorderColor: {
        type: "string"
    },
    wrapPadding: {
        type: "string",
        default: "up"
    },
    wrapShadowColor: {
        type: "string"
    },
    wrapShadowBlur: {
        type: "number",
        default: "0"
    },
    wrapShadowHorizontal: {
        type: "number",
        default: "0"
    },
    wrapShadowVertical: {
        type: "number",
        default: "0"
    },
    wrapShadowPosition: {
        type: "string",
        default: ""
    },
    wrapPaddingT: {
        type: "number"
    },
    wrapPaddingR: {
        type: "number"
    },
    wrapPaddingB: {
        type: "number"
    },
    wrapPaddingL: {
        type: "number"
    },
    wrapMargin: {
        type: "string",
        default: "up"
    },
    wrapMarginT: {
        type: "number"
    },
    wrapMarginR: {
        type: "number"
    },
    wrapMarginB: {
        type: "number"
    },
    wrapMarginL: {
        type: "number"
    },
    urlCheck: {
        type: "boolean"
    },
    link: {
        type: "string"
    },
    target: {
        type: "boolean"
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


const deprecatedContent = [
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                iconStyles: [
                    {
                        iconSizeUnit: attributes.iconSizeUnit,
                        iconSize: attributes.iconSize,
                        iconColor: attributes.iconColor,
                        iconBack: attributes.iconBack,
                        iconOpacity: attributes.iconOpacity,
                        borderType: attributes.borderType,
                        borderWidth: attributes.borderWidth,
                        iconBorderTop: attributes.iconBorderTop,
                        iconBorderRight: attributes.iconBorderRight,
                        iconBorderBottom: attributes.iconBorderBottom,
                        iconBorderLeft: attributes.iconBorderLeft,
                        borderColor: attributes.borderColor,
                        borderRadius: attributes.borderRadius,
                        shadowColor: attributes.shadowColor,
                        shadowBlur: attributes.shadowBlur,
                        shadowHorizontal: attributes.shadowHorizontal,
                        shadowVertical: attributes.shadowVertical,
                    }
                ],
                containerStyles: [
                    {
                        containerBack: attributes.backgroundColor,
                        backgroundOpacity: attributes.backgroundOpacity,
                        backgroundImageID: attributes.imageID,
                        backgroundImageURL: attributes.imageURL,
                        backgroundRepeat: attributes.backgroundRepeat,
                        backgroundPosition: attributes.backgroundPosition,
                        backgroundSize: attributes.backgroundSize,
                        fixed: attributes.fixed,
                        wrapBorderType: attributes.wrapBorderType,
                        wrapBorderWidth: attributes.wrapBorderWidth,
                        wrapBorderTop: attributes.wrapBorderTop,
                        wrapBorderRight: attributes.wrapBorderRight,
                        wrapBorderBottom: attributes.wrapBorderBottom,
                        wrapBorderLeft: attributes.wrapBorderLeft,
                        wrapBorderColor: attributes.wrapBorderColor,
                        wrapBorderRadius: attributes.wrapBorderRadius,
                        wrapShadowColor: attributes.wrapShadowColor,
                        wrapShadowBlur: attributes.wrapShadowBlur,
                        wrapShadowHorizontal: attributes.wrapShadowHorizontal,
                        wrapShadowVertical: attributes.wrapShadowVertical,
                        wrapShadowPosition: attributes.wrapShadowPosition,
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
                wrapBorder,
                iconBorder,
                selectedIcon,
                align,
                hoverEffect,
                iconSize,
                iconSizeUnit,
                iconColor,
                iconBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                paddingU,
                marginT,
                marginR,
                marginB,
                marginL,
                borderType,
                borderWidth,
                iconBorderTop,
                iconBorderRight,
                iconBorderBottom,
                iconBorderLeft,
                borderRadius,
                borderColor,
                backgroundColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                wrapBorderType,
                wrapBorderWidth,
                wrapBorderTop,
                wrapBorderRight,
                wrapBorderBottom,
                wrapBorderLeft,
                wrapBorderRadius,
                wrapBorderColor,
                wrapShadowBlur,
                wrapShadowColor,
                wrapShadowHorizontal,
                wrapShadowVertical,
                wrapShadowPosition,
                wrapPaddingT,
                wrapPaddingR,
                wrapPaddingB,
                wrapPaddingL,
                wrapMarginT,
                wrapMarginR,
                wrapMarginB,
                wrapMarginL,
                urlCheck,
                link,
                target,
                iconOpacity,
                backgroundOpacity,
                hideDesktop,
                hideTablet,
                hideMobile
            } = props.attributes;


            return (
                <div
                    className={`${className}__container ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        textAlign: align,
                        backgroundColor: backgroundColor
                            ? hexToRgba(backgroundColor, backgroundOpacity)
                            : "transparent",
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        borderStyle: wrapBorderType,
                        borderWidth: wrapBorder
                            ? `${wrapBorderTop}px ${wrapBorderRight}px ${wrapBorderBottom}px ${wrapBorderLeft}px`
                            : wrapBorderWidth + "px",
                        borderRadius: wrapBorderRadius + "px",
                        borderColor: wrapBorderColor,
                        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical ||
                            0}px ${wrapShadowBlur ||
                            0}px ${wrapShadowColor} ${wrapShadowPosition}`,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL
                    }}
                >
                    <a
                        className={`premium-icon__link`}
                        href={urlCheck && link}
                        rel="noopener noreferrer"
                        target={target ? "_blank" : "_self"}
                    >
                        <i
                            className={`premium-icon ${selectedIcon} premium-icon__${hoverEffect}`}
                            style={{
                                color: iconColor || "#6ec1e4",
                                backgroundColor: iconBack
                                    ? hexToRgba(iconBack, iconOpacity)
                                    : "transparent",
                                fontSize: (iconSize || 50) + iconSizeUnit,
                                paddingTop: paddingT + paddingU,
                                paddingRight: paddingR + paddingU,
                                paddingBottom: paddingB + paddingU,
                                paddingLeft: paddingL + paddingU,
                                marginTop: marginT,
                                marginRight: marginR,
                                marginBottom: marginB,
                                marginLeft: marginL,
                                borderStyle: borderType,
                                borderWidth: iconBorder
                                    ? `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px`
                                    : borderWidth + "px",
                                borderRadius: borderRadius || 100 + "px",
                                borderColor: borderColor,
                                textShadow: `${shadowHorizontal || 0}px ${shadowVertical ||
                                    0}px ${shadowBlur || 0}px ${shadowColor}`
                            }}
                        />
                    </a>
                </div>
            );
        }
    },
    {
        attributes: attributes,
        save: props => {
            const {
                selectedIcon,
                align,
                hoverEffect,
                iconSize,
                iconSizeUnit,
                iconColor,
                iconBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                marginT,
                marginR,
                marginB,
                marginL,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                backgroundColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                wrapBorderType,
                wrapBorderWidth,
                wrapBorderRadius,
                wrapBorderColor,
                wrapShadowBlur,
                wrapShadowColor,
                wrapShadowHorizontal,
                wrapShadowVertical,
                wrapShadowPosition,
                wrapPaddingT,
                wrapPaddingR,
                wrapPaddingB,
                wrapPaddingL,
                wrapMarginT,
                wrapMarginR,
                wrapMarginB,
                wrapMarginL,
                urlCheck,
                link,
                target
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: align,
                        backgroundColor: backgroundColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        border: wrapBorderType,
                        borderWidth: wrapBorderWidth + "px",
                        borderRadius: wrapBorderRadius + "px",
                        borderColor: wrapBorderColor,
                        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical ||
                            0}px ${wrapShadowBlur ||
                            0}px ${wrapShadowColor} ${wrapShadowPosition}`,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL
                    }}
                >
                    <a
                        className={`${className}__link`}
                        href={urlCheck && link}
                        rel="noopener noreferrer"
                        target={target ? "_blank" : "_self"}
                    >
                        <i
                            className={`${className} ${selectedIcon} ${className}__${hoverEffect}`}
                            style={{
                                color: iconColor || "#6ec1e4",
                                backgroundColor: iconBack,
                                fontSize: (iconSize || 50) + iconSizeUnit,
                                paddingTop: paddingT,
                                paddingRight: paddingR,
                                paddingBottom: paddingB,
                                paddingLeft: paddingL,
                                marginTop: marginT,
                                marginRight: marginR,
                                marginBottom: marginB,
                                marginLeft: marginL,
                                border: borderType,
                                borderWidth: borderWidth + "px",
                                borderRadius: borderRadius || 100 + "px",
                                borderColor: borderColor,
                                textShadow: `${shadowHorizontal || 0}px ${shadowVertical ||
                                    0}px ${shadowBlur || 0}px ${shadowColor}`
                            }}
                        />
                    </a>
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                iconSizeUnit: "px"
            };
            return Object.assign(attributes, newAttributes);
        },
        save: props => {
            const {
                selectedIcon,
                align,
                hoverEffect,
                iconSize,
                iconColor,
                iconBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                marginT,
                marginR,
                marginB,
                marginL,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                backgroundColor,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                wrapBorderType,
                wrapBorderWidth,
                wrapBorderRadius,
                wrapBorderColor,
                wrapShadowBlur,
                wrapShadowColor,
                wrapShadowHorizontal,
                wrapShadowVertical,
                wrapShadowPosition,
                wrapPaddingT,
                wrapPaddingR,
                wrapPaddingB,
                wrapPaddingL,
                wrapMarginT,
                wrapMarginR,
                wrapMarginB,
                wrapMarginL,
                urlCheck,
                link,
                target
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: align,
                        backgroundColor: backgroundColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        border: wrapBorderType,
                        borderWidth: wrapBorderWidth + "px",
                        borderRadius: wrapBorderRadius + "px",
                        borderColor: wrapBorderColor,
                        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical ||
                            0}px ${wrapShadowBlur ||
                            0}px ${wrapShadowColor} ${wrapShadowPosition}`,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL
                    }}
                >
                    <a
                        className={`${className}__link`}
                        href={urlCheck && link}
                        rel="noopener noreferrer"
                        target={target ? "_blank" : "_self"}
                    >
                        <i
                            className={`${className} ${selectedIcon} ${className}__${hoverEffect}`}
                            style={{
                                color: iconColor || "#6ec1e4",
                                backgroundColor: iconBack,
                                fontSize: iconSize || 50,
                                paddingTop: paddingT,
                                paddingRight: paddingR,
                                paddingBottom: paddingB,
                                paddingLeft: paddingL,
                                marginTop: marginT,
                                marginRight: marginR,
                                marginBottom: marginB,
                                marginLeft: marginL,
                                border: borderType,
                                borderWidth: borderWidth + "px",
                                borderRadius: borderRadius || 100 + "px",
                                borderColor: borderColor,
                                textShadow: `${shadowHorizontal || 0}px ${shadowVertical ||
                                    0}px ${shadowBlur || 0}px ${shadowColor}`
                            }}
                        />
                    </a>
                </div>
            );
        }
    },
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                backgroundColor: attributes.background,
                imageID: "",
                imageURL: "",
                fixed: false,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "auto"
            };
            return Object.assign(attributes, newAttributes);
        },
        save: props => {
            const {
                selectedIcon,
                align,
                hoverEffect,
                iconSize,
                iconColor,
                iconBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                marginT,
                marginR,
                marginB,
                marginL,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                background,
                wrapBorderType,
                wrapBorderWidth,
                wrapBorderRadius,
                wrapBorderColor,
                wrapShadowBlur,
                wrapShadowColor,
                wrapShadowHorizontal,
                wrapShadowVertical,
                wrapShadowPosition,
                wrapPaddingT,
                wrapPaddingR,
                wrapPaddingB,
                wrapPaddingL,
                wrapMarginT,
                wrapMarginR,
                wrapMarginB,
                wrapMarginL,
                urlCheck,
                link,
                target
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: align,
                        backgroundColor: background,
                        border: wrapBorderType,
                        borderWidth: wrapBorderWidth + "px",
                        borderRadius: wrapBorderRadius + "px",
                        borderColor: wrapBorderColor,
                        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical ||
                            0}px ${wrapShadowBlur ||
                            0}px ${wrapShadowColor} ${wrapShadowPosition}`,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL
                    }}
                >
                    <a
                        className={`${className}__link`}
                        href={urlCheck && link}
                        target={target ? "_blank" : "_self"}
                    >
                        <i
                            className={`${className} ${selectedIcon} ${className}__${hoverEffect}`}
                            style={{
                                color: iconColor || "#6ec1e4",
                                backgroundColor: iconBack,
                                fontSize: iconSize || 50,
                                paddingTop: paddingT,
                                paddingRight: paddingR,
                                paddingBottom: paddingB,
                                paddingLeft: paddingL,
                                marginTop: marginT,
                                marginRight: marginR,
                                marginBottom: marginB,
                                marginLeft: marginL,
                                border: borderType,
                                borderWidth: borderWidth + "px",
                                borderRadius: borderRadius || 100 + "px",
                                borderColor: borderColor,
                                textShadow: `${shadowHorizontal || 0}px ${shadowVertical ||
                                    0}px ${shadowBlur || 0}px ${shadowColor}`
                            }}
                        />
                    </a>
                </div>
            );
        }
    },
    {
        attributes: attributes,
        save: props => {
            const {
                selectedIcon,
                align,
                hoverEffect,
                iconSize,
                iconColor,
                iconBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                paddingT,
                paddingR,
                paddingB,
                paddingL,
                marginT,
                marginR,
                marginB,
                marginL,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                background,
                wrapBorderType,
                wrapBorderWidth,
                wrapBorderRadius,
                wrapBorderColor,
                wrapPaddingT,
                wrapPaddingR,
                wrapPaddingB,
                wrapPaddingL,
                wrapMarginT,
                wrapMarginR,
                wrapMarginB,
                wrapMarginL,
                urlCheck,
                link,
                target
            } = props.attributes;

            return (
                <div
                    className={`${className}__container`}
                    style={{
                        textAlign: align,
                        backgroundColor: background,
                        border: wrapBorderType,
                        borderWidth: wrapBorderWidth + "px",
                        borderRadius: wrapBorderRadius + "px",
                        borderColor: wrapBorderColor,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL
                    }}
                >
                    <a
                        className={`${className}__link`}
                        href={urlCheck && link}
                        target={target ? "_blank" : "_self"}
                    >
                        <i
                            className={`${className} ${selectedIcon} ${className}__${hoverEffect}`}
                            style={{
                                color: iconColor,
                                backgroundColor: iconBack,
                                fontSize: iconSize,
                                paddingTop: paddingT,
                                paddingRight: paddingR,
                                paddingBottom: paddingB,
                                paddingLeft: paddingL,
                                marginTop: marginT,
                                marginRight: marginR,
                                marginBottom: marginB,
                                marginLeft: marginL,
                                border: borderType,
                                borderWidth: borderWidth + "px",
                                borderRadius: borderRadius + "px",
                                borderColor: borderColor,
                                textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
                            }}
                        />
                    </a>
                </div>
            );
        }
    }
];

export default deprecatedContent;