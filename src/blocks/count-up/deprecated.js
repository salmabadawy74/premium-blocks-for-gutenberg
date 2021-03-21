const className = "premium-countup";

const counterAttrs_1_0_9 = {
    increment: {
        type: "string",
        default: 500,
    },
    time: {
        type: "string",
        default: 1000,
    },
    delay: {
        type: "string",
        default: 10,
    },
    align: {
        type: "string",
        default: "center",
    },
    flexDir: {
        type: "string",
        default: "column",
    },
    numberSize: {
        type: "number",
        default: 30,
    },
    numberColor: {
        type: "string",
        default: "#6ec1e4",
    },
    numberWeight: {
        type: "number",
        default: 900,
    },
    prefix: {
        type: "boolean",
        default: true,
    },
    prefixTxt: {
        type: "string",
        default: "Prefix",
    },
    prefixSize: {
        type: "number",
        default: 20,
    },
    prefixColor: {
        type: "string",
    },
    prefixWeight: {
        type: "number",
    },
    prefixGap: {
        type: "number",
        default: 2,
    },
    suffix: {
        type: "boolean",
        default: true,
    },
    suffixTxt: {
        type: "string",
        default: "Suffix",
    },
    suffixSize: {
        type: "number",
        default: 20,
    },
    suffixColor: {
        type: "string",
    },
    suffixWeight: {
        type: "number",
    },
    suffixGap: {
        type: "number",
        default: 2,
    },
    icon: {
        type: "string",
        default: "icon",
    },
    iconSpacing: {
        type: "number",
        default: 10,
    },
    imageID: {
        type: "string",
    },
    imageURL: {
        type: "string",
    },
    iconType: {
        type: "string",
        default: "dash",
    },
    iconCheck: {
        type: "boolean",
        default: true,
    },
    iconSize: {
        type: "number",
        default: 40,
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4",
    },
    selfAlign: {
        type: "string",
        default: "center",
    },
    titleCheck: {
        type: "boolean",
        default: true,
    },
    titleTxt: {
        type: "string",
        default: "Premium Count Up",
    },
    titleSize: {
        type: "number",
        default: 20,
    },
    titleSpacing: {
        type: "number",
    },
    titleStyle: {
        type: "string",
    },
    titleUpper: {
        type: "boolean",
    },
    titleT: {
        type: "number",
        default: 1,
    },
    titleB: {
        type: "number",
        default: 1,
    },
    titleColor: {
        type: "string",
    },
    titleWeight: {
        type: "number",
        default: 500,
    },
    faIcon: {
        type: "string",
        default: "dashicons-clock",
    },
};

const newAttributes_1_2_1 = {
    containerBack: {
        type: "string",
    },
};

const newAttributes_1_3_7 = {
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    shadowPosition: {
        type: "string",
        default: "",
    },
};

const newAttributes_1_4_1 = {
    backgroundImageID: {
        type: "string",
    },
    backgroundImageURL: {
        type: "string",
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat",
    },
    backgroundPosition: {
        type: "string",
        default: "top center",
    },
    backgroundSize: {
        type: "string",
        default: "auto",
    },
    fixed: {
        type: "boolean",
        default: false,
    },
};

const newAttributes_1_6_4 = {
    titleFamily: {
        type: "string",
    },
    counterFamily: {
        type: "string",
    },
    prefixFamily: {
        type: "string",
    },
    suffixFamily: {
        type: "string",
    },
};

const counterAttrs_1_2_1 = Object.assign(
    counterAttrs_1_0_9,
    newAttributes_1_2_1
);

const counterAttrs_1_3_7 = Object.assign(
    counterAttrs_1_2_1,
    newAttributes_1_3_7
);

const counterAttrs_1_4_1 = Object.assign(
    counterAttrs_1_3_7,
    newAttributes_1_4_1
);

const counterAttrs_1_6_4 = Object.assign(
    counterAttrs_1_4_1,
    newAttributes_1_6_4
);



const counterAttrs_2_0 = {
    increment: {
        type: "string",
        default: 500
    },
    time: {
        type: "string",
        default: 1000
    },
    delay: {
        type: "string",
        default: 10
    },
    align: {
        type: "string",
        default: "center"
    },
    flexDir: {
        type: "string",
        default: "column"
    },
    numberSize: {
        type: "number",
        default: 30
    },
    numberColor: {
        type: "string",
        default: "#6ec1e4"
    },
    numberWeight: {
        type: "number",
        default: 900
    },
    prefix: {
        type: "boolean",
        default: true
    },
    prefixTxt: {
        type: "string",
        default: "Prefix"
    },
    prefixSize: {
        type: "number",
        default: 20
    },
    prefixColor: {
        type: "string"
    },
    prefixWeight: {
        type: "number"
    },
    prefixGap: {
        type: "number",
        default: 2
    },
    suffix: {
        type: "boolean",
        default: true
    },
    suffixTxt: {
        type: "string",
        default: "Suffix"
    },
    suffixSize: {
        type: "number",
        default: 20
    },
    suffixColor: {
        type: "string"
    },
    suffixWeight: {
        type: "number"
    },
    suffixGap: {
        type: "number",
        default: 2
    },
    icon: {
        type: "string",
        default: "icon"
    },
    iconSpacing: {
        type: "number",
        default: 10
    },
    imageID: {
        type: "string"
    },
    imageURL: {
        type: "string"
    },
    iconType: {
        type: "string",
        default: "dash"
    },
    iconCheck: {
        type: "boolean",
        default: true
    },
    iconSize: {
        type: "number",
        default: 40
    },
    iconColor: {
        type: "string",
        default: "#6ec1e4"
    },
    selfAlign: {
        type: "string",
        default: "center"
    },
    titleCheck: {
        type: "boolean",
        default: true
    },
    titleTxt: {
        type: "string",
        default: "Premium Count Up"
    },
    titleSize: {
        type: "number",
        default: 20
    },
    titleSpacing: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    titleT: {
        type: "number",
        default: 1
    },
    titleB: {
        type: "number",
        default: 1
    },
    titleColor: {
        type: "string"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    faIcon: {
        type: "string",
        default: "dashicons-clock"
    },
    containerBack: {
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    shadowPosition: {
        type: "string",
        default: ""
    },
    backgroundImageID: {
        type: "string"
    },
    backgroundImageURL: {
        type: "string"
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat"
    },
    backgroundPosition: {
        type: "string",
        default: "top center"
    },
    backgroundSize: {
        type: "string",
        default: "auto"
    },
    fixed: {
        type: "boolean",
        default: false
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    borderColor: {
        type: "string"
    },
    titleFamily: {
        type: "string"
    },
    counterFamily: {
        type: "string"
    },
    prefixFamily: {
        type: "string"
    },
    suffixFamily: {
        type: "string"
    }
}

const newAttributes_2_1 = {
    containerOpacity: {
        type: "string",
        default: "1"
    },
    block_id: {
        type: 'string'
    },
    numberSizeUnit: {
        type: "string",
        default: "px"
    },
    numberSizeTablet: {
        type: "number"
    },
    numberSizeMobile: {
        type: "number"
    },
    prefixSizeUnit: {
        type: 'string',
        default: 'px'
    },
    prefixSizeTablet: {
        type: "number"
    },
    prefixSizeMobile: {
        type: "number"
    },
    suffixSizeUnit: {
        type: "string",
        default: 'px'
    },
    suffixSizeTablet: {
        type: "number"
    },
    suffixSizeMobile: {
        type: 'number'
    },
    titleSizeUnit: {
        type: "string",
        default: "px"
    },
    titleSizeTablet: {
        type: "number"
    },
    titleSizeMobile: {
        type: "number"
    },
    hideDesktop: {
        type: 'boolean',
        default: false
    },
    hideTablet: {
        type: 'boolean',
        default: false
    },
    hideMobile: {
        type: 'boolean',
        default: false
    }
}

const counterAttrs_2_1 = Object.assign(counterAttrs_2_0, newAttributes_2_1);

const deprecatedContent = [
    {
        attributes: counterAttrs_2_1,
        migrate: attributes => {
            let newAttributes = {
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
            }
            return Object.assign(attributes, newAttributes)
        },
        save: props => {
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
                suffixFamily
            } = props.attributes;
            let iconClass = "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;

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
                                        fontSize: prefixSize + "px",
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
                                    fontSize: numberSize + "px",
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
                                        fontSize: suffixSize + "px",
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
                                    fontSize: titleSize + "px",
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
                                fontSize: titleSize + "px",
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
        attributes: counterAttrs_1_6_4,
        migrate: attributes => {
            let newAttributes = {
                borderType: "",
                borderColor: "",
                borderRadius: "",
                borderWidth: ""
            };
            return Object.assign(attributes, newAttributes);
        },
        save: props => {
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
                suffixFamily
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
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir ||
                                        "row" === flexDir
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
                        {titleCheck &&
                            ("row" === flexDir ||
                                "row-reverse" === flexDir) && (
                                <h3
                                    className={`premium-countup__title`}
                                    style={{
                                        fontSize: titleSize + "px",
                                        fontFamily: titleFamily,
                                        marginTop: titleT + "px",
                                        marginBottom: titleB + "px",
                                        color: titleColor,
                                        letterSpacing: titleSpacing + "px",
                                        textTransform: titleUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                    }}
                                >
                                    {titleTxt}
                                </h3>
                            )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir ||
                            "column-reverse" === flexDir) && (
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
                                    textTransform: titleUpper
                                        ? "uppercase"
                                        : "none",
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
        attributes: counterAttrs_1_6_4,
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
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir ||
                                        "row" === flexDir
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
                        {titleCheck &&
                            ("row" === flexDir ||
                                "row-reverse" === flexDir) && (
                                <h3
                                    className={`${className}__title`}
                                    style={{
                                        fontSize: titleSize + "px",
                                        fontFamily: titleFamily,
                                        marginTop: titleT + "px",
                                        marginBottom: titleB + "px",
                                        color: titleColor,
                                        letterSpacing: titleSpacing + "px",
                                        textTransform: titleUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                    }}
                                >
                                    {titleTxt}
                                </h3>
                            )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir ||
                            "column-reverse" === flexDir) && (
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
                                    textTransform: titleUpper
                                        ? "uppercase"
                                        : "none",
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
        attributes: counterAttrs_1_4_1,
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
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir ||
                                        "row" === flexDir
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
                        {titleCheck &&
                            ("row" === flexDir ||
                                "row-reverse" === flexDir) && (
                                <h3
                                    className={`${className}__title`}
                                    style={{
                                        fontSize: titleSize + "px",
                                        marginTop: titleT + "px",
                                        marginBottom: titleB + "px",
                                        color: titleColor,
                                        letterSpacing: titleSpacing + "px",
                                        textTransform: titleUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                    }}
                                >
                                    {titleTxt}
                                </h3>
                            )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir ||
                            "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper
                                        ? "uppercase"
                                        : "none",
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
        attributes: counterAttrs_1_3_7,
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
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir ||
                                        "row" === flexDir
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
                        {titleCheck &&
                            ("row" === flexDir ||
                                "row-reverse" === flexDir) && (
                                <h3
                                    className={`${className}__title`}
                                    style={{
                                        fontSize: titleSize + "px",
                                        marginTop: titleT + "px",
                                        marginBottom: titleB + "px",
                                        color: titleColor,
                                        letterSpacing: titleSpacing + "px",
                                        textTransform: titleUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                    }}
                                >
                                    {titleTxt}
                                </h3>
                            )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir ||
                            "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper
                                        ? "uppercase"
                                        : "none",
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
        attributes: counterAttrs_1_2_1,
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
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir ||
                                        "row" === flexDir
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
                        {titleCheck &&
                            ("row" === flexDir ||
                                "row-reverse" === flexDir) && (
                                <h3
                                    className={`${className}__title`}
                                    style={{
                                        fontSize: titleSize + "px",
                                        marginTop: titleT + "px",
                                        marginBottom: titleB + "px",
                                        color: titleColor,
                                        letterSpacing: titleSpacing + "px",
                                        textTransform: titleUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                    }}
                                >
                                    {titleTxt}
                                </h3>
                            )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir ||
                            "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper
                                        ? "uppercase"
                                        : "none",
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
        attributes: counterAttrs_1_0_9,
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
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                marginLeft:
                                    "row" === flexDir ||
                                        "row-reverse" === flexDir
                                        ? iconSpacing + "px"
                                        : "0",
                                alignSelf:
                                    "row-reverse" === flexDir ||
                                        "row" === flexDir
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
                        {titleCheck &&
                            ("row" === flexDir ||
                                "row-reverse" === flexDir) && (
                                <h3
                                    className={`${className}__title`}
                                    style={{
                                        fontSize: titleSize + "px",
                                        marginTop: titleT + "px",
                                        marginBottom: titleB + "px",
                                        color: titleColor,
                                        letterSpacing: titleSpacing + "px",
                                        textTransform: titleUpper
                                            ? "uppercase"
                                            : "none",
                                        fontStyle: titleStyle,
                                        fontWeight: titleWeight,
                                    }}
                                >
                                    {titleTxt}
                                </h3>
                            )}
                    </div>
                    {titleCheck &&
                        ("column" === flexDir ||
                            "column-reverse" === flexDir) && (
                            <h3
                                className={`${className}__title`}
                                style={{
                                    fontSize: titleSize + "px",
                                    marginTop: titleT + "px",
                                    marginBottom: titleB + "px",
                                    color: titleColor,
                                    letterSpacing: titleSpacing + "px",
                                    fontWeight: titleWeight,
                                    textTransform: titleUpper
                                        ? "uppercase"
                                        : "none",
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
