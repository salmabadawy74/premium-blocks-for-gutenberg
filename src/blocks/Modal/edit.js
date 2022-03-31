
import classnames from "classnames";
const { __ } = wp.i18n;
const { withSelect } = wp.data
import Lottie from 'react-lottie-with-segments';
import Inspector from "./inspector";
const { Fragment, useEffect, useRef } = wp.element;
const { InnerBlocks, MediaPlaceholder } = wp.blockEditor;

function getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
    if (device === 'Mobile') {
        if (undefined !== mobileSize && '' !== mobileSize) {
            return mobileSize;
        } else if (undefined !== tabletSize && '' !== tabletSize) {
            return tabletSize;
        }
    } else if (device === 'Tablet') {
        if (undefined !== tabletSize && '' !== tabletSize) {
            return tabletSize;
        }
    }
    return desktopSize;
}

const edit = props => {
    const closeButton = useRef(null)
    const triggerRef = useRef(null)
    const modalRef = useRef(null)
    const wrapRef = useRef(null)
    const upperCloseButton = useRef(null)
    const { isSelected, setAttributes, className } = props;
    const {
        block_id,
        contentStyles,
        triggerSettings,
        triggerStyles,
        triggerBorderTop,
        triggerBorderRight,
        triggerBorderBottom,
        triggerBorderLeft,
        triggerBorderTopH,
        triggerBorderRightH,
        triggerBorderBottomH,
        triggerBorderLeftH,
        triggerPaddingT,
        triggerPaddingR,
        triggerPaddingB,
        triggerPaddingL,
        triggerPaddingTTablet,
        triggerPaddingRTablet,
        triggerPaddingBTablet,
        triggerPaddingLTablet,
        triggerPaddingTMobile,
        triggerPaddingRMobile,
        triggerPaddingBMobile,
        triggerPaddingLMobile,
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
        upperPaddingT,
        upperPaddingR,
        upperPaddingB,
        upperPaddingL,
        upperPaddingTTablet,
        upperPaddingRTablet,
        upperPaddingBTablet,
        upperPaddingLTablet,
        upperPaddingTMobile,
        upperPaddingRMobile,
        upperPaddingBMobile,
        upperPaddingLMobile,
        lowerStyles,
        lowerBorderTop,
        lowerBorderRight,
        lowerBorderBottom,
        lowerBorderLeft,
        lowerPaddingT,
        lowerPaddingR,
        lowerPaddingB,
        lowerPaddingL,
        lowerPaddingTTablet,
        lowerPaddingRTablet,
        lowerPaddingBTablet,
        lowerPaddingLTablet,
        lowerPaddingTMobile,
        lowerPaddingRMobile,
        lowerPaddingBMobile,
        lowerPaddingLMobile,
        modalStyles,
        backgroundType,
        modalBorderTop,
        modalBorderRight,
        modalBorderBottom,
        modalBorderLeft,
        modalMarginT,
        modalMarginR,
        modalMarginB,
        modalMarginL,
        modalMarginTTablet,
        modalMarginRTablet,
        modalMarginBTablet,
        modalMarginLTablet,
        modalMarginTMobile,
        modalMarginRMobile,
        modalMarginBMobile,
        modalMarginLMobile,
        modalPaddingT,
        modalPaddingR,
        modalPaddingB,
        modalPaddingL,
        modalPaddingTTablet,
        modalPaddingRTablet,
        modalPaddingBTablet,
        modalPaddingLTablet,
        modalPaddingTMobile,
        modalPaddingRMobile,
        modalPaddingBMobile,
        modalPaddingLMobile
    } = props.attributes;

    useEffect(() => {
        setAttributes({ block_id: props.clientId })
    }, [])

    useEffect(() => {
        if (!triggerRef.current || !upperCloseButton) return null
        closeButton.current.addEventListener('click', () => {
            modalRef.current.style.display = "none"
        })
        upperCloseButton.current.addEventListener('click', () => {
            modalRef.current.style.display = "none"
        })
        wrapRef.current.addEventListener('click', () => {
            modalRef.current.style.display = "none"
        })
        triggerRef.current.addEventListener("click", () => {
            modalRef.current.style.display = "flex"
        })
    }, [props.attributes])


    const renderCss = (
        <style>
            {`
            #premium-modal-box-${block_id} .premium-modal-trigger-container button:hover {
              background-color: ${triggerStyles[0].triggerHoverBack} !important;
              border-style: ${triggerStyles[0].borderTypeH} !important;
              border-top-width: ${triggerBorderTopH}px !important;
              border-right-width: ${triggerBorderRightH}px !important;
              border-bottom-width: ${triggerBorderBottomH}px !important;
              border-left-width: ${triggerBorderLeftH}px !important;
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
              border-top-width: ${triggerBorderTopH}px !important;
              border-right-width: ${triggerBorderRightH}px !important;
              border-bottom-width: ${triggerBorderBottomH}px !important;
              border-left-width: ${triggerBorderLeftH}px !important;
              border-color: ${triggerStyles[0].borderColorH} !important;
              border-radius: ${triggerStyles[0].borderRadiusH}px !important;
            }
             #premium-modal-box-${block_id} .premium-modal-trigger-container:hover .premium-modal-trigger-text {
              border-style: ${triggerStyles[0].borderTypeH} !important;
              border-top-width: ${triggerBorderTopH}px !important;
              border-right-width: ${triggerBorderRightH}px !important;
              border-bottom-width: ${triggerBorderBottomH}px !important;
              border-left-width: ${triggerBorderLeftH}px !important;
              border-color: ${triggerStyles[0].borderColorH} !important;
              border-radius: ${triggerStyles[0].borderRadiusH}px !important;
            }

        `}
        </style>
    );
    const headerIconSize = getPreviewSize(props.deviceType, contentStyles[0].iconSize, contentStyles[0].iconSizeTablet, contentStyles[0].iconSizeMobile);
    const triggerFontSize = getPreviewSize(props.deviceType, triggerStyles[0].triggerSize, triggerStyles[0].triggerSizeTablet, triggerStyles[0].triggerSizeMobile);
    const triggerPaddingTop = getPreviewSize(props.deviceType, triggerPaddingT, triggerPaddingTTablet, triggerPaddingTMobile);
    const triggerPaddingRight = getPreviewSize(props.deviceType, triggerPaddingR, triggerPaddingRTablet, triggerPaddingRMobile);
    const triggerPaddingBottom = getPreviewSize(props.deviceType, triggerPaddingB, triggerPaddingBTablet, triggerPaddingBMobile);
    const triggerPaddingLeft = getPreviewSize(props.deviceType, triggerPaddingL, triggerPaddingLTablet, triggerPaddingLMobile);
    const headerFontSize = getPreviewSize(props.deviceType, headerStyles[0].headerSize, headerStyles[0].headerSizeTablet, headerStyles[0].headerSizeMobile);
    const upperPaddingTop = getPreviewSize(props.deviceType, upperPaddingT, upperPaddingTTablet, upperPaddingTMobile);
    const upperPaddingRight = getPreviewSize(props.deviceType, upperPaddingR, upperPaddingRTablet, upperPaddingRMobile);
    const upperPaddingBottom = getPreviewSize(props.deviceType, upperPaddingB, upperPaddingBTablet, upperPaddingBMobile);
    const upperPaddingLeft = getPreviewSize(props.deviceType, upperPaddingL, upperPaddingLTablet, upperPaddingLMobile);
    const lowerFontSize = getPreviewSize(props.deviceType, lowerStyles[0].lowerSize, lowerStyles[0].lowerSizeTablet, lowerStyles[0].lowerSizeMobile);
    const lowerPaddingTop = getPreviewSize(props.deviceType, lowerPaddingT, lowerPaddingTTablet, lowerPaddingTMobile);
    const lowerPaddingRight = getPreviewSize(props.deviceType, lowerPaddingR, lowerPaddingRTablet, lowerPaddingRMobile);
    const lowerPaddingBottom = getPreviewSize(props.deviceType, lowerPaddingB, lowerPaddingBTablet, lowerPaddingBMobile);
    const lowerPaddingLeft = getPreviewSize(props.deviceType, lowerPaddingL, lowerPaddingLTablet, lowerPaddingLMobile);
    const modalWidth = getPreviewSize(props.deviceType, modalStyles[0].modalWidth, modalStyles[0].modalWidthTablet, modalStyles[0].modalWidthMobile);
    const modalMaxHeight = getPreviewSize(props.deviceType, modalStyles[0].modalHeight, modalStyles[0].modalHeightTablet, modalStyles[0].modalHeightMobile);
    const modalFontSize = getPreviewSize(props.deviceType, modalStyles[0].modalSize, modalStyles[0].modalSizeTablet, modalStyles[0].modalSizeMobile);
    const modalPaddingTop = getPreviewSize(props.deviceType, modalPaddingT, modalPaddingTTablet, modalPaddingTMobile);
    const modalPaddingRight = getPreviewSize(props.deviceType, modalPaddingR, modalPaddingRTablet, modalPaddingRMobile);
    const modalPaddingBottom = getPreviewSize(props.deviceType, modalPaddingB, modalPaddingBTablet, modalPaddingBMobile);
    const modalPaddingLeft = getPreviewSize(props.deviceType, modalPaddingL, modalPaddingLTablet, modalPaddingLMobile);
    const modalMarginTop = getPreviewSize(props.deviceType, modalMarginT, modalMarginTTablet, modalMarginTMobile);
    const modalMarginRight = getPreviewSize(props.deviceType, modalMarginR, modalMarginRTablet, modalMarginRMobile);
    const modalMarginBottom = getPreviewSize(props.deviceType, modalMarginB, modalMarginBTablet, modalMarginBMobile);
    const modalMarginLeft = getPreviewSize(props.deviceType, modalMarginL, modalMarginLTablet, modalMarginLMobile);
    const triggerSize = getPreviewSize(props.deviceType, triggerSettings[0].imageWidth, triggerSettings[0].imageWidthTablet, triggerSettings[0].imageWidthMobile);

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
    return [
        isSelected && (
            <Inspector
                attributes={props.attributes}
                setAttributes={setAttributes}

            />
        ),
        renderCss,
        <div id={`premium-modal-box-${block_id}`} className={classnames(className, "premium-modal-box")} data-trigger={triggerSettings[0].triggerType}>
            <div className={`premium-modal-trigger-container`} style={{ textAlign: triggerSettings[0].align }}>
                {(triggerSettings[0].triggerType === "button" || triggerSettings[0].triggerType === "load") && <button className={` premium-modal-trigger-btn premium-button__${triggerSettings[0].btnSize} `} ref={triggerRef} style={{
                    fontSize: `${triggerFontSize}${triggerStyles[0].triggerSizeUnit}`,
                    paddingTop: `${triggerPaddingTop}px`,
                    paddingRight: `${triggerPaddingRight}px`,
                    paddingBottom: `${triggerPaddingBottom}px`,
                    paddingLeft: `${triggerPaddingLeft}px`,
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
                    {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "after" && <i className={` premium-modal-box-icon ${triggerSettings[0].icon}`} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginLeft: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }} ></i>}
                </button>
                }
                {triggerSettings[0].triggerType === "image" && (<Fragment>
                    {triggerSettings[0].triggerImgURL ? <img className={`premium-modal-trigger-img`} ref={triggerRef} src={triggerSettings[0].triggerImgURL} style={{
                        width: `${triggerSize}px`,
                        height: `${triggerSize}px`,
                        borderStyle: triggerStyles[0].borderType,
                        borderTopWidth: `${triggerBorderTop}px`,
                        borderRightWidth: `${triggerBorderRight}px`,
                        borderBottomWidth: `${triggerBorderBottom}px`,
                        borderLeftWidth: `${triggerBorderLeft}px`,
                        borderColor: triggerStyles[0].borderColor,
                        borderRadius: `${triggerStyles[0].borderRadius}px`,
                        boxShadow: `${triggerStyles[0].triggerShadowHorizontal}px ${triggerStyles[0].triggerShadowVertical}px ${triggerStyles[0].triggerShadowBlur}px ${triggerStyles[0].triggerShadowColor} ${triggerStyles[0].triggerShadowPosition}`,
                    }} /> : <MediaPlaceholder
                        labels={{
                            title: __('Premium Modal ', 'premium-blocks-for-gutenberg'),
                            instructions: __('Upload an image file, pick one from your media library, or add one with a URL.', 'premium-blocks-for-gutenberg')
                        }}
                        accept={['image']}
                        allowedTypes={['image']}
                        value={triggerSettings[0].triggerImgURL}
                        onSelectURL={(value) => saveTriggerSettings({ triggerImgURL: value })}
                        onSelect={media => {
                            saveTriggerSettings({
                                triggerImgID: media.id,
                                triggerImgURL: media.url
                            });
                        }
                        }
                    />}
                </Fragment>)
                }
                {triggerSettings[0].triggerType === "text" && (
                    <span ref={triggerRef} className={`premium-modal-trigger-text`} style={{
                        color: triggerStyles[0].color,
                        fontSize: `${triggerFontSize}${triggerStyles[0].triggerSizeUnit}`,
                        paddingTop: `${triggerPaddingTop}px`,
                        paddingRight: `${triggerPaddingRight}px`,
                        paddingBottom: `${triggerPaddingBottom}px`,
                        paddingLeft: `${triggerPaddingLeft}px`,
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
                    <Fragment>
                        {
                            triggerSettings[0].lottieTriggerURL ?
                                <div ref={triggerRef} className={`premium-lottie-animation`}>
                                    <Lottie
                                        height={triggerSize}
                                        width={triggerSize}
                                        options={{
                                            loop: triggerSettings[0].triggerLoopLottie,
                                            path: triggerSettings[0].lottieTriggerURL,
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid',
                                                className: "premium-lottie-inner"
                                            }
                                        }}
                                        isClickToPauseDisabled={true}
                                        direction={(triggerSettings[0].triggerReverseLottie) ? -1 : 1}
                                    /> </div> :
                                <MediaPlaceholder
                                    labels={{
                                        title: __('Lottie', 'premium-blocks-for-gutenberg'),
                                        instructions: __('Add Lottie animations and files to your website.', 'premium-blocks-for-gutenberg')
                                    }}
                                    accept={['application/json']}
                                    allowedTypes={['application/json']}
                                    value={triggerSettings[0].lottieTriggerURL}
                                    onSelectURL={(value) => saveTriggerSettings({ lottieTriggerURL: value })}
                                    onSelect={(media) => saveTriggerSettings({
                                        lottieTriggerURL: media.url
                                    })}
                                />
                        }

                    </Fragment>
                )}
            </div>
            <div ref={modalRef} className="premium-popup__modal_wrap" style={{ display: "none" }} role="dialog">
                <div role="presentation" className="premium-popup__modal_wrap_overlay" ref={wrapRef} style={{
                    backgroundColor: backgroundType === "solid" ? modalStyles[0].containerBack : '',
                    backgroundImage: btnbg
                }} >
                </div>
                <div className={`premium-popup__modal_content animated animation-${contentStyles[0].animationType} animation-${contentStyles[0].animationSpeed}`}
                    data-delay={triggerSettings[0].delayTime}
                    data-animation={`${contentStyles[0].animationType} ${contentStyles[0].animationSpeed}`}
                    style={{
                        width: `${modalWidth}${modalStyles[0].modalWidthUnit}`,
                        maxHeight: `${modalMaxHeight}${modalStyles[0].modalHeightUnit}`,
                        marginTop: `${modalMarginTop}px`,
                        marginRight: `${modalMarginRight}px`,
                        marginBottom: `${modalMarginBottom}px`,
                        marginLeft: `${modalMarginLeft}px`,
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
                            fontSize: `${headerFontSize}${headerStyles[0].headerSizeUnit}`
                        }}>
                            {contentStyles[0].iconType === "icon" && <i className={contentStyles[0].contentIcon} style={{ fontSize: `${headerIconSize}${contentStyles[0].iconSizeUnit}` }} ></i>}
                            {contentStyles[0].iconType === "image" && <img src={contentStyles[0].contentImgURL} style={{
                                width: `${headerIconSize}${contentStyles[0].iconSizeUnit}`,
                                height: `${headerIconSize}${contentStyles[0].iconSizeUnit}`
                            }}></img>}
                            {contentStyles[0].iconType === "lottie" &&
                                <div className={`premium-lottie-animation`}
                                    style={{
                                        width: `${headerIconSize}${contentStyles[0].iconSizeUnit}`,
                                        height: `${headerIconSize}${contentStyles[0].iconSizeUnit}`
                                    }}
                                >
                                    <Lottie
                                        options={{
                                            loop: contentStyles[0].loopLottie,
                                            path: contentStyles[0].lottieURL,
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid',
                                                className: "premium-lottie-inner"
                                            }
                                        }}
                                        direction={(contentStyles[0].reverseLottie) ? -1 : 1}
                                    />
                                </div>}

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
                            paddingTop: `${upperPaddingTop}px`,
                            paddingRight: `${upperPaddingRight}px`,
                            paddingBottom: `${upperPaddingBottom}px`,
                            paddingLeft: `${upperPaddingLeft}px`
                        }}>
                            <button role="button" className="premium-modal-box-modal-close close-button" ref={upperCloseButton}
                                style={{
                                    fontSize: `${upperStyles[0].iconWidth}${upperStyles[0].iconWidthUnit}`,
                                    color: `${upperStyles[0].color}`,

                                }} data-dismiss="premium-modal" >×</button>
                        </div>)}
                    </div>}
                    <div className={`premium-modal-box-modal-body`} style={{
                        background: modalStyles[0].textBackColor,
                        paddingTop: `${modalPaddingTop}px`,
                        paddingRight: `${modalPaddingRight}px`,
                        paddingBottom: `${modalPaddingBottom}px`,
                        paddingLeft: `${modalPaddingLeft}px`
                    }}>
                        {modalStyles[0].contentType === "text" ? <p style={{
                            fontSize: `${modalFontSize}${modalStyles[0].modalSizeUnit}`,
                            color: modalStyles[0].textColor,
                            fontWeight: modalStyles[0].modalWeight,
                            fontFamily: modalStyles[0].modalFamily,
                            letterSpacing: modalStyles[0].modalSpacing,
                            fontStyle: modalStyles[0].modalStyle,
                        }} >{modalStyles[0].contentText}</p> : <InnerBlocks />}

                    </div>
                    {contentStyles[0].showLowerClose && (<div className={`premium-modal-box-modal-footer`} style={{
                        backgroundColor: modalStyles[0].footerBackColor
                    }}>
                        <button className={`premium-modal-box-modal-lower-close close-button`} role="button" data-dismiss="premium-modal"
                            ref={closeButton}
                            style={{
                                fontStyle: lowerStyles[0].lowerStyle,
                                fontWeight: lowerStyles[0].lowerWeight,
                                letterSpacing: lowerStyles[0].lowerSpacing,
                                fontSize: `${lowerFontSize}${lowerStyles[0].lowerSizeUnit}`,
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
                                paddingTop: `${lowerPaddingTop}px`,
                                paddingRight: `${lowerPaddingRight}px`,
                                paddingBottom: `${lowerPaddingBottom}px`,
                                paddingLeft: `${lowerPaddingLeft}px`
                            }}
                        >
                            {contentStyles[0].lowerCloseText}
                        </button>
                    </div>)}
                </div>
            </div>
        </div >
    ];
};
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)