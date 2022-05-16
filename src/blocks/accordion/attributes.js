const { __ } = wp.i18n;

const attributes = {
    accordionId: {
        type: "string"
    },
    repeaterItems: {
        type: "array",
        default: [
            {
                titleText: __("Awesome Title", 'premium-blocks-for-gutenberg'),
                descText:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    direction: {
        type: "string",
        default: "ltr"
    },
    titleTag: {
        type: "string",
        default: "H4"
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleColor: "",
                titleSize: '',
                titleLine: '',
                titleLetter: '',
                titleStyle: '',
                titleUpper: '',
                titleWeight: '500',
                titleBorder: 'none',
                titleBorderRadius: '',
                titleBorderColor: '',
                titleBack: '',
                titleShadowColor: '',
                titleShadowBlur: 0,
                titleShadowHorizontal: 0,
                titleShadowVertical: 0,
            }
        ]
    },
    arrowStyles: {
        type: "array",
        default: [
            {
                arrowColor: '',
                arrowBack: '',
                arrowPos: 'out',
                arrowPadding: '',
                arrowRadius: '',
                arrowSize: 20
            }]
    },
    descStyles: {
        type: 'array',
        default: [
            {
                descAlign: 'left',
                descColor: '',
                descBack: '',
                descBorder: 'none',
                descBorderWidth: 1,
                descBorderUpdated: false,
                descBorderTop: '',
                descBorderRight: '',
                descBorderBottom: '',
                descBorderLeft: '',
                descBorderRadius: 0,
                descBorderColor: '',
                descSize: '',
                descLine: '',
                descLetter: '',
                descStyle: '',
                descUpper: false,
                descWeight: 500,
                descPaddingT: '',
                descPaddingR: '',
                descPaddingB: '',
                descPaddingL: ''
            }

        ]
    },

    contentType: {
        type: "string",
        default: "text"
    },

    titleEditBorder: {
        type: "boolean"
    },

    textShadowColor: {
        type: "string"
    },
    textShadowBlur: {
        type: "number",
        default: "0"
    },
    textShadowHorizontal: {
        type: "number",
        default: "0"
    },
    textShadowVertical: {
        type: "number",
        default: "0"
    },
    titleBorderWidth: {
        type: "number",
        default: "1"
    },
    titleBorderTop: {
        type: "number"
    },
    titleBorderRight: {
        type: "number"
    },
    titleBorderBottom: {
        type: "number"
    },
    titleBorderLeft: {
        type: "number"
    },
    titleBorderUpdated: {
        type: "boolean",
        default: true
    },
    titlePaddingT: {
        type: "number"
    },
    titlePaddingR: {
        type: "number"
    },
    titlePaddingB: {
        type: "number"
    },
    titlePaddingL: {
        type: "number"
    },
    descBorderWidth: {
        type: "number",
        default: "1"
    },
    descBorderUpdated: {
        type: "boolean",
        default: true
    },
    descBorderTop: {
        type: "number"
    },
    descBorderRight: {
        type: "number"
    },
    descBorderBottom: {
        type: "number"
    },
    descBorderLeft: {
        type: "number"
    },
    descPaddingT: {
        type: "number"
    },
    descPaddingR: {
        type: "number"
    },
    descPaddingB: {
        type: "number"
    },
    descPaddingL: {
        type: "number",
        default: 10
    },
    titlePaddingTTablet: {
        type: "number"
    },
    titlePaddingRTablet: {
        type: "number"
    },
    titlePaddingBTablet: {
        type: "number"
    },
    titlePaddingLTablet: {
        type: "number"
    },
    titlePaddingTMobile: {
        type: "number"
    },
    titlePaddingRMobile: {
        type: "number"
    },
    titlePaddingBMobile: {
        type: "number"
    },
    titlePaddingLMobile: {
        type: "number"
    },
    descPaddingTTablet: {
        type: "number"
    },
    descPaddingRTablet: {
        type: "number"
    },
    descPaddingBTablet: {
        type: "number"
    },
    descPaddingLTablet: {
        type: "number"
    },
    descPaddingTMobile: {
        type: "number"
    },
    descPaddingRMobile: {
        type: "number"
    },
    descPaddingBMobile: {
        type: "number"
    },
    descPaddingLMobile: {
        type: "number"
    },
    titlePadding: {
        type: "object",
        default: {
        }

    },
    titleBorder: {
        type: "object",

    }
}
export default attributes;