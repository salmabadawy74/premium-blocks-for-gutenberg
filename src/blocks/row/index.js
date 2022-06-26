import PbgIcon from "../icons";
import attributes from './attributes'
const { __ } = wp.i18n;
import edit from './edit';
import Save from "./save";
import variations from './variations';
const { registerBlockType } = wp.blocks;


registerBlockType("premium/row", {
    title: __("Container"),
    icon: <PbgIcon icon="" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        align: ["wide", "center", "full"],
        html: false,

    },
    variations,
    example: {},
    edit: edit,
    save: Save,
});