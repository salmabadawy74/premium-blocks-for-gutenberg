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
    size: {
        type: "number",
        default: "200"
    },
    sizeUnit: {
        type: "string",
        default: 'px'
    },
    sizeMobile: {
        type: "number",
        default: "200"
    },
    sizeTablet: {
        type: "number",
        default: "200"
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
                borderTop: '0',
                borderRight: '0',
                borderBottom: '0',
                borderLeft: '0',
                borderColor: '',
                borderRadius: '0',
                paddingT: '0',
                paddingR: '0',
                paddingB: '0',
                paddingL: '0',
                paddingU: 'px',
            }
        ]
    }
}
export default LottieAttr;