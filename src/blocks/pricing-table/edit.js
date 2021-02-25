import classnames from "classnames";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumSizeUnits from "../../components/premium-size-units";

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
  Button,
} = wp.components;

const {
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
  RichText,
  PanelColorSettings,
  ColorPalette,
  URLInput,
} = wp.blockEditor;

class PremiumPricingTable extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    const { setAttributes, clientId } = this.props;

    setAttributes({ id: clientId });
  }

  render() {
    const { isSelected, setAttributes, className } = this.props;

    const {
      borderUpdated,
      btnBorderUpdated,
      contentAlign,
      tableBack,
      borderType,
      borderWidth,
      borderRadius,
      borderColor,
      tablePadding,
      titleChecked,
      tableShadowBlur,
      tableShadowColor,
      tableShadowHorizontal,
      tableShadowVertical,
      tableShadowPosition,
      title,
      titleTag,
      titleColor,
      titleSize,
      titleLine,
      titleLetter,
      titleStyle,
      titleUpper,
      titleWeight,
      titleBack,
      titleShadowBlur,
      titleShadowColor,
      titleShadowHorizontal,
      titleShadowVertical,
      titleMarginT,
      titleMarginB,
      titlePadding,
      descChecked,
      descColor,
      descSize,
      descLine,
      descWeight,
      descStyle,
      descLetter,
      desc,
      descBack,
      descMarginT,
      descMarginB,
      descPadding,
      priceChecked,
      priceBack,
      priceMarginT,
      priceMarginB,
      pricePadding,
      slashPrice,
      btnBorderTop,
      btnBorderRight,
      btnBorderBottom,
      btnBorderLeft,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      slashColor,
      slashSize,
      slashWeight,
      slashV,
      currPrice,
      currColor,
      currSize,
      currWeight,
      currV,
      valPrice,
      valColor,
      valSize,
      valWeight,
      valV,
      divPrice,
      divColor,
      divSize,
      divWeight,
      divV,
      durPrice,
      durColor,
      durSize,
      durWeight,
      durV,
      selectedStyle,
      btnChecked,
      btnText,
      btnTarget,
      btnLink,
      btnColor,
      btnHoverColor,
      btnSize,
      btnWeight,
      btnLetter,
      btnLine,
      btnUpper,
      btnStyle,
      btnBack,
      btnHoverBack,
      btnMarginT,
      btnMarginB,
      btnPadding,
      btnPaddingU,
      btnWidth,
      btnBorderType,
      btnBorderWidth,
      btnBorderRadius,
      btnBorderColor,
      badgeChecked,
      badgePos,
      badgeBack,
      badgeColor,
      badgeSize,
      badgeTextSize,
      badgeTop,
      badgeHorizontal,
      badgeWidth,
      badgeWeight,
      badgeLetter,
      badgeStyle,
      badgeUpper,
      badgeText,
      listChecked,
      listColor,
      listWeight,
      listSize,
      listItemsStyle,
      listLetter,
      listLine,
      listUpper,
      listBack,
      listItems,
      listMarginT,
      listMarginB,
      listPadding,
      listStyle,
      featsAlign,
      id,
    } = this.props.attributes;

    const ALIGNS = [
      {
        value: "flex-start",
        label: __("Top"),
      },
      {
        value: "center",
        label: __("Middle"),
      },
      {
        value: "flex-end",
        label: __("Bottom"),
      },
    ];
    const PRICE = [
      {
        value: "slash",
        label: __("Slashed Price"),
      },
      {
        value: "curr",
        label: __("Currency"),
      },
      {
        value: "price",
        label: __("Price"),
      },
      {
        value: "divider",
        label: __("Divider"),
      },
      {
        value: "duration",
        label: __("Duration"),
      },
    ];
    const TYPE = [
      {
        value: "none",
        label: __("None"),
      },
      {
        value: "check",
        label: __("Check Mark"),
      },
      {
        value: "disc",
        label: __("Filled Circle"),
      },
      {
        value: "circle",
        label: __("Outline Circle"),
      },
      {
        value: "square",
        label: __("Square"),
      },
    ];
    const POSITION = [
      {
        value: "right",
        label: __("Right"),
      },
      {
        value: "left",
        label: __("Left"),
      },
    ];

    const FEATURES_ALIGN = ["left", "center", "right"];

    const mainClasses = classnames(className, "premium-pricing-table");

    return [
      isSelected && (
        <BlockControls key="controls">
          <AlignmentToolbar
            value={contentAlign}
            onChange={(newAlign) => setAttributes({ contentAlign: newAlign })}
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
              onChange={(newValue) => setAttributes({ titleChecked: newValue })}
            />
            <ToggleControl
              label={__("Price")}
              checked={priceChecked}
              onChange={(newValue) => setAttributes({ priceChecked: newValue })}
            />
            <ToggleControl
              label={__("Features")}
              checked={listChecked}
              onChange={(newValue) => setAttributes({ listChecked: newValue })}
            />
            <ToggleControl
              label={__("Description")}
              checked={descChecked}
              onChange={(newValue) => setAttributes({ descChecked: newValue })}
            />
            <ToggleControl
              label={__("Button")}
              checked={btnChecked}
              onChange={(newValue) => setAttributes({ btnChecked: newValue })}
            />
            <ToggleControl
              label={__("Badge")}
              checked={badgeChecked}
              onChange={(newValue) => setAttributes({ badgeChecked: newValue })}
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
                controls={"123456".split("").map((tag) => ({
                  icon: "heading",
                  isActive: "H" + tag === titleTag,
                  onClick: () => setAttributes({ titleTag: "H" + tag }),
                  subscript: tag,
                }))}
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
                onChangeSize={(newSize) =>
                  setAttributes({ titleSize: newSize })
                }
                onChangeWeight={(newWeight) =>
                  setAttributes({ titleWeight: newWeight })
                }
                onChangeStyle={(newStyle) =>
                  setAttributes({ titleStyle: newStyle })
                }
                onChangeSpacing={(newValue) =>
                  setAttributes({ titleLetter: newValue })
                }
                onChangeLine={(newValue) =>
                  setAttributes({ titleLine: newValue })
                }
                onChangeUpper={(check) => setAttributes({ titleUpper: check })}
              />
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: titleColor,
                    onChange: (newColor) =>
                      setAttributes({ titleColor: newColor }),
                    label: __("Text Color"),
                  },
                  {
                    value: titleBack,
                    onChange: (newColor) =>
                      setAttributes({ titleBack: newColor }),
                    label: __("Background Color"),
                  },
                ]}
              />
              <PremiumTextShadow
                color={titleShadowColor}
                blur={titleShadowBlur}
                horizontal={titleShadowHorizontal}
                vertical={titleShadowVertical}
                onChangeColor={(newColor) =>
                  setAttributes({ titleShadowColor: newColor.hex })
                }
                onChangeBlur={(newBlur) =>
                  setAttributes({ titleShadowBlur: newBlur })
                }
                onChangehHorizontal={(newValue) =>
                  setAttributes({ titleShadowHorizontal: newValue })
                }
                onChangeVertical={(newValue) =>
                  setAttributes({ titleShadowVertical: newValue })
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
                        value={titleMarginT}
                        min="10"
                        max="80"
                        onChange={(newSize) =>
                          setAttributes({ titleMarginT: newSize })
                        }
                      />
                      <RangeControl
                        label={__("Margin Bottom (PX)")}
                        value={titleMarginB}
                        min="0"
                        max="100"
                        onChange={(newMargin) =>
                          setAttributes({ titleMarginB: newMargin })
                        }
                      />
                      <RangeControl
                        label={__("Padding (PX)")}
                        value={titlePadding}
                        min="0"
                        max="100"
                        onChange={(newPadding) =>
                          setAttributes({ titlePadding: newPadding })
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
                value={slashPrice}
                onChange={(value) => setAttributes({ slashPrice: value })}
              />
              <TextControl
                label={__("Currency")}
                value={currPrice}
                onChange={(value) => setAttributes({ currPrice: value })}
              />
              <TextControl
                label={__("Price")}
                value={valPrice}
                onChange={(value) => setAttributes({ valPrice: value })}
              />
              <TextControl
                label={__("Divider")}
                value={divPrice}
                onChange={(value) => setAttributes({ divPrice: value })}
              />
              <TextControl
                label={__("Duration")}
                value={durPrice}
                onChange={(value) => setAttributes({ durPrice: value })}
              />
              <PanelBody
                title={__("Element to Style")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <SelectControl
                  label={__("Element")}
                  options={PRICE}
                  value={selectedStyle}
                  onChange={(newElem) =>
                    setAttributes({ selectedStyle: newElem })
                  }
                />
                {"slash" === selectedStyle && (
                  <Fragment>
                    <PremiumTypo
                      components={["size", "weight"]}
                      size={slashSize}
                      weight={slashWeight}
                      onChangeSize={(newSize) =>
                        setAttributes({ slashSize: newSize })
                      }
                      onChangeWeight={(newWeight) =>
                        setAttributes({ slashWeight: newWeight })
                      }
                    />
                    <SelectControl
                      label={__("Vertical Align")}
                      options={ALIGNS}
                      value={slashV}
                      onChange={(newValue) =>
                        setAttributes({ slashV: newValue })
                      }
                    />
                    <Fragment>
                      <p>{__("Text Color")}</p>
                      <ColorPalette
                        value={slashColor}
                        onChange={(newValue) =>
                          setAttributes({
                            slashColor:
                              newValue === undefined ? "transparent" : newValue,
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
                      components={["size", "weight"]}
                      size={currSize}
                      weight={currWeight}
                      onChangeSize={(newSize) =>
                        setAttributes({ currSize: newSize })
                      }
                      onChangeWeight={(newWeight) =>
                        setAttributes({ currWeight: newWeight })
                      }
                    />
                    <SelectControl
                      label={__("Vertical Align")}
                      options={ALIGNS}
                      value={currV}
                      onChange={(newValue) =>
                        setAttributes({ currV: newValue })
                      }
                    />
                    <Fragment>
                      <p>{__("Text Color")}</p>
                      <ColorPalette
                        value={currColor}
                        onChange={(newValue) =>
                          setAttributes({
                            currColor:
                              newValue === undefined ? "transparent" : newValue,
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
                      components={["size", "weight"]}
                      size={valSize}
                      weight={valWeight}
                      onChangeSize={(newSize) =>
                        setAttributes({ valSize: newSize })
                      }
                      onChangeWeight={(newWeight) =>
                        setAttributes({ valWeight: newWeight })
                      }
                    />
                    <SelectControl
                      label={__("Vertical Align")}
                      options={ALIGNS}
                      value={valV}
                      onChange={(newValue) => setAttributes({ valV: newValue })}
                    />
                    <Fragment>
                      <p>{__("Text Color")}</p>
                      <ColorPalette
                        value={valColor}
                        onChange={(newValue) =>
                          setAttributes({
                            valColor:
                              newValue === undefined ? "transparent" : newValue,
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
                      components={["size", "weight"]}
                      size={divSize}
                      weight={divWeight}
                      onChangeSize={(newSize) =>
                        setAttributes({ divSize: newSize })
                      }
                      onChangeWeight={(newWeight) =>
                        setAttributes({ divWeight: newWeight })
                      }
                    />
                    <SelectControl
                      label={__("Vertical Align")}
                      options={ALIGNS}
                      value={divV}
                      onChange={(newValue) => setAttributes({ divV: newValue })}
                    />
                    <Fragment>
                      <p>{__("Text Color")}</p>
                      <ColorPalette
                        value={divColor}
                        onChange={(newValue) =>
                          setAttributes({
                            divColor:
                              newValue === undefined ? "transparent" : newValue,
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
                      components={["size", "weight"]}
                      size={durSize}
                      weight={durWeight}
                      onChangeSize={(newSize) =>
                        setAttributes({ durSize: newSize })
                      }
                      onChangeWeight={(newWeight) =>
                        setAttributes({ durWeight: newWeight })
                      }
                    />
                    <SelectControl
                      label={__("Vertical Align")}
                      options={ALIGNS}
                      value={durV}
                      onChange={(newValue) => setAttributes({ durV: newValue })}
                    />
                    <Fragment>
                      <p>{__("Text Color")}</p>
                      <ColorPalette
                        value={durColor}
                        onChange={(newValue) =>
                          setAttributes({
                            durColor:
                              newValue === undefined ? "transparent" : newValue,
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
                        value={priceMarginT}
                        min="0"
                        max="100"
                        onChange={(newMargin) =>
                          setAttributes({ priceMarginT: newMargin })
                        }
                      />
                      <RangeControl
                        label={__("Container Margin Bottom (PX)")}
                        value={priceMarginB}
                        min="0"
                        max="100"
                        onChange={(newPadding) =>
                          setAttributes({ priceMarginB: newPadding })
                        }
                      />
                      <RangeControl
                        label={__("Container Padding (PX)")}
                        value={pricePadding}
                        min="0"
                        max="100"
                        onChange={(newPadding) =>
                          setAttributes({ pricePadding: newPadding })
                        }
                      />
                    </Fragment>
                  )}
                />
              </div>

              <Fragment>
                <p>{__("Container Background Color")}</p>
                <ColorPalette
                  value={priceBack}
                  onChange={(newValue) =>
                    setAttributes({
                      priceBack:
                        newValue === undefined ? "transparent" : newValue,
                    })
                  }
                  allowReset={true}
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
                controls={FEATURES_ALIGN.map((contentAlign) => ({
                  icon: "editor-align" + contentAlign,
                  isActive: contentAlign === featsAlign,
                  onClick: () => setAttributes({ featsAlign: contentAlign }),
                }))}
              />
              <SelectControl
                label={__("List Style")}
                options={TYPE}
                value={listStyle}
                onChange={(newType) => setAttributes({ listStyle: newType })}
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
                size={listSize}
                weight={listWeight}
                style={listItemsStyle}
                spacing={listLetter}
                line={listLine}
                upper={listUpper}
                onChangeSize={(newSize) => setAttributes({ listSize: newSize })}
                onChangeWeight={(newWeight) =>
                  setAttributes({ listWeight: newWeight })
                }
                onChangeStyle={(newStyle) =>
                  setAttributes({ listItemsStyle: newStyle })
                }
                onChangeSpacing={(newValue) =>
                  setAttributes({ listLetter: newValue })
                }
                onChangeLine={(newValue) =>
                  setAttributes({ listLine: newValue })
                }
                onChangeUpper={(check) => setAttributes({ listUpper: check })}
              />
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: listColor,
                    onChange: (newColor) =>
                      setAttributes({ listColor: newColor }),
                    label: __("List Items Color"),
                  },
                  {
                    value: listBack,
                    onChange: (newColor) =>
                      setAttributes({ listBack: newColor }),
                    label: __("Background Color"),
                  },
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
                        value={listMarginT}
                        onChange={(newSize) =>
                          setAttributes({ listMarginT: newSize })
                        }
                      />
                      <RangeControl
                        label={__("Margin Bottom (PX)")}
                        value={listMarginB}
                        onChange={(newSize) =>
                          setAttributes({ listMarginB: newSize })
                        }
                      />
                      <RangeControl
                        label={__("Padding (PX)")}
                        value={listPadding}
                        onChange={(newSize) =>
                          setAttributes({ listPadding: newSize })
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
                components={["size", "weight", "style", "spacing", "line"]}
                size={descSize}
                weight={descWeight}
                style={descStyle}
                spacing={descLetter}
                line={descLine}
                onChangeSize={(newSize) => setAttributes({ descSize: newSize })}
                onChangeWeight={(newWeight) =>
                  setAttributes({ descWeight: newWeight })
                }
                onChangeStyle={(newStyle) =>
                  setAttributes({ descStyle: newStyle })
                }
                onChangeSpacing={(newValue) =>
                  setAttributes({ descLetter: newValue })
                }
                onChangeLine={(newValue) =>
                  setAttributes({ descLine: newValue })
                }
              />
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: descColor,
                    onChange: (newColor) =>
                      setAttributes({ descColor: newColor }),
                    label: __("Text Color"),
                  },
                  {
                    value: descBack,
                    onChange: (newColor) =>
                      setAttributes({ descBack: newColor }),
                    label: __("Background Color"),
                  },
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
                        value={descMarginT}
                        min="0"
                        max="100"
                        onChange={(newMargin) =>
                          setAttributes({ descMarginT: newMargin })
                        }
                      />
                      <RangeControl
                        label={__("Margin Bottom (PX)")}
                        value={descMarginB}
                        min="0"
                        max="100"
                        onChange={(newMargin) =>
                          setAttributes({ descMarginB: newMargin })
                        }
                      />
                      <RangeControl
                        label={__("Padding (PX)")}
                        value={descPadding}
                        min="0"
                        max="100"
                        onChange={(newPadding) =>
                          setAttributes({ descPadding: newPadding })
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
                  "size",
                  "weight",
                  "style",
                  "upper",
                  "spacing",
                  "line",
                ]}
                size={btnSize}
                weight={btnWeight}
                style={btnStyle}
                spacing={btnLetter}
                line={btnLine}
                upper={btnUpper}
                onChangeSize={(newSize) => setAttributes({ btnSize: newSize })}
                onChangeWeight={(newWeight) =>
                  setAttributes({ btnWeight: newWeight })
                }
                onChangeStyle={(newStyle) =>
                  setAttributes({ btnStyle: newStyle })
                }
                onChangeSpacing={(newValue) =>
                  setAttributes({ btnLetter: newValue })
                }
                onChangeLine={(newValue) =>
                  setAttributes({ btnLine: newValue })
                }
                onChangeUpper={(check) => setAttributes({ btnUpper: check })}
              />
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: btnColor,
                    onChange: (newColor) =>
                      setAttributes({ btnColor: newColor }),
                    label: __("Text Color"),
                  },
                  {
                    value: btnHoverColor,
                    onChange: (newColor) =>
                      setAttributes({ btnHoverColor: newColor }),
                    label: __("Text Hover Color"),
                  },
                  {
                    value: btnBack,
                    onChange: (newColor) =>
                      setAttributes({ btnBack: newColor }),
                    label: __("Background Color"),
                  },
                  {
                    value: btnHoverBack,
                    onChange: (newColor) =>
                      setAttributes({ btnHoverBack: newColor }),
                    label: __("Background Hover Color"),
                  },
                ]}
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
                    btnBorderUpdated: true,
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
                        value={btnWidth}
                        onChange={(newSize) =>
                          setAttributes({ btnWidth: newSize })
                        }
                      />
                      <RangeControl
                        label={__("Margin Top (PX)")}
                        value={btnMarginT}
                        min="0"
                        max="100"
                        onChange={(newPadding) =>
                          setAttributes({ btnMarginT: newPadding })
                        }
                      />
                      <RangeControl
                        label={__("Margin Bottom (PX)")}
                        value={btnMarginB}
                        min="0"
                        max="100"
                        onChange={(newPadding) =>
                          setAttributes({ btnMarginB: newPadding })
                        }
                      />
                      <PremiumSizeUnits
                        onChangeSizeUnit={(newValue) =>
                          setAttributes({ btnPaddingU: newValue })
                        }
                      />
                      <RangeControl
                        label={__("Padding")}
                        value={btnPadding}
                        min="0"
                        max="100"
                        onChange={(newPadding) =>
                          setAttributes({ btnPadding: newPadding })
                        }
                      />
                    </Fragment>
                  )}
                />
              </div>
              <ToggleControl
                label={__("Open Link in a new tab")}
                checked={btnTarget}
                onChange={(newValue) => setAttributes({ btnTarget: newValue })}
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
                value={badgeText}
                onChange={(value) => setAttributes({ badgeText: value })}
              />
              <SelectControl
                label={__("Position")}
                options={POSITION}
                value={badgePos}
                onChange={(newValue) => setAttributes({ badgePos: newValue })}
              />
              <PremiumTypo
                components={["size", "weight", "style", "upper", "spacing"]}
                size={badgeTextSize}
                weight={badgeWeight}
                style={badgeStyle}
                spacing={badgeLetter}
                upper={badgeUpper}
                onChangeSize={(newSize) =>
                  setAttributes({ badgeTextSize: newSize })
                }
                onChangeWeight={(newWeight) =>
                  setAttributes({ badgeWeight: newWeight })
                }
                onChangeStyle={(newStyle) =>
                  setAttributes({ badgeStyle: newStyle })
                }
                onChangeSpacing={(newValue) =>
                  setAttributes({ badgeLetter: newValue })
                }
                onChangeUpper={(check) => setAttributes({ badgeUpper: check })}
              />
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: badgeColor,
                    onChange: (newColor) =>
                      setAttributes({ badgeColor: newColor }),
                    label: __("Text Color"),
                  },
                  {
                    value: badgeBack,
                    onChange: (newColor) =>
                      setAttributes({ badgeBack: newColor }),
                    label: __("Background Color"),
                  },
                ]}
              />
              <RangeControl
                label={__("Vertical Offset")}
                value={badgeTop}
                onChange={(newValue) => setAttributes({ badgeTop: newValue })}
              />
              <RangeControl
                label={__("Horizontal Offset")}
                value={badgeHorizontal}
                min="1"
                max="150"
                onChange={(newValue) =>
                  setAttributes({ badgeHorizontal: newValue })
                }
              />
              <RangeControl
                label={__("Badge Size")}
                value={badgeSize}
                max="250"
                onChange={(newValue) => setAttributes({ badgeSize: newValue })}
              />
              <RangeControl
                label={__("Text Width")}
                min="1"
                max="200"
                value={badgeWidth}
                onChange={(newValue) => setAttributes({ badgeWidth: newValue })}
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
              <ColorPalette
                value={tableBack}
                onChange={(newValue) =>
                  setAttributes({
                    tableBack:
                      newValue === undefined ? "transparent" : newValue,
                  })
                }
                allowReset={true}
              />
            </Fragment>
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
                  borderUpdated: true,
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
              color={tableShadowColor}
              blur={tableShadowBlur}
              horizontal={tableShadowHorizontal}
              vertical={tableShadowVertical}
              position={tableShadowPosition}
              onChangeColor={(newColor) =>
                setAttributes({
                  tableShadowColor:
                    newColor === undefined ? "transparent" : newColor.hex,
                })
              }
              onChangeBlur={(newBlur) =>
                setAttributes({
                  tableShadowBlur: newBlur === undefined ? 0 : newBlur,
                })
              }
              onChangehHorizontal={(newValue) =>
                setAttributes({
                  tableShadowHorizontal: newValue === undefined ? 0 : newValue,
                })
              }
              onChangeVertical={(newValue) =>
                setAttributes({
                  tableShadowVertical: newValue === undefined ? 0 : newValue,
                })
              }
              onChangePosition={(newValue) =>
                setAttributes({
                  tableShadowPosition: newValue === undefined ? 0 : newValue,
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
                      value={tablePadding}
                      min="0"
                      max="50"
                      onChange={(newValue) =>
                        setAttributes({ tablePadding: newValue })
                      }
                    />
                  </Fragment>
                )}
              />
            </div>
          </PanelBody>
        </InspectorControls>
      ),
      <div
        id={`${mainClasses}-${id}`}
        className={`${mainClasses}`}
        style={{
          textAlign: contentAlign,
          background: tableBack,
          borderStyle: borderType,
          borderWidth: borderUpdated
            ? `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`
            : borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
          padding: tablePadding + "px",
          boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`,
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
                  "right" === badgePos ? badgeBack : "transparent",
                borderTopColor: "left" === badgePos ? badgeBack : "transparent",
                borderBottomWidth: badgeSize + "px",
                borderRightWidth: badgeSize + "px",
                borderTopWidth: "left" === badgePos ? badgeSize + "px" : "none",
                borderLeftWidth:
                  "right" === badgePos ? badgeSize + "px" : "none",
              }}
            >
              <span
                style={{
                  color: badgeColor,
                  fontSize: badgeTextSize + "px",
                  fontWeight: badgeWeight,
                  textTransform: badgeUpper ? "uppercase" : "none",
                  letterSpacing: badgeLetter + "px",
                  fontStyle: badgeStyle,
                  width: badgeWidth + "px",
                  top: badgeTop + "px",
                  left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                  right: "right" === badgePos ? badgeHorizontal + "px" : "auto",
                }}
              >
                {badgeText}
              </span>
            </div>
          </div>
        )}
        {titleChecked && (
          <div
            className={`premium-pricing-table__title_wrap`}
            style={{
              paddingTop: titleMarginT + "px",
              paddingBottom: titleMarginB + "px",
            }}
          >
            <RichText
              tagName={titleTag.toLowerCase()}
              className={`premium-pricing-table__title`}
              onChange={(newText) => setAttributes({ title: newText })}
              placeholder={__("Awesome Title")}
              value={title}
              style={{
                color: titleColor,
                background: titleBack,
                fontSize: titleSize + "px",
                letterSpacing: titleLetter + "px",
                textTransform: titleUpper ? "uppercase" : "none",
                fontStyle: titleStyle,
                fontWeight: titleWeight,
                lineHeight: titleLine + "px",
                padding: titlePadding + "px",
                textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
              }}
            />
          </div>
        )}
        {priceChecked && (
          <div
            className={`premium-pricing-table__price_wrap`}
            style={{
              background: priceBack,
              marginTop: priceMarginT + "px",
              marginBottom: priceMarginB + "px",
              padding: pricePadding + "px",
              justifyContent: contentAlign,
            }}
          >
            {slashPrice && (
              <strike
                className={`premium-pricing-table__slash`}
                style={{
                  color: slashColor,
                  fontSize: slashSize + "px",
                  fontWeight: slashWeight,
                  alignSelf: slashV,
                }}
              >
                {slashPrice}
              </strike>
            )}
            {currPrice && (
              <span
                className={`premium-pricing-table__currency`}
                style={{
                  color: currColor,
                  fontSize: currSize + "px",
                  fontWeight: currWeight,
                  alignSelf: currV,
                }}
              >
                {currPrice}
              </span>
            )}
            {valPrice && (
              <span
                className={`premium-pricing-table__val`}
                style={{
                  color: valColor,
                  fontSize: valSize + "px",
                  fontWeight: valWeight,
                  alignSelf: valV,
                }}
              >
                {valPrice}
              </span>
            )}
            {divPrice && (
              <span
                className={`premium-pricing-table__divider`}
                style={{
                  color: divColor,
                  fontSize: divSize + "px",
                  fontWeight: divWeight,
                  alignSelf: divV,
                }}
              >
                {divPrice}
              </span>
            )}
            {durPrice && (
              <span
                className={`premium-pricing-table__dur`}
                style={{
                  color: durColor,
                  fontSize: durSize + "px",
                  fontWeight: durWeight,
                  alignSelf: durV,
                }}
              >
                {durPrice}
              </span>
            )}
          </div>
        )}
        {listChecked && (
          <div
            className={`premium-pricing-table__list_wrap`}
            style={{
              marginTop: listMarginT + "px",
              marginBottom: listMarginB + "px",
            }}
          >
            <RichText
              tagName="ul"
              className={`premium-pricing-table__list list-${listStyle}`}
              multiline="li"
              placeholder={__("List Item #1")}
              value={listItems}
              onChange={(newText) => setAttributes({ listItems: newText })}
              style={{
                color: listColor,
                fontSize: listSize + "px",
                background: listBack,
                padding: listPadding + "px",
                listStyle: "check" !== listStyle ? listStyle : "none",
                listStylePosition: "inside",
                fontWeight: listWeight,
                textTransform: listUpper ? "uppercase" : "none",
                letterSpacing: listLetter + "px",
                fontStyle: listItemsStyle,
                lineHeight: listLine + "px",
                textAlign: featsAlign ? featsAlign : contentAlign,
              }}
            />
          </div>
        )}
        {descChecked && (
          <div className={`premium-pricing-table__desc_wrap`}>
            <RichText
              tagName="p"
              className={`premium-pricing-table__desc`}
              onChange={(newText) => setAttributes({ desc: newText })}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              value={desc}
              style={{
                color: descColor,
                background: descBack,
                fontSize: descSize + "px",
                fontWeight: descWeight,
                letterSpacing: descLetter + "px",
                fontStyle: descStyle,
                lineHeight: descLine + "px",
                marginTop: descMarginT + "px",
                marginBottom: descMarginB + "px",
                padding: descPadding + "px",
              }}
            />
          </div>
        )}
        {btnChecked && (
          <div
            className={`premium-pricing-table__button`}
            style={{
              width: btnWidth + "%",
            }}
          >
            <a
              class={`premium-pricing-table__button_link`}
              href="{ attributes.btnUrl }"
              target={btnTarget ? "_blank" : "_self"}
              style={{
                color: btnColor,
                background: btnBack ? btnBack : "transparent",
                fontSize: btnSize + "px",
                fontWeight: btnWeight,
                letterSpacing: btnLetter + "px",
                fontStyle: btnStyle,
                lineHeight: btnLine + "px",
                marginTop: btnMarginT,
                marginBottom: btnMarginB,
                padding: btnPadding + btnPaddingU,
                borderStyle: btnBorderType,
                borderWidth: btnBorderUpdated
                  ? `${btnBorderTop}px ${btnBorderRight}px ${btnBorderBottom}px ${btnBorderLeft}px`
                  : btnBorderWidth + "px",
                borderRadius: btnBorderRadius + "px",
                borderColor: btnBorderColor,
              }}
            >
              <RichText
                tagName="span"
                onChange={(newText) => setAttributes({ btnText: newText })}
                value={btnText}
                style={{
                  textTransform: btnUpper ? "uppercase" : "none",
                }}
              />
            </a>
            <URLInput
              value={btnLink}
              onChange={(newLink) => setAttributes({ btnLink: newLink })}
            />
            <style
              dangerouslySetInnerHTML={{
                __html: [
                  `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                  `color: ${btnHoverColor} !important;`,
                  `background: ${btnHoverBack} !important`,
                  "}",
                ].join("\n"),
              }}
            />
          </div>
        )}
      </div>,
    ];
  }
}

export default PremiumPricingTable;
