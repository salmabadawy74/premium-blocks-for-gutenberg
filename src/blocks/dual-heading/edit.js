import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackground from "../../components/premium-background";
import FONTS from "../../components/premium-fonts";
import styling from './styling';
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";

const { __ } = wp.i18n;

const { Fragment, Component } = wp.element;

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

class edit extends Component {

    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        this.props.setAttributes({ block_id: this.props.clientId.substr(0, 6) })
        this.props.setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-dual-" + this.props.clientId.substr(0, 6)
        );
        document.head.appendChild($style);
    }


    render() {

        const { setAttributes, isSelected, className, clientId: blockId } = this.props;
        const {
            block_id,
            contentAlign,
            firstHeading,
            secondHeading,
            titleTag,
            display,
            firstStyles,
            secondStyles,
            containerStyles,
            link,
            target,
            headingURL,
            hideDesktop,
            hideTablet,
            hideMobile
        } = this.props.attributes;

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
                "https://fonts.googleapis.com/css2?family=" +
                fontFamily.replace(/\s/g, '+').replace(/\"/g, "") + "&display=swap";
            head.appendChild(link);
        };

        const onChangeFirstFamily = fontFamily => {
            saveStyles({ firstFamily: fontFamily }, firstStyles);
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

        let element = document.getElementById(
            "premium-style-dual-" + blockId.substr(0, 6)
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }
        const saveStyles = (value, obj) => {
            const newUpdate = obj.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                obj: newUpdate,
            });
        }

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
                            checked={firstStyles[0].firstClip}
                            onChange={newValue => saveStyles({ firstClip: newValue }, firstStyles)}
                        />
                        {firstClip && (
                            <Fragment>
                                <ToggleControl
                                    label={__("Animated")}
                                    checked={firstStyles[0].firstAnim}
                                    onChange={newValue => saveStyles({ firstAnim: newValue }, firstStyles)}
                                />
                                <ToggleControl
                                    label={__("Stroke")}
                                    checked={firstStyles[0].firstStroke}
                                    onChange={newValue => saveStyles({ firstStroke: newValue }, firstStyles)}
                                />
                            </Fragment>
                        )}
                        <SelectControl
                            label={__("Font Family")}
                            value={firstStyles[0].firstFamily}
                            options={FONTS}
                            onChange={onChangeFirstFamily}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: firstStyles[0].firstSizeUnit,
                                label: __("firstSizeUnit"),
                            }}
                            fontSize={{
                                value: firstStyles[0].firstSize,
                                label: __("firstSize"),
                            }}
                            fontSizeMobile={{
                                value: firstSizeMobile,
                                label: __("firstSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: firstSizeTablet,
                                label: __("firstSizeTablet"),
                            }}
                            weight={firstStyles[0].firstWeight}
                            style={firstStyles[0].firstStyle}
                            spacing={firstStyles[0].firstLetter}
                            upper={firstStyles[0].firstUpper}
                            onChangeWeight={newWeight =>
                                saveStyles({ firstWeight: newWeight || 500 }, firstStyles)
                            }
                            onChangeStyle={newStyle => saveStyles({ firstStyle: newStyle }, firstStyles)}
                            onChangeSpacing={newValue =>
                                saveStyles({ firstLetter: newValue }, firstStyles)
                            }
                            onChangeUpper={check => saveStyles({ firstUpper: check }, firstStyles)}
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
                                                value={firstStyles[0].firstColor}
                                                onChange={newValue =>
                                                    saveStyles({
                                                        firstColor: newValue
                                                    }, firstStyles)
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={firstStyles[0].firstBackground}
                                                onChangeColor={value =>
                                                    saveStyles({
                                                        firstBackground: value,
                                                    }, firstStyles)
                                                }
                                                opacityValue={firstStyles[0].firstOpacity}
                                                onChangeOpacity={value =>
                                                    saveStyles({
                                                        firstOpacity: value,
                                                    })
                                                }
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
                                                value={firstStyles[0].firstColor}
                                                onChange={newValue =>
                                                    saveStyles({
                                                        firstColor: newValue
                                                    }, firstStyles)
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Second Color")}</p>
                                            <ColorPalette
                                                value={firstStyles[0].firstClipColor}
                                                onChange={newValue =>
                                                    saveStyles({
                                                        firstClipColor: newValue
                                                    }, firstStyles)
                                                }
                                                allowReset={true}
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        )}

                        <PremiumBorder
                            borderType={firstStyles[0].firstBorderType}
                            borderWidth={firstStyles[0].firstBorderWidth}
                            top={firstStyles[0].firstBorderTop}
                            right={firstStyles[0].firstBorderRight}
                            bottom={firstStyles[0].firstBorderBottom}
                            left={firstStyles[0].firstBorderLeft}
                            borderColor={firstStyles[0].firstBorderColor}
                            borderRadius={firstStyles[0].firstBorderRadius}
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
                            color={firstStyles[0].firstShadowColor}
                            blur={firstStyles[0].firstShadowBlur}
                            horizontal={firstStyles[0].firstShadowHorizontal}
                            vertical={firstStyles[0].firstShadowVertical}
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
                            value={firstStyles[0].firstMarginL}
                            min="0"
                            max="100"
                            onChange={newMargin =>
                                setAttributes({ firstMarginL: newMargin || "0" })
                            }
                        />
                        <p>{__("Margin Right")}</p>
                        <RangeControl
                            value={firstStyles[0].firstMarginR}
                            min="0"
                            max="100"
                            onChange={newMargin =>
                                setAttributes({ firstMarginR: newMargin || "0" })
                            }
                        />
                        <p>{__("Padding")}</p>
                        <RangeControl
                            value={firstStyles[0].firstPadding}
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
                            checked={secondStyles[0].secondClip}
                            onChange={newValue => setAttributes({ secondClip: newValue })}
                        />
                        {secondClip && (
                            <Fragment>
                                <ToggleControl
                                    label={__("Animated")}
                                    checked={secondStyles[0].secondAnim}
                                    onChange={newValue => setAttributes({ secondAnim: newValue })}
                                />
                                <ToggleControl
                                    label={__('Stroke')}
                                    checked={secondStyles[0].secondStroke}
                                    onChange={newValue => setAttributes({ secondStroke: newValue })}
                                />
                            </Fragment>
                        )}
                        <SelectControl
                            label={__("Font Family")}
                            value={secondStyles[0].secondFamily}
                            options={FONTS}
                            onChange={onChangeSecondFamily}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: secondStyles[0].secondSizeUnit,
                                label: __("secondSizeUnit"),
                            }}
                            fontSize={{
                                value: secondStyles[0].secondSize,
                                label: __("secondSize"),
                            }}
                            fontSizeMobile={{
                                value: secondStyles[0].secondSizeMobile,
                                label: __("secondSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: secondStyles[0].secondSizeTablet,
                                label: __("secondSizeTablet"),
                            }}
                            weight={secondStyles[0].secondWeight}
                            style={secondStyles[0].secondStyle}
                            spacing={secondStyles[0].secondLetter}
                            upper={secondStyles[0].secondUpper}
                            onChangeWeight={newWeight =>
                                saveStyles({ secondWeight: newWeight || 500 }, secondStyles)
                            }
                            onChangeStyle={newStyle => setAttributes({ secondStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                saveStyles({ secondLetter: newValue }, secondStyles)
                            }
                            onChangeUpper={check => saveStyles({ secondUpper: check }, secondStyles)}
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
                                                value={secondStyles[0].secondColor}
                                                onChange={newValue =>
                                                    saveStyles({
                                                        secondColor: newValue || "transparent"
                                                    }, secondStyles)
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={secondStyles[0].secondBackground}
                                                onChangeColor={value =>
                                                    saveStyles({
                                                        secondBackground: value,
                                                    }, secondStyles)
                                                }
                                                opacityValue={secondStyles[0].secondOpacity}
                                                onChangeOpacity={value =>
                                                    saveStyles({
                                                        secondOpacity: value,
                                                    }, secondStyles)
                                                }
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
                                                value={secondStyles[0].secondColor}
                                                onChange={newValue =>
                                                    saveStyles({
                                                        secondColor: newValue || "transparent"
                                                    }, secondStyles)
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Second Color")}</p>
                                            <ColorPalette
                                                value={secondStyles[0].secondClipColor}
                                                onChange={newValue =>
                                                    saveStyles({
                                                        secondClipColor: newValue || "transparent"
                                                    }, secondStyles)
                                                }
                                                allowReset={true}
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        )}

                        <PremiumBorder
                            borderType={secondStyles[0].secondBorderType}
                            borderWidth={secondStyles[0].secondBorderWidth}
                            top={secondStyles[0].secondBorderTop}
                            right={secondStyles[0].secondBorderRight}
                            bottom={secondStyles[0].secondBorderBottom}
                            left={secondStyles[0].secondBorderLeft}
                            borderColor={secondStyles[0].secondBorderColor}
                            borderRadius={secondStyles[0].secondBorderRadius}
                            onChangeType={(newType) =>
                                saveStyles({ secondBorderType: newType }, secondStyles)
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                saveStyles({
                                    secondBorder: true,
                                    secondBorderTop: top,
                                    secondBorderRight: right,
                                    secondBorderBottom: bottom,
                                    secondBorderLeft: left,
                                }, secondStyles)
                            }
                            onChangeColor={(colorValue) =>
                                saveStyles({
                                    secondBorderColor: colorValue.hex || "transparent",
                                }, secondStyles)
                            }
                            onChangeRadius={(newrRadius) =>
                                saveStyles({ secondBorderRadius: newrRadius || "0" }, secondStyles)
                            }
                        />

                        <PremiumTextShadow
                            color={secondStyles[0].secondShadowColor}
                            blur={secondStyles[0].secondShadowBlur}
                            horizontal={secondStyles[0].secondShadowHorizontal}
                            vertical={secondStyles[0].secondShadowVertical}
                            onChangeColor={newColor =>
                                saveStyles({
                                    secondShadowColor: newColor.hex || "transparent"
                                }, secondStyles)
                            }
                            onChangeBlur={newBlur =>
                                saveStyles({ secondShadowBlur: newBlur || "0" }, secondStyles)
                            }
                            onChangehHorizontal={newValue =>
                                saveStyles({ secondShadowHorizontal: newValue || "0" }, secondStyles)
                            }
                            onChangeVertical={newValue =>
                                saveStyles({ secondShadowVertical: newValue || "0" }, secondStyles)
                            }
                        />
                        <p>{__("Margin Left")}</p>
                        <RangeControl
                            value={secondStyles[0].secondMarginL}
                            min="0"
                            max="100"
                            onChange={newMargin =>
                                saveStyles({ secondMarginL: newMargin || "0" }, secondStyles)
                            }
                        />
                        <p>{__("Margin Right")}</p>
                        <RangeControl
                            value={secondStyles[0].secondMarginR}
                            min="0"
                            max="100"
                            onChange={newMargin =>
                                saveStyles({ secondMarginR: newMargin || "0" }, secondStyles)
                            }
                        />
                        <p>{__("Padding")}</p>
                        <RangeControl
                            value={secondStyles[0].secondPadding}
                            min="0"
                            max="100"
                            onChange={newPadding =>
                                saveStyles({ secondPadding: newPadding || "0" }, secondStyles)
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Container Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("Background Color")}</p>
                        <PremiumBackground
                            type="color"
                            colorValue={containerStyles[0].containerBack}
                            onChangeColor={newvalue =>
                                saveStyles({
                                    containerBack: newvalue,
                                }, containerStyles)
                            }
                            opacityValue={containerStyles[0].containerOpacity}
                            onChangeOpacity={value =>
                                saveStyles({ containerOpacity: value }, containerStyles)
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
                                saveStyles({
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
                id={`premium-dheading-block-${block_id}`}
                className={classnames(className,
                    "premium-dheading-block__container", `premium-dheading-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`)}
                style={{
                    textAlign: contentAlign,
                    backgroundColor: containerBack ? hexToRgba(containerBack, containerOpacity) : "transparent",
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
                                backgroundColor: firstClip ? "none" : firstBackground ? hexToRgba(firstBackground, firstOpacity) : "transparent",
                                backgroundImage: firstClip
                                    ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                                    : "none",
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
                                backgroundColor: secondClip ? "none" : secondBackground ? hexToRgba(secondBackground, secondOpacity) : "transparent",
                                backgroundImage: secondClip
                                    ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                                    : "none",
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
    }
};
export default edit;
