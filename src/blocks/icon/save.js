import classnames from 'classnames'

const save = props => {

    const { className } = props;

    const {
        block_id,
        iconBorder,
        selectedIcon,
        align,
        hoverEffect,
        iconStyles,
        containerStyles,
        urlCheck,
        link,
        target,
        hideDesktop,
        hideTablet,
        hideMobile,
        backgroundType,
        containerBorder
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-icon');


    let btnGrad, btnGrad2, btnbg;
    if ('gradient' === backgroundType) {
        btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
        btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
        if ('radial' === containerStyles[0].gradientType) {
            btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
        } else if ('radial' !== containerStyles[0].gradientType) {
            btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
        }
    } else {
        btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
    }

    return (
        <div
            className={`${mainClasses}__container ${hideDesktop} ${hideTablet} ${hideMobile}`}
            id={`premium-icon-${block_id}`}
        >
            <div
                className={`premium-icon-container`}
                style={{
                    textAlign: align,
                    backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                    backgroundImage: btnbg,
                    backgroundRepeat: containerStyles[0].backgroundRepeat,
                    backgroundPosition: containerStyles[0].backgroundPosition,
                    backgroundSize: containerStyles[0].backgroundSize,
                    backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                    borderStyle: containerBorder.borderType,
                    borderColor: containerBorder.borderColor,
                    boxShadow: `${containerStyles[0].wrapShadowHorizontal || 0}px ${containerStyles[0].wrapShadowVertical ||
                        0}px ${containerStyles[0].wrapShadowBlur ||
                        0}px ${containerStyles[0].wrapShadowColor} ${containerStyles[0].wrapShadowPosition}`,

                }}
            >
                <a
                    className={`premium-icon__link`}
                    href={urlCheck && link}
                    rel="noopener noreferrer"
                    target={target ? "_blank" : "_self"}
                >
                    <i
                        className={`premium-icon ${selectedIcon} premium-icon__${hoverEffect}`}
                        style={{
                            color: iconStyles[0].iconColor || "#6ec1e4",
                            backgroundColor: iconStyles[0].iconBack,
                            borderStyle: iconBorder.borderType,
                            borderColor: iconBorder.borderColor,
                            textShadow: `${iconStyles[0].shadowHorizontal || 0}px ${iconStyles[0].shadowVertical ||
                                0}px ${iconStyles[0].shadowBlur || 0}px ${iconStyles[0].shadowColor}`
                        }}
                    />
                </a>
            </div>
        </div>
    );
};

export default save;