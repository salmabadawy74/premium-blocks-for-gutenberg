import classnames from "classnames"
import {
    RichText,
    useBlockProps
} from '@wordpress/block-editor';
import { gradientBackground, borderCss, padddingCss, marginCss, typographyCss } from '../../components/HelperFunction'

export default function save(props) {

    const { attributes, className } = props

    const {
        block_id,
        align,
        showLabel,
        firstLabel,
        secondLabel,
        display,
        labelTag,
        firstContent,
        secondContent,
        firstcontentalign,
        secondcontentlign,
        labelStyles,
        firstContentStyles,
        secondContentStyles,
        effect,
        slide,
        firstLabelborder,
        switchShadow,
        containerShadow,
        firstLabelShadow,
        firstLabelBoxShadow,
        firstLabelTypography,
        secondLabelTypography,
        secondLabelShadow,
        secondLabelBoxShadow,
        secondLabelborder,
        firstContentTypography,
        firstContentShadow,
        firstContentBoxShadow,
        firstContentborder,
        secondContentTypography,
        secondContentShadow,
        secondContentBoxShadow,
        secondContentborder,
        containerBoxShadow,
        containerborder,
        hideDesktop,
        hideTablet,
        hideMobile,
        controllerOneBackground,
        controllerTwoBackground,
        controller,
        switcherBackground,
        containerBackground
    } = attributes

    let btnGradControllerOne, btnGrad2ControllerOne, btnbgControllerOne;

    if (undefined !== controllerOneBackground.backgroundType && 'gradient' === controllerOneBackground.backgroundType) {
        btnGradControllerOne = ('transparent' === controllerOneBackground.backgroundColor || undefined === controllerOneBackground.backgroundColor ? 'rgba(255,255,255,0)' : controllerOneBackground.backgroundColor);
        btnGrad2ControllerOne = (undefined !== controllerOneBackground.gradientColorTwo && undefined !== controllerOneBackground.gradientColorTwo && '' !== controllerOneBackground.gradientColorTwo ? controllerOneBackground.gradientColorTwo : '#777');
        if ('radial' === controllerOneBackground.gradientType) {
            btnbgControllerOne = `radial-gradient(at ${controllerOneBackground.gradientPosition}, ${btnGradControllerOne} ${controllerOneBackground.gradientLocationOne}%, ${btnGrad2ControllerOne} ${controllerOneBackground.gradientLocationTwo}%)`;
        } else if ('radial' !== controllerOneBackground.gradientType) {
            btnbgControllerOne = `linear-gradient(${controllerOneBackground.gradientAngle}deg, ${btnGradControllerOne} ${controllerOneBackground.gradientLocationOne}%, ${btnGrad2ControllerOne} ${controllerOneBackground.gradientLocationTwo}%)`;
        }
    } else {
        btnbgControllerOne = controllerOneBackground.backgroundImageURL ? `url('${controllerOneBackground.backgroundImageURL}')` : ''
    }

    let btnGradControllerTwo, btnGrad2ControllerTwo, btnbgControllerTwo;

    if (undefined !== controllerTwoBackground.backgroundType && 'gradient' === controllerTwoBackground.backgroundType) {
        btnGradControllerTwo = ('transparent' === controllerTwoBackground.backgroundColor || undefined === controllerTwoBackground.backgroundColor ? 'rgba(255,255,255,0)' : controllerTwoBackground.backgroundColor);
        btnGrad2ControllerTwo = (undefined !== controllerTwoBackground.gradientColorTwo && undefined !== controllerTwoBackground.gradientColorTwo && '' !== controllerTwoBackground.gradientColorTwo ? controllerTwoBackground.gradientColorTwo : '#777');
        if ('radial' === controllerTwoBackground.gradientType) {
            btnbgControllerTwo = `radial-gradient(at ${controllerTwoBackground.gradientPosition}, ${btnGradControllerTwo} ${controllerTwoBackground.gradientLocationOne}%, ${btnGrad2ControllerTwo} ${controllerTwoBackground.gradientLocationTwo}%)`;
        } else if ('radial' !== controllerTwoBackground.gradientType) {
            btnbgControllerTwo = `linear-gradient(${controllerTwoBackground.gradientAngle}deg, ${btnGradControllerTwo} ${controllerTwoBackground.gradientLocationOne}%, ${btnGrad2ControllerTwo} ${controllerTwoBackground.gradientLocationTwo}%)`;
        }
    } else {
        btnbgControllerTwo = controllerTwoBackground.backgroundImageURL ? `url('${controllerTwoBackground.backgroundImageURL}')` : ''
    }

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`
                ),
            })}
            id={`premium-content-switcher-${block_id}`}
            style={{
                textAlign: align[props.deviceType],
            }}
        >
            <style>
                {`
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider:before {
                        box-shadow: ${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position} !important;
                        background-color: ${controller ? (controllerTwoBackground.backgroundType === "solid" ? controllerTwoBackground.backgroundColor : "#6ec1e4") : (controllerOneBackground.backgroundType === "solid" ? controllerOneBackground.backgroundColor : "#6ec1e4")};
                        background-image: ${controller ? btnbgControllerTwo : btnbgControllerOne};
                        background-repeat: ${controller ? controllerTwoBackground.backgroundRepeat : controllerOneBackground.backgroundRepeat};
                        background-position: ${controller ? controllerTwoBackground.backgroundPosition : controllerOneBackground.backgroundPosition};
                        background-size: ${controller ? controllerTwoBackground.backgroundSize : controllerOneBackground.backgroundSize};
                        background-attachment: ${controller ? (controllerTwoBackground.fixed ? "fixed" : "unset") : (controllerOneBackground.fixed ? "fixed" : "unset")};
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider {
                        box-shadow: ${switchShadow.horizontal}px ${switchShadow.vertical}px ${switchShadow.blur}px ${switchShadow.color} ${switchShadow.position} !important;
                    }
                 `}
            </style>

            <div className={`premium-content-switcher`}
                style={{
                    ...gradientBackground(containerBackground),
                    textAlign: align[props.deviceType],
                    // backgroundColor: backgroundType === "solid" ? containerStyles.containerBack : "transparent",
                    // // backgroundImage: btnbg,
                    // backgroundRepeat: containerStyles.backgroundRepeat,
                    // backgroundPosition: containerStyles.backgroundPosition,
                    // backgroundSize: containerStyles.backgroundSize,
                    // backgroundAttachment: containerStyles.fixed ? "fixed" : "unset",
                    borderStyle: containerborder.borderType,
                    borderColor: containerborder.borderColor,
                    boxShadow: `${containerBoxShadow.horizontal || 0}px ${containerBoxShadow.vertical || 0}px ${containerBoxShadow.blur || 0}px ${containerBoxShadow.color} ${containerBoxShadow.position}`
                    // borderStyle: containerStyles.containerborderType,
                    // borderWidth: containerBorderUpdated
                    //     ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
                    //     : containerBorderWidth + "px",
                    // borderRadius: containerStyles.containerborderRadius + "px",
                    // borderColor: containerStyles.containerborderColor
                }}>
                <div className={`premium-content-switcher-toggle-${display}`}
                    style={{
                        textAlign: align[props.deviceType],
                        justifyContent: align[props.deviceType] == "right" ? "flex-end" : align[props.deviceType] == "left" ? 'flex-start' : align[props.deviceType],
                        alignItems: display == "inline" ? "center" : align[props.deviceType] == "right" ? "flex-end" : align[props.deviceType] == "left" ? 'flex-start' : align[props.deviceType],
                    }}>
                    {showLabel && (<div className="premium-content-switcher-first-label">
                        <RichText.Content
                            tagName={labelTag.toLowerCase()}
                            className={`premium-content-switcher-${display}-editing`}
                            onChange={(newValue) => setAttributes({ firstLabel: newValue })}
                            value={firstLabel}
                            style={{
                                ...typographyCss(firstLabelTypography, props.deviceType),
                                margin: 0,
                                color: labelStyles.firstLabelColor,
                                background: labelStyles.firstLabelBGColor,
                                borderStyle: firstLabelborder.borderType,
                                borderColor: firstLabelborder.borderColor,
                                boxShadow: `${firstLabelBoxShadow.horizontal || 0}px ${firstLabelBoxShadow.vertical || 0}px ${firstLabelBoxShadow.blur || 0}px ${firstLabelBoxShadow.color} ${firstLabelBoxShadow.position}`,
                                textShadow: `${firstLabelShadow.horizontal || 0}px ${firstLabelShadow.vertical || 0}px ${firstLabelShadow.blur || 0}px ${firstLabelShadow.color}`,
                                // letterSpacing: labelStyles.firstLabelLetter + "px",
                                // textTransform: labelStyles.firstLabelUpper ? "uppercase" : "none",
                                // fontStyle: labelStyles.firstLabelStyle,
                                // fontWeight: labelStyles.firstLabelWeight,
                                // lineHeight: (labelStyles.firstLabelLine ? labelStyles.firstLabelLine : "") + "px",
                                // fontFamily: labelStyles.firstLabelFontFamily,
                                // borderStyle: labelStyles.firstLabelborderType,
                                // borderWidth: firstLabelBorderUpdated
                                //     ? `${firstLabelBorderTop}px ${firstLabelBorderRight}px ${firstLabelBorderBottom}px ${firstLabelBorderLeft}px`
                                //     : firstLabelBorderWidth + "px",
                                // borderRadius: labelStyles.firstLabelborderRadius + "px",
                                // borderColor: labelStyles.firstLabelborderColor,
                                // textShadow: `${labelStyles.firstLabelShadowHorizontal}px ${labelStyles.firstLabelShadowVertical}px ${labelStyles.firstLabelShadowBlur}px ${labelStyles.firstLabelShadowColor}`,
                                // boxShadow: `${labelStyles.firstLabelBoxShadowHorizontal}px ${labelStyles.firstLabelBoxShadowVertical}px ${labelStyles.firstLabelBoxShadowBlur}px ${labelStyles.firstLabelBoxShadowColor} ${labelStyles.firstLabelBoxShadowPosition}`,
                            }}
                        />
                    </div>
                    )}
                    <div
                        className="premium-content-switcher-toggle-switch"
                    >
                        <label className={`premium-content-switcher-toggle-switch-label`}>
                            <input type="checkbox" className={`premium-content-switcher-toggle-switch-input ${block_id}`} />
                            <span
                                className="premium-content-switcher-toggle-switch-slider round"
                                style={{
                                    ...gradientBackground(switcherBackground),
                                }}
                            ></span>
                        </label>
                    </div>
                    {showLabel && (<div className="premium-content-switcher-second-label">
                        <RichText.Content
                            tagName={labelTag.toLowerCase()}
                            className={`premium-content-switcher-${display}-editing`}
                            onChange={(newValue) => setAttributes({ secondLabel: newValue })}
                            value={secondLabel}
                            style={{
                                ...typographyCss(secondLabelTypography, props.deviceType),
                                margin: 0,
                                color: labelStyles.secondLabelColor,
                                background: labelStyles.secondLabelBGColor,
                                borderStyle: secondLabelborder.borderType,
                                borderColor: secondLabelborder.borderColor,
                                boxShadow: `${secondLabelBoxShadow.horizontal || 0}px ${secondLabelBoxShadow.vertical || 0}px ${secondLabelBoxShadow.blur || 0}px ${secondLabelBoxShadow.color} ${secondLabelBoxShadow.position}`,
                                textShadow: `${secondLabelShadow.horizontal || 0}px ${secondLabelShadow.vertical || 0}px ${secondLabelShadow.blur || 0}px ${secondLabelShadow.color}`,

                                // letterSpacing: labelStyles.secondLabelLetter + "px",
                                // textTransform: labelStyles.secondLabelUpper ? "uppercase" : "none",
                                // fontStyle: labelStyles.secondLabelStyle,
                                // fontWeight: labelStyles.secondLabelWeight,
                                // lineHeight: (labelStyles.secondLabelLine ? labelStyles.secondLabelLine : "") + "px",
                                // fontFamily: labelStyles.secondLabelFontFamily,
                                // borderStyle: labelStyles.secondLabelborderType,
                                // borderWidth: secondLabelBorderUpdated
                                //     ? `${secondLabelBorderTop}px ${secondLabelBorderRight}px ${secondLabelBorderBottom}px ${secondLabelBorderLeft}px`
                                //     : secondLabelBorderWidth + "px",
                                // borderRadius: labelStyles.secondLabelborderRadius + "px",
                                // borderColor: labelStyles.secondLabelborderColor,
                                // textShadow: `${labelStyles.secondLabelShadowHorizontal}px ${labelStyles.secondLabelShadowVertical}px ${labelStyles.secondLabelShadowBlur}px ${labelStyles.secondLabelShadowColor}`,
                                // boxShadow: `${labelStyles.secondLabelBoxShadowHorizontal}px ${labelStyles.secondLabelBoxShadowVertical}px ${labelStyles.secondLabelBoxShadowBlur}px ${labelStyles.secondLabelBoxShadowColor} ${labelStyles.secondLabelBoxShadowPosition}`,
                            }}
                        />
                    </div>
                    )}
                </div>
                <div
                    className={`premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`}
                >
                    <ul className="premium-content-switcher-two-content">
                        <li className={`premium-content-switcher-first-list premium-content-switcher-is-visible ${block_id}`}
                            style={{
                                background: firstContentStyles.firstContentBGColor,
                                borderStyle: firstContentborder.borderType,
                                borderColor: firstContentborder.borderColor,
                                boxShadow: `${firstContentBoxShadow.horizontal || 0}px ${firstContentBoxShadow.vertical || 0}px ${firstContentBoxShadow.blur || 0}px ${firstContentBoxShadow.color} ${firstContentBoxShadow.position}`
                                // borderStyle: firstContentStyles.firstContentborderType,
                                // borderWidth: firstContentBorderUpdated
                                //     ? `${firstContentBorderTop}px ${firstContentBorderRight}px ${firstContentBorderBottom}px ${firstContentBorderLeft}px`
                                //     : firstContentBorderWidth + "px",
                                // borderRadius: firstContentStyles.firstContentborderRadius + "px",
                                // borderColor: firstContentStyles.firstContentborderColor,
                                // boxShadow: `${firstContentStyles.firstContentBoxShadowHorizontal}px ${firstContentStyles.firstContentBoxShadowVertical}px ${firstContentStyles.firstContentBoxShadowBlur}px ${firstContentStyles.firstContentBoxShadowColor} ${firstContentStyles.firstContentBoxShadowPosition}`,
                            }}>
                            <RichText.Content
                                tagName="div"
                                className={`premium-content-switcher-first-content`}
                                value={firstContent}
                                onChange={value => {
                                    setAttributes({ firstContent: value })
                                }}
                                style={{
                                    ...typographyCss(firstContentTypography, props.deviceType),
                                    textAlign: firstcontentalign[props.deviceType],
                                    justifyContent: firstcontentalign[props.deviceType],
                                    color: firstContentStyles.firstContentColor,
                                    // letterSpacing: firstContentStyles.firstContentLetter + "px",
                                    // textTransform: firstContentStyles.firstContentUpper ? "uppercase" : "none",
                                    // fontStyle: firstContentStyles.firstContentStyle,
                                    // fontWeight: firstContentStyles.firstContentWeight,
                                    // lineHeight: (firstContentStyles.firstContentLine ? firstContentStyles.firstContentLine : "") + "px",
                                    // fontFamily: firstContentStyles.firstContentFontFamily,
                                    textShadow: `${firstContentShadow.horizontal || 0}px ${firstContentShadow.vertical || 0}px ${firstContentShadow.blur || 0}px ${firstContentShadow.color}`,
                                }}
                            />
                        </li>
                        <li className={`premium-content-switcher-second-list premium-content-switcher-is-hidden ${block_id}`}
                            style={{
                                background: secondContentStyles.secondContentBGColor,
                                borderStyle: secondContentborder.borderType,
                                borderColor: secondContentborder.borderColor,
                                // borderStyle: secondContentStyles.secondContentborderType,
                                // borderWidth: secondContentBorderUpdated
                                //     ? `${secondContentBorderTop}px ${secondContentBorderRight}px ${secondContentBorderBottom}px ${secondContentBorderLeft}px`
                                //     : secondContentBorderWidth + "px",
                                // borderRadius: secondContentStyles.secondContentborderRadius + "px",
                                // borderColor: secondContentStyles.secondContentborderColor,
                                boxShadow: `${secondContentBoxShadow.horizontal || 0}px ${secondContentBoxShadow.vertical || 0}px ${secondContentBoxShadow.blur || 0}px ${secondContentBoxShadow.color} ${secondContentBoxShadow.position}`
                            }}>
                            <RichText.Content
                                tagName="div"
                                className={`premium-content-switcher-second-content`}
                                value={secondContent}
                                onChange={value => {
                                    setAttributes({ secondContent: value })
                                }}
                                style={{
                                    ...typographyCss(secondContentTypography, props.deviceType),
                                    textAlign: secondcontentlign[props.deviceType],
                                    justifyContent: secondcontentlign[props.deviceType],
                                    color: secondContentStyles.secondContentColor,
                                    // letterSpacing: secondContentStyles.secondContentLetter + "px",
                                    // textTransform: secondContentStyles.secondContentUpper ? "uppercase" : "none",
                                    // fontStyle: secondContentStyles.secondContentStyle,
                                    // fontWeight: secondContentStyles.secondContentWeight,
                                    // lineHeight: (secondContentStyles.secondContentLine ? secondContentStyles.secondContentLine : "") + "px",
                                    // fontFamily: secondContentStyles.secondContentFontFamily,
                                    textShadow: `${secondContentShadow.horizontal || 0}px ${secondContentShadow.vertical || 0}px ${secondContentShadow.blur || 0}px ${secondContentShadow.color}`,
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}