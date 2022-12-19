import PostTemplateEdit from "./edit";
import save from "./save";
import json from "./block.json";
// Components
import { __ } from "@wordpress/i18n";

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-grid", {
    ...json,
    /**
     * @see ./edit.js
     */

    icon: "",
    keywords: [__("post"), __("excerpt")],
    edit: PostTemplateEdit,
    example: {},
    save,
});
