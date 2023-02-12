export const getAnimationObj = (floatingEffect) => {
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
            value: [translate?.x?.from || 0, translate?.x?.to || 0],
            delay: translate.delay || 1000,
            duration: translate.duration || 2000
        };
        animeObj.translateY = {
            value: [translate?.y?.from || 0, translate?.y?.to || 0],
            delay: translate.delay || 1000,
            duration: translate.duration || 2000
        };
    }
    if (rotate.enable) {
        animeObj.rotateX = {
            value: [rotate?.x?.from || 0, rotate?.x?.to || 0],
            delay: rotate.delay || 1000,
            duration: rotate.duration || 2000
        };
        animeObj.rotateY = {
            value: [rotate?.y?.from || 0, rotate?.y?.to || 0],
            delay: rotate.delay || 1000,
            duration: rotate.duration || 2000
        };
        animeObj.rotateZ = {
            value: [rotate?.z?.from || 0, rotate?.z?.to || 0],
            delay: rotate.delay || 1000,
            duration: rotate.duration || 2000
        };
    }
    if (scale.enable) {
        animeObj.scaleX = {
            value: [scale?.x?.from || 0, scale?.x?.to || 0],
            delay: scale.delay || 1000,
            duration: scale.duration || 2000
        };
        animeObj.scaleY = {
            value: [scale?.y?.from || 0, scale?.y?.to || 0],
            delay: scale.delay || 1000,
            duration: scale.duration || 2000
        };
    }
    if (skew.enable) {
        animeObj.skewX = {
            value: [skew?.x?.from || 0, skew?.x?.to || 0],
            delay: skew.delay || 1000,
            duration: skew.duration || 2000
        };
        animeObj.skewY = {
            value: [skew?.y?.from || 0, skew?.y?.to || 0],
            delay: skew.delay || 1000,
            duration: skew.duration || 2000
        };
    }
    if (opacity.enable) {
        animeObj.opacity = {
            value: [opacity?.value?.from || 0, opacity?.value?.to || 0],
            duration: opacity.duration || 2000,
            delay: opacity.delay || 1000 || 0
        };
    }
    if (background.enable) {
        animeObj.backgroundColor = {
            value: [background?.value?.from || 0, background?.value?.to || 0],
            duration: background.duration || 2000,
            delay: background?.delay || 1000 || 0
        };
    }
    if (blur.enable) {
        filters.push({
            value: [`blur(${blur?.value?.from}${blur?.value?.unit})` || 0, `blur(${blur?.value?.to}${blur?.value?.unit})` || 0],
            duration: blur.duration || 2000,
            delay: blur.delay || 1000 || 0
        });
    }
    if (contrast.enable) {
        filters.push({
            value: [`contrast(${contrast?.value?.from}${contrast?.value?.unit})` || 0, `contrast(${contrast?.value?.to}${contrast?.value?.unit})` || 0],
            duration: contrast.duration || 2000,
            delay: contrast.delay || 1000 || 0
        });
    }
    if (grayscale.enable) {
        filters.push({
            value: [`grayscale(${grayscale?.value?.from}${grayscale?.value?.unit})` || 0, `grayscale(${grayscale?.value?.to}${grayscale?.value?.unit})` || 0],
            duration: grayscale.duration || 2000,
            delay: grayscale.delay || 1000 || 0
        });
    }
    if (hue.enable) {
        filters.push({
            value: [`hue-rotate(${hue?.value?.from}${hue?.value?.unit})` || 0, `hue-rotate(${hue?.value?.to}${hue?.value?.unit})` || 0],
            duration: hue.duration || 2000,
            delay: hue.delay || 1000 || 0
        });
    }
    if (brightness.enable) {
        filters.push({
            value: [`brightness(${brightness?.value?.from}${brightness?.value?.unit})` || 0, `brightness(${brightness?.value?.to}${brightness?.value?.unit})` || 0],
            duration: brightness.duration || 2000,
            delay: brightness.delay || 1000 || 0
        });
    }
    if (saturation.enable) {
        filters.push({
            value: [`saturate(${saturation?.value?.from}${saturation?.value?.unit})` || 0, `saturate(${saturation?.value?.to}${saturation?.value?.unit})` || 0],
            duration: saturation.duration || 2000,
            delay: saturation.delay || 1000 || 0
        });
    }
    if (filters.length > 0) {
        animeObj.filter = filters;
    }

    return animeObj;
}