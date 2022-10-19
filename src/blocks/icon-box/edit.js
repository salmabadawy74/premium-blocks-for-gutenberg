import classnames from "classnames";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
    RadioComponent,
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
    WebfontLoader,
    ResponsiveSingleRangeControl,
    PremiumMediaUpload,
    PremiumTypo
} from '@pbg/components';
import { gradientBackground, borderCss, paddingCss, marginCss, typographyCss, generateBlockId, generateCss } from '@pbg/helpers';

const { __ } = wp.i18n;
const { PanelBody, SelectControl, ToggleControl, TextControl } = wp.components;
const { Fragment, useEffect } = wp.element;
const { withSelect } = wp.data;
const { InspectorControls, RichText, useBlockProps } = wp.blockEditor;


function Edit(props) {
    const { setAttributes, className, clientId } = props;

    useEffect(() => {
        setAttributes({
            blockId: "premium-icon-box-" + generateBlockId(clientId)
        });
        setAttributes({ classMigrate: true });
    }, []);

    const {
        blockId,
        align,
        iconImage,
        iconImgId,
        iconImgUrl,
        hoverEffect,
        iconChecked,
        iconPos,
        iconHPos,
        iconVPos,
        iconSize,
        iconRadius,
        iconColor,
        iconBackColor,
        selectedIcon,
        titleChecked,
        titleText,
        descText,
        descChecked,
        btnChecked,
        btnEffect,
        effectDir,
        btnTarget,
        btnText,
        btnLink,
        btnHoverBorder,
        hideDesktop,
        hideTablet,
        hideMobile,
        titleStyles,
        descStyles,
        btnStyles,
        iconType,
        containerPadding,
        containerMargin,
        btnMargin,
        btnPadding,
        descMargin,
        titleMargin,
        btnBorder,
        containerBorder,
        containerBackground,
        titleShadow,
        btnShadow,
        containerShadow,
        containerHoverShadow,
        titleTypography,
        descTypography,
        btnTypography,
        titleTag
    } = props.attributes;

    const imgIcon = [
        {
            label: __("Icon", "premium-blocks-for-gutenberg"),
            value: "icon",
        },
        {
            label: __("Image", "premium-blocks-for-gutenberg"),
            value: "image",
        },
    ];

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

    const BTN_EFFECTS = [
        {
            value: "none",
            label: __("None", "premium-blocks-for-gutenberg"),
        },
        {
            value: "slide",
            label: __("Slide", "premium-blocks-for-gutenberg"),
        },
    ];

    const ICON_POS = [
        {
            label: __("Inline", "premium-blocks-for-gutenberg"),
            value: "inline",
        },
        {
            label: __("Block", "premium-blocks-for-gutenberg"),
            value: "block",
        },
    ];

    const ICON_HPOS = [
        {
            label: __("Before", "premium-blocks-for-gutenberg"),
            value: "before",
        },
        {
            label: __("After", "premium-blocks-for-gutenberg"),
            value: "after",
        },
    ];

    const ICON_VPOS = [
        {
            label: __("Top", "premium-blocks-for-gutenberg"),
            value: "top",
        },
        {
            label: __("Middle", "premium-blocks-for-gutenberg"),
            value: "center",
        },
        {
            label: __("Bottom", "premium-blocks-for-gutenberg"),
            value: "bottom",
        },
    ];

    const saveTitleStyle = (value) => {
        const newUpdate = titleStyles.map((item, index) => {
            if (0 === index) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ titleStyles: newUpdate });
    };

    const saveButtonStyle = (value) => {
        const newUpdate = btnStyles.map((item, indexx) => {
            if (0 === indexx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ btnStyles: newUpdate });
    };

    const saveDescriptionStyle = (value) => {
        const newUpdate = descStyles.map((item, indx) => {
            if (0 === indx) {
                item = { ...item, ...value };
            }
            return item;
        });
        setAttributes({ descStyles: newUpdate });
    };

    let loadTitleGoogleFonts;
    let loadDescriptionGoogleFonts;
    let loadButtonGoogleFonts;

    if (titleTypography.fontFamily !== "Default") {
        const titleconfig = {
            google: {
                families: [titleTypography.fontFamily],
            }
        };
        loadTitleGoogleFonts = (
            <WebfontLoader config={titleconfig}></WebfontLoader>
        );
    }
    if (descTypography.fontFamily !== "Default") {
        const descConfig = {
            google: {
                families: [descTypography.fontFamily],
            }
        };
        loadDescriptionGoogleFonts = (
            <WebfontLoader config={descConfig}></WebfontLoader>
        );
    }
    if (btnTypography.fontFamily !== "Default") {
        const btnConfig = {
            google: {
                families: [btnTypography.fontFamily],
            }
        };
        loadButtonGoogleFonts = (
            <WebfontLoader config={btnConfig}></WebfontLoader>
        );
    }

    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId}:hover`] = {
            "box-shadow": `${containerHoverShadow.horizontal}px ${containerHoverShadow.vertical}px ${containerHoverShadow.blur}px ${containerHoverShadow.color} ${containerHoverShadow.position} !important`,
        };
        styles[`.${blockId}`] = {
            "box-shadow": `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position} !important`,
        };
        styles[`.${blockId} .premium-icon-box__btn:hover`] = {
            color: `${btnStyles[0].btnHoverColor} !important`,
            "border-color": `${btnHoverBorder} !important`,
        };
        styles[
            `.${blockId} .premium-button__none .premium-icon-box__btn:hover`
        ] = {
            "background-color": `${btnStyles[0].btnHoverBack} !important`,
        };
        styles[
            `.${blockId} .premium-button__slide .premium-button::before`
        ] = {
            "background-color": `${btnStyles[0].btnHoverBack} !important`,
        };
        return generateCss(styles);
    };

    return (
        <Fragment>
            <InspectorControls key={"inspector"}>
                <InspectorTabs tabs={["layout", "style", "advance"]}>
                    <InspectorTab key={"layout"}>
                        <PanelBody
                            title={__(
                                "Display Options",
                                "premium-blocks-for-gutenberg"
                            )}
                            className="premium-panel-body"
                            initialOpen={true}
                        >
                            <ToggleControl
                                label={__(
                                    "Icon",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={iconChecked}
                                onChange={(newValue) =>
                                    setAttributes({ iconChecked: newValue })
                                }
                            />
                            <ToggleControl
                                label={__(
                                    "Title",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={titleChecked}
                                onChange={(newValue) =>
                                    setAttributes({
                                        titleChecked: newValue,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__(
                                    "Description",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={descChecked}
                                onChange={(newValue) =>
                                    setAttributes({ descChecked: newValue })
                                }
                            />
                            <ToggleControl
                                label={__(
                                    "Button",
                                    "premium-blocks-for-gutenberg"
                                )}
                                checked={btnChecked}
                                onChange={(newValue) =>
                                    setAttributes({ btnChecked: newValue })
                                }
                            />
                            <ResponsiveRadioControl
                                label={__(
                                    "Alignment",
                                    "premium-blocks-for-gutenberg"
                                )}
                                choices={[
                                    {
                                        value: "left",
                                        label: __("Left", "premium-blocks-for-gutenberg"),
                                        icon: Icons.alignLeft,
                                    },
                                    {
                                        value: "center",
                                        label: __("Center", "premium-blocks-for-gutenberg"),
                                        icon: Icons.alignCenter,
                                    },
                                    {
                                        value: "right",
                                        label: __("Right", "premium-blocks-for-gutenberg"),
                                        icon: Icons.alignRight,
                                    },
                                ]}
                                value={align}
                                onChange={(newValue) =>
                                    setAttributes({ align: newValue })
                                }
                                showIcons={true}
                            />
                        </PanelBody>
                        {iconChecked && (
                            <PanelBody
                                title={__(
                                    "Icon",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <SelectControl
                                    label={__(
                                        "Icon Position",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    options={ICON_POS}
                                    value={iconPos}
                                    onChange={(newValue) =>
                                        setAttributes({ iconPos: newValue })
                                    }
                                />
                                {"inline" === iconPos && (
                                    <Fragment>
                                        <SelectControl
                                            label={__(
                                                "Horizontal Position",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            options={ICON_HPOS}
                                            value={iconHPos}
                                            onChange={(newValue) =>
                                                setAttributes({
                                                    iconHPos: newValue,
                                                })
                                            }
                                        />
                                        <SelectControl
                                            label={__(
                                                "Vertical Position",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            options={ICON_VPOS}
                                            value={iconVPos}
                                            onChange={(newValue) =>
                                                setAttributes({
                                                    iconVPos: newValue,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                <SelectControl
                                    label={__(
                                        "Icon Type",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    options={imgIcon}
                                    value={iconImage}
                                    onChange={(newType) =>
                                        setAttributes({
                                            iconImage: newType,
                                        })
                                    }
                                />
                                {"icon" === iconImage && (
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
                                                setAttributes({
                                                    selectedIcon: newIcon,
                                                })
                                            }
                                            value={selectedIcon}
                                            isMulti={false}
                                            appendTo="body"
                                            noSelectedPlaceholder={__(
                                                "Select Icon",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                        />
                                    </Fragment>
                                )}
                                {"image" === iconImage && (
                                    <Fragment>
                                        <PremiumMediaUpload
                                            type="image"
                                            imageID={iconImgId}
                                            imageURL={iconImgUrl}
                                            onSelectMedia={(media) => {
                                                setAttributes({
                                                    iconImgId: media.id,
                                                    iconImgUrl: media.url,
                                                });
                                            }}
                                            onRemoveImage={() =>
                                                setAttributes({
                                                    iconImgUrl: "",
                                                    iconImgId: "",
                                                })
                                            }
                                        />
                                        <ResponsiveSingleRangeControl
                                            label={__(
                                                "Border Radius (PX)",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            value={iconRadius}
                                            onChange={(newValue) =>
                                                setAttributes({
                                                    iconRadius:
                                                        newValue || 0,
                                                })
                                            }
                                            showUnit={false}
                                            defaultValue={0}
                                        />
                                    </Fragment>
                                )}
                            </PanelBody>
                        )}
                        {titleChecked && (
                            <PanelBody
                                title={__(
                                    "Title",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <RadioComponent
                                    label={__(
                                        "Title Tag",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    choices={[
                                        { value: "h1", label: __("H1", "premium-blocks-for-gutenberg") },
                                        { value: "h2", label: __("H2", "premium-blocks-for-gutenberg") },
                                        { value: "h3", label: __("H3", "premium-blocks-for-gutenberg") },
                                        { value: "h4", label: __("H4", "premium-blocks-for-gutenberg") },
                                        { value: "h5", label: __("H5", "premium-blocks-for-gutenberg") },
                                        { value: "h6", label: __("H6", "premium-blocks-for-gutenberg") },
                                    ]}
                                    value={titleTag}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            titleTag: newValue,
                                        })
                                    }
                                />
                            </PanelBody>
                        )}
                        {btnChecked && (
                            <PanelBody
                                title={__(
                                    "Button",
                                    "premium-blocks-for-gutenberg"
                                )}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <TextControl
                                    label={__(
                                        "Link",
                                        "premium-block-for-gutenberg"
                                    )}
                                    value={btnLink}
                                    onChange={(newLink) =>
                                        setAttributes({ btnLink: newLink })
                                    }
                                />
                                <ToggleControl
                                    label={__(
                                        "Open link in new tab",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    checked={btnTarget}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            btnTarget: newValue,
                                        })
                                    }
                                />
                            </PanelBody>
                        )}
                    </InspectorTab>
                    <InspectorTab key={"style"}>
                        {iconChecked && (
                            <PanelBody
                                title={__("Icon/Image", "premium-blocks-for-gutenberg")}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <ResponsiveRangeControl
                                    label={__(
                                        "Size",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={iconSize}
                                    onChange={(value) =>
                                        setAttributes({ iconSize: value })
                                    }
                                    min={10}
                                    max={200}
                                    step={1}
                                    showUnit={true}
                                    units={["px", "em", "rem"]}
                                    defaultValue={40}
                                />
                                {"icon" === iconImage &&
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__(
                                                "Color",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                            colorValue={iconColor}
                                            colorDefault={""}
                                            onColorChange={(newValue) =>
                                                setAttributes({
                                                    iconColor: newValue,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__(`Background Color`, "premium-blocks-for-gutenberg")}
                                            colorValue={iconBackColor}
                                            onColorChange={(newvalue) =>
                                                setAttributes({
                                                    iconBackColor: newvalue,
                                                })
                                            }
                                            colorDefault={``}
                                        />
                                    </Fragment>
                                }
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
                            </PanelBody>
                        )}
                        {titleChecked && (
                            <PanelBody
                                title={__("Title")}
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
                                        "Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={titleStyles[0].titleColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveTitleStyle({
                                            titleColor: newValue,
                                        })
                                    }
                                />
                                <PremiumShadow
                                    label={__(
                                        "Text Shadow",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={titleShadow}
                                    onChange={(value) =>
                                        setAttributes({
                                            titleShadow: value,
                                        })
                                    }
                                />
                                <SpacingControl
                                    label={__(
                                        "Margin (PX)",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={titleMargin}
                                    onChange={(value) =>
                                        setAttributes({
                                            titleMargin: value,
                                        })
                                    }
                                    showUnits={false}
                                    responsive={true}
                                />
                            </PanelBody>
                        )}
                        {descChecked && (
                            <PanelBody
                                title={__("Description", "premium-blocks-for-gutenberg")}
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
                                        "Color",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    colorValue={descStyles[0].descColor}
                                    colorDefault={""}
                                    onColorChange={(newValue) =>
                                        saveDescriptionStyle({
                                            descColor: newValue,
                                        })
                                    }
                                />
                                <SpacingControl
                                    label={__(
                                        "Margin",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={descMargin}
                                    onChange={(value) =>
                                        setAttributes({ descMargin: value })
                                    }
                                    showUnits={false}
                                    responsive={true}
                                />
                            </PanelBody>
                        )}
                        {btnChecked && (
                            <PanelBody
                                title={__("Button", "premium-blocks-for-gutenberg")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <PremiumTypo
                                    value={btnTypography}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            btnTypography: newValue,
                                        })
                                    }
                                />
                                <InsideTabs>
                                    <InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
                                        <Fragment>
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={
                                                    btnStyles[0].btnColor
                                                }
                                                colorDefault={""}
                                                onColorChange={(newValue) =>
                                                    saveButtonStyle({
                                                        btnColor:
                                                            newValue

                                                    })
                                                }
                                            />

                                            <AdvancedPopColorControl
                                                label={__(
                                                    `Background Color`
                                                )}
                                                colorValue={
                                                    btnStyles[0].btnBack
                                                }
                                                onColorChange={(newvalue) =>
                                                    saveButtonStyle({
                                                        btnBack: newvalue,
                                                    })
                                                }
                                                colorDefault={``}
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
                                                    btnStyles[0]
                                                        .btnHoverColor
                                                }
                                                colorDefault={""}
                                                onColorChange={(newValue) =>
                                                    saveButtonStyle({
                                                        btnHoverColor:
                                                            newValue

                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Background Hover Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={
                                                    btnStyles[0]
                                                        .btnHoverBack
                                                }
                                                colorDefault={""}
                                                onColorChange={(newValue) =>
                                                    saveButtonStyle({
                                                        btnHoverBack: newValue,
                                                    })
                                                }
                                            />
                                            <AdvancedPopColorControl
                                                label={__(
                                                    "Border Hover Color",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                colorValue={btnHoverBorder}
                                                colorDefault={""}
                                                onColorChange={(newValue) =>
                                                    setAttributes({
                                                        btnHoverBorder: newValue,
                                                    })
                                                }
                                            />
                                            <SelectControl
                                                options={BTN_EFFECTS}
                                                label={__(
                                                    "Hover Effect",
                                                    "premium-blocks-for-gutenberg"
                                                )}
                                                value={btnEffect}
                                                onChange={(newValue) =>
                                                    setAttributes({
                                                        btnEffect: newValue,
                                                    })
                                                }
                                            />
                                            {"slide" === btnEffect && (
                                                <RadioComponent
                                                    label={__(
                                                        "Direction",
                                                        "premium-blocks-for-gutenberg"
                                                    )}
                                                    choices={[
                                                        {
                                                            value: "top",
                                                            label: __(
                                                                "Top", "premium-blocks-for-gutenberg"
                                                            ),
                                                            icon:
                                                                Icons.arrowTop,
                                                        },
                                                        {
                                                            value: "right",
                                                            label: __(
                                                                "Right", "premium-blocks-for-gutenberg"
                                                            ),
                                                            icon:
                                                                Icons.arrowRight,
                                                        },
                                                        {
                                                            value: "bottom",
                                                            label: __(
                                                                "Bottom", "premium-blocks-for-gutenberg"
                                                            ),
                                                            icon:
                                                                Icons.arrowBottom,
                                                        },
                                                        {
                                                            value: "left",
                                                            label: __(
                                                                "Left", "premium-blocks-for-gutenberg"
                                                            ),
                                                            icon:
                                                                Icons.arrowLeft,
                                                        },
                                                    ]}
                                                    showIcons={true}
                                                    value={effectDir}
                                                    onChange={(newValue) =>
                                                        setAttributes({
                                                            effectDir: newValue,
                                                        })
                                                    }
                                                />
                                            )}
                                        </Fragment>
                                    </InsideTab>
                                </InsideTabs>
                                <PremiumShadow
                                    value={btnShadow}
                                    onChange={(value) =>
                                        setAttributes({ btnShadow: value })
                                    }
                                />
                                <hr />
                                <PremiumBorder
                                    label={__(
                                        "Border",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={btnBorder}
                                    onChange={(value) =>
                                        setAttributes({ btnBorder: value })
                                    }
                                />
                                <hr />
                                <SpacingControl
                                    label={__(
                                        "Margin",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={btnMargin}
                                    onChange={(value) =>
                                        setAttributes({ btnMargin: value })
                                    }
                                    showUnits={false}
                                    responsive={true}
                                />
                                <SpacingControl
                                    label={__(
                                        "Padding",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                    value={btnPadding}
                                    onChange={(value) =>
                                        setAttributes({ btnPadding: value })
                                    }
                                    showUnits={true}
                                    responsive={true}
                                />
                            </PanelBody>
                        )}
                        <PanelBody
                            title={__(
                                "Container",
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
                            <InsideTabs>
                                <InsideTab tabTitle={__("Normal", "premium-blocks-for-gutenberg")}>
                                    <PremiumShadow
                                        value={containerShadow}
                                        onChange={(value) =>
                                            setAttributes({
                                                containerShadow: value,
                                            })
                                        }
                                    />
                                </InsideTab>
                                <InsideTab tabTitle={__("Hover", "premium-blocks-for-gutenberg")}>
                                    <PremiumShadow
                                        label={__(
                                            "Hover Box Shadow",
                                            "premium-blocks-for-gutenberg"
                                        )}
                                        value={containerHoverShadow}
                                        onChange={(value) =>
                                            setAttributes({
                                                containerHoverShadow: value,
                                            })
                                        }
                                    />
                                </InsideTab>
                            </InsideTabs>
                            <PremiumBorder
                                label={__(
                                    "Border",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={containerBorder}
                                onChange={(value) =>
                                    setAttributes({
                                        containerBorder: value,
                                    })
                                }
                            />
                            <hr />
                            <SpacingControl
                                label={__(
                                    "Margin (PX)",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={containerMargin}
                                onChange={(value) =>
                                    setAttributes({
                                        containerMargin: value,
                                    })
                                }
                                showUnits={false}
                                responsive={true}
                            />
                            <SpacingControl
                                label={__(
                                    "Padding",
                                    "premium-blocks-for-gutenberg"
                                )}
                                value={containerPadding}
                                onChange={(value) =>
                                    setAttributes({
                                        containerPadding: value,
                                    })
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
                                setAttributes({ hideDesktop: value })
                            }
                            onChangeTablet={(value) =>
                                setAttributes({ hideTablet: value })
                            }
                            onChangeMobile={(value) =>
                                setAttributes({ hideMobile: value })
                            }
                        />
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
            <style>{loadStyles()}</style>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        `premium-icon-box ${blockId} premium-icon-box-${iconPos} premium-icon-box-${iconHPos}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
                style={{
                    textAlign: align[props.deviceType],
                    ...borderCss(containerBorder, props.deviceType),
                    ...paddingCss(containerPadding, props.deviceType),
                    ...marginCss(containerMargin, props.deviceType),
                    ...gradientBackground(containerBackground),
                }}
            >
                {iconChecked && (
                    <div
                        className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                    >
                        {"icon" === iconImage && (
                            <Fragment>
                                {iconType === "fa" &&
                                    1 != FontAwesomeEnabled && (
                                        <p
                                            className={`premium-icon-box__alert`}
                                        >
                                            {__(
                                                "Please Enable Font Awesome Icons from Plugin settings"
                                            )}
                                        </p>
                                    )}
                                {(iconType === "dash" ||
                                    1 == FontAwesomeEnabled) && (
                                        <i
                                            alt={`icon-box`}
                                            className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                            style={{
                                                color: iconColor,
                                                backgroundColor: iconBackColor,
                                                fontSize:
                                                    (iconSize[
                                                        props.deviceType
                                                    ] || 40) + iconSize.unit,
                                            }}
                                        />
                                    )}
                            </Fragment>
                        )}
                        {"image" === iconImage && iconImgUrl && (
                            <img
                                className={`premium-icon-box__icon premium-icon__${hoverEffect}`}
                                src={`${iconImgUrl}`}
                                alt="Image Icon"
                                style={{
                                    width:
                                        (iconSize[props.deviceType] ||
                                            40) + iconSize.unit,
                                    height:
                                        (iconSize[props.deviceType] ||
                                            40) + iconSize.unit,
                                    borderRadius: iconRadius + "px",
                                    maxWidth: (iconSize[props.deviceType] ||
                                        40) + iconSize.unit,
                                }}
                            />
                        )}
                    </div>
                )}
                <div className={`premium-icon-box__content_wrap`}>
                    {titleChecked && titleText && (
                        <div
                            className={`premium-icon-box__title_wrap`}
                            style={{
                                ...marginCss(
                                    titleMargin,
                                    props.deviceType
                                ),
                            }}
                        >
                            <RichText
                                tagName={titleTag.toLowerCase()}
                                className={`premium-icon-box__title`}
                                onChange={(newText) =>
                                    setAttributes({ titleText: newText })
                                }
                                placeholder={__("Awesome Title")}
                                value={titleText}
                                style={{
                                    ...typographyCss(
                                        titleTypography,
                                        props.deviceType
                                    ),
                                    color: titleStyles[0].titleColor,
                                    textShadow: `${titleShadow.horizontal || 0
                                        }px ${titleShadow.vertical || 0}px ${titleShadow.blur || 0
                                        }px ${titleShadow.color}`,
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`premium-icon-box__desc_wrap`}
                            style={{
                                ...marginCss(descMargin, props.deviceType),
                            }}
                        >
                            <RichText
                                tagName="p"
                                className={`premium-icon-box__desc`}
                                value={descText}
                                placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                                onChange={(newText) =>
                                    setAttributes({ descText: newText })
                                }
                                style={{
                                    ...typographyCss(
                                        descTypography,
                                        props.deviceType
                                    ),
                                    color: descStyles[0].descColor,
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                ...marginCss(btnMargin, props.deviceType),
                            }}
                        >
                            <RichText
                                tagName="a"
                                className={`premium-icon-box__btn wp-block-button__link premium-button`}
                                onChange={(newText) =>
                                    setAttributes({ btnText: newText })
                                }
                                placeholder={__("Click Here")}
                                value={btnText}
                                style={{
                                    ...typographyCss(
                                        btnTypography,
                                        props.deviceType
                                    ),
                                    ...borderCss(
                                        btnBorder,
                                        props.deviceType
                                    ),
                                    ...paddingCss(
                                        btnPadding,
                                        props.deviceType
                                    ),
                                    color: btnStyles[0].btnColor,
                                    backgroundColor: btnStyles[0].btnBack,
                                    boxShadow: `${btnShadow.horizontal || 0
                                        }px ${btnShadow.vertical || 0}px ${btnShadow.blur || 0
                                        }px ${btnShadow.color} ${btnShadow.position
                                        }`,
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div>
                    )}
                </div>
                {loadTitleGoogleFonts}
                {loadDescriptionGoogleFonts}
                {loadButtonGoogleFonts}
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