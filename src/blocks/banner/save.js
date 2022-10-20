import classnames from "classnames";
const { RichText, useBlockProps } = wp.blockEditor;
import {
    filterJsCss,
    generateCss,
} from '@pbg/helpers';

const save = (props) => {
    const { className } = props;
    const {
        imageURL,
        titleStyles,
        descStyles,
        title,
        titleTag,
        desc,
        effect,
        hoverEffect,
        height,
        minHeight,
        verAlign,
        hovered,
        responsive,
        background,
        urlCheck,
        target,
        url,
        sepColor,
        filter,
        hideDesktop,
        hideTablet,
        hideMobile,
        border,
        titleTypography,
        descTypography,
        titleTextShadow,
        descTextShadow,
        containerShadow,
        blockId,
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};

        styles[
            `.${blockId} .premium-banner__effect3 .premium-banner__title_wrap::after`
        ] = {
            background: sepColor,
        };

        return generateCss(styles);
    };

    return (
        imageURL && (
            <div
                {...useBlockProps.save({
                    className: classnames(
                        className,
                        `premium-banner ${blockId} premium-banner__responsive_${responsive}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
            >
                <style>{loadStyles()}</style>
                <div
                    className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                    style={filterJsCss({
                        boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                        borderStyle: border && border.borderType,
                        borderColor: border && border.borderColor,
                        minHeight: height == "custom" ? minHeight : "",
                    })}
                >
                    <div
                        className="premium-banner__bg-overlay"
                        style={filterJsCss({
                            backgroundColor: `${background}`,
                        })}
                    ></div>
                    <div
                        className={`premium-banner__img_wrap premium-banner__${height}`}
                        style={filterJsCss({
                            // minHeight: minHeight,
                            alignItems: verAlign,
                        })}
                    >
                        <img
                            className={`premium-banner__img`}
                            alt="Banner Image"
                            src={imageURL}
                            style={filterJsCss({
                                filter: `brightness( ${filter?.bright}% ) contrast( ${filter?.contrast}% ) saturate( ${filter?.saturation}% ) blur( ${filter?.blur}px ) hue-rotate( ${filter?.hue}deg )`,
                            })}
                        />
                    </div>

                    <div
                        className={`premium-banner__content`}
                        style={filterJsCss({
                            background:
                                "effect2" === effect
                                    ? titleStyles[0].titleBack
                                    : "transparent",
                        })}
                    >
                        <div className={`premium-banner__title_wrap`}>
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`premium-banner__title`}
                                value={title}
                                style={filterJsCss({
                                    color: titleStyles[0].titleColor,
                                    fontStyle: titleTypography.fontStyle,
                                    fontFamily: titleTypography.fontFamily,
                                    fontWeight: titleTypography.fontWeight,
                                    textDecoration:
                                        titleTypography.textDecoration,
                                    textTransform:
                                        titleTypography.textTransform,
                                    textShadow: `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`,
                                })}
                            />
                        </div>
                        <div className={`premium-banner__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`premium-banner__desc`}
                                value={desc}
                                style={filterJsCss({
                                    color: descStyles[0].descColor,
                                    fontStyle: descTypography.fontStyle,
                                    fontFamily: descTypography.fontFamily,
                                    fontWeight: descTypography.fontWeight,
                                    textDecoration:
                                        descTypography.textDecoration,
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
        )
    );
};

export default save;
