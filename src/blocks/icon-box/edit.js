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
import PremiumMediaUpload from "../../components/premium-media-upload"
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs'
import PremiumRangeControl from "../../components/premium-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'

const { __ } = wp.i18n;

const {
    PanelBody,
    Toolbar,
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
                label: __("Icon", 'premium-block-for-gutenberg'),
                value: "icon"
            },
            {
                label: __("Image", 'premium-block-for-gutenberg'),
                value: "image"
            }
        ];

        const ALIGNS = ["left", "center", "right"];

        const EFFECTS = [
            {
                value: "none",
                label: __("None", 'premium-block-for-gutenberg')
            },
            {
                value: "pulse",
                label: __("Pulse", 'premium-block-for-gutenberg')
            },
            {
                value: "rotate",
                label: __("Rotate", 'premium-block-for-gutenberg')
            },
            {
                value: "drotate",
                label: __("3D Rotate", 'premium-block-for-gutenberg')
            },
            {
                value: "buzz",
                label: __("Buzz", 'premium-block-for-gutenberg')
            },
            {
                value: "drop",
                label: __("Drop Shadow", 'premium-block-for-gutenberg')
            },
            {
                value: "wobble",
                label: __("Wobble", 'premium-block-for-gutenberg')
            }
        ];

        const BTN_EFFECTS = [
            {
                value: "none",
                label: __("None", 'premium-block-for-gutenberg')
            },
            {
                value: "slide",
                label: __("Slide", 'premium-block-for-gutenberg')
            }
        ];

        const DIRECTION = [
            {
                value: "top",
                label: __("Top to Bottom", 'premium-block-for-gutenberg')
            },
            {
                value: "bottom",
                label: __("Bottom to Top", 'premium-block-for-gutenberg')
            },
            {
                value: "left",
                label: __("Left to Right", 'premium-block-for-gutenberg')
            },
            {
                value: "right",
                label: __("Right to Left", 'premium-block-for-gutenberg')
            }
        ];

        const ICON_POS = [
            {
                label: __("Inline", 'premium-block-for-gutenberg'),
                value: "inline"
            },
            {
                label: __("Block", 'premium-block-for-gutenberg'),
                value: "block"
            }
        ];

        const ICON_HPOS = [
            {
                label: __("Before", 'premium-block-for-gutenberg'),
                value: "before"
            },
            {
                label: __("After", 'premium-block-for-gutenberg'),
                value: "after"
            }
        ];

        const ICON_VPOS = [
            {
                label: __("Top", 'premium-block-for-gutenberg'),
                value: "top"
            },
            {
                label: __("Middle", 'premium-block-for-gutenberg'),
                value: "center"
            },
            {
                label: __("Bottom", 'premium-block-for-gutenberg'),
                value: "bottom"
            }
        ];

        const mainClasses = classnames(className, "premium-icon-box");

        const titleFontSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titleSizeTablet, titleStyles[0].titleSizeMobile);
        const descriptionFontSize = this.getPreviewSize(this.props.deviceType, descStyles[0].descSize, descStyles[0].descSizeTablet, descStyles[0].descSizeMobile);
        const buttonFontSize = this.getPreviewSize(this.props.deviceType, btnStyles[0].btnSize, btnStyles[0].btnSizeTablet, btnStyles[0].btnSizeMobile);
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
                        title={__("Display Options", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Icon", 'premium-block-for-gutenberg')}
                            checked={iconChecked}
                            onChange={newValue => setAttributes({ iconChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Title", 'premium-block-for-gutenberg')}
                            checked={titleChecked}
                            onChange={newValue => setAttributes({ titleChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Description", 'premium-block-for-gutenberg')}
                            checked={descChecked}
                            onChange={newValue => setAttributes({ descChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Button", 'premium-block-for-gutenberg')}
                            checked={btnChecked}
                            onChange={newValue => setAttributes({ btnChecked: newValue })}
                        />
                    </PanelBody>
                    {iconChecked && (
                        <PanelBody
                            title={__("Icon", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Icon Position", 'premium-block-for-gutenberg')}
                                options={ICON_POS}
                                value={iconPos}
                                onChange={newValue => setAttributes({ iconPos: newValue })}
                            />
                            {"inline" === iconPos && (
                                <Fragment>
                                    <SelectControl
                                        label={__("Horizontal Position", 'premium-block-for-gutenberg')}
                                        options={ICON_HPOS}
                                        value={iconHPos}
                                        onChange={newValue => setAttributes({ iconHPos: newValue })}
                                    />
                                    <SelectControl
                                        label={__("Vertical Position", 'premium-block-for-gutenberg')}
                                        options={ICON_VPOS}
                                        value={iconVPos}
                                        onChange={newValue => setAttributes({ iconVPos: newValue })}
                                    />
                                </Fragment>
                            )}
                            <SelectControl
                                label={__("Icon Type", 'premium-block-for-gutenberg')}
                                options={imgIcon}
                                value={iconImage}
                                onChange={newType => setAttributes({ iconImage: newType })}
                            />
                            {"icon" === iconImage && (
                                <Fragment>
                                    <p className="premium-editor-paragraph">{__("Select Icon", 'premium-block-for-gutenberg')}</p>
                                    <FontIconPicker
                                        icons={iconsList}
                                        onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                                        value={selectedIcon}
                                        isMulti={false}
                                        appendTo="body"
                                        noSelectedPlaceholder={__("Select Icon", 'premium-block-for-gutenberg')}
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
                                    <PremiumRangeControl
                                        label={__("Border Radius (PX)", 'premium-block-for-gutenberg')}
                                        value={iconRadius}
                                        onChange={newValue =>
                                            setAttributes({ iconRadius: newValue || 0 })
                                        }
                                        showUnit={false}
                                        defaultValue={0}
                                    />
                                </Fragment>
                            )}
                            <SelectControl
                                label={__("Hover Effect", 'premium-block-for-gutenberg')}
                                options={EFFECTS}
                                value={hoverEffect}
                                onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                            />
                            <PremiumRangeControl
                                label={__("Size (PX)", 'premium-block-for-gutenberg')}
                                value={iconSize}
                                min="10"
                                max="200"
                                onChange={newValue => setAttributes({ iconSize: newValue || 30 })}
                                showUnit={false}
                                defaultValue={''}
                            />
                        </PanelBody>
                    )}
                    {titleChecked && (
                        <PanelBody
                            title={__("Title", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <p>{__("Title", 'premium-block-for-gutenberg')}</p>
                            <Toolbar
                                controls={"123456".split("").map(tag => ({
                                    icon: "heading",
                                    isActive: "H" + tag === titleStyles[0].titleTag,
                                    onClick: () => saveTitleStyle({ titleTag: "H" + tag }),
                                    subscript: tag
                                }))}
                            />
                            <PremiumTypo
                                components={[
                                    "responsiveSize",
                                    "weight",
                                    "style",
                                    "upper",
                                    "spacing",
                                    "line",
                                    "family"
                                ]}
                                setAttributes={saveTitleStyle}
                                fontSizeType={{
                                    value: titleStyles[0].titleSizeUnit,
                                    label: __("titleSizeUnit", 'premium-block-for-gutenberg'),
                                }}
                                fontSize={{
                                    value: titleStyles[0].titleSize,
                                    label: __("titleSize", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeMobile={{
                                    value: titleStyles[0].titleSizeMobile,
                                    label: __("titleSizeMobile", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeTablet={{
                                    value: titleStyles[0].titleSizeTablet,
                                    label: __("titleSizeTablet", 'premium-block-for-gutenberg'),
                                }}
                                weight={titleStyles[0].titleWeight}
                                style={titleStyles[0].titleStyle}
                                spacing={titleStyles[0].titleLetter}
                                line={titleStyles[0].titleLine}
                                upper={titleStyles[0].titleUpper}
                                fontFamily={titleStyles[0].titleFont}
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
                                onChangeFamily={(fontFamily) => saveTitleStyle({ titleFont: fontFamily })}
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
                            title={__("Description", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >

                            <PremiumTypo
                                components={["responsiveSize", "weight", "line", "family"]}
                                setAttributes={saveDescriptionStyle}
                                fontSizeType={{
                                    value: descStyles[0].descSizeUnit,
                                    label: __("descSizeUnit", 'premium-block-for-gutenberg'),
                                }}
                                fontSize={{
                                    value: descStyles[0].descSize,
                                    label: __("descSize", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeMobile={{
                                    value: descStyles[0].descSizeMobile,
                                    label: __("descSizeMobile", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeTablet={{
                                    value: descStyles[0].descSizeTablet,
                                    label: __("descSizeTablet", 'premium-block-for-gutenberg'),
                                }}
                                fontFamily={descStyles[0].descFont}
                                weight={descStyles[0].descWeight}
                                line={descStyles[0].descLine}
                                onChangeWeight={newWeight =>
                                    saveDescriptionStyle({ descWeight: newWeight || 500 })
                                }
                                onChangeLine={newValue => saveDescriptionStyle({ descLine: newValue })}
                                onChangeFamily={(fontFamily) => saveDescriptionStyle({ descFont: fontFamily })}
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
                            title={__("Button", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                options={BTN_EFFECTS}
                                label={__("Hover Effect", 'premium-block-for-gutenberg')}
                                value={btnEffect}
                                onChange={newValue => setAttributes({ btnEffect: newValue })}
                            />
                            {"slide" === btnEffect && (
                                <SelectControl
                                    options={DIRECTION}
                                    label={__("Direction", 'premium-block-for-gutenberg')}
                                    value={effectDir}
                                    onChange={newValue => setAttributes({ effectDir: newValue })}
                                />
                            )}
                            <ToggleControl
                                label={__("Open link in new tab", 'premium-block-for-gutenberg')}
                                checked={btnTarget}
                                onChange={newValue => setAttributes({ btnTarget: newValue })}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "upper", "spacing"]}

                                setAttributes={saveButtonStyle}
                                fontSizeType={{
                                    value: btnStyles[0].btnSizeUnit,
                                    label: __("btnSizeUnit", 'premium-block-for-gutenberg'),
                                }}
                                fontSize={{
                                    value: btnStyles[0].btnSize,
                                    label: __("btnSize", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeMobile={{
                                    value: btnStyles[0].btnSizeMobile,
                                    label: __("btnSizeMobile", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeTablet={{
                                    value: btnStyles[0].btnSizeTablet,
                                    label: __("btnSizeTablet", 'premium-block-for-gutenberg'),
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
                                    saveButtonStyle({ btnBorderType: newType })
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
                                    saveButtonStyle({ btnBorderColor: colorValue.hex })
                                }
                                onChangeRadius={(newrRadius) =>
                                    saveButtonStyle({ btnBorderRadius: newrRadius })
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
                            <PremiumRangeControl
                                label={__("Padding", 'premium-block-for-gutenberg')}
                                value={btnStyles[0].btnPadding}
                                onChange={newValue => saveButtonStyle({ btnPadding: newValue })}
                                showUnit={true}
                                defaultValue={''}
                                onChangeUnit={newValue =>
                                    saveButtonStyle({ btnPaddingU: newValue })
                                }
                                unit={btnStyles[0].btnPaddingU}
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
                        title={__("Container", 'premium-block-for-gutenberg')}
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
                                                    <AdvancedPopColorControl
                                                        label={__("Icon Color", 'premium-block-for-gutenberg')}
                                                        colorValue={iconColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue =>
                                                            setAttributes({
                                                                iconColor: newValue || "transparent",
                                                            })
                                                        }
                                                    />
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
                                                <AdvancedPopColorControl
                                                    label={__("Tile Color", 'premium-block-for-gutenberg')}
                                                    colorValue={titleStyles[0].titleColor}
                                                    colorDefault={''}
                                                    onColorChange={newValue =>
                                                        saveTitleStyle({
                                                            titleColor: newValue || "transparent",
                                                        })
                                                    }
                                                />
                                            )}
                                            {descChecked && (
                                                <AdvancedPopColorControl
                                                    label={__("Descreption Color", 'premium-block-for-gutenberg')}
                                                    colorValue={descStyles[0].descColor}
                                                    colorDefault={''}
                                                    onColorChange={newValue =>
                                                        saveDescriptionStyle({
                                                            descColor: newValue || "transparent",
                                                        })
                                                    }
                                                />
                                            )}
                                            {btnChecked && (
                                                <Fragment>
                                                    <AdvancedPopColorControl
                                                        label={__("Button Color", 'premium-block-for-gutenberg')}
                                                        colorValue={btnStyles[0].btnColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue =>
                                                            saveButtonStyle({
                                                                btnColor: newValue || "#000",
                                                            })
                                                        }
                                                    />
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
                                                    <AdvancedPopColorControl
                                                        label={__("Button Hover Color", 'premium-block-for-gutenberg')}
                                                        colorValue={btnStyles[0].btnHoverColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue =>
                                                            saveButtonStyle({
                                                                btnHoverColor: newValue || "#000",
                                                            })
                                                        }
                                                    />
                                                    <AdvancedPopColorControl
                                                        label={__('Background Button Hover Color', 'premium-block-for-gutenberg')}
                                                        colorValue={btnStyles[0].btnHoverBack}
                                                        colorDefault={''}
                                                        onColorChange={newValue =>
                                                            saveButtonStyle({
                                                                btnHoverBack: newValue,
                                                            })
                                                        }
                                                    />
                                                </Fragment>
                                            )}
                                            <AdvancedPopColorControl
                                                label={__('Border Hover Color', 'premium-block-for-gutenberg')}
                                                colorValue={btnHoverBorder}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    setAttributes({
                                                        btnHoverBorder: newValue || "transparent",
                                                    })
                                                }
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
                        ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                        : containerStyles[0].borderWidth + "px",
                    borderRadius: containerStyles[0].borderRadius + "px",
                    borderColor: containerStyles[0].borderColor,
                    marginTop: marginT,
                    marginRight: marginR,
                    marginBottom: marginB,
                    marginLeft: marginL,
                    paddingTop: paddingT + containerStyles[0].paddingU,
                    paddingRight: paddingR + containerStyles[0].paddingU,
                    paddingBottom: paddingB + containerStyles[0].paddingU,
                    paddingLeft: paddingL + containerStyles[0].paddingU,
                    boxShadow: `${containerStyles[0].shadowHorizontal}px ${containerStyles[0].shadowVertical}px ${containerStyles[0].shadowBlur}px ${containerStyles[0].shadowColor} ${containerStyles[0].shadowPosition}`,
                    backgroundColor: containerStyles[0].backColor,
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
                                            backgroundColor: iconBackColor,
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
                                marginTop: titleMarginT,
                                marginBottom: titleMarginB
                            }}
                        >
                            <RichText
                                tagName={titleStyles[0].titleTag.toLowerCase()}
                                className={`premium-icon-box__title`}
                                onChange={newText => setAttributes({ titleText: newText })}
                                placeholder={__("Awesome Title")}
                                value={titleText}
                                style={{
                                    fontSize: `${titleFontSize}${titleStyles[0].titleSizeUnit}`,
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
                                    color: descStyles[0].descColor,
                                    fontFamily: descStyles[0].descFont,
                                    lineHeight: descStyles[0].descLine + "px",
                                    fontWeight: descStyles[0].descWeight,
                                    fontSize: `${descriptionFontSize}${descStyles[0].descSizeUnit}`
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
                                    fontSize: `${buttonFontSize}${btnStyles[0].btnSizeUnit}`,
                                    color: btnStyles[0].btnColor,
                                    backgroundColor: btnStyles[0].btnBack,
                                    letterSpacing: btnStyles[0].btnLetter + "px",
                                    textTransform: btnStyles[0].btnUpper ? "uppercase" : "none",
                                    fontStyle: btnStyles[0].btnStyle,
                                    fontWeight: btnStyles[0].btnWeight,
                                    borderStyle: btnStyles[0].btnBorderType,
                                    borderWidth: btnBorderIconBox
                                        ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
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