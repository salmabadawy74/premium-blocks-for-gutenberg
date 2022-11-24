import { accordion } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/accordion", {
    icon: PBG_Block_Icons.accordion,
    supports: {
        inserter: accordion
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});