import edit from "./edit";
import save from "./save";
import json from "../../../blocks-config/post-grid/block.json";
import { postGrid } from "../../../assets/js/settings";

// Components
import { __ } from "@wordpress/i18n";

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-grid", {
    ...json,
    icon: "",
    keywords: [__("post"), __("grid")],
    supports: {
        align: ["center", "wide", "full"],
        anchor: true,
        alignWide: true,
        inserter: postGrid,
    },
    edit: edit,
    example: {},
    save,
});
