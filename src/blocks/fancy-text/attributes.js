const { __ } = wp.i18n;
const attributes = {
    blockId: {
        type: "string",
    },
    classMigrate: {
        type: "boolean",
        default: ""
    },
    align: {
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
    fancyalign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center"
        }
    },
    hideDesktop: {
        type: 'boolean',
        default: ""
    },
    hideTablet: {
        type: 'boolean',
        default: ""
    },
    hideMobile: {
        type: 'boolean',
        default: ""
    },
    fancyStyles: {
        type: "array",
        default: [
            {
                fancyTextColor: '#6ec1e4',
                // fancyTextfontSize: 20,
                // fancyTextfontSizeUnit: 'px',
                // fancyTextfontSizeMobile: 20,
                // fancyTextfontSizeTablet: 20,
                fancyTextBGColor: '',
                fancyTextBGOpacity: 1,
                // fancyTextLetter: '',
                // fancyTextStyle: '',
                // fancyTextUpper: false,
                // fancyTextWeight: 600,
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
                cursorColor: "#6ec1e4"
            }
        ]
    },
    PreStyles: {
        type: "array",
        default: [
            {
                textColor: "#54595f",
                // textLetter: '',
                // textStyle: '',
                // textUpper: false,
                // textWeight: 600,
                // textfontSize: 20,
                // textfontSizeUnit: 'px',
                // textfontSizeMobile: 20,
                // textfontSizeTablet: 20,
                textBGColor: '',
                textBGOpacity: 1,
            }
        ]
    },
    prefixTypography: {
        type: "object",
        default: {
            'fontWeight': '',
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': '',
            'fontFamily': '',
            'lineHeight': '',
            'textDecoration': '',
            'fontSize': {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    fancyTextTypography: {
        type: "object",
        default: {
            'fontWeight': '',
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': '',
            'fontFamily': '',
            'lineHeight': '',
            'textDecoration': '',
            'fontSize': {
                "Desktop": '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    }
}
export default attributes