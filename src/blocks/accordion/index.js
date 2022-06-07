import { accordion } from "../../../assets/js/settings";

import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import attributes from './attributes'
import deprecated from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/accordion", {
    title: __("Premium Accordion"),
    description: __('Display collapsed content like FAQs using Premium Accordion Block.'),
    icon: <PbgIcon icon="accordion" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: accordion
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});