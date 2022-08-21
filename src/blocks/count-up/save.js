import classnames from 'classnames'
import { gradientBackground, filterJsCss } from "../../components/HelperFunction";
const { RichText } = wp.blockEditor;

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
                        <RichText.Content
                            className={`premium-countup__prefix`}
                            tagName="p"
                            value={prefixStyles[0].prefixTxt}
                            style={filterJsCss({
                                color: prefixStyles[0].prefixColor,
                                fontStyle: prefixTypography?.fontStyle,
                                fontFamily: prefixTypography?.fontFamily,
                                fontWeight: prefixTypography?.fontWeight,
                                textDecoration: prefixTypography?.textDecoration,
                                textTransform: prefixTypography?.textTransform,
                            })}
                        />
                    )}
                    <RichText.Content
                        className={`premium-countup__increment`}
                        value={`${increment}`}
                        tagName="p"
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
                    />
                    {suffix && (
                        <RichText.Content
                            className={`premium-countup__suffix`}
                            value={suffixStyles[0].suffixTxt}
                            tagName="p"
                            style={filterJsCss({
                                color: suffixStyles[0].suffixColor,
                                fontStyle: suffixTypography?.fontStyle,
                                fontFamily: suffixTypography?.fontFamily,
                                fontWeight: suffixTypography?.fontWeight,
                                textDecoration: suffixTypography?.textDecoration,
                                textTransform: suffixTypography?.textTransform,
                            })}
                        />
                    )}
                </div>
                {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                    <RichText.Content
                        className={`premium-countup__title`}
                        value={titleTxt}
                        tagName="h3"
                        style={filterJsCss({
                            color: titleStyles[0].titleColor,
                            fontStyle: titleTypography?.fontStyle,
                            fontFamily: titleTypography?.fontFamily,
                            fontWeight: titleTypography?.fontWeight,
                            textDecoration: titleTypography?.textDecoration,
                            textTransform: titleTypography?.textTransform,
                        })}
                    />
                )}
            </div>
            {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
                <RichText.Content
                    className={`premium-countup__title`}
                    tagName="h3"
                    value={titleTxt}
                    style={filterJsCss({
                        color: titleStyles[0].titleColor,
                        fontStyle: titleTypography?.fontStyle,
                        fontFamily: titleTypography?.fontFamily,
                        fontWeight: titleTypography?.fontWeight,
                        textDecoration: titleTypography?.textDecoration,
                        textTransform: titleTypography?.textTransform,
                    })}
                />
            )}
        </div>
    );
};

export default save;