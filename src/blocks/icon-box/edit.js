import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import PremiumTypo from "../../components/premium-typo";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';
import PremiumResponsiveMargin from '../../components/Premium-Responsive-Margin';
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackground from "../../components/premium-background";
import FONTS from "../../components/premium-fonts";
import PremiumMediaUpload from "../../components/premium-media-upload";
import styling from './styling';
import hexToRgba from "hex-to-rgba";
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs';

const { __ } = wp.i18n;

const {
    PanelBody,
    Toolbar,
    RangeControl,
    SelectControl,
    ToggleControl,
    TabPanel
} = wp.components;

const { Fragment, Component } = wp.element;

const {
    BlockControls,
    InspectorControls,
    RichText,
    ColorPalette,
    AlignmentToolbar,
    URLInput,
} = wp.blockEditor;

class edit extends Component {
    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;

        setAttributes({ block_id: clientId })

        setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-iconBox-" + clientId
        );
        document.head.appendChild($style);

    }

    render() {

        const { isSelected, setAttributes, className, clientId: blockId, attributes } = this.props;

        const {
            block_id,
            borderIconBox,
            btnBorderIconBox,
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
            iconBackColor,
            iconOpacity,
            titleChecked,
            titleText,
            titleTag,
            titleColor,
            titleFont,
            titleSizeUnit,
            titleSize,
            titleSizeTablet,
            titleSizeMobile,
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
            titleMarginTTablet,
            titleMarginBTablet,
            titleMarginTMobile,
            titleMarginBMobile,
            descChecked,
            descText,
            descColor,
            descFont,
            descSizeUnit,
            descSize,
            descSizeTablet,
            descSizeMobile,
            descLine,
            descWeight,
            descMarginT,
            descMarginB,
            descMarginTTablet,
            descMarginBTablet,
            descMarginTMobile,
            descMarginBMobile,
            btnChecked,
            btnEffect,
            effectDir,
            btnTarget,
            btnText,
            btnLink,
            btnSizeUnit,
            btnSize,
            btnSizeTablet,
            btnSizeMobile,
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
            btnBorderTop,
            btnBorderRight,
            btnBorderBottom,
            btnBorderLeft,
            btnBorderRadius,
            btnBorderType,
            btnPaddingT,
            btnPaddingR,
            btnPaddingB,
            btnPaddingL,
            btnPaddingTTablet,
            btnPaddingRTablet,
            btnPaddingBTablet,
            btnPaddingLTablet,
            btnPaddingTMobile,
            btnPaddingRMobile,
            btnPaddingBMobile,
            btnPaddingLMobile,
            btnPaddingU,
            btnMarginT,
            btnMarginB,
            btnMarginTTablet,
            btnMarginBTablet,
            btnMarginTMobile,
            btnMarginBMobile,
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
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            borderRadius,
            borderColor,
            marginT,
            marginR,
            marginB,
            marginL,
            marginTTablet,
            marginRTablet,
            marginBTablet,
            marginLTablet,
            marginTMobile,
            marginRMobile,
            marginBMobile,
            marginLMobile,
            paddingT,
            paddingR,
            paddingB,
            paddingL,
            paddingTTablet,
            paddingRTablet,
            paddingBTablet,
            paddingLTablet,
            paddingTMobile,
            paddingRMobile,
            paddingBMobile,
            paddingLMobile,
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
            hideDesktop,
            hideTablet,
            hideMobile
        } = attributes;

        const imgIcon = [
            {
                label: __("Icon"),
                value: "icon"
            },
            {
                label: __("Image"),
                value: "image"
            }
        ];

        const ALIGNS = ["left", "center", "right"];

        const EFFECTS = [
            {
                value: "none",
                label: __("None")
            },
            {
                value: "pulse",
                label: __("Pulse")
            },
            {
                value: "rotate",
                label: __("Rotate")
            },
            {
                value: "drotate",
                label: __("3D Rotate")
            },
            {
                value: "buzz",
                label: __("Buzz")
            },
            {
                value: "drop",
                label: __("Drop Shadow")
            },
            {
                value: "wobble",
                label: __("Wobble")
            }
        ];

        const BTN_EFFECTS = [
            {
                value: "none",
                label: __("None")
            },
            {
                value: "slide",
                label: __("Slide")
            }
        ];

        const DIRECTION = [
            {
                value: "top",
                label: __("Top to Bottom")
            },
            {
                value: "bottom",
                label: __("Bottom to Top")
            },
            {
                value: "left",
                label: __("Left to Right")
            },
            {
                value: "right",
                label: __("Right to Left")
            }
        ];

        const ICON_POS = [
            {
                label: __("Inline"),
                value: "inline"
            },
            {
                label: __("Block"),
                value: "block"
            }
        ];

        const ICON_HPOS = [
            {
                label: __("Before"),
                value: "before"
            },
            {
                label: __("After"),
                value: "after"
            }
        ];

        const ICON_VPOS = [
            {
                label: __("Top"),
                value: "top"
            },
            {
                label: __("Middle"),
                value: "center"
            },
            {
                label: __("Bottom"),
                value: "bottom"
            }
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
            setAttributes({ titleFont: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        const onChangeDescFamily = fontFamily => {
            setAttributes({ descFont: fontFamily });
            if (!fontFamily) {
                return;
            }

            addFontToHead(fontFamily);
        };

        let element = document.getElementById(
            "premium-style-iconBox-" + blockId
        );

        if (null != element && "undefined" != typeof element) {
            element.innerHTML = styling(this.props);
        }

        const mainClasses = classnames(className, "premium-icon-box");

        return [
            isSelected && (
                <BlockControls key="controls">
                    <AlignmentToolbar
                        value={align}
                        onChange={newAlign => setAttributes({ align: newAlign })}
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
                            onChange={newValue => setAttributes({ iconChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Title")}
                            checked={titleChecked}
                            onChange={newValue => setAttributes({ titleChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Description")}
                            checked={descChecked}
                            onChange={newValue => setAttributes({ descChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Button")}
                            checked={btnChecked}
                            onChange={newValue => setAttributes({ btnChecked: newValue })}
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
                                onChange={newValue => setAttributes({ iconPos: newValue })}
                            />
                            {"inline" === iconPos && (
                                <Fragment>
                                    <SelectControl
                                        label={__("Horizontal Position")}
                                        options={ICON_HPOS}
                                        value={iconHPos}
                                        onChange={newValue => setAttributes({ iconHPos: newValue })}
                                    />
                                    <SelectControl
                                        label={__("Vertical Position")}
                                        options={ICON_VPOS}
                                        value={iconVPos}
                                        onChange={newValue => setAttributes({ iconVPos: newValue })}
                                    />
                                </Fragment>
                            )}
                            <SelectControl
                                label={__("Icon Type")}
                                options={imgIcon}
                                value={iconImage}
                                onChange={newType => setAttributes({ iconImage: newType })}
                            />
                            {"icon" === iconImage && (
                                <Fragment>
                                    <p className="premium-editor-paragraph">{__("Select Icon")}</p>
                                    <FontIconPicker
                                        icons={iconsList}
                                        onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                                        value={selectedIcon}
                                        isMulti={false}
                                        appendTo="body"
                                        noSelectedPlaceholder={__("Select Icon")}
                                    />
                                </Fragment>
                            )}
                            {"image" === iconImage && (
                                <Fragment>
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={iconImgId}
                                        imageURL={iconImgUrl}
                                        onSelectMedia={media => {
                                            setAttributes({
                                                iconImgId: media.id,
                                                iconImgUrl: media.url
                                            });
                                        }}
                                        onRemoveImage={() =>
                                            setAttributes({
                                                iconImgUrl: "",
                                                iconImgId: ""
                                            })
                                        }
                                    />
                                    <RangeControl
                                        label={__("Border Radius (PX)")}
                                        value={iconRadius}
                                        onChange={newValue =>
                                            setAttributes({ iconRadius: newValue || 0 })
                                        }
                                    />
                                </Fragment>
                            )}
                            <SelectControl
                                label={__("Hover Effect")}
                                options={EFFECTS}
                                value={hoverEffect}
                                onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                            />
                            <RangeControl
                                label={__("Size (PX)")}
                                value={iconSize}
                                min="1"
                                max="200"
                                onChange={newValue => setAttributes({ iconSize: newValue || 30 })}
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
                                controls={"123456".split("").map(tag => ({
                                    icon: "heading",
                                    isActive: "H" + tag === titleTag,
                                    onClick: () => setAttributes({ titleTag: "H" + tag }),
                                    subscript: tag
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
                                    "responsiveSize",
                                    "weight",
                                    "style",
                                    "upper",
                                    "spacing",
                                    "line"
                                ]}
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
                                style={titleStyle}
                                spacing={titleLetter}
                                line={titleLine}
                                upper={titleUpper}
                                onChangeWeight={newWeight =>
                                    setAttributes({ titleWeight: newWeight || 500 })
                                }
                                onChangeStyle={newStyle =>
                                    setAttributes({ titleStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    setAttributes({ titleLetter: newValue })
                                }
                                onChangeLine={newValue => setAttributes({ titleLine: newValue })}
                                onChangeUpper={check => setAttributes({ titleUpper: check })}
                            />
                            <PremiumTextShadow
                                color={titleShadowColor}
                                blur={titleShadowBlur}
                                horizontal={titleShadowHorizontal}
                                vertical={titleShadowVertical}
                                onChangeColor={newColor =>
                                    setAttributes({
                                        titleShadowColor: newColor.hex || "transparent"
                                    })
                                }
                                onChangeBlur={newBlur =>
                                    setAttributes({ titleShadowBlur: newBlur || 0 })
                                }
                                onChangehHorizontal={newValue =>
                                    setAttributes({ titleShadowHorizontal: newValue || 0 })
                                }
                                onChangeVertical={newValue =>
                                    setAttributes({ titleShadowVertical: newValue || 0 })
                                }
                            />
                            <PremiumResponsiveMargin
                                directions={["top", "bottom"]}
                                marginTop={titleMarginT}
                                marginBottom={titleMarginB}
                                marginTopTablet={titleMarginTTablet}
                                marginBottomTablet={titleMarginBTablet}
                                marginTopMobile={titleMarginTMobile}
                                marginBottomMobile={titleMarginBMobile}
                                onChangeMarginTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ titleMarginT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ titleMarginTTablet: newValue })
                                        } else {
                                            setAttributes({ titleMarginTMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ titleMarginB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ titleMarginBTablet: newValue })
                                        } else {
                                            setAttributes({ titleMarginBMobile: newValue })
                                        }
                                    }
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
                                    setAttributes({ descWeight: newWeight || 500 })
                                }
                                onChangeLine={newValue => setAttributes({ descLine: newValue })}
                            />
                            <PremiumResponsiveMargin
                                directions={["top", "bottom"]}
                                marginTop={descMarginT}
                                marginBottom={descMarginB}
                                marginTopTablet={descMarginTTablet}
                                marginBottomTablet={descMarginBTablet}
                                marginTopMobile={descMarginTMobile}
                                marginBottomMobile={descMarginBMobile}
                                onChangeMarginTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ descMarginT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ descMarginTTablet: newValue })
                                        } else {
                                            setAttributes({ descMarginTMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ descMarginB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ descMarginBTablet: newValue })
                                        } else {
                                            setAttributes({ descMarginBMobile: newValue })
                                        }
                                    }
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
                                onChange={newValue => setAttributes({ btnEffect: newValue })}
                            />
                            {"slide" === btnEffect && (
                                <SelectControl
                                    options={DIRECTION}
                                    label={__("Direction")}
                                    value={effectDir}
                                    onChange={newValue => setAttributes({ effectDir: newValue })}
                                />
                            )}
                            <ToggleControl
                                label={__("Open link in new tab")}
                                checked={btnTarget}
                                onChange={newValue => setAttributes({ btnTarget: newValue })}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "upper", "spacing"]}

                                setAttributes={setAttributes}
                                fontSizeType={{
                                    value: btnSizeUnit,
                                    label: __("btnSizeUnit"),
                                }}
                                fontSize={{
                                    value: btnSize,
                                    label: __("btnSize"),
                                }}
                                fontSizeMobile={{
                                    value: btnSizeMobile,
                                    label: __("btnSizeMobile"),
                                }}
                                fontSizeTablet={{
                                    value: btnSizeTablet,
                                    label: __("btnSizeTablet"),
                                }}
                                weight={btnWeight}
                                style={btnStyle}
                                spacing={btnLetter}
                                upper={btnUpper}
                                onChangeWeight={newWeight =>
                                    setAttributes({ btnWeight: newWeight || 500 })
                                }
                                onChangeStyle={newStyle => setAttributes({ btnStyle: newStyle })}
                                onChangeSpacing={newValue =>
                                    setAttributes({ btnLetter: newValue })
                                }
                                onChangeUpper={check => setAttributes({ btnUpper: check })}
                            />

                            <PremiumBorder
                                borderType={btnBorderType}
                                borderWidth={btnBorderWidth}
                                top={btnBorderTop}
                                right={btnBorderRight}
                                bottom={btnBorderBottom}
                                left={btnBorderLeft}
                                borderColor={btnBorderColor}
                                borderRadius={btnBorderRadius}
                                onChangeType={(newType) =>
                                    setAttributes({ btnBorderType: newType })
                                }
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        btnBorderIconBox: true,
                                        btnBorderTop: top,
                                        btnBorderRight: right,
                                        btnBorderBottom: bottom,
                                        btnBorderLeft: left,
                                    })
                                }
                                onChangeColor={(colorValue) =>
                                    setAttributes({ btnBorderColor: colorValue.hex })
                                }
                                onChangeRadius={(newrRadius) =>
                                    setAttributes({ btnBorderRadius: newrRadius })
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
                                        btnShadowColor: newColor.hex || "transparent"
                                    })
                                }
                                onChangeBlur={newBlur =>
                                    setAttributes({
                                        btnShadowBlur: newBlur || 0
                                    })
                                }
                                onChangehHorizontal={newValue =>
                                    setAttributes({
                                        btnShadowHorizontal: newValue || 0
                                    })
                                }
                                onChangeVertical={newValue =>
                                    setAttributes({
                                        btnShadowVertical: newValue || 0
                                    })
                                }
                                onChangePosition={newValue =>
                                    setAttributes({
                                        btnShadowPosition: newValue || 0
                                    })
                                }
                            />

                            <PremiumResponsivePadding
                                paddingTop={btnPaddingT}
                                paddingRight={btnPaddingR}
                                paddingBottom={btnPaddingB}
                                paddingLeft={btnPaddingL}
                                paddingTopTablet={btnPaddingTTablet}
                                paddingRightTablet={btnPaddingRTablet}
                                paddingBottomTablet={btnPaddingBTablet}
                                paddingLeftTablet={btnPaddingLTablet}
                                paddingTopMobile={btnPaddingTMobile}
                                paddingRightMobile={btnPaddingRMobile}
                                paddingBottomMobile={btnPaddingBMobile}
                                paddingLeftMobile={btnPaddingLMobile}
                                showUnits={true}
                                selectedUnit={btnPaddingU}
                                onChangePadSizeUnit={newvalue =>
                                    setAttributes({ btnPaddingU: newvalue })
                                }
                                onChangePaddingTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ btnPaddingT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ btnPaddingTTablet: newValue })
                                        } else {
                                            setAttributes({ btnPaddingTMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingRight={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ btnPaddingR: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ btnPaddingRTablet: newValue })
                                        } else {
                                            setAttributes({ btnPaddingRMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ btnPaddingB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ btnPaddingBTablet: newValue })
                                        } else {
                                            setAttributes({ btnPaddingBMobile: newValue })
                                        }
                                    }
                                }
                                onChangePaddingLeft={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ btnPaddingL: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ btnPaddingLTablet: newValue })
                                        } else {
                                            setAttributes({ btnPaddingLMobile: newValue })
                                        }
                                    }
                                }
                            />

                            <PremiumResponsiveMargin
                                directions={["top", "bottom"]}
                                marginTop={btnMarginT}
                                marginBottom={btnMarginB}
                                marginTopTablet={btnMarginTTablet}
                                marginBottomTablet={btnMarginBTablet}
                                marginTopMobile={btnMarginTMobile}
                                marginBottomMobile={btnMarginBMobile}
                                onChangeMarginTop={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ btnMarginT: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ btnMarginTTablet: newValue })
                                        } else {
                                            setAttributes({ btnMarginTMobile: newValue })
                                        }
                                    }
                                }
                                onChangeMarginBottom={
                                    (device, newValue) => {
                                        if (device === "desktop") {
                                            setAttributes({ btnMarginB: newValue })
                                        } else if (device === "tablet") {
                                            setAttributes({ btnMarginBTablet: newValue })
                                        } else {
                                            setAttributes({ btnMarginBMobile: newValue })
                                        }
                                    }
                                }
                            />

                        </PanelBody>
                    )}

                    <PanelBody
                        title={__("Container")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
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
                                    imageURL: media.url
                                });
                            }}
                            onRemoveImage={value =>
                                setAttributes({ imageURL: "", imageID: "" })
                            }
                            onChangeBackPos={newValue =>
                                setAttributes({ backgroundPosition: newValue })
                            }
                            onchangeBackRepeat={newValue =>
                                setAttributes({ backgroundRepeat: newValue })
                            }
                            onChangeBackSize={newValue =>
                                setAttributes({ backgroundSize: newValue })
                            }
                            onChangeFixed={check => setAttributes({ fixed: check })}
                        />
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
                                    borderIconBox: true,
                                    borderTop: top,
                                    borderRight: right,
                                    borderBottom: bottom,
                                    borderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ borderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                setAttributes({ borderRadius: newrRadius })
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
                                    shadowColor: newColor.hex || "transparent"
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    shadowBlur: newBlur || 0
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    shadowHorizontal: newValue || 0
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    shadowVertical: newValue || 0
                                })
                            }
                            onChangePosition={newValue =>
                                setAttributes({
                                    shadowPosition: newValue
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
                                    hoverShadowColor: newColor.hex
                                })
                            }
                            onChangeBlur={newBlur =>
                                setAttributes({
                                    hoverShadowBlur: newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                setAttributes({
                                    hoverShadowHorizontal: newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                setAttributes({
                                    hoverShadowVertical: newValue
                                })
                            }
                            onChangePosition={newValue =>
                                setAttributes({
                                    hoverShadowPosition: newValue
                                })
                            }
                        />
                        <PremiumResponsiveMargin
                            directions={["all"]}
                            marginTop={marginT}
                            marginRight={marginR}
                            marginBottom={marginB}
                            marginLeft={marginL}
                            marginTopTablet={marginTTablet}
                            marginRightTablet={marginRTablet}
                            marginBottomTablet={marginBTablet}
                            marginLeftTablet={marginLTablet}
                            marginTopMobile={marginTMobile}
                            marginRightMobile={marginRMobile}
                            marginBottomMobile={marginBMobile}
                            marginLeftMobile={marginLMobile}
                            onChangeMarginTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ marginT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ marginTTablet: newValue })
                                    } else {
                                        setAttributes({ marginTMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ marginR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ marginRTablet: newValue })
                                    } else {
                                        setAttributes({ marginRMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ marginB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ marginBTablet: newValue })
                                    } else {
                                        setAttributes({ marginBMobile: newValue })
                                    }
                                }
                            }
                            onChangeMarginLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ marginL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ marginLTablet: newValue })
                                    } else {
                                        setAttributes({ marginLMobile: newValue })
                                    }
                                }
                            }
                        />
                        <PremiumResponsivePadding
                            paddingTop={paddingT}
                            paddingRight={paddingR}
                            paddingBottom={paddingB}
                            paddingLeft={paddingL}
                            paddingTopTablet={paddingTTablet}
                            paddingRightTablet={paddingRTablet}
                            paddingBottomTablet={paddingBTablet}
                            paddingLeftTablet={paddingLTablet}
                            paddingTopMobile={paddingTMobile}
                            paddingRightMobile={paddingRMobile}
                            paddingBottomMobile={paddingBMobile}
                            paddingLeftMobile={paddingLMobile}
                            showUnits={true}
                            selectedUnit={paddingU}
                            onChangePadSizeUnit={newvalue =>
                                setAttributes({ paddingU: newvalue })
                            }
                            onChangePaddingTop={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ paddingT: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ paddingTTablet: newValue })
                                    } else {
                                        setAttributes({ paddingTMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingRight={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ paddingR: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ paddingRTablet: newValue })
                                    } else {
                                        setAttributes({ paddingRMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingBottom={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ paddingB: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ paddingBTablet: newValue })
                                    } else {
                                        setAttributes({ paddingBMobile: newValue })
                                    }
                                }
                            }
                            onChangePaddingLeft={
                                (device, newValue) => {
                                    if (device === "desktop") {
                                        setAttributes({ paddingL: newValue })
                                    } else if (device === "tablet") {
                                        setAttributes({ paddingLTablet: newValue })
                                    } else {
                                        setAttributes({ paddingLMobile: newValue })
                                    }
                                }
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Colors")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <TabPanel
                            className="premium-color-tabpanel"
                            activeClass="active-tab"
                            tabs={[
                                {
                                    name: "normal",
                                    title: "Normal",
                                    className: "premium-tab",
                                },
                                {
                                    name: "hover",
                                    title: "Hover",
                                    className: "premium-tab",
                                },
                            ]}
                        >
                            {(tab) => {
                                let tabout;
                                if ("normal" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            {iconChecked && (
                                                <Fragment>
                                                    <p>{__("Icon Color")}</p>
                                                    <ColorPalette
                                                        value={iconColor}
                                                        onChange={newValue =>
                                                            setAttributes({
                                                                iconColor: newValue || "transparent",
                                                            })
                                                        }
                                                        allowReset={true}
                                                    />
                                                    <p>{__(" Icon Background Color")}</p>
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
                                            )}
                                            {titleChecked && (
                                                <Fragment>
                                                    <p>{__("Tile Color")}</p>
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
                                            )}
                                            {descChecked && (
                                                <Fragment>
                                                    <p>{__("Descreption Color")}</p>
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
                                            )}
                                            {btnChecked && (
                                                <Fragment>
                                                    <p>{__("Button Color")}</p>
                                                    <ColorPalette
                                                        value={btnColor}
                                                        onChange={newValue =>
                                                            setAttributes({
                                                                btnColor: newValue || "#000",
                                                            })
                                                        }
                                                        allowReset={true}
                                                    />
                                                    <p>{__("Button Background Color")}</p>
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
                                                </Fragment>
                                            )}

                                            <p>{__(" Container Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={backColor}
                                                onChangeColor={newvalue =>
                                                    setAttributes({ backColor: newvalue })
                                                }
                                                opacityValue={backOpacity}
                                                onChangeOpacity={value =>
                                                    setAttributes({ backOpacity: value })
                                                }
                                            />
                                        </Fragment>
                                    );
                                }
                                if ("hover" === tab.name) {
                                    tabout = (
                                        <Fragment>
                                            {btnChecked && (
                                                <Fragment>
                                                    <p>{__("Button Hover Color")}</p>
                                                    <ColorPalette
                                                        value={btnHoverColor}
                                                        onChange={newValue =>
                                                            setAttributes({
                                                                btnHoverColor: newValue || "#000",
                                                            })
                                                        }
                                                        allowReset={true}
                                                    />

                                                    <p>{__("Background Button Hover Color")}</p>
                                                    <ColorPalette
                                                        value={btnHoverBack}
                                                        onChange={newValue =>
                                                            setAttributes({
                                                                btnHoverBack: newValue,
                                                            })
                                                        }
                                                        allowReset={true}
                                                    />
                                                </Fragment>
                                            )}

                                            <p>{__("Border Hover Color")}</p>
                                            <ColorPalette
                                                value={btnHoverBorder}
                                                onChange={newValue =>
                                                    setAttributes({
                                                        btnHoverBorder: newValue || "transparent",
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                        </Fragment>
                                    );
                                }
                                return (
                                    <div>
                                        {tabout}
                                        <hr />
                                    </div>
                                );
                            }}
                        </TabPanel>
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
                id={`premium-icon-box-${block_id}`}
                className={`${mainClasses} premium-icon-box-${iconPos} premium-icon-box-${iconHPos} premium-icon-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    textAlign: align,
                    borderStyle: borderType,
                    borderWidth: borderIconBox
                        ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                        : borderWidth + "px",
                    borderRadius: borderRadius + "px",
                    borderColor: borderColor,
                    boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    backgroundColor: backColor
                        ? hexToRgba(backColor, backOpacity)
                        : "transparent",
                    backgroundImage: imageURL ? `url('${imageURL}')` : 'none',
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    backgroundAttachment: fixed ? "fixed" : "unset"
                }}
            >
                {btnChecked && btnText && (
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-icon-box-${block_id}:hover {`,
                                `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-icon-box__btn:hover {`,
                                `color: ${btnHoverColor} !important;`,
                                `border-color: ${btnHoverBorder} !important;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-button__none .premium-icon-box__btn:hover {`,
                                `background-color: ${btnHoverBack} !important;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-button__slide .premium-button::before {`,
                                `background-color: ${btnHoverBack} !important;`,
                                "}"
                            ].join("\n")
                        }}
                    />
                )}
                {iconChecked && (
                    <div
                        className={`premium-icon-box__icon_wrap premium-icon-box__icon_${iconVPos}`}
                    >
                        {"icon" === iconImage && (
                            <Fragment>
                                {iconType === "fa" && 1 != FontAwesomeEnabled && (
                                    <p className={`premium-icon-box__alert`}>
                                        {__("Please Enable Font Awesome Icons from Plugin settings")}
                                    </p>
                                )}
                                {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                                    <i
                                        className={`${selectedIcon} premium-icon-box__icon premium-icon__${hoverEffect}`}
                                        style={{
                                            color: iconColor,
                                            backgroundColor: iconBackColor
                                                ? hexToRgba(
                                                    iconBackColor,
                                                    iconOpacity
                                                )
                                                : "transparent",
                                            fontSize: iconSize
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
                                    width: iconSize + "px",
                                    height: iconSize + "px",
                                    borderRadius: iconRadius + "px"
                                }}
                            />
                        )}
                    </div>
                )}
                <div className={`premium-icon-box__content_wrap`}>
                    {titleChecked && titleText && (
                        <div
                            className={`premium-icon-box__title_wrap`}
                        >
                            <RichText
                                tagName={titleTag.toLowerCase()}
                                className={`premium-icon-box__title`}
                                onChange={newText => setAttributes({ titleText: newText })}
                                placeholder={__("Awesome Title")}
                                value={titleText}
                                style={{
                                    color: titleColor,
                                    fontFamily: titleFont,
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                                    lineHeight: titleLine + "px"
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
                                marginBottom: descMarginB
                            }}
                        >
                            <RichText
                                tagName="p"
                                className={`premium-icon-box__desc`}
                                value={descText}
                                isSelected={false}
                                placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
                                onChange={newText => setAttributes({ descText: newText })}
                                style={{
                                    color: descColor,
                                    fontFamily: descFont,
                                    lineHeight: descLine + "px",
                                    fontWeight: descWeight
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMarginT,
                                marginBottom: btnMarginB
                            }}
                        >
                            <RichText
                                tagName="a"
                                className={`premium-icon-box__btn premium-button`}
                                onChange={newText => setAttributes({ btnText: newText })}
                                placeholder={__("Click Here")}
                                value={btnText}
                                style={{
                                    color: btnColor,
                                    backgroundColor: btnBack
                                        ? hexToRgba(btnBack, btnOpacity)
                                        : "transparent",
                                    letterSpacing: btnLetter + "px",
                                    textTransform: btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyle,
                                    fontWeight: btnWeight,
                                    borderStyle: btnBorderType,
                                    borderWidth: btnBorderIconBox
                                        ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                        : btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor,
                                    boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
                                }}
                                keepPlaceholderOnFocus
                            />
                            {isSelected && (
                                <URLInput
                                    value={btnLink}
                                    onChange={newLink => setAttributes({ btnLink: newLink })}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        ];
    }
};

export default edit;
