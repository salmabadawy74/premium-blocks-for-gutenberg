import { accordion } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PbgIcon from "../icons";

if (accordion) {
  const className = "premium-accordion";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const { Component, Fragment } = wp.element;

  const { Toolbar, PanelBody, SelectControl, RangeControl } = wp.components;

  const {
    InspectorControls,
    RichText,
    InnerBlocks,
    PanelColorSettings
  } = wp.editor;

  const CONTENT = [
    ["core/paragraph", { content: __("Insert Your Content Here") }]
  ];

  const accordionAttrs = {
    accordionId: {
      type: "string"
    },
    repeaterItems: {
      type: "array",
      default: [
        {
          titleText: __("Awesome Title"),
          descText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ]
    },
    direction: {
      type: "string",
      default: "ltr"
    },
    titleTag: {
      type: "string",
      default: "H4"
    },
    titleColor: {
      type: "string"
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
    titleBorder: {
      type: "string",
      default: "none"
    },
    titleBorderWidth: {
      type: "number",
      default: "1"
    },
    titleBorderRadius: {
      type: "number",
      default: "0"
    },
    titleBorderColor: {
      type: "string"
    },
    titleBack: {
      type: "string"
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
    titlePaddingT: {
      type: "number"
    },
    titlePaddingR: {
      type: "number"
    },
    titlePaddingB: {
      type: "number"
    },
    titlePaddingL: {
      type: "number"
    },
    arrowColor: {
      type: "string"
    },
    arrowBack: {
      type: "string"
    },
    arrowPos: {
      type: "string",
      default: "out"
    },
    arrowPadding: {
      type: "number"
    },
    arrowRadius: {
      type: "number"
    },
    arrowSize: {
      type: "number",
      default: 20
    },
    contentType: {
      type: "string",
      default: "text"
    },
    descAlign: {
      type: "string",
      default: "left"
    },
    descColor: {
      type: "string"
    },
    descBack: {
      type: "string"
    },
    descBorder: {
      type: "string",
      default: "none"
    },
    descBorderWidth: {
      type: "number",
      default: "1"
    },
    descBorderRadius: {
      type: "number",
      default: "0"
    },
    descBorderColor: {
      type: "string"
    },
    descSize: {
      type: "number"
    },
    descLine: {
      type: "number"
    },
    descLetter: {
      type: "number"
    },
    descStyle: {
      type: "string"
    },
    descUpper: {
      type: "boolean"
    },
    descWeight: {
      type: "number",
      default: 500
    },
    textShadowColor: {
      type: "string"
    },
    textShadowBlur: {
      type: "number",
      default: "0"
    },
    textShadowHorizontal: {
      type: "number",
      default: "0"
    },
    textShadowVertical: {
      type: "number",
      default: "0"
    },
    descPaddingT: {
      type: "number"
    },
    descPaddingR: {
      type: "number"
    },
    descPaddingB: {
      type: "number"
    },
    descPaddingL: {
      type: "number",
      default: 10
    }
  };

  let isAccUpdated = null;

  class PremiumAccordion extends Component {
    constructor() {
      super(...arguments);

      this.initAccordion = this.initAccordion.bind(this);
    }

    componentDidMount() {
      const { attributes, setAttributes, clientId } = this.props;
      if (!attributes.accordionId) {
        setAttributes({ accordionId: "premium-accordion-" + clientId });
      }
      this.initAccordion();
    }

    componentDidUpdate(prevProps, prevState) {
      clearTimeout(isAccUpdated);
      isAccUpdated = setTimeout(this.initAccordion, 500);
    }

    initAccordion() {
      const { accordionId } = this.props.attributes;
      if (!this.props.attributes.accordionId) return null;
      let title = document
        .getElementById(accordionId)
        .getElementsByClassName("premium-accordion__title_wrap")[0];
      title.addEventListener("click", () => {
        title
          .getElementsByClassName("premium-accordion__icon")[0]
          .classList.toggle("premium-accordion__closed");
        title.nextSibling.classList.toggle("premium-accordion__desc_close");
      });
    }

    render() {
      const { isSelected, setAttributes, clientId } = this.props;
      const {
        accordionId,
        repeaterItems,
        direction,
        titleTag,
        titleColor,
        titleSize,
        titleLine,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleBorder,
        titleBorderWidth,
        titleBorderColor,
        titleBorderRadius,
        titleBack,
        titleShadowBlur,
        titleShadowColor,
        titleShadowHorizontal,
        titleShadowVertical,
        titlePaddingT,
        titlePaddingR,
        titlePaddingB,
        titlePaddingL,
        arrowColor,
        arrowBack,
        arrowPos,
        arrowPadding,
        arrowRadius,
        arrowSize,
        contentType,
        descAlign,
        descColor,
        descBack,
        descBorder,
        descBorderColor,
        descBorderRadius,
        descBorderWidth,
        descSize,
        descLine,
        descLetter,
        descStyle,
        descUpper,
        descWeight,
        textShadowBlur,
        textShadowColor,
        textShadowHorizontal,
        textShadowVertical,
        descPaddingT,
        descPaddingR,
        descPaddingB,
        descPaddingL
      } = this.props.attributes;

      const DIRECTION = [
        {
          value: "ltr",
          label: "LTR"
        },
        {
          value: "rtl",
          label: "RTL"
        }
      ];

      const ARROW = [
        {
          value: "in",
          label: __("In")
        },
        {
          value: "out",
          label: __("Out")
        }
      ];

      const TYPE = [
        {
          value: "text",
          label: __("Text")
        },
        {
          value: "block",
          label: __("Gutenberg Block")
        }
      ];

      const ALIGNS = ["left", "center", "right"];

      const onAccordionChange = (attr, value, index) => {
        const items = repeaterItems;

        return items.map(function(item, currIndex) {
          if (index == currIndex) {
            item[attr] = value;
          }

          return item;
        });
      };

      const accordionItems = repeaterItems.map((item, index) => {
        return (
          <div
            id={`${className}__layer${index}`}
            className={`${className}__content_wrap`}
          >
            <div
              className={`${className}__title_wrap ${className}__${direction} ${className}__${arrowPos}`}
              style={{
                backgroundColor: titleBack,
                border: titleBorder,
                borderWidth: titleBorderWidth + "px",
                borderRadius: titleBorderRadius + "px",
                borderColor: titleBorderColor,
                paddingTop: titlePaddingT,
                paddingRight: titlePaddingR,
                paddingBottom: titlePaddingB,
                paddingLeft: titlePaddingL
              }}
            >
              <div className={`${className}__title`}>
                <RichText
                  tagName={titleTag.toLowerCase()}
                  className={`${className}__title_text`}
                  onChange={newText =>
                    setAttributes({
                      repeaterItems: onAccordionChange(
                        "titleText",
                        newText,
                        index
                      )
                    })
                  }
                  placeholder={__("Awesome Title")}
                  value={item.titleText}
                  style={{
                    color: titleColor,
                    fontSize: titleSize + "px",
                    letterSpacing: titleLetter + "px",
                    textTransform: titleUpper ? "uppercase" : "none",
                    fontStyle: titleStyle,
                    fontWeight: titleWeight,
                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                    lineHeight: titleLine + "px"
                  }}
                />
              </div>
              <div className={`${className}__icon_wrap`}>
                <svg
                  className={`${className}__icon`}
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width={arrowSize}
                  height={arrowSize}
                  viewBox="0 0 20 20"
                  style={{
                    fill: arrowColor,
                    backgroundColor: arrowBack,
                    padding: arrowPadding + "px",
                    borderRadius: arrowRadius + "px"
                  }}
                >
                  <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                </svg>
              </div>
            </div>
            <div
              className={`${className}__desc_wrap`}
              style={{
                textAlign: descAlign,
                backgroundColor: descBack,
                border: descBorder,
                borderWidth: descBorderWidth + "px",
                borderRadius: descBorderRadius + "px",
                borderColor: descBorderColor,
                paddingTop: descPaddingT,
                paddingRight: descPaddingR,
                paddingBottom: descPaddingB,
                paddingLeft: descPaddingL
              }}
            >
              {"text" === contentType && (
                <RichText
                  tagName="p"
                  className={`${className}__desc`}
                  onChange={newText =>
                    setAttributes({
                      repeaterItems: onAccordionChange(
                        "descText",
                        newText,
                        index
                      )
                    })
                  }
                  value={item.descText}
                  style={{
                    color: descColor,
                    fontSize: descSize + "px",
                    letterSpacing: descLetter + "px",
                    textTransform: descUpper ? "uppercase" : "none",
                    textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColor}`,
                    fontStyle: descStyle,
                    fontWeight: descWeight,
                    lineHeight: descLine + "px"
                  }}
                />
              )}
              {"block" === contentType && <InnerBlocks template={CONTENT} />}
            </div>
          </div>
        );
      });
      return [
        isSelected && (
          <InspectorControls key="inspector">
            <PanelBody
              title={__("Title")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <p>{__("Title Tag")}</p>
              <Toolbar
                controls={"123456".split("").map(tag => ({
                  icon: "heading",
                  isActive: "H" + tag === titleTag,
                  onClick: () => setAttributes({ titleTag: "H" + tag }),
                  subscript: tag
                }))}
              />
              <SelectControl
                label={__("Direction")}
                options={DIRECTION}
                value={direction}
                onChange={newEffect => setAttributes({ direction: newEffect })}
              />
              <PanelBody
                title={__("Font")}
                className="premium-panel-body-inner"
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
                  onChangeUpper={check => setAttributes({ titleUpper: check })}
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    label: __("Text Color"),
                    value: titleColor,
                    onChange: colorValue =>
                      setAttributes({ titleColor: colorValue })
                  },
                  {
                    label: __("Background Color"),
                    value: titleBack,
                    onChange: colorValue =>
                      setAttributes({ titleBack: colorValue })
                  }
                ]}
              />
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumBorder
                  borderType={titleBorder}
                  borderWidth={titleBorderWidth}
                  borderColor={titleBorderColor}
                  borderRadius={titleBorderRadius}
                  onChangeType={newType =>
                    setAttributes({ titleBorder: newType })
                  }
                  onChangeWidth={newWidth =>
                    setAttributes({ titleBorderWidth: newWidth })
                  }
                  onChangeColor={colorValue =>
                    setAttributes({ titleBorderColor: colorValue })
                  }
                  onChangeRadius={newrRadius =>
                    setAttributes({ titleBorderRadius: newrRadius })
                  }
                />
              </PanelBody>
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
                title={__("Padding")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumPadding
                  paddingTop={titlePaddingT}
                  paddingRight={titlePaddingR}
                  paddingBottom={titlePaddingB}
                  paddingLeft={titlePaddingL}
                  onChangePadTop={value =>
                    setAttributes({
                      titlePaddingT: value === undefined ? 0 : value
                    })
                  }
                  onChangePadRight={value =>
                    setAttributes({
                      titlePaddingR: value === undefined ? 0 : value
                    })
                  }
                  onChangePadBottom={value =>
                    setAttributes({
                      titlePaddingB: value === undefined ? 0 : value
                    })
                  }
                  onChangePadLeft={value =>
                    setAttributes({
                      titlePaddingL: value === undefined ? 0 : value
                    })
                  }
                />
              </PanelBody>
            </PanelBody>
            <PanelBody
              title={__("Arrow")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <SelectControl
                label={__("Position")}
                options={ARROW}
                value={arrowPos}
                onChange={newEffect => setAttributes({ arrowPos: newEffect })}
              />
              <RangeControl
                label={__("Size ")}
                value={arrowSize}
                onChange={newValue => setAttributes({ arrowSize: newValue })}
              />
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    label: __("Arrow Color"),
                    value: arrowColor,
                    onChange: colorValue =>
                      setAttributes({ arrowColor: colorValue })
                  },
                  {
                    label: __("Background Color"),
                    value: arrowBack,
                    onChange: colorValue =>
                      setAttributes({ arrowBack: colorValue })
                  }
                ]}
              />
              <RangeControl
                label={__("Border Radius (PX)")}
                value={arrowRadius}
                onChange={newValue =>
                  setAttributes({
                    arrowRadius: newValue === undefined ? 0 : newValue
                  })
                }
              />
              <RangeControl
                label={__("Padding (PX)")}
                value={arrowPadding}
                onChange={newValue =>
                  setAttributes({
                    arrowPadding: newValue === undefined ? 0 : newValue
                  })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Content")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <SelectControl
                label={__("Type")}
                options={TYPE}
                value={contentType}
                onChange={newType => setAttributes({ contentType: newType })}
                help={__(
                  "Gutenberg Block works only with single accordion item"
                )}
              />
              <Toolbar
                controls={ALIGNS.map(align => ({
                  icon: "editor-align" + align,
                  isActive: align === descAlign,
                  onClick: () => setAttributes({ descAlign: align })
                }))}
              />
              {"text" === contentType && (
                <Fragment>
                  <PanelBody
                    title={__("Font")}
                    className="premium-panel-body-inner"
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
                      size={descSize}
                      weight={descWeight}
                      style={descStyle}
                      spacing={descLetter}
                      line={descLine}
                      upper={descUpper}
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
                      onChangeUpper={check =>
                        setAttributes({ descUpper: check })
                      }
                    />
                  </PanelBody>
                  <PanelColorSettings
                    title={__("Colors")}
                    className="premium-panel-body-inner"
                    initialOpen={false}
                    colorSettings={[
                      {
                        label: __("Text Color"),
                        value: descColor,
                        onChange: colorValue =>
                          setAttributes({ descColor: colorValue })
                      },
                      {
                        label: __("Background Color"),
                        value: descBack,
                        onChange: colorValue =>
                          setAttributes({ descBack: colorValue })
                      }
                    ]}
                  />
                </Fragment>
              )}
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumBorder
                  borderType={descBorder}
                  borderWidth={descBorderWidth}
                  borderColor={descBorderColor}
                  borderRadius={descBorderRadius}
                  onChangeType={newType =>
                    setAttributes({ descBorder: newType })
                  }
                  onChangeWidth={newWidth =>
                    setAttributes({ descBorderWidth: newWidth })
                  }
                  onChangeColor={colorValue =>
                    setAttributes({ descBorderColor: colorValue })
                  }
                  onChangeRadius={newrRadius =>
                    setAttributes({ descBorderRadius: newrRadius })
                  }
                />
              </PanelBody>
              {"text" === contentType && (
                <PremiumTextShadow
                  color={textShadowColor}
                  blur={textShadowBlur}
                  horizontal={textShadowHorizontal}
                  vertical={textShadowVertical}
                  onChangeColor={newColor =>
                    setAttributes({
                      textShadowColor:
                        newColor === undefined ? "transparent" : newColor
                    })
                  }
                  onChangeBlur={newBlur =>
                    setAttributes({
                      textShadowBlur: newBlur === undefined ? 0 : newBlur
                    })
                  }
                  onChangehHorizontal={newValue =>
                    setAttributes({
                      textShadowHorizontal:
                        newValue === undefined ? 0 : newValue
                    })
                  }
                  onChangeVertical={newValue =>
                    setAttributes({
                      textShadowVertical: newValue === undefined ? 0 : newValue
                    })
                  }
                />
              )}
              <PanelBody
                title={__("Padding")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumPadding
                  paddingTop={descPaddingT}
                  paddingRight={descPaddingR}
                  paddingBottom={descPaddingB}
                  paddingLeft={descPaddingL}
                  onChangePadTop={value =>
                    setAttributes({
                      descPaddingT: value === undefined ? 0 : value
                    })
                  }
                  onChangePadRight={value =>
                    setAttributes({
                      descPaddingR: value === undefined ? 0 : value
                    })
                  }
                  onChangePadBottom={value =>
                    setAttributes({
                      descPaddingB: value === undefined ? 0 : value
                    })
                  }
                  onChangePadLeft={value =>
                    setAttributes({
                      descPaddingL: value === undefined ? 0 : value
                    })
                  }
                />
              </PanelBody>
            </PanelBody>
          </InspectorControls>
        ),
        <Fragment>
          <div id={accordionId} className={`${className}`}>
            {accordionItems}
          </div>
          <div className={"premium-repeater"}>
            <button
              className={"premium-repeater-btn"}
              onClick={() => {
                return setAttributes({
                  repeaterItems: repeaterItems.concat([
                    {
                      titleText: __("Awesome Title"),
                      descText: __("Cool Description")
                    }
                  ])
                });
              }}
            >
              <i className="dashicons dashicons-plus premium-repeater-icon" />
              {__("Add New Item")}
            </button>
            <p>{__("Add the items you need then reload the page")}</p>
          </div>
        </Fragment>
      ];
    }
  }

  registerBlockType("premium/accordion", {
    title: __("Accordion"),
    icon: <PbgIcon icon="accordion" />,
    category: "premium-blocks",
    attributes: accordionAttrs,
    edit: PremiumAccordion,
    save: props => {
      const {
        accordionId,
        repeaterItems,
        direction,
        titleTag,
        titleSize,
        titleLine,
        titleLetter,
        titleStyle,
        titleUpper,
        titleWeight,
        titleColor,
        titleBorder,
        titleBorderColor,
        titleBorderWidth,
        titleBorderRadius,
        titleBack,
        titleShadowBlur,
        titleShadowColor,
        titleShadowHorizontal,
        titleShadowVertical,
        titlePaddingT,
        titlePaddingR,
        titlePaddingB,
        titlePaddingL,
        arrowColor,
        arrowBack,
        arrowPos,
        arrowPadding,
        arrowSize,
        arrowRadius,
        contentType,
        descAlign,
        descSize,
        descLine,
        descLetter,
        descStyle,
        descUpper,
        descWeight,
        descColor,
        descBack,
        descBorder,
        descBorderColor,
        descBorderRadius,
        descBorderWidth,
        textShadowBlur,
        textShadowColor,
        textShadowHorizontal,
        textShadowVertical,
        descPaddingT,
        descPaddingR,
        descPaddingB,
        descPaddingL
      } = props.attributes;

      const accordionItems = repeaterItems.map((item, index) => {
        return (
          <div
            id={`${className}__layer${index}`}
            className={`${className}__content_wrap`}
          >
            <div
              className={`${className}__title_wrap ${className}__${direction} ${className}__${arrowPos}`}
              style={{
                backgroundColor: titleBack,
                border: titleBorder,
                borderWidth: titleBorderWidth + "px",
                borderRadius: titleBorderRadius + "px",
                borderColor: titleBorderColor,
                paddingTop: titlePaddingT,
                paddingRight: titlePaddingR,
                paddingBottom: titlePaddingB,
                paddingLeft: titlePaddingL
              }}
            >
              <div className={`${className}__title`}>
                <RichText.Content
                  tagName={titleTag.toLowerCase()}
                  className={`${className}__title_text`}
                  value={item.titleText}
                  style={{
                    color: titleColor,
                    fontSize: titleSize + "px",
                    letterSpacing: titleLetter + "px",
                    textTransform: titleUpper ? "uppercase" : "none",
                    fontStyle: titleStyle,
                    fontWeight: titleWeight,
                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                    lineHeight: titleLine + "px"
                  }}
                />
              </div>
              <div className={`${className}__icon_wrap`}>
                <svg
                  className={`${className}__icon premium-accordion__closed`}
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width={arrowSize}
                  height={arrowSize}
                  viewBox="0 0 20 20"
                  style={{
                    fill: arrowColor,
                    backgroundColor: arrowBack,
                    padding: arrowPadding + "px",
                    borderRadius: arrowRadius + "px"
                  }}
                >
                  <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                </svg>
              </div>
            </div>
            <div
              className={`${className}__desc_wrap premium-accordion__desc_close`}
              style={{
                textAlign: descAlign,
                backgroundColor: descBack,
                border: descBorder,
                borderWidth: descBorderWidth + "px",
                borderRadius: descBorderRadius + "px",
                borderColor: descBorderColor,
                paddingTop: descPaddingT,
                paddingRight: descPaddingR,
                paddingBottom: descPaddingB,
                paddingLeft: descPaddingL
              }}
            >
              {"text" === contentType && (
                <RichText.Content
                  tagName="p"
                  className={`${className}__desc`}
                  value={item.descText}
                  style={{
                    color: descColor,
                    fontSize: descSize + "px",
                    letterSpacing: descLetter + "px",
                    textTransform: descUpper ? "uppercase" : "none",
                    textShadow: `${textShadowHorizontal}px ${textShadowVertical}px ${textShadowBlur}px ${textShadowColor}`,
                    fontStyle: descStyle,
                    fontWeight: descWeight,
                    lineHeight: descLine + "px"
                  }}
                />
              )}
              {"block" === contentType && <InnerBlocks.Content />}
            </div>
          </div>
        );
      });
      return (
        <div id={accordionId} className={`${className}`}>
          {accordionItems}
        </div>
      );
    },
    deprecated: [
      {
        attributes: accordionAttrs,
        save: props => {
          const {
            accordionId,
            repeaterItems,
            direction,
            titleTag,
            titleSize,
            titleLine,
            titleLetter,
            titleStyle,
            titleUpper,
            titleWeight,
            titleColor,
            titleBorder,
            titleBorderColor,
            titleBorderWidth,
            titleBorderRadius,
            titleBack,
            titleShadowBlur,
            titleShadowColor,
            titleShadowHorizontal,
            titleShadowVertical,
            titlePaddingT,
            titlePaddingR,
            titlePaddingB,
            titlePaddingL,
            arrowColor,
            arrowBack,
            arrowPos,
            arrowPadding,
            arrowSize,
            arrowRadius,
            contentType,
            descAlign,
            descSize,
            descLine,
            descLetter,
            descStyle,
            descUpper,
            descWeight,
            descColor,
            descBack,
            descBorder,
            descBorderColor,
            descBorderRadius,
            descBorderWidth,
            descPaddingT,
            descPaddingR,
            descPaddingB,
            descPaddingL
          } = props.attributes;

          const accordionItems = repeaterItems.map((item, index) => {
            return (
              <div
                id={`${className}__layer${index}`}
                className={`${className}__content_wrap`}
              >
                <div
                  className={`${className}__title_wrap ${className}__${direction} ${className}__${arrowPos}`}
                  style={{
                    backgroundColor: titleBack,
                    border: titleBorder,
                    borderWidth: titleBorderWidth + "px",
                    borderRadius: titleBorderRadius + "px",
                    borderColor: titleBorderColor,
                    paddingTop: titlePaddingT,
                    paddingRight: titlePaddingR,
                    paddingBottom: titlePaddingB,
                    paddingLeft: titlePaddingL
                  }}
                >
                  <div className={`${className}__title`}>
                    <RichText.Content
                      tagName={titleTag.toLowerCase()}
                      className={`${className}__title_text`}
                      value={item.titleText}
                      style={{
                        color: titleColor,
                        fontSize: titleSize + "px",
                        letterSpacing: titleLetter + "px",
                        textTransform: titleUpper ? "uppercase" : "none",
                        fontStyle: titleStyle,
                        fontWeight: titleWeight,
                        textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
                        lineHeight: titleLine + "px"
                      }}
                    />
                  </div>
                  <div className={`${className}__icon_wrap`}>
                    <svg
                      className={`${className}__icon premium-accordion__closed`}
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      width={arrowSize}
                      height={arrowSize}
                      viewBox="0 0 20 20"
                      style={{
                        fill: arrowColor,
                        backgroundColor: arrowBack,
                        padding: arrowPadding + "px",
                        borderRadius: arrowRadius + "px"
                      }}
                    >
                      <polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
                    </svg>
                  </div>
                </div>
                <div
                  className={`${className}__desc_wrap premium-accordion__desc_close`}
                  style={{
                    textAlign: descAlign,
                    backgroundColor: descBack,
                    border: descBorder,
                    borderWidth: descBorderWidth + "px",
                    borderRadius: descBorderRadius + "px",
                    borderColor: descBorderColor,
                    paddingTop: descPaddingT,
                    paddingRight: descPaddingR,
                    paddingBottom: descPaddingB,
                    paddingLeft: descPaddingL
                  }}
                >
                  {"text" === contentType && (
                    <RichText.Content
                      tagName="p"
                      className={`${className}__desc`}
                      value={item.descText}
                      style={{
                        color: descColor,
                        fontSize: descSize + "px",
                        letterSpacing: descLetter + "px",
                        textTransform: descUpper ? "uppercase" : "none",
                        fontStyle: descStyle,
                        fontWeight: descWeight,
                        lineHeight: descLine + "px"
                      }}
                    />
                  )}
                  {"block" === contentType && <InnerBlocks.Content />}
                </div>
              </div>
            );
          });
          return (
            <div id={accordionId} className={`${className}`}>
              {accordionItems}
            </div>
          );
        }
      }
    ]
  });
}
