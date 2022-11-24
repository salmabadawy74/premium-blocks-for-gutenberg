import { button } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import json from './block.json';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/button", {
    icon: PBG_Block_Icons.button,
    supports: {
        inserter: button
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
