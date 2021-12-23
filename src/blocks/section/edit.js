import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumSizeUnits from "../../components/premium-size-units";
import hexToRgba from "../../components/hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import PremiumRangeControl from "../../components/premium-range-control";


const { __ } = wp.i18n;

const { PanelBody, ToggleControl, SelectControl } = wp.components;

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
                        <PremiumRangeControl
                            label={__("Max Width")}
                            value={innerWidth}
                            min="1"
                            max="1600"
                            onChange={newValue =>
                                setAttributes({ innerWidth: newValue })}
                            defaultValue={0}
                            showUnit={false}
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
                            <PremiumRangeControl
                                label={__("Min Height")}
                                value={minHeight}
                                min="1"
                                max="800"
                                onChange={newValue =>
                                    setAttributes({ minHeight: newValue })
                                }
                                units={["px", "vh", "vw"]}
                                defaultValue={0}
                                onChangeUnit={newValue =>
                                    setAttributes({ minHeightUnit: newValue })
                                }
                                showUnit={true}
                                unit={minHeightUnit}
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
                        marginTop={marginTop}
                        marginRight={marginRight}
                        marginBottom={marginBottom}
                        marginLeft={marginLeft}
                        onChangeMarTop={value =>
                            setAttributes({
                                marginTop: value === undefined ? 0 : value
                            })
                        }
                        onChangeMarRight={value =>
                            setAttributes({
                                marginRight: value === undefined ? 0 : value
                            })
                        }
                        onChangeMarBottom={value =>
                            setAttributes({
                                marginBottom: value === undefined ? 0 : value
                            })
                        }
                        onChangeMarLeft={value =>
                            setAttributes({
                                marginLeft: value === undefined ? 0 : value
                            })
                        }
                        showUnits={true}
                        onChangeMarSizeUnit={newvalue =>
                            saveContainerStyle({ marginUnit: newvalue })
                        }
                    />
                    <PremiumPadding
                        paddingTop={paddingTop}
                        paddingRight={paddingRight}
                        paddingBottom={paddingBottom}
                        paddingLeft={paddingLeft}
                        onChangePadTop={value =>
                            setAttributes({
                                paddingTop: value === undefined ? 0 : value
                            })
                        }
                        onChangePadRight={value =>
                            setAttributes({
                                paddingRight: value === undefined ? 0 : value
                            })
                        }
                        onChangePadBottom={value =>
                            setAttributes({
                                paddingBottom: value === undefined ? 0 : value
                            })
                        }
                        onChangePadLeft={value =>
                            setAttributes({
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
                    ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                    : containerStyles[0].borderWidth + "px",
                borderRadius: containerStyles[0].borderRadius + "px",
                borderColor: containerStyles[0].borderColor,
                backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
                backgroundRepeat: containerStyles[0].backgroundRepeat,
                backgroundPosition: containerStyles[0].backgroundPosition,
                backgroundSize: containerStyles[0].backgroundSize,
                backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                marginTop: marginTop + containerStyles[0].marginUnit,
                marginBottom: marginBottom + containerStyles[0].marginUnit,
                marginLeft: marginLeft + containerStyles[0].marginUnit,
                marginRight: marginRight + containerStyles[0].marginUnit,
                paddingTop: paddingTop + containerStyles[0].paddingUnit,
                paddingBottom: paddingBottom + containerStyles[0].paddingUnit,
                paddingLeft: paddingLeft + containerStyles[0].paddingUnit,
                paddingRight: paddingRight + containerStyles[0].paddingUnit,
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