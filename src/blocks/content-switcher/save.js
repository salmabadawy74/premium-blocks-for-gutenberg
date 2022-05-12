import classnames from "classnames"
import {
    RichText,
    useBlockProps
} from '@wordpress/block-editor';

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
        firstcontentlign,
        secondcontentlign,
        switcherStyles,
        // backgroundType,
        labelStyles,
        firstLabelBorderTop,
        firstLabelBorderRight,
        firstLabelBorderBottom,
        firstLabelBorderLeft,
        firstLabelBorderUpdated,
        firstLabelBorderWidth,
        firstLabelPaddingT,
        firstLabelPaddingR,
        firstLabelPaddingB,
        firstLabelPaddingL,
        firstLabelPaddingTTablet,
        firstLabelPaddingRTablet,
        firstLabelPaddingBTablet,
        firstLabelPaddingLTablet,
        firstLabelPaddingTMobile,
        firstLabelPaddingRMobile,
        firstLabelPaddingBMobile,
        firstLabelPaddingLMobile,
        secondLabelBorderTop,
        secondLabelBorderRight,
        secondLabelBorderBottom,
        secondLabelBorderLeft,
        secondLabelBorderUpdated,
        secondLabelBorderWidth,
        secondLabelPaddingT,
        secondLabelPaddingR,
        secondLabelPaddingB,
        secondLabelPaddingL,
        secondLabelPaddingTTablet,
        secondLabelPaddingRTablet,
        secondLabelPaddingBTablet,
        secondLabelPaddingLTablet,
        secondLabelPaddingTMobile,
        secondLabelPaddingRMobile,
        secondLabelPaddingBMobile,
        secondLabelPaddingLMobile,
        contentStyles,
        firstContentStyles,
        firstContentBorderTop,
        firstContentBorderRight,
        firstContentBorderBottom,
        firstContentBorderLeft,
        firstContentBorderUpdated,
        firstContentBorderWidth,
        firstContentMarginT,
        firstContentMarginR,
        firstContentMarginB,
        firstContentMarginL,
        firstContentMarginTTablet,
        firstContentMarginRTablet,
        firstContentMarginBTablet,
        firstContentMarginLTablet,
        firstContentMarginTMobile,
        firstContentMarginRMobile,
        firstContentMarginBMobile,
        firstContentMarginLMobile,
        contentPaddingT,
        contentPaddingR,
        contentPaddingB,
        contentPaddingL,
        contentPaddingTTablet,
        contentPaddingRTablet,
        contentPaddingBTablet,
        contentPaddingLTablet,
        contentPaddingTMobile,
        contentPaddingRMobile,
        contentPaddingBMobile,
        contentPaddingLMobile,
        secondContentStyles,
        secondContentBorderTop,
        secondContentBorderRight,
        secondContentBorderBottom,
        secondContentBorderLeft,
        secondContentBorderUpdated,
        secondContentBorderWidth,
        containerStyles,
        backgroundType,
        containerBorderTop,
        containerBorderRight,
        containerBorderBottom,
        containerBorderLeft,
        containerBorderUpdated,
        containerBorderWidth,
        containerPaddingT,
        containerPaddingR,
        containerPaddingB,
        containerPaddingL,
        containerPaddingTTablet,
        containerPaddingRTablet,
        containerPaddingBTablet,
        containerPaddingLTablet,
        containerPaddingTMobile,
        containerPaddingRMobile,
        containerPaddingBMobile,
        containerPaddingLMobile,
        containerMarginT,
        containerMarginR,
        containerMarginB,
        containerMarginL,
        containerMarginTTablet,
        containerMarginRTablet,
        containerMarginBTablet,
        containerMarginLTablet,
        containerMarginTMobile,
        containerMarginRMobile,
        containerMarginBMobile,
        containerMarginLMobile,
        effect,
        slide
    } = attributes

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-block-${block_id}`
                ),
            })}
            id={`premium-content-switcher-${block_id}`}
            style={{
                textAlign: align,
            }}
        >

            {/* <style>
                {`
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider:before {
                        //  border-radius: ${ContainerBorderRadius}${switcherStyles.containerRadiusType} !important;
                         box-shadow: ${switcherStyles.containerShadowHorizontal}px ${switcherStyles.containerShadowVertical}px ${switcherStyles.containerShadowBlur}px ${switcherStyles.containerShadowColor} ${switcherStyles.containerShadowPosition};
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider {
                        // border-radius: ${SwitcherBorderRadius}${switcherStyles.switchRadiusType} !important;
                         box-shadow: ${switcherStyles.switchShadowHorizontal}px ${switcherStyles.switchShadowVertical}px ${switcherStyles.switchShadowBlur}px ${switcherStyles.switchShadowColor} ${switcherStyles.switchShadowPosition};
                     }
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-first-label {
                         margin-right: ${LabelSpacing}px !important;
                    }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-second-label {
                        margin-left: ${LabelSpacing}px !important;
                    }
                   #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-first-label {
                         margin-bottom: ${LabelSpacing}px !important;
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-second-label {
                        margin-top: ${LabelSpacing}px !important;
                    }
                 `}
            </style> */}
            <div className={`premium-content-switcher`}
                style={{
                    textAlign: align,
                    backgroundColor: backgroundType === "solid" ? containerStyles.containerBack : "transparent",
                    boxShadow: `${containerStyles.containerBoxShadowHorizontal}px ${containerStyles.containerBoxShadowVertical}px ${containerStyles.containerBoxShadowBlur}px ${containerStyles.containerBoxShadowColor} ${containerStyles.containerBoxShadowPosition}`,
                    // backgroundImage: btnbg,
                    backgroundRepeat: containerStyles.backgroundRepeat,
                    backgroundPosition: containerStyles.backgroundPosition,
                    backgroundSize: containerStyles.backgroundSize,
                    backgroundAttachment: containerStyles.fixed ? "fixed" : "unset",
                    borderStyle: containerStyles.containerborderType,
                    borderWidth: containerBorderUpdated
                        ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
                        : containerBorderWidth + "px",
                    borderRadius: containerStyles.containerborderRadius + "px",
                    borderColor: containerStyles.containerborderColor,
                    // paddingTop: ContainerPaddingTop + containerStyles.containerPaddingType,
                    // paddingRight: ContainerPaddingRight + containerStyles.containerPaddingType,
                    // paddingBottom: ContainerPaddingBottom + containerStyles.containerPaddingType,
                    // paddingLeft: ContainerPaddingLeft + containerStyles.containerPaddingType,
                    // marginTop: ContainerMarginTop + containerStyles.containerMarginType,
                    // marginBottom: ContainerMarginBottom + containerStyles.containerMarginType,
                    // marginLeft: ContainerMarginLeft + containerStyles.containerMarginType,
                    // marginRight: ContainerMarginRight + containerStyles.containerMarginType,
                }}>
                <div className={`premium-content-switcher-toggle-${display}`}
                    style={{
                        textAlign: align,
                        justifyContent: align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align,
                        alignItems: display == "inline" ? "center" : align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align,
                    }}>
                    {showLabel && (<div className="premium-content-switcher-first-label">
                        <RichText.Content
                            tagName={labelTag.toLowerCase()}
                            className={`premium-content-switcher-${display}-editing`}
                            onChange={(newValue) => setAttributes({ firstLabel: newValue })}
                            value={firstLabel}
                            style={{
                                color: labelStyles.firstLabelColor,
                                // fontSize: FirstLabelSize + labelStyles.firstLabelfontSizeType,
                                letterSpacing: labelStyles.firstLabelLetter + "px",
                                textTransform: labelStyles.firstLabelUpper ? "uppercase" : "none",
                                fontStyle: labelStyles.firstLabelStyle,
                                fontWeight: labelStyles.firstLabelWeight,
                                lineHeight: (labelStyles.firstLabelLine ? labelStyles.firstLabelLine : "") + "px",
                                fontFamily: labelStyles.firstLabelFontFamily,
                                borderStyle: labelStyles.firstLabelborderType,
                                borderWidth: firstLabelBorderUpdated
                                    ? `${firstLabelBorderTop}px ${firstLabelBorderRight}px ${firstLabelBorderBottom}px ${firstLabelBorderLeft}px`
                                    : firstLabelBorderWidth + "px",
                                borderRadius: labelStyles.firstLabelborderRadius + "px",
                                borderColor: labelStyles.firstLabelborderColor,
                                // paddingTop: FirstLabelPaddingTop + labelStyles.firstLabelPaddingType,
                                // paddingBottom: FirstLabelPaddingBottom + labelStyles.firstLabelPaddingType,
                                // paddingLeft: FirstLabelPaddingLeft + labelStyles.firstLabelPaddingType,
                                // paddingRight: FirstLabelPaddingRight + labelStyles.firstLabelPaddingType,
                                textShadow: `${labelStyles.firstLabelShadowHorizontal}px ${labelStyles.firstLabelShadowVertical}px ${labelStyles.firstLabelShadowBlur}px ${labelStyles.firstLabelShadowColor}`,
                                boxShadow: `${labelStyles.firstLabelBoxShadowHorizontal}px ${labelStyles.firstLabelBoxShadowVertical}px ${labelStyles.firstLabelBoxShadowBlur}px ${labelStyles.firstLabelBoxShadowColor} ${labelStyles.firstLabelBoxShadowPosition}`,
                            }}
                        />
                    </div>
                    )}
                    <div
                        className="premium-content-switcher-toggle-switch"
                        style={{
                            // fontSize: SwitcherSize + 'px',
                        }}
                    >
                        <label className={`premium-content-switcher-toggle-switch-label`}>
                            <input type="checkbox" className={`premium-content-switcher-toggle-switch-input ${block_id}`} />
                            <span className="premium-content-switcher-toggle-switch-slider round"
                                style={{
                                    // borderRadius: switchRadius + "px"
                                }}></span>
                        </label>
                    </div>
                    {showLabel && (<div className="premium-content-switcher-second-label">
                        <RichText.Content
                            tagName={labelTag.toLowerCase()}
                            className={`premium-content-switcher-${display}-editing`}
                            onChange={(newValue) => setAttributes({ secondLabel: newValue })}
                            value={secondLabel}
                            style={{
                                color: labelStyles.secondLabelColor,
                                // fontSize: SecondLabelSize + labelStyles.secondLabelfontSizeType,
                                letterSpacing: labelStyles.secondLabelLetter + "px",
                                textTransform: labelStyles.secondLabelUpper ? "uppercase" : "none",
                                fontStyle: labelStyles.secondLabelStyle,
                                fontWeight: labelStyles.secondLabelWeight,
                                lineHeight: (labelStyles.secondLabelLine ? labelStyles.secondLabelLine : "") + "px",
                                fontFamily: labelStyles.secondLabelFontFamily,
                                borderStyle: labelStyles.secondLabelborderType,
                                borderWidth: secondLabelBorderUpdated
                                    ? `${secondLabelBorderTop}px ${secondLabelBorderRight}px ${secondLabelBorderBottom}px ${secondLabelBorderLeft}px`
                                    : secondLabelBorderWidth + "px",
                                borderRadius: labelStyles.secondLabelborderRadius + "px",
                                borderColor: labelStyles.secondLabelborderColor,
                                // paddingTop: SecondLabelPaddingTop + labelStyles.secondLabelPaddingType,
                                // paddingBottom: SecondLabelPaddingBottom + labelStyles.secondLabelPaddingType,
                                // paddingLeft: SecondLabelPaddingLeft + labelStyles.secondLabelPaddingType,
                                // paddingRight: SecondLabelPaddingRight + labelStyles.secondLabelPaddingType,
                                textShadow: `${labelStyles.secondLabelShadowHorizontal}px ${labelStyles.secondLabelShadowVertical}px ${labelStyles.secondLabelShadowBlur}px ${labelStyles.secondLabelShadowColor}`,
                                boxShadow: `${labelStyles.secondLabelBoxShadowHorizontal}px ${labelStyles.secondLabelBoxShadowVertical}px ${labelStyles.secondLabelBoxShadowBlur}px ${labelStyles.secondLabelBoxShadowColor} ${labelStyles.secondLabelBoxShadowPosition}`,
                            }}
                        />
                    </div>
                    )}
                </div>
                <div
                    className={`premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`}
                    style={{
                        // marginTop: FirstContentMarginTop + firstContentStyles.firstContentMarginType,
                        // marginBottom: FirstContentMarginBottom + firstContentStyles.firstContentMarginType,
                        // marginLeft: FirstContentMarginLeft + firstContentStyles.firstContentMarginType,
                        // marginRight: FirstContentMarginRight + firstContentStyles.firstContentMarginType,
                    }}
                >
                    <ul className="premium-content-switcher-two-content">
                        <li className={`premium-content-switcher-is-visible premium-content-switcher-first-list ${block_id}`}
                            style={{
                                background: firstContentStyles.firstContentBGColor,
                                borderStyle: firstContentStyles.firstContentborderType,
                                borderWidth: firstContentBorderUpdated
                                    ? `${firstContentBorderTop}px ${firstContentBorderRight}px ${firstContentBorderBottom}px ${firstContentBorderLeft}px`
                                    : firstContentBorderWidth + "px",
                                borderRadius: firstContentStyles.firstContentborderRadius + "px",
                                borderColor: firstContentStyles.firstContentborderColor,
                                // minHeight: ContentHeight + contentStyles.contentHeightType,
                                // paddingTop: ContentPaddingTop + firstContentStyles.firstContentPaddingType,
                                // paddingBottom: ContentPaddingBottom + firstContentStyles.firstContentPaddingType,
                                // paddingLeft: ContentPaddingLeft + firstContentStyles.firstContentPaddingType,
                                // paddingRight: ContentPaddingRight + firstContentStyles.firstContentPaddingType,
                                boxShadow: `${firstContentStyles.firstContentBoxShadowHorizontal}px ${firstContentStyles.firstContentBoxShadowVertical}px ${firstContentStyles.firstContentBoxShadowBlur}px ${firstContentStyles.firstContentBoxShadowColor} ${firstContentStyles.firstContentBoxShadowPosition}`,
                            }}>
                            <RichText.Content
                                tagName="div"
                                className={`premium-content-switcher-first-content`}
                                value={firstContent}
                                onChange={value => {
                                    setAttributes({ firstContent: value })
                                }}
                                style={{
                                    textAlign: firstcontentlign,
                                    justifyContent: firstcontentlign,
                                    color: firstContentStyles.firstContentColor,
                                    // fontSize: FirstContentSize + firstContentStyles.firstContentfontSizeType,
                                    letterSpacing: firstContentStyles.firstContentLetter + "px",
                                    textTransform: firstContentStyles.firstContentUpper ? "uppercase" : "none",
                                    fontStyle: firstContentStyles.firstContentStyle,
                                    fontWeight: firstContentStyles.firstContentWeight,
                                    lineHeight: (firstContentStyles.firstContentLine ? firstContentStyles.firstContentLine : "") + "px",
                                    fontFamily: firstContentStyles.firstContentFontFamily,
                                    textShadow: `${firstContentStyles.firstContentShadowHorizontal}px ${firstContentStyles.firstContentShadowVertical}px ${firstContentStyles.firstContentShadowBlur}px ${firstContentStyles.firstContentShadowColor}`,
                                }}
                            />
                        </li>
                        <li className={`premium-content-switcher-is-hidden premium-content-switcher-second-list ${block_id}`}
                            style={{
                                background: secondContentStyles.secondContentBGColor,
                                borderStyle: secondContentStyles.secondContentborderType,
                                borderWidth: secondContentBorderUpdated
                                    ? `${secondContentBorderTop}px ${secondContentBorderRight}px ${secondContentBorderBottom}px ${secondContentBorderLeft}px`
                                    : secondContentBorderWidth + "px",
                                borderRadius: secondContentStyles.secondContentborderRadius + "px",
                                borderColor: secondContentStyles.secondContentborderColor,
                                // minHeight: ContentHeight + contentStyles.contentHeightType,
                                // paddingTop: ContentPaddingTop + secondContentStyles.secondContentPaddingType,
                                // paddingBottom: ContentPaddingBottom + secondContentStyles.secondContentPaddingType,
                                // paddingLeft: ContentPaddingLeft + secondContentStyles.secondContentPaddingType,
                                // paddingRight: ContentPaddingRight + secondContentStyles.secondContentPaddingType,
                                boxShadow: `${secondContentStyles.secondContentBoxShadowHorizontal}px ${secondContentStyles.secondContentBoxShadowVertical}px ${secondContentStyles.secondContentBoxShadowBlur}px ${secondContentStyles.secondContentBoxShadowColor} ${secondContentStyles.secondContentBoxShadowPosition}`,
                            }}>
                            <RichText.Content
                                tagName="div"
                                className={`premium-content-switcher-second-content`}
                                value={secondContent}
                                onChange={value => {
                                    setAttributes({ secondContent: value })
                                }}
                                style={{
                                    textAlign: secondcontentlign,
                                    justifyContent: secondcontentlign,
                                    color: secondContentStyles.secondContentColor,
                                    // fontSize: SecondContentSize + secondContentStyles.secondContentfontSizeType,
                                    letterSpacing: secondContentStyles.secondContentLetter + "px",
                                    textTransform: secondContentStyles.secondContentUpper ? "uppercase" : "none",
                                    fontStyle: secondContentStyles.secondContentStyle,
                                    fontWeight: secondContentStyles.secondContentWeight,
                                    lineHeight: (secondContentStyles.secondContentLine ? secondContentStyles.secondContentLine : "") + "px",
                                    fontFamily: secondContentStyles.secondContentFontFamily,
                                    textShadow: `${secondContentStyles.secondContentShadowHorizontal}px ${secondContentStyles.secondContentShadowVertical}px ${secondContentStyles.secondContentShadowBlur}px ${secondContentStyles.secondContentShadowColor}`,
                                }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}