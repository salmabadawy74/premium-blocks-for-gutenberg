import { icon } from "../settings";
import { FontAwesomeEnabled } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumMargin from "../../components/premium-margin";
import PremiumPadding from "../../components/premium-padding";

if (icon) {
  const className = "premium-icon";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    Toolbar,
    SelectControl,
    RangeControl,
    TextControl
  } = wp.components;
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
        default: "dashicons-admin-site"
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
      let iconClass =
        "fa" === iconType
          ? `fa fa-${selectedIcon}`
          : `dashicons ${selectedIcon}`;
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

      return [
        isSelected && (
          <InspectorControls key={"inspector"}>
            <PanelBody
              title={__("Icon")}
              className="premium-panel-body"
              initialOpen={true}
            >
              <SelectControl
                label={__("Icon Type")}
                value={iconType}
                options={TYPE}
                onChange={newType => setAttributes({ iconType: newType })}
              />
              {selectedIcon && (
                <div className="premium-icon__sidebar_icon">
                  <i className={iconClass} />
                </div>
              )}
              <TextControl
                label={__("Icon Class")}
                value={selectedIcon}
                help={[
                  __("Get icon class from"),
                  <a
                    href={
                      "fa" === iconType
                        ? "https://fontawesome.com/v4.7.0/icons/"
                        : "https://developer.wordpress.org/resource/dashicons/"
                    }
                    target="_blank"
                  >
                    &nbsp;
                    {__("here")}
                  </a>,
                  __(" , for example: "),
                  "fa" === iconType ? "address-book" : "dashicons-admin-site"
                ]}
                onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
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
            <PanelBody
              title={__("Icon Style")}
              className="premium-panel-body"
              initialOpen={true}
            >
              <PanelColorSettings
                title={__("Colors")}
                colorSettings={[
                  {
                    value: iconColor,
                    onChange: colorValue =>
                      setAttributes({ iconColor: colorValue }),
                    label: __("Icon Color")
                  }
                ]}
              />
              <RangeControl
                label={__("Size (PX)")}
                value={iconSize}
                onChange={newValue => setAttributes({ iconSize: newValue })}
              />
              <PanelColorSettings
                title={__("Colors")}
                colorSettings={[
                  {
                    value: iconBack,
                    onChange: colorValue =>
                      setAttributes({ iconBack: colorValue }),
                    label: __("Background Color")
                  }
                ]}
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
              <PremiumMargin
                marginTop={marginT}
                marginRight={marginR}
                marginBottom={marginB}
                marginLeft={marginL}
                onChangeMarTop={value => setAttributes({ marginT: value })}
                onChangeMarRight={value => setAttributes({ marginR: value })}
                onChangeMarBottom={value => setAttributes({ marginB: value })}
                onChangeMarLeft={value => setAttributes({ marginL: value })}
              />
              <PremiumPadding
                marginTop={paddingT}
                marginRight={paddingR}
                marginBottom={paddingB}
                marginLeft={paddingL}
                onChangePadTop={value => setAttributes({ paddingT: value })}
                onChangePadRight={value => setAttributes({ paddingR: value })}
                onChangePadBottom={value => setAttributes({ paddingB: value })}
                onChangePadLeft={value => setAttributes({ paddingL: value })}
              />
            </PanelBody>
            <PanelBody
              title={__("Container Style")}
              className="premium-panel-body"
              initialOpen={true}
            >
              <PanelColorSettings
                title={__("Colors")}
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
              <PremiumMargin
                marginTop={wrapMarginT}
                marginRight={wrapMarginR}
                marginBottom={wrapMarginB}
                marginLeft={wrapMarginL}
                onChangeMarTop={value => setAttributes({ wrapMarginT: value })}
                onChangeMarRight={value =>
                  setAttributes({ wrapMarginR: value })
                }
                onChangeMarBottom={value =>
                  setAttributes({ wrapMarginB: value })
                }
                onChangeMarLeft={value => setAttributes({ wrapMarginL: value })}
              />
              <PremiumPadding
                marginTop={wrapPaddingT}
                marginRight={wrapPaddingR}
                marginBottom={wrapPaddingB}
                marginLeft={wrapPaddingL}
                onChangePadTop={value => setAttributes({ wrapPaddingT: value })}
                onChangePadRight={value =>
                  setAttributes({ wrapPaddingR: value })
                }
                onChangePadBottom={value =>
                  setAttributes({ wrapPaddingB: value })
                }
                onChangePadLeft={value =>
                  setAttributes({ wrapPaddingL: value })
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
              className={`${className} ${iconClass} ${className}__${hoverEffect}`}
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
        iconType,
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
      let iconClass =
        "fa" === iconType
          ? `fa fa-${selectedIcon}`
          : `dashicons ${selectedIcon}`;
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
            className={`${className} ${iconClass} ${className}__${hoverEffect}`}
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
