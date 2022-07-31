const imageSeparatorAttrs = {
    blockId: {
        type: "string",
    },

    iconAlign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center",
        },
    },
    iconType: {
        type: "string",
        default: "image",
    },

    imageID: {
        type: "number",
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-image-separator-container img",
    },
    link: {
        type: "boolean",
    },
    url: {
        type: "string",
    },
    gutter: {
        type: "number",
        default: -50,
    },
    imgFilter: {
        type: "object",
        default: {
            contrast: "100",
            blur: "0",
            bright: "100",
            saturation: "100",
            hue: "0",
        },
    },
    imgFilterHover: {
        type: "object",
        default: {
            contrast: "100",
            blur: "0",
            bright: "100",
            saturation: "100",
            hue: "0",
        },
    },
    linkTarget: {
        type: "boolean",
        default: false,
    },
    imgFit: {
        type: "string",
        value: "fill",
    },
    imgMask: {
        type: "boolean",
        default: false,
    },
    imgMaskURL: {
        type: "string",
    },
    imgMaskID: {
        type: "number",
    },
    maskSize: {
        type: "string",
        default: "contain",
    },
    maskPosition: {
        type: "string",
        default: "center center",
    },
    iconStyles: {
        type: "array",
        default: [
            {
                advancedBorder: false,
                icon: "fa fa-bars",
                iconColor: "",
                iconBGColor: "",
                iconColorHover: "",
                iconBGColorHover: "",
                advancedBorderValue: "",
                imgHeightType: "px",
            },
        ],
    },
    iconSize: {
        type: "object",
        default: {
            Desktop: "200",
            Tablet: "200",
            Mobile: "",
            unit: "px",
        },
    },
    imgHeight: {
        type: "object",
        default: {
            Desktop: "200",
            unit: "px",
        },
    },
    iconBorder: {
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
    hideDesktop: {
        type: "boolean",
        default: "",
    },
    hideTablet: {
        type: "boolean",
        default: "",
    },
    hideMobile: {
        type: "boolean",
        default: "",
    },
    iconPadding: {
        type: "object",
        default: {
            Desktop: {
                top: ".1",
                right: ".1",
                bottom: ".1",
                left: ".1",
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
            unit: "em",
        },
    },
    iconShadow: {
        type: "object",
        default: {
            color: "undefined",
            blur: "10",
            horizontal: "0",
            vertical: "0",
        },
    },
};
export default imageSeparatorAttrs;
