const { __ } = wp.i18n;
const attributes = {
    personSize: {
        type: "string",
        default: "md"
    },
    personAlign: {
        type: "string",
        default: "center"
    },
    nameStyles: {
        type: "array",
        default: [
            {
                nameColor: "rgb(110, 193, 228)",
                nameLetter: 0,
                nameStyle: '',
                nameUpper: false,
                nameWeight: 500,
                nameLine: 0,
                namefontSize: 20,
                namefontSizeType: "px",
                namefontSizeMobile: 20,
                namefontSizeTablet: 20,
                nameshadowColor: '',
                nameshadowBlur: 0,
                nameshadowHorizontal: 0,
                nameshadowVertical: 0,
            }
        ]
    },
    titleStyles: {
        type: "array",
        default: [
            {
                titleColor: "",
                titleLetter: 0,
                titleStyle: '',
                titleUpper: false,
                titleWeight: 500,
                titleLine: 0,
                titleSize: 20,
                titlefontSizeType: "px",
                titlefontSizeMobile: 20,
                titlefontSizeTablet: 20,
                titleshadowColor: '',
                titleshadowBlur: 0,
                titleshadowHorizontal: 0,
                titleshadowVertical: 0,
            }
        ]
    },
    descStyles: {
        type: "array",
        default: [
            {
                descColor: "",
                descLetter: 0,
                descStyle: '',
                descUpper: false,
                descWeight: '',
                descLine: 0,
                descSize: 20,
                descfontSizeType: "px",
                descfontSizeMobile: 20,
                descfontSizeTablet: 20,
                descshadowColor: '',
                descshadowBlur: 0,
                descshadowHorizontal: 0,
                descshadowVertical: 0,
            }
        ]
    },
    socialIconStyles: {
        type: "array",
        default: [
            {
                socialIconColor: "",
                socialIconHoverColor: '',
                socialIconBackgroundColor: '',
                defaultIconColor: false,
                socialIconSize: 20,
                socialIconfontSizeType: "px",
                socialIconfontSizeMobile: 20,
                socialIconfontSizeTablet: 20,
                borderTypeIcon: 'none',
                borderWidthIcon: '1',
                borderRadiusIcon: '0',
                borderColorIcon: '',
                socialIconPaddingType: 'px',
                socialIconMarginType: 'px',
            }
        ]
    },
    titleTag: {
        type: "string",
        default: "p"
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
    descColor: {
        type: "string",
        default: "#000"
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
    id: {
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
    blur: {
        type: "number",
        default: "0"
    },
    bright: {
        type: "number",
        default: "100"
    },
    contrast: {
        type: "number",
        default: "100"
    },
    saturation: {
        type: "number",
        default: "100"
    },
    hue: {
        type: "number",
        default: "0"
    },
    nameTag: {
        type: "string",
        default: "H2"
    },
    titleTag: {
        type: "string",
        default: "H4"
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
            unit: 'px'
        }
    },
    titleTypography: {
        type: "object",
        default: {
            "fontWeight": 500,
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': '',
            'lineHeight': '',
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
            "fontWeight": 400,
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': '',
            'lineHeight': '',
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'fontSize': {
                'Desktop': 20,
                "Tablet": 20,
                "Mobile": 20,
                unit: 'px'
            }
        }
    },
    nameTypography: {
        type: "object",
        default: {
            "fontWeight": 500,
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': '',
            'lineHeight': '',
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
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': ''
        }
    },
    nameShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': ''
        }
    },
    descShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': ''
        }
    },
    namePadding: {
        type: "object",
        default: {
            Desktop: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
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
    titlePadding: {
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
    descPadding: {
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
            Desktop: '100',
            unit: '%'
        }
    },
    imgWidth: {
        type: "object",
        default: {
            Desktop: '100',
            unit: '%'
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
}
export default attributes