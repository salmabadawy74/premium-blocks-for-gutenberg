import classnames from "classnames"
// import styling from "./styling"
// import ResponsiveRangeControl from "../../components/premium-range-responsive";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import PremiumBackgroundControl from "../../components/Premium-Background-Control"
import PremiumTypo from "../../components/premium-typo";
// import PremiumTextShadow from "../../components/premium-text-shadow";
// import PremiumResponsivePadding from "../../components/premium-padding-responsive";
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumBorder from "../../components/premium-border";

const { __ } = wp.i18n

let isBoxUpdated = null;

const {
    Component,
    Fragment,
} = wp.element

const {
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
    ColorPalette,
    RichText
} = wp.editor

const {
    PanelBody,
    SelectControl,
    RangeControl,
    Toolbar,
    TextControl,
    ToggleControl,
    TextareaControl
} = wp.components

class edit extends Component {

    constructor() {
        super(...arguments);

        this.initToggleBox = this.initToggleBox.bind(this);
    }
    componentDidMount() {
        // Assigning id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId })
        this.props.setAttributes({ classMigrate: true })
        // Pushing Style tag for this block css.
        const $style = document.createElement("style")
        $style.setAttribute("id", "premium-style-content-switcher-" + this.props.clientId)
        document.head.appendChild($style)
        this.props.setAttributes({ switchCheck: false })
        setTimeout(this.initToggleBox, 10);
        this.getPreviewSize = this.getPreviewSize.bind(this);
    }

    componentDidUpdate() {
        clearTimeout(isBoxUpdated);
        isBoxUpdated = setTimeout(this.initToggleBox, 10);
    }

    initToggleBox() {
        const { block_id, switchCheck } = this.props.attributes;
        if (!block_id) return null;

        let toggleBox = document.getElementsByClassName(`premium-content-switcher-toggle-switch-input ${block_id}`);
        setTimeout(
            toggleBox[0].addEventListener("click", () => {
                this.props.setAttributes({ switchCheck: !switchCheck })
                console.log(switchCheck);

                if (!switchCheck) {
                    let switchToggle = document.getElementsByClassName(`premium-content-switcher-first-list ${block_id}`);
                    switchToggle[0].classList.remove("premium-content-switcher-is-visible");
                    switchToggle[0].classList.add("premium-content-switcher-is-hidden");
                    let switchTogglesecond = document.getElementsByClassName(`premium-content-switcher-second-list ${block_id}`);
                    switchTogglesecond[0].classList.remove("premium-content-switcher-is-hidden");
                    switchTogglesecond[0].classList.add("premium-content-switcher-is-visible");
                }
                else {
                    let switchToggle = document.getElementsByClassName(`premium-content-switcher-second-list ${block_id}`);
                    switchToggle[0].classList.remove("premium-content-switcher-is-visible");
                    switchToggle[0].classList.add("premium-content-switcher-is-hidden");

                    let switchTogglesecond = document.getElementsByClassName(`premium-content-switcher-first-list ${block_id}`);
                    switchTogglesecond[0].classList.remove("premium-content-switcher-is-hidden");
                    switchTogglesecond[0].classList.add("premium-content-switcher-is-visible");
                }
            })
            , 10);
    }

    getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
        if (device === 'Mobile') {
            if (undefined !== mobileSize && '' !== mobileSize) {
                return mobileSize;
            } else if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        } else if (device === 'Tablet') {
            if (undefined !== tabletSize && '' !== tabletSize) {
                return tabletSize;
            }
        }
        return desktopSize;
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props

        const {
            block_id,
            align,
            className,
            showLabel,
            firstLabel,
            secondLabel,
            display,
            labelTag,
            firstContent,
            secondContent,
            switchCheck,
            firstcontentlign,
            secondcontentlign,
            switcherStyles,
            backgroundTypeState1,
            backgroundTypeState2,
            switchSize,
            switchSizeTablet,
            switchSizeType,
            switchSizeMobile,
            bottomSpacing,
            bottomSpacingTablet,
            bottomSpacingMobile,
            bottomSpacingType,
            secondStateColor,
            firstStateColor,
            switcherBGColor,
            switchRadius,
            labelSpacing,
            labelSpacingTablet,
            labelSpacingMobile,
            labelSpacingType,
            firstLabelColor,
            firstLabelWeight,
            firstLabelLetter,
            firstLabelUpper,
            firstLabelStyle,
            firstLabelfontSize,
            firstLabelfontSizeMobile,
            firstLabelfontSizeTablet,
            firstLabelfontSizeType,
            secondLabelColor,
            secondLabelWeight,
            secondLabelLetter,
            secondLabelUpper,
            secondLabelStyle,
            secondLabelfontSize,
            secondLabelfontSizeMobile,
            secondLabelfontSizeTablet,
            secondLabelfontSizeType,
            shadowColor,
            shadowBlur,
            shadowHorizontal,
            shadowVertical,
            firstContentHeight,
            firstContentHeightTablet,
            firstContentHeightType,
            firstContentHeightMobile,
            firstContentColor,
            firstContentBGColor,
            secondContentHeight,
            secondContentHeightTablet,
            secondContentHeightType,
            secondContentHeightMobile,
            secondContentColor,
            secondContentBGColor,
            firstpaddingTop,
            firstpaddingTopMobile,
            firstpaddingTopTablet,
            firstpaddingTopType,
            firstpaddingLeft,
            firstpaddingLeftMobile,
            firstpaddingLeftTablet,
            firstpaddingLeftType,
            firstpaddingRight,
            firstpaddingRightMobile,
            firstpaddingRightTablet,
            firstpaddingRightType,
            firstpaddingBottom,
            firstpaddingBottomMobile,
            firstpaddingBottomTablet,
            firstpaddingBottomType,
            secondpaddingTop,
            secondpaddingTopMobile,
            secondpaddingTopTablet,
            secondpaddingTopType,
            secondpaddingLeft,
            secondpaddingLeftMobile,
            secondpaddingLeftTablet,
            secondpaddingLeftType,
            secondpaddingRight,
            secondpaddingRightMobile,
            secondpaddingRightTablet,
            secondpaddingRightType,
            secondpaddingBottom,
            secondpaddingBottomMobile,
            secondpaddingBottomTablet,
            secondpaddingBottomType,
            effect,
            slide,
            firstContentfontSize,
            firstContentfontSizeMobile,
            firstContentfontSizeTablet,
            firstContentfontSizeType,
            firstContentWeight,
            firstContentLetter,
            firstContentUpper,
            firstContentStyle,
            firstContentborderType,
            firstContentborderWidth,
            firstContentborderColor,
            firstContentborderRadius,
            secondContentfontSize,
            secondContentfontSizeType,
            secondContentfontSizeMobile,
            secondContentfontSizeTablet,
            secondContentLetter,
            secondContentStyle,
            secondContentWeight,
            secondContentUpper,
            secondContentborderType,
            secondContentborderWidth,
            secondContentborderColor,
            secondContentborderRadius
        } = attributes

        const DISPLAY = [
            {
                label: __("Block"),
                value: "block"
            },
            {
                label: __("Inline"),
                value: "inline"
            }
        ];
        const ALIGNS = ["left", "center", "right"];

        const EFFECTS = [
            {
                label: __("Fade"),
                value: "fade"
            },
            {
                label: __("Slide"),
                value: "slide"
            }
        ]
        const SLIDE = [
            {
                label: __("Top"),
                value: "top"
            },
            {
                label: __("Left"),
                value: "left"
            },
            {
                label: __("Bottom"),
                value: "bottom"
            },
            {
                label: __("Right"),
                value: "right"
            }
        ]

        const TAGS = [
            {
                value: "h1",
                label: "H1"
            }, {
                value: "h2",
                label: "H2"
            },
            {
                value: "h3",
                label: "H3"
            },
            {
                value: "h4",
                label: "H4"
            },
            {
                value: "h5",
                label: "H5"
            },
            {
                value: "h6",
                label: "H6"
            }
        ];

        var element = document.getElementById("premium-style-content-switcher-" + this.props.clientId)

        if (null != element && "undefined" != typeof element) {
            // element.innerHTML = styling(this.props)
        }

        const SwitcherSize = this.getPreviewSize(this.props.deviceType, switcherStyles[0].switchSize, switcherStyles[0].switchSizeTablet, switcherStyles[0].switchSizeMobile);
        const SwitcherBorderRadius = this.getPreviewSize(this.props.deviceType, switcherStyles[0].switchRadius, switcherStyles[0].switchRadiusTablet, switcherStyles[0].switchRadiusMobile);
        const ContainerBorderRadius = this.getPreviewSize(this.props.deviceType, switcherStyles[0].containerRadius, switcherStyles[0].containerRadiusTablet, switcherStyles[0].containerRadiusMobile);

        const renderCss = (
            <style>
                {`
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider:before {
                        border-radius: ${ContainerBorderRadius}${switcherStyles[0].containerRadiusType} !important;
                    }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider {
                        border-radius: ${SwitcherBorderRadius}${switcherStyles[0].switchRadiusType} !important;
                    }
                `}
            </style>
        );

        const saveSwitcherStyles = (value) => {
            const newUpdate = switcherStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                switcherStyles: newUpdate,
            });
        }

        const mainClasses = classnames(className, "premium-content-switcher");
        return [
            isSelected && (
                <BlockControls>
                    <AlignmentToolbar
                        value={align}
                        onChange={(value) => {
                            setAttributes({ align: value })
                        }}
                    />
                </BlockControls>
            ),
            isSelected && (
                <InspectorControls>
                    <PanelBody
                        title={__("Switcher")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Show Labels")}
                            checked={showLabel}
                            onChange={newCheck => setAttributes({ showLabel: newCheck })}
                        />
                        {showLabel && (
                            <Fragment>
                                <TextControl
                                    label={__("First Label")}
                                    value={firstLabel}
                                    onChange={value => setAttributes({ firstLabel: value })}
                                />
                                <TextControl
                                    label={__("Second Label")}
                                    value={secondLabel}
                                    onChange={value => setAttributes({ secondLabel: value })}
                                />
                                <SelectControl
                                    label={__("HTML Tag")}
                                    options={TAGS}
                                    value={labelTag}
                                    onChange={(newValue) => setAttributes({ labelTag: newValue })}
                                />
                                <SelectControl
                                    label={__("Display")}
                                    options={DISPLAY}
                                    value={display}
                                    onChange={newValue => setAttributes({ display: newValue })}
                                />
                            </Fragment>
                        )}
                        <p>{__("Alignment")}</p>
                        <Toolbar
                            controls={ALIGNS.map(contentAlign => ({
                                icon: "editor-align" + contentAlign,
                                isActive: contentAlign === align,
                                onClick: () => setAttributes({ align: contentAlign })
                            }))}
                        />
                        <SelectControl
                            label={__("Effect")}
                            options={EFFECTS}
                            value={effect}
                            onChange={newEffect => setAttributes({ effect: newEffect })}
                        />
                        {effect == 'slide' &&
                            <SelectControl
                                label={__("Slide Direction")}
                                options={SLIDE}
                                value={slide}
                                onChange={newEffect => setAttributes({ slide: newEffect })}
                            />
                        }
                    </PanelBody>
                    <PanelBody
                        title={__("Content 1")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextareaControl
                            label={__("Content", 'premium-block-for-gutenberg')}
                            value={firstContent}
                            onChange={newEffect => setAttributes({ firstContent: newEffect })}
                        />
                        <p>{__("Alignment")}</p>
                        <Toolbar
                            controls={ALIGNS.map(contentAlign => ({
                                icon: "editor-align" + contentAlign,
                                isActive: contentAlign === firstcontentlign,
                                onClick: () => setAttributes({ firstcontentlign: contentAlign })
                            }))}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Content 2")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextareaControl
                            label={__("Content", 'premium-block-for-gutenberg')}
                            value={secondContent}
                            onChange={newEffect => setAttributes({ secondContent: newEffect })}
                        />
                        <p>{__("Alignment")}</p>
                        <Toolbar
                            controls={ALIGNS.map(contentAlign => ({
                                icon: "editor-align" + contentAlign,
                                isActive: contentAlign === secondcontentlign,
                                onClick: () => setAttributes({ secondcontentlign: contentAlign })
                            }))}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Switcher Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ResponsiveRangeControl
                            label={__("Size", 'premium-block-for-gutenberg')}
                            value={switcherStyles[0].switchSize}
                            tabletValue={switcherStyles[0].switchSizeTablet}
                            mobileValue={switcherStyles[0].switchSizeMobile}
                            onChange={(value) => saveSwitcherStyles({ switchSize: value })}
                            onChangeTablet={(value) => saveSwitcherStyles({ switchSizeTablet: value })}
                            onChangeMobile={(value) => saveSwitcherStyles({ switchSizeMobile: value })}
                            showUnit={false}
                            defaultValue={15}
                            min={1}
                            max={40}
                        />
                        <ResponsiveRangeControl
                            label={__("Controller Border Radius", 'premium-block-for-gutenberg')}
                            value={switcherStyles[0].containerRadius}
                            tabletValue={switcherStyles[0].containerRadiusTablet}
                            mobileValue={switcherStyles[0].containerRadiusMobile}
                            onChange={(value) => saveSwitcherStyles({ containerRadius: value })}
                            onChangeTablet={(value) => saveSwitcherStyles({ containerRadiusTablet: value })}
                            onChangeMobile={(value) => saveSwitcherStyles({ containerRadiusMobile: value })}
                            onChangeUnit={(key) =>
                                saveSwitcherStyles({ containerRadiusType: key })
                            }
                            unit={switcherStyles[0].containerRadiusType}
                            showUnit={true}
                            defaultValue={50}
                            min={1}
                            max={100}
                        />
                        <ResponsiveRangeControl
                            label={__("Switcher Border Radius", 'premium-block-for-gutenberg')}
                            value={switcherStyles[0].switchRadius}
                            tabletValue={switcherStyles[0].switchRadiusTablet}
                            mobileValue={switcherStyles[0].switchRadiusMobile}
                            onChange={(value) => saveSwitcherStyles({ switchRadius: value })}
                            onChangeTablet={(value) => saveSwitcherStyles({ switchRadiusTablet: value })}
                            onChangeMobile={(value) => saveSwitcherStyles({ switchRadiusMobile: value })}
                            onChangeUnit={(key) =>
                                saveSwitcherStyles({ switchRadiusType: key })
                            }
                            unit={switcherStyles[0].switchRadiusType}
                            showUnit={true}
                            defaultValue={1.5}
                            min={1}
                            max={100}
                        />
                        <h3>{__("Controller State 1 Color")}</h3>
                        <PremiumBackgroundControl
                            setAttributes={setAttributes}
                            saveContainerStyle={saveSwitcherStyles}
                            backgroundType={backgroundTypeState1}
                            backgroundColor={switcherStyles[0].containerBackState1}
                            backgroundImageID={switcherStyles[0].backgroundImageIDState1}
                            backgroundImageURL={switcherStyles[0].backgroundImageURLState1}
                            backgroundPosition={switcherStyles[0].backgroundPositionState1}
                            backgroundRepeat={switcherStyles[0].backgroundRepeatState1}
                            backgroundSize={switcherStyles[0].backgroundSizeState1}
                            fixed={switcherStyles[0].fixedState1}
                            gradientLocationOne={switcherStyles[0].gradientLocationOneState1}
                            gradientColorTwo={switcherStyles[0].gradientColorTwoState1}
                            gradientLocationTwo={switcherStyles[0].gradientLocationTwoState1}
                            gradientAngle={switcherStyles[0].gradientAngleState1}
                            gradientPosition={switcherStyles[0].gradientPositionState1}
                            gradientType={switcherStyles[0].gradientTypeState1}
                        />
                        <h3>{__("Controller State 2 Color")}</h3>
                        <PremiumBackgroundControl
                            setAttributes={setAttributes}
                            saveContainerStyle={saveSwitcherStyles}
                            backgroundType={backgroundTypeState2}
                            backgroundColor={switcherStyles[0].containerBackState2}
                            backgroundImageID={switcherStyles[0].backgroundImageIDState2}
                            backgroundImageURL={switcherStyles[0].backgroundImageURLState2}
                            backgroundPosition={switcherStyles[0].backgroundPositionState2}
                            backgroundRepeat={switcherStyles[0].backgroundRepeatState2}
                            backgroundSize={switcherStyles[0].backgroundSizeState2}
                            fixed={switcherStyles[0].fixedState2}
                            gradientLocationOne={switcherStyles[0].gradientLocationOneState2}
                            gradientColorTwo={switcherStyles[0].gradientColorTwoState2}
                            gradientLocationTwo={switcherStyles[0].gradientLocationTwoState2}
                            gradientAngle={switcherStyles[0].gradientAngleState2}
                            gradientPosition={switcherStyles[0].gradientPositionState2}
                            gradientType={switcherStyles[0].gradientTypeState2}
                        />
                        {/* <ResponsiveRangeControl
                            setAttributes={setAttributes}
                            rangeType={{ value: switchSizeType, label: __("switchSizeType") }}
                            range={{ value: switchSize, label: __("switchSize") }}
                            rangeMobile={{ value: switchSizeMobile, label: __("switchSizeMobile") }}
                            rangeTablet={{ value: switchSizeTablet, label: __("switchSizeTablet") }}
                            rangeLabel={__("Size")}
                        />
                        <ResponsiveRangeControl
                            setAttributes={setAttributes}
                            rangeType={{ value: bottomSpacingType, label: __("bottomSpacingType") }}
                            range={{ value: bottomSpacing, label: __("bottomSpacing") }}
                            rangeMobile={{ value: bottomSpacingMobile, label: __("bottomSpacingMobile") }}
                            rangeTablet={{ value: bottomSpacingTablet, label: __("bottomSpacingTablet") }}
                            rangeLabel={__("Bottom Spacing")}
                        />
                        <p>{__("First State Color")}</p>
                        <ColorPalette
                            value={firstStateColor}
                            onChange={newValue =>
                                setAttributes({
                                    firstStateColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Second State Color")}</p>
                        <ColorPalette
                            value={secondStateColor}
                            onChange={newValue =>
                                setAttributes({
                                    secondStateColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={switcherBGColor}
                            onChange={newValue =>
                                setAttributes({
                                    switcherBGColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <RangeControl
                            label={__("Border Radius")}
                            value={switchRadius}
                            onChange={newValue => setAttributes({ switchRadius: newValue })}
                            initialPosition={50}
                            allowReset={true}
                        /> */}
                    </PanelBody>
                    {showLabel && (<PanelBody
                        title={__("Labels Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ResponsiveRangeControl
                            setAttributes={setAttributes}
                            rangeType={{ value: labelSpacingType, label: __("labelSpacingType") }}
                            range={{ value: labelSpacing, label: __("labelSpacing") }}
                            rangeMobile={{ value: labelSpacingMobile, label: __("labelSpacingMobile") }}
                            rangeTablet={{ value: labelSpacingTablet, label: __("labelSpacingTablet") }}
                            rangeLabel={__("Spacing")}
                        />
                        {/* <PremiumTextShadow
                            color={shadowColor}
                            blur={shadowBlur}
                            horizontal={shadowHorizontal}
                            vertical={shadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({ shadowColor: newColor.hex })
                            }
                            onChangeBlur={newBlur => setAttributes({ shadowBlur: newBlur })}
                            onChangehHorizontal={newValue =>
                                setAttributes({ shadowHorizontal: newValue })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({ shadowVertical: newValue })
                            }
                        /> */}
                        <hr />
                        <h2 className="premium-content-switcher-labels-style">{__("First Label")}</h2>
                        <p>{__("First Label Color")}</p>
                        <ColorPalette
                            value={firstLabelColor}
                            onChange={newValue =>
                                setAttributes({
                                    firstLabelColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: firstLabelfontSizeType, label: __("firstLabelfontSizeType") }}
                            fontSize={{ value: firstLabelfontSize, label: __("firstLabelfontSize") }}
                            fontSizeMobile={{ value: firstLabelfontSizeMobile, label: __("firstLabelfontSizeMobile") }}
                            fontSizeTablet={{ value: firstLabelfontSizeTablet, label: __("firstLabelfontSizeTablet") }}
                            weight={firstLabelWeight}
                            style={firstLabelStyle}
                            spacing={firstLabelLetter}
                            upper={firstLabelUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ firstLabelWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ firstLabelStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ firstLabelLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ firstLabelUpper: check })}
                        />
                        <hr />
                        <h2 className="premium-content-switcher-labels-style">{__("Second Label")}</h2>
                        <p>{__("Second Label Color")}</p>
                        <ColorPalette
                            value={secondLabelColor}
                            onChange={newValue =>
                                setAttributes({
                                    secondLabelColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: secondLabelfontSizeType, label: __("secondLabelfontSizeType") }}
                            fontSize={{ value: secondLabelfontSize, label: __("secondLabelfontSize") }}
                            fontSizeMobile={{ value: secondLabelfontSizeMobile, label: __("secondLabelfontSizeMobile") }}
                            fontSizeTablet={{ value: secondLabelfontSizeTablet, label: __("secondLabelfontSizeTablet") }}
                            weight={secondLabelWeight}
                            style={secondLabelStyle}
                            spacing={secondLabelLetter}
                            upper={secondLabelUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ secondLabelWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ secondLabelStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ secondLabelLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ secondLabelUpper: check })}
                        />
                    </PanelBody>
                    )}
                    <PanelBody
                        title={__("First Content Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ResponsiveRangeControl
                            setAttributes={setAttributes}
                            rangeType={{ value: firstContentHeightType, label: __("firstContentHeightType") }}
                            range={{ value: firstContentHeight, label: __("firstContentHeight") }}
                            rangeMobile={{ value: firstContentHeightMobile, label: __("firstContentHeightMobile") }}
                            rangeTablet={{ value: firstContentHeightTablet, label: __("firstContentHeightTablet") }}
                            rangeLabel={__("Height")}
                        />
                        <p>{__("Text Color")}</p>
                        <ColorPalette
                            value={firstContentColor}
                            onChange={newValue =>
                                setAttributes({
                                    firstContentColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={firstContentBGColor}
                            onChange={newValue =>
                                setAttributes({
                                    firstContentBGColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumResponsivePadding
                            setAttributes={setAttributes}
                            paddingTopType={{ value: firstpaddingTopType, label: __("firstpaddingTopType") }}
                            paddingTop={{ value: firstpaddingTop, label: __("firstpaddingTop") }}
                            paddingTopMobile={{ value: firstpaddingTopMobile, label: __("firstpaddingTopMobile") }}
                            paddingTopTablet={{ value: firstpaddingTopTablet, label: __("firstpaddingTopTablet") }}
                            paddingBottomType={{ value: firstpaddingBottomType, label: __("firstpaddingBottomType") }}
                            paddingBottom={{ value: firstpaddingBottom, label: __("firstpaddingBottom") }}
                            paddingBottomMobile={{ value: firstpaddingBottomMobile, label: __("firstpaddingBottomMobile") }}
                            paddingBottomTablet={{ value: firstpaddingBottomTablet, label: __("firstpaddingBottomTablet") }}
                            paddingRightType={{ value: firstpaddingRightType, label: __("firstpaddingRightType") }}
                            paddingRight={{ value: firstpaddingRight, label: __("firstpaddingRight") }}
                            paddingRightMobile={{ value: firstpaddingRightMobile, label: __("firstpaddingRightMobile") }}
                            paddingRightTablet={{ value: firstpaddingRightTablet, label: __("firstpaddingRightTablet") }}
                            paddingLeftType={{ value: firstpaddingLeftType, label: __("firstpaddingLeftType") }}
                            paddingLeft={{ value: firstpaddingLeft, label: __("firstpaddingLeft") }}
                            paddingLeftMobile={{ value: firstpaddingLeftMobile, label: __("firstpaddingLeftMobile") }}
                            paddingLeftTablet={{ value: firstpaddingLeftTablet, label: __("firstpaddingLeftTablet") }}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: firstContentfontSizeType, label: __("firstContentfontSizeType") }}
                            fontSize={{ value: firstContentfontSize, label: __("firstContentfontSize") }}
                            fontSizeMobile={{ value: firstContentfontSizeMobile, label: __("firstContentfontSizeMobile") }}
                            fontSizeTablet={{ value: firstContentfontSizeTablet, label: __("firstContentfontSizeTablet") }}
                            weight={firstContentWeight}
                            style={firstContentStyle}
                            spacing={firstContentLetter}
                            upper={firstContentUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ firstContentWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ firstContentStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ firstContentLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ firstContentUpper: check })}
                        />
                        <PremiumBorder
                            borderType={firstContentborderType}
                            borderWidth={firstContentborderWidth}
                            borderColor={firstContentborderColor}
                            borderRadius={firstContentborderRadius}
                            onChangeType={newType => setAttributes({ firstContentborderType: newType })}
                            onChangeWidth={newWidth => setAttributes({ firstContentborderWidth: newWidth })}
                            onChangeColor={colorValue =>
                                setAttributes({ firstContentborderColor: colorValue.hex })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({ firstContentborderRadius: newrRadius })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Second Content Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ResponsiveRangeControl
                            setAttributes={setAttributes}
                            rangeType={{ value: secondContentHeightType, label: __("secondContentHeightType") }}
                            range={{ value: secondContentHeight, label: __("secondContentHeight") }}
                            rangeMobile={{ value: secondContentHeightMobile, label: __("secondContentHeightMobile") }}
                            rangeTablet={{ value: secondContentHeightTablet, label: __("secondContentHeightTablet") }}
                            rangeLabel={__("Height")}
                        />
                        <p>{__("Text Color")}</p>
                        <ColorPalette
                            value={secondContentColor}
                            onChange={newValue =>
                                setAttributes({
                                    secondContentColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <p>{__("Background Color")}</p>
                        <ColorPalette
                            value={secondContentBGColor}
                            onChange={newValue =>
                                setAttributes({
                                    secondContentBGColor: newValue
                                })
                            }
                            allowReset={true}
                        />
                        <PremiumResponsivePadding
                            setAttributes={setAttributes}
                            paddingTopType={{ value: secondpaddingTopType, label: __("secondpaddingTopType") }}
                            paddingTop={{ value: secondpaddingTop, label: __("secondpaddingTop") }}
                            paddingTopMobile={{ value: secondpaddingTopMobile, label: __("secondpaddingTopMobile") }}
                            paddingTopTablet={{ value: secondpaddingTopTablet, label: __("secondpaddingTopTablet") }}
                            paddingBottomType={{ value: secondpaddingBottomType, label: __("secondpaddingBottomType") }}
                            paddingBottom={{ value: secondpaddingBottom, label: __("secondpaddingBottom") }}
                            paddingBottomMobile={{ value: secondpaddingBottomMobile, label: __("secondpaddingBottomMobile") }}
                            paddingBottomTablet={{ value: secondpaddingBottomTablet, label: __("secondpaddingBottomTablet") }}
                            paddingRightType={{ value: secondpaddingRightType, label: __("secondpaddingRightType") }}
                            paddingRight={{ value: secondpaddingRight, label: __("secondpaddingRight") }}
                            paddingRightMobile={{ value: secondpaddingRightMobile, label: __("secondpaddingRightMobile") }}
                            paddingRightTablet={{ value: secondpaddingRightTablet, label: __("secondpaddingRightTablet") }}
                            paddingLeftType={{ value: secondpaddingLeftType, label: __("secondpaddingLeftType") }}
                            paddingLeft={{ value: secondpaddingLeft, label: __("secondpaddingLeft") }}
                            paddingLeftMobile={{ value: secondpaddingLeftMobile, label: __("secondpaddingLeftMobile") }}
                            paddingLeftTablet={{ value: secondpaddingLeftTablet, label: __("secondpaddingLeftTablet") }}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                            setAttributes={setAttributes}
                            fontSizeType={{ value: secondContentfontSizeType, label: __("secondContentfontSizeType") }}
                            fontSize={{ value: secondContentfontSize, label: __("secondContentfontSize") }}
                            fontSizeMobile={{ value: secondContentfontSizeMobile, label: __("secondContentfontSizeMobile") }}
                            fontSizeTablet={{ value: secondContentfontSizeTablet, label: __("secondContentfontSizeTablet") }}
                            weight={secondContentWeight}
                            style={secondContentStyle}
                            spacing={secondContentLetter}
                            upper={secondContentUpper}
                            onChangeWeight={newWeight =>
                                setAttributes({ secondContentWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({ secondContentStyle: newStyle })
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({ secondContentLetter: newValue })
                            }
                            onChangeUpper={check => setAttributes({ secondContentUpper: check })}
                        />
                        <PremiumBorder
                            borderType={secondContentborderType}
                            borderWidth={secondContentborderWidth}
                            borderColor={secondContentborderColor}
                            borderRadius={secondContentborderRadius}
                            onChangeType={newType => setAttributes({ secondContentborderType: newType })}
                            onChangeWidth={newWidth => setAttributes({ secondContentborderWidth: newWidth })}
                            onChangeColor={colorValue =>
                                setAttributes({ secondContentborderColor: colorValue.hex })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({ secondContentborderRadius: newrRadius })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
            ),
            renderCss,
            <div
                id={`premium-content-switcher-${block_id}`}
                className={classnames(
                    className,
                    `premium-block-${this.props.clientId}`
                )}
                style={{
                    textAlign: align,
                }}
            >
                <div className={`premium-content-switcher`}
                    style={{
                        textAlign: align,
                    }}>
                    <div className={`premium-content-switcher-toggle-${display}`}
                        style={{
                            textAlign: align,
                            justifyContent: align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align,
                            alignItems: display == "inline" ? "center" : align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align,
                        }}>
                        {showLabel && (<div className="premium-content-switcher-first-label">
                            <RichText
                                tagName={labelTag.toLowerCase()}
                                className={`premium-content-switcher-${display}-editing`}
                                onChange={(newValue) => setAttributes({ firstLabel: newValue })}
                                value={firstLabel}
                                style={{
                                    color: firstLabelColor,
                                    letterSpacing: firstLabelLetter + "px",
                                    textTransform: firstLabelUpper ? "uppercase" : "none",
                                    fontStyle: firstLabelStyle,
                                    fontWeight: firstLabelWeight,
                                    textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                }}
                            />
                        </div>
                        )}
                        <div
                            className="premium-content-switcher-toggle-switch"
                            style={{
                                fontSize: SwitcherSize + 'px',
                            }}
                        >
                            <label className={`premium-content-switcher-toggle-switch-label`}>
                                <input type="checkbox" className={`premium-content-switcher-toggle-switch-input ${this.props.clientId}`} />
                                <span className="premium-content-switcher-toggle-switch-slider round"
                                    style={{
                                        borderRadius: switchRadius + "px"
                                    }}></span>
                            </label>
                        </div>
                        {showLabel && (<div className="premium-content-switcher-second-label">
                            <RichText
                                tagName={labelTag.toLowerCase()}
                                className={`premium-content-switcher-${display}-editing`}
                                onChange={(newValue) => setAttributes({ secondLabel: newValue })}
                                value={secondLabel}
                                style={{
                                    color: secondLabelColor,
                                    letterSpacing: secondLabelLetter + "px",
                                    textTransform: secondLabelUpper ? "uppercase" : "none",
                                    fontStyle: secondLabelStyle,
                                    fontWeight: secondLabelWeight,
                                    textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                }}
                            />
                        </div>
                        )}
                    </div>
                    <div className={`premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`}>
                        <ul className="premium-content-switcher-two-content">
                            <li className={`premium-content-switcher-is-visible premium-content-switcher-first-list ${this.props.clientId}`}
                                style={{
                                    background: firstContentBGColor,
                                    borderStyle: firstContentborderType,
                                    borderWidth: firstContentborderWidth + "px",
                                    borderRadius: firstContentborderRadius || 0 + "px",
                                    borderColor: firstContentborderColor,
                                }}>
                                <RichText
                                    tagName="div"
                                    className={`premium-content-switcher-first-content`}
                                    value={firstContent}
                                    onChange={value => {
                                        setAttributes({ firstContent: value })
                                    }}
                                    style={{
                                        textAlign: firstcontentlign,
                                        justifyContent: firstcontentlign,
                                        color: firstContentColor,
                                        // letterSpacing: firstContentLetter + "px",
                                        // textTransform: firstContentUpper ? "uppercase" : "none",
                                        // fontStyle: firstContentStyle,
                                        // fontWeight: firstContentWeight,
                                    }}
                                />
                            </li>
                            <li className={`premium-content-switcher-is-hidden premium-content-switcher-second-list ${this.props.clientId}`}
                                style={{
                                    background: secondContentBGColor,
                                    borderStyle: secondContentborderType,
                                    borderWidth: secondContentborderWidth + "px",
                                    borderRadius: secondContentborderRadius || 0 + "px",
                                    borderColor: secondContentborderColor,
                                }}>
                                <RichText
                                    tagName="div"
                                    className={`premium-content-switcher-second-content`}
                                    value={secondContent}
                                    onChange={value => {
                                        setAttributes({ secondContent: value })
                                    }}
                                    style={{
                                        textAlign: secondcontentlign,
                                        justifyContent: secondcontentlign,
                                        color: secondContentColor,
                                        // letterSpacing: secondContentLetter + "px",
                                        // textTransform: secondContentUpper ? "uppercase" : "none",
                                        // fontStyle: secondContentStyle,
                                        // fontWeight: secondContentWeight,
                                    }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ]
    }
}

export default edit