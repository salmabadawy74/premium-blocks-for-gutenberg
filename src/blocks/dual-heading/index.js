import { dualHeading } from "../settings";

if (dualHeading) {
  const className = "premium-dheading-block";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    SelectControl,
    TextControl,
    RangeControl,
    CheckboxControl
  } = wp.components;
  const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    PanelColorSettings,
    URLInput
  } = wp.editor;

  registerBlockType("premium/dheading-block", {
    title: __("Dual Heading"),
    icon: "editor-paragraph",
    category: "premium-blocks",
    attributes: {
      contentAlign: {
        type: "string",
        default: "center"
      },
      firstHeading: {
        type: "array",
        source: "children",
        default: "Premium ",
        selector: ".premium-dheading-block__first"
      },
      secondHeading: {
        type: "array",
        source: "children",
        default: "Blocks",
        selector: ".premium-dheading-block__second"
      },
      titleTag: {
        type: "string",
        default: "h1"
      },
      display: {
        type: "string",
        default: "inline"
      },
      firstColor: {
        type: "string",
        default: "#6ec1e4"
      },
      firstSize: {
        type: "number",
        default: "20"
      },
      firstBackground: {
        type: "string"
      },
      firstBorderType: {
        type: "string",
        default: "none"
      },
      firstBorderWidth: {
        type: "number",
        default: "1"
      },
      firstBorderRadius: {
        type: "number",
        default: "0"
      },
      firstBorderColor: {
        type: "string"
      },
      firstMarginR: {
        type: "number",
        default: "0"
      },
      firstMarginL: {
        type: "number",
        default: "0"
      },
      firstPadding: {
        type: "number",
        default: "0"
      },
      firstClip: {
        type: "boolean",
        default: false
      },
      firstAnim: {
        type: "boolean",
        default: false
      },
      firstClipColor: {
        type: "string",
        default: "#54595f"
      },
      secondColor: {
        type: "string",
        default: "#54595f"
      },
      secondSize: {
        type: "number",
        default: "20"
      },
      secondBackground: {
        type: "string"
      },
      secondBorderType: {
        type: "string",
        default: "none"
      },
      secondBorderWidth: {
        type: "number",
        default: "1"
      },
      secondBorderRadius: {
        type: "number",
        default: "0"
      },
      secondBorderColor: {
        type: "string"
      },
      secondMarginR: {
        type: "number",
        default: "0"
      },
      secondMarginL: {
        type: "number",
        default: "0"
      },
      secondPadding: {
        type: "number",
        default: "0"
      },
      secondClip: {
        type: "boolean",
        default: false
      },
      secondAnim: {
        type: "boolean",
        default: false
      },
      secondClipColor: {
        type: "string",
        default: "#6ec1e4"
      },
      link: {
        type: "boolean",
        default: false
      },
      target: {
        type: "boolean",
        default: false
      },
      headingURL: {
        type: "string"
      }
    },

    edit: props => {
      const { setAttributes, isSelected } = props;
      const {
        contentAlign,
        firstHeading,
        secondHeading,
        titleTag,
        display,
        firstColor,
        firstBackground,
        firstSize,
        firstBorderType,
        firstBorderWidth,
        firstBorderRadius,
        firstBorderColor,
        firstPadding,
        firstMarginR,
        firstMarginL,
        firstClip,
        firstAnim,
        firstClipColor,
        secondColor,
        secondBackground,
        secondSize,
        secondBorderType,
        secondBorderWidth,
        secondBorderRadius,
        secondBorderColor,
        secondPadding,
        secondMarginL,
        secondMarginR,
        secondClip,
        secondAnim,
        secondClipColor,
        link,
        target,
        headingURL
      } = props.attributes;
      const DISPLAY = [
        {
          value: "inline",
          label: "Inline"
        },
        {
          value: "block",
          label: "Block"
        }
      ];
      const BORDER = [
        {
          value: "none",
          label: "None"
        },
        {
          value: "solid",
          label: "Solid"
        },
        {
          value: "double",
          label: "Double"
        },
        {
          value: "dotted",
          label: "Dotted"
        },
        {
          value: "dashed",
          label: "Dashed"
        },
        {
          value: "groove",
          label: "Groove"
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
            <PanelBody title={__("General Settings")} initialOpen={false}>
              <TextControl
                label={__("First Heading")}
                type="url"
                value={firstHeading}
                onChange={value => setAttributes({ firstHeading: value })}
              />
              <TextControl
                label={__("Second Heading")}
                type="url"
                value={secondHeading}
                onChange={value => setAttributes({ secondHeading: value })}
              />

              <SelectControl
                label={__("Display")}
                value={display}
                options={DISPLAY}
                onChange={value => setAttributes({ display: value })}
              />
              <CheckboxControl
                label={__("Link")}
                checked={link}
                onChange={newValue => setAttributes({ link: newValue })}
              />
              {link && (
                <CheckboxControl
                  label={__("Open link in new tab")}
                  checked={target}
                  onChange={newValue => setAttributes({ target: newValue })}
                />
              )}
            </PanelBody>

            <PanelBody title={__("First Heading")} initialOpen={false}>
              <CheckboxControl
                label={__("Clipped")}
                checked={firstClip}
                onChange={newValue => setAttributes({ firstClip: newValue })}
              />
              {firstClip && (
                <CheckboxControl
                  label={__("Animated")}
                  checked={firstAnim}
                  onChange={newValue => setAttributes({ firstAnim: newValue })}
                />
              )}
              <PanelColorSettings
                colorSettings={[
                  {
                    value: firstColor,
                    onChange: colorValue =>
                      setAttributes({ firstColor: colorValue }),
                    label: __("Color")
                  }
                ]}
              />
              <p>{__("Font Size (PX)")}</p>
              <RangeControl
                value={firstSize}
                min="10"
                max="80"
                onChange={newSize => setAttributes({ firstSize: newSize })}
              />
              {!firstClip && (
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: firstBackground,
                      onChange: colorValue =>
                        setAttributes({ firstBackground: colorValue }),
                      label: __("Background Color")
                    }
                  ]}
                />
              )}
              {firstClip && (
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: firstClipColor,
                      onChange: colorValue =>
                        setAttributes({ firstClipColor: colorValue }),
                      label: __("Second Color")
                    }
                  ]}
                />
              )}
              <SelectControl
                label={__("Border Type")}
                options={BORDER}
                value={firstBorderType}
                onChange={newType =>
                  setAttributes({ firstBorderType: newType })
                }
              />
              <p>{"none" != firstBorderType && __("Border Width")}</p>
              {"none" != firstBorderType && (
                <RangeControl
                  value={firstBorderWidth}
                  min="0"
                  max="50"
                  onChange={newWidth =>
                    setAttributes({ firstBorderWidth: newWidth })
                  }
                />
              )}
              {"none" != firstBorderType && (
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: firstBorderColor,
                      onChange: colorValue =>
                        setAttributes({ firstBorderColor: colorValue }),
                      label: __("Border Color")
                    }
                  ]}
                />
              )}
              <p>{__("Border Radius")}</p>
              <RangeControl
                value={firstBorderRadius}
                min="0"
                max="150"
                onChange={newRadius =>
                  setAttributes({ firstBorderRadius: newRadius })
                }
              />
              <p>{__("Margin Left")}</p>
              <RangeControl
                value={firstMarginL}
                min="0"
                max="100"
                onChange={newMargin =>
                  setAttributes({ firstMarginL: newMargin })
                }
              />
              <p>{__("Margin Right")}</p>
              <RangeControl
                value={firstMarginR}
                min="0"
                max="100"
                onChange={newMargin =>
                  setAttributes({ firstMarginR: newMargin })
                }
              />
              <p>{__("Padding")}</p>
              <RangeControl
                value={firstPadding}
                min="0"
                max="100"
                onChange={newPadding =>
                  setAttributes({ firstPadding: newPadding })
                }
              />
            </PanelBody>
            <PanelBody title={__("Second Heading")} initialOpen={false}>
              <CheckboxControl
                label={__("Clipped")}
                checked={secondClip}
                onChange={newValue => setAttributes({ secondClip: newValue })}
              />
              {secondClip && (
                <CheckboxControl
                  label={__("Animated")}
                  checked={secondAnim}
                  onChange={newValue => setAttributes({ secondAnim: newValue })}
                />
              )}
              <PanelColorSettings
                colorSettings={[
                  {
                    value: secondColor,
                    onChange: colorValue =>
                      setAttributes({ secondColor: colorValue }),
                    label: __("Color")
                  }
                ]}
              />
              <p>{__("Font Size (PX)")}</p>
              <RangeControl
                min="10"
                max="80"
                value={secondSize}
                onChange={newSize => setAttributes({ secondSize: newSize })}
              />
              {!secondClip && (
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: secondBackground,
                      onChange: colorValue =>
                        setAttributes({ secondBackground: colorValue }),
                      label: __("Background Color")
                    }
                  ]}
                />
              )}
              {secondClip && (
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: secondClipColor,
                      onChange: colorValue =>
                        setAttributes({ secondClipColor: colorValue }),
                      label: __("Second Color")
                    }
                  ]}
                />
              )}
              <SelectControl
                label={__("Border Type")}
                options={BORDER}
                value={secondBorderType}
                onChange={newType =>
                  setAttributes({ secondBorderType: newType })
                }
              />
              <p>{"none" != secondBorderType && __("Border Width")}</p>
              {"none" != secondBorderType && (
                <RangeControl
                  value={secondBorderWidth}
                  min="0"
                  max="50"
                  onChange={newWidth =>
                    setAttributes({ secondBorderWidth: newWidth })
                  }
                />
              )}
              {"none" != secondBorderType && (
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: secondBorderColor,
                      onChange: colorValue =>
                        setAttributes({ secondBorderColor: colorValue }),
                      label: __("Border Color")
                    }
                  ]}
                />
              )}
              <p>{__("Border Radius")}</p>
              <RangeControl
                value={secondBorderRadius}
                min="0"
                max="150"
                onChange={newRadius =>
                  setAttributes({ secondBorderRadius: newRadius })
                }
              />
              <p>{__("Margin Left")}</p>
              <RangeControl
                value={secondMarginL}
                min="0"
                max="100"
                onChange={newMargin =>
                  setAttributes({ secondMarginL: newMargin })
                }
              />
              <p>{__("Margin Right")}</p>
              <RangeControl
                value={secondMarginR}
                min="0"
                max="100"
                onChange={newMargin =>
                  setAttributes({ secondMarginR: newMargin })
                }
              />
              <p>{__("Padding")}</p>
              <RangeControl
                value={secondPadding}
                min="0"
                max="100"
                onChange={newPadding =>
                  setAttributes({ secondPadding: newPadding })
                }
              />
            </PanelBody>
          </InspectorControls>
        ),
        <div
          className={`${className}__container`}
          style={{ textAlign: contentAlign }}
        >
          {link && isSelected && (
            <URLInput
              value={headingURL}
              onChange={newUrl => setAttributes({ headingURL: newUrl })}
            />
          )}
          <h2 className={`${className}__title`}>
            <span
              className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
              style={{
                display: display,
                color: firstColor,
                backgroundColor: firstClip ? "none" : firstBackground,
                backgroundImage: firstClip
                  ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                  : "none",
                fontSize: firstSize + "px",
                border: firstBorderType,
                borderWidth: firstBorderWidth + "px",
                borderRadius: firstBorderRadius + "px",
                borderColor: firstBorderColor,
                padding: firstPadding + "px",
                marginLeft: firstMarginL + "px",
                marginRight: firstMarginR + "px"
              }}
            >
              {firstHeading}
            </span>
            <span
              className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
              style={{
                display: display,
                color: secondColor,
                backgroundColor: secondClip ? "none" : secondBackground,
                backgroundImage: secondClip
                  ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                  : "none",
                fontSize: secondSize + "px",
                border: secondBorderType,
                borderWidth: secondBorderWidth + "px",
                borderRadius: secondBorderRadius + "px",
                borderColor: secondBorderColor,
                padding: secondPadding + "px",
                marginLeft: secondMarginL + "px",
                marginRight: secondMarginR + "px"
              }}
            >
              {secondHeading}
            </span>
          </h2>
        </div>
      ];
    },
    save: props => {
      const {
        contentAlign,
        firstHeading,
        secondHeading,
        display,
        firstColor,
        firstBackground,
        firstSize,
        firstBorderType,
        firstBorderWidth,
        firstBorderRadius,
        firstBorderColor,
        firstPadding,
        firstMargin,
        firstClip,
        firstAnim,
        firstClipColor,
        secondColor,
        secondBackground,
        secondSize,
        secondBorderType,
        secondBorderWidth,
        secondBorderRadius,
        secondBorderColor,
        secondPadding,
        secondMargin,
        secondClip,
        secondAnim,
        secondClipColor,
        link,
        target,
        headingURL
      } = props.attributes;

      return (
        <a
          className={`${className}__link`}
          href={link && headingURL}
          target={target && "_blank"}
        >
          <div
            className={`${className}__container`}
            style={{
              textAlign: contentAlign
            }}
          >
            <h2 className={`${className}__title`}>
              <span
                className={`${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`}
                style={{
                  display: display,
                  color: firstColor,
                  backgroundColor: firstClip ? "none" : firstBackground,
                  backgroundImage: firstClip
                    ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})`
                    : "none",
                  fontSize: firstSize + "px",
                  border: firstBorderType,
                  borderWidth: firstBorderWidth + "px",
                  borderRadius: firstBorderRadius + "px",
                  borderColor: firstBorderColor,
                  padding: firstPadding + "px",
                  margin: firstMargin + "px"
                }}
              >
                {firstHeading}
              </span>
              <span
                className={`${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`}
                style={{
                  display: display,
                  color: secondColor,
                  backgroundColor: secondClip ? "none" : secondBackground,
                  backgroundImage: secondClip
                    ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})`
                    : "none",
                  fontSize: secondSize + "px",
                  border: secondBorderType,
                  borderWidth: secondBorderWidth + "px",
                  borderRadius: secondBorderRadius + "px",
                  borderColor: secondBorderColor,
                  padding: secondPadding + "px",
                  margin: secondMargin + "px"
                }}
              >
                {secondHeading}
              </span>
            </h2>
          </div>
        </a>
      );
    }
  });
}
