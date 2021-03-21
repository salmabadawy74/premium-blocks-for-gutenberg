import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackgroud from "../../components/premium-background";
import FONTS from "../../components/premium-fonts";

const { __ } = wp.i18n;

const { Fragment } = wp.element;

const {
    PanelBody,
    SelectControl,
    TextControl,
    RangeControl,
    ToggleControl,
    Dropdown,
    Button
} = wp.components;
const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    ColorPalette,
    URLInput
} = wp.blockEditor;

const edit = props => {
    const { setAttributes, isSelected, className } = props;

    const {
        contentAlign,
        firstHeading,
        secondHeading,
        display,
        firstColor,
        firstBackground,
        firstSize,
        firstFamily,
        firstStyle,
        firstUpper,
        firstLetter,
        firstWeight,
        firstBorderType,
        firstBorderWidth,
        firstBorderTop,
        firstBorderRight,
        firstBorderBottom,
        firstBorderLeft,
        firstBorderRadius,
        firstBorderColor,
        firstPadding,
        firstMarginR,
        firstMarginL,
        firstClip,
        firstAnim,
        firstStroke,
        firstClipColor,
        firstShadowBlur,
        firstShadowColor,
        firstShadowHorizontal,
        firstShadowVertical,
        secondColor,
        secondBackground,
        secondSize,
        secondFamily,
        secondLetter,
        secondUpper,
        secondWeight,
        secondStyle,
        secondBorderType,
        secondBorderWidth,
        secondBorderTop,
        secondBorderRight,
        secondBorderBottom,
        secondBorderLeft,
        secondBorderRadius,
        secondBorderColor,
        secondPadding,
        secondMarginL,
        secondMarginR,
        secondClip,
        secondStroke,
        secondAnim,
        secondClipColor,
        secondShadowBlur,
        secondShadowColor,
        secondShadowHorizontal,
        secondShadowVertical,
        link,
        target,
        headingURL,
        containerBack,
        imageID,
        imageURL,
        fixed,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        containerBorderType,
        containerBorderWidth,
        containerBorderTop,
        containerBorderRight,
        containerBorderBottom,
        containerBorderLeft,
        containerBorderRadius,
        containerBorderColor,
        containerBorder,
        firstBorder,
        secondBorder,
    } = props.attributes;

    const DISPLAY = [
        {
            value: "inline",
            label: __("Inline")
        },
        {
            value: "block",
            label: __("Block")
        }
    ];

    const addFontToHead = fontFamily => {
        const head = document.head;
        const link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href =
            "https://fonts.googleapis.com/css?family=" +
            fontFamily.replace(/\s+/g, "+") +
            ":" +
            "regular";
        head.appendChild(link);
    };

    const onChangeFirstFamily = fontFamily => {
        setAttributes({ firstFamily: fontFamily });
        if (!fontFamily) {
            return;
        }

        addFontToHead(fontFamily);
    };

    const onChangeSecondFamily = fontFamily => {
        setAttributes({ secondFamily: fontFamily });
        if (!fontFamily) {
            return;
        }

        addFontToHead(fontFamily);
    };

    const mainClasses = classnames(
        className,
        "premium-dheading-block__container"
    );

    return [
        isSelected && (
            <BlockControls key="controls">
                <AlignmentToolbar
                    value={contentAlign}
                    onChange={newAlign => setAttributes({ contentAlign: newAlign })}
                />
            </BlockControls>
        ),
        isSelected && (
            <InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("General Settings")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <TextControl
                        label={__("First Heading")}
                        type="url"
                        value={firstHeading}
                        onChange={value => setAttributes({ firstHeading: value })}
                    />
                    <TextControl
                        label={__("Second Heading")}
                        type="url"
                        value={secondHeading}
                        onChange={value => setAttributes({ secondHeading: value })}
                    />

                    <SelectControl
                        label={__("Display")}
                        value={display}
                        options={DISPLAY}
                        onChange={value => setAttributes({ display: value })}
                    />
                    <ToggleControl
                        label={__("Link")}
                        checked={link}
                        onChange={newValue => setAttributes({ link: newValue })}
                    />
                    {link && (
                        <ToggleControl
                            label={__("Open link in new tab")}
                            checked={target}
                            onChange={newValue => setAttributes({ target: newValue })}
                        />
                    )}
                </PanelBody>
                <PanelBody
                    title={__("First Heading Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ToggleControl
                        label={__("Clipped")}
                        checked={firstClip}
                        onChange={newValue => setAttributes({ firstClip: newValue })}
                    />
                    {firstClip && (
                        <Fragment>
                            <ToggleControl
                                label={__("Animated")}
                                checked={firstAnim}
                                onChange={newValue => setAttributes({ firstAnim: newValue })}
                            />
                            <ToggleControl
                                label={__("Stroke")}
                                checked={firstStroke}
                                onChange={newValue => setAttributes({ firstStroke: newValue })}
                            />
                        </Fragment>
                    )}
                    <SelectControl
                        label={__("Font Family")}
                        value={firstFamily}
                        options={FONTS}
                        onChange={onChangeFirstFamily}
                    />
                    <PremiumTypo
                        components={["size", "weight", "style", "upper", "spacing"]}
                        size={firstSize}
                        weight={firstWeight}
                        style={firstStyle}
                        spacing={firstLetter}
                        upper={firstUpper}
                        onChangeSize={newSize =>
                            setAttributes({ firstSize: newSize || 20 })
                        }
                        onChangeWeight={newWeight =>
                            setAttributes({ firstWeight: newWeight || 500 })
                        }
                        onChangeStyle={newStyle => setAttributes({ firstStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ firstLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ firstUpper: check })}
                    />

                    {!firstClip && (
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
                                        <p>{__("Text Color")}</p>
                                        <ColorPalette
                                            value={firstColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    firstColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Background Color")}</p>
                                        <ColorPalette
                                            value={firstBackground}
                                            onChange={newValue =>
                                                setAttributes({
                                                    firstBackground: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
                    )}

                    {firstClip && (
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
                                        <p>{__("First Color")}</p>
                                        <ColorPalette
                                            value={firstColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    firstColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Second Color")}</p>
                                        <ColorPalette
                                            value={firstClipColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    firstClipColor: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
                    )}

                    <PremiumBorder
                        borderType={firstBorderType}
                        borderWidth={firstBorderWidth}
                        top={firstBorderTop}
                        right={firstBorderRight}
                        bottom={firstBorderBottom}
                        left={firstBorderLeft}
                        borderColor={firstBorderColor}
                        borderRadius={firstBorderRadius}
                        onChangeType={(newType) =>
                            setAttributes({ firstBorderType: newType })
                        }
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                firstBorder: true,
                                firstBorderTop: top,
                                firstBorderRight: right,
                                firstBorderBottom: bottom,
                                firstBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            setAttributes({
                                firstBorderColor: colorValue.hex || "transparent",
                            })
                        }
                        onChangeRadius={(newrRadius) =>
                            setAttributes({ firstBorderRadius: newrRadius || "0" })
                        }
                    />

                    <PremiumTextShadow
                        color={firstShadowColor}
                        blur={firstShadowBlur}
                        horizontal={firstShadowHorizontal}
                        vertical={firstShadowVertical}
                        onChangeColor={newColor =>
                            setAttributes({ firstShadowColor: newColor.hex || "transparent" })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({ firstShadowBlur: newBlur || "0" })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({ firstShadowHorizontal: newValue || "0" })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({ firstShadowVertical: newValue || "0" })
                        }
                    />

                    <p>{__("Margin Left")}</p>
                    <RangeControl
                        value={firstMarginL}
                        min="0"
                        max="100"
                        onChange={newMargin =>
                            setAttributes({ firstMarginL: newMargin || "0" })
                        }
                    />
                    <p>{__("Margin Right")}</p>
                    <RangeControl
                        value={firstMarginR}
                        min="0"
                        max="100"
                        onChange={newMargin =>
                            setAttributes({ firstMarginR: newMargin || "0" })
                        }
                    />
                    <p>{__("Padding")}</p>
                    <RangeControl
                        value={firstPadding}
                        min="0"
                        max="100"
                        onChange={newPadding =>
                            setAttributes({ firstPadding: newPadding || "0" })
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Second Heading Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ToggleControl
                        label={__("Clipped")}
                        checked={secondClip}
                        onChange={newValue => setAttributes({ secondClip: newValue })}
                    />
                    {secondClip && (
                        <Fragment>
                            <ToggleControl
                                label={__("Animated")}
                                checked={secondAnim}
                                onChange={newValue => setAttributes({ secondAnim: newValue })}
                            />
                            <ToggleControl
                                label={__('Stroke')}
                                checked={secondStroke}
                                onChange={newValue => setAttributes({ secondStroke: newValue })}
                            />
                        </Fragment>
                    )}
                    <SelectControl
                        label={__("Font Family")}
                        value={secondFamily}
                        options={FONTS}
                        onChange={onChangeSecondFamily}
                    />
                    <PremiumTypo
                        components={["size", "weight", "style", "upper", "spacing"]}
                        size={secondSize}
                        weight={secondWeight}
                        style={secondStyle}
                        spacing={secondLetter}
                        upper={secondUpper}
                        onChangeSize={newSize =>
                            setAttributes({ secondSize: newSize || 20 })
                        }
                        onChangeWeight={newWeight =>
                            setAttributes({ secondWeight: newWeight || 500 })
                        }
                        onChangeStyle={newStyle => setAttributes({ secondStyle: newStyle })}
                        onChangeSpacing={newValue =>
                            setAttributes({ secondLetter: newValue })
                        }
                        onChangeUpper={check => setAttributes({ secondUpper: check })}
                    />

                    {!secondClip && (
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
                                        <p>{__("Text Color")}</p>
                                        <ColorPalette
                                            value={secondColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    secondColor: newValue || "transparent"
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Background Color")}</p>
                                        <ColorPalette
                                            value={secondBackground}
                                            onChange={newValue =>
                                                setAttributes({
                                                    secondBackground: newValue
                                                })
                                            }
                                            allowReset={true}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
                    )}
                    {secondClip && (
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
                                        <p>{__("First Color")}</p>
                                        <ColorPalette
                                            value={secondColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    secondColor: newValue || "transparent"
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Second Color")}</p>
                                        <ColorPalette
                                            value={secondClipColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    secondClipColor: newValue || "transparent"
                                                })
                                            }
                                            allowReset={true}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
                    )}

                    <PremiumBorder
                        borderType={secondBorderType}
                        borderWidth={secondBorderWidth}
                        top={secondBorderTop}
                        right={secondBorderRight}
                        bottom={secondBorderBottom}
                        left={secondBorderLeft}
                        borderColor={secondBorderColor}
                        borderRadius={secondBorderRadius}
                        onChangeType={(newType) =>
                            setAttributes({ secondBorderType: newType })
                        }
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                secondBorder: true,
                                secondBorderTop: top,
                                secondBorderRight: right,
                                secondBorderBottom: bottom,
                                secondBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            setAttributes({
                                secondBorderColor: colorValue.hex || "transparent",
                            })
                        }
                        onChangeRadius={(newrRadius) =>
                            setAttributes({ secondBorderRadius: newrRadius || "0" })
                        }
                    />

                    <PremiumTextShadow
                        color={secondShadowColor}
                        blur={secondShadowBlur}
                        horizontal={secondShadowHorizontal}
                        vertical={secondShadowVertical}
                        onChangeColor={newColor =>
                            setAttributes({
                                secondShadowColor: newColor.hex || "transparent"
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({ secondShadowBlur: newBlur || "0" })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({ secondShadowHorizontal: newValue || "0" })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({ secondShadowVertical: newValue || "0" })
                        }
                    />
                    <p>{__("Margin Left")}</p>
                    <RangeControl
                        value={secondMarginL}
                        min="0"
                        max="100"
                        onChange={newMargin =>
                            setAttributes({ secondMarginL: newMargin || "0" })
                        }
                    />
                    <p>{__("Margin Right")}</p>
                    <RangeControl
                        value={secondMarginR}
                        min="0"
                        max="100"
                        onChange={newMargin =>
                            setAttributes({ secondMarginR: newMargin || "0" })
                        }
                    />
                    <p>{__("Padding")}</p>
                    <RangeControl
                        value={secondPadding}
                        min="0"
                        max="100"
                        onChange={newPadding =>
                            setAttributes({ secondPadding: newPadding || "0" })
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Container Style")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <p>{__("Background Color")}</p>
                    <ColorPalette
                        value={containerBack}
                        onChange={newValue =>
                            setAttributes({
                                containerBack: newValue || "transparent"
                            })
                        }
                        allowReset={true}
                    />
                    <PremiumBackgroud
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

                    <PremiumBorder
                        borderType={containerBorderType}
                        borderWidth={containerBorderWidth}
                        top={containerBorderTop}
                        right={containerBorderRight}
                        bottom={containerBorderBottom}
                        left={containerBorderLeft}
                        borderColor={containerBorderColor}
                        borderRadius={containerBorderRadius}
                        onChangeType={(newType) =>
                            setAttributes({ containerBorderType: newType })
                        }
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                containerBorder: true,
                                containerBorderTop: top,
                                containerBorderRight: right,
                                containerBorderBottom: bottom,
                                containerBorderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) =>
                            setAttributes({
                                containerBorderColor: colorValue.hex,
                            })
                        }
                        onChangeRadius={(newrRadius) =>
                            setAttributes({ containerBorderRadius: newrRadius })
                        }
                    />
                </PanelBody>
            </InspectorControls>
        ),

        <div
            className={`${mainClasses}`}
            style={{
                textAlign: contentAlign,
                backgroundColor: containerBack,
                backgroundImage: imageURL ? `url('${imageURL}')` : 'none',
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
                backgroundAttachment: fixed ? "fixed" : "unset",
                borderStyle: containerBorderType,
                borderWidth: containerBorder
                    ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
                    : containerBorderWidth + "px",
                borderRadius: containerBorderRadius + "px",
                borderColor: containerBorderColor
            }}
        >
            <div className={`premium-dheading-block__wrap`}>
                <h2 className={`premium-dheading-block__title`}>
                    <span
                        className={`premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim} premium-headings-${firstStroke}`}
                        style={{
                            display: display,
                            color: firstColor,
                            backgroundColor: firstClip ? "none" : firstBackground,
                            backgroundImage: firstClip
                                ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                : "none",
                            fontSize: firstSize + "px",
                            fontFamily: firstFamily,
                            letterSpacing: firstLetter + "px",
                            textTransform: firstUpper ? "uppercase" : "none",
                            fontStyle: firstStyle,
                            fontWeight: firstWeight,
                            borderStyle: firstBorderType,
                            borderWidth: firstBorder
                                ? `${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px`
                                : firstBorderWidth + "px",
                            borderRadius: firstBorderRadius + "px",
                            borderColor: firstBorderColor,
                            padding: firstPadding + "px",
                            marginLeft: firstMarginL + "px",
                            marginRight: firstMarginR + "px",
                            textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
                        }}
                    >
                        {firstHeading}
                    </span>
                    <span
                        className={`premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim} premium-headings-${secondStroke}`}
                        style={{
                            display: display,
                            color: secondColor,
                            backgroundColor: secondClip ? "none" : secondBackground,
                            backgroundImage: secondClip
                                ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                : "none",
                            fontSize: secondSize + "px",
                            fontFamily: secondFamily,
                            letterSpacing: secondLetter + "px",
                            textTransform: secondUpper ? "uppercase" : "none",
                            fontStyle: secondStyle,
                            fontWeight: secondWeight,
                            borderStyle: secondBorderType,
                            borderWidth: secondBorder
                                ? `${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px`
                                : secondBorderWidth + "px",
                            borderRadius: secondBorderRadius + "px",
                            borderColor: secondBorderColor,
                            padding: secondPadding + "px",
                            marginLeft: secondMarginL + "px",
                            marginRight: secondMarginR + "px",
                            textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
                        }}
                    >
                        {secondHeading}
                    </span>
                </h2>
            </div>
            {link && isSelected && (
                <URLInput
                    value={headingURL}
                    onChange={newUrl => setAttributes({ headingURL: newUrl })}
                />
            )}
        </div>
    ];
};
export default edit;
