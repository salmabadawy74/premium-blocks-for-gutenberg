import classnames from "classnames"
import { FontAwesomeEnabled } from "../../../assets/js/settings"
import PremiumTypo from "../../components/premium-typo"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import iconsList from "../../components/premium-icons-list"
import PremiumBorder from "../../components/premium-border"
import PremiumBackgroundControl from "../../components/Premium-Background-Control";
import PremiumMediaUpload from "../../components/premium-media-upload"
import PremiumResponsiveTabs from '../../components/premium-responsive-tabs'
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import RadioComponent from '../../components/radio-control';
import SpacingControl from '../../components/premium-responsive-spacing'
import WebfontLoader from "../../components/typography/fontLoader"
import PremiumShadow from "../../components/PremiumShadow";
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import { gradientBackground } from '../../components/HelperFunction'

const { __ } = wp.i18n;

const { PanelBody, SelectControl, ToggleControl, TabPanel, TextControl, TextareaControl } = wp.components;
const { Fragment, Component } = wp.element;
const { withSelect } = wp.data
const { BlockControls, InspectorControls, RichText, AlignmentToolbar, URLInput } = wp.blockEditor;

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
            btnTypography
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
        if (titleTypography.fontFamily !== 'Default') {
            const titleConfig = {
                google: {
                    families: [titleTypography.fontFamily],
                },
            }
            loadTitleGoogleFonts = (
                <WebfontLoader config={titleConfig}>
                </WebfontLoader>
            )
        }
        if (descTypography.fontFamily !== 'Default') {
            const descriptionConfig = {
                google: {
                    families: [descTypography.fontFamily],
                },
            }
            loadDescriptionGoogleFonts = (
                <WebfontLoader config={descriptionConfig}>
                </WebfontLoader>
            )
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
                    <InspectorTabs tabs={['layout', 'style', 'advance']}>
                        <InspectorTab key={'layout'}>
                            <PanelBody
                                title={__("Display Options", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={true}
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
                                </PanelBody>
                            )}
                            {titleChecked && (
                                <PanelBody
                                    title={__("Title", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <TextControl
                                        label={__("Title", 'premium-block-for-gutenberg')}
                                        value={titleText}
                                        onChange={newText => setAttributes({ titleText: newText })}
                                    />
                                    <RadioComponent
                                        label={__("Title", 'premium-blocks-for-gutenberg')}
                                        choices={['H1', 'H2', 'H3', 'H4', 'H5', 'H6']}
                                        value={titleStyles[0].titleTag}
                                        onChange={(newValue) => saveTitleStyle({ titleTag: newValue })}
                                    />
                                </PanelBody>
                            )}
                            {descChecked && (
                                <PanelBody
                                    title={__("Description", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <TextareaControl
                                        label={__("Content", 'premium-block-for-gutenberg')}
                                        value={descText}
                                        onChange={newText => setAttributes({ descText: newText })}
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
                                    <TextControl
                                        label={__("Text", 'premium-block-for-gutenberg')}
                                        value={btnText}
                                        onChange={newText => setAttributes({ btnText: newText })}
                                    />
                                    <ToggleControl
                                        label={__("Open link in new tab", 'premium-blocks-for-gutenberg')}
                                        checked={btnTarget}
                                        onChange={newValue => setAttributes({ btnTarget: newValue })}
                                    />
                                    { btnTarget &&
                                        <TextControl
                                            label={__("Link", 'premium-block-for-gutenberg')}
                                            value={btnLink}
                                            onChange={newLink => setAttributes({ btnLink: newLink })}
                                        />
                                    }
                                </PanelBody>
                            )}
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            {iconChecked && (<PanelBody
                                title={__("Icon")}
                                className="premium-panel-body"
                                initialOpen={true}
                            >
                                <AdvancedPopColorControl
                                    label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={iconColor}
                                    colorDefault={''}
                                    onColorChange={newValue => setAttributes({ iconColor: newValue })}
                                />
                                <AdvancedPopColorControl
                                    label={__(`Icon Background Color`)}
                                    colorValue={iconBackColor}
                                    onColorChange={newvalue => setAttributes({ iconBackColor: newvalue, })}
                                    colorDefault={``}
                                />
                                <ResponsiveRangeControl
                                    label={__('Size', 'premium-blocks-for-gutenberg')}
                                    value={iconSize}
                                    onChange={(value) => setAttributes({ iconSize: value })}
                                    min={10}
                                    max={200}
                                    step={1}
                                    showUnit={true}
                                    units={['px', 'em', 'rem']}
                                    defaultValue={40}
                                />
                            </PanelBody>
                            )}
                            {titleChecked && (<PanelBody
                                title={__("Title")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <AdvancedPopColorControl
                                    label={__("Title Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={titleStyles[0].titleColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveTitleStyle({ titleColor: newValue })}
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
                                    value={titleTypography}
                                    onChange={newValue => setAttributes({ titleTypography: newValue })}
                                />
                                <PremiumShadow
                                    label={__("Text Shadow", "premium-blocks-for-gutenberg")}
                                    value={titleShadow}
                                    onChange={(value) => setAttributes({ titleShadow: value })}
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
                            {descChecked && (<PanelBody
                                title={__("Description")}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <AdvancedPopColorControl
                                    label={__("Description Color", 'premium-blocks-for-gutenberg')}
                                    colorValue={descStyles[0].descColor}
                                    colorDefault={''}
                                    onColorChange={newValue => saveDescriptionStyle({ descColor: newValue })}
                                />
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "line", "family"]}
                                    value={descTypography}
                                    onChange={newValue => setAttributes({ descTypography: newValue })}
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
                            {btnChecked && (<PanelBody
                                title={__("Button")}
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
                                            );
                                        }
                                        if ("hover" === tab.name) {
                                            tabout = (
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
                                                    <AdvancedPopColorControl
                                                        label={__('Button Border Hover Color', 'premium-blocks-for-gutenberg')}
                                                        colorValue={btnHoverBorder}
                                                        colorDefault={''}
                                                        onColorChange={newValue => setAttributes({ btnHoverBorder: newValue })}
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
                                <PremiumTypo
                                    components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                    value={btnTypography}
                                    onChange={newValue => setAttributes({ btnTypography: newValue })}
                                />
                                <PremiumBorder
                                    label={__('Border', 'premium-blocks-for-gutenberg')}
                                    value={btnBorder}
                                    onChange={(value) => setAttributes({ btnBorder: value })}
                                />
                                <PremiumShadow
                                    value={btnShadow}
                                    onChange={(value) => setAttributes({ btnShadow: value })}
                                />
                                <SpacingControl
                                    label={__('Padding', 'premium-blocks-for-gutenberg')}
                                    value={btnPadding}
                                    onChange={(value) => setAttributes({ btnPadding: value })}
                                    showUnits={true}
                                    responsive={true}
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
                                <PremiumBackgroundControl
                                    value={containerBackground}
                                    onChange={(value) => setAttributes({ containerBackground: value })}
                                />
                                <PremiumBorder
                                    label={__('Border', 'premium-blocks-for-gutenberg')}
                                    value={containerBorder}
                                    onChange={(value) => setAttributes({ containerBorder: value })}
                                />
                                <PremiumShadow
                                    value={containerShadow}
                                    onChange={(value) => setAttributes({ containerShadow: value })}
                                />
                                <PremiumShadow
                                    label={__("Hover Box Shadow", "premium-blocks-for-gutenberg")}
                                    value={containerHoverShadow}
                                    onChange={(value) => setAttributes({ containerHoverShadow: value })}
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
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            <PremiumResponsiveTabs
                                Desktop={hideDesktop}
                                Tablet={hideTablet}
                                Mobile={hideMobile}
                                onChangeDesktop={(value) => setAttributes({ hideDesktop: value ? " premium-desktop-hidden" : "" })}
                                onChangeTablet={(value) => setAttributes({ hideTablet: value ? " premium-tablet-hidden" : "" })}
                                onChangeMobile={(value) => setAttributes({ hideMobile: value ? " premium-mobile-hidden" : "" })}
                            />
                        </InspectorTab>
                    </InspectorTabs>
                </InspectorControls>
            ),
            <div
                id={`premium-icon-box-${block_id}`}
                className={`${mainClasses} premium-icon-box-${iconPos} premium-icon-box-${iconHPos} premium-icon-box-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    textAlign: align,
                    borderStyle: containerBorder.borderType,
                    borderTopWidth: containerBorder['borderWidth'][this.props.deviceType]['top'] && containerBorder['borderWidth'][this.props.deviceType]['top'] + "px",
                    borderRightWidth: containerBorder['borderWidth'][this.props.deviceType]['right'] && containerBorder['borderWidth'][this.props.deviceType]['right'] + "px",
                    borderBottomWidth: containerBorder['borderWidth'][this.props.deviceType]['bottom'] && containerBorder['borderWidth'][this.props.deviceType]['bottom'] + "px",
                    borderLeftWidth: containerBorder['borderWidth'][this.props.deviceType]['left'] && containerBorder['borderWidth'][this.props.deviceType]['left'] + "px",
                    borderBottomLeftRadius: containerBorder['borderRadius'][this.props.deviceType]['left'] && containerBorder['borderRadius'][this.props.deviceType]['left'] + "px",
                    borderTopLeftRadius: containerBorder['borderRadius'][this.props.deviceType]['top'] && containerBorder['borderRadius'][this.props.deviceType]['top'] + "px",
                    borderTopRightRadius: containerBorder['borderRadius'][this.props.deviceType]['right'] && containerBorder['borderRadius'][this.props.deviceType]['right'] + "px",
                    borderBottomRightRadius: containerBorder['borderRadius'][this.props.deviceType]['bottom'] && containerBorder['borderRadius'][this.props.deviceType]['bottom'] + "px",
                    borderColor: containerBorder.borderColor,
                    paddingTop: containerPadding[this.props.deviceType]['top'] && containerPadding[this.props.deviceType]['top'] + containerPadding.unit,
                    paddingRight: containerPadding[this.props.deviceType]['right'] && containerPadding[this.props.deviceType]['right'] + containerPadding.unit,
                    paddingBottom: containerPadding[this.props.deviceType]['bottom'] && containerPadding[this.props.deviceType]['bottom'] + containerPadding.unit,
                    paddingLeft: containerPadding[this.props.deviceType]['left'] && containerPadding[this.props.deviceType]['left'] + containerPadding.unit,
                    marginTop: containerMargin[this.props.deviceType]['top'] && containerMargin[this.props.deviceType]['top'] + containerMargin.unit,
                    marginRight: containerMargin[this.props.deviceType]['right'] && containerMargin[this.props.deviceType]['right'] + containerMargin.unit,
                    marginBottom: containerMargin[this.props.deviceType]['bottom'] && containerMargin[this.props.deviceType]['bottom'] + containerMargin.unit,
                    marginLeft: containerMargin[this.props.deviceType]['left'] && containerMargin[this.props.deviceType]['left'] + containerMargin.unit,
                    ...gradientBackground(containerBackground),
                }}
            >
                {btnChecked && btnText && (
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-icon-box-${block_id}:hover {`,
                                `box-shadow: ${containerHoverShadow.horizontal}px ${containerHoverShadow.vertical}px ${containerHoverShadow.blur}px ${containerHoverShadow.color} ${containerHoverShadow.position} !important`,
                                "}",
                                `#premium-icon-box-${block_id} {`,
                                `box-shadow: ${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position} !important`,
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
                                            fontSize: (iconSize[this.props.deviceType] || 40) + iconSize.unit,
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
                                    width: (iconSize[this.props.deviceType] || 40) + iconSize.unit,
                                    height: (iconSize[this.props.deviceType] || 40) + iconSize.unit,
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
                                marginTop: titleMargin[this.props.deviceType]['top'] && titleMargin[this.props.deviceType]['top'] + titleMargin.unit,
                                marginRight: titleMargin[this.props.deviceType]['right'] && titleMargin[this.props.deviceType]['right'] + titleMargin.unit,
                                marginBottom: titleMargin[this.props.deviceType]['bottom'] && titleMargin[this.props.deviceType]['bottom'] + titleMargin.unit,
                                marginLeft: titleMargin[this.props.deviceType]['left'] && titleMargin[this.props.deviceType]['left'] + titleMargin.unit,
                            }}
                        >
                            <RichText
                                tagName={titleStyles[0].titleTag.toLowerCase()}
                                className={`premium-icon-box__title`}
                                onChange={newText => setAttributes({ titleText: newText })}
                                placeholder={__("Awesome Title")}
                                value={titleText}
                                style={{
                                    fontSize: `${titleTypography.fontSize[this.props.deviceType] || 20}${titleTypography.fontSize.unit}`,
                                    fontFamily: titleTypography.fontFamily,
                                    letterSpacing: titleTypography.letterSpacing + "px",
                                    textTransform: titleTypography.textTransform ? "uppercase" : "none",
                                    fontStyle: titleTypography.fontStyle,
                                    fontWeight: titleTypography.fontWeight,
                                    lineHeight: titleTypography.lineHeight + "px",
                                    color: titleStyles[0].titleColor,
                                    textShadow: `${titleShadow.horizontal || 0}px ${titleShadow.vertical ||
                                        0}px ${titleShadow.blur || 0}px ${titleShadow.color}`,
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div>
                    )}
                    {descChecked && descText && (
                        <div
                            className={`premium-icon-box__desc_wrap`}
                            style={{
                                marginTop: descMargin[this.props.deviceType]['top'] && descMargin[this.props.deviceType]['top'] + descMargin.unit,
                                marginRight: descMargin[this.props.deviceType]['right'] && descMargin[this.props.deviceType]['right'] + descMargin.unit,
                                marginBottom: descMargin[this.props.deviceType]['bottom'] && descMargin[this.props.deviceType]['bottom'] + descMargin.unit,
                                marginLeft: descMargin[this.props.deviceType]['left'] && descMargin[this.props.deviceType]['left'] + descMargin.unit,
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
                                    fontSize: `${descTypography.fontSize[this.props.deviceType] || 20}${descTypography.fontSize.unit}`,
                                    fontFamily: descTypography.fontFamily,
                                    fontWeight: descTypography.fontWeight,
                                    lineHeight: descTypography.lineHeight + "px"
                                }}
                                keepPlaceholderOnFocus
                            />
                        </div>
                    )}
                    {btnChecked && btnText && (
                        <div
                            className={`premium-icon-box__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
                            style={{
                                marginTop: btnMargin[this.props.deviceType]['top'] && btnMargin[this.props.deviceType]['top'] + btnMargin.unit,
                                marginRight: btnMargin[this.props.deviceType]['right'] && btnMargin[this.props.deviceType]['right'] + btnMargin.unit,
                                marginBottom: btnMargin[this.props.deviceType]['bottom'] && btnMargin[this.props.deviceType]['bottom'] + btnMargin.unit,
                                marginLeft: btnMargin[this.props.deviceType]['left'] && btnMargin[this.props.deviceType]['left'] + btnMargin.unit,
                            }}
                        >
                            <RichText
                                tagName="a"
                                className={`premium-icon-box__btn premium-button`}
                                onChange={newText => setAttributes({ btnText: newText })}
                                placeholder={__("Click Here")}
                                value={btnText}
                                style={{
                                    fontSize: `${btnTypography.fontSize[this.props.deviceType] || 20}${btnTypography.fontSize.unit}`,
                                    letterSpacing: btnTypography.letterSpacing + "px",
                                    textTransform: btnTypography.textTransform ? "uppercase" : "none",
                                    fontStyle: btnTypography.fontStyle,
                                    fontWeight: btnTypography.fontWeight,
                                    color: btnStyles[0].btnColor,
                                    backgroundColor: btnStyles[0].btnBack,
                                    borderStyle: btnBorder.borderType,
                                    borderTopWidth: btnBorder['borderWidth'][this.props.deviceType]['top'] && btnBorder['borderWidth'][this.props.deviceType]['top'] + "px",
                                    borderRightWidth: btnBorder['borderWidth'][this.props.deviceType]['right'] && btnBorder['borderWidth'][this.props.deviceType]['right'] + "px",
                                    borderBottomWidth: btnBorder['borderWidth'][this.props.deviceType]['bottom'] && btnBorder['borderWidth'][this.props.deviceType]['bottom'] + "px",
                                    borderLeftWidth: btnBorder['borderWidth'][this.props.deviceType]['left'] && btnBorder['borderWidth'][this.props.deviceType]['left'] + "px",
                                    borderBottomLeftRadius: btnBorder['borderRadius'][this.props.deviceType]['left'] && btnBorder['borderRadius'][this.props.deviceType]['left'] + "px",
                                    borderTopLeftRadius: btnBorder['borderRadius'][this.props.deviceType]['top'] && btnBorder['borderRadius'][this.props.deviceType]['top'] + "px",
                                    borderTopRightRadius: btnBorder['borderRadius'][this.props.deviceType]['right'] && btnBorder['borderRadius'][this.props.deviceType]['right'] + "px",
                                    borderBottomRightRadius: btnBorder['borderRadius'][this.props.deviceType]['bottom'] && btnBorder['borderRadius'][this.props.deviceType]['bottom'] + "px",
                                    borderColor: btnBorder.borderColor,
                                    paddingTop: btnPadding[this.props.deviceType]['top'] && btnPadding[this.props.deviceType]['top'] + btnPadding.unit,
                                    paddingRight: btnPadding[this.props.deviceType]['right'] && btnPadding[this.props.deviceType]['right'] + btnPadding.unit,
                                    paddingBottom: btnPadding[this.props.deviceType]['bottom'] && btnPadding[this.props.deviceType]['bottom'] + btnPadding.unit,
                                    paddingLeft: btnPadding[this.props.deviceType]['left'] && btnPadding[this.props.deviceType]['left'] + btnPadding.unit,
                                    boxShadow: `${btnShadow.horizontal || 0}px ${btnShadow.vertical ||
                                        0}px ${btnShadow.blur || 0}px ${btnShadow.color} ${btnShadow.position}`
                                }}
                                keepPlaceholderOnFocus
                            />
                            {/* {isSelected && (
                                <URLInput
                                    value={btnLink}
                                    onChange={newLink => setAttributes({ btnLink: newLink })}
                                />
                            )} */}
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