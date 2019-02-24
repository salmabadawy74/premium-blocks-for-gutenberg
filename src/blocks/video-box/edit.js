import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";
import onChangeVideoURL from "./index";
import FONTS from "../../components/premium-fonts";

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

const className = "premium-video-box";

const { __ } = wp.i18n;

let isBoxUpdated = null;

class edit extends Component {
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

  componentDidUpdate() {
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
          videoBox
            .getElementsByClassName("premium-video-box__overlay")[0]
            .remove();
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

    const addFontToHead = fontFamily => {
      const head = document.head;
      const link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css?family=" +
        fontFamily.replace(/\s+/g, "+") +
        ":" +
        "regular";
      head.appendChild(link);
    };

    const onChangeDescFamily = fontFamily => {
      setAttributes({ videoDescFamily: fontFamily });
      if (!fontFamily) {
        return;
      }

      addFontToHead(fontFamily);
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
              <PremiumFilters
                blur={blur}
                bright={bright}
                contrast={contrast}
                saturation={saturation}
                hue={hue}
                onChangeBlur={value =>
                  setAttributes({ blur: value === undefined ? 0 : newValue })
                }
                onChangeBright={value =>
                  setAttributes({
                    bright: value === undefined ? 100 : newValue
                  })
                }
                onChangeContrast={value =>
                  setAttributes({
                    contrast: value === undefined ? 100 : newValue
                  })
                }
                onChangeSat={value =>
                  setAttributes({
                    saturation: value === undefined ? 100 : newValue
                  })
                }
                onChangeHue={value =>
                  setAttributes({ hue: value === undefined ? 100 : newValue })
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
                  onChange={newCheck => setAttributes({ videoDesc: newCheck })}
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
                    <SelectControl
                      label={__("Font Family")}
                      value={videoDescFamily}
                      options={FONTS}
                      onChange={onChangeDescFamily}
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
                  shadowColor: newColor === undefined ? "transparent" : newColor
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
    ];
  }
}

export default edit;
