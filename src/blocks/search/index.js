/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import variations from './variations';
import './editor.scss';
import './style.scss';
import { search } from '../../../assets/js/settings';



registerBlockType("premium/search", {
    ...metadata,
    example: {},
    variations,
    /**
     * @see ./edit.js
     */
    supports: {
        inserter: search
    },
    edit,
});