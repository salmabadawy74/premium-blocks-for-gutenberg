const { __ } = wp.i18n;
import classnames from "classnames"

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

const newAttributes = {
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

const deprecated = [
    {
        attributes: Object.assign(attributes, newAttributes),
        isEligible() {
            return true;
        },
        migrate: (attributes) => {
            let newAttributes = {
                triggerPadding: {
                    "Desktop": {
                        top: attributes.triggerPaddingT || '',
                        right: attributes.triggerPaddingR || '',
                        bottom: attributes.triggerPaddingB || '',
                        left: attributes.triggerPaddingL || ''
                    },
                    "Tablet": {
                        top: attributes.triggerPaddingTTablet || '',
                        right: attributes.triggerPaddingRTablet || '',
                        bottom: attributes.triggerPaddingBTablet || '',
                        left: attributes.triggerPaddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes.triggerPaddingTMobile || '',
                        right: attributes.triggerPaddingRMobile || '',
                        bottom: attributes.triggerPaddingBMobile || '',
                        left: attributes.triggerPaddingLMobile || ''
                    },
                    "unit": "px"
                },
                upperPadding: {
                    "Desktop": {
                        top: attributes.upperPaddingT || '',
                        right: attributes.upperPaddingR || '',
                        bottom: attributes.upperPaddingB || '',
                        left: attributes.upperPaddingL || ''
                    },
                    "Tablet": {
                        top: attributes.upperPaddingTTablet || '',
                        right: attributes.upperPaddingRTablet || '',
                        bottom: attributes.upperPaddingBTablet || '',
                        left: attributes.upperPaddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes.upperPaddingTMobile || '',
                        right: attributes.upperPaddingRMobile || '',
                        bottom: attributes.upperPaddingBMobile || '',
                        left: attributes.upperPaddingLMobile || ''
                    },
                    "unit": "px"
                },
                lowerPadding: {
                    "Desktop": {
                        top: attributes.lowerPaddingT || '',
                        right: attributes.lowerPaddingR || '',
                        bottom: attributes.lowerPaddingB || '',
                        left: attributes.lowerPaddingL || ''
                    },
                    "Tablet": {
                        top: attributes.lowerPaddingTTablet || '',
                        right: attributes.lowerPaddingRTablet || '',
                        bottom: attributes.lowerPaddingBTablet || '',
                        left: attributes.lowerPaddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes.lowerPaddingTMobile || '',
                        right: attributes.lowerPaddingRMobile || '',
                        bottom: attributes.lowerPaddingBMobile || '',
                        left: attributes.lowerPaddingLMobile || ''
                    },
                    "unit": "px"
                },
                modalPadding: {
                    "Desktop": {
                        top: attributes.modalPaddingT || '',
                        right: attributes.modalPaddingR || '',
                        bottom: attributes.modalPaddingB || '',
                        left: attributes.modalPaddingL || ''
                    },
                    "Tablet": {
                        top: attributes.modalPaddingTTablet || '',
                        right: attributes.modalPaddingRTablet || '',
                        bottom: attributes.modalPaddingBTablet || '',
                        left: attributes.modalPaddingLTablet || ''
                    },
                    "Mobile": {
                        top: attributes.modalPaddingTMobile || '',
                        right: attributes.modalPaddingRMobile || '',
                        bottom: attributes.modalPaddingBMobile || '',
                        left: attributes.modalPaddingLMobile || ''
                    },
                    "unit": "px"
                },
                modalMargin: {
                    "Desktop": {
                        top: attributes.modalMarginT || '',
                        right: attributes.modalMarginR || '',
                        bottom: attributes.modalMarginB || '',
                        left: attributes.modalMarginL || ''
                    },
                    "Tablet": {
                        top: attributes.modalMarginTTablet || '',
                        right: attributes.modalMarginRTablet || '',
                        bottom: attributes.modalMarginBTablet || '',
                        left: attributes.modalMarginLTablet || ''
                    },
                    "Mobile": {
                        top: attributes.modalMarginTMobile || '',
                        right: attributes.modalMarginRMobile || '',
                        bottom: attributes.modalMarginBMobile || '',
                        left: attributes.modalMarginLMobile || ''
                    },
                    "unit": "px"
                }
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
            const { className } = props;

            const {
                block_id,
                contentStyles,
                triggerSettings,
                triggerStyles,
                triggerBorderTop,
                triggerBorderRight,
                triggerBorderBottom,
                triggerBorderLeft,
                headerStyles,
                headerBorderTop,
                headerBorderRight,
                headerBorderBottom,
                headerBorderLeft,
                upperStyles,
                upperBorderTop,
                upperBorderRight,
                upperBorderBottom,
                upperBorderLeft,
                lowerStyles,
                lowerBorderTop,
                lowerBorderRight,
                lowerBorderBottom,
                lowerBorderLeft,
                modalStyles,
                backgroundType,
                modalBorderTop,
                modalBorderRight,
                modalBorderBottom,
                modalBorderLeft,
            } = props.attributes;
            const renderCss = (
                <style>
                    {`
            #premium-modal-box-${block_id} .premium-modal-trigger-container button:hover {
              background-color: ${triggerStyles[0].triggerHoverBack} !important;
              border-style: ${triggerStyles[0].borderTypeH} !important;
            
              border-color: ${triggerStyles[0].borderColorH} !important;
              border-radius: ${triggerStyles[0].borderRadiusH}px !important;
            }
            #premium-modal-box-${block_id} .premium-modal-trigger-container button:hover i{
                color:${triggerStyles[0].iconHoverColor} !important;
            }
            #premium-modal-box-${block_id} .premium-modal-trigger-container button:hover span{
                color:${triggerStyles[0].hoverColor} !important;
            }
             #premium-modal-box-${block_id} .premium-modal-trigger-container:hover .premium-modal-trigger-text {
                color:${triggerStyles[0].hoverColor} !important;
            }
            #premium-modal-box-${block_id} .premium-modal-trigger-container .premium-lottie-animation{
            filter: brightness( ${triggerStyles[0].bright}% ) contrast( ${triggerStyles[0].contrast}% ) saturate( ${triggerStyles[0].saturation}% ) blur( ${triggerStyles[0].blur}px ) hue-rotate( ${triggerStyles[0].hue}deg );
            }
            #premium-modal-box-${block_id} .premium-modal-trigger-container:hover .premium-lottie-animation{
            filter: brightness( ${triggerStyles[0].brightH}% ) contrast( ${triggerStyles[0].contrastH}% ) saturate( ${triggerStyles[0].saturationH}% ) blur( ${triggerStyles[0].blurH}px ) hue-rotate( ${triggerStyles[0].hueH}deg ) !important;
            }
            #premium-modal-box-${block_id} .premium-modal-trigger-container img:hover {
              border-style: ${triggerStyles[0].borderTypeH} !important;
              border-color: ${triggerStyles[0].borderColorH} !important;
              border-radius: ${triggerStyles[0].borderRadiusH}px !important;
            }
             #premium-modal-box-${block_id} .premium-modal-trigger-container:hover .premium-modal-trigger-text {
              border-style: ${triggerStyles[0].borderTypeH} !important;
              border-color: ${triggerStyles[0].borderColorH} !important;
              border-radius: ${triggerStyles[0].borderRadiusH}px !important;
            }

        `}
                </style>
            );

            let btnGrad, btnGrad2, btnbg;
            if (undefined !== backgroundType && 'gradient' === backgroundType) {
                btnGrad = ('transparent' === modalStyles[0].containerBack || undefined === modalStyles[0].containerBack ? 'rgba(255,255,255,0)' : modalStyles[0].containerBack);
                btnGrad2 = (undefined !== modalStyles[0].gradientColorTwo && undefined !== modalStyles[0].gradientColorTwo && '' !== modalStyles[0].gradientColorTwo ? modalStyles[0].gradientColorTwo : '#777');
                if ('radial' === modalStyles[0].gradientType) {
                    btnbg = `radial-gradient(at ${modalStyles[0].gradientPosition}, ${btnGrad} ${modalStyles[0].gradientLocationOne}%, ${btnGrad2} ${modalStyles[0].gradientLocationTwo}%)`;
                } else if ('radial' !== modalStyles[0].gradientType) {
                    btnbg = `linear-gradient(${modalStyles[0].gradientAngle}deg, ${btnGrad} ${modalStyles[0].gradientLocationOne}%, ${btnGrad2} ${modalStyles[0].gradientLocationTwo}%)`;
                }
            } else {
                btnbg = modalStyles[0].backgroundImageURL ? `url('${modalStyles[0].backgroundImageURL}')` : ''
            }

            return (
                <div id={`premium-modal-box-${block_id}`} className={classnames(className, "premium-modal-box")} data-trigger={triggerSettings[0].triggerType}>
                    {renderCss}
                    <div className={`premium-modal-trigger-container`} style={{ textAlign: triggerSettings[0].align }}>
                        {(triggerSettings[0].triggerType === "button") && <button className={` premium-modal-trigger-btn premium-button__${triggerSettings[0].btnSize} `} style={{
                            backgroundColor: triggerStyles[0].triggerBack,
                            borderStyle: triggerStyles[0].borderType,
                            borderTopWidth: `${triggerBorderTop}px`,
                            borderRightWidth: `${triggerBorderRight}px`,
                            borderBottomWidth: `${triggerBorderBottom}px`,
                            borderLeftWidth: `${triggerBorderLeft}px`,
                            borderColor: triggerStyles[0].borderColor,
                            borderRadius: `${triggerStyles[0].borderRadius}px`,
                            boxShadow: `${triggerStyles[0].triggerShadowHorizontal}px ${triggerStyles[0].triggerShadowVertical}px ${triggerStyles[0].triggerShadowBlur}px ${triggerStyles[0].triggerShadowColor} ${triggerStyles[0].triggerShadowPosition}`,
                        }}>
                            {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "before" && <i className={` premium-modal-box-icon ${triggerSettings[0].icon}`} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginRight: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }}></i>}
                            <span style={{ color: triggerStyles[0].color, fontFamily: triggerStyles[0].triggerFamily, fontWeight: triggerStyles[0].triggerWeight, fontStyle: triggerStyles[0].triggerStyle, letterSpacing: triggerStyles[0].triggerSpacing }}> {triggerSettings[0].btnText}</span>
                            {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "after" && <i className={`premium-modal-box-icon ${triggerSettings[0].icon}`} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginLeft: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }} ></i>}
                        </button>
                        }
                        {triggerSettings[0].triggerType === "image" && (
                            <img src={triggerSettings[0].triggerImgURL} className={`premium-modal-trigger-img`}
                                style={{
                                    borderStyle: triggerStyles[0].borderType,
                                    borderTopWidth: `${triggerBorderTop}px`,
                                    borderRightWidth: `${triggerBorderRight}px`,
                                    borderBottomWidth: `${triggerBorderBottom}px`,
                                    borderLeftWidth: `${triggerBorderLeft}px`,
                                    borderColor: triggerStyles[0].borderColor,
                                    borderRadius: `${triggerStyles[0].borderRadius}px`,
                                    boxShadow: `${triggerStyles[0].triggerShadowHorizontal}px ${triggerStyles[0].triggerShadowVertical}px ${triggerStyles[0].triggerShadowBlur}px ${triggerStyles[0].triggerShadowColor} ${triggerStyles[0].triggerShadowPosition}`,
                                }} />
                        )
                        }
                        {triggerSettings[0].triggerType === "text" && (
                            <span className={`premium-modal-trigger-text`} style={{
                                color: triggerStyles[0].color,
                                borderStyle: triggerStyles[0].borderType,
                                borderTopWidth: `${triggerBorderTop}px`,
                                borderRightWidth: `${triggerBorderRight}px`,
                                borderBottomWidth: `${triggerBorderBottom}px`,
                                borderLeftWidth: `${triggerBorderLeft}px`,
                                borderColor: triggerStyles[0].borderColor,
                                borderRadius: `${triggerStyles[0].borderRadius}px`,
                                textShadow: `${triggerStyles[0].textShadowHorizontal}px ${triggerStyles[0].textShadowVertical}px ${triggerStyles[0].textShadowBlur}px ${triggerStyles[0].textShadowColor}`,
                                fontFamily: triggerStyles[0].triggerFamily,
                                fontWeight: triggerStyles[0].triggerWeight,
                                fontStyle: triggerStyles[0].triggerStyle,
                                letterSpacing: triggerStyles[0].triggerSpacing
                            }}>
                                {triggerSettings[0].triggerText}
                            </span>
                        )}
                        {triggerSettings[0].triggerType === "lottie" && (
                            <div className={`premium-lottie-animation`}
                                data-lottieurl={triggerSettings[0].lottieTriggerURL}
                                data-loop={triggerSettings[0].triggerLoopLottie}
                                data-reverse={triggerSettings[0].triggerReverseLottie}
                                data-trigger={triggerSettings[0].triggerPlayLottie ? "hover" : "none"}
                            >
                            </div>
                        )}
                    </div>
                    <div className="premium-popup__modal_wrap" style={{ display: "none" }} role="dialog">
                        <div role="presentation" className="premium-popup__modal_wrap_overlay" style={{
                            backgroundColor: backgroundType === "solid" ? modalStyles[0].containerBack : '',
                            backgroundImage: btnbg,
                            backgroundRepeat: modalStyles[0].backgroundRepeat,
                            backgroundPosition: modalStyles[0].backgroundPosition,
                            backgroundSize: modalStyles[0].backgroundSize,
                            backgroundAttachment: modalStyles[0].fixed ? "fixed" : "unset",
                        }} >
                        </div>
                        <div className={`premium-popup__modal_content animated animation-${contentStyles[0].animationType} animation-${contentStyles[0].animationSpeed}`}
                            data-delay={triggerSettings[0].delayTime}
                            data-animation={`${contentStyles[0].animationType} ${contentStyles[0].animationSpeed}`}
                            style={{

                                borderStyle: `${modalStyles[0].borderType}`,
                                borderColor: `${modalStyles[0].borderColor}`,
                                borderTopWidth: `${modalBorderTop}px`,
                                borderRightWidth: `${modalBorderRight}px`,
                                borderBottomWidth: `${modalBorderBottom}px`,
                                borderLeftWidth: `${modalBorderLeft}px`,
                                borderRadius: `${modalStyles[0].borderRadius}px`,
                                boxShadow: `${modalStyles[0].modalShadowHorizontal}px ${modalStyles[0].modalShadowVertical}px ${modalStyles[0].modalShadowBlur}px ${modalStyles[0].modalShadowColor} ${modalStyles[0].modalShadowPosition}`,
                            }}>
                            {contentStyles[0].showHeader && <div className={`premium-modal-box-modal-header`} style={{
                                backgroundColor: headerStyles[0].backColor,
                                borderStyle: headerStyles[0].borderType,
                                borderTopWidth: `${headerBorderTop}px`,
                                borderRightWidth: `${headerBorderRight}px`,
                                borderBottomWidth: `${headerBorderBottom}px`,
                                borderLeftWidth: `${headerBorderLeft}px`,
                                borderColor: `${headerStyles[0].borderColor}`,
                                borderRadius: `${headerStyles[0].borderRadius}px`,
                            }}>
                                <h3 className={`premium-modal-box-modal-title`} style={{
                                    color: headerStyles[0].color,
                                    fontFamily: headerStyles[0].headerFamily,
                                    fontStyle: headerStyles[0].headerStyle,
                                    letterSpacing: headerStyles[0].headerSpacing,
                                    fontWeight: headerStyles[0].headerWeight,
                                }}>
                                    {contentStyles[0].iconType === "icon" && <i className={contentStyles[0].contentIcon}  ></i>}
                                    {contentStyles[0].iconType === "image" && <img src={contentStyles[0].contentImgURL} style={{
                                    }}></img>}
                                    {contentStyles[0].iconType === "lottie" &&
                                        <div className={`premium-lottie-animation`}
                                            data-lottieurl={contentStyles[0].lottieURL}
                                            data-loop={contentStyles[0].loopLottie}
                                            data-reverse={contentStyles[0].reverseLottie}
                                            data-trigger={"none"}
                                        >
                                        </div>
                                    }
                                    {contentStyles[0].titleText}
                                </h3>
                                {contentStyles[0].showUpperClose && contentStyles[0].showHeader && (<div className="premium-modal-box-close-button-container" style={{
                                    backgroundColor: `${upperStyles[0].backColor}`,
                                    borderStyle: `${upperStyles[0].borderType}`,
                                    borderTopWidth: `${upperBorderTop}px`,
                                    borderRightWidth: `${upperBorderRight}px`,
                                    borderBottomWidth: `${upperBorderBottom}px`,
                                    borderLeftWidth: `${upperBorderLeft}px`,
                                    borderColor: `${upperStyles[0].borderColor}`,
                                    borderRadius: `${upperStyles[0].borderRadius}px`,

                                }}>
                                    <button type="button" className="premium-modal-box-modal-close close-button"
                                        style={{
                                            fontSize: `${upperStyles[0].iconWidth}${upperStyles[0].iconWidthUnit}`,
                                            color: `${upperStyles[0].color}`,

                                        }} data-dismiss="premium-modal" >×</button>
                                </div>)}
                            </div>}
                            <div className={`premium-modal-box-modal-body`} style={{
                                background: modalStyles[0].textBackColor,
                            }}>
                                {modalStyles[0].contentType === "text" ? <p style={{
                                    color: modalStyles[0].textColor,
                                    fontWeight: modalStyles[0].modalWeight,
                                    fontFamily: modalStyles[0].modalFamily,
                                    letterSpacing: modalStyles[0].modalSpacing,
                                    fontStyle: modalStyles[0].modalStyle,
                                }} >{modalStyles[0].contentText}</p> : <InnerBlocks.Content />}

                            </div>
                            {contentStyles[0].showLowerClose && (<div className={`premium-modal-box-modal-footer`} style={{
                                backgroundColor: modalStyles[0].footerBackColor
                            }}>
                                <button className={`premium-modal-box-modal-lower-close close-button`} role="button" data-dismiss="premium-modal"
                                    style={{
                                        fontStyle: lowerStyles[0].lowerStyle,
                                        fontWeight: lowerStyles[0].lowerWeight,
                                        letterSpacing: lowerStyles[0].lowerSpacing,
                                        width: `${lowerStyles[0].iconWidth}${lowerStyles[0].iconWidthUnit}`,
                                        color: `${lowerStyles[0].color}`,
                                        backgroundColor: `${lowerStyles[0].backColor}`,
                                        borderStyle: `${lowerStyles[0].borderType}`,
                                        borderTopWidth: `${lowerBorderTop}px`,
                                        borderRightWidth: `${lowerBorderRight}px`,
                                        borderBottomWidth: `${lowerBorderBottom}px`,
                                        borderLeftWidth: `${lowerBorderLeft}px`,
                                        borderColor: `${lowerStyles[0].borderColor}`,
                                        borderRadius: `${lowerStyles[0].borderRadius}px`,
                                    }}
                                >
                                    {contentStyles[0].lowerCloseText}
                                </button>
                            </div>)}
                        </div>
                    </div>
                </div >
            )
        }
    }
];
export default deprecated;