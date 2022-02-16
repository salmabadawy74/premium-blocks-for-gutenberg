import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";
import PremiumPadding from "../../components/premium-padding";
import PremiumMediaUpload from "../../components/premium-media-upload";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl /single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import RadioComponent from '../../components/radio-control';

const { withSelect } = wp.data
const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;

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
        this.props.setAttributes({ block_id: this.props.clientId });
        this.props.setAttributes({ classMigrate: true });
    };
    render() {
        const { isSelected, setAttributes, className, clientId: blockID } = this.props;
        const {
            block_id,
            borderBanner,
            imageID,
            imageURL,
            titleStyles,
            descStyles,
            containerStyles,
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
            borderWidth,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            paddingT,
            paddingR,
            paddingB,
            paddingL
        } = this.props.attributes;

        const ALIGNS = [
            {
                value: "flex-start",
                label: __("Top", 'premium-block-for-gutenberg')
            },
            {
                value: "center",
                label: __("Middle", 'premium-block-for-gutenberg')
            },
            {
                value: "flex-end",
                label: __("Bottom", 'premium-block-for-gutenberg')
            },
            {
                value: "inherit",
                label: __("Full", 'premium-block-for-gutenberg')
            }
        ];

        const EFFECTS = [
            {
                value: "effect1",
                label: __("Style 1", 'premium-block-for-gutenberg')
            },
            {
                value: "effect2",
                label: __("Style 2", 'premium-block-for-gutenberg')
            },
            {
                value: "effect3",
                label: __("Style 3", 'premium-block-for-gutenberg')
            },
            {
                value: "effect4",
                label: __("Style 4", 'premium-block-for-gutenberg')
            },
            {
                value: "effect5",
                label: __("Style 5", 'premium-block-for-gutenberg')
            },
            {
                value: "effect6",
                label: __("Style 6", 'premium-block-for-gutenberg')
            }
        ];

        const HOVER = [
            {
                value: "none",
                label: __("None", 'premium-block-for-gutenberg')
            },
            {
                value: "zoomin",
                label: __("Zoom In", 'premium-block-for-gutenberg')
            },
            {
                value: "zoomout",
                label: __("Zoom Out", 'premium-block-for-gutenberg')
            },
            {
                value: "scale",
                label: __("Scale", 'premium-block-for-gutenberg')
            },
            {
                value: "gray",
                label: __("Gray Scale", 'premium-block-for-gutenberg')
            },
            {
                value: "blur",
                label: __("Blur", 'premium-block-for-gutenberg')
            },
            {
                value: "bright",
                label: __("Bright", 'premium-block-for-gutenberg')
            },
            {
                value: "sepia",
                label: __("Sepia", 'premium-block-for-gutenberg')
            }
        ];
        const HEIGHT = [
            {
                value: "default",
                label: __("Default", 'premium-block-for-gutenberg')
            },
            {
                value: "custom",
                label: __("Custom", 'premium-block-for-gutenberg')
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
        const containerStyle = (value) => {
            const newUpdate = containerStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ containerStyles: newUpdate, });
        }
        return [
            isSelected && (
                <BlockControls key="controls">
                    <Toolbar>
                        <IconButton
                            label={__(
                                "Refresh this button when it conflict with other buttons styles"
                                , 'premium-block-for-gutenberg')}
                            icon="update"
                            className="components-toolbar__control"
                            onClick={() => setAttributes({ block_id: blockID })}
                        />
                    </Toolbar>
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
                        initialOpen={true}
                    >
                        <PremiumMediaUpload
                            type="image"
                            imageID={imageID}
                            imageURL={imageURL}
                            onSelectMedia={media => {
                                setAttributes({
                                    imageID: media.id,
                                    imageURL: media.url
                                });
                            }}
                            onRemoveImage={() => setAttributes({
                                imageURL: "",
                                imageURL: ""
                            })
                            }
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
                        <SelectControl
                            label={__("Banner Style", 'premium-block-for-gutenberg')}
                            value={effect}
                            onChange={newEffect => setAttributes({ effect: newEffect })}
                            options={EFFECTS}
                        />
                        <SelectControl
                            label={__("Image Hover Effect", 'premium-block-for-gutenberg')}
                            options={HOVER}
                            value={hoverEffect}
                            onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                        />
                        <ToggleControl
                            label={__("Always Hovered", 'premium-block-for-gutenberg')}
                            checked={hovered}
                            onChange={check => setAttributes({ hovered: check })}
                        />
                        <SelectControl
                            label={__("Height", 'premium-block-for-gutenberg')}
                            options={HEIGHT}
                            value={height}
                            onChange={newHeight => setAttributes({ height: newHeight })}
                        />
                        {"custom" === height && (
                            <ResponsiveSingleRangeControl
                                label={__("Min Height (PX)", 'premium-block-for-gutenberg')}
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
                                label={__("Vertical Align", 'premium-block-for-gutenberg')}
                                options={ALIGNS}
                                value={verAlign}
                                onChange={newValue => setAttributes({ verAlign: newValue })}
                            />
                        )}

                        <AdvancedPopColorControl
                            label={__("Overlay", 'premium-block-for-gutenberg')}
                            colorValue={background}
                            colorDefault={''}
                            onColorChange={newValue => setAttributes({ background: newValue === undefined ? "transparent" : newValue })}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Overlay Opacity", 'premium-block-for-gutenberg')}
                            value={opacity}
                            min="1"
                            max="100"
                            onChange={newOpacity => setAttributes({ opacity: newOpacity === undefined ? 50 : newOpacity })}
                            showUnit={false}
                            defaultValue={''}
                        />
                        <ToggleControl
                            label={__("Link", 'premium-block-for-gutenberg')}
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
                                label={__("Open link in new tab", 'premium-block-for-gutenberg')}
                                checked={target}
                                onChange={newValue => setAttributes({ target: newValue })}
                            />
                        )}
                        <ToggleControl
                            label={__("Hide Description on Mobiles", 'premium-block-for-gutenberg')}
                            checked={responsive}
                            onChange={newValue => setAttributes({ responsive: newValue })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Title Settings", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <RadioComponent
                            choices={['H1', 'H2', 'H3', 'H4', 'H5', 'H6']}
                            value={titleTag}
                            onChange={(newValue) => setAttributes({ titleTag: newValue })}
                            label={__("HTML Tag", 'premium-block-for-gutenberg')}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line"]}
                            setAttributes={saveStyles}
                            fontSizeType={{
                                value: titleStyles[0].titleSizeUnit,
                                label: __("titleSizeUnit", 'premium-block-for-gutenberg'),
                            }}
                            fontSize={titleStyles[0].titleSize}
                            fontSizeMobile={titleStyles[0].titleSizeMobile}
                            fontSizeTablet={titleStyles[0].titleSizeTablet}
                            onChangeSize={value => saveStyles({ titleSize: value })}
                            onChangeTabletSize={value => saveStyles({ titleSizeTablet: value })}
                            onChangeMobileSize={value => saveStyles({ titleSizeMobile: value })}
                            weight={titleStyles[0].titleWeight}
                            line={titleStyles[0].titleLine}
                            onChangeWeight={newWeight => saveStyles({ titleWeight: newWeight === undefined ? 500 : newWeight })}
                            onChangeLine={newValue => saveStyles({ titleLine: newValue === undefined ? 10 : newValue })}
                        />
                        <AdvancedPopColorControl
                            label={__("Text Color", 'premium-block-for-gutenberg')}
                            colorValue={titleStyles[0].titleColor}
                            colorDefault={''}
                            onColorChange={newValue => saveStyles({ titleColor: newValue === undefined ? "transparent" : newValue })}
                        />
                        {"effect3" === effect && (
                            <AdvancedPopColorControl
                                label={__("Separator Color", 'premium-block-for-gutenberg')}
                                colorValue={sepColor}
                                colorDefault={''}
                                onColorChange={newValue => setAttributes({ sepColor: newValue === undefined ? "transparent" : newValue })}
                            />
                        )}
                        {"effect2" === effect && (
                            <AdvancedPopColorControl
                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].titleBack}
                                colorDefault={''}
                                onColorChange={newValue => saveStyles({ titleBack: newValue === undefined ? "transparent" : newValue })}
                            />
                        )}
                        <PremiumTextShadow
                            color={titleStyles[0].shadowColor}
                            blur={titleStyles[0].shadowBlur}
                            horizontal={titleStyles[0].shadowHorizontal}
                            vertical={titleStyles[0].shadowVertical}
                            onChangeColor={newColor => saveStyles({ shadowColor: newColor === undefined ? "transparent" : newColor })}
                            onChangeBlur={newBlur => saveStyles({ shadowBlur: newBlur === undefined ? 0 : newBlur })}
                            onChangehHorizontal={newValue => saveStyles({ shadowHorizontal: newValue === undefined ? 0 : newValue })}
                            onChangeVertical={newValue => saveStyles({ shadowVertical: newValue === undefined ? 0 : newValue })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Description Settings", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >

                        <PremiumTypo
                            components={["responsiveSize", "weight", "line"]}
                            setAttributes={descriptionStyles}
                            fontSizeType={{
                                value: descStyles[0].descSizeUnit,
                                label: __("descSizeUnit", 'premium-block-for-gutenberg'),
                            }}
                            fontSize={descStyles[0].descSize}
                            fontSizeMobile={descStyles[0].descSizeMobile}
                            fontSizeTablet={descStyles[0].descSizeTablet}
                            onChangeSize={value => { console.log(descStyles[0].descSize), descriptionStyles({ descSize: value }) }}
                            onChangeTabletSize={value => descriptionStyles({ descSizeTablet: value })}
                            onChangeMobileSize={value => descriptionStyles({ descSizeMobile: value })}
                            weight={descStyles[0].descWeight}
                            line={descStyles[0].descLine}
                            onChangeWeight={newWeight => descriptionStyles({ descWeight: newWeight === undefined ? 500 : newWeight })}
                            onChangeLine={newValue => descriptionStyles({ descLine: newValue === undefined ? 10 : newValue })}
                        />
                        <AdvancedPopColorControl
                            label={__("Text Color", 'premium-block-for-gutenberg')}
                            colorValue={descStyles[0].descColor}
                            colorDefault={''}
                            onColorChange={newValue => descriptionStyles({ descColor: newValue === undefined ? "transparent" : newValue })}
                        />
                        <PremiumTextShadow
                            color={descStyles[0].descShadowColor}
                            blur={descStyles[0].descShadowBlur}
                            horizontal={descStyles[0].descShadowHorizontal}
                            vertical={descStyles[0].descShadowVertical}
                            onChangeColor={newColor => descriptionStyles({ descShadowColor: newColor === undefined ? "transparent" : newColor })}
                            onChangeBlur={newBlur => descriptionStyles({ descShadowBlur: newBlur === undefined ? 0 : newBlur })}
                            onChangehHorizontal={newValue => descriptionStyles({ descShadowHorizontal: newValue === undefined ? 0 : newValue })}
                            onChangeVertical={newValue => descriptionStyles({ descShadowVertical: newValue === undefined ? 0 : newValue })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Container Style", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumBorder
                            borderType={containerStyles[0].borderType}
                            borderWidth={borderWidth}
                            top={borderTop}
                            right={borderRight}
                            bottom={borderBottom}
                            left={borderLeft}
                            borderColor={containerStyles[0].borderColor}
                            borderRadius={containerStyles[0].borderRadius}
                            onChangeType={(newType) => containerStyle({ borderType: newType }, containerStyles)}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    borderBanner: true,
                                    borderTop: top,
                                    borderRight: right,
                                    borderBottom: bottom,
                                    borderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) => containerStyle({ borderColor: colorValue === undefined ? "transparent" : colorValue, })}
                            onChangeRadius={(newRadius) => containerStyle({ borderRadius: newRadius === undefined ? 0 : newRadius, })}
                        />
                        <PremiumBoxShadow
                            inner={true}
                            color={containerStyles[0].containerShadowColor}
                            blur={containerStyles[0].containerShadowBlur}
                            horizontal={containerStyles[0].containerShadowHorizontal}
                            vertical={containerStyles[0].containerShadowVertical}
                            position={containerStyles[0].containerShadowPosition}
                            onChangeColor={newColor => containerStyle({ containerShadowColor: newColor })}
                            onChangeBlur={newBlur => containerStyle({ containerShadowBlur: newBlur })}
                            onChangehHorizontal={newValue => containerStyle({ containerShadowHorizontal: newValue })}
                            onChangeVertical={newValue => containerStyle({ containerShadowVertical: newValue })}
                            onChangePosition={newValue => containerStyle({ containerShadowPosition: newValue })}
                        />
                        <PremiumPadding
                            paddingTop={paddingT}
                            paddingRight={paddingR}
                            paddingBottom={paddingB}
                            paddingLeft={paddingL}
                            showUnits={true}
                            onChangePadTop={value => setAttributes({ paddingT: value })}
                            onChangePadRight={value => setAttributes({ paddingR: value })}
                            onChangePadBottom={value => setAttributes({ paddingB: value })}
                            onChangePadLeft={value => setAttributes({ paddingL: value })}
                            selectedUnit={containerStyles[0].paddingU}
                            onChangePadSizeUnit={newvalue => containerStyle({ paddingU: newvalue })}
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
                id={`premium-banner-${block_id}`}
                className={`${mainClasses} premium-banner__responsive_${responsive} premium-banner-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    paddingTop: paddingT + containerStyles[0].paddingU,
                    paddingRight: paddingR + containerStyles[0].paddingU,
                    paddingBottom: paddingB + containerStyles[0].paddingU,
                    paddingLeft: paddingL + containerStyles[0].paddingU
                }}
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-banner-${block_id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                            `background: ${sepColor}`,
                            "}",
                            `#premium-banner-${block_id} .premium-banner__inner {`,
                            `background: ${background}`,
                            "}",
                            `#premium-banner-${block_id} .premium-banner__img.premium-banner__active {`,
                            `opacity: ${background ? 1 - opacity / 100 : 1} `,
                            "}"
                        ].join("\n")
                    }}
                />
                {imageURL && (
                    <div
                        className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                        style={{
                            boxShadow: `${containerStyles[0].containerShadowHorizontal}px ${containerStyles[0].containerShadowVertical}px ${containerStyles[0].containerShadowBlur}px ${containerStyles[0].containerShadowColor} ${containerStyles[0].containerShadowPosition}`,
                            borderStyle: containerStyles[0].borderType,
                            borderWidth: borderBanner
                                ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                                : borderWidth + "px",
                            borderRadius: containerStyles[0].borderRadius + "px",
                            borderColor: containerStyles[0].borderColor
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
                                    isSelected={false}
                                    onChange={newText => setAttributes({ title: newText })}
                                    style={{
                                        fontSize: `${titleFontSize}${titleStyles[0].titleSizeUnit}`,
                                        color: titleStyles[0].titleColor,
                                        fontWeight: titleStyles[0].titleWeight,
                                        lineHeight: titleStyles[0].titleLine + "px",
                                        textShadow: `${titleStyles[0].shadowHorizontal}px ${titleStyles[0].shadowVertical}px ${titleStyles[0].shadowBlur}px ${titleStyles[0].shadowColor}`
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
                                        fontSize: `${descFontSize}${descStyles[0].descSizeUnit}`,
                                        color: descStyles[0].descColor,
                                        fontWeight: descStyles[0].descWeight,
                                        lineHeight: descStyles[0].descLine + "px",
                                        textShadow: `${descStyles[0].descShadowHorizontal}px ${descStyles[0].descShadowVertical}px ${descStyles[0].descShadowBlur}px ${descStyles[0].descShadowColor}`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
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