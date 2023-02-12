import { getAnimationObj } from './helpers/helpers';
import anime from 'animejs/lib/anime.es.js';

if (Object.keys(PBG_FloatingEffect).length > 0) {
    Object.keys(PBG_FloatingEffect).map(clientId => {
        const floatingEffect = PBG_FloatingEffect[clientId];
        const blockElement = document.querySelectorAll(`[data-effect="${floatingEffect.clientId}"]`);
        const animeSettings = {
            targets: blockElement,
            loop: floatingEffect.loop === 'infinite' ? true : floatingEffect.customNumber,
            direction: floatingEffect.direction,
            easing: floatingEffect.easing,
        };
        const animeObj = getAnimationObj(floatingEffect);

        anime({ ...animeSettings, ...animeObj });
    });
}