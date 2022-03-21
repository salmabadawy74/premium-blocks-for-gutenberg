const imageSeparatorAttrs = {
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
        type: "boolean",
        default: false
    },
    url: {
        type: "string",
        default: "#"
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
    imgHeight: {
        type: "number",
        default: "200"
    },
    imgHeightTablet: {
        type: "number",
        default: "200"
    },
    imgHeightMobile: {
        type: "number",
        default: "200"
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
                iconSize: "200",
                iconSizeType: "px",
                iconSizeMobile: "200",
                iconSizeTablet: "200",
                icon: "fa fa-bars",
                iconBorderRadius: "0",
                iconBorderRadiusType: "px",
                iconBorderRadiusMobile: "0",
                iconBorderRadiusTablet: "0",
                iconColor: "#6ec1e4",
                iconBGColor: "#54595f",
                iconColorHover: '',
                iconBGColorHover: '',
                iconShadowColor: '',
                iconShadowBlur: "0",
                iconShadowHorizontal: "0",
                iconShadowVertical: "0",
                iconPadding: ".1",
                iconPaddingTablet: ".1",
                iconPaddingType: "em",
                iconPaddingMobile: ".1",
                advancedBorder: false,
                advancedBorderValue: '',
                imgHeightType: "px",
            }
        ]
    }
};
export default imageSeparatorAttrs