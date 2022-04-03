import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import PremiumBackgroundControl from "../../components/Premium-Background-Control";
const { __ } = wp.i18n;
const { withSelect } = wp.data
import WebfontLoader from "../../components/typography/fontLoader"
import PremiumShadow from "../../components/PremiumShadow";
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';

const { Fragment, Component } = wp.element;

const {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
} = wp.components;

const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    URLInput
} = wp.blockEditor;

class edit extends Component {

    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        this.props.setAttributes({ block_id: this.props.clientId.substr(0, 6) })
        this.props.setAttributes({ classMigrate: true });
        this.getPreviewSize = this.getPreviewSize.bind(this);
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
        const { setAttributes, isSelected, className, clientId: blockId } = this.props;
        const {
            block_id,
            contentAlign,
            firstHeading,
            secondHeading,
            display,
            firstStyles,
            secondStyles,
            containerStyles,
            link,
            target,
            headingURL,
            hideDesktop,
            hideTablet,
            hideMobile,
            containerBorderTop,
            containerBorderRight,
            containerBorderBottom,
            containerBorderLeft,
            firstBorderTop,
            firstBorderRight,
            firstBorderBottom,
            firstBorderLeft,
            secondBorderTop,
            secondBorderRight,
            secondBorderBottom,
            secondBorderLeft,
            firstBorder,
            secondBorder,
            containerBorder,
            backgroundType,
            firstMarginTop,
            firstMarginRight,
            firstMarginBottom,
            firstMarginLeft,
            firstMarginTTablet,
            firstMarginRTablet,
            firstMarginBTablet,
            firstMarginLTablet,
            firstMarginTMobile,
            firstMarginRMobile,
            firstMarginBMobile,
            firstMarginLMobile,
            firstPaddingTop,
            firstPaddingRight,
            firstPaddingBottom,
            firstPaddingLeft,
            firstPaddingTTablet,
            firstPaddingRTablet,
            firstPaddingBTablet,
            firstPaddingLTablet,
            firstPaddingTMobile,
            firstPaddingRMobile,
            firstPaddingBMobile,
            firstPaddingLMobile,
            secondMarginTop,
            secondMarginRight,
            secondMarginBottom,
            secondMarginLeft,
            secondMarginTTablet,
            secondMarginRTablet,
            secondMarginBTablet,
            secondMarginLTablet,
            secondMarginTMobile,
            secondMarginRMobile,
            secondMarginBMobile,
            secondMarginLMobile,
            secondPaddingTop,
            secondPaddingRight,
            secondPaddingBottom,
            secondPaddingLeft,
            secondPaddingTTablet,
            secondPaddingRTablet,
            secondPaddingBTablet,
            secondPaddingLTablet,
            secondPaddingTMobile,
            secondPaddingRMobile,
            secondPaddingBMobile,
            secondPaddingLMobile,
        } = this.props.attributes;

        const DISPLAY = [
            {
                value: "inline",
                label: __("Inline", 'premium-blocks-for-gutenberg')
            },
            {
                value: "block",
                label: __("Block", 'premium-blocks-for-gutenberg')
            }
        ];

        let loadFirstGoogleFonts;
        let loadSecondGoogleFonts;
        if (firstStyles[0].firstFamily !== 'Default') {
            const firstConfig = {
                google: {
                    families: [firstStyles[0].firstFamily],
                },
            }
            loadFirstGoogleFonts = (
                <WebfontLoader config={firstConfig}>
                </WebfontLoader>
            )
        }
        if (secondStyles[0].secondFamily !== 'Default') {
            const secondConfig = {
                google: {
                    families: [secondStyles[0].secondFamily],
                },
            }
            loadSecondGoogleFonts = (
                <WebfontLoader config={secondConfig}>
                </WebfontLoader>
            )
        }

        const saveSecondStyle = (value) => {
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

        const saveFirstStyle = (value) => {
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
        const saveContainerStyle = (value) => {
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

        const firstFontSize = this.getPreviewSize(this.props.deviceType, firstStyles[0].firstSize, firstStyles[0].firstSizeTablet, firstStyles[0].firstSizeMobile);
        const secondFontSize = this.getPreviewSize(this.props.deviceType, secondStyles[0].secondSize, secondStyles[0].secondSizeTablet, secondStyles[0].secondSizeMobile);
        const firstMarTop = this.getPreviewSize(this.props.deviceType, firstMarginTop, firstMarginTTablet, firstMarginTMobile);
        const firstMarRight = this.getPreviewSize(this.props.deviceType, firstMarginRight, firstMarginRTablet, firstMarginRMobile);
        const firstMarBottom = this.getPreviewSize(this.props.deviceType, firstMarginBottom, firstMarginBTablet, firstMarginBMobile);
        const firstMarLeft = this.getPreviewSize(this.props.deviceType, firstMarginLeft, firstMarginLTablet, firstMarginLMobile);
        const firstPadTop = this.getPreviewSize(this.props.deviceType, firstPaddingTop, firstPaddingTTablet, firstPaddingTMobile);
        const firstPadRight = this.getPreviewSize(this.props.deviceType, firstPaddingRight, firstPaddingRTablet, firstPaddingRMobile);
        const firstPadBottom = this.getPreviewSize(this.props.deviceType, firstPaddingBottom, firstPaddingBTablet, firstPaddingBMobile);
        const firstPadLeft = this.getPreviewSize(this.props.deviceType, firstPaddingLeft, firstPaddingLTablet, firstPaddingLMobile);
        const secondMarTop = this.getPreviewSize(this.props.deviceType, secondMarginTop, secondMarginTTablet, secondMarginTMobile);
        const secondMarRight = this.getPreviewSize(this.props.deviceType, secondMarginRight, secondMarginRTablet, secondMarginRMobile);
        const secondMarBottom = this.getPreviewSize(this.props.deviceType, secondMarginBottom, secondMarginBTablet, secondMarginBMobile);
        const secondMarLeft = this.getPreviewSize(this.props.deviceType, secondMarginLeft, secondMarginLTablet, secondMarginLMobile);
        const secondPadTop = this.getPreviewSize(this.props.deviceType, secondPaddingTop, secondPaddingTTablet, secondPaddingTMobile);
        const secondPadRight = this.getPreviewSize(this.props.deviceType, secondPaddingRight, secondPaddingRTablet, secondPaddingRMobile);
        const secondPadBottom = this.getPreviewSize(this.props.deviceType, secondPaddingBottom, secondPaddingBTablet, secondPaddingBMobile);
        const secondPadLeft = this.getPreviewSize(this.props.deviceType, secondPaddingLeft, secondPaddingLTablet, secondPaddingLMobile);

        let btnGrad, btnGrad2, btnbg;
        if (undefined !== backgroundType && 'gradient' === backgroundType) {
            btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
            btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
            if ('radial' === containerStyles[0].gradientType) {
                btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
            } else if ('radial' !== containerStyles[0].gradientType) {
                btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
            }
        } else {
            btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
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
                        title={__("General Settings", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("First Heading", 'premium-blocks-for-gutenberg')}
                            type="url"
                            value={firstHeading}
                            onChange={value => setAttributes({ firstHeading: value })}
                        />
                        <TextControl
                            label={__("Second Heading", 'premium-blocks-for-gutenberg')}
                            type="url"
                            value={secondHeading}
                            onChange={value => setAttributes({ secondHeading: value })}
                        />

                        <SelectControl
                            label={__("Display", 'premium-blocks-for-gutenberg')}
                            value={display}
                            options={DISPLAY}
                            onChange={value => setAttributes({ display: value })}
                        />
                        <ToggleControl
                            label={__("Link", 'premium-blocks-for-gutenberg')}
                            checked={link}
                            onChange={newValue => setAttributes({ link: newValue })}
                        />
                        {link && (
                            <ToggleControl
                                label={__("Open link in new tab", 'premium-blocks-for-gutenberg')}
                                checked={target}
                                onChange={newValue => setAttributes({ target: newValue })}
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("First Heading Style", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Clipped", 'premium-blocks-for-gutenberg')}
                            checked={firstStyles[0].firstClip}
                            onChange={newValue => saveFirstStyle({ firstClip: newValue })}
                        />
                        {firstStyles[0].firstClip && (
                            <Fragment>
                                <ToggleControl
                                    label={__("Animated", 'premium-blocks-for-gutenberg')}
                                    checked={firstStyles[0].firstAnim}
                                    onChange={newValue => saveFirstStyle({ firstAnim: newValue })}
                                />
                                <ToggleControl
                                    label={__("Stroke", 'premium-blocks-for-gutenberg')}
                                    checked={firstStyles[0].firstStroke}
                                    onChange={newValue => saveFirstStyle({ firstStroke: newValue })}
                                />
                            </Fragment>
                        )}
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                            setAttributes={saveFirstStyle}
                            fontSizeType={{
                                value: firstStyles[0].firstSizeUnit,
                                label: __("firstSizeUnit", 'premium-blocks-for-gutenberg'),
                            }}
                            fontSize={firstStyles[0].firstSize}
                            fontSizeMobile={firstStyles[0].firstSizeMobile}
                            fontSizeTablet={firstStyles[0].firstSizeTablet}
                            onChangeSize={newSize => saveFirstStyle({ firstSize: newSize })}
                            onChangeTabletSize={newSize => saveFirstStyle({ firstSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveFirstStyle({ firstSizeMobile: newSize })}
                            fontFamily={firstStyles[0].firstFamily}
                            weight={firstStyles[0].firstWeight}
                            style={firstStyles[0].firstStyle}
                            spacing={firstStyles[0].firstLetter}
                            upper={firstStyles[0].firstUpper}
                            line={firstStyles[0].firstLine}
                            onChangeWeight={newWeight => saveFirstStyle({ firstWeight: newWeight || 500 })}
                            onChangeStyle={newStyle => saveFirstStyle({ firstStyle: newStyle })}
                            onChangeSpacing={newValue => saveFirstStyle({ firstLetter: newValue })}
                            onChangeUpper={check => saveFirstStyle({ firstUpper: check })}
                            onChangeFamily={(fontFamily) => saveFirstStyle({ firstFamily: fontFamily })}
                            onChangeLine={newValue => saveFirstStyle({ firstLine: newValue })}

                        />

                        {!firstStyles[0].firstClip && (
                            <Fragment>
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={firstStyles[0].firstColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveFirstStyle({ firstColor: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                                    colorValue={firstStyles[0].firstBackground}
                                    onColorChange={value => saveFirstStyle({ firstBackground: value, })}
                                    colorDefault={''}
                                />
                            </Fragment>
                        )}

                        {firstStyles[0].firstClip && (
                            <Fragment>
                                <AdvancedPopColorControl
                                    label={__("First Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={firstStyles[0].firstColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveFirstStyle({ firstColor: newValue })}
                                />

                                <AdvancedPopColorControl
                                    label={__("Second Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={firstStyles[0].firstClipColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveFirstStyle({ firstClipColor: newValue })}
                                />
                            </Fragment>

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
                            onChangeType={(newType) => saveFirstStyle({ firstBorderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    firstBorder: true,
                                    firstBorderTop: top,
                                    firstBorderRight: right,
                                    firstBorderBottom: bottom,
                                    firstBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) => saveFirstStyle({ firstBorderColor: colorValue || "transparent", })}
                            onChangeRadius={(newrRadius) => saveFirstStyle({ firstBorderRadius: newrRadius || "0" })}
                        />

                        <PremiumShadow
                            label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                            color={firstStyles[0].firstShadowColor}
                            blur={firstStyles[0].firstShadowBlur}
                            horizontal={firstStyles[0].firstShadowHorizontal}
                            vertical={firstStyles[0].firstShadowVertical}
                            onChangeColor={newColor => saveFirstStyle({ firstShadowColor: newColor || "transparent" })}
                            onChangeBlur={newBlur => saveFirstStyle({ firstShadowBlur: newBlur || "0" })}
                            onChangehHorizontal={newValue => saveFirstStyle({ firstShadowHorizontal: newValue || "0" })}
                            onChangeVertical={newValue => saveFirstStyle({ firstShadowVertical: newValue || "0" })}
                        />
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={firstMarginTop}
                            marginRight={firstMarginRight}
                            marginBottom={firstMarginBottom}
                            marginLeft={firstMarginLeft}
                            marginTopTablet={firstMarginTTablet}
                            marginRightTablet={firstMarginRTablet}
                            marginBottomTablet={firstMarginBTablet}
                            marginLeftTablet={firstMarginLTablet}
                            marginTopMobile={firstMarginTMobile}
                            marginRightMobile={firstMarginRMobile}
                            marginBottomMobile={firstMarginBMobile}
                            marginLeftMobile={firstMarginLMobile}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ firstMarginTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ firstMarginTTablet: newValue })
                                    } else {
                                        setAttributes({ firstMarginTMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ firstMarginRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ firstMarginRTablet: newValue })
                                    } else {
                                        setAttributes({ firstMarginRMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ firstMarginBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ firstMarginBTablet: newValue })
                                    } else {
                                        setAttributes({ firstMarginBMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ firstMarginLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ firstMarginLTablet: newValue })
                                    } else {
                                        setAttributes({ firstMarginLMobile: newValue })
                                    }
                                }
                            }
                            showUnits={false}
                        />
                        <PremiumResponsivePadding
                            paddingTop={firstPaddingTop}
                            paddingRight={firstPaddingRight}
                            paddingBottom={firstPaddingBottom}
                            paddingLeft={firstPaddingLeft}
                            paddingTopTablet={firstPaddingTTablet}
                            paddingRightTablet={firstPaddingRTablet}
                            paddingBottomTablet={firstPaddingBTablet}
                            paddingLeftTablet={firstPaddingLTablet}
                            paddingTopMobile={firstPaddingTMobile}
                            paddingRightMobile={firstPaddingRMobile}
                            paddingBottomMobile={firstPaddingBMobile}
                            paddingLeftMobile={firstPaddingLMobile}
                            showUnits={false}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ firstPaddingTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ firstPaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ firstPaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ firstPaddingRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ firstPaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ firstPaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ firstPaddingBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ firstPaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ firstPaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ firstPaddingLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ firstPaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ firstPaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Second Heading Style", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Clipped", 'premium-blocks-for-gutenberg')}
                            checked={secondStyles[0].secondClip}
                            onChange={newValue => saveSecondStyle({ secondClip: newValue })}
                        />
                        {secondStyles[0].secondClip && (
                            <Fragment>
                                <ToggleControl
                                    label={__("Animated", 'premium-blocks-for-gutenberg')}
                                    checked={secondStyles[0].secondAnim}
                                    onChange={newValue => saveSecondStyle({ secondAnim: newValue })}
                                />
                                <ToggleControl
                                    label={__('Stroke', 'premium-blocks-for-gutenberg')}
                                    checked={secondStyles[0].secondStroke}
                                    onChange={newValue => saveSecondStyle({ secondStroke: newValue })}
                                />
                            </Fragment>
                        )}
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
                            setAttributes={saveSecondStyle}
                            fontSizeType={{
                                value: secondStyles[0].secondSizeUnit,
                                label: __("secondSizeUnit", 'premium-blocks-for-gutenberg'),
                            }}
                            fontSize={secondStyles[0].secondSize}
                            fontSizeMobile={secondStyles[0].secondSizeMobile}
                            fontSizeTablet={secondStyles[0].secondSizeTablet}
                            onChangeSize={newSize => saveSecondStyle({ secondSize: newSize })}
                            onChangeTabletSize={newSize => saveSecondStyle({ secondSizeTablet: newSize })}
                            onChangeMobileSize={newSize => saveSecondStyle({ secondSizeMobile: newSize })}
                            fontFamily={secondStyles[0].secondFamily}
                            weight={secondStyles[0].secondWeight}
                            style={secondStyles[0].secondStyle}
                            spacing={secondStyles[0].secondLetter}
                            upper={secondStyles[0].secondUpper}
                            line={secondStyles[0].secondLine}
                            onChangeWeight={newWeight => saveSecondStyle({ secondWeight: newWeight || 500 })}
                            onChangeStyle={newStyle => saveSecondStyle({ secondStyle: newStyle })}
                            onChangeSpacing={newValue => saveSecondStyle({ secondLetter: newValue })}
                            onChangeUpper={check => saveSecondStyle({ secondUpper: check })}
                            onChangeFamily={(fontFamily) => saveSecondStyle({ secondFamily: fontFamily })}
                            onChangeLine={(newLine) => saveSecondStyle({ secondLine: newLine })}
                        />
                        {!secondStyles[0].secondClip && (
                            <Fragment>
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={secondStyles[0].secondColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveSecondStyle({ secondColor: newValue || "transparent" })}
                                />
                                <AdvancedPopColorControl
                                    label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                                    colorValue={secondStyles[0].secondBackground}
                                    colorDefault={''}
                                    onColorChange={value => saveSecondStyle({ secondBackground: value, })}
                                />
                            </Fragment>
                        )}
                        {secondStyles[0].secondClip && (
                            <Fragment>
                                <AdvancedPopColorControl
                                    label={__("First Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={secondStyles[0].secondColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveSecondStyle({ secondColor: newValue || "transparent" })}
                                />
                                <AdvancedPopColorControl
                                    label={__("Second Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={secondStyles[0].secondClipColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveSecondStyle({ secondClipColor: newValue || "transparent" })}
                                />
                            </Fragment>
                        )}

                        <PremiumBorder
                            borderType={secondStyles[0].secondBorderType}
                            borderWidth={secondStyles[0].secondBorderWidth}
                            top={secondBorderTop}
                            right={secondBorderRight}
                            bottom={secondBorderBottom}
                            left={secondBorderLeft}
                            borderColor={secondStyles[0].secondBorderColor}
                            borderRadius={secondStyles[0].secondBorderRadius}
                            onChangeType={(newType) => saveSecondStyle({ secondBorderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    secondBorder: true,
                                    secondBorderTop: top,
                                    secondBorderRight: right,
                                    secondBorderBottom: bottom,
                                    secondBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) => saveSecondStyle({ secondBorderColor: colorValue || "transparent", })}
                            onChangeRadius={(newrRadius) => saveSecondStyle({ secondBorderRadius: newrRadius || "0" })}
                        />

                        <PremiumShadow
                            label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                            color={secondStyles[0].secondShadowColor}
                            blur={secondStyles[0].secondShadowBlur}
                            horizontal={secondStyles[0].secondShadowHorizontal}
                            vertical={secondStyles[0].secondShadowVertical}
                            onChangeColor={newColor => saveSecondStyle({ secondShadowColor: newColor || "transparent" })}
                            onChangeBlur={newBlur => saveSecondStyle({ secondShadowBlur: newBlur || "0" })}
                            onChangehHorizontal={newValue => saveSecondStyle({ secondShadowHorizontal: newValue || "0" })}
                            onChangeVertical={newValue => saveSecondStyle({ secondShadowVertical: newValue || "0" })}
                        />

                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={secondMarginTop}
                            marginRight={secondMarginRight}
                            marginBottom={secondMarginBottom}
                            marginLeft={secondMarginLeft}
                            marginTopTablet={secondMarginTTablet}
                            marginRightTablet={secondMarginRTablet}
                            marginBottomTablet={secondMarginBTablet}
                            marginLeftTablet={secondMarginLTablet}
                            marginTopMobile={secondMarginTMobile}
                            marginRightMobile={secondMarginRMobile}
                            marginBottomMobile={secondMarginBMobile}
                            marginLeftMobile={secondMarginLMobile}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ secondMarginTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ secondMarginTTablet: newValue })
                                    } else {
                                        setAttributes({ secondMarginTMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ secondMarginRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ secondMarginRTablet: newValue })
                                    } else {
                                        setAttributes({ secondMarginRMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ secondMarginBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ secondMarginBTablet: newValue })
                                    } else {
                                        setAttributes({ secondMarginBMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ secondMarginLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ secondMarginLTablet: newValue })
                                    } else {
                                        setAttributes({ secondMarginLMobile: newValue })
                                    }
                                }
                            }
                            showUnits={false}
                        />
                        <PremiumResponsivePadding
                            paddingTop={secondPaddingTop}
                            paddingRight={secondPaddingRight}
                            paddingBottom={secondPaddingBottom}
                            paddingLeft={secondPaddingLeft}
                            paddingTopTablet={secondPaddingTTablet}
                            paddingRightTablet={secondPaddingRTablet}
                            paddingBottomTablet={secondPaddingBTablet}
                            paddingLeftTablet={secondPaddingLTablet}
                            paddingTopMobile={secondPaddingTMobile}
                            paddingRightMobile={secondPaddingRMobile}
                            paddingBottomMobile={secondPaddingBMobile}
                            paddingLeftMobile={secondPaddingLMobile}
                            showUnits={false}
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ secondPaddingTop: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ secondPaddingTTablet: newValue })
                                    } else {
                                        setAttributes({ secondPaddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ secondPaddingRight: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ secondPaddingRTablet: newValue })
                                    } else {
                                        setAttributes({ secondPaddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ secondPaddingBottom: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ secondPaddingBTablet: newValue })
                                    } else {
                                        setAttributes({ secondPaddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ secondPaddingLeft: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ secondPaddingLTablet: newValue })
                                    } else {
                                        setAttributes({ secondPaddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Container Style", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumBackgroundControl
                            setAttributes={setAttributes}
                            saveContainerStyle={saveContainerStyle}
                            backgroundType={backgroundType}
                            backgroundColor={containerStyles[0].containerBack}
                            backgroundImageID={containerStyles[0].backgroundImageID}
                            backgroundImageURL={containerStyles[0].backgroundImageURL}
                            backgroundPosition={containerStyles[0].backgroundPosition}
                            backgroundRepeat={containerStyles[0].backgroundRepeat}
                            backgroundSize={containerStyles[0].backgroundSize}
                            fixed={containerStyles[0].fixed}
                            gradientLocationOne={containerStyles[0].gradientLocationOne}
                            gradientColorTwo={containerStyles[0].gradientColorTwo}
                            gradientLocationTwo={containerStyles[0].gradientLocationTwo}
                            gradientAngle={containerStyles[0].gradientAngle}
                            gradientPosition={containerStyles[0].gradientPosition}
                            gradientType={containerStyles[0].gradientType}
                        />
                        <PremiumBorder
                            borderType={containerStyles[0].containerBorderType}
                            borderWidth={containerStyles[0].containerBorderWidth}
                            top={containerBorderTop}
                            right={containerBorderRight}
                            bottom={containerBorderBottom}
                            left={containerBorderLeft}
                            borderColor={containerStyles[0].containerBorderColor}
                            borderRadius={containerStyles[0].containerBorderRadius}
                            onChangeType={(newType) => saveContainerStyle({ containerBorderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    containerBorder: true,
                                    containerBorderTop: top,
                                    containerBorderRight: right,
                                    containerBorderBottom: bottom,
                                    containerBorderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) => saveContainerStyle({ containerBorderColor: colorValue, })}
                            onChangeRadius={(newrRadius) => saveContainerStyle({ containerBorderRadius: newrRadius })}
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
                    background: backgroundType === 'solid' ? containerStyles[0].containerBack : "transparent",
                    backgroundImage: btnbg,
                    backgroundRepeat: containerStyles[0].backgroundRepeat,
                    backgroundPosition: containerStyles[0].backgroundPosition,
                    backgroundSize: containerStyles[0].backgroundSize,
                    backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
                    borderStyle: containerStyles[0].containerBorderType,
                    borderWidth: containerBorder
                        ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
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
                                fontSize: `${firstFontSize}${firstStyles[0].firstSizeUnit}`,
                                display: display,
                                color: firstStyles[0].firstColor,
                                backgroundColor: firstStyles[0].firstClip ? "none" : firstStyles[0].firstBackground,
                                backgroundImage: firstStyles[0].firstClip
                                    ? `linear-gradient(to left, ${firstStyles[0].firstColor}, ${firstStyles[0].firstClipColor})`
                                    : "none",
                                fontFamily: firstStyles[0].firstFamily,
                                letterSpacing: firstStyles[0].firstLetter + "px",
                                textTransform: firstStyles[0].firstUpper ? "uppercase" : "none",
                                fontStyle: firstStyles[0].firstStyle,
                                lineHeight: `${firstStyles[0].firstLine}px`,
                                fontWeight: firstStyles[0].firstWeight,
                                borderStyle: firstStyles[0].firstBorderType,
                                borderWidth: firstBorder
                                    ? `${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px`
                                    : firstStyles[0].firstBorderWidth + "px",
                                borderRadius: firstStyles[0].firstBorderRadius + "px",
                                borderColor: firstStyles[0].firstBorderColor,
                                paddingTop: `${firstPadTop}px`,
                                paddingRight: `${firstPadRight}px`,
                                paddingBottom: `${firstPadBottom}px`,
                                paddingLeft: `${firstPadLeft}px`,
                                marginTop: `${firstMarTop}px`,
                                marginRight: `${firstMarRight}px`,
                                marginBottom: `${firstMarBottom}px`,
                                marginLeft: `${firstMarLeft}px`,
                                textShadow: `${firstStyles[0].firstShadowHorizontal}px ${firstStyles[0].firstShadowVertical}px ${firstStyles[0].firstShadowBlur}px ${firstStyles[0].firstShadowColor}`
                            }}
                        >
                            {firstHeading}
                        </span>
                        <span
                            className={`premium-dheading-block__second premium-headingc-${secondStyles[0].secondClip} premium-headinga-${secondStyles[0].secondAnim} premium-headings-${secondStyles[0].secondStroke}`}
                            style={{
                                fontSize: `${secondFontSize}${secondStyles[0].secondSizeUnit}`,
                                display: display,
                                color: secondStyles[0].secondColor,
                                backgroundColor: secondStyles[0].secondClip ? "none" : secondStyles[0].secondBackground,
                                backgroundImage: secondStyles[0].secondClip
                                    ? `linear-gradient(to left, ${secondStyles[0].secondColor}, ${secondStyles[0].secondClipColor})`
                                    : "none",
                                fontFamily: secondStyles[0].secondFamily,
                                letterSpacing: secondStyles[0].secondLetter + "px",
                                textTransform: secondStyles[0].secondUpper ? "uppercase" : "none",
                                fontStyle: secondStyles[0].secondStyle,
                                fontWeight: secondStyles[0].secondWeight,
                                lineHeight: `${secondStyles[0].secondLine}px`,
                                borderStyle: secondStyles[0].secondBorderType,
                                borderWidth: secondBorder
                                    ? `${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px`
                                    : secondStyles[0].secondBorderWidth + "px",
                                borderRadius: secondStyles[0].secondBorderRadius + "px",
                                borderColor: secondStyles[0].secondBorderColor,
                                paddingTop: `${secondPadTop}px`,
                                paddingRight: `${secondPadRight}px`,
                                paddingBottom: `${secondPadBottom}px`,
                                paddingLeft: `${secondPadLeft}px`,
                                marginTop: `${secondMarTop}px`,
                                marginRight: `${secondMarRight}px`,
                                marginBottom: `${secondMarBottom}px`,
                                marginLeft: `${secondMarLeft}px`,
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
                {loadFirstGoogleFonts}
                {loadSecondGoogleFonts}
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