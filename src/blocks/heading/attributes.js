const { __ } = wp.i18n;
const attributes = {
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
            Desktop: "left",
            Tablet: "left",
            Mobile: "left"
        }
    },
    style: {
        type: "string",
        default: "style1"
    },
    title: {
        type: "string",
        default: "Premium Title"
    },
    iconValue: {
        type: "boolean",
        default: false
    },
    iconType: {
        type: "string",
        default: "icon"
    },
    icon: {
        type: "string",
        default: "fa fa-bars"
    },
    iconPosition: {
        type: "string",
        default: "before"
    },
    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-title-icon"
    },
    link: {
        type: "boolean",
        default: false
    },
    backgroundText: {
        type: "boolean",
        default: false
    },
    BackText: {
        type: "string",
        default: 'Awesome Title'
    },
    textWidth: {
        type: "number",
    },
    url: {
        type: "string",
        default: "#"
    },
    iconAlign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center"
        }
    },
    stripePosition: {
        type: "string",
        default: "top"
    },
    titleStyles: {
        type: "array",
        default: [{
            titleColor: "#6ec1e4",
            shinyColor: '#fff',
            blurColor: "#000",
            BGColor: '#54595f',
            lineColor: "#6ec1e4",
            triangleColor: "#6ec1e4",
            stripeColor: "#6ec1e4",
            blurShadow: '120',
            animateDelay: '2',
            animateduration: '1',
        }]
    },
    titlePadding: {
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
    titleMargin: {
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
    titleBorder: {
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
    titleShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
        }
    },
    titleTypography: {
        type: "object",
        default: {
            fontWeight: "400",
            fontStyle: "",
            letterSpacing: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            fontFamily: "Default",
            lineHeight: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            textDecoration: "",
            textTransform: "",
            fontSize: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
        }
    },
    stripeAlign: {
        type: "object",
        default: {
            Desktop: "center",
            Tablet: "center",
            Mobile: "center"
        }
    },
    stripeWidth: {
        type: "object",
        default: {
            'Desktop': 120,
            'Tablet': 120,
            'Mobile': 120,
            'unit': 'px'
        }
    },
    stripeHeight: {
        type: "object",
        default: {
            'Desktop': 5,
            'Tablet': 5,
            'Mobile': 5,
            'unit': 'px'
        }
    },
    stripeTopSpacing: {
        type: "object",
        default: {
            'Desktop': 0,
            'Tablet': 0,
            'Mobile': 0,
            'unit': 'px'
        }
    },
    stripeBottomSpacing: {
        type: "object",
        default: {
            'Desktop': 0,
            'Tablet': 0,
            'Mobile': 0,
            'unit': 'px'
        }
    },
    textStyles: {
        type: "array",
        default: [{
            textBackColor: "#6ec1e4",
            rotateText: 0,
            rotateTextTablet: 0,
            rotateTextMobile: 0
        }]
    },
    textTypography: {
        type: "object",
        default: {
            fontWeight: "400",
            fontStyle: "",
            letterSpacing: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            fontFamily: "Default",
            lineHeight: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
            textDecoration: "",
            textTransform: "",
            fontSize: {
                Desktop: "",
                Tablet: "",
                Mobile: "",
                unit: "px",
            },
        }
    },
    textBackshadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
        }
    },
    horizontalText: {
        type: "object",
        default: {
            'Desktop': 0,
            'Tablet': 0,
            'Mobile': 0,
            'unit': 'px'
        }
    },
    verticalText: {
        type: "object",
        default: {
            'Desktop': 0,
            'Tablet': 0,
            'Mobile': 0,
            'unit': 'px'
        }
    },
    rotateText: {
        type: "object",
        default: {
            'Desktop': 0,
            'Tablet': 0,
            'Mobile': 0,
        }
    },
    iconStyles: {
        type: "array",
        default: [{
            iconColor: "#6ec1e4",
        }]
    },
    iconshadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
        }
    },
    iconPadding: {
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
    iconMargin: {
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
    iconBackground: {
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
    iconSize: {
        type: "object",
        default: {
            'Desktop': 40,
            'Tablet': 40,
            'Mobile': 40,
            'unit': 'px'
        }
    },
    iconBorder: {
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
    strokeStyles: {
        type: "array",
        default: [{
            stroke: false,
            strokeColor: ""
        }]
    },
    strokeFull: {
        type: "object",
        default: {
            'Desktop': 40,
            'Tablet': 40,
            'Mobile': 40,
        }
    },
    iconBGColor: {
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
    z_index: {
        type: "number"
    },
    blend: {
        type: 'string'
    },
    lottieURl: {
        type: 'string'
    },
    loop: {
        type: 'boolean',
        default: true
    },
    reversedir: {
        type: 'boolean',
        default: false
    },
    target: {
        type: 'boolean',
        default: false
    },
    blend: {
        type: "string"
    },
    zIndex: {
        type: "number"
    },
    titleTag: {
        type: "string",
        default: "h2"
    },
}
export default attributes