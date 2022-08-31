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

const { name } = metadata;

export { metadata, name };

registerBlockType(name, {

    example: {},
    variations,
    /**
     * @see ./edit.js
     */
    edit,
});