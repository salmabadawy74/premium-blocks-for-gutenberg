import { icon } from "../settings";
import { FontAwesomeEnabled } from "../settings";
import PremiumIcon from "../../components/premium-icon";
import PremiumBorder from "../../components/premium-border";

if (icon) {
  const className = "premium-icon";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const { PanelBody, Toolbar, SelectControl, RangeControl } = wp.components;
  const { InspectorControls, PanelColorSettings } = wp.editor;

  registerBlockType("premium/icon", {
    title: __("Icon"),
    icon: "admin-customizer",
    category: "premium-blocks",
    attributes: {
      iconType: {
        type: "string",
        default: "dash"
      },
      selectedIcon: {
        type: "string",
        default: "dashicons dashicons-admin-customizer"
      },
      align: {
        type: "string",
        default: "center"
      },
      hoverEffect: {
        type: "string",
        default: "none"
      },
      iconSize: {
        type: "number",
        default: 50
      },
      iconColor: {
        type: "string",
        default: "#6ec1e4"
      },
      iconBack: {
        type: "string",
        default: "#54595f"
      },
      padding: {
        type: "string",
        default: "up"
      },
      paddingT: {
        type: "number",
        default: 25
      },
      paddingR: {
        type: "number",
        default: 25
      },
      paddingB: {
        type: "number",
        default: 25
      },
      paddingL: {
        type: "number",
        default: 25
      },
      margin: {
        type: "string",
        default: "up"
      },
      marginT: {
        type: "number",
        default: 5
      },
      marginR: {
        type: "number",
        default: 5
      },
      marginB: {
        type: "number",
        default: 5
      },
      marginL: {
        type: "number",
        default: 5
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
        default: 100
      },
      borderColor: {
        type: "string"
      },
      background: {
        type: "string"
      },
      wrapBorderType: {
        type: "string",
        default: "none"
      },
      wrapBorderWidth: {
        type: "number",
        default: "1"
      },
      wrapBorderRadius: {
        type: "number"
      },
      wrapBorderColor: {
        type: "string"
      },
      wrapPadding: {
        type: "string",
        default: "up"
      },
      wrapPaddingT: {
        type: "number",
        default: 25
      },
      wrapPaddingR: {
        type: "number",
        default: 25
      },
      wrapPaddingB: {
        type: "number",
        default: 25
      },
      wrapPaddingL: {
        type: "number",
        default: 25
      },
      wrapMargin: {
        type: "string",
        default: "up"
      },
      wrapMarginT: {
        type: "number",
        default: 5
      },
      wrapMarginR: {
        type: "number",
        default: 5
      },
      wrapMarginB: {
        type: "number",
        default: 5
      },
      wrapMarginL: {
        type: "number",
        default: 5
      }
    },
    edit: props => {
      const { isSelected, setAttributes } = props;
      const {
        iconType,
        selectedIcon,
        align,
        hoverEffect,
        iconSize,
        iconColor,
        iconBack,
        padding,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        margin,
        marginT,
        marginR,
        marginB,
        marginL,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        background,
        wrapBorderType,
        wrapBorderWidth,
        wrapBorderRadius,
        wrapBorderColor,
        wrapPaddingT,
        wrapPaddingR,
        wrapPaddingB,
        wrapPaddingL,
        wrapMarginT,
        wrapMarginR,
        wrapMarginB,
        wrapMarginL
      } = props.attributes;
      const EFFECTS = [
        {
          value: "none",
          label: __("None")
        },
        {
          value: "pulse",
          label: __("Pulse")
        },
        {
          value: "rotate",
          label: __("Rotate")
        },
        {
          value: "drotate",
          label: __("3D Rotate")
        },
        {
          value: "buzz",
          label: __("Buzz")
        },
        {
          value: "drop",
          label: __("Drop Shadow")
        },
        {
          value: "wobble",
          label: __("Wobble")
        }
      ];
      const TYPE = [
        {
          value: "fa",
          label: "Font Awesome Icon"
        },
        {
          value: "dash",
          label: "Dashicon"
        }
      ];

      const ALIGNS = ["left", "center", "right"];
      const DIRECTIONS = ["up", "right", "down", "left"];

      const getValue = (direction, valuesArr) => {
        let value;

        switch (direction) {
          case "up":
            value = valuesArr[0];
            break;
          case "right":
            value = valuesArr[1];
            break;
          case "down":
            value = valuesArr[2];
            break;
          case "left":
            value = valuesArr[3];
            break;
        }
        return value;
      };
      const setValue = (value, type, direction) => {
        if ("padding" === type) {
          switch (direction) {
            case "up":
              setAttributes({ paddingT: value });
              break;
            case "right":
              setAttributes({ paddingR: value });
              break;
            case "down":
              setAttributes({ paddingB: value });
              break;
            case "left":
              setAttributes({ paddingL: value });
              break;
          }
        } else {
          switch (direction) {
            case "up":
              setAttributes({ marginT: value });
              break;
            case "right":
              setAttributes({ marginR: value });
              break;
            case "down":
              setAttributes({ marginB: value });
              break;
            case "left":
              setAttributes({ marginL: value });
              break;
          }
        }
      };
      return [
        isSelected && (
          <InspectorControls key={"inspector"}>
            <PanelBody title={__("Icon")} initialOpen={true}>
              <SelectControl
                label={__("Icon Type")}
                value={iconType}
                options={TYPE}
                onChange={newType => setAttributes({ iconType: newType })}
              />
              <PremiumIcon
                type={FontAwesomeEnabled ? iconType : "dash"}
                icon={selectedIcon}
                onChangeIcon={newIcon =>
                  setAttributes({ selectedIcon: newIcon })
                }
              />
              <SelectControl
                label={__("Hover Effect")}
                options={EFFECTS}
                value={hoverEffect}
                onChange={newEffect =>
                  setAttributes({ hoverEffect: newEffect })
                }
              />
              <p>{__("Align")}</p>
              <Toolbar
                controls={ALIGNS.map(iconAlign => ({
                  icon: "editor-align" + iconAlign,
                  isActive: iconAlign === align,
                  onClick: () => setAttributes({ align: iconAlign })
                }))}
              />
            </PanelBody>
            <PanelBody title={__("Icon Style")} initialOpen={true}>
              <PanelColorSettings
                colorSettings={[
                  {
                    value: iconColor,
                    onChange: colorValue =>
                      setAttributes({ iconColor: colorValue }),
                    label: __("Color")
                  }
                ]}
              />
              <RangeControl
                label={__("Size (PX)")}
                value={iconSize}
                onChange={newValue => setAttributes({ iconSize: newValue })}
              />
              <PanelColorSettings
                colorSettings={[
                  {
                    value: iconBack,
                    onChange: colorValue =>
                      setAttributes({ iconBack: colorValue }),
                    label: __("Background Color")
                  }
                ]}
              />
              <p>{__("Padding")}</p>
              <Toolbar
                controls={DIRECTIONS.map(paddingDir => ({
                  icon: "arrow-" + paddingDir + "-alt",
                  isActive: paddingDir === padding,
                  onClick: () => setAttributes({ padding: paddingDir })
                }))}
              />
              <RangeControl
                label={
                  __("Padding ") + padding[0].toUpperCase() + padding.slice(1)
                }
                value={getValue(padding, [
                  paddingT,
                  paddingR,
                  paddingB,
                  paddingL
                ])}
                onChange={value => setValue(value, "padding", padding)}
              />
              <p>{__("Margin")}</p>
              <Toolbar
                title={__("Margin")}
                controls={DIRECTIONS.map(marginDir => ({
                  icon: "arrow-" + marginDir + "-alt",
                  isActive: marginDir === margin,
                  onClick: () => setAttributes({ margin: marginDir })
                }))}
              />
              <RangeControl
                label={
                  __("Margin ") + margin[0].toUpperCase() + margin.slice(1)
                }
                value={getValue(margin, [marginT, marginR, marginB, marginL])}
                onChange={value => setValue(value, "margin", margin)}
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
            </PanelBody>
            <PanelBody title={__("Container Style")} initialOpen={true}>
              <PanelColorSettings
                colorSettings={[
                  {
                    value: background,
                    onChange: colorValue =>
                      setAttributes({ background: colorValue }),
                    label: __("Background Color")
                  }
                ]}
              />
              <PremiumBorder
                borderType={wrapBorderType}
                borderWidth={wrapBorderWidth}
                borderColor={wrapBorderColor}
                borderRadius={wrapBorderRadius}
                onChangeType={newType =>
                  setAttributes({ wrapBorderType: newType })
                }
                onChangeWidth={newWidth =>
                  setAttributes({ wrapBorderWidth: newWidth })
                }
                onChangeColor={colorValue =>
                  setAttributes({ wrapBorderColor: colorValue })
                }
                onChangeRadius={newrRadius =>
                  setAttributes({ wrapBorderRadius: newrRadius })
                }
              />
            </PanelBody>
          </InspectorControls>
        ),

        <div
          className={`${className}__container`}
          style={{
            textAlign: align,
            backgroundColor: background,
            border: wrapBorderType,
            borderWidth: wrapBorderWidth + "px",
            borderRadius: wrapBorderRadius + "px",
            borderColor: wrapBorderColor,
            paddingTop: wrapPaddingT,
            paddingRight: wrapPaddingR,
            paddingBottom: wrapPaddingB,
            paddingLeft: wrapPaddingL,
            marginTop: wrapMarginT,
            marginRight: wrapMarginR,
            marginBottom: wrapMarginB,
            marginLeft: wrapMarginL
          }}
        >
          {iconType === "fa" && 1 != FontAwesomeEnabled && (
            <p className={`${className}__alert`}>
              {__("Please Enable Font Awesome Icons from Plugin settings")}
            </p>
          )}
          {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
            <i
              className={`${className} ${selectedIcon} ${className}__${hoverEffect}`}
              style={{
                color: iconColor,
                backgroundColor: iconBack,
                fontSize: iconSize,
                paddingTop: paddingT,
                paddingRight: paddingR,
                paddingBottom: paddingB,
                paddingLeft: paddingL,
                marginTop: marginT,
                marginRight: marginR,
                marginBottom: marginB,
                marginLeft: marginL,
                border: borderType,
                borderWidth: borderWidth + "px",
                borderRadius: borderRadius + "px",
                borderColor: borderColor
              }}
            />
          )}
        </div>
      ];
    },
    save: props => {
      const {
        selectedIcon,
        align,
        hoverEffect,
        iconSize,
        iconColor,
        iconBack,
        paddingT,
        paddingR,
        paddingB,
        paddingL,
        marginT,
        marginR,
        marginB,
        marginL,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        background,
        wrapBorderType,
        wrapBorderWidth,
        wrapBorderRadius,
        wrapBorderColor,
        wrapPaddingT,
        wrapPaddingR,
        wrapPaddingB,
        wrapPaddingL,
        wrapMarginT,
        wrapMarginR,
        wrapMarginB,
        wrapMarginL
      } = props.attributes;
      return (
        <div
          className={`${className}__container`}
          style={{
            textAlign: align,
            backgroundColor: background,
            border: wrapBorderType,
            borderWidth: wrapBorderWidth + "px",
            borderRadius: wrapBorderRadius + "px",
            borderColor: wrapBorderColor,
            paddingTop: wrapPaddingT,
            paddingRight: wrapPaddingR,
            paddingBottom: wrapPaddingB,
            paddingLeft: wrapPaddingL,
            marginTop: wrapMarginT,
            marginRight: wrapMarginR,
            marginBottom: wrapMarginB,
            marginLeft: wrapMarginL
          }}
        >
          <i
            className={`${className} ${selectedIcon} ${className}__${hoverEffect}`}
            style={{
              color: iconColor,
              backgroundColor: iconBack,
              fontSize: iconSize,
              paddingTop: paddingT,
              paddingRight: paddingR,
              paddingBottom: paddingB,
              paddingLeft: paddingL,
              marginTop: marginT,
              marginRight: marginR,
              marginBottom: marginB,
              marginLeft: marginL,
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor
            }}
          />
        </div>
      );
    }
  });
}
