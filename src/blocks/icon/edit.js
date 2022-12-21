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
    PremiumBackgroundControl,
    Icons,
    InsideTab,
    iconsList,
    RadioComponent,
    PremiumMediaUpload
} from "@pbg/components";
import {
    gradientBackground,
    borderCss,
    paddingCss,
    marginCss,
    generateBlockId,
    generateCss,
} from "@pbg/helpers";
import { FontAwesomeEnabled } from "@pbg/settings";

const { __ } = wp.i18n;

const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;

const { useEffect, Fragment } = wp.element;

const { InspectorControls, useBlockProps } = wp.blockEditor;

const { withSelect } = wp.data;

function Edit(props) {
    const { setAttributes, className } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-icon-" + generateBlockId(props.clientId),
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        blockId,
        iconType,
        iconTypeFile,
        imageID,
        imageURL,
        selectedIcon,
        iconAlign,
        hoverEffect,
        iconStyles,
        urlCheck,
        link,
        target,
        hideDesktop,
        hideTablet,
        hideMobile,
        iconSize,
        iconPadding,
        iconMargin,
        wrapPadding,
        wrapMargin,
        containerBorder,
        iconBorder,
        containerBackground,
        containerShadow,
        iconShadow,
        borderHoverColor,
        imgWidth
    } = props.attributes;

    const EFFECTS = [
        {
            value: "none",
            label: __("None", "premium-blocks-for-gutenberg"),
        },
        {
            value: "pulse",
            label: __("Pulse", "premium-blocks-for-gutenberg"),
        },
        {
            value: "rotate",
            label: __("Rotate", "premium-blocks-for-gutenberg"),
        },
        {
            value: "drotate",
            label: __("3D Rotate", "premium-blocks-for-gutenberg"),
        },
        {
            value: "buzz",
            label: __("Buzz", "premium-blocks-for-gutenberg"),
        },
        {
            value: "drop",
            label: __("Drop Shadow", "premium-blocks-for-gutenberg"),
        },
        {
            value: "wobble",
            label: __("Wobble", "premium-blocks-for-gutenberg"),
        },
    ];

    const saveIconStyle = (value) => {
        const newUpdate = iconStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({
            iconStyles: newUpdate,
        });
    };

    const loadStyles = () => {
        const styles = {};
        styles[` .${blockId} .premium-icon-container i:hover`] = {
            color: `${iconStyles[0].iconHoverColor} !important`,
            "background-color": `${iconStyles[0].iconHoverBack} !important`,
            "border-color": `${borderHoverColor}!important`
        };
        styles[` .${blockId} .premium-icon-container img`] = {
            width: `${imgWidth[props.deviceType]}${imgWidth.unit} !important`,
            'border-color': `${iconBorder && iconBorder.borderColor} !important`,
            'border-style': `${iconBorder && iconBorder.borderType} !important`,
            'border-top-width': `${iconBorder && iconBorder.borderWidth[props.deviceType].top}px!important`,
            'border-right-width': `${iconBorder && iconBorder.borderWidth[props.deviceType].right}px!important`,
            'border-bottom-width': `${iconBorder && iconBorder.borderWidth[props.deviceType].bottom}px!important`,
            'border-left-width': `${iconBorder && iconBorder.borderWidth[props.deviceType].left}px!important`,
            'border-top-left-radius': `${iconBorder?.borderRadius?.[props.deviceType]?.top || 0}px!important`,
            'border-top-right-radius': `${iconBorder?.borderRadius?.[props.deviceType]?.right || 0}px!important`,
            'border-bottom-left-radius': `${iconBorder?.borderRadius?.[props.deviceType]?.bottom || 0}px!important`,
            'border-bottom-right-radius': `${iconBorder?.borderRadius?.[props.deviceType]?.left || 0}px!important`,
            "padding-top": `${iconPadding?.[props.deviceType]?.top}${iconPadding.unit}!important`,
            "padding-right": `${iconPadding?.[props.deviceType]?.right}${iconPadding.unit}!important`,
            "padding-bottom": `${iconPadding?.[props.deviceType]?.bottom}${iconPadding.unit}!important`,
            "padding-left": `${iconPadding?.[props.deviceType]?.left}${iconPadding.unit}!important`,
            "margin-top": `${iconMargin?.[props.deviceType]?.top}${iconMargin.unit}!important`,
            "margin-right": `${iconMargin?.[props.deviceType]?.right}${iconMargin.unit}!important`,
            "margin-bottom": `${iconMargin?.[props.deviceType]?.bottom}${iconMargin.unit}!important`,
            "margin-left": `${iconMargin?.[props.deviceType]?.left}${iconMargin.unit}!important`
        };
        return generateCss(styles);
    };

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__("Icon", "premium-blocks-for-gutenberg")}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <RadioComponent
                                choices={[
                                    {
                                        label: __(
                                            "Icon",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        value: "icon",
                                    },
                                    {
                                        label: __(
                                            "Image",
                                            "premium-blocks-for-gutenberg"
                                        ),
                                        value: "img",
                                    }
                                ]}
                                value={iconTypeFile}
                                onChange={(newValue) =>
                                    setAttributes({ iconTypeFile: newValue })
                                }
                                label={__(
                                    "Type",
                                    "premium-blocks-for-gutenberg"
                                )}
                            />
                            {"icon" === iconTypeFile && (
                                <Fragment>
                                    <p className="premium-editor-paragraph">
                                        {__(
                                            "Select Icon",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    </p>
                                    <FontIconPicker
                                        icons={iconsList}
                                        onChange={(newIcon) =>
                                            setAttributes({ selectedIcon: newIcon })
                                        }
                                        value={selectedIcon}
                                        isMulti={false}
                                        // appendTo="body"
                                        noSelectedPlaceholder={__(
                                            "Select Icon",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                    />
                                </Fragment>
                            )}
                            {"img" === iconTypeFile && (
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
                            )}
                            <ToggleControl
                                label={__(
                                    "Link",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={urlCheck}
                                onChange={(newValue) =>
                                    setAttributes({ urlCheck: newValue })
                                }
                            />
                            {urlCheck && (
                                <Fragment>
                                    <TextControl
                                        label={__(
                                            "URL",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={link}
                                        onChange={(newLink) =>
                                            setAttributes({ link: newLink })
                                        }
                                    />
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
                                </Fragment>
                            )}
                            <ResponsiveRadioControl
                                label={__(
                                    "Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
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
                                value={iconAlign}
                                onChange={(newValue) =>
                                    setAttributes({ iconAlign: newValue })
                                }
                                showIcons={true}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        <PanelBody
                            title={__(
                                "Icon Style",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            {"img" === iconTypeFile &&
                                <ResponsiveRangeControl
                                    label={__(
                                        "Width",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={imgWidth}
                                    onChange={(value) =>
                                        setAttributes({ imgWidth: value })
                                    }
                                    min={0}
                                    max={300}
                                    step={1}
                                    showUnit={true}
                                    units={["px", "%"]}
                                    defaultValue={100}
                                />
                            }
                            {"icon" === iconTypeFile &&
                                <Fragment>
                                    <ResponsiveRangeControl
                                        label={__(
                                            "Size",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={iconSize}
                                        onChange={(value) =>
                                            setAttributes({ iconSize: value })
                                        }
                                        min={0}
                                        max={300}
                                        step={1}
                                        showUnit={true}
                                        units={["px", "em", "rem"]}
                                        defaultValue={50}
                                    />
                                    <InsideTabs>
                                        <InsideTab
                                            tabTitle={__(
                                                "Normal",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                        >
                                            <Fragment>
                                                <AdvancedPopColorControl
                                                    label={__(
                                                        "Color",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    colorValue={iconStyles[0].iconColor}
                                                    colorDefault={""}
                                                    onColorChange={(value) =>
                                                        saveIconStyle({
                                                            iconColor: value,
                                                        })
                                                    }
                                                />
                                                <AdvancedPopColorControl
                                                    label={__(
                                                        "Background Color",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    colorValue={iconStyles[0].iconBack}
                                                    colorDefault={""}
                                                    onColorChange={(value) =>
                                                        saveIconStyle({
                                                            iconBack: value,
                                                        })
                                                    }
                                                />
                                            </Fragment>
                                        </InsideTab>
                                        <InsideTab
                                            tabTitle={__(
                                                "Hover",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                        >
                                            <Fragment>
                                                <AdvancedPopColorControl
                                                    label={__(
                                                        "Hover Color",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    colorValue={
                                                        iconStyles[0].iconHoverColor
                                                    }
                                                    colorDefault={""}
                                                    onColorChange={(value) =>
                                                        saveIconStyle({
                                                            iconHoverColor: value,
                                                        })
                                                    }
                                                />
                                                <AdvancedPopColorControl
                                                    label={__(
                                                        "Hover Background Color",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    colorValue={
                                                        iconStyles[0].iconHoverBack
                                                    }
                                                    colorDefault={""}
                                                    onColorChange={(value) =>
                                                        saveIconStyle({
                                                            iconHoverBack: value,
                                                        })
                                                    }
                                                />
                                                {(iconBorder.borderType != "none" || iconBorder.borderType != "") && (
                                                    <AdvancedPopColorControl
                                                        label={__(
                                                            "Border Color",
                                                            "premium-blocks-for-gutenberg"
                                                        )}
                                                        colorValue={borderHoverColor}
                                                        colorDefault={""}
                                                        onColorChange={(newValue) =>
                                                            setAttributes({
                                                                borderHoverColor:
                                                                    newValue
                                                            })
                                                        }
                                                    />
                                                )}
                                                <SelectControl
                                                    label={__(
                                                        "Hover Effect",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    options={EFFECTS}
                                                    value={hoverEffect}
                                                    onChange={(newEffect) =>
                                                        setAttributes({
                                                            hoverEffect: newEffect,
                                                        })
                                                    }
                                                />
                                            </Fragment>
                                        </InsideTab>
                                    </InsideTabs>
                                </Fragment>
                            }
                            {"icon" === iconTypeFile && <PremiumShadow
                                label={__(
                                    "Text Shadow",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={iconShadow}
                                boxShadow={false}
                                onChange={(value) =>
                                    setAttributes({ iconShadow: value })
                                }
                            />
                            }
                            <hr />
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={iconBorder}
                                onChange={(value) =>
                                    setAttributes({ iconBorder: value })
                                }
                            />
                            <hr />
                            <SpacingControl
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={iconMargin}
                                onChange={(value) =>
                                    setAttributes({ iconMargin: value })
                                }
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={iconPadding}
                                onChange={(value) =>
                                    setAttributes({ iconPadding: value })
                                }
                                showUnits={true}
                                responsive={true}
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
                            <PremiumBackgroundControl
                                value={containerBackground}
                                onChange={(value) =>
                                    setAttributes({
                                        containerBackground: value,
                                    })
                                }
                            />
                            <PremiumShadow
                                boxShadow={true}
                                value={containerShadow}
                                onChange={(value) =>
                                    setAttributes({ containerShadow: value })
                                }
                            />
                            <hr />
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={containerBorder}
                                onChange={(value) =>
                                    setAttributes({ containerBorder: value })
                                }
                            />
                            <hr />
                            <SpacingControl
                                label={__(
                                    "Margin",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={wrapMargin}
                                onChange={(value) =>
                                    setAttributes({ wrapMargin: value })
                                }
                                showUnits={true}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={wrapPadding}
                                onChange={(value) =>
                                    setAttributes({ wrapPadding: value })
                                }
                                showUnits={true}
                                responsive={true}
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
                                    hideDesktop: value
                                        ? " premium-desktop-hidden"
                                        : "",
                                })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({
                                    hideTablet: value
                                        ? " premium-tablet-hidden"
                                        : "",
                                })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({
                                    hideMobile: value
                                        ? " premium-mobile-hidden"
                                        : "",
                                })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles(),
                }}
            />
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-icon ${blockId} premium-icon__container`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
            >
                <div
                    className={`premium-icon-container`}
                    style={{
                        textAlign: iconAlign[props.deviceType],
                        ...gradientBackground(containerBackground),
                        ...borderCss(containerBorder, props.deviceType),
                        ...paddingCss(wrapPadding, props.deviceType),
                        ...marginCss(wrapMargin, props.deviceType),
                        boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                    }}
                >
                    {"icon" === iconTypeFile && iconType === "fa" && 1 != FontAwesomeEnabled && (
                        <p className={`premium-icon__alert`}>
                            {__(
                                "Please Enable Font Awesome Icons from Plugin settings",
                                "premium-blocks-for-gutenberg"
                            )}
                        </p>
                    )}
                    <div className={`premium-icon__${hoverEffect}`}>
                        {"icon" === iconTypeFile && (iconType === "dash" || 1 == FontAwesomeEnabled) && (
                            <i
                                className={`premium-icon ${selectedIcon}`}
                                style={{
                                    color: iconStyles[0].iconColor,
                                    backgroundColor: iconStyles[0].iconBack,
                                    fontSize:
                                        (iconSize[props.deviceType] || 50) +
                                        iconSize.unit,
                                    cursor: urlCheck ? 'pointer' : 'default',
                                    ...borderCss(iconBorder, props.deviceType),
                                    ...paddingCss(
                                        iconPadding,
                                        props.deviceType
                                    ),
                                    ...marginCss(iconMargin, props.deviceType),
                                    textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`,
                                }}
                            />
                        )}
                        {imageURL && "img" === iconTypeFile && (
                            <img src={imageURL} />
                        )}
                    </div>

                </div>
            </div>
        </Fragment>
    );
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(Edit);
