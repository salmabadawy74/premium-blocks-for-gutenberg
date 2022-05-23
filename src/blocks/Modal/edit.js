
import classnames from "classnames";
const { __ } = wp.i18n;
const { withSelect } = wp.data
import Lottie from 'react-lottie-with-segments';
import Inspector from "./inspector";
const { Fragment, useEffect, useState } = wp.element;
const { InnerBlocks, MediaPlaceholder } = wp.blockEditor;
import WebfontLoader from "../../components/typography/fontLoader"
import { gradientBackground } from "../../components/HelperFunction";

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
        triggerTextShadow
    } = props.attributes;

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
                border-top-width: ${triggerBorderH && triggerBorderH.borderWidth.Desktop.top}px !important;
                border-right-width: ${triggerBorderH && triggerBorderH.borderWidth.Desktop.right}px !important;
                border-bottom-width: ${triggerBorderH && triggerBorderH.borderWidth.Desktop.bottom}px !important;
                border-left-width: $${triggerBorderH && triggerBorderH.borderWidth.Desktop.width}px !important;
                border-radius: ${triggerBorderH && triggerBorderH.borderRadius.Desktop.top || 0}px ${triggerBorderH && triggerBorderH.borderRadius.Desktop.right || 0}px ${triggerBorderH && triggerBorderH.borderRadius.Desktop.bottom || 0}px ${triggerBorderH && triggerBorderH.borderRadius.Desktop.left || 0}px !important;
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
              border-top-width: ${triggerBorderH && triggerBorderH.borderWidth.Desktop.top}px !important;
              border-right-width: ${triggerBorderH && triggerBorderH.borderWidth.Desktop.right}px !important;
              border-bottom-width: ${triggerBorderH && triggerBorderH.borderWidth.Desktop.bottom}px !important;
              border-left-width: $${triggerBorderH && triggerBorderH.borderWidth.Desktop.width}px !important;
              border-radius: ${triggerBorderH && triggerBorderH.borderRadius.Desktop.top || 0}px ${triggerBorderH && triggerBorderH.borderRadius.Desktop.right || 0}px ${triggerBorderH && triggerBorderH.borderRadius.Desktop.bottom || 0}px ${triggerBorderH && triggerBorderH.borderRadius.Desktop.left || 0}px !important;
              border-color: ${triggerBorderH && triggerBorderH.borderColor} px !important;
            }
             #premium-modal-box-${block_id} .premium-modal-trigger-container:hover .premium-modal-trigger-text {
                border-style: ${triggerBorderH && triggerBorderH.borderType} !important;
                border-top-width: ${triggerBorderH && triggerBorderH.borderWidth.Desktop.top}px !important;
                border-right-width: ${triggerBorderH && triggerBorderH.borderWidth.Desktop.right}px !important;
                border-bottom-width: ${triggerBorderH && triggerBorderH.borderWidth.Desktop.bottom}px !important;
                border-left-width: $${triggerBorderH && triggerBorderH.borderWidth.Desktop.width}px !important;
                border-radius: ${triggerBorderH && triggerBorderH.borderRadius.Desktop.top || 0}px ${triggerBorderH && triggerBorderH.borderRadius.Desktop.right || 0}px ${triggerBorderH && triggerBorderH.borderRadius.Desktop.bottom || 0}px ${triggerBorderH && triggerBorderH.borderRadius.Desktop.left || 0}px !important;
                border-color: ${triggerBorderH && triggerBorderH.borderColor} px !important;
            }

        `}
        </style>
    );
    const headerIconSize = getPreviewSize(props.deviceType, contentStyles[0].iconSize, contentStyles[0].iconSizeTablet, contentStyles[0].iconSizeMobile);
    const triggerFontSize = getPreviewSize(props.deviceType, triggerStyles[0].triggerSize, triggerStyles[0].triggerSizeTablet, triggerStyles[0].triggerSizeMobile);
    const triggerPaddingTop = getPreviewSize(props.deviceType, triggerPadding.Desktop.top, triggerPadding.Tablet.top, triggerPadding.Mobile.top);
    const triggerPaddingRight = getPreviewSize(props.deviceType, triggerPadding.Desktop.right, triggerPadding.Tablet.right, triggerPadding.Mobile.right);
    const triggerPaddingBottom = getPreviewSize(props.deviceType, triggerPadding.Desktop.bottom, triggerPadding.Tablet.bottom, triggerPadding.Mobile.bottom);
    const triggerPaddingLeft = getPreviewSize(props.deviceType, triggerPadding.Desktop.left, triggerPadding.Tablet.left, triggerPadding.Mobile.left);
    const headerFontSize = getPreviewSize(props.deviceType, headerStyles[0].headerSize, headerStyles[0].headerSizeTablet, headerStyles[0].headerSizeMobile);
    const upperPaddingTop = getPreviewSize(props.deviceType, upperPadding.Desktop.top, upperPadding.Tablet.top, upperPadding.Mobile.top);
    const upperPaddingRight = getPreviewSize(props.deviceType, upperPadding.Desktop.right, upperPadding.Tablet.right, upperPadding.Mobile.right);
    const upperPaddingBottom = getPreviewSize(props.deviceType, upperPadding.Desktop.bottom, upperPadding.Tablet.bottom, upperPadding.Mobile.bottom);
    const upperPaddingLeft = getPreviewSize(props.deviceType, upperPadding.Desktop.left, upperPadding.Tablet.left, upperPadding.Mobile.left);
    const lowerFontSize = getPreviewSize(props.deviceType, lowerStyles[0].lowerSize, lowerStyles[0].lowerSizeTablet, lowerStyles[0].lowerSizeMobile);
    const lowerPaddingTop = getPreviewSize(props.deviceType, lowerPadding.Desktop.top, lowerPadding.Tablet.top, lowerPadding.Mobile.top);
    const lowerPaddingRight = getPreviewSize(props.deviceType, lowerPadding.Desktop.right, lowerPadding.Tablet.right, lowerPadding.Mobile.right);
    const lowerPaddingBottom = getPreviewSize(props.deviceType, lowerPadding.Desktop.bottom, lowerPadding.Tablet.bottom, lowerPadding.Mobile.bottom);
    const lowerPaddingLeft = getPreviewSize(props.deviceType, lowerPadding.Desktop.left, lowerPadding.Tablet.left, lowerPadding.Mobile.left);
    const modalWidth = getPreviewSize(props.deviceType, modalStyles[0].modalWidth, modalStyles[0].modalWidthTablet, modalStyles[0].modalWidthMobile);
    const modalMaxHeight = getPreviewSize(props.deviceType, modalStyles[0].modalHeight, modalStyles[0].modalHeightTablet, modalStyles[0].modalHeightMobile);
    const modalFontSize = getPreviewSize(props.deviceType, modalStyles[0].modalSize, modalStyles[0].modalSizeTablet, modalStyles[0].modalSizeMobile);
    const modalPaddingTop = getPreviewSize(props.deviceType, modalPadding.Desktop.top, modalPadding.Tablet.top, modalPadding.Mobile.top);
    const modalPaddingRight = getPreviewSize(props.deviceType, modalPadding.Desktop.right, modalPadding.Tablet.right, modalPadding.Mobile.right);
    const modalPaddingBottom = getPreviewSize(props.deviceType, modalPadding.Desktop.bottom, modalPadding.Tablet.bottom, modalPadding.Mobile.bottom);
    const modalPaddingLeft = getPreviewSize(props.deviceType, modalPadding.Desktop.left, modalPadding.Tablet.left, modalPadding.Mobile.left);
    const modalMarginTop = getPreviewSize(props.deviceType, modalMargin.Desktop.top, modalMargin.Tablet.top, modalMargin.Mobile.top);
    const modalMarginRight = getPreviewSize(props.deviceType, modalMargin.Desktop.right, modalMargin.Tablet.right, modalMargin.Mobile.right);
    const modalMarginBottom = getPreviewSize(props.deviceType, modalMargin.Desktop.bottom, modalMargin.Tablet.bottom, modalMargin.Mobile.bottom);
    const modalMarginLeft = getPreviewSize(props.deviceType, modalMargin.Desktop.right, modalMargin.Tablet.right, modalMargin.Mobile.right);
    const triggerSize = getPreviewSize(props.deviceType, triggerSettings[0].imageWidth, triggerSettings[0].imageWidthTablet, triggerSettings[0].imageWidthMobile);

    let loadTriggerGoogleFonts;
    let loadHeaderGoogleFonts;
    let loadModalGoogleFonts;
    if (triggerStyles[0].triggerFamily !== 'Default') {
        const triggerConfig = {
            google: {
                families: [triggerStyles[0].triggerFamily],
            },
        }
        loadTriggerGoogleFonts = (
            <WebfontLoader config={triggerConfig}>
            </WebfontLoader>
        )
    }
    if (headerStyles[0].headerFamily !== 'Default') {
        const headerConfig = {
            google: {
                families: [headerStyles[0].headerFamily],
            },
        }
        loadHeaderGoogleFonts = (
            <WebfontLoader config={headerConfig}>
            </WebfontLoader>
        )
    }
    if (modalStyles[0].modalFamily !== 'Default') {
        const modalConfig = {
            google: {
                families: [modalStyles[0].modalFamily],
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
                    fontSize: `${triggerFontSize}${triggerStyles[0].triggerSizeUnit}`,
                    paddingTop: triggerPaddingTop && `${triggerPaddingTop}${triggerPadding.unit}`,
                    paddingRight: triggerPaddingRight && `${triggerPaddingRight}${triggerPadding.unit}`,
                    paddingBottom: triggerPaddingBottom && `${triggerPaddingBottom}${triggerPadding.unit}`,
                    paddingLeft: triggerPaddingLeft && `${triggerPaddingLeft}${triggerPadding.unit}`,
                    backgroundColor: triggerStyles[0].triggerBack,
                    borderStyle: triggerBorder && triggerBorder.borderType,
                    borderTopWidth: triggerBorder && triggerBorder.borderWidth.Desktop.top,
                    borderRightWidth: triggerBorder && triggerBorder.borderWidth.Desktop.right,
                    borderBottomWidth: triggerBorder && triggerBorder.borderWidth.Desktop.bottom,
                    borderLeftWidth: triggerBorder && triggerBorder.borderWidth.Desktop.left,
                    borderColor: triggerBorder && triggerBorder.borderColor,
                    borderTopLeftRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.top || 0}px`,
                    borderTopRightRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.right || 0}px`,
                    borderBottomLeftRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.bottom || 0}px`,
                    borderBottomRightRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.left || 0}px`,
                    boxShadow: `${triggerShadow.horizontal}px ${triggerShadow.vertical}px ${triggerShadow.blur}px ${triggerShadow.color} ${triggerShadow.position}`,
                }}>
                    {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "before" && <i className={` premium-modal-box-icon ${triggerSettings[0].icon}`} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginRight: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }}></i>}
                    <span style={{ color: triggerStyles[0].color, fontFamily: triggerStyles[0].triggerFamily, fontWeight: triggerStyles[0].triggerWeight, fontStyle: triggerStyles[0].triggerStyle, letterSpacing: triggerStyles[0].triggerSpacing }}> {triggerSettings[0].btnText}</span>
                    {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "after" && <i className={` premium-modal-box-icon ${triggerSettings[0].icon}`} style={{ fontSize: `${triggerSettings[0].iconSize}px`, marginLeft: `${triggerSettings[0].iconSpacing}px`, color: triggerStyles[0].iconColor }} ></i>}
                </button>
                }
                {triggerSettings[0].triggerType === "image" && (<Fragment>
                    {triggerSettings[0].triggerImgURL ? <img className={`premium-modal-trigger-img`} onClick={() => setOpenModal(true)} src={triggerSettings[0].triggerImgURL} style={{
                        width: `${triggerSize}px`,
                        height: `${triggerSize}px`,
                        borderStyle: triggerBorder && triggerBorder.borderType,
                        borderTopWidth: triggerBorder && triggerBorder.borderWidth.Desktop.top,
                        borderRightWidth: triggerBorder && triggerBorder.borderWidth.Desktop.right,
                        borderBottomWidth: triggerBorder && triggerBorder.borderWidth.Desktop.bottom,
                        borderLeftWidth: triggerBorder && triggerBorder.borderWidth.Desktop.left,
                        borderColor: triggerBorder && triggerBorder.borderColor,
                        borderTopLeftRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.top || 0}px`,
                        borderTopRightRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.right || 0}px`,
                        borderBottomLeftRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.bottom || 0}px`,
                        borderBottomRightRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.left || 0}px`,
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
                        fontSize: `${triggerFontSize}${triggerStyles[0].triggerSizeUnit}`,
                        paddingTop: triggerPaddingTop && `${triggerPaddingTop}${triggerPadding.unit}`,
                        paddingRight: triggerPaddingRight && `${triggerPaddingRight}${triggerPadding.unit}`,
                        paddingBottom: triggerPaddingBottom && `${triggerPaddingBottom}${triggerPadding.unit}`,
                        paddingLeft: triggerPaddingLeft && `${triggerPaddingLeft}${triggerPadding.unit}`,
                        borderStyle: triggerBorder && triggerBorder.borderType,
                        borderTopWidth: triggerBorder && triggerBorder.borderWidth.Desktop.top,
                        borderRightWidth: triggerBorder && triggerBorder.borderWidth.Desktop.right,
                        borderBottomWidth: triggerBorder && triggerBorder.borderWidth.Desktop.bottom,
                        borderLeftWidth: triggerBorder && triggerBorder.borderWidth.Desktop.left,
                        borderColor: triggerBorder && triggerBorder.borderColor,
                        borderTopLeftRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.top || 0}px`,
                        borderTopRightRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.right || 0}px`,
                        borderBottomLeftRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.bottom || 0}px`,
                        borderBottomRightRadius: `${triggerBorder && triggerBorder.borderRadius.Desktop.left || 0}px`,
                        textShadow: `${triggerTextShadow.horizontal}px ${triggerTextShadow.vertical}px ${triggerTextShadow.blur}px ${triggerTextShadow.color}`,
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
                            width: `${modalWidth}${modalStyles[0].modalWidthUnit}`,
                            maxHeight: `${modalMaxHeight}${modalStyles[0].modalHeightUnit}`,
                            marginTop: modalMarginTop && `${modalMarginTop}${modalMargin.unit}`,
                            marginRight: modalMarginRight && `${modalMarginRight}${modalMargin.unit}`,
                            marginBottom: modalMarginBottom && `${modalMarginBottom}${modalMargin.unit}`,
                            marginLeft: modalMarginLeft && `${modalMarginLeft}${modalMargin.unit}`,
                            borderStyle: modalBorder && modalBorder.borderType,
                            borderTopWidth: modalBorder && modalBorder.borderWidth.Desktop.top,
                            borderRightWidth: modalBorder && modalBorder.borderWidth.Desktop.right,
                            borderBottomWidth: modalBorder && modalBorder.borderWidth.Desktop.bottom,
                            borderLeftWidth: modalBorder && modalBorder.borderWidth.Desktop.left,
                            borderColor: modalBorder && modalBorder.borderColor,
                            borderTopLeftRadius: `${modalBorder && modalBorder.borderRadius.Desktop.top || 0}px`,
                            borderTopRightRadius: `${modalBorder && modalBorder.borderRadius.Desktop.right || 0}px`,
                            borderBottomLeftRadius: `${modalBorder && modalBorder.borderRadius.Desktop.bottom || 0}px`,
                            borderBottomRightRadius: `${modalBorder && modalBorder.borderRadius.Desktop.left || 0}px`,
                            boxShadow: `${modalShadow.horizontal}px ${modalShadow.vertical}px ${modalShadow.blur}px ${modalShadow.color} ${modalShadow.position}`,
                        }}>
                        {contentStyles[0].showHeader && <div className={`premium-modal-box-modal-header`} style={{
                            backgroundColor: headerStyles[0].backColor,
                            borderStyle: headerBorder && headerBorder.borderType,
                            borderTopWidth: headerBorder && headerBorder.borderWidth.Desktop.top,
                            borderRightWidth: headerBorder && headerBorder.borderWidth.Desktop.right,
                            borderBottomWidth: headerBorder && headerBorder.borderWidth.Desktop.bottom,
                            borderLeftWidth: headerBorder && headerBorder.borderWidth.Desktop.left,
                            borderColor: headerBorder && headerBorder.borderColor,
                            borderTopLeftRadius: `${headerBorder && headerBorder.borderRadius.Desktop.top || 0}px`,
                            borderTopRightRadius: `${headerBorder && headerBorder.borderRadius.Desktop.right || 0}px`,
                            borderBottomLeftRadius: `${headerBorder && headerBorder.borderRadius.Desktop.bottom || 0}px`,
                            borderBottomRightRadius: `${headerBorder && headerBorder.borderRadius.Desktop.left || 0}px`,
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
                                borderStyle: upperBorder && upperBorder.borderType,
                                borderTopWidth: upperBorder && upperBorder.borderWidth.Desktop.top,
                                borderRightWidth: upperBorder && upperBorder.borderWidth.Desktop.right,
                                borderBottomWidth: upperBorder && upperBorder.borderWidth.Desktop.bottom,
                                borderLeftWidth: upperBorder && upperBorder.borderWidth.Desktop.left,
                                borderColor: upperBorder && upperBorder.borderColor,
                                borderTopLeftRadius: `${upperBorder && upperBorder.borderRadius.Desktop.top || 0}px`,
                                borderTopRightRadius: `${upperBorder && upperBorder.borderRadius.Desktop.right || 0}px`,
                                borderBottomLeftRadius: `${upperBorder && upperBorder.borderRadius.Desktop.bottom || 0}px`,
                                borderBottomRightRadius: `${upperBorder && upperBorder.borderRadius.Desktop.left || 0}px`,
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
                                onClick={() => setOpenModal(false)}
                                style={{
                                    fontStyle: lowerStyles[0].lowerStyle,
                                    fontWeight: lowerStyles[0].lowerWeight,
                                    letterSpacing: lowerStyles[0].lowerSpacing,
                                    fontSize: `${lowerFontSize}${lowerStyles[0].lowerSizeUnit}`,
                                    width: `${lowerStyles[0].iconWidth}${lowerStyles[0].iconWidthUnit}`,
                                    color: `${lowerStyles[0].color}`,
                                    backgroundColor: `${lowerStyles[0].backColor}`,
                                    borderStyle: lowerBorder && lowerBorder.borderType,
                                    borderTopWidth: lowerBorder && lowerBorder.borderWidth.Desktop.top,
                                    borderRightWidth: lowerBorder && lowerBorder.borderWidth.Desktop.right,
                                    borderBottomWidth: lowerBorder && lowerBorder.borderWidth.Desktop.bottom,
                                    borderLeftWidth: lowerBorder && lowerBorder.borderWidth.Desktop.left,
                                    borderColor: lowerBorder && lowerBorder.borderColor,
                                    borderTopLeftRadius: `${lowerBorder && lowerBorder.borderRadius.Desktop.top || 0}px`,
                                    borderTopRightRadius: `${lowerBorder && lowerBorder.borderRadius.Desktop.right || 0}px`,
                                    borderBottomLeftRadius: `${lowerBorder && lowerBorder.borderRadius.Desktop.bottom || 0}px`,
                                    borderBottomRightRadius: `${lowerBorder && lowerBorder.borderRadius.Desktop.left || 0}px`,
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