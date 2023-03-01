import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { isPremiumBlock } from '../../helpers/helpers';
import { entranceAnimationDefaults } from "../../helpers/defaults";
import './animation.scss';
import './pbg-hooks';
import './blocks-hooks';

const addEntranceAnimationAttribute = (settings, name) => {
    if (!PremiumAnimation.allBlocks && !isPremiumBlock(name)) {
        return settings;
    }
    if (typeof settings.attributes !== 'undefined') {
        settings.attributes = Object.assign(settings.attributes, {
            entranceAnimation: {
                type: 'object',
                default: entranceAnimationDefaults
            }
        });
    }
    return settings;
}

addFilter(
    'blocks.registerBlockType',
    'pbg/entrance-animation-attribute',
    addEntranceAnimationAttribute
);

const withClientId = createHigherOrderComponent(
    (BlockListBlock) => {
        return (props) => {
            if (!PremiumAnimation.allBlocks && !isPremiumBlock(props.name)) {
                return <BlockListBlock {...props} />;
            }
            const { attributes } = props;
            const deviceType = useSelect((select) => {
                const { __experimentalGetPreviewDeviceType = null } = select(
                    "core/edit-post"
                );
                return __experimentalGetPreviewDeviceType
                    ? __experimentalGetPreviewDeviceType()
                    : "Desktop";
            }, []);

            if (attributes?.entranceAnimation && attributes.entranceAnimation.animation?.[deviceType]) {
                attributes.entranceAnimation.clientId = props.clientId.split("-")[4];
            }

            return <BlockListBlock {...props} />;
        };
    },
    'withClientId'
);

addFilter(
    'editor.BlockListBlock',
    'pbg/entrance-animation-client-id',
    withClientId
);