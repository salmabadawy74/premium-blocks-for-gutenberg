import { getAnimationObj, checkSelector } from '../../helpers/helpers';
import anime from 'animejs/lib/anime.es.js';

let blocksElement = document.querySelectorAll(`[data-effect]`);

if (blocksElement.length > 0) {
    const addBlockFloatingEffect = () => {
        blocksElement.forEach(blockElement => {
            const { effect: clientId } = blockElement.dataset;
            const floatingEffect = PBG_FloatingEffect[clientId];
            if (floatingEffect?.disableOnSafari && checkSafariBrowser()) {
                return;
            }
            let device = 'Desktop';
            const { breakPoints } = PBG_FloatingEffect;

            if (window.matchMedia(breakPoints.desktop).matches) {
                device = 'Desktop';
            } else if (window.matchMedia(breakPoints.tablet).matches && !window.matchMedia(breakPoints.mobile).matches) {
                device = 'Tablet';
            } else if (window.matchMedia(breakPoints.mobile).matches) {
                device = 'Mobile';
            }
            let targets;
            if (floatingEffect.customSelector && checkSelector(floatingEffect.customSelector)) {
                targets = blockElement.querySelectorAll(floatingEffect.customSelector);
            }
            const animeSettings = {
                targets: targets?.length > 0 ? targets : [blockElement],
                loop: floatingEffect.loop === 'infinite' ? true : floatingEffect.customNumber,
                direction: floatingEffect.direction,
                easing: floatingEffect.easing,
            };
            const animeObj = getAnimationObj(floatingEffect, device);
            anime({ ...animeSettings, ...animeObj });
        })
    }
    window.addEventListener("resize", () => addBlockFloatingEffect(), false);
    addBlockFloatingEffect();
}

