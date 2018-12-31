import { icon } from "../settings";
import { FontAwesomeEnabled } from "../settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumMargin from "../../components/premium-margin";
import PremiumPadding from "../../components/premium-padding";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PbgIcon from "../icons";

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

  const iconAttrs = {
    iconType: {
      type: "string",
      default: "dash"
    },
    selectedIcon: {
      type: "string",
      default: "dashicons dashicons-admin-site"
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
    wrapShadowColor: {
      type: "string"
    },
    wrapShadowBlur: {
      type: "number",
      default: "0"
    },
    wrapShadowHorizontal: {
      type: "number",
      default: "0"
    },
    wrapShadowVertical: {
      type: "number",
      default: "0"
    },
    wrapShadowPosition: {
      type: "string",
      default: ""
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
  };

  registerBlockType("premium/icon", {
    title: __("Icon"),
    icon: <PbgIcon icon="icon" />,
    category: "premium-blocks",
    attributes: iconAttrs,
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
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
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
        wrapShadowBlur,
        wrapShadowColor,
        wrapShadowHorizontal,
        wrapShadowVertical,
        wrapShadowPosition,
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
              initialOpen={false}
            >
              <p className="premium-editor-paragraph">{__("Select Icon")}</p>
              <FontIconPicker
                icons={iconsList}
                onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                value={selectedIcon}
                isMulti={false}
                appendTo="body"
                noSelectedPlaceholder={__("Select Icon")}
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
              initialOpen={false}
            >
              <RangeControl
                label={__("Size (PX)")}
                value={iconSize}
                onChange={newValue => setAttributes({ iconSize: newValue })}
              />
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: iconColor,
                    onChange: colorValue =>
                      setAttributes({ iconColor: colorValue }),
                    label: __("Icon Color")
                  },
                  {
                    value: iconBack,
                    onChange: colorValue =>
                      setAttributes({ iconBack: colorValue }),
                    label: __("Background Color")
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
              <PremiumTextShadow
                label="Shadow"
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
              <PanelBody
                title={__("Spacings")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumMargin
                  directions={["all"]}
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
            </PanelBody>
            <PanelBody
              title={__("Container Style")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: background,
                    onChange: colorValue =>
                      setAttributes({ background: colorValue }),
                    label: __("Background Color")
                  }
                ]}
              />
              <PanelBody
                title={__("Border")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
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
              <PremiumBoxShadow
                inner={true}
                color={wrapShadowColor}
                blur={wrapShadowBlur}
                horizontal={wrapShadowHorizontal}
                vertical={wrapShadowVertical}
                position={wrapShadowPosition}
                onChangeColor={newColor =>
                  setAttributes({
                    wrapShadowColor:
                      newColor === undefined ? "transparent" : newColor
                  })
                }
                onChangeBlur={newBlur =>
                  setAttributes({
                    wrapShadowBlur: newBlur === undefined ? 0 : newBlur
                  })
                }
                onChangehHorizontal={newValue =>
                  setAttributes({
                    wrapShadowHorizontal: newValue === undefined ? 0 : newValue
                  })
                }
                onChangeVertical={newValue =>
                  setAttributes({
                    wrapShadowVertical: newValue === undefined ? 0 : newValue
                  })
                }
                onChangePosition={newValue =>
                  setAttributes({
                    wrapShadowPosition: newValue === undefined ? 0 : newValue
                  })
                }
              />
              <PanelBody
                title={__("Spacings")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumMargin
                  directions={["all"]}
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
            boxShadow: `${wrapShadowHorizontal}px ${wrapShadowVertical}px ${wrapShadowBlur}px ${wrapShadowColor} ${wrapShadowPosition}`,
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
                borderColor: borderColor,
                textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
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
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
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
        wrapShadowBlur,
        wrapShadowColor,
        wrapShadowHorizontal,
        wrapShadowVertical,
        wrapShadowPosition,
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
            boxShadow: `${wrapShadowHorizontal}px ${wrapShadowVertical}px ${wrapShadowBlur}px ${wrapShadowColor} ${wrapShadowPosition}`,
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
                borderColor: borderColor,
                textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
              }}
            />
          </a>
        </div>
      );
    },
    deprecated: [
      {
        attributes: iconAttrs,
        save: props => {
          const {
            selectedIcon,
            align,
            hoverEffect,
            iconSize,
            iconColor,
            iconType,
            iconBack,
            shadowBlur,
            shadowColor,
            shadowHorizontal,
            shadowVertical,
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
                    borderColor: borderColor,
                    textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
                  }}
                />
              </a>
            </div>
          );
        }
      }
    ]
  });
}
