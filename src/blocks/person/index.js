import { person } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import deprecated from "./deprecated";
import PbgIcon from "../icons";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/person", {
    title: __("Team Members"),
    icon: <PbgIcon icon="" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: person
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});