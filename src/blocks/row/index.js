import json from "./block.json";
import edit from "./edit";
import Save from "./save";
import variations from "./variations";
import PBG_Block_Icons from "../../../blocks-config/block-icons";
import { row } from "../../../assets/js/settings";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/row", {
    ...json,
    title: __("Container", "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.row,
    category: "premium-blocks",
    supports: {
        inserter: row,
        anchor: true,
    },
    variations,
    example: {},
    edit: edit,
    save: Save,
});
