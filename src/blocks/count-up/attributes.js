const { __ } = wp.i18n;
const attributes = {
    blockId: {
        type: "string"
    },
    increment: {
        type: "string",
        default: 500
    },
    time: {
        type: "string",
        default: 1000
    },
    delay: {
        type: "string",
        default: 10
    },
    align: {
        type: "object",
        default: {
            Desktop: 'center',
            Tablet: 'center',
            Mobile: 'center',
        }
    },
    flexDir: {
        type: "string",
        default: "column"
    },
    prefix: {
        type: "boolean",
        default: true
    },
    suffix: {
        type: "boolean",
        default: true
    },
    icon: {
        type: "string",
        default: "icon"
    },
    iconSpacing: {
        type: "number",
        default: 10
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    iconType: {
        type: "string",
        default: "dash"
    },
    iconCheck: {
        type: "boolean",
        default: true
    },
    iconSize: {
        type: "number",
        default: 40
    },
    iconColor: {
        type: "string",
    },
    selfAlign: {
        type: "string",
        default: "center"
    },
    titleCheck: {
        type: "boolean",
        default: true
    },
    titleTxt: {
        type: "string",
        default: __("Premium Count Up", 'premium-blocks-for-gutenberg')
    },
    faIcon: {
        type: "string",
        default: "dashicons-clock"
    },
    counterFamily: {
        type: "string",
        default: __('Default', 'premium-blocks-for-gutenberg')
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
    numberStyles: {
        type: "array",
        default: [
            {
                numberColor: "",
            }
        ]
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleColor: '',
                titleT: 1,
                titleB: 1,
                titleColor: '',
            }
        ]
    },
    suffixStyles: {
        type: 'array',
        default: [
            {
                suffixTxt: "Suffix",
                suffixColor: '',
                suffixGap: 2,
            }
        ]
    },
    prefixStyles: {
        type: "array",
        default: [
            {
                prefixTxt: "Prefix",
                prefixColor: '',
                prefixGap: 2,
            }
        ]
    },
    padding: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Tablet: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            Mobile: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },
            unit: 'px'
        }
    },
    numberTypography: {
        type: "object",
        default: {
            "fontWeight": '400',
            'fontStyle': '',
            'textTransform': '',
            'fontFamily': 'Default',
            'textDecoration': '',
            'fontSize': {
                'Desktop': '30',
                "Tablet": '30',
                "Mobile": '30',
                "unit": 'px'
            },
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    prefixTypography: {
        type: "object",
        default: {
            "fontWeight": '400',
            'fontStyle': '',
            'textTransform': '',
            'fontFamily': 'Default',
            'textDecoration': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    suffixTypography: {
        type: "object",
        default: {
            "fontWeight": '400',
            'fontStyle': '',
            'textTransform': '',
            'fontFamily': 'Default',
            'textDecoration': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    titleTypography: {
        type: "object",
        default: {
            "fontWeight": '400',
            'fontStyle': '',
            'textTransform': '',
            'fontFamily': 'Default',
            'textDecoration': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    boxShadow: {
        type: "object",
        default: {
            'color': 'undefined',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0',
            'position': ' '
        }
    },
    border: {
        type: "object",
        default: {
            "borderType": "",
            "borderColor": "",
            "borderWidth": {
                Desktop: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Tablet: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                },
                Mobile: {
                    top: '',
                    right: '',
                    bottom: '',
                    left: ''
                }
            },
            "borderRadius": {
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
                }
            }
        }
    },
    background: {
        type: "object",
        default: {
            'backgroundType': '',
            'backgroundColor': '',
            'backgroundImageID': '',
            'backgroundImageURL': '',
            'backgroundPosition': '',
            'backgroundRepeat': '',
            'backgroundSize': '',
            'fixed': false,
            'gradientLocationOne': "",
            'gradientColorTwo': '',
            'gradientLocationTwo': '',
            'gradientAngle': '',
            'gradientPosition': '',
            'gradientType': ''
        }
    },
}

export default attributes