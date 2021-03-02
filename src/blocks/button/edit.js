import classnames from "classnames";
import PremiumTypo from "../../components/premium-typo";
import PremiumBorder from "../../components/premium-border";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumSizeUnits from "../../components/premium-size-units";
import FONTS from "../../components/premium-fonts";
import PremiumBackground from "../../components/premium-background";

const { __ } = wp.i18n;

const {
  PanelBody,
  SelectControl,
  RangeControl,
  ToggleControl,
  Dropdown,
  Button,
} = wp.components;

const { Fragment } = wp.element;

const {
  InspectorControls,
  ColorPalette,
  AlignmentToolbar,
  BlockControls,
  RichText,
  URLInput,
} = wp.blockEditor;

const edit = (props) => {
  const { isSelected, setAttributes, className, clientId: blockId } = props;

  const {
    buttonUpdated,
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
    backOpacity,
    backHoverColor,
    slideColor,
    textSize,
    textFontFamily,
    textWeight,
    textLetter,
    textUpper,
    textLine,
    textStyle,
    borderType,
    borderWidth,
    borderRadius,
    borderColor,
    borderHoverColor,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    padding,
    paddingU,
    btnShadowBlur,
    btnShadowColor,
    btnShadowHorizontal,
    btnShadowVertical,
    btnShadowPosition,
  } = props.attributes;

  const SIZE = [
    {
      value: "sm",
      label: __("Small"),
    },
    {
      value: "md",
      label: __("Medium"),
    },
    {
      value: "lg",
      label: __("Large"),
    },
    {
      value: "block",
      label: __("Block"),
    },
  ];
  const DIRECTION = [
    {
      value: "top",
      label: __("Top to Bottom"),
    },
    {
      value: "bottom",
      label: __("Bottom to Top"),
    },
    {
      value: "left",
      label: __("Left to Right"),
    },
    {
      value: "right",
      label: __("Right to Left"),
    },
  ];
  const SHUTTER = [
    {
      value: "shutouthor",
      label: __("Shutter out Horizontal"),
    },
    {
      value: "shutoutver",
      label: __("Shutter out Vertical"),
    },
    {
      value: "scshutoutver",
      label: __("Scaled Shutter Vertical"),
    },
    {
      value: "scshutouthor",
      label: __("Scaled Shutter Horizontal"),
    },
    {
      value: "dshutinver",
      label: __("Tilted Left"),
    },
    {
      value: "dshutinhor",
      label: __("Tilted Right"),
    },
  ];
  const RADIAL = [
    {
      value: "radialin",
      label: __("Radial In"),
    },
    {
      value: "radialout",
      label: __("Radial Out"),
    },
    {
      value: "rectin",
      label: __("Rectangle In"),
    },
    {
      value: "rectout",
      label: __("Rectangle Out"),
    },
  ];
  const EFFECTS = [
    {
      value: "none",
      label: __("None"),
    },
    {
      value: "slide",
      label: __("Slide"),
    },
    {
      value: "shutter",
      label: __("Shutter"),
    },
    {
      value: "radial",
      label: __("Radial"),
    },
  ];
  const onChangeHover = (newValue) => {
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

  const addFontToHead = (fontFamily) => {
    const head = document.head;
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css?family=" +
      fontFamily.replace(/\s+/g, "+") +
      ":" +
      "regular";
    head.appendChild(link);
  };

  const onChangeTextFamily = (fontFamily) => {
    setAttributes({ textFontFamily: fontFamily });
    if (!fontFamily) {
      return;
    }

    addFontToHead(fontFamily);
  };

  const mainClasses = classnames(className, "premium-button");

  return [
    isSelected && "block" != btnSize && (
      <BlockControls key="controls">
        <AlignmentToolbar
          value={btnAlign}
          onChange={(newAlign) => setAttributes({ btnAlign: newAlign })}
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
              onChange={(newValue) => setAttributes({ effectDir: newValue })}
            />
          )}
          {"shutter" === effect && (
            <SelectControl
              options={SHUTTER}
              label={__("Shutter Direction")}
              value={effectDir}
              onChange={(newValue) => setAttributes({ effectDir: newValue })}
            />
          )}
          {"radial" === effect && (
            <SelectControl
              options={RADIAL}
              label={__("Style")}
              value={effectDir}
              onChange={(newValue) => setAttributes({ effectDir: newValue })}
            />
          )}
          <SelectControl
            options={SIZE}
            label={__("Button Size")}
            value={btnSize}
            onChange={(newSize) => setAttributes({ btnSize: newSize })}
          />
          <ToggleControl
            label={__("Open link in new tab")}
            checked={btnTarget}
            onChange={(newValue) => setAttributes({ btnTarget: newValue })}
          />
        </PanelBody>
        <PanelBody
          title={__("Text Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <SelectControl
            label={__("Font Family")}
            value={textFontFamily}
            options={FONTS}
            onChange={onChangeTextFamily}
          />
          <PremiumTypo
            components={["size", "weight", "line", "style", "upper", "spacing"]}
            size={textSize}
            weight={textWeight}
            style={textStyle}
            spacing={textLetter}
            upper={textUpper}
            line={textLine}
            onChangeSize={(newSize) => setAttributes({ textSize: newSize })}
            onChangeWeight={(newWeight) =>
              setAttributes({ textWeight: newWeight })
            }
            onChangeLine={(newValue) => setAttributes({ textLine: newValue })}
            onChangeSize={(newSize) => setAttributes({ textSize: newSize })}
            onChangeStyle={(newStyle) => setAttributes({ textStyle: newStyle })}
            onChangeSpacing={(newValue) =>
              setAttributes({ textLetter: newValue })
            }
            onChangeUpper={(check) => setAttributes({ textUpper: check })}
          />
          <div className="premium-control-toggle">
            <strong>{__("Colors")}</strong>
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
                  <p>{__("Text Color")}</p>
                  <ColorPalette
                    value={textColor}
                    onChange={(newValue) =>
                      setAttributes({
                        textColor: newValue,
                      })
                    }
                    allowReset={true}
                  />
                  <p>{__("Text Hover Color")}</p>
                  <ColorPalette
                    value={textHoverColor}
                    onChange={(newValue) =>
                      setAttributes({
                        textHoverColor: newValue,
                      })
                    }
                    allowReset={true}
                  />
                </Fragment>
              )}
            />
          </div>
          <PremiumTextShadow
            color={shadowColor}
            blur={shadowBlur}
            horizontal={shadowHorizontal}
            vertical={shadowVertical}
            onChangeColor={(newColor) =>
              setAttributes({ shadowColor: newColor.hex })
            }
            onChangeBlur={(newBlur) => setAttributes({ shadowBlur: newBlur })}
            onChangehHorizontal={(newValue) =>
              setAttributes({ shadowHorizontal: newValue })
            }
            onChangeVertical={(newValue) =>
              setAttributes({ shadowVertical: newValue })
            }
          />
        </PanelBody>
        <PanelBody
          title={__("Button Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <div className="premium-control-toggle">
            <strong>{__("Colors")}</strong>
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
                  <p>
                    {"radial" !== effect
                      ? __("Background Color")
                      : __("Background Hover Color")}
                  </p>
                  <PremiumBackground
                    type="color"
                    colorValue={backColor}
                    onChangeColor={(newvalue) =>
                      setAttributes({
                        backColor: newvalue,
                        buttonUpdated: true,
                      })
                    }
                    opacityValue={backOpacity}
                    onChangeOpacity={(value) =>
                      setAttributes({ backOpacity: value })
                    }
                  />

                  <p>
                    {"radial" !== effect
                      ? __("Background Hover Color")
                      : __("Background Color")}
                  </p>
                  <ColorPalette
                    value={backHoverColor}
                    onChange={(newValue) =>
                      setAttributes({
                        backHoverColor: newValue,
                        slideColor: newValue,
                      })
                    }
                    allowReset={true}
                  />
                </Fragment>
              )}
            />
          </div>
          <PremiumBorder
            borderType={borderType}
            borderWidth={borderWidth}
            borderColor={borderColor}
            borderRadius={borderRadius}
            onChangeType={(newType) => setAttributes({ borderType: newType })}
            onChangeWidth={(newWidth) =>
              setAttributes({ borderWidth: newWidth })
            }
            onChangeColor={(colorValue) =>
              setAttributes({ borderColor: colorValue.hex })
            }
            onChangeRadius={(newrRadius) =>
              setAttributes({ borderRadius: newrRadius })
            }
          />
          <Fragment>
            <p>{__("Border Hover Color")}</p>
            <ColorPalette
              value={borderHoverColor}
              onChange={(newValue) =>
                setAttributes({
                  borderHoverColor: newValue,
                })
              }
              allowReset={true}
            />
          </Fragment>
          <PremiumBoxShadow
            label="Shadow"
            inner={true}
            color={btnShadowColor}
            blur={btnShadowBlur}
            horizontal={btnShadowHorizontal}
            vertical={btnShadowVertical}
            position={btnShadowPosition}
            onChangeColor={(newColor) =>
              setAttributes({
                btnShadowColor:
                  newColor === undefined ? "transparent" : newColor.hex,
              })
            }
            onChangeBlur={(newBlur) =>
              setAttributes({
                btnShadowBlur: newBlur === undefined ? 0 : newBlur,
              })
            }
            onChangehHorizontal={(newValue) =>
              setAttributes({
                btnShadowHorizontal: newValue === undefined ? 0 : newValue,
              })
            }
            onChangeVertical={(newValue) =>
              setAttributes({
                btnShadowVertical: newValue === undefined ? 0 : newValue,
              })
            }
            onChangePosition={(newValue) =>
              setAttributes({
                btnShadowPosition: newValue === undefined ? 0 : newValue,
              })
            }
          />
          <PremiumSizeUnits
            onChangeSizeUnit={(newValue) =>
              setAttributes({ paddingU: newValue })
            }
          />
          <RangeControl
            label={__("Padding")}
            value={padding}
            onChange={(newValue) => setAttributes({ padding: newValue })}
          />
        </PanelBody>
      </InspectorControls>
    ),
    <div
      id={`${mainClasses}-wrap-${id}`}
      className={`${mainClasses}__wrap premium-button__${effect} premium-button__${effectDir}`}
      style={{ textAlign: btnAlign }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: [
            `#premium-button-wrap-${id} .premium-button:hover {`,
            `color: ${textHoverColor} !important;`,
            `border-color: ${borderHoverColor} !important;`,
            "}",
            `#premium-button-wrap-${id}.premium-button__none .premium-button:hover {`,
            `background-color: ${backHoverColor} !important;`,
            "}",
            `#premium-button-wrap-${id}.premium-button__slide .premium-button::before,`,
            `#premium-button-wrap-${id}.premium-button__shutter .premium-button::before,`,
            `#premium-button-wrap-${id}.premium-button__radial .premium-button::before {`,
            `background-color: ${slideColor}`,
            "}",
          ].join("\n"),
        }}
      />
      <RichText
        className={`premium-button premium-button__${btnSize}`}
        value={btnText}
        onChange={(value) => setAttributes({ btnText: value })}
        style={{
          color: textColor,
          backgroundColor: buttonUpdated
            ? `rgba(${backColor},${backOpacity})`
            : backColor,
          fontSize: textSize + "px",
          fontFamily: textFontFamily,
          letterSpacing: textLetter + "px",
          textTransform: textUpper ? "uppercase" : "none",
          fontStyle: textStyle,
          lineHeight: textLine + "px",
          fontWeight: textWeight,
          textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
          boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`,
          padding: padding + paddingU,
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
        }}
        keepPlaceholderOnFocus
      />
      <URLInput
        value={btnLink}
        onChange={(newLink) => setAttributes({ btnLink: newLink })}
      />
    </div>,
  ];
};

export default edit;
