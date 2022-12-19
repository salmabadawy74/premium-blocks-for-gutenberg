import classnames from "classnames";
import {
    gradientBackground,
    filterJsCss
} from "@pbg/helpers";
const { useBlockProps, InnerBlocks, RichText } = wp.blockEditor;
const { Fragment } = wp.element;

export default function save({ attributes, deviceType }) {

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        label,
        labelColor,
        percentageColor,
        progress,
        styleProgress,
        animate,
        speeds,
        progressType,
        labelTypography,
        percentageTypography,
        baseBackground,
        fillBackground,
        showIcon,
        borderColor,
        fillColor,
        PrefixTypography,
        PrefixColor,
        suffixTypography,
        suffixColor,
        showPercentage,
        fillPercent,
        numberOfTotalFill,
        numberOfCircles,
        variation,
        showVariation,
        Prefix,
        suffix,
        dotSpacing,
        dotSize
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames("premium-progress-bar", blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    })

    const renderContent = () => {
        return <div className="premium-progressbar-circle-content">
            {showIcon && <InnerBlocks.Content />}
            {label &&
                <RichText.Content
                    tagName="p"
                    className="premium-progress-bar-left-label"
                    value={label}
                    style={filterJsCss({
                        color: labelColor,
                        fontWeight: labelTypography.fontWeight,
                        fontFamily: labelTypography.fontFamily,
                        fontStyle: labelTypography.fontStyle,
                        textDecoration: labelTypography?.textDecoration,
                        textTransform: labelTypography?.textTransform
                    })}
                />
            }
            {showPercentage &&
                < p
                    className="premium-progress-bar-right-label"
                    style={{
                        color: percentageColor,
                        fontWeight: percentageTypography.fontWeight,
                        fontFamily: percentageTypography.fontFamily,
                        fontStyle: percentageTypography.fontStyle,
                        textDecoration: percentageTypography?.textDecoration,
                        textTransform: percentageTypography?.textTransform
                    }}
                >
                    <span>{progress}% </span>
                </p>
            }
        </div>
    }

    const renderDots = (numberOfCircles || []).map((item, index) => {
        return <div
            className="progress-segment"
            style={{
                ...gradientBackground(baseBackground),
            }}
        >
            {
                index < numberOfTotalFill &&
                <div
                    className="segment-inner"
                    style={{
                        ...gradientBackground(fillBackground),
                    }}
                ></div>
            }
            {
                index == numberOfTotalFill && fillPercent != 0 &&
                <div
                    className="segment-inner"
                    style={{
                        width: fillPercent != 0 ? `${fillPercent}%` : '',
                        ...gradientBackground(fillBackground),
                    }}
                ></div>
            }
        </div>
    })

    return (
        <div {...blockProps}
            data-progress={`${progress}`}
            data-speed={`${speeds}`}
            data-type={`${progressType}`}
        >
            {variation != {} && !showVariation && <Fragment>
                <div>
                    {(progressType == 'line' || progressType == 'dots') &&
                        < div className="premium-progress-bar-labels-wrap" >
                            {label &&
                                <RichText.Content
                                    tagName="p"
                                    className="premium-progress-bar-left-label"
                                    value={label}
                                    style={filterJsCss({
                                        color: labelColor,
                                        fontWeight: labelTypography.fontWeight,
                                        fontFamily: labelTypography.fontFamily,
                                        fontStyle: labelTypography.fontStyle,
                                        textDecoration: labelTypography?.textDecoration,
                                        textTransform: labelTypography?.textTransform
                                    })}
                                />
                            }
                            {progress &&
                                < p
                                    className="premium-progress-bar-right-label"
                                    style={{
                                        color: percentageColor,
                                        fontWeight: percentageTypography.fontWeight,
                                        fontFamily: percentageTypography.fontFamily,
                                        fontStyle: percentageTypography.fontStyle,
                                        textDecoration: percentageTypography?.textDecoration,
                                        textTransform: percentageTypography?.textTransform
                                    }}
                                >
                                    <span>{progress}% </span>
                                </p>
                            }
                        </div>
                    }
                    <div className="premium-progress-bar-clear"></div>
                    {progressType == 'line' &&
                        <div
                            className="premium-progress-bar-wrap"
                            style={{
                                ...gradientBackground(baseBackground)
                            }}
                        >
                            < div className={
                                `premium-progress-bar-bar ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                            }
                                style={{
                                    ...gradientBackground(fillBackground),
                                    transition: `width ${speeds}s ease-in-out`,
                                    // width: `${progress}%`,
                                }}
                                data-progress_bar={`${progress}`}
                                data-speed={`${speeds}`}
                            > </div>
                        </div>
                    }
                    {
                        progressType == 'dots' &&
                        <div
                            className="premium-progressbar-bar-wrap premium-progressbar-dots"
                            data-circles={`${numberOfCircles}`}
                            data-total-fill={`${numberOfTotalFill}`}
                            data-partial-fill={`${fillPercent}`}
                            data-spacing={`${dotSpacing['Desktop']}`}
                            data-size={`${dotSize['Desktop']}`}
                        >
                            {renderDots}
                        </div>
                    }
                    {progressType == 'half-circle' &&
                        <div className="premium-progressbar-hf-wrapper">
                            <div
                                className="premium-progressbar-hf-circle-wrap"
                            >
                                <div
                                    className="premium-progressbar-hf-container"
                                >
                                    <div className="premium-progressbar-hf-circle">
                                        <div
                                            className="premium-progressbar-hf-circle-progress"
                                            style={{
                                                // transform: `rotate(${progress * 1.8}deg)`,
                                                borderColor: fillColor
                                            }}
                                        ></div>
                                    </div>
                                    <div
                                        className="premium-progressbar-circle-inner"
                                        style={{
                                            ...gradientBackground(baseBackground),
                                            borderColor: borderColor
                                        }}
                                    ></div>
                                </div>
                                {renderContent()}
                            </div>
                            <div
                                className="premium-progressbar-hf-labels"
                            >
                                <RichText.Content
                                    tagName="span"
                                    className="premium-progressbar-hf-label-left"
                                    value={Prefix}
                                    style={filterJsCss({
                                        color: PrefixColor,
                                        fontWeight: PrefixTypography.fontWeight,
                                        fontFamily: PrefixTypography.fontFamily,
                                        fontStyle: PrefixTypography.fontStyle,
                                        textDecoration: PrefixTypography?.textDecoration,
                                        textTransform: PrefixTypography?.textTransform
                                    })}
                                />
                                <RichText.Content
                                    tagName="span"
                                    className="premium-progressbar-hf-label-right"
                                    value={suffix}
                                    style={filterJsCss({
                                        color: suffixColor,
                                        fontWeight: suffixTypography.fontWeight,
                                        fontFamily: suffixTypography.fontFamily,
                                        fontStyle: suffixTypography.fontStyle,
                                        textDecoration: suffixTypography?.textDecoration,
                                        textTransform: suffixTypography?.textTransform
                                    })}
                                />
                            </div>
                        </div>
                    }
                    {progressType == 'circle' &&
                        <div className="premium-progressbar-hf-wrapper">
                            <div
                                className="premium-progressbar-circle-wrap"
                            >
                                <div
                                    className="premium-progressbar-circle-base"
                                    style={{
                                        borderColor: borderColor,
                                        ...gradientBackground(baseBackground),
                                    }}
                                ></div>
                                <div
                                    className="premium-progressbar-circle"
                                    style={{
                                        // clipPath: `${progress > '50' ? 'inset(0px)' : 'inset(0 0 0 50%)'}`
                                    }}
                                >
                                    <div
                                        className="premium-progressbar-circle-left"
                                        style={{
                                            // transform: `rotate(${progress * 3.6}deg)`,
                                            borderColor: fillColor,
                                        }}
                                    ></div>
                                    <div
                                        className="premium-progressbar-circle-right"
                                        style={{
                                            borderColor: fillColor,
                                            // visibility: `${progress > '50' ? 'visible' : 'hidden'}`
                                        }}
                                    ></div>
                                </div>
                                {renderContent()}
                            </div>
                        </div>
                    }
                </div>
            </Fragment>
            }
        </div>
    );
};