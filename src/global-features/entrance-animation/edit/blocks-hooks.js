import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { Fragment, useEffect } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { isPremiumBlock } from '../../helpers/helpers';
import { useRef } from 'react';
import EntranceAnimation from './components/EntranceAnimation';
import { hasBlockSupport } from '@wordpress/blocks';

const EntranceAnimationControl = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const hasCustomClassName = hasBlockSupport(
            props.name,
            'customClassName',
            true
        );

        if (!PremiumAnimation.allBlocks || isPremiumBlock(props.name) || !hasCustomClassName) {
            return <BlockEdit {...props} />;
        }

        const { attributes, setAttributes, isSelected, clientId } = props;
        const { entranceAnimation = {} } = attributes;
        const deviceType = useSelect((select) => {
            const { __experimentalGetPreviewDeviceType = null } = select(
                "core/edit-post"
            );
            return __experimentalGetPreviewDeviceType
                ? __experimentalGetPreviewDeviceType()
                : "Desktop";
        }, []);
        const blockRef = useRef(null);
        useEffect(() => {
            if (!attributes?.entranceAnimation?.animation?.[deviceType]) {
                return;
            }
            let blockElement = blockRef.current;
            blockElement.style.animationTimingFunction = entranceAnimation.curve;
            blockElement.style.animationDuration = entranceAnimation.duration ? `${entranceAnimation.duration}ms` : '';
            blockElement.style.animationDelay = entranceAnimation.delay ? `${entranceAnimation.delay}ms` : '';
        }, [isSelected, entranceAnimation, deviceType]);

        return (
            <Fragment>
                <div className={`pbg-entrance-animation ${attributes?.entranceAnimation?.animation?.[deviceType]}`} ref={blockRef}>
                    <BlockEdit {...props} />
                </div>
                <InspectorControls>
                    <EntranceAnimation value={entranceAnimation} deviceType={deviceType} onChange={(value) => setAttributes({ entranceAnimation: value })} />
                </InspectorControls>
            </Fragment>
        );
    };
}, 'EntranceAnimationControl');

addFilter(
    'editor.BlockEdit',
    'pbg/entrance-animation-attribute',
    EntranceAnimationControl
);