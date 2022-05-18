import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumBackgroundControl from "../../components/Premium-Background-Control";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import RadioComponent from '../../components/radio-control';
import PremiumShadow from "../../components/PremiumShadow";
import SpacingControl from '../../components/premium-responsive-spacing'

const { __ } = wp.i18n;

const {
    PanelBody,
    SelectControl,
    ToggleControl,
} = wp.components;

const { useEffect } = wp.element;

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

    useEffect(() => {
        setAttributes({ block_id: props.clientId })
        setAttributes({ classMigrate: true })
    }, [])

    const {
        block_id,
        iconType,
        selectedIcon,
        align,
        hoverEffect,
        iconStyles,
        containerStyles,
        urlCheck,
        link,
        target,
        hideDesktop,
        hideTablet,
        hideMobile,
        backgroundType,
        iconPadding,
        iconMargin,
        wrapPadding,
        wrapMargin,
        containerBorder,
        iconBorder
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
    const iconPaddingTop = getPreviewSize(props.deviceType, iconPadding.Desktop.top, iconPadding.Tablet.top, iconPadding.Mobile.top);
    const iconPaddingRight = getPreviewSize(props.deviceType, iconPadding.Desktop.right, iconPadding.Tablet.right, iconPadding.Mobile.right);
    const iconPaddingBottom = getPreviewSize(props.deviceType, iconPadding.Desktop.bottom, iconPadding.Tablet.bottom, iconPadding.Mobile.bottom);
    const iconPaddingLeft = getPreviewSize(props.deviceType, iconPadding.Desktop.left, iconPadding.Tablet.left, iconPadding.Mobile.left);
    const iconMarginTop = getPreviewSize(props.deviceType, iconMargin.Desktop.top, iconMargin.Tablet.top, iconMargin.Mobile.top);
    const iconMarginRight = getPreviewSize(props.deviceType, iconMargin.Desktop.right, iconMargin.Tablet.right, iconMargin.Mobile.right);
    const iconMarginBottom = getPreviewSize(props.deviceType, iconMargin.Desktop.bottom, iconMargin.Tablet.bottom, iconMargin.Mobile.bottom);
    const iconMarginLeft = getPreviewSize(props.deviceType, iconMargin.Desktop.left, iconMargin.Tablet.left, iconMargin.Mobile.left);
    const wrapPaddingTop = getPreviewSize(props.deviceType, wrapPadding.Desktop.top, wrapPadding.Tablet.top, wrapPadding.Mobile.top);
    const wrapPaddingRight = getPreviewSize(props.deviceType, wrapPadding.Desktop.right, wrapPadding.Tablet.right, wrapPadding.Mobile.right);
    const wrapPaddingBottom = getPreviewSize(props.deviceType, wrapPadding.Desktop.bottom, wrapPadding.Tablet.bottom, wrapPadding.Mobile.bottom);
    const wrapPaddingLeft = getPreviewSize(props.deviceType, wrapPadding.Desktop.left, wrapPadding.Tablet.left, wrapPadding.Mobile.left);
    const wrapMarginTop = getPreviewSize(props.deviceType, wrapMargin.Desktop.top, wrapMargin.Tablet.top, wrapMargin.Mobile.top);
    const wrapMarginRight = getPreviewSize(props.deviceType, wrapMargin.Desktop.right, wrapMargin.Tablet.right, wrapMargin.Mobile.right);
    const wrapMarginBottom = getPreviewSize(props.deviceType, wrapMargin.Desktop.bottom, wrapMargin.Tablet.bottom, wrapMargin.Mobile.bottom);
    const wrapMarginLeft = getPreviewSize(props.deviceType, wrapMargin.Desktop.left, wrapMargin.Tablet.left, wrapMargin.Mobile.left);
    // const iconBorderWidthTop = getPreviewSize(props.deviceType, iconBorder.borderWidth.Desktop.top, iconBorder.borderWidth.Tablet.top, iconBorder.borderWidth.Mobile.top);
    // const iconBorderWidthRight = getPreviewSize(props.deviceType, iconBorder.borderWidth.Desktop.right, iconBorder.borderWidth.Tablet.right, iconBorder.borderWidth.Mobile.right);
    // const iconBorderWidthBottom = getPreviewSize(props.deviceType, iconBorder.borderWidth.Desktop.bottom, iconBorder.borderWidth.Tablet.bottom, iconBorder.borderWidth.Mobile.bottom);
    // const iconBorderWidthLeft = getPreviewSize(props.deviceType, iconBorder.borderWidth.Desktop.left, iconBorder.borderWidth.Tablet.left, iconBorder.borderWidth.Mobile.left);
    const iconBorderRadiusTop = getPreviewSize(props.deviceType, iconBorder.borderRadius.Desktop.top, iconBorder.borderRadius.Tablet.top, iconBorder.borderRadius.Mobile.top);
    const iconBorderRadiusRight = getPreviewSize(props.deviceType, iconBorder.borderRadius.Desktop.right, iconBorder.borderRadius.Tablet.right, iconBorder.borderRadius.Mobile.right);
    const iconBorderRadiusBottom = getPreviewSize(props.deviceType, iconBorder.borderRadius.Desktop.bottom, iconBorder.borderRadius.Tablet.bottom, iconBorder.borderRadius.Mobile.bottom);
    const iconBorderRadiusLeft = getPreviewSize(props.deviceType, iconBorder.borderRadius.Desktop.left, iconBorder.borderRadius.Tablet.left, iconBorder.borderRadius.Mobile.left);
    const ContainerBorderWidthTop = getPreviewSize(props.deviceType, containerBorder.borderWidth.Desktop.top, containerBorder.borderWidth.Tablet.top, containerBorder.borderWidth.Mobile.top);
    const ContainerBorderWidthRight = getPreviewSize(props.deviceType, containerBorder.borderWidth.Desktop.right, containerBorder.borderWidth.Tablet.right, containerBorder.borderWidth.Mobile.right);
    const ContainerBorderWidthBottom = getPreviewSize(props.deviceType, containerBorder.borderWidth.Desktop.bottom, containerBorder.borderWidth.Tablet.bottom, containerBorder.borderWidth.Mobile.bottom);
    const ContainerBorderWidthLeft = getPreviewSize(props.deviceType, containerBorder.borderWidth.Desktop.left, containerBorder.borderWidth.Tablet.left, containerBorder.borderWidth.Mobile.left);
    const ContainerBorderRadiusTop = getPreviewSize(props.deviceType, containerBorder.borderRadius.Desktop.top, containerBorder.borderRadius.Tablet.top, containerBorder.borderRadius.Mobile.top);
    const ContainerBorderRadiusRight = getPreviewSize(props.deviceType, containerBorder.borderRadius.Desktop.right, containerBorder.borderRadius.Tablet.right, containerBorder.borderRadius.Mobile.right);
    const ContainerBorderRadiusBottom = getPreviewSize(props.deviceType, containerBorder.borderRadius.Desktop.bottom, containerBorder.borderRadius.Tablet.bottom, containerBorder.borderRadius.Mobile.bottom);
    const ContainerBorderRadiusLeft = getPreviewSize(props.deviceType, containerBorder.borderRadius.Desktop.left, containerBorder.borderRadius.Tablet.left, containerBorder.borderRadius.Mobile.left);

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
                        label={__('Border', 'premium-blocks-for-gutenberg')}
                        value={iconBorder}
                        onChange={(value) => setAttributes({ iconBorder: value })}
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
                    <SpacingControl
                        label={__('Margin', 'premium-blocks-for-gutenberg')}
                        value={iconMargin}
                        onChange={(value) => setAttributes({ iconMargin: value })}
                        showUnits={true}
                        responsive={true}
                    />
                    <SpacingControl
                        label={__('Padding', 'premium-blocks-for-gutenberg')}
                        value={iconPadding}
                        onChange={(value) => setAttributes({ iconPadding: value })}
                        showUnits={true}
                        responsive={true}
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
                    />
                    <PremiumBorder
                        label={__('Border', 'premium-blocks-for-gutenberg')}
                        value={containerBorder}
                        onChange={(value) => setAttributes({ containerBorder: value })}
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
                    <SpacingControl
                        label={__('Margin', 'premium-blocks-for-gutenberg')}
                        value={wrapMargin}
                        onChange={(value) => setAttributes({ wrapMargin: value })}
                        showUnits={true}
                        responsive={true}
                    />
                    <SpacingControl
                        label={__('Padding', 'premium-blocks-for-gutenberg')}
                        value={wrapPadding}
                        onChange={(value) => setAttributes({ wrapPadding: value })}
                        showUnits={true}
                        responsive={true}
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
            id={`premium-icon-${block_id}`}
        >
            <div
                className={`premium-icon-container`}
                style={{
                    textAlign: align,
                    backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
                    backgroundImage: btnbg,
                    backgroundRepeat: containerStyles[0].backgroundRepeat,
                    backgroundPosition: containerStyles[0].backgroundPosition,
                    backgroundSize: containerStyles[0].backgroundSize,
                    backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                    borderStyle: containerBorder.borderType,
                    borderTopWidth: ContainerBorderWidthTop && ContainerBorderWidthTop + "px",
                    borderRightWidth: ContainerBorderWidthRight && ContainerBorderWidthRight + "px",
                    borderBottomWidth: ContainerBorderWidthBottom && ContainerBorderWidthBottom + "px",
                    borderLeftWidth: ContainerBorderWidthLeft && ContainerBorderWidthLeft + "px",
                    borderBottomLeftRadius: ContainerBorderRadiusLeft && ContainerBorderRadiusLeft + "px",
                    borderTopLeftRadius: ContainerBorderRadiusTop && ContainerBorderRadiusTop + "px",
                    borderTopRightRadius: ContainerBorderRadiusRight && ContainerBorderRadiusRight + "px",
                    borderBottomRightRadius: ContainerBorderRadiusBottom && ContainerBorderRadiusBottom + "px",
                    borderColor: containerBorder.borderColor,
                    boxShadow: `${containerStyles[0].wrapShadowHorizontal || 0}px ${containerStyles[0].wrapShadowVertical ||
                        0}px ${containerStyles[0].wrapShadowBlur ||
                        0}px ${containerStyles[0].wrapShadowColor} ${containerStyles[0].wrapShadowPosition}`,
                    paddingTop: wrapPaddingTop + wrapPadding.unit,
                    paddingRight: wrapPaddingRight + wrapPadding.unit,
                    paddingBottom: wrapPaddingBottom + wrapPadding.unit,
                    paddingLeft: wrapPaddingLeft + wrapPadding.unit,
                    marginTop: wrapMarginTop + wrapMargin.unit,
                    marginRight: wrapMarginRight + wrapMargin.unit,
                    marginBottom: wrapMarginBottom + wrapMargin.unit,
                    marginLeft: wrapMarginLeft + wrapMargin.unit
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
                            paddingTop: iconPaddingTop + iconPadding.unit,
                            paddingRight: iconPaddingRight + iconPadding.unit,
                            paddingBottom: iconPaddingBottom + iconPadding.unit,
                            paddingLeft: iconPaddingLeft + iconPadding.unit,
                            marginTop: iconMarginTop + iconMargin.unit,
                            marginRight: iconMarginRight + iconMargin.unit,
                            marginBottom: iconMarginBottom + iconMargin.unit,
                            marginLeft: iconMarginLeft + iconMargin.unit,
                            borderStyle: iconBorder.borderType,
                            borderTopWidth: iconBorder['borderWidth'][props.deviceType]['top'] && iconBorder['borderWidth'][props.deviceType]['top'] + "px",
                            // borderRightWidth: iconBorderWidthRight && iconBorderWidthRight + "px",
                            // borderBottomWidth: iconBorderWidthBottom && iconBorderWidthBottom + "px",
                            // borderLeftWidth: iconBorderWidthLeft && iconBorderWidthLeft + "px",
                            borderBottomLeftRadius: iconBorderRadiusLeft && iconBorderRadiusLeft + "px",
                            borderTopLeftRadius: iconBorderRadiusTop && iconBorderRadiusTop + "px",
                            borderTopRightRadius: iconBorderRadiusRight && iconBorderRadiusRight + "px",
                            borderBottomRightRadius: iconBorderRadiusBottom && iconBorderRadiusBottom + "px",
                            borderColor: iconBorder.borderColor,
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