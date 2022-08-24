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

registerBlockType('premium/breadcrumbs', {
    ...json,
    title: __("breadcrumbs", "premium-blocks-for-gutenberg"),
    category: "premium-blocks",

    /**
    * @see ./edit.js
    */
    edit,
});

