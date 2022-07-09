import { maps } from "../../../assets/js/settings";
import save from "./save";
import edit from "./edit";
import attributes from "./attributes";
import deprecated from './deprecated';
import PBG_Block_Icons from '../../../blocks-config/block-icons'
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("premium/maps", {
    title: __("Maps"),
    description: __('Embed Google Maps to your Gutenberg page using Premium Maps Block.'),
    icon: PBG_Block_Icons.maps,
    category: "premium-blocks",
    supports: {
        inserter: maps
    },
    attributes: attributes,
    deprecated,
    edit: edit,
    save: save
});
