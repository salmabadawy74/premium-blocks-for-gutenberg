import { dualHeading } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



registerBlockType("premium/dheading-block", {
    title: __("Dual Heading"),
    icon: <PbgIcon icon="dual-heading" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: dualHeading
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
