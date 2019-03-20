import { FontAwesomeEnabled } from "../settings";
import PremiumTypo from "../../components/premium-typo";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import PremiumBorder from "../../components/premium-border";
import PremiumPadding from "../../components/premium-padding";
import PremiumMargin from "../../components/premium-margin";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumBackgroud from "../../components/premium-background";

const className = "premium-icon-box";

const { __ } = wp.i18n;

const {
  PanelBody,
  IconButton,
  Toolbar,
  RangeControl,
  SelectControl,
  ToggleControl,
  Dropdown,
  Button
} = wp.components;

const { Fragment } = wp.element;

const {
  InspectorControls,
  RichText,
  ColorPalette,
  MediaUpload,
  URLInput
} = wp.editor;

const edit = props => {
  const { isSelected, setAttributes, clientId: blockId } = props;
  const {
    id,
    align,
    iconChecked,
    iconImage,
    iconImgId,
    iconImgUrl,
    iconType,
    selectedIcon,
    hoverEffect,
    iconSize,
    iconRadius,
    iconColor,
    iconBackColor,
    titleChecked,
    titleText,
    titleTag,
    titleColor,
    titleSize,
    titleLine,
    titleLetter,
    titleStyle,
    titleUpper,
    titleWeight,
    titleShadowBlur,
    titleShadowColor,
    titleShadowHorizontal,
    titleShadowVertical,
    titleMarginT,
    titleMarginB,
    descChecked,
    descText,
    descColor,
    descSize,
    descLine,
    descWeight,
    descMarginT,
    descMarginB,
    btnChecked,
    btnEffect,
    effectDir,
    btnTarget,
    btnText,
    btnLink,
    btnSize,
    btnUpper,
    btnWeight,
    btnLetter,
    btnColor,
    btnStyle,
    btnHoverColor,
    btnBack,
    btnHoverBack,
    btnHoverBorder,
    btnBorderColor,
    btnBorderWidth,
    btnBorderRadius,
    btnBorderType,
    btnPadding,
    btnMarginT,
    btnMarginB,
    btnShadowBlur,
    btnShadowColor,
    btnShadowHorizontal,
    btnShadowVertical,
    btnShadowPosition,
    imageID,
    imageURL,
    fixed,
    backColor,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    borderType,
    borderWidth,
    borderRadius,
    borderColor,
    marginT,
    marginR,
    marginB,
    marginL,
    paddingT,
    paddingR,
    paddingB,
    paddingL,
    shadowBlur,
    shadowColor,
    shadowHorizontal,
    shadowVertical,
    shadowPosition,
    hoverShadowBlur,
    hoverShadowColor,
    hoverShadowHorizontal,
    hoverShadowVertical,
    hoverShadowPosition
  } = props.attributes;

  setAttributes({ id: blockId });

  const imgIcon = [
    {
      label: __("Icon"),
      value: "icon"
    },
    {
      label: __("Image"),
      value: "image"
    }
  ];

  const ALIGNS = ["left", "center", "right"];

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

  const BTN_EFFECTS = [
    {
      value: "none",
      label: __("None")
    },
    {
      value: "slide",
      label: __("Slide")
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

  return [
    isSelected && (
      <InspectorControls key={"inspector"}>
        <PanelBody
          title={__("Display Options")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <ToggleControl
            label={__("Icon")}
            checked={iconChecked}
            onChange={newValue => setAttributes({ iconChecked: newValue })}
          />
          <ToggleControl
            label={__("Title")}
            checked={titleChecked}
            onChange={newValue => setAttributes({ titleChecked: newValue })}
          />
          <ToggleControl
            label={__("Description")}
            checked={descChecked}
            onChange={newValue => setAttributes({ descChecked: newValue })}
          />
          <ToggleControl
            label={__("Button")}
            checked={btnChecked}
            onChange={newValue => setAttributes({ btnChecked: newValue })}
          />
        </PanelBody>
        {iconChecked && (
          <PanelBody
            title={__("Icon")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <SelectControl
              label={__("Icon Type")}
              options={imgIcon}
              value={iconImage}
              onChange={newType => setAttributes({ iconImage: newType })}
            />
            {"icon" === iconImage && (
              <Fragment>
                <p className="premium-editor-paragraph">{__("Select Icon")}</p>
                <FontIconPicker
                  icons={iconsList}
                  onChange={newIcon => setAttributes({ selectedIcon: newIcon })}
                  value={selectedIcon}
                  isMulti={false}
                  appendTo="body"
                  noSelectedPlaceholder={__("Select Icon")}
                />
                <Fragment>
                  <p>{__("Icon Color")}</p>
                  <ColorPalette
                    value={iconColor}
                    onChange={newValue =>
                      setAttributes({
                        iconColor: newValue || "transparent"
                      })
                    }
                    allowReset={true}
                  />
                  <p>{__("Background Color")}</p>
                  <ColorPalette
                    value={iconBackColor}
                    onChange={newValue =>
                      setAttributes({
                        iconBackColor: newValue
                      })
                    }
                    allowReset={true}
                  />
                </Fragment>
              </Fragment>
            )}
            {"image" === iconImage && (
              <Fragment>
                {iconImgUrl && (
                  <img src={iconImgUrl} width="100%" height="auto" />
                )}
                <MediaUpload
                  allowedTypes={["image"]}
                  onSelect={media => {
                    setAttributes({
                      iconImgId: media.id,
                      iconImgUrl:
                        "undefined" === typeof media.sizes.thumbnail
                          ? media.url
                          : media.sizes.thumbnail.url
                    });
                  }}
                  type="image"
                  value={iconImgId}
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
                <RangeControl
                  label={__("Border Radius (PX)")}
                  value={iconRadius}
                  onChange={newValue =>
                    setAttributes({ iconRadius: newValue || "0" })
                  }
                />
              </Fragment>
            )}
            <SelectControl
              label={__("Hover Effect")}
              options={EFFECTS}
              value={hoverEffect}
              onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
            />
            <RangeControl
              label={__("Size (PX)")}
              value={iconSize}
              min="1"
              max="200"
              onChange={newValue =>
                setAttributes({ iconSize: newValue || "30" })
              }
            />
          </PanelBody>
        )}
        {titleChecked && (
          <PanelBody
            title={__("Title")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <p>{__("Title")}</p>
            <Toolbar
              controls={"123456".split("").map(tag => ({
                icon: "heading",
                isActive: "H" + tag === titleTag,
                onClick: () => setAttributes({ titleTag: "H" + tag }),
                subscript: tag
              }))}
            />
            <PremiumTypo
              components={[
                "size",
                "weight",
                "style",
                "upper",
                "spacing",
                "line"
              ]}
              size={titleSize}
              weight={titleWeight}
              style={titleStyle}
              spacing={titleLetter}
              line={titleLine}
              upper={titleUpper}
              onChangeSize={newSize => setAttributes({ titleSize: newSize })}
              onChangeWeight={newWeight =>
                setAttributes({ titleWeight: newWeight || 500 })
              }
              onChangeStyle={newStyle =>
                setAttributes({ titleStyle: newStyle })
              }
              onChangeSpacing={newValue =>
                setAttributes({ titleLetter: newValue })
              }
              onChangeLine={newValue => setAttributes({ titleLine: newValue })}
              onChangeUpper={check => setAttributes({ titleUpper: check })}
            />
            <Fragment>
              <p>{__("Text Color")}</p>
              <ColorPalette
                value={titleColor}
                onChange={newValue =>
                  setAttributes({
                    titleColor: newValue || "transparent"
                  })
                }
                allowReset={true}
              />
            </Fragment>
            <PremiumTextShadow
              color={titleShadowColor}
              blur={titleShadowBlur}
              horizontal={titleShadowHorizontal}
              vertical={titleShadowVertical}
              onChangeColor={newColor =>
                setAttributes({ titleShadowColor: newColor || "transparent" })
              }
              onChangeBlur={newBlur =>
                setAttributes({ titleShadowBlur: newBlur || "0" })
              }
              onChangehHorizontal={newValue =>
                setAttributes({ titleShadowHorizontal: newValue || "0" })
              }
              onChangeVertical={newValue =>
                setAttributes({ titleShadowVertical: newValue || "0" })
              }
            />
            <PremiumMargin
              directions={["top", "bottom"]}
              marginTop={titleMarginT}
              marginBottom={titleMarginB}
              onChangeMarTop={value =>
                setAttributes({
                  titleMarginT: value || "0"
                })
              }
              onChangeMarBottom={value =>
                setAttributes({
                  titleMarginB: value || "0"
                })
              }
            />
          </PanelBody>
        )}
        {descChecked && (
          <PanelBody
            title={__("Description")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <PremiumTypo
              components={["size", "weight", "line"]}
              size={descSize}
              weight={descWeight}
              line={descLine}
              onChangeSize={newSize =>
                setAttributes({ descSize: newSize || 20 })
              }
              onChangeWeight={newWeight =>
                setAttributes({ descWeight: newWeight || 500 })
              }
              onChangeLine={newValue => setAttributes({ descLine: newValue })}
            />
            <Fragment>
              <p>{__("Text Color")}</p>
              <ColorPalette
                value={descColor}
                onChange={newValue =>
                  setAttributes({
                    descColor: newValue || "transparent"
                  })
                }
                allowReset={true}
              />
            </Fragment>
            <PremiumMargin
              directions={["top", "bottom"]}
              marginTop={descMarginT}
              marginBottom={descMarginB}
              onChangeMarTop={value =>
                setAttributes({
                  descMarginT: value || 0
                })
              }
              onChangeMarBottom={value =>
                setAttributes({
                  descMarginB: value || 0
                })
              }
            />
          </PanelBody>
        )}

        {btnChecked && (
          <PanelBody
            title={__("Button")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <SelectControl
              options={BTN_EFFECTS}
              label={__("Hover Effect")}
              value={btnEffect}
              onChange={newValue => setAttributes({ btnEffect: newValue })}
            />
            {"slide" === btnEffect && (
              <SelectControl
                options={DIRECTION}
                label={__("Direction")}
                value={effectDir}
                onChange={newValue => setAttributes({ effectDir: newValue })}
              />
            )}
            <ToggleControl
              label={__("Open link in new tab")}
              checked={btnTarget}
              onChange={newValue => setAttributes({ btnTarget: newValue })}
            />
            <PremiumTypo
              components={["size", "weight", "style", "upper", "spacing"]}
              size={btnSize}
              weight={btnWeight}
              style={btnStyle}
              spacing={btnLetter}
              upper={btnUpper}
              onChangeSize={newSize =>
                setAttributes({ btnSize: newSize || 20 })
              }
              onChangeWeight={newWeight =>
                setAttributes({ btnWeight: newWeight || 500 })
              }
              onChangeStyle={newStyle => setAttributes({ btnStyle: newStyle })}
              onChangeSpacing={newValue =>
                setAttributes({ btnLetter: newValue })
              }
              onChangeUpper={check => setAttributes({ btnUpper: check })}
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
                      value={btnColor}
                      onChange={newValue =>
                        setAttributes({
                          btnColor: newValue || "000"
                        })
                      }
                      allowReset={true}
                    />
                    <p>{__("Text Hover Color")}</p>
                    <ColorPalette
                      value={btnHoverColor}
                      onChange={newValue =>
                        setAttributes({
                          btnHoverColor: newValue || "#000"
                        })
                      }
                      allowReset={true}
                    />
                    <p>{__("Background Color")}</p>
                    <ColorPalette
                      value={btnBack}
                      onChange={newValue =>
                        setAttributes({
                          btnBack: newValue || "transparent"
                        })
                      }
                      allowReset={true}
                    />
                    <p>{__("Background Hover Color")}</p>
                    <ColorPalette
                      value={btnHoverBack}
                      onChange={newValue =>
                        setAttributes({
                          btnHoverBack: newValue
                        })
                      }
                      allowReset={true}
                    />
                    <p>{__("Border Hover Color")}</p>
                    <ColorPalette
                      value={btnHoverBorder}
                      onChange={newValue =>
                        setAttributes({
                          btnHoverBorder: newValue || "transparent"
                        })
                      }
                      allowReset={true}
                    />
                  </Fragment>
                )}
              />
            </div>

            <PremiumBorder
              borderType={btnBorderType}
              borderWidth={btnBorderWidth}
              borderColor={btnBorderColor}
              borderRadius={btnBorderRadius}
              onChangeType={newType =>
                setAttributes({ btnBorderType: newType })
              }
              onChangeWidth={newWidth =>
                setAttributes({ btnBorderWidth: newWidth })
              }
              onChangeColor={colorValue =>
                setAttributes({ btnBorderColor: colorValue })
              }
              onChangeRadius={newrRadius =>
                setAttributes({ btnBorderRadius: newrRadius })
              }
            />
            <PremiumBoxShadow
              inner={true}
              color={btnShadowColor}
              blur={btnShadowBlur}
              horizontal={btnShadowHorizontal}
              vertical={btnShadowVertical}
              position={btnShadowPosition}
              onChangeColor={newColor =>
                setAttributes({
                  btnShadowColor: newColor || "transparent"
                })
              }
              onChangeBlur={newBlur =>
                setAttributes({
                  btnShadowBlur: newBlur || 0
                })
              }
              onChangehHorizontal={newValue =>
                setAttributes({
                  btnShadowHorizontal: newValue || 0
                })
              }
              onChangeVertical={newValue =>
                setAttributes({
                  btnShadowVertical: newValue || 0
                })
              }
              onChangePosition={newValue =>
                setAttributes({
                  btnShadowPosition: newValue || 0
                })
              }
            />
            <RangeControl
              label={__("Padding (PX)")}
              value={btnPadding}
              onChange={newValue => setAttributes({ btnPadding: newValue })}
            />
            <PremiumMargin
              directions={["top", "bottom"]}
              marginTop={btnMarginT}
              marginBottom={btnMarginB}
              onChangeMarTop={value =>
                setAttributes({
                  btnMarginT: value || 0
                })
              }
              onChangeMarBottom={value =>
                setAttributes({
                  btnMarginB: value || 0
                })
              }
            />
          </PanelBody>
        )}

        <PanelBody
          title={__("Container")}
          className="premium-panel-body"
          initialOpen={false}
        >
          <p>{__("Align")}</p>
          <Toolbar
            controls={ALIGNS.map(contentAlign => ({
              icon: "editor-align" + contentAlign,
              isActive: contentAlign === align,
              onClick: () => setAttributes({ align: contentAlign })
            }))}
          />
          <Fragment>
            <p>{__("Background Color")}</p>
            <ColorPalette
              value={backColor}
              onChange={newValue =>
                setAttributes({
                  backColor: newValue || "transparent"
                })
              }
              allowReset={true}
            />
          </Fragment>

          {imageURL && <img src={imageURL} width="100%" height="auto" />}
          <PremiumBackgroud
            imageID={imageID}
            imageURL={imageURL}
            backgroundPosition={backgroundPosition}
            backgroundRepeat={backgroundRepeat}
            backgroundSize={backgroundSize}
            fixed={fixed}
            onSelectMedia={media => {
              setAttributes({
                imageID: media.id,
                imageURL: media.url
              });
            }}
            onRemoveImage={value =>
              setAttributes({ imageURL: "", imageID: "" })
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
              setAttributes({ borderColor: colorValue })
            }
            onChangeRadius={newrRadius =>
              setAttributes({ borderRadius: newrRadius })
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
                shadowColor: newColor || "transparent"
              })
            }
            onChangeBlur={newBlur =>
              setAttributes({
                shadowBlur: newBlur || 0
              })
            }
            onChangehHorizontal={newValue =>
              setAttributes({
                shadowHorizontal: newValue || 0
              })
            }
            onChangeVertical={newValue =>
              setAttributes({
                shadowVertical: newValue || 0
              })
            }
            onChangePosition={newValue =>
              setAttributes({
                shadowPosition: newValue || 0
              })
            }
          />
          <PremiumBoxShadow
            inner={true}
            label={__("Hover Box Shadow")}
            color={hoverShadowColor}
            blur={hoverShadowBlur}
            horizontal={hoverShadowHorizontal}
            vertical={hoverShadowVertical}
            position={hoverShadowPosition}
            onChangeColor={newColor =>
              setAttributes({
                hoverShadowColor: newColor
              })
            }
            onChangeBlur={newBlur =>
              setAttributes({
                hoverShadowBlur: newBlur
              })
            }
            onChangehHorizontal={newValue =>
              setAttributes({
                hoverShadowHorizontal: newValue
              })
            }
            onChangeVertical={newValue =>
              setAttributes({
                hoverShadowVertical: newValue
              })
            }
            onChangePosition={newValue =>
              setAttributes({
                hoverShadowPosition: newValue
              })
            }
          />
          <PremiumMargin
            directions={["all"]}
            marginTop={marginT}
            marginRight={marginR}
            marginBottom={marginB}
            marginLeft={marginL}
            onChangeMarTop={value =>
              setAttributes({
                marginT: value || 0
              })
            }
            onChangeMarRight={value =>
              setAttributes({
                marginR: value || 0
              })
            }
            onChangeMarBottom={value =>
              setAttributes({
                marginB: value || 0
              })
            }
            onChangeMarLeft={value =>
              setAttributes({
                marginL: value || 0
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
                paddingT: value || 0
              })
            }
            onChangePadRight={value =>
              setAttributes({
                paddingR: value || 0
              })
            }
            onChangePadBottom={value =>
              setAttributes({
                paddingB: value || 0
              })
            }
            onChangePadLeft={value =>
              setAttributes({
                paddingL: value || 0
              })
            }
          />
        </PanelBody>
      </InspectorControls>
    ),
    <div
      id={`${className}-${id}`}
      className={`${className}`}
      style={{
        textAlign: align,
        border: borderType,
        borderWidth: borderWidth + "px",
        borderRadius: borderRadius + "px",
        borderColor: borderColor,
        marginTop: marginT,
        marginRight: marginR,
        marginBottom: marginB,
        marginLeft: marginL,
        paddingTop: paddingT,
        paddingRight: paddingR,
        paddingBottom: paddingB,
        paddingLeft: paddingL,
        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
        backgroundColor: backColor,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset"
      }}
    >
      {btnChecked && btnText && (
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `#premium-icon-box-${id}:hover {`,
              `box-shadow: ${hoverShadowHorizontal}px ${hoverShadowVertical}px ${hoverShadowBlur}px ${hoverShadowColor} ${hoverShadowPosition} !important`,
              "}",
              `#premium-icon-box-${id} .premium-icon-box__btn:hover {`,
              `color: ${btnHoverColor} !important;`,
              `border-color: ${btnHoverBorder} !important;`,
              "}",
              `#premium-icon-box-${id} .premium-button__none .premium-icon-box__btn:hover {`,
              `background-color: ${btnHoverBack} !important;`,
              "}",
              `#premium-icon-box-${id} .premium-button__slide .premium-button::before {`,
              `background-color: ${btnHoverBack} !important;`,
              "}"
            ].join("\n")
          }}
        />
      )}
      {iconChecked && (
        <div className={`${className}__icon_wrap`}>
          {"icon" === iconImage && (
            <Fragment>
              {iconType === "fa" && 1 != FontAwesomeEnabled && (
                <p className={`${className}__alert`}>
                  {__("Please Enable Font Awesome Icons from Plugin settings")}
                </p>
              )}
              {(iconType === "dash" || 1 == FontAwesomeEnabled) && (
                <i
                  className={`${selectedIcon} ${className}__icon premium-icon__${hoverEffect}`}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    fontSize: iconSize
                  }}
                />
              )}
            </Fragment>
          )}
          {"image" === iconImage && iconImgUrl && (
            <img
              className={`${className}__icon premium-icon__${hoverEffect}`}
              src={`${iconImgUrl}`}
              alt="Image Icon"
              style={{
                width: iconSize + "px",
                height: iconSize + "px",
                borderRadius: iconRadius + "px"
              }}
            />
          )}
        </div>
      )}
      {titleChecked && titleText && (
        <div
          className={`${className}__title_wrap`}
          style={{
            marginTop: titleMarginT,
            marginBottom: titleMarginB
          }}
        >
          <RichText
            tagName={titleTag.toLowerCase()}
            className={`${className}__title`}
            onChange={newText => setAttributes({ titleText: newText })}
            placeholder={__("Awesome Title")}
            value={titleText}
            style={{
              color: titleColor,
              fontSize: titleSize + "px",
              letterSpacing: titleLetter + "px",
              textTransform: titleUpper ? "uppercase" : "none",
              fontStyle: titleStyle,
              fontWeight: titleWeight,
              textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`,
              lineHeight: titleLine + "px"
            }}
            keepPlaceholderOnFocus
          />
        </div>
      )}
      {descChecked && descText && (
        <div
          className={`${className}__desc_wrap`}
          style={{
            marginTop: descMarginT,
            marginBottom: descMarginB
          }}
        >
          <RichText
            tagName="p"
            className={`${className}__desc`}
            value={descText}
            isSelected={false}
            placeholder="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."
            onChange={newText => setAttributes({ descText: newText })}
            style={{
              color: descColor,
              fontSize: descSize + "px",
              lineHeight: descLine + "px",
              fontWeight: descWeight
            }}
            keepPlaceholderOnFocus
          />
        </div>
      )}
      {btnChecked && btnText && (
        <div
          className={`${className}__btn_wrap premium-button__${btnEffect} premium-button__${effectDir}`}
          style={{
            marginTop: btnMarginT,
            marginBottom: btnMarginB
          }}
        >
          <RichText
            tagName="a"
            className={`${className}__btn premium-button`}
            onChange={newText => setAttributes({ btnText: newText })}
            placeholder={__("Click Here")}
            value={btnText}
            style={{
              color: btnColor,
              backgroundColor: btnBack,
              fontSize: btnSize + "px",
              letterSpacing: btnLetter + "px",
              textTransform: btnUpper ? "uppercase" : "none",
              fontStyle: btnStyle,
              fontWeight: btnWeight,
              border: btnBorderType,
              borderWidth: btnBorderWidth + "px",
              borderRadius: btnBorderRadius + "px",
              borderColor: btnBorderColor,
              padding: btnPadding + "px",
              boxShadow: `${btnShadowHorizontal}px ${btnShadowVertical}px ${btnShadowBlur}px ${btnShadowColor} ${btnShadowPosition}`
            }}
            keepPlaceholderOnFocus
          />
          {isSelected && (
            <URLInput
              value={btnLink}
              onChange={newLink => setAttributes({ btnLink: newLink })}
            />
          )}
        </div>
      )}
    </div>
  ];
};

export default edit;
