const { __ } = wp.i18n;
const deprecated = [
  {
    save: function ({ attributes, className }) {
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
        reverse,
      } = attributes;
      return (
        <div
          id={`premium-scroll-${id}`}
          className={`premium-image-scroll-section`}
          style={{
            boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
          }}
        >
          <div
            className={` premium-image-scroll-container  ${contrainerClasses} `}
            style={{
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor,
              minHeight: minHeight,
              height: height,
            }}
            onMouseEnter={mouseenter}
            onMouseLeave={mouseleave}
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
                className={`image-scroll`}
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
    },
  },
];

export default deprecated;
