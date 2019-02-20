const className = "premium-countup";

const save = props => {
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
        backgroundAttachment: fixed ? "fixed" : "unset"
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
                : selfAlign
          }}
        >
          {"icon" === icon && (
            <i
              className={`${className}__icon ${iconClass}`}
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
        className={`${className}__info`}
        style={{
          alignSelf:
            "row-reverse" === flexDir || "row" === flexDir
              ? "center"
              : selfAlign
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
                marginRight: prefixGap + "px"
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
              fontWeight: numberWeight
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
                marginLeft: suffixGap + "px"
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
              fontWeight: titleWeight
            }}
          >
            {titleTxt}
          </h3>
        )}
      </div>
      {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
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
