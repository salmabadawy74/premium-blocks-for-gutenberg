/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;
/**
 * Internal dependencies
 */

import metadata from './block.json';
import edit from './edit';
import save from './save';



registerBlockType("premium/accordion-item", {
    // icon: ,
    ...metadata,
    __experimentalLabel: ({ label }) => label,

    edit,

    save,
});