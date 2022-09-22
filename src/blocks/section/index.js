import { container, section } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import json from './block.json';
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


registerBlockType("premium/section", {
    ...json,
    title: __("Section", 'premium-blocks-for-gutenberg'),
    icon: PBG_Block_Icons.section,
    category: "premium-blocks",
    supports: {
        inserter: section,
        align: true,
        align: ["center", "wide", "full"]
    },
    keywords: [
        __("section", 'premium-blocks-for-gutenberg')
    ],
    description: __('Engage your Gutenberg blocks using Premium Section Block.', 'premium-block-for-gutenberg'),
    example: {
        attributes: {
            minHeight: 200,
        },
    },
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});