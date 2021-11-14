import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumSizeUnits from "../../components/premium-size-units";
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';

const { __ } = wp.i18n;

const { PanelBody, ToggleControl, RangeControl, SelectControl } = wp.components;

const { Fragment } = wp.element;
const { withSelect } = wp.data


const {
    BlockControls,
    AlignmentToolbar,
    InnerBlocks,
    InspectorControls
} = wp.blockEditor;

const CONTENT = [
    ["core/paragraph", { content: __("Insert your text or select a block ") }]
];

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
        containerStyles
    } = props.attributes;

    const WIDTH = [
        {
            value: "boxed",
            label: __("Boxed")
        },
        {
            value: "full",
            label: __("Full Width")
        }
    ];
    const HEIGHT = [
        {
            value: "fit",
            label: __("Fit to Screen")
        },
        {
            value: "min",
            label: __("Min Height")
        }
    ];
    const VPOSITION = [
        {
            value: "top",
            label: __("Top")
        },
        {
            value: "middle",
            label: __("Middle")
        },
        {
            value: "bottom",
            label: __("Bottom")
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
                    title={__("General Settings")}
                    className={`premium-panel-body premium-stretch-section`}
                    initialOpen={true}
                >
                    <ToggleControl
                        label={__("Stretch Section")}
                        checked={stretchSection}
                        onChange={check =>
                            setAttributes({ stretchSection: check })
                        }
                        help={__(
                            "This option stretches the section to the full width of the page using JS. You will need to reload the page after you enable this option for the first time."
                        )}
                    />
                    {stretchSection && (
                        <SelectControl
                            label={__("Content Width")}
                            options={WIDTH}
                            value={innerWidthType}
                            onChange={newValue =>
                                setAttributes({ innerWidthType: newValue })
                            }
                        />
                    )}
                    {"boxed" === innerWidthType && stretchSection && (
                        <RangeControl
                            label={__("Max Width (%)")}
                            min="1"
                            max="1600"
                            value={innerWidth}
                            onChange={newValue =>
                                setAttributes({ innerWidth: newValue })
                            }
                        />
                    )}
                    <SelectControl
                        label={__("Height")}
                        options={HEIGHT}
                        value={height}
                        onChange={newValue =>
                            setAttributes({ height: newValue })
                        }
                    />
                    {"min" === height && (
                        <Fragment>
                            <PremiumSizeUnits
                                units={["px", "vh", "vw"]}
                                onChangeSizeUnit={newValue =>
                                    setAttributes({ minHeightUnit: newValue })
                                }
                            />
                            <RangeControl
                                label={__("Min Height")}
                                value={minHeight}
                                min="1"
                                max="800"
                                onChange={newValue =>
                                    setAttributes({ minHeight: newValue })
                                }
                            />
                        </Fragment>
                    )}
                    <SelectControl
                        label={__("Content Position")}
                        help={__(
                            "If you have two or more inner columns then this option will work only on the preview page"
                        )}
                        options={VPOSITION}
                        value={vPos}
                        onChange={newValue => setAttributes({ vPos: newValue })}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Background")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <p>{__("Background Color")}</p>
                    <PremiumBackground
                        type="color"
                        colorValue={containerStyles[0].color}
                        onChangeColor={newvalue =>
                            saveContainerStyle({ color: newvalue })
                        }
                        opacityValue={containerStyles[0].opacity}
                        onChangeOpacity={value =>
                            saveContainerStyle({ opacity: value })
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
                        onRemoveImage={value =>
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
                        onChangeFixed={check =>
                            saveContainerStyle({ fixed: check })
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Border")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumBorder
                        borderType={containerStyles[0].borderType}
                        borderWidth={containerStyles[0].borderWidth}
                        top={containerStyles[0].borderTop}
                        right={containerStyles[0].borderRight}
                        bottom={containerStyles[0].borderBottom}
                        left={containerStyles[0].borderLeft}
                        borderColor={containerStyles[0].borderColor}
                        borderRadius={containerStyles[0].borderRadius}
                        onChangeType={(newType) => saveContainerStyle({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            saveContainerStyle({
                                borderTop: top,
                                borderRight: right,
                                borderBottom: bottom,
                                borderLeft: left,
                                isUpdated: true,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            saveContainerStyle({ borderColor: colorValue.hex })
                        }
                        onChangeRadius={(newrRadius) =>
                            saveContainerStyle({ borderRadius: newrRadius })
                        }
                    />
                    <PremiumBoxShadow
                        inner={false}
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
                                        : newColor.hex
                            })
                        }
                        onChangeBlur={newBlur =>
                            saveContainerStyle({
                                shadowBlur: newBlur === undefined ? 0 : newBlur
                            })
                        }
                        onChangehHorizontal={newValue =>
                            saveContainerStyle({
                                shadowHorizontal:
                                    newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangeVertical={newValue =>
                            saveContainerStyle({
                                shadowVertical:
                                    newValue === undefined ? 0 : newValue
                            })
                        }
                        onChangePosition={newValue =>
                            saveContainerStyle({
                                shadowPosition:
                                    newValue === undefined ? 0 : newValue
                            })
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Spacings")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumMargin
                        directions={["all"]}
                        marginTop={containerStyles[0].marginTop}
                        marginRight={containerStyles[0].marginRight}
                        marginBottom={containerStyles[0].marginBottom}
                        marginLeft={containerStyles[0].marginLeft}
                        onChangeMarTop={value =>
                            saveContainerStyle({
                                marginTop: value === undefined ? 0 : value
                            })
                        }
                        onChangeMarRight={value =>
                            saveContainerStyle({
                                marginRight: value === undefined ? 0 : value
                            })
                        }
                        onChangeMarBottom={value =>
                            saveContainerStyle({
                                marginBottom: value === undefined ? 0 : value
                            })
                        }
                        onChangeMarLeft={value =>
                            saveContainerStyle({
                                marginLeft: value === undefined ? 0 : value
                            })
                        }
                        showUnits={true}
                        onChangeMarSizeUnit={newvalue =>
                            saveContainerStyle({ marginUnit: newvalue })
                        }
                    />
                    <PremiumPadding
                        paddingTop={containerStyles[0].paddingTop}
                        paddingRight={containerStyles[0].paddingRight}
                        paddingBottom={containerStyles[0].paddingBottom}
                        paddingLeft={containerStyles[0].paddingLeft}
                        onChangePadTop={value =>
                            saveContainerStyle({
                                paddingTop: value === undefined ? 0 : value
                            })
                        }
                        onChangePadRight={value =>
                            saveContainerStyle({
                                paddingRight: value === undefined ? 0 : value
                            })
                        }
                        onChangePadBottom={value =>
                            saveContainerStyle({
                                paddingBottom: value === undefined ? 0 : value
                            })
                        }
                        onChangePadLeft={value =>
                            saveContainerStyle({
                                paddingLeft: value === undefined ? 0 : value
                            })
                        }
                        showUnits={true}
                        selectedUnit={containerStyles[0].paddingUnit}
                        onChangePadSizeUnit={newvalue =>
                            saveContainerStyle({ paddingUnit: newvalue })
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
                backgroundColor: containerStyles[0].color
                    ? hexToRgba(containerStyles[0].color, containerStyles[0].opacity)
                    : "transparent",
                borderStyle: containerStyles[0].borderType,
                borderWidth: isUpdated
                    ? `${containerStyles[0].borderTop}px ${containerStyles[0].borderRight}px ${containerStyles[0].borderBottom}px ${containerStyles[0].borderLeft}px`
                    : containerStyles[0].borderWidth + "px",
                borderRadius: containerStyles[0].borderRadius + "px",
                borderColor: containerStyles[0].borderColor,
                backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                marginTop: containerStyles[0].marginTop + containerStyles[0].marginUnit,
                marginBottom: containerStyles[0].marginBottom + containerStyles[0].marginUnit,
                marginLeft: containerStyles[0].marginLeft + containerStyles[0].marginUnit,
                marginRight: containerStyles[0].marginRight + containerStyles[0].marginUnit,
                paddingTop: containerStyles[0].paddingTop + containerStyles[0].paddingUnit,
                paddingBottom: containerStyles[0].paddingBottom + containerStyles[0].paddingUnit,
                paddingLeft: containerStyles[0].paddingLeft + containerStyles[0].paddingUnit,
                paddingRight: containerStyles[0].paddingRight + containerStyles[0].paddingUnit,
                boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`
            }}
        >
            <div
                className={`premium-container__content_wrap premium-container__${vPos}`}
                style={{
                    maxWidth:
                        "boxed" == innerWidthType && stretchSection
                            ? innerWidth
                                ? innerWidth + "px"
                                : "1140px"
                            : "100%"
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
