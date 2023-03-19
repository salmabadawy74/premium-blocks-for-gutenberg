import { button } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import json from './block.json';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { name } = json;

registerBlockType(name, {
    ...json,
    icon: PBG_Block_Icons.single_button,
    // supports: {
    //     inserter: button
    // },
    // example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});