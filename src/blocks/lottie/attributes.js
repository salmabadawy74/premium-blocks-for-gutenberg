const LottieAttr = {
    lottieId: {
        type: "string"
    },
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    lottieURl: {
        type: "string",
        default: ""
    },
    lottieJson: {
        type: "object"
    },
    loop: {
        type: 'boolean',
        default: true
    },
    reverse: {
        type: "boolean",
        default: false
    },
    speed: {
        type: "number",
        default: "1"
    },
    trigger: {
        type: 'string',
        default: 'none'
    },
    bottom: {
        type: "number",
        default: "0"
    },
    top: {
        type: "number",
        default: "100"
    },
    scrollSpeed: {
        type: "number",
        default: "4"
    },

    rotate: {
        type: "number",
        default: 0
    },
    align: {
        type: "string",
        default: "center"
    },
    link: {
        type: "boolean",
        default: false
    },
    url: {
        type: "string"
    },
    target: {
        type: "boolean",
        default: false
    },
    render: {
        type: 'string',
        default: 'svg'
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
    lottieStyles: {
        type: "array",
        default: [
            {
                size: "200",
                sizeUnit: 'px',
                sizeMobile: "200",
                sizeTablet: "200",
                backColor: '',
                backOpacity: 1,
                backHColor: '',
                backHOpacity: 1,
                blur: '0',
                bright: '100',
                contrast: '100',
                saturation: '100',
                hue: '0',
                blurH: '0',
                brightH: '100',
                contrastH: '100',
                saturationH: '100',
                hueH: '0',
                borderType: 'none',
                borderColor: '',
                borderRadius: '0',
                paddingU: 'px',
            }
        ]
    },
    paddingT: {
        type: 'number'
    },
    paddingR: {
        type: 'number'
    },
    paddingB: {
        type: 'number'
    },
    paddingL: {
        type: 'number'
    },
    borderTop: {
        type: 'number'
    },
    borderRight: {
        type: 'number'
    },
    borderBottom: {
        type: 'number'
    },
    borderLeft: {
        type: 'number'
    },
}
export default LottieAttr;