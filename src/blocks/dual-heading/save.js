import classnames from "classnames";
import { gradientBackground, filterJsCss } from "@pbg/helpers";
const { RichText, useBlockProps } = wp.blockEditor;
const { Fragment } = wp.element;

const save = (props) => {
    const { className } = props;

    const {
        blockId,
        firstHeading,
        secondHeading,
        display,
        firstStyles,
        secondStyles,
        link,
        target,
        headingURL,
        hideDesktop,
        hideTablet,
        hideMobile,
        firstBorder,
        secondBorder,
        containerBorder,
        background,
        firstShadow,
        secondShadow,
        headingTag
    } = props.attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `${blockId} premium-dheading-block__container`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            style={filterJsCss({
                borderStyle: containerBorder && containerBorder.borderType,
                borderColor: containerBorder && containerBorder.borderColor,
                ...gradientBackground(background),
            })}
        >
            <div className={`premium-dheading-block__wrap`}>
                {React.createElement(
                    headingTag,
                    {
                        className: `premium-dheading-block__title`
                    },
                    [
                        <Fragment>
                            <RichText.Content
                                className={`premium-dheading-block__first${firstStyles?.[0]?.firstClip
                                    ? ` premium-headingc-${firstStyles?.[0]?.firstClip}`
                                    : ""
                                    }${firstStyles?.[0]?.firstAnim
                                        ? ` premium-headinga-${firstStyles?.[0]?.firstAnim}`
                                        : ""
                                    }${firstStyles?.[0]?.firstStroke
                                        ? ` premium-headings-${firstStyles?.[0]?.firstStroke}`
                                        : ""
                                    }`}
                                value={firstHeading}
                                tagName={'span'}
                                style={filterJsCss({
                                    display: display,
                                    color: firstStyles[0].firstColor,
                                    backgroundColor: firstStyles[0].firstClip
                                        ? "none"
                                        : firstStyles[0].firstBackground,
                                    backgroundImage: firstStyles[0].firstClip
                                        ? `linear-gradient(to left, ${firstStyles[0].firstColor}, ${firstStyles[0].firstClipColor})`
                                        : "none",
                                    borderStyle: firstBorder && firstBorder.borderType,
                                    borderColor: firstBorder && firstBorder.borderColor,
                                    textShadow: `${firstShadow?.horizontal}px ${firstShadow?.vertical}px ${firstShadow?.blur}px ${firstShadow?.color}`,
                                })}
                            />
                            <RichText.Content
                                className={`premium-dheading-block__second${secondStyles?.[0]?.secondClip
                                    ? `${` premium-headingc-${secondStyles?.[0]?.secondClip}`}`
                                    : ""
                                    }${secondStyles?.[0]?.secondAnim
                                        ? ` ${`premium-headinga-${secondStyles?.[0]?.secondAnim} `}`
                                        : ""
                                    }${secondStyles?.[0]?.secondStroke
                                        ? ` premium-headings-${secondStyles?.[0]?.secondStroke}`
                                        : ""
                                    }`}
                                tagName={'span'}
                                value={secondHeading}
                                style={filterJsCss({
                                    display: display,
                                    color: secondStyles[0].secondColor,
                                    backgroundColor: secondStyles[0].secondClip
                                        ? "none"
                                        : secondStyles[0].secondBackground,
                                    backgroundImage: secondStyles[0].secondClip
                                        ? `linear-gradient(to left, ${secondStyles[0].secondColor}, ${secondStyles[0].secondClipColor})`
                                        : "none",
                                    borderStyle:
                                        secondBorder && secondBorder.borderType,
                                    borderColor:
                                        secondBorder && secondBorder.borderColor,
                                    textShadow: `${secondShadow?.horizontal}px ${secondShadow?.vertical}px ${secondShadow?.blur}px ${secondShadow?.color}`,
                                })}
                            />
                        </Fragment>
                    ]
                )}
                {link && headingURL && (
                    <a
                        className={`premium-dheading-block__link`}
                        href={link && headingURL}
                        target={target && "_blank"}
                        rel="noopener noreferrer"
                    />
                )}
            </div>
        </div>
    );
};

export default save;
