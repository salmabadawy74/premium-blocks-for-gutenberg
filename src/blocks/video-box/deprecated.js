import onChangeVideoURL from "./index";

const className = "premium-video-box";

const videoBoxAttrs_1_2_7 = {
  videoBoxId: {
    type: "string"
  },
  videoType: {
    type: "string",
    default: "youtube"
  },
  videoURL: {
    type: "string",
    default: "07d2dXHYb94"
  },
  videoID: {
    type: "string"
  },
  autoPlay: {
    type: "boolean",
    default: false
  },
  loop: {
    type: "boolean",
    default: false
  },
  controls: {
    type: "boolean",
    default: true
  },
  relatedVideos: {
    type: "boolean",
    default: false
  },
  mute: {
    type: "boolean",
    default: false
  },
  overlay: {
    type: "boolean",
    default: false
  },
  overlayImgID: {
    type: "string"
  },
  overlayImgURL: {
    type: "string"
  },
  blur: {
    type: "number",
    default: 0
  },
  bright: {
    type: "number",
    default: 100
  },
  contrast: {
    type: "number",
    default: 100
  },
  saturation: {
    type: "number",
    default: 100
  },
  hue: {
    type: "number",
    default: 0
  },
  playTop: {
    type: "number"
  },
  playIcon: {
    type: "boolean",
    default: true
  },
  playSize: {
    type: "number"
  },
  playColor: {
    type: "string"
  },
  playBack: {
    type: "string"
  },
  playHoverColor: {
    type: "string"
  },
  playHoverBackColor: {
    type: "string"
  },
  playPadding: {
    type: "number"
  },
  playBorderType: {
    type: "string",
    default: "none"
  },
  playBorderWidth: {
    type: "number",
    default: "1"
  },
  playBorderRadius: {
    type: "number"
  },
  playBorderColor: {
    type: "string"
  },
  videoDescText: {
    type: "string"
  },
  videoDesc: {
    type: "boolean"
  },
  descLeft: {
    type: "number"
  },
  descTop: {
    type: "number"
  },
  videoDescSize: {
    type: "number"
  },
  videoDescWeight: {
    type: "number"
  },
  videoDescLetter: {
    type: "number"
  },
  videoDescStyle: {
    type: "string"
  },
  videoDescUpper: {
    type: "boolean"
  },
  videoDescColor: {
    type: "string"
  },
  videoDescBack: {
    type: "string"
  },
  videoDescPadding: {
    type: "number"
  },
  videoDescBorderRadius: {
    type: "number"
  },
  boxBorderType: {
    type: "string",
    default: "none"
  },
  boxBorderWidth: {
    type: "number",
    default: "1"
  },
  boxBorderRadius: {
    type: "number"
  },
  boxBorderColor: {
    type: "string"
  },
  shadowColor: {
    type: "string"
  },
  shadowBlur: {
    type: "number",
    default: "0"
  },
  shadowHorizontal: {
    type: "number",
    default: "0"
  },
  shadowVertical: {
    type: "number",
    default: "0"
  },
  shadowPosition: {
    type: "string",
    default: ""
  },

  // Old props
  playLeft: {
    type: "number"
  }
};

const videoBoxAttrs_1_5_4 = {
  videoBoxId: {
    type: "string"
  },
  videoType: {
    type: "string",
    default: "youtube"
  },
  videoURL: {
    type: "string",
    default: "07d2dXHYb94"
  },
  videoID: {
    type: "string"
  },
  autoPlay: {
    type: "boolean",
    default: false
  },
  loop: {
    type: "boolean",
    default: false
  },
  controls: {
    type: "boolean",
    default: true
  },
  relatedVideos: {
    type: "boolean",
    default: false
  },
  mute: {
    type: "boolean",
    default: false
  },
  overlay: {
    type: "boolean",
    default: false
  },
  overlayImgID: {
    type: "string"
  },
  overlayImgURL: {
    type: "string"
  },
  blur: {
    type: "number",
    default: 0
  },
  bright: {
    type: "number",
    default: 100
  },
  contrast: {
    type: "number",
    default: 100
  },
  saturation: {
    type: "number",
    default: 100
  },
  hue: {
    type: "number",
    default: 0
  },
  playTop: {
    type: "number"
  },
  playIcon: {
    type: "boolean",
    default: true
  },
  playSize: {
    type: "number"
  },
  playColor: {
    type: "string"
  },
  playBack: {
    type: "string"
  },
  playHoverColor: {
    type: "string"
  },
  playHoverBackColor: {
    type: "string"
  },
  playPadding: {
    type: "number"
  },
  playBorderType: {
    type: "string",
    default: "none"
  },
  playBorderWidth: {
    type: "number",
    default: "1"
  },
  playBorderRadius: {
    type: "number"
  },
  playBorderColor: {
    type: "string"
  },
  videoDescText: {
    type: "string"
  },
  videoDesc: {
    type: "boolean"
  },
  descLeft: {
    type: "number"
  },
  descTop: {
    type: "number"
  },
  videoDescSize: {
    type: "number"
  },
  videoDescFamily: {
    type: "string"
  },
  videoDescWeight: {
    type: "number"
  },
  videoDescLetter: {
    type: "number"
  },
  videoDescStyle: {
    type: "string"
  },
  videoDescUpper: {
    type: "boolean"
  },
  videoDescColor: {
    type: "string"
  },
  videoDescBack: {
    type: "string"
  },
  videoDescPadding: {
    type: "number"
  },
  videoDescBorderRadius: {
    type: "number"
  },
  boxBorderType: {
    type: "string",
    default: "none"
  },
  boxBorderWidth: {
    type: "number",
    default: "1"
  },
  boxBorderRadius: {
    type: "number"
  },
  boxBorderColor: {
    type: "string"
  },
  shadowColor: {
    type: "string"
  },
  shadowBlur: {
    type: "number",
    default: "0"
  },
  shadowHorizontal: {
    type: "number",
    default: "0"
  },
  shadowVertical: {
    type: "number",
    default: "0"
  },
  shadowPosition: {
    type: "string",
    default: ""
  },

  // Old props
  playLeft: {
    type: "number"
  }
};

const videoBoxAttrs_2_0 = {
    videoBoxId: {
        type: "string"
    },
    videoType: {
        type: "string",
        default: "youtube"
    },
    videoURL: {
        type: "string",
        default: "07d2dXHYb94"
    },
    videoID: {
        type: "string"
    },
    autoPlay: {
        type: "boolean",
        default: false
    },
    loop: {
        type: "boolean",
        default: false
    },
    controls: {
        type: "boolean",
        default: true
    },
    relatedVideos: {
        type: "boolean",
        default: false
    },
    mute: {
        type: "boolean",
        default: false
    },
    overlay: {
        type: "boolean",
        default: false
    },
    overlayImgID: {
        type: "string"
    },
    overlayImgURL: {
        type: "string"
    },
    blur: {
        type: "number",
        default: 0
    },
    bright: {
        type: "number",
        default: 100
    },
    contrast: {
        type: "number",
        default: 100
    },
    saturation: {
        type: "number",
        default: 100
    },
    hue: {
        type: "number",
        default: 0
    },
    playTop: {
        type: "number"
    },
    playIcon: {
        type: "boolean",
        default: true
    },
    playSize: {
        type: "number"
    },
    playColor: {
        type: "string"
    },
    playBack: {
        type: "string"
    },
    playHoverColor: {
        type: "string"
    },
    playHoverBackColor: {
        type: "string"
    },
    playPadding: {
        type: "number"
    },
    playBorderType: {
        type: "string",
        default: "none"
    },
    playBorderWidth: {
        type: "number",
        default: "1"
    },
    playBorderRadius: {
        type: "number"
    },
    playBorderColor: {
        type: "string"
    },
    videoDescText: {
        type: "string"
    },
    videoDesc: {
        type: "boolean"
    },
    descLeft: {
        type: "number"
    },
    descTop: {
        type: "number"
    },
    videoDescSize: {
        type: "number"
    },
    videoDescFamily: {
        type: "string"
    },
    videoDescWeight: {
        type: "number"
    },
    videoDescLetter: {
        type: "number"
    },
    videoDescStyle: {
        type: "string"
    },
    videoDescUpper: {
        type: "boolean"
    },
    videoDescColor: {
        type: "string"
    },
    videoDescBack: {
        type: "string"
    },
    videoDescPadding: {
        type: "number"
    },
    videoDescBorderRadius: {
        type: "number"
    },
    descShadowColor: {
        type: "string"
    },
    descShadowBlur: {
        type: "number",
        default: "0"
    },
    descShadowHorizontal: {
        type: "number",
        default: "0"
    },
    descShadowVertical: {
        type: "number",
        default: "0"
    },
    boxBorderType: {
        type: "string",
        default: "none"
    },
    boxBorderWidth: {
        type: "number",
        default: "1"
    },
    boxBorderRadius: {
        type: "number"
    },
    boxBorderColor: {
        type: "string"
    },
    shadowColor: {
        type: "string"
    },
    shadowBlur: {
        type: "number",
        default: "0"
    },
    shadowHorizontal: {
        type: "number",
        default: "0"
    },
    shadowVertical: {
        type: "number",
        default: "0"
    },
    shadowPosition: {
        type: "string",
        default: ""
    },

    // Old props
    playLeft: {
        type: "number"
    }
}
const newAttributes_2_1 = {
    block_id: {
        type:'string'  
    },
    videoDescSizeUnit: {
        type: "string",
      default:'px'  
    },
    videoDescSizeMobile: {
      type:'number'  
    },
    videoDescSizeTablet: {
      type:'number'  
    },
    classMigrate: {
        type: 'boolean',
        default:false
    }
}
const videoBoxAttrs_2_1 = Object.assign( videoBoxAttrs_2_0, newAttributes_2_1 );

const deprecatedContent = [
    {
        attributes: videoBoxAttrs_2_1,
        migrate: attributes => {
            let newAttributes = {
                classMigrate: false,
                block_id: '',
                videoDescSizeUnit: 'px',
                videoDescSizeTablet: '',
                videoDescSizeMobile:'',
            }
            return Object.assign( attributes, newAttributes );
        },
        save: props => {
            const {
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
                boxBorderRadius,
                boxBorderType,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition
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
            
              return (
                <div
                  id={videoBoxId}
                  className={`${className} video-overlay-${overlay}`}
                  data-type={videoType}
                  style={{
                    border: boxBorderType,
                    borderWidth: boxBorderWidth + "px",
                    borderRadius: boxBorderRadius + "px",
                    borderColor: boxBorderColor,
                    boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
                  }}
                >
                  <style
                    dangerouslySetInnerHTML={{
                      __html: [
                        `#${videoBoxId} .premium-video-box__play:hover {`,
                        `color: ${playHoverColor} !important;`,
                        `background-color: ${playHoverBackColor} !important;`,
                        "}"
                      ].join("\n")
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
                        filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
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
                        border: playBorderType,
                        borderWidth: playBorderWidth + "px",
                        borderRadius: playBorderRadius + "px",
                        borderColor: playBorderColor,
                        padding: playPadding + "px"
                      }}
                    >
                      <i
                        className={`premium-video-box__play_icon dashicons dashicons-controls-play`}
                        style={{
                          fontSize: playSize + "px"
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
                        left: descLeft + "%"
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
                          fontStyle: videoDescStyle
                        }}
                      >
                        <span>{videoDescText}</span>
                      </p>
                    </div>
                  )}
                </div>
              );
        }
    },
  {
    attributes: videoBoxAttrs_1_5_4,
    migrate: attributes => {
      let newAttributes = {
        descShadowBlur: "0",
        descShadowColor: "",
        descShadowHorizontal: "0",
        descShadowVertical: "0"
      };
      return Object.assign(attributes, newAttributes);
    },
    save: props => {
      const {
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
        boxBorderColor,
        boxBorderWidth,
        boxBorderRadius,
        boxBorderType,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition
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
      return (
        <div
          id={videoBoxId}
          className={`${className} video-overlay-${overlay}`}
          data-type={videoType}
          style={{
            border: boxBorderType,
            borderWidth: boxBorderWidth + "px",
            borderRadius: boxBorderRadius + "px",
            borderColor: boxBorderColor,
            boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
          }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#${videoBoxId} .${className}__play:hover {`,
                `color: ${playHoverColor} !important;`,
                `background-color: ${playHoverBackColor} !important;`,
                "}"
              ].join("\n")
            }}
          />
          <div className={`${className}__container`}>
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
              className={`${className}__overlay`}
              style={{
                backgroundImage: `url('${overlayImgURL}')`,
                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
              }}
            />
          )}
          {overlay && playIcon && (
            <div
              className={`${className}__play`}
              style={{
                top: playTop + "%",
                left: playLeft + "%",
                color: playColor,
                backgroundColor: playBack,
                border: playBorderType,
                borderWidth: playBorderWidth + "px",
                borderRadius: playBorderRadius + "px",
                borderColor: playBorderColor,
                padding: playPadding + "px"
              }}
            >
              <i
                className={`${className}__play_icon dashicons dashicons-controls-play`}
                style={{
                  fontSize: playSize + "px"
                }}
              />
            </div>
          )}
          {overlay && videoDesc && (
            <div
              className={`${className}__desc`}
              style={{
                color: videoDescColor,
                backgroundColor: videoDescBack,
                padding: videoDescPadding,
                borderRadius: videoDescBorderRadius,
                top: descTop + "%",
                left: descLeft + "%"
              }}
            >
              <p
                className={`${className}__desc_text`}
                style={{
                  fontSize: videoDescSize + "px",
                  fontFamily: videoDescFamily,
                  fontWeight: videoDescWeight,
                  letterSpacing: videoDescLetter + "px",
                  textTransform: videoDescUpper ? "uppercase" : "none",
                  fontStyle: videoDescStyle
                }}
              >
                <span>{videoDescText}</span>
              </p>
            </div>
          )}
        </div>
      );
    }
  },
  {
    attributes: videoBoxAttrs_1_2_7,
    migrate: attributes => {
      let newAttributes = {
        videoDescFamily: ""
      };
      return Object.assign(attributes, newAttributes);
    },
    save: props => {
      const {
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
        videoDescWeight,
        videoDescLetter,
        videoDescStyle,
        videoDescUpper,
        videoDescBorderRadius,
        boxBorderColor,
        boxBorderWidth,
        boxBorderRadius,
        boxBorderType,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition
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
      return (
        <div
          id={videoBoxId}
          className={`${className} video-overlay-${overlay}`}
          data-type={videoType}
          style={{
            border: boxBorderType,
            borderWidth: boxBorderWidth + "px",
            borderRadius: boxBorderRadius + "px",
            borderColor: boxBorderColor,
            boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
          }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#${videoBoxId} .${className}__play:hover {`,
                `color: ${playHoverColor} !important;`,
                `background-color: ${playHoverBackColor} !important;`,
                "}"
              ].join("\n")
            }}
          />
          <div className={`${className}__container`}>
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
              className={`${className}__overlay`}
              style={{
                backgroundImage: `url('${overlayImgURL}')`,
                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
              }}
            />
          )}
          {overlay && playIcon && (
            <div
              className={`${className}__play`}
              style={{
                top: playTop + "%",
                left: playLeft + "%",
                color: playColor,
                backgroundColor: playBack,
                border: playBorderType,
                borderWidth: playBorderWidth + "px",
                borderRadius: playBorderRadius + "px",
                borderColor: playBorderColor,
                padding: playPadding + "px"
              }}
            >
              <i
                className={`${className}__play_icon dashicons dashicons-controls-play`}
                style={{
                  fontSize: playSize + "px"
                }}
              />
            </div>
          )}
          {overlay && videoDesc && (
            <div
              className={`${className}__desc`}
              style={{
                color: videoDescColor,
                backgroundColor: videoDescBack,
                padding: videoDescPadding,
                borderRadius: videoDescBorderRadius,
                top: descTop + "%",
                left: descLeft + "%"
              }}
            >
              <p
                className={`${className}__desc_text`}
                style={{
                  fontSize: videoDescSize + "px",
                  fontWeight: videoDescWeight,
                  letterSpacing: videoDescLetter + "px",
                  textTransform: videoDescUpper ? "uppercase" : "none",
                  fontStyle: videoDescStyle
                }}
              >
                <span>{videoDescText}</span>
              </p>
            </div>
          )}
        </div>
      );
    }
  },
  {
    attributes: videoBoxAttrs_1_2_7,
    save: props => {
      const {
        videoBoxId,
        videoType,
        videoURL,
        autoPlay,
        loop,
        mute,
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
        videoDescWeight,
        videoDescLetter,
        videoDescStyle,
        videoDescUpper,
        videoDescBorderRadius,
        boxBorderColor,
        boxBorderWidth,
        boxBorderRadius,
        boxBorderType,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition
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
      return (
        <div
          id={videoBoxId}
          className={`${className} video-overlay-${overlay}`}
          data-type={videoType}
          style={{
            border: boxBorderType,
            borderWidth: boxBorderWidth + "px",
            borderRadius: boxBorderRadius + "px",
            borderColor: boxBorderColor,
            boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
          }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#${videoBoxId} .${className}__play:hover {`,
                `color: ${playHoverColor} !important;`,
                `background-color: ${playHoverBackColor} !important;`,
                "}"
              ].join("\n")
            }}
          />
          <div className={`${className}__container`}>
            {"self" !== videoType && (
              <iframe
                src={`${onChangeVideoURL(videoType, videoURL)}?autoplay=${
                  overlay ? 0 : autoPlay
                }&loop=${loopVideo()}&mute${
                  "vimeo" == videoType ? "d" : ""
                }=${mute}&controls=${controls ? "1" : "0"}`}
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
              className={`${className}__overlay`}
              style={{
                backgroundImage: `url('${overlayImgURL}')`,
                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
              }}
            />
          )}
          {overlay && playIcon && (
            <div
              className={`${className}__play`}
              style={{
                top: playTop + "%",
                left: playLeft + "%",
                color: playColor,
                backgroundColor: playBack,
                border: playBorderType,
                borderWidth: playBorderWidth + "px",
                borderRadius: playBorderRadius + "px",
                borderColor: playBorderColor,
                padding: playPadding + "px"
              }}
            >
              <i
                className={`${className}__play_icon dashicons dashicons-controls-play`}
                style={{
                  fontSize: playSize + "px"
                }}
              />
            </div>
          )}
          {overlay && videoDesc && (
            <div
              className={`${className}__desc`}
              style={{
                color: videoDescColor,
                backgroundColor: videoDescBack,
                padding: videoDescPadding,
                borderRadius: videoDescBorderRadius,
                top: descTop + "%",
                left: descLeft + "%"
              }}
            >
              <p
                className={`${className}__desc_text`}
                style={{
                  fontSize: videoDescSize + "px",
                  fontWeight: videoDescWeight,
                  letterSpacing: videoDescLetter + "px",
                  textTransform: videoDescUpper ? "uppercase" : "none",
                  fontStyle: videoDescStyle
                }}
              >
                <span>{videoDescText}</span>
              </p>
            </div>
          )}
        </div>
      );
    }
  }
];

export default deprecatedContent;
