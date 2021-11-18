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
            }
        ]

    },
    messageStyle: {
        type: "array",
        default: [
            {
                msgFontFamily: '',
                msgSizeUnit: 'px',
                msgSize: '',
                msgSizeMobile: '',
                msgSizeTablet: '',
                msgWeight: '',
                msgStyle: '',
                msgLetter: '',
                msgUpper: '',
                msgLine: '',
                msgSuccessColor: '',
                msgErrorColor: ''
            }
        ]
    }



}
export default attributes;