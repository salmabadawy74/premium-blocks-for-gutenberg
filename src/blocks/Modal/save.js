import classnames from 'classnames'
import { gradientBackground } from '../../components/HelperFunction';
const { InnerBlocks } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        block_id,
        contentStyles,
        triggerSettings,
        triggerStyles,
        triggerBorder,
        headerStyles,
        headerBorder,
        upperStyles,
        upperBorder,
        lowerStyles,
        lowerBorder,
        modalStyles,
        modalBorder,
        triggerBorderH,
        modalBackground,
        triggerShadow,
        triggerTextShadow,
        modalShadow,
        triggerTypography,
        headerTypography,
        lowerTypography,
        modalTypography,
        iconSize,
        imageWidth,
        modalWidth,
        modalHeight
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
              border-style: ${triggerBorderH.borderType} !important;
              border-color: ${triggerBorderH.borderColor} !important;
            }
             #premium-modal-box-${block_id} .premium-modal-trigger-container:hover .premium-modal-trigger-text {
                border-style: ${triggerBorderH.borderType} !important;
                border-color: ${triggerBorderH.borderColor} !important;
            }

        `}
        </style>
    );

    return (
        <div id={`premium-modal-box-${block_id}`} className={classnames(className, "premium-modal-box")} data-trigger={triggerSettings[0].triggerType}>
            {renderCss}
            <div className={`premium-modal-trigger-container`} style={{ textAlign: triggerSettings[0].align }}>
                {(triggerSettings[0].triggerType === "button") && <button className={` premium-modal-trigger-btn premium-button__${triggerSettings[0].btnSize} `} style={{
                    backgroundColor: triggerStyles[0].triggerBack,
                    borderStyle: triggerBorder.borderType,
                    borderColor: triggerBorder.borderColor,
                    boxShadow: `${triggerShadow.horizontal}px ${triggerShadow.vertical}px ${triggerShadow.blur}px ${triggerShadow.color} ${triggerShadow.position}`,
                }}>
                    {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "before" && <i className={` premium-modal-box-icon ${triggerSettings[0].icon}`} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginRight: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }}></i>}
                    <span style={{
                        color: triggerStyles[0].color,
                        fontFamily: triggerTypography.fontFamily,
                        fontWeight: triggerTypography.fontWeight,
                        fontStyle: triggerTypography.fontStyle,
                        letterSpacing: triggerTypography.letterSpacing
                    }}> {triggerSettings[0].btnText}</span>
                    {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "after" && <i className={`premium-modal-box-icon ${triggerSettings[0].icon}`} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginLeft: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }} ></i>}
                </button>
                }
                {triggerSettings[0].triggerType === "image" && (
                    <img src={triggerSettings[0].triggerImgURL} className={`premium-modal-trigger-img`}
                        style={{
                            borderStyle: triggerBorder.borderType,
                            borderColor: triggerBorder.borderColor,
                            boxShadow: `${triggerShadow.horizontal}px ${triggerShadow.vertical}px ${triggerShadow.blur}px ${triggerShadow.color} ${triggerShadow.position}`,
                        }} />
                )
                }
                {triggerSettings[0].triggerType === "text" && (
                    <span className={`premium-modal-trigger-text`} style={{
                        color: triggerStyles[0].color,
                        borderStyle: triggerBorder.borderType,
                        borderColor: triggerBorder.borderColor,
                        textShadow: `${triggerTextShadow.horizontal}px ${triggerTextShadow.vertical}px ${triggerTextShadow.blur}px ${triggerTextShadow.color}`,
                        fontFamily: triggerTypography.fontFamily,
                        fontWeight: triggerTypography.fontWeight,
                        fontStyle: triggerTypography.fontStyle,
                        letterSpacing: triggerTypography.letterSpacing
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
                    ...gradientBackground(modalBackground)
                }} >
                </div>
                <div className={`premium-popup__modal_content animated animation-${contentStyles[0].animationType} animation-${contentStyles[0].animationSpeed}`}
                    data-delay={triggerSettings[0].delayTime}
                    data-animation={`${contentStyles[0].animationType} ${contentStyles[0].animationSpeed}`}
                    style={{

                        borderStyle: `${modalBorder.borderType}`,
                        borderColor: `${modalBorder.borderColor}`,
                        boxShadow: `${modalShadow.horizontal}px ${modalShadow.vertical}px ${modalShadow.blur}px ${modalShadow.color} ${modalShadow.position}`,
                    }}>
                    {contentStyles[0].showHeader && <div className={`premium-modal-box-modal-header`} style={{
                        backgroundColor: headerStyles[0].backColor,
                        borderStyle: headerBorder.borderType,
                        borderColor: `${headerBorder.borderColor}`,
                    }}>
                        <h3 className={`premium-modal-box-modal-title`} style={{
                            color: headerStyles[0].color,
                            fontFamily: headerTypography.fontFamily,
                            fontWeight: headerTypography.fontWeight,
                            fontStyle: headerTypography.fontStyle,
                            letterSpacing: headerTypography.letterSpacing
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
                            borderStyle: `${upperBorder.borderType}`,
                            borderColor: `${upperBorder.borderColor}`,

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
                            fontFamily: modalTypography.fontFamily,
                            fontWeight: modalTypography.fontWeight,
                            fontStyle: modalTypography.fontStyle,
                            letterSpacing: modalTypography.letterSpacing
                        }} >{modalStyles[0].contentText}</p> : <InnerBlocks.Content />}

                    </div>
                    {contentStyles[0].showLowerClose && (<div className={`premium-modal-box-modal-footer`} style={{
                        backgroundColor: modalStyles[0].footerBackColor
                    }}>
                        <button className={`premium-modal-box-modal-lower-close close-button`} role="button" data-dismiss="premium-modal"
                            style={{
                                fontWeight: lowerTypography.fontWeight,
                                fontStyle: lowerTypography.fontStyle,
                                letterSpacing: lowerTypography.letterSpacing,
                                width: `${lowerStyles[0].iconWidth}${lowerStyles[0].iconWidthUnit}`,
                                color: `${lowerStyles[0].color}`,
                                backgroundColor: `${lowerStyles[0].backColor}`,
                                borderStyle: `${lowerBorder.borderType}`,
                                borderColor: `${lowerBorder.borderColor}`,
                            }}
                        >
                            {contentStyles[0].lowerCloseText}
                        </button>
                    </div>)}
                </div>
            </div>
        </div >
    )
};

export default save;