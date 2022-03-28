const { __ } = wp.i18n;

const attributes = {
    block_id: {
        type: 'string'
    },
    contentStyles: {
        type: 'array',
        default: [
            {
                showHeader: false,
                iconType: 'none',
                contentIcon: '',
                contentImgID: '',
                contentImgURL: '',
                lottieURL: '',
                loopLottie: false,
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
                animationSpeed: '',
                animationDelay: ''
            }
        ]
    },
    triggerSettings: {
        type: "array",
        default: [
            {
                triggerType: 'button',
                btnText: 'Premium Blocks',
                showIcon: false,
                icon: '',
                iconPosition: 'before',
                iconSize: '',
                iconSpacing: '',
                btnSize: 'md',
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
                borderWidth: '',
                borderColor: '',
                borderRadius: '',
                triggerHoverBack: '',
                borderTypeH: 'none',
                borderWidthH: '',
                borderColorH: '',
                borderRadiusH: '',
                triggerShadowColor: '',
                triggerShadowBlur: '',
                triggerShadowHorizontal: '',
                triggerShadowVertical: '',
                triggerShadowPosition: ''
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
    triggerPaddingT: {
        type: 'number'
    },
    triggerPaddingR: {
        type: 'number'
    },
    triggerPaddingB: {
        type: 'number'
    },
    triggerPaddingL: {
        type: 'number'
    },
    triggerPaddingTTablet: {
        type: 'number'
    },
    triggerPaddingRTablet: {
        type: 'number'
    },
    triggerPaddingBTablet: {
        type: 'number'
    },
    triggerPaddingLTablet: {
        type: 'number'
    },
    triggerPaddingTMobile: {
        type: 'number'
    },
    triggerPaddingRMobile: {
        type: 'number'
    },
    triggerPaddingBMobile: {
        type: 'number'
    },
    triggerPaddingLMobile: {
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
    upperPaddingT: {
        type: 'number'
    },
    upperPaddingR: {
        type: 'number'
    },
    upperPaddingB: {
        type: 'number'
    },
    upperPaddingL: {
        type: 'number'
    },
    upperPaddingTTablet: {
        type: 'number'
    },
    upperPaddingRTablet: {
        type: 'number'
    },
    upperPaddingBTablet: {
        type: 'number'
    },
    upperPaddingLTablet: {
        type: 'number'
    },
    upperPaddingTMobile: {
        type: 'number'
    },
    upperPaddingRMobile: {
        type: 'number'
    },
    upperPaddingBMobile: {
        type: 'number'
    },
    upperPaddingLMobile: {
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
    lowerPaddingT: {
        type: 'number'
    },
    lowerPaddingR: {
        type: 'number'
    },
    lowerPaddingB: {
        type: 'number'
    },
    lowerPaddingL: {
        type: 'number'
    },
    lowerPaddingTTablet: {
        type: 'number'
    },
    lowerPaddingRTablet: {
        type: 'number'
    },
    lowerPaddingBTablet: {
        type: 'number'
    },
    lowerPaddingLTablet: {
        type: 'number'
    },
    lowerPaddingTMobile: {
        type: 'number'
    },
    lowerPaddingRMobile: {
        type: 'number'
    },
    lowerPaddingBMobile: {
        type: 'number'
    },
    lowerPaddingLMobile: {
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
                backgroundPosition: '',
                backgroundRepeat: '',
                backgroundSize: '',
                fixed: false,
                gradientLocationOne: '',
                gradientColorTwo: '',
                gradientLocationTwo: '',
                gradientAngle: '',
                gradientPosition: '',
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
    modalMarginT: {
        type: 'number'
    },
    modalMarginR: {
        type: 'number'
    },
    modalMarginB: {
        type: 'number'
    },
    modalMarginL: {
        type: 'number'
    },
    modalMarginTTablet: {
        type: 'number'
    },
    modalMarginRTablet: {
        type: 'number'
    },
    modalMarginBTablet: {
        type: 'number'
    },
    modalMarginLTablet: {
        type: 'number'
    },
    modalMarginTMobile: {
        type: 'number'
    },
    modalMarginRMobile: {
        type: 'number'
    },
    modalMarginBMobile: {
        type: 'number'
    },
    modalMarginLMobile: {
        type: 'number'
    },
    modalPaddingT: {
        type: 'number'
    },
    modalPaddingR: {
        type: 'number'
    },
    modalPaddingB: {
        type: 'number'
    },
    modalPaddingL: {
        type: 'number'
    },
    modalPaddingTTablet: {
        type: 'number'
    },
    modalPaddingRTablet: {
        type: 'number'
    },
    modalPaddingBTablet: {
        type: 'number'
    },
    modalPaddingLTablet: {
        type: 'number'
    },
    modalPaddingTMobile: {
        type: 'number'
    },
    modalPaddingRMobile: {
        type: 'number'
    },
    modalPaddingBMobile: {
        type: 'number'
    },
    modalPaddingLMobile: {
        type: 'number'
    },

}
export default attributes;