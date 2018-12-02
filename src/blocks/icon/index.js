import { icon } from "../settings";
import { FontAwesomeEnabled } from "../settings";
import PremiumIcon from "../../components/premium-icon";
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
    ToggleControl
  } = wp.components;
  const { InspectorControls, PanelColorSettings, URLInput } = wp.editor;

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
        type: "string"
      },
      padding: {
        type: "string",
        default: "up"
      },
      paddingT: {
        type: "number"
      },
      paddingR: {
        type: "number"
      },
      paddingB: {
        type: "number"
      },
      paddingL: {
        type: "number"
      },
      margin: {
        type: "string",
        default: "up"
      },
      marginT: {
        type: "number"
      },
      marginR: {
        type: "number"
      },
      marginB: {
        type: "number"
      },
      marginL: {
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
        type: "number"
      },
      wrapPaddingR: {
        type: "number"
      },
      wrapPaddingB: {
        type: "number"
      },
      wrapPaddingL: {
        type: "number"
      },
      wrapMargin: {
        type: "string",
        default: "up"
      },
      wrapMarginT: {
        type: "number"
      },
      wrapMarginR: {
        type: "number"
      },
      wrapMarginB: {
        type: "number"
      },
      wrapMarginL: {
        type: "number"
      },
      urlCheck: {
        type: "boolean"
      },
      link: {
        type: "string"
      },
      target: {
        type: "boolean"
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
        wrapMarginL,
        urlCheck,
        link,
        target
      } = props.attributes;
      let iconClass =
        "fa" === iconType
          ? `${selectedIcon}`.startsWith("fa-")
            ? `fa ${selectedIcon}`
            : `fa fa-${selectedIcon}`
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

      const ALIGNS = ["left", "center", "right"];

      return [
        isSelected && (
          <InspectorControls key={"inspector"}>
            <PanelBody
              title={__("Icon")}
              className="premium-panel-body"
              initialOpen={true}
            >
              <PremiumIcon
                iconType={iconType}
                selectedIcon={selectedIcon}
                onChangeType={newType => setAttributes({ iconType: newType })}
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
              <ToggleControl
                label={__("Link")}
                checked={urlCheck}
                onChange={newValue => setAttributes({ urlCheck: newValue })}
              />
              {urlCheck && (
                <ToggleControl
                  label={__("Open link in new tab")}
                  checked={target}
                  onChange={newValue => setAttributes({ target: newValue })}
                />
              )}
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
                onChangeMarTop={value =>
                  setAttributes({
                    marginT: value === undefined ? 0 : value
                  })
                }
                onChangeMarRight={value =>
                  setAttributes({
                    marginR: value === undefined ? 0 : value
                  })
                }
                onChangeMarBottom={value =>
                  setAttributes({
                    marginB: value === undefined ? 0 : value
                  })
                }
                onChangeMarLeft={value =>
                  setAttributes({
                    marginL: value === undefined ? 0 : value
                  })
                }
              />
              <PremiumPadding
                paddingTop={paddingT}
                paddingRight={paddingR}
                paddingBottom={paddingB}
                paddingLeft={paddingL}
                onChangePadTop={value =>
                  setAttributes({
                    paddingT: value === undefined ? 0 : value
                  })
                }
                onChangePadRight={value =>
                  setAttributes({
                    paddingR: value === undefined ? 0 : value
                  })
                }
                onChangePadBottom={value =>
                  setAttributes({
                    paddingB: value === undefined ? 0 : value
                  })
                }
                onChangePadLeft={value =>
                  setAttributes({
                    paddingL: value === undefined ? 0 : value
                  })
                }
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
                onChangeMarTop={value =>
                  setAttributes({
                    wrapMarginT: value === undefined ? 0 : value
                  })
                }
                onChangeMarRight={value =>
                  setAttributes({
                    wrapMarginR: value === undefined ? 0 : value
                  })
                }
                onChangeMarBottom={value =>
                  setAttributes({
                    wrapMarginB: value === undefined ? 0 : value
                  })
                }
                onChangeMarLeft={value =>
                  setAttributes({
                    wrapMarginL: value === undefined ? 0 : value
                  })
                }
              />
              <PremiumPadding
                paddingTop={wrapPaddingT}
                paddingRight={wrapPaddingR}
                paddingBottom={wrapPaddingB}
                paddingLeft={wrapPaddingL}
                onChangePadTop={value =>
                  setAttributes({
                    wrapPaddingT: value === undefined ? 0 : value
                  })
                }
                onChangePadRight={value =>
                  setAttributes({
                    wrapPaddingR: value === undefined ? 0 : value
                  })
                }
                onChangePadBottom={value =>
                  setAttributes({
                    wrapPaddingB: value === undefined ? 0 : value
                  })
                }
                onChangePadLeft={value =>
                  setAttributes({
                    wrapPaddingL: value === undefined ? 0 : value
                  })
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
          {urlCheck && isSelected && (
            <URLInput
              value={link}
              onChange={newUrl => setAttributes({ link: newUrl })}
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
        wrapMarginL,
        urlCheck,
        link,
        target
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
          <a
            className={`${className}__link`}
            href={urlCheck && link}
            target={target ? "_blank" : "_self"}
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
          </a>
        </div>
      );
    }
  });
}
