const className = "premium-icon";
const { __ } = wp.i18n;
import hexToRgba from 'hex-to-rgba'
import { gradientBackground } from '../../components/HelperFunction'


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

const new_attributes = {
    iconStyles: {
        type: "array",
        default: [
            {
                iconSizeUnit: 'px',
                iconSize: '',
                iconColor: '',
                iconBack: '',
                iconOpacity: '1',
                borderType: 'none',
                borderWidth: '1',
                iconBorderTop: '1',
                iconBorderRight: '1',
                iconBorderBottom: '1',
                iconBorderLeft: '1',
                borderColor: '',
                borderRadius: '100',
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: '',
            }
        ]
    },
    containerStyles: {
        type: "array",
        default: [
            {
                containerBack: '',
                backgroundOpacity: 1,
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundRepeat: 'no-reapet',
                backgroundPosition: 'top center',
                backgroundSize: 'auto',
                fixed: false,
                wrapBorderType: 'none',
                wrapBorderWidth: '1',
                wrapBorderTop: '1',
                wrapBorderRight: '1',
                wrapBorderBottom: '1',
                wrapBorderLeft: '1',
                wrapBorderColor: '',
                wrapBorderRadius: '',
                wrapShadowColor: '',
                wrapShadowBlur: '0',
                wrapShadowHorizontal: '0',
                wrapShadowVertical: '0',
                wrapShadowPosition: '',
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center'
            }]
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
    wrapPaddingTTablet: {
        type: "number"
    },
    wrapPaddingRTablet: {
        type: "number"
    },
    wrapPaddingBTablet: {
        type: "number"
    },
    wrapPaddingLTablet: {
        type: "number"
    },
    wrapPaddingTMobile: {
        type: "number"
    },
    wrapPaddingRMobile: {
        type: "number"
    },
    wrapPaddingBMobile: {
        type: "number"
    },
    wrapPaddingLMobile: {
        type: "number"
    },
    marginTTablet: {
        type: "number"
    },
    marginRTablet: {
        type: "number"
    },
    marginBTablet: {
        type: "number"
    },
    marginLTablet: {
        type: "number"
    },
    marginTMobile: {
        type: "number"
    },
    marginRMobile: {
        type: "number"
    },
    marginBMobile: {
        type: "number"
    },
    marginLMobile: {
        type: "number"
    },
    wrapMarginTTablet: {
        type: "number"
    },
    wrapMarginRTablet: {
        type: "number"
    },
    wrapMarginBTablet: {
        type: "number"
    },
    wrapMarginLTablet: {
        type: "number"
    },
    wrapMarginTMobile: {
        type: "number"
    },
    wrapMarginRMobile: {
        type: "number"
    },
    wrapMarginBMobile: {
        type: "number"
    },
    wrapMarginLMobile: {
        type: "number"
    },
}

const deprecated_attributes = Object.assign(attributes, new_attributes);
const deprecatedContent = [
    {
        attributes: deprecated_attributes,
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
                backgroundType: 'solid',
                paddingTTablet: '',
                paddingRTablet: '',
                paddingBTablet: '',
                paddingLTablet: '',
                paddingTMobile: '',
                paddingRMobile: '',
                paddingBMobile: '',
                paddingLMobile: '',
                wrapPaddingTTablet: '',
                wrapPaddingRTablet: '',
                wrapPaddingBTablet: '',
                wrapPaddingLTablet: '',
                wrapPaddingTMobile: '',
                wrapPaddingRMobile: '',
                wrapPaddingBMobile: '',
                wrapPaddingLMobile: '',
                marginTTablet: '',
                marginRTablet: '',
                marginBTablet: '',
                marginLTablet: '',
                marginTMobile: '',
                marginRMobile: '',
                marginBMobile: '',
                marginLMobile: '',
                wrapMarginTTablet: '',
                wrapMarginRTablet: '',
                wrapMarginBTablet: '',
                wrapMarginLTablet: '',
                wrapMarginTMobile: '',
                wrapMarginRMobile: '',
                wrapMarginBMobile: '',
                wrapMarginLMobile: '',
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
    },
    {
        attributes: attributes,
        migrate: attributes => {
            let newAttributes = {
                block_id: '',
                classMigrate: '',
                iconSize: {
                    unit: attributes.iconStyles[0].iconSizeUnit,
                    "Desktop": attributes.iconStyles[0].iconSize
                },
                iconMargin: {
                    "Desktop": {
                        top: attributes.marginT,
                        right: attributes.marginR,
                        bottom: attributes.marginB,
                        left: attributes.marginL
                    },
                    "Tablet": {
                        top: attributes.marginTTablet,
                        right: attributes.marginRTablet,
                        bottom: attributes.marginBTablet,
                        left: attributes.marginLTablet
                    },
                    "Mobile": {
                        top: attributes.marginTMobile,
                        right: attributes.marginRMobile,
                        bottom: attributes.marginBMobile,
                        left: attributes.marginLMobile
                    },
                    unit: ""
                },
                iconPadding: {
                    "Desktop": {
                        top: attributes.paddingT,
                        right: attributes.paddingR,
                        bottom: attributes.paddingB,
                        left: attributes.paddingL
                    },
                    "Tablet": {
                        top: attributes.paddingTTablet,
                        right: attributes.paddingRTablet,
                        bottom: attributes.paddingBTablet,
                        left: attributes.paddingLTablet
                    },
                    "Mobile": {
                        top: attributes.paddingTMobile,
                        right: attributes.paddingRMobile,
                        bottom: attributes.paddingBMobile,
                        left: attributes.paddingLMobile
                    },
                    unit: attributes.paddingU
                },
                wrapMargin: {
                    "Desktop": {
                        top: attributes.wrapMarginT,
                        right: attributes.wrapMarginR,
                        bottom: attributes.wrapMarginB,
                        left: attributes.wrapMarginL
                    },
                    "Tablet": {
                        top: attributes.wrapMarginTTablet,
                        right: attributes.wrapMarginRTablet,
                        bottom: attributes.wrapMarginBTablet,
                        left: attributes.wrapMarginLTablet
                    },
                    "Mobile": {
                        top: attributes.wrapMarginTMobile,
                        right: attributes.wrapMarginRMobile,
                        bottom: attributes.wrapMarginBMobile,
                        left: attributes.wrapMarginLMobile
                    },
                    unit: ''
                },
                wrapPadding: {
                    "Desktop": {
                        top: attributes.wrapPaddingT,
                        right: attributes.wrapPaddingR,
                        bottom: attributes.wrapPaddingB,
                        left: attributes.wrapPaddingL
                    },
                    "Tablet": {
                        top: attributes.wrapPaddingTTablet,
                        right: attributes.wrapPaddingRTablet,
                        bottom: attributes.wrapPaddingBTablet,
                        left: attributes.wrapPaddingLTablet
                    },
                    "Mobile": {
                        top: attributes.wrapPaddingTMobile,
                        right: attributes.wrapPaddingRMobile,
                        bottom: attributes.wrapPaddingBMobile,
                        left: attributes.wrapPaddingLMobile
                    },
                    unit: ''
                },
                iconBorder: {
                    borderColor: attributes.iconStyles[0].btnBorderColor,
                    borderType: attributes.iconStyles[0].borderColor,
                    borderRadius: {
                        "Desktop": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    },
                    borderWidth: {
                        "Desktop": {
                            top: attributes.iconBorderTop,
                            right: attributes.iconBorderRight,
                            bottom: attributes.iconBorderBottom,
                            left: attributes.iconBorderLeft
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    }
                },
                containerBorder: {
                    borderColor: attributes.containerStyles[0].wrapBorderType,
                    borderType: attributes.containerStyles[0].wrapBorderColor,
                    borderRadius: {
                        "Desktop": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    },
                    borderWidth: {
                        "Desktop": {
                            top: attributes.wrapBorderTop,
                            right: attributes.wrapBorderRight,
                            bottom: attributes.wrapBorderBottom,
                            left: attributes.wrapBorderLeft
                        },
                        "Tablet": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                        "Mobile": {
                            top: "",
                            right: "",
                            bottom: "",
                            left: ""
                        },
                    }
                },
                containerBackground: {
                    'backgroundType': attributes.backgroundType,
                    'backgroundColor': attributes.containerStyles.containerBack,
                    'backgroundImageID': attributes.containerStyles.backgroundImageID,
                    'backgroundImageURL': attributes.containerStyles.backgroundImageURL,
                    'backgroundPosition': attributes.containerStyles.backgroundPosition,
                    'backgroundRepeat': attributes.containerStyles.backgroundRepeat,
                    'backgroundSize': attributes.containerStyles.backgroundSize,
                    'fixed': attributes.containerStyles.fixed,
                    'gradientLocationOne': attributes.containerStyles.gradientLocationOne,
                    'gradientColorTwo': attributes.containerStyles.gradientColorTwo,
                    'gradientLocationTwo': attributes.containerStyles.gradientLocationTwo,
                    'gradientAngle': attributes.containerStyles.gradientAngle,
                    'gradientPosition': attributes.containerStyles.gradientPosition,
                    'gradientType': attributes.containerStyles.gradientType,
                },
                containerShadow: {
                    'color': attributes.containerStyles.wrapShadowColor,
                    'blur': attributes.containerStyles.wrapShadowBlur,
                    'horizontal': attributes.containerStyles.wrapShadowHorizontal,
                    'vertical': attributes.containerStyles.wrapShadowVertical,
                    'position': attributes.containerStyles.wrapShadowPosition
                },
                iconShadow: {
                    'color': attributes.iconStyles.shadowColor,
                    'blur': attributes.iconStyles.shadowBlur,
                    'horizontal': attributes.iconStyles.shadowHorizontal,
                    'vertical': attributes.iconStyles.shadowVertical
                }
            };
            return Object.assign(attributes, newAttributes);
        },
        save: props => {
            const {
                block_id,
                iconBorder,
                selectedIcon,
                align,
                hoverEffect,
                iconStyles,
                urlCheck,
                link,
                target,
                hideDesktop,
                hideTablet,
                hideMobile,
                containerBackground,
                containerShadow,
                iconShadow
            } = props.attributes;

            return (
                <div
                    className={`${mainClasses}__container ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    id={`premium-icon-${block_id}`}
                >
                    <div
                        className={`premium-icon-container`}
                        style={{
                            textAlign: align,
                            ...gradientBackground(containerBackground),
                            borderStyle: containerBorder.borderType,
                            borderColor: containerBorder.borderColor,
                            boxShadow: `${containerShadow.horizontal || 0}px ${containerShadow.vertical ||
                                0}px ${containerShadow.blur || 0}px ${containerShadow.color} ${containerShadow.position}`
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
                                    color: iconStyles[0].iconColor || "#6ec1e4",
                                    backgroundColor: iconStyles[0].iconBack,
                                    borderStyle: iconBorder.borderType,
                                    borderColor: iconBorder.borderColor,
                                    textShadow: `${iconShadow.horizontal || 0}px ${iconShadow.vertical ||
                                        0}px ${iconShadow.blur || 0}px ${iconShadow.color}`
                                }}
                            />
                        </a>
                    </div>
                </div>
            );
        }
    }
];

export default deprecatedContent;