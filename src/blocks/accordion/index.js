import { accordion } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../blocks-config/block-icons'
import edit from "./edit";
import save from "./save";
import json from './block.json';
import deprecated from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/accordion", {
    ...json,
    title: __("Accordion", 'premium-blocks-for-gutenberg'),
    description: __('Display collapsed content like FAQs using Premium Accordion Block.', 'premium-blocks-for-gutenberg'),
    icon: PBG_Block_Icons.accordion,
    category: "premium-blocks",
    supports: {
        inserter: accordion
    },
    keywords: [
        __("accordion", "premium-blocks-for-gutenberg"),
        __("collapse", "premium-blocks-for-gutenberg")
    ],
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});