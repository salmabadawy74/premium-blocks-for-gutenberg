import { maps } from "../../../assets/js/settings";
import save from "./save";
import edit from "./edit";
import deprecated from './deprecated';
import PBG_Block_Icons from '../../../assets/icons/block-icons'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/maps", {
    icon: PBG_Block_Icons.maps,
    supports: {
        inserter: maps
    },
    example: {},
    deprecated,
    edit: edit,
    save: save
});
