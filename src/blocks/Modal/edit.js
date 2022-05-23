
import classnames from "classnames";
const { __ } = wp.i18n;
const { withSelect } = wp.data
import Lottie from 'react-lottie-with-segments';
import Inspector from "./inspector";
const { Fragment, useEffect, useState } = wp.element;
const { InnerBlocks, MediaPlaceholder } = wp.blockEditor;
import WebfontLoader from "../../components/typography/fontLoader"
import { gradientBackground } from "../../components/HelperFunction";

const edit = props => {

    const [openModal, setOpenModal] = useState(false)
    const { isSelected, setAttributes, className } = props;
    const {
        block_id,
        contentStyles,
        triggerSettings,
        triggerStyles,
        triggerBorder,
        triggerBorderH,
        triggerPadding,
        headerStyles,
        headerBorder,
        upperStyles,
        upperBorder,
        upperPadding,
        lowerStyles,
        lowerBorder,
        lowerPadding,
        modalStyles,
        modalBorder,
        modalMargin,
        modalPadding,
        modalBackground,
        triggerShadow,
        modalShadow,
        triggerTextShadow,
        triggerTypography,
        headerTypography,
        lowerTypography,
        modalTypography,
        iconSize,
        imageWidth,
        modalWidth,
        modalHeight
    } = props.attributes;

    const currentDevice = props.deviceType;

    useEffect(() => {
        setAttributes({ block_id: props.clientId })
    }, [])
    const saveTriggerSettings = (value) => {
        const newUpdate = triggerSettings.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            triggerSettings: newUpdate,
        });
    }

    const renderCss = (
        <style>
            {`
            #premium-modal-box-${block_id} .premium-modal-trigger-container button.premium-modal-trigger-btn:hover {
                background-color: ${triggerStyles[0].triggerHoverBack} !important;
                border-style: ${triggerBorderH && triggerBorderH.borderType} !important;
                border-top-width: ${triggerBorderH && triggerBorderH.borderWidth[currentDevice].top}px !important;
                border-right-width: ${triggerBorderH && triggerBorderH.borderWidth[currentDevice].right}px !important;
                border-bottom-width: ${triggerBorderH && triggerBorderH.borderWidth[currentDevice].bottom}px !important;
                border-left-width: $${triggerBorderH && triggerBorderH.borderWidth[currentDevice].width}px !important;
                border-radius: ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].top || 0}px ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].right || 0}px ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].bottom || 0}px ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].left || 0}px !important;
                border-color: ${triggerBorderH && triggerBorderH.borderColor} px !important;
            }
            #premium-modal-box-${block_id} .premium-modal-trigger-container button.premium-modal-trigger-btn:hover i{
                color:${triggerStyles[0].iconHoverColor} !important;
            }
            #premium-modal-box-${block_id} .premium-modal-trigger-container button.premium-modal-trigger-btn:hover span{
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
              border-style: ${triggerBorderH && triggerBorderH.borderType} !important;
              border-top-width: ${triggerBorderH && triggerBorderH.borderWidth[currentDevice].top}px !important;
              border-right-width: ${triggerBorderH && triggerBorderH.borderWidth[currentDevice].right}px !important;
              border-bottom-width: ${triggerBorderH && triggerBorderH.borderWidth[currentDevice].bottom}px !important;
              border-left-width: $${triggerBorderH && triggerBorderH.borderWidth[currentDevice].width}px !important;
              border-radius: ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].top || 0}px ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].right || 0}px ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].bottom || 0}px ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].left || 0}px !important;
              border-color: ${triggerBorderH && triggerBorderH.borderColor} px !important;
            }
             #premium-modal-box-${block_id} .premium-modal-trigger-container:hover .premium-modal-trigger-text {
                border-style: ${triggerBorderH && triggerBorderH.borderType} !important;
                border-top-width: ${triggerBorderH && triggerBorderH.borderWidth[currentDevice].top}px !important;
                border-right-width: ${triggerBorderH && triggerBorderH.borderWidth[currentDevice].right}px !important;
                border-bottom-width: ${triggerBorderH && triggerBorderH.borderWidth[currentDevice].bottom}px !important;
                border-left-width: $${triggerBorderH && triggerBorderH.borderWidth[currentDevice].width}px !important;
                border-radius: ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].top || 0}px ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].right || 0}px ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].bottom || 0}px ${triggerBorderH && triggerBorderH.borderRadius[currentDevice].left || 0}px !important;
                border-color: ${triggerBorderH && triggerBorderH.borderColor} px !important;
            }

        `}
        </style>
    );
    const headerIconSize = iconSize[currentDevice];
    const triggerPaddingTop = triggerPadding[currentDevice].top;
    const triggerPaddingRight = triggerPadding[currentDevice].right;
    const triggerPaddingBottom = triggerPadding[currentDevice].bottom;
    const triggerPaddingLeft = triggerPadding[currentDevice].left;
    const upperPaddingTop = upperPadding[currentDevice].top;
    const upperPaddingRight = upperPadding[currentDevice].right;
    const upperPaddingBottom = upperPadding[currentDevice].bottom;
    const upperPaddingLeft = upperPadding[currentDevice].left;
    const lowerPaddingTop = lowerPadding[currentDevice].top;
    const lowerPaddingRight = lowerPadding[currentDevice].right;
    const lowerPaddingBottom = lowerPadding[currentDevice].bottom;
    const lowerPaddingLeft = lowerPadding[currentDevice].left;
    const modalWidthValue = modalWidth[currentDevice];
    const modalMaxHeight = modalHeight[currentDevice];
    const modalPaddingTop = modalPadding[currentDevice].top;
    const modalPaddingRight = modalPadding[currentDevice].right;
    const modalPaddingBottom = modalPadding[currentDevice].bottom;
    const modalPaddingLeft = modalPadding[currentDevice].left;
    const modalMarginTop = modalMargin[currentDevice].top;
    const modalMarginRight = modalMargin[currentDevice].right;
    const modalMarginBottom = modalMargin[currentDevice].bottom;
    const modalMarginLeft = modalMargin[currentDevice].left;
    const triggerSize = imageWidth[currentDevice];

    let loadTriggerGoogleFonts;
    let loadHeaderGoogleFonts;
    let loadModalGoogleFonts;
    if (triggerTypography.fontFamily !== 'Default') {
        const triggerConfig = {
            google: {
                families: [triggerTypography.fontFamily],
            },
        }
        loadTriggerGoogleFonts = (
            <WebfontLoader config={triggerConfig}>
            </WebfontLoader>
        )
    }
    if (headerTypography.fontFamily !== 'Default') {
        const headerConfig = {
            google: {
                families: [headerTypography.fontFamily],
            },
        }
        loadHeaderGoogleFonts = (
            <WebfontLoader config={headerConfig}>
            </WebfontLoader>
        )
    }
    if (modalTypography.fontFamily !== 'Default') {
        const modalConfig = {
            google: {
                families: [modalTypography.fontFamily],
            },
        }
        loadModalGoogleFonts = (
            <WebfontLoader config={modalConfig}>
            </WebfontLoader>
        )
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
                {(triggerSettings[0].triggerType === "button" || triggerSettings[0].triggerType === "load") && <button className={` premium-modal-trigger-btn premium-button__${triggerSettings[0].btnSize} `} onClick={() => setOpenModal(true)} style={{
                    fontSize: `${triggerTypography.fontSize[currentDevice]}${triggerTypography.fontSize.unit}`,
                    paddingTop: triggerPaddingTop && `${triggerPaddingTop}${triggerPadding.unit}`,
                    paddingRight: triggerPaddingRight && `${triggerPaddingRight}${triggerPadding.unit}`,
                    paddingBottom: triggerPaddingBottom && `${triggerPaddingBottom}${triggerPadding.unit}`,
                    paddingLeft: triggerPaddingLeft && `${triggerPaddingLeft}${triggerPadding.unit}`,
                    backgroundColor: triggerStyles[0].triggerBack,
                    borderStyle: triggerBorder && triggerBorder.borderType,
                    borderTopWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].top,
                    borderRightWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].right,
                    borderBottomWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].bottom,
                    borderLeftWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].left,
                    borderColor: triggerBorder && triggerBorder.borderColor,
                    borderTopLeftRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].top || 0}px`,
                    borderTopRightRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].right || 0}px`,
                    borderBottomLeftRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].bottom || 0}px`,
                    borderBottomRightRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].left || 0}px`,
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
                    {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "after" && <i className={` premium-modal-box-icon ${triggerSettings[0].icon}`} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginLeft: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }} ></i>}
                </button>
                }
                {triggerSettings[0].triggerType === "image" && (<Fragment>
                    {triggerSettings[0].triggerImgURL ? <img className={`premium-modal-trigger-img`} onClick={() => setOpenModal(true)} src={triggerSettings[0].triggerImgURL} style={{
                        width: `${triggerSize}px`,
                        height: `${triggerSize}px`,
                        borderStyle: triggerBorder && triggerBorder.borderType,
                        borderTopWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].top,
                        borderRightWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].right,
                        borderBottomWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].bottom,
                        borderLeftWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].left,
                        borderColor: triggerBorder && triggerBorder.borderColor,
                        borderTopLeftRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].top || 0}px`,
                        borderTopRightRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].right || 0}px`,
                        borderBottomLeftRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].bottom || 0}px`,
                        borderBottomRightRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].left || 0}px`,
                        boxShadow: `${triggerShadow.horizontal}px ${triggerShadow.vertical}px ${triggerShadow.blur}px ${triggerShadow.color} ${triggerShadow.position}`,
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
                    <span onClick={() => setOpenModal(true)} className={`premium-modal-trigger-text`} style={{
                        color: triggerStyles[0].color,
                        fontSize: `${triggerTypography.fontSize[currentDevice]}${triggerTypography.fontSize.unit}`,
                        paddingTop: triggerPaddingTop && `${triggerPaddingTop}${triggerPadding.unit}`,
                        paddingRight: triggerPaddingRight && `${triggerPaddingRight}${triggerPadding.unit}`,
                        paddingBottom: triggerPaddingBottom && `${triggerPaddingBottom}${triggerPadding.unit}`,
                        paddingLeft: triggerPaddingLeft && `${triggerPaddingLeft}${triggerPadding.unit}`,
                        borderStyle: triggerBorder && triggerBorder.borderType,
                        borderTopWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].top,
                        borderRightWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].right,
                        borderBottomWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].bottom,
                        borderLeftWidth: triggerBorder && triggerBorder.borderWidth[currentDevice].left,
                        borderColor: triggerBorder && triggerBorder.borderColor,
                        borderTopLeftRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].top || 0}px`,
                        borderTopRightRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].right || 0}px`,
                        borderBottomLeftRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].bottom || 0}px`,
                        borderBottomRightRadius: `${triggerBorder && triggerBorder.borderRadius[currentDevice].left || 0}px`,
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
                    <Fragment>
                        {
                            triggerSettings[0].lottieTriggerURL ?
                                <div onClick={() => setOpenModal(true)} className={`premium-lottie-animation`}>
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
            {openModal && (
                <div className="premium-popup__modal_wrap" role="dialog">
                    <div role="presentation" className="premium-popup__modal_wrap_overlay" onClick={() => setOpenModal(false)} style={{
                        ...gradientBackground(modalBackground)
                    }} >
                    </div>
                    <div className={`premium-popup__modal_content animated animation-${contentStyles[0].animationType} animation-${contentStyles[0].animationSpeed}`}
                        data-delay={triggerSettings[0].delayTime}
                        data-animation={`${contentStyles[0].animationType} ${contentStyles[0].animationSpeed}`}
                        style={{
                            width: `${modalWidthValue}${modalWidth.unit}`,
                            maxHeight: `${modalMaxHeight}${modalHeight.unit}`,
                            marginTop: modalMarginTop && `${modalMarginTop}${modalMargin.unit}`,
                            marginRight: modalMarginRight && `${modalMarginRight}${modalMargin.unit}`,
                            marginBottom: modalMarginBottom && `${modalMarginBottom}${modalMargin.unit}`,
                            marginLeft: modalMarginLeft && `${modalMarginLeft}${modalMargin.unit}`,
                            borderStyle: modalBorder && modalBorder.borderType,
                            borderTopWidth: modalBorder && modalBorder.borderWidth[currentDevice].top,
                            borderRightWidth: modalBorder && modalBorder.borderWidth[currentDevice].right,
                            borderBottomWidth: modalBorder && modalBorder.borderWidth[currentDevice].bottom,
                            borderLeftWidth: modalBorder && modalBorder.borderWidth[currentDevice].left,
                            borderColor: modalBorder && modalBorder.borderColor,
                            borderTopLeftRadius: `${modalBorder && modalBorder.borderRadius[currentDevice].top || 0}px`,
                            borderTopRightRadius: `${modalBorder && modalBorder.borderRadius[currentDevice].right || 0}px`,
                            borderBottomLeftRadius: `${modalBorder && modalBorder.borderRadius[currentDevice].bottom || 0}px`,
                            borderBottomRightRadius: `${modalBorder && modalBorder.borderRadius[currentDevice].left || 0}px`,
                            boxShadow: `${modalShadow.horizontal}px ${modalShadow.vertical}px ${modalShadow.blur}px ${modalShadow.color} ${modalShadow.position}`,
                        }}>
                        {contentStyles[0].showHeader && <div className={`premium-modal-box-modal-header`} style={{
                            backgroundColor: headerStyles[0].backColor,
                            borderStyle: headerBorder && headerBorder.borderType,
                            borderTopWidth: headerBorder && headerBorder.borderWidth[currentDevice].top,
                            borderRightWidth: headerBorder && headerBorder.borderWidth[currentDevice].right,
                            borderBottomWidth: headerBorder && headerBorder.borderWidth[currentDevice].bottom,
                            borderLeftWidth: headerBorder && headerBorder.borderWidth[currentDevice].left,
                            borderColor: headerBorder && headerBorder.borderColor,
                            borderTopLeftRadius: `${headerBorder && headerBorder.borderRadius[currentDevice].top || 0}px`,
                            borderTopRightRadius: `${headerBorder && headerBorder.borderRadius[currentDevice].right || 0}px`,
                            borderBottomLeftRadius: `${headerBorder && headerBorder.borderRadius[currentDevice].bottom || 0}px`,
                            borderBottomRightRadius: `${headerBorder && headerBorder.borderRadius[currentDevice].left || 0}px`,
                        }}>
                            <h3 className={`premium-modal-box-modal-title`} style={{
                                color: headerStyles[0].color,
                                fontSize: `${headerTypography.fontSize[currentDevice]}${headerTypography.fontSize.unit}`,
                                fontFamily: headerTypography.fontFamily,
                                fontWeight: headerTypography.fontWeight,
                                fontStyle: headerTypography.fontStyle,
                                letterSpacing: headerTypography.letterSpacing
                            }}>
                                {contentStyles[0].iconType === "icon" && <i className={contentStyles[0].contentIcon} style={{ fontSize: `${headerIconSize}${iconSize.unit}` }} ></i>}
                                {contentStyles[0].iconType === "image" && <img src={contentStyles[0].contentImgURL} style={{
                                    width: `${headerIconSize}${iconSize.unit}`,
                                    height: `${headerIconSize}${iconSize.unit}`
                                }}></img>}
                                {contentStyles[0].iconType === "lottie" &&
                                    <div className={`premium-lottie-animation`}
                                        style={{
                                            width: `${headerIconSize}${iconSize.unit}`,
                                            height: `${headerIconSize}${iconSize.unit}`
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
                                borderStyle: upperBorder && upperBorder.borderType,
                                borderTopWidth: upperBorder && upperBorder.borderWidth[currentDevice].top,
                                borderRightWidth: upperBorder && upperBorder.borderWidth[currentDevice].right,
                                borderBottomWidth: upperBorder && upperBorder.borderWidth[currentDevice].bottom,
                                borderLeftWidth: upperBorder && upperBorder.borderWidth[currentDevice].left,
                                borderColor: upperBorder && upperBorder.borderColor,
                                borderTopLeftRadius: `${upperBorder && upperBorder.borderRadius[currentDevice].top || 0}px`,
                                borderTopRightRadius: `${upperBorder && upperBorder.borderRadius[currentDevice].right || 0}px`,
                                borderBottomLeftRadius: `${upperBorder && upperBorder.borderRadius[currentDevice].bottom || 0}px`,
                                borderBottomRightRadius: `${upperBorder && upperBorder.borderRadius[currentDevice].left || 0}px`,
                                paddingTop: upperPaddingTop && `${upperPaddingTop}${upperPadding.unit}`,
                                paddingRight: upperPaddingRight && `${upperPaddingRight}${upperPadding.unit}`,
                                paddingBottom: upperPaddingBottom && `${upperPaddingBottom}${upperPadding.unit}`,
                                paddingLeft: upperPaddingLeft && `${upperPaddingLeft}${upperPadding.unit}`
                            }}>
                                <button role="button" className="premium-modal-box-modal-close close-button" onClick={() => setOpenModal(false)}
                                    style={{
                                        fontSize: `${upperStyles[0].iconWidth}${upperStyles[0].iconWidthUnit}`,
                                        color: `${upperStyles[0].color}`,

                                    }} data-dismiss="premium-modal" >×</button>
                            </div>)}
                        </div>}
                        <div className={`premium-modal-box-modal-body`} style={{
                            background: modalStyles[0].textBackColor,
                            paddingTop: modalPaddingTop && `${modalPaddingTop}${modalPadding.unit}`,
                            paddingRight: modalPaddingRight && `${modalPaddingRight}${modalPadding.unit}`,
                            paddingBottom: modalPaddingBottom && `${modalPaddingBottom}${modalPadding.unit}`,
                            paddingLeft: modalPaddingLeft && `${modalPaddingLeft}${modalPadding.unit}`
                        }}>
                            {modalStyles[0].contentType === "text" ? <p style={{
                                color: modalStyles[0].textColor,
                                fontSize: `${modalTypography.fontSize[currentDevice]}${modalTypography.fontSize.unit}`,
                                fontFamily: modalTypography.fontFamily,
                                fontWeight: modalTypography.fontWeight,
                                fontStyle: modalTypography.fontStyle,
                                letterSpacing: modalTypography.letterSpacing
                            }} >{modalStyles[0].contentText}</p> : <InnerBlocks />}

                        </div>
                        {contentStyles[0].showLowerClose && (<div className={`premium-modal-box-modal-footer`} style={{
                            backgroundColor: modalStyles[0].footerBackColor
                        }}>
                            <button className={`premium-modal-box-modal-lower-close close-button`} role="button" data-dismiss="premium-modal"
                                onClick={() => setOpenModal(false)}
                                style={{
                                    fontSize: `${lowerTypography.fontSize[currentDevice]}${lowerTypography.fontSize.unit}`,
                                    fontWeight: lowerTypography.fontWeight,
                                    fontStyle: lowerTypography.fontStyle,
                                    letterSpacing: lowerTypography.letterSpacing,
                                    width: `${lowerStyles[0].iconWidth}${lowerStyles[0].iconWidthUnit}`,
                                    color: `${lowerStyles[0].color}`,
                                    backgroundColor: `${lowerStyles[0].backColor}`,
                                    borderStyle: lowerBorder && lowerBorder.borderType,
                                    borderTopWidth: lowerBorder && lowerBorder.borderWidth[currentDevice].top,
                                    borderRightWidth: lowerBorder && lowerBorder.borderWidth[currentDevice].right,
                                    borderBottomWidth: lowerBorder && lowerBorder.borderWidth[currentDevice].bottom,
                                    borderLeftWidth: lowerBorder && lowerBorder.borderWidth[currentDevice].left,
                                    borderColor: lowerBorder && lowerBorder.borderColor,
                                    borderTopLeftRadius: `${lowerBorder && lowerBorder.borderRadius[currentDevice].top || 0}px`,
                                    borderTopRightRadius: `${lowerBorder && lowerBorder.borderRadius[currentDevice].right || 0}px`,
                                    borderBottomLeftRadius: `${lowerBorder && lowerBorder.borderRadius[currentDevice].bottom || 0}px`,
                                    borderBottomRightRadius: `${lowerBorder && lowerBorder.borderRadius[currentDevice].left || 0}px`,
                                    paddingTop: lowerPaddingTop && `${lowerPaddingTop}${lowerPadding.unit}`,
                                    paddingRight: lowerPaddingRight && `${lowerPaddingRight}${lowerPadding.unit}`,
                                    paddingBottom: lowerPaddingBottom && `${lowerPaddingBottom}${lowerPadding.unit}`,
                                    paddingLeft: lowerPaddingLeft && `${lowerPaddingLeft}${lowerPadding.unit}`
                                }}
                            >
                                {contentStyles[0].lowerCloseText}
                            </button>
                        </div>)}
                    </div>
                </div>

            )}
            {loadTriggerGoogleFonts}
            {loadHeaderGoogleFonts}
            {loadModalGoogleFonts}
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