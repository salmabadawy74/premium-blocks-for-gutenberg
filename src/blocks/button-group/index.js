import { button, buttonGroup } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import edit from "./edit";
import save from "./save";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/button-group", {
    icon: PBG_Block_Icons.button,
    supports: {
        inserter: buttonGroup
    },
    example: {},
    edit: edit,
    save: save
});