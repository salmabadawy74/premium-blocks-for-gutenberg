import { dualHeading } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/dheading-block", {
    icon: PBG_Block_Icons.dualHeading,
    supports: {
        inserter: dualHeading,
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent,
});
