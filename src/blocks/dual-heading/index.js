import { dualHeading } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../blocks-config/block-icons'
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



registerBlockType("premium/dheading-block", {
    title: __("Dual Heading"),
    description: __('Use Premium Dual Heading Block to create one heading with two different styles.'),
    icon: PBG_Block_Icons.dualHeading,
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