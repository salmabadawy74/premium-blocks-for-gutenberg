import classnames from 'classnames'
import { gradientBackground, filterJsCss, generateCss } from '../../components/HelperFunction'

const save = props => {

    const { className } = props;

    const {
        blockId,
        iconBorder,
        selectedIcon,
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
        iconShadow
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-icon-container i:hover`] = {
            'color': `${iconStyles[0].iconHoverColor} !important`,
            'background-color': `${iconStyles[0].iconHoverBack} !important`
        };
        return generateCss(styles);
    }

    return (
        <div
            className={classnames(className,
                "premium-icon", `${blockId} premium-icon__container`, {
                ' premium-desktop-hidden': hideDesktop,
                ' premium-tablet-hidden': hideTablet,
                ' premium-mobile-hidden': hideMobile,
            })}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles()
                }}
            />
            <div
                className={`premium-icon-container`}
                style={filterJsCss({
                    ...gradientBackground(containerBackground),
                    borderStyle: containerBorder.borderType,
                    borderColor: containerBorder.borderColor,
                    boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`
                })}
            >
                <a
                    className={`premium-icon__link`}
                    href={urlCheck && link}
                    rel="noopener noreferrer"
                    target={target ? "_blank" : "_self"}
                >
                    <div className={`premium-icon-hover premium-icon__${hoverEffect}`}>
                        <i
                            className={`premium-icon ${selectedIcon}`}
                            style={filterJsCss({
                                color: iconStyles[0].iconColor,
                                backgroundColor: iconStyles[0].iconBack,
                                borderStyle: iconBorder.borderType,
                                borderColor: iconBorder.borderColor,
                                textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`
                            })}
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default save;