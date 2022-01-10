import classnames from 'classnames'
const save = props => {
    const { className } = props;
    const {
        block_id,
        borderCount,
        increment,
        time,
        delay,
        align,
        flexDir,
        prefix,
        suffix,
        icon,
        iconSpacing,
        imageID,
        imageURL,
        iconType,
        iconCheck,
        iconSize,
        iconColor,
        selfAlign,
        titleCheck,
        titleTxt,
        faIcon,
        counterFamily,
        hideDesktop,
        hideTablet,
        hideMobile,
        numberStyles,
        titleStyles,
        containerStyles,
        suffixStyles,
        prefixStyles,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        backgroundType
    } = props.attributes;

    let iconClass = "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;

    const mainClasses = classnames(className, 'premium-countup');

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
            id={`premium-countup-${block_id}`}
            className={`${mainClasses}__wrap premium-countup-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                justifyContent: align,
                flexDirection: flexDir,
                backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px rgba(${containerStyles[0].shadowColor.r},${containerStyles[0].shadowColor.g},${containerStyles[0].shadowColor.b}, ${containerStyles[0].shadowColor.a}) ${containerStyles[0].shadowPosition}`,
                backgroundImage: btnbg,
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                borderStyle: containerStyles[0].borderType,
                borderWidth: borderCount
                    ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                    : containerStyles[0].borderWidth + "px",
                borderRadius: containerStyles[0].borderRadius + "px",
                borderColor: containerStyles[0].borderColor,
                paddingTop: paddingT + containerStyles[0].paddingU,
                paddingRight: paddingR + containerStyles[0].paddingU,
                paddingBottom: paddingB + containerStyles[0].paddingU,
                paddingLeft: paddingL + containerStyles[0].paddingU,
            }}
        >
            {iconCheck && (
                <div
                    className={`premium-countup__icon_wrap`}
                    style={{
                        marginRight:
                            "row" === flexDir || "row-reverse" === flexDir
                                ? iconSpacing + "px"
                                : "0",
                        marginLeft:
                            "row" === flexDir || "row-reverse" === flexDir
                                ? iconSpacing + "px"
                                : "0",
                        alignSelf:
                            "row-reverse" === flexDir || "row" === flexDir
                                ? "center"
                                : selfAlign
                    }}
                >
                    {"icon" === icon && (
                        <i
                            className={`premium-countup__icon ${iconClass}`}
                            style={{
                                fontSize: iconSize + "px",
                                color: iconColor
                            }}
                        />
                    )}
                    {"img" === icon && imageURL && (
                        <img
                            src={imageURL}
                            style={{
                                width: iconSize + "px",
                                height: iconSize + "px"
                            }}
                        />
                    )}
                </div>
            )}
            <div
                className={`premium-countup__info`}
                style={{
                    alignSelf:
                        "row-reverse" === flexDir || "row" === flexDir
                            ? "center"
                            : selfAlign,
                }}
            >
                <div className={`premium-countup__desc`}>
                    {prefix && (
                        <p
                            className={`premium-countup__prefix`}
                            style={{
                                fontFamily: prefixStyles[0].prefixFamily,
                                color: prefixStyles[0].prefixColor,
                                fontWeight: prefixStyles[0].prefixWeight,
                                marginRight: prefixStyles[0].prefixGap + "px"
                            }}
                        >
                            {prefixStyles[0].prefixTxt}
                        </p>
                    )}
                    <p
                        className={`premium-countup__increment`}
                        data-interval={time}
                        data-delay={delay}
                        style={{
                            fontFamily: counterFamily,
                            color: numberStyles[0].numberColor,
                            fontWeight: numberStyles[0].numberWeight
                        }}
                    >
                        {increment}
                    </p>
                    {suffix && (
                        <p
                            className={`premium-countup__suffix`}
                            style={{
                                fontFamily: suffixStyles[0].suffixFamily,
                                color: suffixStyles[0].suffixColor,
                                fontWeight: suffixStyles[0].suffixWeight,
                                marginLeft: suffixStyles[0].suffixGap + "px"
                            }}
                        >
                            {suffixStyles[0].suffixTxt}
                        </p>
                    )}
                </div>
                {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                    <h3
                        className={`premium-countup__title`}
                        style={{
                            fontFamily: titleStyles[0].titleFamily,
                            marginTop: titleStyles[0].titleT + "px",
                            marginBottom: titleStyles[0].titleB + "px",
                            color: titleStyles[0].titleColor,
                            letterSpacing: titleStyles[0].titleSpacing + "px",
                            fontWeight: titleStyles[0].titleWeight,
                            textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                            fontStyle: titleStyles[0].titleStyle
                        }}
                    >
                        {titleTxt}
                    </h3>
                )}
            </div>
            {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
                <h3
                    className={`premium-countup__title`}
                    style={{
                        fontFamily: titleStyles[0].titleFamily,
                        marginTop: titleStyles[0].titleT + "px",
                        marginBottom: titleStyles[0].titleB + "px",
                        color: titleStyles[0].titleColor,
                        letterSpacing: titleStyles[0].titleSpacing + "px",
                        fontWeight: titleStyles[0].titleWeight,
                        textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                        fontStyle: titleStyles[0].titleStyle,
                        alignSelf: selfAlign
                    }}
                >
                    {titleTxt}
                </h3>
            )}
        </div>
    );
};

export default save;