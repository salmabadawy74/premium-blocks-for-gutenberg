const { __ } = wp.i18n;
const save = (props) => {
  const { clientId: blockID } = props;
  const {
    imageURL,
    imageAlt,
    imageWidth,
    imageHeight,
    url,
    target,
    urlCheck,
    height,
    effectDir,
    HeightU,
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
  const reverseClasses = `${
    reverse && effectDir === "vertical"
      ? "premium-container-scroll-instant"
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
  const overlayClasses = `${
    targetOverlay &&
    hoverEffect === "mouse-scroll" &&
    effectDir === "horizontal"
      ? "premium-img-scroll-horizontal-overlay"
      : null
  }`;
  return (
    <div
      className={`premium-img-scroll-container ${containerClasses}`}
      style={{
        border: borderType,
        borderWidth: borderWidth + "px",
        borderRadius: borderRadius + "px",
        borderColor: borderColor,
        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: [
            `.premium-img-scroll-overlay{`,
            `background: ${background};`,

            "}",
            `.premium-img-scroll-horizontal-overlay{`,
            `   width:${imageWidth}px;`,

            "}",
          ].join("\n"),
        }}
      />
      {imageURL && (
        <div
          data-direction={effectDir}
          data-effect={hoverEffect}
          data-reverse={reverse}
          id={`premium-scroll-${blockID}`}
          className={` premium-img-scroll-wrap   ${reverseClasses} `}
          style={{
            height: height + HeightU,
          }}
        >
          {urlCheck && "" !== url && (
            <a
              className="premium-img-scroll-link"
              target={`${target ? "_blank" : "_self"}`}
              href={url}
              rel="noopener noreferrer"
            ></a>
          )}
          <div
            className={` premium-img-scroll-${effectDir}  ${classHorizontal} ${classVertical} `}
          >
            {targetOverlay && (
              <div
                className={`premium-img-scroll-overlay ${overlayClasses}`}
              ></div>
            )}
            <img
              id={`premium-img-scroll-${blockID}`}
              className={`premium-img-scroll`}
              alt={imageAlt}
              src={imageURL}
              width={imageWidth}
              height={imageHeight}
              style={{
                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default save;
