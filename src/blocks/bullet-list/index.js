import {
    bulletList
} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";
import attributes from './attributes'

const {
    __
} = wp.i18n;

const {
    registerBlockType
} = wp.blocks;

registerBlockType("premium/bullet-list", {
    title: __("Bullet List"),
    icon: < PbgIcon icon="bullet-list" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: bulletList
    },
    edit: edit,
    save: save
});