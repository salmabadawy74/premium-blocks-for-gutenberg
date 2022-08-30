/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { search as icon } from '@wordpress/icons';

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
	icon,
	example: {},
	variations,
	/**
	 * @see ./edit.js
	 */
	edit,
});