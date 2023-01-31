import classnames from "classnames";
import { generateCss, filterJsCss } from "@pbg/helpers";
import {
    GenIcon,
    FaIco,
    Ico
} from "@pbg/components";
const { Fragment } = wp.element;
const { RichText, useBlockProps } = wp.blockEditor;

export default function save(props) {
    const { attributes, className } = props;

    const {
        blockId,
        titleTag,
        style,
        title,
        iconValue,
        iconType,
        icon,
        lottieURl,
        loop,
        reversedir,
        iconPosition,
        imageURL,
        link,
        url,
        iconAlign,
        stripePosition,
        strokeStyles,
        titleStyles,
        titleBorder,
        iconStyles,
        iconBackground,
        iconBorder,
        textStyles,
        stripeAlign,
        backgroundText,
        BackText,
        textWidth,
        blend,
        zIndex,
        hideDesktop,
        hideTablet,
        hideMobile,
        textBackshadow,
        textTypography,
        titleTypography,
        titleShadow,
        icons
    } = attributes;

    const styleContainer = title.split("").map((letter) => {
        return (
            <RichText.Content
                tagName="span"
                className={`premium-title-style9-letter`}
                value={letter}
                style={filterJsCss({
                    color: titleStyles[0].titleColor,
                })}
            />
        );
    });

    let btnGrad, btnGrad2, btnbg;

    if (
        undefined !== iconBackground.backgroundType &&
        "gradient" === iconBackground.backgroundType
    ) {
        btnGrad =
            "transparent" === iconBackground.backgroundColor ||
                undefined === iconBackground.backgroundColor
                ? "rgba(255,255,255,0)"
                : iconBackground.backgroundColor;
        btnGrad2 =
            undefined !== iconBackground.gradientColorTwo &&
                undefined !== iconBackground.gradientColorTwo &&
                "" !== iconBackground.gradientColorTwo
                ? iconBackground.gradientColorTwo
                : "#777";
        if ("radial" === iconBackground.gradientType) {
            btnbg = `radial-gradient(at ${iconBackground.gradientPosition}, ${btnGrad} ${iconBackground.gradientLocationOne}%, ${btnGrad2} ${iconBackground.gradientLocationTwo}%)`;
        } else if ("radial" !== iconBackground.gradientType) {
            btnbg = `linear-gradient(${iconBackground.gradientAngle}deg, ${btnGrad} ${iconBackground.gradientLocationOne}%, ${btnGrad2} ${iconBackground.gradientLocationTwo}%)`;
        }
    } else {
        btnbg = iconBackground.backgroundImageURL
            ? `url('${iconBackground.backgroundImageURL}')`
            : "";
    }

    const loadStyles = () => {
        const styles = {};

        styles[
            `.${blockId} .premium-title-style8__wrap .premium-title-text-title[data-animation='shiny']`
        ] = {
            "--base-color": `${titleStyles[0].titleColor}!important`,
            "--shiny-color": `${titleStyles[0].shinyColor}!important`,
            "--animation-speed": `${titleStyles[0].animateduration}s!important`,
        };
        styles[`.${blockId} .premium-title-header`] = {
            "--shadow-color": `${titleStyles[0].blurColor}!important`,
            "--shadow-value": `${titleStyles[0].blurShadow}px!important`
        };
        styles[`.${blockId} .premium-title .default .premium-title-header`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType == "none"
                ? "none"
                : `${titleBorder.borderType} !important`
                }`
        };
        styles[`.${blockId} .premium-title .style1 .premium-title-header`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType == "none"
                ? "none"
                : `${titleBorder.borderType} !important`
                }`,
            "border-left-style": `${titleBorder.borderType == "none"
                ? "solid"
                : titleBorder.borderType
                }`,
            "border-left-width": `${titleBorder.borderType == "none" ? "3px" : ""
                }`,
            "border-left-color":
                titleBorder.borderType == "none"
                    ? "var(--pbg-global-color1,#0085BA)"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title .style2`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType}`,
            "border-bottom-style": `${titleBorder.borderType == "none"
                ? "solid"
                : titleBorder.borderType
                }`,
            "border-bottom-width": `${titleBorder.borderType == "none" ? "3px" : ""
                }`,
            "border-bottom-color":
                titleBorder.borderType == "none"
                    ? "var(--pbg-global-color1,#0085BA)"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title .style4`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType}`,
            "border-bottom-style": `${titleBorder.borderType == "none"
                ? "solid"
                : titleBorder.borderType
                }`,
            "border-bottom-width": `${titleBorder.borderType == "none" ? "3px" : ""
                }`,
            "border-bottom-color":
                titleBorder.borderType == "none"
                    ? "var(--pbg-global-color1,#0085BA)"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title .style5`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType}`,
            "border-bottom-style": `${titleBorder.borderType == "none"
                ? "solid"
                : titleBorder.borderType
                }`,
            "border-bottom-width": `${titleBorder.borderType == "none" ? "3px" : ""
                }`,
            "border-bottom-color":
                titleBorder.borderType == "none"
                    ? "var(--pbg-global-color1,#0085BA)"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title .style6`] = {
            "border-color": `${titleBorder.borderColor}!important`,
            "border-style": `${titleBorder.borderType}`,
            "border-bottom-style": `${titleBorder.borderType == "none"
                ? "solid"
                : titleBorder.borderType
                }`,
            "border-bottom-width": `${titleBorder.borderType == "none" ? "3px" : ""
                }`,
            "border-bottom-color":
                titleBorder.borderType == "none"
                    ? "var(--pbg-global-color1,#0085BA)"
                    : titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-title-style2__wrap`] = {
            "background-color": `${titleStyles[0].BGColor}!important`,
        };

        styles[`.${blockId} .premium-title-style3__wrap`] = {
            "background-color": `${titleStyles[0].BGColor}!important`,
        };

        styles[`.${blockId} .premium-title-style5__wrap`] = {
            "border-bottom": `2px solid ${titleStyles[0].lineColor}!important`,
        };

        styles[`.${blockId} .premium-title-style6__wrap`] = {
            "border-bottom": `2px solid ${titleStyles[0].lineColor}!important`,
        };

        styles[`.${blockId} .premium-title-style6__wrap:before`] = {
            "border-bottom-color": `${titleStyles[0].triangleColor}!important`,
        };

        styles[`.${blockId} .premium-title-icon`] = {
            color: `${iconStyles[0].iconColor} !important`,
            "background-color": `${iconBackground.backgroundType === "solid"
                ? iconBackground.backgroundColor
                : "transparent"
                } !important`,
            "background-image": `${btnbg} !important`,
            "background-repeat": `${iconBackground.backgroundRepeat} !important`,
            "background-position": `${iconBackground.backgroundPosition} !important`,
            "background-size": `${iconBackground.backgroundSize} !important`,
            "background-attachment": `${iconBackground.fixed ? "fixed" : "unset"
                } !important`,
            "border-color": `${iconBorder.borderColor}!important`,
            "border-style": `${iconBorder.borderType}!important`
        };

        styles[`.${blockId} .premium-title-bg-text:before`] = {
            content: `${BackText}`,
            width: `${textWidth}`,
            color: `${textStyles[0].textBackColor}`,
            "font-family": `${textTypography?.fontFamily}`,
            "font-weight": `${textTypography?.fontWeight}`,
            "font-style": `${textTypography?.fontStyle}`,
            "text-transform": `${textTypography?.textTransform}`,
            "text-decoration": `${textTypography?.textDecoration}`,
            "mix-blend-mode": `${blend} !important`,
            "text-shadow": `${textBackshadow.horizontal}px ${textBackshadow.vertical}px ${textBackshadow.blur}px ${textBackshadow.color} !important`,
            "z-index": `${zIndex} !important`,
            "-webkit-text-stroke-color": `${strokeStyles[0].strokeColor} !important`,
        };

        styles[`.${blockId} .premium-title-style7-stripe-span`] = {
            "background-color": `${titleStyles[0].stripeColor}!important`,
        };

        styles[
            `.${blockId} .premium-title-style9__wrap .premium-letters-container`
        ] = {
            "font-family": `${titleTypography?.fontFamily}`,
            "font-weight": `${titleTypography?.fontWeight}`,
            "letter-spacing": `${titleTypography?.letterSpacing}`,
            "line-height": `${titleTypography?.lineHeight}`,
            "font-style": `${titleTypography?.fontStyle}`,
            "text-shadow": `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color} !important`,
        };

        styles[
            `.${blockId} .premium-title-text-title`
        ] = {
            "font-family": `${titleTypography?.fontFamily}`,
            "font-weight": `${titleTypography?.fontWeight}`,
            "letter-spacing": `${titleTypography?.letterSpacing}`,
            "line-height": `${titleTypography?.lineHeight}`,
            "font-style": `${titleTypography?.fontStyle}`,
            "text-shadow": `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color} !important`,
        };

        return generateCss(styles);
    };

    return (
        <div
            {...useBlockProps.save({
                className: classnames(className, `premium-heading ${blockId}`, {
                    " premium-desktop-hidden": hideDesktop,
                    " premium-tablet-hidden": hideTablet,
                    " premium-mobile-hidden": hideMobile,
                }),
            })}
        >
            <style>{loadStyles()}</style>
            <div
                className={`premium-title   ${backgroundText ? "premium-title-bg-text" : ""
                    }`}
                data-backgroundText={BackText}
            >
                <div
                    className={`premium-title-container ${style}`}
                    data-blur-delay={titleStyles[0].animateDelay}
                    data-shiny-dur={titleStyles[0].animateduration}
                >
                    {React.createElement(
                        titleTag,
                        {
                            className: `premium-title-header premium-title-${style}__wrap ${iconValue ? iconPosition : ""
                                } ${iconPosition == "top"
                                    ? `premium-title-${iconAlign?.["Desktop"]} premium-title-tablet-${iconAlign?.["Tablet"]} premium-title-mobile-${iconAlign?.["Mobile"]}`
                                    : ""
                                }`,
                            "data-blur-delay": `${titleStyles[0].animateDelay}`,
                            "data-shiny-dur": `${titleStyles[0].animateduration}`
                        },
                        [
                            <Fragment>
                                {style === "style7" ? (
                                    <Fragment>
                                        {iconPosition != "top" && iconValue && (
                                            <span
                                                className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign?.["Desktop"]} premium-stripe-tablet-${stripeAlign?.["Tablet"]} premium-stripe-mobile-${stripeAlign?.["Mobile"]}`}
                                            >
                                                <span
                                                    className={`premium-title-style7-stripe-span`}
                                                ></span>
                                            </span>
                                        )}
                                        {!iconValue && (
                                            <span
                                                className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign?.["Desktop"]} premium-stripe-tablet-${stripeAlign?.["Tablet"]} premium-stripe-mobile-${stripeAlign?.["Mobile"]}`}
                                            >
                                                <span
                                                    className={`premium-title-style7-stripe-span`}
                                                ></span>
                                            </span>
                                        )}
                                        <div
                                            className={`premium-title-style7-inner-title`}
                                        >
                                            {iconValue &&
                                                iconType == "icon" && (
                                                    // <i
                                                    //     className={`premium-title-icon ${icon}`}
                                                    // />
                                                    <GenIcon className={`premium-title-icon ${icon}`}
                                                        name={icon}
                                                        icon={('fa' === icon.substring(0, 2) ? FaIco[icon] : Ico[icon])}
                                                        strokeWidth={('fe' === icon.substring(0, 2) ? icons[0].width : undefined)}
                                                    />
                                                )}
                                            {iconValue &&
                                                iconType == "image" && (
                                                    <img
                                                        className={`premium-title-icon`}
                                                        src={imageURL}
                                                    />
                                                )}
                                            {iconValue &&
                                                iconType == "lottie" && (
                                                    <div
                                                        className="premium-title-icon premium-lottie-animation"
                                                        data-loop={loop}
                                                        data-lottieurl={`${lottieURl}`}
                                                        data-reverse={
                                                            reversedir
                                                        }
                                                        data-trigger={"none"}
                                                    ></div>
                                                )}

                                            {iconPosition === "top" && (
                                                <span
                                                    className={`premium-title-style7-stripe__wrap premium-stripe-${stripePosition} premium-stripe-${stripeAlign?.["Desktop"]} premium-stripe-tablet-${stripeAlign?.["Tablet"]} premium-stripe-mobile-${stripeAlign?.["Mobile"]}`}
                                                >
                                                    <span
                                                        className={`premium-title-style7-stripe-span`}
                                                    ></span>
                                                </span>
                                            )}
                                            <RichText.Content
                                                tagName="span"
                                                className={`premium-title-text-title`}
                                                value={title}
                                                style={filterJsCss({
                                                    color: titleStyles[0].titleColor,
                                                    textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`,
                                                })}
                                            />
                                        </div>
                                    </Fragment>
                                ) : style === "style9" ? (
                                    <Fragment>
                                        {iconValue && iconType == "icon" && (
                                            // <i
                                            //     className={`premium-title-icon ${icon}`}
                                            // />
                                            <GenIcon className={`premium-title-icon ${icon}`}
                                                name={icon}
                                                icon={('fa' === icon.substring(0, 2) ? FaIco[icon] : Ico[icon])}
                                                strokeWidth={('fe' === icon.substring(0, 2) ? icons[0].width : undefined)}
                                            />
                                        )}
                                        {iconValue && iconType == "image" && (
                                            <img
                                                className={`premium-title-icon`}
                                                src={imageURL}
                                            />
                                        )}
                                        {iconValue && iconType == "lottie" && (
                                            <div
                                                className="premium-title-icon premium-lottie-animation"
                                                data-loop={loop}
                                                data-lottieurl={`${lottieURl}`}
                                                data-reverse={reversedir}
                                                data-trigger={"none"}
                                            ></div>
                                        )}
                                        <span
                                            className={`premium-letters-container`}
                                            style={filterJsCss({
                                                color: titleStyles[0].titleColor,
                                                textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`,
                                            })}
                                        >
                                            {styleContainer}
                                        </span>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        {iconValue && iconType == "icon" && (
                                            // <i
                                            //     className={`premium-title-icon ${icon}`}
                                            // />
                                            <GenIcon className={`premium-title-icon ${icon}`}
                                                name={icon}
                                                icon={('fa' === icon.substring(0, 2) ? FaIco[icon] : Ico[icon])}
                                                strokeWidth={('fe' === icon.substring(0, 2) ? icons[0].width : undefined)}
                                            />
                                        )}
                                        {iconValue && iconType == "image" && (
                                            <img
                                                className={`premium-title-icon`}
                                                src={imageURL}
                                            />
                                        )}
                                        {iconValue && iconType == "lottie" && (
                                            <div
                                                className="premium-title-icon premium-lottie-animation"
                                                data-loop={loop}
                                                data-lottieurl={`${lottieURl}`}
                                                data-reverse={reversedir}
                                                data-trigger={"none"}
                                            ></div>
                                        )}
                                        <RichText.Content
                                            tagName="span"
                                            className={`premium-title-text-title`}
                                            value={title}
                                            style={filterJsCss({
                                                minHeight: "15px",
                                                color: titleStyles[0].titleColor,
                                                textShadow: `${titleShadow.horizontal}px ${titleShadow.vertical}px ${titleShadow.blur}px ${titleShadow.color}`,
                                            })}
                                        />
                                    </Fragment>
                                )}
                                {link && url !== " " && (
                                    <a
                                        rel="noopener noreferrer"
                                        target={"_self"}
                                        href={`${url}`}
                                    ></a>
                                )}
                            </Fragment>,
                        ]
                    )}
                </div>
            </div>
        </div>
    );
}
