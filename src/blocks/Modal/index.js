import { Modal } from "../../../assets/js/settings";
import edit from "./edit";
import save from './save'
import deprecated from "./deprecated";
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/modal", {
    icon: PBG_Block_Icons.modal,
    supports: {
        inserter: Modal
    },
    deprecated,
    example: {},
    edit: edit,
    save: save,
});