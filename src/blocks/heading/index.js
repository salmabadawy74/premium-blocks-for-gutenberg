import {
    heading
} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import PbgIcon from "../icons";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/heading", {
    title: __("Heading"),
    icon: < PbgIcon icon="heading" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: heading
    },
    edit: edit,
    save: save
});