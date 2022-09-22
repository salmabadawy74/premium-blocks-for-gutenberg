/**
 * WordPress dependencies
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import './style.scss';
import PBG_Block_Icons from '../../../blocks-config/block-icons'

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
    icon: PBG_Block_Icons.breadcrumbs,
    /**
    * @see ./edit.js
    */
    edit,
    supports: {
        inserter: breadcrumbs
    },
});