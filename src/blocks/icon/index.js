import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import PBG_Block_Icons from '../../../assets/icons/block-icons'
import { icon } from "../../../assets/js/settings";

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import deprecatedContent from "./deprecated";

registerBlockType('premium/icon', {
    ...json,
    title: __("Icon", "premium-blocks-for-gutenberg"),
    description: __('Decorate your Gutenberg website using Premium Icon Block.', 'premium-block-for-gutenberg'),
    category: "premium-blocks",
    keywords: [__("Icon", 'premium-blocks-for-gutenberg'), __("Font Awesome", 'premium-blocks-for-gutenberg')],
    supports: {
        inserter: icon
    },
    icon: PBG_Block_Icons.icon,

    edit,
    save,
    deprecated: deprecatedContent
});