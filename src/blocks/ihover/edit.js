import classnames from "classnames";
import DefaultImage from "../../components/default-image";
import PremiumFilters from "../../components/premium-filters";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumBorder from "../../components/premium-border";

// For Internationalization
const { __ } = wp.i18n;

//Define used components fron=m wordpress
const { PanelBody, IconButton, SelectControl, RangeControl, ToggleControl, TextControl, TextareaControl } = wp.components;
const { InspectorControls, MediaUpload, URLInput, BlockControls, AlignmentToolbar, RichText, ColorPalette } = wp.editor;

const edit = props => {

    const { isSelected, setAttributes, className } = props;
    const {
        imgUrl,
        imgId,
        imgSize,
        imgBorderRadius,
        hoverEffect,
        spinnerBorderW,
        spinnerFirstColor,
        spinnerSecondColor,
        linkCheck,
        linkUrl,
        target,
        imgAlign,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        iconCheck,
        iconType,
        iconSelected,
        iconSize,
        iconUnit,
        iconColor,
        iconBackground,
        iconBorderType,
        iconBorderWidth,
        iconBorderColor,
        iconBorderRadius,
        iconPadTop,
        iconPadRight,
        iconPadBottom,
        iconPadLeft,
        padUnit,
        titleCheck,
        titleText,
        titleColor,
        titleSize,
        titlelineHeight,
        titleShadColor,
        titleShadBlur,
        titleShadHorizontal,
        titleShadVertical,
        titleMarTop,
        titleMarRight,
        titleMarBottom,
        titleMarLeft,
        titleMarUnit,
        descCheck,
        descText,
        descColor,
        descSize,
        desclineHeight,
        descShadColor,
        descShadBlur,
        descShadHorizontal,
        descShadVertical,
        descMarTop,
        descMarRight,
        descMarBottom,
        descMarLeft,
        descMarUnit,
        contentAlign,
        overlayColor,
        overlayOpacity,
        containerBgColor,
        containerShadowColor,
        containerShadowBlur,
        containerShadowHorizontal,
        containerShadowVertical,
        containerShadowPosition,
        containerPadTop,
        containerPadRight,
        containerPadBottom,
        containerPadLeft

    } = props.attributes;

    const Hover_Effects = [
        {
            value: "style18",
            label: __("Advertising")
        },
        {
            value: "style19",
            label: __("Book Cover")
        },
        {
            value: "style10",
            label: __("Backward")
        },
        {
            value: "style15",
            label: __("Faded In Background")
        },
        {
            value: "style17",
            label: __("Flash Rotation")
        },
        {
            value: "style16",
            label: __("Flip Door")
        },
        {
            value: "style4",
            label: __("Flip Background")
        },
        {
            value: "style9",
            label: __("Heroes Flying-Top")
        },
        {
            value: "style9-1",
            label: __("Heroes Flying-Bottom")
        },
        {
            value: "style9-2",
            label: __("Heroes Flying-Right")
        },
        {
            value: "style2",
            label: __("Reduced Image-Top")
        },
        {
            value: "style2-1",
            label: __("Reduced Image-Left")
        },
        {
            value: "style2-2",
            label: __("Reduced Image-Right")
        },
        {
            value: "style2-3",
            label: __("Reduced Image-Bottom")
        },
        {
            value: "style7",
            label: __("Rotated Image-Left")
        },
        {
            value: "style7-1",
            label: __("Rotated Image-right")
        },
        {
            value: "style8",
            label: __("Rotating Wheel-Left")
        },
        {
            value: "style8-1",
            label: __("Rotating Wheel-Top")
        },
        {
            value: "style8-2",
            label: __("Rotating Wheel-Bottom")
        },
        {
            value: "style8-3",
            label: __("Rotating Wheel-Right")
        },
        {
            value: "style13",
            label: __("Rotated Wheel Image-Left")
        },
        {
            value: "style1",
            label: __("Rotor Cube")
        },
        {
            value: "style11",
            label: __("Slided Out Image")
        },
        {
            value: "style12",
            label: __("Slided In Image")
        },
        {
            value: "style5",
            label: __("Zoom In")
        },
        {
            value: "style5-1",
            label: __("Zoom Out")
        },
        {
            value: "style20",
            label: __("Spinner")
        }
    ];

    const mainClasses = classnames(className, "premium-ihover");

    return [
        isSelected && (
            <div>
                <BlockControls >
                    <AlignmentToolbar
                        label={__('Image Alignment')}
                        value={imgAlign}
                        onChange={newAlign => setAttributes({ imgAlign: newAlign })}
                    />
                </BlockControls>
                <InspectorControls>

                    {/* Image options */}

                    <PanelBody
                        title={__("Image")}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <div className="premium-control-toggle">

                            <p>{__("Change Image")}</p>
                            {imgUrl && (
                                <img src={imgUrl} />
                            )}
                            {!imgUrl && <DefaultImage />}
                            <MediaUpload
                                allowedTypes={["image"]}
                                onSelect={media => {
                                    setAttributes({
                                        imgId: media.id,
                                        imgUrl:
                                            "undefined" === typeof media.sizes.thumbnail
                                                ? media.url
                                                : media.sizes.thumbnail.url
                                    });
                                }}
                                type="image"
                                value={imgId}
                                render={({ open }) => (
                                    <IconButton
                                        label={__("Change Image")}
                                        icon="edit"
                                        onClick={open}
                                    >
                                        {__("Change Image")}
                                    </IconButton>
                                )}
                            />

                        </div>
                        <div className="premium-control-toggle">
                            <RangeControl
                                label={__("Image Size")}
                                value={imgSize}
                                onChange={newSize => setAttributes({ imgSize: newSize || "300" })}
                                initialPosition={300}
                                allowReset={true}
                                min={100}
                                max={500}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <RangeControl
                                label={__("Border Radius")}
                                value={imgBorderRadius}
                                onChange={newValue => setAttributes({ imgBorderRadius: newValue || "0" })}
                                initialPosition={50}
                                allowReset={true}
                                min={0}
                                max={100}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <SelectControl
                                label={__("Hover Effects")}
                                options={Hover_Effects}
                                value={hoverEffect}
                                onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                            />
                        </div>

                        {hoverEffect === "style20" && (
                            <div className="premium-control-toggle">
                                <RangeControl
                                    label={__("Spinner Border Width")}
                                    value={spinnerBorderW}
                                    onChange={newWidth => setAttributes({ spinnerBorderW: newWidth || "0" })}
                                    initialPosition={10}
                                    allowReset={true}
                                    min={0}
                                />
                            </div>
                        )}
                        {hoverEffect === "style20" && (
                            <div className="premium-control-toggle">
                                <p>{__("First Color")}</p>
                                <ColorPalette
                                    value={spinnerFirstColor}
                                    onChange={newColor => setAttributes({ spinnerFirstColor: newColor || "#6ec1e4" })}
                                    allowReset={true}
                                />
                            </div>
                        )}
                        {hoverEffect === "style20" && (
                            <div className="premium-control-toggle">
                                <p>{__("Second Color")}</p>
                                <ColorPalette
                                    value={spinnerSecondColor}
                                    onChange={newColor => setAttributes({ spinnerSecondColor: newColor || "#54595f" })}
                                    allowReset={true}
                                />
                            </div>
                        )}

                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Link")}
                                checked={linkCheck}
                                onChange={newCheck => setAttributes({ linkCheck: newCheck })}
                            />
                            {linkCheck && (
                                <ToggleControl
                                    label={__("Open link in new tab")}
                                    checked={target}
                                    onChange={newValue => setAttributes({ target: newValue })}
                                />
                            )}
                        </div>

                    </PanelBody>

                    {/* Img css filter option */}

                    <PanelBody
                        title={__("Image Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <div className="premium-control-toggle">
                            <PremiumFilters
                                blur={blur}
                                bright={bright}
                                contrast={contrast}
                                saturation={saturation}
                                hue={hue}
                                onChangeBlur={newValue => setAttributes({ blur: newValue })}
                                onChangeBright={newValue => setAttributes({ bright: newValue })}
                                onChangeContrast={newValue => setAttributes({ contrast: newValue })}
                                onChangeSat={newValue => setAttributes({ saturation: newValue })}
                                onChangeHue={newValue => setAttributes({ hue: newValue })}
                            />
                        </div>
                    </PanelBody>

                    {/* Content options */}

                    <PanelBody
                        title={__("Content")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        {/* Icon options */}
                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Icon")}
                                checked={iconCheck}
                                onChange={newValue => setAttributes({ iconCheck: newValue })}
                            />
                        </div>
                        {iconCheck && (
                            <div className="premium-control-toggle">
                                <p><strong>{__("Select Icon")}</strong></p>
                                <FontIconPicker
                                    icons={iconsList}
                                    onChange={newIcon => setAttributes({ iconSelected: newIcon || "dashicons dashicons-admin-site" })}
                                    value={iconSelected}
                                    isMulti={false}
                                    appendTo="body"
                                    noSelectedPlaceholder={__("Select Icon")}
                                />
                            </div>
                        )}

                        {/* Title options */}
                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Title")}
                                checked={titleCheck}
                                onChange={newValue => setAttributes({ titleCheck: newValue })}
                            />
                        </div>

                        {/* Description options */}
                        <div className="premium-control-toggle">
                            <ToggleControl
                                label={__("Description")}
                                checked={descCheck}
                                onChange={newValue => setAttributes({ descCheck: newValue })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <p><strong>{__("Alignment")}</strong></p>
                            <AlignmentToolbar
                                value={contentAlign}
                                onChange={newAlign => setAttributes({ contentAlign: newAlign })}
                            />
                        </div>

                    </PanelBody>

                    {/* Icon options */}

                    {iconCheck && (
                        <PanelBody
                            title={__("Icon Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <PremiumSizeUnits
                                    onChangeSizeUnit={newValue =>
                                        setAttributes({ iconUnit: newValue || "px" })
                                    }
                                />
                                <RangeControl
                                    label={__("Size")}
                                    value={iconSize}
                                    onChange={newValue => setAttributes({ iconSize: newValue || "50" })}
                                    initialPosition={50}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <p><strong>{__("Color")}</strong></p>
                                <ColorPalette
                                    value={iconColor}
                                    onChange={newColor => setAttributes({ iconColor: newColor || "#fff" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <p><strong>{__("Background Color")}</strong></p>
                                <ColorPalette
                                    value={iconBackground}
                                    onChange={newColor => setAttributes({ iconBackground: newColor || "transparent" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumBorder
                                    borderType={iconBorderType}
                                    borderWidth={iconBorderWidth}
                                    borderColor={iconBorderColor}
                                    borderRadius={iconBorderRadius}
                                    onChangeType={newType =>
                                        setAttributes({ iconBorderType: newType })
                                    }
                                    onChangeWidth={newWidth =>
                                        setAttributes({ iconBorderWidth: newWidth || "0" })
                                    }
                                    onChangeColor={newColor =>
                                        setAttributes({
                                            iconBorderColor: newColor.hex || "transparent"
                                        })
                                    }
                                    onChangeRadius={newRadius =>
                                        setAttributes({ iconBorderRadius: newRadius || "0" })
                                    }
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumPadding
                                    paddingTop={iconPadTop}
                                    paddingRight={iconPadRight}
                                    paddingBottom={iconPadBottom}
                                    paddingLeft={iconPadLeft}
                                    onChangePadTop={newValue =>
                                        setAttributes({
                                            iconPadTop: newValue || "0"
                                        })
                                    }
                                    onChangePadRight={newValue =>
                                        setAttributes({
                                            iconPadRight: newValue || "0"
                                        })
                                    }
                                    onChangePadBottom={newValue =>
                                        setAttributes({
                                            iconPadBottom: newValue || "0"
                                        })
                                    }
                                    onChangePadLeft={newValue =>
                                        setAttributes({
                                            iconPadLeft: newValue || "0"
                                        })
                                    }
                                    showUnits={true}
                                    onChangePadSizeUnit={newValue =>
                                        setAttributes({ padUnit: newValue || "px" })
                                    }
                                />
                            </div>

                        </PanelBody>
                    )}

                    {/* Title options */}

                    {titleCheck && (
                        <PanelBody
                            title={__("Title Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p>{__("Color")}</p>
                                <ColorPalette
                                    value={titleColor}
                                    onChange={newColor => setAttributes({ titleColor: newColor || "#fff" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTypo
                                    components={["size", "line"]}
                                    size={titleSize}
                                    line={titlelineHeight}
                                    onChangeSize={newSize => setAttributes({ titleSize: newSize })}
                                    onChangeLine={newValue => setAttributes({ titlelineHeight: newValue })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTextShadow
                                    color={titleShadColor}
                                    blur={titleShadBlur}
                                    horizontal={titleShadHorizontal}
                                    vertical={titleShadVertical}
                                    onChangeColor={newColor => setAttributes({ titleShadColor: newColor.hex || "transparent" })}
                                    onChangeBlur={newBlur => setAttributes({ titleShadBlur: newBlur || "0" })}
                                    onChangehHorizontal={newValue => setAttributes({ titleShadHorizontal: newValue || "0" })}
                                    onChangeVertical={newValue => setAttributes({ titleShadVertical: newValue || "0" })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumMargin
                                    directions={["top", "right", "bottom", "left"]}
                                    marginTop={titleMarTop}
                                    marginRight={titleMarRight}
                                    marginBottom={titleMarBottom}
                                    marginLeft={titleMarLeft}
                                    onChangeMarTop={newValue => setAttributes({ titleMarTop: newValue })}
                                    onChangeMarRight={newValue => setAttributes({ titleMarRight: newValue })}
                                    onChangeMarBottom={newValue => setAttributes({ titleMarBottom: newValue })}
                                    onChangeMarLeft={newValue => setAttributes({ titleMarLeft: newValue })}
                                    showUnits={true}
                                    onChangeMarSizeUnit={newValue =>
                                        setAttributes({ titleMarUnit: newValue || "px" })
                                    }
                                />
                            </div>

                        </PanelBody>
                    )}

                    {/* Description options */}

                    {descCheck && (
                        <PanelBody
                            title={__("Description Style")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <div className="premium-control-toggle">
                                <p>{__("Color")}</p>
                                <ColorPalette
                                    value={descColor}
                                    onChange={newColor => setAttributes({ descColor: newColor || "#fff" })}
                                    allowReset={true}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTypo
                                    components={["size", "line"]}
                                    size={descSize}
                                    line={desclineHeight}
                                    onChangeSize={newSize => setAttributes({ descSize: newSize || "16" })}
                                    onChangeLine={newValue => setAttributes({ desclineHeight: newValue })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumTextShadow
                                    color={descShadColor}
                                    blur={descShadBlur}
                                    horizontal={descShadHorizontal}
                                    vertical={descShadVertical}
                                    onChangeColor={newColor => setAttributes({ descShadColor: newColor.hex || "transparent" })}
                                    onChangeBlur={newBlur => setAttributes({ descShadBlur: newBlur || "0" })}
                                    onChangehHorizontal={newValue => setAttributes({ descShadHorizontal: newValue || "0" })}
                                    onChangeVertical={newValue => setAttributes({ descShadVertical: newValue || "0" })}
                                />
                            </div>
                            <div className="premium-control-toggle">
                                <PremiumMargin
                                    directions={["top", "right", "bottom", "left"]}
                                    marginTop={descMarTop}
                                    marginRight={descMarRight}
                                    marginBottom={descMarBottom}
                                    marginLeft={descMarLeft}
                                    onChangeMarTop={newValue => setAttributes({ descMarTop: newValue })}
                                    onChangeMarRight={newValue => setAttributes({ descMarRight: newValue })}
                                    onChangeMarBottom={newValue => setAttributes({ descMarBottom: newValue })}
                                    onChangeMarLeft={newValue => setAttributes({ descMarLeft: newValue })}
                                    showUnits={true}
                                    onChangeMarSizeUnit={newValue =>
                                        setAttributes({ descMarUnit: newValue || "px" })
                                    }
                                />
                            </div>

                        </PanelBody>
                    )}

                    {/* Container Style options */}

                    <PanelBody
                        title={__("Container Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <div className="premium-control-toggle">
                            <p>{__("Overlay Color")}</p>
                            <ColorPalette
                                value={overlayColor}
                                onChange={newValue => setAttributes({ overlayColor: newValue === undefined ? "transparent" : newValue })}
                                allowReset={true}
                                disableAlpha={false}
                            />
                            <RangeControl
                                label={__("Overlay Opacity")}
                                value={overlayOpacity}
                                min="1"
                                max="100"
                                onChange={newOpacity => setAttributes({ overlayOpacity: newOpacity === undefined ? "80" : newOpacity })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <p>{__("Background Color")}</p>
                            <ColorPalette
                                value={containerBgColor}
                                onChange={newValue => setAttributes({ containerBgColor: newValue === undefined ? "transparent" : newValue })}
                                allowReset={true}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumBoxShadow
                                inner={true}
                                color={containerShadowColor}
                                blur={containerShadowBlur}
                                horizontal={containerShadowHorizontal}
                                vertical={containerShadowVertical}
                                position={containerShadowPosition}
                                onChangeColor={newColor => setAttributes({ containerShadowColor: newColor.hex || "transparent" })}
                                onChangeBlur={newBlur => setAttributes({ containerShadowBlur: newBlur || "0" })}
                                onChangehHorizontal={newValue => setAttributes({ containerShadowHorizontal: newValue || "0" })}
                                onChangeVertical={newValue => setAttributes({ containerShadowVertical: newValue || "0" })}
                                onChangePosition={newValue => setAttributes({ containerShadowPosition: newValue })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumPadding
                                paddingTop={containerPadTop}
                                paddingRight={containerPadRight}
                                paddingBottom={containerPadBottom}
                                paddingLeft={containerPadLeft}
                                onChangePadTop={newValue =>
                                    setAttributes({
                                        containerPadTop: newValue || "0"
                                    })
                                }
                                onChangePadRight={newValue =>
                                    setAttributes({
                                        containerPadRight: newValue || "0"
                                    })
                                }
                                onChangePadBottom={newValue =>
                                    setAttributes({
                                        containerPadBottom: newValue || "0"
                                    })
                                }
                                onChangePadLeft={newValue =>
                                    setAttributes({
                                        containerPadLeft: newValue || "0"
                                    })
                                }
                                showUnits={false}
                            />
                        </div>

                    </PanelBody>

                </InspectorControls>
            </div>
        ),
        <div className={`${mainClasses}__container`}>
            <div className={`premium-ihover__list`} style={{ textAlign: imgAlign || "center" }}>

                <div className={`premium-ihover__item-wrap`}
                    style={{
                        borderRadius: (imgBorderRadius || "0") + "%",
                        backgroundColor: containerBgColor || "transparent",
                        paddingTop: (containerPadTop || "0") + "px", 
                        paddingRight: (containerPadRight || "0") + "px",
                        paddingBottom: (containerPadBottom || "0") + "px",
                        paddingLeft: (containerPadLeft || "0") + "px"
                    }}
                >
                    <div className={("premium-ihover__item ") + hoverEffect} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>

                        {(hoverEffect === "style20" && (
                            <div class='premium-ihover__spinner'
                                style={{
                                    width: (imgSize || "300") + "px",
                                    height: (imgSize || "300") + "px",
                                    borderWidth: (spinnerBorderW || "0" + "px"),
                                    borderRadius: (imgBorderRadius || "0") + "%",
                                    borderTopColor: (spinnerFirstColor || "#6ec1e4"),
                                    borderLeftColor: (spinnerFirstColor || "#6ec1e4"),
                                    borderBottomColor: (spinnerSecondColor || "#54595f"),
                                    borderRightColor: (spinnerSecondColor || "#54595f")
                                }}
                            >

                            </div>
                        )
                        )}

                        <div className={`premium-ihover__img-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                            <div className={`premium-ihover__img-front`}>
                                <div className={`premium-ihover__img-inner-wrap`}></div>
                                {imgUrl && (
                                    <img className={`premium-ihover__img`} src={imgUrl}
                                        style={{
                                            width: (imgSize || "300") + "px", height: (imgSize || "300") + "px", borderRadius: (imgBorderRadius || "0") + "%",
                                            filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                        }}
                                    />
                                )}
                                {!imgUrl && <DefaultImage />}
                            </div>
                        </div>
                        <div className={`premium-ihover__info-wrap`} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                            <div className={`premium-ihover__info-back`}
                                style={{
                                    borderRadius: (imgBorderRadius || "0") + "%",
                                    boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`
                                }}
                            >
                                <div className={`premium-ihover__opacity-overlay`}
                                    style={{
                                        backgroundColor: overlayColor || "transparent",
                                        opacity: overlayColor ? 1 - overlayOpacity / 100 : 1
                                    }}
                                >    
                                </div>
                                <div className={`premium-ihover__content`}>
                                    <div className={`premium-ihover__content-wrap`} style={{ textAlign: contentAlign || "center" }}>

                                        {iconCheck && (
                                            <div className={`premium-ihover__icon-wrap`}>

                                                {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                                    <p className={`premium-ihover__icon_alert`}>
                                                        {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                    </p>
                                                )}
                                                {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                    <i
                                                        className={`premium-ihover__icon  ${iconSelected}`}
                                                        style={{
                                                            width: "auto",
                                                            height: "100%",
                                                            fontSize: (iconSize || 50) + (iconUnit || "px"),
                                                            color: iconColor || "#fff",
                                                            backgroundColor: iconBackground || "transparent",
                                                            border: iconBorderType,
                                                            borderWidth: iconBorderWidth + "px",
                                                            borderRadius: iconBorderRadius + "px",
                                                            borderColor: iconBorderColor || "transparent",
                                                            paddingTop: (iconPadTop || "0") + (padUnit || "px"),
                                                            paddingRight: (iconPadRight || "0") + (padUnit || "px"),
                                                            paddingBottom: (iconPadBottom || "0") + (padUnit || "px"),
                                                            paddingLeft: (iconPadLeft || "0") + (padUnit || "px"),
                                                        }}
                                                    />
                                                )}

                                            </div>
                                        )}

                                        {titleCheck && (
                                            <div className={`premium-ihover__title-wrap`}>
                                                <RichText
                                                    tagName="h4"
                                                    className={`premium-ihover__title`}
                                                    value={titleText}
                                                    isSelected={false}
                                                    placeholder="Please Enter your title"
                                                    onChange={newTitle => setAttributes({ titleText: newTitle })}
                                                    style={{
                                                        color: titleColor || "#fff",
                                                        fontSize: titleSize + "px",
                                                        lineHeight: titlelineHeight + "px",
                                                        textShadow: `${titleShadHorizontal}px ${titleShadVertical}px ${titleShadBlur}px ${titleShadColor}`,
                                                        marginTop: titleMarTop + (titleMarUnit || "px"),
                                                        marginBottom: titleMarBottom + (titleMarUnit || "px"),
                                                        marginLeft: titleMarLeft + (titleMarUnit || "px"),
                                                        marginRight: titleMarRight + (titleMarUnit || "px"),
                                                    }}
                                                    keepPlaceholderOnFocus
                                                />
                                            </div>
                                        )}

                                        {descCheck && (
                                            <div className={`premium-ihover__description`}>
                                                <RichText
                                                    tagName="p"
                                                    value={descText}
                                                    isSelected={false}
                                                    placeholder="Please Enter your description"
                                                    onChange={newDesc => setAttributes({ descText: newDesc })}
                                                    style={{
                                                        color: descColor || "#fff",
                                                        fontSize: (descSize || "16") + "px",
                                                        lineHeight: desclineHeight + "px",
                                                        textShadow: `${descShadHorizontal}px ${descShadVertical}px ${descShadBlur}px ${descShadColor}`,
                                                        marginTop: descMarTop + (descMarUnit || "px"),
                                                        marginBottom: descMarBottom + (descMarUnit || "px"),
                                                        marginLeft: descMarLeft + (descMarUnit || "px"),
                                                        marginRight: descMarRight + (descMarUnit || "px"),
                                                    }}
                                                    keepPlaceholderOnFocus
                                                />
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

            {linkCheck && (
                <div style={{ textAlign: imgAlign || "center" }}>
                    <URLInput
                        value={linkUrl}
                        onChange={newUrl => setAttributes({ linkUrl: newUrl })}
                    />
                </div>
            )}
        </div>
    ];

};

export default edit;