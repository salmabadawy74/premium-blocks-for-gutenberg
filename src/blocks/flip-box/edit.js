import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumSizeUnits from "../../components/premium-size-units";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";

//define for translation
const { __ } = wp.i18n;

const { TextControl, PanelBody, ToggleControl, RangeControl, ButtonGroup, Button, Toolbar } = wp.components;
const { BlockControls, RichText, InspectorControls, ColorPalette, AlignmentToolbar } = wp.editor;

const edit = props => {

    const { isSelected, setAttributes, className , clientId: blockID} = props;
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
        pxUnit,
        paddingUnit,
        marginUnit,
        backIconType,
        backIconSelected,
        backIconCheck,
        backIconSize,
        backIconColor,
        backIconBackground,
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
        primary,
        activeSide

    } = props.attributes;

    const ALIGN_Front = [
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

    const ALIGN_Back = [
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

    const createArrowsControl = (arrows) => {
        
        return {
            icon: `arrow-${arrows}-alt2`,
            title: (arrows == "right") ? "Front" : "Back",
            isActive: activeSide === arrows,
            onClick: () => {
                setAttributes({ activeSide: arrows }),
                "left" === arrows
                    ?
                    jQuery(document).ready(function ($) {        
                        $(`#premium-flip-${id} .premium-flip-main-box` ).addClass("flipped");
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
            <BlockControls key="controls">
                <AlignmentToolbar
                    label={__('Front Alignment Horizontal')}
                    value={alignFroHorizontal}
                    onChange={newAlign => setAttributes({ alignFroHorizontal: newAlign || "center" })}
                />
            </BlockControls>
        ),
        isSelected && (
            <BlockControls key="controls">
                <AlignmentToolbar
                    label={__('Front Alignment Vertical')}
                    value={alignFroVertical}
                    onChange={newAlign => setAttributes({ alignFroVertical: newAlign || "center" })}
                    alignmentControls={ALIGN_Front}
                />
            </BlockControls>
        ),
        isSelected && (
            <BlockControls key="controls">
                <AlignmentToolbar
                    label={__('Back Alignment Horizontal')}
                    value={alignBackHorizontal}
                    onChange={newAlign => setAttributes({ alignBackHorizontal: newAlign || "center" })}
                />
            </BlockControls>
        ),
        isSelected && (
            <BlockControls key="controls">
                <AlignmentToolbar
                    label={__('Back Alignment Vertical')}
                    value={alignBackVertical}
                    onChange={newAlign => setAttributes({ alignBackVertical: newAlign || "center" })}
                    alignmentControls={ALIGN_Back}
                />
            </BlockControls>
        ),
        isSelected && (
            <BlockControls key="controls">
                <Toolbar
                    controls={['right', 'left'].map(createArrowsControl)}
                />
            </BlockControls>
        ),

        isSelected && (
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
                                isPrimary={(activeSide == "right") ? true : false}
                                isDefault={(activeSide == "right") ? false : true}
                                className="premium-unit-control-btn front-btn"
                                onClick={handleFront}
                            >
                                Front Side
                            </Button>
                            <Button
                                isPrimary={(activeSide == "left") ? true : false}
                                isDefault={(activeSide == "left") ? false : true}
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
                                onChange={newBgColor => setAttributes({ frontIconBackground: newBgColor || "transparent" })}
                                allowReset={true}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumMargin
                                directions={["top", "right", "bottom", "left"]}
                                marginTop={frontIconMarginTop}
                                marginRight={frontIconMarginRight}
                                marginBottom={frontIconMarginBottom}
                                marginLeft={frontIconMarginLeft}
                                onChangeMarTop={newMarTop =>
                                    setAttributes({
                                        frontIconMarginTop: newMarTop || "0"
                                    })
                                }
                                onChangeMarRight={newMarRight =>
                                    setAttributes({
                                        frontIconMarginRight: newMarRight || "0"
                                    })
                                }
                                onChangeMarBottom={newMarBottom =>
                                    setAttributes({
                                        frontIconMarginBottom: newMarBottom || "0"
                                    })
                                }
                                onChangeMarLeft={newMarLeft =>
                                    setAttributes({
                                        frontIconMarginLeft: newMarLeft || "0"
                                    })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarUnit =>
                                    setAttributes({ marginUnit: newMarUnit || "px" })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumPadding
                                paddingTop={frontIconPaddingTop}
                                paddingRight={frontIconPaddingRight}
                                paddingBottom={frontIconPaddingBottom}
                                paddingLeft={frontIconPaddingLeft}
                                onChangePadTop={newPadTop =>
                                    setAttributes({
                                        frontIconPaddingTop: newPadTop || "0"
                                    })
                                }
                                onChangePadRight={newPadRight =>
                                    setAttributes({
                                        frontIconPaddingRight: newPadRight || "0"
                                    })
                                }
                                onChangePadBottom={newPadBottom =>
                                    setAttributes({
                                        frontIconPaddingBottom: newPadBottom || "0"
                                    })
                                }
                                onChangePadLeft={newPadleft =>
                                    setAttributes({
                                        frontIconPaddingLeft: newPadleft || "0"
                                    })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                    setAttributes({ paddingUnit: newvalue || "px" })
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
                                onChangeLine={newlineHeight => setAttributes({ frontTitlelineHeight: newlineHeight })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumTextShadow
                                color={frontTitleShadowColor}
                                blur={frontTitleShadowBlur}
                                horizontal={frontTitleShadowHorizontal}
                                vertical={frontTitleShadowVertical}
                                onChangeColor={newShadColor => setAttributes({ frontTitleShadowColor: newShadColor.hex || "transparent" })}
                                onChangeBlur={newShadBlur => setAttributes({ frontTitleShadowBlur: newShadBlur || "0" })}
                                onChangehHorizontal={newShadHorizontal => setAttributes({ frontTitleShadowHorizontal: newShadHorizontal || "0" })}
                                onChangeVertical={newShadVertical => setAttributes({ frontTitleShadowVertical: newShadVertical || "0" })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumMargin
                                directions={["top", "right", "bottom", "left"]}
                                marginTop={frontTitleMarginTop}
                                marginRight={frontTitleMarginRight}
                                marginBottom={frontTitleMarginBottom}
                                marginLeft={frontTitleMarginLeft}
                                onChangeMarTop={newMarTop =>
                                    setAttributes({
                                        frontTitleMarginTop: newMarTop
                                    })
                                }
                                onChangeMarRight={newMarRight =>
                                    setAttributes({
                                        frontTitleMarginRight: newMarRight
                                    })
                                }
                                onChangeMarBottom={newMarBottom =>
                                    setAttributes({
                                        frontTitleMarginBottom: newMarBottom
                                    })
                                }
                                onChangeMarLeft={newMarLeft =>
                                    setAttributes({
                                        frontTitleMarginLeft: newMarLeft
                                    })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarvalue =>
                                    setAttributes({ pxUnit: newMarvalue || "px" })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumPadding
                                paddingTop={frontTitlePaddingTop}
                                paddingRight={frontTitlePaddingRight}
                                paddingBottom={frontTitlePaddingBottom}
                                paddingLeft={frontTitlePaddingLeft}
                                onChangePadTop={newPadTop =>
                                    setAttributes({
                                        frontTitlePaddingTop: newPadTop
                                    })
                                }
                                onChangePadRight={newPadRight =>
                                    setAttributes({
                                        frontTitlePaddingRight: newPadRight
                                    })
                                }
                                onChangePadBottom={newPadBottom =>
                                    setAttributes({
                                        frontTitlePaddingBottom: newPadBottom
                                    })
                                }
                                onChangePadLeft={newPadLeft =>
                                    setAttributes({
                                        frontTitlePaddingLeft: newPadLeft
                                    })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                    setAttributes({ pxUnit: newvalue || "px" })
                                }
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
                                onChangeLine={newlineHeight => setAttributes({ frontDesclineHeight: newlineHeight })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumTextShadow
                                color={frontDescShadowColor}
                                blur={frontDescShadowBlur}
                                horizontal={frontDescShadowHorizontal}
                                vertical={frontDescShadowVertical}
                                onChangeColor={newShadColor => setAttributes({ frontDescShadowColor: newShadColor.hex || "transparent" })}
                                onChangeBlur={newShadBlur => setAttributes({ frontDescShadowBlur: newShadBlur || "0" })}
                                onChangehHorizontal={newShadHorizontal => setAttributes({ frontDescShadowHorizontal: newShadHorizontal || "0" })}
                                onChangeVertical={newShadVertical => setAttributes({ frontDescShadowVertical: newShadVertical || "0" })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumMargin
                                directions={["top", "right", "bottom", "left"]}
                                marginTop={frontDescMarginTop}
                                marginRight={frontDescMarginRight}
                                marginBottom={frontDescMarginBottom}
                                marginLeft={frontDescMarginLeft}
                                onChangeMarTop={newMarTop =>
                                    setAttributes({
                                        frontDescMarginTop: newMarTop
                                    })
                                }
                                onChangeMarRight={newMarRight =>
                                    setAttributes({
                                        frontDescMarginRight: newMarRight
                                    })
                                }
                                onChangeMarBottom={newMarBottom =>
                                    setAttributes({
                                        frontDescMarginBottom: newMarBottom
                                    })
                                }
                                onChangeMarLeft={newMarLeft =>
                                    setAttributes({
                                        frontDescMarginLeft: newMarLeft
                                    })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarvalue =>
                                    setAttributes({ pxUnit: newMarvalue || "px" })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumPadding
                                paddingTop={frontDescPaddingTop}
                                paddingRight={frontDescPaddingRight}
                                paddingBottom={frontDescPaddingBottom}
                                paddingLeft={frontDescPaddingLeft}
                                onChangePadTop={newPadTop =>
                                    setAttributes({
                                        frontDescPaddingTop: newPadTop
                                    })
                                }
                                onChangePadRight={newPadRight =>
                                    setAttributes({
                                        frontDescPaddingRight: newPadRight
                                    })
                                }
                                onChangePadBottom={newPadBottom =>
                                    setAttributes({
                                        frontDescPaddingBottom: newPadBottom
                                    })
                                }
                                onChangePadLeft={newPadLeft =>
                                    setAttributes({
                                        frontDescPaddingLeft: newPadLeft
                                    })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                    setAttributes({ pxUnit: newvalue || "px" })
                                }
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
                            onChange={newBgColor => setAttributes({ backBackgroundColor: newBgColor || "#ae8686" })}
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
                                onChange={newBgColor => setAttributes({ backIconBackground: newBgColor || "transparent" })}
                                allowReset={true}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumMargin
                                directions={["top", "right", "bottom", "left"]}
                                marginTop={backIconMarginTop}
                                marginRight={backIconMarginRight}
                                marginBottom={backIconMarginBottom}
                                marginLeft={backIconMarginLeft}
                                onChangeMarTop={newMarTop =>
                                    setAttributes({
                                        backIconMarginTop: newMarTop || "0"
                                    })
                                }
                                onChangeMarRight={newMarRight =>
                                    setAttributes({
                                        backIconMarginRight: newMarRight || "0"
                                    })
                                }
                                onChangeMarBottom={newMarBottom =>
                                    setAttributes({
                                        backIconMarginBottom: newMarBottom || "0"
                                    })
                                }
                                onChangeMarLeft={newMarLeft =>
                                    setAttributes({
                                        backIconMarginLeft: newMarLeft || "0"
                                    })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarUnit =>
                                    setAttributes({ marginUnit: newMarUnit || "px" })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumPadding
                                paddingTop={backIconPaddingTop}
                                paddingRight={backIconPaddingRight}
                                paddingBottom={backIconPaddingBottom}
                                paddingLeft={backIconPaddingLeft}
                                onChangePadTop={newPadTop =>
                                    setAttributes({
                                        backIconPaddingTop: newPadTop || "0"
                                    })
                                }
                                onChangePadRight={newPadRight =>
                                    setAttributes({
                                        backIconPaddingRight: newPadRight || "0"
                                    })
                                }
                                onChangePadBottom={newPadBottom =>
                                    setAttributes({
                                        backIconPaddingBottom: newPadBottom || "0"
                                    })
                                }
                                onChangePadLeft={newPadleft =>
                                    setAttributes({
                                        backIconPaddingLeft: newPadleft || "0"
                                    })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                    setAttributes({ paddingUnit: newvalue || "px" })
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
                                onChangeLine={newLineHeight => setAttributes({ backTitleLineHeight: newLineHeight })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumTextShadow
                                color={backTitleShadowColor}
                                blur={backTitleShadowBlur}
                                horizontal={backTitleShadowHorizontal}
                                vertical={backTitleShadowVertical}
                                onChangeColor={newShadColor => setAttributes({ backTitleShadowColor: newShadColor.hex || "transparent" })}
                                onChangeBlur={newShadBlur => setAttributes({ backTitleShadowBlur: newShadBlur || "0" })}
                                onChangehHorizontal={newShadHorizontal => setAttributes({ backTitleShadowHorizontal: newShadHorizontal || "0" })}
                                onChangeVertical={newShadVertical => setAttributes({ backTitleShadowVertical: newShadVertical || "0" })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumMargin
                                directions={["top", "right", "bottom", "left"]}
                                marginTop={backTitleMarginTop}
                                marginRight={backTitleMarginRight}
                                marginBottom={backTitleMarginBottom}
                                marginLeft={backTitleMarginLeft}
                                onChangeMarTop={newMarTop =>
                                    setAttributes({
                                        backTitleMarginTop: newMarTop
                                    })
                                }
                                onChangeMarRight={newMarRight =>
                                    setAttributes({
                                        backTitleMarginRight: newMarRight
                                    })
                                }
                                onChangeMarBottom={newMarBottom =>
                                    setAttributes({
                                        backTitleMarginBottom: newMarBottom
                                    })
                                }
                                onChangeMarLeft={newMarLeft =>
                                    setAttributes({
                                        backTitleMarginLeft: newMarLeft
                                    })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarvalue =>
                                    setAttributes({ pxUnit: newMarvalue || "px" })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumPadding
                                paddingTop={backTitlePaddingTop}
                                paddingRight={backTitlePaddingRight}
                                paddingBottom={backTitlePaddingBottom}
                                paddingLeft={backTitlePaddingLeft}
                                onChangePadTop={newPadTop =>
                                    setAttributes({
                                        backTitlePaddingTop: newPadTop
                                    })
                                }
                                onChangePadRight={newPadRight =>
                                    setAttributes({
                                        backTitlePaddingRight: newPadRight
                                    })
                                }
                                onChangePadBottom={newPadBottom =>
                                    setAttributes({
                                        backTitlePaddingBottom: newPadBottom
                                    })
                                }
                                onChangePadLeft={newPadLeft =>
                                    setAttributes({
                                        backTitlePaddingLeft: newPadLeft
                                    })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                    setAttributes({ pxUnit: newvalue || "px" })
                                }
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
                                onChangeLine={newlineHeight => setAttributes({ backDesclineHeight: newlineHeight })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumTextShadow
                                color={backDescShadowColor}
                                blur={backDescShadowBlur}
                                horizontal={backDescShadowHorizontal}
                                vertical={backDescShadowVertical}
                                onChangeColor={newShadColor => setAttributes({ backDescShadowColor: newShadColor.hex || "transparent" })}
                                onChangeBlur={newShadBlur => setAttributes({ backDescShadowBlur: newShadBlur || "0" })}
                                onChangehHorizontal={newShadHorizontal => setAttributes({ backDescShadowHorizontal: newShadHorizontal || "0" })}
                                onChangeVertical={newShadVertical => setAttributes({ backDescShadowVertical: newShadVertical || "0" })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumMargin
                                directions={["top", "right", "bottom", "left"]}
                                marginTop={backDescMarginTop}
                                marginRight={backDescMarginRight}
                                marginBottom={backDescMarginBottom}
                                marginLeft={backDescMarginLeft}
                                onChangeMarTop={newMarTop =>
                                    setAttributes({
                                        backDescMarginTop: newMarTop
                                    })
                                }
                                onChangeMarRight={newMarRight =>
                                    setAttributes({
                                        backDescMarginRight: newMarRight
                                    })
                                }
                                onChangeMarBottom={newMarBottom =>
                                    setAttributes({
                                        backDescMarginBottom: newMarBottom
                                    })
                                }
                                onChangeMarLeft={newMarLeft =>
                                    setAttributes({
                                        backDescMarginLeft: newMarLeft
                                    })
                                }
                                showUnits={true}
                                onChangeMarSizeUnit={newMarvalue =>
                                    setAttributes({ pxUnit: newMarvalue || "px" })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumPadding
                                paddingTop={backDescPaddingTop}
                                paddingRight={backDescPaddingRight}
                                paddingBottom={backDescPaddingBottom}
                                paddingLeft={backDescPaddingLeft}
                                onChangePadTop={newPadTop =>
                                    setAttributes({
                                        backDescPaddingTop: newPadTop
                                    })
                                }
                                onChangePadRight={newPadRight =>
                                    setAttributes({
                                        backDescPaddingRight: newPadRight
                                    })
                                }
                                onChangePadBottom={newPadBottom =>
                                    setAttributes({
                                        backDescPaddingBottom: newPadBottom
                                    })
                                }
                                onChangePadLeft={newPadLeft =>
                                    setAttributes({
                                        backDescPaddingLeft: newPadLeft
                                    })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                    setAttributes({ pxUnit: newvalue || "px" })
                                }
                            />
                        </div>

                    </PanelBody>
                )}
                {/* End Back side options  */}

            </InspectorControls>
        ),
        <div className={`${mainClasses}-container `}  id={`premium-flip-${id}`}>
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
                                                width: "100%",
                                                height: "100%",
                                                marginTop: (frontIconMarginTop || "0") + (marginUnit + "px"),
                                                marginRight: (frontIconMarginRight || "0") + (marginUnit + "px"),
                                                marginBottom: (frontIconMarginBottom || "0") + (marginUnit + "px"),
                                                marginLeft: (frontIconMarginLeft || "0") + (marginUnit + "px"),
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
                                                        width: "100%",
                                                        height: "100%",
                                                        color: frontIconColor || "#000",
                                                        backgroundColor: frontIconBackground || "transparent",
                                                        fontSize: (frontIconSize || 50) + frontIconUnit,
                                                        paddingTop: (frontIconPaddingTop || "0") + (paddingUnit || "px"),
                                                        paddingRight: (frontIconPaddingRight || "0") + (paddingUnit || "px"),
                                                        paddingBottom: (frontIconPaddingBottom || "0") + (paddingUnit || "px"),
                                                        paddingLeft: (frontIconPaddingLeft || "0") + (paddingUnit || "px"),
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
                                                width: "100%",
                                                height: "100%",
                                                marginTop: (backIconMarginTop || "0") + "px",
                                                marginRight: (backIconMarginRight || "0") + "px",
                                                marginBottom: (backIconMarginBottom || "0") + "px",
                                                marginLeft: (backIconMarginLeft || "0") + "px",
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
                                                        width: "100%",
                                                        height: "100%",
                                                        color: backIconColor || "#000",
                                                        backgroundColor: backIconBackground || "transparent",
                                                        fontSize: (backIconSize || 50) + backIconUnit,
                                                        paddingTop: (backIconPaddingTop || "0") + "px",
                                                        paddingRight: (backIconPaddingRight || "0") + "px",
                                                        paddingBottom: (backIconPaddingBottom || "0") + "px",
                                                        paddingLeft: (backIconPaddingLeft || "0") + "px",
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


