const { __ } = wp.i18n;
const attributes = {
    blockId: {
        type: "string",
    },
    classMigrate: {
        type: "boolean",
        default: ""
    },
    fancyContenttAlign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center",
        }
    },
    prefix: {
        type: "string",
        default: "This is"
    },
    suffix: {
        type: "string",
        default: "Text"
    },
    repeaterFancyText: {
        type: "array",
        default: [{
            title: __("Designer", 'premium-blocks-for-gutenberg'),
            edit: false
        },
        {
            title: __("Developer", 'premium-blocks-for-gutenberg'),
            edit: false
        },
        {
            title: __("Awesome", 'premium-blocks-for-gutenebrg'),
            edit: false
        },
        ]
    },
    effect: {
        type: "string",
        default: "typing"
    },
    loop: {
        type: "boolean",
        default: "true"
    },
    cursorShow: {
        type: "boolean",
        default: "true"
    },
    cursorMark: {
        type: "string",
        default: "|"
    },
    typeSpeed: {
        type: "number",
        default: 100
    },
    backdelay: {
        type: "number",
        default: 30
    },
    startdelay: {
        type: "number",
        default: 30
    },
    backSpeed: {
        type: "number",
        default: 30
    },
    animationSpeed: {
        type: "number",
        default: 200
    },
    pauseTime: {
        type: "number",
        default: 3000
    },
    hoverPause: {
        type: "boolean",
        default: false
    },
    fancyTextAlign: {
        type: "object",
        default: {
            Desktop: 'center',
            Tablet: "center",
            Mobile: "center"
        }
    },
    hideDesktop: {
        type: 'boolean',
    },
    hideTablet: {
        type: 'boolean',
    },
    hideMobile: {
        type: 'boolean',
    },
    fancyStyles: {
        type: "array",
        default: [
            {
                fancyTextColor: '#6ec1e4',
                fancyTextBGColor: '',
                fancyTextBGOpacity: 1,
                cursorColor: "#6ec1e4"
            }
        ]
    },
    PreStyles: {
        type: "array",
        default: [
            {
                textColor: "",
                textBGColor: '',
                textBGOpacity: 1,
            }
        ]
    },
    prefixTypography: {
        type: "object",
        default: {
            "fontWeight": '400',
            'fontStyle': '',
            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'fontFamily': 'Default',
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'textDecoration': '',
            'textTransform': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    fancyTextTypography: {
        type: "object",
        default: {
            "fontWeight": '400',
            'fontStyle': '',
            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'fontFamily': 'Default',
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'textDecoration': '',
            'textTransform': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    fancyTextShadow: {
        type: "object",
        default: {
            'color': "undefined",
            'blur': '10',
            'horizontal': '0',
            'vertical': '0'
        }
    },
}
export default attributes