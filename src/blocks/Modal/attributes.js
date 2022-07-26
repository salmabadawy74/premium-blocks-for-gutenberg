const { __ } = wp.i18n;

const attributes = {
    blockId: {
        type: 'string'
    },
    contentStyles: {
        type: 'array',
        default: [
            {
                showHeader: true,
                iconType: 'none',
                contentIcon: '',
                contentImgID: '',
                contentImgURL: '',
                lottieURL: '',
                loopLottie: true,
                reverseLottie: false,
                iconSize: '',
                iconSizeTablet: '',
                iconSizeMobile: '',
                iconSizeUnit: 'px',
                titleText: __('Modal Box Title', 'premium-blocks-for-gutenberg'),
                showUpperClose: true,
                showLowerClose: true,
                lowerCloseText: __('Close', 'premium-blocks-for-gutenberg'),
                animationType: 'fadeInDown',
                animationSpeed: 'normal',
            }
        ]
    },
    triggerSettings: {
        type: "array",
        default: [
            {
                triggerType: 'button',
                btnText: __('Premium Blocks', 'premium-blocks-for-gutenberg'),
                showIcon: false,
                icon: '',
                iconPosition: 'before',
                iconSize: '50',
                iconSpacing: '',
                btnSize: 'md',
                triggerImgID: '',
                triggerImgURL: '',
                triggerText: __('Premium Blocks', 'premium-blocks-for-gutenberg'),
                lottieTriggerURL: '',
                triggerLoopLottie: true,
                triggerReverseLottie: false,
                triggerPlayLottie: false,
                imageWidth: '',
                imageWidthTablet: '',
                imageWidthMobile: '',
                // align: 'center',
                delayTime: 1
            }
        ]
    },
    triggerStyles: {
        type: 'array',
        default: [
            {
                color: '',
                hoverColor: '',
                iconColor: '',
                iconHoverColor: '',
                triggerBack: '',
                triggerHoverBack: '',
                // blur: '',
                // bright: '',
                // contrast: '',
                // saturation: '',
                // hue: '',
                // blurH: '',
                // brightH: '',
                // contrastH: '',
                // saturationH: '',
                // hueH: ''
            }
        ]
    },
    headerStyles: {
        type: 'array',
        default: [
            {
                color: '',
                backColor: '',
                headerSizeUnit: 'px',
            }
        ]
    },
    upperStyles: {
        type: "array",
        default: [{
            iconWidth: '',
            iconWidthUnit: 'px',
            color: '',
            backColor: '',

        }]
    },
    lowerStyles: {
        type: 'array',
        default: [
            {
                iconWidth: '',
                iconWidthUnit: 'px',
                color: '',
                backColor: '',
            }
        ]
    },
    modalStyles: {
        type: "array",
        default: [
            {
                contentType: 'text',
                contentText: __('Modal Box Content', 'premium-blocks-for-gutenberg'),
                textColor: '',
                textBackColor: '',
                modalWidth: '',
                modalWidthTablet: '',
                modalWidthMobile: '',
                modalWidthUnit: 'px',
                modalHeight: '',
                modalHeightTablet: '',
                modalHeightMobile: '',
                modalHeightUnit: 'px',
                footerBackColor: '',
            }
        ]
    },
    modalBackground: {
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
            "gradientPosition": "center center",
            "gradientType": "linear"
        }
    },
    modalShadow: {
        type: "object",
        default: {
            'color': 'undefined',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0',
            'position': ' '
        }
    },
    triggerShadow: {
        type: "object",
        default: {
            'color': 'undefined',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0',
            'position': ' '
        }
    },
    triggerTextShadow: {
        type: "object",
        default: {
            'color': 'undefined',
            'blur': '10',
            'horizontal': '0',
            'vertical': '0'
        }
    },
    backgroundType: {
        type: "string"
    },
    triggerPadding: {
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
    upperPadding: {
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
    lowerPadding: {
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
    modalPadding: {
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
    modalMargin: {
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
    triggerBorder: {
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
    triggerBorderH: {
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
    headerBorder: {
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
    upperBorder: {
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
    lowerBorder: {
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
    modalBorder: {
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
    triggerTypography: {
        type: "object",
        default: {
            "fontWeight": '',
            'fontStyle': '',
            'textTransform': '',
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'textDecoration': '',
            'letterSpacing': {
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
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    headerTypography: {
        type: "object",
        default: {
            "fontWeight": '',
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'textDecoration': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    lowerTypography: {
        type: "object",
        default: {
            "fontWeight": '',
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'textDecoration': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    modalTypography: {
        type: "object",
        default: {
            "fontWeight": '',
            'fontStyle': '',
            'textTransform': '',
            'letterSpacing': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'fontFamily': __('Default', 'premium - blocks -for-gutenberg'),
            'lineHeight': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            },
            'textDecoration': '',
            'fontSize': {
                'Desktop': '',
                "Tablet": '',
                "Mobile": '',
                "unit": 'px'
            }
        }
    },
    iconSize: {
        type: "object",
        default: {
            "Desktop": '',
            'Tablet': '',
            'Mobile': '',
            'unit': 'px',
        }
    },
    imageWidth: {
        type: "object",
        default: {
            "Desktop": '',
            'Tablet': '',
            'Mobile': '',
            'unit': '',
        }
    },
    modalWidth: {
        type: "object",
        default: {
            "Desktop": '',
            'Tablet': '',
            'Mobile': '',
            'unit': 'px',
        }
    },
    modalHeight: {
        type: "object",
        default: {
            "Desktop": '',
            'Tablet': '',
            'Mobile': '',
            'unit': 'px',
        }
    },
    triggerFilter: {
        type: "object",
        default: {
            'contrast': '100',
            'blur': '0',
            'bright': '100',
            'saturation': '100',
            'hue': '0'
        }
    },
    triggerHoverFilter: {
        type: "object",
        default: {
            'contrast': '100',
            'blur': '0',
            'bright': '100',
            'saturation': '100',
            'hue': '0'
        }
    },
    align: {
        type: "object",
        default: {
            "Desktop": "center",
            "Tablet": "center",
            "Mobile": "center"
        }
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
export default attributes;