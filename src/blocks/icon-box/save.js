import classnames from 'classnames'

const { RichText } = wp.editor;

const save = props => {
  
  const { className } = props;
  
  const {
    id,
    align,
    iconImage,
    iconImgUrl,
    iconRadius,
    selectedIcon,
    iconChecked,
    hoverEffect,
    iconPos,
    iconHPos,
    iconVPos,
    iconSize,
    iconColor,
    iconBackColor,
    titleChecked,
    titleText,
    titleTag,
    titleColor,
    titleFont,
    titleSize,
    titleLine,
    titleLetter,
    titleStyle,
    titleUpper,
    titleWeight,
    titleShadowBlur,
    titleShadowColor,
    titleShadowHorizontal,
    titleShadowVertical,
    titleMarginT,
    titleMarginB,
    descChecked,
    descText,
    descColor,
    descFont,
    descSize,
    descLine,
    descWeight,
    descMarginT,
    descMarginB,
    btnChecked,
    btnEffect,
    effectDir,
    btnText,
    btnTarget,
    btnLink,
    btnSize,
    btnStyle,
    btnUpper,
    btnWeight,
    btnLetter,
    btnColor,
    btnHoverColor,
    btnHoverBorder,
    btnBack,
    btnHoverBack,
    btnBorderWidth,
    btnBorderRadius,
    btnBorderColor,
    btnBorderType,
    btnPadding,
    btnPaddingU,
    btnMarginT,
    btnMarginB,
    btnShadowBlur,
    btnShadowColor,
    btnShadowHorizontal,
    btnShadowVertical,
    btnShadowPosition,
    backColor,
    imageURL,
    fixed,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    borderType,
    borderWidth,
    borderRadius,
    borderColor,
    marginT,
    marginR,
    marginB,
    marginL,
    paddingT,
    paddingR,
    paddingB,
    paddingL,
    paddingU,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    shadowPosition,
    hoverShadowBlur,
    hoverShadowColor,
    hoverShadowHorizontal,
    hoverShadowVertical,
    hoverShadowPosition
  } = props.attributes;
  
  const mainClasses = classnames ( className, 'premium-icon-box' );

  return (
    <div
      id={`premium-icon-box-${id}`}
      className={`${mainClasses} premium-icon-box-${iconPos} premium-icon-box-${iconHPos}`}
      style={{
        textAlign: align,
        border: borderType,
        borderWidth: borderWidth + "px",
        borderRadius: borderRadius + "px",
        borderColor: borderColor,
        marginTop: marginT,
        marginRight: marginR,
        marginBottom: marginB,
        marginLeft: marginL,
        paddingTop: paddingT + paddingU,
        paddingRight: paddingR + paddingU,
        paddingBottom: paddingB + paddingU,
        paddingLeft: paddingL + paddingU,
        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
        backgroundColor: backColor,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset"
      }}
    >
      {btnChecked && btnText && (
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `#premium-icon-box-${id}:hover {`,
              `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
              "}",
              `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
              `color: ${btnHoverColor} !important;`,
              `border-color: ${btnHoverBorder} !important;`,
              "}",
              `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
              `background-color: ${btnHoverBack} !important;`,
              "}",
              `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
              `background-color: ${btnHoverBack} !important;`,
              "}"
            ].join("\n")
          }}
        />
      )}
      {iconChecked && (
        <div
          className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
        >
          {"icon" === iconImage && selectedIcon && (
            <i
              className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
              style={{
                color: iconColor,
                backgroundColor: iconBackColor,
                fontSize: iconSize
              }}
            />
          )}
          {"image" === iconImage && iconImgUrl && (
            <img
              className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
              src={`${iconImgUrl}`}
              alt="Image Icon"
              style={{
                width: iconSize + "px",
                height: iconSize + "px",
                borderRadius: iconRadius + "px"
              }}
            />
          )}
        </div>
      )}
      <div className={`premium-icon-box__content_wrap`}>
        {titleChecked && titleText && (
          <div
            className={`premium-icon-box__title_wrap`}
            style={{
              marginTop: titleMarginT,
              marginBottom: titleMarginB
            }}
          >
            <RichText.Content
              tagName={titleTag.toLowerCase()}
              className={`premium-icon-box__title`}
              value={titleText}
              style={{
                color: titleColor,
                fontSize: titleSize + "px",
                fontFamily: titleFont,
                letterSpacing: titleLetter + "px",
                textTransform: titleUpper ? "uppercase" : "none",
                fontStyle: titleStyle,
                fontWeight: titleWeight,
                textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                lineHeight: titleLine + "px"
              }}
            />
          </div>
        )}
        {descChecked && descText && (
          <div
            className={`premium-icon-box__desc_wrap`}
            style={{
              marginTop: descMarginT,
              marginBottom: descMarginB
            }}
          >
            <RichText.Content
              tagName="p"
              className={`premium-icon-box__desc`}
              value={descText}
              style={{
                color: descColor,
                fontSize: descSize + "px",
                fontFamily: descFont,
                lineHeight: descLine + "px",
                fontWeight: descWeight
              }}
            />
          </div>
        )}
        {btnChecked && btnText && (
          <div
            className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
            style={{
              marginTop: btnMarginT,
              marginBottom: btnMarginB
            }}
          >
            <RichText.Content
              tagName="a"
              className={`premium-icon-box__btn premium-button`}
              href={btnLink}
              rel="noopener noreferrer"
              target={btnTarget ? "_blank" : "_self"}
              value={btnText}
              style={{
                color: btnColor,
                backgroundColor: btnBack,
                fontSize: btnSize + "px",
                letterSpacing: btnLetter + "px",
                textTransform: btnUpper ? "uppercase" : "none",
                fontStyle: btnStyle,
                fontWeight: btnWeight,
                border: btnBorderType,
                borderWidth: btnBorderWidth + "px",
                borderRadius: btnBorderRadius + "px",
                borderColor: btnBorderColor,
                padding: btnPadding + btnPaddingU,
                boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default save;
