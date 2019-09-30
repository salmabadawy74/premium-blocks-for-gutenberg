import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumBorder from "../../components/premium-border";
import PremiumSizeUnits from "../../components/premium-size-units";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";

//define for translation
const { __ } = wp.i18n;

const { TextControl, PanelBody, ToggleControl, RangeControl, ButtonGroup, Button, Toolbar } = wp.components;
const { BlockControls, RichText, InspectorControls, ColorPalette, AlignmentToolbar } = wp.editor;

const edit = props => {

    const { isSelected, setAttributes, className, clientId: blockID } = props;
    const {
        id,
        frontTitle,
        frontTitleColor,
        frontDescription,
        frontDescriptionColor,
        frontBackgroundColor,
        backTitle,
        backTitleColor,
        backDescription,
        backDescriptionColor,
        backBackgroundColor,
        frontIconType,
        frontIconSelected,
        frontIconCheck,
        frontIconSize,
        frontIconColor,
        frontIconBackground,
        froIconBorderType,
        froIconBorderWidth,
        froIconBorderRadius,
        froIconBorderColor,
        frontIconPaddingTop,
        frontIconPaddingRight,
        frontIconPaddingBottom,
        frontIconPaddingLeft,
        frontIconMarginTop,
        frontIconMarginRight,
        frontIconMarginBottom,
        frontIconMarginLeft,
        frontIconUnit,
        frontTitleCheck,
        frontTitleSize,
        frontTitlelineHeight,
        frontTitleShadowColor,
        frontTitleShadowBlur,
        frontTitleShadowHorizontal,
        frontTitleShadowVertical,
        frontTitlePaddingTop,
        frontTitlePaddingRight,
        frontTitlePaddingBottom,
        frontTitlePaddingLeft,
        frontTitleMarginTop,
        frontTitleMarginRight,
        frontTitleMarginBottom,
        frontTitleMarginLeft,
        frontDescCheck,
        frontDescSize,
        frontDesclineHeight,
        frontDescShadowColor,
        frontDescShadowBlur,
        frontDescShadowHorizontal,
        frontDescShadowVertical,
        frontDescPaddingTop,
        frontDescPaddingRight,
        frontDescPaddingBottom,
        frontDescPaddingLeft,
        frontDescMarginTop,
        frontDescMarginRight,
        frontDescMarginBottom,
        frontDescMarginLeft,
        froMarUnit,
        froPadUnit,
        backMarUnit,
        backPadUnit,
        backIconType,
        backIconSelected,
        backIconCheck,
        backIconSize,
        backIconColor,
        backIconBackground,
        backIconBorderType,
        backIconBorderWidth,
        backIconBorderRadius,
        backIconBorderColor,
        backIconPaddingTop,
        backIconPaddingRight,
        backIconPaddingBottom,
        backIconPaddingLeft,
        backIconMarginTop,
        backIconMarginRight,
        backIconMarginBottom,
        backIconMarginLeft,
        backIconUnit,
        backTitleCheck,
        backTitleSize,
        backTitleLineHeight,
        backTitleShadowColor,
        backTitleShadowBlur,
        backTitleShadowHorizontal,
        backTitleShadowVertical,
        backTitlePaddingTop,
        backTitlePaddingRight,
        backTitlePaddingBottom,
        backTitlePaddingLeft,
        backTitleMarginTop,
        backTitleMarginRight,
        backTitleMarginBottom,
        backTitleMarginLeft,
        backDescCheck,
        backDescSize,
        backDesclineHeight,
        backDescShadowColor,
        backDescShadowBlur,
        backDescShadowHorizontal,
        backDescShadowVertical,
        backDescPaddingTop,
        backDescPaddingRight,
        backDescPaddingBottom,
        backDescPaddingLeft,
        backDescMarginTop,
        backDescMarginRight,
        backDescMarginBottom,
        backDescMarginLeft,
        alignFroHorizontal,
        alignFroVertical,
        alignBackHorizontal,
        alignBackVertical,
        activeSide

    } = props.attributes;

    const ALIGN_Front_H = [
        {
            icon: 'editor-alignleft',
            title: __('left'),
            align: 'flex-start',
        },
        {
            icon: 'editor-aligncenter',
            title: __('Center'),
            align: 'center',
        },
        {
            icon: 'editor-alignright',
            title: __('Right'),
            align: 'flex-end',
        },
    ];

    const ALIGN_Back_H = [
        {
            icon: 'editor-alignleft',
            title: __('left'),
            align: 'flex-start',
        },
        {
            icon: 'editor-aligncenter',
            title: __('Center'),
            align: 'center',
        },
        {
            icon: 'editor-alignright',
            title: __('Right'),
            align: 'flex-end',
        },
    ];

    const ALIGN_Front_V = [
        {
            icon: 'arrow-up-alt2',
            title: __('Top'),
            align: 'flex-start',
        },
        {
            icon: 'editor-aligncenter',
            title: __('Center'),
            align: 'center',
        },
        {
            icon: 'arrow-down-alt2',
            title: __('Bottom'),
            align: 'flex-end',
        },
    ];

    const ALIGN_Back_V = [
        {
            icon: 'arrow-up-alt2',
            title: __('Top'),
            align: 'flex-start',
        },
        {
            icon: 'editor-aligncenter',
            title: __('Center'),
            align: 'center',
        },
        {
            icon: 'arrow-down-alt2',
            title: __('Bottom'),
            align: 'flex-end',
        },
    ];

    const mainClasses = classnames(className, "premium-flip");

    const handleFront = (e) => {
        setAttributes({ activeSide: "right" })
        jQuery(document).ready(function ($) {
            $(`#premium-flip-${id} .premium-flip-main-box`).removeClass("flipped");
            $(`#premium-flip-${id} .premium-flip-main-box`).addClass("not-flipped");
        })
    }

    const handleBack = (e) => {
        setAttributes({ activeSide: "left" })
        jQuery(document).ready(function ($) {
            $(`#premium-flip-${id} .premium-flip-main-box`).addClass("flipped");
            $(`#premium-flip-${id} .premium-flip-main-box`).removeClass("not-flipped");
        })
    }

    const createControlers = (arrows) => {
        return {
            icon: `arrow-${arrows}-alt2`,
            title: (arrows == "right") ? "Front" : "Back",
            isActive: activeSide === arrows,
            onClick: () => {
                setAttributes({ activeSide: arrows }),
                    "left" === arrows
                        ?
                        jQuery(document).ready(function ($) {
                            $(`#premium-flip-${id} .premium-flip-main-box`).addClass("flipped");
                            $(`#premium-flip-${id} .premium-flip-main-box`).removeClass("not-flipped");
                        })
                        :
                        jQuery(document).ready(function ($) {
                            $(`#premium-flip-${id} .premium-flip-main-box`).removeClass("flipped");
                            $(`#premium-flip-${id} .premium-flip-main-box`).addClass("not-flipped");
                        })
            }
        };
    }

    setAttributes({ id: blockID });

    return [
        isSelected && (
            <div>
                <BlockControls key="controls">
                    <AlignmentToolbar
                        label={__('Front Alignment Horizontal')}
                        value={alignFroHorizontal}
                        onChange={newAlign => setAttributes({ alignFroHorizontal: newAlign || "center" })}
                        alignmentControls={ALIGN_Front_H}
                    />
                </BlockControls>

                <BlockControls key="controls">
                    <AlignmentToolbar
                        label={__('Front Alignment Vertical')}
                        value={alignFroVertical}
                        onChange={newAlign => setAttributes({ alignFroVertical: newAlign || "center" })}
                        alignmentControls={ALIGN_Front_V}
                    />
                </BlockControls>

                <BlockControls key="controls">
                    <AlignmentToolbar
                        label={__('Back Alignment Horizontal')}
                        value={alignBackHorizontal}
                        onChange={newAlign => setAttributes({ alignBackHorizontal: newAlign || "center" })}
                        alignmentControls={ALIGN_Back_H}
                    />
                </BlockControls>

                <BlockControls key="controls">
                    <AlignmentToolbar
                        label={__('Back Alignment Vertical')}
                        value={alignBackVertical}
                        onChange={newAlign => setAttributes({ alignBackVertical: newAlign || "center" })}
                        alignmentControls={ALIGN_Back_V}
                    />
                </BlockControls>

                <BlockControls key="controls">
                    <Toolbar
                        controls={['right', 'left'].map(createControlers)}
                    />
                </BlockControls>

                <InspectorControls key={"inspector"}>

                    {/* Start Front side */}
                    <PanelBody
                        title={__("Front Side")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <div className="premium-control-toggle">
                            <p><strong>{__("Background Color")}</strong></p>
                            <ColorPalette
                                value={frontBackgroundColor}
                                onChange={newBgColor => setAttributes({ frontBackgroundColor: newBgColor || "#7c5707" })}
                                allowReset={true}
                            />
                        </div>

                        {/* Front icon options */}

                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Icon")}
                                checked={frontIconCheck}
                                onChange={newCheck => setAttributes({ frontIconCheck: newCheck })}
                            />
                        </div>
                        {frontIconCheck && (
                            <div className="premium-control-toggle">
                                <p><strong>{__("Select Icon")}</strong></p>
                                <FontIconPicker
                                    icons={iconsList}
                                    onChange={newIcon => setAttributes({ frontIconSelected: newIcon || "dashicons dashicons-admin-site" })}
                                    value={frontIconSelected}
                                    isMulti={false}
                                    appendTo="body"
                                    noSelectedPlaceholder={__("Select Icon")}
                                />
                            </div>
                        )}
                        {frontIconCheck && (
                            <PremiumSizeUnits
                                onChangeSizeUnit={newValue =>
                                    setAttributes({ frontIconUnit: newValue || "px" })
                                }
                            />
                        )}
                        {frontIconCheck && (
                            <div className="premium-control-toggle">
                                <RangeControl
                                    label={__("Size")}
                                    value={frontIconSize}
                                    onChange={newValue => setAttributes({ frontIconSize: newValue || "50" })}
                                    initialPosition={50}
                                    allowReset={true}
                                />
                            </div>
                        )}

                        {/* Front Title options */}

                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Title")}
                                checked={frontTitleCheck}
                                onChange={newCheck => setAttributes({ frontTitleCheck: newCheck })}
                            />
                        </div>
                        {frontTitleCheck && (
                            <div className="premium-control-toggle">
                                <TextControl
                                    label={__("Title Text")}
                                    value={frontTitle}
                                    onChange={newTitle => setAttributes({ frontTitle: newTitle })}
                                />
                            </div>
                        )}

                        {/* Front Description options */}

                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Description")}
                                checked={frontDescCheck}
                                onChange={newCheck => setAttributes({ frontDescCheck: newCheck })}
                            />
                        </div>
                        {frontDescCheck && (
                            <div className="premium-control-toggle">
                                <TextControl
                                    label={__("Description Text")}
                                    value={frontDescription}
                                    onChange={newDesc => setAttributes({ frontDescription: newDesc })}
                                />
                            </div>
                        )}
                        <div className="premium-control-toggle">
                            <ButtonGroup>
                                <Button
                                    isPrimary={(activeSide === "right") ? true : false}
                                    isDefault={(activeSide === "right") ? false : true}
                                    className="premium-unit-control-btn front-btn"
                                    onClick={handleFront}
                                >
                                    Front Side
                            </Button>
                                <Button
                                    isPrimary={(activeSide === "left") ? true : false}
                                    isDefault={(activeSide === "left") ? false : true}
                                    className="premium-unit-control-btn back-btn"
                                    onClick={handleBack}
                                >
                                    Back Side
                            </Button>
                            </ButtonGroup>
                        </div>

                    </PanelBody>
                    {/* End Front side */}

                    {/* Start Front side options */}
                    {frontIconCheck && (
                        <PanelBody
                            title={__("Front Icon Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p><strong>{__("Color")}</strong></p>
                                <ColorPalette
                                    value={frontIconColor}
                                    onChange={newColor => setAttributes({ frontIconColor: newColor || "#fff" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <p><strong>{__("Background Color")}</strong></p>
                                <ColorPalette
                                    value={frontIconBackground}
                                    onChange={newColor => setAttributes({ frontIconBackground: newColor || "transparent" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumBorder
                                    borderType={froIconBorderType}
                                    borderWidth={froIconBorderWidth}
                                    borderColor={froIconBorderColor}
                                    borderRadius={froIconBorderRadius}
                                    onChangeType={newType => setAttributes({ froIconBorderType: newType || "none" })}
                                    onChangeWidth={newWidth => setAttributes({ froIconBorderWidth: newWidth || "0" })}
                                    onChangeColor={colorValue =>
                                        setAttributes({ froIconBorderColor: colorValue.hex || "transparent" })
                                    }
                                    onChangeRadius={newrRadius =>
                                        setAttributes({ froIconBorderRadius: newrRadius || "0" })
                                    }
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumMargin
                                    directions={["top", "right", "bottom", "left"]}
                                    marginTop={frontIconMarginTop}
                                    marginRight={frontIconMarginRight}
                                    marginBottom={frontIconMarginBottom}
                                    marginLeft={frontIconMarginLeft}
                                    onChangeMarTop={newValue =>
                                        setAttributes({
                                            frontIconMarginTop: newValue || "0"
                                        })
                                    }
                                    onChangeMarRight={newValue =>
                                        setAttributes({
                                            frontIconMarginRight: newValue || "0"
                                        })
                                    }
                                    onChangeMarBottom={newValue =>
                                        setAttributes({
                                            frontIconMarginBottom: newValue || "0"
                                        })
                                    }
                                    onChangeMarLeft={newValue =>
                                        setAttributes({
                                            frontIconMarginLeft: newValue || "0"
                                        })
                                    }
                                    showUnits={true}
                                    onChangeMarSizeUnit={newValue =>
                                        setAttributes({ froMarUnit: newValue || "px" })
                                    }
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumPadding
                                    paddingTop={frontIconPaddingTop}
                                    paddingRight={frontIconPaddingRight}
                                    paddingBottom={frontIconPaddingBottom}
                                    paddingLeft={frontIconPaddingLeft}
                                    onChangePadTop={newValue =>
                                        setAttributes({
                                            frontIconPaddingTop: newValue || "0"
                                        })
                                    }
                                    onChangePadRight={newValue =>
                                        setAttributes({
                                            frontIconPaddingRight: newValue || "0"
                                        })
                                    }
                                    onChangePadBottom={newValue =>
                                        setAttributes({
                                            frontIconPaddingBottom: newValue || "0"
                                        })
                                    }
                                    onChangePadLeft={newValue =>
                                        setAttributes({
                                            frontIconPaddingLeft: newValue || "0"
                                        })
                                    }
                                    showUnits={true}
                                    onChangePadSizeUnit={newvalue =>
                                        setAttributes({ froPadUnit: newvalue || "px" })
                                    }
                                />
                            </div>

                        </PanelBody>
                    )}
                    {frontTitleCheck && (
                        <PanelBody
                            title={__("Front Title Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p><strong>{__("Color")}</strong></p>
                                <ColorPalette
                                    value={frontTitleColor}
                                    onChange={newColor => setAttributes({ frontTitleColor: newColor || "#e3d192" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTypo
                                    components={["size", "line"]}
                                    size={frontTitleSize}
                                    line={frontTitlelineHeight}
                                    onChangeSize={newSize => setAttributes({ frontTitleSize: newSize })}
                                    onChangeLine={newValue => setAttributes({ frontTitlelineHeight: newValue })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTextShadow
                                    color={frontTitleShadowColor}
                                    blur={frontTitleShadowBlur}
                                    horizontal={frontTitleShadowHorizontal}
                                    vertical={frontTitleShadowVertical}
                                    onChangeColor={newColor => setAttributes({ frontTitleShadowColor: newColor.hex || "transparent" })}
                                    onChangeBlur={newBlur => setAttributes({ frontTitleShadowBlur: newBlur || "0" })}
                                    onChangehHorizontal={newValue => setAttributes({ frontTitleShadowHorizontal: newValue || "0" })}
                                    onChangeVertical={newValue => setAttributes({ frontTitleShadowVertical: newValue || "0" })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumMargin
                                    directions={["top", "right", "bottom", "left"]}
                                    marginTop={frontTitleMarginTop}
                                    marginRight={frontTitleMarginRight}
                                    marginBottom={frontTitleMarginBottom}
                                    marginLeft={frontTitleMarginLeft}
                                    onChangeMarTop={newValue =>
                                        setAttributes({
                                            frontTitleMarginTop: newValue
                                        })
                                    }
                                    onChangeMarRight={newValue =>
                                        setAttributes({
                                            frontTitleMarginRight: newValue
                                        })
                                    }
                                    onChangeMarBottom={newValue =>
                                        setAttributes({
                                            frontTitleMarginBottom: newValue
                                        })
                                    }
                                    onChangeMarLeft={newValue =>
                                        setAttributes({
                                            frontTitleMarginLeft: newValue
                                        })
                                    }
                                    showUnits={false}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumPadding
                                    paddingTop={frontTitlePaddingTop}
                                    paddingRight={frontTitlePaddingRight}
                                    paddingBottom={frontTitlePaddingBottom}
                                    paddingLeft={frontTitlePaddingLeft}
                                    onChangePadTop={newValue =>
                                        setAttributes({
                                            frontTitlePaddingTop: newValue
                                        })
                                    }
                                    onChangePadRight={newValue =>
                                        setAttributes({
                                            frontTitlePaddingRight: newValue
                                        })
                                    }
                                    onChangePadBottom={newValue =>
                                        setAttributes({
                                            frontTitlePaddingBottom: newValue
                                        })
                                    }
                                    onChangePadLeft={newValue =>
                                        setAttributes({
                                            frontTitlePaddingLeft: newValue
                                        })
                                    }
                                    showUnits={false}
                                />
                            </div>

                        </PanelBody>
                    )}
                    {frontDescCheck && (
                        <PanelBody
                            title={__("Front Description Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p><strong>{__("Color")}</strong></p>
                                <ColorPalette
                                    value={frontDescriptionColor}
                                    onChange={newColor => setAttributes({ frontDescriptionColor: newColor || "#ddd" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTypo
                                    components={["size", "line"]}
                                    size={frontDescSize}
                                    line={frontDesclineHeight}
                                    onChangeSize={newSize => setAttributes({ frontDescSize: newSize })}
                                    onChangeLine={newValue => setAttributes({ frontDesclineHeight: newValue })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTextShadow
                                    color={frontDescShadowColor}
                                    blur={frontDescShadowBlur}
                                    horizontal={frontDescShadowHorizontal}
                                    vertical={frontDescShadowVertical}
                                    onChangeColor={newColor => setAttributes({ frontDescShadowColor: newColor.hex || "transparent" })}
                                    onChangeBlur={newBlur => setAttributes({ frontDescShadowBlur: newBlur || "0" })}
                                    onChangehHorizontal={newValue => setAttributes({ frontDescShadowHorizontal: newValue || "0" })}
                                    onChangeVertical={newValue => setAttributes({ frontDescShadowVertical: newValue || "0" })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumMargin
                                    directions={["top", "right", "bottom", "left"]}
                                    marginTop={frontDescMarginTop}
                                    marginRight={frontDescMarginRight}
                                    marginBottom={frontDescMarginBottom}
                                    marginLeft={frontDescMarginLeft}
                                    onChangeMarTop={newValue =>
                                        setAttributes({
                                            frontDescMarginTop: newValue
                                        })
                                    }
                                    onChangeMarRight={newValue =>
                                        setAttributes({
                                            frontDescMarginRight: newValue
                                        })
                                    }
                                    onChangeMarBottom={newValue =>
                                        setAttributes({
                                            frontDescMarginBottom: newValue
                                        })
                                    }
                                    onChangeMarLeft={newValue =>
                                        setAttributes({
                                            frontDescMarginLeft: newValue
                                        })
                                    }
                                    showUnits={false}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumPadding
                                    paddingTop={frontDescPaddingTop}
                                    paddingRight={frontDescPaddingRight}
                                    paddingBottom={frontDescPaddingBottom}
                                    paddingLeft={frontDescPaddingLeft}
                                    onChangePadTop={newValue =>
                                        setAttributes({
                                            frontDescPaddingTop: newValue
                                        })
                                    }
                                    onChangePadRight={newValue =>
                                        setAttributes({
                                            frontDescPaddingRight: newValue
                                        })
                                    }
                                    onChangePadBottom={newValue =>
                                        setAttributes({
                                            frontDescPaddingBottom: newValue
                                        })
                                    }
                                    onChangePadLeft={newValue =>
                                        setAttributes({
                                            frontDescPaddingLeft: newValue
                                        })
                                    }
                                    showUnits={false}
                                />
                            </div>

                        </PanelBody>
                    )}
                    {/* End Front side options */}

                    {/* Start Back side */}
                    <PanelBody
                        title={__("Back Side")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <div className="premium-control-toggle">
                            <p><strong>{__("Background Color")}</strong></p>
                            <ColorPalette
                                value={backBackgroundColor}
                                onChange={newColor => setAttributes({ backBackgroundColor: newColor || "#ae8686" })}
                                allowReset={true}
                            />
                        </div>

                        {/* Back icon options */}

                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Icon")}
                                checked={backIconCheck}
                                onChange={newCheck => setAttributes({ backIconCheck: newCheck })}
                            />
                        </div>
                        {backIconCheck && (
                            <div className="premium-control-toggle">
                                <p><strong>{__("Select Icon")}</strong></p>
                                <FontIconPicker
                                    icons={iconsList}
                                    onChange={newIcon => setAttributes({ backIconSelected: newIcon || "dashicons dashicons-admin-site" })}
                                    value={backIconSelected}
                                    isMulti={false}
                                    appendTo="body"
                                    noSelectedPlaceholder={__("Select Icon")}
                                />
                            </div>
                        )}
                        {backIconCheck && (
                            <PremiumSizeUnits
                                onChangeSizeUnit={newValue =>
                                    setAttributes({ backIconUnit: newValue || "px" })
                                }
                            />
                        )}
                        {backIconCheck && (
                            <div className="premium-control-toggle">
                                <RangeControl
                                    label={__("Size")}
                                    value={backIconSize}
                                    onChange={newValue => setAttributes({ backIconSize: newValue || "50" })}
                                    initialPosition={50}
                                    allowReset={true}
                                />
                            </div>
                        )}

                        {/* Back Title options */}

                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Title")}
                                checked={backTitleCheck}
                                onChange={newCheck => setAttributes({ backTitleCheck: newCheck })}
                            />
                        </div>
                        {backTitleCheck && (
                            <div className="premium-control-toggle">
                                <TextControl
                                    label={__("Title Text")}
                                    value={backTitle}
                                    onChange={newTitle => setAttributes({ backTitle: newTitle })}
                                />
                            </div>
                        )}

                        {/* Back Description options */}

                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Description")}
                                checked={backDescCheck}
                                onChange={newCheck => setAttributes({ backDescCheck: newCheck })}
                            />
                        </div>
                        {backDescCheck && (
                            <div className="premium-control-toggle">
                                <TextControl
                                    label={__("Description Text")}
                                    value={backDescription}
                                    onChange={newDesc => setAttributes({ backDescription: newDesc })}
                                />
                            </div>
                        )}

                    </PanelBody>
                    {/* End Back side */}

                    {/* Start Back side options */}
                    {backIconCheck && (
                        <PanelBody
                            title={__("Back Icon Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p><strong>{__("Color")}</strong></p>
                                <ColorPalette
                                    value={backIconColor}
                                    onChange={newColor => setAttributes({ backIconColor: newColor || "#fff" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <p><strong>{__("Background Color")}</strong></p>
                                <ColorPalette
                                    value={backIconBackground}
                                    onChange={newColor => setAttributes({ backIconBackground: newColor || "transparent" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumBorder
                                    borderType={backIconBorderType}
                                    borderWidth={backIconBorderWidth}
                                    borderColor={backIconBorderColor}
                                    borderRadius={backIconBorderRadius}
                                    onChangeType={newType => setAttributes({ backIconBorderType: newType || "none" })}
                                    onChangeWidth={newWidth => setAttributes({ backIconBorderWidth: newWidth || "0" })}
                                    onChangeColor={colorValue =>
                                        setAttributes({ backIconBorderColor: colorValue.hex || "transparent" })
                                    }
                                    onChangeRadius={newrRadius =>
                                        setAttributes({ backIconBorderRadius: newrRadius || "0" })
                                    }
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumMargin
                                    directions={["top", "right", "bottom", "left"]}
                                    marginTop={backIconMarginTop}
                                    marginRight={backIconMarginRight}
                                    marginBottom={backIconMarginBottom}
                                    marginLeft={backIconMarginLeft}
                                    onChangeMarTop={newValue =>
                                        setAttributes({
                                            backIconMarginTop: newValue || "0"
                                        })
                                    }
                                    onChangeMarRight={newValue =>
                                        setAttributes({
                                            backIconMarginRight: newValue || "0"
                                        })
                                    }
                                    onChangeMarBottom={newValue =>
                                        setAttributes({
                                            backIconMarginBottom: newValue || "0"
                                        })
                                    }
                                    onChangeMarLeft={newValue =>
                                        setAttributes({
                                            backIconMarginLeft: newValue || "0"
                                        })
                                    }
                                    showUnits={true}
                                    onChangeMarSizeUnit={newValue =>
                                        setAttributes({ backMarUnit: newValue || "px" })
                                    }
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumPadding
                                    paddingTop={backIconPaddingTop}
                                    paddingRight={backIconPaddingRight}
                                    paddingBottom={backIconPaddingBottom}
                                    paddingLeft={backIconPaddingLeft}
                                    onChangePadTop={newValue =>
                                        setAttributes({
                                            backIconPaddingTop: newValue || "0"
                                        })
                                    }
                                    onChangePadRight={newValue =>
                                        setAttributes({
                                            backIconPaddingRight: newValue || "0"
                                        })
                                    }
                                    onChangePadBottom={newValue =>
                                        setAttributes({
                                            backIconPaddingBottom: newValue || "0"
                                        })
                                    }
                                    onChangePadLeft={newValue =>
                                        setAttributes({
                                            backIconPaddingLeft: newValue || "0"
                                        })
                                    }
                                    showUnits={true}
                                    onChangePadSizeUnit={newValue =>
                                        setAttributes({ backPadUnit: newValue || "px" })
                                    }
                                />
                            </div>

                        </PanelBody>
                    )}
                    {backTitleCheck && (
                        <PanelBody
                            title={__("Back Title Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p><strong>{__("Color")}</strong></p>
                                <ColorPalette
                                    value={backTitleColor}
                                    onChange={newColor => setAttributes({ backTitleColor: newColor || "#fff" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTypo
                                    components={["size", "line"]}
                                    size={backTitleSize}
                                    line={backTitleLineHeight}
                                    onChangeSize={newSize => setAttributes({ backTitleSize: newSize })}
                                    onChangeLine={newValue => setAttributes({ backTitleLineHeight: newValue })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTextShadow
                                    color={backTitleShadowColor}
                                    blur={backTitleShadowBlur}
                                    horizontal={backTitleShadowHorizontal}
                                    vertical={backTitleShadowVertical}
                                    onChangeColor={newColor => setAttributes({ backTitleShadowColor: newColor.hex || "transparent" })}
                                    onChangeBlur={newBlur => setAttributes({ backTitleShadowBlur: newBlur || "0" })}
                                    onChangehHorizontal={newValue => setAttributes({ backTitleShadowHorizontal: newValue || "0" })}
                                    onChangeVertical={newValue => setAttributes({ backTitleShadowVertical: newValue || "0" })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumMargin
                                    directions={["top", "right", "bottom", "left"]}
                                    marginTop={backTitleMarginTop}
                                    marginRight={backTitleMarginRight}
                                    marginBottom={backTitleMarginBottom}
                                    marginLeft={backTitleMarginLeft}
                                    onChangeMarTop={newValue =>
                                        setAttributes({
                                            backTitleMarginTop: newValue
                                        })
                                    }
                                    onChangeMarRight={newValue =>
                                        setAttributes({
                                            backTitleMarginRight: newValue
                                        })
                                    }
                                    onChangeMarBottom={newValue =>
                                        setAttributes({
                                            backTitleMarginBottom: newValue
                                        })
                                    }
                                    onChangeMarLeft={newValue =>
                                        setAttributes({
                                            backTitleMarginLeft: newValue
                                        })
                                    }
                                    showUnits={false}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumPadding
                                    paddingTop={backTitlePaddingTop}
                                    paddingRight={backTitlePaddingRight}
                                    paddingBottom={backTitlePaddingBottom}
                                    paddingLeft={backTitlePaddingLeft}
                                    onChangePadTop={newValue =>
                                        setAttributes({
                                            backTitlePaddingTop: newValue
                                        })
                                    }
                                    onChangePadRight={newValue =>
                                        setAttributes({
                                            backTitlePaddingRight: newValue
                                        })
                                    }
                                    onChangePadBottom={newValue =>
                                        setAttributes({
                                            backTitlePaddingBottom: newValue
                                        })
                                    }
                                    onChangePadLeft={newValue =>
                                        setAttributes({
                                            backTitlePaddingLeft: newValue
                                        })
                                    }
                                    showUnits={false}
                                />
                            </div>

                        </PanelBody>
                    )}
                    {backDescCheck && (
                        <PanelBody
                            title={__("Back Description Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p><strong>{__("Color")}</strong></p>
                                <ColorPalette
                                    value={backDescriptionColor}
                                    onChange={newColor => setAttributes({ backDescriptionColor: newColor || "#ddd" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTypo
                                    components={["size", "line"]}
                                    size={backDescSize}
                                    line={backDesclineHeight}
                                    onChangeSize={newSize => setAttributes({ backDescSize: newSize })}
                                    onChangeLine={newValue => setAttributes({ backDesclineHeight: newValue })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTextShadow
                                    color={backDescShadowColor}
                                    blur={backDescShadowBlur}
                                    horizontal={backDescShadowHorizontal}
                                    vertical={backDescShadowVertical}
                                    onChangeColor={newColor => setAttributes({ backDescShadowColor: newColor.hex || "transparent" })}
                                    onChangeBlur={newBlur => setAttributes({ backDescShadowBlur: newBlur || "0" })}
                                    onChangehHorizontal={newValue => setAttributes({ backDescShadowHorizontal: newValue || "0" })}
                                    onChangeVertical={newValue => setAttributes({ backDescShadowVertical: newValue || "0" })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumMargin
                                    directions={["top", "right", "bottom", "left"]}
                                    marginTop={backDescMarginTop}
                                    marginRight={backDescMarginRight}
                                    marginBottom={backDescMarginBottom}
                                    marginLeft={backDescMarginLeft}
                                    onChangeMarTop={newValue =>
                                        setAttributes({
                                            backDescMarginTop: newValue
                                        })
                                    }
                                    onChangeMarRight={newValue =>
                                        setAttributes({
                                            backDescMarginRight: newValue
                                        })
                                    }
                                    onChangeMarBottom={newValue =>
                                        setAttributes({
                                            backDescMarginBottom: newValue
                                        })
                                    }
                                    onChangeMarLeft={newValue =>
                                        setAttributes({
                                            backDescMarginLeft: newValue
                                        })
                                    }
                                    showUnits={false}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumPadding
                                    paddingTop={backDescPaddingTop}
                                    paddingRight={backDescPaddingRight}
                                    paddingBottom={backDescPaddingBottom}
                                    paddingLeft={backDescPaddingLeft}
                                    onChangePadTop={newValue =>
                                        setAttributes({
                                            backDescPaddingTop: newValue
                                        })
                                    }
                                    onChangePadRight={newValue =>
                                        setAttributes({
                                            backDescPaddingRight: newValue
                                        })
                                    }
                                    onChangePadBottom={newValue =>
                                        setAttributes({
                                            backDescPaddingBottom: newValue
                                        })
                                    }
                                    onChangePadLeft={newValue =>
                                        setAttributes({
                                            backDescPaddingLeft: newValue
                                        })
                                    }
                                    showUnits={false}
                                />
                            </div>

                        </PanelBody>
                    )}
                    {/* End Back side options  */}

                </InspectorControls>
            </div>
        ),
        <div className={`${mainClasses}-container `} id={`premium-flip-${id}`}>
            <div className={`premium-flip-main-box `} data-current={activeSide} >

                <div className={`premium-flip-front premium-flip-frontlr `} style={{ backgroundColor: frontBackgroundColor || "#767676" }}>
                    <div className={`premium-flip-front-overlay`}>
                        <div className={`premium-flip-front-content-container`}>
                            <div className={`premium-flip-front-content`} style={{ justifyContent: alignFroHorizontal, alignItems: alignFroVertical }}>
                                <div className={`premium-flip-text-wrapper PafadeInRevLeft`}>

                                    {frontIconCheck && (
                                        <div
                                            className={`premium-flipbox__froIcon`}
                                            style={{
                                                marginTop: (frontIconMarginTop || "0") + (froMarUnit || "px"),
                                                marginRight: (frontIconMarginRight || "0") + (froMarUnit || "px"),
                                                marginBottom: (frontIconMarginBottom || "0") + (froMarUnit || "px"),
                                                marginLeft: (frontIconMarginLeft || "0") + (froMarUnit || "px"),
                                            }}
                                        >

                                            {frontIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                <p className={`premium-icon__alert`}>
                                                    {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                </p>
                                            )}
                                            {(frontIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                <i
                                                    className={`premium-icon ${frontIconSelected}`}
                                                    style={{
                                                        width: "auto",
                                                        height: "100%",
                                                        color: frontIconColor || "#000",
                                                        backgroundColor: frontIconBackground || "transparent",
                                                        fontSize: (frontIconSize || 50) + frontIconUnit,
                                                        border: froIconBorderType || "none",
                                                        borderWidth: (froIconBorderWidth || "1") + "px",
                                                        borderRadius: (froIconBorderRadius || "100") + "px",
                                                        borderColor: froIconBorderColor || "transparent",
                                                        paddingTop: (frontIconPaddingTop || "0") + (froPadUnit || "px"),
                                                        paddingRight: (frontIconPaddingRight || "0") + (froPadUnit || "px"),
                                                        paddingBottom: (frontIconPaddingBottom || "0") + (froPadUnit || "px"),
                                                        paddingLeft: (frontIconPaddingLeft || "0") + (froPadUnit || "px"),
                                                    }}
                                                />
                                            )}

                                        </div>
                                    )}

                                    {frontTitleCheck && (
                                        <RichText
                                            tagName="h1"
                                            className={`premium-flip-front-title`}
                                            value={frontTitle}
                                            isSelected={false}
                                            placeholder="Please Enter your title"
                                            onChange={newTitle => setAttributes({ frontTitle: newTitle })}
                                            style={{
                                                color: frontTitleColor || "#000",
                                                fontSize: frontTitleSize + "px",
                                                lineHeight: frontTitlelineHeight + "px",
                                                textShadow: `${frontTitleShadowHorizontal}px ${frontTitleShadowVertical}px ${frontTitleShadowBlur}px ${frontTitleShadowColor}`,
                                                paddingTop: frontTitlePaddingTop + "px",
                                                paddingBottom: frontTitlePaddingBottom + "px",
                                                paddingLeft: frontTitlePaddingLeft + "px",
                                                paddingRight: frontTitlePaddingRight + "px",
                                                marginTop: frontTitleMarginTop + "px",
                                                marginBottom: frontTitleMarginBottom + "px",
                                                marginLeft: frontTitleMarginLeft + "px",
                                                marginRight: frontTitleMarginRight + "px",
                                            }}
                                            keepPlaceholderOnFocus
                                        />
                                    )}
                                    {frontDescCheck && (
                                        <RichText
                                            tagName="p"
                                            className={`premium-flip-front-description`}
                                            value={frontDescription}
                                            isSelected={false}
                                            placeholder="Please Enter your description"
                                            onChange={newDesc => setAttributes({ frontDescription: newDesc })}
                                            style={{
                                                color: frontDescriptionColor || "#000",
                                                fontSize: frontDescSize + "px",
                                                lineHeight: frontDesclineHeight + "px",
                                                textShadow: `${frontDescShadowHorizontal}px ${frontDescShadowVertical}px ${frontDescShadowBlur}px ${frontDescShadowColor}`,
                                                paddingTop: frontDescPaddingTop + "px",
                                                paddingBottom: frontDescPaddingBottom + "px",
                                                paddingLeft: frontDescPaddingLeft + "px",
                                                paddingRight: frontDescPaddingRight + "px",
                                                marginTop: frontDescMarginTop + "px",
                                                marginBottom: frontDescMarginBottom + "px",
                                                marginLeft: frontDescMarginLeft + "px",
                                                marginRight: frontDescMarginRight + "px",
                                            }}
                                            keepPlaceholderOnFocus
                                        />
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`premium-flip-back premium-flip-backlr `} style={{ backgroundColor: backBackgroundColor || "#767676" }}>
                    <div className={`premium-flip-back-overlay`}>
                        <div className={`premium-flip-back-content-container`}>
                            <div className={`premium-flip-back-content`} style={{ justifyContent: alignBackHorizontal, alignItems: alignBackVertical }}>
                                <div className={`premium-flip-back-text-wrapper PafadeInRevRight`}>

                                    {backIconCheck && (
                                        <div
                                            className={`premium-flipbox__backIcon`}
                                            style={{
                                                marginTop: (backIconMarginTop || "0") + (backMarUnit || "px"),
                                                marginRight: (backIconMarginRight || "0") + (backMarUnit || "px"),
                                                marginBottom: (backIconMarginBottom || "0") + (backMarUnit || "px"),
                                                marginLeft: (backIconMarginLeft || "0") + (backMarUnit || "px"),
                                            }}
                                        >

                                            {backIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                <p className={`premium-icon__alert`}>
                                                    {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                </p>
                                            )}
                                            {(backIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                <i
                                                    className={`premium-icon ${backIconSelected}`}
                                                    style={{
                                                        width: "auto",
                                                        height: "100%",
                                                        color: backIconColor || "#000",
                                                        backgroundColor: backIconBackground || "transparent",
                                                        fontSize: (backIconSize || 50) + backIconUnit,
                                                        border: backIconBorderType || "none",
                                                        borderWidth: (backIconBorderWidth || "1") + "px",
                                                        borderRadius: (backIconBorderRadius || "100") + "px",
                                                        borderColor: backIconBorderColor || "transparent",
                                                        paddingTop: (backIconPaddingTop || "0") + (backPadUnit || "px"),
                                                        paddingRight: (backIconPaddingRight || "0") + (backPadUnit || "px"),
                                                        paddingBottom: (backIconPaddingBottom || "0") + (backPadUnit || "px"),
                                                        paddingLeft: (backIconPaddingLeft || "0") + (backPadUnit || "px"),
                                                    }}
                                                />
                                            )}
                                        </div>
                                    )}

                                    {backTitleCheck && (
                                        <RichText
                                            tagName="h1"
                                            className={`premium-flip-back-title`}
                                            value={backTitle}
                                            isSelected={false}
                                            placeholder="Please Enter your title"
                                            onChange={newTitle => setAttributes({ backTitle: newTitle })}
                                            style={{
                                                color: backTitleColor || "#000",
                                                fontSize: backTitleSize + "px",
                                                lineHeight: backTitleLineHeight + "px",
                                                textShadow: `${backTitleShadowHorizontal}px ${backTitleShadowVertical}px ${backTitleShadowBlur}px ${backTitleShadowColor}`,
                                                paddingTop: backTitlePaddingTop + "px",
                                                paddingBottom: backTitlePaddingBottom + "px",
                                                paddingLeft: backTitlePaddingLeft + "px",
                                                paddingRight: backTitlePaddingRight + "px",
                                                marginTop: backTitleMarginTop + "px",
                                                marginBottom: backTitleMarginBottom + "px",
                                                marginLeft: backTitleMarginLeft + "px",
                                                marginRight: backTitleMarginRight + "px",
                                            }}
                                            keepPlaceholderOnFocus
                                        />
                                    )}
                                    {backDescCheck && (
                                        <RichText
                                            tagName="p"
                                            className={`premium-flip-back-description`}
                                            value={backDescription}
                                            isSelected={false}
                                            placeholder="Please Enter your description"
                                            onChange={newDesc => setAttributes({ backDescription: newDesc })}
                                            style={{
                                                color: backDescriptionColor || "#000",
                                                fontSize: backDescSize + "px",
                                                lineHeight: backDesclineHeight + "px",
                                                textShadow: `${backDescShadowHorizontal}px ${backDescShadowVertical}px ${backDescShadowBlur}px ${backDescShadowColor}`,
                                                paddingTop: backDescPaddingTop + "px",
                                                paddingBottom: backDescPaddingBottom + "px",
                                                paddingLeft: backDescPaddingLeft + "px",
                                                paddingRight: backDescPaddingRight + "px",
                                                marginTop: backDescMarginTop + "px",
                                                marginBottom: backDescMarginBottom + "px",
                                                marginLeft: backDescMarginLeft + "px",
                                                marginRight: backDescMarginRight + "px",
                                            }}
                                            keepPlaceholderOnFocus
                                        />
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ];
};

export default edit;


