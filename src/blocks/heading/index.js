import {
    heading
} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import json from './block.json';
import deprecated from './deprecated';
const { __ } = wp.i18n;
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { registerBlockType } = wp.blocks;

registerBlockType("premium/heading", {
    ...json,
    title: __("Heading", 'premium-block-for-gutenberg'),
    description: __('Grab your website visitors’ attention with stylish headings using Premium Heading Block.', "premium-blocks-for-gutenberg"),
    keywords: [__("title", 'premium-blocks-for-gutenberg'), __("Heading", 'premium-blocks-for-gutenberg')],
    icon: PBG_Block_Icons.heading,
    category: "premium-blocks",
    supports: {
        inserter: heading
    },
    example: {},
    deprecated,
    edit: edit,
    save: save
});