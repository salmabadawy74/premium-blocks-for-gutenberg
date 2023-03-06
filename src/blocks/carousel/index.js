import { container, section } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import json from "../../../blocks-config/carousel/block.json";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


registerBlockType("premium/carousel", {
    ...json,
    supports: {
        align: true,
    },
    example: {},
    edit: edit,
    save: save,
});