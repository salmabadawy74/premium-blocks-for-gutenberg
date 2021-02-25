import classnames from "classnames";

const save = props => {
    const { className } = props;

    const {
        contentAlign,
        firstHeading,
        secondHeading,
        display,
        firstColor,
        firstBackground,
        firstSize,
        firstFamily,
        firstStyle,
        firstUpper,
        firstLetter,
        firstWeight,
        firstBorderType,
        firstBorderWidth,
        firstBorderTop,
        firstBorderRight,
        firstBorderBottom,
        firstBorderLeft,
        firstBorderRadius,
        firstBorderColor,
        firstPadding,
        firstMargin,
        firstClip,
        firstAnim,
        firstStroke,
        firstClipColor,
        firstShadowBlur,
        firstShadowColor,
        firstShadowHorizontal,
        firstShadowVertical,
        secondColor,
        secondBackground,
        secondSize,
        secondFamily,
        secondLetter,
        secondUpper,
        secondWeight,
        secondStyle,
        secondBorderType,
        secondBorderWidth,
        secondBorderTop,
        secondBorderRight,
        secondBorderBottom,
        secondBorderLeft,
        secondBorderRadius,
        secondBorderColor,
        secondPadding,
        secondMargin,
        secondClip,
        secondStroke,
        secondAnim,
        secondClipColor,
        secondShadowBlur,
        secondShadowColor,
        secondShadowHorizontal,
        secondShadowVertical,
        link,
        target,
        headingURL,
        containerBack,
        imageURL,
        fixed,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        containerBorderType,
        containerBorderWidth,
        containerBorderTop,
        containerBorderRight,
        containerBorderBottom,
        containerBorderLeft,
        containerBorderRadius,
        containerBorderColor,
        firstBorder,
        secondBorder,
        containerBorder,

    } = props.attributes;

    const mainClasses = classnames(
        className,
        "premium-dheading-block__container"
    );

    return (
        <div
            className={`${mainClasses}`}
            style={{
                textAlign: contentAlign,
                backgroundColor: containerBack,
                backgroundImage: `url('${imageURL}')`,
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
                backgroundAttachment: fixed ? "fixed" : "unset",
                borderStyle: containerBorderType,
                borderWidth:containerBorder?`${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`: containerBorderWidth + "px",
                borderRadius: containerBorderRadius + "px",
                borderColor: containerBorderColor
            }}
        >
            <div className={`premium-dheading-block__wrap`}>
                <h2 className={`premium-dheading-block__title`}>
                    <span
                        className={`premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim} premium-headings-${firstStroke}`}
                        style={{
                            display: display,
                            color: firstColor,
                            backgroundColor: firstClip
                                ? "none"
                                : firstBackground,
                            backgroundImage: firstClip
                                ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                : "none",
                            fontSize: firstSize + "px",
                            fontFamily: firstFamily,
                            letterSpacing: firstLetter + "px",
                            textTransform: firstUpper ? "uppercase" : "none",
                            fontStyle: firstStyle,
                            fontWeight: firstWeight,
                            borderStyle: firstBorderType,
                            borderWidth: firstBorder?`${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px`:firstBorderWidth + "px",
                            borderRadius: firstBorderRadius + "px",
                            borderColor: firstBorderColor,
                            padding: firstPadding + "px",
                            margin: firstMargin + "px",
                            textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
                        }}
                    >
                        {firstHeading}
                    </span>
                    <span
                        className={`premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim} premium-headings-${secondStroke}`}
                        style={{
                            display: display,
                            color: secondColor,
                            backgroundColor: secondClip
                                ? "none"
                                : secondBackground,
                            backgroundImage: secondClip
                                ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                : "none",
                            fontSize: secondSize + "px",
                            fontFamily: secondFamily,
                            letterSpacing: secondLetter + "px",
                            textTransform: secondUpper ? "uppercase" : "none",
                            fontStyle: secondStyle,
                            fontWeight: secondWeight,
                            borderStyle: secondBorderType,
                            borderWidth:secondBorder?`${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px`: secondBorderWidth + "px",
                            borderRadius: secondBorderRadius + "px",
                            borderColor: secondBorderColor,
                            padding: secondPadding + "px",
                            margin: secondMargin + "px",
                            textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
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
                    />
                )}
            </div>
        </div>
    );
};

export default save;
