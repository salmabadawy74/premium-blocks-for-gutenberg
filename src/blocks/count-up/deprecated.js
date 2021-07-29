import attributes from "./attributes"
import hexToRgba from "hex-to-rgba"
import classnames from 'classnames'

const className = "premium-countup"

const deprecatedContent = [
    {
        attributes,
        save: function (props) {

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
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
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
                        borderColor: borderColor
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

        }
    },
    {
        attributes,
        migrate: (attributes) => {
            let newAttributes = {
                borderTop: "",
                borderRight: "",
                borderBottom: "",
                borderLeft: "",
                borderCount: "",
                block_id: '',
                numberSizeUnit: 'px',
                numberSizeTablet: '',
                numberSizeMobile: '',
                prefixSizeUnit: 'px',
                prefixSizeTablet: '',
                prefixSizeMobile: '',
                suffixSizeUnit: 'px',
                suffixSizeTablet: '',
                suffixSizeMobile: '',
                titleSizeUnit: 'px',
                titleSizeTablet: '',
                titleSizeMobile: '',
                containerOpacity: "",
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
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
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
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
                titleFamily,
                counterFamily,
                prefixFamily,
                suffixFamily,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundImage: `url('${backgroundImageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
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
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`premium-countup__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
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
                                        fontSize: prefixSize + "px",
                                        fontFamily: prefixFamily,
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
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
                                    fontSize: numberSize + "px",
                                    fontFamily: counterFamily,
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    className={`premium-countup__suffix`}
                                    style={{
                                        fontSize: suffixSize + "px",
                                        fontFamily: suffixFamily,
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
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
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFamily,
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`premium-countup__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFamily,
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes,
        migrate: (attributes) => {
            let newAttributes = {
                borderType: "",
                borderColor: "",
                borderRadius: "",
                borderWidth: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
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
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
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
                titleFamily,
                counterFamily,
                prefixFamily,
                suffixFamily,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundImage: `url('${backgroundImageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
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
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    className={`${className}__prefix`}
                                    style={{
                                        fontSize: prefixSize + "px",
                                        fontFamily: prefixFamily,
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    fontFamily: counterFamily,
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    className={`${className}__suffix`}
                                    style={{
                                        fontSize: suffixSize + "px",
                                        fontFamily: suffixFamily,
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFamily,
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    fontFamily: titleFamily,
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes,
        migrate: (attributes) => {
            let newAttributes = {
                titleFamily: "",
                counterFamily: "",
                prefixFamily: "",
                suffixFamily: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
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
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
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
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                        backgroundImage: `url('${backgroundImageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
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
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    style={{
                                        fontSize: prefixSize + "px",
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    style={{
                                        fontSize: suffixSize + "px",
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes,
        migrate: (attributes) => {
            let newAttributes = {
                shadowColor: "",
                shadowBlur: "0",
                shadowHorizontal: "0",
                shadowVertical: "0",
                shadowPosition: "",
                backgroundImageID: "",
                backgroundImageURL: "",
                fixed: false,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "auto",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
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
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
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
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    style={{
                                        fontSize: prefixSize + "px",
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    style={{
                                        fontSize: suffixSize + "px",
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes,
        migrate: (attributes) => {
            let newAttributes = {
                shadowColor: "",
                shadowBlur: "0",
                shadowHorizontal: "0",
                shadowVertical: "0",
                shadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
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
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
                containerBack,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                        backgroundColor: containerBack,
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
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
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    style={{
                                        fontSize: prefixSize + "px",
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    style={{
                                        fontSize: suffixSize + "px",
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
    {
        attributes,
        save: (props) => {
            const {
                increment,
                time,
                delay,
                align,
                flexDir,
                numberSize,
                numberColor,
                numberWeight,
                prefix,
                prefixTxt,
                prefixSize,
                prefixColor,
                prefixWeight,
                prefixGap,
                suffix,
                suffixTxt,
                suffixSize,
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
                titleSize,
                titleSpacing,
                titleStyle,
                titleUpper,
                titleT,
                titleB,
                titleWeight,
                faIcon,
            } = props.attributes;
            let iconClass =
                "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
            return (
                <div
                    className={`${className}__wrap`}
                    style={{
                        justifyContent: align,
                        flexDirection: flexDir,
                    }}
                >
                    {iconCheck && (
                        <div
                            className={`${className}__icon_wrap`}
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
                                        : selfAlign,
                            }}
                        >
                            {"icon" === icon && (
                                <i
                                    className={`${className}__icon ${iconClass}`}
                                    style={{
                                        fontSize: iconSize + "px",
                                        color: iconColor,
                                    }}
                                />
                            )}
                            {"img" === icon && imageURL && (
                                <img
                                    src={imageURL}
                                    style={{
                                        width: iconSize + "px",
                                        height: iconSize + "px",
                                    }}
                                />
                            )}
                        </div>
                    )}

                    <div
                        className={`${className}__info`}
                        style={{
                            alignSelf:
                                "row-reverse" === flexDir || "row" === flexDir
                                    ? "center"
                                    : selfAlign,
                        }}
                    >
                        <div className={`${className}__desc`}>
                            {prefix && (
                                <p
                                    style={{
                                        fontSize: prefixSize + "px",
                                        color: prefixColor,
                                        fontWeight: prefixWeight,
                                        marginRight: prefixGap + "px",
                                    }}
                                >
                                    {prefixTxt}
                                </p>
                            )}
                            <p
                                className={`${className}__increment`}
                                data-interval={time}
                                data-delay={delay}
                                style={{
                                    fontSize: numberSize + "px",
                                    color: numberColor,
                                    fontWeight: numberWeight,
                                }}
                            >
                                {increment}
                            </p>
                            {suffix && (
                                <p
                                    style={{
                                        fontSize: suffixSize + "px",
                                        color: suffixColor,
                                        fontWeight: suffixWeight,
                                        marginLeft: suffixGap + "px",
                                    }}
                                >
                                    {suffixTxt}
                                </p>
                            )}
                        </div>
                        {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir || "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    alignSelf: selfAlign,
                                }}
                            >
                                {titleTxt}
                            </h3>
                        )}
                </div>
            );
        },
    },
];

export default deprecatedContent;