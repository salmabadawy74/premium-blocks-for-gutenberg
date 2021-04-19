import { videoBox } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import videoBoxAttrs from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



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
