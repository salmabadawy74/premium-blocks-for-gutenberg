import {
    fancyText
} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import deprecated from './deprecated'
import PbgIcon from "../icons";
import attributes from "./attributes";

const {
    __
} = wp.i18n;

const {
    registerBlockType
} = wp.blocks;



registerBlockType("premium/fancy-text", {
    title: __("Fancy Text"),
    icon: <PbgIcon icon="fancy-text" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: fancyText
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});