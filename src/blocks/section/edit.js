import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumSizeUnits from "../../components/premium-size-units";
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';
import styling from './styling'

const { __ } = wp.i18n;

const { PanelBody, ToggleControl, RangeControl, SelectControl } = wp.components;

const { Fragment, Component } = wp.element;

const {
    BlockControls,
    AlignmentToolbar,
    InnerBlocks,
    InspectorControls
} = wp.blockEditor;

const CONTENT = [
    ["core/paragraph", { content: __("Insert your text or select a block ") }]
];

class edit extends Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;

        setAttributes({ block_id: clientId })

        setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-section-" + clientId
        );
        document.head.appendChild($style);

    }

    render() {
        const { isSelected, setAttributes, className, attributes } = this.props;
        const {
            block_id,
            isUpdated,
            stretchSection,
            horAlign,
            innerWidthType,
            innerWidth,
            minHeight,
            minHeightUnit,
            vPos,
            height,
            color,
            opacity,
            imageID,
            imageURL,
            fixed,
            backgroundRepeat,
            backgroundPosition,
            backgroundSize,
            borderType,
            borderWidth,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            borderColor,
            borderRadius,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
            marginTopTablet,
            marginBottomTablet,
            marginLeftTablet,
            marginRightTablet,
            marginTopMobile,
            marginBottomMobile,
            marginLeftMobile,
            marginRightMobile,
            marginUnit,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            paddingTopTablet,
            paddingRightTablet,
            paddingBottomTablet,
            paddingLeftTablet,
            paddingTopMobile,
            paddingRightMobile,
            paddingBottomMobile,
            paddingLeftMobile,
            paddingUnit,
            shadowBlur,
            shadowColor,
            shadowHorizontal,
            shadowVertical,
            shadowPosition,
            hideDesktop,
            hideTablet,
            hideMobile
        } = attributes;

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

        let element = document.getElementById(
            "premium-style-section-" + this.props.clientId
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
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
                            colorValue={color}
                            onChangeColor={newvalue =>
                                setAttributes({ color: newvalue })
                            }
                            opacityValue={opacity}
                            onChangeOpacity={value =>
                                setAttributes({ opacity: value })
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
                            onChangeFixed={check =>
                                setAttributes({ fixed: check })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Border")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumBorder
                            borderType={borderType}
                            borderWidth={borderWidth}
                            top={borderTop}
                            right={borderRight}
                            bottom={borderBottom}
                            left={borderLeft}
                            borderColor={borderColor}
                            borderRadius={borderRadius}
                            onChangeType={(newType) => setAttributes({ borderType: newType })}
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
                                setAttributes({ borderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ borderRadius: newrRadius })
                            }
                        />
                        <PremiumBoxShadow
                            inner={false}
                            color={shadowColor}
                            blur={shadowBlur}
                            horizontal={shadowHorizontal}
                            vertical={shadowVertical}
                            position={shadowPosition}
                            onChangeColor={newColor =>
                                setAttributes({
                                    shadowColor:
                                        newColor === undefined
                                            ? "transparent"
                                            : newColor.hex
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    shadowBlur: newBlur === undefined ? 0 : newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    shadowHorizontal:
                                        newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    shadowVertical:
                                        newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangePosition={newValue =>
                                setAttributes({
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
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={marginTop}
                            marginRight={marginRight}
                            marginBottom={marginBottom}
                            marginLeft={marginLeft}
                            marginTopTablet={marginTopTablet}
                            marginRightTablet={marginRightTablet}
                            marginBottomTablet={marginBottomTablet}
                            marginLeftTablet={marginLeftTablet}
                            marginTopMobile={marginTopMobile}
                            marginRightMobile={marginRightMobile}
                            marginBottomMobile={marginBottomMobile}
                            marginLeftMobile={marginLeftMobile}
                            showUnits={true}
                            onChangeMarSizeUnit={newvalue =>
                                setAttributes({ marginUnit: newvalue })
                            }
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ marginTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ marginTopTablet: newValue })
                                    } else {
                                        setAttributes({ marginTopMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ marginRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ marginRightTablet: newValue })
                                    } else {
                                        setAttributes({ marginRightMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ marginBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ marginBottomTablet: newValue })
                                    } else {
                                        setAttributes({ marginBottomMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ marginLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ marginLeftTablet: newValue })
                                    } else {
                                        setAttributes({ marginLeftMobile: newValue })
                                    }
                                }
                            }
                        />

                        <PremiumResponsivePadding
                            paddingTop={paddingTop}
                            paddingRight={paddingRight}
                            paddingBottom={paddingBottom}
                            paddingLeft={paddingLeft}
                            paddingTopTablet={paddingTopTablet}
                            paddingRightTablet={paddingRightTablet}
                            paddingBottomTablet={paddingBottomTablet}
                            paddingLeftTablet={paddingLeftTablet}
                            paddingTopMobile={paddingTopMobile}
                            paddingRightMobile={paddingRightMobile}
                            paddingBottomMobile={paddingBottomMobile}
                            paddingLeftMobile={paddingLeftMobile}
                            showUnits={true}
                            selectedUnit={paddingUnit}
                            onChangePadSizeUnit={newvalue =>
                                setAttributes({ paddingUnit: newvalue })
                            }
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ paddingTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ paddingTopTablet: newValue })
                                    } else {
                                        setAttributes({ paddingTopMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ paddingRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ paddingRightTablet: newValue })
                                    } else {
                                        setAttributes({ paddingRightMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ paddingBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ paddingBottomTablet: newValue })
                                    } else {
                                        setAttributes({ paddingBottomMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ paddingLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ paddingLeftTablet: newValue })
                                    } else {
                                        setAttributes({ paddingLeftMobile: newValue })
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
                id={`premium-container-${block_id}`}
                className={`${mainClasses} premium-container-${block_id} premium-container__stretch_${stretchSection} premium-container__${innerWidthType} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    textAlign: horAlign,
                    minHeight:
                        "fit" === height ? "100vh" : minHeight + minHeightUnit,
                    backgroundColor: color
                        ? hexToRgba(color, opacity)
                        : "transparent",
                    borderStyle: borderType,
                    borderWidth: isUpdated
                        ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                        : borderWidth + "px",
                    borderRadius: borderRadius + "px",
                    borderColor: borderColor,
                    backgroundImage: imageURL ? `url('${imageURL}')` : 'none',
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    backgroundAttachment: fixed ? "fixed" : "unset",
                    marginTop: marginTop + marginUnit,
                    marginBottom: marginBottom + marginUnit,
                    marginLeft: marginLeft + marginUnit,
                    marginRight: marginRight + marginUnit,
                    paddingTop: paddingTop + paddingUnit,
                    paddingBottom: paddingBottom + paddingUnit,
                    paddingLeft: paddingLeft + paddingUnit,
                    paddingRight: paddingRight + paddingUnit,
                    boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
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
    }
}

export default edit;
