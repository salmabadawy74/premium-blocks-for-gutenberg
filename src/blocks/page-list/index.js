/**
 * WordPress dependencies
 */
import { pages as icon } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit.js';
import './editor.scss';
import './style.scss';

const { name } = metadata;

export { metadata, name };

registerBlockType(name, {
	icon,
	example: {},
	edit,
});
