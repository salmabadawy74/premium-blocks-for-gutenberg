const { __ } = wp.i18n;
const attributes = {
    borderButton: {
        type: "boolean",
        default: false,
    },
    btnText: {
        type: "string",
        default: __("Premium Button")
    },
    btnSize: {
        type: "string",
        default: "md"
    },
    btnAlign: {
        type: "string",
        default: "center"
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-button"
    },
    btnTarget: {
        type: "boolean",
        default: false
    },
    effect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    slideColor: {
        type: "string"
    },
    block_id: {
        type: "string"
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    classMigrate: {
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
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderTop: {
        type: "number"
    },
    borderRight: {
        type: "number"
    },
    borderBottom: {
        type: "number"
    },
    borderLeft: {
        type: "number"
    },
    textStyles: {
        type: "array",
        default: [
            {
                textSizeUnit: 'px',
                textSize: 20,
                textSizeTablet: '',
                textSizeMobile: '',
                textFontFamily: '',
                textLetter: '',
                textStyle: '',
                textUpper: false,
                textWeight: '',
                textLine: '',
                shadowColor: '',
                shadowBlur: '0',
                shadowHorizontal: '0',
                shadowVertical: '0',
            }
        ]
    },
    btnStyles: {
        type: 'array',
        default: [
            {
                textColor: '',
                textHoverColor: '',
                backColor: '',
                backOpacity: 1,
                backHoverColor: '',
                borderType: "none",
                borderRadius: '',
                borderColor: '',
                borderHoverColor: '',
                btnShadowColor: '',
                btnShadowBlur: 0,
                btnShadowHorizontal: 0,
                btnShadowVertical: 0,
                btnShadowPosition: '',
                padding: '',
                paddingU: 'px',
            }
        ]
    }
}
export default attributes