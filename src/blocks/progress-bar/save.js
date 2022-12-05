import classnames from "classnames";
import {
    generateBlockId,
    gradientBackground,
    typographyCss,
    filterJsCss,
    marginCss,
    generateCss,
} from "@pbg/helpers";
const { useBlockProps, InnerBlocks } = wp.blockEditor;

export default function save({ attributes }) {

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        align,
        multiStage,
        percentage,
        label,
        progressBarHeight,
        progressBarRadius,
        labelColor,
        percentageColor,
        progress,
        repeaterItems,
        editTitle,
        styleProgress,
        animate,
        speeds,
        arrowColor,
        arrow,
        arrowTablet,
        arrowMobile,
        arrowType,
        indicator,
        pinColor,
        pin,
        pinTablet,
        pinType,
        pinMobile,
        pinHeight,
        pinHeightTablet,
        pinHeightType,
        pinHeightMobile,
        progressType,
        labelTypography,
        percentageTypography,
        baseBackground,
        fillBackground,
        progressBarMargin,
        percentageMargin,
        labelMargin,
        progressBarSize,
        showIcon,
        borderWidth,
        borderColor,
        fillColor,
        topSpacing,
        PrefixTypography,
        PrefixColor,
        PrefixMargin,
        suffixTypography,
        suffixColor,
        suffixMargin,
        showPercentage,
        dotSpacing,
        dotSize,
        fillPercent,
        numberOfTotalFill,
        numberOfCircles
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
                <p
                    className="premium-progress-bar-left-label"
                    style={{
                        color: labelColor,
                        fontWeight: labelTypography.fontWeight,
                        fontFamily: labelTypography.fontFamily,
                        fontStyle: labelTypography.fontStyle,
                        textDecoration: labelTypography?.textDecoration,
                        textTransform: labelTypography?.textTransform
                    }}
                >
                    <span>{label}</span>
                </p>
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
        >
            {
                index < numberOfTotalFill &&
                <div
                    className="segment-inner"
                ></div>
            }
            {
                index == numberOfTotalFill && fillPercent != 0 &&
                <div
                    className="segment-inner"
                    style={{
                        width: fillPercent != 0 ? `${fillPercent}%` : ''
                    }}
                ></div>
            }
        </div>
    })

    return (
        <div {...blockProps}
            data-score={`${progress}`}
            data-speed={`${speeds}`}
            data-type={`${progressType}`}
        >
            <div>
                {(progressType == 'line' || progressType == 'dots') &&
                    < div className="premium-progress-bar-labels-wrap" >
                        {label &&
                            <p
                                className="premium-progress-bar-left-label"
                                style={{
                                    color: labelColor,
                                    fontWeight: labelTypography.fontWeight,
                                    fontFamily: labelTypography.fontFamily,
                                    fontStyle: labelTypography.fontStyle,
                                    textDecoration: labelTypography?.textDecoration,
                                    textTransform: labelTypography?.textTransform
                                }}
                            >
                                <span>{label}</span>
                            </p>
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
                                width: `${progress}%`,
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
                                            transform: `rotate(${progress * 1.8}deg)`,
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
                            <span
                                className="premium-progressbar-hf-label-left"
                                style={{
                                    color: PrefixColor,
                                    fontWeight: PrefixTypography.fontWeight,
                                    fontFamily: PrefixTypography.fontFamily,
                                    fontStyle: PrefixTypography.fontStyle,
                                    textDecoration: PrefixTypography?.textDecoration,
                                    textTransform: PrefixTypography?.textTransform
                                }}
                            >0</span>
                            <span
                                className="premium-progressbar-hf-label-right"
                                style={{
                                    color: suffixColor,
                                    fontWeight: suffixTypography.fontWeight,
                                    fontFamily: suffixTypography.fontFamily,
                                    fontStyle: suffixTypography.fontStyle,
                                    textDecoration: suffixTypography?.textDecoration,
                                    textTransform: suffixTypography?.textTransform
                                }}
                            >100</span>
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
                                    clipPath: `${progress > '50' ? 'inset(0px)' : 'inset(0 0 0 50%)'}`
                                }}
                            >
                                <div
                                    className="premium-progressbar-circle-left"
                                    style={{
                                        transform: `rotate(${progress * 3.6}deg)`,
                                        borderColor: fillColor,
                                    }}
                                ></div>
                                <div
                                    className="premium-progressbar-circle-right"
                                    style={{
                                        borderColor: fillColor,
                                        visibility: `${progress > '50' ? 'visible' : 'hidden'}`
                                    }}
                                ></div>
                            </div>
                            {renderContent()}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};