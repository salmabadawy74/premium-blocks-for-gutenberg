import classnames from "classnames";
import { gradientBackground, generateCss, filterJsCss } from '@pbg/helpers';
const { useBlockProps, InnerBlocks } = wp.blockEditor;

const save = props => {
    const { className } = props;

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
        labelMargin
    } = props.attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `${blockId}`,
                    `premium-progress-bar`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                )
            })}
        >
            < div className="premium-progress-bar-labels-wrap" >
                {label ? <p
                    className="premium-progress-bar-left-label"
                    style={filterJsCss({
                        color: labelColor
                    })}
                >
                    <span>{label}</span>
                </p> : ""}
                {percentage ? < p
                    className="premium-progress-bar-right-label"
                    style={filterJsCss({
                        color: percentageColor
                    })}
                >
                    <span > {
                        percentage
                    } </span>
                </p> : ""}
            </div>
            <div className="premium-progress-bar-clear"></div>
            <div
                className="premium-progress-bar-progress"
                style={filterJsCss({
                    ...gradientBackground(baseBackground)
                })}
            >
                < div className={
                    `premium-progress-bar-progress-bar ${styleProgress == 'stripe' ? "premium-progress-bar-progress-stripe" : ""} ${animate ? "premium-progress-bar-progress-active" : ""}`
                }
                    style={filterJsCss({
                        ...gradientBackground(fillBackground),
                        transition: `width ${speeds}s ease-in-out`,
                        width: `${progress}%`,
                    })}
                    data-score={`${progress}`}
                    data-speed={`${speeds}`}
                > </div>
            </div>
        </div>
    );
};

export default save;