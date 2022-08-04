const { __ } = wp.i18n;
const attributes = {
    align: {
        type: "object",
        default: {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
    },
    nameColor: {
        type: "string",
        default: ""
    },
    titleColor: {
        type: "string",
        default: ""
    },
    descColor: {
        type: "string",
        default: ""
    },
    socialIconStyles: {
        type: "array",
        default: [
            {
                socialIconColor: "",
                socialIconHoverColor: '',
                socialIconBackgroundColor: '',
                defaultIconColor: false,
                borderColorIcon: ''
            }
        ]
    },
    contentColor: {
        type: "string",
    },
    bottomInfo: {
        type: "number",
        default: 15
    },
    effect: {
        type: "string",
        default: "none"
    },
    effectDir: {
        type: "string",
        default: "top"
    },
    multiPersonChecked: {
        type: "number",
        default: 1
    },
    borderHoverColor: {
        type: "string"
    },
    personShadowPosition: {
        type: "string",
        default: ""
    },
    blockId: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    hoverEffectPerson: {
        type: "string",
        default: "none"
    },
    selectedSocialMediaIcon: {
        type: "string",
    },
    effectPersonStyle: {
        type: "string",
        default: "effect1"
    },
    rowPerson: {
        type: "string",
        default: "column1"
    },
    multiPersonContent: {
        type: "array",
        default: [
            {
                id: 1,
                personImgUrl: "",
                personImgId: '',
                name: "John Doe",
                title: "Senior Developer",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla",
                socialIcon: false,
                items: [
                    { label: 'facebook', link: false, value: "#", changeinput: "#" },
                    { label: 'twitter', link: false, value: "#", changeinput: "#" },
                    { label: 'instagram', link: false, value: "#", changeinput: "#" },
                    { label: 'youtube', link: false, value: "#", changeinput: "#" }
                ]
            }
        ]
    },
    nameTag: {
        type: "string",
        default: "h2"
    },
    titleTag: {
        type: "string",
        default: "h5"
    },
    socialIconMargin: {
        type: "object",
        default: {
            Desktop: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0"
            },
            Tablet: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0"
            },
            Mobile: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0"
            },
            unit: "px"
        }
    },
    socialIconPadding: {
        type: "object",
        default: {
            Desktop: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0"
            },
            Tablet: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0"
            },
            Mobile: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0"
            },
            unit: "px"
        }
    },
    socialIconBorder: {
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
    socialIconSize: {
        type: "object",
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20',
            unit: 'px'
        }
    },
    titleTypography: {
        type: "object",
        default: {
            "fontWeight": '',
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': {
                'Desktop': '',
                "Tablet": "",
                "Mobile": "",
                unit: 'px'
            },
            'lineHeight': {
                'Desktop': '',
                "Tablet": "",
                "Mobile": "",
                unit: 'px'
            },
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'fontSize': {
                'Desktop': '',
                "Tablet": "",
                "Mobile": "",
                unit: 'px'
            }
        }
    },
    descTypography: {
        type: "object",
        default: {
            "fontWeight": '',
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': {
                'Desktop': '',
                "Tablet": "",
                "Mobile": "",
                unit: 'px'
            },
            'lineHeight': {
                'Desktop': '',
                "Tablet": "",
                "Mobile": "",
                unit: 'px'
            },
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                unit: 'px'
            }
        }
    },
    nameTypography: {
        type: "object",
        default: {
            "fontWeight": '',
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': {
                'Desktop': '',
                "Tablet": "",
                "Mobile": "",
                unit: 'px'
            },
            'lineHeight': {
                'Desktop': '',
                "Tablet": "",
                "Mobile": "",
                unit: 'px'
            },
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'fontSize': {
                'Desktop': "",
                "Tablet": "",
                "Mobile": "",
                unit: 'px'
            }
        }
    },
    titleShadow: {
        type: "object",
        default: {
            'color': 'undefined',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0'
        }
    },
    nameShadow: {
        type: "object",
        default: {
            'color': 'undefined',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0'
        }
    },
    descShadow: {
        type: "object",
        default: {
            'color': 'undefined',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0'
        }
    },
    namePadding: {
        type: "object",
        default: {
            Desktop: {
                top: '',
                right: '',
                bottom: '',
                left: ''
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
    titlePadding: {
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
    descPadding: {
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
    contentPadding: {
        type: "object",
        default: {
            Desktop: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0"
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
    imgHeight: {
        type: "object",
        default: {
            Desktop: '200',
            'Tablet': '200',
            'Mobile': '200',
            unit: 'px'
        }
    },
    imgWidth: {
        type: "object",
        default: {
            Desktop: '200',
            'Tablet': '200',
            'Mobile': '200',
            unit: 'px'
        }
    },
    socialIcon: {
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
    imageFilter: {
        type: "object",
        default: {
            'contrast': '100',
            'blur': '0',
            'bright': '100',
            'saturation': '100',
            'hue': '0'
        }
    },
}
export default attributes