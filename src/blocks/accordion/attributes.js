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

}
export default attributes;