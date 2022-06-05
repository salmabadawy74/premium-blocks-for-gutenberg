import PbgIcon from "../icons";
import attributes from './attributes'
const { __ } = wp.i18n;
import edit from './edit';
import Save from "./save";

const { registerBlockType } = wp.blocks;


registerBlockType("premium/row", {
    title: __("Row"),
    icon: <PbgIcon icon="" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        align: true,
        align: ["center", "wide", "full"]
    },

    example: {},
    edit: edit,
    save: Save,
});