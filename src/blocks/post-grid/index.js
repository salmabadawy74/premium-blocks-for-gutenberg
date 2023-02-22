import PostTemplateEdit from "./edit";
import save from "./save";
import json from "../../../blocks-config/post-grid/block.json";
// Components
import { __ } from "@wordpress/i18n";
import { postGrid } from "../../../assets/js/settings";

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-grid", {
    ...json,
    icon: "",
    keywords: [__("post"), __("Grid")],
    supports: {
        align: ["center", "wide", "full"],
        anchor: true,
        alignWide: true,
        inserter: postGrid,
    },
    edit: PostTemplateEdit,
    example: {},
    save,
});
