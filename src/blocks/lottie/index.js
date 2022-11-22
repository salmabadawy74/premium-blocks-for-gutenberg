import edit from "./edit";
import { lottie } from "../../../assets/js/settings";
import save from "./save";
import deprecated from './deprecated'
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

import json from './block.json';

registerBlockType("premium/lottie", {
    ...json,
    title: __("Lottie Animation", 'premium-blocks-for-gutenberg'),
    icon: PBG_Block_Icons.lottie,
    category: "premium-blocks",
    supports: {
        inserter: lottie
    },
    keywords: [
        __("svg", 'premium-blocks-for-gutenberg'),
        __("Animation", 'premium-blocks-for-gutenberg'),
        __("canvas", 'premium-blocks-for-gutenberg')
    ],
    description: __('Bring life to your Gutenberg web page using Premium Lottie Animation', 'premium-blocks-for-gutenberg'),
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});