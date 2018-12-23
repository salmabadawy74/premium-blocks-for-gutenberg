import { container } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackgroud from "../../components/premium-background";
import PbgIcon from "../icons";

if (container) {
  const className = "premium-container";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    ToggleControl,
    RangeControl,
    SelectControl
  } = wp.components;

  const {
    BlockControls,
    AlignmentToolbar,
    InnerBlocks,
    InspectorControls,
    PanelColorSettings
  } = wp.editor;

  const CONTENT = [
    ["core/paragraph", { content: __("Insert Your Content Here") }],
    ["core/paragraph", { content: __("Insert Your Content Here") }]
  ];

  const containerAttrs = {
    stretchSection: {
      type: "boolean",
      default: false
    },
    innerWidthType: {
      type: "string",
      default: "boxed"
    },
    horAlign: {
      type: "string",
      default: "center"
    },
    height: {
      type: "string",
      default: "min"
    },
    innerWidth: {
      type: "number"
    },
    minHeight: {
      type: "number"
    },
    vPos: {
      type: "string",
      default: "top"
    },
    color: {
      type: "string"
    },
    imageID: {
      type: "string"
    },
    imageURL: {
      type: "string"
    },
    backgroundRepeat: {
      type: "string",
      default: "no-repeat"
    },
    backgroundPosition: {
      type: "string",
      default: "top center"
    },
    backgroundSize: {
      type: "string",
      default: "auto"
    },
    fixed: {
      type: "boolean",
      default: false
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
      type: "number"
    },
    borderColor: {
      type: "string"
    },
    marginTop: {
      type: "number"
    },
    marginBottom: {
      type: "number"
    },
    marginLeft: {
      type: "number"
    },
    marginRight: {
      type: "number"
    },
    paddingTop: {
      type: "number"
    },
    paddingRight: {
      type: "number"
    },
    paddingBottom: {
      type: "number"
    },
    paddingLeft: {
      type: "number"
    },
    shadowColor: {
      type: "string"
    },
    shadowBlur: {
      type: "number",
      default: "0"
    },
    shadowHorizontal: {
      type: "number",
      default: "0"
    },
    shadowVertical: {
      type: "number",
      default: "0"
    },
    shadowPosition: {
      type: "string",
      default: ""
    }
  };
  registerBlockType("premium/container", {
    title: __("Section"),
    icon: <PbgIcon icon="section" />,
    category: "premium-blocks",
    attributes: containerAttrs,
    supports: {
      align: true,
      align: ["center", "wide", "full"]
    },
    edit: props => {
      const { isSelected, setAttributes, clientId } = props;

      const {
        stretchSection,
        horAlign,
        innerWidthType,
        innerWidth,
        minHeight,
        vPos,
        height,
        color,
        imageID,
        imageURL,
        fixed,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        borderType,
        borderWidth,
        borderColor,
        borderRadius,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition
      } = props.attributes;
      const WIDTH = [
        {
          value: "boxed",
          label: __("Boxed")
        },
        {
          value: "full",
          label: __("Full Width")
        }
      ];
      const HEIGHT = [
        {
          value: "fit",
          label: __("Fit to Screen")
        },
        {
          value: "min",
          label: __("Min Height")
        }
      ];
      const VPOSITION = [
        {
          value: "top",
          label: __("Top")
        },
        {
          value: "middle",
          label: __("Middle")
        },
        {
          value: "bottom",
          label: __("Bottom")
        }
      ];
      return [
        isSelected && (
          <BlockControls key="controls">
            <AlignmentToolbar
              value={horAlign}
              onChange={newAlign => setAttributes({ horAlign: newAlign })}
            />
          </BlockControls>
        ),
        isSelected && (
          <InspectorControls key="inspector">
            <PanelBody
              title={__("General Settings")}
              className={`premium-panel-body premium-stretch-section`}
              initialOpen={true}
            >
              <ToggleControl
                label={__("Stretch Section")}
                checked={stretchSection}
                onChange={check => setAttributes({ stretchSection: check })}
                help={__(
                  "This option stretches the section to the full width of the page using JS. You will need to reload the page after you enable this option for the first time."
                )}
              />
              {stretchSection && (
                <SelectControl
                  label={__("Content Width")}
                  options={WIDTH}
                  value={innerWidthType}
                  onChange={newValue =>
                    setAttributes({ innerWidthType: newValue })
                  }
                />
              )}
              {"boxed" === innerWidthType && stretchSection && (
                <RangeControl
                  label={__("Max Width (%)")}
                  min="1"
                  max="1600"
                  value={innerWidth}
                  onChange={newValue => setAttributes({ innerWidth: newValue })}
                />
              )}
              <SelectControl
                label={__("Height")}
                options={HEIGHT}
                value={height}
                onChange={newValue => setAttributes({ height: newValue })}
              />
              {"min" === height && (
                <RangeControl
                  label={__("Min Height (PX)")}
                  value={minHeight}
                  min="1"
                  max="800"
                  onChange={newValue => setAttributes({ minHeight: newValue })}
                />
              )}
              <SelectControl
                label={__("Content Position")}
                options={VPOSITION}
                value={vPos}
                onChange={newValue => setAttributes({ vPos: newValue })}
              />
            </PanelBody>
            <PanelBody
              title={__("Background")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: color,
                    onChange: colorValue =>
                      setAttributes({ color: colorValue }),
                    label: __("Background Color")
                  }
                ]}
              />
              {imageURL && <img src={imageURL} width="100%" height="auto" />}
              <PremiumBackgroud
                imageID={imageID}
                imageURL={imageURL}
                backgroundPosition={backgroundPosition}
                backgroundRepeat={backgroundRepeat}
                backgroundSize={backgroundSize}
                fixed={fixed}
                onSelectMedia={media => {
                  setAttributes({
                    imageID: media.id,
                    imageURL: media.url
                  });
                }}
                onRemoveImage={value =>
                  setAttributes({ imageURL: "", imageID: "" })
                }
                onChangeBackPos={newValue =>
                  setAttributes({ backgroundPosition: newValue })
                }
                onchangeBackRepeat={newValue =>
                  setAttributes({ backgroundRepeat: newValue })
                }
                onChangeBackSize={newValue =>
                  setAttributes({ backgroundSize: newValue })
                }
                onChangeFixed={check => setAttributes({ fixed: check })}
              />
            </PanelBody>
            <PanelBody
              title={__("Border")}
              className="premium-panel-body"
              initialOpen={false}
            >
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
            </PanelBody>
            <PremiumBoxShadow
              inner={false}
              color={shadowColor}
              blur={shadowBlur}
              horizontal={shadowHorizontal}
              vertical={shadowVertical}
              position={shadowPosition}
              onChangeColor={newColor =>
                setAttributes({
                  shadowColor: newColor === undefined ? "transparent" : newColor
                })
              }
              onChangeBlur={newBlur =>
                setAttributes({
                  shadowBlur: newBlur === undefined ? 0 : newBlur
                })
              }
              onChangehHorizontal={newValue =>
                setAttributes({
                  shadowHorizontal: newValue === undefined ? 0 : newValue
                })
              }
              onChangeVertical={newValue =>
                setAttributes({
                  shadowVertical: newValue === undefined ? 0 : newValue
                })
              }
              onChangePosition={newValue =>
                setAttributes({
                  shadowPosition: newValue === undefined ? 0 : newValue
                })
              }
            />
            <PanelBody
              title={__("Spacings")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PremiumMargin
                directions={["all"]}
                marginTop={marginTop}
                marginRight={marginRight}
                marginBottom={marginBottom}
                marginLeft={marginLeft}
                onChangeMarTop={value =>
                  setAttributes({
                    marginTop: value === undefined ? 0 : value
                  })
                }
                onChangeMarRight={value =>
                  setAttributes({
                    marginRight: value === undefined ? 0 : value
                  })
                }
                onChangeMarBottom={value =>
                  setAttributes({
                    marginBottom: value === undefined ? 0 : value
                  })
                }
                onChangeMarLeft={value =>
                  setAttributes({
                    marginLeft: value === undefined ? 0 : value
                  })
                }
              />
              <PremiumPadding
                paddingTop={paddingTop}
                paddingRight={paddingRight}
                paddingBottom={paddingBottom}
                paddingLeft={paddingLeft}
                onChangePadTop={value =>
                  setAttributes({
                    paddingTop: value === undefined ? 0 : value
                  })
                }
                onChangePadRight={value =>
                  setAttributes({
                    paddingRight: value === undefined ? 0 : value
                  })
                }
                onChangePadBottom={value =>
                  setAttributes({
                    paddingBottom: value === undefined ? 0 : value
                  })
                }
                onChangePadLeft={value =>
                  setAttributes({
                    paddingLeft: value === undefined ? 0 : value
                  })
                }
              />
            </PanelBody>
          </InspectorControls>
        ),
        <div
          className={`${className} ${className}__stretch_${stretchSection} ${className}__${innerWidthType}`}
          style={{
            textAlign: horAlign,
            height: "fit" === height ? "100vh" : minHeight,
            backgroundColor: color,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            backgroundImage: `url('${imageURL}')`,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            backgroundSize: backgroundSize,
            backgroundAttachment: fixed ? "fixed" : "unset",
            marginTop: marginTop + "px",
            marginBottom: marginBottom + "px",
            marginLeft: marginLeft + "px",
            marginRight: marginRight + "px",
            paddingTop: paddingTop + "px",
            paddingBottom: paddingBottom + "px",
            paddingLeft: paddingLeft + "px",
            paddingRight: paddingRight + "px",
            boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
          }}
        >
          <div
            className={`${className}__content_wrap ${className}__${vPos}`}
            style={{
              maxWidth:
                "boxed" == innerWidthType && stretchSection
                  ? innerWidth
                    ? innerWidth + "px"
                    : "1140px"
                  : "100%"
            }}
          >
            <div className={`${className}__content_inner`}>
              <InnerBlocks template={CONTENT} />
            </div>
          </div>
        </div>
      ];
    },
    save: props => {
      const {
        stretchSection,
        horAlign,
        innerWidthType,
        innerWidth,
        height,
        vPos,
        minHeight,
        color,
        imageURL,
        fixed,
        backgroundRepeat,
        backgroundPosition,
        backgroundSize,
        borderType,
        borderWidth,
        borderColor,
        borderRadius,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        shadowPosition
      } = props.attributes;
      return (
        <div
          className={`${className} ${className}__stretch_${stretchSection} ${className}__${innerWidthType}`}
          style={{
            textAlign: horAlign,
            height: "fit" === height ? "100vh" : minHeight,
            backgroundColor: color,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            backgroundImage: `url('${imageURL}')`,
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            backgroundSize: backgroundSize,
            backgroundAttachment: fixed ? "fixed" : "unset",
            marginTop: marginTop + "px",
            marginBottom: marginBottom + "px",
            paddingTop: paddingTop + "px",
            marginLeft: marginLeft + "px",
            marginRight: marginRight + "px",
            paddingBottom: paddingBottom + "px",
            paddingLeft: paddingLeft + "px",
            paddingRight: paddingRight + "px",
            boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
          }}
        >
          <div
            className={`${className}__content_wrap ${className}__${vPos}`}
            style={{
              maxWidth:
                "boxed" == innerWidthType && stretchSection
                  ? innerWidth
                    ? innerWidth + "px"
                    : "1140px"
                  : "100%"
            }}
          >
            <div className={`${className}__content_inner`}>
              <InnerBlocks.Content />
            </div>
          </div>
        </div>
      );
    },
    deprecated: [
      {
        attributes: containerAttrs,
        save: props => {
          const {
            horAlign,
            innerWidth,
            innerWidthType,
            stretchSection,
            height,
            vPos,
            minHeight,
            color,
            imageURL,
            fixed,
            backgroundRepeat,
            backgroundPosition,
            backgroundSize,
            borderType,
            borderWidth,
            borderColor,
            borderRadius,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            shadowBlur,
            shadowColor,
            shadowHorizontal,
            shadowVertical,
            shadowPosition
          } = props.attributes;
          return (
            <div
              className={className}
              style={{
                textAlign: horAlign,
                height: "fit" === height ? "100vh" : minHeight,
                backgroundColor: color,
                border: borderType,
                borderWidth: borderWidth + "px",
                borderRadius: borderRadius + "px",
                borderColor: borderColor,
                backgroundImage: `url('${imageURL}')`,
                backgroundRepeat: backgroundRepeat,
                backgroundPosition: backgroundPosition,
                backgroundSize: backgroundSize,
                backgroundAttachment: fixed ? "fixed" : "unset",
                marginTop: marginTop + "px",
                marginBottom: marginBottom + "px",
                paddingTop: paddingTop + "px",
                marginLeft: marginLeft + "px",
                marginRight: marginRight + "px",
                paddingBottom: paddingBottom + "px",
                paddingLeft: paddingLeft + "px",
                paddingRight: paddingRight + "px",
                boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`
              }}
            >
              <div
                className={`${className}__content_wrap ${className}__${vPos}`}
                style={{ width: innerWidth ? innerWidth + "%" : "100%" }}
              >
                <div className={`${className}__content_inner`}>
                  <InnerBlocks.Content />
                </div>
              </div>
            </div>
          );
        }
      }
    ]
  });
}
