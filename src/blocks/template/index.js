import { template } from "../../../assets/js/settings";
import PbgIcon from "../icons";

import edit from "./edit";
import save from "./save";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

const test1Attrs = {
    isLibraryOpen: {
        type: 'boolean',
        default: false
    },
    isOpenModal: {
        type: 'boolean',
        default: false
    },
    template: {
        type: 'array',
        default: []
    },
    newTemplate: {
        type: 'array',
        default: []
    },
    category: {
        type: 'array',
        default: []
    },
    uikits: {
        type: 'array',
        default: []
    },
    activeCategory: {
        type: 'boolean',
        default: false
    },
    column: {
        type: 'number',
        default: 3
    }
};

registerBlockType("premium/template", {
    title: __("template"),
    icon: <PbgIcon icon="template" />,
    category: "premium-blocks",
    attributes: test1Attrs,
    supports: {
        inserter: template
    },
    edit: edit,
    save: save
});
