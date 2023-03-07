import classnames from "classnames";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
    ResponsiveRangeControl,
    MultiButtonsControl as ResponsiveRadioControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent as SpacingControl,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    InsideTabs,
    Icons,
    InsideTab,
    iconsList,
    ResponsiveSingleRangeControl,
    PremiumMediaUpload,
    PremiumFilters,
    GenIcon,
    FaIco,
    Ico,
    IcoNames,
    BlockContent,
    AdvancedTabOptions
} from '@pbg/components';
import { borderCss, paddingCss, generateBlockId, generateCss } from '@pbg/helpers';

const { __ } = wp.i18n;
const { useEffect, Fragment } = wp.element;
const { MediaPlaceholder } = wp.editor;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;
const { withSelect } = wp.data;

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-image-separator-" + generateBlockId(clientId)
        });
    }, []);

    const {
        blockId,
        iconAlign,
        iconType,
        iconSize,
        imageURL,
        imageID,
        link,
        url,
        gutter,
        imgFilter,
        imgFilterHover,
        linkTarget,
        iconStyles,
        imgHeight,
        imgFit,
        imgMask,
        imgMaskID,
        imgMaskURL,
        maskSize,
        maskPosition,
        hideDesktop,
        hideTablet,
        hideMobile,
        iconBorder,
        iconPadding,
        icons
    } = props.attributes;

    const ICON = [
        {
            value: "icon",
            label: __("Icon", "premium-blocks-for-gutenberg"),
        },
        {
            value: "image",
            label: __("Image", "premium-blocks-for-gutenberg"),
        },
    ];

    const saveIconStyle = (value) => {
        const newUpdate = iconStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ iconStyles: newUpdate });
    };

    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId} .premium-image-separator-container:hover img`] = {
            filter: `brightness(${imgFilterHover?.bright}% ) contrast(${imgFilterHover?.contrast}% ) saturate(${imgFilterHover?.saturation}% ) blur(${imgFilterHover?.blur}px) hue-rotate(${imgFilterHover?.hue}deg)!important`,
        };
        styles[`.${blockId} .premium-image-separator-container .premium-image-separator-icon:hover`] = {
            color: `${iconStyles[0].iconColorHover} !important`,
            "background-color": `${iconStyles[0].iconBGColorHover} !important`
        };
        return generateCss(styles);
    };

    let BorderValue = iconStyles[0].advancedBorder
        ? { borderRadius: iconStyles[0].advancedBorderValue }
        : borderCss(iconBorder, props.deviceType);

    const renderSVG = svg => (
        <GenIcon name={svg} icon={('fa' === svg.substring(0, 2) ? FaIco[svg] : Ico[svg])} />
    );

    return (
        <Fragment>
            <InspectorControls>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__("Separator", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Separator Type", "premium-blocks-for-gutenberg")}
                                value={iconType}
                                onChange={(newSelect) => setAttributes({ iconType: newSelect })}
                                options={ICON}
                            />
                            {iconType === "icon" ? (
                                <Fragment>
                                    <p>{__("Icon", "premium-blocks-for-gutenberg")}</p>
                                    <FontIconPicker
                                        icons={IcoNames}
                                        onChange={(newIcon) =>
                                            saveIconStyle({ icon: newIcon })
                                        }
                                        renderFunc={renderSVG}
                                        value={iconStyles[0].icon}
                                        isMulti={false}
                                        noSelectedPlaceholder={__(
                                            "Select Icon",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={imageID}
                                        imageURL={imageURL}
                                        onSelectMedia={(media) => {
                                            setAttributes({
                                                imageID: media.id,
                                                imageURL: media.url,
                                            });
                                        }}
                                        onRemoveImage={() =>
                                            setAttributes({
                                                imageURL: "",
                                                imageID: "",
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
                            <ResponsiveRangeControl
                                label={__(
                                    "Width/Size",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={iconSize}
                                onChange={(value) =>
                                    setAttributes({ iconSize: value })
                                }
                                showUnit={true}
                                defaultValue={200}
                                units={["px", "em"]}
                                min={1}
                                max={1000}
                                step={1}
                            />
                            {iconType === "image" && (
                                <Fragment>
                                    <ResponsiveRangeControl
                                        label={__(
                                            "Height",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={imgHeight}
                                        onChange={(value) =>
                                            setAttributes({
                                                imgHeight: value,
                                            })
                                        }
                                        showUnit={true}
                                        defaultValue={200}
                                        units={["px", "em"]}
                                        min={1}
                                        max={1000}
                                        step={1}
                                    />
                                    <SelectControl
                                        label={__("Image Fit", "premium-blocks-for-gutenberg")}
                                        value={imgFit}
                                        onChange={(newSelect) =>
                                            setAttributes({
                                                imgFit: newSelect,
                                            })
                                        }
                                        options={[
                                            { label: __("Cover", "premium-blocks-for-gutenberg"), value: "cover" },
                                            { label: __("Fill", "premium-blocks-for-gutenberg"), value: "fill" },
                                            { label: __("Contain", "premium-blocks-for-gutenberg"), value: "contain" },
                                        ]}
                                    />
                                </Fragment>
                            )}

                            <ResponsiveSingleRangeControl
                                label={__(
                                    "Gutter (%)",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={gutter}
                                min="-500"
                                max="500"
                                onChange={(newValue) =>
                                    setAttributes({
                                        gutter: parseInt(newValue),
                                    })
                                }
                                defaultValue={-50}
                                showUnit={false}
                            />
                            <p
                                className={`premium_blocks_descrption_range_Control`}
                            >
                                {__(
                                    "-50% is default. Increase to push the image outside or decrease to pull the image inside.",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </p>
                            <ResponsiveRadioControl
                                label={__("Alignment", "premium-blocks-for-gutenberg")}
                                choices={[
                                    { value: "left", label: __("Left", "premium-blocks-for-gutenberg"), icon: Icons.alignLeft },
                                    { value: "center", label: __("Center", "premium-blocks-for-gutenberg"), icon: Icons.alignCenter },
                                    { value: "right", label: __("Right", "premium-blocks-for-gutenberg"), icon: Icons.alignRight }
                                ]}
                                value={iconAlign}
                                onChange={(newValue) =>
                                    setAttributes({ iconAlign: newValue })
                                }
                                showIcons={true}
                            />
                            <ToggleControl
                                label={__("Link", "premium-blocks-for-gutenberg")}
                                checked={link}
                                onChange={(value) =>
                                    setAttributes({ link: value })
                                }
                            />
                            {link && (
                                <Fragment>
                                    <p>{__("URL", "premium-blocks-for-gutenberg")}</p>
                                    <TextControl
                                        value={url}
                                        onChange={(value) =>
                                            setAttributes({ url: value })
                                        }
                                        placeholder={__("Enter URL", "premium-blocks-for-gutenberg")}
                                    />
                                    <ToggleControl
                                        label={__("Open links in new tab", "premium-blocks-for-gutenberg")}
                                        checked={linkTarget}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                linkTarget: newValue,
                                            })
                                        }
                                    />
                                </Fragment>
                            )}
                            {iconType === "image" && (
                                <Fragment>
                                    <ToggleControl
                                        label={__("Mask Image Shape", "premium-blocks-for-gutenberg")}
                                        checked={imgMask}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                imgMask: newValue,
                                            })
                                        }
                                    />
                                    {imgMask && (
                                        <Fragment>
                                            <PremiumMediaUpload
                                                type="image"
                                                imageID={imgMaskID}
                                                imageURL={imgMaskURL}
                                                onSelectMedia={(media) => {
                                                    setAttributes({
                                                        imgMaskID: media.id,
                                                        imgMaskURL:
                                                            media.url,
                                                    });
                                                }}
                                                onRemoveImage={() =>
                                                    setAttributes({
                                                        imgMaskURL: "",
                                                        imgMaskID: "",
                                                    })
                                                }
                                            />

                                            <SelectControl
                                                label={__("Mask Size", "premium-blocks-for-gutenberg")}
                                                value={maskSize}
                                                onChange={(newSelect) =>
                                                    setAttributes({
                                                        maskSize: newSelect,
                                                    })
                                                }
                                                options={[
                                                    { label: __("Contain", "premium-blocks-for-gutenberg"), value: "contain" },
                                                    { label: __("Cover", "premium-blocks-for-gutenberg"), value: "cover" }
                                                ]}
                                            />

                                            <SelectControl
                                                label={__("Mask Position", "premium-blocks-for-gutenberg")}
                                                value={maskPosition}
                                                onChange={(newSelect) =>
                                                    setAttributes({
                                                        maskPosition: newSelect,
                                                    })
                                                }
                                                options={[
                                                    {
                                                        label: __("Center Center", "premium-blocks-for-gutenberg"),
                                                        value: "center center"
                                                    },
                                                    {
                                                        label: __("Top Center", "premium-blocks-for-gutenberg"),
                                                        value: "top center"
                                                    },
                                                    {
                                                        label: __("Bottom Center", "premium-blocks-for-gutenberg"),
                                                        value: "bottom center"
                                                    },
                                                ]}
                                            />
                                        </Fragment>
                                    )}
                                </Fragment>
                            )}
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__("Separator", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            {iconType === "image" ? (
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
                                        <PremiumFilters
                                            value={imgFilter}
                                            onChange={(value) =>
                                                setAttributes({
                                                    imgFilter: value,
                                                })
                                            }
                                        />
                                    </InsideTab>
                                    <InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
                                        <PremiumFilters
                                            label={__("Hover CSS Filters", "premium-blocks-for-gutenberg")}
                                            value={imgFilterHover}
                                            onChange={(value) =>
                                                setAttributes({
                                                    imgFilterHover: value,
                                                })
                                            }
                                        />
                                    </InsideTab>
                                </InsideTabs>
                            ) : (
                                <Fragment>
                                    <InsideTabs>
                                        <InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
                                            <Fragment>
                                                <AdvancedPopColorControl
                                                    label={__(
                                                        "Color",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    colorDefault={""}
                                                    colorValue={
                                                        iconStyles[0]
                                                            .iconColor
                                                    }
                                                    onColorChange={(
                                                        newValue
                                                    ) =>
                                                        saveIconStyle({
                                                            iconColor: newValue,
                                                        })
                                                    }
                                                />
                                                <AdvancedPopColorControl
                                                    label={__(
                                                        "Background Color",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    colorDefault={""}
                                                    colorValue={
                                                        iconStyles[0]
                                                            .iconBGColor
                                                    }
                                                    onColorChange={(
                                                        newValue
                                                    ) =>
                                                        saveIconStyle({
                                                            iconBGColor: newValue,
                                                        })
                                                    }
                                                />
                                            </Fragment>
                                        </InsideTab>
                                        <InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
                                            <Fragment>
                                                <AdvancedPopColorControl
                                                    label={__(
                                                        "Hover Color",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    colorValue={
                                                        iconStyles[0]
                                                            .iconColorHover
                                                    }
                                                    onColorChange={(
                                                        newValue
                                                    ) =>
                                                        saveIconStyle({
                                                            iconColorHover: newValue,
                                                        })
                                                    }
                                                    colorDefault={""}
                                                />
                                                <AdvancedPopColorControl
                                                    label={__(
                                                        "Hover Background Color",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    colorValue={
                                                        iconStyles[0]
                                                            .iconBGColorHover
                                                    }
                                                    onColorChange={(
                                                        newValue
                                                    ) =>
                                                        saveIconStyle({
                                                            iconBGColorHover: newValue,
                                                        })
                                                    }
                                                    colorDefault={""}
                                                />
                                            </Fragment>
                                        </InsideTab>
                                    </InsideTabs>
                                    <SpacingControl
                                        label={__(
                                            "Padding",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={iconPadding}
                                        onChange={(value) =>
                                            setAttributes({
                                                iconPadding: value,
                                            })
                                        }
                                        showUnits={true}
                                        responsive={true}
                                    />
                                </Fragment>
                            )}
                            {!iconStyles[0].advancedBorder && (
                                <PremiumBorder
                                    label={__("Border", "premium-blocks-for-gutenberg")}
                                    value={iconBorder}
                                    onChange={(value) =>
                                        setAttributes({ iconBorder: value })
                                    }
                                />
                            )}
                            <ToggleControl
                                label={__(
                                    "Advanced Border Radius",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={iconStyles[0].advancedBorder}
                                onChange={(value) =>
                                    saveIconStyle({ advancedBorder: value })
                                }
                            />
                            <div>
                                {__(
                                    "Apply custom radius values. Get the radius value from here",
                                    "premium-blocks-for-gutenberg"
                                )}
                                <a
                                    target={"_blank"}
                                    href={
                                        "https://9elements.github.io/fancy-border-radius/"
                                    }
                                >
                                    {" "}
                                    Here
                                </a>
                            </div>
                            {iconStyles[0].advancedBorder && (
                                <TextControl
                                    label={__(
                                        "Border Radius",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={
                                        iconStyles[0].advancedBorderValue
                                    }
                                    onChange={(value) =>
                                        saveIconStyle({
                                            advancedBorderValue: value,
                                        })
                                    }
                                />
                            )}
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"advance"}>
                        <PremiumResponsiveTabs
                            Desktop={hideDesktop}
                            Tablet={hideTablet}
                            Mobile={hideMobile}
                            onChangeDesktop={(value) =>
                                setAttributes({
                                    hideDesktop: value,
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value,
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value,
                                })
                            }
                        />
                        <AdvancedTabOptions {...props} />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <style dangerouslySetInnerHTML={{ __html: loadStyles() }} />,
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-image-separator ${blockId}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{ textAlign: iconAlign[props.deviceType] }}
            >
                <BlockContent blockProps={props}>
                    <div
                        className={`premium-image-separator-container`}
                        style={{
                            textAlign: iconAlign[props.deviceType],
                            transform: `translateY(${gutter}%)`,
                            filter:
                                iconType === "image"
                                    ? `brightness( ${imgFilter?.bright}% ) contrast( ${imgFilter?.contrast}% ) saturate( ${imgFilter?.saturation}% ) blur( ${imgFilter?.blur}px ) hue-rotate( ${imgFilter?.hue}deg )`
                                    : "",
                        }}
                    >
                        {iconType === "icon" && (
                            <GenIcon className={`premium-image-separator-icon ${iconStyles[0].icon} premium-image-separator-${iconStyles[0].advancedBorder}`}
                                name={iconStyles[0].icon}
                                size={iconSize[props.deviceType]}
                                icon={('fa' === iconStyles[0].icon.substring(0, 2) ? FaIco[iconStyles[0].icon] : Ico[iconStyles[0].icon])}
                                strokeWidth={('fe' === iconStyles[0].icon.substring(0, 2) ? icons[0].width : undefined)}
                                style={{
                                    ...paddingCss(iconPadding, props.deviceType),
                                    fontSize: (iconSize[props.deviceType] || 200) + iconSize.unit,
                                    color: iconStyles[0].iconColor,
                                    backgroundColor: iconStyles[0].iconBGColor,
                                    ...BorderValue,
                                }}
                            />
                        )}
                        {iconType === "image" && (
                            <Fragment>
                                {imageURL ? (
                                    <img
                                        src={imageURL}
                                        style={{
                                            ...BorderValue,
                                            maskSize: `${maskSize}`,
                                            maskPosition: `${maskPosition}`,
                                            maskImage: imgMaskURL
                                                ? `url("${imgMaskURL}")`
                                                : "",
                                            WebkitMaskImage: imgMaskURL
                                                ? `url("${imgMaskURL}")`
                                                : "",
                                            WebkitMaskSize: `${maskSize}`,
                                            WebkitMaskPosition: `${maskPosition}`,
                                            objectFit: `${imgFit}`,
                                            height:
                                                (imgHeight[props.deviceType] ||
                                                    200) + iconSize.unit,
                                            width:
                                                (iconSize[props.deviceType] ||
                                                    200) + iconSize.unit,
                                        }}
                                    />
                                ) : (
                                    <MediaPlaceholder
                                        labels={{
                                            title: __(
                                                "Premium Image Separator",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            instructions: __(
                                                "Upload an image file, pick one from your media library, or add one with a URL.",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                        }}
                                        accept={["image"]}
                                        allowedTypes={["image"]}
                                        value={imageURL}
                                        onSelectURL={(value) =>
                                            setAttributes({ imageURL: value })
                                        }
                                        onSelect={(media) => {
                                            setAttributes({
                                                imageID: media.id,
                                                imageURL: media.url,
                                            });
                                        }}
                                    />
                                )}
                            </Fragment>
                        )}
                        {link && (
                            <a
                                className="premium-image-separator-link"
                                href={`${url}`}
                            ></a>
                        )}
                    </div>
                </BlockContent>
            </div>
        </Fragment>
    );
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select(
        "core/edit-post"
    );
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(Edit);