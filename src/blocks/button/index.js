import { button } from "../settings";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
//import PremiumIcon from "../../components/premium-icon";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PbgIcon from "../icons";
if (button) {
  const className = "premium-button";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    SelectControl,
    RangeControl,
    ToggleControl
  } = wp.components;

  const {
    InspectorControls,
    PanelColorSettings,
    AlignmentToolbar,
    BlockControls,
    RichText,
    URLInput
  } = wp.editor;

  const buttonAttrs = {
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
    backColor: {
      type: "string"
    },
    backHoverColor: {
      type: "string"
    },
    slideColor: {
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
    padding: {
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
    btnShadowColor: {
      type: "string"
    },
    btnShadowBlur: {
      type: "number",
      default: "0"
    },
    btnShadowHorizontal: {
      type: "number",
      default: "0"
    },
    btnShadowVertical: {
      type: "number",
      default: "0"
    },
    btnShadowPosition: {
      type: "string",
      default: ""
    },
    id: {
      type: "string"
    }
  };

  registerBlockType("premium/button", {
    title: __("Button"),
    icon: <PbgIcon icon="button" />,
    category: "premium-blocks",
    attributes: buttonAttrs,
    edit: props => {
      const { isSelected, setAttributes, clientId: blockId } = props;

      const {
        id,
        btnText,
        btnSize,
        btnAlign,
        btnLink,
        btnTarget,
        effect,
        effectDir,
        textColor,
        textHoverColor,
        backColor,
        backHoverColor,
        slideColor,
        textSize,
        textWeight,
        textLetter,
        textUpper,
        textLine,
        textStyle,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        padding,
        btnShadowBlur,
        btnShadowColor,
        btnShadowHorizontal,
        btnShadowVertical,
        btnShadowPosition
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
      const SHUTTER = [
        {
          value: "shutouthor",
          label: __("Shutter out Horizontal")
        },
        {
          value: "shutoutver",
          label: __("Shutter out Vertical")
        },
        {
          value: "scshutoutver",
          label: __("Scaled Shutter Vertical")
        },
        {
          value: "scshutouthor",
          label: __("Scaled Shutter Horizontal")
        },
        {
          value: "dshutinver",
          label: __("Tilted Left")
        },
        {
          value: "dshutinhor",
          label: __("Tilted Right")
        }
      ];
      const RADIAL = [
        {
          value: "radialin",
          label: __("Radial In")
        },
        {
          value: "radialout",
          label: __("Radial Out")
        },
        {
          value: "rectin",
          label: __("Rectangle In")
        },
        {
          value: "rectout",
          label: __("Rectangle Out")
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
        },
        {
          value: "shutter",
          label: __("Shutter")
        },
        {
          value: "radial",
          label: __("Radial")
        }
      ];
      const onChangeHover = newValue => {
        props.setAttributes({ effect: newValue });
        switch (newValue) {
          case "slide":
            props.setAttributes({ effectDir: "top" });
            break;
          case "shutter":
            props.setAttributes({ effectDir: "shutouthor" });
            break;
          case "radial":
            props.setAttributes({ effectDir: "radialin" });
            break;
        }
      };
      setAttributes({ id: blockId });
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
                onChange={onChangeHover}
              />
              {"slide" === effect && (
                <SelectControl
                  options={DIRECTION}
                  label={__("Direction")}
                  value={effectDir}
                  onChange={newValue => setAttributes({ effectDir: newValue })}
                />
              )}
              {"shutter" === effect && (
                <SelectControl
                  options={SHUTTER}
                  label={__("Shutter Direction")}
                  value={effectDir}
                  onChange={newValue => setAttributes({ effectDir: newValue })}
                />
              )}
              {"radial" === effect && (
                <SelectControl
                  options={RADIAL}
                  label={__("Style")}
                  value={effectDir}
                  onChange={newValue => setAttributes({ effectDir: newValue })}
                />
              )}
              <SelectControl
                options={SIZE}
                label={__("Button Size")}
                value={btnSize}
                onChange={newSize => setAttributes({ btnSize: newSize })}
              />
              <ToggleControl
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
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
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
              <PremiumTextShadow
                color={shadowColor}
                blur={shadowBlur}
                horizontal={shadowHorizontal}
                vertical={shadowVertical}
                onChangeColor={newColor =>
                  setAttributes({ shadowColor: newColor })
                }
                onChangeBlur={newBlur => setAttributes({ shadowBlur: newBlur })}
                onChangehHorizontal={newValue =>
                  setAttributes({ shadowHorizontal: newValue })
                }
                onChangeVertical={newValue =>
                  setAttributes({ shadowVertical: newValue })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Button Style")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    label:
                      "radial" !== effect
                        ? __("Background Color")
                        : __("Background Hover Color"),
                    value: backColor,
                    onChange: colorValue =>
                      setAttributes({ backColor: colorValue })
                  },
                  {
                    label:
                      "radial" !== effect
                        ? __("Background Hover Color")
                        : __("Background Color"),
                    value: backHoverColor,
                    onChange: colorValue =>
                      setAttributes({
                        backHoverColor: colorValue,
                        slideColor: colorValue
                      })
                  }
                ]}
              />
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner"
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
                label="Shadow"
                inner={true}
                color={btnShadowColor}
                blur={btnShadowBlur}
                horizontal={btnShadowHorizontal}
                vertical={btnShadowVertical}
                position={btnShadowPosition}
                onChangeColor={newColor =>
                  setAttributes({
                    btnShadowColor:
                      newColor === undefined ? "transparent" : newColor
                  })
                }
                onChangeBlur={newBlur =>
                  setAttributes({
                    btnShadowBlur: newBlur === undefined ? 0 : newBlur
                  })
                }
                onChangehHorizontal={newValue =>
                  setAttributes({
                    btnShadowHorizontal: newValue === undefined ? 0 : newValue
                  })
                }
                onChangeVertical={newValue =>
                  setAttributes({
                    btnShadowVertical: newValue === undefined ? 0 : newValue
                  })
                }
                onChangePosition={newValue =>
                  setAttributes({
                    btnShadowPosition: newValue === undefined ? 0 : newValue
                  })
                }
              />
              <PanelBody
                title={__("Spacings")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <RangeControl
                  label={__("Padding (PX)")}
                  value={padding}
                  onChange={newValue => setAttributes({ padding: newValue })}
                />
              </PanelBody>
            </PanelBody>
          </InspectorControls>
        ),
        <div
          id={`${className}-wrap-${id}`}
          className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
          style={{ textAlign: btnAlign }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-button-wrap-${id} .premium-button:hover {`,
                `color: ${textHoverColor} !important;`,
                "}",
                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                `background-color: ${backHoverColor} !important;`,
                "}",
                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                `background-color: ${slideColor}`,
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
              backgroundColor: backColor,
              fontSize: textSize + "px",
              letterSpacing: textLetter + "px",
              textTransform: textUpper ? "uppercase" : "none",
              fontStyle: textStyle,
              lineHeight: textLine + "px",
              fontWeight: textWeight,
              textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
              boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
              padding: padding + "px",
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor
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
      const {
        id,
        btnText,
        btnSize,
        btnAlign,
        btnLink,
        btnTarget,
        effect,
        effectDir,
        textColor,
        textHoverColor,
        backColor,
        backHoverColor,
        slideColor,
        textSize,
        textWeight,
        textLine,
        textLetter,
        textStyle,
        textUpper,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        padding,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        btnShadowBlur,
        btnShadowColor,
        btnShadowHorizontal,
        btnShadowVertical,
        btnShadowPosition
      } = props.attributes;
      return (
        <div
          id={`${className}-wrap-${id}`}
          className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
          style={{ textAlign: btnAlign }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-button-wrap-${id} .premium-button:hover {`,
                `color: ${textHoverColor} !important;`,
                "}",
                `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                `background-color: ${backHoverColor} !important;`,
                "}",
                `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                `background-color: ${slideColor}`,
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
              backgroundColor: backColor,
              fontSize: textSize + "px",
              letterSpacing: textLetter + "px",
              textTransform: textUpper ? "uppercase" : "none",
              fontStyle: textStyle,
              lineHeight: textLine + "px",
              fontWeight: textWeight,
              textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
              boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
              padding: padding + "px",
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor
            }}
          />
        </div>
      );
    },
    deprecated: [
      {
        attributes: buttonAttrs,
        save: props => {
          const {
            id,
            btnText,
            btnSize,
            btnAlign,
            btnLink,
            btnTarget,
            effect,
            effectDir,
            textColor,
            textHoverColor,
            backColor,
            backHoverColor,
            slideColor,
            textSize,
            textWeight,
            textLine,
            textLetter,
            textStyle,
            textUpper,
            borderType,
            borderWidth,
            borderRadius,
            borderColor,
            padding,
            shadowBlur,
            shadowColor,
            shadowHorizontal,
            shadowVertical
          } = props.attributes;
          return (
            <div
              id={`${className}-wrap-${id}`}
              className={`${className}__wrap ${className}__${effect} ${className}__${effectDir}`}
              style={{ textAlign: btnAlign }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: [
                    `#premium-button-wrap-${id} .premium-button:hover {`,
                    `color: ${textHoverColor} !important;`,
                    "}",
                    `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
                    `background-color: ${backHoverColor} !important;`,
                    "}",
                    `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
                    `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
                    `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
                    `background-color: ${slideColor}`,
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
                  backgroundColor: backColor,
                  fontSize: textSize + "px",
                  letterSpacing: textLetter + "px",
                  textTransform: textUpper ? "uppercase" : "none",
                  fontStyle: textStyle,
                  lineHeight: textLine + "px",
                  fontWeight: textWeight,
                  textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                  padding: padding + "px",
                  border: borderType,
                  borderWidth: borderWidth + "px",
                  borderRadius: borderRadius + "px",
                  borderColor: borderColor
                }}
              />
            </div>
          );
        }
      }
    ]
  });
}
