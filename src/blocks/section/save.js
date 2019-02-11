const { InnerBlocks } = wp.editor;

const className = "premium-container";

const save = props => {
  const {
    stretchSection,
    horAlign,
    innerWidthType,
    innerWidth,
    height,
    vPos,
    minHeight,
    color,
    imageURL,
    fixed,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    borderType,
    borderWidth,
    borderColor,
    borderRadius,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    shadowPosition
  } = props.attributes;
  return (
    <div
      className={`${className} ${className}__stretch_${stretchSection} ${className}__${innerWidthType}`}
      style={{
        textAlign: horAlign,
        height: "fit" === height ? "100vh" : minHeight,
        backgroundColor: color,
        border: borderType,
        borderWidth: borderWidth + "px",
        borderRadius: borderRadius + "px",
        borderColor: borderColor,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        marginTop: marginTop + "px",
        marginBottom: marginBottom + "px",
        paddingTop: paddingTop + "px",
        marginLeft: marginLeft + "px",
        marginRight: marginRight + "px",
        paddingBottom: paddingBottom + "px",
        paddingLeft: paddingLeft + "px",
        paddingRight: paddingRight + "px",
        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
      }}
    >
      <div
        className={`${className}__content_wrap ${className}__${vPos}`}
        style={{
          maxWidth:
            "boxed" == innerWidthType && stretchSection
              ? innerWidth
                ? innerWidth + "px"
                : "1140px"
              : "100%"
        }}
      >
        <div className={`${className}__content_inner`}>
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
};

export default save;
