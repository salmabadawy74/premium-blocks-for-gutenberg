import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumShadow from "../../components/PremiumShadow";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import RadioComponent from '../../components/radio-control';
import Icons from "../../components/icons";
import MultiButtonsControl from '../../components/responsive-radio';
const { withSelect } = wp.data
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PanelBody, SelectControl, TextControl, ToggleControl, TabPanel } = wp.components;
const { BlockControls, InspectorControls, AlignmentToolbar, RichText, URLInput } = wp.blockEditor;
import { generateBlockId, generateCss, typographyCss, padddingCss, marginCss, borderCss } from "../../components/HelperFunction";
import SpacingComponent from '../../components/premium-responsive-spacing';
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';

class PremiumPricingTable extends Component {

    constructor() {
        super(...arguments)
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        // Assigning id in the attribute.
        if (!this.props.attributes.blockId) {
            setAttributes({ blockId: "premium-pricing-table-" + generateBlockId(clientId) });
        }
        setAttributes({ classMigrate: true });
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
        const { isSelected, setAttributes, className } = this.props;

        const {
            contentAlign,
            title,
            desc,
            titleChecked,
            descChecked,
            priceChecked,
            btnChecked,
            btnText,
            btnLink,
            badgeChecked,
            listChecked,
            listItems,
            blockId,
            hideDesktop,
            hideTablet,
            hideMobile,
            titleStyles,
            priceStyles,
            featureStyles,
            descStyles,
            buttonStyles,
            badgeStyles,
            tableStyles,
            titleTextShadow,
            tableBoxShadow,
            featureAlign,
            tableBorder,
            buttonBorder,
            tablePadding,
            titlePadding,
            titleMargin,
            pricePadding,
            priceMargin,
            featuresListPadding,
            featuresListMargin,
            descriptionPadding,
            descriptionMargin,
            buttonPadding,
            buttonMargin,
        } = this.props.attributes;

        const loadStyles = () => {
            const styles = {};

            styles[`.${blockId} .premium-pricing-table__button_link:hover`] = {
                'color': `${buttonStyles?.[0]?.btnHoverColor}!important`,
                'background': `${buttonStyles?.[0]?.btnHoverBack}!important`
            };

            return generateCss(styles);
        }

        const ALIGNS = [
            {
                value: "flex-start",
                label: __("Top", 'premium-blocks-for-gutenberg')
            },
            {
                value: "center",
                label: __("Middle", 'premium-blocks-for-gutenberg')
            },
            {
                value: "flex-end",
                label: __("Bottom", 'premium-blocks-for-gutenberg')
            }
        ];

        const PRICE = [
            {
                value: "slash",
                label: __("Slashed Price", 'premium-blocks-for-gutenberg')
            },
            {
                value: "curr",
                label: __("Currency", 'premium-blocks-for-gutenberg')
            },
            {
                value: "price",
                label: __("Price", 'premium-blocks-for-gutenberg')
            },
            {
                value: "divider",
                label: __("Divider", 'premium-blocks-for-gutenberg')
            },
            {
                value: "duration",
                label: __("Duration", 'premium-blocks-for-gutenberg')
            }
        ];

        const TYPE = [
            {
                value: "none",
                label: __("None", 'premium-blocks-for-gutenberg')
            },
            {
                value: "check",
                label: __("Check Mark", 'premium-blocks-for-gutenberg')
            },
            {
                value: "disc",
                label: __("Filled Circle", 'premium-blocks-for-gutenberg')
            },
            {
                value: "circle",
                label: __("Outline Circle", 'premium-blocks-for-gutenberg')
            },
            {
                value: "square",
                label: __("Square", 'premium-blocks-for-gutenberg')
            }
        ];

        const POSITION = [
            {
                value: "right",
                label: __("Right", 'premium-blocks-for-gutenberg')
            },
            {
                value: "left",
                label: __("Left", 'premium-blocks-for-gutenberg')
            }
        ];

        const saveTitleStyles = (value) => {
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
        const savePriceStyles = (value) => {
            const newUpdate = priceStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ priceStyles: newUpdate });
        }

        const saveFeatureStyle = (value) => {
            const newUpdate = featureStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ featureStyles: newUpdate });
        }

        const saveButtonStyle = (value) => {
            const newUpdate = buttonStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ buttonStyles: newUpdate });
        }

        const saveBadgeStyles = (value) => {
            const newUpdate = badgeStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ badgeStyles: newUpdate });
        }

        const saveTableStyles = (value) => {
            const newUpdate = tableStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ tableStyles: newUpdate });
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

        const titleFontSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titleSizeTablet, titleStyles[0].titleSizeMobile);
        const slashFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].slashSize, priceStyles[0].slashSizeTablet, priceStyles[0].slashSizeMobile);
        const currFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].currSize, priceStyles[0].currSizeTablet, priceStyles[0].currSizeMobile);
        const valFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].valSize, priceStyles[0].valSizeTablet, priceStyles[0].valSizeMobile);
        const divFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].divSize, priceStyles[0].divSizeTablet, priceStyles[0].divSizeMobile);
        const cFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].durSize, priceStyles[0].durSizeTablet, priceStyles[0].durSizeMobile);
        const listFontSize = this.getPreviewSize(this.props.deviceType, featureStyles[0].listSize, featureStyles[0].listSizeTablet, featureStyles[0].listSizeMobile);
        const descFontSize = this.getPreviewSize(this.props.deviceType, descStyles[0].descSize, descStyles[0].descSizeTablet, descStyles[0].descSizeMobile);
        const btnFontSize = this.getPreviewSize(this.props.deviceType, buttonStyles[0].btnSize, buttonStyles[0].btnSizeTablet, buttonStyles[0].btnSizeMobile);
        const badgeFontSize = this.getPreviewSize(this.props.deviceType, badgeStyles[0].badgeTextSize, badgeStyles[0].badgeSizeTablet, badgeStyles[0].badgeSizeMobile);

        const mainClasses = classnames(className, "premium-pricing-table");

        return [
            isSelected && (
                <BlockControls key="controls">
                    <AlignmentToolbar
                        value={contentAlign}
                        onChange={newAlign => setAttributes({ contentAlign: newAlign })}
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
                                initialOpen={false}
                            >
                                <ToggleControl
                                    label={__("Title", 'premium-blocks-for-gutenberg')}
                                    checked={titleChecked}
                                    onChange={newValue => setAttributes({ titleChecked: newValue })}
                                />
                                <ToggleControl
                                    label={__("Price", 'premium-blocks-for-gutenberg')}
                                    checked={priceChecked}
                                    onChange={newValue => setAttributes({ priceChecked: newValue })}
                                />
                                <ToggleControl
                                    label={__("Features", 'premium-blocks-for-gutenberg')}
                                    checked={listChecked}
                                    onChange={newValue => setAttributes({ listChecked: newValue })}
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
                                <ToggleControl
                                    label={__("Badge", 'premium-blocks-for-gutenberg')}
                                    checked={badgeChecked}
                                    onChange={newValue => setAttributes({ badgeChecked: newValue })}
                                />
                            </PanelBody>
                            {titleChecked && (
                                <PanelBody
                                    title={__("Title", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <RadioComponent
                                        label={__("Heading", 'premium-blocks-for-gutenberg')}
                                        choices={[{ label: __('H1'), value: 'h1' }, { label: __('H2'), value: 'h2' }, { label: __('H3'), value: 'h3' }, { label: __('H4'), value: 'h4' }, { label: __('H5'), value: 'h5' }, { label: __('H6'), value: 'h6' }]}
                                        value={titleStyles[0].titleTag}
                                        onChange={newValue => saveTitleStyles({ titleTag: newValue })}
                                    />
                                </PanelBody>
                            )}
                            {priceChecked && (
                                <PanelBody
                                    title={__("Price", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <TextControl
                                        label={__("Slashed Price", 'premium-blocks-for-gutenberg')}
                                        value={priceStyles[0].slashPrice}
                                        onChange={value => savePriceStyles({ slashPrice: value })}
                                    />
                                    <TextControl
                                        label={__("Currency", 'premium-blocks-for-gutenberg')}
                                        value={priceStyles[0].currPrice}
                                        onChange={value => savePriceStyles({ currPrice: value })}
                                    />
                                    <TextControl
                                        label={__("Price", 'premium-blocks-for-gutenberg')}
                                        value={priceStyles[0].valPrice}
                                        onChange={value => savePriceStyles({ valPrice: value })}
                                    />
                                    <TextControl
                                        label={__("Divider", 'premium-blocks-for-gutenberg')}
                                        value={priceStyles[0].divPrice}
                                        onChange={value => savePriceStyles({ divPrice: value })}
                                    />
                                    <TextControl
                                        label={__("Duration", 'premium-blocks-for-gutenberg')}
                                        value={priceStyles[0].durPrice}
                                        onChange={value => savePriceStyles({ durPrice: value })}
                                    />
                                </PanelBody>
                            )}
                            {listChecked && (
                                <PanelBody
                                    title={__("Features List", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <MultiButtonsControl
                                        choices={[{ value: 'left', label: __('Left'), icon: Icons.alignLeft }, { value: 'center', label: __('Center'), icon: Icons.alignCenter }, { value: 'right', label: __('Right'), icon: Icons.alignRight }]}
                                        value={featureAlign}
                                        onChange={(align) => setAttributes({ featureAlign: align })}
                                        label={__("Align", "premium-blocks-for-gutenberg")}
                                        showIcons={true} />
                                </PanelBody>
                            )}
                            {btnChecked && (
                                <PanelBody
                                    title={__("Button", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <ToggleControl
                                        label={__("Open Link in a new tab", 'premium-blocks-for-gutenberg')}
                                        checked={buttonStyles[0].btnTarget}
                                        onChange={newValue => saveButtonStyle({ btnTarget: newValue })}
                                    />
                                </PanelBody>
                            )}
                            {badgeChecked && (
                                <PanelBody
                                    title={__("Badge", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <ResponsiveSingleRangeControl
                                        label={__("Text Width", 'premium-blocks-for-gutenberg')}
                                        min="1"
                                        max="200"
                                        value={badgeStyles[0].badgeWidth}
                                        onChange={newValue => saveBadgeStyles({ badgeWidth: newValue })}
                                        showUnit={false}
                                        defaultValue={0}
                                    />
                                    <ResponsiveSingleRangeControl
                                        label={__("Badge Size", 'premium-blocks-for-gutenberg')}
                                        value={badgeStyles[0].badgeSize}
                                        min="0"
                                        max="250"
                                        onChange={newValue => saveBadgeStyles({ badgeSize: newValue })}
                                        showUnit={false}
                                        defaultValue={0}
                                    />
                                    <SelectControl
                                        label={__("Position", 'premium-blocks-for-gutenberg')}
                                        options={POSITION}
                                        value={badgeStyles[0].badgePos}
                                        onChange={newValue => saveBadgeStyles({ badgePos: newValue })}
                                    />
                                    <ResponsiveSingleRangeControl
                                        label={__("Vertical Offset", 'premium-blocks-for-gutenberg')}
                                        value={badgeStyles[0].badgeTop}
                                        onChange={newValue => saveBadgeStyles({ badgeTop: newValue })}
                                        showUnit={false}
                                        defaultValue={0}
                                    />
                                    <ResponsiveSingleRangeControl
                                        label={__("Horizontal Offset", 'premium-blocks-for-gutenberg')}
                                        value={badgeStyles[0].badgeHorizontal}
                                        min="1"
                                        max="150"
                                        onChange={newValue => saveBadgeStyles({ badgeHorizontal: newValue })}
                                        showUnit={false}
                                        defaultValue={1}
                                    />
                                </PanelBody>
                            )}
                        </InspectorTab>
                        <InspectorTab key={'style'}>
                            <PanelBody
                                title={__("Table", 'premium-blocks-for-gutenberg')}
                                className="premium-panel-body"
                                initialOpen={false}
                            >
                                <AdvancedPopColorControl
                                    label={__(`Background Color`)}
                                    colorValue={tableStyles[0].tableBack}
                                    onColorChange={(newvalue) => saveTableStyles({ tableBack: newvalue })}
                                    colorDefault={``}
                                />
                                <hr />
                                <PremiumShadow
                                    label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
                                    boxShadow={true}
                                    value={tableBoxShadow}
                                    onChange={(value) => setAttributes({ tableBoxShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border")}
                                    value={tableBorder}
                                    onChange={(value) => setAttributes({ tableBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={tablePadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ tablePadding: value })} />
                            </PanelBody>
                            {titleChecked && (
                                <PanelBody
                                    title={__("Title", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    {/* <PremiumTypo
                                components={[
                                    "responsiveSize",
                                    "weight",
                                    "style",
                                    "upper",
                                    "spacing",
                                    "line",
                                ]}
                                setAttributes={saveTitleStyles}
                                fontSizeType={{
                                    value: titleStyles[0].titleSizeUnit,
                                    label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={titleStyles[0].titleSize}
                                fontSizeMobile={titleStyles[0].titleSizeMobile}
                                fontSizeTablet={titleStyles[0].titleSizeTablet}
                                onChangeSize={newSize => saveTitleStyles({ titleSize: newSize })}
                                onChangeTabletSize={newSize => saveTitleStyles({ titleSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveTitleStyles({ titleSizeMobile: newSize })}
                                weight={titleStyles[0].titleWeight}
                                style={titleStyles[0].titleStyle}
                                spacing={titleStyles[0].titleLetter}
                                line={titleStyles[0].titleLine}
                                upper={titleStyles[0].titleUpper}
                                onChangeWeight={newWeight => saveTitleStyles({ titleWeight: newWeight })}
                                onChangeStyle={newStyle => saveTitleStyles({ titleStyle: newStyle })}
                                onChangeSpacing={newValue => saveTitleStyles({ titleLetter: newValue })}
                                onChangeLine={newValue => saveTitleStyles({ titleLine: newValue })}
                                onChangeUpper={check => saveTitleStyles({ titleUpper: check })}
                            /> */}
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={titleStyles[0].titleColor}
                                        colorDefault={''}
                                        onColorChange={newColor => saveTitleStyles({ titleColor: newColor })
                                        }
                                    />
                                    <AdvancedPopColorControl
                                        label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={titleStyles[0].titleBack}
                                        colorDefault={''}
                                        onColorChange={newColor => saveTitleStyles({ titleBack: newColor })}
                                    />
                                    <hr />
                                    <PremiumShadow
                                        label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                        boxShadow={false}
                                        value={titleTextShadow}
                                        onChange={(value) => setAttributes({ titleTextShadow: value })}
                                    />
                                    <hr />
                                    <SpacingComponent value={titleMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ titleMargin: value })} />
                                    <SpacingComponent value={titlePadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ titlePadding: value })} />
                                </PanelBody>
                            )}
                            {priceChecked && (
                                <PanelBody
                                    title={__("Price", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <SelectControl
                                        label={__("Element", 'premium-blocks-for-gutenberg')}
                                        options={PRICE}
                                        value={priceStyles[0].selectedStyle}
                                        onChange={newElem => savePriceStyles({ selectedStyle: newElem })}
                                    />
                                    <hr />
                                    {"slash" === priceStyles[0].selectedStyle && (
                                        <Fragment>
                                            {/* <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].slashSizeUnit,
                                                label: __("slashSizeUnit", 'premium-blocks-for-gutenberg'),
                                            }}
                                            fontSize={priceStyles[0].slashSize}
                                            fontSizeMobile={priceStyles[0].slashSizeMobile}
                                            fontSizeTablet={priceStyles[0].slashSizeTablet}
                                            weight={priceStyles[0].slashWeight}
                                            onChangeWeight={newWeight => savePriceStyles({ slashWeight: newWeight })}
                                            onChangeSize={newSize => savePriceStyles({ slashSize: newSize })}
                                            onChangeTabletSize={newSize => savePriceStyles({ slashSizeTablet: newSize })}
                                            onChangeMobileSize={newSize => savePriceStyles({ slashSizeMobile: newSize })}
                                        /> */}
                                            <SelectControl
                                                label={__("Vertical Align", 'premium-blocks-for-gutenberg')}
                                                options={ALIGNS}
                                                value={priceStyles[0].slashV}
                                                onChange={newValue => savePriceStyles({ slashV: newValue })}
                                            />
                                            <MultiButtonsControl
                                                choices={ALIGNS}
                                                value={featureAlign}
                                                onChange={(align) => setAttributes({ featureAlign: align })}
                                                label={__("Align", "premium-blocks-for-gutenberg")}
                                                showIcons={false} />
                                            <hr />
                                            <AdvancedPopColorControl
                                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={priceStyles[0].slashColor}
                                                colorDefault={''}
                                                onColorChange={newValue => savePriceStyles({ slashColor: newValue === undefined ? "transparent" : newValue })}
                                            />
                                        </Fragment>
                                    )}
                                    {"curr" === priceStyles[0].selectedStyle && (
                                        <Fragment>
                                            {/* <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].currSizeUnit,
                                                label: __("currSizeUnit", 'premium-blocks-for-gutenberg'),
                                            }}
                                            fontSize={priceStyles[0].currSize}
                                            fontSizeMobile={priceStyles[0].currSizeMobile}
                                            fontSizeTablet={priceStyles[0].currSizeTablet}
                                            onChangeSize={newSize => savePriceStyles({ currSize: newSize })}
                                            onChangeTabletSize={newSize => savePriceStyles({ currSizeTablet: newSize })}
                                            onChangeMobileSize={newSize => savePriceStyles({ currSizeMobile: newSize })}
                                            weight={priceStyles[0].currWeight}
                                            onChangeWeight={newWeight => savePriceStyles({ currWeight: newWeight, })}
                                        /> */}
                                            <SelectControl
                                                label={__("Vertical Align", 'premium-blocks-for-gutenberg')}
                                                options={ALIGNS}
                                                value={priceStyles[0].currV}
                                                onChange={newValue => savePriceStyles({ currV: newValue, })}
                                            />
                                            <hr />
                                            <AdvancedPopColorControl
                                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={priceStyles[0].currColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    savePriceStyles({
                                                        currColor:
                                                            newValue ===
                                                                undefined
                                                                ? "transparent"
                                                                : newValue,
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                    {"price" === priceStyles[0].selectedStyle && (
                                        <Fragment>
                                            {/* <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].valSizeUnit,
                                                label: __("valSizeUnit", 'premium-blocks-for-gutenberg'),
                                            }}
                                            fontSize={priceStyles[0].valSize}
                                            fontSizeMobile={priceStyles[0].valSizeMobile}
                                            fontSizeTablet={priceStyles[0].valSizeTablet}
                                            size={priceStyles[0].valSize}
                                            weight={priceStyles[0].valWeight}
                                            onChangeWeight={newWeight => savePriceStyles({ valWeight: newWeight })}
                                            onChangeSize={newSize => savePriceStyles({ valSize: newSize })}
                                            onChangeTabletSize={newSize => savePriceStyles({ valSizeTablet: newSize })}
                                            onChangeMobileSize={newSize => savePriceStyles({ valSizeMobile: newSize })}
                                        /> */}
                                            <SelectControl
                                                label={__("Vertical Align", 'premium-blocks-for-gutenberg')}
                                                options={ALIGNS}
                                                value={priceStyles[0].valV}
                                                onChange={newValue => savePriceStyles({ valV: newValue })}
                                            />
                                            <hr />
                                            <AdvancedPopColorControl
                                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={priceStyles[0].valColor}
                                                colorDefault={''}
                                                onColorChange={newValue =>
                                                    savePriceStyles({
                                                        valColor:
                                                            newValue === undefined ? "transparent" : newValue
                                                    })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                    {"divider" === priceStyles[0].selectedStyle && (
                                        <Fragment>
                                            {/* <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].divSizeUnit,
                                                label: __("divSizeUnit", 'premium-blocks-for-gutenberg'),
                                            }}
                                            fontSize={priceStyles[0].divSize}
                                            fontSizeMobile={priceStyles[0].divSizeMobile}
                                            fontSizeTablet={priceStyles[0].divSizeTablet}
                                            weight={priceStyles[0].divWeight}
                                            onChangeWeight={newWeight => savePriceStyles({ divWeight: newWeight })}
                                            onChangeSize={newSize => savePriceStyles({ divSize: newSize })}
                                            onChangeTabletSize={newSize => savePriceStyles({ divSizeTablet: newSize })}
                                            onChangeMobileSize={newSize => savePriceStyles({ divSizeMobile: newSize })}
                                        /> */}
                                            <SelectControl
                                                label={__("Vertical Align", 'premium-blocks-for-gutenberg')}
                                                options={ALIGNS}
                                                value={priceStyles[0].divV}
                                                onChange={newValue => savePriceStyles({ divV: newValue })}
                                            />
                                            <hr />
                                            <AdvancedPopColorControl
                                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={priceStyles[0].divColor}
                                                colorDefault={''}
                                                onColorChange={newValue => savePriceStyles({ divColor: newValue === undefined ? "transparent" : newValue })}
                                            />
                                        </Fragment>
                                    )}
                                    {"duration" === priceStyles[0].selectedStyle && (
                                        <Fragment>
                                            {/* <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].durSizeUnit,
                                                label: __("durSizeUnit", 'premium-blocks-for-gutenberg'),
                                            }}
                                            fontSize={priceStyles[0].durSize}
                                            fontSizeMobile={priceStyles[0].durSizeMobile}
                                            fontSizeTablet={priceStyles[0].durSizeTablet}
                                            weight={priceStyles[0].durWeight}
                                            onChangeWeight={newWeight => savePriceStyles({ durWeight: newWeight })}
                                            onChangeSize={newSize => savePriceStyles({ durSize: newSize })}
                                            onChangeTabletSize={newSize => savePriceStyles({ durSizeTablet: newSize })}
                                            onChangeMobileSize={newSize => savePriceStyles({ durSizeMobile: newSize })}
                                        /> */}
                                            <SelectControl
                                                label={__("Vertical Align", 'premium-blocks-for-gutenberg')}
                                                options={ALIGNS}
                                                value={priceStyles[0].durV}
                                                onChange={newValue => savePriceStyles({ durV: newValue })}
                                            />
                                            <hr />
                                            <AdvancedPopColorControl
                                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={priceStyles[0].durColor}
                                                colorDefault={''}
                                                onColorChange={newValue => savePriceStyles({ durColor: newValue === undefined ? "transparent" : newValue })}
                                            />
                                        </Fragment>
                                    )}
                                    <AdvancedPopColorControl
                                        label={__(`Background Color`)}
                                        colorValue={priceStyles[0].priceBack}
                                        onColorChange={(newvalue) => savePriceStyles({ priceBack: newvalue, })}
                                        colorDefault={``}
                                    />
                                    <hr />
                                    <SpacingComponent value={priceMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ priceMargin: value })} />
                                    <SpacingComponent value={pricePadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ pricePadding: value })} />
                                </PanelBody>
                            )}
                            {listChecked && (
                                <PanelBody
                                    title={__("Features List", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <SelectControl
                                        label={__("List Style", 'premium-blocks-for-gutenberg')}
                                        options={TYPE}
                                        value={featureStyles[0].listStyle}
                                        onChange={newType => saveFeatureStyle({ listStyle: newType })}
                                    />
                                    {/* <PremiumTypo
                                components={[
                                    "responsiveSize",
                                    "weight",
                                    "style",
                                    "upper",
                                    "spacing",
                                    "line",
                                ]}
                                setAttributes={saveFeatureStyle}
                                fontSizeType={{
                                    value: featureStyles[0].listSizeUnit,
                                    label: __("listSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={featureStyles[0].listSize}
                                fontSizeMobile={featureStyles[0].listSizeMobile}
                                fontSizeTablet={featureStyles[0].listSizeTablet}
                                weight={featureStyles[0].listWeight}
                                style={featureStyles[0].listItemsStyle}
                                spacing={featureStyles[0].listLetter}
                                line={featureStyles[0].listLine}
                                upper={featureStyles[0].listUpper}
                                onChangeWeight={newWeight => saveFeatureStyle({ listWeight: newWeight })}
                                onChangeStyle={newStyle => saveFeatureStyle({ listItemsStyle: newStyle })}
                                onChangeSpacing={newValue => saveFeatureStyle({ listLetter: newValue })}
                                onChangeLine={newValue => saveFeatureStyle({ listLine: newValue })}
                                onChangeUpper={check => saveFeatureStyle({ listUpper: check })}
                                onChangeSize={newSize => saveFeatureStyle({ listSize: newSize })}
                                onChangeTabletSize={newSize => saveFeatureStyle({ listSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveFeatureStyle({ listSizeMobile: newSize })}
                            /> */}
                                    <AdvancedPopColorControl
                                        label={__("List Items Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={featureStyles[0].listColor}
                                        colorDefault={''}
                                        onColorChange={newColor => saveFeatureStyle({ listColor: newColor })}
                                    />
                                    <AdvancedPopColorControl
                                        label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={featureStyles[0].listBack}
                                        colorDefault={''}
                                        onColorChange={newColor => saveFeatureStyle({ listBack: newColor })}
                                    />
                                    <hr />
                                    <SpacingComponent value={featuresListMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ featuresListMargin: value })} />
                                    <SpacingComponent value={featuresListPadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ featuresListPadding: value })} />
                                </PanelBody>
                            )}
                            {descChecked && (
                                <PanelBody
                                    title={__("Description", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    {/* <PremiumTypo
                                components={["responsiveSize", "weight", "style", "spacing", "line"]}
                                setAttributes={saveDescriptionStyle}
                                fontSizeType={{
                                    value: descStyles[0].descSizeUnit,
                                    label: __("descSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={descStyles[0].descSize}
                                fontSizeMobile={descStyles[0].descSizeMobile}
                                fontSizeTablet={descStyles[0].descSizeTablet}
                                size={descStyles[0].descSize}
                                weight={descStyles[0].descWeight}
                                style={descStyles[0].descStyle}
                                spacing={descStyles[0].descLetter}
                                line={descStyles[0].descLine}
                                onChangeWeight={newWeight => saveDescriptionStyle({ descWeight: newWeight })}
                                onChangeStyle={newStyle => saveDescriptionStyle({ descStyle: newStyle })}
                                onChangeSpacing={newValue => saveDescriptionStyle({ descLetter: newValue })}
                                onChangeLine={newValue => saveDescriptionStyle({ descLine: newValue })}
                                onChangeSize={newSize => saveDescriptionStyle({ descSize: newSize })}
                                onChangeTabletSize={newSize => saveDescriptionStyle({ descSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveDescriptionStyle({ descSizeMobile: newSize })}
                            /> */}
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={descStyles[0].descColor}
                                        colorDefault={''}
                                        onColorChange={newColor => saveDescriptionStyle({ descColor: newColor })}
                                    />
                                    <AdvancedPopColorControl
                                        label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={descStyles[0].descBack}
                                        colorDefault={''}
                                        onColorChange={newColor => saveDescriptionStyle({ descBack: newColor })}
                                    />
                                    <hr />
                                    <SpacingComponent value={descriptionMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ descriptionMargin: value })} />
                                    <SpacingComponent value={descriptionPadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ descriptionPadding: value })} />
                                </PanelBody>
                            )}
                            {btnChecked && (
                                <PanelBody
                                    title={__("Button", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    {/* <PremiumTypo
                                components={[
                                    "responsiveSize",
                                    "weight",
                                    "style",
                                    "upper",
                                    "spacing",
                                    "line",
                                ]}
                                setAttributes={saveButtonStyle}
                                fontSizeType={{
                                    value: buttonStyles[0].btnSizeUnit,
                                    label: __("btnSizeUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={buttonStyles[0].btnSize}
                                fontSizeMobile={buttonStyles[0].btnSizeMobile}
                                fontSizeTablet={buttonStyles[0].btnSizeTablet}
                                weight={buttonStyles[0].btnWeight}
                                style={buttonStyles[0].btnStyle}
                                spacing={buttonStyles[0].btnLetter}
                                line={buttonStyles[0].btnLine}
                                upper={buttonStyles[0].btnUpper}
                                onChangeWeight={newWeight => saveButtonStyle({ btnWeight: newWeight })}
                                onChangeStyle={newStyle => saveButtonStyle({ btnStyle: newStyle })}
                                onChangeSpacing={newValue => saveButtonStyle({ btnLetter: newValue })}
                                onChangeLine={newValue => saveButtonStyle({ btnLine: newValue })}
                                onChangeUpper={check => saveButtonStyle({ btnUpper: check })}
                                onChangeSize={newSize => saveButtonStyle({ btnSize: newSize })}
                                onChangeTabletSize={newSize => saveButtonStyle({ btnSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveButtonStyle({ btnSizeMobile: newSize })}
                            /> */}
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
                                                    <div className="premium-control-toggle">
                                                        <AdvancedPopColorControl
                                                            label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                            colorValue={buttonStyles[0].btnColor}
                                                            colorDefault={''}
                                                            onColorChange={newColor => saveButtonStyle({ btnColor: newColor })
                                                            }
                                                        />
                                                        <AdvancedPopColorControl
                                                            label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                                            colorValue={buttonStyles[0].btnBack}
                                                            colorDefault={''}
                                                            onColorChange={newColor => saveButtonStyle({ btnBack: newColor })}
                                                        />
                                                    </div>
                                                );
                                            }
                                            if ("hover" === tab.name) {
                                                tabout = (
                                                    <div className="premium-control-toggle">
                                                        <AdvancedPopColorControl
                                                            label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                            colorValue={buttonStyles[0].btnHoverColor}
                                                            colorDefault={''}
                                                            onColorChange={newColor => saveButtonStyle({ btnHoverColor: newColor })}
                                                        />
                                                        <AdvancedPopColorControl
                                                            label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                                            colorValue={buttonStyles[0].btnHoverBack}
                                                            colorDefault={''}
                                                            onColorChange={newColor => saveButtonStyle({ btnHoverBack: newColor })}
                                                        />
                                                    </div>
                                                );
                                            }
                                            return (
                                                <div>
                                                    {tabout}
                                                </div>
                                            );
                                        }}
                                    </TabPanel>
                                    <hr />
                                    <ResponsiveSingleRangeControl
                                        label={__("Width (%)", 'premium-blocks-for-gutenberg')}
                                        value={buttonStyles[0].btnWidth}
                                        onChange={newSize => saveButtonStyle({ btnWidth: newSize })}
                                        showUnit={false}
                                        defaultValue={0}
                                    />
                                    <hr />
                                    <PremiumBorder
                                        label={__("Border")}
                                        value={buttonBorder}
                                        onChange={(value) => setAttributes({ buttonBorder: value })}
                                    />
                                    <hr />
                                    <SpacingComponent value={buttonMargin} responsive={true} showUnits={true} label={__("Margin")} onChange={(value) => setAttributes({ buttonMargin: value })} />
                                    <SpacingComponent value={buttonPadding} responsive={true} showUnits={true} label={__("Padding")} onChange={(value) => setAttributes({ buttonPadding: value })} />
                                </PanelBody>
                            )}
                            {badgeChecked && (
                                <PanelBody
                                    title={__("Badge", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    {/* <PremiumTypo
                                components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                setAttributes={saveBadgeStyles}
                                fontSizeType={{
                                    value: badgeStyles[0].badgeTextUnit,
                                    label: __("badgeTextUnit", 'premium-blocks-for-gutenberg'),
                                }}
                                fontSize={badgeStyles[0].badgeTextSize}
                                fontSizeMobile={badgeStyles[0].badgeSizeMobile}
                                fontSizeTablet={badgeStyles[0].badgeSizeTablet}
                                weight={badgeStyles[0].badgeWeight}
                                style={badgeStyles[0].badgeStyle}
                                spacing={badgeStyles[0].badgeLetter}
                                upper={badgeStyles[0].badgeUpper}
                                onChangeWeight={newWeight => saveBadgeStyles({ badgeWeight: newWeight })}
                                onChangeStyle={newStyle => saveBadgeStyles({ badgeStyle: newStyle })}
                                onChangeSpacing={newValue => saveBadgeStyles({ badgeLetter: newValue })}
                                onChangeUpper={check => saveBadgeStyles({ badgeUpper: check })}
                                onChangeSize={newSize => saveBadgeStyles({ badgeTextSize: newSize })}
                                onChangeTabletSize={newSize => saveBadgeStyles({ badgeSizeTablet: newSize })}
                                onChangeMobileSize={newSize => saveBadgeStyles({ badgeSizeMobile: newSize })}
                            /> */}
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={badgeStyles[0].badgeColor}
                                        colorDefault={''}
                                        onColorChange={newColor => saveBadgeStyles({ badgeColor: newColor })}
                                    />
                                    <AdvancedPopColorControl
                                        label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={badgeStyles[0].badgeBack}
                                        colorDefault={''}
                                        onColorChange={newColor => saveBadgeStyles({ badgeBack: newColor })}
                                    />
                                </PanelBody>
                            )}
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
                id={`premium-pricing-table-${blockId}`}
                className={`${mainClasses} ${blockId} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    textAlign: contentAlign,
                    backgroundColor: tableStyles[0].tableBack,
                    boxShadow: `${tableBoxShadow.horizontal}px ${tableBoxShadow.vertical}px ${tableBoxShadow.blur}px ${tableBoxShadow.color} ${tableBoxShadow.position}`,
                    ...borderCss(tableBorder, this.props.deviceType),
                    ...padddingCss(tablePadding, this.props.deviceType)
                }}
            >
                {badgeChecked && (
                    <div
                        className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgeStyles[0].badgePos}`}
                    >
                        <div
                            className={`premium-pricing-table__badge`}
                            style={{
                                borderRightColor:
                                    "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                                borderTopColor: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeBack : "transparent",
                                borderBottomWidth: badgeStyles[0].badgeSize + "px",
                                borderRightWidth: badgeStyles[0].badgeSize + "px",
                                borderTopWidth: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : "none",
                                borderLeftWidth: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeSize + "px" : "none"
                            }}
                        >
                            <RichText
                                tagName='span'
                                onChange={newText => saveBadgeStyles({ badgeText: newText })}
                                placeholder={__("Popular", 'premium-blocks-for-gutenberg')}
                                value={badgeStyles[0].badgeText}
                                style={{
                                    fontSize: badgeFontSize + badgeStyles[0].badgeTextUnit, color: badgeStyles[0].badgeColor,
                                    fontWeight: badgeStyles[0].badgeWeight,
                                    textTransform: badgeStyles[0].badgeUpper ? "uppercase" : "none",
                                    letterSpacing: badgeStyles[0].badgeLetter + "px",
                                    fontStyle: badgeStyles[0].badgeStyle,
                                    width: badgeStyles[0].badgeWidth + "px",
                                    top: badgeStyles[0].badgeTop + "px",
                                    left: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                    right: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto"
                                }}
                            />
                        </div>
                    </div>
                )}
                {titleChecked && (
                    <div
                        className={`premium-pricing-table__title_wrap`}
                        style={{
                            background: titleStyles[0].titleBack,
                            ...marginCss(titleMargin, this.props.deviceType)
                        }}
                    >
                        <RichText
                            tagName={titleStyles[0].titleTag.toLowerCase()}
                            className={`premium-pricing-table__title`}
                            onChange={newText => setAttributes({ title: newText })}
                            placeholder={__("Awesome Title", 'premium-blocks-for-gutenberg')}
                            value={title}
                            style={{
                                fontSize: `${titleFontSize}${titleStyles[0].titleSizeUnit}`,
                                color: titleStyles[0].titleColor,
                                letterSpacing: titleStyles[0].titleLetter + "px",
                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                fontStyle: titleStyles[0].titleStyle,
                                fontWeight: titleStyles[0].titleWeight,
                                lineHeight: titleStyles[0].titleLine + "px",
                                textShadow: `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`,
                                ...padddingCss(titlePadding, this.props.deviceType)
                            }}
                        />
                    </div>
                )}
                {priceChecked && (
                    <div
                        className={`premium-pricing-table__price_wrap`}
                        style={{
                            backgroundColor: priceStyles[0].priceBack,
                            justifyContent: contentAlign,
                            ...marginCss(priceMargin, this.props.deviceType),
                            ...padddingCss(pricePadding, this.props.deviceType)
                        }}
                    >
                        {priceStyles[0].slashPrice && (
                            <strike
                                className={`premium-pricing-table__slash`}
                                style={{
                                    fontSize: `${slashFontSize}${priceStyles[0].slashSizeUnit}`,
                                    color: priceStyles[0].slashColor,
                                    fontWeight: priceStyles[0].slashWeight,
                                    alignSelf: priceStyles[0].slashV
                                }}
                            >
                                {priceStyles[0].slashPrice}
                            </strike>
                        )}
                        {priceStyles[0].currPrice && (
                            <span
                                className={`premium-pricing-table__currency`}
                                style={{
                                    fontSize: `${currFontSize}${priceStyles[0].currSizeUnit}`,
                                    color: priceStyles[0].currColor,
                                    fontWeight: priceStyles[0].currWeight,
                                    alignSelf: priceStyles[0].currV
                                }}
                            >
                                {priceStyles[0].currPrice}
                            </span>
                        )}
                        {priceStyles[0].valPrice && (
                            <span
                                className={`premium-pricing-table__val`}
                                style={{
                                    fontSize: `${valFontSize}${priceStyles[0].valSizeUnit}`,
                                    color: priceStyles[0].valColor,
                                    fontWeight: priceStyles[0].valWeight,
                                    alignSelf: priceStyles[0].valV
                                }}
                            >
                                {priceStyles[0].valPrice}
                            </span>
                        )}
                        {priceStyles[0].divPrice && (
                            <span
                                className={`premium-pricing-table__divider`}
                                style={{
                                    fontSize: `${divFontSize}${priceStyles[0].divSizeUnit}`,
                                    color: priceStyles[0].divColor,
                                    fontWeight: priceStyles[0].divWeight,
                                    alignSelf: priceStyles[0].divV
                                }}
                            >
                                {priceStyles[0].divPrice}
                            </span>
                        )}
                        {priceStyles[0].durPrice && (
                            <span
                                className={`premium-pricing-table__dur`}
                                style={{
                                    fontSize: `${cFontSize}${priceStyles[0].durSizeUnit}`,
                                    color: priceStyles[0].durColor,
                                    fontWeight: priceStyles[0].durWeight,
                                    alignSelf: priceStyles[0].durV
                                }}
                            >
                                {priceStyles[0].durPrice}
                            </span>
                        )}
                    </div>
                )}
                {listChecked && (
                    <div
                        className={`premium-pricing-table__list_wrap`}
                        style={{
                            ...marginCss(featuresListMargin, this.props.deviceType),
                        }}
                    >
                        <RichText
                            tagName="ul"
                            className={`premium-pricing-table__list list-${featureStyles[0].listStyle}`}
                            multiline="li"
                            placeholder={__("List Item #1")}
                            value={listItems}
                            onChange={newText => setAttributes({ listItems: newText })}
                            style={{
                                fontSize: `${listFontSize}${featureStyles[0].listSizeUnit}`,
                                color: featureStyles[0].listColor,
                                background: featureStyles[0].listBack,
                                listStyle: "check" !== featureStyles[0].listStyle ? featureStyles[0].listStyle : "none",
                                listStylePosition: "inside",
                                fontWeight: featureStyles[0].listWeight,
                                textTransform: featureStyles[0].listUpper ? "uppercase" : "none",
                                letterSpacing: featureStyles[0].listLetter + "px",
                                fontStyle: featureStyles[0].listItemsStyle,
                                lineHeight: featureStyles[0].listLine + "px",
                                textAlign: featureAlign?.[this.props.deviceType] || contentAlign,
                                ...padddingCss(featuresListPadding, this.props.deviceType)
                            }}
                        />
                    </div>
                )}
                {descChecked && (
                    <div className={`premium-pricing-table__desc_wrap`}>
                        <RichText
                            tagName="p"
                            className={`premium-pricing-table__desc`}
                            onChange={newText => setAttributes({ desc: newText })}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            value={desc}
                            style={{
                                fontSize: `${descFontSize}${descStyles[0].descSizeUnit}`,
                                color: descStyles[0].descColor,
                                background: descStyles[0].descBack,
                                fontWeight: descStyles[0].descWeight,
                                letterSpacing: descStyles[0].descLetter + "px",
                                fontStyle: descStyles[0].descStyle,
                                lineHeight: descStyles[0].descLine + "px",
                                ...marginCss(descriptionMargin, this.props.deviceType),
                                ...padddingCss(descriptionPadding, this.props.deviceType)
                            }}
                        />
                    </div>
                )}
                {btnChecked && (
                    <div
                        className={`premium-pricing-table__button`}
                        style={{
                            width: buttonStyles[0].btnWidth + "%"
                        }}
                    >
                        <a
                            class={`premium-pricing-table__button_link`}
                            href="{ attributes.btnUrl }"
                            target={buttonStyles[0].btnTarget ? "_blank" : "_self"}
                            style={{
                                fontSize: `${btnFontSize}${buttonStyles[0].btnSizeUnit}`,
                                color: buttonStyles[0].btnColor,
                                background: buttonStyles[0].btnBack ? buttonStyles[0].btnBack : "transparent",
                                fontWeight: buttonStyles[0].btnWeight,
                                letterSpacing: buttonStyles[0].btnLetter + "px",
                                fontStyle: buttonStyles[0].btnStyle,
                                lineHeight: buttonStyles[0].btnLine + "px",
                                ...marginCss(buttonMargin, this.props.deviceType),
                                ...padddingCss(buttonPadding, this.props.deviceType),
                                ...borderCss(buttonBorder, this.props.deviceType)
                            }}
                        >
                            <RichText
                                tagName="span"
                                onChange={newText => setAttributes({ btnText: newText })}
                                value={btnText}
                                style={{
                                    textTransform: buttonStyles[0].btnUpper ? "uppercase" : "none"
                                }}
                            />
                        </a>
                        <URLInput
                            value={btnLink}
                            onChange={newLink => setAttributes({ btnLink: newLink })}
                        />
                        <style
                            dangerouslySetInnerHTML={{
                                __html: loadStyles()
                            }}
                        />
                    </div>
                )}
            </div>
        ];
    }

}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(PremiumPricingTable)