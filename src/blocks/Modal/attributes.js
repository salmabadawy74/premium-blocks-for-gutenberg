const { __ } = wp.i18n;

const attributes = {
    block_id: {
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
                align: 'center',
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
                blur: '',
                bright: '',
                contrast: '',
                saturation: '',
                hue: '',
                blurH: '',
                brightH: '',
                contrastH: '',
                saturationH: '',
                hueH: ''
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
            'gradientLocationOne': "",
            'gradientColorTwo': '',
            'gradientLocationTwo': '',
            'gradientAngle': '',
            'gradientPosition': '',
            'gradientType': ''
        }
    },
    modalShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
            'position': ' '
        }
    },
    triggerShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
            'position': ' '
        }
    },
    triggerTextShadow: {
        type: "object",
        default: {
            'color': '',
            'blur': '',
            'horizontal': '',
            'vertical': '',
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
            'letterSpacing': '',
            'fontFamily': '',
            'lineHeight': '',
            'textDecoration': '',
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
            'letterSpacing': '',
            'fontFamily': '',
            'lineHeight': '',
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
            'letterSpacing': '',
            'fontFamily': '',
            'lineHeight': '',
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
            'letterSpacing': '',
            'fontFamily': '',
            'lineHeight': '',
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
}
export default attributes;