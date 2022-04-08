import { banner } from "../../../assets/js/settings";

import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType("premium/banner", {
    title: __("Banner"),
    icon: <PbgIcon icon="banner" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: banner
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});