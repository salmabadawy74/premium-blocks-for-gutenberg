import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumBackgroundControl from '../../components/Premium-Background-Control'
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';

import { videoBackground, gradientBackground } from '../../components/HelperFunction';

const { __ } = wp.i18n;

const { PanelBody, ToggleControl, SelectControl, Button, ButtonGroup } = wp.components;

const { Fragment } = wp.element;
const { withSelect } = wp.data


const {
    BlockControls,
    AlignmentToolbar,
    InnerBlocks,
    InspectorControls
} = wp.blockEditor;

const CONTENT = [
    ["core/paragraph", { content: __("Insert your text or select a block ", 'premium-blocks-for-gutenberg') }]
];
function getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
    if (device === 'Mobile') {
        if (undefined !== mobileSize && '' !== mobileSize) {
            return mobileSize;
        } else if (undefined !== tabletSize && '' !== tabletSize) {
            return tabletSize;
        }
    } else if (device === 'Tablet') {
        if (undefined !== tabletSize && '' !== tabletSize) {
            return tabletSize;
        }
    }
    return desktopSize;
}
const edit = props => {
    const { isSelected, className, setAttributes } = props;

    const {
        stretchSection,
        innerWidthType,
        isUpdated,
        horAlign,
        height,
        innerWidth,
        minHeight,
        minHeightUnit,
        vPos,
        block_id,
        hideDesktop,
        hideTablet,
        hideMobile,
        containerStyles,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        backgroundType,
        marginTTablet,
        marginRTablet,
        marginBTablet,
        marginLTablet,
        marginTMobile,
        marginRMobile,
        marginBMobile,
        marginLMobile,
        paddingTTablet,
        paddingRTablet,
        paddingBTablet,
        paddingLTablet,
        paddingTMobile,
        paddingRMobile,
        paddingLMobile,
        paddingBMobile
    } = props.attributes;

    const WIDTH = [
        {
            value: "boxed",
            label: __("Boxed", 'premium-blocks-for-gutenberg')
        },
        {
            value: "full",
            label: __("Full Width", 'premium-blocks-for-gutenberg')
        }
    ];
    const HEIGHT = [
        {
            value: "fit",
            label: __("Fit to Screen", 'premium-blocks-for-gutenberg')
        },
        {
            value: "min",
            label: __("Min Height", 'premium-blocks-for-gutenberg')
        }
    ];
    const VPOSITION = [
        {
            value: "top",
            label: __("Top", 'premium-blocks-for-gutenberg')
        },
        {
            value: "middle",
            label: __("Middle", 'premium-blocks-for-gutenberg')
        },
        {
            value: "bottom",
            label: __("Bottom", 'premium-blocks-for-gutenberg')
        }
    ];


    const mainClasses = classnames(className, "premium-container");

    const saveContainerStyle = (value) => {
        const newUpdate = containerStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            containerStyles: newUpdate,
        });
    }
    let btnGrad, btnGrad2, btnbg;
    if (undefined !== backgroundType && 'gradient' === backgroundType) {
        btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
        btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
        if ('radial' === containerStyles[0].gradientType) {
            btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
        } else if ('radial' !== containerStyles[0].gradientType) {
            btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
        }
    } else {
        btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
    }

    const containerPaddingTop = getPreviewSize(props.deviceType, paddingTop, paddingTTablet, paddingTMobile);
    const containerPaddingRight = getPreviewSize(props.deviceType, paddingRight, paddingRTablet, paddingRMobile);
    const containerPaddingBottom = getPreviewSize(props.deviceType, paddingBottom, paddingBTablet, paddingBMobile);
    const containerPaddingLeft = getPreviewSize(props.deviceType, paddingLeft, paddingLTablet, paddingLMobile);
    const containerMarginTop = getPreviewSize(props.deviceType, marginTop, marginTTablet, marginTMobile);
    const containerMarginRight = getPreviewSize(props.deviceType, marginRight, marginRTablet, marginRMobile);
    const containerMarginBottom = getPreviewSize(props.deviceType, marginBottom, marginBTablet, marginBMobile);
    const containerMarginLeft = getPreviewSize(props.deviceType, marginLeft, marginLTablet, marginLMobile);

    return [
        isSelected && (
            <BlockControls key="controls">
                <AlignmentToolbar
                    value={horAlign}
                    onChange={newAlign => setAttributes({ horAlign: newAlign })}
                />
            </BlockControls>
        ),
        isSelected && (
            <InspectorControls key="inspector">
                <PanelBody
                    title={__("General Settings", 'premium-blocks-for-gutenberg')}
                    className={`premium-panel-body premium-stretch-section`}
                    initialOpen={true}
                >
                    <ToggleControl
                        label={__("Stretch Section", 'premium-blocks-for-gutenberg')}
                        checked={stretchSection}
                        onChange={check => setAttributes({ stretchSection: check })}
                        help={__("This option stretches the section to the full width of the page using JS. You will need to reload the page after you enable this option for the first time.", 'premium-blocks-for-gutenberg')}
                    />
                    {stretchSection && (
                        <SelectControl
                            label={__("Content Width", 'premium-blocks-for-gutenberg')}
                            options={WIDTH}
                            value={innerWidthType}
                            onChange={newValue => setAttributes({ innerWidthType: newValue })}
                        />
                    )}
                    {"boxed" === innerWidthType && stretchSection && (
                        <ResponsiveSingleRangeControl
                            label={__("Max Width", 'premium-blocks-for-gutenberg')}
                            value={innerWidth}
                            min="1"
                            max="1600"
                            onChange={newValue => setAttributes({ innerWidth: newValue })}
                            defaultValue={0}
                            showUnit={false}
                        />
                    )}
                    <SelectControl
                        label={__("Height", 'premium-blocks-for-gutenberg')}
                        options={HEIGHT}
                        value={height}
                        onChange={newValue => setAttributes({ height: newValue })}
                    />
                    {"min" === height && (
                        <Fragment>
                            <ResponsiveSingleRangeControl
                                label={__("Min Height", 'premium-blocks-for-gutenberg')}
                                value={minHeight}
                                min="1"
                                max="800"
                                onChange={newValue => setAttributes({ minHeight: newValue })}
                                units={["px", "vh", "vw"]}
                                defaultValue={0}
                                onChangeUnit={newValue => setAttributes({ minHeightUnit: newValue })}
                                showUnit={true}
                                unit={minHeightUnit}
                            />
                        </Fragment>
                    )}
                    <SelectControl
                        label={__("Content Position", 'premium-blocks-for-gutenberg')}
                        help={__(
                            "If you have two or more inner columns then this option will work only on the preview page", 'premium-blocks-for-gutenberg'
                        )}
                        options={VPOSITION}
                        value={vPos}
                        onChange={newValue => setAttributes({ vPos: newValue })}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Background", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumBackgroundControl
                        setAttributes={setAttributes}
                        saveContainerStyle={saveContainerStyle}
                        backgroundType={backgroundType}
                        backgroundColor={containerStyles[0].containerBack}
                        backgroundImageID={containerStyles[0].backgroundImageID}
                        backgroundImageURL={containerStyles[0].backgroundImageURL}
                        backgroundPosition={containerStyles[0].backgroundPosition}
                        backgroundRepeat={containerStyles[0].backgroundRepeat}
                        backgroundSize={containerStyles[0].backgroundSize}
                        fixed={containerStyles[0].fixed}
                        gradientLocationOne={containerStyles[0].gradientLocationOne}
                        gradientColorTwo={containerStyles[0].gradientColorTwo}
                        gradientLocationTwo={containerStyles[0].gradientLocationTwo}
                        gradientAngle={containerStyles[0].gradientAngle}
                        gradientPosition={containerStyles[0].gradientPosition}
                        gradientType={containerStyles[0].gradientType}
                        videoSource={containerStyles[0].videoSource}
                        bgExternalVideo={containerStyles[0].bgExternalVideo}
                        videoURL={containerStyles[0].videoURL}
                        videoID={containerStyles[0].videoID}
                        bgVideoFallbackID={containerStyles[0].bgVideoFallbackID}
                        bgVideoFallbackURL={containerStyles[0].bgVideoFallbackURL}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Border", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumBorder
                        borderType={containerStyles[0].borderType}
                        borderWidth={containerStyles[0].borderWidth}
                        top={borderTop}
                        right={borderRight}
                        bottom={borderBottom}
                        left={borderLeft}
                        borderColor={containerStyles[0].borderColor}
                        borderRadius={containerStyles[0].borderRadius}
                        onChangeType={(newType) => saveContainerStyle({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                borderTop: top,
                                borderRight: right,
                                borderBottom: bottom,
                                borderLeft: left,
                                isUpdated: true,
                            })
                        }
                        onChangeColor={(colorValue) => saveContainerStyle({ borderColor: colorValue })}
                        onChangeRadius={(newrRadius) => saveContainerStyle({ borderRadius: newrRadius })}
                    />
                    <PremiumShadow
                        boxShadow={true}
                        color={containerStyles[0].shadowColor}
                        blur={containerStyles[0].shadowBlur}
                        horizontal={containerStyles[0].shadowHorizontal}
                        vertical={containerStyles[0].shadowVertical}
                        position={containerStyles[0].shadowPosition}
                        onChangeColor={newColor =>
                            saveContainerStyle({
                                shadowColor:
                                    newColor === undefined
                                        ? "transparent"
                                        : newColor
                            })
                        }
                        onChangeBlur={newBlur => saveContainerStyle({ shadowBlur: newBlur === undefined ? 0 : newBlur })}
                        onChangehHorizontal={newValue => saveContainerStyle({ shadowHorizontal: newValue === undefined ? 0 : newValue })}
                        onChangeVertical={newValue => saveContainerStyle({ shadowVertical: newValue === undefined ? 0 : newValue })}
                        onChangePosition={newValue => saveContainerStyle({ shadowPosition: newValue === undefined ? 0 : newValue })}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Spacings", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumResponsiveMargin
                        directions={["all"]}
                        marginTop={marginTop}
                        marginRight={marginRight}
                        marginBottom={marginBottom}
                        marginLeft={marginLeft}
                        marginTopTablet={marginTTablet}
                        marginRightTablet={marginRTablet}
                        marginBottomTablet={marginBTablet}
                        marginLeftTablet={marginLTablet}
                        marginTopMobile={marginTMobile}
                        marginRightMobile={marginRMobile}
                        marginBottomMobile={marginBMobile}
                        marginLeftMobile={marginLMobile}
                        onChangeMarginTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ marginTop: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ marginTTablet: newValue })
                                } else {
                                    setAttributes({ marginTMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ marginRight: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ marginRTablet: newValue })
                                } else {
                                    setAttributes({ marginRMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ marginBottom: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ marginBTablet: newValue })
                                } else {
                                    setAttributes({ marginBMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ marginLeft: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ marginLTablet: newValue })
                                } else {
                                    setAttributes({ marginLMobile: newValue })
                                }
                            }
                        }
                        showUnits={true}
                        onChangeMarSizeUnit={newvalue => saveContainerStyle({ marginUnit: newvalue })}
                        selectedUnit={containerStyles[0].marginUnit}
                    />
                    <PremiumResponsivePadding
                        paddingTop={paddingTop}
                        paddingRight={paddingRight}
                        paddingBottom={paddingBottom}
                        paddingLeft={paddingLeft}
                        paddingTopTablet={paddingTTablet}
                        paddingRightTablet={paddingRTablet}
                        paddingBottomTablet={paddingBTablet}
                        paddingLeftTablet={paddingLTablet}
                        paddingTopMobile={paddingTMobile}
                        paddingRightMobile={paddingRMobile}
                        paddingBottomMobile={paddingBMobile}
                        paddingLeftMobile={paddingLMobile}
                        showUnits={true}
                        selectedUnit={containerStyles[0].paddingUnit}
                        onChangePadSizeUnit={newvalue => saveContainerStyle({ paddingUnit: newvalue })}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ paddingTop: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ paddingTTablet: newValue })
                                } else {
                                    setAttributes({ paddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ paddingRight: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ paddingRTablet: newValue })
                                } else {
                                    setAttributes({ paddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ paddingBottom: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ paddingBTablet: newValue })
                                } else {
                                    setAttributes({ paddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ paddingLeft: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ paddingLTablet: newValue })
                                } else {
                                    setAttributes({ paddingLMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>
                <PremiumResponsiveTabs
                    Desktop={hideDesktop}
                    Tablet={hideTablet}
                    Mobile={hideMobile}
                    onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                    onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                    onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                />
            </InspectorControls>
        ),
        <div
            className={`${mainClasses} premium-container__stretch_${stretchSection} premium-container__${innerWidthType} ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: horAlign,
                minHeight:
                    "fit" === height ? "100vh" : minHeight + minHeightUnit,
                backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                borderStyle: containerStyles[0].borderType,
                borderWidth: isUpdated
                    ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                    : containerStyles[0].borderWidth + "px",
                borderRadius: containerStyles[0].borderRadius + "px",
                borderColor: containerStyles[0].borderColor,
                backgroundImage: gradientBackground(backgroundType, containerStyles[0].containerBack, containerStyles[0].gradientColorTwo, containerStyles[0].gradientType, containerStyles[0].gradientPosition, containerStyles[0].gradientLocationOne, containerStyles[0].gradientLocationTwo, containerStyles[0].gradientAngle, containerStyles[0].backgroundImageURL),
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                marginTop: containerMarginTop + containerStyles[0].marginUnit,
                marginBottom: containerMarginBottom + containerStyles[0].marginUnit,
                marginLeft: containerMarginLeft + containerStyles[0].marginUnit,
                marginRight: containerMarginRight + containerStyles[0].marginUnit,
                paddingTop: containerPaddingTop + containerStyles[0].paddingUnit,
                paddingBottom: containerPaddingBottom + containerStyles[0].paddingUnit,
                paddingLeft: containerPaddingLeft + containerStyles[0].paddingUnit,
                paddingRight: containerPaddingRight + containerStyles[0].paddingUnit,
                boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`
            }}
        >
            {videoBackground(backgroundType, containerStyles[0].videoSource, containerStyles[0].videoURL, containerStyles[0].bgExternalVideo)}

            <div
                className={`premium-container__content_wrap premium-container__${vPos}`}
                style={{
                    maxWidth: "boxed" == innerWidthType && stretchSection
                        ? innerWidth
                            ? innerWidth + "px"
                            : "1140px"
                        : "100%",
                    minHeight: "fit" === height ? "100vh" : minHeight + minHeightUnit,
                }}
            >

                <div className={`premium-container__content_inner`}>
                    <InnerBlocks template={CONTENT} />
                </div>
            </div>
        </div>
    ];
};

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
    return {
        deviceType: deviceType
    }
})(edit)