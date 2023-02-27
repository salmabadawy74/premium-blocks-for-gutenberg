import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { floatingEffectDefaults } from '../../helpers/defaults';
import { isPremiumBlock } from '../../helpers/helpers';
import './pbg-hooks';
import './blocks-hooks';

const addFloatingAttribute = (settings, name) => {
    if (!PremiumFloatingEffect.allBlocks && !isPremiumBlock(name)) {
        return settings;
    }
    if (typeof settings.attributes !== 'undefined') {
        settings.attributes = Object.assign(settings.attributes, {
            floatingEffect: {
                type: 'object',
                default: floatingEffectDefaults
            }
        });
    }
    return settings;
}

addFilter(
    'blocks.registerBlockType',
    'pbg/floating-effect-attribute',
    addFloatingAttribute
);

const withClientId = createHigherOrderComponent(
    (BlockListBlock) => {
        return (props) => {
            if (!PremiumFloatingEffect.allBlocks && !isPremiumBlock(props.name)) {
                return <BlockListBlock {...props} />;
            }
            const { attributes } = props;
            if (attributes?.floatingEffect?.enable) {
                attributes.floatingEffect.clientId = props.clientId;
            }

            return <BlockListBlock {...props} />;
        };
    },
    'withClientId'
);

addFilter(
    'editor.BlockListBlock',
    'pbg/client-id',
    withClientId
);
