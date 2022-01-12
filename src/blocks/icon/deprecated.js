import attributes from "./attributes";

const className = "premium-icon";

const deprecatedContent = [
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