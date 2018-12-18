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
    }

    render() {
      const { isSelected, setAttributes } = this.props;
      const {
        videoType,
        videoURL,
        videoID,
        autoPlay,
        loop,
        mute
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
                  value={videoURL}
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
            </PanelBody>
          </InspectorControls>
        ),
        <div className={`${className}`}>
          <div className={`${className}__container`}>
            {"self" !== videoType && (
              <iframe
                src={`${onChangeVideoURL(
                  videoType,
                  videoURL
                )}?autoplay=${autoPlay}&loop=${loopVideo()}&mute${
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
      const { videoType, videoURL, autoPlay, loop, mute } = props.attributes;
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
        <div className={`${className}`}>
          <div className={`${className}__container`}>
            {"self" !== videoType && (
              <iframe
                src={`${onChangeVideoURL(
                  videoType,
                  videoURL
                )}?autoplay=${autoPlay}&loop=${loopVideo()}&mute${
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
        </div>
      );
    }
  });
}
