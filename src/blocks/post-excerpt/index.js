import PostExcerpt from "./edit";
import save from "./save";
// Components
import { __ } from "@wordpress/i18n";
import json from "../../../blocks-config/post-excerpt/block.json";

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-excerpt", {
    ...json,
    icon: "",
    keywords: [__("post"), __("excerpt")],
    edit: PostExcerpt,
    example: {},
    save,
});
