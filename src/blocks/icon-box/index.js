import { iconBox } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import iconBoxAttrs from './attributes';
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



registerBlockType("premium/icon-box", {
    title: __("Icon Box"),
    icon: <PbgIcon icon="icon-box" />,
    category: "premium-blocks",
    attributes: iconBoxAttrs,
    supports: {
        inserter: iconBox
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
