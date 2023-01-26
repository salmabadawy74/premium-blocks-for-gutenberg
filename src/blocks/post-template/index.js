import PostTemplateEdit from "./edit";
import PostTemplateSave from "./save";
import json from "../../../blocks-config/post-template/block.json";
// Components
import { __ } from "@wordpress/i18n";

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-template", {
    ...json,
    /**
     * @see ./edit.js
     */

    icon: "",
    keywords: [__("post")],
    edit: PostTemplateEdit,
    example: {},
    supports: {
        __experimentalLayout: true,
    },
    save: PostTemplateSave,
});
