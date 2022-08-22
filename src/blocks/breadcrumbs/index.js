/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import PBG_Block_Icons from "../../../blocks-config/block-icons";

registerBlockType('premium/breadcrumbs', {
    ...json,
    title: __("breadcrumbs", "premium-blocks-for-gutenberg"),
    description: __('Decorate your Gutenberg website using Premium Icon Block.', 'premium-block-for-gutenberg'),
    category: "premium-blocks",
    keywords: [__("Icon", 'premium-blocks-for-gutenberg'), __("Font Awesome", 'premium-blocks-for-gutenberg')],
    supports: {
    },
    icon: PBG_Block_Icons.icon,
    /**
     * @see ./edit.js
     */
    edit,
});

