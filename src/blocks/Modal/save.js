import classnames from 'classnames'

const { InnerBlocks } = wp.blockEditor;

const save = props => {

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
};

export default save;