import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import { videoBox } from "../settings";
import PbgIcon from "../icons";

if (videoBox) {
  const className = "premium-video-box";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    IconButton,
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    TextareaControl,
    ToggleControl
  } = wp.components;

  const { Component, Fragment } = wp.element;

  const { InspectorControls, MediaUpload, PanelColorSettings } = wp.editor;

  const videoBoxAttrs = {
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
    playLeft: {
      type: "number"
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
    }
  };

  let isBoxUpdated = null;

  const onChangeVideoURL = (type, URL) => {
    let videoUrl;
    switch (type) {
      case "youtube":
        if (URL.startsWith("http")) {
          videoUrl = URL;
        } else {
          videoUrl = "https://www.youtube.com/embed/" + URL;
        }
        break;
      case "vimeo":
        if (URL.startsWith("http")) {
          videoUrl = URL;
        } else {
          videoUrl = "https://player.vimeo.com/video/" + URL;
        }
        break;
      case "daily":
        if (URL.startsWith("http")) {
          videoUrl = URL;
        } else {
          videoUrl = "https://dailymotion.com/embed/video/" + URL;
        }
        break;
    }
    return videoUrl;
  };

  class PremiumVideoBox extends Component {
    constructor() {
      super(...arguments);

      this.initVideoBox = this.initVideoBox.bind(this);
    }

    componentDidMount() {
      const { attributes, setAttributes, clientId } = this.props;

      if (!attributes.videoBoxId) {
        setAttributes({ videoBoxId: "premium-video-box-" + clientId });
      }
      this.initVideoBox();
    }

    componentDidUpdate(prevProps, prevState) {
      clearTimeout(isBoxUpdated);
      isBoxUpdated = setTimeout(this.initVideoBox, 500);
    }

    initVideoBox() {
      const { videoBoxId } = this.props.attributes;
      if (!videoBoxId) return null;
      let videoBox = document.getElementById(videoBoxId);
      let video, src;
      //videoBox.classList.remove("video-overlay-false");
      videoBox.addEventListener("click", () => {
        videoBox.classList.add("video-overlay-false");
        let type = videoBox.getAttribute("data-type");
        if ("self" !== type) {
          video = videoBox.getElementsByTagName("iframe")[0];
          src = video.getAttribute("src");
        } else {
          video = videoBox.getElementsByTagName("video")[0];
        }

        setTimeout(() => {
          if ("self" !== type) {
            video.setAttribute("src", src.replace("autoplay=0", "autoplay=1"));
          } else {
            video.play();
          }
        }, 300);
      });
    }

    render() {
      const { isSelected, setAttributes } = this.props;
      const {
        videoBoxId,
        videoType,
        videoURL,
        videoID,
        autoPlay,
        loop,
        controls,
        relatedVideos,
        mute,
        overlay,
        overlayImgID,
        overlayImgURL,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        playLeft,
        playTop,
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
      } = this.props.attributes;

      const TYPE = [
        {
          value: "youtube",
          label: __("Youtube")
        },
        {
          value: "vimeo",
          label: __("Vimeo")
        },
        {
          value: "daily",
          label: __("Daily Motion")
        },
        {
          value: "self",
          label: __("Self Hosted")
        }
      ];
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
      const getHelp = Type => {
        switch (Type) {
          case "youtube":
            return __(
              "Enter video ID, for example: z1hQgVpfTKU or Embed URL, for example: https://www.youtube.com/embed/07d2dXHYb94"
            );
          case "vimeo":
            return __(
              "Enter video ID, for example: 243244233 or Embed URL, for example: https://player.vimeo.com/video/243244233"
            );
          case "daily":
            return __(
              "Enter video ID, for example: x5gifqg or Embed URL, for example: https://dailymotion.com/embed/video/x5gifqg"
            );
        }
      };

      return [
        isSelected && (
          <InspectorControls key={"inspector"}>
            <PanelBody
              title={__("Video")}
              className="premium-panel-body"
              initialOpen={true}
            >
              <SelectControl
                label={__("Video Type")}
                options={TYPE}
                value={videoType}
                onChange={newValue => setAttributes({ videoType: newValue })}
              />
              {"self" !== videoType && (
                <TextControl
                  className="premium-text-control"
                  label={__("Video URL")}
                  value={videoURL}
                  placeholder={__("Enter Video ID, Embed URL or Video URL")}
                  onChange={newURL => setAttributes({ videoURL: newURL })}
                  help={getHelp(videoType)}
                />
              )}
              {"self" === videoType && (
                <MediaUpload
                  allowedTypes={["video"]}
                  onSelect={media => {
                    setAttributes({
                      videoID: media.id,
                      videoURL: media.url
                    });
                  }}
                  type="video"
                  value={videoID}
                  render={({ open }) => (
                    <IconButton
                      label={__("Change Video")}
                      icon="edit"
                      onClick={open}
                    >
                      {__("Change Video")}
                    </IconButton>
                  )}
                />
              )}
              <ToggleControl
                label={__("Autoplay")}
                checked={autoPlay}
                onChange={newCheck => setAttributes({ autoPlay: newCheck })}
                help={__(
                  "This option effect works when Overlay Image option is disabled"
                )}
              />
              {"daily" !== videoType && (
                <ToggleControl
                  label={__("Loop")}
                  checked={loop}
                  onChange={newCheck => setAttributes({ loop: newCheck })}
                />
              )}
              <ToggleControl
                label={__("Mute")}
                checked={mute}
                onChange={newCheck => setAttributes({ mute: newCheck })}
              />
              {"vimeo" !== videoType && (
                <ToggleControl
                  label={__("Player Controls")}
                  checked={controls}
                  onChange={newCheck => setAttributes({ controls: newCheck })}
                />
              )}
              {"youtube" === videoType && (
                <ToggleControl
                  label={__("Show Related Videos")}
                  checked={relatedVideos}
                  onChange={newCheck =>
                    setAttributes({ relatedVideos: newCheck })
                  }
                />
              )}
              <ToggleControl
                label={__("Overlay Image")}
                checked={overlay}
                onChange={newCheck => setAttributes({ overlay: newCheck })}
              />
            </PanelBody>
            {overlay && (
              <PanelBody
                title={__("Overlay")}
                className="premium-panel-body"
                initialOpen={false}
              >
                {overlayImgURL && (
                  <img src={overlayImgURL} width="100%" height="auto" />
                )}
                <MediaUpload
                  allowedTypes={["image"]}
                  onSelect={media => {
                    setAttributes({
                      overlayImgID: media.id,
                      overlayImgURL: media.url
                    });
                  }}
                  type="image"
                  value={overlayImgID}
                  render={({ open }) => (
                    <IconButton
                      label={__("Change Image")}
                      icon="edit"
                      onClick={open}
                    >
                      {__("Change Image")}
                    </IconButton>
                  )}
                />
                <RangeControl
                  label={__("Blur (px)")}
                  min="1"
                  max="10"
                  value={blur}
                  onChange={newValue =>
                    setAttributes({
                      blur: newValue === undefined ? 0 : newValue
                    })
                  }
                />
                <RangeControl
                  label={__("Brightness (%)")}
                  min="1"
                  max="200"
                  value={bright}
                  onChange={newValue =>
                    setAttributes({
                      bright: newValue === undefined ? 100 : newValue
                    })
                  }
                />
                <RangeControl
                  label={__("Contrast (%)")}
                  min="1"
                  max="200"
                  value={contrast}
                  onChange={newValue =>
                    setAttributes({
                      contrast: newValue === undefined ? 100 : newValue
                    })
                  }
                />
                <RangeControl
                  label={__("Saturation (%)")}
                  min="1"
                  max="200"
                  value={saturation}
                  onChange={newValue =>
                    setAttributes({
                      saturation: newValue === undefined ? 100 : newValue
                    })
                  }
                />
                <RangeControl
                  label={__("Hue (Deg)")}
                  min="1"
                  max="360"
                  value={hue}
                  onChange={newValue =>
                    setAttributes({
                      hue: newValue === undefined ? 0 : newValue
                    })
                  }
                />
              </PanelBody>
            )}
            {overlay && (
              <Fragment>
                <PanelBody
                  title={__("Play Icon")}
                  className="premium-panel-body"
                  initialOpen={false}
                >
                  <ToggleControl
                    label={__("Enable Play Icon")}
                    checked={playIcon}
                    onChange={newCheck => setAttributes({ playIcon: newCheck })}
                  />
                  {playIcon && (
                    <Fragment>
                      <RangeControl
                        label={__("Size (PX)")}
                        value={playSize}
                        onChange={newValue =>
                          setAttributes({
                            playSize: newValue === undefined ? 20 : newValue
                          })
                        }
                      />
                      <RangeControl
                        label={__("Horizontal Offset (%)")}
                        value={playLeft}
                        onChange={newValue =>
                          setAttributes({
                            playLeft: newValue === undefined ? 50 : newValue
                          })
                        }
                      />
                      <RangeControl
                        label={__("Vertical Offset (%)")}
                        value={playTop}
                        onChange={newValue =>
                          setAttributes({
                            playTop: newValue === undefined ? 50 : newValue
                          })
                        }
                      />
                      <PanelColorSettings
                        title={__("Colors")}
                        className="premium-panel-body-inner"
                        initialOpen={false}
                        colorSettings={[
                          {
                            label: __("Icon Color"),
                            value: playColor,
                            onChange: colorValue =>
                              setAttributes({ playColor: colorValue })
                          },
                          {
                            label: __("Icon Background Color"),
                            value: playBack,
                            onChange: colorValue =>
                              setAttributes({ playBack: colorValue })
                          },
                          {
                            label: __("Icon Hover Color"),
                            value: playHoverColor,
                            onChange: colorValue =>
                              setAttributes({ playHoverColor: colorValue })
                          },
                          {
                            label: __("Icon Hover Background Color"),
                            value: playHoverBackColor,
                            onChange: colorValue =>
                              setAttributes({ playHoverBackColor: colorValue })
                          }
                        ]}
                      />
                      <PremiumBorder
                        borderType={playBorderType}
                        borderWidth={playBorderWidth}
                        borderColor={playBorderColor}
                        borderRadius={playBorderRadius}
                        onChangeType={newType =>
                          setAttributes({ playBorderType: newType })
                        }
                        onChangeWidth={newWidth =>
                          setAttributes({ playBorderWidth: newWidth })
                        }
                        onChangeColor={colorValue =>
                          setAttributes({ playBorderColor: colorValue })
                        }
                        onChangeRadius={newrRadius =>
                          setAttributes({ playBorderRadius: newrRadius })
                        }
                      />
                      <RangeControl
                        label={__("Padding (PX)")}
                        value={playPadding}
                        onChange={newValue =>
                          setAttributes({
                            playPadding: newValue === undefined ? 20 : newValue
                          })
                        }
                      />
                    </Fragment>
                  )}
                </PanelBody>
                <PanelBody
                  title={__("Video Description")}
                  className="premium-panel-body"
                  initialOpen={false}
                >
                  <ToggleControl
                    label={__("Enable Video Description")}
                    checked={videoDesc}
                    onChange={newCheck =>
                      setAttributes({ videoDesc: newCheck })
                    }
                  />
                  {videoDesc && (
                    <Fragment>
                      <TextareaControl
                        label={__("Description Text")}
                        value={videoDescText}
                        onChange={newText =>
                          setAttributes({ videoDescText: newText })
                        }
                      />
                      <PremiumTypo
                        components={[
                          "size",
                          "weight",
                          "style",
                          "upper",
                          "spacing"
                        ]}
                        size={videoDescSize}
                        weight={videoDescWeight}
                        onChangeSize={newSize =>
                          setAttributes({ videoDescSize: newSize })
                        }
                        onChangeWeight={newWeight =>
                          setAttributes({ videoDescWeight: newWeight })
                        }
                        style={videoDescStyle}
                        spacing={videoDescLetter}
                        upper={videoDescUpper}
                        onChangeStyle={newStyle =>
                          setAttributes({ videoDescStyle: newStyle })
                        }
                        onChangeSpacing={newValue =>
                          setAttributes({ videoDescLetter: newValue })
                        }
                        onChangeUpper={check =>
                          setAttributes({ videoDescUpper: check })
                        }
                      />
                      <RangeControl
                        label={__("Horizontal Offset (%)")}
                        value={descLeft}
                        onChange={newValue =>
                          setAttributes({
                            descLeft: newValue === undefined ? 50 : newValue
                          })
                        }
                      />
                      <RangeControl
                        label={__("Vertical Offset (%)")}
                        value={descTop}
                        onChange={newValue =>
                          setAttributes({
                            descTop: newValue === undefined ? 50 : newValue
                          })
                        }
                      />
                      <PanelColorSettings
                        title={__("Colors")}
                        className="premium-panel-body-inner"
                        initialOpen={false}
                        colorSettings={[
                          {
                            label: __("Text Color"),
                            value: videoDescColor,
                            onChange: colorValue =>
                              setAttributes({ videoDescColor: colorValue })
                          },
                          {
                            label: __("Text Background Color"),
                            value: videoDescBack,
                            onChange: colorValue =>
                              setAttributes({ videoDescBack: colorValue })
                          }
                        ]}
                      />
                      <RangeControl
                        label={__("Border Radius (px)")}
                        value={videoDescBorderRadius}
                        onChange={newValue =>
                          setAttributes({
                            videoDescBorderRadius:
                              newValue === undefined ? 0 : newValue
                          })
                        }
                      />
                      <RangeControl
                        label={__("Padding (PX)")}
                        value={videoDescPadding}
                        onChange={newValue =>
                          setAttributes({
                            videoDescPadding:
                              newValue === undefined ? 20 : newValue
                          })
                        }
                      />
                    </Fragment>
                  )}
                </PanelBody>
              </Fragment>
            )}
            <PanelBody
              title={__("Box Style")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumBorder
                  borderType={boxBorderType}
                  borderWidth={boxBorderWidth}
                  borderColor={boxBorderColor}
                  borderRadius={boxBorderRadius}
                  onChangeType={newType =>
                    setAttributes({ boxBorderType: newType })
                  }
                  onChangeWidth={newWidth =>
                    setAttributes({ boxBorderWidth: newWidth })
                  }
                  onChangeColor={colorValue =>
                    setAttributes({ boxBorderColor: colorValue })
                  }
                  onChangeRadius={newrRadius =>
                    setAttributes({ boxBorderRadius: newrRadius })
                  }
                />
              </PanelBody>
              <PremiumBoxShadow
                inner={true}
                color={shadowColor}
                blur={shadowBlur}
                horizontal={shadowHorizontal}
                vertical={shadowVertical}
                position={shadowPosition}
                onChangeColor={newColor =>
                  setAttributes({
                    shadowColor:
                      newColor === undefined ? "transparent" : newColor
                  })
                }
                onChangeBlur={newBlur =>
                  setAttributes({
                    shadowBlur: newBlur === undefined ? 0 : newBlur
                  })
                }
                onChangehHorizontal={newValue =>
                  setAttributes({
                    shadowHorizontal: newValue === undefined ? 0 : newValue
                  })
                }
                onChangeVertical={newValue =>
                  setAttributes({
                    shadowVertical: newValue === undefined ? 0 : newValue
                  })
                }
                onChangePosition={newValue =>
                  setAttributes({
                    shadowPosition: newValue === undefined ? 0 : newValue
                  })
                }
              />
            </PanelBody>
          </InspectorControls>
        ),
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
                autoplay={overlay ? false : autoPlay}
                controls={controls ? true : false}
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
      ];
    }
  }

  registerBlockType("premium/video-box", {
    title: __("Video Box"),
    icon: <PbgIcon icon="video" />,
    category: "premium-blocks",
    attributes: videoBoxAttrs,
    edit: PremiumVideoBox,
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
    },
    deprecated: [
      {
        attributes: videoBoxAttrs,
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
    ]
  });
}
