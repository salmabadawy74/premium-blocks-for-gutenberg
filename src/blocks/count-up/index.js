import { countUp } from "../../../assets/js/settings"
import edit from "./edit"
import save from "./save"
import deprecatedContent from "./deprecated"
import PBG_Block_Icons from '../../../assets/icons/block-icons'
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/countup", {
    icon: PBG_Block_Icons.countup,
    supports: {
        inserter: countUp
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});