import classnames from "classnames";
import { FontAwesomeEnabled } from "../../../assets/js/settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumBorder from "../../components/premium-border";
import PremiumMargin from "../../components/premium-margin";
import PremiumPadding from "../../components/premium-padding";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBackgroud from "../../components/premium-background";

const { __ } = wp.i18n;

const {
  PanelBody,
  Toolbar,
  SelectControl,
  RangeControl,
  ToggleControl,
  Dropdown,
  Button,
} = wp.components;

const { InspectorControls, ColorPalette, URLInput } = wp.blockEditor;

const { Fragment } = wp.element;

const edit = (props) => {
  const { isSelected, setAttributes, className } = props;
  const {
    iconType,
    selectedIcon,
    align,
    hoverEffect,
    iconSize,
    iconSizeUnit,
    iconColor,
    iconBack,
    iconOpacity,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    paddingT,
    paddingR,
    paddingB,
    paddingL,
    paddingU,
    marginT,
    marginR,
    marginB,
    marginL,
    borderType,
    borderWidth,
    borderRadius,
    borderColor,
    backgroundColor,
    backgroundOpacity,
    imageID,
    imageURL,
    fixed,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
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
    target,
  } = props.attributes;

  const EFFECTS = [
    {
      value: "none",
      label: __("None"),
    },
    {
      value: "pulse",
      label: __("Pulse"),
    },
    {
      value: "rotate",
      label: __("Rotate"),
    },
    {
      value: "drotate",
      label: __("3D Rotate"),
    },
    {
      value: "buzz",
      label: __("Buzz"),
    },
    {
      value: "drop",
      label: __("Drop Shadow"),
    },
    {
      value: "wobble",
      label: __("Wobble"),
    },
  ];

  const ALIGNS = ["left", "center", "right"];

  const mainClasses = classnames(className, "premium-icon");

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
            onChange={(newIcon) => setAttributes({ selectedIcon: newIcon })}
            value={selectedIcon}
            isMulti={false}
            appendTo="body"
            noSelectedPlaceholder={__("Select Icon")}
          />
          <SelectControl
            label={__("Hover Effect")}
            options={EFFECTS}
            value={hoverEffect}
            onChange={(newEffect) => setAttributes({ hoverEffect: newEffect })}
          />
          <p>{__("Align")}</p>
          <Toolbar
            controls={ALIGNS.map((iconAlign) => ({
              icon: "editor-align" + iconAlign,
              isActive: iconAlign === align,
              onClick: () => setAttributes({ align: iconAlign }),
            }))}
          />
          <ToggleControl
            label={__("Link")}
            checked={urlCheck}
            onChange={(newValue) => setAttributes({ urlCheck: newValue })}
          />
          {urlCheck && (
            <ToggleControl
              label={__("Open link in new tab")}
              checked={target}
              onChange={(newValue) => setAttributes({ target: newValue })}
            />
          )}
        </PanelBody>
        <PanelBody
          title={__("Icon Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <PremiumSizeUnits
            onChangeSizeUnit={(newValue) =>
              setAttributes({ iconSizeUnit: newValue })
            }
          />
          <RangeControl
            label={__("Size")}
            value={iconSize}
            onChange={(newValue) => setAttributes({ iconSize: newValue })}
            initialPosition={50}
            allowReset={true}
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
                  <p>{__("Icon Color")}</p>
                  <ColorPalette
                    value={iconColor}
                    onChange={(newValue) =>
                      setAttributes({
                        iconColor: newValue,
                      })
                    }
                    allowReset={true}
                  />
                  <p>{__("Background Color")}</p>
                  <PremiumBackgroud
                    type="color"
                    colorValue={iconBack}
                    onChangeColor={(value) =>
                      setAttributes({ iconBack: value })
                    }
                    opacityValue={iconOpacity}
                    onChangeOpacity={(newvalue) =>
                      setAttributes({ iconOpacity: newvalue })
                    }
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

          <PremiumTextShadow
            label="Shadow"
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

          <PremiumMargin
            directions={["all"]}
            marginTop={marginT}
            marginRight={marginR}
            marginBottom={marginB}
            marginLeft={marginL}
            onChangeMarTop={(value) =>
              setAttributes({
                marginT: value,
              })
            }
            onChangeMarRight={(value) =>
              setAttributes({
                marginR: value,
              })
            }
            onChangeMarBottom={(value) =>
              setAttributes({
                marginB: value,
              })
            }
            onChangeMarLeft={(value) =>
              setAttributes({
                marginL: value,
              })
            }
          />
          <PremiumPadding
            paddingTop={paddingT}
            paddingRight={paddingR}
            paddingBottom={paddingB}
            paddingLeft={paddingL}
            onChangePadTop={(value) =>
              setAttributes({
                paddingT: value,
              })
            }
            onChangePadRight={(value) =>
              setAttributes({
                paddingR: value,
              })
            }
            onChangePadBottom={(value) =>
              setAttributes({
                paddingB: value,
              })
            }
            onChangePadLeft={(value) =>
              setAttributes({
                paddingL: value,
              })
            }
            showUnits={true}
            selectedUnit={paddingU}
            onChangePadSizeUnit={(newvalue) =>
              setAttributes({ paddingU: newvalue })
            }
          />
        </PanelBody>
        <PanelBody
          title={__("Container Style")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <Fragment>
            <p>{__("Background Color")}</p>
            <PremiumBackgroud
              type="color"
              colorValue={backgroundColor}
              onChangeColor={(value) =>
                setAttributes({ backgroundColor: value })
              }
              opacityValue={backgroundOpacity}
              onChangeOpacity={(newvalue) =>
                setAttributes({ backgroundOpacity: newvalue })
              }
            />

            <PremiumBackgroud
              imageID={imageID}
              imageURL={imageURL}
              backgroundPosition={backgroundPosition}
              backgroundRepeat={backgroundRepeat}
              backgroundSize={backgroundSize}
              fixed={fixed}
              onSelectMedia={(media) => {
                setAttributes({
                  imageID: media.id,
                  imageURL: media.url,
                });
              }}
              onRemoveImage={(value) =>
                setAttributes({ imageURL: "", imageID: "" })
              }
              onChangeBackPos={(newValue) =>
                setAttributes({ backgroundPosition: newValue })
              }
              onchangeBackRepeat={(newValue) =>
                setAttributes({ backgroundRepeat: newValue })
              }
              onChangeBackSize={(newValue) =>
                setAttributes({ backgroundSize: newValue })
              }
              onChangeFixed={(check) => setAttributes({ fixed: check })}
            />
          </Fragment>

          <PremiumBorder
            borderType={wrapBorderType}
            borderWidth={wrapBorderWidth}
            borderColor={wrapBorderColor}
            borderRadius={wrapBorderRadius}
            onChangeType={(newType) =>
              setAttributes({ wrapBorderType: newType })
            }
            onChangeWidth={(newWidth) =>
              setAttributes({ wrapBorderWidth: newWidth })
            }
            onChangeColor={(colorValue) =>
              setAttributes({ wrapBorderColor: colorValue.hex })
            }
            onChangeRadius={(newrRadius) =>
              setAttributes({ wrapBorderRadius: newrRadius })
            }
          />

          <PremiumBoxShadow
            inner={true}
            color={wrapShadowColor}
            blur={wrapShadowBlur}
            horizontal={wrapShadowHorizontal}
            vertical={wrapShadowVertical}
            position={wrapShadowPosition}
            onChangeColor={(newColor) =>
              setAttributes({
                wrapShadowColor: newColor.hex,
              })
            }
            onChangeBlur={(newBlur) =>
              setAttributes({
                wrapShadowBlur: newBlur,
              })
            }
            onChangehHorizontal={(newValue) =>
              setAttributes({
                wrapShadowHorizontal: newValue,
              })
            }
            onChangeVertical={(newValue) =>
              setAttributes({
                wrapShadowVertical: newValue,
              })
            }
            onChangePosition={(newValue) =>
              setAttributes({
                wrapShadowPosition: newValue,
              })
            }
          />

          <PremiumMargin
            directions={["all"]}
            marginTop={wrapMarginT}
            marginRight={wrapMarginR}
            marginBottom={wrapMarginB}
            marginLeft={wrapMarginL}
            onChangeMarTop={(value) =>
              setAttributes({
                wrapMarginT: value,
              })
            }
            onChangeMarRight={(value) =>
              setAttributes({
                wrapMarginR: value,
              })
            }
            onChangeMarBottom={(value) =>
              setAttributes({
                wrapMarginB: value,
              })
            }
            onChangeMarLeft={(value) =>
              setAttributes({
                wrapMarginL: value,
              })
            }
          />
          <PremiumPadding
            paddingTop={wrapPaddingT}
            paddingRight={wrapPaddingR}
            paddingBottom={wrapPaddingB}
            paddingLeft={wrapPaddingL}
            onChangePadTop={(value) =>
              setAttributes({
                wrapPaddingT: value,
              })
            }
            onChangePadRight={(value) =>
              setAttributes({
                wrapPaddingR: value,
              })
            }
            onChangePadBottom={(value) =>
              setAttributes({
                wrapPaddingB: value,
              })
            }
            onChangePadLeft={(value) =>
              setAttributes({
                wrapPaddingL: value,
              })
            }
          />
        </PanelBody>
      </InspectorControls>
    ),

    <div
      className={`${mainClasses}__container`}
      style={{
        textAlign: align,
        backgroundColor: `rgba(${backgroundColor},${backgroundOpacity})`,
        backgroundImage: imageURL ? `url('${imageURL}')` : "none",
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        border: wrapBorderType,
        borderWidth: wrapBorderWidth + "px",
        borderRadius: wrapBorderRadius + "px",
        borderColor: wrapBorderColor,
        boxShadow: `${wrapShadowHorizontal || 0}px ${
          wrapShadowVertical || 0
        }px ${wrapShadowBlur || 0}px ${wrapShadowColor} ${wrapShadowPosition}`,
        paddingTop: wrapPaddingT,
        paddingRight: wrapPaddingR,
        paddingBottom: wrapPaddingB,
        paddingLeft: wrapPaddingL,
        marginTop: wrapMarginT,
        marginRight: wrapMarginR,
        marginBottom: wrapMarginB,
        marginLeft: wrapMarginL,
      }}
    >
      {iconType === "fa" && 1 != FontAwesomeEnabled && (
        <p className={`premium-icon__alert`}>
          {__("Please Enable Font Awesome Icons from Plugin settings")}
        </p>
      )}
      {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
        <i
          className={`premium-icon ${selectedIcon} premium-icon__${hoverEffect}`}
          style={{
            color: iconColor || "#6ec1e4",
            backgroundColor: `rgba(${iconBack},${iconOpacity})`,
            fontSize: (iconSize || 50) + iconSizeUnit,
            paddingTop: paddingT + paddingU,
            paddingRight: paddingR + paddingU,
            paddingBottom: paddingB + paddingU,
            paddingLeft: paddingL + paddingU,
            marginTop: marginT,
            marginRight: marginR,
            marginBottom: marginB,
            marginLeft: marginL,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius || 100 + "px",
            borderColor: borderColor,
            textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0}px ${
              shadowBlur || 0
            }px ${shadowColor}`,
          }}
        />
      )}
      {urlCheck && isSelected && (
        <URLInput
          value={link}
          onChange={(newUrl) => setAttributes({ link: newUrl })}
        />
      )}
    </div>,
  ];
};

export default edit;
