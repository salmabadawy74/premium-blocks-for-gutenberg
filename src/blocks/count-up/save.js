import classnames from 'classnames'
import { gradientBackground, filterJsCss } from "../../components/HelperFunction";

const save = props => {
    const { className } = props;
    const {
        blockId,
        increment,
        time,
        delay,
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

    const mainClasses = classnames(className, 'premium-countup__wrap', {
        ' premium-desktop-hidden': hideDesktop,
        ' premium-tablet-hidden': hideTablet,
        ' premium-mobile-hidden': hideMobile,
    });

    return (
        <div
            className={`${mainClasses} ${blockId}`}
            style={filterJsCss({
                flexDirection: flexDir,
                boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                borderStyle: border?.borderType,
                borderColor: border?.borderColor,
                ...gradientBackground(background)
            })}
        >
            {iconCheck && (
                <div
                    className={`premium-countup__icon_wrap`}
                    style={filterJsCss({
                        marginRight:
                            "row" === flexDir || "row-reverse" === flexDir
                                ? iconSpacing + "px"
                                : "0",
                        marginLeft:
                            "row" === flexDir || "row-reverse" === flexDir
                                ? iconSpacing + "px"
                                : "0",
                    })}
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
                            style={filterJsCss({
                                width: iconSize + "px",
                                height: iconSize + "px"
                            })}
                        />
                    )}
                </div>
            )}
            <div
                className={`premium-countup__info`}
            >
                <div className={`premium-countup__desc`}>
                    {prefix && (
                        <p
                            className={`premium-countup__prefix`}
                            style={filterJsCss({
                                color: prefixStyles[0].prefixColor,
                                fontStyle: prefixTypography?.fontStyle,
                                fontFamily: prefixTypography?.fontFamily,
                                fontWeight: prefixTypography?.fontWeight,
                                textDecoration: prefixTypography?.textDecoration,
                                textTransform: prefixTypography?.textTransform,
                            })}
                        >
                            {prefixStyles[0].prefixTxt}
                        </p>
                    )}
                    <p
                        className={`premium-countup__increment`}
                        data-interval={time}
                        data-delay={delay}
                        style={filterJsCss({
                            color: numberStyles[0].numberColor,
                            fontStyle: numberTypography?.fontStyle,
                            fontFamily: numberTypography?.fontFamily,
                            fontWeight: numberTypography?.fontWeight,
                            textDecoration: numberTypography?.textDecoration,
                            textTransform: numberTypography?.textTransform,
                        })}
                    >
                        {increment}
                    </p>
                    {suffix && (
                        <p
                            className={`premium-countup__suffix`}
                            style={filterJsCss({
                                color: suffixStyles[0].suffixColor,
                                fontStyle: suffixTypography?.fontStyle,
                                fontFamily: suffixTypography?.fontFamily,
                                fontWeight: suffixTypography?.fontWeight,
                                textDecoration: suffixTypography?.textDecoration,
                                textTransform: suffixTypography?.textTransform,
                            })}
                        >
                            {suffixStyles[0].suffixTxt}
                        </p>
                    )}
                </div>
                {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                    <h3
                        className={`premium-countup__title`}
                        style={filterJsCss({
                            color: titleStyles[0].titleColor,
                            fontStyle: titleTypography?.fontStyle,
                            fontFamily: titleTypography?.fontFamily,
                            fontWeight: titleTypography?.fontWeight,
                            textDecoration: titleTypography?.textDecoration,
                            textTransform: titleTypography?.textTransform,
                        })}
                    >
                        {titleTxt}
                    </h3>
                )}
            </div>
            {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
                <h3
                    className={`premium-countup__title`}
                    style={filterJsCss({
                        color: titleStyles[0].titleColor,
                        fontStyle: titleTypography?.fontStyle,
                        fontFamily: titleTypography?.fontFamily,
                        fontWeight: titleTypography?.fontWeight,
                        textDecoration: titleTypography?.textDecoration,
                        textTransform: titleTypography?.textTransform,
                    })}
                >
                    {titleTxt}
                </h3>
            )}
        </div>
    );
};

export default save;