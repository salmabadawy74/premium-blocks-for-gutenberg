import PostExcerpt from "./edit";
import save from "./save";
// Components
import { __ } from "@wordpress/i18n";

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-excerpt", {
    icon: "",
    keywords: [__("post"), __("excerpt")],
    edit: PostExcerpt,
    example: {},
    save,
});
