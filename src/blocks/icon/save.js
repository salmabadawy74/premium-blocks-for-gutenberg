import classnames from 'classnames'
import { gradientBackground } from '../../components/HelperFunction'

const save = props => {

    const { className } = props;

    const {
        block_id,
        iconBorder,
        selectedIcon,
        align,
        hoverEffect,
        iconStyles,
        urlCheck,
        link,
        target,
        hideDesktop,
        hideTablet,
        hideMobile,
        containerBorder,
        containerBackground,
        containerShadow,
        iconShadow,
        iconSize
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-icon');

    return (
        <div
            className={`${mainClasses}__container ${hideDesktop} ${hideTablet} ${hideMobile}`}
            id={`premium-icon-${block_id}`}
        >
            <div
                className={`premium-icon-container`}
                style={{
                    textAlign: align,
                    ...gradientBackground(containerBackground),
                    borderStyle: containerBorder.borderType,
                    borderColor: containerBorder.borderColor,
                    boxShadow: `${containerShadow.horizontal || 0}px ${containerShadow.vertical ||
                        0}px ${containerShadow.blur || 0}px ${containerShadow.color} ${containerShadow.position}`,

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
                            fontSize: (iconSize[props.deviceType] || 50) + iconSize.unit,
                            color: iconStyles[0].iconColor || "#6ec1e4",
                            backgroundColor: iconStyles[0].iconBack,
                            borderStyle: iconBorder.borderType,
                            borderColor: iconBorder.borderColor,
                            textShadow: `${iconShadow.horizontal || 0}px ${iconShadow.vertical ||
                                0}px ${iconShadow.blur || 0}px ${iconShadow.color}`
                        }}
                    />
                </a>
            </div>
        </div>
    );
};

export default save;