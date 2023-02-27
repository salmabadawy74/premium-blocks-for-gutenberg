import { __ } from '@wordpress/i18n';
import { addFilter, addAction } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { useRef, useEffect } from 'react';
import EntranceAnimation from './components/EntranceAnimation';

const EntranceAnimationAdvancedOption = (content, props) => {
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

    return <>
        {content}
        <EntranceAnimation value={entranceAnimation} onChange={(value) => setAttributes({ entranceAnimation: value })} deviceType={deviceType} />
    </>
}

addFilter(
    'Pbg.AdvancedTab',
    'pbg/entrance-animation-option',
    EntranceAnimationAdvancedOption
);


const PbgEntranceAnimationContent = (content, props) => {
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
    const Content = () => {
        if (attributes?.entranceAnimation?.animation?.[deviceType]) {
            return <div className='pbg-entrance-animation' ref={blockRef}>
                {content}
            </div>
        }

        return content
    }
    return <Content />;
}

addFilter(
    'Pbg.BlockContent',
    'pbg/entrance-pbg-block-content',
    PbgEntranceAnimationContent
);