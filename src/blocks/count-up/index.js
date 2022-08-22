import { countUp } from "../../../assets/js/settings"
import edit from "./edit"
import save from "./save"
import deprecatedContent from "./deprecated"
import PBG_Block_Icons from '../../../blocks-config/block-icons'
import json from './block.json';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/countup", {
    ...json,
    title: __("CountUp", "premium-blocks-for-gutenberg"),
    description: __('Show off your facts and figures in an elegant way using Premium CountUp Block.', "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.countup,
    category: "premium-blocks",
    supports: {
        inserter: countUp
    },
    keywords: [
        __("number", "premium-blocks-for-gutenberg"),
        __('count down', 'premium-blocks-for-gutenberg'),
        __('count up', 'premium-blocks-for-gutenberg'),
        __('counter', 'premium-blocks-for-gutenberg'),
    ],
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});