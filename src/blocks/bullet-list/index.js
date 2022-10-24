import { bulletList } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import json from './block.json';
import deprecated from './deprecated';
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/bullet-list", {
    ...json,
    title: __("Bullet List", "premium-blocks-for-gutenberg"),
    description: __('Organize your website’s content with attractive lists using Premium Bullet List Block.', "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.bulletList,
    category: "premium-blocks",
    keywords: [
        __("icon list", "premium-blocks-for-gutenberg"),
        __('image list', 'premium-blocks-for-gutenberg'),
        __('bullet list', 'premium-blocks-for-gutenberg')
    ],
    supports: {
        inserter: bulletList
    },
    example: {},
    deprecated,
    edit: edit,
    save: save
});