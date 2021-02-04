export default function save ( props )
{
  
  const { attributes } = props;

  const {   
    block_id,
    repeaterImageAccordion,
    direction,
    skew,
    skewDirection,
    height,
    heightU,
    contentPosition,
    alignPosition,
    hideDesc,
    hoverIndex,
    overlayColor,
    overlayHover,
    blur,
    bright,
    contrast,
    saturation,
    hue,
    iconU,
    iconSize,
    iconColor,
    iconHoverColor,
    iconbackgroundColor,
    backgroundHover,
    iconShadowColor,
    iconShadowBlur,
    iconShadowHorizontal,
    iconShadowVertical,
    iconShadowPosition,
    iconborderType,
    iconborderWidth,
    iconborderColor,
    iconborderRadius,
    iconmarginTop,
    iconmarginRight,
    iconmarginBottom,
    iconmarginLeft,
    iconpaddingUnit,
    iconpaddingTop,
    iconpaddingRight,
    iconpaddingBottom,
    iconpaddingLeft,
    titleColor,
    titleSize,
    titleWeight,
    titleStyle,
    titleLetter,
    titleUpper,
    titleShadowColor,
    titleShadowBlur,
    titleShadowHorizontal,
    titleShadowVertical,
    titlemarginTop,
    titlemarginRight,
    titlemarginBottom,
    titlemarginLeft,
    titlepaddingUnit,
    titlepaddingTop,
    titlepaddingRight,
    titlepaddingBottom,
    titlepaddingLeft,
    descColor,
    descSize,
    descWeight,
    descStyle,
    descLetter,
    descUpper,
    descShadowColor,
    descShadowBlur,
    descShadowHorizontal,
    descShadowVertical,
    descmarginTop,
    descmarginRight,
    descmarginBottom,
    descmarginLeft,
    descpaddingUnit,
    descpaddingTop,
    descpaddingRight,
    descpaddingBottom,
    descpaddingLeft,
    linkColor,
    linkHover,
    linkSize,
    linkWeight,
    linkStyle,
    linkLetter,
    linkUpper,
    containerborderType,
    containerborderWidth,
    containerborderRadius,
    containerborderColor,
    containerShadowColor,
    containerShadowBlur,
    containerShadowHorizontal,
    containerShadowVertical,
    containerShadowPosition,
    containermarginTop,
    containermarginRight,
    containermarginBottom,
    containermarginLeft,
    } = attributes;

  const skewClass = skew ? "premium-accordion-skew" : null;
  
  return (
    <div className="premium-accordion-container">
    <div
      id={`premium-accordion-section-${block_id}`}
      className={`premium-accordion-section ${skewClass}`}
      data-skew={skew ? skewDirection : null}
      data-hide={hideDesc}
      style={{
        border: containerborderType,
        borderWidth: containerborderWidth + "px",
        borderRadius: containerborderRadius + "px",
        borderColor: containerborderColor,
        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
        marginTop: containermarginTop,
        marginBottom: containermarginBottom,
        marginRight: containermarginRight,
        marginLeft: containermarginLeft,
      }}
    >
      <div className={`premium-accordion-${direction}`}>
        <ul
          className={`premium-accordion-ul premium-accordion-${contentPosition}`}
        >
          {repeaterImageAccordion.map((item, index) => {
            return (
              <li
                className={`premium-accordion-li ${
                  index === hoverIndex
                    ? "premium-accordion-li-active"
                    : null
                }`}
                id={`premium-accordion-li-${index}`}
                style={{
                  height: height + heightU,
                  filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                }}
              >
                <div className={`premium-accordion-background`}></div>

                <div
                  className={`premium-accordion-overlay-wrap`}
                  style={{
                    alignItems: contentPosition,
                    justifyContent: alignPosition,
                  }}
                >
                  {item.content && (
                    <div
                      className={`premium-accordion-content premium-accordion-${alignPosition} ${
                        item.custom ? "custom-content" : null
                      }`}
                    >
                      {item.icon && (
                        <i
                          className={`premium-accordion-icon ${item.selectedIcon}`}
                          style={{
                            fontStyle: "normal",
                            fontSize: iconSize + iconU,
                            paddingTop: iconpaddingTop + iconpaddingUnit,
                            paddingRight:
                              iconpaddingRight + iconpaddingUnit,
                            paddingBottom:
                              iconpaddingBottom + iconpaddingUnit,
                            paddingLeft: iconpaddingLeft + iconpaddingUnit,
                            boxShadow: `${iconShadowHorizontal}px ${iconShadowVertical}px ${iconShadowBlur}px ${iconShadowColor} ${iconShadowPosition}`,
                            border: iconborderType,
                            borderWidth: iconborderWidth + "px",
                            borderRadius: iconborderRadius + "px",
                            borderColor: iconborderColor,
                            marginTop: iconmarginTop,
                            marginBottom: iconmarginBottom,
                            marginRight: iconmarginRight,
                            marginLeft: iconmarginLeft,
                          }}
                        ></i>
                      )}
                      <h3
                        className={`premium-accordion-title`}
                        style={{
                          fontSize: titleSize + "px",
                          color: titleColor,
                          fontWeight: titleWeight,
                          letterSpacing: titleLetter,
                          textTransform: titleUpper ? "uppercase" : null,
                          fontStyle: titleStyle,
                          paddingTop: titlepaddingTop + titlepaddingUnit,
                          paddingRight: titlepaddingRight + titlepaddingUnit,
                          paddingBottom: titlepaddingBottom + titlepaddingUnit,
                          paddingLeft: titlepaddingLeft + titlepaddingUnit,
                          marginTop: titlemarginTop,
                          marginBottom: titlemarginBottom,
                          marginRight: titlemarginRight,
                          marginLeft: titlemarginLeft,
                          textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                        }}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={`premium-accordion-description`}
                        style={{
                          fontSize: descSize + "px",
                          color: descColor,
                          fontWeight: descWeight,
                          letterSpacing: descLetter,
                          fontStyle: descStyle,
                          paddingTop: descpaddingTop + descpaddingUnit,
                          paddingRight: descpaddingRight + descpaddingUnit,
                          paddingBottom: descpaddingBottom + descpaddingUnit,
                          paddingLeft: descpaddingLeft + descpaddingUnit,
                          textTransform: descUpper ? "uppercase" : null,
                          marginTop: descmarginTop,
                          marginBottom: descmarginBottom,
                          marginRight: descmarginRight,
                          marginLeft: descmarginLeft,
                          textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                        }}
                      >
                        {item.desc}
                      </div>
                      {item.url && (
                        <a
                          className={`${
                            item.whole
                              ? "premium-accordion-item-link"
                              : "premium-accordion-item-link-title"
                          }`}
                          title={item.urlTitle}
                          href={item.url}
                          style={{
                            fontSize: linkSize + "px",
                            fontWeight: linkWeight,
                            fontStyle: linkStyle,
                            letterSpacing: linkLetter,
                            textTransform: linkUpper ? "uppercase" : null,
                          }}
                        >
                          {item.whole ? " " : item.urlTitle}
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html: [
                      `#premium-accordion-section-${block_id} #premium-accordion-li-${index} .premium-accordion-background{`,
                      `background-image:url(${item.imageURL});`,
                      `background-size : ${item.backgroundSize};`,
                      `background-position : ${item.backgroundPosition};`,
                      `background-repeat : ${item.backgroundRepeat};`,
                      "}",
                      `#premium-accordion-section-${block_id} #premium-accordion-li-${index} .custom-content{`,
                      `position: absolute;`,
                      `top:${item.horizontal}${item.horizontalU};`,
                      `left:${item.vertical}${item.verticalU};`,
                      "}",
                      `.premium-accordion-section .premium-accordion-item-link {`,
                      `color: ${linkColor};`,
                      "}",
                      `.premium-accordion-section:hover .premium-accordion-item-link {`,
                      `color: ${linkHover};`,
                      "}",
                      ".premium-accordion-section .premium-accordion-overlay-wrap{",
                      `background-color: ${overlayColor};`,
                      "}",
                      `.premium-accordion-section:hover .premium-accordion-overlay-wrap {`,
                      `background-color: ${overlayHover};`,
                      "}",
                      ` .premium-accordion-section .premium-accordion-icon{`,
                      `color:${iconColor};`,
                      `background-color :${iconbackgroundColor};`,
                      "}",
                      ` .premium-accordion-section .premium-accordion-icon:hover{`,
                      `color:${iconHoverColor};`,
                      `background-color :${backgroundHover};`,
                      "}",
                    ].join("\n"),
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
  );
}
