
import classnames from "classnames";
import Lottie from 'react-lottie-with-segments';
import Inspector from "./inspector";
import GoogleFontLoader from "react-google-font-loader";
import { gradientBackground, generateBlockId, generateCss, borderCss, paddingCss, marginCss, typographyCss } from "../../components/HelperFunction";

const { __ } = wp.i18n;
const { withSelect } = wp.data
const { Fragment, useEffect, useState } = wp.element;
const { InnerBlocks, MediaPlaceholder } = wp.blockEditor;
const { RichText } = wp.editor;


const edit = props => {

    const [openModal, setOpenModal] = useState(false)
    const { isSelected, setAttributes, className } = props;
    const {
        blockId,
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
        modalHeight,
        triggerFilter,
        triggerHoverFilter,
        hideDesktop,
        hideTablet,
        hideMobile,
        align,
        upperIconWidth,
        lowerIconWidth,
        triggerIconSize
    } = props.attributes;

    const currentDevice = props.deviceType;

    useEffect(() => {
        setAttributes({ blockId: "premium-modal-box-" + generateBlockId(props.clientId) })
    }, [])

    const mainClasses = classnames(className, "premium-modal-box", {
        ' premium-desktop-hidden': hideDesktop,
        ' premium-tablet-hidden': hideTablet,
        ' premium-mobile-hidden': hideMobile,
    });

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

    const saveModalStyles = (value) => {
        const newUpdate = modalStyles.map((item, modalIndex) => {
            if (0 === modalIndex) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            modalStyles: newUpdate,
        });
    }

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-modal-trigger-container button.premium-modal-trigger-btn:hover`] = {
            'border-color': `${triggerBorderH && triggerBorderH.borderColor} !important`,
            'background-color': `${triggerStyles[0].triggerHoverBack} !important`,
            'border-style': `${triggerBorderH && triggerBorderH.borderType} !important`,
            'border-top-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].top} px!important`,
            'border-right-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].right} px!important`,
            'border-bottom-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].bottom} px!important`,
            'border-left-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].width} px!important`,
            'border-top-left-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.top || 0}px!important`,
            'border-top-right-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.right || 0}px!important`,
            'border-bottom-left-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.bottom || 0}px!important`,
            'border-bottom-right-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.left || 0}px!important`,
        };
        styles[` .${blockId} .premium-modal-trigger-container button.premium-modal-trigger-btn:hover i`] = {
            'color': `${triggerStyles[0].iconHoverColor} !important`
        };
        styles[` .${blockId} .premium-modal-trigger-container button.premium-modal-trigger-btn:hover span`] = {
            'color': `${triggerStyles[0].hoverColor} !important`
        };
        styles[` .${blockId} .premium-modal-trigger-container:hover .premium-modal-trigger-text`] = {
            'color': `${triggerStyles[0].hoverColor} !important`
        };
        styles[` .${blockId} .premium-modal-trigger-container .premium-lottie-animation`] = {
            'filter': `brightness( ${triggerFilter.bright}% ) contrast( ${triggerFilter.contrast}% ) saturate( ${triggerFilter.saturation}% ) blur( ${triggerFilter.blur}px ) hue-rotate( ${triggerFilter.hue}deg ) !important`
        };
        styles[` .${blockId} .premium-modal-trigger-container:hover .premium-lottie-animation`] = {
            'filter': `brightness( ${triggerHoverFilter.bright}% ) contrast( ${triggerHoverFilter.contrast}% ) saturate( ${triggerHoverFilter.saturation}% ) blur( ${triggerHoverFilter.blur}px ) hue-rotate( ${triggerHoverFilter.hue}deg ) !important`
        };
        styles[` .${blockId} .premium-modal-trigger-container img:hover`] = {
            'border-color': `${triggerBorderH && triggerBorderH.borderColor} !important`,
            'border-style': `${triggerBorderH && triggerBorderH.borderType} !important`,
            'border-top-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].top} px!important`,
            'border-right-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].right} px!important`,
            'border-bottom-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].bottom} px!important`,
            'border-left-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].width} px!important`,
            'border-top-left-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.top || 0}px!important`,
            'border-top-right-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.right || 0}px!important`,
            'border-bottom-left-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.bottom || 0}px!important`,
            'border-bottom-right-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.left || 0}px!important`,
        };
        styles[` .${blockId} .premium-modal-trigger-container:hover .premium-modal-trigger-text`] = {
            'border-color': `${triggerBorderH && triggerBorderH.borderColor} !important`,
            'border-style': `${triggerBorderH && triggerBorderH.borderType} !important`,
            'border-top-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].top} px!important`,
            'border-right-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].right} px!important`,
            'border-bottom-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].bottom} px!important`,
            'border-left-width': `${triggerBorderH && triggerBorderH.borderWidth[currentDevice].width} px!important`,
            'border-top-left-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.top || 0}px!important`,
            'border-top-right-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.right || 0}px!important`,
            'border-bottom-left-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.bottom || 0}px!important`,
            'border-bottom-right-radius': `${triggerBorderH?.borderRadius?.[currentDevice]?.left || 0}px!important`,
        };
        return generateCss(styles);
    }

    const headerIconSize = iconSize[currentDevice];
    const modalWidthValue = modalWidth[currentDevice];
    const modalMaxHeight = modalHeight[currentDevice];

    let loadTriggerGoogleFonts;
    let loadHeaderGoogleFonts;
    let loadModalGoogleFonts;
    if (triggerTypography.fontFamily !== 'Default') {
        loadTriggerGoogleFonts = (
            <GoogleFontLoader
                fonts={[
                    {
                        font: triggerTypography.fontFamily
                    }
                ]}
            />
        );
    }
    if (headerTypography.fontFamily !== 'Default') {
        loadHeaderGoogleFonts = (
            <GoogleFontLoader
                fonts={[
                    {
                        font: headerTypography.fontFamily
                    }
                ]}
            />
        );
    }
    if (modalTypography.fontFamily !== 'Default') {
        loadModalGoogleFonts = (
            <GoogleFontLoader
                fonts={[
                    {
                        font: modalTypography.fontFamily
                    }
                ]}
            />
        );
    }
    return [
        isSelected && (
            <Inspector
                attributes={props.attributes}
                setAttributes={setAttributes}

            />
        ),
        <div className={`${mainClasses} ${blockId}`} data-trigger={triggerSettings[0].triggerType}>
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles(),
                }}
            />
            <div className={`premium-modal-trigger-container`} style={{ textAlign: align[currentDevice] }}>
                {(triggerSettings[0].triggerType === "button" || triggerSettings[0].triggerType === "load") &&
                    <button
                        className={` premium-modal-trigger-btn premium-button__${triggerSettings[0].btnSize} `}
                        onClick={() => setOpenModal(true)}
                        style={{
                            ...paddingCss(triggerPadding, currentDevice),
                            ...borderCss(triggerBorder, currentDevice),
                            fontSize: `${triggerTypography.fontSize[currentDevice]}${triggerTypography.fontSize.unit}`,
                            backgroundColor: triggerStyles[0].triggerBack,
                            boxShadow: `${triggerShadow.horizontal}px ${triggerShadow.vertical}px ${triggerShadow.blur}px ${triggerShadow.color} ${triggerShadow.position}`,
                        }}>
                        {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "before" &&
                            <i
                                className={` premium-modal-box-icon ${triggerSettings[0].icon}`}
                                style={{
                                    fontSize: (triggerIconSize[currentDevice]) + triggerIconSize.unit,
                                    width: (triggerIconSize[currentDevice]) + triggerIconSize.unit,
                                    height: (triggerIconSize[currentDevice]) + triggerIconSize.unit,
                                    marginRight: `${triggerSettings[0].iconSpacing}px`,
                                    color: triggerStyles[0].iconColor
                                }}></i>
                        }
                        <span
                            style={{
                                color: triggerStyles[0].color,
                                fontFamily: triggerTypography?.fontFamily,
                                fontWeight: triggerTypography?.fontWeight,
                                fontStyle: triggerTypography?.fontStyle,
                                letterSpacing: triggerTypography?.letterSpacing[currentDevice],
                                textDecoration: triggerTypography?.textDecoration,
                                textTransform: triggerTypography?.textTransform,
                                lineHeight: `${triggerTypography?.lineHeight[currentDevice]}px`,
                            }}>
                            {triggerSettings[0].btnText}
                        </span>
                        {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "after" &&
                            <i
                                className={` premium-modal-box-icon ${triggerSettings[0].icon}`}
                                style={{
                                    fontSize: (triggerIconSize[currentDevice]) + triggerIconSize.unit,
                                    width: (triggerIconSize[currentDevice]) + triggerIconSize.unit,
                                    height: (triggerIconSize[currentDevice]) + triggerIconSize.unit,
                                    marginLeft: `${triggerSettings[0].iconSpacing}px`,
                                    color: triggerStyles[0].iconColor
                                }} ></i>
                        }
                    </button>
                }
                {triggerSettings[0].triggerType === "image" && (<Fragment>
                    {
                        triggerSettings[0].triggerImgURL ?
                            <img
                                className={`premium-modal-trigger-img`}
                                onClick={() => setOpenModal(true)}
                                src={triggerSettings[0].triggerImgURL}
                                style={{
                                    ...borderCss(triggerBorder, currentDevice),
                                    width: `${imageWidth[currentDevice]}${imageWidth.unit}`,
                                    height: `${imageWidth[currentDevice]}${imageWidth.unit}`,
                                    boxShadow: `${triggerShadow.horizontal}px ${triggerShadow.vertical}px ${triggerShadow.blur}px ${triggerShadow.color} ${triggerShadow.position}`,
                                }}
                            />
                            : <MediaPlaceholder
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
                                }}
                            />
                    }
                </Fragment>)
                }
                {triggerSettings[0].triggerType === "text" && (
                    <span onClick={() => setOpenModal(true)} className={`premium-modal-trigger-text`}
                        style={{
                            ...borderCss(triggerBorder, currentDevice),
                            ...paddingCss(triggerPadding, currentDevice),
                            ...typographyCss(triggerTypography, currentDevice),
                            color: triggerStyles[0].color,
                            textShadow: `${triggerTextShadow.horizontal}px ${triggerTextShadow.vertical}px ${triggerTextShadow.blur}px ${triggerTextShadow.color}`,
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
                                        height={`${imageWidth[currentDevice]}${imageWidth.unit}`}
                                        width={`${imageWidth[currentDevice]}${imageWidth.unit}`}
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
                    <div role="presentation" className="premium-popup__modal_wrap_overlay" onClick={() => setOpenModal(false)}
                        style={{
                            ...gradientBackground(modalBackground)
                        }}
                    >
                    </div>
                    <div className={`premium-popup__modal_content animated animation-${contentStyles[0].animationType} animation-${contentStyles[0].animationSpeed}`}
                        data-delay={triggerSettings[0].delayTime}
                        data-animation={`${contentStyles[0].animationType} ${contentStyles[0].animationSpeed}`}
                        style={{
                            ...borderCss(modalBorder, currentDevice),
                            ...marginCss(modalMargin, currentDevice),
                            width: `${modalWidthValue}${modalWidth.unit}`,
                            maxHeight: `${modalMaxHeight}${modalHeight.unit}`,
                            boxShadow: `${modalShadow.horizontal}px ${modalShadow.vertical}px ${modalShadow.blur}px ${modalShadow.color} ${modalShadow.position}`,
                        }}>
                        {contentStyles[0].showHeader &&
                            <div className={`premium-modal-box-modal-header`}
                                style={{
                                    ...borderCss(headerBorder, currentDevice),
                                    backgroundColor: headerStyles[0].backColor,
                                }}>
                                <h3 className={`premium-modal-box-modal-title`}
                                    style={{
                                        ...typographyCss(headerTypography, currentDevice),
                                        color: headerStyles[0].color
                                    }}>
                                    {contentStyles[0].iconType === "icon" &&
                                        <i
                                            className={contentStyles[0].contentIcon}
                                            style={{
                                                fontSize: `${headerIconSize}${iconSize.unit}`,
                                                width: `${headerIconSize}${iconSize.unit}`,
                                                height: `${headerIconSize}${iconSize.unit}`
                                            }} ></i>
                                    }
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
                                {contentStyles[0].showUpperClose && contentStyles[0].showHeader && (
                                    <div className="premium-modal-box-close-button-container"
                                        style={{
                                            ...borderCss(upperBorder, currentDevice),
                                            ...paddingCss(upperPadding, currentDevice),
                                            backgroundColor: `${upperStyles[0].backColor}`
                                        }}>
                                        <button role="button" className="premium-modal-box-modal-close close-button" onClick={() => setOpenModal(false)}
                                            style={{
                                                fontSize: `${upperIconWidth[currentDevice]}${upperIconWidth.unit}`,
                                                color: `${upperStyles[0].color}`,

                                            }} data-dismiss="premium-modal" >×</button>
                                    </div>)}
                            </div>}
                        <div className={`premium-modal-box-modal-body`}
                            style={{
                                ...paddingCss(modalPadding, currentDevice),
                                background: modalStyles[0].textBackColor
                            }}>
                            {modalStyles[0].contentType === "text" ?
                                <RichText
                                    tagName={'p'}
                                    className={`premium-person__name`}
                                    value={modalStyles[0].contentText}
                                    onChange={(value) => saveModalStyles({ contentText: value })}
                                    style={{
                                        ...typographyCss(modalTypography, currentDevice),
                                        color: modalStyles[0].textColor
                                    }}
                                    keepPlaceholderOnFocus
                                />
                                : <InnerBlocks />}

                        </div>
                        {contentStyles[0].showLowerClose && (<div className={`premium-modal-box-modal-footer`} style={{
                            backgroundColor: modalStyles[0].footerBackColor
                        }}>
                            <button className={`premium-modal-box-modal-lower-close close-button`} role="button" data-dismiss="premium-modal"
                                onClick={() => setOpenModal(false)}
                                style={{
                                    ...typographyCss(lowerTypography, currentDevice),
                                    ...paddingCss(lowerPadding, currentDevice),
                                    ...borderCss(lowerBorder, currentDevice),
                                    width: `${lowerIconWidth[currentDevice]}${lowerIconWidth.unit}`,
                                    color: `${lowerStyles[0].color}`,
                                    backgroundColor: `${lowerStyles[0].backColor}`
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
export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)