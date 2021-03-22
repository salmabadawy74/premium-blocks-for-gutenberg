import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";
import PremiumPadding from "../../components/premium-padding";
import PremiumMediaUpload from "../../components/premium-media-upload";
import styling from './styling'
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";

const { __ } = wp.i18n;

const { Fragment, Component } = wp.element;

const {
    IconButton,
    Toolbar,
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl,
} = wp.components;

const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    ColorPalette,
    RichText,
} = wp.blockEditor;

export default class edit extends Component {

    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        this.props.setAttributes({ block_id: this.props.clientId });
        this.props.setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-banner-" + this.props.clientId.substr(0, 6)
        );
        document.head.appendChild($style);
    }
    render() {

        const { isSelected, setAttributes, className, clientId: blockID } = this.props;

        const {
            borderBanner,
            block_id,
            imageID,
            imageURL,
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
            borderType,
            borderWidth,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            borderRadius,
            borderColor,
            titleColor,
            titleSizeUnit,
            titleSize,
            titleLine,
            titleWeight,
            titleBack,
            shadowBlur,
            shadowColor,
            shadowHorizontal,
            shadowVertical,
            descColor,
            descSizeUnit,
            descSize,
            descSizeTablet,
            descSizeMobile,
            descLine,
            descWeight,
            descShadowBlur,
            descShadowColor,
            descShadowHorizontal,
            descShadowVertical,
            urlCheck,
            url,
            target,
            sepColor,
            blur,
            bright,
            contrast,
            saturation,
            hue,
            containerShadowBlur,
            containerShadowColor,
            containerShadowHorizontal,
            containerShadowVertical,
            containerShadowPosition,
            paddingB,
            paddingT,
            paddingR,
            paddingL,
            paddingU,
            titleSizeTablet,
            titleSizeMobile,
            hideDesktop,
            hideMobile,
            hideTablet
        } = this.props.attributes;
        const ALIGNS = [
            {
                value: "flex-start",
                label: __("Top")
            },
            {
                value: "center",
                label: __("Middle")
            },
            {
                value: "flex-end",
                label: __("Bottom")
            },
            {
                value: "inherit",
                label: __("Full")
            }
        ];
        const EFFECTS = [
            {
                value: "effect1",
                label: __("Style 1")
            },
            {
                value: "effect2",
                label: __("Style 2")
            },
            {
                value: "effect3",
                label: __("Style 3")
            },
            {
                value: "effect4",
                label: __("Style 4")
            },
            {
                value: "effect5",
                label: __("Style 5")
            },
            {
                value: "effect6",
                label: __("Style 6")
            }
        ];
        const HOVER = [
            {
                value: "none",
                label: __("None")
            },
            {
                value: "zoomin",
                label: __("Zoom In")
            },
            {
                value: "zoomout",
                label: "Zoom Out"
            },
            {
                value: "scale",
                label: __("Scale")
            },
            {
                value: "gray",
                label: __("Gray Scale")
            },
            {
                value: "blur",
                label: __("Blur")
            },
            {
                value: "bright",
                label: __("Bright")
            },
            {
                value: "sepia",
                label: __("Sepia")
            }
        ];
        const HEIGHT = [
            {
                value: "default",
                label: __("Default")
            },
            {
                value: "custom",
                label: __("Custom")
            }
        ];

        const mainClasses = classnames(className, "premium-banner");

        var element = document.getElementById(
            "premium-style-banner-" + blockID.substr(0, 6)
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }

        return [
            isSelected && (
                <BlockControls key="controls">
                    <Toolbar>
                        <IconButton
                            label={__(
                                "Refresh this button when it conflict with other buttons styles"
                            )}
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
                        title={__("General Settings")}
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
                            onRemoveImage={() =>
                                setAttributes({
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
                            label={__("Banner Style")}
                            value={effect}
                            onChange={newEffect => setAttributes({ effect: newEffect })}
                            options={EFFECTS}
                        />
                        <SelectControl
                            label={__("Image Hover Effect")}
                            options={HOVER}
                            value={hoverEffect}
                            onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                        />
                        <ToggleControl
                            label={__("Always Hovered")}
                            checked={hovered}
                            onChange={check => setAttributes({ hovered: check })}
                        />
                        <SelectControl
                            label={__("Height")}
                            options={HEIGHT}
                            value={height}
                            onChange={newHeight => setAttributes({ height: newHeight })}
                        />
                        <p>{"custom" === height && __("Min Height (PX)")}</p>
                        {"custom" === height && (
                            <RangeControl
                                value={minHeight}
                                min="10"
                                max="800"
                                onChange={newSize => setAttributes({ minHeight: newSize })}
                            />
                        )}
                        {"custom" === height && (
                            <SelectControl
                                label={__("Vertical Align")}
                                options={ALIGNS}
                                value={verAlign}
                                onChange={newValue => setAttributes({ verAlign: newValue })}
                            />
                        )}
                        <Fragment>
                            <p>{__("Overlay")}</p>
                            <ColorPalette
                                value={background}
                                onChange={newValue =>
                                    setAttributes({
                                        background: newValue === undefined ? "transparent" : newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        <RangeControl
                            label={__("Overlay Opacity")}
                            value={opacity}
                            min="1"
                            max="100"
                            onChange={newOpacity =>
                                setAttributes({
                                    opacity: newOpacity === undefined ? 50 : newOpacity
                                })
                            }
                        />
                        <ToggleControl
                            label={__("Link")}
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
                                label={__("Open link in new tab")}
                                checked={target}
                                onChange={newValue => setAttributes({ target: newValue })}
                            />
                        )}
                        <ToggleControl
                            label={__("Hide Description on Mobiles")}
                            checked={responsive}
                            onChange={newValue => setAttributes({ responsive: newValue })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Title Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <p>{__("HTML Tag")}</p>
                        <Toolbar
                            controls={"123456".split("").map(tag => ({
                                icon: "heading",
                                isActive: "H" + tag === titleTag,
                                onClick: () => setAttributes({ titleTag: "H" + tag }),
                                subscript: tag
                            }))}
                        />
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: titleSizeUnit,
                                label: __("titleSizeUnit"),
                            }}
                            fontSize={{
                                value: titleSize,
                                label: __("titleSize"),
                            }}
                            fontSizeMobile={{
                                value: titleSizeMobile,
                                label: __("titleSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: titleSizeTablet,
                                label: __("titleSizeTablet"),
                            }}
                            weight={titleWeight}
                            line={titleLine}
                            onChangeWeight={newWeight =>
                                setAttributes({
                                    titleWeight: newWeight === undefined ? 500 : newWeight
                                })
                            }
                            onChangeLine={newValue =>
                                setAttributes({
                                    titleLine: newValue === undefined ? 10 : newValue
                                })
                            }
                        />

                        <Fragment>
                            <p>{__("Text Color")}</p>
                            <ColorPalette
                                value={titleColor}
                                onChange={newValue =>
                                    setAttributes({
                                        titleColor: newValue === undefined ? "transparent" : newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        {"effect3" === effect && (
                            <Fragment>
                                <p>{__("Separator Color")}</p>
                                <ColorPalette
                                    value={sepColor}
                                    onChange={newValue =>
                                        setAttributes({
                                            sepColor: newValue === undefined ? "transparent" : newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                        )}
                        {"effect2" === effect && (
                            <Fragment>
                                <p>{__("Background Color")}</p>
                                <ColorPalette
                                    value={titleBack}
                                    onChange={newValue =>
                                        setAttributes({
                                            titleBack: newValue === undefined ? "transparent" : newValue
                                        })
                                    }
                                    allowReset={true}
                                />
                            </Fragment>
                        )}
                        <PremiumTextShadow
                            color={shadowColor}
                            blur={shadowBlur}
                            horizontal={shadowHorizontal}
                            vertical={shadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({
                                    shadowColor:
                                        newColor === undefined ? "transparent" : newColor.hex
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    shadowBlur: newBlur === undefined ? 0 : newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    shadowHorizontal: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    shadowVertical: newValue === undefined ? 0 : newValue
                                })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Description Settings")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumTypo
                            components={["responsiveSize", "weight", "line"]}
                            setAttributes={setAttributes}
                            fontSizeType={{
                                value: descSizeUnit,
                                label: __("descSizeUnit"),
                            }}
                            fontSize={{
                                value: descSize,
                                label: __("descSize"),
                            }}
                            fontSizeMobile={{
                                value: descSizeMobile,
                                label: __("descSizeMobile"),
                            }}
                            fontSizeTablet={{
                                value: descSizeTablet,
                                label: __("descSizeTablet"),
                            }}
                            weight={descWeight}
                            line={descLine}
                            onChangeWeight={newWeight =>
                                setAttributes({
                                    descWeight: newWeight === undefined ? 500 : newWeight
                                })
                            }
                            onChangeLine={newValue =>
                                setAttributes({
                                    descLine: newValue === undefined ? 10 : newValue
                                })
                            }
                        />
                        <Fragment>
                            <p>{__("Text Color")}</p>
                            <ColorPalette
                                value={descColor}
                                onChange={newValue =>
                                    setAttributes({
                                        descColor: newValue === undefined ? "transparent" : newValue
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        <PremiumTextShadow
                            color={descShadowColor}
                            blur={descShadowBlur}
                            horizontal={descShadowHorizontal}
                            vertical={descShadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({
                                    descShadowColor:
                                        newColor === undefined ? "transparent" : newColor.hex
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    descShadowBlur: newBlur === undefined ? 0 : newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    descShadowHorizontal: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    descShadowVertical: newValue === undefined ? 0 : newValue
                                })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Container Style")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <PremiumBorder
                            borderType={borderType}
                            borderWidth={borderWidth}
                            top={borderTop}
                            right={borderRight}
                            bottom={borderBottom}
                            left={borderLeft}
                            borderColor={borderColor}
                            borderRadius={borderRadius}
                            onChangeType={(newType) => setAttributes({ borderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    borderBanner: true,
                                    borderTop: top,
                                    borderRight: right,
                                    borderBottom: bottom,
                                    borderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({
                                    borderColor:
                                        colorValue === undefined ? "transparent" : colorValue.hex,
                                })
                            }
                            onChangeRadius={(newRadius) =>
                                setAttributes({
                                    borderRadius: newRadius === undefined ? 0 : newRadius,
                                })
                            }
                        />
                        <PremiumBoxShadow
                            inner={true}
                            color={containerShadowColor}
                            blur={containerShadowBlur}
                            horizontal={containerShadowHorizontal}
                            vertical={containerShadowVertical}
                            position={containerShadowPosition}
                            onChangeColor={newColor =>
                                setAttributes({
                                    containerShadowColor: newColor.hex
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    containerShadowBlur: newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    containerShadowHorizontal: newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    containerShadowVertical: newValue
                                })
                            }
                            onChangePosition={newValue =>
                                setAttributes({
                                    containerShadowPosition: newValue
                                })
                            }
                        />
                        <PremiumPadding
                            paddingTop={paddingT}
                            paddingRight={paddingR}
                            paddingBottom={paddingB}
                            paddingLeft={paddingL}
                            showUnits={true}
                            onChangePadTop={value =>
                                setAttributes({
                                    paddingT: value
                                })
                            }
                            onChangePadRight={value =>
                                setAttributes({
                                    paddingR: value
                                })
                            }
                            onChangePadBottom={value =>
                                setAttributes({
                                    paddingB: value
                                })
                            }
                            onChangePadLeft={value =>
                                setAttributes({
                                    paddingL: value
                                })
                            }
                            selectedUnit={paddingU}
                            onChangePadSizeUnit={newvalue =>
                                setAttributes({ paddingU: newvalue })
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
                id={`premium-banner-${block_id}`}
                className={`${mainClasses} premium-banner__responsive_${responsive} premium-banner-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    paddingTop: paddingT + paddingU,
                    paddingRight: paddingR + paddingU,
                    paddingBottom: paddingB + paddingU,
                    paddingLeft: paddingL + paddingU
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
                            boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
                            borderStyle: borderType,
                            borderWidth: borderBanner
                                ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                                : borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor
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
                                background: "effect2" === effect ? titleBack : "transparent"
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
                                        color: titleColor,
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
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
                                        color: descColor,
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                        textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`
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
