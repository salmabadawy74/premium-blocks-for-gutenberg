import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumBorder from "../../components/premium-border";
import PremiumMargin from "../../components/premium-margin";
import PremiumPadding from "../../components/premium-padding";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackground from "../../components/premium-background";
import hexToRgba from "../../components/hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import PremiumRangeControl from "../../components/premium-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'

const { __ } = wp.i18n;

const {
    PanelBody,
    Toolbar,
    SelectControl,
    ToggleControl,
    Dropdown,
    Button
} = wp.components;

const { InspectorControls, URLInput } = wp.blockEditor;

const { Fragment } = wp.element;

const { withSelect } = wp.data

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
        hideMobile
    } = props.attributes;

    const EFFECTS = [
        {
            value: "none",
            label: __("None")
        },
        {
            value: "pulse",
            label: __("Pulse")
        },
        {
            value: "rotate",
            label: __("Rotate")
        },
        {
            value: "drotate",
            label: __("3D Rotate")
        },
        {
            value: "buzz",
            label: __("Buzz")
        },
        {
            value: "drop",
            label: __("Drop Shadow")
        },
        {
            value: "wobble",
            label: __("Wobble")
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

    const ALIGNS = ["left", "center", "right"];

    const mainClasses = classnames(className, "premium-icon");

    return [
        isSelected && (
            <InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("Icon")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <p className="premium-editor-paragraph">{__("Select Icon")}</p>
                    <FontIconPicker
                        icons={iconsList}
                        onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                        value={selectedIcon}
                        isMulti={false}
                        appendTo="body"
                        noSelectedPlaceholder={__("Select Icon")}
                    />
                    <AdvancedPopColorControl
                        label={__('Icon Hover Color', '')}
                        colorValue={iconStyles[0].iconColor}
                        colorDefault={''}
                        onColorChange={newValue =>
                            saveIconStyle({
                                iconColor: newValue
                            })}
                    />
                    <SelectControl
                        label={__("Hover Effect")}
                        options={EFFECTS}
                        value={hoverEffect}
                        onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                    />
                    <p>{__("Align")}</p>
                    <Toolbar
                        controls={ALIGNS.map(iconAlign => ({
                            icon: "editor-align" + iconAlign,
                            isActive: iconAlign === align,
                            onClick: () => setAttributes({ align: iconAlign })
                        }))}
                    />
                    <ToggleControl
                        label={__("Link")}
                        checked={urlCheck}
                        onChange={newValue => setAttributes({ urlCheck: newValue })}
                    />
                    {urlCheck && (
                        <ToggleControl
                            label={__("Open link in new tab")}
                            checked={target}
                            onChange={newValue => setAttributes({ target: newValue })}
                        />
                    )}
                </PanelBody>
                <PanelBody
                    title={__("Icon Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumRangeControl
                        label={__("Size")}
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
                        label={__("Icon Color", '')}
                        colorValue={iconStyles[0].iconColor}
                        colorDefault={''}
                        onColorChange={value =>
                            saveIconStyle({
                                iconColor: value
                            })
                        }
                    />
                    <AdvancedPopColorControl
                        label={__("Background Color", 'kadence-blocks')}
                        colorValue={iconStyles[0].iconBack}
                        colorDefault={''}
                        onColorChange={value =>
                            saveIconStyle({ iconBack: value })
                        }
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
                        onChangeColor={(colorValue) =>
                            saveIconStyle({ borderColor: colorValue.hex })
                        }
                        onChangeRadius={(newrRadius) =>
                            saveIconStyle({ borderRadius: newrRadius })
                        }
                    />

                    <PremiumTextShadow
                        label="Shadow"
                        color={iconStyles[0].shadowColor}
                        blur={iconStyles[0].shadowBlur}
                        horizontal={iconStyles[0].shadowHorizontal}
                        vertical={iconStyles[0].shadowVertical}
                        onChangeColor={newColor =>
                            saveIconStyle({ shadowColor: newColor.hex })
                        }
                        onChangeBlur={newBlur => saveIconStyle({ shadowBlur: newBlur })}
                        onChangehHorizontal={newValue =>
                            saveIconStyle({ shadowHorizontal: newValue })
                        }
                        onChangeVertical={newValue =>
                            saveIconStyle({ shadowVertical: newValue })
                        }
                    />

                    <PremiumMargin
                        directions={["all"]}
                        marginTop={marginT}
                        marginRight={marginR}
                        marginBottom={marginB}
                        marginLeft={marginL}
                        onChangeMarTop={value =>
                            setAttributes({
                                marginT: value
                            })
                        }
                        onChangeMarRight={value =>
                            setAttributes({
                                marginR: value
                            })
                        }
                        onChangeMarBottom={value =>
                            setAttributes({
                                marginB: value
                            })
                        }
                        onChangeMarLeft={value =>
                            setAttributes({
                                marginL: value
                            })
                        }
                    />
                    <PremiumPadding
                        paddingTop={paddingT}
                        paddingRight={paddingR}
                        paddingBottom={paddingB}
                        paddingLeft={paddingL}
                        onChangePadTop={value =>
                            setAttributes({
                                paddingT: value
                            })
                        }
                        onChangePadRight={value =>
                            setAttributes({
                                paddingR: value
                            })
                        }
                        onChangePadBottom={value =>
                            setAttributes({
                                paddingB: value
                            })
                        }
                        onChangePadLeft={value =>
                            setAttributes({
                                paddingL: value
                            })
                        }
                        showUnits={true}
                        selectedUnit={paddingU}
                        onChangePadSizeUnit={newvalue =>
                            setAttributes({ paddingU: newvalue })
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Container Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <Fragment>
                        <PremiumBackground
                            type="color"
                            colorValue={containerStyles[0].backgroundColor}
                            onChangeColor={value =>
                                saveContainerStyle({
                                    backgroundColor: value,
                                })
                            }
                            opacityValue={containerStyles[0].backgroundOpacity}
                            onChangeOpacity={newvalue =>
                                saveContainerStyle({ backgroundOpacity: newvalue })
                            }
                        />
                        <PremiumBackground
                            imageID={containerStyles[0].imageID}
                            imageURL={containerStyles[0].imageURL}
                            backgroundPosition={containerStyles[0].backgroundPosition}
                            backgroundRepeat={containerStyles[0].backgroundRepeat}
                            backgroundSize={containerStyles[0].backgroundSize}
                            fixed={containerStyles[0].fixed}
                            onSelectMedia={media => {
                                saveContainerStyle({
                                    imageID: media.id,
                                    imageURL: media.url
                                });
                            }}
                            onRemoveImage={() =>
                                saveContainerStyle({ imageURL: "", imageID: "" })
                            }
                            onChangeBackPos={newValue =>
                                saveContainerStyle({ backgroundPosition: newValue })
                            }
                            onchangeBackRepeat={newValue =>
                                saveContainerStyle({ backgroundRepeat: newValue })
                            }
                            onChangeBackSize={newValue =>
                                saveContainerStyle({ backgroundSize: newValue })
                            }
                            onChangeFixed={check => saveContainerStyle({ fixed: check })}
                        />
                    </Fragment>
                    <PremiumBorder
                        borderType={containerStyles[0].wrapBorderType}
                        borderWidth={containerStyles[0].wrapBorderWidth}
                        top={wrapBorderTop}
                        right={wrapBorderRight}
                        bottom={wrapBorderBottom}
                        left={wrapBorderLeft}
                        borderColor={containerStyles[0].wrapBorderColor}
                        borderRadius={containerStyles[0].wrapBorderRadius}
                        onChangeType={(newType) =>
                            saveContainerStyle({ wrapBorderType: newType })
                        }
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                wrapBorder: true,
                                wrapBorderTop: top,
                                wrapBorderRight: right,
                                wrapBorderBottom: bottom,
                                wrapBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            saveContainerStyle({ wrapBorderColor: colorValue.hex })
                        }
                        onChangeRadius={(newrRadius) =>
                            saveContainerStyle({ wrapBorderRadius: newrRadius })
                        }
                    />
                    <PremiumBoxShadow
                        inner={true}
                        color={containerStyles[0].wrapShadowColor}
                        blur={containerStyles[0].wrapShadowBlur}
                        horizontal={containerStyles[0].wrapShadowHorizontal}
                        vertical={containerStyles[0].wrapShadowVertical}
                        position={containerStyles[0].wrapShadowPosition}
                        onChangeColor={newColor =>
                            saveContainerStyle({
                                wrapShadowColor: newColor.hex
                            })
                        }
                        onChangeBlur={newBlur =>
                            saveContainerStyle({
                                wrapShadowBlur: newBlur
                            })
                        }
                        onChangehHorizontal={newValue =>
                            saveContainerStyle({
                                wrapShadowHorizontal: newValue
                            })
                        }
                        onChangeVertical={newValue =>
                            saveContainerStyle({
                                wrapShadowVertical: newValue
                            })
                        }
                        onChangePosition={newValue =>
                            saveContainerStyle({
                                wrapShadowPosition: newValue
                            })
                        }
                    />
                    <PremiumMargin
                        directions={["all"]}
                        marginTop={wrapMarginT}
                        marginRight={wrapMarginR}
                        marginBottom={wrapMarginB}
                        marginLeft={wrapMarginL}
                        onChangeMarTop={value =>
                            setAttributes({
                                wrapMarginT: value
                            })
                        }
                        onChangeMarRight={value =>
                            setAttributes({
                                wrapMarginR: value
                            })
                        }
                        onChangeMarBottom={value =>
                            setAttributes({
                                wrapMarginB: value
                            })
                        }
                        onChangeMarLeft={value =>
                            setAttributes({
                                wrapMarginL: value
                            })
                        }
                    />
                    <PremiumPadding
                        paddingTop={wrapPaddingT}
                        paddingRight={wrapPaddingR}
                        paddingBottom={wrapPaddingB}
                        paddingLeft={wrapPaddingL}
                        onChangePadTop={value =>
                            setAttributes({
                                wrapPaddingT: value
                            })
                        }
                        onChangePadRight={value =>
                            setAttributes({
                                wrapPaddingR: value
                            })
                        }
                        onChangePadBottom={value =>
                            setAttributes({
                                wrapPaddingB: value
                            })
                        }
                        onChangePadLeft={value =>
                            setAttributes({
                                wrapPaddingL: value
                            })
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
                backgroundColor: containerStyles[0].backgroundColor
                    ? hexToRgba(containerStyles[0].backgroundColor, containerStyles[0].backgroundOpacity)
                    : "transparent",
                backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : "none",
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
                paddingTop: wrapPaddingT,
                paddingRight: wrapPaddingR,
                paddingBottom: wrapPaddingB,
                paddingLeft: wrapPaddingL,
                marginTop: wrapMarginT,
                marginRight: wrapMarginR,
                marginBottom: wrapMarginB,
                marginLeft: wrapMarginL
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
                        // ? hexToRgba(iconStyles[0].iconBack, iconStyles[0].iconOpacity)
                        // : "transparent",
                        fontSize: (iconStyles[0].iconSize || 50) + iconStyles[0].iconSizeUnit,
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                        marginTop: marginT,
                        marginRight: marginR,
                        marginBottom: marginB,
                        marginLeft: marginL,
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