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
            firstBorder,
            secondBorder,
            containerBorder,
            backgroundType
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
                            components={["responsiveSize", "weight", "style", "upper", "spacing", "family"]}
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
                            onChangeWeight={newWeight => saveFirstStyle({ firstWeight: newWeight || 500 })}
                            onChangeStyle={newStyle => saveFirstStyle({ firstStyle: newStyle })}
                            onChangeSpacing={newValue => saveFirstStyle({ firstLetter: newValue })}
                            onChangeUpper={check => saveFirstStyle({ firstUpper: check })}
                            onChangeFamily={(fontFamily) => saveFirstStyle({ firstFamily: fontFamily })}
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
                            label={__("Border")}
                            value={firstBorder}
                            borderType={firstBorder.borderType}
                            borderColor={firstBorder.borderColor}
                            borderWidth={firstBorder.borderWidth}
                            borderRadius={firstBorder.borderRadius}
                            onChange={(value) => setAttributes({ firstBorder: value })}
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
                        <ResponsiveSingleRangeControl
                            label={__("Margin Left", 'premium-blocks-for-gutenberg')}
                            value={firstStyles[0].firstMarginL}
                            onChange={newMargin => saveFirstStyle({ firstMarginL: newMargin })}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Margin Right", 'premium-blocks-for-gutenberg')}
                            value={firstStyles[0].firstMarginR}
                            onChange={newMargin => saveFirstStyle({ firstMarginR: newMargin })}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Padding", 'premium-blocks-for-gutenberg')}
                            value={firstStyles[0].firstPadding}
                            onChange={newPadding => saveFirstStyle({ firstPadding: newPadding })}
                            showUnit={false}
                            defaultValue={0}
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
                            components={["responsiveSize", "weight", "style", "upper", "spacing", "family"]}
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
                            onChangeWeight={newWeight => saveSecondStyle({ secondWeight: newWeight || 500 })}
                            onChangeStyle={newStyle => saveSecondStyle({ secondStyle: newStyle })}
                            onChangeSpacing={newValue => saveSecondStyle({ secondLetter: newValue })}
                            onChangeUpper={check => saveSecondStyle({ secondUpper: check })}
                            onChangeFamily={(fontFamily) => saveSecondStyle({ secondFamily: fontFamily })}
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
                            label={__("Border")}
                            value={secondBorder}
                            borderType={secondBorder.borderType}
                            borderColor={secondBorder.borderColor}
                            borderWidth={secondBorder.borderWidth}
                            borderRadius={secondBorder.borderRadius}
                            onChange={(value) => setAttributes({ secondBorder: value })}
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
                        <ResponsiveSingleRangeControl
                            label={__("Margin Left", 'premium-blocks-for-gutenberg')}
                            value={secondStyles[0].secondMarginL}
                            onChange={newMargin => saveSecondStyle({ secondMarginL: newMargin })}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Margin Right", 'premium-blocks-for-gutenberg')}
                            value={secondStyles[0].secondMarginR}
                            onChange={newMargin => saveSecondStyle({ secondMarginR: newMargin || "0" })}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Padding", 'premium-blocks-for-gutenberg')}
                            value={secondStyles[0].secondPadding}
                            onChange={newPadding => saveSecondStyle({ secondPadding: newPadding || "0" })}
                            showUnit={false}
                            defaultValue={0}
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
                            label={__("Border")}
                            value={containerBorder}
                            borderType={containerBorder.borderType}
                            borderColor={containerBorder.borderColor}
                            borderWidth={containerBorder.borderWidth}
                            borderRadius={containerBorder.borderRadius}
                            onChange={(value) => setAttributes({ containerBorder: value })}
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
                    borderStyle: containerBorder && containerBorder.borderType,
                    borderTopWidth: containerBorder && containerBorder.borderWidth.Desktop.top,
                    borderRightWidth: containerBorder && containerBorder.borderWidth.Desktop.right,
                    borderBottomWidth: containerBorder && containerBorder.borderWidth.Desktop.bottom,
                    borderLeftWidth: containerBorder && containerBorder.borderWidth.Desktop.left,
                    borderRadius: `${containerBorder && containerBorder.borderRadius.Desktop.top || 0}px ${containerBorder && containerBorder.borderRadius.Desktop.right || 0}px ${containerBorder && containerBorder.borderRadius.Desktop.bottom || 0}px ${containerBorder && containerBorder.borderRadius.Desktop.left || 0}px`,
                    borderColor: containerBorder && containerBorder.borderColor,
                    borderTopLeftRadius: `${containerBorder && containerBorder.borderRadius.Desktop.top || 0}px`,
                    borderTopRightRadius: `${containerBorder && containerBorder.borderRadius.Desktop.right || 0}px`,
                    borderBottomLeftRadius: `${containerBorder && containerBorder.borderRadius.Desktop.bottom || 0}px`,
                    borderBottomRightRadius: `${containerBorder && containerBorder.borderRadius.Desktop.left || 0}px`,
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
                                fontWeight: firstStyles[0].firstWeight,
                                borderStyle: firstBorder && firstBorder.borderType,
                                borderTopWidth: firstBorder && firstBorder.borderWidth.Desktop.top,
                                borderRightWidth: firstBorder && firstBorder.borderWidth.Desktop.right,
                                borderBottomWidth: firstBorder && firstBorder.borderWidth.Desktop.bottom,
                                borderLeftWidth: firstBorder && firstBorder.borderWidth.Desktop.left,
                                borderRadius: `${firstBorder && firstBorder.borderRadius.Desktop.top || 0}px ${firstBorder && firstBorder.borderRadius.Desktop.right || 0}px ${firstBorder && firstBorder.borderRadius.Desktop.bottom || 0}px ${firstBorder && firstBorder.borderRadius.Desktop.left || 0}px`,
                                borderColor: firstBorder && firstBorder.borderColor,
                                borderTopLeftRadius: `${firstBorder && firstBorder.borderRadius.Desktop.top || 0}px`,
                                borderTopRightRadius: `${firstBorder && firstBorder.borderRadius.Desktop.right || 0}px`,
                                borderBottomLeftRadius: `${firstBorder && firstBorder.borderRadius.Desktop.bottom || 0}px`,
                                borderBottomRightRadius: `${firstBorder && firstBorder.borderRadius.Desktop.left || 0}px`,
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
                                borderStyle: secondBorder && secondBorder.borderType,
                                borderTopWidth: secondBorder && secondBorder.borderWidth.Desktop.top,
                                borderRightWidth: secondBorder && secondBorder.borderWidth.Desktop.right,
                                borderBottomWidth: secondBorder && secondBorder.borderWidth.Desktop.bottom,
                                borderLeftWidth: secondBorder && secondBorder.borderWidth.Desktop.left,
                                borderRadius: `${secondBorder && secondBorder.borderRadius.Desktop.top || 0}px ${secondBorder && secondBorder.borderRadius.Desktop.right || 0}px ${secondBorder && secondBorder.borderRadius.Desktop.bottom || 0}px ${secondBorder && secondBorder.borderRadius.Desktop.left || 0}px`,
                                borderColor: secondBorder && secondBorder.borderColor,
                                borderTopLeftRadius: `${secondBorder && secondBorder.borderRadius.Desktop.top || 0}px`,
                                borderTopRightRadius: `${secondBorder && secondBorder.borderRadius.Desktop.right || 0}px`,
                                borderBottomLeftRadius: `${secondBorder && secondBorder.borderRadius.Desktop.bottom || 0}px`,
                                borderBottomRightRadius: `${secondBorder && secondBorder.borderRadius.Desktop.left || 0}px`,
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