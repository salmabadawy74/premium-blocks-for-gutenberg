import { bulletList } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import deprecated from './deprecated';
import PBG_Block_Icons from '../../../assets/icons/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/bullet-list", {
    icon: PBG_Block_Icons.bulletList,
    supports: {
        inserter: bulletList
    },
    example: {},
    deprecated,
    edit: edit,
    save: save
});