import { container } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";

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
      innerWidth: {
        type: "number",
        default: 100
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
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      } = props.attributes;
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
            <PanelBody
              title={__("Spacings")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <RangeControl
                label={__("Margin Top (PX)")}
                value={marginTop}
                onChange={newValue => setAttributes({ marginTop: newValue })}
              />
              <RangeControl
                label={__("Margin Bottom (PX)")}
                value={marginBottom}
                onChange={newValue => setAttributes({ marginBottom: newValue })}
              />
              <RangeControl
                label={__("Padding Top (PX)")}
                value={paddingTop}
                onChange={newValue => setAttributes({ paddingTop: newValue })}
              />
              <RangeControl
                label={__("Padding Right (PX)")}
                value={paddingRight}
                onChange={newValue => setAttributes({ paddingRight: newValue })}
              />
              <RangeControl
                label={__("Padding Bottom (PX)")}
                value={paddingBottom}
                onChange={newValue =>
                  setAttributes({ paddingBottom: newValue })
                }
              />
              <RangeControl
                label={__("Padding Left (PX)")}
                value={paddingLeft}
                onChange={newValue => setAttributes({ paddingLeft: newValue })}
              />
            </PanelBody>
          </InspectorControls>
        ),
        <div
          className={className}
          style={{
            textAlign: horAlign,
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
            paddingBottom: paddingBottom + "px",
            paddingLeft: paddingLeft + "px",
            paddingRight: paddingRight + "px"
          }}
        >
          <div
            className={`${className}__content_wrap`}
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
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      } = props.attributes;
      return (
        <div
          className={className}
          style={{
            textAlign: horAlign,
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
            paddingBottom: paddingBottom + "px",
            paddingLeft: paddingLeft + "px",
            paddingRight: paddingRight + "px"
          }}
        >
          <div
            className={`${className}__content_wrap`}
            style={{ width: innerWidth + "%" }}
          >
            <InnerBlocks.Content />
          </div>
        </div>
      );
    }
  });
}
