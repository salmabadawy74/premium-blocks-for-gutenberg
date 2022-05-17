const attributes = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
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
    background: {
        type: "string"
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
    iconMargin: {
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
    wrapMargin: {
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
    wrapPadding: {
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
    }
}
export default attributes;