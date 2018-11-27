import { button } from "../settings";
import PremiumTypo from "../../components/premium-typo";
if (button) {
  const className = "premium-button";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    CheckboxControl,
    Toolbar,
    SelectControl,
    TextControl,
    RangeControl,
    ToggleControl,
    IconButton
  } = wp.components;
  const {
    InspectorControls,
    PanelColorSettings,
    AlignmentToolbar,
    BlockControls,
    MediaUpload,
    RichText,
    URLInput
  } = wp.editor;
  const { Fragment } = wp.element;

  registerBlockType("premium/button", {
    title: __("Button"),
    icon: "clock",
    category: "premium-blocks",
    attributes: {
      btnText: {
        type: "string",
        default: __("Premium Button")
      },
      btnSize: {
        type: "string",
        default: "md"
      },
      btnAlign: {
        type: "string",
        default: "center"
      },
      btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-button"
      },
      btnTarget: {
        type: "boolean",
        default: false
      },
      effect: {
        type: "string",
        default: "none"
      },
      effectDir: {
        type: "string",
        default: "top"
      },
      textColor: {
        type: "string"
      },
      textHoverColor: {
        type: "string"
      },
      textSize: {
        type: "number"
      },
      textLetter: {
        type: "number"
      },
      textStyle: {
        type: "string"
      },
      textUpper: {
        type: "boolean"
      },
      textWeight: {
        type: "number",
        default: 500
      },
      textLine: {
        type: "number"
      }
    },
    edit: props => {
      const { isSelected, setAttributes, clientId } = props;

      const {
        btnText,
        btnSize,
        btnAlign,
        btnLink,
        btnTarget,
        effect,
        effectDir,
        textColor,
        textHoverColor,
        textSize,
        textWeight,
        textLetter,
        textUpper,
        textLine,
        textStyle
      } = props.attributes;
      const SIZE = [
        {
          value: "sm",
          label: __("Small")
        },
        {
          value: "md",
          label: __("Medium")
        },
        {
          value: "lg",
          label: __("Large")
        },
        {
          value: "block",
          label: __("Block")
        }
      ];
      const DIRECTION = [
        {
          value: "top",
          label: __("Top to Bottom")
        },
        {
          value: "bottom",
          label: __("Bottom to Top")
        },
        {
          value: "left",
          label: __("Left to Right")
        },
        {
          value: "right",
          label: __("Right to Left")
        }
      ];
      const EFFECTS = [
        {
          value: "none",
          label: __("None")
        },
        {
          value: "slide",
          label: __("Slide")
        }
      ];
      return [
        isSelected && "block" != btnSize && (
          <BlockControls key="controls">
            <AlignmentToolbar
              value={btnAlign}
              onChange={newAlign => setAttributes({ btnAlign: newAlign })}
            />
          </BlockControls>
        ),
        isSelected && (
          <InspectorControls key={"inspector"}>
            <PanelBody
              title={__("General Settings")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <SelectControl
                options={EFFECTS}
                label={__("Hover Effect")}
                value={effect}
                onChange={newSize => setAttributes({ effect: newSize })}
              />
              {"none" !== effect && (
                <SelectControl
                  options={DIRECTION}
                  label={__("Direction")}
                  value={effectDir}
                  onChange={newSize => setAttributes({ effectDir: newSize })}
                />
              )}
              <SelectControl
                options={SIZE}
                label={__("Button Size")}
                value={btnSize}
                onChange={newSize => setAttributes({ btnSize: newSize })}
              />
              <CheckboxControl
                label={__("Open link in new tab")}
                checked={btnTarget}
                onChange={newValue => setAttributes({ btnTarget: newValue })}
              />
            </PanelBody>
            <PanelBody
              title={__("Text Style")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelColorSettings
                title={__("Colors")}
                colorSettings={[
                  {
                    label: __("Text Color"),
                    value: textColor,
                    onChange: colorValue =>
                      setAttributes({ textColor: colorValue })
                  },
                  {
                    label: __("Text Hover Color"),
                    value: textHoverColor,
                    onChange: colorValue =>
                      setAttributes({ textHoverColor: colorValue })
                  }
                ]}
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
                    "line",
                    "style",
                    "upper",
                    "spacing"
                  ]}
                  size={textSize}
                  weight={textWeight}
                  style={textStyle}
                  spacing={textLetter}
                  upper={textUpper}
                  line={textLine}
                  onChangeSize={newSize => setAttributes({ textSize: newSize })}
                  onChangeWeight={newWeight =>
                    setAttributes({ textWeight: newWeight })
                  }
                  onChangeLine={newValue =>
                    setAttributes({ textLine: newValue })
                  }
                  onChangeSize={newSize => setAttributes({ textSize: newSize })}
                  onChangeStyle={newStyle =>
                    setAttributes({ textStyle: newStyle })
                  }
                  onChangeSpacing={newValue =>
                    setAttributes({ textLetter: newValue })
                  }
                  onChangeUpper={check => setAttributes({ textUpper: check })}
                />
              </PanelBody>
            </PanelBody>
          </InspectorControls>
        ),
        <div
          id={`${className}-wrap-${clientId}`}
          className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
          style={{ textAlign: btnAlign }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-button-wrap-${clientId} .premium-button:hover {`,
                `color: ${textHoverColor} !important;`,
                "}"
              ].join("\n")
            }}
          />
          <RichText
            className={`${className} ${className}__${btnSize}`}
            value={btnText}
            onChange={value => setAttributes({ btnText: value })}
            style={{
              color: textColor,
              fontSize: textSize + "px",
              letterSpacing: textLetter + "px",
              textTransform: textUpper ? "uppercase" : "none",
              fontStyle: textStyle,
              lineHeight: textLine + "px",
              fontWeight: textWeight
            }}
            keepPlaceholderOnFocus
          />
          <URLInput
            value={btnLink}
            onChange={newLink => setAttributes({ btnLink: newLink })}
          />
        </div>
      ];
    },
    save: props => {
      const { clientId } = props;
      const {
        btnText,
        btnSize,
        btnAlign,
        btnLink,
        btnTarget,
        effect,
        effectDir,
        textColor,
        textSize,
        textHoverColor,
        textWeight,
        textLine,
        textLetter,
        textStyle,
        textUpper
      } = props.attributes;
      return (
        <div
          id={`${className}-wrap-${clientId}`}
          className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
          style={{ textAlign: btnAlign }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-button-wrap-${clientId} .premium-button:hover {`,
                `color: ${textHoverColor} !important;`,
                "}"
              ].join("\n")
            }}
          />
          <RichText.Content
            tagName="a"
            value={btnText}
            className={`${className} ${className}__${btnSize}`}
            href={btnLink}
            target={btnTarget ? "_blank" : "_self"}
            style={{
              color: textColor,
              fontSize: textSize + "px",
              letterSpacing: textLetter + "px",
              textTransform: textUpper ? "uppercase" : "none",
              fontStyle: textStyle,
              lineHeight: textLine + "px",
              fontWeight: textWeight
            }}
          />
        </div>
      );
    }
  });
}
