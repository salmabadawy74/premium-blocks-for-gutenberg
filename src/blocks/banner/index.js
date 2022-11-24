import { banner } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/banner", {
    icon: PBG_Block_Icons.banner,
    supports: {
        inserter: banner,
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent,
});
