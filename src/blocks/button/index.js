import { button } from "../../../assets/js/settings";
import PBG_Block_Icons from '../../../blocks-config/block-icons'
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from './attributes'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/button", {
    title: __("Button"),
    description: __('Add stylish buttons to your Gutenberg page using Premium Button Block.'),
    icon: PBG_Block_Icons.button,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: button
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});
