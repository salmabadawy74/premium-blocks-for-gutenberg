import classnames from 'classnames'
import { generateCss, filterJsCss } from '../../components/HelperFunction';
const { RichText } = wp.blockEditor;

const save = props => {
    const { className } = props;
    const {
        imageURL,
        titleStyles,
        descStyles,
        title,
        titleTag,
        desc,
        contentAlign,
        effect,
        hoverEffect,
        height,
        minHeight,
        verAlign,
        hovered,
        responsive,
        background,
        opacity,
        urlCheck,
        target,
        url,
        sepColor,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        hideDesktop,
        hideTablet,
        hideMobile,
        border,
        titleTypography,
        descTypography,
        titleTextShadow,
        descTextShadow,
        containerShadow,
        blockId
    } = props.attributes;

    const mainClasses = classnames(className, 'premium-banner');
    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .premium-banner__effect3 .premium-banner__title_wrap::after`] = {
            'background': sepColor
        };
        styles[`.${blockId} .premium-banner__inner`] = {
            'background': background
        };
        styles[`.${blockId} .premium-banner__img.premium-banner__active`] = {
            'background': `${background ? 1 - opacity / 100 : 1}`
        };

        return generateCss(styles);
    }

    return (
        imageURL &&
        <div
            className={`${mainClasses} premium-banner__responsive_${responsive} ${hideDesktop} ${hideTablet} ${hideMobile} ${blockId}`}
        >
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles()
                }}
            />
            <div
                className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                style={filterJsCss({
                    boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                    borderStyle: border && border.borderType,
                    borderColor: border && border.borderColor,
                })}
            >
                <div
                    className={`premium-banner__img_wrap premium-banner__${height}`}
                    style={filterJsCss({
                        minHeight: minHeight,
                        alignItems: verAlign
                    })}
                >
                    <img
                        className={`premium-banner__img`}
                        alt="Banner Image"
                        src={imageURL}
                        style={filterJsCss({
                            filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                        })}
                    />
                </div>

                <div
                    className={`premium-banner__content`}
                    style={filterJsCss({
                        background: "effect2" === effect ? titleStyles[0].titleBack : "transparent"
                    })}
                >
                    <div
                        className={`premium-banner__title_wrap`}
                        style={filterJsCss({
                            textAlign: contentAlign
                        })}
                    >
                        <RichText.Content
                            tagName={titleTag.toLowerCase()}
                            className={`premium-banner__title`}
                            value={title}
                            style={filterJsCss({
                                color: titleStyles[0].titleColor,
                                fontStyle: titleTypography.fontStyle,
                                fontFamily: titleTypography.fontFamily,
                                fontWeight: titleTypography.fontWeight,
                                textDecoration: titleTypography.textDecoration,
                                textTransform: titleTypography.textTransform,
                                textShadow: `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`,
                            })}
                        />
                    </div>
                    <div
                        className={`premium-banner__desc_wrap`}
                        style={filterJsCss({
                            textAlign: contentAlign
                        })}
                    >
                        <RichText.Content
                            tagName="p"
                            className={`premium-banner__desc`}
                            value={desc}
                            style={filterJsCss({
                                color: descStyles[0].descColor,
                                fontStyle: descTypography.fontStyle,
                                fontFamily: descTypography.fontFamily,
                                fontWeight: descTypography.fontWeight,
                                textDecoration: descTypography.textDecoration,
                                textTransform: descTypography.textTransform,
                                textShadow: `${descTextShadow.horizontal}px ${descTextShadow.vertical}px ${descTextShadow.blur}px ${descTextShadow.color}`,
                            })}
                        />
                    </div>
                </div>
                {urlCheck && "" !== url && (
                    <a
                        className={`premium-banner__link`}
                        href={url}
                        target={target && "_blank"}
                        rel="noopener"
                    />
                )}
            </div>
        </div>
    );
};

export default save;
