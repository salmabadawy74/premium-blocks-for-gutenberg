import classnames from 'classnames'

const { RichText } = wp.editor;

const save = props => {
   
  const { className } = props;

  const {
    id,
    personText,
    personSize,
    personAlign,
    personLink,
    personTarget,
    titleTag,
    effect,
    effectDir,
    descColor,
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
    paddingU,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    personShadowBlur,
    personShadowColor,
    personShadowHorizontal,
    personShadowVertical,
    personShadowPosition
  } = props.attributes;
  
  const mainClasses = classnames ( className, 'premium-person' );
  
  return (
    <div
      id={`${mainClasses}-wrap-${id}`}
      className={`${mainClasses}__wrap premium-person__${effect} premium-person__${effectDir}`}
      style={{ textAlign: personAlign }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: [
            `#premium-person-wrap-${id} .premium-person:hover {`,
            `color: ${textHoverColor} !important;`,
            `border-color: ${borderHoverColor} !important;`,
            "}",
            `#premium-person-wrap-${id}.premium-person__none .premium-person:hover {`,
            `background-color: ${backHoverColor} !important;`,
            "}",
            `#premium-person-wrap-${id}.premium-person__slide .premium-person::before,`,
            `#premium-person-wrap-${id}.premium-person__shutter .premium-person::before,`,
            `#premium-person-wrap-${id}.premium-person__radial .premium-person::before {`,
            `background-color: ${slideColor}`,
            "}"
          ].join("\n")
        }}
      />
      <RichText.Content
        tagName={titleTag.toLowerCase()}
        value={personText}
        className={`premium-person premium-person__${personSize}`}
        href={personLink}
        rel="noopener noreferrer"
        target={personTarget ? "_blank" : "_self"}
        style={{
          color: descColor,
          backgroundColor: backColor,
          fontSize: textSize + "px",
          fontFamily: textFontFamily,
          letterSpacing: textLetter + "px",
          textTransform: textUpper ? "uppercase" : "none",
          fontStyle: textStyle,
          lineHeight: textLine + "px",
          fontWeight: textWeight,
          textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
          boxShadow: `${personShadowHorizontal}px ${personShadowVertical}px ${personShadowBlur}px ${personShadowColor} ${personShadowPosition}`,
          padding: padding + paddingU,
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
