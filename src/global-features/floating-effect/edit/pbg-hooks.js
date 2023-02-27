import { useRef, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { addFilter, addAction } from '@wordpress/hooks';
import { checkSafariBrowser, checkSelector, getAnimationObj, resetStyles } from '../../helpers/helpers';
import anime from 'animejs/lib/anime.es.js';
import { useSelect } from '@wordpress/data';
import FloatingEffect from './components/FloatingEffect';


const FloatingEffectAdvancedOption = (content, props) => {
    const { attributes, setAttributes, isSelected } = props;
    const { floatingEffect = {} } = attributes;

    return <>
        {content}
        <FloatingEffect value={floatingEffect} onChange={(value) => setAttributes({ floatingEffect: value })} />
    </>
}

addFilter(
    'Pbg.AdvancedTab',
    'pbg/entrance-animation-option',
    FloatingEffectAdvancedOption
);


const PbgFloatingEffectContent = (content, props) => {
    const { attributes, setAttributes, isSelected } = props;
    const { floatingEffect = {} } = attributes;
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
        if (!floatingEffect?.enable || !blockRef.current) {
            return;
        }
        if (floatingEffect?.disableOnSafari && checkSafariBrowser()) {
            return;
        }
        let targets = [blockRef.current];
        if (floatingEffect.customSelector && checkSelector(floatingEffect.customSelector)) {
            targets = blockRef.current.querySelectorAll(floatingEffect.customSelector);
        }
        const animeSettings = {
            targets: targets,
            loop: floatingEffect.loop === 'infinite' ? true : floatingEffect.customNumber,
            direction: floatingEffect.direction,
            easing: floatingEffect.easing !== 'steps' ? floatingEffect.easing : `steps(${floatingEffect?.steps || 5})`,
        };
        const animeObj = getAnimationObj(floatingEffect, deviceType);
        let animationInstance = null;
        if (Object.keys(animeObj).length) {
            animationInstance = anime({ ...animeSettings, ...animeObj });
            animationInstance.play();
        }
        return () => {
            if (animationInstance && blockRef.current) {
                animationInstance.reset();
                resetStyles([blockRef.current]);
                resetStyles(blockRef.current.querySelectorAll('*'));
            }
        };
    }, [isSelected, floatingEffect, deviceType]);

    const Content = () => {
        if (floatingEffect?.enable) {
            return <div className='pbg-floating-effect' ref={blockRef}>
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
    PbgFloatingEffectContent
);