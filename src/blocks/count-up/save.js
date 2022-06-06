import classnames from 'classnames'
import { gradientBackground } from "../../components/HelperFunction";

const save = props => {
    const { className } = props;
    const {
        block_id,
        increment,
        time,
        delay,
        align,
        flexDir,
        prefix,
        suffix,
        icon,
        iconSpacing,
        imageURL,
        iconType,
        iconCheck,
        iconSize,
        iconColor,
        selfAlign,
        titleCheck,
        titleTxt,
        faIcon,
        hideDesktop,
        hideTablet,
        hideMobile,
        numberStyles,
        titleStyles,
        suffixStyles,
        prefixStyles,
        numberTypography,
        prefixTypography,
        suffixTypography,
        titleTypography,
        boxShadow,
        border,
        background
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
                boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                borderStyle: border?.borderType,
                borderColor: border?.borderColor,
                ...gradientBackground(background)
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
                                color: prefixStyles[0].prefixColor,
                                marginRight: prefixStyles[0].prefixGap + "px",
                                fontStyle: prefixTypography?.fontStyle,
                                fontFamily: prefixTypography?.fontFamily,
                                fontWeight: prefixTypography?.fontWeight,
                                letterSpacing: prefixTypography?.letterSpacing,
                                textDecoration: prefixTypography?.textDecoration,
                                textTransform: prefixTypography?.textTransform,
                                lineHeight: `${prefixTypography?.lineHeight}px`,
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
                            color: numberStyles[0].numberColor,
                            fontStyle: numberTypography?.fontStyle,
                            fontFamily: numberTypography?.fontFamily,
                            fontWeight: numberTypography?.fontWeight,
                            letterSpacing: numberTypography?.letterSpacing,
                            textDecoration: numberTypography?.textDecoration,
                            textTransform: numberTypography?.textTransform,
                            lineHeight: `${numberTypography?.lineHeight}px`,
                        }}
                    >
                        {increment}
                    </p>
                    {suffix && (
                        <p
                            className={`premium-countup__suffix`}
                            style={{
                                color: suffixStyles[0].suffixColor,
                                marginLeft: suffixStyles[0].suffixGap + "px",
                                fontStyle: suffixTypography?.fontStyle,
                                fontFamily: suffixTypography?.fontFamily,
                                fontWeight: suffixTypography?.fontWeight,
                                letterSpacing: suffixTypography?.letterSpacing,
                                textDecoration: suffixTypography?.textDecoration,
                                textTransform: suffixTypography?.textTransform,
                                lineHeight: `${suffixTypography?.lineHeight}px`,
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
                            marginTop: titleStyles[0].titleT + "px",
                            marginBottom: titleStyles[0].titleB + "px",
                            color: titleStyles[0].titleColor,
                            fontStyle: titleTypography?.fontStyle,
                            fontFamily: titleTypography?.fontFamily,
                            fontWeight: titleTypography?.fontWeight,
                            letterSpacing: titleTypography?.letterSpacing,
                            textDecoration: titleTypography?.textDecoration,
                            textTransform: titleTypography?.textTransform,
                            lineHeight: `${titleTypography?.lineHeight}px`,
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
                        marginTop: titleStyles[0].titleT + "px",
                        marginBottom: titleStyles[0].titleB + "px",
                        color: titleStyles[0].titleColor,
                        fontStyle: titleTypography?.fontStyle,
                        fontFamily: titleTypography?.fontFamily,
                        fontWeight: titleTypography?.fontWeight,
                        letterSpacing: titleTypography?.letterSpacing,
                        textDecoration: titleTypography?.textDecoration,
                        textTransform: titleTypography?.textTransform,
                        lineHeight: `${titleTypography?.lineHeight}px`,
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