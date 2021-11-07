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
    fancyTextColor: {
        type: "string",
        default: "#6ec1e4"
    },
    cursorColor: {
        type: "string",
        default: "#6ec1e4"
    },
    fancyTextLetter: {
        type: "number"
    },
    fancyTextStyle: {
        type: "string"
    },
    fancyTextUpper: {
        type: "boolean",
        default: false
    },
    fancyTextWeight: {
        type: "number",
        default: 600
    },
    fancyTextfontSize: {
        type: "number",
        default: 20
    },
    fancyTextfontSizeUnit: {
        type: "string",
        default: "px"
    },
    fancyTextfontSizeMobile: {
        type: "number",
        default: 20
    },
    fancyTextfontSizeTablet: {
        type: "number",
        default: 20
    },
    fancyTextBGColor: {
        type: "string"
    },
    fancyTextBGOpacity: {
        type: "number",
        default: "1"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    textColor: {
        type: "string",
        default: "#54595f"
    },
    textLetter: {
        type: "number"
    },
    textStyle: {
        type: "string"
    },
    textUpper: {
        type: "boolean",
        default: false
    },
    textWeight: {
        type: "number",
        default: 600
    },
    textfontSize: {
        type: "number",
        default: 20
    },
    textfontSizeUnit: {
        type: "string",
        default: "px"
    },
    textfontSizeMobile: {
        type: "number",
        default: 20
    },
    textfontSizeTablet: {
        type: "number",
        default: 20
    },
    textBGColor: {
        type: "string"
    },
    textBGOpacity: {
        type: "number",
        default: "1"
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
    }
}
export default attributes