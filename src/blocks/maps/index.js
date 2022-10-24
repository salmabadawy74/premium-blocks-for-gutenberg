import { maps } from "../../../assets/js/settings";
import save from "./save";
import edit from "./edit";
import json from './block.json';
import deprecated from './deprecated';
import PBG_Block_Icons from '../../../assets/icons/block-icons'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/maps", {
    ...json,
    title: __("Maps", "premium-blocks-for-gutenberg"),
    description: __('Embed Google Maps to your Gutenberg page using Premium Maps Block.', "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.maps,
    category: "premium-blocks",
    supports: {
        inserter: maps
    },
    keywords: [
        __("google", 'premium-blocks-for-gutenberg'),
        __("maps", 'premium-blocks-for-gutenberg')
    ],
    example: {},
    deprecated,
    edit: edit,
    save: save
});
