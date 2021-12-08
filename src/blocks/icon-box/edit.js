import classnames from "classnames"
import { FontAwesomeEnabled } from "../../../assets/js/settings"
import PremiumTypo from "../../components/premium-typo"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import iconsList from "../../components/premium-icons-list"
import PremiumBorder from "../../components/premium-border"
import PremiumPadding from "../../components/premium-padding"
import PremiumMargin from "../../components/premium-margin"
import PremiumTextShadow from "../../components/premium-text-shadow"
import PremiumBoxShadow from "../../components/premium-box-shadow"
import PremiumBackground from "../../components/premium-background"
import PremiumSizeUnits from "../../components/premium-size-units"
import FONTS from "../../components/premium-fonts"
import PremiumMediaUpload from "../../components/premium-media-upload"
import styling from './styling'
import hexToRgba from "hex-to-rgba"
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs'

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
const { withSelect } = wp.data


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
    }

    render() {

        const { isSelected, setAttributes, className, clientId: blockId, attributes } = this.props;

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
        const saveTitleStyle = (value) => {
            const newUpdate = titleStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                titleStyles: newUpdate,
            });
        }

        const saveButtonStyle = (value) => {
            const newUpdate = btnStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                btnStyles: newUpdate,
            });
        }
        const saveDescriptionStyle = (value) => {
            const newUpdate = descStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                descStyles: newUpdate,
            });
        }
        const {
            block_id,
            borderIconBox,
            btnBorderIconBox,
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
            classMigrate,
            hideDesktop,
            hideTablet,
            hideMobile,
            iconOpacity,
            titleStyles,
            descStyles,
            btnStyles,
            containerStyles,
            titleMarginT,
            titleMarginB,
            descMarginT,
            descMarginB,
            btnBorderWidth,
            btnBorderTop,
            btnBorderRight,
            btnBorderBottom,
            btnBorderLeft,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            btnMarginT,
            btnMarginB,
            marginT,
            marginR,
            marginB,
            marginL,
            paddingT,
            paddingR,
            paddingB,
            paddingL,
            iconType
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
                "https://fonts.googleapis.com/css2?family=" +
                fontFamily.replace(/\s/g, '+').replace(/\"/g, "") + "&display=swap";
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
                                    isActive: "H" + tag === titleStyles[0].titleTag,
                                    onClick: () => saveTitleStyle({ titleTag: "H" + tag }),
                                    subscript: tag
                                }))}
                            />
                            <SelectControl
                                label={__("Font Family")}
                                value={titleStyles[0].titleFont}
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
                                setAttributes={saveTitleStyle}
                                fontSizeType={{
                                    value: titleStyles[0].titleSizeUnit,
                                    label: __("titleSizeUnit"),
                                }}
                                fontSize={{
                                    value: titleStyles[0].titleSize,
                                    label: __("titleSize"),
                                }}
                                fontSizeMobile={{
                                    value: titleStyles[0].titleSizeMobile,
                                    label: __("titleSizeMobile"),
                                }}
                                fontSizeTablet={{
                                    value: titleStyles[0].titleSizeTablet,
                                    label: __("titleSizeTablet"),
                                }}
                                weight={titleStyles[0].titleWeight}
                                style={titleStyles[0].titleStyle}
                                spacing={titleStyles[0].titleLetter}
                                line={titleStyles[0].titleLine}
                                upper={titleStyles[0].titleUpper}
                                onChangeWeight={newWeight =>
                                    saveTitleStyle({ titleWeight: newWeight || 500 })
                                }
                                onChangeStyle={newStyle =>
                                    saveTitleStyle({ titleStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    saveTitleStyle({ titleLetter: newValue })
                                }
                                onChangeLine={newValue => saveTitleStyle({ titleLine: newValue })}
                                onChangeUpper={check => saveTitleStyle({ titleUpper: check })}
                            />
                            <PremiumTextShadow
                                color={titleStyles[0].titleShadowColor}
                                blur={titleStyles[0].titleShadowBlur}
                                horizontal={titleStyles[0].titleShadowHorizontal}
                                vertical={titleStyles[0].titleShadowVertical}
                                onChangeColor={newColor =>
                                    saveTitleStyle({
                                        titleShadowColor: newColor.hex || "transparent"
                                    })
                                }
                                onChangeBlur={newBlur =>
                                    saveTitleStyle({ titleShadowBlur: newBlur || 0 })
                                }
                                onChangehHorizontal={newValue =>
                                    saveTitleStyle({ titleShadowHorizontal: newValue || 0 })
                                }
                                onChangeVertical={newValue =>
                                    saveTitleStyle({ titleShadowVertical: newValue || 0 })
                                }
                            />
                            <PremiumMargin
                                directions={["top", "bottom"]}
                                marginTop={titleMarginT}
                                marginBottom={titleMarginB}
                                onChangeMarTop={value =>
                                    setAttributes({
                                        titleMarginT: value || 0
                                    })
                                }
                                onChangeMarBottom={value =>
                                    setAttributes({
                                        titleMarginB: value || 0
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
                                value={descStyles[0].descFont}
                                options={FONTS}
                                onChange={onChangeDescFamily}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "line"]}
                                setAttributes={saveDescriptionStyle}
                                fontSizeType={{
                                    value: descStyles[0].descSizeUnit,
                                    label: __("descSizeUnit"),
                                }}
                                fontSize={{
                                    value: descStyles[0].descSize,
                                    label: __("descSize"),
                                }}
                                fontSizeMobile={{
                                    value: descStyles[0].descSizeMobile,
                                    label: __("descSizeMobile"),
                                }}
                                fontSizeTablet={{
                                    value: descStyles[0].descSizeTablet,
                                    label: __("descSizeTablet"),
                                }}
                                weight={descStyles[0].descWeight}
                                line={descStyles[0].descLine}
                                onChangeWeight={newWeight =>
                                    saveDescriptionStyle({ descWeight: newWeight || 500 })
                                }
                                onChangeLine={newValue => saveDescriptionStyle({ descLine: newValue })}
                            />
                            <PremiumMargin
                                directions={["top", "bottom"]}
                                marginTop={descMarginT}
                                marginBottom={descMarginB}
                                onChangeMarTop={value =>
                                    setAttributes({
                                        descMarginT: value || 0
                                    })
                                }
                                onChangeMarBottom={value =>
                                    setAttributes({
                                        descMarginB: value || 0
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

                                setAttributes={saveButtonStyle}
                                fontSizeType={{
                                    value: btnStyles[0].btnSizeUnit,
                                    label: __("btnSizeUnit"),
                                }}
                                fontSize={{
                                    value: btnStyles[0].btnSize,
                                    label: __("btnSize"),
                                }}
                                fontSizeMobile={{
                                    value: btnStyles[0].btnSizeMobile,
                                    label: __("btnSizeMobile"),
                                }}
                                fontSizeTablet={{
                                    value: btnStyles[0].btnSizeTablet,
                                    label: __("btnSizeTablet"),
                                }}
                                weight={btnStyles[0].btnWeight}
                                style={btnStyles[0].btnStyle}
                                spacing={btnStyles[0].btnLetter}
                                upper={btnStyles[0].btnUpper}
                                onChangeWeight={newWeight =>
                                    saveButtonStyle({ btnWeight: newWeight || 500 })
                                }
                                onChangeStyle={newStyle => saveButtonStyle({ btnStyle: newStyle })}
                                onChangeSpacing={newValue =>
                                    saveButtonStyle({ btnLetter: newValue })
                                }
                                onChangeUpper={check => saveButtonStyle({ btnUpper: check })}
                            />

                            <PremiumBorder
                                borderType={btnStyles[0].btnBorderType}
                                borderWidth={btnBorderWidth}
                                top={btnBorderTop}
                                right={btnBorderRight}
                                bottom={btnBorderBottom}
                                left={btnBorderLeft}
                                borderColor={btnStyles[0].btnBorderColor}
                                borderRadius={btnStyles[0].btnBorderRadius}
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
                                color={btnStyles[0].btnShadowColor}
                                blur={btnStyles[0].btnShadowBlur}
                                horizontal={btnStyles[0].btnShadowHorizontal}
                                vertical={btnStyles[0].btnShadowVertical}
                                position={btnStyles[0].btnShadowPosition}
                                onChangeColor={newColor =>
                                    saveButtonStyle({
                                        btnShadowColor: newColor.hex || "transparent"
                                    })
                                }
                                onChangeBlur={newBlur =>
                                    saveButtonStyle({
                                        btnShadowBlur: newBlur || 0
                                    })
                                }
                                onChangehHorizontal={newValue =>
                                    saveButtonStyle({
                                        btnShadowHorizontal: newValue || 0
                                    })
                                }
                                onChangeVertical={newValue =>
                                    saveButtonStyle({
                                        btnShadowVertical: newValue || 0
                                    })
                                }
                                onChangePosition={newValue =>
                                    saveButtonStyle({
                                        btnShadowPosition: newValue || 0
                                    })
                                }
                            />
                            <PremiumSizeUnits
                                onChangeSizeUnit={newValue =>
                                    saveButtonStyle({ btnPaddingU: newValue })
                                }
                            />
                            <RangeControl
                                label={__("Padding")}
                                value={btnStyles[0].btnPadding}
                                onChange={newValue => saveButtonStyle({ btnPadding: newValue })}
                            />
                            <PremiumMargin
                                directions={["top", "bottom"]}
                                marginTop={btnMarginT}
                                marginBottom={btnMarginB}
                                onChangeMarTop={value =>
                                    setAttributes({
                                        btnMarginT: value || 0
                                    })
                                }
                                onChangeMarBottom={value =>
                                    setAttributes({
                                        btnMarginB: value || 0
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
                        <PremiumBorder
                            borderType={containerStyles[0].borderType}
                            borderWidth={containerStyles[0].borderWidth}
                            top={borderTop}
                            right={borderRight}
                            bottom={borderBottom}
                            left={borderLeft}
                            borderColor={containerStyles[0].borderColor}
                            borderRadius={containerStyles[0].borderRadius}
                            onChangeType={(newType) => saveContainerStyle({ borderType: newType })}
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
                                saveContainerStyle({ borderColor: colorValue.hex })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveContainerStyle({ borderRadius: newrRadius })
                            }
                        />
                        <PremiumBoxShadow
                            inner={true}
                            color={containerStyles[0].shadowColor}
                            blur={containerStyles[0].shadowBlur}
                            horizontal={containerStyles[0].shadowHorizontal}
                            vertical={containerStyles[0].shadowVertical}
                            position={containerStyles[0].shadowPosition}
                            onChangeColor={newColor =>
                                saveContainerStyle({
                                    shadowColor: newColor.hex || "transparent"
                                })
                            }
                            onChangeBlur={newBlur =>
                                saveContainerStyle({
                                    shadowBlur: newBlur || 0
                                })
                            }
                            onChangehHorizontal={newValue =>
                                saveContainerStyle({
                                    shadowHorizontal: newValue || 0
                                })
                            }
                            onChangeVertical={newValue =>
                                saveContainerStyle({
                                    shadowVertical: newValue || 0
                                })
                            }
                            onChangePosition={newValue =>
                                saveContainerStyle({
                                    shadowPosition: newValue
                                })
                            }
                        />
                        <PremiumBoxShadow
                            inner={true}
                            label={__("Hover Box Shadow")}
                            color={containerStyles[0].hoverShadowColor}
                            blur={containerStyles[0].hoverShadowBlur}
                            horizontal={containerStyles[0].hoverShadowHorizontal}
                            vertical={containerStyles[0].hoverShadowVertical}
                            position={containerStyles[0].hoverShadowPosition}
                            onChangeColor={newColor =>
                                saveContainerStyle({
                                    hoverShadowColor: newColor.hex
                                })
                            }
                            onChangeBlur={newBlur =>
                                saveContainerStyle({
                                    hoverShadowBlur: newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                saveContainerStyle({
                                    hoverShadowHorizontal: newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                saveContainerStyle({
                                    hoverShadowVertical: newValue
                                })
                            }
                            onChangePosition={newValue =>
                                saveContainerStyle({
                                    hoverShadowPosition: newValue
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
                                    marginT: value || 0
                                })
                            }
                            onChangeMarRight={value =>
                                setAttributes({
                                    marginR: value || 0
                                })
                            }
                            onChangeMarBottom={value =>
                                setAttributes({
                                    marginB: value || 0
                                })
                            }
                            onChangeMarLeft={value =>
                                setAttributes({
                                    marginL: value || 0
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
                                    paddingT: value || 0
                                })
                            }
                            onChangePadRight={value =>
                                setAttributes({
                                    paddingR: value || 0
                                })
                            }
                            onChangePadBottom={value =>
                                setAttributes({
                                    paddingB: value || 0
                                })
                            }
                            onChangePadLeft={value =>
                                setAttributes({
                                    paddingL: value || 0
                                })
                            }
                            selectedUnit={containerStyles[0].paddingU}
                            onChangePadSizeUnit={newvalue =>
                                saveContainerStyle({ paddingU: newvalue })
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
                                                        value={titleStyles[0].titleColor}
                                                        onChange={newValue =>
                                                            saveTitleStyle({
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
                                                        value={descStyles[0].descColor}
                                                        onChange={newValue =>
                                                            saveDescriptionStyle({
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
                                                        value={btnStyles[0].btnColor}
                                                        onChange={newValue =>
                                                            saveButtonStyle({
                                                                btnColor: newValue || "#000",
                                                            })
                                                        }
                                                        allowReset={true}
                                                    />
                                                    <p>{__("Button Background Color")}</p>
                                                    <PremiumBackground
                                                        type="color"
                                                        colorValue={btnStyles[0].btnBack}
                                                        onChangeColor={newvalue =>
                                                            saveButtonStyle({
                                                                btnBack: newvalue,
                                                            })
                                                        }
                                                        opacityValue={btnStyles[0].btnOpacity}
                                                        onChangeOpacity={value =>
                                                            saveButtonStyle({
                                                                btnOpacity: value,
                                                            })
                                                        }
                                                    />
                                                </Fragment>
                                            )}

                                            <p>{__(" Container Background Color")}</p>
                                            <PremiumBackground
                                                type="color"
                                                colorValue={containerStyles[0].backColor}
                                                onChangeColor={newvalue =>
                                                    saveContainerStyle({ backColor: newvalue })
                                                }
                                                opacityValue={containerStyles[0].backOpacity}
                                                onChangeOpacity={value =>
                                                    saveContainerStyle({ backOpacity: value })
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
                                                        value={btnStyles[0].btnHoverColor}
                                                        onChange={newValue =>
                                                            saveButtonStyle({
                                                                btnHoverColor: newValue || "#000",
                                                            })
                                                        }
                                                        allowReset={true}
                                                    />

                                                    <p>{__("Background Button Hover Color")}</p>
                                                    <ColorPalette
                                                        value={btnStyles[0].btnHoverBack}
                                                        onChange={newValue =>
                                                            saveButtonStyle({
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
                    borderStyle: containerStyles[0].borderType,
                    borderWidth: borderIconBox
                        ? `${containerStyles[0].borderTop}px ${containerStyles[0].borderRight}px ${containerStyles[0].borderBottom}px ${containerStyles[0].borderLeft}px`
                        : containerStyles[0].borderWidth + "px",
                    borderRadius: containerStyles[0].borderRadius + "px",
                    borderColor: containerStyles[0].borderColor,
                    marginTop: containerStyles[0].marginT,
                    marginRight: containerStyles[0].marginR,
                    marginBottom: containerStyles[0].marginB,
                    marginLeft: containerStyles[0].marginL,
                    paddingTop: containerStyles[0].paddingT + containerStyles[0].paddingU,
                    paddingRight: containerStyles[0].paddingR + containerStyles[0].paddingU,
                    paddingBottom: containerStyles[0].paddingB + containerStyles[0].paddingU,
                    paddingLeft: containerStyles[0].paddingL + containerStyles[0].paddingU,
                    boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`,
                    // backgroundColor: containerStyles[0].backColor
                    //     ? hexToRgba(containerStyles[0].backColor, containerStyles[0].backOpacity)
                    //     : "transparent",
                    backgroundImage: containerStyles[0].imageURL ? `url('${containerStyles[0].imageURL}')` : 'none',
                    backgroundRepeat: containerStyles[0].backgroundRepeat,
                    backgroundPosition: containerStyles[0].backgroundPosition,
                    backgroundSize: containerStyles[0].backgroundSize,
                    backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset"
                }}
            >
                {btnChecked && btnText && (
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-icon-box-${block_id}:hover {`,
                                `box-shadow: ${containerStyles[0].hoverShadowHorizontal}px ${containerStyles[0].hoverShadowVertical}px ${containerStyles[0].hoverShadowBlur}px ${containerStyles[0].hoverShadowColor} ${containerStyles[0].hoverShadowPosition} !important`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-icon-box__btn:hover {`,
                                `color: ${btnStyles[0].btnHoverColor} !important;`,
                                `border-color: ${btnHoverBorder} !important;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-button__none .premium-icon-box__btn:hover {`,
                                `background-color: ${btnStyles[0].btnHoverBack} !important;`,
                                "}",
                                `#premium-icon-box-${block_id} .premium-button__slide .premium-button::before {`,
                                `background-color: ${btnStyles[0].btnHoverBack} !important;`,
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
                            style={{
                                marginTop: titleStyles[0].titleMarginT,
                                marginBottom: titleStyles[0].titleMarginB
                            }}
                        >
                            <RichText
                                tagName={titleStyles[0].titleTag.toLowerCase()}
                                className={`premium-icon-box__title`}
                                onChange={newText => setAttributes({ titleText: newText })}
                                placeholder={__("Awesome Title")}
                                value={titleText}
                                style={{
                                    color: titleStyles[0].titleColor,
                                    fontFamily: titleStyles[0].titleFont,
                                    letterSpacing: titleStyles[0].titleLetter + "px",
                                    textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyles[0].titleStyle,
                                    fontWeight: titleStyles[0].titleWeight,
                                    textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`,
                                    lineHeight: titleStyles[0].titleLine + "px"
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`premium-icon-box__desc_wrap`}
                            style={{
                                marginTop: descStyles[0].descMarginT,
                                marginBottom: descStyles[0].descMarginB
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
                                    color: descStyles[0].descColor,
                                    fontFamily: descStyles[0].descFont,
                                    lineHeight: descStyles[0].descLine + "px",
                                    fontWeight: descStyles[0].descWeight
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnStyles[0].btnMarginT,
                                marginBottom: btnStyles[0].btnMarginB
                            }}
                        >
                            <RichText
                                tagName="a"
                                className={`premium-icon-box__btn premium-button`}
                                onChange={newText => setAttributes({ btnText: newText })}
                                placeholder={__("Click Here")}
                                value={btnText}
                                style={{
                                    color: btnStyles[0].btnColor,
                                    backgroundColor: btnStyles[0].btnBack
                                        ? hexToRgba(btnStyles[0].btnBack, btnStyles[0].btnOpacity)
                                        : "transparent",
                                    letterSpacing: btnStyles[0].btnLetter + "px",
                                    textTransform: btnStyles[0].btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyles[0].btnStyle,
                                    fontWeight: btnStyles[0].btnWeight,
                                    borderStyle: btnStyles[0].btnBorderType,
                                    borderWidth: btnBorderIconBox
                                        ? `${btnStyles[0].btnBorderTop}px ${btnStyles[0].btnBorderRight}px ${btnStyles[0].btnBorderBottom}px ${btnStyles[0].btnBorderLeft}px`
                                        : btnStyles[0].btnBorderWidth + "px",
                                    borderRadius: btnStyles[0].btnBorderRadius + "px",
                                    borderColor: btnStyles[0].btnBorderColor,
                                    padding: btnStyles[0].btnPadding + btnStyles[0].btnPaddingU,
                                    boxShadow: `${btnStyles[0].btnShadowHorizontal}px ${btnStyles[0].btnShadowVertical}px ${btnStyles[0].btnShadowBlur}px ${btnStyles[0].btnShadowColor} ${btnStyles[0].btnShadowPosition}`
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

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(edit)