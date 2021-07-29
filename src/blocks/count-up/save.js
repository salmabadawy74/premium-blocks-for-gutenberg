import classnames from 'classnames'
import hexToRgba from "hex-to-rgba"

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
        numberColor,
        numberWeight,
        prefix,
        prefixTxt,
        prefixColor,
        prefixWeight,
        prefixGap,
        suffix,
        suffixTxt,
        suffixColor,
        suffixWeight,
        suffixGap,
        iconCheck,
        icon,
        iconSpacing,
        iconType,
        imageURL,
        iconSize,
        iconColor,
        selfAlign,
        titleCheck,
        titleTxt,
        titleColor,
        titleSpacing,
        titleStyle,
        titleUpper,
        titleT,
        titleB,
        titleWeight,
        faIcon,
        containerBack,
        containerOpacity,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition,
        backgroundImageURL,
        fixed,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        borderType,
        borderColor,
        borderRadius,
        borderWidth,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        titleFamily,
        counterFamily,
        prefixFamily,
        suffixFamily,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        paddingU,
        hideDesktop,
        hideTablet,
        hideMobile
    } = props.attributes;

    let iconClass = "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;

    const mainClasses = classnames(className, 'premium-countup');

    return (
        <div
            id={`premium-countup-${block_id}`}
            className={`${mainClasses}__wrap premium-countup-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                justifyContent: align,
                flexDirection: flexDir,
                backgroundColor: containerBack
                    ? hexToRgba(containerBack, containerOpacity)
                    : "transparent",
                boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px rgba(${shadowColor.r},${shadowColor.g},${shadowColor.b}, ${shadowColor.a}) ${shadowPosition}`,
                backgroundImage: `url('${backgroundImageURL}')`,
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
                backgroundAttachment: fixed ? "fixed" : "unset",
                borderStyle: borderType,
                borderWidth: borderCount
                    ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                    : borderWidth + "px",
                borderRadius: borderRadius + "px",
                borderColor: borderColor,
                paddingTop: paddingT + paddingU,
                paddingRight: paddingR + paddingU,
                paddingBottom: paddingB + paddingU,
                paddingLeft: paddingL + paddingU,
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
                            : selfAlign
                }}
            >
                <div className={`premium-countup__desc`}>
                    {prefix && (
                        <p
                            className={`premium-countup__prefix`}
                            style={{
                                fontFamily: prefixFamily,
                                color: prefixColor,
                                fontWeight: prefixWeight,
                                marginRight: prefixGap + "px"
                            }}
                        >
                            {prefixTxt}
                        </p>
                    )}
                    <p
                        className={`premium-countup__increment`}
                        data-interval={time}
                        data-delay={delay}
                        style={{
                            fontFamily: counterFamily,
                            color: numberColor,
                            fontWeight: numberWeight
                        }}
                    >
                        {increment}
                    </p>
                    {suffix && (
                        <p
                            className={`premium-countup__suffix`}
                            style={{
                                fontFamily: suffixFamily,
                                color: suffixColor,
                                fontWeight: suffixWeight,
                                marginLeft: suffixGap + "px"
                            }}
                        >
                            {suffixTxt}
                        </p>
                    )}
                </div>
                {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                    <h3
                        className={`premium-countup__title`}
                        style={{
                            fontFamily: titleFamily,
                            marginTop: titleT + "px",
                            marginBottom: titleB + "px",
                            color: titleColor,
                            letterSpacing: titleSpacing + "px",
                            textTransform: titleUpper ? "uppercase" : "none",
                            fontStyle: titleStyle,
                            fontWeight: titleWeight
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
                        fontFamily: titleFamily,
                        marginTop: titleT + "px",
                        marginBottom: titleB + "px",
                        color: titleColor,
                        letterSpacing: titleSpacing + "px",
                        fontWeight: titleWeight,
                        textTransform: titleUpper ? "uppercase" : "none",
                        fontStyle: titleStyle,
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
