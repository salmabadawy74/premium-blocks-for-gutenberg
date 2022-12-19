/**
 * BLOCK: Post Image
 */

// Import block dependencies and components
import Image from "./edit";
import save from "./save";
// Components
import { __ } from "@wordpress/i18n";

// Register block controls

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-featured-image", {
    icon: "",
    keywords: [__("post"), __("image")],
    edit: Image,
    example: {},
    save,
});
