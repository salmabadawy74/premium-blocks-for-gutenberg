const LottieAttr = {
    lottieId: {
        type: "string"
    },
    block_id: {
        type: "string"
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
        type: "object",
        default: {
            'Desktop': '',
            'Tablet': '',
            'Mobile': '',
            'unit': 'px'
        }
    },
    rotate: {
        type: "number",
        default: 0
    },
    align: {
        type: 'object',
        default: {
            "Desktop": 'center',
            'Tablet': 'center',
            'Mobile': 'center'
        }
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
    backColor: {
        type: "string"
    },
    backOpacity: {
        type: "number",
        default: "1"
    },
    backHColor: {
        type: "string"
    },
    backHOpacity: {
        type: "number",
        default: 1
    },
    lottieFilter: {
        type: 'object',
        default: {
            'blur': '0',
            'bright': '100',
            'contrast': '100',
            'saturation': '100',
            'hue': '0'

        }
    },
    lottieFilterHover: {
        type: 'object',
        default: {
            'blur': '0',
            'bright': '100',
            'contrast': '100',
            'saturation': '100',
            'hue': '0'

        }
    },
    lottieBorder: {
        type: "object",
        default: {
            'borderType': 'none',
            'borderColor': '',
            'borderWidth': {
                Desktop: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
                Tablet: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
                Mobile: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
            },
            'borderRadius': {
                Desktop: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
                Tablet: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
                Mobile: {
                    'top': '',
                    'right': '',
                    'bottom': '',
                    'left': ''
                },
            }
        },

    },
    lottiePadding: {
        type: 'object',
        default: {
            'Desktop': {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            'Tablet': {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            'Mobile': {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px',
        },
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
    }
}
export default LottieAttr;