import PremiumBorder from "../../components/premium-border";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";
let scrollElement = document.querySelector(".premium-image-scroll-container");

let imageScroll = document.querySelector(".image-scroll");
let transformOffset = null;
const { __ } = wp.i18n;

const save = (props) => {
  let scrollElement = document.querySelector(".premium-image-scroll-container");

  let imageScroll = document.querySelector(".image-scroll");
  let transformOffset = null;

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
    effectDir === "vertical" && hoverEffect === "mouse"
      ? "premium-image-scroll-ver "
      : ""
  }`;
  const classHorizontal = `${
    effectDir === "horizontal" && hoverEffect === "hover"
      ? "image-scroll-horizontal "
      : ""
  }`;
  const contrainerClasses = `${
    hoverEffect === "mouse" ? "premium-container-scroll" : ""
  }`;

  const startTransform = () => {
    imageScroll.style.cssText = `
       transform:${
         effectDir === "vertical" ? "translateY" : "translateX"
       }(${transformOffset}px);`;
  };

  const endTransform = () => {
    imageScroll.style.cssText = `transform:${
      effectDir === "vertical" ? "translateY" : "translateX"
    }(0px);`;
  };
  const setTransform = () => {
    if (effectDir === "vertical" && hoverEffect === "hover") {
      transformOffset = scrollElement.clientHeight - imageScroll.clientHeight;
    } else if (effectDir === "horizontal" && hoverEffect === "hover") {
      transformOffset = scrollElement.clientWidth - imageScroll.clientWidth;
    }
    if (hoverEffect === "mouse") {
      transformOffset = null;
    }
  };

  const mouseenter = () => {
    console.log("Iam in");
    setTransform();
    reverse ? endTransform() : startTransform();
  };

  const mouseleave = () => {
    alert("Hi");
    console.log("Iam out");
    reverse ? startTransform() : endTransform();
  };

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
};

export default save;
