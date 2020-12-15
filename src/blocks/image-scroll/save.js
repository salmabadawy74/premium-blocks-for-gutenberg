const { __ } = wp.i18n;

const save = (props) => {
  const {
    id,
    imageURL,
    url,
    urlCheck,
    height,
    minHeight,
    effectDir,
    background,
    targetOverlay,
    hoverEffect,
    blur,
    bright,
    contrast,
    saturation,
    hue,
    borderType,
    borderWidth,
    borderRadius,
    borderColor,
    containerShadowColor,
    containerShadowBlur,
    containerShadowHorizontal,
    containerShadowVertical,
    containerShadowPosition,
    reverse,
  } = props.attributes;

  const classVertical = `${
    effectDir === "vertical" && hoverEffect === "mouse-scroll"
      ? "premium-img-scroll-ver "
      : ""
  }`;

  const classHorizontal = `${
    effectDir === "horizontal" && hoverEffect === "hover"
      ? "img-scroll-horizontal "
      : ""
  }`;
  const containerClasses = `${
    hoverEffect === "mouse-scroll" ? "premium-container-scroll" : ""
  }`;

  return (
    <div
      data-direction={effectDir}
      data-effect={hoverEffect}
      data-reverse={reverse}
      id={`premium-scroll`}
      className={`premium-img-scroll-container`}
      style={{
        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
      }}
    >
      <div
        data-direction={effectDir}
        data-effect={hoverEffect}
        data-reverse={reverse}
        className={` premium-img-scroll-wrap ${containerClasses} `}
        style={{
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
          minHeight: minHeight,
          height: height,
        }}
      >
        {urlCheck && <a class="premium-img-scroll-link" href={url}></a>}
        <div
          className={` premium-img-scroll-${effectDir}  ${classHorizontal} ${classVertical} `}
        >
          {targetOverlay && (
            <div
              className="premium-img-scroll-overlay"
              style={{ backgroundColor: background }}
            ></div>
          )}
          <img
            className={`premium-img-scroll`}
            alt="scroll Image"
            src={imageURL}
            style={{
              filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default save;
