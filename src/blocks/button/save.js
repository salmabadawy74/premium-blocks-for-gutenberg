const className = "premium-button";

const { RichText } = wp.editor;

const save = props => {
  const {
    id,
    btnText,
    btnSize,
    btnAlign,
    btnLink,
    btnTarget,
    effect,
    effectDir,
    textColor,
    textHoverColor,
    backColor,
    backHoverColor,
    slideColor,
    textSize,
    textFontFamily,
    textWeight,
    textLine,
    textLetter,
    textStyle,
    textUpper,
    borderType,
    borderWidth,
    borderRadius,
    borderColor,
    borderHoverColor,
    padding,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    btnShadowBlur,
    btnShadowColor,
    btnShadowHorizontal,
    btnShadowVertical,
    btnShadowPosition
  } = props.attributes;
  return (
    <div
      id={`${className}-wrap-${id}`}
      className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
      style={{ textAlign: btnAlign }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: [
            `#premium-button-wrap-${id} .premium-button:hover {`,
            `color: ${textHoverColor} !important;`,
            `border-color: ${borderHoverColor || "transparent"} !important;`,
            "}",
            `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
            `background-color: ${backHoverColor} !important;`,
            "}",
            `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
            `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
            `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
            `background-color: ${slideColor}`,
            "}"
          ].join("\n")
        }}
      />
      <RichText.Content
        tagName="a"
        value={btnText}
        className={`${className} ${className}__${btnSize}`}
        href={btnLink}
        target={btnTarget ? "_blank" : "_self"}
        style={{
          color: textColor,
          backgroundColor: backColor,
          fontSize: textSize + "px",
          fontFamily: textFontFamily,
          letterSpacing: textLetter + "px",
          textTransform: textUpper ? "uppercase" : "none",
          fontStyle: textStyle,
          lineHeight: textLine + "px",
          fontWeight: textWeight,
          textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
          boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
          padding: padding + "px",
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor
        }}
      />
    </div>
  );
};

export default save;
