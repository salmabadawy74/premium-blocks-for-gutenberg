export const gradientBackground = (value) => {
    const { backgroundType, backgroundColor, backgroundRepeat, backgroundPosition, fixed, backgroundSize, gradientColorTwo, gradientPosition, gradientType, gradientLocationOne, gradientLocationTwo, gradientAngle, backgroundImageURL } = value
    let btnGrad, btnGrad2, btnbg;
    if (undefined !== backgroundType && 'gradient' === backgroundType) {
        btnGrad = ('transparent' === backgroundColor || undefined === backgroundColor ? 'rgba(255,255,255,0)' : backgroundColor);
        btnGrad2 = (undefined !== gradientColorTwo && undefined !== gradientColorTwo && '' !== gradientColorTwo ? gradientColorTwo : '#777');
        if ('radial' === gradientType) {
            btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        } else if ('radial' !== gradientType) {
            btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        }
    } else {
        btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : ''
    }
    return {
        backgroundColor: backgroundType === "solid" ? backgroundColor : "transparent",
        backgroundImage: btnbg,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
    };

}