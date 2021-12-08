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
const { withSelect } = wp.data


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
            saveFirstStyles({ firstFamily: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        const onChangeSecondFamily = fontFamily => {
            saveSecondStyles({ secondFamily: fontFamily });
            if (!fontFamily) {
                return;
            }
            addFontToHead(fontFamily);
        };

        let element = document.getElementById(
            "premium-style-dual-" + blockId.substr(0, 6)
        );

        const saveFirstStyles = (value) => {
            const newUpdate = firstStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                firstStyles: newUpdate,
            });
        }
        const saveSecondStyles = (value) => {
            const newUpdate = secondStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                secondStyles: newUpdate,
            });
        }
        const saveContainerStyles = (value) => {
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
                            onChange={newValue => saveFirstStyles({ firstClip: newValue }, firstStyles)}
                        />
                        {firstStyles[0].firstClip && (
                            <Fragment>
                                <ToggleControl
                                    label={__("Animated")}
                                    checked={firstStyles[0].firstAnim}
                                    onChange={newValue => saveFirstStyles({ firstAnim: newValue })}
                                />
                                <ToggleControl
                                    label={__("Stroke")}
                                    checked={firstStyles[0].firstStroke}
                                    onChange={newValue => saveFirstStyles({ firstStroke: newValue })}
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
                                value: firstStyles[0].firstSizeMobile,
                                label: __("firstSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: firstStyles[0].firstSizeTablet,
                                label: __("firstSizeTablet"),
                            }}
                            weight={firstStyles[0].firstWeight}
                            style={firstStyles[0].firstStyle}
                            spacing={firstStyles[0].firstLetter}
                            upper={firstStyles[0].firstUpper}
                            onChangeWeight={newWeight =>
                                saveFirstStyles({ firstWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle => saveFirstStyles({ firstStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                saveFirstStyles({ firstLetter: newValue })
                            }
                            onChangeUpper={check => saveFirstStyles({ firstUpper: check })}
                        />

                        {!firstStyles[0].firstClip && (
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
                                                    saveFirstStyles({
                                                        firstColor: newValue
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={firstStyles[0].firstBackground}
                                                onChangeColor={value =>
                                                    saveFirstStyles({
                                                        firstBackground: value,
                                                    })
                                                }
                                                opacityValue={firstStyles[0].firstOpacity}
                                                onChangeOpacity={value =>
                                                    saveFirstStyles({
                                                        firstOpacity: value,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        )}

                        {firstStyles[0].firstClip && (
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
                                                    saveFirstStyles({
                                                        firstColor: newValue
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Second Color")}</p>
                                            <ColorPalette
                                                value={firstStyles[0].firstClipColor}
                                                onChange={newValue =>
                                                    saveFirstStyles({
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
                            borderType={firstStyles[0].firstBorderType}
                            borderWidth={firstStyles[0].firstBorderWidth}
                            top={firstStyles[0].firstBorderTop}
                            right={firstStyles[0].firstBorderRight}
                            bottom={firstStyles[0].firstBorderBottom}
                            left={firstStyles[0].firstBorderLeft}
                            borderColor={firstStyles[0].firstBorderColor}
                            borderRadius={firstStyles[0].firstBorderRadius}
                            onChangeType={(newType) =>
                                saveFirstStyles({ firstBorderType: newType })
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
                                saveFirstStyles({
                                    firstBorderColor: colorValue.hex || "transparent",
                                })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveFirstStyles({ firstBorderRadius: newrRadius || "0" })
                            }
                        />

                        <PremiumTextShadow
                            color={firstStyles[0].firstShadowColor}
                            blur={firstStyles[0].firstShadowBlur}
                            horizontal={firstStyles[0].firstShadowHorizontal}
                            vertical={firstStyles[0].firstShadowVertical}
                            onChangeColor={newColor =>
                                saveFirstStyles({ firstShadowColor: newColor.hex || "transparent" })
                            }
                            onChangeBlur={newBlur =>
                                saveFirstStyles({ firstShadowBlur: newBlur || "0" })
                            }
                            onChangehHorizontal={newValue =>
                                saveFirstStyles({ firstShadowHorizontal: newValue || "0" })
                            }
                            onChangeVertical={newValue =>
                                saveFirstStyles({ firstShadowVertical: newValue || "0" })
                            }
                        />

                        <p>{__("Margin Left")}</p>
                        <RangeControl
                            value={firstStyles[0].firstMarginL}
                            min="0"
                            max="100"
                            onChange={newMargin =>
                                saveFirstStyles({ firstMarginL: newMargin || "0" })
                            }
                        />
                        <p>{__("Margin Right")}</p>
                        <RangeControl
                            value={firstStyles[0].firstMarginR}
                            min="0"
                            max="100"
                            onChange={newMargin =>
                                saveFirstStyles({ firstMarginR: newMargin || "0" })
                            }
                        />
                        <p>{__("Padding")}</p>
                        <RangeControl
                            value={firstStyles[0].firstPadding}
                            min="0"
                            max="100"
                            onChange={newPadding =>
                                saveFirstStyles({ firstPadding: newPadding || "0" })
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
                            onChange={newValue => saveSecondStyles({ secondClip: newValue })}
                        />
                        {secondStyles[0].secondClip && (
                            <Fragment>
                                <ToggleControl
                                    label={__("Animated")}
                                    checked={secondStyles[0].secondAnim}
                                    onChange={newValue => saveSecondStyles({ secondAnim: newValue })}
                                />
                                <ToggleControl
                                    label={__('Stroke')}
                                    checked={secondStyles[0].secondStroke}
                                    onChange={newValue => saveSecondStyles({ secondStroke: newValue })}
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
                            setAttributes={saveSecondStyles}
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
                                saveSecondStyles({ secondWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle => saveSecondStyles({ secondStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                saveSecondStyles({ secondLetter: newValue })
                            }
                            onChangeUpper={check => saveSecondStyles({ secondUpper: check })}
                        />

                        {!secondStyles[0].secondClip && (
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
                                                    saveSecondStyles({
                                                        secondColor: newValue || "transparent"
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={secondStyles[0].secondBackground}
                                                onChangeColor={value =>
                                                    saveSecondStyles({
                                                        secondBackground: value,
                                                    })
                                                }
                                                opacityValue={secondStyles[0].secondOpacity}
                                                onChangeOpacity={value =>
                                                    saveSecondStyles({
                                                        secondOpacity: value,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        )}
                        {secondStyles[0].secondClip && (
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
                                                    saveSecondStyles({
                                                        secondColor: newValue || "transparent"
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                            <p>{__("Second Color")}</p>
                                            <ColorPalette
                                                value={secondStyles[0].secondClipColor}
                                                onChange={newValue =>
                                                    saveSecondStyles({
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
                            borderType={secondStyles[0].secondBorderType}
                            borderWidth={secondStyles[0].secondBorderWidth}
                            top={secondStyles[0].secondBorderTop}
                            right={secondStyles[0].secondBorderRight}
                            bottom={secondStyles[0].secondBorderBottom}
                            left={secondStyles[0].secondBorderLeft}
                            borderColor={secondStyles[0].secondBorderColor}
                            borderRadius={secondStyles[0].secondBorderRadius}
                            onChangeType={(newType) =>
                                saveSecondStyles({ secondBorderType: newType })
                            }
                            onChangeWidth={({ top, right, bottom, left }) =>
                                saveSecondStyles({
                                    secondBorder: true,
                                    secondBorderTop: top,
                                    secondBorderRight: right,
                                    secondBorderBottom: bottom,
                                    secondBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                saveSecondStyles({
                                    secondBorderColor: colorValue.hex || "transparent",
                                })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveSecondStyles({ secondBorderRadius: newrRadius || "0" })
                            }
                        />

                        <PremiumTextShadow
                            color={secondStyles[0].secondShadowColor}
                            blur={secondStyles[0].secondShadowBlur}
                            horizontal={secondStyles[0].secondShadowHorizontal}
                            vertical={secondStyles[0].secondShadowVertical}
                            onChangeColor={newColor =>
                                saveSecondStyles({
                                    secondShadowColor: newColor.hex || "transparent"
                                })
                            }
                            onChangeBlur={newBlur =>
                                saveSecondStyles({ secondShadowBlur: newBlur || "0" })
                            }
                            onChangehHorizontal={newValue =>
                                saveSecondStyles({ secondShadowHorizontal: newValue || "0" })
                            }
                            onChangeVertical={newValue =>
                                saveSecondStyles({ secondShadowVertical: newValue || "0" })
                            }
                        />
                        <p>{__("Margin Left")}</p>
                        <RangeControl
                            value={secondStyles[0].secondMarginL}
                            min="0"
                            max="100"
                            onChange={newMargin =>
                                saveSecondStyles({ secondMarginL: newMargin || "0" })
                            }
                        />
                        <p>{__("Margin Right")}</p>
                        <RangeControl
                            value={secondStyles[0].secondMarginR}
                            min="0"
                            max="100"
                            onChange={newMargin =>
                                saveSecondStyles({ secondMarginR: newMargin || "0" })
                            }
                        />
                        <p>{__("Padding")}</p>
                        <RangeControl
                            value={secondStyles[0].secondPadding}
                            min="0"
                            max="100"
                            onChange={newPadding =>
                                saveSecondStyles({ secondPadding: newPadding || "0" })
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
                                saveContainerStyles({
                                    containerBack: newvalue,
                                })
                            }
                            opacityValue={containerStyles[0].containerOpacity}
                            onChangeOpacity={value =>
                                saveContainerStyles({ containerOpacity: value })
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
                                saveContainerStyles({
                                    imageID: media.id,
                                    imageURL: media.url
                                });
                            }}
                            onRemoveImage={value =>
                                saveContainerStyles({ imageURL: "", imageID: "" })
                            }
                            onChangeBackPos={newValue =>
                                saveContainerStyles({ backgroundPosition: newValue })
                            }
                            onchangeBackRepeat={newValue =>
                                saveContainerStyles({ backgroundRepeat: newValue })
                            }
                            onChangeBackSize={newValue =>
                                saveContainerStyles({ backgroundSize: newValue })
                            }
                            onChangeFixed={check => saveContainerStyles({ fixed: check })}
                        />

                        <PremiumBorder
                            borderType={containerStyles[0].containerBorderType}
                            borderWidth={containerStyles[0].containerBorderWidth}
                            top={containerStyles[0].containerBorderTop}
                            right={containerStyles[0].containerBorderRight}
                            bottom={containerStyles[0].containerBorderBottom}
                            left={containerStyles[0].containerBorderLeft}
                            borderColor={containerStyles[0].containerBorderColor}
                            borderRadius={containerStyles[0].containerBorderRadius}
                            onChangeType={(newType) =>
                                saveContainerStyles({ containerBorderType: newType })
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
                                saveContainerStyles({
                                    containerBorderColor: colorValue.hex,
                                })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveContainerStyles({ containerBorderRadius: newrRadius })
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
                    backgroundColor: containerStyles[0].containerBack ? hexToRgba(containerStyles[0].containerBack, containerStyles[0].containerOpacity) : "transparent",
                    backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
                    backgroundRepeat: containerStyles[0].backgroundRepeat,
                    backgroundPosition: containerStyles[0].backgroundPosition,
                    backgroundSize: containerStyles[0].backgroundSize,
                    backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                    borderStyle: containerStyles[0].containerBorderType,
                    borderWidth: containerStyles[0].containerBorder
                        ? `${containerStyles[0].containerBorderTop}px ${containerStyles[0].containerBorderRight}px ${containerStyles[0].containerBorderBottom}px ${containerStyles[0].containerBorderLeft}px`
                        : containerStyles[0].containerBorderWidth + "px",
                    borderRadius: containerStyles[0].containerBorderRadius + "px",
                    borderColor: containerStyles[0].containerBorderColor
                }}
            >
                <div className={`premium-dheading-block__wrap`}>
                    <h2 className={`premium-dheading-block__title`}>
                        <span
                            className={`premium-dheading-block__first premium-headingc-${firstStyles[0].firstClip} premium-headinga-${firstStyles[0].firstAnim} premium-headings-${firstStyles[0].firstStroke}`}
                            style={{
                                display: display,
                                color: firstStyles[0].firstColor,
                                backgroundColor: firstStyles[0].firstClip ? "none" : firstStyles[0].firstBackground ? hexToRgba(firstStyles[0].firstBackground, firstStyles[0].firstOpacity) : "transparent",
                                backgroundImage: firstStyles[0].firstClip
                                    ? `linear-gradient(to left, ${firstStyles[0].firstColor}, ${firstStyles[0].firstClipColor})`
                                    : "none",
                                fontFamily: firstStyles[0].firstFamily,
                                letterSpacing: firstStyles[0].firstLetter + "px",
                                textTransform: firstStyles[0].firstUpper ? "uppercase" : "none",
                                fontStyle: firstStyles[0].firstStyle,
                                fontWeight: firstStyles[0].firstWeight,
                                borderStyle: firstStyles[0].firstBorderType,
                                borderWidth: firstStyles[0].firstBorder
                                    ? `${firstStyles[0].firstBorderTop}px ${firstStyles[0].firstBorderRight}px ${firstStyles[0].firstBorderBottom}px ${firstStyles[0].firstBorderLeft}px`
                                    : firstStyles[0].firstBorderWidth + "px",
                                borderRadius: firstStyles[0].firstBorderRadius + "px",
                                borderColor: firstStyles[0].firstBorderColor,
                                padding: firstStyles[0].firstPadding + "px",
                                marginLeft: firstStyles[0].firstMarginL + "px",
                                marginRight: firstStyles[0].firstMarginR + "px",
                                textShadow: `${firstStyles[0].firstShadowHorizontal}px ${firstStyles[0].firstShadowVertical}px ${firstStyles[0].firstShadowBlur}px ${firstStyles[0].firstShadowColor}`
                            }}
                        >
                            {firstHeading}
                        </span>
                        <span
                            className={`premium-dheading-block__second premium-headingc-${secondStyles[0].secondClip} premium-headinga-${secondStyles[0].secondAnim} premium-headings-${secondStyles[0].secondStroke}`}
                            style={{
                                display: display,
                                color: secondStyles[0].secondColor,
                                backgroundColor: secondStyles[0].secondClip ? "none" : secondStyles[0].secondBackground ? hexToRgba(secondStyles[0].secondBackground, secondStyles[0].secondOpacity) : "transparent",
                                backgroundImage: secondStyles[0].secondClip
                                    ? `linear-gradient(to left, ${secondStyles[0].secondColor}, ${secondStyles[0].secondClipColor})`
                                    : "none",
                                fontFamily: secondStyles[0].secondFamily,
                                letterSpacing: secondStyles[0].secondLetter + "px",
                                textTransform: secondStyles[0].secondUpper ? "uppercase" : "none",
                                fontStyle: secondStyles[0].secondStyle,
                                fontWeight: secondStyles[0].secondWeight,
                                borderStyle: secondStyles[0].secondBorderType,
                                borderWidth: secondStyles[0].secondBorder
                                    ? `${secondStyles[0].secondBorderTop}px ${secondStyles[0].secondBorderRight}px ${secondStyles[0].secondBorderBottom}px ${secondStyles[0].secondBorderLeft}px`
                                    : secondStyles[0].secondBorderWidth + "px",
                                borderRadius: secondStyles[0].secondBorderRadius + "px",
                                borderColor: secondStyles[0].secondBorderColor,
                                padding: secondStyles[0].secondPadding + "px",
                                marginLeft: secondStyles[0].secondMarginL + "px",
                                marginRight: secondStyles[0].secondMarginR + "px",
                                textShadow: `${secondStyles[0].secondShadowHorizontal}px ${secondStyles[0].secondShadowVertical}px ${secondStyles[0].secondShadowBlur}px ${secondStyles[0].secondShadowColor}`
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
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)