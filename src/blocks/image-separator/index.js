import { imageSeparator } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../blocks-config/block-icons'
import save from "./save";
import edit from "./edit";
import imageSeparatorAttrs from './attributes'
import deprecated from "./deprecated";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType("premium/image-separator", {
    title: __("Image Separator"),
    description: __('Separate between your Gutenberg sections using Premium Image Separator Block.'),
    icon: PBG_Block_Icons.image_separator,
    category: "premium-blocks",
    attributes: imageSeparatorAttrs,
    keywords: [
        __("image", "premium-blocks-for-gutenberg"),
        __("seperator", "premium-blocks-for-gutenberg"),
    ],
    supports: { inserter: imageSeparator },
    edit: edit,
    save: save,
    deprecated: deprecated
});