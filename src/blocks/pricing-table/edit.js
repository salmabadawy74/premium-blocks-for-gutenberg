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
import { generateBlockId, generateCss, typographyCss, paddingCss, marginCss, borderCss } from "../../components/HelperFunction";
import SpacingComponent from '../../components/premium-responsive-spacing';
import InspectorTabs from '../../components/inspectorTabs';
import InspectorTab from '../../components/inspectorTab';
import InsideTabs from "../../components/InsideTabs";
import InsideTab from "../../components/InsideTab";

const { withSelect } = wp.data
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { PanelBody, SelectControl, TextControl, ToggleControl } = wp.components;
const { InspectorControls, RichText } = wp.blockEditor;

class PremiumPricingTable extends Component {

    constructor() {
        super(...arguments)
    }

    componentDidMount() {
        const { setAttributes, clientId } = this.props;
        // Assigning id in the attribute.
        setAttributes({ blockId: "premium-pricing-table-" + generateBlockId(clientId) });
        setAttributes({ classMigrate: true });
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
            titleTypography,
            slashTypography,
            currTypography,
            priceTypography,
            dividerTypography,
            durationTypography,
            listTypography,
            descTypography,
            buttonTypography,
            badgeTypography,
            slashVAlign,
            currVAlign,
            valVAlign,
            divVAlign,
            durVAlign,
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
            const newUpdate = priceStyles.map((item, indexx) => {
                if (0 === indexx) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ priceStyles: newUpdate });
        }

        const saveFeatureStyle = (value) => {
            const newUpdate = featureStyles.map((item, indx) => {
                if (0 === indx) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ featureStyles: newUpdate });
        }

        const saveButtonStyle = (value) => {
            const newUpdate = buttonStyles.map((item, i) => {
                if (0 === i) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ buttonStyles: newUpdate });
        }

        const saveBadgeStyles = (value) => {
            const newUpdate = badgeStyles.map((item, idx) => {
                if (0 === idx) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ badgeStyles: newUpdate });
        }

        const saveTableStyles = (value) => {
            const newUpdate = tableStyles.map((item, indexTable) => {
                if (0 === indexTable) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ tableStyles: newUpdate });
        }

        const saveDescriptionStyle = (value) => {
            const newUpdate = descStyles.map((item, indexDesc) => {
                if (0 === indexDesc) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({ descStyles: newUpdate });
        }

        const mainClasses = classnames(className, "premium-pricing-table", {
            " premium-desktop-hidden": hideDesktop,
            " premium-tablet-hidden": hideTablet,
            " premium-mobile-hidden": hideMobile,
        });

        return [
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
                                <MultiButtonsControl
                                    choices={[{ value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }]}
                                    value={contentAlign}
                                    onChange={(align) => setAttributes({ contentAlign: align })}
                                    label={__("Content Align", "premium-blocks-for-gutenberg")}
                                    showIcons={true} 
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
                                        choices={[
                                            { label: __('H1', 'premium-blocks-for-gutenberg'), value: 'h1' }, 
                                            { label: __('H2', 'premium-blocks-for-gutenberg'), value: 'h2' }, 
                                            { label: __('H3', 'premium-blocks-for-gutenberg'), value: 'h3' }, 
                                            { label: __('H4', 'premium-blocks-for-gutenberg'), value: 'h4' }, 
                                            { label: __('H5', 'premium-blocks-for-gutenberg'), value: 'h5' }, 
                                            { label: __('H6', 'premium-blocks-for-gutenberg'), value: 'h6' }
                                        ]}
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
                                        choices={[{ value: 'left', label: __('Left', "premium-blocks-for-gutenberg"), icon: Icons.alignLeft }, { value: 'center', label: __('Center', "premium-blocks-for-gutenberg"), icon: Icons.alignCenter }, { value: 'right', label: __('Right', "premium-blocks-for-gutenberg"), icon: Icons.alignRight }]}
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
                                    <TextControl
                                        label={__("Link URL", 'premium-blocks-for-gutenberg')}
                                        value={btnLink}
                                        onChange={newLink => setAttributes({ btnLink: newLink })}
                                    />
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
                                    label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                                    colorValue={tableStyles[0].tableBack}
                                    onColorChange={(newvalue) => saveTableStyles({ tableBack: newvalue })}
                                    colorDefault={``}
                                />
                                <PremiumShadow
                                    value={tableBoxShadow}
                                    onChange={(value) => setAttributes({ tableBoxShadow: value })}
                                />
                                <hr />
                                <PremiumBorder
                                    label={__("Border", 'premium-blocks-for-gutenberg')}
                                    value={tableBorder}
                                    onChange={(value) => setAttributes({ tableBorder: value })}
                                />
                                <hr />
                                <SpacingComponent value={tablePadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ tablePadding: value })} />
                            </PanelBody>
                            {titleChecked && (
                                <PanelBody
                                    title={__("Title", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        value={titleTypography}
                                        onChange={newValue => setAttributes({ titleTypography: newValue })}
                                    />
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
                                    <PremiumShadow
                                        label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
                                        value={titleTextShadow}
                                        onChange={(value) => setAttributes({ titleTextShadow: value })}
                                    />
                                    <hr />
                                    <SpacingComponent value={titleMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ titleMargin: value })} />
                                    <SpacingComponent value={titlePadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ titlePadding: value })} />
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
                                    {"slash" === priceStyles[0].selectedStyle && (
                                        <Fragment>
                                            <MultiButtonsControl
                                                choices={ALIGNS}
                                                value={slashVAlign}
                                                onChange={(align) => setAttributes({ slashVAlign: align })}
                                                label={__("Vertical Align", "premium-blocks-for-gutenberg")}
                                                showIcons={false}
                                            />
                                            <PremiumTypo
                                                value={slashTypography}
                                                onChange={newValue => setAttributes({ slashTypography: newValue })}
                                            />
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
                                            <MultiButtonsControl
                                                choices={ALIGNS}
                                                value={currVAlign}
                                                onChange={(align) => setAttributes({ currVAlign: align })}
                                                label={__("Vertical Align", "premium-blocks-for-gutenberg")}
                                                showIcons={false} />
                                            <PremiumTypo
                                                value={currTypography}
                                                onChange={newValue => setAttributes({ currTypography: newValue })}
                                            />
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
                                            <MultiButtonsControl
                                                choices={ALIGNS}
                                                value={valVAlign}
                                                onChange={(align) => setAttributes({ valVAlign: align })}
                                                label={__("Vertical Align", "premium-blocks-for-gutenberg")}
                                                showIcons={false} />
                                            <PremiumTypo
                                                value={priceTypography}
                                                onChange={newValue => setAttributes({ priceTypography: newValue })}
                                            />
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
                                            <MultiButtonsControl
                                                choices={ALIGNS}
                                                value={divVAlign}
                                                onChange={(align) => setAttributes({ divVAlign: align })}
                                                label={__("Vertical Align", "premium-blocks-for-gutenberg")}
                                                showIcons={false} />
                                            <PremiumTypo
                                                value={dividerTypography}
                                                onChange={newValue => setAttributes({ dividerTypography: newValue })}
                                            />
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
                                            <MultiButtonsControl
                                                choices={ALIGNS}
                                                value={durVAlign}
                                                onChange={(align) => setAttributes({ durVAlign: align })}
                                                label={__("Vertical Align", "premium-blocks-for-gutenberg")}
                                                showIcons={false} />
                                            <PremiumTypo
                                                value={durationTypography}
                                                onChange={newValue => setAttributes({ durationTypography: newValue })}
                                            />
                                            <AdvancedPopColorControl
                                                label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                                colorValue={priceStyles[0].durColor}
                                                colorDefault={''}
                                                onColorChange={newValue => savePriceStyles({ durColor: newValue === undefined ? "transparent" : newValue })}
                                            />
                                        </Fragment>
                                    )}
                                    <AdvancedPopColorControl
                                        label={__(`Background Color`, 'premium-blocks-for-gutenberg')}
                                        colorValue={priceStyles[0].priceBack}
                                        onColorChange={(newvalue) => savePriceStyles({ priceBack: newvalue, })}
                                        colorDefault={``}
                                    />
                                    <hr />
                                    <SpacingComponent value={priceMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ priceMargin: value })} />
                                    <SpacingComponent value={pricePadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ pricePadding: value })} />
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
                                    <PremiumTypo
                                        value={listTypography}
                                        onChange={newValue => setAttributes({ listTypography: newValue })}
                                    />
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
                                    <SpacingComponent value={featuresListMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ featuresListMargin: value })} />
                                    <SpacingComponent value={featuresListPadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ featuresListPadding: value })} />
                                </PanelBody>
                            )}
                            {descChecked && (
                                <PanelBody
                                    title={__("Description", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        value={descTypography}
                                        onChange={newValue => setAttributes({ descTypography: newValue })}
                                    />
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
                                    <SpacingComponent value={descriptionMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ descriptionMargin: value })} />
                                    <SpacingComponent value={descriptionPadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ descriptionPadding: value })} />
                                </PanelBody>
                            )}
                            {btnChecked && (
                                <PanelBody
                                    title={__("Button", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        value={buttonTypography}
                                        onChange={newValue => setAttributes({ buttonTypography: newValue })}
                                    />
                                    <InsideTabs>
                                        <InsideTab tabTitle={__("Normal", "premium-block-for-gutenberg")}>
                                            <Fragment>
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
                                            </Fragment>
                                        </InsideTab>
                                        <InsideTab tabTitle={__("Hover", "premium-block-for-gutenberg")}>
                                            <Fragment>
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
                                            </Fragment>
                                        </InsideTab>
                                    </InsideTabs>
                                    <ResponsiveSingleRangeControl
                                        label={__("Width (%)", 'premium-blocks-for-gutenberg')}
                                        value={buttonStyles[0].btnWidth}
                                        onChange={newSize => saveButtonStyle({ btnWidth: newSize })}
                                        showUnit={false}
                                        defaultValue={0}
                                    />
                                    <hr />
                                    <PremiumBorder
                                        label={__("Border", 'premium-blocks-for-gutenberg')}
                                        value={buttonBorder}
                                        onChange={(value) => setAttributes({ buttonBorder: value })}
                                    />
                                    <hr />
                                    <SpacingComponent value={buttonMargin} responsive={true} showUnits={true} label={__("Margin", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ buttonMargin: value })} />
                                    <SpacingComponent value={buttonPadding} responsive={true} showUnits={true} label={__("Padding", 'premium-blocks-for-gutenberg')} onChange={(value) => setAttributes({ buttonPadding: value })} />
                                </PanelBody>
                            )}
                            {badgeChecked && (
                                <PanelBody
                                    title={__("Badge", 'premium-blocks-for-gutenberg')}
                                    className="premium-panel-body"
                                    initialOpen={false}
                                >
                                    <PremiumTypo
                                        value={badgeTypography}
                                        onChange={newValue => setAttributes({ badgeTypography: newValue })}
                                    />
                                    <AdvancedPopColorControl
                                        label={__("Text Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={badgeStyles[0].badgeColor}
                                        colorDefault={''}
                                        onColorChange={newColor => saveBadgeStyles({ badgeColor: newColor })}
                                    />
                                    <AdvancedPopColorControl
                                        label={__("Background Color", 'premium-blocks-for-gutenberg')}
                                        colorValue={badgeStyles[0].badgeBack}
                                        colorDefault={'#793DC3'}
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
                className={`${mainClasses} ${blockId}`}
                style={{
                    textAlign: contentAlign[this.props.deviceType],
                    backgroundColor: tableStyles[0].tableBack,
                    boxShadow: `${tableBoxShadow.horizontal}px ${tableBoxShadow.vertical}px ${tableBoxShadow.blur}px ${tableBoxShadow.color} ${tableBoxShadow.position}`,
                    ...borderCss(tableBorder, this.props.deviceType),
                    ...paddingCss(tablePadding, this.props.deviceType)
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
                                    color: badgeStyles[0].badgeColor,
                                    width: badgeStyles[0].badgeWidth + "px",
                                    top: badgeStyles[0].badgeTop + "px",
                                    left: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                    right: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                    ...typographyCss(badgeTypography, this.props.deviceType)
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
                                color: titleStyles[0].titleColor,
                                textShadow: `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`,
                                ...paddingCss(titlePadding, this.props.deviceType),
                                ...typographyCss(titleTypography, this.props.deviceType)
                            }}
                        />
                    </div>
                )}
                {priceChecked && (
                    <div
                        className={`premium-pricing-table__price_wrap`}
                        style={{
                            backgroundColor: priceStyles[0].priceBack,
                            justifyContent: contentAlign[this.props.deviceType],
                            ...marginCss(priceMargin, this.props.deviceType),
                            ...paddingCss(pricePadding, this.props.deviceType)
                        }}
                    >
                        {priceStyles[0].slashPrice && (
                            <strike
                                className={`premium-pricing-table__slash`}
                                style={{
                                    color: priceStyles[0].slashColor,
                                    alignSelf: slashVAlign?.[this.props.deviceType],
                                    ...typographyCss(slashTypography, this.props.deviceType)
                                }}
                            >
                                {priceStyles[0].slashPrice}
                            </strike>
                        )}
                        {priceStyles[0].currPrice && (
                            <span
                                className={`premium-pricing-table__currency`}
                                style={{
                                    color: priceStyles[0].currColor,
                                    alignSelf: currVAlign?.[this.props.deviceType],
                                    ...typographyCss(currTypography, this.props.deviceType)
                                }}
                            >
                                {priceStyles[0].currPrice}
                            </span>
                        )}
                        {priceStyles[0].valPrice && (
                            <span
                                className={`premium-pricing-table__val`}
                                style={{
                                    color: priceStyles[0].valColor,
                                    alignSelf: valVAlign?.[this.props.deviceType],
                                    ...typographyCss(priceTypography, this.props.deviceType)
                                }}
                            >
                                {priceStyles[0].valPrice}
                            </span>
                        )}
                        {priceStyles[0].divPrice && (
                            <span
                                className={`premium-pricing-table__divider`}
                                style={{
                                    color: priceStyles[0].divColor,
                                    alignSelf: divVAlign?.[this.props.deviceType],
                                    ...typographyCss(dividerTypography, this.props.deviceType)
                                }}
                            >
                                {priceStyles[0].divPrice}
                            </span>
                        )}
                        {priceStyles[0].durPrice && (
                            <span
                                className={`premium-pricing-table__dur`}
                                style={{
                                    color: priceStyles[0].durColor,
                                    alignSelf: durVAlign?.[this.props.deviceType],
                                    ...typographyCss(durationTypography, this.props.deviceType)
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
                            placeholder={__("List Item #1", "premium-blocks-for-gutenberg")}
                            keepPlaceholderOnFocus={true}
                            value={listItems}
                            onChange={newText => setAttributes({ listItems: newText })}
                            style={{
                                color: featureStyles[0].listColor,
                                background: featureStyles[0].listBack,
                                listStyle: "check" !== featureStyles[0].listStyle ? featureStyles[0].listStyle : "none",
                                listStylePosition: "inside",
                                textAlign: featureAlign?.[this.props.deviceType] || contentAlign[this.props.deviceType],
                                ...paddingCss(featuresListPadding, this.props.deviceType),
                                ...typographyCss(listTypography, this.props.deviceType)
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
                            placeholder={__("Lorem ipsum dolor sit amet, consectetur adipiscing elit")}
                            value={desc}
                            style={{
                                color: descStyles[0].descColor,
                                background: descStyles[0].descBack,
                                ...marginCss(descriptionMargin, this.props.deviceType),
                                ...paddingCss(descriptionPadding, this.props.deviceType),
                                ...typographyCss(descTypography, this.props.deviceType)
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
                                color: buttonStyles[0].btnColor,
                                background: buttonStyles[0].btnBack ? buttonStyles[0].btnBack : "transparent",
                                ...marginCss(buttonMargin, this.props.deviceType),
                                ...paddingCss(buttonPadding, this.props.deviceType),
                                ...borderCss(buttonBorder, this.props.deviceType),
                                ...typographyCss(buttonTypography, this.props.deviceType)
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
                        {/* <URLInput
                            value={btnLink}
                            onChange={newLink => setAttributes({ btnLink: newLink })}
                        /> */}
                        <style>{loadStyles()}</style>
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