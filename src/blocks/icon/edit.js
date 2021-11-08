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
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';

const { __ } = wp.i18n;

const {
    PanelBody,
    Toolbar,
    SelectControl,
    RangeControl,
    ToggleControl,
    Dropdown,
    Button
} = wp.components;

const { InspectorControls, ColorPalette, URLInput } = wp.blockEditor;

const { Fragment } = wp.element;

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
        padding,
        margin,
        background,
        wrapPadding,
        wrapMargin,
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
                    <PremiumSizeUnits
                        onChangeSizeUnit={newValue =>
                            setAttributes({ iconSizeUnit: newValue })
                        }
                    />
                    <RangeControl
                        label={__("Size")}
                        value={iconSize}
                        onChange={newValue => setAttributes({ iconSize: newValue })}
                        initialPosition={50}
                        allowReset={true}
                    />
                    <div className="premium-control-toggle">
                        <strong>{__("Colors")}</strong>
                        <Dropdown
                            className="premium-control-toggle-btn"
                            contentClassName="premium-control-toggle-content"
                            position="bottom right"
                            renderToggle={({ isOpen, onToggle }) => (
                                <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                    <i className="dashicons dashicons-edit" />
                                </Button>
                            )}
                            renderContent={() => (
                                <Fragment>
                                    <p>{__("Icon Color")}</p>
                                    <ColorPalette
                                        value={iconColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                iconColor: newValue
                                            })
                                        }
                                        allowReset={true}
                                    />
                                    <p>{__("Background Color")}</p>
                                    <PremiumBackground
                                        type="color"
                                        colorValue={iconBack}
                                        onChangeColor={value =>
                                            setAttributes({ iconBack: value })
                                        }
                                        opacityValue={iconOpacity}
                                        onChangeOpacity={newvalue =>
                                            setAttributes({
                                                iconOpacity: newvalue,
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
                        />
                    </div>
                    <PremiumBorder
                        borderType={borderType}
                        borderWidth={borderWidth}
                        top={iconBorderTop}
                        right={iconBorderRight}
                        bottom={iconBorderBottom}
                        left={iconBorderLeft}
                        borderColor={borderColor}
                        borderRadius={borderRadius}
                        onChangeType={(newType) => setAttributes({ borderType: newType })}
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
                            setAttributes({ borderColor: colorValue.hex })
                        }
                        onChangeRadius={(newrRadius) =>
                            setAttributes({ borderRadius: newrRadius })
                        }
                    />

                    <PremiumTextShadow
                        label="Shadow"
                        color={shadowColor}
                        blur={shadowBlur}
                        horizontal={shadowHorizontal}
                        vertical={shadowVertical}
                        onChangeColor={newColor =>
                            setAttributes({ shadowColor: newColor.hex })
                        }
                        onChangeBlur={newBlur => setAttributes({ shadowBlur: newBlur })}
                        onChangehHorizontal={newValue =>
                            setAttributes({ shadowHorizontal: newValue })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({ shadowVertical: newValue })
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
                        <p>{__("Background Color")}</p>
                        <PremiumBackground
                            type="color"
                            colorValue={backgroundColor}
                            onChangeColor={value =>
                                setAttributes({
                                    backgroundColor: value,
                                })
                            }
                            opacityValue={backgroundOpacity}
                            onChangeOpacity={newvalue =>
                                setAttributes({ backgroundOpacity: newvalue })
                            }
                        />
                        <PremiumBackground
                            imageID={imageID}
                            imageURL={imageURL}
                            backgroundPosition={backgroundPosition}
                            backgroundRepeat={backgroundRepeat}
                            backgroundSize={backgroundSize}
                            fixed={fixed}
                            onSelectMedia={media => {
                                setAttributes({
                                    imageID: media.id,
                                    imageURL: media.url
                                });
                            }}
                            onRemoveImage={value =>
                                setAttributes({ imageURL: "", imageID: "" })
                            }
                            onChangeBackPos={newValue =>
                                setAttributes({ backgroundPosition: newValue })
                            }
                            onchangeBackRepeat={newValue =>
                                setAttributes({ backgroundRepeat: newValue })
                            }
                            onChangeBackSize={newValue =>
                                setAttributes({ backgroundSize: newValue })
                            }
                            onChangeFixed={check => setAttributes({ fixed: check })}
                        />
                    </Fragment>

                    <PremiumBorder
                        borderType={wrapBorderType}
                        borderWidth={wrapBorderWidth}
                        top={wrapBorderTop}
                        right={wrapBorderRight}
                        bottom={wrapBorderBottom}
                        left={wrapBorderLeft}
                        borderColor={wrapBorderColor}
                        borderRadius={wrapBorderRadius}
                        onChangeType={(newType) =>
                            setAttributes({ wrapBorderType: newType })
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
                            setAttributes({ wrapBorderColor: colorValue.hex })
                        }
                        onChangeRadius={(newrRadius) =>
                            setAttributes({ wrapBorderRadius: newrRadius })
                        }
                    />

                    <PremiumBoxShadow
                        inner={true}
                        color={wrapShadowColor}
                        blur={wrapShadowBlur}
                        horizontal={wrapShadowHorizontal}
                        vertical={wrapShadowVertical}
                        position={wrapShadowPosition}
                        onChangeColor={newColor =>
                            setAttributes({
                                wrapShadowColor: newColor.hex
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({
                                wrapShadowBlur: newBlur
                            })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({
                                wrapShadowHorizontal: newValue
                            })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({
                                wrapShadowVertical: newValue
                            })
                        }
                        onChangePosition={newValue =>
                            setAttributes({
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
                    ? `${containerStyles[0].wrapBorderTop}px ${containerStyles[0].wrapBorderRight}px ${containerStyles[0].wrapBorderBottom}px ${containerStyles[0].wrapBorderLeft}px`
                    : containerStyles[0].wrapBorderWidth + "px",
                borderRadius: containerStyles[0].wrapBorderRadius + "px",
                borderColor: containerStyles[0].wrapBorderColor,
                boxShadow: `${containerStyles[0].wrapShadowHorizontal || 0}px ${containerStyles[0].wrapShadowVertical ||
                    0}px ${containerStyles[0].wrapShadowBlur ||
                    0}px ${containerStyles[0].wrapShadowColor} ${wrapShadowPosition}`,
                paddingTop: containerStyles[0].wrapPaddingT,
                paddingRight: containerStyles[0].wrapPaddingR,
                paddingBottom: containerStyles[0].wrapPaddingB,
                paddingLeft: containerStyles[0].wrapPaddingL,
                marginTop: containerStyles[0].wrapMarginT,
                marginRight: containerStyles[0].wrapMarginR,
                marginBottom: containerStyles[0].wrapMarginB,
                marginLeft: containerStyles[0].wrapMarginL
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
                        backgroundColor: iconStyles[0].iconBack
                            ? hexToRgba(iconStyles[0].iconBack, iconStyles[0].iconOpacity)
                            : "transparent",
                        fontSize: (iconStyles[0].iconSize || 50) + iconStyles[0].iconSizeUnit,
                        paddingTop: iconStyles[0].paddingT + iconStyles[0].paddingU,
                        paddingRight: iconStyles[0].paddingR + iconStyles[0].paddingU,
                        paddingBottom: iconStyles[0].paddingB + iconStyles[0].paddingU,
                        paddingLeft: iconStyles[0].paddingL + iconStyles[0].paddingU,
                        marginTop: iconStyles[0].marginT,
                        marginRight: iconStyles[0].marginR,
                        marginBottom: iconStyles[0].marginB,
                        marginLeft: iconStyles[0].marginL,
                        borderStyle: iconStyles[0].borderType,
                        borderWidth: iconBorder
                            ? `${iconStyles[0].iconBorderTop}px ${iconStyles[0].iconBorderRight}px ${iconStyles[0].iconBorderBottom}px ${iconStyles[0].iconBorderLeft}px`
                            : iconStyles[0].borderWidth + "px",
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

export default edit;
