// import { pricingTable } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import edit from "./edit";
import save from "./save";
import json from './block.json';

const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;


registerBlockType("premium/progress-bar", {
    ...json,
    title: __("progress Bar"),
    description: __('progress Bar', 'premium-block-for-gutenberg'),
    icon: PBG_Block_Icons.progressBar,
    category: "premium-blocks",
    keywords: [__("progress Bar", 'premium-blocks-for-gutenberg'), __("Progress", 'premium-blocks-for-gutenberg'), __("bar", 'premium-blocks-for-gutenberg')],
    // supports: {
    //     inserter: pricingTable
    // },
    example: {},
    edit: edit,
    save: save
});