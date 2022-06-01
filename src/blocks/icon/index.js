import { icon } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import edit from "./edit";
import save from "./save";
import deprecatedContent from "./deprecated";
import attributes from "./attributes";
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/icon", {
    title: __("Icon"),
    description: __('Decorate your Gutenberg website using Premium Icon Block.', 'premium-block-for-gutenberg'),
    icon: PBG_Block_Icons.icon,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: icon
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});