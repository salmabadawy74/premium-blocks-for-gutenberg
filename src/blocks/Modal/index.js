import { icon } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import attributes from './attributes'
import save from './save'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/modal", {
    title: __("Modal Box"),
    icon: <PbgIcon icon="" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: icon
    },
    example: {},
    edit: edit,
    save: save,
});