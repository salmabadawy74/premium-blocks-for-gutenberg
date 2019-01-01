import { countUp } from "../settings";
import { FontAwesomeEnabled } from "../settings";
import PremiumTypo from "../../components/premium-typo";
import PbgIcon from "../icons";

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
  const { Fragment } = wp.element;

  const counterAttrs = {
    increment: {
      type: "string",
      default: 500
    },
    time: {
      type: "string",
      default: 1000
    },
    delay: {
      type: "string",
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
      default: "Suffix"
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
    iconSpacing: {
      type: "number",
      default: 10
    },
    imageID: {
      type: "string"
    },
    imageURL: {
      type: "string"
    },
    iconType: {
      type: "string",
      default: "dash"
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
    titleSpacing: {
      type: "number"
    },
    titleStyle: {
      type: "string"
    },
    titleUpper: {
      type: "boolean"
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
      type: "string",
      default: "dashicons-clock"
    },
    containerBack: {
      type: "string"
    }
  };

  registerBlockType("premium/countup", {
    title: __("CountUp"),
    icon: <PbgIcon icon="counter" />,
    category: "premium-blocks",
    attributes: counterAttrs,
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
        iconSpacing,
        iconSize,
        iconColor,
        titleCheck,
        titleTxt,
        titleColor,
        titleSize,
        titleSpacing,
        titleStyle,
        titleUpper,
        titleT,
        titleB,
        titleWeight,
        imageID,
        imageURL,
        iconType,
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
        faIcon,
        containerBack
      } = props.attributes;
      let iconClass =
        "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
      const ICONS = [
        {
          value: "icon",
          label: __("Icon")
        },
        {
          value: "img",
          label: __("Image")
        }
      ];
      const DIRECTION = [
        {
          value: "row",
          label: __("Row")
        },
        {
          value: "row-reverse",
          label: __("Reversed Row")
        },
        {
          value: "column",
          label: __("Column")
        },
        {
          value: "column-reverse",
          label: __("Reversed Column")
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
            <PanelBody
              title={__("Counter")}
              className="premium-panel-body"
              initialOpen={false}
            >
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
              {("row" === flexDir || "row-reverse" === flexDir) && (
                <RangeControl
                  label={__("Spacing (PX)")}
                  value={iconSpacing}
                  onChange={newValue =>
                    setAttributes({ iconSpacing: newValue })
                  }
                />
              )}
              <ToggleControl
                label={__("Icon")}
                checked={iconCheck}
                onChange={check => setAttributes({ iconCheck: check })}
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
              <ToggleControl
                label={__("Title")}
                checked={titleCheck}
                onChange={check => setAttributes({ titleCheck: check })}
              />
            </PanelBody>
            {iconCheck && (
              <PanelBody
                title={__("Icon")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <SelectControl
                  label={__("Icon Type")}
                  options={ICONS}
                  value={icon}
                  onChange={newType => setAttributes({ icon: newType })}
                />
                {("" !== faIcon || "undefined" !== typeof faIcon) &&
                  "icon" === icon && (
                    <div className="premium-icon__sidebar_icon">
                      <i className={iconClass} />
                    </div>
                  )}
                {"icon" === icon && (
                  <Fragment>
                    <SelectControl
                      label={__("Icon Type")}
                      value={iconType}
                      options={TYPE}
                      onChange={newType => setAttributes({ iconType: newType })}
                    />
                    <TextControl
                      label={__("Icon Class")}
                      value={faIcon}
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
                        "fa" === iconType
                          ? "address-book"
                          : "dashicons-admin-site"
                      ]}
                      onChange={newIcon => setAttributes({ faIcon: newIcon })}
                    />
                  </Fragment>
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
                    title={__("Colors")}
                    className="premium-panel-body-inner"
                    initialOpen={false}
                    colorSettings={[
                      {
                        value: iconColor,
                        onChange: colorValue =>
                          setAttributes({ iconColor: colorValue }),
                        label: __("Icon Color")
                      }
                    ]}
                  />
                )}
              </PanelBody>
            )}
            <PanelBody
              title={__("Number")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelBody
                title={__("Font")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumTypo
                  components={["size", "weight"]}
                  size={numberSize}
                  weight={numberWeight}
                  onChangeSize={newSize =>
                    setAttributes({ numberSize: newSize })
                  }
                  onChangeWeight={newWeight =>
                    setAttributes({ numberWeight: newWeight })
                  }
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: numberColor,
                    onChange: colorValue =>
                      setAttributes({ numberColor: colorValue }),
                    label: __("Number Color")
                  }
                ]}
              />
            </PanelBody>
            {prefix && (
              <PanelBody
                title={__("Prefix")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <TextControl
                  label={__("Prefix")}
                  value={prefixTxt}
                  onChange={value => setAttributes({ prefixTxt: value })}
                />
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                >
                  <PremiumTypo
                    components={["size", "weight"]}
                    size={prefixSize}
                    weight={prefixWeight}
                    onChangeSize={newSize =>
                      setAttributes({ prefixSize: newSize })
                    }
                    onChangeWeight={newWeight =>
                      setAttributes({ prefixWeight: newWeight })
                    }
                  />
                </PanelBody>
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: prefixColor,
                      onChange: colorValue =>
                        setAttributes({ prefixColor: colorValue }),
                      label: __("Text Color")
                    }
                  ]}
                />
                <RangeControl
                  label={__("Gap After (PX)")}
                  value={prefixGap}
                  onChange={newValue => setAttributes({ prefixGap: newValue })}
                />
              </PanelBody>
            )}
            {suffix && (
              <PanelBody
                title={__("Suffix")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <TextControl
                  label={__("Suffix")}
                  value={suffixTxt}
                  onChange={value => setAttributes({ suffixTxt: value })}
                />
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                >
                  <PremiumTypo
                    components={["size", "weight"]}
                    size={suffixSize}
                    weight={suffixWeight}
                    onChangeSize={newSize =>
                      setAttributes({ suffixSize: newSize })
                    }
                    onChangeWeight={newWeight =>
                      setAttributes({ suffixWeight: newWeight })
                    }
                  />
                </PanelBody>
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: suffixColor,
                      onChange: colorValue =>
                        setAttributes({ suffixColor: colorValue }),
                      label: __("Text Color")
                    }
                  ]}
                />
                <RangeControl
                  label={__("Gap Before (PX)")}
                  value={suffixGap}
                  onChange={newValue => setAttributes({ suffixGap: newValue })}
                />
              </PanelBody>
            )}
            {titleCheck && (
              <PanelBody
                title={__("Title")}
                className="premium-panel-body"
                initialOpen={false}
              >
                <TextControl
                  label={__("Title Text")}
                  value={titleTxt}
                  onChange={value => setAttributes({ titleTxt: value })}
                />
                <PanelBody
                  title={__("Font")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                >
                  <PremiumTypo
                    components={["size", "weight", "spacing", "style", "upper"]}
                    size={titleSize}
                    weight={titleWeight}
                    style={titleStyle}
                    spacing={titleSpacing}
                    upper={titleUpper}
                    onChangeSize={newSize =>
                      setAttributes({ titleSize: newSize })
                    }
                    onChangeWeight={newWeight =>
                      setAttributes({ titleWeight: newWeight })
                    }
                    onChangeStyle={newStyle =>
                      setAttributes({ titleStyle: newStyle })
                    }
                    onChangeSpacing={newValue =>
                      setAttributes({ titleSpacing: newValue })
                    }
                    onChangeUpper={check =>
                      setAttributes({ titleUpper: check })
                    }
                  />
                </PanelBody>
                <PanelColorSettings
                  title={__("Colors")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: titleColor,
                      onChange: colorValue =>
                        setAttributes({ titleColor: colorValue }),
                      label: __("Text Color")
                    }
                  ]}
                />
                <PanelBody
                  title={__("Spacings")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                >
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
              </PanelBody>
            )}
            <PanelBody
              title={__("Container")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: containerBack,
                    onChange: colorValue =>
                      setAttributes({ containerBack: colorValue }),
                    label: __("Background Color")
                  }
                ]}
              />
            </PanelBody>
          </InspectorControls>
        ),
        <div>
          {iconType === "fa" && 1 != FontAwesomeEnabled && iconCheck && (
            <p className={`${className}__alert`}>
              {__("Please Enable Font Awesome Icons from Plugin settings")}
            </p>
          )}
        </div>,
        <div
          className={`${className}__wrap`}
          style={{
            justifyContent: align,
            flexDirection: flexDir,
            backgroundColor: containerBack
          }}
        >
          {iconCheck && (
            <div
              className={`${className}__icon_wrap`}
              style={{
                marginRight:
                  "row" === flexDir || "row-reverse" === flexDir
                    ? iconSpacing + "px"
                    : "0",
                marginLeft:
                  "row" === flexDir || "row-reverse" === flexDir
                    ? iconSpacing + "px"
                    : "0",
                alignSelf:
                  "row-reverse" === flexDir || "row" === flexDir
                    ? "center"
                    : selfAlign
              }}
            >
              {"icon" === icon && (
                <i
                  className={`${className}__icon ${iconClass}`}
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
          <div
            className={`${className}__info`}
            style={{
              alignSelf:
                "row-reverse" === flexDir || "row" === flexDir
                  ? "center"
                  : selfAlign
            }}
          >
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
            {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
              <h3
                className={`${className}__title`}
                style={{
                  fontSize: titleSize + "px",
                  marginTop: titleT + "px",
                  marginBottom: titleB + "px",
                  color: titleColor,
                  letterSpacing: titleSpacing + "px",
                  fontWeight: titleWeight,
                  textTransform: titleUpper ? "uppercase" : "none",
                  fontStyle: titleStyle
                }}
              >
                {titleTxt}
              </h3>
            )}
          </div>
          {titleCheck &&
            ("column" === flexDir || "column-reverse" === flexDir) && (
              <h3
                className={`${className}__title`}
                style={{
                  fontSize: titleSize + "px",
                  marginTop: titleT + "px",
                  marginBottom: titleB + "px",
                  color: titleColor,
                  letterSpacing: titleSpacing + "px",
                  fontWeight: titleWeight,
                  textTransform: titleUpper ? "uppercase" : "none",
                  fontStyle: titleStyle,
                  alignSelf: selfAlign
                }}
              >
                {titleTxt}
              </h3>
            )}
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
        iconSpacing,
        iconType,
        imageURL,
        iconSize,
        iconColor,
        selfAlign,
        titleCheck,
        titleTxt,
        titleColor,
        titleSize,
        titleSpacing,
        titleStyle,
        titleUpper,
        titleT,
        titleB,
        titleWeight,
        faIcon,
        containerBack
      } = props.attributes;
      let iconClass =
        "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
      return (
        <div
          className={`${className}__wrap`}
          style={{
            justifyContent: align,
            flexDirection: flexDir,
            backgroundColor: containerBack
          }}
        >
          {iconCheck && (
            <div
              className={`${className}__icon_wrap`}
              style={{
                marginRight:
                  "row" === flexDir || "row-reverse" === flexDir
                    ? iconSpacing + "px"
                    : "0",
                marginLeft:
                  "row" === flexDir || "row-reverse" === flexDir
                    ? iconSpacing + "px"
                    : "0",
                alignSelf:
                  "row-reverse" === flexDir || "row" === flexDir
                    ? "center"
                    : selfAlign
              }}
            >
              {"icon" === icon && (
                <i
                  className={`${className}__icon ${iconClass}`}
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

          <div
            className={`${className}__info`}
            style={{
              alignSelf:
                "row-reverse" === flexDir || "row" === flexDir
                  ? "center"
                  : selfAlign
            }}
          >
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
            {titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && (
              <h3
                className={`${className}__title`}
                style={{
                  fontSize: titleSize + "px",
                  marginTop: titleT + "px",
                  marginBottom: titleB + "px",
                  color: titleColor,
                  letterSpacing: titleSpacing + "px",
                  textTransform: titleUpper ? "uppercase" : "none",
                  fontStyle: titleStyle,
                  fontWeight: titleWeight
                }}
              >
                {titleTxt}
              </h3>
            )}
          </div>
          {titleCheck &&
            ("column" === flexDir || "column-reverse" === flexDir) && (
              <h3
                className={`${className}__title`}
                style={{
                  fontSize: titleSize + "px",
                  marginTop: titleT + "px",
                  marginBottom: titleB + "px",
                  color: titleColor,
                  letterSpacing: titleSpacing + "px",
                  fontWeight: titleWeight,
                  textTransform: titleUpper ? "uppercase" : "none",
                  fontStyle: titleStyle,
                  alignSelf: selfAlign
                }}
              >
                {titleTxt}
              </h3>
            )}
        </div>
      );
    },
    deprecated: [
      {
        attributes: counterAttrs,
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
            iconSpacing,
            iconType,
            imageURL,
            iconSize,
            iconColor,
            selfAlign,
            titleCheck,
            titleTxt,
            titleColor,
            titleSize,
            titleSpacing,
            titleStyle,
            titleUpper,
            titleT,
            titleB,
            titleWeight,
            faIcon
          } = props.attributes;
          let iconClass =
            "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
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
                  className={`${className}__icon_wrap`}
                  style={{
                    marginRight:
                      "row" === flexDir || "row-reverse" === flexDir
                        ? iconSpacing + "px"
                        : "0",
                    marginLeft:
                      "row" === flexDir || "row-reverse" === flexDir
                        ? iconSpacing + "px"
                        : "0",
                    alignSelf:
                      "row-reverse" === flexDir || "row" === flexDir
                        ? "center"
                        : selfAlign
                  }}
                >
                  {"icon" === icon && (
                    <i
                      className={`${className}__icon ${iconClass}`}
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

              <div
                className={`${className}__info`}
                style={{
                  alignSelf:
                    "row-reverse" === flexDir || "row" === flexDir
                      ? "center"
                      : selfAlign
                }}
              >
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
                {titleCheck &&
                  ("row" === flexDir || "row-reverse" === flexDir) && (
                    <h3
                      className={`${className}__title`}
                      style={{
                        fontSize: titleSize + "px",
                        marginTop: titleT + "px",
                        marginBottom: titleB + "px",
                        color: titleColor,
                        letterSpacing: titleSpacing + "px",
                        textTransform: titleUpper ? "uppercase" : "none",
                        fontStyle: titleStyle,
                        fontWeight: titleWeight
                      }}
                    >
                      {titleTxt}
                    </h3>
                  )}
              </div>
              {titleCheck &&
                ("column" === flexDir || "column-reverse" === flexDir) && (
                  <h3
                    className={`${className}__title`}
                    style={{
                      fontSize: titleSize + "px",
                      marginTop: titleT + "px",
                      marginBottom: titleB + "px",
                      color: titleColor,
                      letterSpacing: titleSpacing + "px",
                      fontWeight: titleWeight,
                      textTransform: titleUpper ? "uppercase" : "none",
                      fontStyle: titleStyle,
                      alignSelf: selfAlign
                    }}
                  >
                    {titleTxt}
                  </h3>
                )}
            </div>
          );
        }
      }
    ]
  });
}
