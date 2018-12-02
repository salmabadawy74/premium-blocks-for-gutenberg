import { container } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumBoxShadow from "../../components/premium-box-shadow";

if (container) {
  const className = "premium-container";

  const { __ } = wp.i18n;

  const { Fragment } = wp.element;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    ToggleControl,
    RangeControl,
    SelectControl,
    IconButton
  } = wp.components;

  const {
    BlockControls,
    AlignmentToolbar,
    InnerBlocks,
    InspectorControls,
    PanelColorSettings,
    MediaUpload
  } = wp.editor;

  const CONTENT = [
    ["core/paragraph", { content: __("Insert Your Content Here") }],
    ["core/paragraph", { content: __("Insert Your Content Here") }]
  ];

  registerBlockType("premium/container", {
    title: __("Container"),
    icon: "share-alt2",
    category: "premium-blocks",
    attributes: {
      horAlign: {
        type: "string",
        default: "center"
      },
      height: {
        type: "string",
        default: "min"
      },
      innerWidth: {
        type: "number",
        default: 100
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
        default: "repeat"
      },
      backgroundPosition: {
        type: "string",
        default: "center center"
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
    },
    supports: {
      align: true,
      align: ["center", "wide", "full"]
    },
    edit: props => {
      const { isSelected, setAttributes } = props;

      const {
        horAlign,
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
      const POSITION = [
        {
          value: "top left",
          label: __("Top Left")
        },
        {
          value: "top center",
          label: __("Top Center")
        },
        {
          value: "top right",
          label: __("Top Right")
        },
        {
          value: "center left",
          label: __("Center Left")
        },
        {
          value: "center center",
          label: __("Center Center")
        },
        {
          value: "center right",
          label: __("Center Right")
        },
        {
          value: "bottom left",
          label: __("Bottom Left")
        },
        {
          value: "bottom center",
          label: __("Bottom Center")
        },
        {
          value: "bottom right",
          label: __("Bottom Right")
        }
      ];
      const REPEAT = [
        {
          value: "no-repeat",
          label: __("No Repeat")
        },
        {
          value: "repeat",
          label: __("Repeat")
        },
        {
          value: "repeat-x",
          label: __("Repeat Horizontally")
        },
        {
          value: "repeat-y",
          label: __("Repeat Vertically")
        }
      ];
      const SIZE = [
        {
          value: "auto",
          label: __("Auto")
        },
        {
          value: "cover",
          label: __("Cover")
        },
        {
          value: "contain",
          label: __("Contain")
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
              className="premium-panel-body"
              initialOpen={false}
            >
              <RangeControl
                label={__("Content Width (%)")}
                value={innerWidth}
                onChange={newValue => setAttributes({ innerWidth: newValue })}
              />
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
              <MediaUpload
                allowedTypes={["image"]}
                onSelect={media => {
                  setAttributes({
                    imageID: media.id,
                    imageURL:
                      "undefined" === typeof media.sizes.thumbnail
                        ? media.url
                        : media.sizes.thumbnail.url
                  });
                }}
                type="image"
                value={imageID}
                render={({ open }) => (
                  <Fragment>
                    {!imageURL && (
                      <IconButton
                        label={__("Change Image")}
                        icon="edit"
                        onClick={open}
                      >
                        {__("Change Image")}
                      </IconButton>
                    )}
                    {imageURL && (
                      <IconButton
                        label={__("Remove Image")}
                        icon="no"
                        onClick={value =>
                          setAttributes({ imageURL: "", imageID: "" })
                        }
                      >
                        {__("Remove Image")}
                      </IconButton>
                    )}
                  </Fragment>
                )}
              />
              {imageURL && (
                <Fragment>
                  <SelectControl
                    label={__("Position")}
                    options={POSITION}
                    value={backgroundPosition}
                    onChange={newValue =>
                      setAttributes({ backgroundPosition: newValue })
                    }
                  />
                  <SelectControl
                    label={__("Repeat")}
                    options={REPEAT}
                    value={backgroundRepeat}
                    onChange={newValue =>
                      setAttributes({ backgroundRepeat: newValue })
                    }
                  />
                  <SelectControl
                    label={__("Size")}
                    options={SIZE}
                    value={backgroundSize}
                    onChange={newValue =>
                      setAttributes({ backgroundSize: newValue })
                    }
                  />
                  <ToggleControl
                    label={__("Fixed Background")}
                    checked={fixed}
                    onChange={check => setAttributes({ fixed: check })}
                  />
                </Fragment>
              )}
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
            style={{ width: innerWidth + "%" }}
          >
            <InnerBlocks template={CONTENT} />
          </div>
        </div>
      ];
    },
    save: props => {
      const {
        horAlign,
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
            style={{ width: innerWidth + "%" }}
          >
            <InnerBlocks.Content />
          </div>
        </div>
      );
    }
  });
}
