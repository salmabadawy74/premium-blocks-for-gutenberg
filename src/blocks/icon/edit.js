import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumBackgroundControl from "../../components/Premium-Background-Control";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
const { __ } = wp.i18n;
import RadioComponent from '../../components/radio-control';
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumShadow from "../../components/PremiumShadow";

const {
    PanelBody,
    SelectControl,
    ToggleControl,
} = wp.components;

const { InspectorControls, URLInput } = wp.blockEditor;

const { withSelect } = wp.data
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
    const { isSelected, setAttributes, className } = props;

    const {
        iconBorder,
        wrapBorder,
        iconType,
        selectedIcon,
        align,
        hoverEffect,
        iconStyles,
        containerStyles,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        paddingU,
        marginT,
        marginR,
        marginB,
        marginL,
        borderWidth,
        iconBorderTop,
        iconBorderRight,
        iconBorderBottom,
        iconBorderLeft,
        wrapBorderWidth,
        wrapBorderTop,
        wrapBorderRight,
        wrapBorderBottom,
        wrapBorderLeft,
        wrapPaddingT,
        wrapPaddingR,
        wrapPaddingB,
        wrapPaddingL,
        wrapMarginT,
        wrapMarginR,
        wrapMarginB,
        wrapMarginL,
        urlCheck,
        link,
        target,
        hideDesktop,
        hideTablet,
        hideMobile,
        backgroundType,
        paddingTTablet,
        paddingRTablet,
        paddingBTablet,
        paddingLTablet,
        paddingTMobile,
        paddingRMobile,
        paddingBMobile,
        paddingLMobile,
        wrapPaddingTTablet,
        wrapPaddingRTablet,
        wrapPaddingBTablet,
        wrapPaddingLTablet,
        wrapPaddingTMobile,
        wrapPaddingRMobile,
        wrapPaddingBMobile,
        wrapPaddingLMobile,
        marginTTablet,
        marginRTablet,
        marginBTablet,
        marginLTablet,
        marginTMobile,
        marginRMobile,
        marginBMobile,
        marginLMobile,
        wrapMarginTTablet,
        wrapMarginRTablet,
        wrapMarginBTablet,
        wrapMarginLTablet,
        wrapMarginTMobile,
        wrapMarginRMobile,
        wrapMarginBMobile,
        wrapMarginLMobile,
    } = props.attributes;

    const EFFECTS = [
        {
            value: "none",
            label: __("None", 'premium-blocks-for-gutenberg')
        },
        {
            value: "pulse",
            label: __("Pulse", 'premium-blocks-for-gutenberg')
        },
        {
            value: "rotate",
            label: __("Rotate", 'premium-blocks-for-gutenberg')
        },
        {
            value: "drotate",
            label: __("3D Rotate", 'premium-blocks-for-gutenberg')
        },
        {
            value: "buzz",
            label: __("Buzz", 'premium-blocks-for-gutenberg')
        },
        {
            value: "drop",
            label: __("Drop Shadow", 'premium-blocks-for-gutenberg')
        },
        {
            value: "wobble",
            label: __("Wobble", 'premium-blocks-for-gutenberg')
        }
    ];

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

    const saveIconStyle = (value) => {
        const newUpdate = iconStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            iconStyles: newUpdate,
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
        btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ""
    }

    const mainClasses = classnames(className, "premium-icon");
    const iconPaddingTop = getPreviewSize(props.deviceType, paddingT, paddingTTablet, paddingTMobile);
    const iconPaddingRight = getPreviewSize(props.deviceType, paddingR, paddingRTablet, paddingRMobile);
    const iconPaddingBottom = getPreviewSize(props.deviceType, paddingB, paddingBTablet, paddingBMobile);
    const iconPaddingLeft = getPreviewSize(props.deviceType, paddingL, paddingLTablet, paddingLMobile);
    const iconMarginTop = getPreviewSize(props.deviceType, marginT, marginTTablet, marginTMobile);
    const iconMarginRight = getPreviewSize(props.deviceType, marginR, marginRTablet, marginRMobile);
    const iconMarginBottom = getPreviewSize(props.deviceType, marginB, marginBTablet, marginBMobile);
    const iconMarginLeft = getPreviewSize(props.deviceType, marginL, marginLTablet, marginLMobile);
    const wrapPaddingTop = getPreviewSize(props.deviceType, wrapPaddingT, wrapPaddingTTablet, wrapPaddingTMobile);
    const wrapPaddingRight = getPreviewSize(props.deviceType, wrapPaddingR, wrapPaddingRTablet, wrapPaddingRMobile);
    const wrapPaddingBottom = getPreviewSize(props.deviceType, wrapPaddingB, wrapPaddingBTablet, wrapPaddingBMobile);
    const wrapPaddingLeft = getPreviewSize(props.deviceType, wrapPaddingL, wrapPaddingLTablet, wrapPaddingLMobile);
    const wrapMarginTop = getPreviewSize(props.deviceType, wrapMarginT, wrapMarginTTablet, wrapMarginTMobile);
    const wrapMarginRight = getPreviewSize(props.deviceType, wrapMarginR, wrapMarginRTablet, wrapMarginRMobile);
    const wrapMarginBottom = getPreviewSize(props.deviceType, wrapMarginB, wrapMarginBTablet, wrapMarginBMobile);
    const wrapMarginLeft = getPreviewSize(props.deviceType, wrapMarginL, wrapMarginLTablet, wrapMarginLMobile);
    return [
        isSelected && (
            <InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("Icon", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <p className="premium-editor-paragraph">{__("Select Icon", 'premium-blocks-for-gutenberg')}</p>
                    <FontIconPicker
                        icons={iconsList}
                        onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                        value={selectedIcon}
                        isMulti={false}
                        appendTo="body"
                        noSelectedPlaceholder={__("Select Icon", 'premium-blocks-for-gutenberg')}
                    />
                    <SelectControl
                        label={__("Hover Effect", 'premium-blocks-for-gutenberg')}
                        options={EFFECTS}
                        value={hoverEffect}
                        onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                    />
                    <RadioComponent
                        choices={["left", "center", "right"]}
                        value={align}
                        onChange={newValue => setAttributes({ align: newValue })}
                        label={__("Align", 'premium-blocks-for-gutenberg')}
                    />
                    <ToggleControl
                        label={__("Link", 'premium-blocks-for-gutenberg')}
                        checked={urlCheck}
                        onChange={newValue => setAttributes({ urlCheck: newValue })}
                    />
                    {urlCheck && (
                        <ToggleControl
                            label={__("Open link in new tab", 'premium-blocks-for-gutenberg')}
                            checked={target}
                            onChange={newValue => setAttributes({ target: newValue })}
                        />
                    )}
                </PanelBody>
                <PanelBody
                    title={__("Icon Style", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ResponsiveSingleRangeControl
                        label={__("Size", 'premium-blocks-for-gutenberg')}
                        value={iconStyles[0].iconSize}
                        onChange={newValue => saveIconStyle({ iconSize: newValue })}
                        units={['px', 'em', 'rem']}
                        defaultValue={0}
                        onChangeUnit={newValue =>
                            saveIconStyle({ iconSizeUnit: newValue })
                        }
                        showUnit={true}
                        unit={iconStyles[0].iconSizeUnit}
                    />
                    <AdvancedPopColorControl
                        label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                        colorValue={iconStyles[0].iconColor}
                        colorDefault={''}
                        onColorChange={value => saveIconStyle({ iconColor: value })}
                    />
                    <AdvancedPopColorControl
                        label={__("Background Color", 'premium-blocks-for-gutenberg')}
                        colorValue={iconStyles[0].iconBack}
                        colorDefault={''}
                        onColorChange={value => saveIconStyle({ iconBack: value })}
                    />
                    <PremiumBorder
                        borderType={iconStyles[0].borderType}
                        borderWidth={borderWidth}
                        top={iconBorderTop}
                        right={iconBorderRight}
                        bottom={iconBorderBottom}
                        left={iconBorderLeft}
                        borderColor={iconStyles[0].borderColor}
                        borderRadius={iconStyles[0].borderRadius}
                        onChangeType={(newType) => saveIconStyle({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                iconBorder: true,
                                iconBorderTop: top,
                                iconBorderRight: right,
                                iconBorderBottom: bottom,
                                iconBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) => saveIconStyle({ borderColor: colorValue })}
                        onChangeRadius={(newrRadius) => saveIconStyle({ borderRadius: newrRadius })}
                    />

                    <PremiumShadow
                        label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                        color={iconStyles[0].shadowColor}
                        blur={iconStyles[0].shadowBlur}
                        horizontal={iconStyles[0].shadowHorizontal}
                        vertical={iconStyles[0].shadowVertical}
                        onChangeColor={newColor => saveIconStyle({ shadowColor: newColor })}
                        onChangeBlur={newBlur => saveIconStyle({ shadowBlur: newBlur })}
                        onChangehHorizontal={newValue => saveIconStyle({ shadowHorizontal: newValue })}
                        onChangeVertical={newValue => saveIconStyle({ shadowVertical: newValue })}
                    />
                    <PremiumResponsiveMargin
                        directions={["all"]}
                        marginTop={marginT}
                        marginRight={marginR}
                        marginBottom={marginB}
                        marginLeft={marginL}
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
                                    setAttributes({ marginT: newValue })
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
                                    setAttributes({ marginR: newValue })
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
                                    setAttributes({ marginB: newValue })
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
                                    setAttributes({ marginL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ marginLTablet: newValue })
                                } else {
                                    setAttributes({ marginLMobile: newValue })
                                }
                            }
                        }

                    />
                    <PremiumResponsivePadding
                        paddingTop={paddingT}
                        paddingRight={paddingR}
                        paddingBottom={paddingB}
                        paddingLeft={paddingL}
                        paddingTopTablet={paddingTTablet}
                        paddingRightTablet={paddingRTablet}
                        paddingBottomTablet={paddingBTablet}
                        paddingLeftTablet={paddingLTablet}
                        paddingTopMobile={paddingTMobile}
                        paddingRightMobile={paddingRMobile}
                        paddingBottomMobile={paddingBMobile}
                        paddingLeftMobile={paddingLMobile}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ paddingT: newValue })
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
                                    setAttributes({ paddingR: newValue })
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
                                    setAttributes({ paddingB: newValue })
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
                                    setAttributes({ paddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ paddingLTablet: newValue })
                                } else {
                                    setAttributes({ paddingLMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Container Style", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumBackgroundControl
                        setAttributes={setAttributes}
                        saveContainerStyle={saveContainerStyle}
                        backgroundType={{
                            label: 'backgroundType',
                            value: backgroundType
                        }}
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
                    />
                    <PremiumBorder
                        borderType={containerStyles[0].wrapBorderType}
                        borderWidth={containerStyles[0].wrapBorderWidth}
                        top={wrapBorderTop}
                        right={wrapBorderRight}
                        bottom={wrapBorderBottom}
                        left={wrapBorderLeft}
                        borderColor={containerStyles[0].wrapBorderColor}
                        borderRadius={containerStyles[0].wrapBorderRadius}
                        onChangeType={(newType) => saveContainerStyle({ wrapBorderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                wrapBorder: true,
                                wrapBorderTop: top,
                                wrapBorderRight: right,
                                wrapBorderBottom: bottom,
                                wrapBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) => saveContainerStyle({ wrapBorderColor: colorValue })}
                        onChangeRadius={(newrRadius) => saveContainerStyle({ wrapBorderRadius: newrRadius })}
                    />

                    <PremiumShadow
                        label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                        boxShadow={true}
                        color={containerStyles[0].wrapShadowColor}
                        blur={containerStyles[0].wrapShadowBlur}
                        horizontal={containerStyles[0].wrapShadowHorizontal}
                        vertical={containerStyles[0].wrapShadowVertical}
                        position={containerStyles[0].wrapShadowPosition}
                        onChangeColor={newColor => saveContainerStyle({ wrapShadowColor: newColor })}
                        onChangeBlur={newBlur => saveContainerStyle({ wrapShadowBlur: newBlur })}
                        onChangehHorizontal={newValue => saveContainerStyle({ wrapShadowHorizontal: newValue })}
                        onChangeVertical={newValue => saveContainerStyle({ wrapShadowVertical: newValue })}
                        onChangePosition={newValue => saveContainerStyle({ wrapShadowPosition: newValue })}
                    />
                    <PremiumResponsiveMargin
                        directions={["all"]}
                        marginTop={wrapMarginT}
                        marginRight={wrapMarginR}
                        marginBottom={wrapMarginB}
                        marginLeft={wrapMarginL}
                        marginTopTablet={wrapMarginTTablet}
                        marginRightTablet={wrapMarginRTablet}
                        marginBottomTablet={wrapMarginBTablet}
                        marginLeftTablet={wrapMarginLTablet}
                        marginTopMobile={wrapMarginTMobile}
                        marginRightMobile={wrapMarginRMobile}
                        marginBottomMobile={wrapMarginBMobile}
                        marginLeftMobile={wrapMarginLMobile}
                        onChangeMarginTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ wrapMarginT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ wrapMarginTTablet: newValue })
                                } else {
                                    setAttributes({ wrapMarginTMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ wrapMarginR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ wrapMarginRTablet: newValue })
                                } else {
                                    setAttributes({ wrapMarginRMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ wrapMarginB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ wrapMarginBTablet: newValue })
                                } else {
                                    setAttributes({ wrapMarginBMobile: newValue })
                                }
                            }
                        }
                        onChangeMarginLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ wrapMarginL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ wrapMarginLTablet: newValue })
                                } else {
                                    setAttributes({ wrapMarginLMobile: newValue })
                                }
                            }
                        }

                    />
                    <PremiumResponsivePadding
                        paddingTop={wrapPaddingT}
                        paddingRight={wrapPaddingR}
                        paddingBottom={wrapPaddingB}
                        paddingLeft={wrapPaddingL}
                        paddingTopTablet={wrapPaddingTTablet}
                        paddingRightTablet={wrapPaddingRTablet}
                        paddingBottomTablet={wrapPaddingBTablet}
                        paddingLeftTablet={wrapPaddingLTablet}
                        paddingTopMobile={wrapPaddingTMobile}
                        paddingRightMobile={wrapPaddingRMobile}
                        paddingBottomMobile={wrapPaddingBMobile}
                        paddingLeftMobile={wrapPaddingLMobile}
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ wrapPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ wrapPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ wrapPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ wrapPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ wrapPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ wrapPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ wrapPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ wrapPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ wrapPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ wrapPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ wrapPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ wrapPaddingLMobile: newValue })
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
            className={`${mainClasses}__container ${hideDesktop} ${hideTablet} ${hideMobile}`}
            style={{
                textAlign: align,
                backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                backgroundImage: btnbg,
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                borderStyle: containerStyles[0].wrapBorderType,
                borderWidth: wrapBorder
                    ? `${wrapBorderTop}px ${wrapBorderRight}px ${wrapBorderBottom}px ${wrapBorderLeft}px`
                    : wrapBorderWidth + "px",
                borderRadius: containerStyles[0].wrapBorderRadius + "px",
                borderColor: containerStyles[0].wrapBorderColor,
                boxShadow: `${containerStyles[0].wrapShadowHorizontal || 0}px ${containerStyles[0].wrapShadowVertical ||
                    0}px ${containerStyles[0].wrapShadowBlur ||
                    0}px ${containerStyles[0].wrapShadowColor} ${containerStyles[0].wrapShadowPosition}`,
                paddingTop: wrapPaddingTop,
                paddingRight: wrapPaddingRight,
                paddingBottom: wrapPaddingBottom,
                paddingLeft: wrapPaddingLeft,
                marginTop: wrapMarginTop,
                marginRight: wrapMarginRight,
                marginBottom: wrapMarginBottom,
                marginLeft: wrapMarginLeft
            }}
        >
            {iconType === "fa" && 1 != FontAwesomeEnabled && (
                <p className={`premium-icon__alert`}>
                    {__("Please Enable Font Awesome Icons from Plugin settings")}
                </p>
            )}
            {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                <i
                    className={`premium-icon ${selectedIcon} premium-icon__${hoverEffect}`}
                    style={{
                        color: iconStyles[0].iconColor || "#6ec1e4",
                        backgroundColor: iconStyles[0].iconBack,
                        fontSize: (iconStyles[0].iconSize || 50) + iconStyles[0].iconSizeUnit,
                        paddingTop: iconPaddingTop + paddingU,
                        paddingRight: iconPaddingRight + paddingU,
                        paddingBottom: iconPaddingBottom + paddingU,
                        paddingLeft: iconPaddingLeft + paddingU,
                        marginTop: iconMarginTop,
                        marginRight: iconMarginRight,
                        marginBottom: iconMarginBottom,
                        marginLeft: iconMarginLeft,
                        borderStyle: iconStyles[0].borderType,
                        borderWidth: iconBorder
                            ? `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px`
                            : borderWidth + "px",
                        borderRadius: iconStyles[0].borderRadius || 100 + "px",
                        borderColor: iconStyles[0].borderColor,
                        textShadow: `${iconStyles[0].shadowHorizontal || 0}px ${iconStyles[0].shadowVertical ||
                            0}px ${iconStyles[0].shadowBlur || 0}px ${iconStyles[0].shadowColor}`
                    }}
                />
            )}
            {urlCheck && isSelected && (
                <URLInput
                    value={link}
                    onChange={newUrl => setAttributes({ link: newUrl })}
                />
            )}
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