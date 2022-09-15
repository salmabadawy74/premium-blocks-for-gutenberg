import { button } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../blocks-config/block-icons'
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import json from './block.json';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/button", {
    ...json,
    title: __("Button", "premium-blocks-for-gutenberg"),
    description: __('Add stylish buttons to your Gutenberg page using Premium Button Block.', "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.button,
    category: "premium-blocks",
    supports: {
        inserter: button
    },
    keywords: [
        __("button", "premium-blocks-for-gutenberg")
    ],
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
