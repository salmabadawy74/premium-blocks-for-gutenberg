import { imageSeparator } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import save from "./save";
import edit from "./edit";
import deprecated from "./deprecated";
import json from './block.json';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/image-separator", {
    ...json,
    title: __("Image Separator", "premium-blocks-for-gutenberg"),
    description: __('Separate between your Gutenberg sections using Premium Image Separator Block.', "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.image_separator,
    category: "premium-blocks",
    keywords: [
        __("image", "premium-blocks-for-gutenberg"),
        __("seperator", "premium-blocks-for-gutenberg"),
    ],
    example: {},
    supports: { inserter: imageSeparator },
    edit: edit,
    save: save,
    deprecated: deprecated
});