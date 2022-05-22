import { accordion } from "../../../assets/js/settings";

import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import attributes from './attributes'
import deprecated from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/accordion", {
    title: __("Accordion"),
    icon: <PbgIcon icon="accordion" />,
    category: "premium-blocks",
    attributes: attributes,
    description: __(
        'This block lets you add a combination of a heading and a sub-heading with a separator in between.',
        'premium-blocks-for-gutenberg'
    ),
    supports: {
        inserter: accordion
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});