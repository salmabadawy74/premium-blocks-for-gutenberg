import edit from "./edit";
import save from "./save";
import json from "../../../blocks-config/post-carousel/block.json";
// Components
import { __ } from "@wordpress/i18n";

import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("premium/post-carousel", {
    ...json,
    icon: "",
    keywords: [__("post"), __("Carousel")],
    supports: {
        align: ["center", "wide", "full"],
        anchor: true,
        alignWide: true,
    },
    edit: edit,
    example: {},
    save,
});
