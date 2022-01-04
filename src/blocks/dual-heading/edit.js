import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import PremiumRangeControl from "../../components/premium-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
import map from 'lodash/map';
const { __ } = wp.i18n;
const { withSelect } = wp.data


const { Fragment, Component } = wp.element;

const {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
    Button,
    ButtonGroup,
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
            backgroundType
        } = this.props.attributes;

        const DISPLAY = [
            {
                value: "inline",
                label: __("Inline", 'premium-block-for-gutenberg')
            },
            {
                value: "block",
                label: __("Block", 'premium-block-for-gutenberg')
            }
        ];

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

        const gradTypes = [
            { key: 'linear', name: __('Linear') },
            { key: 'radial', name: __('Radial') },
        ];
        const bgType = [
            { key: 'solid', name: __('Solid') },
            { key: 'gradient', name: __('Gradient') },
        ];

        const firstFontSize = this.getPreviewSize(this.props.deviceType, firstStyles[0].firstSize, firstStyles[0].firstSizeTablet, firstStyles[0].firstSizeMobile);
        const secondFontSize = this.getPreviewSize(this.props.deviceType, secondStyles[0].secondSize, secondStyles[0].secondSizeTablet, secondStyles[0].secondSizeMobile);

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
                        title={__("General Settings", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TextControl
                            label={__("First Heading", 'premium-block-for-gutenberg')}
                            type="url"
                            value={firstHeading}
                            onChange={value => setAttributes({ firstHeading: value })}
                        />
                        <TextControl
                            label={__("Second Heading", 'premium-block-for-gutenberg')}
                            type="url"
                            value={secondHeading}
                            onChange={value => setAttributes({ secondHeading: value })}
                        />

                        <SelectControl
                            label={__("Display", 'premium-block-for-gutenberg')}
                            value={display}
                            options={DISPLAY}
                            onChange={value => setAttributes({ display: value })}
                        />
                        <ToggleControl
                            label={__("Link", 'premium-block-for-gutenberg')}
                            checked={link}
                            onChange={newValue => setAttributes({ link: newValue })}
                        />
                        {link && (
                            <ToggleControl
                                label={__("Open link in new tab", 'premium-block-for-gutenberg')}
                                checked={target}
                                onChange={newValue => setAttributes({ target: newValue })}
                            />
                        )}
                    </PanelBody>
                    <PanelBody
                        title={__("First Heading Style", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Clipped", 'premium-block-for-gutenberg')}
                            checked={firstStyles[0].firstClip}
                            onChange={newValue => saveFirstStyle({ firstClip: newValue })}
                        />
                        {firstStyles[0].firstClip && (
                            <Fragment>
                                <ToggleControl
                                    label={__("Animated", 'premium-block-for-gutenberg')}
                                    checked={firstStyles[0].firstAnim}
                                    onChange={newValue => saveFirstStyle({ firstAnim: newValue })}
                                />
                                <ToggleControl
                                    label={__("Stroke", 'premium-block-for-gutenberg')}
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
                                label: __("firstSizeUnit", 'premium-block-for-gutenberg'),
                            }}
                            fontSize={{
                                value: firstStyles[0].firstSize,
                                label: __("firstSize", 'premium-block-for-gutenberg'),
                            }}
                            fontSizeMobile={{
                                value: firstStyles[0].firstSizeMobile,
                                label: __("firstSizeMobile", 'premium-block-for-gutenberg'),
                            }}
                            fontSizeTablet={{
                                value: firstStyles[0].firstSizeTablet,
                                label: __("firstSizeTablet", 'premium-block-for-gutenberg'),
                            }}
                            fontFamily={firstStyles[0].firstFamily}

                            weight={firstStyles[0].firstWeight}
                            style={firstStyles[0].firstStyle}
                            spacing={firstStyles[0].firstLetter}
                            upper={firstStyles[0].firstUpper}
                            onChangeWeight={newWeight =>
                                saveFirstStyle({ firstWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle => saveFirstStyle({ firstStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                saveFirstStyle({ firstLetter: newValue })
                            }
                            onChangeUpper={check => saveFirstStyle({ firstUpper: check })}
                            onChangeFamily={(fontFamily) => saveFirstStyle({ firstFamily: fontFamily })}
                        />

                        {!firstStyles[0].firstClip && (

                            <Fragment>

                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-block-for-gutenberg')}
                                    colorValue={firstStyles[0].firstColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveFirstStyle({
                                            firstColor: newValue
                                        })
                                    }
                                />
                                <PremiumBackground
                                    type="color"
                                    colorValue={firstStyles[0].firstBackground}
                                    onChangeColor={value =>
                                        saveFirstStyle({
                                            firstBackground: value,
                                        })
                                    }
                                    opacityValue={firstStyles[0].firstOpacity}
                                    onChangeOpacity={value =>
                                        saveFirstStyle({
                                            firstOpacity: value,
                                        })
                                    }
                                />
                            </Fragment>
                        )}

                        {firstStyles[0].firstClip && (

                            <Fragment>

                                <AdvancedPopColorControl
                                    label={__("First Color", 'premium-block-for-gutenberg')}
                                    colorValue={firstStyles[0].firstColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveFirstStyle({
                                            firstColor: newValue
                                        })
                                    }
                                />

                                <AdvancedPopColorControl
                                    label={__("Second Color", 'premium-block-for-gutenberg')}
                                    colorValue={firstStyles[0].firstClipColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveFirstStyle({
                                            firstClipColor: newValue
                                        })
                                    }
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
                            onChangeType={(newType) =>
                                saveFirstStyle({ firstBorderType: newType })
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
                                saveFirstStyle({
                                    firstBorderColor: colorValue.hex || "transparent",
                                })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveFirstStyle({ firstBorderRadius: newrRadius || "0" })
                            }
                        />

                        <PremiumTextShadow
                            color={firstStyles[0].firstShadowColor}
                            blur={firstStyles[0].firstShadowBlur}
                            horizontal={firstStyles[0].firstShadowHorizontal}
                            vertical={firstStyles[0].firstShadowVertical}
                            onChangeColor={newColor =>
                                saveFirstStyle({ firstShadowColor: newColor.hex || "transparent" })
                            }
                            onChangeBlur={newBlur =>
                                saveFirstStyle({ firstShadowBlur: newBlur || "0" })
                            }
                            onChangehHorizontal={newValue =>
                                saveFirstStyle({ firstShadowHorizontal: newValue || "0" })
                            }
                            onChangeVertical={newValue =>
                                saveFirstStyle({ firstShadowVertical: newValue || "0" })
                            }
                        />
                        <PremiumRangeControl
                            label={__("Margin Left", 'premium-block-for-gutenberg')}
                            value={firstStyles[0].firstMarginL}
                            onChange={newMargin =>
                                saveFirstStyle({ firstMarginL: newMargin || "0" })
                            }
                            showUnit={false}
                            defaultValue={0}
                        />
                        <PremiumRangeControl
                            label={__("Margin Right", 'premium-block-for-gutenberg')}
                            value={firstStyles[0].firstMarginR}
                            onChange={newMargin =>
                                saveFirstStyle({ firstMarginR: newMargin })
                            }
                            showUnit={false}
                            defaultValue={0}
                        />
                        <PremiumRangeControl
                            label={__("Padding", 'premium-block-for-gutenberg')}
                            value={firstStyles[0].firstPadding}
                            onChange={newPadding =>
                                saveFirstStyle({ firstPadding: newPadding })
                            }
                            showUnit={false}
                            defaultValue={0}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Second Heading Style", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Clipped", 'premium-block-for-gutenberg')}
                            checked={secondStyles[0].secondClip}
                            onChange={newValue => saveSecondStyle({ secondClip: newValue })}
                        />
                        {secondStyles[0].secondClip && (
                            <Fragment>
                                <ToggleControl
                                    label={__("Animated", 'premium-block-for-gutenberg')}
                                    checked={secondStyles[0].secondAnim}
                                    onChange={newValue => saveSecondStyle({ secondAnim: newValue })}
                                />
                                <ToggleControl
                                    label={__('Stroke', 'premium-block-for-gutenberg')}
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
                                label: __("secondSizeUnit", 'premium-block-for-gutenberg'),
                            }}
                            fontSize={{
                                value: secondStyles[0].secondSize,
                                label: __("secondSize", 'premium-block-for-gutenberg'),
                            }}
                            fontSizeMobile={{
                                value: secondStyles[0].secondSizeMobile,
                                label: __("secondSizeMobile", 'premium-block-for-gutenberg'),
                            }}
                            fontSizeTablet={{
                                value: secondStyles[0].secondSizeTablet,
                                label: __("secondSizeTablet", 'premium-block-for-gutenberg'),
                            }}
                            fontFamily={secondStyles[0].secondFamily}
                            weight={secondStyles[0].secondWeight}
                            style={secondStyles[0].secondStyle}
                            spacing={secondStyles[0].secondLetter}
                            upper={secondStyles[0].secondUpper}
                            onChangeWeight={newWeight =>
                                saveSecondStyle({ secondWeight: newWeight || 500 })
                            }
                            onChangeStyle={newStyle => saveSecondStyle({ secondStyle: newStyle })}
                            onChangeSpacing={newValue =>
                                saveSecondStyle({ secondLetter: newValue })
                            }
                            onChangeUpper={check => saveSecondStyle({ secondUpper: check })}
                            onChangeFamily={(fontFamily) => saveSecondStyle({ secondFamily: fontFamily })}
                        />
                        {!secondStyles[0].secondClip && (
                            <Fragment>
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-block-for-gutenberg')}
                                    colorValue={secondStyles[0].secondColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveSecondStyle({
                                            secondColor: newValue || "transparent"
                                        })
                                    }
                                />
                                <PremiumBackground
                                    type="color"
                                    colorValue={secondStyles[0].secondBackground}
                                    onChangeColor={value =>
                                        saveSecondStyle({
                                            secondBackground: value,
                                        })
                                    }
                                    opacityValue={secondStyles[0].secondOpacity}
                                    onChangeOpacity={value =>
                                        saveSecondStyle({
                                            secondOpacity: value,
                                        })
                                    }
                                />
                            </Fragment>
                        )}
                        {secondStyles[0].secondClip && (
                            <Fragment>
                                <AdvancedPopColorControl
                                    label={__("First Color", 'premium-block-for-gutenberg')}
                                    colorValue={secondStyles[0].secondColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveSecondStyle({
                                            secondColor: newValue || "transparent"
                                        })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__("Second Color", 'premium-block-for-gutenberg')}
                                    colorValue={secondStyles[0].secondClipColor}
                                    colorDefault={''}
                                    onColorChange={newValue =>
                                        saveSecondStyle({
                                            secondClipColor: newValue || "transparent"
                                        })
                                    }
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
                            onChangeType={(newType) =>
                                saveSecondStyle({ secondBorderType: newType })
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
                                saveSecondStyle({
                                    secondBorderColor: colorValue.hex || "transparent",
                                })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveSecondStyle({ secondBorderRadius: newrRadius || "0" })
                            }
                        />

                        <PremiumTextShadow
                            color={secondStyles[0].secondShadowColor}
                            blur={secondStyles[0].secondShadowBlur}
                            horizontal={secondStyles[0].secondShadowHorizontal}
                            vertical={secondStyles[0].secondShadowVertical}
                            onChangeColor={newColor =>
                                saveSecondStyle({
                                    secondShadowColor: newColor.hex || "transparent"
                                })
                            }
                            onChangeBlur={newBlur =>
                                saveSecondStyle({ secondShadowBlur: newBlur || "0" })
                            }
                            onChangehHorizontal={newValue =>
                                saveSecondStyle({ secondShadowHorizontal: newValue || "0" })
                            }
                            onChangeVertical={newValue =>
                                saveSecondStyle({ secondShadowVertical: newValue || "0" })
                            }
                        />
                        <PremiumRangeControl
                            label={__("Margin Left", 'premium-block-for-gutenberg')}
                            value={secondStyles[0].secondMarginL}
                            onChange={newMargin =>
                                saveSecondStyle({ secondMarginL: newMargin })
                            }
                            showUnit={false}
                            defaultValue={0}
                        />
                        <PremiumRangeControl
                            label={__("Margin Right", 'premium-block-for-gutenberg')}
                            value={secondStyles[0].secondMarginR}
                            onChange={newMargin =>
                                saveSecondStyle({ secondMarginR: newMargin || "0" })
                            }
                            showUnit={false}
                            defaultValue={0}
                        />
                        <PremiumRangeControl
                            label={__("Padding", 'premium-block-for-gutenberg')}
                            value={secondStyles[0].secondPadding}
                            onChange={newPadding =>
                                saveSecondStyle({ secondPadding: newPadding || "0" })
                            }
                            showUnit={false}
                            defaultValue={0}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Container Style", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <div className="kt-btn-size-settings-container">
                            <h2 className="kt-beside-btn-group">{__('Background Type', 'premium-block-for-gutenberg')}</h2>
                            <ButtonGroup className="kt-button-size-type-options" aria-label={__('Background Type', 'premium-block-for-gutenberg')}>
                                {map(bgType, ({ name, key }) => (
                                    <Button
                                        key={key}
                                        className="kt-btn-size-btn"
                                        isSmall
                                        onClick={() => setAttributes({ backgroundType: key })}
                                    >
                                        { name}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </div>
                        {'solid' === backgroundType && (
                            <div className="kt-inner-sub-section">
                                <PremiumBackground
                                    type="color"
                                    colorValue={containerStyles[0].containerBack}
                                    onChangeColor={newvalue =>
                                        saveContainerStyle({
                                            containerBack: newvalue,
                                        })
                                    }
                                    opacityValue={containerStyles[0].containerOpacity}
                                    onChangeOpacity={value =>
                                        saveContainerStyle({ containerOpacity: value })
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
                                        saveContainerStyle({
                                            imageID: media.id,
                                            imageURL: media.url
                                        });
                                    }}
                                    onRemoveImage={value =>
                                        saveContainerStyle({ imageURL: "", imageID: "" })
                                    }
                                    onChangeBackPos={newValue =>
                                        saveContainerStyle({ backgroundPosition: newValue })
                                    }
                                    onchangeBackRepeat={newValue =>
                                        saveContainerStyle({ backgroundRepeat: newValue })
                                    }
                                    onChangeBackSize={newValue =>
                                        saveContainerStyle({ backgroundSize: newValue })
                                    }
                                    onChangeFixed={check => saveContainerStyle({ fixed: check })}
                                />
                            </div>
                        )}
                        {'gradient' === backgroundType && (
                            <div className="kt-inner-sub-section">
                                <AdvancedPopColorControl
                                    label={__('Gradient Color 1', 'premium-block-for-gutenberg')}
                                    colorValue={containerStyles[0].containerBack}
                                    colorDefault={''}
                                    onColorChange={value => {
                                        saveContainerStyle({ containerBack: value })
                                    }}
                                />
                                <PremiumRangeControl
                                    label={__('Location', 'premium-block-for-gutenberg')}
                                    value={containerStyles[0].gradientLocationOne}
                                    onChange={(value) => {
                                        saveContainerStyle({ gradientLocationOne: value })
                                    }}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                                <AdvancedPopColorControl
                                    label={__('Gradient Color 2', 'premium-block-for-gutenberg')}
                                    colorValue={containerStyles[0].gradientColorTwo}
                                    colorDefault={'#777777'}
                                    onColorChange={value => {
                                        saveContainerStyle({ gradientColorTwo: value })
                                    }}
                                />
                                <PremiumRangeControl
                                    label={__('Location', 'premium-block-for-gutenberg')}
                                    value={containerStyles[0].gradientLocationTwo}
                                    onChange={(value) => {
                                        saveContainerStyle({ gradientLocationTwo: value })
                                    }}
                                    showUnit={false}
                                    defaultValue={0}
                                />
                                <div className="kt-btn-size-settings-container">
                                    <h2 className="kt-beside-btn-group">{__('Gradient Type', 'premium-block-for-gutenberg')}</h2>
                                    <ButtonGroup className="kt-button-size-type-options" aria-label={__('Gradient Type', 'premium-block-for-gutenberg')}>
                                        {map(gradTypes, ({ name, key }) => (
                                            <Button
                                                key={key}
                                                className="kt-btn-size-btn"
                                                isSmall
                                                onClick={() => {
                                                    saveContainerStyle({ gradientType: key })
                                                }}
                                            >
                                                { name}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </div>
                                { 'radial' !== (containerStyles[0].gradientType) && (
                                    <PremiumRangeControl
                                        label={__('Gradient Angle', 'premium-block-for-gutenberg')}
                                        value={containerStyles[0].gradientAngle}
                                        onChange={(value) => {
                                            saveContainerStyle({ gradientAngle: value })
                                        }}
                                        showUnit={false}
                                        defaultValue={0}
                                        min={0}
                                        max={360}
                                    />
                                )}
                                { 'radial' === (containerStyles[0].gradientType) && (
                                    <SelectControl
                                        label={__('Gradient Position', 'premium-block-for-gutenberg')}
                                        value={(containerStyles[0].gradientPosition)}
                                        options={[
                                            { value: 'center top', label: __('Center Top', 'premium-block-for-gutenberg') },
                                            { value: 'center center', label: __('Center Center', 'premium-block-for-gutenberg') },
                                            { value: 'center bottom', label: __('Center Bottom', 'premium-block-for-gutenberg') },
                                            { value: 'left top', label: __('Left Top', 'premium-block-for-gutenberg') },
                                            { value: 'left center', label: __('Left Center', 'premium-block-for-gutenberg') },
                                            { value: 'left bottom', label: __('Left Bottom', 'premium-block-for-gutenberg') },
                                            { value: 'right top', label: __('Right Top', 'premium-block-for-gutenberg') },
                                            { value: 'right center', label: __('Right Center', 'premium-block-for-gutenberg') },
                                            { value: 'right bottom', label: __('Right Bottom', 'premium-block-for-gutenberg') },
                                        ]}
                                        onChange={value => saveContainerStyle({ gradientPosition: value })}
                                    />
                                )}
                            </div>
                        )}
                        <PremiumBorder
                            borderType={containerStyles[0].containerBorderType}
                            borderWidth={containerStyles[0].containerBorderWidth}
                            top={containerBorderTop}
                            right={containerBorderRight}
                            bottom={containerBorderBottom}
                            left={containerBorderLeft}
                            borderColor={containerStyles[0].containerBorderColor}
                            borderRadius={containerStyles[0].containerBorderRadius}
                            onChangeType={(newType) =>
                                saveContainerStyle({ containerBorderType: newType })
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
                                saveContainerStyle({
                                    containerBorderColor: colorValue.hex,
                                })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveContainerStyle({ containerBorderRadius: newrRadius })
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
                    backgroundColor: containerStyles[0].containerBack,
                    backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
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
                                fontWeight: firstStyles[0].firstWeight,
                                borderStyle: firstStyles[0].firstBorderType,
                                borderWidth: firstBorder
                                    ? `${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px`
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
                                borderStyle: secondStyles[0].secondBorderType,
                                borderWidth: secondBorder
                                    ? `${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px`
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