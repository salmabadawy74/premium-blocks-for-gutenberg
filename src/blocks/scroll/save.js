import classnames from "classnames";

const { RichText } = wp.editor;

const save = (props) => {
  const { className } = props;

  const {
    id,

    imageURL,
    imageID,
    url,
    target,
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
    verAlign,
  } = props.attributes;

  const mainClasses = classnames(className, "premium-banner");

  return (
    <div
      id={`premium-scroll-${id}`}
      className={`premium-image-scroll-section`}
      style={{
        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
      }}
    >
      <div
        className={`premium-image-scroll-container`}
        style={{
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
        }}
      >
        <div
          className={`premium-image-scroll-container .premium-image-scroll-${effectDir} `}
          style={{
            minHeight: minHeight,
            alignItems: verAlign,
            position: "relative",
          }}
        >
          <div
            className=".premium-image-scroll-overlay"
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              right: "0",
              left: "0",
              backgroundColor: `${background}`,
            }}
          ></div>

          <img
            className={`premium-scroll__img`}
            alt="scroll Image"
            src={imageURL}
            style={{
              height: height,
              filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default save;
