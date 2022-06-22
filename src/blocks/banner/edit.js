import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumFilters from "../../components/premium-filters";
import SpacingComponent from '../../components/premium-responsive-spacing';
import PremiumMediaUpload from "../../components/premium-media-upload";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import RadioComponent from '../../components/radio-control';
import PremiumShadow from "../../components/PremiumShadow";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import { generateBlockId, generateCss } from '../../components/HelperFunction';

const { withSelect } = wp.data
const { __ } = wp.i18n;
const { Component } = wp.element;

const {
    IconButton,
    Toolbar,
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
} = wp.components;

const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    RichText,
    MediaPlaceholder
} = wp.blockEditor;

export class edit extends Component {
    constructor() {
        super(...arguments);
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

    componentDidMount() {
        if (!this.props.attributes.blockId) {
            this.props.setAttributes({ blockId: "premium-banner-" + generateBlockId(this.props.clientId) });
        }
        this.props.setAttributes({ classMigrate: true });
    };

    render() {
        const { isSelected, setAttributes, className, clientId: blockID } = this.props;

        const {
            imageURL,
            titleStyles,
            descStyles,
            title,
            titleTag,
            desc,
            contentAlign,
            effect,
            hoverEffect,
            height,
            minHeight,
            verAlign,
            hovered,
            responsive,
            background,
            opacity,
            urlCheck,
            target,
            url,
            sepColor,
            blur,
            bright,
            contrast,
            saturation,
            hue,
            hideDesktop,
            hideTablet,
            hideMobile,
            border,
            padding,
            titleTypography,
            descTypography,
            titleTextShadow,
            descTextShadow,
            containerShadow,
            blockId
        } = this.props.attributes;

        const ALIGNS = [
            {
                value: "flex-start",
                label: __("Top", 'premium-blocks-for-gutenberg')
            },
            {
                value: "center",
                label: __("Middle", 'premium-blocks-for-gutenberg')
            },
            {
                value: "flex-end",
                label: __("Bottom", 'premium-blocks-for-gutenberg')
            },
            {
                value: "inherit",
                label: __("Full", 'premium-blocks-for-gutenberg')
            }
        ];

        const EFFECTS = [
            {
                value: "effect1",
                label: __("Style 1", 'premium-blocks-for-gutenberg')
            },
            {
                value: "effect2",
                label: __("Style 2", 'premium-blocks-for-gutenberg')
            },
            {
                value: "effect3",
                label: __("Style 3", 'premium-blocks-for-gutenberg')
            },
            {
                value: "effect4",
                label: __("Style 4", 'premium-blocks-for-gutenberg')
            },
            {
                value: "effect5",
                label: __("Style 5", 'premium-blocks-for-gutenberg')
            },
            {
                value: "effect6",
                label: __("Style 6", 'premium-blocks-for-gutenberg')
            }
        ];

        const HOVER = [
            {
                value: "none",
                label: __("None", 'premium-blocks-for-gutenberg')
            },
            {
                value: "zoomin",
                label: __("Zoom In", 'premium-blocks-for-gutenberg')
            },
            {
                value: "zoomout",
                label: __("Zoom Out", 'premium-blocks-for-gutenberg')
            },
            {
                value: "scale",
                label: __("Scale", 'premium-blocks-for-gutenberg')
            },
            {
                value: "gray",
                label: __("Gray Scale", 'premium-blocks-for-gutenberg')
            },
            {
                value: "blur",
                label: __("Blur", 'premium-blocks-for-gutenberg')
            },
            {
                value: "bright",
                label: __("Bright", 'premium-blocks-for-gutenberg')
            },
            {
                value: "sepia",
                label: __("Sepia", 'premium-blocks-for-gutenberg')
            }
        ];

        const HEIGHT = [
            {
                value: "default",
                label: __("Default", 'premium-blocks-for-gutenberg')
            },
            {
                value: "custom",
                label: __("Custom", 'premium-blocks-for-gutenberg')
            }
        ];

        const mainClasses = classnames(className, "premium-banner");
        const titleFontSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titleSizeTablet, titleStyles[0].titleSizeMobile);
        const descFontSize = this.getPreviewSize(this.props.deviceType, descStyles[0].descSize, descStyles[0].descSizeTablet, descStyles[0].descSizeMobile);

        const saveStyles = (value) => {
            const newUpdate = titleStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });

            setAttributes({ titleStyles: newUpdate });
        }

        const descriptionStyles = (value) => {
            const newUpdate = descStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ descStyles: newUpdate });
        }

        const currentDevice = this.props.deviceType;
        const containerPaddingTop = padding[currentDevice].top;
        const containerPaddingRight = padding[currentDevice].right;
        const containerPaddingBottom = padding[currentDevice].bottom;
        const containerPaddingLeft = padding[currentDevice].left;
        const loadStyles = () => {
            const styles = {};

            styles[`.${blockId} .premium-banner__effect3 .premium-banner__title_wrap::after`] = {
                'background': sepColor
            };
            styles[`.${blockId} .premium-banner__inner`] = {
                'background': background
            };
            styles[`.${blockId} .premium-banner__img.premium-banner__active`] = {
                'background': `${background ? 1 - opacity / 100 : 1}`
            };

            return generateCss(styles);
        }

        return [
            isSelected && (
                <BlockControls key="controls">
                    <Toolbar>
                        <IconButton
                            label={__(
                                "Refresh this button when it conflict with other buttons styles"
                                , 'premium-blocks-for-gutenberg')}
                            icon="update"
                            className="components-toolbar__control"
                        />
                    </Toolbar>
                    <AlignmentToolbar
                        value={contentAlign}
                        onChange={newAlign => setAttributes({ contentAlign: newAlign })}
                    />
                </BlockControls>
            ),
            isSelected && imageURL && (
                <InspectorControls key={"inspector"}>
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("General", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <button className="lottie-remove" onClick={(e) => {
                                    e.preventDefault();
                                    setAttributes({
                                        imageURL: "",
                                        imageURL: ""
                                    })
                                }}>
                                    {__('Remove Image', 'premium-blocks-for-gutenberg')}
                                </button>
                                <ToggleControl
                                    label={__("Link", 'premium-blocks-for-gutenberg')}
                                    checked={urlCheck}
                                    onChange={newCheck => setAttributes({ urlCheck: newCheck })}
                                />
                                {urlCheck && (
                                    <TextControl
                                        value={url}
                                        onChange={newURL => setAttributes({ url: newURL })}
                                    />
                                )}
                                {urlCheck && (
                                    <ToggleControl
                                        label={__("Open link in new tab", 'premium-blocks-for-gutenberg')}
                                        checked={target}
                                        onChange={newValue => setAttributes({ target: newValue })}
                                    />
                                )}
                                <SelectControl
                                    label={__("Banner Style", 'premium-blocks-for-gutenberg')}
                                    value={effect}
                                    onChange={newEffect => setAttributes({ effect: newEffect })}
                                    options={EFFECTS}
                                />
                                <ToggleControl
                                    label={__("Always Hovered", 'premium-blocks-for-gutenberg')}
                                    checked={hovered}
                                    onChange={check => setAttributes({ hovered: check })}
                                />
                                <SelectControl
                                    label={__("Image Hover Effect", 'premium-blocks-for-gutenberg')}
                                    options={HOVER}
                                    value={hoverEffect}
                                    onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                                />
                                <SelectControl
                                    label={__("Height", 'premium-blocks-for-gutenberg')}
                                    options={HEIGHT}
                                    value={height}
                                    onChange={newHeight => setAttributes({ height: newHeight })}
                                />
                                {"custom" === height && (
                                    <ResponsiveSingleRangeControl
                                        label={__("Min Height (PX)", 'premium-blocks-for-gutenberg')}
                                        value={minHeight}
                                        min="10"
                                        max="800"
                                        onChange={newSize => setAttributes({ minHeight: newSize })}
                                        showUnit={false}
                                        defaultValue={100}
                                    />
                                )}
                                {"custom" === height && (
                                    <SelectControl
                                        label={__("Vertical Align", 'premium-blocks-for-gutenberg')}
                                        options={ALIGNS}
                                        value={verAlign}
                                        onChange={newValue => setAttributes({ verAlign: newValue })}
                                    />
                                )}
                                <ToggleControl
                                    label={__("Hide Description on Mobiles", 'premium-blocks-for-gutenberg')}
                                    checked={responsive}
                                    onChange={newValue => setAttributes({ responsive: newValue })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Title", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <RadioComponent
                                    choices={[{ label: __('H1'), value: 'h1' }, { label: __('H2'), value: 'h2' }, { label: __('H3'), value: 'h3' }, { label: __('H4'), value: 'h4' }, { label: __('H5'), value: 'h5' }, { label: __('H6'), value: 'h6' }]}
                                    value={titleTag}
                                    onChange={(newValue) => setAttributes({ titleTag: newValue })}
                                    label={__("HTML Tag", 'premium-blocks-for-gutenberg')}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("General Settings", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <AdvancedPopColorControl
                                    label={__("Overlay", 'premium-blocks-for-gutenberg')}
                                    colorValue={background}
                                    colorDefault={''}
                                    onColorChange={newValue => setAttributes({ background: newValue === undefined ? "transparent" : newValue })}
                                />
                                <ResponsiveSingleRangeControl
                                    label={__("Overlay Opacity", 'premium-blocks-for-gutenberg')}
                                    value={opacity}
                                    min="1"
                                    max="100"
                                    onChange={newOpacity => setAttributes({ opacity: newOpacity === undefined ? 50 : newOpacity })}
                                    showUnit={false}
                                    defaultValue={''}
                                />
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
                            </PanelBody>
                            <PanelBody
                                title={__("Title", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                    value={titleTypography}
                                    onChange={newValue => setAttributes({ titleTypography: newValue })}
                                />
                                <hr />
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={titleStyles[0].titleColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveStyles({ titleColor: newValue === undefined ? "transparent" : newValue })}
                                />
                                {"effect3" === effect && (
                                    <AdvancedPopColorControl
                                        label={__("Separator Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={sepColor}
                                        colorDefault={''}
                                        onColorChange={newValue => setAttributes({ sepColor: newValue === undefined ? "transparent" : newValue })}
                                    />
                                )}
                                {"effect2" === effect && (
                                    <AdvancedPopColorControl
                                        label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={titleStyles[0].titleBack}
                                        colorDefault={''}
                                        onColorChange={newValue => saveStyles({ titleBack: newValue === undefined ? "transparent" : newValue })}
                                    />
                                )}
                                <hr />
                                <PremiumShadow
                                    label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={false}
                                    value={titleTextShadow}
                                    onChange={(value) => setAttributes({ titleTextShadow: value })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Description", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"]}
                                    value={descTypography}
                                    onChange={newValue => setAttributes({ descTypography: newValue })}
                                />
                                <hr />
                                <AdvancedPopColorControl
                                    label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={descStyles[0].descColor}
                                    colorDefault={''}
                                    onColorChange={newValue => descriptionStyles({ descColor: newValue === undefined ? "transparent" : newValue })}
                                />
                                <hr />
                                <PremiumShadow
                                    label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={false}
                                    value={descTextShadow}
                                    onChange={(value) => setAttributes({ descTextShadow: value })}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__("Container Style", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumShadow
                                    label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={true}
                                    value={containerShadow}
                                    onChange={(value) => setAttributes({ containerShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={border}
                                    borderType={border.borderType}
                                    borderColor={border.borderColor}
                                    borderWidth={border.borderWidth}
                                    borderRadius={border.borderRadius}
                                    onChange={(value) => setAttributes({ border: value })}
                                />
                                <hr />
                                <SpacingComponent value={padding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ padding: value })} />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                                onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                                onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                            />
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
            ),
            !imageURL && (
                <MediaPlaceholder
                    labels={{
                        title: __('Premium Banner ', 'premium-blocks-for-gutenberg'),
                        instructions: __('Upload an image file, pick one from your media library, or add one with a URL.', 'premium-blocks-for-gutenberg')
                    }}
                    accept={['image']}
                    allowedTypes={['image']}
                    value={imageURL}
                    onSelectURL={(value) => setAttributes({ imageURL: value })}
                    onSelect={media => {
                        setAttributes({
                            imageID: media.id,
                            imageURL: media.url
                        });
                    }
                    }
                />
            ),
            imageURL && (
                <div
                    className={`${mainClasses} premium-banner__responsive_${responsive} ${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                    style={{
                        paddingTop: containerPaddingTop && `${containerPaddingTop}${padding.unit}`,
                        paddingRight: containerPaddingRight && `${containerPaddingRight}${padding.unit}`,
                        paddingBottom: containerPaddingBottom && `${containerPaddingBottom}${padding.unit}`,
                        paddingLeft: containerPaddingLeft && `${containerPaddingLeft}${padding.unit}`
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: loadStyles()
                        }}
                    />
                    <div
                        className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                        style={{
                            boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                            borderStyle: border?.borderType,
                            borderTopWidth: border?.borderWidth?.[currentDevice]?.top,
                            borderRightWidth: border?.borderWidth?.[currentDevice]?.right,
                            borderBottomWidth: border?.borderWidth?.[currentDevice]?.bottom,
                            borderLeftWidth: border?.borderWidth?.[currentDevice]?.left,
                            borderColor: border?.borderColor,
                            borderTopLeftRadius: `${border?.borderRadius?.[currentDevice]?.top || 0}px`,
                            borderTopRightRadius: `${border?.borderRadius?.[currentDevice]?.right || 0}px`,
                            borderBottomLeftRadius: `${border?.borderRadius?.[currentDevice]?.bottom || 0}px`,
                            borderBottomRightRadius: `${border?.borderRadius?.[currentDevice]?.left || 0}px`,
                        }}
                    >
                        <div
                            className={`premium-banner__img_wrap premium-banner__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign
                            }}
                        >
                            <img
                                className={`premium-banner__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
                                }}
                            />
                        </div>

                        <div
                            className={`premium-banner__content`}
                            style={{
                                background: "effect2" === effect ? titleStyles[0].titleBack : "transparent"
                            }}
                        >
                            <div
                                className={`premium-banner__title_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-banner__title`}
                                    value={title}
                                    placeholder={__('Awesome Title')}
                                    isSelected={false}
                                    onChange={newText => setAttributes({ title: newText })}
                                    style={{
                                        color: titleStyles[0].titleColor,
                                        fontSize: `${titleTypography?.fontSize[this.props.deviceType]}${titleTypography?.fontSize?.unit}`,
                                        fontStyle: titleTypography?.fontStyle,
                                        fontFamily: titleTypography?.fontFamily,
                                        fontWeight: titleTypography?.fontWeight,
                                        letterSpacing: titleTypography?.letterSpacing,
                                        textDecoration: titleTypography?.textDecoration,
                                        textTransform: titleTypography?.textTransform,
                                        lineHeight: `${titleTypography?.lineHeight}px`,
                                        textShadow: `${titleTextShadow?.horizontal}px ${titleTextShadow?.vertical}px ${titleTextShadow?.blur}px ${titleTextShadow?.color}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`premium-banner__desc_wrap`}
                                style={{
                                    textAlign: contentAlign
                                }}
                            >
                                <RichText
                                    tagName="p"
                                    className={`premium-banner__desc`}
                                    value={desc}
                                    isSelected={false}
                                    onChange={newText => setAttributes({ desc: newText })}
                                    style={{
                                        color: descStyles[0].descColor,
                                        fontSize: `${descTypography.fontSize[this.props.deviceType]}${descTypography.fontSize.unit}`,
                                        fontStyle: descTypography.fontStyle,
                                        fontFamily: descTypography.fontFamily,
                                        fontWeight: descTypography.fontWeight,
                                        letterSpacing: descTypography.letterSpacing,
                                        textDecoration: descTypography.textDecoration,
                                        textTransform: descTypography.textTransform,
                                        lineHeight: `${descTypography.lineHeight}px`,
                                        textShadow: `${descTextShadow.horizontal}px ${descTextShadow.vertical}px ${descTextShadow.blur}px ${descTextShadow.color}`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>)
        ];
    }
};
export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return { deviceType: deviceType }
})(edit)