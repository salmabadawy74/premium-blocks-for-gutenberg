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
import PBG_Block_Icons from '../../../assets/icons/block-icons'

registerBlockType("premium/search", {
    ...metadata,
    example: {},
    variations,
    icon: PBG_Block_Icons.search,
    /**
     * @see ./edit.js
     */
    supports: {
        inserter: search
    },
    edit,
});