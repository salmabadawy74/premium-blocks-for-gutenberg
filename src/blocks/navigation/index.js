/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PBG_Block_Icons from '../../../blocks-config/block-icons'
/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';
import './editor.scss';
import './style.scss';

const { name } = metadata;

registerBlockType(name, {
    icon: PBG_Block_Icons.megaMenu,
    example: {
        innerBlocks: [
            {
                name: 'premium/navigation-link',
                attributes: {
                    // translators: 'Home' as in a website's home page.
                    label: __('Home', "premium-blocks-for-gutenberg"),
                    url: 'https://make.wordpress.org/',
                },
            },
            {
                name: 'premium/navigation-link',
                attributes: {
                    // translators: 'About' as in a website's about page.
                    label: __('About', "premium-blocks-for-gutenberg"),
                    url: 'https://make.wordpress.org/',
                },
            },
            {
                name: 'premium/navigation-link',
                attributes: {
                    // translators: 'Contact' as in a website's contact page.
                    label: __('Contact', "premium-blocks-for-gutenberg"),
                    url: 'https://make.wordpress.org/',
                },
            },
        ],
    },
    /**
     * @see ./edit.js
     */
    edit,
    save,
});
