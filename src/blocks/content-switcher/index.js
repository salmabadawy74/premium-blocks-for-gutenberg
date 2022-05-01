import {
    contentSwitcher
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

registerBlockType("premium/content-switcher", {
    title: __("Content Switcher"),
    icon: < PbgIcon icon="content-switcher" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: contentSwitcher
    },
    edit: edit,
    save: save
});