import classnames from "classnames";

const { RichText } = wp.editor;

const save = (props) => {
  const {
    id,

    imageURL,

    height,
    minHeight,
    effectDir,

    background,

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
  } = props.attributes;

  return (
    <div
      id={`premium-scroll-${id}`}
      className={`premium-image-scroll-section`}
      style={{
        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
      }}
    >
      <div
        className={`premium-image-scroll-container  premium-image-${effectDir}-${hoverEffect}-container `}
        style={{
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
          minHeight: minHeight,
          height: height,
        }}
      >
        <div
          className={`premium-image-scroll-${effectDir} premium-image-scroll-${effectDir}`}
        >
          <div
            className="premium-image-scroll-overlay"
            style={{ background: `${background}` }}
          ></div>
          <img
            alt="scroll Image"
            src={imageURL}
            style={{
              filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
            }}
            // onMouseEnter={(e) => setTransform(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default save;
