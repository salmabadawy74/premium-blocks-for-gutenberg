import { person } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import save from "./save";
import edit from "./edit";
import deprecated from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/person", {
    icon: PBG_Block_Icons.team,
    supports: {
        inserter: person
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});