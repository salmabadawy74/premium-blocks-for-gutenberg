import Meta from "./edit";
// Components
import { __ } from "@wordpress/i18n";
import json from "../../../blocks-config/post-Meta/block.json";

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-meta", {
    ...json,
    icon: "",
    keywords: [
        __("post"), __("Meta"), __("Category"),
        __("Comment"), __("Author"), __("Date")
    ],
    edit: Meta,
    example: {},
    save() {
        return null
    },
});
