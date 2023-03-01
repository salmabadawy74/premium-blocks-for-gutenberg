import { __ } from '@wordpress/i18n';
import { addFilter, addAction } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { useRef, useEffect } from 'react';
import { createHigherOrderComponent } from '@wordpress/compose';
import EntranceAnimation from './components/EntranceAnimation';
import { TestFill } from '../../../components/AdvancedTabOptions';

const EntranceAnimationAdvancedOption = (props) => {
    const { attributes, setAttributes, isSelected } = props;
    const { entranceAnimation = {} } = attributes;
    const deviceType = useSelect((select) => {
        const { __experimentalGetPreviewDeviceType = null } = select(
            "core/edit-post"
        );
        return __experimentalGetPreviewDeviceType
            ? __experimentalGetPreviewDeviceType()
            : "Desktop";
    }, []);

    return <TestFill>
        <EntranceAnimation value={entranceAnimation} onChange={(value) => setAttributes({ entranceAnimation: value })} deviceType={deviceType} />
    </TestFill>
}

addFilter(
    'Pbg.AdvancedTab',
    'pbg/entrance-animation-option',
    EntranceAnimationAdvancedOption
);

const PbgEntranceAnimationContent = createHigherOrderComponent((BlockContent) => {
    return props => {
        const { attributes, setAttributes, isSelected } = props.blockProps;
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

        return <BlockContent {...props} className={attributes?.entranceAnimation?.animation?.[deviceType]} ref={blockRef} />
    }
})

addFilter(
    'pbg.BlockContent',
    'pbg/entrance-pbg-block-content',
    PbgEntranceAnimationContent
);