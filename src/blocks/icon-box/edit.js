import classnames from "classnames"
import { FontAwesomeEnabled } from "../../../assets/js/settings"
import PremiumTypo from "../../components/premium-typo"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import iconsList from "../../components/premium-icons-list"
import PremiumBorder from "../../components/premium-border"
import PremiumBackground from "../../components/premium-background"
import PremiumMediaUpload from "../../components/premium-media-upload"
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs'
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import RadioComponent from '../../components/radio-control';
import SpacingControl from '../../components/premium-responsive-spacing'
import WebfontLoader from "../../components/typography/fontLoader"
import PremiumShadow from "../../components/PremiumShadow";

const { __ } = wp.i18n;

const { PanelBody, SelectControl, ToggleControl, TabPanel } = wp.components;
const { Fragment, Component } = wp.element;
const { withSelect } = wp.data
const { BlockControls, InspectorControls, RichText, AlignmentToolbar, URLInput, } = wp.blockEditor;

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
            setAttributes({ containerStyles: newUpdate });
        }

        const saveTitleStyle = (value) => {
            const newUpdate = titleStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ titleStyles: newUpdate });
        }

        const saveButtonStyle = (value) => {
            const newUpdate = btnStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ btnStyles: newUpdate });
        }

        const saveDescriptionStyle = (value) => {
            const newUpdate = descStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ descStyles: newUpdate });
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
            titleStyles,
            descStyles,
            btnStyles,
            containerStyles,
            btnBorderWidth,
            btnBorderTop,
            btnBorderRight,
            btnBorderBottom,
            btnBorderLeft,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            iconType,
            containerPadding,
            containerMargin,
            btnMargin,
            descMargin,
            titleMargin
        } = attributes;

        const imgIcon = [
            {
                label: __("Icon", 'premium-blocks-for-gutenberg'),
                value: "icon"
            },
            {
                label: __("Image", 'premium-blocks-for-gutenberg'),
                value: "image"
            }
        ];

        const EFFECTS = [
            {
                value: "none",
                label: __("None", 'premium-blocks-for-gutenberg')
            },
            {
                value: "pulse",
                label: __("Pulse", 'premium-blocks-for-gutenberg')
            },
            {
                value: "rotate",
                label: __("Rotate", 'premium-blocks-for-gutenberg')
            },
            {
                value: "drotate",
                label: __("3D Rotate", 'premium-blocks-for-gutenberg')
            },
            {
                value: "buzz",
                label: __("Buzz", 'premium-blocks-for-gutenberg')
            },
            {
                value: "drop",
                label: __("Drop Shadow", 'premium-blocks-for-gutenberg')
            },
            {
                value: "wobble",
                label: __("Wobble", 'premium-blocks-for-gutenberg')
            }
        ];

        const BTN_EFFECTS = [
            {
                value: "none",
                label: __("None", 'premium-blocks-for-gutenberg')
            },
            {
                value: "slide",
                label: __("Slide", 'premium-blocks-for-gutenberg')
            }
        ];

        const DIRECTION = [
            {
                value: "top",
                label: __("Top to Bottom", 'premium-blocks-for-gutenberg')
            },
            {
                value: "bottom",
                label: __("Bottom to Top", 'premium-blocks-for-gutenberg')
            },
            {
                value: "left",
                label: __("Left to Right", 'premium-blocks-for-gutenberg')
            },
            {
                value: "right",
                label: __("Right to Left", 'premium-blocks-for-gutenberg')
            }
        ];

        const ICON_POS = [
            {
                label: __("Inline", 'premium-blocks-for-gutenberg'),
                value: "inline"
            },
            {
                label: __("Block", 'premium-blocks-for-gutenberg'),
                value: "block"
            }
        ];

        const ICON_HPOS = [
            {
                label: __("Before", 'premium-blocks-for-gutenberg'),
                value: "before"
            },
            {
                label: __("After", 'premium-blocks-for-gutenberg'),
                value: "after"
            }
        ];

        const ICON_VPOS = [
            {
                label: __("Top", 'premium-blocks-for-gutenberg'),
                value: "top"
            },
            {
                label: __("Middle", 'premium-blocks-for-gutenberg'),
                value: "center"
            },
            {
                label: __("Bottom", 'premium-blocks-for-gutenberg'),
                value: "bottom"
            }
        ];

        let loadTitleGoogleFonts;
        let loadDescriptionGoogleFonts;
        if (titleStyles[0].titleFont !== 'Default') {
            const titleConfig = {
                google: {
                    families: [titleStyles[0].titleFont],
                },
            }
            loadTitleGoogleFonts = (
                <WebfontLoader config={titleConfig}>
                </WebfontLoader>
            )
        }
        if (descStyles[0].descFont !== 'Default') {
            const descriptionConfig = {
                google: {
                    families: [descStyles[0].descFont],
                },
            }
            loadDescriptionGoogleFonts = (
                <WebfontLoader config={descriptionConfig}>
                </WebfontLoader>
            )
        }


        const mainClasses = classnames(className, "premium-icon-box");
        const titleFontSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titleSizeTablet, titleStyles[0].titleSizeMobile);
        const descriptionFontSize = this.getPreviewSize(this.props.deviceType, descStyles[0].descSize, descStyles[0].descSizeTablet, descStyles[0].descSizeMobile);
        const buttonFontSize = this.getPreviewSize(this.props.deviceType, btnStyles[0].btnSize, btnStyles[0].btnSizeTablet, btnStyles[0].btnSizeMobile);
        const containerPaddingTop = this.getPreviewSize(this.props.deviceType, containerPadding.Desktop.top, containerPadding.Tablet.top, containerPadding.Mobile.top);
        const containerPaddingRight = this.getPreviewSize(this.props.deviceType, containerPadding.Desktop.right, containerPadding.Tablet.right, containerPadding.Mobile.right);
        const containerPaddingBottom = this.getPreviewSize(this.props.deviceType, containerPadding.Desktop.bottom, containerPadding.Tablet.bottom, containerPadding.Mobile.bottom);
        const containerPaddingLeft = this.getPreviewSize(this.props.deviceType, containerPadding.Desktop.left, containerPadding.Tablet.left, containerPadding.Mobile.left);
        const containerMarginTop = this.getPreviewSize(this.props.deviceType, containerMargin.Desktop.top, containerMargin.Tablet.top, containerMargin.Mobile.top);
        const containerMarginRight = this.getPreviewSize(this.props.deviceType, containerMargin.Desktop.right, containerMargin.Tablet.right, containerMargin.Mobile.right);
        const containerMarginBottom = this.getPreviewSize(this.props.deviceType, containerMargin.Desktop.bottom, containerMargin.Tablet.bottom, containerMargin.Mobile.bottom);
        const containerMarginLeft = this.getPreviewSize(this.props.deviceType, containerMargin.Desktop.left, containerMargin.Tablet.left, containerMargin.Mobile.left);
        const titleMarginTop = this.getPreviewSize(this.props.deviceType, titleMargin.Desktop.top, titleMargin.Tablet.top, titleMargin.Mobile.top);
        const titleMarginRight = this.getPreviewSize(this.props.deviceType, titleMargin.Desktop.right, titleMargin.Tablet.right, titleMargin.Mobile.right);
        const titleMarginBottom = this.getPreviewSize(this.props.deviceType, titleMargin.Desktop.bottom, titleMargin.Tablet.bottom, titleMargin.Mobile.bottom);
        const titlePaddingLeft = this.getPreviewSize(this.props.deviceType, titleMargin.Desktop.left, titleMargin.Tablet.left, titleMargin.Mobile.left);
        const descMarginTop = this.getPreviewSize(this.props.deviceType, descMargin.Desktop.top, descMargin.Tablet.top, descMargin.Mobile.top);
        const descMarginRight = this.getPreviewSize(this.props.deviceType, descMargin.Desktop.right, descMargin.Tablet.right, descMargin.Mobile.right);
        const descMarginBottom = this.getPreviewSize(this.props.deviceType, descMargin.Desktop.bottom, descMargin.Tablet.bottom, descMargin.Mobile.bottom);
        const descMarginLeft = this.getPreviewSize(this.props.deviceType, descMargin.Desktop.left, descMargin.Tablet.left, descMargin.Mobile.left);
        const btnMarginTop = this.getPreviewSize(this.props.deviceType, btnMargin.Desktop.top, btnMargin.Tablet.top, btnMargin.Mobile.top);
        const btnMarginRight = this.getPreviewSize(this.props.deviceType, btnMargin.Desktop.right, btnMargin.Tablet.right, btnMargin.Mobile.right);
        const btnMarginBottom = this.getPreviewSize(this.props.deviceType, btnMargin.Desktop.bottom, btnMargin.Tablet.bottom, btnMargin.Mobile.bottom);
        const btnMarginLeft = this.getPreviewSize(this.props.deviceType, btnMargin.Desktop.left, btnMargin.Tablet.left, btnMargin.Mobile.left);

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
                        title={__("Display Options", 'premium-blocks-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Icon", 'premium-blocks-for-gutenberg')}
                            checked={iconChecked}
                            onChange={newValue => setAttributes({ iconChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Title", 'premium-blocks-for-gutenberg')}
                            checked={titleChecked}
                            onChange={newValue => setAttributes({ titleChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Description", 'premium-blocks-for-gutenberg')}
                            checked={descChecked}
                            onChange={newValue => setAttributes({ descChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Button", 'premium-blocks-for-gutenberg')}
                            checked={btnChecked}
                            onChange={newValue => setAttributes({ btnChecked: newValue })}
                        />
                    </PanelBody>
                    {iconChecked && (
                        <PanelBody
                            title={__("Icon", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Icon Position", 'premium-blocks-for-gutenberg')}
                                options={ICON_POS}
                                value={iconPos}
                                onChange={newValue => setAttributes({ iconPos: newValue })}
                            />
                            {"inline" === iconPos && (
                                <Fragment>
                                    <SelectControl
                                        label={__("Horizontal Position", 'premium-blocks-for-gutenberg')}
                                        options={ICON_HPOS}
                                        value={iconHPos}
                                        onChange={newValue => setAttributes({ iconHPos: newValue })}
                                    />
                                    <SelectControl
                                        label={__("Vertical Position", 'premium-blocks-for-gutenberg')}
                                        options={ICON_VPOS}
                                        value={iconVPos}
                                        onChange={newValue => setAttributes({ iconVPos: newValue })}
                                    />
                                </Fragment>
                            )}
                            <SelectControl
                                label={__("Icon Type", 'premium-blocks-for-gutenberg')}
                                options={imgIcon}
                                value={iconImage}
                                onChange={newType => setAttributes({ iconImage: newType })}
                            />
                            {"icon" === iconImage && (
                                <Fragment>
                                    <p className="premium-editor-paragraph">{__("Select Icon", 'premium-blocks-for-gutenberg')}</p>
                                    <FontIconPicker
                                        icons={iconsList}
                                        onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                                        value={selectedIcon}
                                        isMulti={false}
                                        appendTo="body"
                                        noSelectedPlaceholder={__("Select Icon", 'premium-blocks-for-gutenberg')}
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
                                    <ResponsiveSingleRangeControl
                                        label={__("Border Radius (PX)", 'premium-blocks-for-gutenberg')}
                                        value={iconRadius}
                                        onChange={newValue => setAttributes({ iconRadius: newValue || 0 })}
                                        showUnit={false}
                                        defaultValue={0}
                                    />
                                </Fragment>
                            )}
                            <SelectControl
                                label={__("Hover Effect", 'premium-blocks-for-gutenberg')}
                                options={EFFECTS}
                                value={hoverEffect}
                                onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Size (PX)", 'premium-blocks-for-gutenberg')}
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
                            title={__("Title", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <RadioComponent
                                label={__("Title", 'premium-blocks-for-gutenberg')}
                                choices={['H1', 'H2', 'H3', 'H4', 'H5', 'H6']}
                                value={titleStyles[0].titleTag}
                                onChange={(newValue) => saveTitleStyle({ titleTag: newValue })}
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
                                    label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={titleStyles[0].titleSize}
                                fontSizeMobile={titleStyles[0].titleSizeMobile}
                                fontSizeTablet={titleStyles[0].titleSizeTablet}
                                onChangeSize={newSize => saveTitleStyle({ titleSize: newSize })}
                                onChangeTabletSize={newSize => saveTitleStyle({ titleSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveTitleStyle({ titleSizeMobile: newSize })}
                                weight={titleStyles[0].titleWeight}
                                style={titleStyles[0].titleStyle}
                                spacing={titleStyles[0].titleLetter}
                                line={titleStyles[0].titleLine}
                                upper={titleStyles[0].titleUpper}
                                fontFamily={titleStyles[0].titleFont}
                                onChangeWeight={newWeight => saveTitleStyle({ titleWeight: newWeight || 500 })}
                                onChangeStyle={newStyle => saveTitleStyle({ titleStyle: newStyle })}
                                onChangeSpacing={newValue => saveTitleStyle({ titleLetter: newValue })}
                                onChangeLine={newValue => saveTitleStyle({ titleLine: newValue })}
                                onChangeUpper={check => saveTitleStyle({ titleUpper: check })}
                                onChangeFamily={(fontFamily) => saveTitleStyle({ titleFont: fontFamily })}
                            />
                            <PremiumShadow
                                label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                color={titleStyles[0].titleShadowColor}
                                blur={titleStyles[0].titleShadowBlur}
                                horizontal={titleStyles[0].titleShadowHorizontal}
                                vertical={titleStyles[0].titleShadowVertical}
                                onChangeColor={newColor => saveTitleStyle({ titleShadowColor: newColor || "transparent" })}
                                onChangeBlur={newBlur => saveTitleStyle({ titleShadowBlur: newBlur || 0 })}
                                onChangehHorizontal={newValue => saveTitleStyle({ titleShadowHorizontal: newValue || 0 })}
                                onChangeVertical={newValue => saveTitleStyle({ titleShadowVertical: newValue || 0 })}
                            />
                            <SpacingControl
                                label={__('Margin', 'premium-blocks-for-gutenberg')}
                                value={titleMargin}
                                onChange={(value) => setAttributes({ titleMargin: value })}
                                showUnits={false}
                                responsive={true}
                            />
                        </PanelBody>
                    )}
                    {descChecked && (
                        <PanelBody
                            title={__("Description", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                components={["responsiveSize", "weight", "line", "family"]}
                                setAttributes={saveDescriptionStyle}
                                fontSizeType={{
                                    value: descStyles[0].descSizeUnit,
                                    label: __("descSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={descStyles[0].descSize}
                                fontSizeMobile={descStyles[0].descSizeMobile}
                                fontSizeTablet={descStyles[0].descSizeTablet}
                                onChangeSize={newSize => saveDescriptionStyle({ descSize: newSize })}
                                onChangeTabletSize={newSize => saveDescriptionStyle({ descSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveDescriptionStyle({ descSizeMobile: newSize })}
                                fontFamily={descStyles[0].descFont}
                                weight={descStyles[0].descWeight}
                                line={descStyles[0].descLine}
                                onChangeWeight={newWeight => saveDescriptionStyle({ descWeight: newWeight || 500 })}
                                onChangeLine={newValue => saveDescriptionStyle({ descLine: newValue })}
                                onChangeFamily={(fontFamily) => saveDescriptionStyle({ descFont: fontFamily })}
                            />
                            <SpacingControl
                                label={__('Margin', 'premium-blocks-for-gutenberg')}
                                value={descMargin}
                                onChange={(value) => setAttributes({ descMargin: value })}
                                showUnits={false}
                                responsive={true}
                            />
                        </PanelBody>
                    )}

                    {btnChecked && (
                        <PanelBody
                            title={__("Button", 'premium-blocks-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <SelectControl
                                options={BTN_EFFECTS}
                                label={__("Hover Effect", 'premium-blocks-for-gutenberg')}
                                value={btnEffect}
                                onChange={newValue => setAttributes({ btnEffect: newValue })}
                            />
                            {"slide" === btnEffect && (
                                <SelectControl
                                    options={DIRECTION}
                                    label={__("Direction", 'premium-blocks-for-gutenberg')}
                                    value={effectDir}
                                    onChange={newValue => setAttributes({ effectDir: newValue })}
                                />
                            )}
                            <ToggleControl
                                label={__("Open link in new tab", 'premium-blocks-for-gutenberg')}
                                checked={btnTarget}
                                onChange={newValue => setAttributes({ btnTarget: newValue })}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "upper", "spacing"]}

                                setAttributes={saveButtonStyle}
                                fontSizeType={{
                                    value: btnStyles[0].btnSizeUnit,
                                    label: __("btnSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={btnStyles[0].btnSize}
                                fontSizeMobile={btnStyles[0].btnSizeMobile}
                                fontSizeTablet={btnStyles[0].btnSizeTablet}
                                weight={btnStyles[0].btnWeight}
                                style={btnStyles[0].btnStyle}
                                spacing={btnStyles[0].btnLetter}
                                upper={btnStyles[0].btnUpper}
                                onChangeWeight={newWeight => saveButtonStyle({ btnWeight: newWeight || 500 })}
                                onChangeStyle={newStyle => saveButtonStyle({ btnStyle: newStyle })}
                                onChangeSpacing={newValue => saveButtonStyle({ btnLetter: newValue })}
                                onChangeUpper={check => saveButtonStyle({ btnUpper: check })}
                                onChangeSize={newSize => saveButtonStyle({ btnSize: newSize })}
                                onChangeTabletSize={newSize => saveButtonStyle({ btnSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveButtonStyle({ btnSizeMobile: newSize })}
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
                                onChangeType={(newType) => saveButtonStyle({ btnBorderType: newType })}
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        btnBorderIconBox: true,
                                        btnBorderTop: top,
                                        btnBorderRight: right,
                                        btnBorderBottom: bottom,
                                        btnBorderLeft: left,
                                    })
                                }
                                onChangeColor={(colorValue) => saveButtonStyle({ btnBorderColor: colorValue })}
                                onChangeRadius={(newrRadius) => saveButtonStyle({ btnBorderRadius: newrRadius })}
                            />
                            <PremiumShadow
                                label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                boxShadow={true}
                                color={btnStyles[0].btnShadowColor}
                                blur={btnStyles[0].btnShadowBlur}
                                horizontal={btnStyles[0].btnShadowHorizontal}
                                vertical={btnStyles[0].btnShadowVertical}
                                position={btnStyles[0].btnShadowPosition}
                                onChangeColor={newColor => saveButtonStyle({ btnShadowColor: newColor || "transparent" })}
                                onChangeBlur={newBlur => saveButtonStyle({ btnShadowBlur: newBlur || 0 })}
                                onChangehHorizontal={newValue => saveButtonStyle({ btnShadowHorizontal: newValue || 0 })}
                                onChangeVertical={newValue => saveButtonStyle({ btnShadowVertical: newValue || 0 })}
                                onChangePosition={newValue => saveButtonStyle({ btnShadowPosition: newValue || 0 })}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Padding", 'premium-blocks-for-gutenberg')}
                                value={btnStyles[0].btnPadding}
                                onChange={newValue => saveButtonStyle({ btnPadding: newValue })}
                                showUnit={true}
                                defaultValue={''}
                                onChangeUnit={newValue => saveButtonStyle({ btnPaddingU: newValue })}
                                unit={btnStyles[0].btnPaddingU}
                            />
                            <SpacingControl
                                label={__('Margin', 'premium-blocks-for-gutenberg')}
                                value={btnMargin}
                                onChange={(value) => setAttributes({ btnMargin: value })}
                                showUnits={false}
                                responsive={true}
                            />

                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Container", 'premium-blocks-for-gutenberg')}
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
                            onRemoveImage={value => saveContainerStyle({ imageURL: "", imageID: "" })}
                            onChangeBackPos={newValue => saveContainerStyle({ backgroundPosition: newValue })}
                            onchangeBackRepeat={newValue => saveContainerStyle({ backgroundRepeat: newValue })}
                            onChangeBackSize={newValue => saveContainerStyle({ backgroundSize: newValue })}
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
                            onChangeColor={(colorValue) => saveContainerStyle({ borderColor: colorValue })}
                            onChangeRadius={(newrRadius) => saveContainerStyle({ borderRadius: newrRadius })}
                        />
                        <PremiumShadow
                            label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={true}
                            color={containerStyles[0].shadowColor}
                            blur={containerStyles[0].shadowBlur}
                            horizontal={containerStyles[0].shadowHorizontal}
                            vertical={containerStyles[0].shadowVertical}
                            position={containerStyles[0].shadowPosition}
                            onChangeColor={newColor => saveContainerStyle({ shadowColor: newColor || "transparent" })}
                            onChangeBlur={newBlur => saveContainerStyle({ shadowBlur: newBlur || 0 })}
                            onChangehHorizontal={newValue => saveContainerStyle({ shadowHorizontal: newValue || 0 })}
                            onChangeVertical={newValue => saveContainerStyle({ shadowVertical: newValue || 0 })}
                            onChangePosition={newValue => saveContainerStyle({ shadowPosition: newValue })}
                        />
                        <PremiumShadow
                            label={__("Hover Box Shadow", 'premium-blocks-for-gutenberg')}
                            boxShadow={true}
                            color={containerStyles[0].hoverShadowColor}
                            blur={containerStyles[0].hoverShadowBlur}
                            horizontal={containerStyles[0].hoverShadowHorizontal}
                            vertical={containerStyles[0].hoverShadowVertical}
                            position={containerStyles[0].hoverShadowPosition}
                            onChangeColor={newColor => saveContainerStyle({ hoverShadowColor: newColor })}
                            onChangeBlur={newBlur => saveContainerStyle({ hoverShadowBlur: newBlur })}
                            onChangehHorizontal={newValue => saveContainerStyle({ hoverShadowHorizontal: newValue })}
                            onChangeVertical={newValue => saveContainerStyle({ hoverShadowVertical: newValue })}
                            onChangePosition={newValue => saveContainerStyle({ hoverShadowPosition: newValue })}
                        />
                        <SpacingControl
                            label={__('Margin', 'premium-blocks-for-gutenberg')}
                            value={containerMargin}
                            onChange={(value) => setAttributes({ containerMargin: value })}
                            showUnits={false}
                            responsive={true}
                        />
                        <SpacingControl
                            label={__('Padding', 'premium-blocks-for-gutenberg')}
                            value={containerPadding}
                            onChange={(value) => setAttributes({ containerPadding: value })}
                            showUnits={true}
                            responsive={true}
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
                                                        label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                                                        colorValue={iconColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue => setAttributes({ iconColor: newValue || "transparent", })}
                                                    />
                                                    <AdvancedPopColorControl
                                                        label={__(`Icon Background Color`)}
                                                        colorValue={iconBackColor}
                                                        onColorChange={newvalue => setAttributes({ iconBackColor: newvalue, })}
                                                        colorDefault={``}
                                                    />
                                                </Fragment>
                                            )}
                                            {titleChecked && (
                                                <AdvancedPopColorControl
                                                    label={__("Title Color", 'premium-blocks-for-gutenberg')}
                                                    colorValue={titleStyles[0].titleColor}
                                                    colorDefault={''}
                                                    onColorChange={newValue => saveTitleStyle({ titleColor: newValue || "transparent", })}
                                                />
                                            )}
                                            {descChecked && (
                                                <AdvancedPopColorControl
                                                    label={__("Description Color", 'premium-blocks-for-gutenberg')}
                                                    colorValue={descStyles[0].descColor}
                                                    colorDefault={''}
                                                    onColorChange={newValue => saveDescriptionStyle({ descColor: newValue || "transparent", })}
                                                />
                                            )}
                                            {btnChecked && (
                                                <Fragment>
                                                    <AdvancedPopColorControl
                                                        label={__("Button Color", 'premium-blocks-for-gutenberg')}
                                                        colorValue={btnStyles[0].btnColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue => saveButtonStyle({ btnColor: newValue || "#000", })}
                                                    />

                                                    <AdvancedPopColorControl
                                                        label={__(`Button Background Color`)}
                                                        colorValue={btnStyles[0].btnBack}
                                                        onColorChange={newvalue => saveButtonStyle({ btnBack: newvalue, })}
                                                        colorDefault={``}
                                                    />
                                                </Fragment>
                                            )}
                                            <AdvancedPopColorControl
                                                label={__(`Container Background Color`)}
                                                colorValue={containerStyles[0].backColor}
                                                onColorChange={newvalue => saveContainerStyle({ backColor: newvalue })}
                                                colorDefault={``}
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
                                                        label={__("Button Hover Color", 'premium-blocks-for-gutenberg')}
                                                        colorValue={btnStyles[0].btnHoverColor}
                                                        colorDefault={''}
                                                        onColorChange={newValue => saveButtonStyle({ btnHoverColor: newValue || "#000", })}
                                                    />
                                                    <AdvancedPopColorControl
                                                        label={__('Button Background Hover Color', 'premium-blocks-for-gutenberg')}
                                                        colorValue={btnStyles[0].btnHoverBack}
                                                        colorDefault={''}
                                                        onColorChange={newValue => saveButtonStyle({ btnHoverBack: newValue, })}
                                                    />
                                                </Fragment>
                                            )}
                                            <AdvancedPopColorControl
                                                label={__('Button Border Hover Color', 'premium-blocks-for-gutenberg')}
                                                colorValue={btnHoverBorder}
                                                colorDefault={''}
                                                onColorChange={newValue => setAttributes({ btnHoverBorder: newValue || "transparent", })}
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
                    marginTop: containerMarginTop,
                    marginRight: containerMarginRight,
                    marginBottom: containerMarginBottom,
                    marginLeft: containerMarginLeft,
                    paddingTop: containerPaddingTop && containerPaddingTop + (containerPadding.unit ? containerPadding.unit : 'px'),
                    paddingRight: containerPaddingRight && containerPaddingRight + (containerPadding.unit ? containerPadding.unit : 'px'),
                    paddingBottom: containerPaddingBottom && containerPaddingBottom + (containerPadding.unit ? containerPadding.unit : 'px'),
                    paddingLeft: containerPaddingLeft && containerPaddingLeft + (containerPadding.unit ? containerPadding.unit : 'px'),
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
                                marginTop: titleMarginTop,
                                marginRight: titleMarginRight,
                                marginBottom: titleMarginBottom,
                                marginLeft: titlePaddingLeft,
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
                                marginTop: descMarginTop,
                                marginRight: descMarginRight,
                                marginBottom: descMarginBottom,
                                marginLeft: descMarginLeft,
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
                                marginTop: btnMarginTop,
                                marginRight: btnMarginRight,
                                marginBottom: btnMarginBottom,
                                marginLeft: btnMarginLeft,
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
                                    padding: btnStyles[0].btnPadding && btnStyles[0].btnPadding + (btnStyles[0].btnPaddingU ? btnStyles[0].btnPaddingU : 'px'),
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
                {loadTitleGoogleFonts}
                {loadDescriptionGoogleFonts}
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