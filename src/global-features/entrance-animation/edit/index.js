import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { useEffect } from 'react';
import { createHigherOrderComponent } from '@wordpress/compose';
import { hasBlockSupport } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
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
    (BlockEdit) => {
        return (props) => {
            const hasCustomClassName = hasBlockSupport(
                props.name,
                'customClassName',
                true
            );
            const { attributes, setAttributes, clientId, className = '' } = props;
            const { entranceAnimation = {} } = attributes;
            const { animation } = entranceAnimation;
            const deviceType = useSelect((select) => {
                const { __experimentalGetPreviewDeviceType = null } = select(
                    "core/edit-post"
                );
                return __experimentalGetPreviewDeviceType
                    ? __experimentalGetPreviewDeviceType()
                    : "Desktop";
            }, []);

            useEffect(() => {
                const entranceAnimationId = clientId.split("-")[4];
                if ((!PremiumAnimation.allBlocks && !isPremiumBlock(props.name)) || !hasCustomClassName) {
                    setAttributes({ className: className.replace(`pbg-animation-${entranceAnimationId}`, '') });
                    return;
                }

                if (!attributes?.entranceAnimation?.animation?.[deviceType]) {
                    setAttributes({ className: className.replace(`pbg-animation-${entranceAnimationId}`, '') });
                    return;
                }
                setAttributes({ className: `pbg-animation-${entranceAnimationId}` });
                setAttributes({ entranceAnimation: { ...entranceAnimation, clientId: entranceAnimationId } });
            }, [animation]);

            return <BlockEdit {...props} />;
        };
    },
    'withClientId'
);

addFilter(
    'editor.BlockEdit',
    'pbg/entrance-animation-client-id',
    withClientId
);