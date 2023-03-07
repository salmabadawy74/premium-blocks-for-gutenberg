import classnames from "classnames";
import {
    InspectorTabs,
    InspectorTab,
    Icons,
    PremiumBorder,
    PremiumResponsiveTabs,
    ResponsiveSingleRangeControl,
    MultiButtonsControl,
    RadioComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    PremiumShadow,
    WebfontLoader,
    PremiumTypo,
    SpacingComponent,
    PremiumFilters,
    InsideTabs,
    InsideTab,
    BlockContent,
    AdvancedTabOptions
} from "@pbg/components";
import {
    borderCss,
    generateBlockId,
    generateCss,
    paddingCss,
    typographyCss,
} from "@pbg/helpers";

const { withSelect } = wp.data;
const { __ } = wp.i18n;
const { Fragment, useEffect } = wp.element;
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
    RichText,
    MediaPlaceholder,
    useBlockProps,
} = wp.blockEditor;

function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-banner-" + generateBlockId(clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

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
        urlCheck,
        target,
        url,
        sepColor,
        filter,
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
        blockId,
        hoverBackground,
    } = props.attributes;

    const ALIGNS = [
        {
            value: "flex-start",
            label: __("Top", "premium-blocks-for-gutenberg"),
        },
        {
            value: "center",
            label: __("Middle", "premium-blocks-for-gutenberg"),
        },
        {
            value: "flex-end",
            label: __("Bottom", "premium-blocks-for-gutenberg"),
        },
        {
            value: "inherit",
            label: __("Full", "premium-blocks-for-gutenberg"),
        },
    ];

    const EFFECTS = [
        {
            value: "effect1",
            label: __("Style 1", "premium-blocks-for-gutenberg"),
        },
        {
            value: "effect2",
            label: __("Style 2", "premium-blocks-for-gutenberg"),
        },
        {
            value: "effect3",
            label: __("Style 3", "premium-blocks-for-gutenberg"),
        },
        {
            value: "effect4",
            label: __("Style 4", "premium-blocks-for-gutenberg"),
        },
        {
            value: "effect5",
            label: __("Style 5", "premium-blocks-for-gutenberg"),
        },
        {
            value: "effect6",
            label: __("Style 6", "premium-blocks-for-gutenberg"),
        },
    ];

    const HOVER = [
        {
            value: "none",
            label: __("None", "premium-blocks-for-gutenberg"),
        },
        {
            value: "zoomin",
            label: __("Zoom In", "premium-blocks-for-gutenberg"),
        },
        {
            value: "zoomout",
            label: __("Zoom Out", "premium-blocks-for-gutenberg"),
        },
        {
            value: "scale",
            label: __("Scale", "premium-blocks-for-gutenberg"),
        },
        {
            value: "gray",
            label: __("Gray Scale", "premium-blocks-for-gutenberg"),
        },
        {
            value: "blur",
            label: __("Blur", "premium-blocks-for-gutenberg"),
        },
        {
            value: "bright",
            label: __("Bright", "premium-blocks-for-gutenberg"),
        },
        {
            value: "sepia",
            label: __("Sepia", "premium-blocks-for-gutenberg"),
        },
    ];

    const HEIGHT = [
        {
            value: "default",
            label: __("Default", "premium-blocks-for-gutenberg"),
        },
        {
            value: "custom",
            label: __("Custom", "premium-blocks-for-gutenberg"),
        },
    ];

    const saveStyles = (value) => {
        const newUpdate = titleStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });

        setAttributes({ titleStyles: newUpdate });
    };

    const descriptionStyles = (value) => {
        const newUpdate = descStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ descStyles: newUpdate });
    };

    const loadStyles = () => {
        const styles = {};

        styles[
            `.${blockId} .premium-banner__effect3 .premium-banner__title_wrap::after`
        ] = {
            background: sepColor,
        };

        styles[
            `.${blockId} .premium-banner__inner:hover .premium-banner__bg-overlay`
        ] = {
            "background-color": `${hoverBackground ? hoverBackground : ""
                } !important`,
        };

        return generateCss(styles);
    };

    let loadTitleGoogleFonts;
    let loadDesciptionGoogleFonts;

    if (titleTypography.fontFamily !== "Default") {
        const gconfig = {
            google: {
                families: [titleTypography?.fontFamily],
            },
        };
        loadTitleGoogleFonts = <WebfontLoader config={gconfig}></WebfontLoader>;
    }
    if (descTypography.fontFamily !== "Default") {
        const dconfig = {
            google: {
                families: [descTypography.fontFamily],
            },
        };
        loadDesciptionGoogleFonts = (
            <WebfontLoader config={dconfig}></WebfontLoader>
        );
    }

    return (
        <Fragment>
            <BlockControls key="controls">
                <Toolbar>
                    <IconButton
                        label={__(
                            "Refresh this button when it conflict with other buttons styles",
                            "premium-blocks-for-gutenberg"
                        )}
                        icon="update"
                        className="components-toolbar__control"
                    />
                </Toolbar>
            </BlockControls>
            {imageURL && (
                <InspectorControls key={"inspector"}>
                    <InspectorTabs tabs={["layout", "style", "advance"]}>
                        <InspectorTab key={"layout"}>
                            <PanelBody
                                title={__(
                                    "General",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <button
                                    className="lottie-remove"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setAttributes({
                                            imageURL: "",
                                            imageID: "",
                                        });
                                    }}
                                >
                                    {__(
                                        "Remove Image",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                </button>
                                <ToggleControl
                                    label={__(
                                        "Link",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={urlCheck}
                                    onChange={(newCheck) =>
                                        setAttributes({ urlCheck: newCheck })
                                    }
                                />
                                {urlCheck && (
                                    <TextControl
                                        value={url}
                                        onChange={(newURL) =>
                                            setAttributes({ url: newURL })
                                        }
                                    />
                                )}
                                {urlCheck && (
                                    <ToggleControl
                                        label={__(
                                            "Open link in new tab",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        checked={target}
                                        onChange={(newValue) =>
                                            setAttributes({ target: newValue })
                                        }
                                    />
                                )}
                                <SelectControl
                                    label={__(
                                        "Banner Style",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={effect}
                                    onChange={(newEffect) =>
                                        setAttributes({ effect: newEffect })
                                    }
                                    options={EFFECTS}
                                />
                                <ToggleControl
                                    label={__(
                                        "Always Hovered",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={hovered}
                                    onChange={(check) =>
                                        setAttributes({ hovered: check })
                                    }
                                />
                                <SelectControl
                                    label={__(
                                        "Image Hover Effect",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    options={HOVER}
                                    value={hoverEffect}
                                    onChange={(newEffect) =>
                                        setAttributes({
                                            hoverEffect: newEffect,
                                        })
                                    }
                                />
                                <SelectControl
                                    label={__(
                                        "Height",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    options={HEIGHT}
                                    value={height}
                                    onChange={(newHeight) =>
                                        setAttributes({ height: newHeight })
                                    }
                                />
                                {"custom" === height && (
                                    <ResponsiveSingleRangeControl
                                        label={__(
                                            "Min Height (PX)",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={minHeight}
                                        min="10"
                                        max="800"
                                        onChange={(newSize) =>
                                            setAttributes({
                                                minHeight: newSize,
                                            })
                                        }
                                        showUnit={false}
                                        defaultValue={100}
                                    />
                                )}
                                {"custom" === height && (
                                    <SelectControl
                                        label={__(
                                            "Vertical Align",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        options={ALIGNS}
                                        value={verAlign}
                                        onChange={(newValue) =>
                                            setAttributes({
                                                verAlign: newValue,
                                            })
                                        }
                                    />
                                )}
                                <ToggleControl
                                    label={__(
                                        "Hide Description on Mobiles",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={responsive}
                                    onChange={(newValue) =>
                                        setAttributes({ responsive: newValue })
                                    }
                                />
                                <MultiButtonsControl
                                    choices={[
                                        {
                                            value: "left",
                                            label: __(
                                                "Left",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            icon: Icons.alignLeft,
                                        },
                                        {
                                            value: "center",
                                            label: __(
                                                "Center",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            icon: Icons.alignCenter,
                                        },
                                        {
                                            value: "right",
                                            label: __(
                                                "Right",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            icon: Icons.alignRight,
                                        },
                                    ]}
                                    value={contentAlign}
                                    onChange={(align) =>
                                        setAttributes({ contentAlign: align })
                                    }
                                    label={__(
                                        "Align Content",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    showIcons={true}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__(
                                    "Title",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <RadioComponent
                                    choices={[
                                        {
                                            label: __(
                                                "H1",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            value: "h1",
                                        },
                                        {
                                            label: __(
                                                "H2",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            value: "h2",
                                        },
                                        {
                                            label: __(
                                                "H3",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            value: "h3",
                                        },
                                        {
                                            label: __(
                                                "H4",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            value: "h4",
                                        },
                                        {
                                            label: __(
                                                "H5",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            value: "h5",
                                        },
                                        {
                                            label: __(
                                                "H6",
                                                "premium-blocks-for-gutenberg"
                                            ),
                                            value: "h6",
                                        },
                                    ]}
                                    value={titleTag}
                                    onChange={(newValue) =>
                                        setAttributes({ titleTag: newValue })
                                    }
                                    label={__(
                                        "HTML Tag",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                />
                            </PanelBody>
                        </InspectorTab>
                        <InspectorTab key={"style"}>
                            <PanelBody
                                title={__(
                                    "General Settings",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <InsideTabs>
                                    <InsideTab
                                        tabTitle={__(
                                            "Normal",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Overlay",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={background}
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                setAttributes({
                                                    background: newValue,
                                                })
                                            }
                                        />
                                    </InsideTab>
                                    <InsideTab
                                        tabTitle={__(
                                            "Hover",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    >
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Hover Overlay",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={hoverBackground}
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                setAttributes({
                                                    hoverBackground: newValue,
                                                })
                                            }
                                        />
                                    </InsideTab>
                                </InsideTabs>
                                <PremiumFilters
                                    value={filter}
                                    onChange={(value) =>
                                        setAttributes({ filter: value })
                                    }
                                />
                            </PanelBody>
                            <PanelBody
                                title={__(
                                    "Title",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={titleTypography}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            titleTypography: newValue,
                                        })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__(
                                        "Text Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].titleColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveStyles({
                                            titleColor: newValue,
                                        })
                                    }
                                />
                                {"effect3" === effect && (
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Separator Color",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        colorValue={sepColor}
                                        colorDefault={""}
                                        onColorChange={(newValue) =>
                                            setAttributes({
                                                sepColor: newValue,
                                            })
                                        }
                                    />
                                )}
                                {"effect2" === effect && (
                                    <AdvancedPopColorControl
                                        label={__(
                                            "Background Color",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        colorValue={titleStyles[0].titleBack}
                                        colorDefault={""}
                                        onColorChange={(newValue) =>
                                            saveStyles({
                                                titleBack:
                                                    newValue === undefined
                                                        ? "transparent"
                                                        : newValue,
                                            })
                                        }
                                    />
                                )}
                                <PremiumShadow
                                    label={__(
                                        "Text Shadow",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={titleTextShadow}
                                    onChange={(value) =>
                                        setAttributes({
                                            titleTextShadow: value,
                                        })
                                    }
                                    boxShadow={false}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__(
                                    "Description",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={descTypography}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            descTypography: newValue,
                                        })
                                    }
                                />
                                <AdvancedPopColorControl
                                    label={__(
                                        "Text Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={descStyles[0].descColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        descriptionStyles({
                                            descColor: newValue,
                                        })
                                    }
                                />
                                <PremiumShadow
                                    label={__(
                                        "Text Shadow",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={descTextShadow}
                                    onChange={(value) =>
                                        setAttributes({ descTextShadow: value })
                                    }
                                    boxShadow={false}
                                />
                            </PanelBody>
                            <PanelBody
                                title={__(
                                    "Container Style",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumShadow
                                    value={containerShadow}
                                    onChange={(value) =>
                                        setAttributes({
                                            containerShadow: value,
                                        })
                                    }
                                    boxShadow={true}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__(
                                        "Border",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={border}
                                    onChange={(value) =>
                                        setAttributes({ border: value })
                                    }
                                />
                                <hr />
                                <SpacingComponent
                                    value={padding}
                                    responsive={true}
                                    showUnits={true}
                                    label={__(
                                        "Padding",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    onChange={(value) =>
                                        setAttributes({ padding: value })
                                    }
                                />
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
            )}
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-banner ${blockId} premium-banner__responsive_${responsive}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
            >
                {!imageURL && (
                    <MediaPlaceholder
                        labels={{
                            title: __(
                                "Premium Banner ",
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
                {imageURL && (
                    <div
                        style={{
                            ...paddingCss(padding, props.deviceType),
                        }}
                    >
                        <style
                            dangerouslySetInnerHTML={{
                                __html: loadStyles(),
                            }}
                        />
                        <BlockContent blockProps={props}>
                            <div
                                className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                                style={{
                                    boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                                    ...borderCss(border, props.deviceType),
                                    minHeight: height == "custom" ? minHeight : "",
                                }}
                            >
                                <div
                                    className={`premium-banner__bg-overlay ${hoverBackground == "" ||
                                        hoverBackground == undefined
                                        ? "premium-banner-hover-overlay"
                                        : ""
                                        }`}
                                    style={{
                                        backgroundColor: `${background ? background : ""
                                            } `,
                                    }}
                                ></div>
                                <div
                                    className={`premium-banner__img_wrap premium-banner__${height}`}
                                    style={{
                                        minHeight: height == "custom" ? minHeight : "",
                                        alignItems: verAlign,
                                    }}
                                >
                                    <img
                                        className={`premium-banner__img`}
                                        alt="Banner Image"
                                        src={imageURL}
                                        style={{
                                            filter: `brightness( ${filter?.bright}% ) contrast( ${filter?.contrast}% ) saturate( ${filter?.saturation}% ) blur( ${filter?.blur}px ) hue-rotate( ${filter?.hue}deg )`,
                                        }}
                                    />
                                </div>

                                <div
                                    className={`premium-banner__content`}
                                    style={{
                                        background:
                                            "effect2" === effect
                                                ? titleStyles[0].titleBack
                                                : "transparent",
                                    }}
                                >
                                    <div
                                        className={`premium-banner__title_wrap`}
                                        style={{
                                            textAlign:
                                                contentAlign[props.deviceType],
                                        }}
                                    >
                                        <RichText
                                            tagName={titleTag.toLowerCase()}
                                            className={`premium-banner__title`}
                                            value={title}
                                            placeholder={__("Awesome Title")}
                                            isSelected={false}
                                            onChange={(newText) =>
                                                setAttributes({ title: newText })
                                            }
                                            style={{
                                                color: titleStyles[0].titleColor,
                                                ...typographyCss(
                                                    titleTypography,
                                                    props.deviceType
                                                ),
                                                textShadow: `${titleTextShadow?.horizontal}px ${titleTextShadow?.vertical}px ${titleTextShadow?.blur}px ${titleTextShadow?.color}`,
                                            }}
                                        />
                                    </div>
                                    <div
                                        className={`premium-banner__desc_wrap`}
                                        style={{
                                            textAlign:
                                                contentAlign[props.deviceType],
                                        }}
                                    >
                                        <RichText
                                            tagName="p"
                                            className={`premium-banner__desc`}
                                            value={desc}
                                            isSelected={false}
                                            onChange={(newText) =>
                                                setAttributes({ desc: newText })
                                            }
                                            style={{
                                                color: descStyles[0].descColor,
                                                ...typographyCss(
                                                    descTypography,
                                                    props.deviceType
                                                ),
                                                textShadow: `${descTextShadow.horizontal}px ${descTextShadow.vertical}px ${descTextShadow.blur}px ${descTextShadow.color}`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </BlockContent>
                        {loadTitleGoogleFonts}
                        {loadDesciptionGoogleFonts}
                    </div>
                )}
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

    return { deviceType: deviceType };
})(Edit);
