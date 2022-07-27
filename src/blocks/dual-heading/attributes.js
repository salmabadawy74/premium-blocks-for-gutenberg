const { __ } = wp.i18n;
const attributes = {
    blockId: {
        type: "string"
    },
    alignContent: {
        type: "object",
        default: {
            'Desktop': 'center',
            'Tablet': 'center',
            'Mobile': 'center'
        }
    },
    firstHeading: {
        type: "array",
        source: "children",
        default: "Premium ",
        selector: ".premium-dheading-block__first"
    },
    secondHeading: {
        type: "array",
        source: "children",
        default: "Blocks",
        selector: ".premium-dheading-block__second"
    },
    titleTag: {
        type: "string",
        default: "h1"
    },
    display: {
        type: "string",
        default: "inline"
    },
    firstStyles: {
        type: "array",
        default: [
            {
                firstClip: false,
                firstAnim: false,
                firstStroke: false,
                firstColor: '',
                firstBackground: '',
                firstOpacity: '1',
                firstClipColor: "#54595f",

            }
        ]
    },
    firstShadow: {
        type: "object",
        default: {
            'color': 'undefined',
            'blur': '`10',
            'horizontal': '0',
            'vertical': '0',
        }
    },
    firstTypography: {
        type: "object",
        default: {
            "fontWeight": '400',
            'fontStyle': '',
            'fontFamily': 'Default',
            'textDecoration': '',
            'textTransform': "",
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'letterSpacing': {
                'Desktop': "",
                'Tablet': "",
                'Mobile': "",
                'unit': "px",
            },
            'lineHeight': {
                'Desktop': "",
                'Tablet': "",
                'Mobile': "",
                'unit': "px",
            },
        }
    },
    secondStyles: {
        type: "array",
        default: [
            {
                secondClip: false,
                secondAnim: false,
                secondStroke: false,
                secondColor: "#54595f",
                secondBackground: '',
                secondOpacity: '',
                secondClipColor: "#6ec1e4",
                secondMarginL: '0',
                secondMarginR: '0',
                secondPadding: '0',

            }
        ]
    },
    secondShadow: {
        type: "object",
        default: {
            'color': 'undefined',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0',
        }
    },
    secondTypography: {
        type: "object",
        default: {
            "fontWeight": '',
            'fontStyle': '',
            'textTransform': '',
            'fontFamily': '',
            'textDecoration': '',
            'fontSize': {
                'Desktop': '20',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'letterSpacing': {
                'Desktop': "",
                'Tablet': "",
                'Mobile': "",
                'unit': "px",
            },
            'lineHeight': {
                'Desktop': "",
                'Tablet': "",
                'Mobile': "",
                'unit': "px",
            },
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
            'gradientLocationOne': "0",
            'gradientColorTwo': '',
            'gradientLocationTwo': '100',
            'gradientAngle': '180',
            'gradientPosition': 'center center',
            'gradientType': ''
        }
    },

    link: {
        type: "boolean",
        default: false
    },
    target: {
        type: "boolean",
        default: false
    },
    headingURL: {
        type: "string"
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

    firstBorder: {
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
            }
        }
    },
    secondBorder: {
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
            }
        }
    },
    containerBorder: {
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
            }
        }
    },
    firstPadding: {
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
    firstMargin: {
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
    secondPadding: {
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
    secondMargin: {
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
}
export default attributes;