import { videoBox } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

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
	},
	hideDesktop: {
		type: 'boolean',
		default:false
	},
	hideTablet: {
		type: 'boolean',
		default:false
	},
	hideMobile: {
		type: 'boolean',
		default:false
	}
};

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

export default onChangeVideoURL;

registerBlockType("premium/video-box", {
    title: __("Video Box"),
    icon: <PbgIcon icon="video" />,
    category: "premium-blocks",
    attributes: videoBoxAttrs,
    supports: {
        inserter: videoBox
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
