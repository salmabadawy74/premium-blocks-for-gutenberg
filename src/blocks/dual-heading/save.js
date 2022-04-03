import classnames from "classnames";

const save = props => {
    const { className } = props;

    const {
        block_id,
        contentAlign,
        firstHeading,
        secondHeading,
        display,
        firstStyles,
        secondStyles,
        containerStyles,
        link,
        target,
        headingURL,
        hideDesktop,
        hideTablet,
        hideMobile,
        containerBorderTop,
        containerBorderRight,
        containerBorderBottom,
        containerBorderLeft,
        firstBorderTop,
        firstBorderRight,
        firstBorderBottom,
        firstBorderLeft,
        secondBorderTop,
        secondBorderRight,
        secondBorderBottom,
        secondBorderLeft,
        firstBorder,
        secondBorder,
        containerBorder,
        backgroundType
    } = props.attributes;

    const mainClasses = classnames(
        className,
        "premium-dheading-block__container"
    );
    let btnGrad, btnGrad2, btnbg;
    if (undefined !== backgroundType && 'gradient' === backgroundType) {
        btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
        btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
        if ('radial' === containerStyles[0].gradientType) {
            btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
        } else if ('radial' !== containerStyles[0].gradientType) {
            btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
        }
    } else {
        btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
    }

    return (
        <div
            id={`premium-dheading-block-${block_id}`}
            className={classnames(className,
                "premium-dheading-block__container", `premium-dheading-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`)}
            style={{
                textAlign: contentAlign,
                backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                backgroundImage: btnbg,
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                borderStyle: containerStyles[0].containerBorderType,
                borderWidth: containerBorder
                    ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
                    : containerStyles[0].containerBorderWidth + "px",
                borderRadius: containerStyles[0].containerBorderRadius + "px",
                borderColor: containerStyles[0].containerBorderColor
            }}
        >
            <div className={`premium-dheading-block__wrap`}>
                <h2 className={`premium-dheading-block__title`}>
                    <span
                        className={`premium-dheading-block__first premium-headingc-${firstStyles[0].firstClip} premium-headinga-${firstStyles[0].firstAnim} premium-headings-${firstStyles[0].firstStroke}`}
                        style={{
                            display: display,
                            color: firstStyles[0].firstColor,
                            backgroundColor: firstStyles[0].firstClip ? "none" : firstStyles[0].firstBackground,
                            backgroundImage: firstStyles[0].firstClip
                                ? `linear-gradient(to left, ${firstStyles[0].firstColor}, ${firstStyles[0].firstClipColor})`
                                : "none",
                            fontFamily: firstStyles[0].firstFamily,
                            letterSpacing: firstStyles[0].firstLetter + "px",
                            textTransform: firstStyles[0].firstUpper ? "uppercase" : "none",
                            fontStyle: firstStyles[0].firstStyle,
                            fontWeight: firstStyles[0].firstWeight,
                            borderStyle: firstStyles[0].firstBorderType,
                            borderWidth: firstBorder
                                ? `${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px`
                                : firstStyles[0].firstBorderWidth + "px",
                            borderRadius: firstStyles[0].firstBorderRadius + "px",
                            borderColor: firstStyles[0].firstBorderColor,
                            textShadow: `${firstStyles[0].firstShadowHorizontal}px ${firstStyles[0].firstShadowVertical}px ${firstStyles[0].firstShadowBlur}px ${firstStyles[0].firstShadowColor}`
                        }}
                    >
                        {firstHeading}
                    </span>
                    <span
                        className={`premium-dheading-block__second premium-headingc-${secondStyles[0].secondClip} premium-headinga-${secondStyles[0].secondAnim} premium-headings-${secondStyles[0].secondStroke}`}
                        style={{
                            display: display,
                            color: secondStyles[0].secondColor,
                            backgroundColor: secondStyles[0].secondClip ? "none" : secondStyles[0].secondBackground,
                            backgroundImage: secondStyles[0].secondClip
                                ? `linear-gradient(to left, ${secondStyles[0].secondColor}, ${secondStyles[0].secondClipColor})`
                                : "none",
                            fontFamily: secondStyles[0].secondFamily,
                            letterSpacing: secondStyles[0].secondLetter + "px",
                            textTransform: secondStyles[0].secondUpper ? "uppercase" : "none",
                            fontStyle: secondStyles[0].secondStyle,
                            fontWeight: secondStyles[0].secondWeight,
                            borderStyle: secondStyles[0].secondBorderType,
                            borderWidth: secondBorder
                                ? `${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px`
                                : secondStyles[0].secondBorderWidth + "px",
                            borderRadius: secondStyles[0].secondBorderRadius + "px",
                            borderColor: secondStyles[0].secondBorderColor,
                            textShadow: `${secondStyles[0].secondShadowHorizontal}px ${secondStyles[0].secondShadowVertical}px ${secondStyles[0].secondShadowBlur}px ${secondStyles[0].secondShadowColor}`
                        }}
                    >
                        {secondHeading}
                    </span>
                </h2>
                {link && headingURL && (
                    <a
                        className={`premium-dheading-block__link`}
                        href={link && headingURL}
                        target={target && "_blank"}
                        rel='noopener noreferrer'
                    />
                )}
            </div>
        </div>
    );
};

export default save;