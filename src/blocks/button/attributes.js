const { __ } = wp.i18n;
const attributes = {
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
    textStyles: {
        type: "array",
        default: [
            {
                textSizeUnit: 'px',
                textSize: 20,
                textSizeTablet: '',
                textSizeMobile: '',
                textFontFamily: __('Default', 'premium-blocks-for-gutenberg'),
                textLetter: '',
                textStyle: '',
                textUpper: false,
                textWeight: '',
                textLine: '',
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
            }
        ]
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
                btnShadowColor: '',
                btnShadowBlur: 0,
                btnShadowHorizontal: 0,
                btnShadowVertical: 0,
                btnShadowPosition: '',
                padding: '',
                paddingU: 'px',
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
    }
}
export default attributes