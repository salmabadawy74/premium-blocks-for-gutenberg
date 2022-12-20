/**
 * BLOCK: Post Title
 */

// Import block dependencies and components
import PostTitle from "./edit";
import save from "./save";
import json from "../../../blocks-config/post-title/block.json";
// Components
import { __ } from "@wordpress/i18n";

// Register block controls

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-title", {
    ...json,
    icon: "",
    category: "premium-blocks",
    keywords: [__("post"), __("title")],
    edit: PostTitle,
    example: {},
    save,
});
