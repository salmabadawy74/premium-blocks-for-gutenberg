import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumBackgroundControl from "../../components/Premium-Background-Control";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import RadioComponent from '../../components/radio-control';
import PremiumShadow from "../../components/PremiumShadow";
import SpacingControl from '../../components/premium-responsive-spacing'
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';

const { __ } = wp.i18n;

const {
    PanelBody,
    SelectControl,
    ToggleControl,
} = wp.components;

const { useEffect } = wp.element;

const { InspectorControls, URLInput } = wp.blockEditor;

const { withSelect } = wp.data

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
        iconSize,
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
    console.log('edit', mainClasses)
    return [
        isSelected && (
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={['layout', 'style', 'advance']}>
                    <InspectorTab key={'layout'}>
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
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__("Icon Style", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <ResponsiveRangeControl
                                label={__('Size', 'premium-blocks-for-gutenberg')}
                                value={iconSize}
                                onChange={(value) => setAttributes({ iconSize: value })}
                                min={0}
                                max={800}
                                step={1}
                                showUnit={true}
                                units={['px', 'em', 'rem']}
                                defaultValue={50}
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
                    </InspectorTab>
                    <InspectorTab key={'advance'}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                            onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                            onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                        />
                    </InspectorTab>
                </InspectorTabs>
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
                    borderTopWidth: containerBorder['borderWidth'][props.deviceType]['top'] && containerBorder['borderWidth'][props.deviceType]['top'] + "px",
                    borderRightWidth: containerBorder['borderWidth'][props.deviceType]['right'] && containerBorder['borderWidth'][props.deviceType]['right'] + "px",
                    borderBottomWidth: containerBorder['borderWidth'][props.deviceType]['bottom'] && containerBorder['borderWidth'][props.deviceType]['bottom'] + "px",
                    borderLeftWidth: containerBorder['borderWidth'][props.deviceType]['left'] && containerBorder['borderWidth'][props.deviceType]['left'] + "px",
                    borderBottomLeftRadius: containerBorder['borderRadius'][props.deviceType]['left'] && containerBorder['borderRadius'][props.deviceType]['left'] + "px",
                    borderTopLeftRadius: containerBorder['borderRadius'][props.deviceType]['top'] && containerBorder['borderRadius'][props.deviceType]['top'] + "px",
                    borderTopRightRadius: containerBorder['borderRadius'][props.deviceType]['right'] && containerBorder['borderRadius'][props.deviceType]['right'] + "px",
                    borderBottomRightRadius: containerBorder['borderRadius'][props.deviceType]['bottom'] && containerBorder['borderRadius'][props.deviceType]['bottom'] + "px",
                    borderColor: containerBorder.borderColor,
                    boxShadow: `${containerStyles[0].wrapShadowHorizontal || 0}px ${containerStyles[0].wrapShadowVertical ||
                        0}px ${containerStyles[0].wrapShadowBlur ||
                        0}px ${containerStyles[0].wrapShadowColor} ${containerStyles[0].wrapShadowPosition}`,
                    paddingTop: wrapPadding[props.deviceType]['top'] && wrapPadding[props.deviceType]['top'] + wrapPadding.unit,
                    paddingRight: wrapPadding[props.deviceType]['right'] && wrapPadding[props.deviceType]['right'] + wrapPadding.unit,
                    paddingBottom: wrapPadding[props.deviceType]['bottom'] && wrapPadding[props.deviceType]['bottom'] + wrapPadding.unit,
                    paddingLeft: wrapPadding[props.deviceType]['left'] && wrapPadding[props.deviceType]['left'] + wrapPadding.unit,
                    marginTop: wrapMargin[props.deviceType]['top'] && wrapMargin[props.deviceType]['top'] + wrapMargin.unit,
                    marginRight: wrapMargin[props.deviceType]['right'] && wrapMargin[props.deviceType]['right'] + wrapMargin.unit,
                    marginBottom: wrapMargin[props.deviceType]['bottom'] && wrapMargin[props.deviceType]['bottom'] + wrapMargin.unit,
                    marginLeft: wrapMargin[props.deviceType]['left'] && wrapMargin[props.deviceType]['left'] + wrapMargin.unit,
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
                            fontSize: (iconSize[props.deviceType] || 50) + iconSize.unit,
                            paddingTop: iconPadding[props.deviceType]['top'] && iconPadding[props.deviceType]['top'] + iconPadding.unit,
                            paddingRight: iconPadding[props.deviceType]['right'] && iconPadding[props.deviceType]['right'] + iconPadding.unit,
                            paddingBottom: iconPadding[props.deviceType]['bottom'] && iconPadding[props.deviceType]['bottom'] + iconPadding.unit,
                            paddingLeft: iconPadding[props.deviceType]['left'] && iconPadding[props.deviceType]['left'] + iconPadding.unit,
                            marginTop: iconMargin[props.deviceType]['top'] && iconMargin[props.deviceType]['top'] + iconMargin.unit,
                            marginRight: iconMargin[props.deviceType]['right'] && iconMargin[props.deviceType]['right'] + iconMargin.unit,
                            marginBottom: iconMargin[props.deviceType]['bottom'] && iconMargin[props.deviceType]['bottom'] + iconMargin.unit,
                            marginLeft: iconMargin[props.deviceType]['left'] && iconMargin[props.deviceType]['left'] + iconMargin.unit,
                            borderStyle: iconBorder.borderType,
                            borderTopWidth: iconBorder['borderWidth'][props.deviceType]['top'] && iconBorder['borderWidth'][props.deviceType]['top'] + "px",
                            borderRightWidth: iconBorder['borderWidth'][props.deviceType]['right'] && iconBorder['borderWidth'][props.deviceType]['right'] + "px",
                            borderBottomWidth: iconBorder['borderWidth'][props.deviceType]['bottom'] && iconBorder['borderWidth'][props.deviceType]['bottom'] + "px",
                            borderLeftWidth: iconBorder['borderWidth'][props.deviceType]['left'] && iconBorder['borderWidth'][props.deviceType]['left'] + "px",
                            borderBottomLeftRadius: iconBorder['borderRadius'][props.deviceType]['left'] && iconBorder['borderRadius'][props.deviceType]['left'] + "px",
                            borderTopLeftRadius: iconBorder['borderRadius'][props.deviceType]['top'] && iconBorder['borderRadius'][props.deviceType]['top'] + "px",
                            borderTopRightRadius: iconBorder['borderRadius'][props.deviceType]['right'] && iconBorder['borderRadius'][props.deviceType]['right'] + "px",
                            borderBottomRightRadius: iconBorder['borderRadius'][props.deviceType]['bottom'] && iconBorder['borderRadius'][props.deviceType]['bottom'] + "px",
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