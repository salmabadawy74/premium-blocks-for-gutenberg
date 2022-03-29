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


    const mainClasses = classnames(className, 'premium-container');

    return (
        <div id={`premium-modal-box-${block_id}`} className={classnames(className, "premium-modal-box")} data-trigger={triggerSettings[0].triggerType}>
            {
                triggerSettings[0].triggerType === "button" && (
                    <div className={`premium-modal-trigger-container`} style={{ textAlign: triggerSettings[0].align }}>
                        <button className={`premium-button__${triggerSettings[0].btnSize}`} style={{
                            backgroundColor: triggerStyles[0].triggerBack,
                            borderStyle: triggerStyles[0].borderType,
                            borderTop: `${triggerBorderTop}px`,
                            borderRight: `${triggerBorderRight}px`,
                            borderBottom: `${triggerBorderBottom}px`,
                            borderLeft: `${triggerBorderLeft}px`,
                            borderColor: triggerStyles[0].borderColor,
                            borderRadius: triggerStyles[0].borderRadius,
                            boxShadow: `${triggerStyles[0].triggerShadowHorizontal}px ${triggerStyles[0].triggerShadowVertical}px ${triggerStyles[0].triggerShadowBlur}px ${triggerStyles[0].triggerShadowColor} ${triggerStyles[0].triggerShadowPosition}`,
                        }}>
                            {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "before" && <i className={triggerSettings[0].icon} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginRight: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }}></i>}
                            <span style={{ color: triggerStyles[0].color, fontFamily: triggerStyles[0].triggerFamily, fontWeight: triggerStyles[0].triggerWeight, fontStyle: triggerStyles[0].triggerStyle, letterSpacing: triggerStyles[0].triggerSpacing }}> {triggerSettings[0].btnText}</span>
                            {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "after" && <i className={triggerSettings[0].icon} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginLeft: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }} ></i>}
                        </button>
                    </div>
                )
            }

            <div className="premium-popup__modal_wrap" style={{ display: 'none' }} role="dialog">
                <div role="presentation" className="premium-popup__modal_wrap_overlay" >
                </div>
                <div className={`premium-popup__modal_content animated animation-${contentStyles[0].animationType} animation-${contentStyles[0].animationSpeed}`}
                    data-delay={contentStyles[0].animationDelay}
                    data-animation={`${contentStyles[0].animationType} ${contentStyles[0].animationSpeed}`}
                    style={{
                        borderStyle: `${modalStyles[0].borderType}`,
                        borderColor: `${modalStyles[0].borderColor}`,
                        borderTop: `${modalBorderTop}px`,
                        borderRight: `${modalBorderRight}px`,
                        borderBottom: `${modalBorderBottom}px`,
                        borderLeft: `${modalBorderLeft}px`,
                        borderRadius: `${modalStyles[0].borderRadius}px`,
                        boxShadow: `${modalStyles[0].modalShadowHorizontal}px ${modalStyles[0].modalShadowVertical}px ${modalStyles[0].modalShadowBlur}px ${modalStyles[0].modalShadowColor} ${modalStyles[0].modalShadowPosition}`,
                    }}>
                    {contentStyles[0].showHeader && <div className={`premium-modal-box-modal-header`} style={{
                        backgroundColor: headerStyles[0].backColor,
                        borderStyle: headerStyles[0].borderType,
                        borderTop: `${headerBorderTop}px`,
                        borderRight: `${headerBorderRight}px`,
                        borderBottom: `${headerBorderBottom}px`,
                        borderLeft: `${headerBorderLeft}px`,
                        borderColor: `${headerStyles[0].borderColor}`,
                        borderRadius: `${headerStyles[0].borderRadius}`,
                    }}>
                        <h3 className={`premium-modal-box-modal-title`} style={{
                            color: headerStyles[0].color,
                            fontFamily: headerStyles[0].headerFamily,
                            fontStyle: headerStyles[0].headerStyle,
                            letterSpacing: headerStyles[0].headerSpacing,
                            fontWeight: headerStyles[0].headerWeight,
                        }}>
                            {contentStyles[0].iconType === "icon" && <i className={contentStyles[0].contentIcon}></i>}
                            {contentStyles[0].iconType === "image" && <img src={contentStyles[0].contentImgURL}></img>}
                            {contentStyles[0].iconType === "lottie" && <div className={`premium-lottie-animation`}
                                data-lottieurl={contentStyles[0].lottieURL}
                                data-loop={contentStyles[0].loopLottie}
                                data-reverse={contentStyles[0].reverseLottie}
                            ></div>}
                            {contentStyles[0].titleText}
                        </h3>
                        {contentStyles[0].showUpperClose && contentStyles[0].showHeader && (<div className="premium-modal-box-close-button-container" style={{
                            backgroundColor: `${upperStyles[0].backColor}`,
                            borderStyle: `${upperStyles[0].borderType}`,
                            borderTop: `${upperBorderTop}px`,
                            borderRight: `${upperBorderRight}px`,
                            borderBottom: `${upperBorderBottom}px`,
                            borderLeft: `${upperBorderLeft}px`,
                            borderColor: `${upperStyles[0].borderColor}`,
                            borderRadius: `${upperStyles[0].borderRadius}`,

                        }}>
                            <button type="button" className="premium-modal-box-modal-close" style={{
                                fontSize: `${upperStyles[0].iconWidth}${upperStyles[0].iconWidthUnit}`,
                                color: `${upperStyles[0].color}`,

                            }} data-dismiss="premium-modal" >×</button>
                        </div>)}
                    </div>}
                    <div className={`premium-modal-box-modal-body`} style={{
                        color: modalStyles[0].textColor,
                        background: modalStyles[0].textBackColor,
                        fontStyle: modalStyles[0].modalStyle,
                        fontWeight: modalStyles[0].modalWeight,
                        fontFamily: modalStyles[0].modalFamily,
                        letterSpacing: modalStyles[0].modalSpacing,

                    }}>
                        {modalStyles[0].contentType === "text" ? <p  >{modalStyles[0].contentText}</p> : <InnerBlocks />}

                    </div>
                    {contentStyles[0].showLowerClose && (<div className={`premium-modal-box-modal-footer`} style={{
                        backgroundColor: modalStyles[0].footerBackColor
                    }}>
                        <button className={`premium-modal-box-modal-lower-close`} role="button"
                            data-dismiss="premium-modal"
                            style={{
                                fontStyle: lowerStyles[0].lowerStyle,
                                fontWeight: lowerStyles[0].lowerWeight,
                                letterSpacing: lowerStyles[0].lowerSpacing,
                                width: `${lowerStyles[0].iconWidth}${lowerStyles[0].iconWidthUnit}`,
                                color: `${lowerStyles[0].color}`,
                                backgroundColor: `${lowerStyles[0].backColor}`,
                                borderStyle: `${lowerStyles[0].borderType}`,
                                borderTop: `${lowerBorderTop}px`,
                                borderRight: `${lowerBorderRight}px`,
                                borderBottom: `${lowerBorderBottom}px`,
                                borderLeft: `${lowerBorderLeft}px`,
                                borderColor: `${lowerStyles[0].borderColor}`,
                                borderRadius: `${lowerStyles[0].borderRadius}`,
                            }}
                        >
                            {contentStyles[0].lowerCloseText}
                        </button>
                    </div>)}
                </div>
            </div>
        </div>
    )
};

export default save;