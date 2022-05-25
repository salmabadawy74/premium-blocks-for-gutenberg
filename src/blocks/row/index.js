import PbgIcon from "../icons";
import attributes from './attributes'
const { __ } = wp.i18n;
import edit from './edit';

const { registerBlockType } = wp.blocks;


registerBlockType("premium/row", {
    title: __("Row"),
    icon: <PbgIcon icon="" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {},

    example: {},
    edit: edit,
    save: () => <div>Hello</div>,
});