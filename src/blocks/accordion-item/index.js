/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */

import metadata from './block.json';
import edit from './edit';
import save from './save';

const { name } = metadata;

export { metadata, name };

registerBlockType(name, {
    // icon: ,

    __experimentalLabel: ({ label }) => label,

    edit,

    save,
});