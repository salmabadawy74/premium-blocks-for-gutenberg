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
export default attributes;