import { icon } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/icon", {
    title: __("Icon"),
    icon: <PbgIcon icon="icon" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: icon
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
