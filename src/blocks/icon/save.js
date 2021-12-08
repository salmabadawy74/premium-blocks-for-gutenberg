import classnames from 'classnames'
import hexToRgba from 'hex-to-rgba'

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
        hideMobile
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-icon');

    return (
        <div
            className={`${mainClasses}__container ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: align,
                backgroundColor: containerStyles[0].backgroundColor
                    ? hexToRgba(containerStyles[0].backgroundColor, containerStyles[0].backgroundOpacity)
                    : "transparent",
                backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : "none",
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
                        backgroundColor: iconStyles[0].iconBack
                            ? hexToRgba(iconStyles[0].iconBack, iconStyles[0].iconOpacity)
                            : "transparent",
                        fontSize: (iconStyles[0].iconSize || 50) + iconStyles[0].iconSizeUnit,
                        paddingTop: paddingT + iconStyles[0].paddingU,
                        paddingRight: paddingR + iconStyles[0].paddingU,
                        paddingBottom: paddingB + iconStyles[0].paddingU,
                        paddingLeft: paddingL + iconStyles[0].paddingU,
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