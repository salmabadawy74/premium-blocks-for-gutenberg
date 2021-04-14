const className = "premium-icon";
import hexToRgba from 'hex-to-rgba'


const deprecated_attributes_1_6_2 = {
    iconType: {
        type: "string",
        default: "dash",
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site",
    },
    align: {
        type: "string",
        default: "center",
    },
    hoverEffect: {
        type: "string",
        default: "none",
    },
    iconSize: {
        type: "number",
    },
    iconSizeUnit: {
        type: "string",
        default: "px",
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4",
    },
    iconBack: {
        type: "string",
    },
    padding: {
        type: "string",
        default: "up",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    paddingT: {
        type: "number",
    },
    paddingR: {
        type: "number",
    },
    paddingB: {
        type: "number",
    },
    paddingL: {
        type: "number",
    },
    paddingU: {
        type: "string",
        default: "px",
    },
    margin: {
        type: "string",
        default: "up",
    },
    marginT: {
        type: "number",
    },
    marginR: {
        type: "number",
    },
    marginB: {
        type: "number",
    },
    marginL: {
        type: "number",
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderWidth: {
        type: "number",
        default: "1",
    },

    borderRadius: {
        type: "number",
        default: 100,
    },
    borderColor: {
        type: "string",
    },
    backgroundColor: {
        type: "string",
    },
    background: {
        type: "string",
    },
    imageID: {
        type: "string",
    },
    imageURL: {
        type: "string",
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat",
    },
    backgroundPosition: {
        type: "string",
        default: "top center",
    },
    backgroundSize: {
        type: "string",
        default: "auto",
    },
    fixed: {
        type: "boolean",
        default: false,
    },
    wrapBorderType: {
        type: "string",
        default: "none",
    },
    wrapBorderWidth: {
        type: "number",
        default: "1",
    },

    wrapBorderRadius: {
        type: "number",
    },
    wrapBorderColor: {
        type: "string",
    },
    wrapPadding: {
        type: "string",
        default: "up",
    },
    wrapShadowColor: {
        type: "string",
    },
    wrapShadowBlur: {
        type: "number",
        default: "0",
    },
    wrapShadowHorizontal: {
        type: "number",
        default: "0",
    },
    wrapShadowVertical: {
        type: "number",
        default: "0",
    },
    wrapShadowPosition: {
        type: "string",
        default: "",
    },
    wrapPaddingT: {
        type: "number",
    },
    wrapPaddingR: {
        type: "number",
    },
    wrapPaddingB: {
        type: "number",
    },
    wrapPaddingL: {
        type: "number",
    },
    wrapMargin: {
        type: "string",
        default: "up",
    },
    wrapMarginT: {
        type: "number",
    },
    wrapMarginR: {
        type: "number",
    },
    wrapMarginB: {
        type: "number",
    },
    wrapMarginL: {
        type: "number",
    },
    urlCheck: {
        type: "boolean",
    },
    link: {
        type: "string",
    },
    target: {
        type: "boolean",
    },
};

const newAttributes_1_6_3 = {
    iconBorderTop: {
        type: "number",
    },
    iconBorderRight: {
        type: "number",
    },
    iconBorderBottom: {
        type: "number",
    },
    iconBorderLeft: {
        type: "number",
    },
    wrapBorderTop: {
        type: "number",
    },
    wrapBorderRight: {
        type: "number",
    },
    wrapBorderBottom: {
        type: "number",
    },
    wrapBorderLeft: {
        type: "number",
    },
    iconBorder: {
        type: "boolean",
    },
    wrapBorder: {
        type: "boolean",
    },
    iconOpacity: {
        type: "number",
        default: "1",
    },
    backgroundOpacity: {
        type: "number",
        default: "1",
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: "boolean",
        default: false
    },
    hideMobile: {
        type: "boolean",
        default: false
    }
};

const deprecated_attributes_1_6_3 = Object.assign(
    deprecated_attributes_1_6_2,
    newAttributes_1_6_3
);

const deprecated_attributes_1_5_5 = {
    iconType: {
        type: "string",
        default: "dash",
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site",
    },
    align: {
        type: "string",
        default: "center",
    },
    hoverEffect: {
        type: "string",
        default: "none",
    },
    iconSize: {
        type: "number",
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4",
    },
    iconBack: {
        type: "string",
    },
    padding: {
        type: "string",
        default: "up",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    paddingT: {
        type: "number",
    },
    paddingR: {
        type: "number",
    },
    paddingB: {
        type: "number",
    },
    paddingL: {
        type: "number",
    },
    margin: {
        type: "string",
        default: "up",
    },
    marginT: {
        type: "number",
    },
    marginR: {
        type: "number",
    },
    marginB: {
        type: "number",
    },
    marginL: {
        type: "number",
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderWidth: {
        type: "number",
        default: "1",
    },
    borderRadius: {
        type: "number",
        default: 100,
    },
    borderColor: {
        type: "string",
    },
    background: {
        type: "string",
    },
    backgroundColor: {
        type: "string",
    },
    imageID: {
        type: "string",
    },
    imageURL: {
        type: "string",
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat",
    },
    backgroundPosition: {
        type: "string",
        default: "top center",
    },
    backgroundSize: {
        type: "string",
        default: "auto",
    },
    fixed: {
        type: "boolean",
        default: false,
    },
    wrapBorderType: {
        type: "string",
        default: "none",
    },
    wrapBorderWidth: {
        type: "number",
        default: "1",
    },
    wrapBorderRadius: {
        type: "number",
    },
    wrapBorderColor: {
        type: "string",
    },
    wrapPadding: {
        type: "string",
        default: "up",
    },
    wrapShadowColor: {
        type: "string",
    },
    wrapShadowBlur: {
        type: "number",
        default: "0",
    },
    wrapShadowHorizontal: {
        type: "number",
        default: "0",
    },
    wrapShadowVertical: {
        type: "number",
        default: "0",
    },
    wrapShadowPosition: {
        type: "string",
        default: "",
    },
    wrapPaddingT: {
        type: "number",
    },
    wrapPaddingR: {
        type: "number",
    },
    wrapPaddingB: {
        type: "number",
    },
    wrapPaddingL: {
        type: "number",
    },
    wrapMargin: {
        type: "string",
        default: "up",
    },
    wrapMarginT: {
        type: "number",
    },
    wrapMarginR: {
        type: "number",
    },
    wrapMarginB: {
        type: "number",
    },
    wrapMarginL: {
        type: "number",
    },
    urlCheck: {
        type: "boolean",
    },
    link: {
        type: "string",
    },
    target: {
        type: "boolean",
    },
};

const newAttributes_1_5_6 = {
    iconSizeUnit: {
        type: "px",
    },
};

const deprecated_attributes_1_5_6 = Object.assign(
    deprecated_attributes_1_5_5,
    newAttributes_1_5_6
);

const deprecated_attributes_1_3_9 = {
    iconType: {
        type: "string",
        default: "dash",
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site",
    },
    align: {
        type: "string",
        default: "center",
    },
    hoverEffect: {
        type: "string",
        default: "none",
    },
    iconSize: {
        type: "number",
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4",
    },
    iconBack: {
        type: "string",
    },
    padding: {
        type: "string",
        default: "up",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    paddingT: {
        type: "number",
    },
    paddingR: {
        type: "number",
    },
    paddingB: {
        type: "number",
    },
    paddingL: {
        type: "number",
    },
    margin: {
        type: "string",
        default: "up",
    },
    marginT: {
        type: "number",
    },
    marginR: {
        type: "number",
    },
    marginB: {
        type: "number",
    },
    marginL: {
        type: "number",
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderWidth: {
        type: "number",
        default: "1",
    },
    borderRadius: {
        type: "number",
        default: 100,
    },
    borderColor: {
        type: "string",
    },
    background: {
        type: "string",
    },
    wrapBorderType: {
        type: "string",
        default: "none",
    },
    wrapBorderWidth: {
        type: "number",
        default: "1",
    },
    wrapBorderRadius: {
        type: "number",
    },
    wrapBorderColor: {
        type: "string",
    },
    wrapPadding: {
        type: "string",
        default: "up",
    },
    wrapShadowColor: {
        type: "string",
    },
    wrapShadowBlur: {
        type: "number",
        default: "0",
    },
    wrapShadowHorizontal: {
        type: "number",
        default: "0",
    },
    wrapShadowVertical: {
        type: "number",
        default: "0",
    },
    wrapShadowPosition: {
        type: "string",
        default: "",
    },
    wrapPaddingT: {
        type: "number",
    },
    wrapPaddingR: {
        type: "number",
    },
    wrapPaddingB: {
        type: "number",
    },
    wrapPaddingL: {
        type: "number",
    },
    wrapMargin: {
        type: "string",
        default: "up",
    },
    wrapMarginT: {
        type: "number",
    },
    wrapMarginR: {
        type: "number",
    },
    wrapMarginB: {
        type: "number",
    },
    wrapMarginL: {
        type: "number",
    },
    urlCheck: {
        type: "boolean",
    },
    link: {
        type: "string",
    },
    target: {
        type: "boolean",
    },
};

const deprecated_attributes_1_3_1 = {
    iconType: {
        type: "string",
        default: "dash",
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site",
    },
    align: {
        type: "string",
        default: "center",
    },
    hoverEffect: {
        type: "string",
        default: "none",
    },
    iconSize: {
        type: "number",
        default: 50,
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4",
    },
    iconBack: {
        type: "string",
    },
    padding: {
        type: "string",
        default: "up",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    paddingT: {
        type: "number",
    },
    paddingR: {
        type: "number",
    },
    paddingB: {
        type: "number",
    },
    paddingL: {
        type: "number",
    },
    margin: {
        type: "string",
        default: "up",
    },
    marginT: {
        type: "number",
    },
    marginR: {
        type: "number",
    },
    marginB: {
        type: "number",
    },
    marginL: {
        type: "number",
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderWidth: {
        type: "number",
        default: "1",
    },
    borderRadius: {
        type: "number",
        default: 100,
    },
    borderColor: {
        type: "string",
    },
    background: {
        type: "string",
    },
    wrapBorderType: {
        type: "string",
        default: "none",
    },
    wrapBorderWidth: {
        type: "number",
        default: "1",
    },
    wrapBorderRadius: {
        type: "number",
    },
    wrapBorderColor: {
        type: "string",
    },
    wrapPadding: {
        type: "string",
        default: "up",
    },
    wrapShadowColor: {
        type: "string",
    },
    wrapShadowBlur: {
        type: "number",
        default: "0",
    },
    wrapShadowHorizontal: {
        type: "number",
        default: "0",
    },
    wrapShadowVertical: {
        type: "number",
        default: "0",
    },
    wrapShadowPosition: {
        type: "string",
        default: "",
    },
    wrapPaddingT: {
        type: "number",
    },
    wrapPaddingR: {
        type: "number",
    },
    wrapPaddingB: {
        type: "number",
    },
    wrapPaddingL: {
        type: "number",
    },
    wrapMargin: {
        type: "string",
        default: "up",
    },
    wrapMarginT: {
        type: "number",
    },
    wrapMarginR: {
        type: "number",
    },
    wrapMarginB: {
        type: "number",
    },
    wrapMarginL: {
        type: "number",
    },
    urlCheck: {
        type: "boolean",
    },
    link: {
        type: "string",
    },
    target: {
        type: "boolean",
    },
};

const newAttributes_1_6_6 = {
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
    paddingU: {
        type: "string",
        default: "px"
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
}

const deprecated_attributes_1_6_6 = Object.assign(newAttributes_1_6_6, deprecated_attributes_1_6_3)

const deprecatedContent = [
    {
        attributes: deprecated_attributes_1_6_6,
        migrate: attributes => {
            let newAttributes = {
                wrapPaddingT: "",
                wrapPaddingR: "",
                wrapPaddingB: "",
                wrapPaddingL: "",
                wrapPaddingTTablet: "",
                wrapPaddingRTablet: "",
                wrapPaddingBTablet: "",
                wrapPaddingLTablet: "",
                wrapPaddingTMobile: "",
                wrapPaddingRMobile: "",
                wrapPaddingBMobile: "",
                wrapPaddingLMobile: "",
                paddingT: "",
                paddingR: "",
                paddingB: "",
                paddingL: "",
                paddingTTablet: "",
                paddingRTablet: "",
                paddingBTablet: "",
                paddingLTablet: "",
                paddingTMobile: "",
                paddingRMobile: "",
                paddingBMobile: "",
                paddingLMobile: "",
                paddingU: "px",
                marginT: " ",
                marginR: " ",
                marginB: " ",
                marginL: " ",
                marginTTablet: " ",
                marginRTablet: " ",
                marginBTablet: " ",
                marginLTablet: " ",
                marginTMobile: " ",
                marginRMobile: " ",
                marginBMobile: " ",
                marginLMobile: " ",
                wrapMarginT: "",
                wrapMarginR: "",
                wrapMarginB: "",
                wrapMarginL: "",
                wrapMarginTTablet: "",
                wrapMarginRTablet: "",
                wrapMarginBTablet: "",
                wrapMarginLTablet: "",
                wrapMarginTMobile: "",
                wrapMarginRMobile: "",
                wrapMarginBMobile: "",
                wrapMarginLMobile: "",
            }
            return Object.assign(attributes, newAttributes);
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
        attributes: deprecated_attributes_1_6_3,
        migrate: (attributes) => {
            let newAttributes = {
                iconBorderTop: "",
                iconBorderRight: "",
                iconBorderBottom: "",
                iconBorderLeft: "",
                wrapBorderTop: "",
                wrapBorderRight: "",
                wrapBorderBottom: "",
                wrapBorderLeft: "",
                iconBorder: "",
                wrapBorder: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false,
                iconOpacity: '',
                backgroundOpacity: ''
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
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
                paddingU,
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
                target,
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
                        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical || 0
                            }px ${wrapShadowBlur || 0
                            }px ${wrapShadowColor} ${wrapShadowPosition}`,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL,
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
                                backgroundColor: iconBack,
                                fontSize: (iconSize || 50) + iconSizeUnit,
                                paddingTop: paddingT + paddingU,
                                paddingRight: paddingR + paddingU,
                                paddingBottom: paddingB + paddingU,
                                paddingLeft: paddingL + paddingU,
                                marginTop: marginT,
                                marginRight: marginR,
                                marginBottom: marginB,
                                marginLeft: marginL,
                                border: borderType,
                                borderWidth: borderWidth + "px",
                                borderRadius: borderRadius || 100 + "px",
                                borderColor: borderColor,
                                textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0
                                    }px ${shadowBlur || 0}px ${shadowColor}`,
                            }}
                        />
                    </a>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_6_2,
        migrate: (attributes) => {
            let newAttributes = {
                borderWidth: {
                    type: "number",
                },
                wrapBorderWidth: {
                    type: "number",
                },
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
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
                paddingU,
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
                target,
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
                        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical || 0
                            }px ${wrapShadowBlur || 0
                            }px ${wrapShadowColor} ${wrapShadowPosition}`,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL,
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
                                backgroundColor: iconBack,
                                fontSize: (iconSize || 50) + iconSizeUnit,
                                paddingTop: paddingT + paddingU,
                                paddingRight: paddingR + paddingU,
                                paddingBottom: paddingB + paddingU,
                                paddingLeft: paddingL + paddingU,
                                marginTop: marginT,
                                marginRight: marginR,
                                marginBottom: marginB,
                                marginLeft: marginL,
                                border: borderType,
                                borderWidth: borderWidth + "px",
                                borderRadius: borderRadius || 100 + "px",
                                borderColor: borderColor,
                                textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0
                                    }px ${shadowBlur || 0}px ${shadowColor}`,
                            }}
                        />
                    </a>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_5_6,
        migrate: (attributes) => {
            let newAttributes = {
                paddingU: "px",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
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
                target,
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
                        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical || 0
                            }px ${wrapShadowBlur || 0
                            }px ${wrapShadowColor} ${wrapShadowPosition}`,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL,
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
                                textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0
                                    }px ${shadowBlur || 0}px ${shadowColor}`,
                            }}
                        />
                    </a>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_5_5,
        migrate: (attributes) => {
            let newAttributes = {
                iconSizeUnit: "px",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
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
                target,
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
                        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical || 0
                            }px ${wrapShadowBlur || 0
                            }px ${wrapShadowColor} ${wrapShadowPosition}`,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL,
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
                                textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0
                                    }px ${shadowBlur || 0}px ${shadowColor}`,
                            }}
                        />
                    </a>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_3_9,
        migrate: (attributes) => {
            let newAttributes = {
                backgroundColor: attributes.background,
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
                target,
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
                        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical || 0
                            }px ${wrapShadowBlur || 0
                            }px ${wrapShadowColor} ${wrapShadowPosition}`,
                        paddingTop: wrapPaddingT,
                        paddingRight: wrapPaddingR,
                        paddingBottom: wrapPaddingB,
                        paddingLeft: wrapPaddingL,
                        marginTop: wrapMarginT,
                        marginRight: wrapMarginR,
                        marginBottom: wrapMarginB,
                        marginLeft: wrapMarginL,
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
                                textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0
                                    }px ${shadowBlur || 0}px ${shadowColor}`,
                            }}
                        />
                    </a>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_3_1,
        save: (props) => {
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
                target,
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
                        marginLeft: wrapMarginL,
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
                                textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                            }}
                        />
                    </a>
                </div>
            );
        },
    },
];

export default deprecatedContent;