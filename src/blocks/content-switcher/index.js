import {
    contentSwitcher
} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";

const {
    __
} = wp.i18n;

const {
    registerBlockType
} = wp.blocks;

const contentSwitcherAttrs = {
    block_id: {
        type: "string"
    },
    classMigrate: {
        type: "boolean",
        default: false
    },
    align: {
        type: "string",
        default: "center"
    },
    showLabel: {
        type: "boolean",
        default: true
    },
    firstLabel : {
        type: "string",
        default: "Content #1"
    },
    secondLabel : {
        type: "string",
        default: "Content #2"
    },
    display: {
        type: "string",
        default: "inline"
    },
    firstContent: {
        type: "string",
        default: "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
    },
    secondContent: {
        type: "string",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    switchCheck: {
        type: "boolean",
        default: false
    },
    firstcontentlign: {
        type: "string",
        default: "center"
    },
    secondcontentlign: {
        type: "string",
        default: "center"
    },
    switchSizeType: {
        type: "string",
        default: "px"
    },
    switchSize: {
        type: "number",
        default: 15
    },
    switchSizeMobile: {
        type: "number",
        default: 15
    },
    switchSizeTablet: {
        type: "number",
        default: 15
    },
};

registerBlockType("premium/content-switcher", {
    title: __("Content Switcher"),
    icon: < PbgIcon icon="content-switcher" />,
    category: "premium-blocks",
    attributes: contentSwitcherAttrs,
    supports: {
        inserter: contentSwitcher
    },
    edit: edit,
    // save: save
});