import classnames from "classnames";
import { gradientBackground, generateCss, filterJsCss } from '@pbg/helpers';
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
        showIcon
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames("premium-progress-bar", blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    })

    return (
        <div {...blockProps}
            data-score={`${progress}`}
            data-speed={`${speeds}`}
            data-type={`${progressType}`}
        >
            {progressType == 'line' &&
                < div className="premium-progress-bar-labels-wrap" >
                    {label &&
                        <p
                            className="premium-progress-bar-left-label"
                            style={{
                                color: labelColor
                            }}
                        >
                            <span>{label}</span>
                        </p>
                    }
                    {percentage &&
                        < p
                            className="premium-progress-bar-right-label"
                            style={{
                                color: percentageColor
                            }}
                        >
                            <span>{percentage} </span>
                        </p>
                    }
                </div>
            }
            <div className="premium-progress-bar-clear"></div>
            {progressType == 'line' &&
                <div
                    className="premium-progress-bar-wrap"
                    style={{
                        ...gradientBackground(baseBackground),
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
                        data-score={`${progress}`}
                        data-speed={`${speeds}`}
                    > </div>
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
                                <div className="premium-progressbar-hf-circle-progress"></div>
                            </div>
                            <div className="premium-progressbar-circle-inner"></div>
                        </div>
                        <div className="premium-progressbar-circle-content">
                            {showIcon && <InnerBlocks
                                template={INNER_BLOCKS_TEMPLATE}
                                templateLock={false}
                                allowedBlocks={["premium/icon"]}
                            />}
                            {label &&
                                <p
                                    className="premium-progress-bar-left-label"
                                    style={{
                                        color: labelColor
                                    }}
                                >
                                    <span>{label}</span>
                                </p>
                            }
                            {percentage &&
                                < p
                                    className="premium-progress-bar-right-label"
                                    style={{
                                        color: percentageColor
                                    }}
                                >
                                    <span>{percentage} </span>
                                </p>
                            }
                        </div>
                    </div>
                    <div
                        className="premium-progressbar-hf-labels"
                    >
                        <span className="premium-progressbar-hf-label-left">0</span>
                        <span className="premium-progressbar-hf-label-right">100</span>
                    </div>
                </div>
            }
        </div>
    );
};