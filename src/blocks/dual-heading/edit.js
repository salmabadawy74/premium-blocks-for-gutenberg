import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackground from "../../components/premium-background";
import FONTS from "../../components/premium-fonts";
import styling from './styling';
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import PremiumResponsiveMargin from "../../components/Premium-Responsive-Margin";
import PremiumResponsivePadding from "../../components/Premium-Responsive-Padding";

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
            display,
            firstColor,
            firstBackground,
            firstOpacity,
            firstSizeUnit,
            firstSize,
            firstSizeTablet,
            firstSizeMobile,
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
            firstMarginRTablet,
            firstMarginLTablet,
            firstMarginRMobile,
            firstMarginLMobile,
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
            secondOpacity,
            secondSizeUnit,
            secondSize,
            secondSizeTablet,
            secondSizeMobile,
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
            containerOpacity,
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

        let element = document.getElementById(
            "premium-style-dual-" + blockId.substr(0, 6)
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
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
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: firstSizeUnit,
                                label: __("firstSizeUnit"),
                            }}
                            fontSize={{
                                value: firstSize,
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
                            weight={firstWeight}
                            style={firstStyle}
                            spacing={firstLetter}
                            upper={firstUpper}
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
                                            <PremiumBackground
                                                type="color"
                                                colorValue={firstBackground}
                                                onChangeColor={value =>
                                                    setAttributes({
                                                        firstBackground: value,
                                                    })
                                                }
                                                opacityValue={firstOpacity}
                                                onChangeOpacity={value =>
                                                    setAttributes({
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
                        <PremiumResponsiveMargin
                            directions={["left", "right"]}
                            marginRight={firstMarginR}
                            marginLeft={firstMarginL}
                            marginRightTablet={firstMarginRTablet}
                            marginLeftTablet={firstMarginLTablet}
                            marginRightMobile={firstMarginRMobile}
                            marginLeftMobile={firstMarginLMobile}
                            onChangeMarRight={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ firstMarginR: newValue })

                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ firstMarginRTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ firstMarginRMobile: valueMobile })
                                }
                            }
                            }
                            onChangeMarLeft={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ firstMarginL: newValue })
                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ firstMarginLTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ firstMarginLMobile: valueMobile })
                                }
                            }
                            }
                        />
                        <PremiumResponsivePadding
                            paddingTop={firstPaddingT}
                            paddingRight={firstPaddingR}
                            paddingBottom={firstPaddingB}
                            paddingLeft={firstPaddingL}
                            paddingTopTablet={firstPaddingTTablet}
                            paddingRightTablet={firstPaddingRTablet}
                            paddingBottomTablet={firstPaddingBTablet}
                            paddingLeftTablet={firstPaddingLTablet}
                            paddingTopMobile={firstPaddingTMobile}
                            paddingRightMobile={firstPaddingRMobile}
                            paddingBottomMobile={firstPaddingBMobile}
                            paddingLeftMobile={firstPaddingLMobile}
                            onChangePadTop={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ firstPaddingT: newValue })

                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ firstPaddingTTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ firstPaddingTMobile: valueMobile })
                                }
                            }
                            }
                            onChangePadRight={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ firstPaddingR: 30 })
                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ firstPaddingRTablet: 50 })
                                }
                                else {
                                    (valueMobile) => setAttributes({ firstPaddingRMobile: 20 })
                                }
                            }
                            }
                            onChangePadBottom={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ firstPaddingB: newValue })
                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ firstPaddingBTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ firstPaddingBMobile: valueMobile })
                                }
                            }
                            }
                            onChangePadLeft={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ firstPaddingL: newValue })
                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ firstPaddingLTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ firstPaddingLMobile: valueMobile })
                                }
                            }
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
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: secondSizeUnit,
                                label: __("secondSizeUnit"),
                            }}
                            fontSize={{
                                value: secondSize,
                                label: __("secondSize"),
                            }}
                            fontSizeMobile={{
                                value: secondSizeMobile,
                                label: __("secondSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: secondSizeTablet,
                                label: __("secondSizeTablet"),
                            }}
                            weight={secondWeight}
                            style={secondStyle}
                            spacing={secondLetter}
                            upper={secondUpper}
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
                                            <PremiumBackground
                                                type="color"
                                                colorValue={secondBackground}
                                                onChangeColor={value =>
                                                    setAttributes({
                                                        secondBackground: value,
                                                    })
                                                }
                                                opacityValue={secondOpacity}
                                                onChangeOpacity={value =>
                                                    setAttributes({
                                                        secondOpacity: value,
                                                    })
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

                        <PremiumResponsiveMargin
                            directions={["left", "right"]}
                            marginRight={secondMarginR}
                            marginLeft={secondMarginL}
                            marginRightTablet={secondMarginRTablet}
                            marginLeftTablet={secondMarginLTablet}
                            marginRightMobile={secondMarginRMobile}
                            marginLeftMobile={secondMarginLMobile}
                            onChangeMarRight={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ secondMarginR: newValue })

                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ secondMarginRTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ secondMarginRMobile: valueMobile })
                                }
                            }
                            }
                            onChangeMarLeft={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ secondMarginL: newValue })
                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ secondMarginLTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ secondMarginLMobile: valueMobile })
                                }
                            }
                            }
                        />
                        <PremiumResponsivePadding
                            paddingTop={secondPaddingT}
                            paddingRight={secondPaddingR}
                            paddingBottom={secondPaddingB}
                            paddingLeft={secondPaddingL}
                            paddingTopTablet={secondPaddingTTablet}
                            paddingRightTablet={secondPaddingRTablet}
                            paddingBottomTablet={secondPaddingBTablet}
                            paddingLeftTablet={secondPaddingLTablet}
                            paddingTopMobile={secondPaddingTMobile}
                            paddingRightMobile={secondPaddingRMobile}
                            paddingBottomMobile={secondPaddingBMobile}
                            paddingLeftMobile={secondPaddingLMobile}
                            onChangePadTop={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ secondPaddingT: newValue })

                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ secondPaddingTTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ secondPaddingTMobile: valueMobile })
                                }
                            }
                            }
                            onChangePadRight={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ secondPaddingR: 30 })
                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ secondPaddingRTablet: 50 })
                                }
                                else {
                                    (valueMobile) => setAttributes({ secondPaddingRMobile: 20 })
                                }
                            }
                            }
                            onChangePadBottom={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ secondPaddingB: newValue })
                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ secondPaddingBTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ secondPaddingBMobile: valueMobile })
                                }
                            }
                            }
                            onChangePadLeft={(device) => {
                                if (device === "Desktop") {
                                    (newValue) => setAttributes({ secondPaddingL: newValue })
                                } else if (device === "tablet") {
                                    (valuetablet) => setAttributes({ secondPaddingLTablet: valuetablet })
                                }
                                else {
                                    (valueMobile) => setAttributes({ secondPaddingLMobile: valueMobile })
                                }
                            }
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
                            colorValue={containerBack}
                            onChangeColor={newvalue =>
                                setAttributes({
                                    containerBack: newvalue,
                                })
                            }
                            opacityValue={containerOpacity}
                            onChangeOpacity={value =>
                                setAttributes({ containerOpacity: value })
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
                className={`${mainClasses} premium-dheading-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
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
