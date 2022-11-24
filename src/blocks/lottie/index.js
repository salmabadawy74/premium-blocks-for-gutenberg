import edit from "./edit";
import { lottie } from "../../../assets/js/settings";
import save from "./save";
import deprecated from './deprecated'
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/lottie", {
    icon: PBG_Block_Icons.lottie,
    supports: {
        inserter: lottie
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});