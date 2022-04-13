import { person } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/person", {
    title: __("person"),
    icon: <PbgIcon icon="button" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: person
    },
    edit: edit,
    save: save
});