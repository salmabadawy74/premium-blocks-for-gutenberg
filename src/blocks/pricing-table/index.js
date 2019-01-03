import { pricingTable } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PbgIcon from "../icons";

if (pricingTable) {
  const className = "premium-pricing-table";

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

  const pricingAttrs = {
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
    tableShadowColor: {
      type: "string"
    },
    tableShadowBlur: {
      type: "number",
      default: "0"
    },
    tableShadowHorizontal: {
      type: "number",
      default: "0"
    },
    tableShadowVertical: {
      type: "number",
      default: "0"
    },
    tableShadowPosition: {
      type: "string",
      default: ""
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
    titleShadowColor: {
      type: "string"
    },
    titleShadowBlur: {
      type: "number",
      default: "0"
    },
    titleShadowHorizontal: {
      type: "number",
      default: "0"
    },
    titleShadowVertical: {
      type: "number",
      default: "0"
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
    descWeight: {
      type: "number"
    },
    descLetter: {
      type: "number"
    },
    descStyle: {
      type: "string"
    },
    descLine: {
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
      selector: ".premium-pricing-table__button_link"
    },
    btnTarget: {
      type: "boolean",
      default: true
    },
    btnColor: {
      type: "string",
      default: "#fff"
    },
    btnHoverColor: {
      type: "string"
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
    btnLine: {
      type: "number"
    },
    btnLetter: {
      type: "number"
    },
    btnStyle: {
      type: "string"
    },
    btnUpper: {
      type: "boolean"
    },
    btnBack: {
      type: "string",
      default: "#6ec1e4"
    },
    btnHoverBack: {
      type: "string"
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
      type: "boolean"
    },
    badgePos: {
      type: "string",
      default: "right"
    },
    badgeBack: {
      type: "string",
      default: "#6ec1e4"
    },
    badgeColor: {
      type: "string"
    },
    badgeTextSize: {
      type: "number"
    },
    badgeSize: {
      type: "number"
    },
    badgeTop: {
      type: "number"
    },
    badgeHorizontal: {
      type: "number"
    },
    badgeWidth: {
      type: "number"
    },
    badgeWeight: {
      type: "number",
      default: 900
    },
    badgeLetter: {
      type: "number"
    },
    badgeStyle: {
      type: "string"
    },
    badgeUpper: {
      type: "boolean"
    },
    badgeText: {
      type: "string",
      default: __("Popular")
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
    },
    id: {
      type: "string"
    }
  };

  registerBlockType("premium/pricing-table", {
    title: __("Pricing Table"),
    icon: <PbgIcon icon="pricing-table" />,
    category: "premium-blocks",
    attributes: pricingAttrs,
    edit: props => {
      const { isSelected, setAttributes, clientId: blockId } = props;
      const {
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
        id
      } = props.attributes;
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
      setAttributes({ id: blockId });
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
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body premium-panel-body-inner"
                  initialOpen={false}
                >
                  <p>{__("Heading")}</p>
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
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: titleColor,
                      onChange: newColor =>
                        setAttributes({ titleColor: newColor }),
                      label: __("Text Color")
                    },
                    {
                      value: titleBack,
                      onChange: newColor =>
                        setAttributes({ titleBack: newColor }),
                      label: __("Background Color")
                    }
                  ]}
                />
                <PremiumTextShadow
                  color={titleShadowColor}
                  blur={titleShadowBlur}
                  horizontal={titleShadowHorizontal}
                  vertical={titleShadowVertical}
                  onChangeColor={newColor =>
                    setAttributes({ titleShadowColor: newColor })
                  }
                  onChangeBlur={newBlur =>
                    setAttributes({ titleShadowBlur: newBlur })
                  }
                  onChangehHorizontal={newValue =>
                    setAttributes({ titleShadowHorizontal: newValue })
                  }
                  onChangeVertical={newValue =>
                    setAttributes({ titleShadowVertical: newValue })
                  }
                />
                <PanelBody
                  title={__("Spacings")}
                  className="premium-panel-body premium-panel-body-inner"
                  initialOpen={false}
                >
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
              <PanelBody
                title={__("Price")}
                className="premium-panel-body"
                initialOpen={false}
              >
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
                <PanelBody
                  title={__("Element to Style")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                >
                  <SelectControl
                    label={__("Element")}
                    options={PRICE}
                    value={selectedStyle}
                    onChange={newElem =>
                      setAttributes({ selectedStyle: newElem })
                    }
                  />
                  {"slash" === selectedStyle && (
                    <Fragment>
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
                      <PanelColorSettings
                        title={__("Colors")}
                        className="premium-panel-body-inner"
                        initialOpen={false}
                        colorSettings={[
                          {
                            value: slashColor,
                            onChange: newColor =>
                              setAttributes({ slashColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                    </Fragment>
                  )}
                  {"curr" === selectedStyle && (
                    <Fragment>
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
                      <PanelColorSettings
                        title={__("Colors")}
                        className="premium-panel-body-inner"
                        initialOpen={false}
                        colorSettings={[
                          {
                            value: currColor,
                            onChange: newColor =>
                              setAttributes({ currColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                    </Fragment>
                  )}
                  {"price" === selectedStyle && (
                    <Fragment>
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
                      <PanelColorSettings
                        title={__("Colors")}
                        className="premium-panel-body-inner"
                        initialOpen={false}
                        colorSettings={[
                          {
                            value: valColor,
                            onChange: newColor =>
                              setAttributes({ valColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                    </Fragment>
                  )}
                  {"divider" === selectedStyle && (
                    <Fragment>
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
                      <PanelColorSettings
                        title={__("Colors")}
                        className="premium-panel-body-inner"
                        initialOpen={false}
                        colorSettings={[
                          {
                            value: divColor,
                            onChange: newColor =>
                              setAttributes({ divColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                    </Fragment>
                  )}
                  {"duration" === selectedStyle && (
                    <Fragment>
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
                      <PanelColorSettings
                        title={__("Colors")}
                        className="premium-panel-body-inner"
                        initialOpen={false}
                        colorSettings={[
                          {
                            value: durColor,
                            onChange: newColor =>
                              setAttributes({ durColor: newColor }),
                            label: __("Text Color")
                          }
                        ]}
                      />
                    </Fragment>
                  )}
                </PanelBody>
                <PanelBody
                  title={__("Spacings")}
                  className="premium-panel-body-inner premium-panel-body"
                  initialOpen={false}
                >
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
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: priceBack,
                      onChange: newColor =>
                        setAttributes({ priceBack: newColor }),
                      label: __("Container Background Color")
                    }
                  ]}
                />
              </PanelBody>
            )}
            {listChecked && (
              <PanelBody
                title={__("Features")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <SelectControl
                  label={__("List Style")}
                  options={TYPE}
                  value={listStyle}
                  onChange={newType => setAttributes({ listStyle: newType })}
                />
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body-inner premium-panel-body"
                  initialOpen={false}
                >
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
                    onChangeSize={newSize =>
                      setAttributes({ listSize: newSize })
                    }
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
                </PanelBody>
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: listColor,
                      onChange: newColor =>
                        setAttributes({ listColor: newColor }),
                      label: __("List Items Color")
                    },
                    {
                      value: listBack,
                      onChange: newColor =>
                        setAttributes({ listBack: newColor }),
                      label: __("Background Color")
                    }
                  ]}
                />
                <PanelBody
                  title={__("Spacings")}
                  initialOpen={false}
                  className="premium-panel-body-inner premium-panel-body"
                >
                  <RangeControl
                    label={__("Margin Top (PX)")}
                    value={listMarginT}
                    onChange={newSize =>
                      setAttributes({ listMarginT: newSize })
                    }
                  />
                  <RangeControl
                    label={__("Margin Bottom (PX)")}
                    value={listMarginB}
                    onChange={newSize =>
                      setAttributes({ listMarginB: newSize })
                    }
                  />
                  <RangeControl
                    label={__("Padding (PX)")}
                    value={listPadding}
                    onChange={newSize =>
                      setAttributes({ listPadding: newSize })
                    }
                  />
                </PanelBody>
              </PanelBody>
            )}
            {descChecked && (
              <PanelBody
                title={__("Description")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body-inner premium-panel-body"
                  initialOpen={false}
                >
                  <PremiumTypo
                    components={["size", "weight", "style", "spacing", "line"]}
                    size={descSize}
                    weight={descWeight}
                    style={descStyle}
                    spacing={descLetter}
                    line={descLine}
                    onChangeSize={newSize =>
                      setAttributes({ descSize: newSize })
                    }
                    onChangeWeight={newWeight =>
                      setAttributes({ descWeight: newWeight })
                    }
                    onChangeStyle={newStyle =>
                      setAttributes({ descStyle: newStyle })
                    }
                    onChangeSpacing={newValue =>
                      setAttributes({ descLetter: newValue })
                    }
                    onChangeLine={newValue =>
                      setAttributes({ descLine: newValue })
                    }
                  />
                </PanelBody>
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: descColor,
                      onChange: newColor =>
                        setAttributes({ descColor: newColor }),
                      label: __("Text Color")
                    },
                    {
                      value: descBack,
                      onChange: newColor =>
                        setAttributes({ descBack: newColor }),
                      label: __("Background Color")
                    }
                  ]}
                />
                <PanelBody
                  title={__("Spacings")}
                  className="premium-panel-body-inner premium-panel-body"
                  initialOpen={false}
                >
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
              </PanelBody>
            )}
            {btnChecked && (
              <PanelBody
                title={__("Button")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body-inner premium-panel-body"
                  initialOpen={false}
                >
                  <PremiumTypo
                    components={[
                      "size",
                      "weight",
                      "style",
                      "upper",
                      "spacing",
                      "line"
                    ]}
                    size={btnSize}
                    weight={btnWeight}
                    style={btnStyle}
                    spacing={btnLetter}
                    line={btnLine}
                    upper={btnUpper}
                    onChangeSize={newSize =>
                      setAttributes({ btnSize: newSize })
                    }
                    onChangeWeight={newWeight =>
                      setAttributes({ btnWeight: newWeight })
                    }
                    onChangeStyle={newStyle =>
                      setAttributes({ btnStyle: newStyle })
                    }
                    onChangeSpacing={newValue =>
                      setAttributes({ btnLetter: newValue })
                    }
                    onChangeLine={newValue =>
                      setAttributes({ btnLine: newValue })
                    }
                    onChangeUpper={check => setAttributes({ btnUpper: check })}
                  />
                </PanelBody>
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: btnColor,
                      onChange: newColor =>
                        setAttributes({ btnColor: newColor }),
                      label: __("Text Color")
                    },
                    {
                      value: btnHoverColor,
                      onChange: newColor =>
                        setAttributes({ btnHoverColor: newColor }),
                      label: __("Text Hover Color")
                    },
                    {
                      value: btnBack,
                      onChange: newColor =>
                        setAttributes({ btnBack: newColor }),
                      label: __("Background Color")
                    },
                    {
                      value: btnHoverBack,
                      onChange: newColor =>
                        setAttributes({ btnHoverBack: newColor }),
                      label: __("Background Hover Color")
                    }
                  ]}
                />
                <PanelBody
                  title={__("Border")}
                  className="premium-panel-body-inner premium-panel-body"
                  initialOpen={false}
                >
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
                </PanelBody>
                <PanelBody
                  title={__("Spacings")}
                  className="premium-panel-body-inner premium-panel-body"
                  initialOpen={false}
                >
                  <RangeControl
                    label={__("Width (%)")}
                    value={btnWidth}
                    onChange={newSize => setAttributes({ btnWidth: newSize })}
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
                </PanelBody>
                <ToggleControl
                  label={__("Open Link in a new tab")}
                  checked={btnTarget}
                  onChange={newValue => setAttributes({ btnTarget: newValue })}
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
                  onChange={value => setAttributes({ badgeText: value })}
                />
                <SelectControl
                  label={__("Position")}
                  options={POSITION}
                  value={badgePos}
                  onChange={newValue => setAttributes({ badgePos: newValue })}
                />
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body-inner premium-panel-body"
                  initialOpen={false}
                >
                  <PremiumTypo
                    components={["size", "weight", "style", "upper", "spacing"]}
                    size={badgeTextSize}
                    weight={badgeWeight}
                    style={badgeStyle}
                    spacing={badgeLetter}
                    upper={badgeUpper}
                    onChangeSize={newSize =>
                      setAttributes({ badgeTextSize: newSize })
                    }
                    onChangeWeight={newWeight =>
                      setAttributes({ badgeWeight: newWeight })
                    }
                    onChangeStyle={newStyle =>
                      setAttributes({ badgeStyle: newStyle })
                    }
                    onChangeSpacing={newValue =>
                      setAttributes({ badgeLetter: newValue })
                    }
                    onChangeUpper={check =>
                      setAttributes({ badgeUpper: check })
                    }
                  />
                </PanelBody>
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: badgeColor,
                      onChange: newColor =>
                        setAttributes({ badgeColor: newColor }),
                      label: __("Text Color")
                    },
                    {
                      value: badgeBack,
                      onChange: newColor =>
                        setAttributes({ badgeBack: newColor }),
                      label: __("Background Color")
                    }
                  ]}
                />
                <RangeControl
                  label={__("Vertical Offset")}
                  value={badgeTop}
                  onChange={newValue => setAttributes({ badgeTop: newValue })}
                />
                <RangeControl
                  label={__("Horizontal Offset")}
                  value={badgeHorizontal}
                  min="1"
                  max="150"
                  onChange={newValue =>
                    setAttributes({ badgeHorizontal: newValue })
                  }
                />
                <RangeControl
                  label={__("Badge Size")}
                  value={badgeSize}
                  max="250"
                  onChange={newValue => setAttributes({ badgeSize: newValue })}
                />
                <RangeControl
                  label={__("Text Width")}
                  min="1"
                  max="200"
                  value={badgeWidth}
                  onChange={newValue => setAttributes({ badgeWidth: newValue })}
                />
              </PanelBody>
            )}
            <PanelBody
              title={__("Table")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: tableBack,
                    onChange: newColor =>
                      setAttributes({ tableBack: newColor }),
                    label: __("Background Color")
                  }
                ]}
              />
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner premium-panel-body"
                initialOpen={false}
              >
                <PremiumBorder
                  borderType={borderType}
                  borderWidth={borderWidth}
                  borderColor={borderColor}
                  borderRadius={borderRadius}
                  onChangeType={newType =>
                    setAttributes({ borderType: newType })
                  }
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
              </PanelBody>
              <PremiumBoxShadow
                inner={true}
                color={tableShadowColor}
                blur={tableShadowBlur}
                horizontal={tableShadowHorizontal}
                vertical={tableShadowVertical}
                position={tableShadowPosition}
                onChangeColor={newColor =>
                  setAttributes({
                    tableShadowColor:
                      newColor === undefined ? "transparent" : newColor
                  })
                }
                onChangeBlur={newBlur =>
                  setAttributes({
                    tableShadowBlur: newBlur === undefined ? 0 : newBlur
                  })
                }
                onChangehHorizontal={newValue =>
                  setAttributes({
                    tableShadowHorizontal: newValue === undefined ? 0 : newValue
                  })
                }
                onChangeVertical={newValue =>
                  setAttributes({
                    tableShadowVertical: newValue === undefined ? 0 : newValue
                  })
                }
                onChangePosition={newValue =>
                  setAttributes({
                    tableShadowPosition: newValue === undefined ? 0 : newValue
                  })
                }
              />
              <PanelBody
                title={__("Spacings")}
                className="premium-panel-body-inner premium-panel-body"
                initialOpen={false}
              >
                <RangeControl
                  label={__("Padding")}
                  value={tablePadding}
                  min="0"
                  max="50"
                  onChange={newValue =>
                    setAttributes({ tablePadding: newValue })
                  }
                />
              </PanelBody>
            </PanelBody>
          </InspectorControls>
        ),
        <div
          id={`${className}-${id}`}
          className={`${className}`}
          style={{
            textAlign: contentAlign,
            background: tableBack,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            padding: tablePadding + "px",
            boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`
          }}
        >
          {badgeChecked && (
            <div
              className={`${className}__badge_wrap ${className}__badge_${badgePos}`}
            >
              <div
                className={`${className}__badge`}
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
                    right:
                      "right" === badgePos ? badgeHorizontal + "px" : "auto"
                  }}
                >
                  {badgeText}
                </span>
              </div>
            </div>
          )}
          {titleChecked && (
            <div
              className={`${className}__title_wrap`}
              style={{
                paddingTop: titleMarginT + "px",
                paddingBottom: titleMarginB + "px"
              }}
            >
              <RichText
                tagName={titleTag.toLowerCase()}
                className={`${className}__title`}
                onChange={newText => setAttributes({ title: newText })}
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
                  textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
                }}
              />
            </div>
          )}
          {priceChecked && (
            <div
              className={`${className}__price_wrap`}
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
                  className={`${className}__slash`}
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
                  className={`${className}__currency`}
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
                  className={`${className}__val`}
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
                  className={`${className}__divider`}
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
                  className={`${className}__dur`}
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
              className={`${className}__list_wrap`}
              style={{
                marginTop: listMarginT + "px",
                marginBottom: listMarginB + "px"
              }}
            >
              <RichText
                tagName="ul"
                className={`${className}__list list-${listStyle}`}
                multiline="li"
                placeholder={__("List Item #1")}
                value={listItems}
                onChange={newText => setAttributes({ listItems: newText })}
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
                  lineHeight: listLine + "px"
                }}
              />
            </div>
          )}
          {descChecked && (
            <div className={`${className}__desc_wrap`}>
              <RichText
                tagName="p"
                className={`${className}__desc`}
                onChange={newText => setAttributes({ desc: newText })}
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
                  padding: descPadding + "px"
                }}
              />
            </div>
          )}
          {btnChecked && (
            <div
              className={`${className}__button`}
              style={{
                width: btnWidth + "%"
              }}
            >
              <a
                class={`${className}__button_link`}
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
                  padding: btnPadding,
                  border: btnBorderType,
                  borderWidth: btnBorderWidth + "px",
                  borderRadius: btnBorderRadius + "px",
                  borderColor: btnBorderColor
                }}
              >
                <RichText
                  tagName="span"
                  onChange={newText => setAttributes({ btnText: newText })}
                  value={btnText}
                  style={{
                    textTransform: btnUpper ? "uppercase" : "none"
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
                    `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                    `color: ${btnHoverColor} !important;`,
                    `background: ${btnHoverBack} !important`,
                    "}"
                  ].join("\n")
                }}
              />
            </div>
          )}
        </div>
      ];
    },
    save: props => {
      const {
        contentAlign,
        tableBack,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        tablePadding,
        tableShadowBlur,
        tableShadowColor,
        tableShadowHorizontal,
        tableShadowVertical,
        tableShadowPosition,
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
        titleShadowBlur,
        titleShadowColor,
        titleShadowHorizontal,
        titleShadowVertical,
        titleMarginT,
        titleMarginB,
        titlePadding,
        descChecked,
        desc,
        descColor,
        descSize,
        descLine,
        descWeight,
        descStyle,
        descLetter,
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
        btnHoverColor,
        btnSize,
        btnWeight,
        btnLine,
        btnLetter,
        btnUpper,
        btnStyle,
        btnBack,
        btnHoverBack,
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
        badgeColor,
        badgeTop,
        badgeHorizontal,
        badgeWidth,
        badgeSize,
        badgeTextSize,
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
        listLine,
        listUpper,
        listLetter,
        listBack,
        listItems,
        listMarginB,
        listMarginT,
        listPadding,
        listStyle,
        id
      } = props.attributes;
      return (
        <div
          id={`${className}-${id}`}
          className={`${className}`}
          style={{
            textAlign: contentAlign,
            background: tableBack,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            padding: tablePadding + "px",
            boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`
          }}
        >
          {badgeChecked && (
            <div
              className={`${className}__badge_wrap ${className}__badge_${badgePos}`}
            >
              <div
                className={`${className}__badge`}
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
                <span
                  style={{
                    fontSize: badgeTextSize + "px",
                    color: badgeColor,
                    fontWeight: badgeWeight,
                    textTransform: badgeUpper ? "uppercase" : "none",
                    letterSpacing: badgeLetter + "px",
                    fontStyle: badgeStyle,
                    width: badgeWidth + "px",
                    top: badgeTop + "px",
                    left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                    right:
                      "right" === badgePos ? badgeHorizontal + "px" : "auto"
                  }}
                >
                  {badgeText}
                </span>
              </div>
            </div>
          )}
          {titleChecked && (
            <div
              className={`${className}__title_wrap`}
              style={{
                paddingTop: titleMarginT + "px",
                paddingBottom: titleMarginB + "px"
              }}
            >
              <RichText.Content
                tagName={titleTag.toLowerCase()}
                className={`${className}__title`}
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
                  marginBottom: titleMarginB + "px",
                  padding: titlePadding + "px",
                  textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
                }}
              />
            </div>
          )}
          {priceChecked && (
            <div
              className={`${className}__price_wrap`}
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
                  className={`${className}__slash`}
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
                  className={`${className}__currency`}
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
                  className={`${className}__val`}
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
                  className={`${className}__divider`}
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
                  className={`${className}__dur`}
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
              className={`${className}__list_wrap`}
              style={{
                marginTop: listMarginT + "px",
                marginBottom: listMarginB + "px"
              }}
            >
              <ul
                className={`${className}__list list-${listStyle}`}
                style={{
                  color: listColor,
                  fontSize: listSize + "px",
                  background: listBack,
                  padding: listPadding + "px",
                  listStyle: "check" !== listStyle ? listStyle : "none",
                  listStylePosition: "inside",
                  fontWeight: listWeight,
                  letterSpacing: listLetter + "px",
                  textTransform: listUpper ? "uppercase" : "none",
                  fontStyle: listItemsStyle,
                  lineHeight: listLine + "px"
                }}
              >
                {listItems}
              </ul>
            </div>
          )}
          {descChecked && (
            <div className={`${className}__desc_wrap`}>
              <RichText.Content
                tagName="p"
                className={`${className}__desc`}
                value={desc}
                style={{
                  color: descColor,
                  background: descBack,
                  fontSize: descSize + "px",
                  fontWeight: descWeight,
                  lineHeight: descLine + "px",
                  letterSpacing: descLetter + "px",
                  fontStyle: descStyle,
                  marginTop: descMarginT + "px",
                  marginBottom: descMarginB + "px",
                  padding: descPadding + "px"
                }}
              />
            </div>
          )}
          {btnChecked && (
            <div
              className={`${className}__button`}
              style={{
                width: btnWidth + "%"
              }}
            >
              <a
                class={`${className}__button_link`}
                href={btnLink}
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
                  padding: btnPadding,
                  border: btnBorderType,
                  borderWidth: btnBorderWidth + "px",
                  borderRadius: btnBorderRadius + "px",
                  borderColor: btnBorderColor
                }}
              >
                <RichText.Content
                  tagName="span"
                  onChange={newText => setAttributes({ btnText: newText })}
                  value={btnText}
                  style={{
                    textTransform: btnUpper ? "uppercase" : "none"
                  }}
                />
              </a>
              <style
                dangerouslySetInnerHTML={{
                  __html: [
                    `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                    `color: ${btnHoverColor} !important;`,
                    `background: ${btnHoverBack} !important`,
                    "}"
                  ].join("\n")
                }}
              />
            </div>
          )}
        </div>
      );
    },
    deprecated: [
      {
        attributes: pricingAttrs,
        save: props => {
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
            titleLetter,
            titleUpper,
            titleStyle,
            titleLine,
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
            desc,
            descColor,
            descSize,
            descLine,
            descWeight,
            descStyle,
            descLetter,
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
            btnHoverColor,
            btnSize,
            btnWeight,
            btnLine,
            btnLetter,
            btnUpper,
            btnStyle,
            btnBack,
            btnHoverBack,
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
            badgeColor,
            badgeTop,
            badgeHorizontal,
            badgeWidth,
            badgeSize,
            badgeTextSize,
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
            listLine,
            listUpper,
            listLetter,
            listBack,
            listItems,
            listMarginB,
            listMarginT,
            listPadding,
            listStyle,
            id
          } = props.attributes;
          return (
            <div
              id={`${className}-${id}`}
              className={`${className}`}
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
                  className={`${className}__badge_wrap ${className}__badge_${badgePos}`}
                >
                  <div
                    className={`${className}__badge`}
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
                    <span
                      style={{
                        fontSize: badgeTextSize + "px",
                        color: badgeColor,
                        fontWeight: badgeWeight,
                        textTransform: badgeUpper ? "uppercase" : "none",
                        letterSpacing: badgeLetter + "px",
                        fontStyle: badgeStyle,
                        width: badgeWidth + "px",
                        top: badgeTop + "px",
                        left:
                          "left" === badgePos ? badgeHorizontal + "px" : "auto",
                        right:
                          "right" === badgePos ? badgeHorizontal + "px" : "auto"
                      }}
                    >
                      {badgeText}
                    </span>
                  </div>
                </div>
              )}
              {titleChecked && (
                <div
                  className={`${className}__title_wrap`}
                  style={{
                    paddingTop: titleMarginT + "px",
                    paddingBottom: titleMarginB + "px"
                  }}
                >
                  <RichText.Content
                    tagName={titleTag.toLowerCase()}
                    className={`${className}__title`}
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
                      marginBottom: titleMarginB + "px",
                      padding: titlePadding + "px",
                      textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
                    }}
                  />
                </div>
              )}
              {priceChecked && (
                <div
                  className={`${className}__price_wrap`}
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
                      className={`${className}__slash`}
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
                      className={`${className}__currency`}
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
                      className={`${className}__val`}
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
                      className={`${className}__divider`}
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
                      className={`${className}__dur`}
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
                  className={`${className}__list_wrap`}
                  style={{
                    marginTop: listMarginT + "px",
                    marginBottom: listMarginB + "px"
                  }}
                >
                  <ul
                    className={`${className}__list list-${listStyle}`}
                    style={{
                      color: listColor,
                      fontSize: listSize + "px",
                      background: listBack,
                      padding: listPadding + "px",
                      listStyle: "check" !== listStyle ? listStyle : "none",
                      listStylePosition: "inside",
                      fontWeight: listWeight,
                      letterSpacing: listLetter + "px",
                      textTransform: listUpper ? "uppercase" : "none",
                      fontStyle: listItemsStyle,
                      lineHeight: listLine + "px"
                    }}
                  >
                    {listItems}
                  </ul>
                </div>
              )}
              {descChecked && (
                <div className={`${className}__desc_wrap`}>
                  <RichText.Content
                    tagName="p"
                    className={`${className}__desc`}
                    value={desc}
                    style={{
                      color: descColor,
                      background: descBack,
                      fontSize: descSize + "px",
                      fontWeight: descWeight,
                      lineHeight: descLine + "px",
                      letterSpacing: descLetter + "px",
                      fontStyle: descStyle,
                      marginTop: descMarginT + "px",
                      marginBottom: descMarginB + "px",
                      padding: descPadding + "px"
                    }}
                  />
                </div>
              )}
              {btnChecked && (
                <div
                  className={`${className}__button`}
                  style={{
                    width: btnWidth + "%"
                  }}
                >
                  <a
                    class={`${className}__button_link`}
                    href={btnLink}
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
                      padding: btnPadding,
                      border: btnBorderType,
                      borderWidth: btnBorderWidth + "px",
                      borderRadius: btnBorderRadius + "px",
                      borderColor: btnBorderColor
                    }}
                  >
                    <RichText.Content
                      tagName="span"
                      onChange={newText => setAttributes({ btnText: newText })}
                      value={btnText}
                      style={{
                        textTransform: btnUpper ? "uppercase" : "none"
                      }}
                    />
                  </a>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: [
                        `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                        `color: ${btnHoverColor} !important;`,
                        `background: ${btnHoverBack} !important`,
                        "}"
                      ].join("\n")
                    }}
                  />
                </div>
              )}
            </div>
          );
        }
      }
    ]
  });
}
