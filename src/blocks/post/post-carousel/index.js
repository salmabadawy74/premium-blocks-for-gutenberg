

// Import block dependencies and components
import edit from './edit';

import json from "../../../../blocks-config/post-carousel/block.json";
// Components
import { __ } from '@wordpress/i18n';

// Register block controls
import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType('premium/post-carousel', {
    ...json,
    title: __('Post Carousel', 'premium-blocks-for-gutenberg'),
    description: __('Display your posts in a sliding carousel layout.', 'premium-blocks-for-gutenberg'),
    keywords: [
        __('post', 'premium-blocks-for-gutenberg'),
        __('carousel', 'premium-blocks-for-gutenberg'),
    ],
    edit,
    example: {},
    save() {
        return null;
    },
});
