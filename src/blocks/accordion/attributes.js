import { array } from "prop-types";

const { __ } = wp.i18n;

const attributes = {
    accordionId: {
        type: "string"
    },
    repeaterItems: {
        type: "array",
        default: [
            {
                titleText: __("Awesome Title"),
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
                titleBorderWidth: ['', '', '', ''],
                titleBorderUpdated: false,
                titleBorderRadius: '',
                titleBorderColor: '',
                titleBack: '',
                titleShadowColor: '',
                titleShadowBlur: 0,
                titleShadowHorizontal: 0,
                titleShadowVertical: 0,
                titlePadding: ['', '', '', '']
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
    // titleColor: {
    //     type: "string"
    // },
    // titleSize: {
    //     type: "number"
    // },
    // titleLine: {
    //     type: "number"
    // },
    // titleLetter: {
    //     type: "number"
    // },
    // titleStyle: {
    //     type: "string"
    // },
    // titleUpper: {
    //     type: "boolean"
    // },
    // titleWeight: {
    //     type: "number",
    //     default: 500
    // },
    // titleBorder: {
    //     type: "string",
    //     default: "none"
    // },
    // titleBorderWidth: {
    //     type: "number",
    //     default: "1"
    // },
    // titleBorderTop: {
    //     type: "number"
    // },
    // titleBorderRight: {
    //     type: "number"
    // },
    // titleBorderBottom: {
    //     type: "number"
    // },
    // titleBorderLeft: {
    //     type: "number"
    // },
    // titleBorderUpdated: {
    //     type: "boolean",
    //     default: false
    // },
    // titleBorderRadius: {
    //     type: "number",
    //     default: "0"
    // },
    // titleBorderColor: {
    //     type: "string"
    // },
    // titleBack: {
    //     type: "string"
    // },
    // titleShadowColor: {
    //     type: "string"
    // },
    // titleShadowBlur: {
    //     type: "number",
    //     default: "0"
    // },
    // titleShadowHorizontal: {
    //     type: "number",
    //     default: "0"
    // },
    // titleShadowVertical: {
    //     type: "number",
    //     default: "0"
    // },
    // titlePaddingT: {
    //     type: "number"
    // },
    // titlePaddingR: {
    //     type: "number"
    // },
    // titlePaddingB: {
    //     type: "number"
    // },
    // titlePaddingL: {
    //     type: "number"
    // },
    // arrowColor: {
    //     type: "string"
    // },
    // arrowBack: {
    //     type: "string"
    // },
    // arrowPos: {
    //     type: "string",
    //     default: "out"
    // },
    // arrowPadding: {
    //     type: "number"
    // },
    // arrowRadius: {
    //     type: "number"
    // },
    // arrowSize: {
    //     type: "number",
    //     default: 20
    // },
    contentType: {
        type: "string",
        default: "text"
    },
    // descAlign: {
    //     type: "string",
    //     default: "left"
    // },
    // descColor: {
    //     type: "string"
    // },
    // descBack: {
    //     type: "string"
    // },
    // descBorder: {
    //     type: "string",
    //     default: "none"
    // },
    // descBorderWidth: {
    //     type: "number",
    //     default: "1"
    // },
    // descBorderUpdated: {
    //     type: "boolean",
    //     default: false
    // },
    // descBorderTop: {
    //     type: "number"
    // },
    // descBorderRight: {
    //     type: "number"
    // },
    // descBorderBottom: {
    //     type: "number"
    // },
    // descBorderLeft: {
    //     type: "number"
    // },
    titleEditBorder: {
        type: "boolean"
    },
    // descBorderRadius: {
    //     type: "number",
    //     default: "0"
    // },
    // descBorderColor: {
    //     type: "string"
    // },
    // descSize: {
    //     type: "number"
    // },
    // descLine: {
    //     type: "number"
    // },
    // descLetter: {
    //     type: "number"
    // },
    // descStyle: {
    //     type: "string"
    // },
    // descUpper: {
    //     type: "boolean"
    // },
    // descWeight: {
    //     type: "number",
    //     default: 500
    // },
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
    // descPaddingT: {
    //     type: "number"
    // },
    // descPaddingR: {
    //     type: "number"
    // },
    // descPaddingB: {
    //     type: "number"
    // },
    // descPaddingL: {
    //     type: "number",
    //     default: 10
    // }
}
export default attributes;