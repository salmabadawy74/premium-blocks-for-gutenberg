const { __ } = wp.i18n;
const attributes = {
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
            title: __("Designer"),
            edit: false
        },
        {
            title: __("Developer"),
            edit: false
        },
        {
            title: __("Awesome"),
            edit: false
        },
        ]
    },
    effect: {
        type: "string",
        default: "typing"
    },
    cursorColor: {
        type: "string",
        default: "#6ec1e4"
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
        type: "string",
        default: "center"
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
    fancyStyles: {
        type: "array",
        default: [
            {
                fancyTextColor: "#6ec1e4",
                fancyTextfontSize: 20,
                fancyTextfontSizeUnit: 'px',
                fancyTextfontSizeMobile: 20,
                fancyTextfontSizeTablet: 20,
                fancyTextBGColor: '',
                fancyTextBGOpacity: 1,
                fancyTextLetter: '',
                fancyTextStyle: '',
                fancyTextUpper: false,
                fancyTextWeight: 600,
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
                cursorColor: ''
            }
        ]
    },
    PreStyles: {
        type: "array",
        default: [
            {
                textColor: "#54595f",
                textLetter: '',
                textStyle: '',
                textUpper: false,
                textWeight: 600,
                textfontSize: 20,
                textfontSizeUnit: 'px',
                textfontSizeMobile: 20,
                textfontSizeTablet: 20,
                textBGColor: '',
                textBGOpacity: 1,
            }
        ]
    }
}
export default attributes