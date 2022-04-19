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
        stripeStyles,
        strokeStyles,
        titleStyles,
        titleBorderTop,
        titleBorderRight,
        titleBorderBottom,
        titleBorderLeft,
        titleBorderUpdated,
        titleBorderWidth,
        iconStyles,
        backgroundType,
        iconBorderWidth,
        iconBorderUpdated,
        textStyles,
        stripeAlign,
        iconBorderTop,
        iconBorderRight,
        iconBorderBottom,
        iconBorderLeft,
        backgroundText,
        BackText,
        textWidth,
        blend,
        zIndex,
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

    let btnGrad, btnGrad2, btnbg;

    if (undefined !== backgroundType && 'gradient' === backgroundType) {
        btnGrad = ('transparent' === iconStyles[0].containerBack || undefined === iconStyles[0].containerBack ? 'rgba(255,255,255,0)' : iconStyles[0].containerBack);
        btnGrad2 = (undefined !== iconStyles[0].gradientColorTwo && undefined !== iconStyles[0].gradientColorTwo && '' !== iconStyles[0].gradientColorTwo ? iconStyles[0].gradientColorTwo : '#777');
        if ('radial' === iconStyles[0].gradientType) {
            btnbg = `radial-gradient(at ${iconStyles[0].gradientPosition}, ${btnGrad} ${iconStyles[0].gradientLocationOne}%, ${btnGrad2} ${iconStyles[0].gradientLocationTwo}%)`;
        } else if ('radial' !== iconStyles[0].gradientType) {
            btnbg = `linear-gradient(${iconStyles[0].gradientAngle}deg, ${btnGrad} ${iconStyles[0].gradientLocationOne}%, ${btnGrad2} ${iconStyles[0].gradientLocationTwo}%)`;
        }
    } else {
        btnbg = iconStyles[0].backgroundImageURL ? `url('${iconStyles[0].backgroundImageURL}')` : ''
    }

    const renderCss = (
        <style>
            {`
                    #premium-title-${block_id} .premium-title-style8__wrap .premium-title-text-title[data-animation='shiny'] {
                        --base-color: ${titleStyles[0].titleColor} !important;
                        --shiny-color: ${titleStyles[0].shinyColor} !important;
                        --animation-speed: ${titleStyles[0].animateduration}s !important;
                    }
                    #premium-title-${block_id} .premium-title-header {
                        --shadow-color: ${titleStyles[0].blurColor} !important;
                        --shadow-value: ${titleStyles[0].blurShadow}px !important;
                        color: ${titleStyles[0].titleColor} !important;
                    }
                    #premium-title-${block_id} .premium-title .style1 .premium-title-header {
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                    ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                    : titleBorderWidth + "px"} !important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor} !important;
                        border-left: ${titleBorderLeft >= "1" ? `${titleBorderLeft}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor}` : ""} !important;
                    }
                    #premium-title-${block_id} .premium-title .style2{
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                    ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                    : titleBorderWidth + "px"}!important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor}!important;
                        border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};
                    }
                    #premium-title-${block_id} .premium-title .style4{
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                    ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                    : titleBorderWidth + "px"} !important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor} !important;
                        border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};
                    }
                    #premium-title-${block_id} .premium-title .style5{
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                    ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                    : titleBorderWidth + "px"} !important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor} !important;
                        border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};
                    }
                    #premium-title-${block_id} .premium-title .style6{
                        border-style: ${titleStyles[0].titleborderType} !important;
                        border-width: ${titleBorderUpdated
                    ? `${titleBorderTop}px ${titleBorderRight}px ${titleBorderBottom}px ${titleBorderLeft}px`
                    : titleBorderWidth + "px"} !important;
                        border-radius: ${titleStyles[0].titleborderRadius || 0}px !important;
                        border-color: ${titleStyles[0].titleborderColor} !important;
                        border-bottom: ${titleBorderBottom >= "0" ? `${titleBorderBottom}px ${titleStyles[0].titleborderType} ${titleStyles[0].titleborderColor} !important` : ""};
                    }
                    #premium-title-${block_id} .premium-title-style2__wrap {
                        background-color: ${titleStyles[0].BGColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style3__wrap {
                        background-color: ${titleStyles[0].BGColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style5__wrap {
                        border-bottom: 2px solid ${titleStyles[0].lineColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style6__wrap {
                        border-bottom: 2px solid ${titleStyles[0].lineColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style6__wrap:before {
                        border-bottom-color: ${titleStyles[0].triangleColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-icon {
                        color: ${iconStyles[0].iconColor} !important;
                        background-color: ${backgroundType === "solid" ? iconStyles[0].containerBack : "transparent"} !important;
                        background-image: ${btnbg} !important;
                        background-repeat: ${iconStyles[0].backgroundRepeat} !important;
                        background-position: ${iconStyles[0].backgroundPosition} !important;
                        background-size: ${iconStyles[0].backgroundSize} !important;
                        background-attachment: ${iconStyles[0].fixed ? "fixed" : "unset"} !important;
                        border-style: ${iconStyles[0].iconborderType} !important;
                        border-width: ${iconBorderUpdated
                    ? `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px`
                    : iconBorderWidth + "px"} !important;
                        border-radius: ${iconStyles[0].iconborderRadius || 0}px !important;
                        border-color: ${iconStyles[0].iconborderColor} !important;
                        text-shadow: ${iconStyles[0].iconshadowHorizontal}px ${iconStyles[0].iconshadowVertical}px ${iconStyles[0].iconshadowBlur}px ${iconStyles[0].iconshadowColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-bg-text:before {
                        content: ${BackText};
                        width: ${textWidth};
                        color: ${textStyles[0].textBackColor} !important;
                        font-weight: ${textStyles[0].textBackWeight} !important;
                        letter-spacing: ${textStyles[0].textBackLetter}px !important;
                        line-height: ${textStyles[0].textBackLine}px !important;
                        font-style: ${textStyles[0].textBackStyle} !important;
                        text-transform: ${textStyles[0].textBackUpper ? "uppercase" : "none"} !important;
                        font-family: ${textStyles[0].textBackFontFamily} !important;
                        text-shadow: ${textStyles[0].textBackshadowHorizontal}px ${textStyles[0].textBackshadowVertical}px ${textStyles[0].textBackshadowBlur}px ${textStyles[0].textBackshadowColor} !important;
                        mix-blend-mode: ${blend} !important;
                        z-index: ${zIndex} !important;
                        -webkit-text-stroke-color: ${strokeStyles[0].strokeColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style7-stripe-span {
                        background-color: ${titleStyles[0].stripeColor} !important;
                    }
                    #premium-title-${block_id} .premium-title-style9__wrap .premium-letters-container .premium-title-style9-letter {
                        font-weight: ${titleStyles[0].titleWeight} !important;
                        letter-spacing: ${titleStyles[0].titleLetter}px !important;
                        line-height: ${titleStyles[0].titleLine}px !important;
                        font-style: ${titleStyles[0].titleStyle} !important;
                        text-transform: ${titleStyles[0].titleUpper ? "uppercase" : "none"} !important;
                        font-family: ${titleStyles[0].titleFontFamily} !important;
                        text-shadow: ${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor} !important;
                    }
                `}
        </style>
    );

    return (
        <div
            id={`premium-title-${block_id}`}
            className={`premium-block-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: align,
            }}>
            {renderCss}
            <div className={`premium-title   ${backgroundText ? 'premium-title-bg-text' : ""}`} style={{
                textAlign: align,
            }} data-backgroundText={BackText}>
                <div className={`premium-title-container ${style} ${style}-${align}`} data-blur-delay={titleStyles[0].animateDelay} data-shiny-dur={titleStyles[0].animateduration}>
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