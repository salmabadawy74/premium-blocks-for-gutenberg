const { __ } = wp.i18n;

const testimonialsAttrs = {
    blockId: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "object",
        default: {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    authorImgId: {
        type: "string"
    },
    authorImgUrl: {
        type: "string"
    },
    imgRadius: {
        type: "string",
        default: "50%"
    },
    imgSize: {
        type: "object",
        default: {
            Desktop: '',
            unit: 'px'
        }
    },
    imgBorder: {
        type: "number",
        default: "1"
    },
    imgBorderColor: {
        type: "string"
    },
    author: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author",
        default: "John Doe"
    },
    authorStyles: {
        type: 'array',
        default: [
            {
                authorTag: "h3",
                authorColor: '',
                authorComTag: "h4",
            }
        ]
    },
    text: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__text",
        default: "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
    },
    authorCom: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author_comp",
        default: "Leap13"
    },
    hideDesktop: {
        type: 'boolean',
        default: ''
    },
    hideTablet: {
        type: 'boolean',
        default: ''
    },
    hideMobile: {
        type: 'boolean',
        default: ''
    },
    contentStyle: {
        type: "array",
        default: [
            {
                bodyColor: ''
            }
        ]

    },
    companyStyles: {
        type: "array",
        default: [
            {
                authorComTag: 'H4',
                authorComColor: '',
                dashColor: '',
                urlCheck: false,
                urlText: '',
                urlTarget: false,

            }
        ]
    },
    quoteStyles: {
        type: "array",
        default: [
            {
                quotColor: '',
                quotOpacity: 50,

            }
        ]
    },
    contentTypography: {
        type: "object",
        default: {
            "fontWeight": 400,
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': '',
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'lineHeight': '',
            'fontSize': {
                'Desktop': 20,
                "Tablet": 20,
                "Mobile": 20,
                unit: 'px'
            }
        }
    },
    contentMargin: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            unit: "px"
        }
    },
    companyTypography: {
        type: "object",
        default: {
            "fontWeight": 400,
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': '',
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'lineHeight': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                unit: 'px'
            }
        }
    },
    quotSize: {
        type: "number",
        default: 2
    },
    quotUnit: {
        type: "string",
        default: 'em'
    },
    authorTypography: {
        type: "object",
        default: {
            "fontWeight": 600,
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': '',
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'lineHeight': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                unit: 'px'
            }
        }
    },
    containerBackground: {
        type: "object",
        default: {
            "backgroundType": "",
            "backgroundColor": "",
            "backgroundImageID": "",
            "backgroundImageURL": "",
            "backgroundPosition": "",
            "backgroundRepeat": "",
            "backgroundSize": "",
            "fixed": false,
            "gradientLocationOne": "",
            "gradientColorTwo": "",
            "gradientLocationTwo": "",
            "gradientAngle": "",
            "gradientPosition": "",
            "gradientType": ""
        }
    },
    containerShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
            'position': ' '
        }
    },
    containerPadding: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: ""
            },
            unit: "px"
        }
    },
};
export default testimonialsAttrs;