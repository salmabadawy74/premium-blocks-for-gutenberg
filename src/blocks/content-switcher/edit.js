import classnames from "classnames";
import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    PremiumTypo,
    ResponsiveSingleRangeControl,
    MultiButtonsControl as ResponsiveRadioControl,
    RadioComponent,
    SpacingComponent as SpacingControl,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    InsideTabs,
    InsideTab,
    PremiumBackgroundControl,
    Icons,
    WebfontLoader,
    ResponsiveRangeControl,
} from "@pbg/components";
import {
    gradientBackground,
    typographyCss,
    borderCss,
    paddingCss,
    marginCss,
    gradientValue,
    generateBlockId,
    generateCss,
} from "@pbg/helpers";

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { InspectorControls, RichText, useBlockProps, InnerBlocks } =
    wp.blockEditor;
const { Fragment, useEffect, useState, useRef } = wp.element;
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(props) {
    const { attributes, setAttributes, className } = props;

    const [isPrimary, setPrimary] = useState(false);
    const [toggle, setToggle] = useState(true);

    const contentRef = useRef(null);
    const primaryRef = useRef(null);
    const secondaryRef = useRef(null);

    useEffect(() => {
        setAttributes({
            blockId:
                "premium-content-switcher-" + generateBlockId(props.clientId),
        });
        setClickEvents();
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            let container = contentRef.current.querySelector(
                ".block-editor-block-list__layout"
            );

            if (container && container.children.length === 2) {
                const { firstChild, lastChild } = container;

                if (!isPrimary) {
                    hideBlock(lastChild);
                    showBlock(firstChild);
                } else {
                    hideBlock(firstChild);
                    showBlock(lastChild);
                }
            }
        }
    });

    const initToggleBox = () => {
        const { blockId } = props.attributes;
        if (!blockId) return null;
        setToggle(!toggle);
        setPrimary(toggle);
    };

    const setClickEvents = () => {
        primaryRef.current &&
            primaryRef.current.addEventListener("click", () =>
                setPrimary(true)
            );

        secondaryRef.current &&
            secondaryRef.current.addEventListener("click", () =>
                setPrimary(false)
            );
    };

    const hideBlock = (node) => (node.style.display = "none");

    const showBlock = (node) => (node.style.display = "block");

    const {
        blockId,
        align,
        showLabel,
        firstLabel,
        secondLabel,
        display,
        labelTag,
        labelStyles,
        firstLabelborder,
        firstLabelPadding,
        secondLabelPadding,
        containerPadding,
        containerMargin,
        switchSize,
        containerRadius,
        containerRadiusUnit,
        switchRadius,
        switchRadiusUnit,
        labelSpacing,
        switchShadow,
        containerShadow,
        firstLabelShadow,
        firstLabelBoxShadow,
        firstLabelTypography,
        secondLabelTypography,
        secondLabelShadow,
        secondLabelBoxShadow,
        secondLabelborder,
        containerBoxShadow,
        containerborder,
        hideDesktop,
        hideTablet,
        hideMobile,
        controllerOneBackground,
        switcherBackground,
        containerBackground,
    } = attributes;

    const DISPLAY = [
        {
            label: __("Block", "premium-blocks-for-gutenberg"),
            value: "block",
        },
        {
            label: __("Inline", "premium-blocks-for-gutenberg"),
            value: "inline",
        },
    ];

    const saveLabelStyles = (item, value) => {
        const newColors = { ...labelStyles };
        newColors[item] = value;
        setAttributes({ labelStyles: newColors });
    };

    let loadFirstLabelGoogleFonts;
    let loadSecondLabelGoogleFonts;

    if (firstLabelTypography.fontFamily !== "Default") {
        const config = {
            google: {
                families: [firstLabelTypography.fontFamily],
            },
        };
        loadFirstLabelGoogleFonts = (
            <WebfontLoader config={config}></WebfontLoader>
        );
    }

    if (secondLabelTypography.fontFamily !== "Default") {
        const sconfig = {
            google: {
                families: [secondLabelTypography.fontFamily],
            },
        };
        loadSecondLabelGoogleFonts = (
            <WebfontLoader config={sconfig}></WebfontLoader>
        );
    }

    const loadStyles = () => {
        const styles = {};
        styles[
            `.${blockId} .premium-content-switcher-toggle-switch-slider:before `
        ] = {
            "border-radius": `${containerRadius || 50
                }${containerRadiusUnit} !important`,
            "box-shadow": ` ${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position} !important`,
            "background-color": `${controllerOneBackground.backgroundType == "solid"
                ? controllerOneBackground.backgroundColor
                : "var(--pbg-global-color1,#0085BA)"
                }`,
            "background-image": `${gradientValue(controllerOneBackground)}`,
            "background-repeat": `${controllerOneBackground.backgroundRepeat}`,
            "background-position": `${controllerOneBackground.backgroundPosition}`,
            "background-size": `${controllerOneBackground.backgroundSize}`,
            "background-attachment": `${controllerOneBackground.fixed ? "fixed" : "unset"
                }`,
        };
        styles[`.${blockId} .premium-content-switcher-toggle-switch-slider `] =
        {
            "border-radius": `${switchRadius}${switchRadiusUnit} !important`,
            "box-shadow": `${switchShadow.horizontal}px ${switchShadow.vertical}px ${switchShadow.blur}px ${switchShadow.color} ${switchShadow.position} !important`,
        };

        styles[
            `.${blockId} .premium-content-switcher-toggle-inline .premium-content-switcher-first-label `
        ] = {
            "margin-right": `${labelSpacing[props.deviceType]}px !important`,
        };
        styles[
            `.${blockId} .premium-content-switcher-toggle-inline .premium-content-switcher-second-label `
        ] = {
            "margin-left": `${labelSpacing[props.deviceType]}px !important`,
        };
        styles[
            `.${blockId} .premium-content-switcher-toggle-block .premium-content-switcher-first-label `
        ] = {
            "margin-bottom": `${labelSpacing[props.deviceType]}px !important`,
        };
        styles[
            `.${blockId} .premium-content-switcher-toggle-block .premium-content-switcher-second-label `
        ] = {
            "margin-top": `${labelSpacing[props.deviceType]}px !important`,
        };
        return generateCss(styles);
    };
    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "Switcher",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__(
                                    "Show Labels",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={showLabel}
                                onChange={(newCheck) =>
                                    setAttributes({ showLabel: newCheck })
                                }
                            />
                            {showLabel && (
                                <Fragment>
                                    <RadioComponent
                                        label={__(
                                            "HTML Tag",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        choices={[
                                            {
                                                value: "h1",
                                                label: __(
                                                    "H1",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                            {
                                                value: "h2",
                                                label: __(
                                                    "H2",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                            {
                                                value: "h3",
                                                label: __(
                                                    "H3",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                            {
                                                value: "h4",
                                                label: __(
                                                    "H4",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                            {
                                                value: "h5",
                                                label: __(
                                                    "H5",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                            {
                                                value: "h6",
                                                label: __(
                                                    "H6",
                                                    "premium-blocks-for-gutenberg"
                                                ),
                                            },
                                        ]}
                                        value={labelTag}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                labelTag: newValue,
                                            })
                                        }
                                    />
                                    <SelectControl
                                        label={__(
                                            "Display",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        options={DISPLAY}
                                        value={display}
                                        onChange={(newValue) =>
                                            setAttributes({ display: newValue })
                                        }
                                    />
                                </Fragment>
                            )}
                            <ResponsiveRadioControl
                                label={__(
                                    "Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
                                choices={[
                                    {
                                        value: "left",
                                        label: __(
                                            "Left",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignLeft,
                                    },
                                    {
                                        value: "center",
                                        label: __(
                                            "Center",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignCenter,
                                    },
                                    {
                                        value: "right",
                                        label: __(
                                            "Right",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        icon: Icons.alignRight,
                                    },
                                ]}
                                value={align}
                                onChange={(newValue) =>
                                    setAttributes({ align: newValue })
                                }
                                showIcons={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "Switcher Style",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <ResponsiveRangeControl
                                label={__(
                                    "Size",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={switchSize}
                                onChange={(value) =>
                                    setAttributes({ switchSize: value })
                                }
                                min={1}
                                max={40}
                                step={1}
                                showUnit={false}
                                defaultValue={15}
                                device="Desktop"
                            />
                            <h2 className="premium-blocks-heading">
                                {__(
                                    "Controller Background",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <PremiumBackgroundControl
                                value={controllerOneBackground}
                                onChange={(value) =>
                                    setAttributes({
                                        controllerOneBackground: value,
                                    })
                                }
                            />
                            <hr />
                            <h2 className="premium-blocks-heading">
                                {__(
                                    "Switcher Background",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <PremiumBackgroundControl
                                value={switcherBackground}
                                onChange={(value) =>
                                    setAttributes({ switcherBackground: value })
                                }
                            />
                            <hr />
                            <PremiumShadow
                                label={__(
                                    "Controller Shadow",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={containerShadow}
                                onChange={(value) =>
                                    setAttributes({ containerShadow: value })
                                }
                                boxShadow={true}
                            />
                            <PremiumShadow
                                label={__(
                                    "Switcher Shadow",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={switchShadow}
                                onChange={(value) =>
                                    setAttributes({ switchShadow: value })
                                }
                                boxShadow={true}
                            />
                            <hr />
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Controller Border Radius",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={containerRadius}
                                onChange={(newSize) =>
                                    setAttributes({ containerRadius: newSize })
                                }
                                min={1}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={["px", "%"]}
                                defaultValue={50}
                                unit={containerRadiusUnit}
                                onChangeUnit={(newSize) =>
                                    setAttributes({
                                        containerRadiusUnit: newSize,
                                    })
                                }
                            />
                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Switcher Border Radius",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={switchRadius}
                                onChange={(newSize) =>
                                    setAttributes({ switchRadius: newSize })
                                }
                                min={1}
                                max={100}
                                step={1}
                                showUnit={true}
                                units={["px", "%"]}
                                defaultValue={50}
                                unit={switchRadiusUnit}
                                onChangeUnit={(newSize) =>
                                    setAttributes({ switchRadiusUnit: newSize })
                                }
                            />
                        </PanelBody>
                        {showLabel && (
                            <PanelBody
                                title={__("Labels Style")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <ResponsiveRangeControl
                                    label={__(
                                        "Spacing",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={labelSpacing}
                                    onChange={(value) =>
                                        setAttributes({ labelSpacing: value })
                                    }
                                    min={1}
                                    max={100}
                                    step={1}
                                    showUnit={false}
                                    defaultValue={15}
                                    device="Desktop"
                                />
                                <InsideTabs>
                                    <InsideTab
                                        tabTitle={__(
                                            "First Label",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <Fragment>
                                            <PremiumTypo
                                                value={firstLabelTypography}
                                                onChange={(newValue) =>
                                                    setAttributes({
                                                        firstLabelTypography:
                                                            newValue,
                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Text Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={
                                                    labelStyles.firstLabelColor
                                                }
                                                colorDefault={""}
                                                onColorChange={(newValue) =>
                                                    saveLabelStyles(
                                                        "firstLabelColor",
                                                        newValue
                                                    )
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Background Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={
                                                    labelStyles.firstLabelBGColor
                                                }
                                                colorDefault={""}
                                                onColorChange={(newValue) =>
                                                    saveLabelStyles(
                                                        "firstLabelBGColor",
                                                        newValue
                                                    )
                                                }
                                            />
                                            <PremiumShadow
                                                label={__(
                                                    "Text Shadow",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                value={firstLabelShadow}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        firstLabelShadow: value,
                                                    })
                                                }
                                            />
                                            <PremiumShadow
                                                value={firstLabelBoxShadow}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        firstLabelBoxShadow:
                                                            value,
                                                    })
                                                }
                                                boxShadow={true}
                                            />
                                            <hr />
                                            <PremiumBorder
                                                label={__(
                                                    "Border",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                value={firstLabelborder}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        firstLabelborder: value,
                                                    })
                                                }
                                                device="Desktop"
                                            />
                                            <hr />
                                            <SpacingControl
                                                label={__(
                                                    "Padding",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                value={firstLabelPadding}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        firstLabelPadding:
                                                            value,
                                                    })
                                                }
                                                showUnits={true}
                                                responsive={true}
                                                device="Desktop"
                                            />
                                        </Fragment>
                                    </InsideTab>
                                    <InsideTab
                                        tabTitle={__(
                                            "Second Label",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <Fragment>
                                            <PremiumTypo
                                                value={secondLabelTypography}
                                                onChange={(newValue) =>
                                                    setAttributes({
                                                        secondLabelTypography:
                                                            newValue,
                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Text Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={
                                                    labelStyles.secondLabelColor
                                                }
                                                colorDefault={""}
                                                onColorChange={(newValue) =>
                                                    saveLabelStyles(
                                                        "secondLabelColor",
                                                        newValue
                                                    )
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Background Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={
                                                    labelStyles.secondLabelBGColor
                                                }
                                                colorDefault={""}
                                                onColorChange={(newValue) =>
                                                    saveLabelStyles(
                                                        "secondLabelBGColor",
                                                        newValue
                                                    )
                                                }
                                            />
                                            <PremiumShadow
                                                label={__(
                                                    "Text Shadow",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                value={secondLabelShadow}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        secondLabelShadow:
                                                            value,
                                                    })
                                                }
                                            />
                                            <PremiumShadow
                                                value={secondLabelBoxShadow}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        secondLabelBoxShadow:
                                                            value,
                                                    })
                                                }
                                                boxShadow={true}
                                            />
                                            <hr />
                                            <PremiumBorder
                                                label={__(
                                                    "Border",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                value={secondLabelborder}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        secondLabelborder:
                                                            value,
                                                    })
                                                }
                                                device="Desktop"
                                            />
                                            <hr />
                                            <SpacingControl
                                                label={__(
                                                    "Padding",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                value={secondLabelPadding}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        secondLabelPadding:
                                                            value,
                                                    })
                                                }
                                                showUnits={true}
                                                responsive={true}
                                                device="Desktop"
                                            />
                                        </Fragment>
                                    </InsideTab>
                                </InsideTabs>
                            </PanelBody>
                        )}
                        <PanelBody
                            title={__(
                                "Container Style",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumBackgroundControl
                                value={containerBackground}
                                onChange={(value) =>
                                    setAttributes({
                                        containerBackground: value,
                                    })
                                }
                            />
                            <hr />
                            <PremiumShadow
                                value={containerBoxShadow}
                                onChange={(value) =>
                                    setAttributes({ containerBoxShadow: value })
                                }
                                boxShadow={true}
                            />
                            <hr />
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={containerborder}
                                onChange={(value) =>
                                    setAttributes({ containerborder: value })
                                }
                                device="Desktop"
                            />
                            <hr />
                            <SpacingControl
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={containerMargin}
                                onChange={(value) =>
                                    setAttributes({ containerMargin: value })
                                }
                                showUnits={true}
                                responsive={true}
                                device="Desktop"
                            />
                            <SpacingControl
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={containerPadding}
                                onChange={(value) =>
                                    setAttributes({ containerPadding: value })
                                }
                                showUnits={true}
                                responsive={true}
                                device="Desktop"
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({ hideDesktop: value })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({ hideTablet: value })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({ hideMobile: value })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles(),
                }}
            />
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-content-switcher ${blockId} `,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    textAlign: align[props.deviceType],
                }}
            >
                <div
                    className={`premium-content-switcher`}
                    style={{
                        ...borderCss(containerborder, props.deviceType),
                        ...paddingCss(containerPadding, props.deviceType),
                        ...marginCss(containerMargin, props.deviceType),
                        ...gradientBackground(containerBackground),
                        textAlign: align[props.deviceType],
                        boxShadow: `${containerBoxShadow.horizontal || 0}px ${containerBoxShadow.vertical || 0
                            }px ${containerBoxShadow.blur || 0}px ${containerBoxShadow.color
                            } ${containerBoxShadow.position} `,
                    }}
                >
                    <div
                        className={`premium-content-switcher-toggle-${display} `}
                        style={{
                            textAlign: align[props.deviceType],
                            justifyContent:
                                align[props.deviceType] == "right"
                                    ? "flex-end"
                                    : align[props.deviceType] == "left"
                                        ? "flex-start"
                                        : align[props.deviceType],
                            alignItems:
                                display == "inline"
                                    ? "center"
                                    : align[props.deviceType] == "right"
                                        ? "flex-end"
                                        : align[props.deviceType] == "left"
                                            ? "flex-start"
                                            : align[props.deviceType],
                        }}
                    >
                        {showLabel && (
                            <div className="premium-content-switcher-first-label">
                                <RichText
                                    tagName={labelTag.toLowerCase()}
                                    className={`premium-content-switcher-${display}-editing`}
                                    onChange={(newValue) =>
                                        setAttributes({ firstLabel: newValue })
                                    }
                                    value={firstLabel}
                                    ref={primaryRef}
                                    style={{
                                        ...typographyCss(
                                            firstLabelTypography,
                                            props.deviceType
                                        ),
                                        ...borderCss(
                                            firstLabelborder,
                                            props.deviceType
                                        ),
                                        ...paddingCss(
                                            firstLabelPadding,
                                            props.deviceType
                                        ),
                                        margin: 0,
                                        color: labelStyles.firstLabelColor,
                                        background:
                                            labelStyles.firstLabelBGColor,
                                        textShadow: `${firstLabelShadow.horizontal || 0
                                            }px ${firstLabelShadow.vertical || 0
                                            }px ${firstLabelShadow.blur || 0}px ${firstLabelShadow.color
                                            } `,
                                        boxShadow: `${firstLabelBoxShadow.horizontal || 0
                                            }px ${firstLabelBoxShadow.vertical || 0
                                            }px ${firstLabelBoxShadow.blur || 0
                                            }px ${firstLabelBoxShadow.color} ${firstLabelBoxShadow.position
                                            } `,
                                    }}
                                />
                            </div>
                        )}
                        <div
                            className="premium-content-switcher-toggle-switch"
                            style={{
                                fontSize:
                                    (switchSize[props.deviceType] || 15) + "px",
                            }}
                        >
                            <label
                                className={`premium-content-switcher-toggle-switch-label`}
                            >
                                <input
                                    onClick={() => initToggleBox()}
                                    type="checkbox"
                                    className={`premium-content-switcher-toggle-switch-input ${props.clientId} `}
                                />
                                <span
                                    className="premium-content-switcher-toggle-switch-slider round"
                                    style={{
                                        ...gradientBackground(
                                            switcherBackground
                                        ),
                                    }}
                                ></span>
                            </label>
                        </div>
                        {showLabel && (
                            <div className="premium-content-switcher-second-label">
                                <RichText
                                    tagName={labelTag.toLowerCase()}
                                    className={`premium-content-switcher-${display}-editing`}
                                    onChange={(newValue) =>
                                        setAttributes({ secondLabel: newValue })
                                    }
                                    value={secondLabel}
                                    ref={secondaryRef}
                                    style={{
                                        ...typographyCss(
                                            secondLabelTypography,
                                            props.deviceType
                                        ),
                                        ...borderCss(
                                            secondLabelborder,
                                            props.deviceType
                                        ),
                                        ...paddingCss(
                                            secondLabelPadding,
                                            props.deviceType
                                        ),
                                        margin: 0,
                                        color: labelStyles.secondLabelColor,
                                        background:
                                            labelStyles.secondLabelBGColor,
                                        textShadow: `${secondLabelShadow.horizontal || 0
                                            }px ${secondLabelShadow.vertical || 0
                                            }px ${secondLabelShadow.blur || 0} px ${secondLabelShadow.color
                                            } `,
                                        boxShadow: `${secondLabelBoxShadow.horizontal || 0
                                            }px ${secondLabelBoxShadow.vertical || 0
                                            }px ${secondLabelBoxShadow.blur || 0
                                            }px ${secondLabelBoxShadow.color} ${secondLabelBoxShadow.position
                                            } `,
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className={`premium-content-switcher-list`}>
                        <div
                            className="premium-content-switcher-two-content"
                            ref={contentRef}
                        >
                            <InnerBlocks
                                template={[
                                    ["premium/switcher-child"],
                                    ["premium/switcher-child"],
                                ]}
                                templateLock="all"
                            />
                        </div>
                    </div>
                </div>
                {loadFirstLabelGoogleFonts}
                {loadSecondLabelGoogleFonts}
            </div>
        </Fragment>
    );
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(Edit);
