import json from './block.json';import edit from "./edit";
import Save from "./save";
import variations from "./variations";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import { container } from "../../../assets/js/settings";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/container", {
    ...json,
    title: __("Container", "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.container,
    description: __('Organize your Gutenberg Blocks into rows and sections.', 'premium-block-for-gutenberg'),
    keywords: [
        __("row", "premium-blocks-for-gutenberg"),
        __("container", "premium-blocks-for-gutenberg"),
    ],
    category: "premium-blocks",
    supports: {
        inserter: container,
        anchor: true,
    },

    variations,
    example: {},
    edit: edit,
    save: Save,
});