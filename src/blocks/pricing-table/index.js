import { pricingTable } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;


registerBlockType("premium/pricing-table", {
    icon: PBG_Block_Icons.pricingTable,
    supports: {
        inserter: pricingTable
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});