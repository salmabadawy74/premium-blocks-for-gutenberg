import { getAnimationObj, checkSelector } from './helpers/helpers';
import anime from 'animejs/lib/anime.es.js';

if (Object.keys(PBG_FloatingEffect).length > 0) {
    Object.keys(PBG_FloatingEffect).map(clientId => {
        const floatingEffect = PBG_FloatingEffect[clientId];
        if (floatingEffect?.disableOnSafari && checkSafariBrowser()) {
            return;
        }
        let blockElement = document.querySelectorAll(`[data-effect="${floatingEffect.clientId}"]`);
        let targets;
        if (floatingEffect.customSelector && checkSelector(floatingEffect.customSelector)) {
            blockElement = document.querySelector(`[data-effect="${floatingEffect.clientId}"]`);
            targets = blockElement.querySelectorAll(floatingEffect.customSelector);
        }
        const animeSettings = {
            targets: targets?.length > 0 ? targets : blockElement,
            loop: floatingEffect.loop === 'infinite' ? true : floatingEffect.customNumber,
            direction: floatingEffect.direction,
            easing: floatingEffect.easing,
        };
        const animeObj = getAnimationObj(floatingEffect);
        anime({ ...animeSettings, ...animeObj });
    });
}