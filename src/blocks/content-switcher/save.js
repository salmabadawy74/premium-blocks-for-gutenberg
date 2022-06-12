import classnames from "classnames"
import {
    RichText,
    useBlockProps,
    InnerBlocks
} from '@wordpress/block-editor';
import { gradientBackground, typographyCss } from '../../components/HelperFunction'

export default function save(props) {

    const { attributes, className } = props

    const {
        blockId,
        showLabel,
        firstLabel,
        secondLabel,
        display,
        labelTag,
        firstContent,
        secondContent,
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

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-content-switcher ${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`
                ),
            })}
        >
            <style>
                {`
                    .${blockId} .premium-content-switcher-toggle-switch-slider:before {
                        box-shadow: ${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position} !important;
                        background-color: ${controllerOneBackground.backgroundType === "solid" ? controllerOneBackground.backgroundColor : "#6ec1e4"};
                        background-image: ${btnbgControllerOne};
                        background-repeat: ${controllerOneBackground.backgroundRepeat};
                        background-position: ${controllerOneBackground.backgroundPosition};
                        background-size: ${controllerOneBackground.backgroundSize};
                        background-attachment: ${controllerOneBackground.fixed ? "fixed" : "unset"};
                     }
                    .${blockId} .premium-content-switcher-toggle-switch-slider {
                        box-shadow: ${switchShadow.horizontal}px ${switchShadow.vertical}px ${switchShadow.blur}px ${switchShadow.color} ${switchShadow.position} !important;
                    }
                 `}
            </style>

            <div className={`premium-content-switcher`}
                style={{
                    ...gradientBackground(containerBackground),
                    borderStyle: containerborder.borderType,
                    borderColor: containerborder.borderColor,
                    boxShadow: `${containerBoxShadow.horizontal || 0}px ${containerBoxShadow.vertical || 0}px ${containerBoxShadow.blur || 0}px ${containerBoxShadow.color} ${containerBoxShadow.position}`
                }}>
                <div className={`premium-content-switcher-toggle-${display}`}>
                    {showLabel && (<div className="premium-content-switcher-first-label">
                        <RichText.Content
                            tagName={labelTag.toLowerCase()}
                            className={`premium-content-switcher-${display}-editing`}
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
                            }}
                        />
                    </div>
                    )}
                    <div
                        className="premium-content-switcher-toggle-switch"
                    >
                        <label className={`premium-content-switcher-toggle-switch-label`}>
                            <input type="checkbox" className={`premium-content-switcher-toggle-switch-input ${blockId}`} />
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
                            }}
                        />
                    </div>
                    )}
                </div>
                <div
                    className={`premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`}
                >
                    <ul className="premium-content-switcher-two-content">
                        <li className={`premium-content-switcher-first-list premium-content-switcher-is-visible ${blockId}`}
                            style={{
                                background: firstContentStyles.firstContentBGColor,
                                borderStyle: firstContentborder.borderType,
                                borderColor: firstContentborder.borderColor,
                                boxShadow: `${firstContentBoxShadow.horizontal || 0}px ${firstContentBoxShadow.vertical || 0}px ${firstContentBoxShadow.blur || 0}px ${firstContentBoxShadow.color} ${firstContentBoxShadow.position}`
                            }}>
                            <InnerBlocks.Content />
                            {/* <RichText.Content
                                tagName="div"
                                className={`premium-content-switcher-first-content`}
                                value={firstContent}
                                style={{
                                    ...typographyCss(firstContentTypography, props.deviceType),
                                    color: firstContentStyles.firstContentColor,
                                    textShadow: `${firstContentShadow.horizontal || 0}px ${firstContentShadow.vertical || 0}px ${firstContentShadow.blur || 0}px ${firstContentShadow.color}`,
                                }}
                            /> */}
                        </li>
                        <li className={`premium-content-switcher-second-list premium-content-switcher-is-hidden ${blockId}`}
                            style={{
                                background: secondContentStyles.secondContentBGColor,
                                borderStyle: secondContentborder.borderType,
                                borderColor: secondContentborder.borderColor,
                                boxShadow: `${secondContentBoxShadow.horizontal || 0}px ${secondContentBoxShadow.vertical || 0}px ${secondContentBoxShadow.blur || 0}px ${secondContentBoxShadow.color} ${secondContentBoxShadow.position}`
                            }}>
                            <InnerBlocks.Content />
                            {/* <RichText.Content
                                tagName="div"
                                className={`premium-content-switcher-second-content`}
                                value={secondContent}
                                style={{
                                    ...typographyCss(secondContentTypography, props.deviceType),
                                    color: secondContentStyles.secondContentColor,
                                    textShadow: `${secondContentShadow.horizontal || 0}px ${secondContentShadow.vertical || 0}px ${secondContentShadow.blur || 0}px ${secondContentShadow.color}`,
                                }}
                            /> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}