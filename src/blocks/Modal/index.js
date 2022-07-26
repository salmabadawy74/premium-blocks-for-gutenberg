import { modal } from "../../../assets/js/settings";
import edit from "./edit";
import attributes from './attributes'
import save from './save'
import deprecated from "./deprecated";
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;


registerBlockType("premium/modal", {
    title: __("Modal Box"),
    description: __('Easily, get creative modal popups on your WordPress website using Premium Modal Box Block.', 'premium-block-for-gutenberg'),
    keywords: [__("modal", 'premium-blocks-for-gutenberg'), __("popup", 'premium-blocks-for-gutenberg')],
    icon: PBG_Block_Icons.modal,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: modal
    },
    deprecated,
    example: {},
    edit: edit,
    save: save,
});