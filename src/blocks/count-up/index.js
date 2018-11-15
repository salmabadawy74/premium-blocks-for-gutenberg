import { countUp } from "../settings";
import { FontAwesomeEnabled } from "../settings";
import PremiumIcon from "../../components/premium-icon";

if (countUp) {
  const className = "premium-countup";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    Toolbar,
    SelectControl,
    TextControl,
    RangeControl,
    ToggleControl,
    IconButton
  } = wp.components;
  const { InspectorControls, PanelColorSettings, MediaUpload } = wp.editor;

  registerBlockType("premium/countup", {
    title: __("CountUp"),
    icon: "clock",
    category: "premium-blocks",
    attributes: {
      increment: {
        type: "string",
        default: 500
      },
      time: {
        type: "number",
        default: 1000
      },
      delay: {
        type: "number",
        default: 10
      },
      align: {
        type: "string",
        default: "center"
      },
      flexDir: {
        type: "string",
        default: "column"
      },
      numberSize: {
        type: "number",
        default: 30
      },
      numberColor: {
        type: "string",
        default: "#6ec1e4"
      },
      numberWeight: {
        type: "number",
        default: 900
      },
      prefix: {
        type: "boolean",
        default: true
      },
      prefixTxt: {
        type: "string",
        default: "Prefix"
      },
      prefixSize: {
        type: "number",
        default: 20
      },
      prefixColor: {
        type: "string"
      },
      prefixWeight: {
        type: "number"
      },
      prefixGap: {
        type: "number",
        default: 2
      },
      suffix: {
        type: "boolean",
        default: true
      },
      suffixTxt: {
        type: "string",
        default: "Prefix"
      },
      suffixSize: {
        type: "number",
        default: 20
      },
      suffixColor: {
        type: "string"
      },
      suffixWeight: {
        type: "number"
      },
      suffixGap: {
        type: "number",
        default: 2
      },
      icon: {
        type: "string",
        default: "icon"
      },
      imageID: {
        type: "string"
      },
      imageURL: {
        type: "string"
      },
      iconCheck: {
        type: "boolean",
        default: true
      },
      iconSize: {
        type: "number",
        default: 40
      },
      iconColor: {
        type: "string",
        default: "#6ec1e4"
      },
      selfAlign: {
        type: "string",
        default: "center"
      },
      titleCheck: {
        type: "boolean",
        default: true
      },
      titleTxt: {
        type: "string",
        default: "Premium Count Up"
      },
      titleSize: {
        type: "number",
        default: 20
      },
      titleT: {
        type: "number",
        default: 1
      },
      titleB: {
        type: "number",
        default: 1
      },
      titleColor: {
        type: "string"
      },
      titleWeight: {
        type: "number",
        default: 500
      },
      faIcon: {
        type: "string"
      }
    },
    edit: props => {
      const { isSelected, setAttributes } = props;
      const {
        increment,
        time,
        delay,
        align,
        flexDir,
        numberSize,
        numberColor,
        numberWeight,
        icon,
        iconSize,
        iconColor,
        titleCheck,
        titleTxt,
        titleColor,
        titleSize,
        titleT,
        titleB,
        titleWeight,
        imageID,
        imageURL,
        iconCheck,
        prefix,
        prefixTxt,
        prefixSize,
        prefixColor,
        prefixWeight,
        prefixGap,
        suffix,
        suffixTxt,
        suffixSize,
        suffixColor,
        suffixWeight,
        suffixGap,
        selfAlign,
        faIcon
      } = props.attributes;
      const WEIGHT = [
        {
          value: "100",
          label: "100"
        },
        {
          value: "200",
          label: "200"
        },
        {
          value: "300",
          label: "300"
        },
        {
          value: "400",
          label: "Normal"
        },
        {
          value: "500",
          label: "500"
        },
        {
          value: "600",
          label: "600"
        },
        {
          value: "700",
          label: "700"
        },
        {
          value: "800",
          label: "800"
        },
        {
          value: "900",
          label: "Bold"
        }
      ];
      const ICONS = [
        {
          value: "icon",
          label: "Icon"
        },
        {
          value: "img",
          label: "Image"
        }
      ];
      const DIRECTION = [
        {
          value: "row",
          label: "Row"
        },
        {
          value: "row-reverse",
          label: "Reversed Row"
        },
        {
          value: "column",
          label: "Column"
        },
        {
          value: "column-reverse",
          label: "Reversed Column"
        }
      ];
      const ALIGNS = ["left", "center", "right"];
      const REVALIGNS = ["right", "center", "left"];
      switch (align) {
        case "left":
          setAttributes({ selfAlign: "flex-start" });
          break;
        case "center":
          setAttributes({ selfAlign: "center" });
          break;
        case "right":
          setAttributes({ selfAlign: "flex-end" });
          break;
      }
      return [
        isSelected && (
          <InspectorControls key={"inspector"}>
            <PanelBody title={__("Counter")} initialOpen={true}>
              <TextControl
                label={__("Increment")}
                value={increment}
                onChange={value => setAttributes({ increment: value })}
              />
              <TextControl
                label={__("Rolling Time")}
                value={time}
                onChange={value => setAttributes({ time: value })}
                help={__(
                  "Set counting time in milliseconds, for example: 1000"
                )}
              />
              <TextControl
                label={__("Delay")}
                value={delay}
                onChange={value => setAttributes({ delay: value })}
                help={__("Set delay in milliseconds, for example: 10")}
              />
              <p>{__("Align")}</p>
              {"row-reverse" !== flexDir && (
                <Toolbar
                  controls={ALIGNS.map(contentAlign => ({
                    icon: "editor-align" + contentAlign,
                    isActive: contentAlign === align,
                    onClick: () => setAttributes({ align: contentAlign })
                  }))}
                />
              )}
              {"row-reverse" === flexDir && (
                <Toolbar
                  label={__("Align")}
                  controls={REVALIGNS.map(contentAlign => ({
                    icon: "editor-align" + contentAlign,
                    isActive: contentAlign === align,
                    onClick: () => setAttributes({ align: contentAlign })
                  }))}
                />
              )}
              <SelectControl
                label={__("Direction")}
                options={DIRECTION}
                value={flexDir}
                onChange={newDir => setAttributes({ flexDir: newDir })}
              />
              <ToggleControl
                label={__("Icon")}
                checked={iconCheck}
                onChange={check => setAttributes({ iconCheck: check })}
              />
              <ToggleControl
                label={__("Title")}
                checked={titleCheck}
                onChange={check => setAttributes({ titleCheck: check })}
              />
              <ToggleControl
                label={__("Prefix")}
                checked={prefix}
                onChange={check => setAttributes({ prefix: check })}
              />
              <ToggleControl
                label={__("Suffix")}
                checked={suffix}
                onChange={check => setAttributes({ suffix: check })}
              />
            </PanelBody>
            <PanelBody title={__("Number")} initialOpen={false}>
              <RangeControl
                label={__("Font Size (PX)")}
                value={numberSize}
                onChange={newValue => setAttributes({ numberSize: newValue })}
              />
              <PanelColorSettings
                colorSettings={[
                  {
                    value: numberColor,
                    onChange: colorValue =>
                      setAttributes({ numberColor: colorValue }),
                    label: __("Number Color")
                  }
                ]}
              />
              <SelectControl
                label={__("Font Weight")}
                options={WEIGHT}
                value={numberWeight}
                onChange={newWeight =>
                  setAttributes({ numberWeight: newWeight })
                }
              />
            </PanelBody>
            {titleCheck && (
              <PanelBody title={__("Title")} initialOpen={false}>
                <TextControl
                  label={__("Title Text")}
                  value={titleTxt}
                  onChange={value => setAttributes({ titleTxt: value })}
                />
                <RangeControl
                  label={__("Font Size (PX)")}
                  value={titleSize}
                  onChange={newValue => setAttributes({ titleSize: newValue })}
                />
                <SelectControl
                  label={__("Font Weight")}
                  options={WEIGHT}
                  value={titleWeight}
                  onChange={newWeight =>
                    setAttributes({ titleWeight: newWeight })
                  }
                />
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: titleColor,
                      onChange: colorValue =>
                        setAttributes({ titleColor: colorValue }),
                      label: __("Color")
                    }
                  ]}
                />
                <RangeControl
                  label={__("Margin Top (PX)")}
                  value={titleT}
                  onChange={newValue => setAttributes({ titleT: newValue })}
                />
                <RangeControl
                  label={__("Margin Bottom (PX)")}
                  value={titleB}
                  onChange={newValue => setAttributes({ titleB: newValue })}
                />
              </PanelBody>
            )}

            {prefix && (
              <PanelBody title={__("Prefix")} initialOpen={false}>
                <TextControl
                  label={__("Prefix")}
                  value={prefixTxt}
                  onChange={value => setAttributes({ prefixTxt: value })}
                />
                <RangeControl
                  label={__("Font Size (PX)")}
                  value={prefixSize}
                  onChange={newValue => setAttributes({ prefixSize: newValue })}
                />
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: prefixColor,
                      onChange: colorValue =>
                        setAttributes({ prefixColor: colorValue }),
                      label: __("Color")
                    }
                  ]}
                />
                <SelectControl
                  label={__("Font Weight")}
                  options={WEIGHT}
                  value={prefixWeight}
                  onChange={newWeight =>
                    setAttributes({ prefixWeight: newWeight })
                  }
                />
                <RangeControl
                  label={__("Gap After (PX)")}
                  value={prefixGap}
                  onChange={newValue => setAttributes({ prefixGap: newValue })}
                />
              </PanelBody>
            )}
            {suffix && (
              <PanelBody title={__("Suffix")} initialOpen={false}>
                <TextControl
                  label={__("Suffix")}
                  value={suffixTxt}
                  onChange={value => setAttributes({ suffixTxt: value })}
                />
                <RangeControl
                  label={__("Font Size (PX)")}
                  value={suffixSize}
                  onChange={newValue => setAttributes({ suffixSize: newValue })}
                />
                <PanelColorSettings
                  colorSettings={[
                    {
                      value: suffixColor,
                      onChange: colorValue =>
                        setAttributes({ suffixColor: colorValue }),
                      label: __("Color")
                    }
                  ]}
                />
                <SelectControl
                  label={__("Font Weight")}
                  options={WEIGHT}
                  value={suffixWeight}
                  onChange={newWeight =>
                    setAttributes({ suffixWeight: newWeight })
                  }
                />
                <RangeControl
                  label={__("Gap Before (PX)")}
                  value={suffixGap}
                  onChange={newValue => setAttributes({ suffixGap: newValue })}
                />
              </PanelBody>
            )}
            {iconCheck && (
              <PanelBody title={__("Icon")} initialOpen={false}>
                <SelectControl
                  label={__("Icon Type")}
                  options={ICONS}
                  value={icon}
                  onChange={newType => setAttributes({ icon: newType })}
                />
                {"icon" === icon && (
                  <PremiumIcon
                    type={1 == FontAwesomeEnabled ? "fa" : "dash"}
                    icon={faIcon}
                    onChangeIcon={newIcon => setAttributes({ faIcon: newIcon })}
                  />
                )}
                {"img" === icon && imageURL && (
                  <img src={imageURL} width="100%" height="auto" />
                )}
                {"img" === icon && (
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
                      <IconButton
                        label={__("Change Image")}
                        icon="edit"
                        onClick={open}
                      >
                        {__("Change Image")}
                      </IconButton>
                    )}
                  />
                )}
                <RangeControl
                  label={__("Size (PX)")}
                  max="200"
                  value={iconSize}
                  onChange={newValue => setAttributes({ iconSize: newValue })}
                />
                {"icon" === icon && (
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
                )}
              </PanelBody>
            )}
          </InspectorControls>
        ),
        <div
          className={`${className}__wrap`}
          style={{
            justifyContent: align,
            flexDirection: flexDir
          }}
        >
          {iconCheck && (
            <div
              className={`${className}__icon_wrap`}
              style={{
                alignSelf:
                  "row-reverse" === flexDir || "row" === flexDir
                    ? "center"
                    : selfAlign
              }}
            >
              {"icon" === icon && (
                <span
                  className={`${className}__icon ${faIcon}`}
                  style={{
                    fontSize: iconSize + "px",
                    color: iconColor
                  }}
                />
              )}
              {"img" === icon && imageURL && (
                <img
                  src={imageURL}
                  style={{
                    width: iconSize + "px",
                    height: iconSize + "px"
                  }}
                />
              )}
            </div>
          )}
          {titleCheck &&
            ("column" === flexDir || "column-reverse" === flexDir) && (
              <h3
                className={`${className}__title`}
                style={{
                  fontSize: titleSize + "px",
                  marginTop: titleT + "px",
                  marginBottom: titleB + "px",
                  color: titleColor,
                  fontWeight: titleWeight,
                  alignSelf: selfAlign
                }}
              >
                {titleTxt}
              </h3>
            )}
          <div
            className={`${className}__info`}
            style={{
              alignSelf:
                "row-reverse" === flexDir || "row" === flexDir
                  ? "center"
                  : selfAlign
            }}
          >
            {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
              <h3
                className={`${className}__title`}
                style={{
                  fontSize: titleSize + "px",
                  marginTop: titleT + "px",
                  marginBottom: titleB + "px",
                  color: titleColor,
                  fontWeight: titleWeight
                }}
              >
                {titleTxt}
              </h3>
            )}
            <div className={`${className}__desc`}>
              {prefix && (
                <p
                  style={{
                    fontSize: prefixSize + "px",
                    color: prefixColor,
                    fontWeight: prefixWeight,
                    marginRight: prefixGap + "px"
                  }}
                >
                  {prefixTxt}
                </p>
              )}
              <p
                className={`${className}__increment`}
                data-interval={time}
                data-delay={delay}
                style={{
                  fontSize: numberSize + "px",
                  color: numberColor,
                  fontWeight: numberWeight
                }}
              >
                {increment}
              </p>
              {suffix && (
                <p
                  style={{
                    fontSize: suffixSize + "px",
                    color: suffixColor,
                    fontWeight: suffixWeight,
                    marginLeft: suffixGap + "px"
                  }}
                >
                  {suffixTxt}
                </p>
              )}
            </div>
          </div>
        </div>
      ];
    },
    save: props => {
      const {
        increment,
        time,
        delay,
        align,
        flexDir,
        numberSize,
        numberColor,
        numberWeight,
        prefix,
        prefixTxt,
        prefixSize,
        prefixColor,
        prefixWeight,
        prefixGap,
        suffix,
        suffixTxt,
        suffixSize,
        suffixColor,
        suffixWeight,
        suffixGap,
        iconCheck,
        icon,
        imageURL,
        iconSize,
        iconColor,
        selfAlign,
        titleCheck,
        titleTxt,
        titleColor,
        titleSize,
        titleT,
        titleB,
        titleWeight,
        faIcon
      } = props.attributes;
      return (
        <div
          className={`${className}__wrap`}
          style={{
            justifyContent: align,
            flexDirection: flexDir
          }}
        >
          {iconCheck && (
            <div
              className={`${className}__icon`}
              style={{
                alignSelf:
                  "row-reverse" === flexDir || "row" === flexDir
                    ? "center"
                    : selfAlign
              }}
            >
              {"icon" === icon && (
                <span
                  className={`${className}__icon ${faIcon}`}
                  style={{
                    fontSize: iconSize + "px",
                    color: iconColor
                  }}
                />
              )}
              {"img" === icon && imageURL && (
                <img
                  src={imageURL}
                  style={{
                    width: iconSize + "px",
                    height: iconSize + "px"
                  }}
                />
              )}
            </div>
          )}
          {titleCheck &&
            ("column" === flexDir || "column-reverse" === flexDir) && (
              <h3
                className={`${className}__title`}
                style={{
                  fontSize: titleSize + "px",
                  marginTop: titleT + "px",
                  marginBottom: titleB + "px",
                  color: titleColor,
                  fontWeight: titleWeight,
                  alignSelf: selfAlign
                }}
              >
                {titleTxt}
              </h3>
            )}
          <div
            className={`${className}__info`}
            style={{
              alignSelf:
                "row-reverse" === flexDir || "row" === flexDir
                  ? "center"
                  : selfAlign
            }}
          >
            {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
              <h3
                className={`${className}__title`}
                style={{
                  fontSize: titleSize + "px",
                  marginTop: titleT + "px",
                  marginBottom: titleB + "px",
                  color: titleColor,
                  fontWeight: titleWeight
                }}
              >
                {titleTxt}
              </h3>
            )}
            <div className={`${className}__desc`}>
              {prefix && (
                <p
                  style={{
                    fontSize: prefixSize + "px",
                    color: prefixColor,
                    fontWeight: prefixWeight,
                    marginRight: prefixGap + "px"
                  }}
                >
                  {prefixTxt}
                </p>
              )}
              <p
                className={`${className}__increment`}
                data-interval={time}
                data-delay={delay}
                style={{
                  fontSize: numberSize + "px",
                  color: numberColor,
                  fontWeight: numberWeight
                }}
              >
                {increment}
              </p>
              {suffix && (
                <p
                  style={{
                    fontSize: suffixSize + "px",
                    color: suffixColor,
                    fontWeight: suffixWeight,
                    marginLeft: suffixGap + "px"
                  }}
                >
                  {suffixTxt}
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }
  });
}
