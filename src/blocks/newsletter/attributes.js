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
    inputStyles: {
        type: 'array',
        default: [
            {
                showLabel: true,
                label: __('Email', 'premium-blocks-for-gutenberg'),
                placeholder: '',
                required: true,
                inputColumnWidth: '100',
                textColor: '',
                textFontFamily: '',
                textSizeUnit: "",
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
                textBorderTop: 1,
                textBorderRight: 1,
                textBorderBottom: 1,
                textBorderLeft: 1,
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
                btnFontFamily: '',
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
                btnBorderTop: 1,
                btnBorderRight: 1,
                btnBorderBottom: 1,
                btnBorderLeft: 1,
                btnBorderColor: '',
                btnBorderRadius: 0,
                btnColumn: '25'
            }
        ]

    },
}
export default attributes;