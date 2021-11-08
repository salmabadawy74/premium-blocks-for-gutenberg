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
                marginT: '',
                marginR: '',
                marginB: '',
                marginL: '',
                paddingT: '',
                paddingR: '',
                paddingB: '',
                paddingL: "",
                paddingU: '',
            }
        ]
    },
    containerStyles: {
        backgroundColor: '',
        backgroundOpacity: '',
        imageID: '',
        imageURL: '',
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
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
        wrapMarginT: '',
        wrapMarginR: '',
        wrapMarginB: '',
        wrapMarginL: '',
        wrapPaddingT: '',
        wrapPaddingR: '',
        wrapPaddingB: '',
        wrapPaddingL: ''
    },

    padding: {
        type: "string",
        default: "up"
    },
    margin: {
        type: "string",
        default: "up"
    },
    background: {
        type: "string"
    },


    wrapPadding: {
        type: "string",
        default: "up"
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
export default attributes;