import { fancyText } from "../../../assets/js/settings";
import save from "./save";
import edit from "./edit";
import deprecated from './deprecated'
import attributes from "./attributes";
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/fancy-text", {
    title: __("Fancy Text", 'premium-blocks-for-gutenberg'),
    description: __('Insert animated headlines across your Gutenberg page using Premium Fancy Text Block.', 'premium-blocks-for-gutenberg'),
    keywords: [__("fancy-text", 'premium-blocks-for-gutenberg'), __("animated-text", 'premium-blocks-for-gutenberg'), __("animated", 'premium-blocks-for-gutenberg')],
    icon: PBG_Block_Icons.fancyText,
    category: "premium-blocks",
    attributes: attributes,
    supports: { inserter: fancyText },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});