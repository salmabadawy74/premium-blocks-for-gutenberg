const { __ } = wp.i18n;
const attributes = {
    block_id: {
        type: "string"
    },
    borderBanner: {
        type: "boolean",
        default: false,
    },
    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-banner__img",
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleSizeUnit: 'px',
                titleSize: '20',
                titleSizeMobile: '',
                titleSizeTablet: '',
                titleWeight: '',
                titleLine: '',
                titleColor: '',
                titleBack: '',
                shadowColor: '',
                shadowBlur: '',
                shadowHorizontal: '',
                shadowVertical: ''
            }
        ]
    },
    descStyles: {
        type: "array",
        default: [
            {
                descSizeUnit: 'px',
                descSize: '20',
                descSizeTablet: '',
                descSizeMobile: '',
                descWeight: '',
                descLine: '',
                descColor: '#000',
                descShadowColor: '',
                descShadowBlur: '',
                descShadowHorizontal: '',
                descShadowVertical: '',
            }
        ]
    },
    containerStyles: {
        type: "array",
        default: [
            {
                containerShadowColor: '',
                containerShadowBlur: '',
                containerShadowHorizontal: '',
                containerShadowVertical: '',
                containerShadowPosition: '',
                paddingU: 'px'
            }
        ]
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-banner__title",
        default: __("Awesome Title")
    },
    titleTag: {
        type: "string",
        default: "H3"
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-banner__desc",
        default: __("Cool Description!!", 'premium-blocks-for-gutenberg')
    },
    contentAlign: {
        type: "string",
        default: "left"
    },
    effect: {
        type: "string",
        default: "effect1"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    height: {
        type: "string",
        default: "default"
    },
    minHeight: {
        type: "number"
    },
    verAlign: {
        type: "string",
        default: "top"
    },
    hovered: {
        type: "boolean",
        default: false
    },
    responsive: {
        type: "boolean",
        default: false
    },
    background: {
        type: "string"
    },
    opacity: {
        type: "number",
        default: 50
    },
    urlCheck: {
        type: "boolean",
        default: false
    },
    target: {
        type: "boolean",
        default: false
    },
    url: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-banner__link"
    },
    sepColor: {
        type: "string"
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
    classMigrate: {
        type: "boolean",
        default: false
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

export default attributes;