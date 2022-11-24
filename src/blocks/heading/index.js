import { heading } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import deprecated from "./deprecated";
const { __ } = wp.i18n;
import PBG_Block_Icons from "../../../assets/icons/block-icons";

const { registerBlockType } = wp.blocks;

registerBlockType("premium/heading", {
    icon: PBG_Block_Icons.heading,
    supports: {
        inserter: heading,
    },
    example: {},
    deprecated,
    edit: edit,
    save: save,
});
