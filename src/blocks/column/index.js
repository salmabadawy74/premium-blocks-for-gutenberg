import PbgIcon from "../icons";
import attributes from './attributes'
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/column", {
    title: __("Column"),
    icon: <PbgIcon icon="" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {},
    example: {},
    edit: () => <div>Hello</div>,
    save: () => <div>Hello</div>,
});