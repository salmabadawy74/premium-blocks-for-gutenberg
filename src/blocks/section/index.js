import { container } from "../../../assets/js/settings";

import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import PbgIcon from "../icons";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/container", {
    title: __("Section"),
    icon: <PbgIcon icon="section" />,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: container,
        align: true,
        align: ["center", "wide", "full"]
    },
    example: {
        attributes: {
            minHeight: 200,
        },
    },
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
