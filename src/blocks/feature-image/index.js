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

import json from './block.json'
// Register the block
registerBlockType("premium/post-featured-image", {
    ...json,
    icon: "",
    keywords: [__("post"), __("image")],
    edit: Image,
    example: {},
    save() {
        return null;
    },
});
