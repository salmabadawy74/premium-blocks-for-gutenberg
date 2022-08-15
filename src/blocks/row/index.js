import attributes from './attributes'
const { __ } = wp.i18n;
import edit from './edit';
import Save from "./save";
import variations from './variations';
const { registerBlockType } = wp.blocks;
import PBG_Block_Icons from "../../../blocks-config/block-icons";


registerBlockType("premium/row", {
    title: __("Container"),
    icon: PBG_Block_Icons.row,
    category: "premium-blocks",
    attributes: attributes,
    supports: {

        html: false,

    },
    variations,
    example: {},
    edit: edit,
    save: Save,
});