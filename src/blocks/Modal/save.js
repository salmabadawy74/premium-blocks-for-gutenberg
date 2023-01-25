import classnames from 'classnames'
import { gradientBackground, generateCss, filterJsCss } from '@pbg/helpers';
const { InnerBlocks, useBlockProps } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        contentStyles,
        triggerSettings,
        triggerStyles,
        triggerBorder,
        upperStyles,
        upperBorder,
        modalStyles,
        modalBorder,
        triggerBorderH,
        modalBackground,
        triggerShadow,
        triggerTextShadow,
        modalShadow,
        triggerTypography,
        triggerFilter,
        triggerHoverFilter,
        hideDesktop,
        hideTablet,
        hideMobile
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-modal-trigger-container button.premium-modal-trigger-btn:hover`] = {
            'border-color': `${triggerBorderH && triggerBorderH.borderColor} !important`,
            'background-color': `${triggerStyles[0].triggerHoverBack} !important`,
            'border-style': `${triggerBorderH && triggerBorderH.borderType} !important`
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
            'border-style': `${triggerBorderH && triggerBorderH.borderType} !important`
        };
        styles[` .${blockId} .premium-modal-trigger-container:hover .premium-modal-trigger-text`] = {
            'border-color': `${triggerBorderH && triggerBorderH.borderColor} !important`,
            'border-style': `${triggerBorderH && triggerBorderH.borderType} !important`
        };
        return generateCss(styles);
    }

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-modal-box ${blockId}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            data-trigger={triggerSettings[0].triggerType}>
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles(),
                }}
            />
            <div className={`premium-modal-trigger-container`}
            >
                {(triggerSettings[0].triggerType === "button") &&
                    <button className={`premium-modal-trigger-btn wp-block-button__link premium-button premium-button__${triggerSettings[0].btnSize} `}
                        style={filterJsCss({
                            backgroundColor: triggerStyles[0].triggerBack,
                            borderStyle: triggerBorder.borderType,
                            borderColor: triggerBorder.borderColor,
                            boxShadow: `${triggerShadow.horizontal}px ${triggerShadow.vertical}px ${triggerShadow.blur}px ${triggerShadow.color} ${triggerShadow.position}`,
                        })}>
                        {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "before" &&
                            <i
                                className={`premium-modal-box-icon ${triggerSettings[0].icon}`}
                                style={filterJsCss({
                                    marginRight: `${triggerSettings[0].iconSpacing}px`,
                                    color: triggerStyles[0].iconColor
                                })}></i>
                        }
                        <span
                            style={filterJsCss({
                                color: triggerStyles[0].color,
                                fontFamily: triggerTypography.fontFamily,
                                fontWeight: triggerTypography.fontWeight,
                                fontStyle: triggerTypography.fontStyle,
                                textDecoration: triggerTypography?.textDecoration,
                                textTransform: triggerTypography?.textTransform,
                            })}>
                            {triggerSettings[0].btnText}
                        </span>
                        {triggerSettings[0].showIcon && triggerSettings[0].iconPosition == "after" &&
                            <i
                                className={`premium-modal-box-icon ${triggerSettings[0].icon}`}
                                style={filterJsCss({
                                    marginLeft: `${triggerSettings[0].iconSpacing}px`,
                                    color: triggerStyles[0].iconColor
                                })}></i>
                        }
                    </button>
                }
                {triggerSettings[0].triggerType === "image" && (
                    <img src={triggerSettings[0].triggerImgURL} className={`premium-modal-trigger-img`}
                        style={filterJsCss({
                            borderStyle: triggerBorder.borderType,
                            borderColor: triggerBorder.borderColor,
                            boxShadow: `${triggerShadow.horizontal}px ${triggerShadow.vertical}px ${triggerShadow.blur}px ${triggerShadow.color} ${triggerShadow.position}`,
                        })} />
                )
                }
                {triggerSettings[0].triggerType === "text" && (
                    <span className={`premium-modal-trigger-text`}
                        style={filterJsCss({
                            color: triggerStyles[0].color,
                            borderStyle: triggerBorder.borderType,
                            borderColor: triggerBorder.borderColor,
                            textShadow: `${triggerTextShadow.horizontal}px ${triggerTextShadow.vertical}px ${triggerTextShadow.blur}px ${triggerTextShadow.color}`,
                            fontFamily: triggerTypography.fontFamily,
                            fontWeight: triggerTypography.fontWeight,
                            fontStyle: triggerTypography.fontStyle,
                            textDecoration: triggerTypography?.textDecoration,
                            textTransform: triggerTypography?.textTransform,
                        })}>
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
                <div role="presentation" className="premium-popup__modal_wrap_overlay"
                    style={filterJsCss({
                        ...gradientBackground(modalBackground)
                    })}>
                </div>
                <div className={`premium-popup__modal_content animated animation-${contentStyles[0].animationType} animation-${contentStyles[0].animationSpeed}`}
                    data-delay={triggerSettings[0].delayTime}
                    data-animation={`${contentStyles[0].animationType} ${contentStyles[0].animationSpeed}`}
                    style={filterJsCss({
                        borderStyle: `${modalBorder.borderType}`,
                        borderColor: `${modalBorder.borderColor}`,
                        boxShadow: `${modalShadow.horizontal}px ${modalShadow.vertical}px ${modalShadow.blur}px ${modalShadow.color} ${modalShadow.position}`,
                    })}>
                    {contentStyles[0].showHeader && <div className={`premium-modal-box-modal-header`}>
                        <div className="premium-modal-box-close-button-container"
                            style={filterJsCss({
                                backgroundColor: `${upperStyles[0].backColor}`,
                                borderStyle: `${upperBorder.borderType}`,
                                borderColor: `${upperBorder.borderColor}`,

                            })}>
                            <button type="button" className="premium-modal-box-modal-close close-button"
                                style={filterJsCss({
                                    color: `${upperStyles[0].color}`,

                                })} data-dismiss="premium-modal" >×</button>
                        </div>
                    </div>}
                    <div className={`premium-modal-box-modal-body`}
                        style={filterJsCss({
                            background: modalStyles[0].textBackColor
                        })}>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </div >
    )
};

export default save;