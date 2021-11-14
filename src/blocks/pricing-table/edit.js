import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumBackground from "../../components/premium-background";
import hexToRgba from "hex-to-rgba";
import styling from './styling'
import PremiumResponsiveTabs from "../../components/premium-responsive-tabs";
const { withSelect } = wp.data

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
    Toolbar,
    PanelBody,
    SelectControl,
    RangeControl,
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
    PanelColorSettings,
    ColorPalette,
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
        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "premium-style-pricing-" + clientId
        );
        document.head.appendChild($style);
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
            selectedStyle,
            btnChecked,
            btnText,
            btnLink,
            badgeChecked,
            listChecked,
            listItems,
            block_id,
            classMigrate,
            hideDesktop,
            hideTablet,
            hideMobile,
            titleStyles,
            priceStyles,
            featureStyles,
            descStyles,
            buttonStyles,
            badgeStyles,
            tableStyles
        } = this.props.attributes;

        const ALIGNS = [
            {
                value: "flex-start",
                label: __("Top")
            },
            {
                value: "center",
                label: __("Middle")
            },
            {
                value: "flex-end",
                label: __("Bottom")
            }
        ];
        const PRICE = [
            {
                value: "slash",
                label: __("Slashed Price")
            },
            {
                value: "curr",
                label: __("Currency")
            },
            {
                value: "price",
                label: __("Price")
            },
            {
                value: "divider",
                label: __("Divider")
            },
            {
                value: "duration",
                label: __("Duration")
            }
        ];
        const TYPE = [
            {
                value: "none",
                label: __("None")
            },
            {
                value: "check",
                label: __("Check Mark")
            },
            {
                value: "disc",
                label: __("Filled Circle")
            },
            {
                value: "circle",
                label: __("Outline Circle")
            },
            {
                value: "square",
                label: __("Square")
            }
        ];
        const POSITION = [
            {
                value: "right",
                label: __("Right")
            },
            {
                value: "left",
                label: __("Left")
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

        const titleFontSize = this.getPreviewSize(this.props.deviceType, titleStyles[0].titleSize, titleStyles[0].titleSizeTablet, titleStyles[0].titleSizeMobile);
        const slashFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].slashSize, priceStyles[0].slashSizeTablet, priceStyles[0].slashSizeMobile);
        const currFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].currSize, priceStyles[0].currSizeTablet, priceStyles[0].currSizeMobile);
        const valFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].valSize, priceStyles[0].valSizeTablet, priceStyles[0].valSizeMobile);
        const divFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].divSize, priceStyles[0].divSizeTablet, priceStyles[0].divSizeMobile);
        const cFontSize = this.getPreviewSize(this.props.deviceType, priceStyles[0].durSize, priceStyles[0].durSizeTablet, priceStyles[0].durSizeMobile);
        const listFontSize = this.getPreviewSize(this.props.deviceType, featureStyles[0].listSize, featureStyles[0].listSizeTablet, featureStyles[0].listSizeMobile);
        const descFontSize = this.getPreviewSize(this.props.deviceType, descStyles[0].descSize, descStyles[0].descSizeTablet, descStyles[0].descSizeMobile);


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
                        title={__("Display Options")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <ToggleControl
                            label={__("Title")}
                            checked={titleChecked}
                            onChange={newValue => setAttributes({ titleChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Price")}
                            checked={priceChecked}
                            onChange={newValue => setAttributes({ priceChecked: newValue })}
                        />
                        <ToggleControl
                            label={__("Features")}
                            checked={listChecked}
                            onChange={newValue => setAttributes({ listChecked: newValue })}
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
                        <ToggleControl
                            label={__("Badge")}
                            checked={badgeChecked}
                            onChange={newValue => setAttributes({ badgeChecked: newValue })}
                        />
                    </PanelBody>
                    {titleChecked && (
                        <PanelBody
                            title={__("Title")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <p>{__("Heading")}</p>
                            <Toolbar
                                controls={"123456".split("").map(tag => ({
                                    icon: "heading",
                                    isActive: "H" + tag === titleStyles[0].titleTag,
                                    onClick: () => setAttributes({ titleTag: "H" + tag }),
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
                                ]}
                                setAttributes={saveTitleStyles}
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
                            <PanelColorSettings
                                title={__("Colors")}
                                className="premium-panel-body-inner"
                                initialOpen={false}
                                colorSettings={[
                                    {
                                        value: titleStyles[0].titleColor,
                                        onChange: newColor => saveTitleStyles({ titleColor: newColor }),
                                        label: __("Text Color")
                                    },
                                    {
                                        value: titleStyles[0].titleBack,
                                        onChange: newColor => saveTitleStyles({ titleBack: newColor }),
                                        label: __("Background Color")
                                    }
                                ]}
                            />
                            <PremiumTextShadow
                                color={titleStyles[0].titleShadowColor}
                                blur={titleStyles[0].titleShadowBlur}
                                horizontal={titleStyles[0].titleShadowHorizontal}
                                vertical={titleStyles[0].titleShadowVertical}
                                onChangeColor={newColor =>
                                    saveTitleStyles({ titleShadowColor: newColor.hex })
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
                                <strong>{__("Spacings")}</strong>
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
                                            <RangeControl
                                                label={__("Margin Top (PX)")}
                                                value={titleStyles[0].titleMarginT}
                                                min="10"
                                                max="80"
                                                onChange={newSize =>
                                                    saveTitleStyles({ titleMarginT: newSize })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Margin Bottom (PX)")}
                                                value={titleStyles[0].titleMarginB}
                                                min="0"
                                                max="100"
                                                onChange={newMargin =>
                                                    saveTitleStyles({ titleMarginB: newMargin })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Padding (PX)")}
                                                value={titleStyles[0].titlePadding}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    saveTitleStyles({ titlePadding: newPadding })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        </PanelBody>
                    )}
                    {priceChecked && (
                        <PanelBody
                            title={__("Price")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Slashed Price")}
                                value={priceStyles[0].slashPrice}
                                onChange={value => savePriceStyles({ slashPrice: value })}
                            />
                            <TextControl
                                label={__("Currency")}
                                value={priceStyles[0].currPrice}
                                onChange={value => savePriceStyles({ currPrice: value })}
                            />
                            <TextControl
                                label={__("Price")}
                                value={priceStyles[0].valPrice}
                                onChange={value => savePriceStyles({ valPrice: value })}
                            />
                            <TextControl
                                label={__("Divider")}
                                value={priceStyles[0].divPrice}
                                onChange={value => savePriceStyles({ divPrice: value })}
                            />
                            <TextControl
                                label={__("Duration")}
                                value={priceStyles[0].durPrice}
                                onChange={value => savePriceStyles({ durPrice: value })}
                            />
                            <PanelBody
                                title={__("Element to Style")}
                                className="premium-panel-body-inner"
                                initialOpen={false}
                            >
                                <SelectControl
                                    label={__("Element")}
                                    options={PRICE}
                                    value={priceStyles[0].selectedStyle}
                                    onChange={newElem => savePriceStyles({ selectedStyle: newElem })}
                                />
                                {"slash" === selectedStyle && (
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].slashSizeUnit,
                                                label: __("slashSizeUnit"),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].slashSize,
                                                label: __("slashSize"),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].slashSizeMobile,
                                                label: __("slashSizeMobile"),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].slashSizeTablet,
                                                label: __("slashSizeTablet"),
                                            }}
                                            weight={priceStyles[0].slashWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({ slashWeight: newWeight })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align")}
                                            options={ALIGNS}
                                            value={priceStyles[0].slashV}
                                            onChange={newValue => savePriceStyles({ slashV: newValue })}
                                        />
                                        <Fragment>
                                            <p>{__("Text Color")}</p>
                                            <ColorPalette
                                                value={priceStyles[0].slashColor}
                                                onChange={newValue =>
                                                    savePriceStyles({
                                                        slashColor:
                                                            newValue === undefined ? "transparent" : newValue
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                        </Fragment>
                                    </Fragment>
                                )}
                                {"curr" === selectedStyle && (
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].currSizeUnit,
                                                label: __("currSizeUnit"),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].currSize,
                                                label: __("currSize"),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].currSizeMobile,
                                                label: __("currSizeMobile"),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].currSizeTablet,
                                                label: __("currSizeTablet"),
                                            }}
                                            weight={priceStyles[0].currWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({
                                                    currWeight: newWeight,
                                                })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align")}
                                            options={ALIGNS}
                                            value={priceStyles[0].currV}
                                            onChange={newValue =>
                                                savePriceStyles({
                                                    currV: newValue,
                                                })
                                            }
                                        />
                                        <Fragment>
                                            <p>{__("Text Color")}</p>
                                            <ColorPalette
                                                value={priceStyles[0].currColor}
                                                onChange={newValue =>
                                                    savePriceStyles({
                                                        currColor:
                                                            newValue ===
                                                                undefined
                                                                ? "transparent"
                                                                : newValue,
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                        </Fragment>
                                    </Fragment>
                                )}
                                {"price" === selectedStyle && (
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].valSizeUnit,
                                                label: __("valSizeUnit"),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].valSize,
                                                label: __("valSize"),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].valSizeMobile,
                                                label: __("valSizeMobile"),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].valSizeTablet,
                                                label: __("valSizeTablet"),
                                            }}
                                            size={priceStyles[0].valSize}
                                            weight={priceStyles[0].valWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({ valWeight: newWeight })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align")}
                                            options={ALIGNS}
                                            value={priceStyles[0].valV}
                                            onChange={newValue => savePriceStyles({ valV: newValue })}
                                        />
                                        <Fragment>
                                            <p>{__("Text Color")}</p>
                                            <ColorPalette
                                                value={priceStyles[0].valColor}
                                                onChange={newValue =>
                                                    savePriceStyles({
                                                        valColor:
                                                            newValue === undefined ? "transparent" : newValue
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                        </Fragment>
                                    </Fragment>
                                )}
                                {"divider" === selectedStyle && (
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].divSizeUnit,
                                                label: __("divSizeUnit"),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].divSize,
                                                label: __("divSize"),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].divSizeMobile,
                                                label: __("divSizeMobile"),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].divSizeTablet,
                                                label: __("divSizeTablet"),
                                            }}
                                            weight={priceStyles[0].divWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({ divWeight: newWeight })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align")}
                                            options={ALIGNS}
                                            value={priceStyles[0].divV}
                                            onChange={newValue => savePriceStyles({ divV: newValue })}
                                        />
                                        <Fragment>
                                            <p>{__("Text Color")}</p>
                                            <ColorPalette
                                                value={priceStyles[0].divColor}
                                                onChange={newValue =>
                                                    savePriceStyles({
                                                        divColor:
                                                            newValue === undefined ? "transparent" : newValue
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                        </Fragment>
                                    </Fragment>
                                )}
                                {"duration" === selectedStyle && (
                                    <Fragment>
                                        <PremiumTypo
                                            components={["responsiveSize", "weight"]}
                                            setAttributes={savePriceStyles}
                                            fontSizeType={{
                                                value: priceStyles[0].durSizeUnit,
                                                label: __("durSizeUnit"),
                                            }}
                                            fontSize={{
                                                value: priceStyles[0].durSize,
                                                label: __("durSize"),
                                            }}
                                            fontSizeMobile={{
                                                value: priceStyles[0].durSizeMobile,
                                                label: __("durSizeMobile"),
                                            }}
                                            fontSizeTablet={{
                                                value: priceStyles[0].durSizeTablet,
                                                label: __("durSizeTablet"),
                                            }}
                                            weight={priceStyles[0].durWeight}
                                            onChangeWeight={newWeight =>
                                                savePriceStyles({ durWeight: newWeight })
                                            }
                                        />
                                        <SelectControl
                                            label={__("Vertical Align")}
                                            options={ALIGNS}
                                            value={priceStyles[0].durV}
                                            onChange={newValue => savePriceStyles({ durV: newValue })}
                                        />
                                        <Fragment>
                                            <p>{__("Text Color")}</p>
                                            <ColorPalette
                                                value={priceStyles[0].durColor}
                                                onChange={newValue =>
                                                    savePriceStyles({
                                                        durColor:
                                                            newValue === undefined ? "transparent" : newValue
                                                    })
                                                }
                                                allowReset={true}
                                            />
                                        </Fragment>
                                    </Fragment>
                                )}
                            </PanelBody>
                            <div className="premium-control-toggle">
                                <strong>{__("Spacings")}</strong>
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
                                            <RangeControl
                                                label={__("Container Margin Top (PX)")}
                                                value={priceStyles[0].priceMarginT}
                                                min="0"
                                                max="100"
                                                onChange={newMargin =>
                                                    savePriceStyles({ priceMarginT: newMargin })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Container Margin Bottom (PX)")}
                                                value={priceStyles[0].priceMarginB}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    savePriceStyles({ priceMarginB: newPadding })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Container Padding (PX)")}
                                                value={priceStyles[0].pricePadding}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    savePriceStyles({ pricePadding: newPadding })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                            <Fragment>
                                <p>{__("Container Background Color")}</p>
                                <PremiumBackground
                                    type="color"
                                    colorValue={priceStyles[0].priceBack}
                                    onChangeColor={(newvalue) =>
                                        savePriceStyles({
                                            priceBack: newvalue,
                                        })
                                    }
                                    opacityValue={priceStyles[0].priceOpacity}
                                    onChangeOpacity={(value) =>
                                        savePriceStyles({ priceOpacity: value })
                                    }
                                />
                            </Fragment>
                        </PanelBody>
                    )}
                    {listChecked && (
                        <PanelBody
                            title={__("Features")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <p>{__("Align")}</p>
                            <Toolbar
                                controls={FEATURES_ALIGN.map(contentAlign => ({
                                    icon: "editor-align" + contentAlign,
                                    isActive: contentAlign === featureStyles[0].featsAlign,
                                    onClick: () => setAttributes({ featsAlign: contentAlign })
                                }))}
                            />
                            <SelectControl
                                label={__("List Style")}
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
                                    label: __("listSizeUnit"),
                                }}
                                fontSize={{
                                    value: featureStyles[0].listSize,
                                    label: __("listSize"),
                                }}
                                fontSizeMobile={{
                                    value: featureStyles[0].listSizeMobile,
                                    label: __("listSizeMobile"),
                                }}
                                fontSizeTablet={{
                                    value: featureStyles[0].listSizeTablet,
                                    label: __("listSizeTablet"),
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
                            <PanelColorSettings
                                title={__("Colors")}
                                className="premium-panel-body-inner"
                                initialOpen={false}
                                colorSettings={[
                                    {
                                        value: featureStyles[0].listColor,
                                        onChange: newColor => saveFeatureStyle({ listColor: newColor }),
                                        label: __("List Items Color")
                                    },
                                    {
                                        value: featureStyles[0].listBack,
                                        onChange: newColor => saveFeatureStyle({ listBack: newColor }),
                                        label: __("Background Color")
                                    }
                                ]}
                            />
                            <div className="premium-control-toggle">
                                <strong>{__("Spacings")}</strong>
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
                                            <RangeControl
                                                label={__("Margin Top (PX)")}
                                                value={featureStyles[0].listMarginT}
                                                onChange={newSize =>
                                                    saveFeatureStyle({ listMarginT: newSize })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Margin Bottom (PX)")}
                                                value={featureStyles[0].listMarginB}
                                                onChange={newSize =>
                                                    saveFeatureStyle({ listMarginB: newSize })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Padding (PX)")}
                                                value={featureStyles[0].listPadding}
                                                onChange={newSize =>
                                                    saveFeatureStyle({ listPadding: newSize })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        </PanelBody>
                    )}
                    {descChecked && (
                        <PanelBody
                            title={__("Description")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "spacing", "line"]}
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
                            <PanelColorSettings
                                title={__("Colors")}
                                className="premium-panel-body-inner"
                                initialOpen={false}
                                colorSettings={[
                                    {
                                        value: descStyles[0].descColor,
                                        onChange: newColor => saveDescriptionStyle({ descColor: newColor }),
                                        label: __("Text Color")
                                    },
                                    {
                                        value: descStyles[0].descBack,
                                        onChange: newColor => saveDescriptionStyle({ descBack: newColor }),
                                        label: __("Background Color")
                                    }
                                ]}
                            />
                            <div className="premium-control-toggle">
                                <strong>{__("Spacings")}</strong>
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
                                            <RangeControl
                                                label={__("Margin Top (PX)")}
                                                value={descStyles[0].descMarginT}
                                                min="0"
                                                max="100"
                                                onChange={newMargin =>
                                                    saveDescriptionStyle({ descMarginT: newMargin })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Margin Bottom (PX)")}
                                                value={descStyles[0].descMarginB}
                                                min="0"
                                                max="100"
                                                onChange={newMargin =>
                                                    saveDescriptionStyle({ descMarginB: newMargin })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Padding (PX)")}
                                                value={descStyles[0].descPadding}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    saveDescriptionStyle({ descPadding: newPadding })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                        </PanelBody>
                    )}
                    {btnChecked && (
                        <PanelBody
                            title={__("Button")}
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
                                    label: __("btnSizeUnit"),
                                }}
                                fontSize={{
                                    value: buttonStyles[0].btnSize,
                                    label: __("btnSize"),
                                }}
                                fontSizeMobile={{
                                    value: buttonStyles[0].btnSizeMobile,
                                    label: __("btnSizeMobile"),
                                }}
                                fontSizeTablet={{
                                    value: buttonStyles[0].btnSizeTablet,
                                    label: __("btnSizeTablet"),
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
                            <PanelColorSettings
                                title={__("Colors")}
                                className="premium-panel-body-inner"
                                initialOpen={false}
                                colorSettings={[
                                    {
                                        value: buttonStyles[0].btnColor,
                                        onChange: newColor => saveButtonStyle({ btnColor: newColor }),
                                        label: __("Text Color")
                                    },
                                    {
                                        value: buttonStyles[0].btnHoverColor,
                                        onChange: newColor =>
                                            saveButtonStyle({ btnHoverColor: newColor }),
                                        label: __("Text Hover Color")
                                    },
                                    {
                                        value: buttonStyles[0].btnBack,
                                        onChange: newColor => saveButtonStyle({ btnBack: newColor }),
                                        label: __("Background Color")
                                    },
                                    {
                                        value: buttonStyles[0].btnHoverBack,
                                        onChange: newColor =>
                                            saveButtonStyle({ btnHoverBack: newColor }),
                                        label: __("Background Hover Color")
                                    }
                                ]}
                            />
                            <PremiumBorder
                                borderType={buttonStyles[0].btnBorderType}
                                borderWidth={buttonStyles[0].btnBorderWidth}
                                top={buttonStyles[0].btnBorderTop}
                                right={buttonStyles[0].btnBorderRight}
                                bottom={buttonStyles[0].btnBorderBottom}
                                left={buttonStyles[0].btnBorderLeft}
                                borderColor={buttonStyles[0].btnBorderColor}
                                borderRadius={buttonStyles[0].btnBorderRadius}
                                onChangeType={(newType) =>
                                    saveButtonStyle({ btnBorderType: newType })
                                }
                                onChangeWidth={({ top, right, bottom, left }) =>
                                    saveButtonStyle({
                                        btnBorderUpdated: true,
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
                            <div className="premium-control-toggle">
                                <strong>{__("Spacings")}</strong>
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
                                            <RangeControl
                                                label={__("Width (%)")}
                                                value={buttonStyles[0].btnWidth}
                                                onChange={newSize => saveButtonStyle({ btnWidth: newSize })}
                                            />
                                            <RangeControl
                                                label={__("Margin Top (PX)")}
                                                value={buttonStyles[0].btnMarginT}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    saveButtonStyle({ btnMarginT: newPadding })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Margin Bottom (PX)")}
                                                value={buttonStyles[0].btnMarginB}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    saveButtonStyle({ btnMarginB: newPadding })
                                                }
                                            />
                                            <PremiumSizeUnits
                                                onChangeSizeUnit={newValue =>
                                                    saveButtonStyle({ btnPaddingU: newValue })
                                                }
                                            />
                                            <RangeControl
                                                label={__("Padding")}
                                                value={buttonStyles[0].btnPadding}
                                                min="0"
                                                max="100"
                                                onChange={newPadding =>
                                                    saveButtonStyle({ btnPadding: newPadding })
                                                }
                                            />
                                        </Fragment>
                                    )}
                                />
                            </div>
                            <ToggleControl
                                label={__("Open Link in a new tab")}
                                checked={buttonStyles[0].btnTarget}
                                onChange={newValue => saveButtonStyle({ btnTarget: newValue })}
                            />
                        </PanelBody>
                    )}
                    {badgeChecked && (
                        <PanelBody
                            title={__("Badge")}
                            className="premium-panel-body"
                            initialOpen={false}
                        >
                            <TextControl
                                label={__("Text")}
                                value={badgeStyles[0].badgeText}
                                onChange={value => saveBadgeStyles({ badgeText: value })}
                            />
                            <SelectControl
                                label={__("Position")}
                                options={POSITION}
                                value={badgeStyles[0].badgePos}
                                onChange={newValue => saveBadgeStyles({ badgePos: newValue })}
                            />
                            <PremiumTypo
                                components={["responsiveSize", "weight", "style", "upper", "spacing"]}
                                setAttributes={saveBadgeStyles}
                                fontSizeType={{
                                    value: badgeStyles[0].badgeTextUnit,
                                    label: __("badgeTextUnit"),
                                }}
                                fontSize={{
                                    value: badgeStyles[0].badgeTextSize,
                                    label: __("badgeText"),
                                }}
                                fontSizeMobile={{
                                    value: badgeStyles[0].badgeTextSizeMobile,
                                    label: __("badgeTextMobile"),
                                }}
                                fontSizeTablet={{
                                    value: badgeStyles[0].badgeTextSizeTablet,
                                    label: __("badgeTextTablet"),
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
                            <PanelColorSettings
                                title={__("Colors")}
                                className="premium-panel-body-inner"
                                initialOpen={false}
                                colorSettings={[
                                    {
                                        value: badgeStyles[0].badgeColor,
                                        onChange: newColor => saveBadgeStyles({ badgeColor: newColor }),
                                        label: __("Text Color")
                                    },
                                    {
                                        value: badgeStyles[0].badgeBack,
                                        onChange: newColor => saveBadgeStyles({ badgeBack: newColor }),
                                        label: __("Background Color")
                                    }
                                ]}
                            />
                            <RangeControl
                                label={__("Vertical Offset")}
                                value={badgeStyles[0].badgeTop}
                                onChange={newValue => saveBadgeStyles({ badgeTop: newValue })}
                            />
                            <RangeControl
                                label={__("Horizontal Offset")}
                                value={badgeStyles[0].badgeHorizontal}
                                min="1"
                                max="150"
                                onChange={newValue =>
                                    saveBadgeStyles({ badgeHorizontal: newValue })
                                }
                            />
                            <RangeControl
                                label={__("Badge Size")}
                                value={badgeStyles[0].badgeSize}
                                max="250"
                                onChange={newValue => saveBadgeStyles({ badgeSize: newValue })}
                            />
                            <RangeControl
                                label={__("Text Width")}
                                min="1"
                                max="200"
                                value={badgeStyles[0].badgeWidth}
                                onChange={newValue => saveBadgeStyles({ badgeWidth: newValue })}
                            />
                        </PanelBody>
                    )}
                    <PanelBody
                        title={__("Table")}
                        className="premium-panel-body"
                        initialOpen={false}
                    >
                        <Fragment>
                            <p>{__("Background Color")}</p>
                            <PremiumBackground
                                type="color"
                                colorValue={tableStyles[0].tableBack}
                                onChangeColor={(newvalue) =>
                                    saveTableStyles({ tableBack: newvalue })
                                }
                                opacityValue={tableStyles[0].tableOpacity}
                                onChangeOpacity={(value) =>
                                    saveTableStyles({ tableOpacity: value })
                                }
                            />
                        </Fragment>
                        <PremiumBorder
                            borderType={tableStyles[0].borderType}
                            borderWidth={tableStyles[0].borderWidth}
                            top={tableStyles[0].borderTop}
                            right={tableStyles[0].borderRight}
                            bottom={tableStyles[0].borderBottom}
                            left={tableStyles[0].borderLeft}
                            borderColor={borderColor}
                            borderRadius={tableStyles[0].borderRadius}
                            onChangeType={(newType) => saveTableStyles({ borderType: newType })}
                            onChangeWidth={({ top, right, bottom, left }) =>
                                saveTableStyles({
                                    borderUpdated: true,
                                    borderTop: top,
                                    borderRight: right,
                                    borderBottom: bottom,
                                    borderLeft: left,
                                })
                            }
                            onChangeColor={(colorValue) =>
                                saveTableStyles({ borderColor: colorValue.hex })
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
                                        newColor === undefined ? "transparent" : newColor.hex
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
                            <strong>{__("Spacings")}</strong>
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
                                        <RangeControl
                                            label={__("Padding")}
                                            value={tableStyles[0].tablePadding}
                                            min="0"
                                            max="50"
                                            onChange={newValue =>
                                                saveTableStyles({ tablePadding: newValue })
                                            }
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
                    backgroundColor: tableStyles[0].tableBack
                        ? hexToRgba(tableStyles[0].tableBack, tableStyles[0].tableOpacity)
                        : "transparent",
                    borderStyle: tableStyles[0].borderType,
                    borderWidth: borderUpdated
                        ? `${tableStyles[0].borderTop}px ${tableStyles[0].borderRight}px ${tableStyles[0].borderBottom}px ${tableStyles[0].borderLeft}px`
                        : tableStyles[0].borderWidth + "px",
                    borderRadius: tableStyles[0].borderRadius + "px",
                    borderColor: borderColor,
                    padding: tableStyles[0].tablePadding + "px",
                    boxShadow: `${tableStyles[0].tableShadowHorizontal}px ${tableStyles[0].tableShadowVertical}px ${tableStyles[0].tableShadowBlur}px ${tableStyles[0].tableShadowColor} ${tableStyles[0].tableShadowPosition}`
                }}
            >
                {badgeChecked && (
                    <div
                        className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgePos}`}
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
                            paddingTop: titleStyles[0].titleMarginT + "px",
                            paddingBottom: titleStyles[0].titleMarginB + "px"
                        }}
                    >
                        <RichText
                            tagName={titleTag.toLowerCase()}
                            className={`premium-pricing-table__title`}
                            onChange={newText => setAttributes({ title: newText })}
                            placeholder={__("Awesome Title")}
                            value={title}
                            style={{
                                color: titleStyles[0].titleColor,
                                background: titleStyles[0].titleBack,
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
                            backgroundColor: priceStyles[0].priceBack
                                ? hexToRgba(priceStyles[0].priceBack, priceStyles[0].priceOpacity)
                                : "transparent",
                            marginTop: priceStyles[0].priceMarginT + "px",
                            marginBottom: priceStyles[0].priceMarginB + "px",
                            padding: priceStyles[0].pricePadding + "px",
                            justifyContent: contentAlign
                        }}
                    >
                        {slashPrice && (
                            <strike
                                className={`premium-pricing-table__slash`}
                                style={{
                                    color: priceStyles[0].slashColor,
                                    fontWeight: priceStyles[0].slashWeight,
                                    alignSelf: priceStyles[0].slashV
                                }}
                            >
                                { priceStyles[0].slashPrice}
                            </strike>
                        )}
                        {currPrice && (
                            <span
                                className={`premium-pricing-table__currency`}
                                style={{
                                    color: priceStyles[0].currColor,
                                    fontWeight: priceStyles[0].currWeight,
                                    alignSelf: priceStyles[0].currV
                                }}
                            >
                                { priceStyles[0].currPrice}
                            </span>
                        )}
                        {valPrice && (
                            <span
                                className={`premium-pricing-table__val`}
                                style={{
                                    color: priceStyles[0].valColor,
                                    fontWeight: priceStyles[0].valWeight,
                                    alignSelf: priceStyles[0].valV
                                }}
                            >
                                { priceStyles[0].valPrice}
                            </span>
                        )}
                        {divPrice && (
                            <span
                                className={`premium-pricing-table__divider`}
                                style={{
                                    color: priceStyles[0].divColor,
                                    fontWeight: priceStyles[0].divWeight,
                                    alignSelf: priceStyles[0].divV
                                }}
                            >
                                { priceStyles[0].divPrice}
                            </span>
                        )}
                        {durPrice && (
                            <span
                                className={`premium-pricing-table__dur`}
                                style={{
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
                            className={`premium-pricing-table__list list-${listStyle}`}
                            multiline="li"
                            placeholder={__("List Item #1")}
                            value={listItems}
                            onChange={newText => setAttributes({ listItems: newText })}
                            style={{
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
                                    ? `${buttonStyles[0].btnBorderTop}px ${buttonStyles[0].btnBorderRight}px ${buttonStyles[0].btnBorderBottom}px ${buttonStyles[0].btnBorderLeft}px`
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
