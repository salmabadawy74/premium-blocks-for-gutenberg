import { pricingTable } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../blocks-config/block-icons'
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import json from './block.json';

const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;


registerBlockType("premium/pricing-table", {
    ...json,
    title: __("Pricing Table"),
    description: __('Display your pricing plans in an elegant way using Premium Pricing Table Block.', 'premium-block-for-gutenberg'),
    icon: PBG_Block_Icons.pricingTable,
    category: "premium-blocks",
    keywords: [__("Pricing", 'premium-blocks-for-gutenberg'), __("Pricing Table", 'premium-blocks-for-gutenberg')],
    supports: {
        inserter: pricingTable
    },
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});