import { button } from "../../../assets/js/settings";

import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PbgIcon from "../icons";
import attributes from './attributes'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



registerBlockType("premium/button", {
    title: __("Button"),
    icon: <PbgIcon icon="button" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: button
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
