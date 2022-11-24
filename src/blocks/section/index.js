import { container, section } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


registerBlockType("premium/section", {
    icon: PBG_Block_Icons.section,
    supports: {
        inserter: section,
        align: true,
        align: ["center", "wide", "full"]
    },
    example: {
        attributes: {
            minHeight: 200,
        },
    },
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});