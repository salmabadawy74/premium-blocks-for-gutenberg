/**
 * WordPress dependencies
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import './style.scss';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import { breadcrumbs } from '../../../assets/js/settings';

registerBlockType('premium/breadcrumbs', {
    ...json,
    title: __("breadcrumbs", "premium-blocks-for-gutenberg"),
    category: "premium-blocks",

    /**
    * @see ./edit.js
    */
    edit,
    supports: {
        inserter: breadcrumbs
    },
});