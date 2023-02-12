
export const floatingEffectDefaults = {
    enable: false,
    type: 'motion',
    translate: {
        enable: false,
        x: {
            from: -5,
            to: 5,
            unit: 'px'
        },
        y: {
            from: -5,
            to: 5,
            unit: 'px'
        },
        duration: 1000,
        delay: '',
        flag: false
    },
    rotate: {
        enable: false,
        x: {
            from: 0,
            to: 45,
            unit: 'deg'
        },
        y: {
            from: 0,
            to: 45,
            unit: 'deg'
        },
        z: {
            from: 0,
            to: 45,
            unit: 'deg'
        },
        duration: 1000,
        delay: ''
    },
    scale: {
        enable: false,
        x: {
            from: 1,
            to: 1.2,
            unit: 'px'
        },
        y: {
            from: 1,
            to: 1.2,
            unit: 'px'
        },
        duration: 1000,
        delay: ''
    },
    skew: {
        enable: false,
        x: {
            from: 0,
            to: 20,
            unit: 'deg'
        },
        y: {
            from: 0,
            to: 20,
            unit: 'deg'
        },
        duration: 1000,
        delay: ''
    },
    opacity: {
        enable: false,
        value: {
            from: 0,
            to: 50,
            unit: '%'
        },
        duration: 1000,
        delay: ''
    },
    background: {
        enable: false,
        value: {
            from: '',
            to: '',
        },
        duration: 1000,
        delay: ''
    },
    blur: {
        enable: false,
        value: {
            from: 0,
            to: 1,
            unit: 'px'
        },
        duration: 1000,
        delay: ''
    },
    contrast: {
        enable: false,
        value: {
            from: 0,
            to: 50,
            unit: '%'
        },
        duration: 1000,
        delay: ''
    },
    grayscale: {
        enable: false,
        value: {
            from: 0,
            to: 50,
            unit: '%'
        },
        duration: 1000,
        delay: ''
    },
    hue: {
        enable: false,
        value: {
            from: 0,
            to: 90,
            unit: 'deg'
        },
        duration: 1000,
        delay: ''
    },
    brightness: {
        enable: false,
        value: {
            from: 0,
            to: 50,
            unit: '%'
        },
        duration: 1000,
        delay: ''
    },
    saturation: {
        enable: false,
        value: {
            from: 0,
            to: 50,
            unit: '%'
        },
        duration: 1000,
        delay: ''
    },
    direction: 'alternate',
    loop: 'infinite',
    customNumber: 3,
    easing: 'linear',
    disableOnSafari: false,
    steps: 5,
    customSelector: ''
};