const {
    Fragment
} = wp.element;
const { RichText } = wp.blockEditor;
export default function save(props) {

    const { attributes } = props

    const {
        block_id,
        align,
        titleTag,
        style,
        title,
        iconValue,
        iconType,
        icon,
        lottieURl,
        loop,
        reversedir,
        iconPosition,
        imageURL,
        link,
        url,
        target,
        iconAlign,
        stripePosition,
        titleStyles,
        stripeAlign,
        backgroundText,
        BackText,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes;

    const styleContainer = title.split("").map(letter => {
        return (
            <RichText.Content
                tagName={titleTag.toLowerCase()}
                className={`premium-title-style9-letter`}
                value={letter}
                style={{
                    color: titleStyles[0].titleColor
                }}
            />
        )
    });

    return (
        <div
            id={`premium-title-${block_id}`}
            className={`premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: align,
            }}>
            <div className={`premium-title   ${backgroundText ? 'premium-title-bg-text' : ""}`} style={{
                textAlign: align,
            }} data-backgroundText={BackText}>
                <div className={` premium-title-container ${style} ${style}-${align}`} data-blur-delay={titleStyles[0].animateDelay} data-shiny-dur={titleStyles[0].animateduration}>
                    <div className={`premium-title-header premium-title-${style}__wrap ${align} ${iconValue ? iconPosition : ""} ${iconPosition == 'top' ? `premium-title-${iconAlign}` : ""}`} data-blur-delay={titleStyles[0].animateDelay} data-shiny-dur={titleStyles[0].animateduration}>
                        {
                            style === 'style7' ?
                                <Fragment>
                                    {
                                        iconPosition != 'top' && iconValue &&
                                        <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                            <span className={`premium-title-style7-stripe-span`}></span>
                                        </span>
                                    }
                                    {
                                        !iconValue &&
                                        <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                            <span className={`premium-title-style7-stripe-span`}></span>
                                        </span>
                                    }
                                    <div className={`premium-title-style7-inner-title`}>
                                        {
                                            iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                        }
                                        {
                                            iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                        }
                                        {
                                            iconValue && iconType == 'lottie' &&
                                            <div className="premium-title-icon premium-lottie-animation" data-lottie-loop={loop} data-lottie-url={`${lottieURl}`} data-lottie-reverse={reversedir}>

                                            </div>
                                        }

                                        {
                                            iconPosition === 'top' &&
                                            <span className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign}`}>
                                                <span className={`premium-title-style7-stripe-span`}></span>
                                            </span>
                                        }
                                        <RichText.Content
                                            tagName={titleTag.toLowerCase()}
                                            className={`premium-title-text-title`}
                                            value={title}
                                            style={{
                                                color: titleStyles[0].titleColor,
                                                // fontSize: TitleSize + titleStyles[0].titlefontSizeType,
                                                fontWeight: titleStyles[0].titleWeight,
                                                letterSpacing: titleStyles[0].titleLetter + "px",
                                                lineHeight: titleStyles[0].titleLine + "px",
                                                fontStyle: titleStyles[0].titleStyle,
                                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                fontFamily: titleStyles[0].titleFontFamily,
                                                textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`,
                                                // marginTop: TitleMarginTop + titleStyles[0].titleMarginType,
                                                // marginBottom: TitleMarginBottom + titleStyles[0].titleMarginType,
                                                // marginLeft: TitleMarginLeft + titleStyles[0].titleMarginType,
                                                // marginRight: TitleMarginRight + titleStyles[0].titleMarginType,
                                                // paddingTop: TitlePaddingTop + titleStyles[0].titlePaddingType,
                                                // paddingBottom: TitlePaddingBottom + titleStyles[0].titlePaddingType,
                                                // paddingLeft: TitlePaddingLeft + titleStyles[0].titlePaddingType,
                                                // paddingRight: TitlePaddingRight + titleStyles[0].titlePaddingType,
                                                minHeight: '15px'
                                            }}
                                        />
                                    </div>
                                </Fragment>
                                : style === "style9" ? <Fragment>
                                    {
                                        iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                    }
                                    {
                                        iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                    }
                                    {
                                        iconValue && iconType == 'lottie' &&
                                        <div className="premium-title-icon premium-lottie-animation" data-lottie-loop={loop} data-lottie-url={`${lottieURl}`} data-lottie-reverse={reversedir}>

                                        </div>
                                    }
                                    <span
                                        className={`premium-letters-container`}
                                        style={{
                                            color: titleStyles[0].titleColor,
                                            // marginTop: TitleMarginTop + titleStyles[0].titleMarginType,
                                            // marginBottom: TitleMarginBottom + titleStyles[0].titleMarginType,
                                            // marginLeft: TitleMarginLeft + titleStyles[0].titleMarginType,
                                            // marginRight: TitleMarginRight + titleStyles[0].titleMarginType,
                                            // paddingTop: TitlePaddingTop + titleStyles[0].titlePaddingType,
                                            // paddingBottom: TitlePaddingBottom + titleStyles[0].titlePaddingType,
                                            // paddingLeft: TitlePaddingLeft + titleStyles[0].titlePaddingType,
                                            // paddingRight: TitlePaddingRight + titleStyles[0].titlePaddingType,
                                        }}
                                    >
                                        {styleContainer}
                                    </span>

                                </Fragment> : <Fragment>
                                        {
                                            iconValue && iconType == 'icon' && <i className={`premium-title-icon ${icon}`} />
                                        }
                                        {
                                            iconValue && iconType == 'image' && < img className={`premium-title-icon`} src={imageURL} />
                                        }
                                        {
                                            iconValue && iconType == 'lottie' &&
                                            <div className="premium-title-icon premium-lottie-animation" data-lottie-loop={loop} data-lottie-url={`${lottieURl}`} data-lottie-reverse={reversedir}>

                                            </div>
                                        }
                                        <RichText.Content
                                            tagName={titleTag.toLowerCase()}
                                            className={`premium-title-text-title`}
                                            value={title}
                                            style={{
                                                color: titleStyles[0].titleColor,
                                                // fontSize: TitleSize + titleStyles[0].titlefontSizeType,
                                                fontWeight: titleStyles[0].titleWeight,
                                                letterSpacing: titleStyles[0].titleLetter + "px",
                                                lineHeight: titleStyles[0].titleLine + "px",
                                                fontStyle: titleStyles[0].titleStyle,
                                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                                fontFamily: titleStyles[0].titleFontFamily,
                                                textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`,
                                                // marginTop: TitleMarginTop + titleStyles[0].titleMarginType,
                                                // marginBottom: TitleMarginBottom + titleStyles[0].titleMarginType,
                                                // marginLeft: TitleMarginLeft + titleStyles[0].titleMarginType,
                                                // marginRight: TitleMarginRight + titleStyles[0].titleMarginType,
                                                // paddingTop: TitlePaddingTop + titleStyles[0].titlePaddingType,
                                                // paddingBottom: TitlePaddingBottom + titleStyles[0].titlePaddingType,
                                                // paddingLeft: TitlePaddingLeft + titleStyles[0].titlePaddingType,
                                                // paddingRight: TitlePaddingRight + titleStyles[0].titlePaddingType,
                                                minHeight: '15px'
                                            }}
                                        />
                                    </Fragment>
                        }
                        {link && <a rel="noopener noreferrer" target={target ? "_blank" : "_self"} href={`${url}`}></a>}
                    </div>
                </div>
            </div>
        </div >
    )
}