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
                triggerSizeUnit: 'px',
                triggerSize: '',
                triggerSizeMobile: '',
                triggerSizeTablet: '',
                triggerFamily: '',
                triggerWeight: '',
                triggerStyle: '',
                triggerSpacing: '',
                triggerUpper: '',
                triggerBack: '',
                borderType: 'none',
                borderColor: '',
                borderRadius: '',
                triggerHoverBack: '',
                borderTypeH: 'none',
                borderColorH: '',
                borderRadiusH: '',
                triggerShadowColor: '',
                triggerShadowBlur: '',
                triggerShadowHorizontal: '',
                triggerShadowVertical: '',
                triggerShadowPosition: '',
                textShadowColor: '',
                textShadowBlur: '',
                textShadowHorizontal: '',
                textShadowVertical: '',
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
    triggerBorderTop: {
        type: 'number'
    },
    triggerBorderRight: {
        type: 'number'
    },
    triggerBorderBottom: {
        type: 'number'
    },
    triggerBorderLeft: {
        type: 'number'
    },
    triggerBorderTopH: {
        type: 'number'
    },
    triggerBorderRightH: {
        type: 'number'
    },
    triggerBorderBottomH: {
        type: 'number'
    },
    triggerBorderLeftH: {
        type: 'number'
    },
    headerStyles: {
        type: 'array',
        default: [
            {
                color: '',
                backColor: '',
                headerSizeUnit: 'px',
                headerSize: '',
                headerSizeTablet: '',
                headerSizeMobile: '',
                headerFamily: 'Default',
                headerWeight: '',
                headerStyle: '',
                headerSpacing: '',
                headerUpper: '',
                borderType: 'none',
                borderColor: '',
                borderRadius: '',

            }
        ]
    },
    headerBorderTop: {
        type: 'number'
    },
    headerBorderRight: {
        type: 'number'
    },
    headerBorderBottom: {
        type: 'number'
    },
    headerBorderLeft: {
        type: 'number'
    },
    upperStyles: {
        type: "array",
        default: [{
            iconWidth: '',
            iconWidthUnit: 'px',
            color: '',
            backColor: '',
            borderType: 'none',
            borderColor: '',
            borderRadius: '',

        }]
    },
    upperBorderTop: {
        type: 'number'
    },
    upperBorderRight: {
        type: 'number'
    },
    upperBorderBottom: {
        type: 'number'
    },
    upperBorderLeft: {
        type: 'number'
    },
    lowerStyles: {
        type: 'array',
        default: [
            {
                lowerSizeUnit: 'px',
                lowerSize: '',
                lowerSizeMobile: '',
                lowerSizeTablet: '',
                lowerWeight: '',
                lowerStyle: '',
                lowerSpacing: '',
                iconWidth: '',
                iconWidthUnit: 'px',
                color: '',
                backColor: '',
                borderType: 'none',
                borderColor: '',
                borderRadius: '',
            }
        ]
    },
    lowerBorderTop: {
        type: 'number'
    },
    lowerBorderRight: {
        type: 'number'
    },
    lowerBorderBottom: {
        type: 'number'
    },
    lowerBorderLeft: {
        type: 'number'
    },
    modalStyles: {
        type: "array",
        default: [
            {
                contentType: 'text',
                contentText: __('Modal Box Content', 'premium-blocks-for-gutenberg'),
                textColor: '',
                textBackColor: '',
                modalSizeUnit: 'px',
                modalSize: '',
                modalSizeMobile: '',
                modalSizeTablet: '',
                modalFamily: '',
                modalWeight: '',
                modalStyle: '',
                modalSpacing: '',
                modalUpper: '',
                modalWidth: '',
                modalWidthTablet: '',
                modalWidthMobile: '',
                modalWidthUnit: 'px',
                modalHeight: '',
                modalHeightTablet: '',
                modalHeightMobile: '',
                modalHeightUnit: 'px',
                containerBack: '',
                backgroundImageID: '',
                backgroundImageURL: '',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
                fixed: false,
                gradientLocationOne: '0',
                gradientColorTwo: '',
                gradientLocationTwo: '100',
                gradientType: 'linear',
                gradientAngle: '180',
                gradientPosition: 'center center',
                gradientType: '',
                footerBackColor: '',
                borderType: 'none',
                borderColor: '',
                borderRadius: '',
                modalShadowColor: '',
                modalShadowBlur: '',
                modalShadowHorizontal: '',
                modalShadowVertical: '',
                modalShadowPosition: '',
            }
        ]
    },
    backgroundType: {
        type: "string"
    },
    modalBorderTop: {
        type: 'number'
    },
    modalBorderRight: {
        type: 'number'
    },
    modalBorderBottom: {
        type: 'number'
    },
    modalBorderLeft: {
        type: 'number'
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
    }

}
export default attributes;