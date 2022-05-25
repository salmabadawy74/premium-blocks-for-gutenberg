import PbgIcon from "../icons";
import attributes from './attributes'
const { __ } = wp.i18n;
import edit from './edit'
import Save from './Save';
const { registerBlockType } = wp.blocks;


registerBlockType("premium/column", {
    title: __("Column"),
    icon: <PbgIcon icon="" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {},
    parent: ['premium/row'],
    example: {},
    edit: edit,
    save: Save,
});