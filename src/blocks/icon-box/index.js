import { iconBox } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



registerBlockType("premium/icon-box", {
    title: __("Icon Box"),
    icon: <PbgIcon icon="icon-box" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: iconBox
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});