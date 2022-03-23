import { icon } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";


const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/modal", {
    title: __("Icon"),
    icon: <PbgIcon icon="icon" />,
    category: "premium-blocks",
    attributes: {},
    supports: {
        inserter: icon
    },
    example: {},
    edit: edit,
    save: () => { },
});