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
        padding,
        margin,
        background,
        wrapPadding,
        wrapMargin,
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
                    ? `${containerStyles[0].wrapBorderTop}px ${containerStyles[0].wrapBorderRight}px ${containerStyles[0].wrapBorderBottom}px ${containerStyles[0].wrapBorderLeft}px`
                    : containerStyles[0].wrapBorderWidth + "px",
                borderRadius: containerStyles[0].wrapBorderRadius + "px",
                borderColor: containerStyles[0].wrapBorderColor,
                boxShadow: `${containerStyles[0].wrapShadowHorizontal || 0}px ${containerStyles[0].wrapShadowVertical ||
                    0}px ${containerStyles[0].wrapShadowBlur ||
                    0}px ${containerStyles[0].wrapShadowColor} ${wrapShadowPosition}`,
                paddingTop: containerStyles[0].wrapPaddingT,
                paddingRight: containerStyles[0].wrapPaddingR,
                paddingBottom: containerStyles[0].wrapPaddingB,
                paddingLeft: containerStyles[0].wrapPaddingL,
                marginTop: containerStyles[0].wrapMarginT,
                marginRight: containerStyles[0].wrapMarginR,
                marginBottom: containerStyles[0].wrapMarginB,
                marginLeft: containerStyles[0].wrapMarginL
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
                        paddingTop: iconStyles[0].paddingT + iconStyles[0].paddingU,
                        paddingRight: iconStyles[0].paddingR + iconStyles[0].paddingU,
                        paddingBottom: iconStyles[0].paddingB + iconStyles[0].paddingU,
                        paddingLeft: iconStyles[0].paddingL + iconStyles[0].paddingU,
                        marginTop: iconStyles[0].marginT,
                        marginRight: iconStyles[0].marginR,
                        marginBottom: iconStyles[0].marginB,
                        marginLeft: iconStyles[0].marginL,
                        borderStyle: iconStyles[0].borderType,
                        borderWidth: iconBorder
                            ? `${iconStyles[0].iconBorderTop}px ${iconStyles[0].iconBorderRight}px ${iconStyles[0].iconBorderBottom}px ${iconStyles[0].iconBorderLeft}px`
                            : iconStyles[0].borderWidth + "px",
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
