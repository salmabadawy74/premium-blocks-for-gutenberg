import { fancyText } from "../../../assets/js/settings";
import save from "./save";
import edit from "./edit";
import deprecated from './deprecated'
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/fancy-text", {
    icon: PBG_Block_Icons.fancyText,
    supports: { inserter: fancyText },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});