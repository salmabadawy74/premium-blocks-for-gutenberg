import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
import PremiumRangeControl from "../../components/premium-range-control";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import RadioComponent from '../../components/radio-control';

const { withSelect } = wp.data

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
    Dropdown,
    Button
} = wp.components;

const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    RichText,
    URLInput
} = wp.blockEditor;

class PremiumPricingTable extends Component {

    constructor() {
        super(...arguments)
    }

    componentDidMount() {

        const { setAttributes, clientId } = this.props;
        setAttributes({ block_id: clientId });
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
            borderUpdated,
            btnBorderUpdated,
            contentAlign,
            borderColor,
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
            block_id,
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
            btnBorderTop,
            btnBorderRight,
            btnBorderBottom,
            btnBorderLeft,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
        } = this.props.attributes;

        const ALIGNS = [
            {
                value: "flex-start",
                label: __("Top", 'premium-block-for-gutenberg')
            },
            {
                value: "center",
                label: __("Middle", 'premium-block-for-gutenberg')
            },
            {
                value: "flex-end",
                label: __("Bottom", 'premium-block-for-gutenberg')
            }
        ];
        const PRICE = [
            {
                value: "slash",
                label: __("Slashed Price", 'premium-block-for-gutenberg')
            },
            {
                value: "curr",
                label: __("Currency", 'premium-block-for-gutenberg')
            },
            {
                value: "price",
                label: __("Price", 'premium-block-for-gutenberg')
            },
            {
                value: "divider",
                label: __("Divider", 'premium-block-for-gutenberg')
            },
            {
                value: "duration",
                label: __("Duration", 'premium-block-for-gutenberg')
            }
        ];
        const TYPE = [
            {
                value: "none",
                label: __("None", 'premium-block-for-gutenberg')
            },
            {
                value: "check",
                label: __("Check Mark", 'premium-block-for-gutenberg')
            },
            {
                value: "disc",
                label: __("Filled Circle", 'premium-block-for-gutenberg')
            },
            {
                value: "circle",
                label: __("Outline Circle", 'premium-block-for-gutenberg')
            },
            {
                value: "square",
                label: __("Square", 'premium-block-for-gutenberg')
            }
        ];
        const POSITION = [
            {
                value: "right",
                label: __("Right", 'premium-block-for-gutenberg')
            },
            {
                value: "left",
                label: __("Left", 'premium-block-for-gutenberg')
            }
        ];
        const FEATURES_ALIGN = ["left", "center", "right"];

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
            setAttributes({
                priceStyles: newUpdate,
            });
        }
        const saveFeatureStyle = (value) => {
            const newUpdate = featureStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                featureStyles: newUpdate,
            });
        }

        const saveButtonStyle = (value) => {
            const newUpdate = buttonStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                buttonStyles: newUpdate,
            });
        }
        const saveBadgeStyles = (value) => {
            const newUpdate = badgeStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                badgeStyles: newUpdate,
            });
        }
        const saveTableStyles = (value) => {
            const newUpdate = tableStyles.map((item, index) => {
                if (0 === index) {
                    item = { ...item, ...value };
                }
                return item;
            });
            setAttributes({
                tableStyles: newUpdate,
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

        const titleFontSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titleSizeTablet, titleStyles[0].titleSizeMobile);
        const slashFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].slashSize, priceStyles[0].slashSizeTablet, priceStyles[0].slashSizeMobile);
        const currFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].currSize, priceStyles[0].currSizeTablet, priceStyles[0].currSizeMobile);
        const valFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].valSize, priceStyles[0].valSizeTablet, priceStyles[0].valSizeMobile);
        const divFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].divSize, priceStyles[0].divSizeTablet, priceStyles[0].divSizeMobile);
        const cFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].durSize, priceStyles[0].durSizeTablet, priceStyles[0].durSizeMobile);
        const listFontSize = this.getPreviewSize(this.props.deviceType, featureStyles[0].listSize, featureStyles[0].listSizeTablet, featureStyles[0].listSizeMobile);
        const descFontSize = this.getPreviewSize(this.props.deviceType, descStyles[0].descSize, descStyles[0].descSizeTablet, descStyles[0].descSizeMobile);
        const btnFontSize = this.getPreviewSize(this.props.deviceType, buttonStyles[0].btnSize, buttonStyles[0].btnSizeTablet, buttonStyles[0].btnSizeMobile);


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
                    <PanelBody
                        title={__("Display Options", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Title", 'premium-block-for-gutenberg')}
                            checked={titleChecked}
                            onChange={newValue => setAttributes({ titleChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Price", 'premium-block-for-gutenberg')}
                            checked={priceChecked}
                            onChange={newValue => setAttributes({ priceChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Features", 'premium-block-for-gutenberg')}
                            checked={listChecked}
                            onChange={newValue => setAttributes({ listChecked: newValue })}
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
                        <ToggleControl
                            label={__("Badge", 'premium-block-for-gutenberg')}
                            checked={badgeChecked}
                            onChange={newValue => setAttributes({ badgeChecked: newValue })}
                        />
                    </PanelBody>
                    {titleChecked && (
                        <PanelBody
                            title={__("Title", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <RadioComponent
                                label={__("Heading", 'premium-block-for-gutenberg')}
                                choices={['H1', 'H2', 'H3', 'H4', 'H5', 'H6']}
                                value={titleStyles[0].titleTag}
                                onChange={newValue => saveTitleStyles({ titleTag: newValue })}
                            />
                            <PremiumTypo
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
                                onChangeWeight={newWeight =>
                                    saveTitleStyles({ titleWeight: newWeight })
                                }
                                onChangeStyle={newStyle =>
                                    saveTitleStyles({ titleStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    saveTitleStyles({ titleLetter: newValue })
                                }
                                onChangeLine={newValue => saveTitleStyles({ titleLine: newValue })}
                                onChangeUpper={check => saveTitleStyles({ titleUpper: check })}
                            />
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].titleColor}
                                colorDefault={''}
                                onColorChange={newColor => saveTitleStyles({ titleColor: newColor })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                colorValue={titleStyles[0].titleBack}
                                colorDefault={''}
                                onColorChange={newColor => saveTitleStyles({ titleBack: newColor })}
                            />
                            <PremiumTextShadow
                                color={titleStyles[0].titleShadowColor}
                                blur={titleStyles[0].titleShadowBlur}
                                horizontal={titleStyles[0].titleShadowHorizontal}
                                vertical={titleStyles[0].titleShadowVertical}
                                onChangeColor={newColor =>
                                    saveTitleStyles({ titleShadowColor: newColor })
                                }
                                onChangeBlur={newBlur =>
                                    saveTitleStyles({ titleShadowBlur: newBlur })
                                }
                                onChangehHorizontal={newValue =>
                                    saveTitleStyles({ titleShadowHorizontal: newValue })
                                }
                                onChangeVertical={newValue =>
                                    saveTitleStyles({ titleShadowVertical: newValue })
                                }
                            />
                            <div className="premium-control-toggle">
                                <strong>{__("Spacings", 'premium-block-for-gutenberg')}</strong>
                                <Dropdown
                                    className="premium-control-toggle-btn"
                                    contentClassName="premium-control-toggle-content"
                                    position="bottom right"
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                            <i className="dashicons dashicons-edit" />
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <Fragment>
                                            <PremiumRangeControl
                                                label={__("Margin Top (PX)", 'premium-block-for-gutenberg')}
                                                value={titleStyles[0].titleMarginT}
                                                min="10"
                                                max="80"
                                                onChange={newSize =>
                                                    saveTitleStyles({ titleMarginT: newSize })
                                                }
                                                showUnit={false}
                                                defaultValue={10}
                                            />
                                            <PremiumRangeControl
                                                label={__("Margin Bottom (PX)", 'premium-block-for-gutenberg')}
                                                value={titleStyles[0].titleMarginB}
                                                min="0"
                                                max="100"
                                                onChange={newMargin =>
                                                    saveTitleStyles({ titleMarginB: newMargin })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                            <PremiumRangeControl
                                                label={__("Padding (PX)", 'premium-block-for-gutenberg')}
                                                value={titleStyles[0].titlePadding}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    saveTitleStyles({ titlePadding: newPadding })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        </PanelBody>
                    )}
                    {priceChecked && (
                        <PanelBody
                            title={__("Price", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Slashed Price", 'premium-block-for-gutenberg')}
                                value={priceStyles[0].slashPrice}
                                onChange={value => savePriceStyles({ slashPrice: value })}
                            />
                            <TextControl
                                label={__("Currency", 'premium-block-for-gutenberg')}
                                value={priceStyles[0].currPrice}
                                onChange={value => savePriceStyles({ currPrice: value })}
                            />
                            <TextControl
                                label={__("Price", 'premium-block-for-gutenberg')}
                                value={priceStyles[0].valPrice}
                                onChange={value => savePriceStyles({ valPrice: value })}
                            />
                            <TextControl
                                label={__("Divider", 'premium-block-for-gutenberg')}
                                value={priceStyles[0].divPrice}
                                onChange={value => savePriceStyles({ divPrice: value })}
                            />
                            <TextControl
                                label={__("Duration", 'premium-block-for-gutenberg')}
                                value={priceStyles[0].durPrice}
                                onChange={value => savePriceStyles({ durPrice: value })}
                            />
                            <PanelBody
                                title={__("Element to Style", 'premium-block-for-gutenberg')}
                                className="premium-panel-body-inner"
                                initialOpen={false}
                            >
                                <SelectControl
                                    label={__("Element", 'premium-block-for-gutenberg')}
                                    options={PRICE}
                                    value={priceStyles[0].selectedStyle}
                                    onChange={newElem => savePriceStyles({ selectedStyle: newElem })}
                                />
                                {"slash" === priceStyles[0].selectedStyle && (
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].slashSizeUnit,
                                                label: __("slashSizeUnit", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].slashSize,
                                                label: __("slashSize", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].slashSizeMobile,
                                                label: __("slashSizeMobile", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].slashSizeTablet,
                                                label: __("slashSizeTablet", 'premium-block-for-gutenberg'),
                                            }}
                                            weight={priceStyles[0].slashWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({ slashWeight: newWeight })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align", 'premium-block-for-gutenberg')}
                                            options={ALIGNS}
                                            value={priceStyles[0].slashV}
                                            onChange={newValue => savePriceStyles({ slashV: newValue })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
                                            colorValue={priceStyles[0].slashColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                savePriceStyles({
                                                    slashColor:
                                                        newValue === undefined ? "transparent" : newValue
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                {"curr" === priceStyles[0].selectedStyle && (
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].currSizeUnit,
                                                label: __("currSizeUnit", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].currSize,
                                                label: __("currSize", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].currSizeMobile,
                                                label: __("currSizeMobile", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].currSizeTablet,
                                                label: __("currSizeTablet", 'premium-block-for-gutenberg'),
                                            }}
                                            weight={priceStyles[0].currWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({
                                                    currWeight: newWeight,
                                                })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align", 'premium-block-for-gutenberg')}
                                            options={ALIGNS}
                                            value={priceStyles[0].currV}
                                            onChange={newValue =>
                                                savePriceStyles({
                                                    currV: newValue,
                                                })
                                            }
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
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
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].valSizeUnit,
                                                label: __("valSizeUnit", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].valSize,
                                                label: __("valSize", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].valSizeMobile,
                                                label: __("valSizeMobile", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].valSizeTablet,
                                                label: __("valSizeTablet", 'premium-block-for-gutenberg'),
                                            }}
                                            size={priceStyles[0].valSize}
                                            weight={priceStyles[0].valWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({ valWeight: newWeight })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align", 'premium-block-for-gutenberg')}
                                            options={ALIGNS}
                                            value={priceStyles[0].valV}
                                            onChange={newValue => savePriceStyles({ valV: newValue })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
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
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].divSizeUnit,
                                                label: __("divSizeUnit", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].divSize,
                                                label: __("divSize", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].divSizeMobile,
                                                label: __("divSizeMobile", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].divSizeTablet,
                                                label: __("divSizeTablet", 'premium-block-for-gutenberg'),
                                            }}
                                            weight={priceStyles[0].divWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({ divWeight: newWeight })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align", 'premium-block-for-gutenberg')}
                                            options={ALIGNS}
                                            value={priceStyles[0].divV}
                                            onChange={newValue => savePriceStyles({ divV: newValue })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
                                            colorValue={priceStyles[0].divColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                savePriceStyles({
                                                    divColor:
                                                        newValue === undefined ? "transparent" : newValue
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                                {"duration" === priceStyles[0].selectedStyle && (
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].durSizeUnit,
                                                label: __("durSizeUnit", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].durSize,
                                                label: __("durSize", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].durSizeMobile,
                                                label: __("durSizeMobile", 'premium-block-for-gutenberg'),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].durSizeTablet,
                                                label: __("durSizeTablet", 'premium-block-for-gutenberg'),
                                            }}
                                            weight={priceStyles[0].durWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({ durWeight: newWeight })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align", 'premium-block-for-gutenberg')}
                                            options={ALIGNS}
                                            value={priceStyles[0].durV}
                                            onChange={newValue => savePriceStyles({ durV: newValue })}
                                        />

                                        <AdvancedPopColorControl
                                            label={__("Text Color", 'premium-block-for-gutenberg')}
                                            colorValue={priceStyles[0].durColor}
                                            colorDefault={''}
                                            onColorChange={newValue =>
                                                savePriceStyles({
                                                    durColor:
                                                        newValue === undefined ? "transparent" : newValue
                                                })
                                            }
                                        />
                                    </Fragment>
                                )}
                            </PanelBody>
                            <div className="premium-control-toggle">
                                <strong>{__("Spacings", 'premium-block-for-gutenberg')}</strong>
                                <Dropdown
                                    className="premium-control-toggle-btn"
                                    contentClassName="premium-control-toggle-content"
                                    position="bottom right"
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                            <i className="dashicons dashicons-edit" />
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <Fragment>
                                            <PremiumRangeControl
                                                label={__("Container Margin Top (PX)", 'premium-block-for-gutenberg')}
                                                value={priceStyles[0].priceMarginT}
                                                min="0"
                                                max="100"
                                                onChange={newMargin =>
                                                    savePriceStyles({ priceMarginT: newMargin })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                            <PremiumRangeControl
                                                label={__("Container Margin Bottom (PX)", 'premium-block-for-gutenberg')}
                                                value={priceStyles[0].priceMarginB}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    savePriceStyles({ priceMarginB: newPadding })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                            <PremiumRangeControl
                                                label={__("Container Padding (PX)", 'premium-block-for-gutenberg')}
                                                value={priceStyles[0].pricePadding}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    savePriceStyles({ pricePadding: newPadding })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                            <AdvancedPopColorControl
                                label={__(`Background Color`)}
                                colorValue={priceStyles[0].priceBack}
                                onColorChange={(newvalue) =>
                                    savePriceStyles({
                                        priceBack: newvalue,
                                    })}
                                colorDefault={``}
                            />
                        </PanelBody>
                    )}
                    {listChecked && (
                        <PanelBody
                            title={__("Features", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <RadioComponent
                                label={__("Align", 'premium-block-for-gutenberg')}
                                choices={["left", "center", "right"]}
                                value={featureStyles[0].featsAlign}
                                onChange={newValue => saveFeatureStyle({ featsAlign: newValue })}
                            />
                            <SelectControl
                                label={__("List Style", 'premium-block-for-gutenberg')}
                                options={TYPE}
                                value={featureStyles[0].listStyle}
                                onChange={newType => saveFeatureStyle({ listStyle: newType })}
                            />
                            <PremiumTypo
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
                                    label: __("listSizeUnit", 'premium-block-for-gutenberg'),
                                }}
                                fontSize={{
                                    value: featureStyles[0].listSize,
                                    label: __("listSize", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeMobile={{
                                    value: featureStyles[0].listSizeMobile,
                                    label: __("listSizeMobile", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeTablet={{
                                    value: featureStyles[0].listSizeTablet,
                                    label: __("listSizeTablet", 'premium-block-for-gutenberg'),
                                }}
                                weight={featureStyles[0].listWeight}
                                style={featureStyles[0].listItemsStyle}
                                spacing={featureStyles[0].listLetter}
                                line={featureStyles[0].listLine}
                                upper={featureStyles[0].listUpper}
                                onChangeWeight={newWeight =>
                                    saveFeatureStyle({ listWeight: newWeight })
                                }
                                onChangeStyle={newStyle =>
                                    saveFeatureStyle({ listItemsStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    saveFeatureStyle({ listLetter: newValue })
                                }
                                onChangeLine={newValue => saveFeatureStyle({ listLine: newValue })}
                                onChangeUpper={check => saveFeatureStyle({ listUpper: check })}
                            />
                            <AdvancedPopColorControl
                                label={__("List Items Color", 'premium-block-for-gutenberg')}
                                colorValue={featureStyles[0].listColor}
                                colorDefault={''}
                                onColorChange={newColor => saveFeatureStyle({ listColor: newColor })}
                            />
                            <AdvancedPopColorControl
                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                colorValue={featureStyles[0].listBack}
                                colorDefault={''}
                                onColorChange={newColor => saveFeatureStyle({ listBack: newColor })}
                            />
                            <div className="premium-control-toggle">
                                <strong>{__("Spacings", 'premium-block-for-gutenberg')}</strong>
                                <Dropdown
                                    className="premium-control-toggle-btn"
                                    contentClassName="premium-control-toggle-content"
                                    position="bottom right"
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                            <i className="dashicons dashicons-edit" />
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <Fragment>
                                            <PremiumRangeControl
                                                label={__("Margin Top (PX)", 'premium-block-for-gutenberg')}
                                                value={featureStyles[0].listMarginT}
                                                onChange={newSize =>
                                                    saveFeatureStyle({ listMarginT: newSize })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                            <PremiumRangeControl
                                                label={__("Margin Bottom (PX)", 'premium-block-for-gutenberg')}
                                                value={featureStyles[0].listMarginB}
                                                onChange={newSize =>
                                                    saveFeatureStyle({ listMarginB: newSize })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                            <PremiumRangeControl
                                                label={__("Padding (PX)", 'premium-block-for-gutenberg')}
                                                value={featureStyles[0].listPadding}
                                                onChange={newSize =>
                                                    saveFeatureStyle({ listPadding: newSize })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        </PanelBody>
                    )}
                    {descChecked && (
                        <PanelBody
                            title={__("Description", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "spacing", "line"]}
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
                                size={descStyles[0].descSize}
                                weight={descStyles[0].descWeight}
                                style={descStyles[0].descStyle}
                                spacing={descStyles[0].descLetter}
                                line={descStyles[0].descLine}
                                onChangeWeight={newWeight =>
                                    saveDescriptionStyle({ descWeight: newWeight })
                                }
                                onChangeStyle={newStyle => saveDescriptionStyle({ descStyle: newStyle })}
                                onChangeSpacing={newValue =>
                                    saveDescriptionStyle({ descLetter: newValue })
                                }
                                onChangeLine={newValue => saveDescriptionStyle({ descLine: newValue })}
                            />
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-block-for-gutenberg')}
                                colorValue={descStyles[0].descColor}
                                colorDefault={''}
                                onColorChange={newColor => saveDescriptionStyle({ descColor: newColor })}
                            />
                            <AdvancedPopColorControl
                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                colorValue={descStyles[0].descBack}
                                colorDefault={''}
                                onColorChange={newColor => saveDescriptionStyle({ descBack: newColor })}
                            />
                            <div className="premium-control-toggle">
                                <strong>{__("Spacings", 'premium-block-for-gutenberg')}</strong>
                                <Dropdown
                                    className="premium-control-toggle-btn"
                                    contentClassName="premium-control-toggle-content"
                                    position="bottom right"
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                            <i className="dashicons dashicons-edit" />
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <Fragment>
                                            <PremiumRangeControl
                                                label={__("Margin Top (PX)", 'premium-block-for-gutenberg')}
                                                value={descStyles[0].descMarginT}
                                                onChange={newMargin =>
                                                    saveDescriptionStyle({ descMarginT: newMargin })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                            <PremiumRangeControl
                                                label={__("Margin Bottom (PX)", 'premium-block-for-gutenberg')}
                                                value={descStyles[0].descMarginB}
                                                onChange={newMargin =>
                                                    saveDescriptionStyle({ descMarginB: newMargin })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                            <PremiumRangeControl
                                                label={__("Padding (PX)", 'premium-block-for-gutenberg')}
                                                value={descStyles[0].descPadding}
                                                onChange={newPadding =>
                                                    saveDescriptionStyle({ descPadding: newPadding })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        </PanelBody>
                    )}
                    {btnChecked && (
                        <PanelBody
                            title={__("Button", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
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
                                    label: __("btnSizeUnit", 'premium-block-for-gutenberg'),
                                }}
                                fontSize={{
                                    value: buttonStyles[0].btnSize,
                                    label: __("btnSize", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeMobile={{
                                    value: buttonStyles[0].btnSizeMobile,
                                    label: __("btnSizeMobile", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeTablet={{
                                    value: buttonStyles[0].btnSizeTablet,
                                    label: __("btnSizeTablet", 'premium-block-for-gutenberg'),
                                }}
                                weight={buttonStyles[0].btnWeight}
                                style={buttonStyles[0].btnStyle}
                                spacing={buttonStyles[0].btnLetter}
                                line={buttonStyles[0].btnLine}
                                upper={buttonStyles[0].btnUpper}
                                onChangeWeight={newWeight =>
                                    saveButtonStyle({ btnWeight: newWeight })
                                }
                                onChangeStyle={newStyle => saveButtonStyle({ btnStyle: newStyle })}
                                onChangeSpacing={newValue =>
                                    saveButtonStyle({ btnLetter: newValue })
                                }
                                onChangeLine={newValue => saveButtonStyle({ btnLine: newValue })}
                                onChangeUpper={check => saveButtonStyle({ btnUpper: check })}
                            />
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-block-for-gutenberg')}
                                colorValue={buttonStyles[0].btnColor}
                                colorDefault={''}
                                onColorChange={newColor => saveButtonStyle({ btnColor: newColor })
                                }
                            />
                            <AdvancedPopColorControl
                                label={__("Text Hover Color", 'premium-block-for-gutenberg')}
                                colorValue={buttonStyles[0].btnHoverColor}
                                colorDefault={''}
                                onColorChange={newColor => saveButtonStyle({ btnHoverColor: newColor })}
                            />
                            <AdvancedPopColorControl
                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                colorValue={buttonStyles[0].btnBack}
                                colorDefault={''}
                                onColorChange={newColor => saveButtonStyle({ btnBack: newColor })}
                            />
                            <AdvancedPopColorControl
                                label={__("Background Hover Color", 'premium-block-for-gutenberg')}
                                colorValue={buttonStyles[0].btnHoverBack}
                                colorDefault={''}
                                onColorChange={newColor =>
                                    saveButtonStyle({ btnHoverBack: newColor })
                                }
                            />
                            <PremiumBorder
                                borderType={buttonStyles[0].btnBorderType}
                                borderWidth={buttonStyles[0].btnBorderWidth}
                                top={btnBorderTop}
                                right={btnBorderRight}
                                bottom={btnBorderBottom}
                                left={btnBorderLeft}
                                borderColor={buttonStyles[0].btnBorderColor}
                                borderRadius={buttonStyles[0].btnBorderRadius}
                                onChangeType={(newType) =>
                                    saveButtonStyle({ btnBorderType: newType })
                                }
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    setAttributes({
                                        btnBorderUpdated: true,
                                        btnBorderTop: top,
                                        btnBorderRight: right,
                                        btnBorderBottom: bottom,
                                        btnBorderLeft: left,
                                    })
                                }
                                onChangeColor={(colorValue) =>
                                    saveButtonStyle({ btnBorderColor: colorValue })
                                }
                                onChangeRadius={(newrRadius) =>
                                    saveButtonStyle({ btnBorderRadius: newrRadius })
                                }
                            />
                            <div className="premium-control-toggle">
                                <strong>{__("Spacings", 'premium-block-for-gutenberg')}</strong>
                                <Dropdown
                                    className="premium-control-toggle-btn"
                                    contentClassName="premium-control-toggle-content"
                                    position="bottom right"
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                            <i className="dashicons dashicons-edit" />
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <Fragment>
                                            <PremiumRangeControl
                                                label={__("Width (%)", 'premium-block-for-gutenberg')}
                                                value={buttonStyles[0].btnWidth}
                                                onChange={newSize => saveButtonStyle({ btnWidth: newSize })}
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                            <PremiumRangeControl
                                                label={__("Margin Top (PX)", 'premium-block-for-gutenberg')}
                                                value={buttonStyles[0].btnMarginT}
                                                onChange={newPadding =>
                                                    saveButtonStyle({ btnMarginT: newPadding })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />
                                            <PremiumRangeControl
                                                label={__("Margin Bottom (PX)", 'premium-block-for-gutenberg')}
                                                value={buttonStyles[0].btnMarginB}
                                                onChange={newPadding =>
                                                    saveButtonStyle({ btnMarginB: newPadding })
                                                }
                                                showUnit={false}
                                                defaultValue={0}
                                            />

                                            <PremiumRangeControl
                                                label={__("Padding", 'premium-block-for-gutenberg')}
                                                value={buttonStyles[0].btnPadding}
                                                onChange={newPadding =>
                                                    saveButtonStyle({ btnPadding: newPadding })
                                                }
                                                showUnit={true}
                                                defaultValue={0}
                                                onChangeUnit={newValue =>
                                                    saveButtonStyle({ btnPaddingU: newValue })
                                                }
                                                unit={buttonStyles[0].btnPaddingU}
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                            <ToggleControl
                                label={__("Open Link in a new tab", 'premium-block-for-gutenberg')}
                                checked={buttonStyles[0].btnTarget}
                                onChange={newValue => saveButtonStyle({ btnTarget: newValue })}
                            />
                        </PanelBody>
                    )}
                    {badgeChecked && (
                        <PanelBody
                            title={__("Badge", 'premium-block-for-gutenberg')}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Text", 'premium-block-for-gutenberg')}
                                value={badgeStyles[0].badgeText}
                                onChange={value => saveBadgeStyles({ badgeText: value })}
                            />
                            <SelectControl
                                label={__("Position", 'premium-block-for-gutenberg')}
                                options={POSITION}
                                value={badgeStyles[0].badgePos}
                                onChange={newValue => saveBadgeStyles({ badgePos: newValue })}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                setAttributes={saveBadgeStyles}
                                fontSizeType={{
                                    value: badgeStyles[0].badgeTextUnit,
                                    label: __("badgeTextUnit", 'premium-block-for-gutenberg'),
                                }}
                                fontSize={{
                                    value: badgeStyles[0].badgeSize,
                                    label: __("badgeSize", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeMobile={{
                                    value: badgeStyles[0].badgeSizeMobile,
                                    label: __("badgeSizeMobile", 'premium-block-for-gutenberg'),
                                }}
                                fontSizeTablet={{
                                    value: badgeStyles[0].badgeSizeTablet,
                                    label: __("badgeSizeTablet", 'premium-block-for-gutenberg'),
                                }}
                                weight={badgeStyles[0].badgeWeight}
                                style={badgeStyles[0].badgeStyle}
                                spacing={badgeStyles[0].badgeLetter}
                                upper={badgeStyles[0].badgeUpper}
                                onChangeWeight={newWeight =>
                                    saveBadgeStyles({ badgeWeight: newWeight })
                                }
                                onChangeStyle={newStyle =>
                                    saveBadgeStyles({ badgeStyle: newStyle })
                                }
                                onChangeSpacing={newValue =>
                                    saveBadgeStyles({ badgeLetter: newValue })
                                }
                                onChangeUpper={check => saveBadgeStyles({ badgeUpper: check })}
                            />
                            <AdvancedPopColorControl
                                label={__("Text Color", 'premium-block-for-gutenberg')}
                                colorValue={badgeStyles[0].badgeColor}
                                colorDefault={''}
                                onColorChange={newColor => saveBadgeStyles({ badgeColor: newColor })}
                            />
                            <AdvancedPopColorControl
                                label={__("Background Color", 'premium-block-for-gutenberg')}
                                colorValue={badgeStyles[0].badgeBack}
                                colorDefault={''}
                                onColorChange={newColor => saveBadgeStyles({ badgeBack: newColor })}
                            />
                            <PremiumRangeControl
                                label={__("Vertical Offset", 'premium-block-for-gutenberg')}
                                value={badgeStyles[0].badgeTop}
                                onChange={newValue => saveBadgeStyles({ badgeTop: newValue })}
                                showUnit={false}
                                defaultValue={0}
                            />
                            <PremiumRangeControl
                                label={__("Horizontal Offset", 'premium-block-for-gutenberg')}
                                value={badgeStyles[0].badgeHorizontal}
                                min="1"
                                max="150"
                                onChange={newValue =>
                                    saveBadgeStyles({ badgeHorizontal: newValue })
                                }
                                showUnit={false}
                                defaultValue={1}
                            />
                            <PremiumRangeControl
                                label={__("Badge Size", 'premium-block-for-gutenberg')}
                                value={badgeStyles[0].badgeSize}
                                min="0"
                                max="250"
                                onChange={newValue => saveBadgeStyles({ badgeSize: newValue })}
                                showUnit={false}
                                defaultValue={0}
                            />
                            <PremiumRangeControl
                                label={__("Text Width", 'premium-block-for-gutenberg')}
                                min="1"
                                max="200"
                                value={badgeStyles[0].badgeWidth}
                                onChange={newValue => saveBadgeStyles({ badgeWidth: newValue })}
                                showUnit={false}
                                defaultValue={0}
                            />
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Table", 'premium-block-for-gutenberg')}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <AdvancedPopColorControl
                            label={__(`Background Color`)}
                            colorValue={tableStyles[0].tableBack}
                            onColorChange={(newvalue) =>
                                saveTableStyles({ tableBack: newvalue })
                            }
                            colorDefault={``}
                        />
                        <PremiumBorder
                            borderType={tableStyles[0].borderType}
                            borderWidth={tableStyles[0].borderWidth}
                            top={borderTop}
                            right={borderRight}
                            bottom={borderBottom}
                            left={borderLeft}
                            borderColor={borderColor}
                            borderRadius={tableStyles[0].borderRadius}
                            onChangeType={(newType) => saveTableStyles({ borderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                setAttributes({
                                    borderUpdated: true,
                                    borderTop: top,
                                    borderRight: right,
                                    borderBottom: bottom,
                                    borderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                setAttributes({ borderColor: colorValue })
                            }
                            onChangeRadius={(newrRadius) =>
                                saveTableStyles({ borderRadius: newrRadius })
                            }
                        />
                        <PremiumBoxShadow
                            inner={true}
                            color={tableStyles[0].tableShadowColor}
                            blur={tableStyles[0].tableShadowBlur}
                            horizontal={tableStyles[0].tableShadowHorizontal}
                            vertical={tableStyles[0].tableShadowVertical}
                            position={tableStyles[0].tableShadowPosition}
                            onChangeColor={newColor =>
                                saveTableStyles({
                                    tableShadowColor:
                                        newColor === undefined ? "transparent" : newColor
                                })
                            }
                            onChangeBlur={newBlur =>
                                saveTableStyles({
                                    tableShadowBlur: newBlur === undefined ? 0 : newBlur
                                })
                            }
                            onChangehHorizontal={newValue =>
                                saveTableStyles({
                                    tableShadowHorizontal: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangeVertical={newValue =>
                                saveTableStyles({
                                    tableShadowVertical: newValue === undefined ? 0 : newValue
                                })
                            }
                            onChangePosition={newValue =>
                                saveTableStyles({
                                    tableShadowPosition: newValue === undefined ? 0 : newValue
                                })
                            }
                        />
                        <div className="premium-control-toggle">
                            <strong>{__("Spacings", 'premium-block-for-gutenberg')}</strong>
                            <Dropdown
                                className="premium-control-toggle-btn"
                                contentClassName="premium-control-toggle-content"
                                position="bottom right"
                                renderToggle={({ isOpen, onToggle }) => (
                                    <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
                                        <i className="dashicons dashicons-edit" />
                                    </Button>
                                )}
                                renderContent={() => (
                                    <Fragment>
                                        <PremiumRangeControl
                                            label={__("Padding", 'premium-block-for-gutenberg')}
                                            value={tableStyles[0].tablePadding}
                                            min="0"
                                            max="50"
                                            onChange={newValue =>
                                                saveTableStyles({ tablePadding: newValue })
                                            }
                                            showUnit={false}
                                            defaultValue={0}
                                        />
                                    </Fragment>
                                )}
                            />
                        </div>
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
                id={`premium-pricing-table-${block_id}`}
                className={`${mainClasses} premium-pricing-table-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`}
                style={{
                    textAlign: contentAlign,
                    backgroundColor: tableStyles[0].tableBack,
                    borderStyle: tableStyles[0].borderType,
                    borderWidth: borderUpdated
                        ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
                        : tableStyles[0].borderWidth + "px",
                    borderRadius: tableStyles[0].borderRadius + "px",
                    borderColor: borderColor,
                    padding: tableStyles[0].tablePadding + "px",
                    boxShadow: `${tableStyles[0].tableShadowHorizontal}px ${tableStyles[0].tableShadowVertical}px ${tableStyles[0].tableShadowBlur}px ${tableStyles[0].tableShadowColor} ${tableStyles[0].tableShadowPosition}`
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
                            <span
                                style={{
                                    color: badgeStyles[0].badgeColor,
                                    fontWeight: badgeStyles[0].badgeWeight,
                                    textTransform: badgeStyles[0].badgeUpper ? "uppercase" : "none",
                                    letterSpacing: badgeStyles[0].badgeLetter + "px",
                                    fontStyle: badgeStyles[0].badgeStyle,
                                    width: badgeStyles[0].badgeWidth + "px",
                                    top: badgeStyles[0].badgeTop + "px",
                                    left: "left" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto",
                                    right: "right" === badgeStyles[0].badgePos ? badgeStyles[0].badgeHorizontal + "px" : "auto"
                                }}
                            >
                                {badgeStyles[0].badgeText}
                            </span>
                        </div>
                    </div>
                )}
                {titleChecked && (
                    <div
                        className={`premium-pricing-table__title_wrap`}
                        style={{
                            marginTop: titleStyles[0].titleMarginT + "px",
                            marginBottom: titleStyles[0].titleMarginB + "px",
                            background: titleStyles[0].titleBack,
                        }}
                    >
                        <RichText
                            tagName={titleStyles[0].titleTag.toLowerCase()}
                            className={`premium-pricing-table__title`}
                            onChange={newText => setAttributes({ title: newText })}
                            placeholder={__("Awesome Title", 'premium-block-for-gutenberg')}
                            value={title}
                            style={{
                                fontSize: `${titleFontSize}${titleStyles[0].titleSizeUnit}`,
                                color: titleStyles[0].titleColor,
                                letterSpacing: titleStyles[0].titleLetter + "px",
                                textTransform: titleStyles[0].titleUpper ? "uppercase" : "none",
                                fontStyle: titleStyles[0].titleStyle,
                                fontWeight: titleStyles[0].titleWeight,
                                lineHeight: titleStyles[0].titleLine + "px",
                                padding: titleStyles[0].titlePadding + "px",
                                textShadow: `${titleStyles[0].titleShadowHorizontal}px ${titleStyles[0].titleShadowVertical}px ${titleStyles[0].titleShadowBlur}px ${titleStyles[0].titleShadowColor}`
                            }}
                        />
                    </div>
                )}
                {priceChecked && (
                    <div
                        className={`premium-pricing-table__price_wrap`}
                        style={{
                            backgroundColor: priceStyles[0].priceBack,
                            marginTop: priceStyles[0].priceMarginT + "px",
                            marginBottom: priceStyles[0].priceMarginB + "px",
                            padding: priceStyles[0].pricePadding + "px",
                            justifyContent: contentAlign
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
                                { priceStyles[0].slashPrice}
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
                                { priceStyles[0].currPrice}
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
                                { priceStyles[0].valPrice}
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
                                { priceStyles[0].divPrice}
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
                                { priceStyles[0].durPrice}
                            </span>
                        )}
                    </div>
                )}
                {listChecked && (
                    <div
                        className={`premium-pricing-table__list_wrap`}
                        style={{
                            marginTop: featureStyles[0].listMarginT + "px",
                            marginBottom: featureStyles[0].listMarginB + "px"
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
                                padding: featureStyles[0].listPadding + "px",
                                listStyle: "check" !== featureStyles[0].listStyle ? featureStyles[0].listStyle : "none",
                                listStylePosition: "inside",
                                fontWeight: featureStyles[0].listWeight,
                                textTransform: featureStyles[0].listUpper ? "uppercase" : "none",
                                letterSpacing: featureStyles[0].listLetter + "px",
                                fontStyle: featureStyles[0].listItemsStyle,
                                lineHeight: featureStyles[0].listLine + "px",
                                textAlign: featureStyles[0].featsAlign ? featureStyles[0].featsAlign : contentAlign
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
                                marginTop: descStyles[0].descMarginT + "px",
                                marginBottom: descStyles[0].descMarginB + "px",
                                padding: descStyles[0].descPadding + "px"
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
                                marginTop: buttonStyles[0].btnMarginT,
                                marginBottom: buttonStyles[0].btnMarginB,
                                padding: buttonStyles[0].btnPadding + buttonStyles[0].btnPaddingU,
                                borderStyle: buttonStyles[0].btnBorderType,
                                borderWidth: btnBorderUpdated
                                    ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                                    : buttonStyles[0].btnBorderWidth + "px",
                                borderRadius: buttonStyles[0].btnBorderRadius + "px",
                                borderColor: buttonStyles[0].btnBorderColor
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
                                __html: [
                                    `#premium-pricing-table-${block_id} .premium-pricing-table__button_link:hover {`,
                                    `color: ${buttonStyles[0].btnHoverColor} !important;`,
                                    `background: ${buttonStyles[0].btnHoverBack} !important`,
                                    "}"
                                ].join("\n")
                            }}
                        />
                    </div>
                )}
            </div>
        ];
    }

}

export default withSelect((select, props) => {
    const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
    let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;

    return {
        deviceType: deviceType
    }
})(PremiumPricingTable)