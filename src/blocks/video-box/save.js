import classnames from "classnames";
import onChangeVideoURL from "./index";

const save = (props) => {
  const { className } = props;

  const {
    borderPlayUpdated,
    borderBoxUpdated,
    videoBoxId,
    videoType,
    videoURL,
    autoPlay,
    loop,
    mute,
    relatedVideos,
    controls,
    overlay,
    overlayImgURL,
    blur,
    contrast,
    saturation,
    bright,
    hue,
    playTop,
    playLeft,
    playIcon,
    playColor,
    playHoverColor,
    playHoverBackColor,
    playSize,
    playPadding,
    playBack,
    playBorderColor,
    playBorderWidth,
    playBorderRadius,
    playBorderType,
    videoDesc,
    descTop,
    descLeft,
    videoDescText,
    videoDescColor,
    videoDescBack,
    videoDescPadding,
    videoDescSize,
    videoDescFamily,
    videoDescWeight,
    videoDescLetter,
    videoDescStyle,
    videoDescUpper,
    videoDescBorderRadius,
    descShadowBlur,
    descShadowColor,
    descShadowHorizontal,
    descShadowVertical,
    boxBorderColor,
    boxBorderWidth,
    boxBorderTop,
    boxBorderRight,
    boxBorderBottom,
    boxBorderLeft,
    playBorderTop,
    playBorderRight,
    playBorderBottom,
    playBorderLeft,
    boxBorderRadius,
    boxBorderType,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    shadowPosition,
  } = props.attributes;

  const loopVideo = () => {
    if ("youtube" === videoType) {
      if (videoURL.startsWith("http")) {
        return loop
          ? `1&playlist=${videoURL.replace(
              "https://www.youtube.com/embed/",
              ""
            )}`
          : "0";
      } else {
        return loop ? `1&playlist=${videoURL}` : "0";
      }
    } else {
      return loop ? "1" : "0";
    }
  };

  const mainClasses = classnames( className, "premium-video-box" );


  return (
    <div
      id={videoBoxId}
      className={`${mainClasses} video-overlay-${overlay}`}
      data-type={videoType}
      style={{
        borderStyle: boxBorderType,
        borderWidth: borderBoxUpdated
          ? `${boxBorderTop}px ${boxBorderRight}px ${boxBorderBottom}px ${boxBorderLeft}px`
          : boxBorderWidth + "px",
        borderRadius: boxBorderRadius + "px",
        borderColor: boxBorderColor,
        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: [
            `#${videoBoxId} .premium-video-box__play:hover {`,
            `color: ${playHoverColor} !important;`,
            `background-color: ${playHoverBackColor} !important;`,
            "}",
          ].join("\n"),
        }}
      />
      <div className={`premium-video-box__container`}>
        {"self" !== videoType && (
          <iframe
            src={`${onChangeVideoURL(videoType, videoURL)}?autoplay=${
              overlay ? 0 : autoPlay
            }&loop=${loopVideo()}&mute${
              "vimeo" == videoType ? "d" : ""
            }=${mute}&rel=${relatedVideos ? "1" : "0"}&controls=${
              controls ? "1" : "0"
            }`}
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowfullscreen
          />
        )}
        {"self" === videoType && (
          <video
            src={videoURL}
            loop={loop ? true : false}
            muted={mute ? true : false}
            controls={controls ? true : false}
            autoplay={overlay ? false : autoPlay}
          />
        )}
      </div>
      {overlay && overlayImgURL && (
        <div
          className={`premium-video-box__overlay`}
          style={{
            backgroundImage: `url('${overlayImgURL}')`,
            filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
          }}
        />
      )}
      {overlay && playIcon && (
        <div
          className={`premium-video-box__play`}
          style={{
            top: playTop + "%",
            left: playLeft + "%",
            color: playColor,
            backgroundColor: playBack,
            borderStyle: playBorderType,
            borderWidth: borderPlayUpdated
              ? `${playBorderTop}px ${playBorderRight}px ${playBorderBottom}px ${playBorderLeft}px`
              : playBorderWidth + "px",
            borderRadius: playBorderRadius + "px",
            borderColor: playBorderColor,
            padding: playPadding + "px",
          }}
        >
          <i
            className={`premium-video-box__play_icon dashicons dashicons-controls-play`}
            style={{
              fontSize: playSize + "px",
            }}
          />
        </div>
      )}
      {overlay && videoDesc && (
        <div
          className={`premium-video-box__desc`}
          style={{
            color: videoDescColor,
            backgroundColor: videoDescBack,
            padding: videoDescPadding,
            borderRadius: videoDescBorderRadius,
            top: descTop + "%",
            left: descLeft + "%",
          }}
        >
          <p
            className={`premium-video-box__desc_text`}
            style={{
              fontSize: videoDescSize + "px",
              fontFamily: videoDescFamily,
              fontWeight: videoDescWeight,
              letterSpacing: videoDescLetter + "px",
              textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
              textTransform: videoDescUpper ? "uppercase" : "none",
              fontStyle: videoDescStyle,
            }}
          >
            <span>{videoDescText}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default save;
