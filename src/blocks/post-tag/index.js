/**
 * BLOCK: Post Title
 */

// Import block dependencies and components
import Tags from "./edit";
import json from "../../../blocks-config/post-tag/block.json";
// Components
import { __ } from "@wordpress/i18n";

// Register block controls

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-tag", {
    ...json,
    icon: "",
    category: "premium-blocks",
    keywords: [__("post"), __("Tag")],
    edit: Tags,
    example: {},
    save() {
        return null;
    },
});
