import { banner } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import json from './block.json';
import PBG_Block_Icons from "../../../blocks-config/block-icons";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/banner", {
    ...json,
    title: __("Banner", "premium-blocks-for-gutenberg"),
    description: __("Create attractive banners along with Heading, Description, and CTA using Premium Banner.", "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.banner,
    category: "premium-blocks",
    keywords: [
        __("image", "premium-blocks-for-gutenberg"),
        __("photo", "premium-blocks-for-gutenberg"),
    ],
    supports: {
        inserter: banner,
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent,
});
