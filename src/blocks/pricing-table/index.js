import { pricingTable } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";

if (pricingTable) {
  const blockClass = "premium-pricing-table";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const { Fragment } = wp.element;

  const {
    Toolbar,
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl
  } = wp.components;

  const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    RichText,
    PanelColorSettings,
    URLInput
  } = wp.editor;

  registerBlockType("premium/pricing-table", {
    title: __("Pricing Table"),
    icon: "editor-table",
    category: "premium-blocks",
    attributes: {
      contentAlign: {
        type: "string",
        default: "center"
      },
      tableBack: {
        type: "string"
      },
      borderType: {
        type: "string",
        default: "none"
      },
      borderWidth: {
        type: "number",
        default: "1"
      },
      borderRadius: {
        type: "number",
        default: "0"
      },
      borderColor: {
        type: "string"
      },
      tablePadding: {
        type: "number",
        default: "0"
      },
      title: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__title",
        default: "Pricing Table"
      },
      titleTag: {
        type: "string",
        default: "H2"
      },
      titleColor: {
        type: "string",
        default: "#6ec1e4"
      },
      titleSize: {
        type: "number"
      },
      titleLine: {
        type: "number"
      },
      titleLetter: {
        type: "number"
      },
      titleStyle: {
        type: "string"
      },
      titleUpper: {
        type: "boolean"
      },
      titleWeight: {
        type: "number",
        default: 500
      },
      titleBack: {
        type: "string"
      },
      titleMarginB: {
        type: "number",
        default: 20
      },
      titleMarginT: {
        type: "number",
        default: 20
      },
      titlePadding: {
        type: "number",
        default: "0"
      },
      desc: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__desc"
      },
      descColor: {
        type: "string",
        default: "#000"
      },
      descSize: {
        type: "number"
      },
      descLine: {
        type: "number"
      },
      descWeight: {
        type: "number"
      },
      descBack: {
        type: "string"
      },
      descMarginT: {
        type: "number",
        default: "0"
      },
      descMarginB: {
        type: "number",
        default: "30"
      },
      descPadding: {
        type: "number",
        default: "0"
      },
      titleChecked: {
        type: "boolean",
        default: true
      },
      descChecked: {
        type: "boolean",
        default: false
      },
      priceChecked: {
        type: "boolean",
        default: true
      },
      priceBack: {
        type: "string"
      },
      priceMarginT: {
        type: "number"
      },
      priceMarginB: {
        type: "number",
        default: 10
      },
      pricePadding: {
        type: "number"
      },
      slashPrice: {
        type: "string"
      },
      slashColor: {
        type: "string"
      },
      slashSize: {
        type: "number",
        default: 20
      },
      slashWeight: {
        type: "number"
      },
      currPrice: {
        type: "string",
        default: "$"
      },
      currColor: {
        type: "string"
      },
      currSize: {
        type: "number",
        default: 20
      },
      currWeight: {
        type: "number"
      },
      valPrice: {
        type: "string",
        default: "25"
      },
      valColor: {
        type: "string"
      },
      valSize: {
        type: "number",
        default: 50
      },
      valWeight: {
        type: "number"
      },
      divPrice: {
        type: "string",
        default: "/"
      },
      divColor: {
        type: "string"
      },
      divSize: {
        type: "number",
        default: 20
      },
      divWeight: {
        type: "number"
      },
      durPrice: {
        type: "string",
        default: "m"
      },
      durColor: {
        type: "string"
      },
      durSize: {
        type: "number",
        default: 20
      },
      durWeight: {
        type: "number"
      },
      selectedStyle: {
        type: "string",
        default: "price"
      },
      btnChecked: {
        type: "boolean",
        default: true
      },
      btnText: {
        type: "string",
        default: "Get Started"
      },
      btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-pricing__button_link"
      },
      btnTarget: {
        type: "boolean",
        default: true
      },
      btnColor: {
        type: "string",
        default: "#fff"
      },
      btnWidth: {
        type: "number"
      },
      btnSize: {
        type: "number"
      },
      btnWeight: {
        type: "number",
        default: 900
      },
      btnBack: {
        type: "string",
        default: "#6ec1e4"
      },
      btnMarginT: {
        type: "number",
        default: "0"
      },
      btnMarginB: {
        type: "number",
        default: "0"
      },
      btnPadding: {
        type: "number",
        default: 10
      },
      btnBorderType: {
        type: "string",
        default: "none"
      },
      btnBorderWidth: {
        type: "number",
        default: "1"
      },
      btnBorderRadius: {
        type: "number",
        default: "0"
      },
      btnBorderColor: {
        type: "string"
      },
      badgeChecked: {
        type: "boolean",
        default: true
      },
      badgePos: {
        type: "string",
        default: "right"
      },
      badgeBack: {
        type: "string",
        default: "#6ec1e4"
      },
      badgeSize: {
        type: "number"
      },
      badgeText: {
        type: "string",
        default: "popular"
      },
      listChecked: {
        type: "boolean",
        default: true
      },
      listColor: {
        type: "string"
      },
      listSize: {
        type: "number"
      },
      listWeight: {
        type: "number",
        default: 500
      },
      listItemsStyle: {
        type: "string"
      },
      listLetter: {
        type: "number"
      },
      listLine: {
        type: "number"
      },
      listUpper: {
        type: "boolean"
      },
      listBack: {
        type: "string"
      },
      listItems: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__list"
      },
      listMarginB: {
        type: "number",
        default: 20
      },
      listMarginT: {
        type: "number"
      },
      listPadding: {
        type: "number"
      },
      listStyle: {
        type: "string",
        default: "disc"
      },
      slashV: {
        type: "string",
        default: "center"
      },
      currV: {
        type: "string",
        default: "center"
      },
      valV: {
        type: "string",
        default: "center"
      },
      divV: {
        type: "string",
        default: "center"
      },
      durV: {
        type: "string",
        default: "center"
      }
    },
    edit: props => {
      const { isSelected, setAttributes, className } = props;
      const {
        contentAlign,
        tableBack,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        tablePadding,
        titleChecked,
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
        titleMarginT,
        titleMarginB,
        titlePadding,
        descChecked,
        desc,
        descColor,
        descSize,
        descLine,
        descWeight,
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
        btnSize,
        btnWeight,
        btnBack,
        btnMarginT,
        btnMarginB,
        btnPadding,
        btnWidth,
        btnBorderType,
        btnBorderWidth,
        btnBorderRadius,
        btnBorderColor,
        badgeChecked,
        badgePos,
        badgeBack,
        badgeSize,
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
        listStyle
      } = props.attributes;
      const ALIGNS = [
        {
          value: "flex-start",
          label: "Top"
        },
        {
          value: "center",
          label: "Middle"
        },
        {
          value: "flex-end",
          label: "Bottom"
        }
      ];
      const PRICE = [
        {
          value: "slash",
          label: "Slashed Price"
        },
        {
          value: "curr",
          label: "Currency"
        },
        {
          value: "price",
          label: "Price"
        },
        {
          value: "divider",
          label: "Divider"
        },
        {
          value: "duration",
          label: "Duration"
        }
      ];
      const TYPE = [
        {
          value: "none",
          label: "None"
        },
        {
          value: "check",
          label: "Check Mark"
        },
        {
          value: "disc",
          label: "Filled Circle"
        },
        {
          value: "circle",
          label: "Outline Circle"
        },
        {
          value: "square",
          label: "Square"
        }
      ];
      const POSITION = [
        {
          value: "right",
          label: "Right"
        },
        {
          value: "left",
          label: "Left"
        }
      ];
      const STYLE = [
        {
          value: "normal",
          label: "Normal"
        },
        {
          value: "italic",
          label: "Italic"
        }
      ];
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
            <PanelBody title={__("Display Options")} initialOpen={false}>
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
              <PanelBody title={__("Title")} initialOpen={false}>
                <PanelBody title={__("Font")} initialOpen={false}>
                  <Toolbar
                    controls={"123456".split("").map(tag => ({
                      icon: "heading",
                      isActive: "H" + tag === titleTag,
                      onClick: () => setAttributes({ titleTag: "H" + tag }),
                      subscript: tag
                    }))}
                  />
                  <PremiumTypo
                    components={[
                      "size",
                      "weight",
                      "style",
                      "upper",
                      "spacing",
                      "line"
                    ]}
                    size={titleSize}
                    weight={titleWeight}
                    style={titleStyle}
                    spacing={titleLetter}
                    line={titleLine}
                    upper={titleUpper}
                    onChangeSize={newSize =>
                      setAttributes({ titleSize: newSize })
                    }
                    onChangeWeight={newWeight =>
                      setAttributes({ titleWeight: newWeight })
                    }
                    onChangeStyle={newStyle =>
                      setAttributes({ titleStyle: newStyle })
                    }
                    onChangeSpacing={newValue =>
                      setAttributes({ titleLetter: newValue })
                    }
                    onChangeLine={newValue =>
                      setAttributes({ titleLine: newValue })
                    }
                    onChangeUpper={check =>
                      setAttributes({ titleUpper: check })
                    }
                  />
                </PanelBody>
                <PanelBody title={__("Colors")} initialOpen={false}>
                  <PanelColorSettings
                    colorSettings={[
                      {
                        value: titleColor,
                        onChange: newColor =>
                          setAttributes({ titleColor: newColor }),
                        label: __("Text Color")
                      }
                    ]}
                  />
                  <PanelColorSettings
                    colorSettings={[
                      {
                        value: titleBack,
                        onChange: newColor =>
                          setAttributes({ titleBack: newColor }),
                        label: __("Background Color")
                      }
                    ]}
                  />
                </PanelBody>
                <PanelBody title={__("Spacings")} initialOpen={false}>
                  <RangeControl
                    label={__("Margin Top (PX)")}
                    value={titleMarginT}
                    min="10"
                    max="80"
                    onChange={newSize =>
                      setAttributes({ titleMarginT: newSize })
                    }
                  />
                  <RangeControl
                    label={__("Margin Bottom (PX)")}
                    value={titleMarginB}
                    min="0"
                    max="100"
                    onChange={newMargin =>
                      setAttributes({ titleMarginB: newMargin })
                    }
                  />
                  <RangeControl
                    label={__("Padding (PX)")}
                    value={titlePadding}
                    min="0"
                    max="100"
                    onChange={newPadding =>
                      setAttributes({ titlePadding: newPadding })
                    }
                  />
                </PanelBody>
              </PanelBody>
            )}
            {priceChecked && (
              <PanelBody title={__("Price")} initialOpen={false}>
                <TextControl
                  label={__("Slashed Price")}
                  value={slashPrice}
                  onChange={value => setAttributes({ slashPrice: value })}
                />
                <TextControl
                  label={__("Currency")}
                  value={currPrice}
                  onChange={value => setAttributes({ currPrice: value })}
                />
                <TextControl
                  label={__("Price")}
                  value={valPrice}
                  onChange={value => setAttributes({ valPrice: value })}
                />
                <TextControl
                  label={__("Divider")}
                  value={divPrice}
                  onChange={value => setAttributes({ divPrice: value })}
                />
                <TextControl
                  label={__("Duration")}
                  value={durPrice}
                  onChange={value => setAttributes({ durPrice: value })}
                />
                <PanelBody title={__("Element to Style")} initialOpen={false}>
                  <SelectControl
                    label={__("Element to Style")}
                    options={PRICE}
                    value={selectedStyle}
                    onChange={newElem =>
                      setAttributes({ selectedStyle: newElem })
                    }
                  />
                  {"slash" === selectedStyle && (
                    <Fragment>
                      <PanelColorSettings
                        colorSettings={[
                          {
                            value: slashColor,
                            onChange: newColor =>
                              setAttributes({ slashColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                      <PremiumTypo
                        components={["size", "weight"]}
                        size={slashSize}
                        weight={slashWeight}
                        onChangeSize={newSize =>
                          setAttributes({ slashSize: newSize })
                        }
                        onChangeWeight={newWeight =>
                          setAttributes({ slashWeight: newWeight })
                        }
                      />
                      <SelectControl
                        label={__("Vertical Align")}
                        options={ALIGNS}
                        value={slashV}
                        onChange={newValue =>
                          setAttributes({ slashV: newValue })
                        }
                      />
                    </Fragment>
                  )}
                  {"curr" === selectedStyle && (
                    <Fragment>
                      <PanelColorSettings
                        colorSettings={[
                          {
                            value: currColor,
                            onChange: newColor =>
                              setAttributes({ currColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                      <PremiumTypo
                        components={["size", "weight"]}
                        size={currSize}
                        weight={currWeight}
                        onChangeSize={newSize =>
                          setAttributes({ currSize: newSize })
                        }
                        onChangeWeight={newWeight =>
                          setAttributes({ currWeight: newWeight })
                        }
                      />
                      <SelectControl
                        label={__("Vertical Align")}
                        options={ALIGNS}
                        value={currV}
                        onChange={newValue =>
                          setAttributes({ currV: newValue })
                        }
                      />
                    </Fragment>
                  )}
                  {"price" === selectedStyle && (
                    <Fragment>
                      <PanelColorSettings
                        colorSettings={[
                          {
                            value: valColor,
                            onChange: newColor =>
                              setAttributes({ valColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                      <PremiumTypo
                        components={["size", "weight"]}
                        size={valSize}
                        weight={valWeight}
                        onChangeSize={newSize =>
                          setAttributes({ valSize: newSize })
                        }
                        onChangeWeight={newWeight =>
                          setAttributes({ valWeight: newWeight })
                        }
                      />
                      <SelectControl
                        label={__("Vertical Align")}
                        options={ALIGNS}
                        value={valV}
                        onChange={newValue => setAttributes({ valV: newValue })}
                      />
                    </Fragment>
                  )}
                  {"divider" === selectedStyle && (
                    <Fragment>
                      <PanelColorSettings
                        colorSettings={[
                          {
                            value: divColor,
                            onChange: newColor =>
                              setAttributes({ divColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                      <PremiumTypo
                        components={["size", "weight"]}
                        size={divSize}
                        weight={divWeight}
                        onChangeSize={newSize =>
                          setAttributes({ divSize: newSize })
                        }
                        onChangeWeight={newWeight =>
                          setAttributes({ divWeight: newWeight })
                        }
                      />
                      <SelectControl
                        label={__("Vertical Align")}
                        options={ALIGNS}
                        value={divV}
                        onChange={newValue => setAttributes({ divV: newValue })}
                      />
                    </Fragment>
                  )}
                  {"duration" === selectedStyle && (
                    <Fragment>
                      <PanelColorSettings
                        colorSettings={[
                          {
                            value: durColor,
                            onChange: newColor =>
                              setAttributes({ durColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                      <PremiumTypo
                        components={["size", "weight"]}
                        size={durSize}
                        weight={durWeight}
                        onChangeSize={newSize =>
                          setAttributes({ durSize: newSize })
                        }
                        onChangeWeight={newWeight =>
                          setAttributes({ durWeight: newWeight })
                        }
                      />
                      <SelectControl
                        label={__("Vertical Align")}
                        options={ALIGNS}
                        value={durV}
                        onChange={newValue => setAttributes({ durV: newValue })}
                      />
                    </Fragment>
                  )}
                </PanelBody>
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: priceBack,
                      onChange: newColor =>
                        setAttributes({ priceBack: newColor }),
                      label: __("Container Background Color")
                    }
                  ]}
                />
                <PanelBody title={__("Spacings")} initialOpen={false}>
                  <RangeControl
                    label={__("Container Margin Top (PX)")}
                    value={priceMarginT}
                    min="0"
                    max="100"
                    onChange={newMargin =>
                      setAttributes({ priceMarginT: newMargin })
                    }
                  />
                  <RangeControl
                    label={__("Container Margin Bottom (PX)")}
                    value={priceMarginB}
                    min="0"
                    max="100"
                    onChange={newPadding =>
                      setAttributes({ priceMarginB: newPadding })
                    }
                  />
                  <RangeControl
                    label={__("Container Padding (PX)")}
                    value={pricePadding}
                    min="0"
                    max="100"
                    onChange={newPadding =>
                      setAttributes({ pricePadding: newPadding })
                    }
                  />
                </PanelBody>
              </PanelBody>
            )}
            {listChecked && (
              <PanelBody title={__("Features")} initialOpen={false}>
                <SelectControl
                  label={__("List Style")}
                  options={TYPE}
                  value={listStyle}
                  onChange={newType => setAttributes({ listStyle: newType })}
                />
                <PremiumTypo
                  components={[
                    "size",
                    "weight",
                    "style",
                    "upper",
                    "spacing",
                    "line"
                  ]}
                  size={listSize}
                  weight={listWeight}
                  style={listItemsStyle}
                  spacing={listLetter}
                  line={listLine}
                  upper={listUpper}
                  onChangeSize={newSize => setAttributes({ listSize: newSize })}
                  onChangeWeight={newWeight =>
                    setAttributes({ listWeight: newWeight })
                  }
                  onChangeStyle={newStyle =>
                    setAttributes({ listItemsStyle: newStyle })
                  }
                  onChangeSpacing={newValue =>
                    setAttributes({ listLetter: newValue })
                  }
                  onChangeLine={newValue =>
                    setAttributes({ listLine: newValue })
                  }
                  onChangeUpper={check => setAttributes({ listUpper: check })}
                />
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: listColor,
                      onChange: newColor =>
                        setAttributes({ listColor: newColor }),
                      label: __("List Items Color")
                    }
                  ]}
                />
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: listBack,
                      onChange: newColor =>
                        setAttributes({ listBack: newColor }),
                      label: __("Background Color")
                    }
                  ]}
                />
                <RangeControl
                  label={__("Margin Top (PX)")}
                  value={listMarginT}
                  onChange={newSize => setAttributes({ listMarginT: newSize })}
                />
                <RangeControl
                  label={__("Margin Bottom (PX)")}
                  value={listMarginB}
                  onChange={newSize => setAttributes({ listMarginB: newSize })}
                />
                <RangeControl
                  label={__("Padding (PX)")}
                  value={listPadding}
                  onChange={newSize => setAttributes({ listPadding: newSize })}
                />
              </PanelBody>
            )}
            {descChecked && (
              <PanelBody title={__("Description")} initialOpen={false}>
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: descColor,
                      onChange: newColor =>
                        setAttributes({ descColor: newColor }),
                      label: __("Text Color")
                    }
                  ]}
                />
                <RangeControl
                  label={__("Font Size (PX)")}
                  value={descSize}
                  min="10"
                  max="80"
                  onChange={newSize => setAttributes({ descSize: newSize })}
                />
                <RangeControl
                  label={__("Font Weight")}
                  min="100"
                  max="900"
                  step="100"
                  value={descWeight}
                  onChange={newWeight =>
                    setAttributes({ descWeight: newWeight })
                  }
                />
                <RangeControl
                  label={__("Line Height (PX)")}
                  value={descLine}
                  onChange={newValue => setAttributes({ descLine: newValue })}
                />
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: descBack,
                      onChange: newColor =>
                        setAttributes({ descBack: newColor }),
                      label: __("Background Color")
                    }
                  ]}
                />
                <RangeControl
                  label={__("Margin Top (PX)")}
                  value={descMarginT}
                  min="0"
                  max="100"
                  onChange={newMargin =>
                    setAttributes({ descMarginT: newMargin })
                  }
                />
                <RangeControl
                  label={__("Margin Bottom (PX)")}
                  value={descMarginB}
                  min="0"
                  max="100"
                  onChange={newMargin =>
                    setAttributes({ descMarginB: newMargin })
                  }
                />
                <RangeControl
                  label={__("Padding (PX)")}
                  value={descPadding}
                  min="0"
                  max="100"
                  onChange={newPadding =>
                    setAttributes({ descPadding: newPadding })
                  }
                />
              </PanelBody>
            )}
            {btnChecked && (
              <PanelBody title={__("Button")} initialOpen={false}>
                <TextControl
                  label={__("Button Text")}
                  value={btnText}
                  onChange={newText => setAttributes({ btnText: newText })}
                />
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: btnColor,
                      onChange: newColor =>
                        setAttributes({ btnColor: newColor }),
                      label: __("Text Color")
                    }
                  ]}
                />
                <RangeControl
                  label={__("Width (%)")}
                  value={btnWidth}
                  onChange={newSize => setAttributes({ btnWidth: newSize })}
                />
                <RangeControl
                  label={__("Font Size (PX)")}
                  value={btnSize}
                  min="10"
                  max="80"
                  onChange={newSize => setAttributes({ btnSize: newSize })}
                />
                <RangeControl
                  label={__("Font Weight")}
                  min="100"
                  max="900"
                  step="100"
                  value={btnWeight}
                  onChange={newWeight =>
                    setAttributes({ btnWeight: newWeight })
                  }
                />
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: btnBack,
                      onChange: newColor =>
                        setAttributes({ btnBack: newColor }),
                      label: __("Background Color")
                    }
                  ]}
                />
                <PremiumBorder
                  borderType={btnBorderType}
                  borderWidth={btnBorderWidth}
                  borderColor={btnBorderColor}
                  borderRadius={btnBorderRadius}
                  onChangeType={newType =>
                    setAttributes({ btnBorderType: newType })
                  }
                  onChangeWidth={newWidth =>
                    setAttributes({ btnBorderWidth: newWidth })
                  }
                  onChangeColor={colorValue =>
                    setAttributes({ btnBorderColor: colorValue })
                  }
                  onChangeRadius={newrRadius =>
                    setAttributes({ btnBorderRadius: newrRadius })
                  }
                />
                <RangeControl
                  label={__("Margin Top (PX)")}
                  value={btnMarginT}
                  min="0"
                  max="100"
                  onChange={newPadding =>
                    setAttributes({ btnMarginT: newPadding })
                  }
                />
                <RangeControl
                  label={__("Margin Bottom (PX)")}
                  value={btnMarginB}
                  min="0"
                  max="100"
                  onChange={newPadding =>
                    setAttributes({ btnMarginB: newPadding })
                  }
                />
                <RangeControl
                  label={__("Padding (PX)")}
                  value={btnPadding}
                  min="0"
                  max="100"
                  onChange={newPadding =>
                    setAttributes({ btnPadding: newPadding })
                  }
                />
                <ToggleControl
                  label={__("Open Link in a new tab")}
                  checked={btnTarget}
                  onChange={newValue => setAttributes({ btnTarget: newValue })}
                />
              </PanelBody>
            )}
            {badgeChecked && (
              <PanelBody title={__("Badge")} initialOpen={false}>
                <SelectControl
                  label={__("Position")}
                  options={POSITION}
                  value={badgePos}
                  onChange={newValue => setAttributes({ badgePos: newValue })}
                />
                <TextControl
                  label={__("Text")}
                  value={badgeText}
                  onChange={value => setAttributes({ badgeText: value })}
                />
                <RangeControl
                  label={__("Size")}
                  value={badgeSize}
                  max="250"
                  onChange={newValue => setAttributes({ badgeSize: newValue })}
                />
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: badgeBack,
                      onChange: newColor =>
                        setAttributes({ badgeBack: newColor }),
                      label: __("Background Color")
                    }
                  ]}
                />
              </PanelBody>
            )}
            <PanelBody title={__("Table")} initialOpen={false}>
              <PanelColorSettings
                colorSettings={[
                  {
                    value: tableBack,
                    onChange: newColor =>
                      setAttributes({ tableBack: newColor }),
                    label: __("Background Color")
                  }
                ]}
              />
              <PremiumBorder
                borderType={borderType}
                borderWidth={borderWidth}
                borderColor={borderColor}
                borderRadius={borderRadius}
                onChangeType={newType => setAttributes({ borderType: newType })}
                onChangeWidth={newWidth =>
                  setAttributes({ borderWidth: newWidth })
                }
                onChangeColor={colorValue =>
                  setAttributes({ borderColor: colorValue })
                }
                onChangeRadius={newrRadius =>
                  setAttributes({ borderRadius: newrRadius })
                }
              />
              <RangeControl
                label={__("Padding")}
                value={tablePadding}
                min="0"
                max="50"
                onChange={newValue => setAttributes({ tablePadding: newValue })}
              />
            </PanelBody>
          </InspectorControls>
        ),

        <div
          className={`${blockClass}`}
          style={{
            textAlign: contentAlign,
            background: tableBack,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            padding: tablePadding + "px"
          }}
        >
          {badgeChecked && (
            <div
              className={`${blockClass}__badge_wrap ${blockClass}__badge_${badgePos}`}
            >
              <div
                className={`${blockClass}__badge`}
                style={{
                  borderRightColor:
                    "right" === badgePos ? badgeBack : "transparent",
                  borderTopColor:
                    "left" === badgePos ? badgeBack : "transparent",
                  borderBottomWidth: badgeSize + "px",
                  borderRightWidth: badgeSize + "px",
                  borderTopWidth:
                    "left" === badgePos ? badgeSize + "px" : "none",
                  borderLeftWidth:
                    "right" === badgePos ? badgeSize + "px" : "none"
                }}
              >
                <span>{badgeText}</span>
              </div>
            </div>
          )}
          {titleChecked && (
            <div
              className={`${blockClass}__title_wrap`}
              style={{
                paddingTop: titleMarginT + "px",
                paddingBottom: titleMarginB + "px"
              }}
            >
              <RichText
                tagName={titleTag.toLowerCase()}
                className={`${blockClass}__title`}
                onChange={newText => setAttributes({ title: newText })}
                placeholder={__("Awesome Title")}
                value={title}
                isSelected={false}
                style={{
                  color: titleColor,
                  background: titleBack,
                  fontSize: titleSize + "px",
                  letterSpacing: titleLetter + "px",
                  textTransform: titleUpper ? "uppercase" : "undefined",
                  fontStyle: titleStyle,
                  fontWeight: titleWeight,
                  lineHeight: titleLine + "px",
                  padding: titlePadding + "px"
                }}
              />
            </div>
          )}
          {priceChecked && (
            <div
              className={`${blockClass}__price_wrap`}
              style={{
                background: priceBack,
                marginTop: priceMarginT + "px",
                marginBottom: priceMarginB + "px",
                padding: pricePadding + "px",
                justifyContent: contentAlign
              }}
            >
              {slashPrice && (
                <strike
                  className={`${blockClass}__slash`}
                  style={{
                    color: slashColor,
                    fontSize: slashSize + "px",
                    fontWeight: slashWeight,
                    alignSelf: slashV
                  }}
                >
                  {slashPrice}
                </strike>
              )}
              {currPrice && (
                <span
                  className={`${blockClass}__currency`}
                  style={{
                    color: currColor,
                    fontSize: currSize + "px",
                    fontWeight: currWeight,
                    alignSelf: currV
                  }}
                >
                  {currPrice}
                </span>
              )}
              {valPrice && (
                <span
                  className={`${blockClass}__val`}
                  style={{
                    color: valColor,
                    fontSize: valSize + "px",
                    fontWeight: valWeight,
                    alignSelf: valV
                  }}
                >
                  {valPrice}
                </span>
              )}
              {divPrice && (
                <span
                  className={`${blockClass}__divider`}
                  style={{
                    color: divColor,
                    fontSize: divSize + "px",
                    fontWeight: divWeight,
                    alignSelf: divV
                  }}
                >
                  {divPrice}
                </span>
              )}
              {durPrice && (
                <span
                  className={`${blockClass}__dur`}
                  style={{
                    color: durColor,
                    fontSize: durSize + "px",
                    fontWeight: durWeight,
                    alignSelf: durV
                  }}
                >
                  {durPrice}
                </span>
              )}
            </div>
          )}
          {listChecked && (
            <div
              className={`${blockClass}__list_wrap`}
              style={{
                marginTop: listMarginT + "px",
                marginBottom: listMarginB + "px"
              }}
            >
              <RichText
                tagName="ul"
                className={`${blockClass}__list list-${listStyle}`}
                placeholder={__("List Item #1")}
                multiline="li"
                onChange={newText => setAttributes({ listItems: newText })}
                value={listItems}
                isSelected={false}
                style={{
                  color: listColor,
                  fontSize: listSize + "px",
                  background: listBack,
                  padding: listPadding + "px",
                  listStyle: "check" !== listStyle ? listStyle : "none",
                  listStylePosition: "inside",
                  fontWeight: listWeight,
                  textTransform: listUpper ? "uppercase" : "undefined",
                  letterSpacing: listLetter + "px",
                  fontStyle: listItemsStyle,
                  lineHeight: listLine + "px"
                }}
                keepPlaceholderOnFocus
              />
            </div>
          )}
          {descChecked && (
            <div className={`${blockClass}__desc_wrap`}>
              <RichText
                tagName="p"
                className={`${blockClass}__desc`}
                onChange={newText => setAttributes({ desc: newText })}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                value={desc}
                isSelected={false}
                style={{
                  color: descColor,
                  background: descBack,
                  fontSize: descSize + "px",
                  fontWeight: descWeight,
                  lineHeight: descLine + "px",
                  marginTop: descMarginT + "px",
                  marginBottom: descMarginB + "px",
                  padding: descPadding + "px"
                }}
              />
            </div>
          )}
          {btnChecked && (
            <div
              className={`${blockClass}__button`}
              style={{
                width: btnWidth + "%"
              }}
            >
              <a
                class={`${blockClass}__button_link`}
                style={{
                  color: btnColor,
                  background: btnBack,
                  fontWeight: btnWeight,
                  marginTop: btnMarginT,
                  marginBottom: btnMarginB,
                  padding: btnPadding,
                  fontSize: btnSize + "px",
                  border: btnBorderType,
                  borderWidth: btnBorderWidth + "px",
                  borderRadius: btnBorderRadius + "px",
                  borderColor: btnBorderColor
                }}
              >
                <span>{btnText}</span>
              </a>
              <URLInput
                value={btnLink}
                onChange={newLink => setAttributes({ btnLink: newLink })}
              />
            </div>
          )}
        </div>
      ];
    },
    save: props => {
      const {
        attributes: {
          contentAlign,
          tableBack,
          borderType,
          borderWidth,
          borderRadius,
          borderColor,
          tablePadding,
          titleChecked,
          title,
          titleTag,
          titleColor,
          titleSize,
          titleLetter,
          titleUpper,
          titleStyle,
          titleLine,
          titleWeight,
          titleBack,
          titleMarginT,
          titleMarginB,
          titlePadding,
          descChecked,
          desc,
          descColor,
          descSize,
          descLine,
          descWeight,
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
          btnChecked,
          btnText,
          btnLink,
          btnTarget,
          btnColor,
          btnSize,
          btnWeight,
          btnBack,
          btnMarginT,
          btnMarginB,
          btnPadding,
          btnWidth,
          btnBorderType,
          btnBorderWidth,
          btnBorderRadius,
          btnBorderColor,
          badgeChecked,
          badgePos,
          badgeBack,
          badgeSize,
          badgeText,
          listChecked,
          listColor,
          listWeight,
          listSize,
          listItemsStyle,
          listLine,
          listUpper,
          listLetter,
          listBack,
          listItems,
          listMarginB,
          listMarginT,
          listPadding,
          listStyle
        }
      } = props;

      return (
        <div
          className={`${blockClass}`}
          style={{
            textAlign: contentAlign,
            background: tableBack,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            padding: tablePadding + "px"
          }}
        >
          {badgeChecked && (
            <div
              className={`${blockClass}__badge_wrap ${blockClass}__badge_${badgePos}`}
            >
              <div
                className={`${blockClass}__badge`}
                style={{
                  borderRightColor:
                    "right" === badgePos ? badgeBack : "transparent",
                  borderTopColor:
                    "left" === badgePos ? badgeBack : "transparent",
                  borderBottomWidth: badgeSize + "px",
                  borderRightWidth: badgeSize + "px",
                  borderTopWidth:
                    "left" === badgePos ? badgeSize + "px" : "none",
                  borderLeftWidth:
                    "right" === badgePos ? badgeSize + "px" : "none"
                }}
              >
                <span>{badgeText}</span>
              </div>
            </div>
          )}
          {titleChecked && (
            <div
              className={`${blockClass}__title_wrap`}
              style={{
                paddingTop: titleMarginT + "px",
                paddingBottom: titleMarginB + "px"
              }}
            >
              <RichText.Content
                tagName={titleTag.toLowerCase()}
                className={`${blockClass}__title`}
                value={title}
                style={{
                  color: titleColor,
                  background: titleBack,
                  fontSize: titleSize + "px",
                  letterSpacing: titleLetter + "px",
                  textTransform: titleUpper ? "uppercase" : "undefined",
                  fontStyle: titleStyle,
                  fontWeight: titleWeight,
                  lineHeight: titleLine + "px",
                  marginBottom: titleMarginB + "px",
                  padding: titlePadding + "px"
                }}
              />
            </div>
          )}
          {priceChecked && (
            <div
              className={`${blockClass}__price_wrap`}
              style={{
                background: priceBack,
                marginTop: priceMarginT + "px",
                marginBottom: priceMarginB + "px",
                padding: pricePadding + "px",
                justifyContent: contentAlign
              }}
            >
              {slashPrice && (
                <strike
                  className={`${blockClass}__slash`}
                  style={{
                    color: slashColor,
                    fontSize: slashSize + "px",
                    fontWeight: slashWeight,
                    alignSelf: slashV
                  }}
                >
                  {slashPrice}
                </strike>
              )}
              {currPrice && (
                <span
                  className={`${blockClass}__currency`}
                  style={{
                    color: currColor,
                    fontSize: currSize + "px",
                    fontWeight: currWeight,
                    alignSelf: currV
                  }}
                >
                  {currPrice}
                </span>
              )}
              {valPrice && (
                <span
                  className={`${blockClass}__val`}
                  style={{
                    color: valColor,
                    fontSize: valSize + "px",
                    fontWeight: valWeight,
                    alignSelf: valV
                  }}
                >
                  {valPrice}
                </span>
              )}
              {divPrice && (
                <span
                  className={`${blockClass}__divider`}
                  style={{
                    color: divColor,
                    fontSize: divSize + "px",
                    fontWeight: divWeight,
                    alignSelf: divV
                  }}
                >
                  {divPrice}
                </span>
              )}
              {durPrice && (
                <span
                  className={`${blockClass}__dur`}
                  style={{
                    color: durColor,
                    fontSize: durSize + "px",
                    fontWeight: durWeight,
                    alignSelf: durV
                  }}
                >
                  {durPrice}
                </span>
              )}
            </div>
          )}
          {listChecked && (
            <div
              className={`${blockClass}__list_wrap`}
              style={{
                marginTop: listMarginT + "px",
                marginBottom: listMarginB + "px"
              }}
            >
              <ul
                className={`${blockClass}__list`}
                style={{
                  color: listColor,
                  fontSize: listSize + "px",
                  background: listBack,
                  padding: listPadding + "px",
                  listStyle: "check" !== listStyle ? listStyle : "none",
                  listStylePosition: "inside",
                  fontWeight: listWeight,
                  letterSpacing: listLetter + "px",
                  textTransform: listUpper ? "uppercase" : "undefined",
                  fontStyle: listItemsStyle,
                  lineHeight: listLine + "px"
                }}
              >
                {listItems}
              </ul>
            </div>
          )}
          {descChecked && (
            <div className={`${blockClass}__desc_wrap`}>
              <RichText.Content
                tagName="p"
                className={`${blockClass}__desc`}
                value={desc}
                style={{
                  color: descColor,
                  background: descBack,
                  fontSize: descSize + "px",
                  fontWeight: descWeight,
                  lineHeight: descLine + "px",
                  marginTop: descMarginT + "px",
                  marginBottom: descMarginB + "px",
                  padding: descPadding + "px"
                }}
              />
            </div>
          )}
          {btnChecked && (
            <div
              className={`${blockClass}__button`}
              style={{
                width: btnWidth + "%"
              }}
            >
              <a
                class={`${blockClass}__button_link`}
                href={btnLink}
                target={btnTarget ? "_target" : ""}
                style={{
                  color: btnColor,
                  background: btnBack,
                  fontWeight: btnWeight,
                  marginTop: btnMarginT,
                  marginBottom: btnMarginB,
                  padding: btnPadding,
                  fontSize: btnSize + "px",
                  border: btnBorderType,
                  borderWidth: btnBorderWidth + "px",
                  borderRadius: btnBorderRadius + "px",
                  borderColor: btnBorderColor
                }}
              >
                <span>{btnText}</span>
              </a>
            </div>
          )}
        </div>
      );
    }
  });
}
