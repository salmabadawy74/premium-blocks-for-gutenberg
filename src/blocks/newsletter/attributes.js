const { __ } = wp.i18n;

const attributes = {
    block_id: {
        type: "string",
        default: ''
    },
    api: {
        type: "string",
        default: ""
    },
    list_id: {
        type: "string",
        default: ""
    },
    success_message: {
        type: "string",
        default: ''
    },
    error_message: {
        type: "string",
        default: ""
    },
    columnGap: {
        type: "number",
        default: '0'
    },
    rowGap: {
        type: "number",
        default: 10
    },
    eMail: {
        type: "string",

    },
    postID: {
        type: "string"
    },
    mailchimp: {
        type: "array",
        default: [
            {
                list: [],
                groups: [],
                doubleOptin: false,
                tags: []
            }]
    },
    btnBorderTop: {
        type: "number",
        default: 1
    },
    btnBorderRight: {
        type: "number",
        default: 1
    },
    btnBorderBottom: {
        type: "number",
        default: 1
    },
    btnBorderLeft: {
        type: "number",
        default: 1
    },
    textBorderTop: {
        type: "number",
        default: 1
    },
    textBorderRight: {
        type: "number",
        default: 1
    },
    textBorderBottom: {
        type: "number",
        default: 1
    },
    textBorderLeft: {
        type: "number",
        default: 1
    },
    inputStyles: {
        type: 'array',
        default: [
            {
                showLabel: true,
                label: __('Email'),
                placeholder: '',
                required: true,
                inputColumnWidth: '100',
                textColor: '',
                textFontFamily: __('Default'),
                textSizeUnit: "px",
                textSize: '',
                textSizeMobile: '',
                textSizeTablet: '',
                textWeight: "",
                textStyle: '',
                textLetter: '',
                textUpper: '',
                textLine: '',
                textBackColor: '',
                textBorderType: 'none',

                textBorderColor: '',
                textBorderRadius: 0,
            }
        ]
    },
    btnStyles: {
        type: "array",
        default: [
            {
                btnColor: '',
                btnBackColor: '',
                btnFontFamily: __('Default'),
                btnSizeUnit: 'px',
                btnSize: '',
                btnSizeMobile: "",
                btnSizeTablet: '',
                btnWeight: '',
                btnStyle: '',
                btnLetter: '',
                btnUpper: '',
                btnLine: '',
                btnBorderType: 'none',
                btnBorderColor: '',
                btnBorderRadius: 0,
                btnColumn: '25'
            }
        ]

    },
}
export default attributes;