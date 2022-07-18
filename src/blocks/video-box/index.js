import { videoBox } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import videoBoxAttrs from "./attributes";
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



const onChangeVideoURL = (type, URL) => {
    let videoUrl;
    if (URL) {
        switch (type) {
            case "youtube":
                if (URL.startsWith("http")) {
                    videoUrl = URL.replace("watch?v=", "embed/");
                } else {
                    videoUrl = "https://www.youtube.com/embed/" + URL;
                }
                break;
            case "vimeo":
                if (URL.startsWith("http")) {
                    videoUrl = URL.replace("vimeo.com/", "player.vimeo.com/video/");
                } else {
                    videoUrl = "https://player.vimeo.com/video/" + URL;
                }
                break;
            case "daily":
                if (URL.startsWith("http")) {
                    videoUrl = URL.replace('dai.ly/', 'dailymotion.com/embed/video/');
                } else {
                    videoUrl = "https://dailymotion.com/embed/video/" + URL;
                }
                break;
        }
        return videoUrl;
    }

};

export default onChangeVideoURL;

registerBlockType("premium/video-box", {
    title: __("Video Box"),
    description: __('Embed YouTube, Vimeo, Dailymotion, or upload a Custom Video using Premium Video Box Block.', 'premium-block-for-gutenberg'),
    icon: PBG_Block_Icons.video_box,
    category: "premium-blocks",
    attributes: videoBoxAttrs,
    keywords: [__("video")],
    supports: {
        inserter: videoBox
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});