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
      ? "premium-image-scroll-ver "
      : ""
  }`;

  const classHorizontal = `${
    effectDir === "horizontal" && hoverEffect === "hover"
      ? "image-scroll-horizontal "
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
      className={`premium-image-scroll-section`}
      style={{
        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
      }}
    >
      <div
        data-direction={effectDir}
        data-effect={hoverEffect}
        data-reverse={reverse}
        className={` premium-image-scroll-container  ${containerClasses} `}
        style={{
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
          minHeight: minHeight,
          height: height,
        }}
      >
        {urlCheck && <a class="premium-image-scroll-link" href={url}></a>}
        <div
          className={` premium-image-scroll-${effectDir}  ${classHorizontal} ${classVertical} `}
        >
          {targetOverlay && (
            <div
              className="premium-image-scroll-overlay"
              style={{ backgroundColor: background }}
            ></div>
          )}
          <img
            className={`premium-image-scroll`}
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
