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
        containerBorderRadius,
        containerBorderColor
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
                border: containerBorderType,
                borderWidth: containerBorderWidth + "px",
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
                            border: firstBorderType,
                            borderWidth: firstBorderWidth + "px",
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
                            border: secondBorderType,
                            borderWidth: secondBorderWidth + "px",
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
