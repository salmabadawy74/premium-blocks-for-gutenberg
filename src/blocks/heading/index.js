import {
    heading
} from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import attributes from "./attributes";
import deprecated from './deprecated';
const { __ } = wp.i18n;
import PBG_Block_Icons from '../../../blocks-config/block-icons'

const { registerBlockType } = wp.blocks;

registerBlockType("premium/heading", {
    title: __("Heading"),
    description: __('Grab your website visitors’ attention with stylish headings using Premium Heading Block.', "premium-blocks-for-gutenberg"),
    icon: PBG_Block_Icons.heading,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: heading
    },
    deprecated,
    edit: edit,
    save: save
});