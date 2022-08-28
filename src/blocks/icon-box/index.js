import { iconBox } from "../../../assets/js/settings";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



registerBlockType("premium/iconbox", {
    title: __("Icon Box", 'premium-blocks-for-gutenberg'),
    description: __('Add informative info boxes along with Icon, Description, and CTA using Premium Icon Box Block.', 'premium-block-for-gutenberg'),
    icon: PBG_Block_Icons.icon_box,
    category: "premium-blocks",
    attributes: attributes,
    keywords: [
        __("Icon", 'premium-blocks-for-gutenberg'),
        __("Font Awesome", 'premium-blocks-for-gutenberg'),
        __("Box", 'premium-blocks-for-gutenberg')
    ],
    supports: {
        inserter: iconBox
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});