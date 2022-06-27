const imageSeparatorAttrs = {
    blockId: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center"
        }
    },
    iconType: {
        type: "string",
        default: "image"
    },

    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-image-separator-container img"
    },
    link: {
        type: "boolean"
    },
    url: {
        type: "string"
    },
    gutter: {
        type: "number",
        default: -50
    },
    blur: {
        type: "number",
        default: "0"
    },
    bright: {
        type: "number",
        default: "100"
    },
    contrast: {
        type: "number",
        default: "100"
    },
    saturation: {
        type: "number",
        default: "100"
    },
    hue: {
        type: "number",
        default: "0"
    },
    blurHover: {
        type: "number",
        default: "0"
    },
    brightHover: {
        type: "number",
        default: "100"
    },
    contrastHover: {
        type: "number",
        default: "100"
    },
    saturationHover: {
        type: "number",
        default: "100"
    },
    hueHover: {
        type: "number",
        default: "0"
    },

    linkTarget: {
        type: "boolean",
        default: false
    },
    imgFit: {
        type: "string",
        value: 'fill'
    },
    imgMask: {
        type: 'boolean',
        default: false
    },
    imgMaskURL: {
        type: "string",

    },
    imgMaskID: {
        type: "number"
    },
    maskSize: {
        type: "string",
        default: "contain"
    },
    maskPosition: {
        type: "string",
        default: "center center"
    },
    iconStyles: {
        type: "array",
        default: [
            {
                icon: "fa fa-bars",
                iconColor: "#6ec1e4",
                iconBGColor: "#54595f",
                iconColorHover: '',
                iconBGColorHover: '',
                iconPadding: ".1",
                iconPaddingTablet: ".1",
                iconPaddingType: "em",
                iconPaddingMobile: ".1",
                advancedBorder: false,
                advancedBorderValue: '',
                imgHeightType: "px",
            }
        ]
    },
    iconSize: {
        type: "object",
        default: {
            Desktop: '200',
            unit: 'px'
        }
    },
    imgHeight: {
        type: "object",
        default: {
            Desktop: '200',
            unit: 'px'
        }
    },
    iconBorder: {
        type: "object",
        default: {
            "borderType": "",
            "borderColor": "",
            "borderWidth": {
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
        }
    },
    hideDesktop: {
        type: 'boolean',
        default: ''
    },
    hideTablet: {
        type: 'boolean',
        default: ''
    },
    hideMobile: {
        type: 'boolean',
        default: ''
    },
    iconPadding: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            unit: "px"
        }
    },
    iconShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': ''
        }
    }
};
export default imageSeparatorAttrs