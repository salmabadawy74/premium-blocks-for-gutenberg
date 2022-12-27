import classnames from 'classnames'
import { useBlockProps } from "@wordpress/block-editor";
import { gradientBackground, filterJsCss, generateCss } from '@pbg/helpers';
import { DefaultImage } from '@pbg/components';

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
        iconShadow,
        borderHoverColor,
        iconTypeFile,
        imageURL,
        lottieURl,
        lottieJson,
        loop,
        reversedir,
        speed,
        svgUrl
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-icon-container .premium-icon-type:hover`] = {
            'color': `${iconStyles[0].iconHoverColor} !important`,
            fill: `${iconStyles[0].iconHoverColor} !important`,
            'background-color': `${iconStyles[0].iconHoverBack} !important`,
            "border-color": `${borderHoverColor}!important`
        };
        styles[` .${blockId} .premium-icon-container img`] = {
            'border-color': `${iconBorder && iconBorder.borderColor} !important`,
            'border-style': `${iconBorder && iconBorder.borderType} !important`,
        };
        styles[` .${blockId} .premium-icon-container svg`] = {
            fill: `${iconStyles[0].iconColor}`,
            'background-color': `${iconStyles[0].iconBack}`,
            'border-color': `${iconBorder && iconBorder.borderColor} !important`,
            'border-style': `${iconBorder && iconBorder.borderType} !important`
        };
        return generateCss(styles);
    }

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-icon ${blockId} premium-icon__container`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            data-icontype={iconTypeFile}
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
                        {"icon" === iconTypeFile && <i
                            className={`premium-icon premium-icon-type ${selectedIcon}`}
                            style={filterJsCss({
                                color: iconStyles[0].iconColor,
                                backgroundColor: iconStyles[0].iconBack,
                                borderStyle: iconBorder.borderType,
                                borderColor: iconBorder.borderColor,
                                textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`
                            })}
                        />
                        }
                        {imageURL && "img" === iconTypeFile && (
                            <img src={imageURL} />
                        )}
                        {!imageURL && "img" === iconTypeFile && <DefaultImage className={className} />}
                        {"svg" === iconTypeFile &&
                            <div id="premium-icon-svg" data-src={svgUrl}></div>
                        }
                        {"lottie" === iconTypeFile &&
                            <div
                                className={`premium-lottie-animation`}
                                data-lottieURl={lottieURl}
                                data-speed={speed}
                                data-loop={loop}
                                data-reverse={reversedir}
                            >
                            </div>
                        }
                    </div>
                </a>
            </div>
        </div>
    );
};

export default save;