import classnames from 'classnames'

const { InnerBlocks } = wp.editor;

const save = props => {
  
  const { className } = props;
  
  const {
    stretchSection,
    horAlign,
    innerWidthType,
    innerWidth,
    height,
    vPos,
    minHeight,
    minHeightUnit,
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
    marginUnit,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingUnit,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    shadowPosition
  } = props.attributes;
  
  const mainClasses = classnames ( className, 'premium-container' );
  
  return (
    <div
      className={`${mainClasses} premium-container__stretch_${stretchSection} premium-container__${innerWidthType}`}
      style={{
        textAlign: horAlign,
        minHeight: "fit" === height ? "100vh" : minHeight + minHeightUnit,
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
        marginTop: marginTop + marginUnit,
        marginBottom: marginBottom + marginUnit,
        marginLeft: marginLeft + marginUnit,
        marginRight: marginRight + marginUnit,
        paddingTop: paddingTop + paddingUnit,
        paddingBottom: paddingBottom + paddingUnit,
        paddingLeft: paddingLeft + paddingUnit,
        paddingRight: paddingRight + paddingUnit,
        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
      }}
    >
      <div
        className={`premium-container__content_wrap premium-container__${vPos}`}
        style={{
          maxWidth:
            "boxed" == innerWidthType && stretchSection
              ? innerWidth
                ? innerWidth + "px"
                : "1140px"
              : "100%"
        }}
      >
        <div className={`premium-container__content_inner`}>
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
};

export default save;
