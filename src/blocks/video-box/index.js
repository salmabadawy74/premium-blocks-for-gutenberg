import DefaultImage from "../../components/default-image";
import PremiumTypo from "../../components/premium-typo";
import PremiumUpperQuote from "../../components/testimonials/upper-quote";
import PremiumLowerQuote from "../../components/testimonials/lower-quote";
import { videoBox } from "../settings";
import PbgIcon from "../icons";

if (videoBox) {
  const className = "premium-video-box";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    IconButton,
    Toolbar,
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl
  } = wp.components;

  const { Component, Fragment } = wp.element;

  const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    RichText,
    MediaUpload,
    PanelColorSettings
  } = wp.editor;

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
      default: "z1hQgVpfTKU"
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
      default: 0
    },
    contrast: {
      type: "number",
      default: 0
    },
    saturation: {
      type: "number",
      default: 0
    },
    hue: {
      type: "number"
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
      //videoBox.classList.remove("video-overlay-false");
      videoBox.addEventListener("click", () => {
        videoBox.classList.add("video-overlay-false");
        let video = videoBox.getElementsByTagName("iframe")[0],
          src = video.getAttribute("src");
        setTimeout(() => {
          video.setAttribute("src", src.replace("autoplay=0", "autoplay=1"));
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
        mute,
        overlay,
        overlayImgID,
        overlayImgURL,
        blur,
        bright,
        contrast,
        saturation,
        hue
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
            return (
              (loop ? "1" : "0") +
              "&playlist=" +
              videoURL.replace("https://www.youtube.com/embed/", "")
            );
          } else {
            return (loop ? "1" : "0") + "&playlist=" + videoURL;
          }
        } else {
          return loop ? "1" : "0";
        }
      };
      const getHelp = Type => {
        switch (Type) {
          case "youtube":
            return __(
              "Enter video ID, for example: z1hQgVpfTKU or Embed URL, for example: https://www.youtube.com/embed/z1hQgVpfTKU"
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
                initialOpen={true}
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
                  label={__("Blur")}
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
                  label={__("Brightness")}
                  min="1"
                  max="200"
                  value={bright}
                  onChange={newValue =>
                    setAttributes({
                      bright: newValue === undefined ? 0 : newValue
                    })
                  }
                />
                <RangeControl
                  label={__("Contrast")}
                  min="1"
                  max="200"
                  value={contrast}
                  onChange={newValue =>
                    setAttributes({
                      contrast: newValue === undefined ? 0 : newValue
                    })
                  }
                />
                <RangeControl
                  label={__("Saturation")}
                  min="1"
                  max="200"
                  value={saturation}
                  onChange={newValue =>
                    setAttributes({
                      saturation: newValue === undefined ? 0 : newValue
                    })
                  }
                />
                <RangeControl
                  label={__("Hue")}
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
          </InspectorControls>
        ),
        <div
          id={videoBoxId}
          className={`${className} video-overlay-${overlay}`}
        >
          <div className={`${className}__container`}>
            {"self" !== videoType && (
              <iframe
                src={`${onChangeVideoURL(videoType, videoURL)}?autoplay=${
                  overlay ? 0 : autoPlay
                }&loop=${loopVideo()}&mute${
                  "vimeo" == videoType ? "d" : ""
                }=${mute}`}
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen
              />
            )}
            {"self" === videoType && <video src={videoURL} />}
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
        </div>
      ];
    }
  }

  registerBlockType("premium/video-box", {
    title: __("Video Box"),
    icon: "format-video",
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
        overlay,
        overlayImgURL,
        blur,
        contrast,
        saturation,
        hue,
        bright
      } = props.attributes;
      const loopVideo = () => {
        if ("youtube" === videoType) {
          if (videoURL.startsWith("http")) {
            return (
              (loop ? "1" : "0") +
              "&playlist=" +
              videoURL.replace("https://www.youtube.com/embed/", "")
            );
          } else {
            return (loop ? "1" : "0") + "&playlist=" + videoURL;
          }
        } else {
          return loop ? "1" : "0";
        }
      };
      return (
        <div
          id={videoBoxId}
          className={`${className} video-overlay-${overlay}`}
        >
          <div className={`${className}__container`}>
            {"self" !== videoType && (
              <iframe
                src={`${onChangeVideoURL(videoType, videoURL)}?autoplay=${
                  overlay ? 0 : autoPlay
                }&loop=${loopVideo()}&mute${
                  "vimeo" == videoType ? "d" : ""
                }=${mute}`}
                frameborder="0"
                gesture="media"
                allow="encrypted-media"
                allowfullscreen
              />
            )}
            {"self" === videoType && <video src={videoURL} />}
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
        </div>
      );
    }
  });
}
