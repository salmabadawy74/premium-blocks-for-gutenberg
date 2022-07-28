const { __ } = wp.i18n;
const attributes = {
    blockId: {
        type: 'string',
    },
    borderButton: {
        type: "boolean",
        default: false,
    },
    btnText: {
        type: "string",
        default: __("Premium Button", 'premium-blocks-for-gutenberg')
    },
    btnSize: {
        type: "string",
        default: "md"
    },
    btnAlign: {
        type: "string",
        default: "center"
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-button"
    },
    btnTarget: {
        type: "boolean",
        default: false
    },
    effect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    slideColor: {
        type: "string"
    },
    block_id: {
        type: "string"
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    classMigrate: {
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
    btnStyles: {
        type: 'array',
        default: [
            {
                textColor: '',
                textHoverColor: '',
                backColor: '',
                backOpacity: 1,
                backHoverColor: '',
                borderHoverColor: '',
            }
        ]
    },
    border: {
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
    typography: {
        type: "object",
        default: {
            fontWeight: "400",
            fontStyle: "",
            letterSpacing: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            fontFamily: "Default",
            lineHeight: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            textDecoration: "",
            textTransform: "",
            fontSize: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
        }
    },
    textShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
        }
    },
    boxShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
            'position': ' '
        }
    },
    padding: {
        type: "object",
        default: {
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
            },
            unit: 'px'
        }
    },
}
export default attributes