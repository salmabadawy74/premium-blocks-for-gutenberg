import { pricingTable } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";

const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;


registerBlockType("premium/pricing-table", {
    title: __("Pricing Table"),
    icon: <PbgIcon icon="pricing-table" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: pricingTable
    },
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});