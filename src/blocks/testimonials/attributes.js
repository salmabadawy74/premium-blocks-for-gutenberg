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
            Desktop: "center",
            Tablet: "center",
            Mobile: "center",
        },
    },
    authorImgId: {
        type: "string"
    },
    authorImgUrl: {
        type: "string"
    },
    imgSize: {
        type: "number"
    },
    imgBorder: {
        type: "object",
        default: {
            "borderType": "none",
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
                authorTag: "H3",
                authorColor: '',
                authorComTag: "H4",
            }
        ]
    },
    padding: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            unit: "px",
        },
    },
    bodyMargin: {
        type: "object",
        default: {
            Desktop: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            Tablet: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            Mobile: {
                top: "",
                right: "",
                bottom: "",
                left: "",
            },
            unit: "px",
        },
    },
    text: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__text"
    },
    authorCom: {
        type: "array",
        source: "children",
        selector: ".premium-testimonial__author_comp",
        default: "Leap13"
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
    contentStyle: {
        type: "array",
        default: [
            {
                bodyColor: '',
                bodyLine: '',
                bodyTop: '',
                bodyBottom: '',
            }
        ]

    },
    bodySize: {
        type: "object",
        default: {
            "Desktop": '',
            'Tablet': '',
            'Mobile': '',
            'unit': 'px',
        }
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
    authorComSize: {
        type: "object",
        default: {
            "Desktop": '',
            'Tablet': '',
            'Mobile': '',
            'unit': 'px',
        }
    },
    quoteStyles: {
        type: "array",
        default: [
            {
                quotSize: 2,
                quotColor: '',
                quotOpacity: 50,

            }
        ]
    },
    boxShadow: {
        type: "object",
        default: {
            color: "undefined",
            blur: "10",
            horizontal: "0",
            vertical: "0",
            'position': ' '
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
            "gradientLocationOne": "0",
            "gradientColorTwo": "",
            "gradientLocationTwo": "100",
            "gradientAngle": "180",
            "gradientPosition": "center center",
            "gradientType": "linear"
        }
    },
    authorTypography: {
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
        },
    },
    bodyTypography: {
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
        },
    },
    companyTypography: {
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
        },
    },
};
export default testimonialsAttrs;