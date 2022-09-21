import { attributes } from "./block.json";
import edit from "./edit";
import Save from "./save";
import variations from "./variations";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import { row } from "../../../assets/js/settings";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/row", {
    title: __("Container", "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.row,
    description: __('Organize your Gutenberg Blocks into rows and sections.', 'premium-block-for-gutenberg'),
    keywords: [
        __("row", "premium-blocks-for-gutenberg"),
        __("container", "premium-blocks-for-gutenberg"),
    ],
    category: "premium-blocks",
    supports: {
        inserter: row,
        anchor: true,
    },
    attributes,

    variations,
    example: {},
    edit: edit,
    save: Save,
});