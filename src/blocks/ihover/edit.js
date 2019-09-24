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
        linkCheck,
        linkUrl,
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
        containerShadowColor,
        containerShadowBlur,
        containerShadowHorizontal,
        containerShadowVertical,
        containerShadowPosition,

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
            label: __("spinner")
        }
    ];

    // 'style20'       => 'Spinner',

    return [
        isSelected && (
            <BlockControls >
                <AlignmentToolbar
                    label={__('Img Alignment')}
                    value={imgAlign}
                    onChange={newimgAlign => setAttributes({ imgAlign: newimgAlign })}
                />
            </BlockControls>
        ),
        isSelected && (
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
                            label={__("Img Size")}
                            value={imgSize}
                            onChange={newImgSize => setAttributes({ imgSize: newImgSize || "300" })}
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
                            onChange={newImgBorderRadius => setAttributes({ imgBorderRadius: newImgBorderRadius || "50" })}
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
                            onChange={newhoverEffect => setAttributes({ hoverEffect: newhoverEffect })}
                        />
                    </div>
                    <div className="premium-control-toggle">
                        <ToggleControl
                            label={__("Link")}
                            checked={linkCheck}
                            onChange={newLinkCheck => setAttributes({ linkCheck: newLinkCheck })}
                        />
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
                            onChangeBlur={value => setAttributes({ blur: value })}
                            onChangeBright={value => setAttributes({ bright: value })}
                            onChangeContrast={value => setAttributes({ contrast: value })}
                            onChangeSat={value => setAttributes({ saturation: value })}
                            onChangeHue={value => setAttributes({ hue: value })}
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
                        {iconCheck && (
                            <FontIconPicker
                                icons={iconsList["Font Awesome Icons"]}
                                onChange={newIcon => setAttributes({ iconSelected: newIcon || "fa fa-heart" })}
                                value={iconSelected}
                                isMulti={false}
                                appendTo="body"
                                noSelectedPlaceholder={__("Select Icon")}
                            />
                        )}
                    </div>

                    {/* Title options */}
                    <div className="premium-control-toggle">
                        <ToggleControl
                            label={__("Title")}
                            checked={titleCheck}
                            onChange={newValue => setAttributes({ titleCheck: newValue })}
                        />
                        {titleCheck && (
                            <TextControl
                                label={__("Title Text")}
                                value={titleText}
                                onChange={newText => setAttributes({ titleText: newText })}
                            />
                        )}
                    </div>

                    {/* Description options */}
                    <div className="premium-control-toggle">
                        <ToggleControl
                            label={__("Description")}
                            checked={descCheck}
                            onChange={newValue => setAttributes({ descCheck: newValue })}
                        />
                        {descCheck && (
                            <TextareaControl
                                label={__("Description Text")}
                                help="Enter your description"
                                value={descText}
                                onChange={newText => setAttributes({ descText: newText })}
                            />
                        )}
                    </div>
                    <div className="premium-control-toggle">
                        <p><strong>{__("Alignment")}</strong></p>
                        <AlignmentToolbar
                            value={contentAlign}
                            onChange={newContentAlign => setAttributes({ contentAlign: newContentAlign })}
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
                                onChange={newBackColor => setAttributes({ iconBackground: newBackColor || "transparent" })}
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
                                onChangeRadius={newrRadius =>
                                    setAttributes({ iconBorderRadius: newrRadius || "0" })
                                }
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumPadding
                                paddingTop={iconPadTop}
                                paddingRight={iconPadRight}
                                paddingBottom={iconPadBottom}
                                paddingLeft={iconPadLeft}
                                onChangePadTop={newPadTop =>
                                    setAttributes({
                                        iconPadTop: newPadTop || "0"
                                    })
                                }
                                onChangePadRight={newPadRight =>
                                    setAttributes({
                                        iconPadRight: newPadRight || "0"
                                    })
                                }
                                onChangePadBottom={newPadBottom =>
                                    setAttributes({
                                        iconPadBottom: newPadBottom || "0"
                                    })
                                }
                                onChangePadLeft={newPadleft =>
                                    setAttributes({
                                        iconPadLeft: newPadleft || "0"
                                    })
                                }
                                showUnits={true}
                                onChangePadSizeUnit={newvalue =>
                                    setAttributes({ padUnit: newvalue || "px" })
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
                                onChangeLine={newlineHeight => setAttributes({ titlelineHeight: newlineHeight })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumTextShadow
                                color={titleShadColor}
                                blur={titleShadBlur}
                                horizontal={titleShadHorizontal}
                                vertical={titleShadVertical}
                                onChangeColor={newShadColor => setAttributes({ titleShadColor: newShadColor.hex || "transparent" })}
                                onChangeBlur={newShadBlur => setAttributes({ titleShadBlur: newShadBlur || "0" })}
                                onChangehHorizontal={newShadHorizontal => setAttributes({ titleShadHorizontal: newShadHorizontal || "0" })}
                                onChangeVertical={newShadVertical => setAttributes({ titleShadVertical: newShadVertical || "0" })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumMargin
                                directions={["top", "right", "bottom", "left"]}
                                marginTop={titleMarTop}
                                marginRight={titleMarRight}
                                marginBottom={titleMarBottom}
                                marginLeft={titleMarLeft}
                                onChangeMarTop={newMarTop => setAttributes({ titleMarTop: newMarTop })}
                                onChangeMarRight={newMarRight => setAttributes({ titleMarRight: newMarRight })}
                                onChangeMarBottom={newMarBottom => setAttributes({ titleMarBottom: newMarBottom })}
                                onChangeMarLeft={newMarLeft => setAttributes({ titleMarLeft: newMarLeft })}
                                showUnits={true}
                                onChangeMarSizeUnit={newMarUnit =>
                                    setAttributes({ titleMarUnit: newMarUnit || "px" })
                                }
                            />
                        </div>

                    </PanelBody>
                )}

                {/* Description options */}

                {descCheck && (
                    <PanelBody
                        title={__("Descroption Style")}
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
                                onChangeLine={newlineHeight => setAttributes({ desclineHeight: newlineHeight })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumTextShadow
                                color={descShadColor}
                                blur={descShadBlur}
                                horizontal={descShadHorizontal}
                                vertical={descShadVertical}
                                onChangeColor={newShadColor => setAttributes({ descShadColor: newShadColor.hex || "transparent" })}
                                onChangeBlur={newShadBlur => setAttributes({ descShadBlur: newShadBlur || "0" })}
                                onChangehHorizontal={newShadHorizontal => setAttributes({ descShadHorizontal: newShadHorizontal || "0" })}
                                onChangeVertical={newShadVertical => setAttributes({ descShadVertical: newShadVertical || "0" })}
                            />
                        </div>
                        <div className="premium-control-toggle">
                            <PremiumMargin
                                directions={["top", "right", "bottom", "left"]}
                                marginTop={descMarTop}
                                marginRight={descMarRight}
                                marginBottom={descMarBottom}
                                marginLeft={descMarLeft}
                                onChangeMarTop={newMarTop => setAttributes({ descMarTop: newMarTop })}
                                onChangeMarRight={newMarRight => setAttributes({ descMarRight: newMarRight })}
                                onChangeMarBottom={newMarBottom => setAttributes({ descMarBottom: newMarBottom })}
                                onChangeMarLeft={newMarLeft => setAttributes({ descMarLeft: newMarLeft })}
                                showUnits={true}
                                onChangeMarSizeUnit={newMarUnit =>
                                    setAttributes({ descMarUnit: newMarUnit || "px" })
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
                        />
                        <RangeControl
                            label={__("Overlay Opacity")}
                            value={overlayOpacity}
                            min="1"
                            max="100"
                            onChange={newOpacity => setAttributes({ overlayOpacity: newOpacity === undefined ? "50" : newOpacity })}
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

                </PanelBody>

            </InspectorControls>
        ),
        <div className="premium-ihover-container"
            style={{
                backgroundColor: overlayColor || "transparent", opacity: overlayColor ? 1 - overlayOpacity / 100 : 1,
                boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`
            }}
        >
            <div className="premium-ihover-list" style={{ textAlign: imgAlign || "center" }}>
                <div className="premium-ihover-item-wrap" style={{ borderRadius: (imgBorderRadius || "50") + "%" }}>
                    <div className={("premium-ihover-item ") + hoverEffect} style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>

                        <div className="premium-ihover-img-wrap" style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                            <div className="premium-ihover-img-front">
                                <div className="premium-ihover-img-inner-wrap"></div>
                                {imgUrl && (
                                    <img className="premium-ihover-img" src={imgUrl}
                                        style={{
                                            width: (imgSize || "300") + "px", height: (imgSize || "300") + "px", borderRadius: (imgBorderRadius || "50") + "%",
                                            filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                                        }}
                                    />
                                )}
                                {!imgUrl && <DefaultImage />}
                            </div>
                        </div>
                        <div className="premium-ihover-info-wrap" style={{ width: (imgSize || "300") + "px", height: (imgSize || "300") + "px" }}>
                            <div className="premium-ihover-info-back" style={{ borderRadius: (imgBorderRadius || "50") + "%" }}>
                                <div className="premium-ihover-content">
                                    <div className="premium-ihover-content-wrap" style={{ textAlign: contentAlign || "center" }}>

                                        {iconCheck && (
                                            <div className="premium-ihover-icon-wrap">

                                                {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                                    <p className={`premium-ihover-icon_alert`}>
                                                        {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                    </p>
                                                )}
                                                {iconType === "dash" && 1 == FontAwesomeEnabled && (
                                                    <p className={`premium-ihover-icon_alert`}>
                                                        {__("Please Choose Only Font Awesome  Icons")}
                                                    </p>
                                                )}
                                                {(iconType === "fa" || 1 == FontAwesomeEnabled) && (
                                                    <i
                                                        className={`premium-ihover-icon  ${iconSelected}`}
                                                        style={{
                                                            fontSize: (iconSize || 50) + (iconUnit || "px"),
                                                            color: iconColor || "#fff",
                                                            backgroundColor: iconBackground || "transparent",
                                                            border: iconBorderType,
                                                            borderWidth: iconBorderWidth + "px",
                                                            borderRadius: iconBorderRadius + "px",
                                                            borderColor: iconBorderColor || "transparent" ,
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
                                            <div className="premium-ihover-title-wrap">
                                                <RichText
                                                    tagName="h4"
                                                    className={`premium-ihover-title`}
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

                                        <div className="premium-ihover-divider">
                                            <span className="premium-ihover-divider-line"></span>
                                        </div>

                                        {descCheck && (
                                            <div className="premium-ihover-description">
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

            {/* this line only for test */}
            <p style={{ textAlign: "center" }}>hello ihover effect {hoverEffect}</p>
            {linkCheck && (
                <URLInput
                    value={linkUrl}
                    onChange={newLinkUrl => setAttributes({ linkUrl: newLinkUrl })}
                />
            )}
        </div>
    ];

};

export default edit;