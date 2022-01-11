import classnames from 'classnames'

const save = props => {

    const { className } = props;

    const {
        iconBorder,
        wrapBorder,
        iconType,
        selectedIcon,
        align,
        hoverEffect,
        iconStyles,
        containerStyles,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        paddingU,
        marginT,
        marginR,
        marginB,
        marginL,
        borderWidth,
        iconBorderTop,
        iconBorderRight,
        iconBorderBottom,
        iconBorderLeft,
        wrapBorderWidth,
        wrapBorderTop,
        wrapBorderRight,
        wrapBorderBottom,
        wrapBorderLeft,
        wrapPaddingT,
        wrapPaddingR,
        wrapPaddingB,
        wrapPaddingL,
        wrapMarginT,
        wrapMarginR,
        wrapMarginB,
        wrapMarginL,
        urlCheck,
        link,
        target,
        hideDesktop,
        hideTablet,
        hideMobile,
        backgroundType
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
            style={{
                textAlign: align,
                backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                backgroundImage: btnbg,
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                borderStyle: containerStyles[0].wrapBorderType,
                borderWidth: wrapBorder
                    ? `${wrapBorderTop}px ${wrapBorderRight}px ${wrapBorderBottom}px ${wrapBorderLeft}px`
                    : wrapBorderWidth + "px",
                borderRadius: containerStyles[0].wrapBorderRadius + "px",
                borderColor: containerStyles[0].wrapBorderColor,
                boxShadow: `${containerStyles[0].wrapShadowHorizontal || 0}px ${containerStyles[0].wrapShadowVertical ||
                    0}px ${containerStyles[0].wrapShadowBlur ||
                    0}px ${containerStyles[0].wrapShadowColor} ${containerStyles[0].wrapShadowPosition}`,
                paddingTop: wrapPaddingT,
                paddingRight: wrapPaddingR,
                paddingBottom: wrapPaddingB,
                paddingLeft: wrapPaddingL,
                marginTop: wrapMarginT,
                marginRight: wrapMarginR,
                marginBottom: wrapMarginB,
                marginLeft: wrapMarginL
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
                        fontSize: (iconStyles[0].iconSize || 50) + iconStyles[0].iconSizeUnit,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
                        borderStyle: iconStyles[0].borderType,
                        borderWidth: iconBorder
                            ? `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px`
                            : borderWidth + "px",
                        borderRadius: iconStyles[0].borderRadius || 100 + "px",
                        borderColor: iconStyles[0].borderColor,
                        textShadow: `${iconStyles[0].shadowHorizontal || 0}px ${iconStyles[0].shadowVertical ||
                            0}px ${iconStyles[0].shadowBlur || 0}px ${iconStyles[0].shadowColor}`
                    }}
                />
            </a>
        </div>
    );
};

export default save;