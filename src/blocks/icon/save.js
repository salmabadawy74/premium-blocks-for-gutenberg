import classnames from 'classnames'

const save = props => {

  const { className } = props;

  const {
    selectedIcon,
    align,
    hoverEffect,
    iconSize,
    iconSizeUnit,
    iconColor,
    iconBack,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    paddingT,
    paddingR,
    paddingB,
    paddingL,
    paddingU,
    marginT,
    marginR,
    marginB,
    marginL,
    borderType,
    borderWidth,
    borderRadius,
    borderColor,
    backgroundColor,
    imageURL,
    fixed,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    wrapBorderType,
    wrapBorderWidth,
    wrapBorderRadius,
    wrapBorderColor,
    wrapShadowBlur,
    wrapShadowColor,
    wrapShadowHorizontal,
    wrapShadowVertical,
    wrapShadowPosition,
    wrapPaddingT,
    wrapPaddingR,
    wrapPaddingB,
    wrapPaddingL,
    wrapMarginT,
    wrapMarginR,
    wrapMarginB,
    wrapMarginL,
    urlCheck,
    link,
		target,
		hideDesktop,
		hideTablet,
		hideMobile
  } = props.attributes;

	const mainClasses = classnames( className, 'premium-icon' );

  return (
    <div
      className={`${mainClasses}__container ${hideDesktop} ${hideTablet} ${hideMobile}`  }
      style={{
        textAlign: align,
        backgroundColor: backgroundColor,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        border: wrapBorderType,
        borderWidth: wrapBorderWidth + "px",
        borderRadius: wrapBorderRadius + "px",
        borderColor: wrapBorderColor,
        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical ||
          0}px ${wrapShadowBlur ||
          0}px ${wrapShadowColor} ${wrapShadowPosition}`,
        paddingTop: wrapPaddingT,
        paddingRight: wrapPaddingR,
        paddingBottom: wrapPaddingB,
        paddingLeft: wrapPaddingL,
        marginTop: wrapMarginT,
        marginRight: wrapMarginR,
        marginBottom: wrapMarginB,
        marginLeft: wrapMarginL
      }}
    >
      <a
        className={`premium-icon__link`}
        href={urlCheck && link}
        rel="noopener noreferrer"
        target={target ? "_blank" : "_self"}
      >
        <i
          className={`premium-icon ${selectedIcon} premium-icon__${hoverEffect}`}
          style={{
            color: iconColor || "#6ec1e4",
            backgroundColor: iconBack,
            fontSize: (iconSize || 50) + iconSizeUnit,
            paddingTop: paddingT + paddingU,
            paddingRight: paddingR + paddingU,
            paddingBottom: paddingB + paddingU,
            paddingLeft: paddingL + paddingU,
            marginTop: marginT,
            marginRight: marginR,
            marginBottom: marginB,
            marginLeft: marginL,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius || 100 + "px",
            borderColor: borderColor,
            textShadow: `${shadowHorizontal || 0}px ${shadowVertical ||
              0}px ${shadowBlur || 0}px ${shadowColor}`
          }}
        />
      </a>
    </div>
  );
};

export default save;
