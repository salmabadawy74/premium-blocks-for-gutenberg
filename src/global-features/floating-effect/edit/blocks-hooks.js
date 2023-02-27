import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment, useEffect } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { checkSafariBrowser, checkSelector, getAnimationObj, resetStyles, isPremiumBlock } from '../../helpers/helpers';
import anime from 'animejs/lib/anime.es.js';
import { useSelect } from '@wordpress/data';
import { useRef } from '@wordpress/element';
import FloatingEffect from './components/FloatingEffect';

const FloatingEffectControl = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        if (!PremiumFloatingEffect.allBlocks || isPremiumBlock(props.name)) {
            return <BlockEdit {...props} />;
        }
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
            if (!floatingEffect?.enable) {
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
            }
            return () => {
                if (animationInstance) {
                    animationInstance.reset();
                    resetStyles([blockRef.current]);
                    resetStyles(blockRef.current.querySelectorAll('*'));
                }
            };
        }, [isSelected, floatingEffect, deviceType]);

        return (
            <Fragment>
                <div className='pbg-floating-effect' ref={blockRef}>
                    <BlockEdit {...props} />
                </div>
                {isSelected &&
                    <InspectorControls>
                        <FloatingEffect value={floatingEffect} onChange={(value) => setAttributes({ floatingEffect: value })} />
                    </InspectorControls>
                }
            </Fragment>
        );
    };
}, 'FloatingEffectControl');

addFilter(
    'editor.BlockEdit',
    'pbg/floating-effect-attribute',
    FloatingEffectControl
);
