import edit from "./edit";
import Save from "./save";
import variations from "./variations";
import PBG_Block_Icons from '../../../assets/icons/block-icons'
import { container } from "../../../assets/js/settings";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/container", {
    icon: PBG_Block_Icons.container,
    supports: {
        inserter: container,
        anchor: true,
    },
    variations,
    example: {},
    edit: edit,
    save: Save,
});