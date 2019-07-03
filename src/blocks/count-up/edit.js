import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import PremiumTypo from "../../components/premium-typo";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackgroud from "../../components/premium-background";
import PremiumBorder from "../../components/premium-border";
import FONTS from "../../components/premium-fonts";

const { __ } = wp.i18n;

const {
  PanelBody,
  Toolbar,
  SelectControl,
  TextControl,
  RangeControl,
  ToggleControl,
  IconButton
} = wp.components;
const { InspectorControls, ColorPalette, CMediaUpload } = wp.editor;

const { Fragment } = wp.element;

const edit = props => {
  const { isSelected, setAttributes, className } = props;
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
    containerBack,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    shadowPosition,
    backgroundImageID,
    backgroundImageURL,
    fixed,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    borderType,
    borderColor,
    borderRadius,
    borderWidth,
    titleFamily,
    counterFamily,
    prefixFamily,
    suffixFamily
  } = props.attributes;
  let iconClass = "fa" === iconType ? `fa fa-${faIcon}` : `dashicons ${faIcon}`;
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

  const addFontToHead = fontFamily => {
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

  const onChangeTitleFamily = fontFamily => {
    setAttributes({ titleFamily: fontFamily });
    if (!fontFamily) {
      return;
    }

    addFontToHead(fontFamily);
  };

  const onChangePrefixFamily = fontFamily => {
    setAttributes({ prefixFamily: fontFamily });
    if (!fontFamily) {
      return;
    }

    addFontToHead(fontFamily);
  };

  const onChangeCounterFamily = fontFamily => {
    setAttributes({ counterFamily: fontFamily });
    if (!fontFamily) {
      return;
    }

    addFontToHead(fontFamily);
  };

  const onChangeSuffixFamily = fontFamily => {
    setAttributes({ suffixFamily: fontFamily });
    if (!fontFamily) {
      return;
    }

    addFontToHead(fontFamily);
  };

  const mainClasses = classnames(className, "premium-countup");

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
            help={__("Set counting time in milliseconds, for example: 1000")}
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
              onChange={newValue => setAttributes({ iconSpacing: newValue })}
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
                    "fa" === iconType ? "address-book" : "dashicons-admin-site"
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
              <Fragment>
                <p>{__("Icon Color")}</p>
                <ColorPalette
                  value={iconColor}
                  onChange={newValue =>
                    setAttributes({
                      iconColor:
                        newValue === undefined ? "transparent" : newValue
                    })
                  }
                  allowReset={true}
                />
              </Fragment>
            )}
          </PanelBody>
        )}
        <PanelBody
          title={__("Number")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <SelectControl
            label={__("Font Family")}
            value={counterFamily}
            options={FONTS}
            onChange={onChangeCounterFamily}
          />
          <PremiumTypo
            components={["size", "weight"]}
            size={numberSize}
            weight={numberWeight}
            onChangeSize={newSize => setAttributes({ numberSize: newSize })}
            onChangeWeight={newWeight =>
              setAttributes({ numberWeight: newWeight })
            }
          />
          <Fragment>
            <p>{__("Number Color")}</p>
            <ColorPalette
              value={numberColor}
              onChange={newValue =>
                setAttributes({
                  numberColor: newValue === undefined ? "transparent" : newValue
                })
              }
              allowReset={true}
            />
          </Fragment>
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

            <SelectControl
              label={__("Font Family")}
              value={prefixFamily}
              options={FONTS}
              onChange={onChangePrefixFamily}
            />
            <PremiumTypo
              components={["size", "weight"]}
              size={prefixSize}
              weight={prefixWeight}
              onChangeSize={newSize => setAttributes({ prefixSize: newSize })}
              onChangeWeight={newWeight =>
                setAttributes({ prefixWeight: newWeight })
              }
            />

            <Fragment>
              <p>{__("Text Color")}</p>
              <ColorPalette
                value={prefixColor}
                onChange={newValue =>
                  setAttributes({
                    prefixColor:
                      newValue === undefined ? "transparent" : newValue
                  })
                }
                allowReset={true}
              />
            </Fragment>
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
            <SelectControl
              label={__("Font Family")}
              value={suffixFamily}
              options={FONTS}
              onChange={onChangeSuffixFamily}
            />
            <PremiumTypo
              components={["size", "weight"]}
              size={suffixSize}
              weight={suffixWeight}
              onChangeSize={newSize => setAttributes({ suffixSize: newSize })}
              onChangeWeight={newWeight =>
                setAttributes({ suffixWeight: newWeight })
              }
            />
            <Fragment>
              <p>{__("Text Color")}</p>
              <ColorPalette
                value={suffixColor}
                onChange={newValue =>
                  setAttributes({
                    suffixColor:
                      newValue === undefined ? "transparent" : newValue
                  })
                }
                allowReset={true}
              />
            </Fragment>
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
            <SelectControl
              label={__("Font Family")}
              value={titleFamily}
              options={FONTS}
              onChange={onChangeTitleFamily}
            />
            <PremiumTypo
              components={["size", "weight", "spacing", "style", "upper"]}
              size={titleSize}
              weight={titleWeight}
              style={titleStyle}
              spacing={titleSpacing}
              upper={titleUpper}
              onChangeSize={newSize => setAttributes({ titleSize: newSize })}
              onChangeWeight={newWeight =>
                setAttributes({ titleWeight: newWeight })
              }
              onChangeStyle={newStyle =>
                setAttributes({ titleStyle: newStyle })
              }
              onChangeSpacing={newValue =>
                setAttributes({ titleSpacing: newValue })
              }
              onChangeUpper={check => setAttributes({ titleUpper: check })}
            />
            <Fragment>
              <p>{__("Text Color")}</p>
              <ColorPalette
                value={titleColor}
                onChange={newValue =>
                  setAttributes({
                    titleColor:
                      newValue === undefined ? "transparent" : newValue
                  })
                }
                allowReset={true}
              />
            </Fragment>
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
          <Fragment>
            <p>{__("Background Color")}</p>
            <ColorPalette
              value={containerBack}
              onChange={newValue =>
                setAttributes({
                  containerBack:
                    newValue === undefined ? "transparent" : newValue
                })
              }
              allowReset={true}
            />
          </Fragment>
          {backgroundImageURL && (
            <img src={backgroundImageURL} width="100%" height="auto" />
          )}
          <PremiumBackgroud
            imageID={backgroundImageID}
            imageURL={backgroundImageURL}
            backgroundPosition={backgroundPosition}
            backgroundRepeat={backgroundRepeat}
            backgroundSize={backgroundSize}
            fixed={fixed}
            onSelectMedia={media => {
              setAttributes({
                backgroundImageID: media.id,
                backgroundImageURL: media.url
              });
            }}
            onRemoveImage={value =>
              setAttributes({
                backgroundImageURL: "",
                backgroundImageID: ""
              })
            }
            onChangeBackPos={newValue =>
              setAttributes({ backgroundPosition: newValue })
            }
            onchangeBackRepeat={newValue =>
              setAttributes({ backgroundRepeat: newValue })
            }
            onChangeBackSize={newValue =>
              setAttributes({ backgroundSize: newValue })
            }
            onChangeFixed={check => setAttributes({ fixed: check })}
          />
          <PremiumBorder
            borderType={borderType}
            borderWidth={borderWidth}
            borderColor={borderColor}
            borderRadius={borderRadius}
            onChangeType={newType => setAttributes({ borderType: newType })}
            onChangeWidth={newWidth => setAttributes({ borderWidth: newWidth })}
            onChangeColor={colorValue =>
              setAttributes({ borderColor: colorValue.hex })
            }
            onChangeRadius={newRadius =>
              setAttributes({ borderRadius: newRadius })
            }
          />
          <PremiumBoxShadow
            inner={true}
            color={shadowColor}
            blur={shadowBlur}
            horizontal={shadowHorizontal}
            vertical={shadowVertical}
            position={shadowPosition}
            onChangeColor={newColor =>
              setAttributes({
                shadowColor: newColor.hex
              })
            }
            onChangeBlur={newBlur =>
              setAttributes({
                shadowBlur: newBlur
              })
            }
            onChangehHorizontal={newValue =>
              setAttributes({
                shadowHorizontal: newValue
              })
            }
            onChangeVertical={newValue =>
              setAttributes({
                shadowVertical: newValue
              })
            }
            onChangePosition={newValue =>
              setAttributes({
                shadowPosition: newValue
              })
            }
          />
        </PanelBody>
      </InspectorControls>
    ),
    <div>
      {iconType === "fa" && 1 != FontAwesomeEnabled && iconCheck && (
        <p className={`premium-countup__alert`}>
          {__("Please Enable Font Awesome Icons from Plugin settings")}
        </p>
      )}
    </div>,
    <div
      className={`${mainClasses}__wrap`}
      style={{
        justifyContent: align,
        flexDirection: flexDir,
        backgroundColor: containerBack,
        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
        backgroundImage: `url('${backgroundImageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        border: borderType,
        borderWidth: borderWidth + "px",
        borderRadius: borderRadius + "px",
        borderColor: borderColor
      }}
    >
      {iconCheck && (
        <div
          className={`premium-countup__icon_wrap`}
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
              className={`premium-countup__icon ${iconClass}`}
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
        className={`premium-countup__info`}
        style={{
          alignSelf:
            "row-reverse" === flexDir || "row" === flexDir
              ? "center"
              : selfAlign
        }}
      >
        <div className={`premium-countup__desc`}>
          {prefix && (
            <p
              className={`premium-countup__prefix`}
              style={{
                fontSize: prefixSize + "px",
                fontFamily: prefixFamily,
                color: prefixColor,
                fontWeight: prefixWeight,
                marginRight: prefixGap + "px"
              }}
            >
              {prefixTxt}
            </p>
          )}
          <p
            className={`premium-countup__increment`}
            data-interval={time}
            data-delay={delay}
            style={{
              fontSize: numberSize + "px",
              fontFamily: counterFamily,
              color: numberColor,
              fontWeight: numberWeight
            }}
          >
            {increment}
          </p>
          {suffix && (
            <p
              className={`premium-countup__suffix`}
              style={{
                fontSize: suffixSize + "px",
                fontFamily: suffixFamily,
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
            className={`premium-countup__title`}
            style={{
              fontSize: titleSize + "px",
              fontFamily: titleFamily,
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
      {titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && (
        <h3
          className={`premium-countup__title`}
          style={{
            fontSize: titleSize + "px",
            fontFamily: titleFamily,
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
};

export default edit;
