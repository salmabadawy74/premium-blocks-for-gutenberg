import { icon } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/icon", {
    title: __("Icon", "premium-blocks-for-gutenberg"),
    description: __('Decorate your Gutenberg website using Premium Icon Block.', 'premium-block-for-gutenberg'),
    icon: PBG_Block_Icons.icon,
    category: "premium-blocks",
    attributes: attributes,
    keywords: [__("Icon", 'premium-blocks-for-gutenberg'), __("Font Awesome", 'premium-blocks-for-gutenberg')],
    supports: {
        inserter: icon
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});