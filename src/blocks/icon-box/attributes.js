const { __ } = wp.i18n;
const attributes = {
    blockId: {
        type: "string"
    },
    borderIconBox: {
        type: "boolean",
        default: false
    },
    btnBorderIconBox: {
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
    iconImage: {
        type: "string",
        default: "icon"
    },
    iconImgId: {
        type: "string"
    },
    iconImgUrl: {
        type: "string"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    iconChecked: {
        type: "boolean",
        default: true
    },
    iconPos: {
        type: "string",
        default: "block"
    },
    iconHPos: {
        type: "string",
        default: "before"
    },
    iconVPos: {
        type: "string",
        default: "center"
    },
    iconSize: {
        type: "object",
        default: {
            Desktop: '40',
            unit: 'px'
        }
    },
    iconRadius: {
        type: "number"
    },
    iconColor: {
        type: "string"
    },
    iconBackColor: {
        type: "string"
    },
    selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-site"
    },
    titleChecked: {
        type: "boolean",
        default: true
    },
    titleText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__title",
        default: __("Awesome Title", 'premium-blocks-for-gutenberg')
    },
    descText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__desc",
        default:
            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
    },
    descChecked: {
        type: "boolean",
        default: true
    },

    btnChecked: {
        type: "boolean",
        default: true
    },
    btnEffect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    btnTarget: {
        type: "boolean",
        default: false
    },
    btnText: {
        type: "array",
        source: "children",
        selector: ".premium-icon-box__btn",
        default: __("Click Here", 'premium-blocks-for-gutenberg')
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-icon-box__btn"
    },

    btnHoverBorder: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
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
    iconOpacity: {
        type: "number",
        default: "1"
    },
    titleTag: {
        type: "string",
        default: "h2"
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleColor: '',
            }
        ]
    },
    descStyles: {
        type: "array",
        default: [
            {
                descColor: '',
            }
        ]
    },
    btnStyles: {
        type: 'array',
        default: [
            {
                btnBorderWidth: 1,
                btnBorderRadius: '',
                btnColor: '',
                btnHoverColor: '',
                btnBack: '',
                btnHoverBack: '',
                btnOpacity: 1,
            }
        ]
    },
    containerMargin: {
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
    titleMargin: {
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
    descMargin: {
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
    btnMargin: {
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
    btnPadding: {
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
    btnBorder: {
        type: "object",
        default: {
            borderColor: "",
            borderType: "none",
            borderRadius: {
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
                }
            },
            borderWidth: {
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
                }
            }
        }
    },
    containerBorder: {
        type: "object",
        default: {
            borderColor: "",
            borderType: "none",
            borderRadius: {
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
                }
            },
            borderWidth: {
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
                }
            }
        }
    },
    containerBackground: {
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
    titleShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': ''
        }
    },
    btnShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
            'position': ' '
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
    containerHoverShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
            'position': ' '
        }
    },
    titleTypography: {
        type: "object",
        default: {
            "fontWeight": 300,
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
    descTypography: {
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
    btnTypography: {
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
    }
}
export default attributes;