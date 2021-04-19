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
    textColor: {
        type: "string"
    },
    textHoverColor: {
        type: "string"
    },
    backColor: {
        type: "string"
    },
    backOpacity: {
        type: "number",
        default: "1"
    },
    backHoverColor: {
        type: "string"
    },
    slideColor: {
        type: "string"
    },
    textSizeUnit: {
        type: "string",
        default: 'px'
    },
    textSize: {
        type: "number",
        default: '20'
    },
    textSizeTablet: {
        type: "number"
    },
    textSizeMobile: {
        type: "number"
    },
    textFontFamily: {
        type: "string"
    },
    textLetter: {
        type: "number"
    },
    textStyle: {
        type: "string"
    },
    textUpper: {
        type: "boolean"
    },
    textWeight: {
        type: "number",
        default: 500
    },
    textLine: {
        type: "number"
    },
    borderType: {
        type: "string",
        default: "none"
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
    borderRadius: {
        type: "number"
    },
    borderColor: {
        type: "string"
    },
    borderHoverColor: {
        type: "string"
    },
    padding: {
        type: "number"
    },
    paddingU: {
        type: "string"
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
    btnShadowColor: {
        type: "string"
    },
    btnShadowBlur: {
        type: "number",
        default: "0"
    },
    btnShadowHorizontal: {
        type: "number",
        default: "0"
    },
    btnShadowVertical: {
        type: "number",
        default: "0"
    },
    btnShadowPosition: {
        type: "string",
        default: ""
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
    }
}
export default attributes