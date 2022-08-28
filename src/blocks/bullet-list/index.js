import {
    bulletList
} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import attributes from './attributes'
import deprecated from './deprecated';
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const {
    __
} = wp.i18n;

const {
    registerBlockType
} = wp.blocks;

registerBlockType("premium/bulletlist", {
    title: __("Bullet List"),
    description: __('Organize your website’s content with attractive lists using Premium Bullet List Block.'),
    icon: PBG_Block_Icons.bulletList,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: bulletList
    },
    deprecated,
    edit: edit,
    save: save
});