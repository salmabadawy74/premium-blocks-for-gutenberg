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

const { name, category } = json;

registerBlockType(name, {
    category,
    /**
     * @see ./edit.js
     */
    edit,
});

