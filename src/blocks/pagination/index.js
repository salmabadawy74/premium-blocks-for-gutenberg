import metadata from "../../../blocks-config/pagination/block.json";
import edit from "./edit";
import save from "./save";

registerBlockType("premium/pagination", {
    ...metadata,
    /**
     * @see ./edit.js
     */

    icon: "",
    keywords: [__("post"), __("pagination")],
    edit: edit,
    example: {},
    save: save,
});
