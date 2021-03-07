import classnames from "classnames";
import {FontAwesomeEnabled} from "../../../assets/js/settings";
import PremiumTypo from "../../components/premium-typo";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackground from "../../components/premium-background";
import PremiumSizeUnits from "../../components/premium-size-units";
import FONTS from "../../components/premium-fonts";
import hexToRgba from "hex-to-rgba";

const {__} = wp.i18n;

const {
    PanelBody,
    Toolbar,
    RangeControl,
    SelectControl,
    ToggleControl,
    Dropdown,
    Button,
    Tooltip,
    Dashicon,
} = wp.components;

const {Fragment} = wp.element;

const {
    BlockControls,
    InspectorControls,
    RichText,
    ColorPalette,
    AlignmentToolbar,
    MediaUpload,
    URLInput,
} = wp.blockEditor;

const edit = (props) => {
    const {isSelected, setAttributes, className, clientId: blockId} = props;
    const {
        id,
        align,
        iconChecked,
        iconImage,
        iconImgId,
        iconImgUrl,
        iconType,
        selectedIcon,
        hoverEffect,
        iconPos,
        iconHPos,
        iconVPos,
        iconSize,
        iconRadius,
        iconColor,
        iconOpacity,
        iconBackColor,
        titleChecked,
        titleText,
        titleTag,
        titleColor,
        titleFont,
        titleSize,
        titleLine,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleShadowBlur,
        titleShadowColor,
        titleShadowHorizontal,
        titleShadowVertical,
        titleMarginT,
        titleMarginB,
        descChecked,
        descText,
        descColor,
        descFont,
        descSize,
        descLine,
        descWeight,
        descMarginT,
        descMarginB,
        btnChecked,
        btnEffect,
        effectDir,
        btnTarget,
        btnText,
        btnLink,
        btnSize,
        btnUpper,
        btnWeight,
        btnLetter,
        btnColor,
        btnStyle,
        btnHoverColor,
        btnBack,
        btnOpacity,
        btnHoverBack,
        btnHoverBorder,
        btnBorderColor,
        btnBorderWidth,
        btnBorderRadius,
        btnBorderType,
        btnPadding,
        btnPaddingU,
        btnMarginT,
        btnMarginB,
        btnShadowBlur,
        btnShadowColor,
        btnShadowHorizontal,
        btnShadowVertical,
        btnShadowPosition,
        imageID,
        imageURL,
        fixed,
        backColor,
        backOpacity,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        marginT,
        marginR,
        marginB,
        marginL,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        paddingU,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition,
        hoverShadowBlur,
        hoverShadowColor,
        hoverShadowHorizontal,
        hoverShadowVertical,
        hoverShadowPosition,
    } = props.attributes;

    setAttributes({id: blockId});

    const imgIcon = [
        {
            label: __("Icon"),
            value: "icon",
        },
        {
            label: __("Image"),
            value: "image",
        },
    ];

    const ALIGNS = ["left", "center", "right"];

    const EFFECTS = [
        {
            value: "none",
            label: __("None"),
        },
        {
            value: "pulse",
            label: __("Pulse"),
        },
        {
            value: "rotate",
            label: __("Rotate"),
        },
        {
            value: "drotate",
            label: __("3D Rotate"),
        },
        {
            value: "buzz",
            label: __("Buzz"),
        },
        {
            value: "drop",
            label: __("Drop Shadow"),
        },
        {
            value: "wobble",
            label: __("Wobble"),
        },
    ];

    const BTN_EFFECTS = [
        {
            value: "none",
            label: __("None"),
        },
        {
            value: "slide",
            label: __("Slide"),
        },
    ];

    const DIRECTION = [
        {
            value: "top",
            label: __("Top to Bottom"),
        },
        {
            value: "bottom",
            label: __("Bottom to Top"),
        },
        {
            value: "left",
            label: __("Left to Right"),
        },
        {
            value: "right",
            label: __("Right to Left"),
        },
    ];

    const ICON_POS = [
        {
            label: __("Inline"),
            value: "inline",
        },
        {
            label: __("Block"),
            value: "block",
        },
    ];

    const ICON_HPOS = [
        {
            label: __("Before"),
            value: "before",
        },
        {
            label: __("After"),
            value: "after",
        },
    ];

    const ICON_VPOS = [
        {
            label: __("Top"),
            value: "top",
        },
        {
            label: __("Middle"),
            value: "center",
        },
        {
            label: __("Bottom"),
            value: "bottom",
        },
    ];

    const addFontToHead = fontFamily => {
        const head = document.head;
        const link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href =
            "https://fonts.googleapis.com/css?family=" +
            fontFamily.replace(/\s+/g, "+") +
            ":" +
            "regular";
        head.appendChild(link);
    };

    const onChangeTitleFamily = fontFamily => {
        setAttributes({titleFont: fontFamily});
        if (!fontFamily) {
            return;
        }

        addFontToHead(fontFamily);
    };

    const onChangeDescFamily = fontFamily => {
        setAttributes({descFont: fontFamily});
        if (!fontFamily) {
            return;
        }

        addFontToHead(fontFamily);
    };

    const mainClasses = classnames(className, "premium-icon-box");

    return [
        isSelected && (
            <BlockControls key="controls">
                <AlignmentToolbar
                    value={align}
                    onChange={(newAlign) => setAttributes({align: newAlign})}
                />
            </BlockControls>
        ),
        isSelected && (
            <InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("Display Options")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ToggleControl
                        label={__("Icon")}
                        checked={iconChecked}
                        onChange={newValue =>
                            setAttributes({iconChecked: newValue})
                        }
                    />
                    <ToggleControl
                        label={__("Title")}
                        checked={titleChecked}
                        onChange={newValue =>
                            setAttributes({titleChecked: newValue})
                        }
                    />
                    <ToggleControl
                        label={__("Description")}
                        checked={descChecked}
                        onChange={(newValue) =>
                            setAttributes({descChecked: newValue})
                        }
                    />
                    <ToggleControl
                        label={__("Button")}
                        checked={btnChecked}
                        onChange={newValue =>
                            setAttributes({btnChecked: newValue})
                        }
                    />
                </PanelBody>
                {iconChecked && (
                    <PanelBody
                        title={__("Icon")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Icon Position")}
                            options={ICON_POS}
                            value={iconPos}
                            onChange={newValue =>
                                setAttributes({iconPos: newValue})
                            }
                        />
                        {"inline" === iconPos && (
                            <Fragment>
                                <SelectControl
                                    label={__("Horizontal Position")}
                                    options={ICON_HPOS}
                                    value={iconHPos}
                                    onChange={newValue =>
                                        setAttributes({iconHPos: newValue})
                                    }
                                />
                                <SelectControl
                                    label={__("Vertical Position")}
                                    options={ICON_VPOS}
                                    value={iconVPos}
                                    onChange={newValue =>
                                        setAttributes({iconVPos: newValue})
                                    }
                                />
                            </Fragment>
                        )}
                        <SelectControl
                            label={__("Icon Type")}
                            options={imgIcon}
                            value={iconImage}
                            onChange={newType =>
                                setAttributes({iconImage: newType})
                            }
                        />
                        {"icon" === iconImage && (
                            <Fragment>
                                <p className="premium-editor-paragraph">
                                    {__("Select Icon")}
                                </p>
                                <FontIconPicker
                                    icons={iconsList}
                                    onChange={(newIcon) =>
                                        setAttributes({selectedIcon: newIcon})
                                    }
                                    value={selectedIcon}
                                    isMulti={false}
                                    appendTo="body"
                                    noSelectedPlaceholder={__("Select Icon")}
                                />
                                <Fragment>
                                    <p>{__("Icon Color")}</p>
                                    <ColorPalette
                                        value={iconColor}
                                        onChange={newValue =>
                                            setAttributes({
                                                iconColor:
                                                    newValue || "transparent",
                                            })
                                        }
                                        allowReset={true}
                                    />
                                    <p>{__("Background Color")}</p>
                                    <PremiumBackground
                                        type="color"
                                        colorValue={iconBackColor}
                                        onChangeColor={newvalue =>
                                            setAttributes({
                                                iconBackColor: newvalue,
                                            })
                                        }
                                        opacityValue={iconOpacity}
                                        onChangeOpacity={value =>
                                            setAttributes({
                                                iconOpacity: value,
                                            })
                                        }
                                    />
                                </Fragment>
                            </Fragment>
                        )}
                        {"image" === iconImage && (
                            <Fragment>
                                <MediaUpload
                                    allowedTypes={["image"]}
                                    onSelect={media => {
                                        setAttributes({
                                            iconImgId: media.id,
                                            iconImgUrl:
                                                "undefined" ===
                                                    typeof media.sizes.thumbnail
                                                    ? media.url
                                                    : media.sizes.thumbnail.url,
                                        });
                                    }}
                                    type="image"
                                    value={iconImgId}
                                    render={({open}) => (
                                        <Fragment>
                                            {iconImgUrl && (
                                                <span className="premium-image-media">
                                                    <img
                                                        src={iconImgUrl}
                                                        className="premium-image-upload"
                                                    />
                                                    <div className="premium-image-actions">
                                                        <Tooltip
                                                            text={__("Edit")}
                                                        >
                                                            <button
                                                                className="premium-image-button"
                                                                aria-label={__(
                                                                    "Edit"
                                                                )}
                                                                onClick={open}
                                                                role="button"
                                                            >
                                                                <span
                                                                    aria-label={__(
                                                                        "Edit"
                                                                    )}
                                                                    className="fa fa-pencil"
                                                                />
                                                            </button>
                                                        </Tooltip>
                                                        <Tooltip
                                                            text={__("Remove")}
                                                        >
                                                            <button
                                                                className="premium-image-button"
                                                                aria-label={__(
                                                                    "Remove"
                                                                )}
                                                                onClick={() =>
                                                                    setAttributes(
                                                                        {
                                                                            iconImgUrl:
                                                                                "",
                                                                        }
                                                                    )
                                                                }
                                                                role="button"
                                                            >
                                                                <span
                                                                    aria-label={__(
                                                                        "Close"
                                                                    )}
                                                                    className="fa fa-trash-o"
                                                                />
                                                            </button>
                                                        </Tooltip>
                                                    </div>
                                                </span>
                                            )}
                                            {!iconImgUrl && (
                                                <div
                                                    onClick={open}
                                                    className={
                                                        "premium-placeholder-image"
                                                    }
                                                >
                                                    <Dashicon icon="insert" />
                                                    <span>
                                                        {__("Insert Image ")}
                                                    </span>
                                                </div>
                                            )}
                                        </Fragment>
                                    )}
                                />
                                <RangeControl
                                    label={__("Border Radius (PX)")}
                                    value={iconRadius}
                                    onChange={(newValue) =>
                                        setAttributes({
                                            iconRadius: newValue || 0,
                                        })
                                    }
                                />
                            </Fragment>
                        )}
                        <SelectControl
                            label={__("Hover Effect")}
                            options={EFFECTS}
                            value={hoverEffect}
                            onChange={newEffect =>
                                setAttributes({hoverEffect: newEffect})
                            }
                        />
                        <RangeControl
                            label={__("Size (PX)")}
                            value={iconSize}
                            min="1"
                            max="200"
                            onChange={newValue =>
                                setAttributes({iconSize: newValue || 30})
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
                        <p>{__("Title")}</p>
                        <Toolbar
                            controls={"123456".split("").map((tag) => ({
                                icon: "heading",
                                isActive: "H" + tag === titleTag,
                                onClick: () =>
                                    setAttributes({titleTag: "H" + tag}),
                                subscript: tag,
                            }))}
                        />
                        <SelectControl
                            label={__("Font Family")}
                            value={titleFont}
                            options={FONTS}
                            onChange={onChangeTitleFamily}
                        />
                        <PremiumTypo
                            components={[
                                "size",
                                "weight",
                                "style",
                                "upper",
                                "spacing",
                                "line",
                            ]}
                            size={titleSize}
                            weight={titleWeight}
                            style={titleStyle}
                            spacing={titleLetter}
                            line={titleLine}
                            upper={titleUpper}
                            onChangeSize={newSize =>
                                setAttributes({titleSize: newSize})
                            }
                            onChangeWeight={newWeight =>
                                setAttributes({titleWeight: newWeight || 500})
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({titleStyle: newStyle})
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({titleLetter: newValue})
                            }
                            onChangeLine={newValue =>
                                setAttributes({titleLine: newValue})
                            }
                            onChangeUpper={check =>
                                setAttributes({titleUpper: check})
                            }
                        />
                        <Fragment>
                            <p>{__("Text Color")}</p>
                            <ColorPalette
                                value={titleColor}
                                onChange={newValue =>
                                    setAttributes({
                                        titleColor: newValue || "transparent",
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        <PremiumTextShadow
                            color={titleShadowColor}
                            blur={titleShadowBlur}
                            horizontal={titleShadowHorizontal}
                            vertical={titleShadowVertical}
                            onChangeColor={newColor =>
                                setAttributes({
                                    titleShadowColor:
                                        newColor.hex || "transparent",
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({titleShadowBlur: newBlur || 0})
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    titleShadowHorizontal: newValue || 0,
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    titleShadowVertical: newValue || 0,
                                })
                            }
                        />
                        <PremiumMargin
                            directions={["top", "bottom"]}
                            marginTop={titleMarginT}
                            marginBottom={titleMarginB}
                            onChangeMarTop={value =>
                                setAttributes({
                                    titleMarginT: value || 0,
                                })
                            }
                            onChangeMarBottom={value =>
                                setAttributes({
                                    titleMarginB: value || 0,
                                })
                            }
                        />
                    </PanelBody>
                )}
                {descChecked && (
                    <PanelBody
                        title={__("Description")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Font Family")}
                            value={descFont}
                            options={FONTS}
                            onChange={onChangeDescFamily}
                        />
                        <PremiumTypo
                            components={["size", "weight", "line"]}
                            size={descSize}
                            weight={descWeight}
                            line={descLine}
                            onChangeSize={newSize =>
                                setAttributes({descSize: newSize || 20})
                            }
                            onChangeWeight={newWeight =>
                                setAttributes({descWeight: newWeight || 500})
                            }
                            onChangeLine={newValue =>
                                setAttributes({descLine: newValue})
                            }
                        />
                        <Fragment>
                            <p>{__("Text Color")}</p>
                            <ColorPalette
                                value={descColor}
                                onChange={newValue =>
                                    setAttributes({
                                        descColor: newValue || "transparent",
                                    })
                                }
                                allowReset={true}
                            />
                        </Fragment>
                        <PremiumMargin
                            directions={["top", "bottom"]}
                            marginTop={descMarginT}
                            marginBottom={descMarginB}
                            onChangeMarTop={value =>
                                setAttributes({
                                    descMarginT: value || 0,
                                })
                            }
                            onChangeMarBottom={value =>
                                setAttributes({
                                    descMarginB: value || 0,
                                })
                            }
                        />
                    </PanelBody>
                )}

                {btnChecked && (
                    <PanelBody
                        title={__("Button")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <SelectControl
                            options={BTN_EFFECTS}
                            label={__("Hover Effect")}
                            value={btnEffect}
                            onChange={newValue =>
                                setAttributes({btnEffect: newValue})
                            }
                        />
                        {"slide" === btnEffect && (
                            <SelectControl
                                options={DIRECTION}
                                label={__("Direction")}
                                value={effectDir}
                                onChange={newValue =>
                                    setAttributes({effectDir: newValue})
                                }
                            />
                        )}
                        <ToggleControl
                            label={__("Open link in new tab")}
                            checked={btnTarget}
                            onChange={newValue =>
                                setAttributes({btnTarget: newValue})
                            }
                        />
                        <PremiumTypo
                            components={[
                                "size",
                                "weight",
                                "style",
                                "upper",
                                "spacing",
                            ]}
                            size={btnSize}
                            weight={btnWeight}
                            style={btnStyle}
                            spacing={btnLetter}
                            upper={btnUpper}
                            onChangeSize={newSize =>
                                setAttributes({btnSize: newSize || 20})
                            }
                            onChangeWeight={newWeight =>
                                setAttributes({btnWeight: newWeight || 500})
                            }
                            onChangeStyle={newStyle =>
                                setAttributes({btnStyle: newStyle})
                            }
                            onChangeSpacing={newValue =>
                                setAttributes({btnLetter: newValue})
                            }
                            onChangeUpper={check =>
                                setAttributes({btnUpper: check})
                            }
                        />
                        <div className="premium-control-toggle">
                            <strong>{__("Colors")}</strong>
                            <Dropdown
                                className="premium-control-toggle-btn"
                                contentClassName="premium-control-toggle-content"
                                position="bottom right"
                                renderToggle={({isOpen, onToggle}) => (
                                    <Button
                                        isSmall
                                        onClick={onToggle}
                                        aria-expanded={isOpen}
                                    >
                                        <i className="dashicons dashicons-edit" />
                                    </Button>
                                )}
                                renderContent={() => (
                                    <Fragment>
                                        <p>{__("Text Color")}</p>
                                        <ColorPalette
                                            value={btnColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    btnColor:
                                                        newValue || "#000",
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Text Hover Color")}</p>
                                        <ColorPalette
                                            value={btnHoverColor}
                                            onChange={newValue =>
                                                setAttributes({
                                                    btnHoverColor:
                                                        newValue || "#000",
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Background Color")}</p>
                                        <PremiumBackground
                                            type="color"
                                            colorValue={btnBack}
                                            onChangeColor={newvalue =>
                                                setAttributes({
                                                    btnBack: newvalue,
                                                })
                                            }
                                            opacityValue={btnOpacity}
                                            onChangeOpacity={value =>
                                                setAttributes({
                                                    btnOpacity: value,
                                                })
                                            }
                                        />

                                        <p>{__("Background Hover Color")}</p>
                                        <ColorPalette
                                            value={btnHoverBack}
                                            onChange={newValue =>
                                                setAttributes({
                                                    btnHoverBack: newValue,
                                                })
                                            }
                                            allowReset={true}
                                        />
                                        <p>{__("Border Hover Color")}</p>
                                        <ColorPalette
                                            value={btnHoverBorder}
                                            onChange={newValue =>
                                                setAttributes({
                                                    btnHoverBorder:
                                                        newValue ||
                                                        "transparent",
                                                })
                                            }
                                            allowReset={true}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>

                        <PremiumBorder
                            borderType={btnBorderType}
                            borderWidth={btnBorderWidth}
                            borderColor={btnBorderColor}
                            borderRadius={btnBorderRadius}
                            onChangeType={newType =>
                                setAttributes({btnBorderType: newType})
                            }
                            onChangeWidth={newWidth =>
                                setAttributes({btnBorderWidth: newWidth})
                            }
                            onChangeColor={colorValue =>
                                setAttributes({
                                    btnBorderColor: colorValue.hex,
                                })
                            }
                            onChangeRadius={newrRadius =>
                                setAttributes({btnBorderRadius: newrRadius})
                            }
                        />
                        <PremiumBoxShadow
                            inner={true}
                            color={btnShadowColor}
                            blur={btnShadowBlur}
                            horizontal={btnShadowHorizontal}
                            vertical={btnShadowVertical}
                            position={btnShadowPosition}
                            onChangeColor={newColor =>
                                setAttributes({
                                    btnShadowColor:
                                        newColor.hex || "transparent",
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    btnShadowBlur: newBlur || 0,
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    btnShadowHorizontal: newValue || 0,
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    btnShadowVertical: newValue || 0,
                                })
                            }
                            onChangePosition={newValue =>
                                setAttributes({
                                    btnShadowPosition: newValue || 0,
                                })
                            }
                        />
                        <PremiumSizeUnits
                            onChangeSizeUnit={newValue =>
                                setAttributes({btnPaddingU: newValue})
                            }
                        />
                        <RangeControl
                            label={__("Padding")}
                            value={btnPadding}
                            onChange={newValue =>
                                setAttributes({btnPadding: newValue})
                            }
                        />
                        <PremiumMargin
                            directions={["top", "bottom"]}
                            marginTop={btnMarginT}
                            marginBottom={btnMarginB}
                            onChangeMarTop={value =>
                                setAttributes({
                                    btnMarginT: value || 0,
                                })
                            }
                            onChangeMarBottom={value =>
                                setAttributes({
                                    btnMarginB: value || 0,
                                })
                            }
                        />
                    </PanelBody>
                )}

                <PanelBody
                    title={__("Container")}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <Fragment>
                        <p>{__("Background Color")}</p>
                        <PremiumBackground
                            type="color"
                            colorValue={backColor}
                            onChangeColor={newvalue =>
                                setAttributes({backColor: newvalue})
                            }
                            opacityValue={backOpacity}
                            onChangeOpacity={value =>
                                setAttributes({backOpacity: value})
                            }
                        />
                    </Fragment>
                    <PremiumBackground
                        imageID={imageID}
                        imageURL={imageURL}
                        backgroundPosition={backgroundPosition}
                        backgroundRepeat={backgroundRepeat}
                        backgroundSize={backgroundSize}
                        fixed={fixed}
                        onSelectMedia={media => {
                            setAttributes({
                                imageID: media.id,
                                imageURL: media.url,
                            });
                        }}
                        onRemoveImage={value =>
                            setAttributes({imageURL: "", imageID: ""})
                        }
                        onChangeBackPos={newValue =>
                            setAttributes({backgroundPosition: newValue})
                        }
                        onchangeBackRepeat={newValue =>
                            setAttributes({backgroundRepeat: newValue})
                        }
                        onChangeBackSize={newValue =>
                            setAttributes({backgroundSize: newValue})
                        }
                        onChangeFixed={check =>
                            setAttributes({fixed: check})
                        }
                    />
                    <PremiumBorder
                        borderType={borderType}
                        borderWidth={borderWidth}
                        borderColor={borderColor}
                        borderRadius={borderRadius}
                        onChangeType={newType =>
                            setAttributes({borderType: newType})
                        }
                        onChangeWidth={newWidth =>
                            setAttributes({borderWidth: newWidth})
                        }
                        onChangeColor={colorValue =>
                            setAttributes({borderColor: colorValue.hex})
                        }
                        onChangeRadius={newrRadius =>
                            setAttributes({borderRadius: newrRadius})
                        }
                    />
                    <PremiumBoxShadow
                        inner={true}
                        color={shadowColor}
                        blur={shadowBlur}
                        horizontal={shadowHorizontal}
                        vertical={shadowVertical}
                        position={shadowPosition}
                        onChangeColor={newColor =>
                            setAttributes({
                                shadowColor: newColor.hex || "transparent",
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({
                                shadowBlur: newBlur || 0,
                            })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({
                                shadowHorizontal: newValue || 0,
                            })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({
                                shadowVertical: newValue || 0,
                            })
                        }
                        onChangePosition={newValue =>
                            setAttributes({
                                shadowPosition: newValue,
                            })
                        }
                    />
                    <PremiumBoxShadow
                        inner={true}
                        label={__("Hover Box Shadow")}
                        color={hoverShadowColor}
                        blur={hoverShadowBlur}
                        horizontal={hoverShadowHorizontal}
                        vertical={hoverShadowVertical}
                        position={hoverShadowPosition}
                        onChangeColor={newColor =>
                            setAttributes({
                                hoverShadowColor: newColor.hex,
                            })
                        }
                        onChangeBlur={newBlur =>
                            setAttributes({
                                hoverShadowBlur: newBlur,
                            })
                        }
                        onChangehHorizontal={newValue =>
                            setAttributes({
                                hoverShadowHorizontal: newValue,
                            })
                        }
                        onChangeVertical={newValue =>
                            setAttributes({
                                hoverShadowVertical: newValue,
                            })
                        }
                        onChangePosition={newValue =>
                            setAttributes({
                                hoverShadowPosition: newValue,
                            })
                        }
                    />
                    <PremiumMargin
                        directions={["all"]}
                        marginTop={marginT}
                        marginRight={marginR}
                        marginBottom={marginB}
                        marginLeft={marginL}
                        onChangeMarTop={value =>
                            setAttributes({
                                marginT: value || 0,
                            })
                        }
                        onChangeMarRight={value =>
                            setAttributes({
                                marginR: value || 0,
                            })
                        }
                        onChangeMarBottom={value =>
                            setAttributes({
                                marginB: value || 0,
                            })
                        }
                        onChangeMarLeft={value =>
                            setAttributes({
                                marginL: value || 0,
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
                                paddingT: value || 0,
                            })
                        }
                        onChangePadRight={value =>
                            setAttributes({
                                paddingR: value || 0,
                            })
                        }
                        onChangePadBottom={value =>
                            setAttributes({
                                paddingB: value || 0,
                            })
                        }
                        onChangePadLeft={value =>
                            setAttributes({
                                paddingL: value || 0,
                            })
                        }
                        selectedUnit={paddingU}
                        onChangePadSizeUnit={newvalue =>
                            setAttributes({paddingU: newvalue})
                        }
                    />
                </PanelBody>
            </InspectorControls>
        ),
        <div
            id={`${ mainClasses }-${ id }`}
            className={`${ mainClasses } premium-icon-box-${ iconPos } premium-icon-box-${ iconHPos }`}
            style={{
                textAlign: align,
                border: borderType,
                borderWidth: borderWidth + "px",
                borderRadius: borderRadius + "px",
                borderColor: borderColor,
                marginTop: marginT,
                marginRight: marginR,
                marginBottom: marginB,
                marginLeft: marginL,
                paddingTop: paddingT + paddingU,
                paddingRight: paddingR + paddingU,
                paddingBottom: paddingB + paddingU,
                paddingLeft: paddingL + paddingU,
                boxShadow: `${ shadowHorizontal }px ${ shadowVertical }px ${ shadowBlur }px ${ shadowColor } ${ shadowPosition }`,
                backgroundColor: backColor
                    ? hexToRgba(backColor, backOpacity)
                    : "transparent",
                backgroundImage: imageURL ? `url('${ imageURL }')` : "none",
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
                backgroundAttachment: fixed ? "fixed" : "unset",
            }}
        >
            {btnChecked && btnText && (
                <style
                    dangerouslySetInnerHTML={{
                        __html: [
                            `#premium-icon-box-${ id }:hover {`,
                            `box-shadow: ${ hoverShadowHorizontal }px ${ hoverShadowVertical }px ${ hoverShadowBlur }px ${ hoverShadowColor } ${ hoverShadowPosition } !important`,
                            "}",
                            `#premium-icon-box-${ id } .premium-icon-box__btn:hover {`,
                            `color: ${ btnHoverColor } !important;`,
                            `border-color: ${ btnHoverBorder } !important;`,
                            "}",
                            `#premium-icon-box-${ id } .premium-button__none .premium-icon-box__btn:hover {`,
                            `background-color: ${ btnHoverBack } !important;`,
                            "}",
                            `#premium-icon-box-${ id } .premium-button__slide .premium-button::before {`,
                            `background-color: ${ btnHoverBack } !important;`,
                            "}",
                        ].join("\n"),
                    }}
                />
            )}
            {iconChecked && (
                <div
                    className={`premium-icon-box__icon_wrap premium-icon-box__icon_${ iconVPos }`}
                >
                    {"icon" === iconImage && (
                        <Fragment>
                            {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                <p className={`premium-icon-box__alert`}>
                                    {__(
                                        "Please Enable Font Awesome Icons from Plugin settings"
                                    )}
                                </p>
                            )}
                            {(iconType === "dash" ||
                                1 == FontAwesomeEnabled) && (
                                    <i
                                        className={`${ selectedIcon } premium-icon-box__icon premium-icon__${ hoverEffect }`}
                                        style={{
                                            color: iconColor,
                                            backgroundColor: iconBackColor
                                                ? hexToRgba(
                                                    iconBackColor,
                                                    iconOpacity
                                                )
                                                : "transparent",
                                            fontSize: iconSize,
                                        }}
                                    />
                                )}
                        </Fragment>
                    )}
                    {"image" === iconImage && iconImgUrl && (
                        <img
                            className={`premium-icon-box__icon premium-icon__${ hoverEffect }`}
                            src={`${ iconImgUrl }`}
                            alt="Image Icon"
                            style={{
                                width: iconSize + "px",
                                height: iconSize + "px",
                                borderRadius: iconRadius + "px",
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
                            marginTop: titleMarginT,
                            marginBottom: titleMarginB,
                        }}
                    >
                        <RichText
                            tagName={titleTag.toLowerCase()}
                            className={`premium-icon-box__title`}
                            onChange={(newText) =>
                                setAttributes({titleText: newText})
                            }
                            placeholder={__("Awesome Title")}
                            value={titleText}
                            style={{
                                color: titleColor,
                                fontSize: titleSize + "px",
                                fontFamily: titleFont,
                                letterSpacing: titleLetter + "px",
                                textTransform: titleUpper
                                    ? "uppercase"
                                    : "none",
                                fontStyle: titleStyle,
                                fontWeight: titleWeight,
                                textShadow: `${ titleShadowHorizontal }px ${ titleShadowVertical }px ${ titleShadowBlur }px ${ titleShadowColor }`,
                                lineHeight: titleLine + "px",
                            }}
                            keepPlaceholderOnFocus
                        />
                    </div>
                )}
                {descChecked && descText && (
                    <div
                        className={`premium-icon-box__desc_wrap`}
                        style={{
                            marginTop: descMarginT,
                            marginBottom: descMarginB,
                        }}
                    >
                        <RichText
                            tagName="p"
                            className={`premium-icon-box__desc`}
                            value={descText}
                            isSelected={false}
                            placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                            onChange={(newText) =>
                                setAttributes({descText: newText})
                            }
                            style={{
                                color: descColor,
                                fontSize: descSize + "px",
                                fontFamily: descFont,
                                lineHeight: descLine + "px",
                                fontWeight: descWeight,
                            }}
                            keepPlaceholderOnFocus
                        />
                    </div>
                )}
                {btnChecked && btnText && (
                    <div
                        className={`premium-icon-box__btn_wrap premium-button__${ btnEffect } premium-button__${ effectDir }`}
                        style={{
                            marginTop: btnMarginT,
                            marginBottom: btnMarginB,
                        }}
                    >
                        <RichText
                            tagName="a"
                            className={`premium-icon-box__btn premium-button`}
                            onChange={(newText) =>
                                setAttributes({btnText: newText})
                            }
                            placeholder={__("Click Here")}
                            value={btnText}
                            style={{
                                color: btnColor,
                                backgroundColor: btnBack
                                    ? hexToRgba(btnBack, btnOpacity)
                                    : "transparent",
                                fontSize: btnSize + "px",
                                letterSpacing: btnLetter + "px",
                                textTransform: btnUpper ? "uppercase" : "none",
                                fontStyle: btnStyle,
                                fontWeight: btnWeight,
                                border: btnBorderType,
                                borderWidth: btnBorderWidth + "px",
                                borderRadius: btnBorderRadius + "px",
                                borderColor: btnBorderColor,
                                padding: btnPadding + btnPaddingU,
                                boxShadow: `${ btnShadowHorizontal }px ${ btnShadowVertical }px ${ btnShadowBlur }px ${ btnShadowColor } ${ btnShadowPosition }`,
                            }}
                            keepPlaceholderOnFocus
                        />
                        {isSelected && (
                            <URLInput
                                value={btnLink}
                                onChange={(newLink) =>
                                    setAttributes({btnLink: newLink})
                                }
                            />
                        )}
                    </div>
                )}
            </div>
        </div>,
    ];
};

export default edit;
