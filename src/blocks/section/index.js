import { container } from "../../../assets/js/settings";

import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

import attributes from "./attributes";
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/container", {
    title: __("Section", 'premium-blocks-for-gutenberg'),
    icon: PBG_Block_Icons.section,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: container,
        align: true,
        align: ["center", "wide", "full"]
    },
    keywords: [
        __("section", 'premium-blocks-for-gutenberg'),
        __("container", 'premium-blocks-for-gutenberg'),
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