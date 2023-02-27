export const getAnimationObj = (floatingEffect, deviceType = 'Desktop') => {
    const {
        type,
        translate,
        rotate,
        scale,
        skew,
        opacity,
        background,
        blur,
        contrast,
        grayscale,
        hue,
        brightness,
        saturation,
    } = floatingEffect;

    const animeObj = {};
    const filters = [];
    if (translate.enable) {
        animeObj.translateX = {
            value: [translate?.x?.[deviceType]?.from || 0, translate?.x?.[deviceType]?.to || 0],
            delay: translate.delay || 0,
            duration: translate.duration || 1000
        };
        animeObj.translateY = {
            value: [translate?.y?.[deviceType]?.from || 0, translate?.y?.[deviceType]?.to || 0],
            delay: translate.delay || 0,
            duration: translate.duration || 1000
        };
    }
    if (rotate.enable) {
        animeObj.rotateX = {
            value: [rotate?.x?.[deviceType]?.from || 0, rotate?.x?.[deviceType]?.to || 0],
            delay: rotate.delay || 0,
            duration: rotate.duration || 1000
        };
        animeObj.rotateY = {
            value: [rotate?.y?.[deviceType]?.from || 0, rotate?.y?.[deviceType]?.to || 0],
            delay: rotate.delay || 0,
            duration: rotate.duration || 1000
        };
        animeObj.rotateZ = {
            value: [rotate?.z?.[deviceType]?.from || 0, rotate?.z?.[deviceType]?.to || 0],
            delay: rotate.delay || 0,
            duration: rotate.duration || 1000
        };
    }
    if (scale.enable) {
        animeObj.scaleX = {
            value: [scale?.x?.[deviceType]?.from || 0, scale?.x?.[deviceType]?.to || 0],
            delay: scale.delay || 0,
            duration: scale.duration || 1000
        };
        animeObj.scaleY = {
            value: [scale?.y?.[deviceType]?.from || 0, scale?.y?.[deviceType]?.to || 0],
            delay: scale.delay || 0,
            duration: scale.duration || 1000
        };
    }
    if (skew.enable) {
        animeObj.skewX = {
            value: [skew?.x?.[deviceType]?.from || 0, skew?.x?.[deviceType]?.to || 0],
            delay: skew.delay || 0,
            duration: skew.duration || 1000
        };
        animeObj.skewY = {
            value: [skew?.y?.[deviceType]?.from || 0, skew?.y?.[deviceType]?.to || 0],
            delay: skew.delay || 0,
            duration: skew.duration || 1000
        };
    }
    if (opacity.enable) {
        animeObj.opacity = {
            value: [opacity?.value?.from / 100 || 0, opacity?.value?.to / 100 || 0],
            duration: opacity.duration || 1000,
            delay: opacity.delay || 0
        };
    }
    if (background.enable) {
        animeObj.backgroundColor = {
            value: [background?.value?.from || 0, background?.value?.to || 0],
            duration: background.duration || 1000,
            delay: background?.delay || 0
        };
    }
    if (blur.enable) {
        filters.push({
            value: [`blur(${blur?.value?.from}${blur?.value?.unit})` || 0, `blur(${blur?.value?.to}${blur?.value?.unit})` || 0],
            duration: blur.duration || 1000,
            delay: blur.delay || 0
        });
    }
    if (contrast.enable) {
        filters.push({
            value: [`contrast(${contrast?.value?.from}${contrast?.value?.unit})` || 0, `contrast(${contrast?.value?.to}${contrast?.value?.unit})` || 0],
            duration: contrast.duration || 1000,
            delay: contrast.delay || 0
        });
    }
    if (grayscale.enable) {
        filters.push({
            value: [`grayscale(${grayscale?.value?.from}${grayscale?.value?.unit})` || 0, `grayscale(${grayscale?.value?.to}${grayscale?.value?.unit})` || 0],
            duration: grayscale.duration || 1000,
            delay: grayscale.delay || 0
        });
    }
    if (hue.enable) {
        filters.push({
            value: [`hue-rotate(${hue?.value?.from}${hue?.value?.unit})` || 0, `hue-rotate(${hue?.value?.to}${hue?.value?.unit})` || 0],
            duration: hue.duration || 1000,
            delay: hue.delay || 0
        });
    }
    if (brightness.enable) {
        filters.push({
            value: [`brightness(${brightness?.value?.from}${brightness?.value?.unit})` || 0, `brightness(${brightness?.value?.to}${brightness?.value?.unit})` || 0],
            duration: brightness.duration || 1000,
            delay: brightness.delay || 0
        });
    }
    if (saturation.enable) {
        filters.push({
            value: [`saturate(${saturation?.value?.from}${saturation?.value?.unit})` || 0, `saturate(${saturation?.value?.to}${saturation?.value?.unit})` || 0],
            duration: saturation.duration || 1000,
            delay: saturation.delay || 0
        });
    }
    if (filters.length > 0) {
        animeObj.filter = filters;
    }

    return animeObj;
}

export const checkSafariBrowser = () => {
    const iOS = /iP(hone|ad|od)/i.test(navigator.userAgent) && !window.MSStream;

    if (iOS) {
        const allowedBrowser = /(Chrome|CriOS|OPiOS|FxiOS)/.test(navigator.userAgent);

        if (!allowedBrowser) {
            const isFireFox = '' === navigator.vendor;
            allowedBrowser = allowedBrowser || isFireFox;
        }

        const isSafari = /WebKit/i.test(navigator.userAgent) && !allowedBrowser;

    } else {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    return isSafari ? true : false;
};

export const checkSelector = (selector) => {
    try {
        const checker = document.querySelector(selector);
        return true;
    } catch (e) {
        return false;
    }
}

export const isPremiumBlock = (blockName) => {
    return blockName.startsWith('premium/');
}

export const resetStyles = (elements) => {
    Array.from(elements).forEach(element => {
        if (!element) {
            return;
        }
        const styles = element.getAttribute('style');
        if (styles) {
            const filteredStyles = styles
                .split(';')
                .filter(style => {
                    const property = style.trim().split(":")[0];
                    return !['transform', 'opacity', 'background-color', 'filter'].includes(property);
                })
                .map(style => style.trim())
                .join(';');
            element.setAttribute('style', filteredStyles);
        }
    })
}