import { banner } from "../settings";
import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PbgIcon from "../icons";

if (banner) {
  const className = "premium-banner";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    IconButton,
    Toolbar,
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl
  } = wp.components;

  const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    PanelColorSettings,
    RichText,
    MediaUpload
  } = wp.editor;

  const bannerAttrs = {
    imageID: {
      type: "number"
    },
    imageURL: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: ".premium-banner__img"
    },
    title: {
      type: "array",
      source: "children",
      selector: ".premium-banner__title",
      default: __("Awesome Title")
    },
    titleTag: {
      type: "string",
      default: "H3"
    },
    desc: {
      type: "array",
      source: "children",
      selector: ".premium-banner__desc",
      default: __("Cool Description!!")
    },
    contentAlign: {
      type: "string",
      default: "left"
    },
    effect: {
      type: "string",
      default: "effect1"
    },
    hoverEffect: {
      type: "string",
      default: "none"
    },
    height: {
      type: "string",
      default: "default"
    },
    minHeight: {
      type: "number"
    },
    verAlign: {
      type: "string",
      default: "top"
    },
    hovered: {
      type: "boolean",
      default: false
    },
    responsive: {
      type: "boolean",
      default: false
    },
    background: {
      type: "string"
    },
    opacity: {
      type: "number",
      default: 50
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
      default: "0"
    },
    borderColor: {
      type: "string"
    },
    titleColor: {
      type: "string"
    },
    titleSize: {
      type: "number",
      default: "20"
    },
    titleLine: {
      type: "number"
    },
    titleWeight: {
      type: "number"
    },
    titleBack: {
      type: "string"
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
    descColor: {
      type: "string",
      default: "#000"
    },
    descSize: {
      type: "number",
      default: "20"
    },
    descLine: {
      type: "number"
    },
    descWeight: {
      type: "number"
    },
    urlCheck: {
      type: "boolean",
      default: false
    },
    target: {
      type: "boolean",
      default: false
    },
    url: {
      type: "string",
      source: "attribute",
      attribute: "href",
      selector: ".premium-banner__link"
    },
    sepColor: {
      type: "string"
    },
    id: {
      type: "string"
    }
  };
  registerBlockType("premium/banner", {
    title: __("Banner"),
    icon: <PbgIcon icon="banner" />,
    category: "premium-blocks",
    attributes: bannerAttrs,
    edit: props => {
      const { isSelected, setAttributes, clientId: blockID } = props;
      const {
        id,
        imageID,
        imageURL,
        title,
        titleTag,
        desc,
        contentAlign,
        effect,
        hoverEffect,
        height,
        minHeight,
        verAlign,
        hovered,
        responsive,
        background,
        opacity,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        titleColor,
        titleSize,
        titleLine,
        titleWeight,
        titleBack,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        descColor,
        descSize,
        descLine,
        descWeight,
        urlCheck,
        url,
        target,
        sepColor
      } = props.attributes;
      const ALIGNS = [
        {
          value: "flex-start",
          label: __("Top")
        },
        {
          value: "center",
          label: __("Middle")
        },
        {
          value: "flex-end",
          label: __("Bottom")
        },
        {
          value: "inherit",
          label: __("Full")
        }
      ];
      const EFFECTS = [
        {
          value: "effect1",
          label: __("Effect 1")
        },
        {
          value: "effect2",
          label: __("Effect 2")
        },
        {
          value: "effect3",
          label: __("Effect 3")
        },
        {
          value: "effect4",
          label: __("Effect 4")
        },
        {
          value: "effect5",
          label: __("Effect 5")
        },
        {
          value: "effect6",
          label: __("Effect 6")
        }
      ];
      const HOVER = [
        {
          value: "none",
          label: __("None")
        },
        {
          value: "zoomin",
          label: __("Zoom In")
        },
        {
          value: "zoomout",
          label: "Zoom Out"
        },
        {
          value: "scale",
          label: __("Scale")
        },
        {
          value: "gray",
          label: __("Gray Scale")
        },
        {
          value: "blur",
          label: __("Blur")
        },
        {
          value: "bright",
          label: __("Bright")
        },
        {
          value: "sepia",
          label: __("Sepia")
        }
      ];
      const HEIGHT = [
        {
          value: "default",
          label: __("Default")
        },
        {
          value: "custom",
          label: __("Custom")
        }
      ];
      setAttributes({ id: blockID });
      return [
        isSelected && (
          <BlockControls key="controls">
            <Toolbar>
              <IconButton
                label={__(
                  "Refresh this button when it conflict with other buttons styles"
                )}
                icon="update"
                className="components-toolbar__control"
                onClick={() => setAttributes({ id: blockID })}
              />
            </Toolbar>
            <AlignmentToolbar
              value={contentAlign}
              onChange={newAlign => setAttributes({ contentAlign: newAlign })}
            />
          </BlockControls>
        ),
        isSelected && (
          <InspectorControls key={"inspector"}>
            <PanelBody
              title={__("General Settings")}
              className="premium-panel-body"
              initialOpen={true}
            >
              {imageURL && <img src={imageURL} width="100%" height="auto" />}
              <MediaUpload
                allowedTypes={["image"]}
                onSelect={media => {
                  setAttributes({
                    imageURL: media.url,
                    imageID: media.id
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
              <SelectControl
                label={__("Effect")}
                value={effect}
                onChange={newEffect => setAttributes({ effect: newEffect })}
                options={EFFECTS}
              />
              <SelectControl
                label={__("Image Hover Effect")}
                options={HOVER}
                value={hoverEffect}
                onChange={newEffect =>
                  setAttributes({ hoverEffect: newEffect })
                }
              />
              <ToggleControl
                label={__("Always Hovered")}
                checked={hovered}
                onChange={check => setAttributes({ hovered: check })}
              />
              <SelectControl
                label={__("Height")}
                options={HEIGHT}
                value={height}
                onChange={newHeight => setAttributes({ height: newHeight })}
              />
              <p>{"custom" === height && __("Min Height (PX)")}</p>
              {"custom" === height && (
                <RangeControl
                  value={minHeight}
                  min="10"
                  max="800"
                  onChange={newSize => setAttributes({ minHeight: newSize })}
                />
              )}
              {"custom" === height && (
                <SelectControl
                  label={__("Vertical Align")}
                  options={ALIGNS}
                  value={verAlign}
                  onChange={newValue => setAttributes({ verAlign: newValue })}
                />
              )}
              <PanelColorSettings
                title={__("Overlay")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: background,
                    onChange: colorValue =>
                      setAttributes({ background: colorValue }),
                    label: __("Overlay Color")
                  }
                ]}
              />
              <RangeControl
                label={__("Overlay Opacity")}
                value={opacity}
                min="1"
                max="100"
                onChange={newOpacity =>
                  setAttributes({
                    opacity: newOpacity === undefined ? 50 : newOpacity
                  })
                }
              />
              <PremiumBorder
                borderType={borderType}
                borderWidth={borderWidth}
                borderColor={borderColor}
                borderRadius={borderRadius}
                onChangeType={newType => setAttributes({ borderType: newType })}
                onChangeWidth={newWidth =>
                  setAttributes({
                    borderWidth: newWidth === undefined ? 0 : newWidth
                  })
                }
                onChangeColor={colorValue =>
                  setAttributes({
                    borderColor:
                      colorValue === undefined ? "transparent" : colorValue
                  })
                }
                onChangeRadius={newRadius =>
                  setAttributes({
                    borderRadius: newRadius === undefined ? 0 : newRadius
                  })
                }
              />
              <ToggleControl
                label={__("Link")}
                checked={urlCheck}
                onChange={newCheck => setAttributes({ urlCheck: newCheck })}
              />
              {urlCheck && (
                <TextControl
                  value={url}
                  onChange={newURL => setAttributes({ url: newURL })}
                />
              )}
              {urlCheck && (
                <ToggleControl
                  label={__("Open link in new tab")}
                  checked={target}
                  onChange={newValue => setAttributes({ target: newValue })}
                />
              )}
              <ToggleControl
                label={__("Hide Description on Mobiles")}
                checked={responsive}
                onChange={newValue => setAttributes({ responsive: newValue })}
              />
            </PanelBody>
            <PanelBody
              title={__("Title Settings")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelBody
                title={__("Font")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <p>{__("HTML Tag")}</p>
                <Toolbar
                  controls={"123456".split("").map(tag => ({
                    icon: "heading",
                    isActive: "H" + tag === titleTag,
                    onClick: () => setAttributes({ titleTag: "H" + tag }),
                    subscript: tag
                  }))}
                />
                <PremiumTypo
                  components={["size", "weight", "line"]}
                  size={titleSize}
                  weight={titleWeight}
                  line={titleLine}
                  onChangeSize={newSize =>
                    setAttributes({ titleSize: newSize })
                  }
                  onChangeWeight={newWeight =>
                    setAttributes({
                      titleWeight: newWeight === undefined ? 500 : newWeight
                    })
                  }
                  onChangeLine={newValue =>
                    setAttributes({
                      titleLine: newValue === undefined ? 10 : newValue
                    })
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
                      setAttributes({
                        titleColor:
                          colorValue === undefined ? "transparent" : colorValue
                      }),
                    label: __("Text Color")
                  }
                ]}
              />
              {"effect3" == effect && (
                <PanelColorSettings
                  title={__("Separator Color")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: sepColor,
                      onChange: colorValue =>
                        setAttributes({
                          sepColor:
                            colorValue === undefined
                              ? "transparent"
                              : colorValue
                        }),
                      label: __("")
                    }
                  ]}
                />
              )}
              {"effect2" == effect && (
                <PanelColorSettings
                  title={__("Background Color")}
                  className="premium-panel-body-inner"
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: titleBack,
                      onChange: colorValue =>
                        setAttributes({
                          titleBack:
                            colorValue === undefined
                              ? "transparent"
                              : colorValue
                        }),
                      label: __("")
                    }
                  ]}
                />
              )}
              <PremiumTextShadow
                color={shadowColor}
                blur={shadowBlur}
                horizontal={shadowHorizontal}
                vertical={shadowVertical}
                onChangeColor={newColor =>
                  setAttributes({
                    shadowColor:
                      newColor === undefined ? "transparent" : newColor
                  })
                }
                onChangeBlur={newBlur =>
                  setAttributes({
                    shadowBlur: newBlur === undefined ? 0 : newBlur
                  })
                }
                onChangehHorizontal={newValue =>
                  setAttributes({
                    shadowHorizontal: newValue === undefined ? 0 : newValue
                  })
                }
                onChangeVertical={newValue =>
                  setAttributes({
                    shadowVertical: newValue === undefined ? 0 : newValue
                  })
                }
              />
            </PanelBody>
            <PanelBody
              title={__("Description Settings")}
              className="premium-panel-body"
              initialOpen={false}
            >
              <PanelBody
                title={__("Font")}
                className="premium-panel-body-inner"
                initialOpen={false}
              >
                <PremiumTypo
                  components={["size", "weight", "line"]}
                  size={descSize}
                  weight={descWeight}
                  line={descLine}
                  onChangeSize={newSize => setAttributes({ descSize: newSize })}
                  onChangeWeight={newWeight =>
                    setAttributes({
                      descWeight: newWeight === undefined ? 500 : newWeight
                    })
                  }
                  onChangeLine={newValue =>
                    setAttributes({
                      descLine: newValue === undefined ? 10 : newValue
                    })
                  }
                />
              </PanelBody>
              <PanelColorSettings
                title={__("Colors")}
                className="premium-panel-body-inner"
                initialOpen={false}
                colorSettings={[
                  {
                    value: descColor,
                    onChange: colorValue =>
                      setAttributes({
                        descColor:
                          colorValue === undefined ? "transparent" : colorValue
                      }),
                    label: __("Text Color")
                  }
                ]}
              />
            </PanelBody>
          </InspectorControls>
        ),
        <div
          id={`premium-banner-${id}`}
          className={`${className} ${className}__responsive_${responsive}`}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                `background: ${sepColor}`,
                "}",
                `#premium-banner-${id} .premium-banner__inner {`,
                `background: ${background}`,
                "}",
                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                "}"
              ].join("\n")
            }}
          />
          {imageURL && (
            <div
              className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
              style={{
                border: borderType,
                borderWidth: borderWidth + "px",
                borderRadius: borderRadius + "px",
                borderColor: borderColor
              }}
            >
              <div
                className={`${className}__img_wrap ${className}__${height}`}
                style={{
                  minHeight: minHeight,
                  alignItems: verAlign
                }}
              >
                <img
                  className={`${className}__img`}
                  alt="Banner Image"
                  src={imageURL}
                />
              </div>

              <div
                className={`${className}__content`}
                style={{
                  background: "effect2" == effect ? titleBack : "transparent"
                }}
              >
                <div
                  className={`${className}__title_wrap`}
                  style={{
                    textAlign: contentAlign
                  }}
                >
                  <RichText
                    tagName={titleTag.toLowerCase()}
                    className={`${className}__title`}
                    value={title}
                    isSelected={false}
                    onChange={newText => setAttributes({ title: newText })}
                    style={{
                      color: titleColor,
                      fontSize: titleSize + "px",
                      fontWeight: titleWeight,
                      lineHeight: titleLine + "px",
                      textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
                    }}
                  />
                </div>
                <div
                  className={`${className}__desc_wrap`}
                  style={{
                    textAlign: contentAlign
                  }}
                >
                  <RichText
                    tagName="p"
                    className={`${className}__desc`}
                    value={desc}
                    isSelected={false}
                    onChange={newText => setAttributes({ desc: newText })}
                    style={{
                      color: descColor,
                      fontSize: descSize + "px",
                      fontWeight: descWeight,
                      lineHeight: descLine + "px"
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ];
    },
    save: props => {
      const {
        id,
        imageURL,
        title,
        titleTag,
        desc,
        contentAlign,
        effect,
        hoverEffect,
        height,
        minHeight,
        verAlign,
        hovered,
        responsive,
        background,
        opacity,
        borderType,
        borderWidth,
        borderRadius,
        borderColor,
        titleColor,
        titleBack,
        titleSize,
        titleWeight,
        titleLine,
        shadowBlur,
        shadowColor,
        shadowHorizontal,
        shadowVertical,
        descColor,
        descSize,
        descWeight,
        descLine,
        urlCheck,
        url,
        target,
        sepColor
      } = props.attributes;
      return (
        <div
          id={`premium-banner-${id}`}
          className={`${className} ${className}__responsive_${responsive}`}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                `background: ${sepColor}`,
                "}",
                `#premium-banner-${id} .premium-banner__inner {`,
                `background: ${background}`,
                "}",
                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                "}"
              ].join("\n")
            }}
          />
          <div
            className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
            style={{
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor
            }}
          >
            <div
              className={`${className}__img_wrap ${className}__${height}`}
              style={{
                minHeight: minHeight,
                alignItems: verAlign
              }}
            >
              <img
                className={`${className}__img`}
                alt="Banner Image"
                src={imageURL}
              />
            </div>

            <div
              className={`${className}__content`}
              style={{
                background: "effect2" == effect ? titleBack : "transparent"
              }}
            >
              <div
                className={`${className}__title_wrap`}
                style={{
                  textAlign: contentAlign
                }}
              >
                <RichText.Content
                  tagName={titleTag.toLowerCase()}
                  className={`${className}__title`}
                  value={title}
                  style={{
                    color: titleColor,
                    fontSize: titleSize + "px",
                    fontWeight: titleWeight,
                    lineHeight: titleLine + "px",
                    textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
                  }}
                />
              </div>
              <div
                className={`${className}__desc_wrap`}
                style={{
                  textAlign: contentAlign
                }}
              >
                <RichText.Content
                  tagName="p"
                  className={`${className}__desc`}
                  value={desc}
                  style={{
                    color: descColor,
                    fontSize: descSize + "px",
                    fontWeight: descWeight,
                    lineHeight: descLine + "px"
                  }}
                />
              </div>
            </div>
            {urlCheck && "" !== url && (
              <a
                className={`${className}__link`}
                href={url}
                target={target && "_blank"}
              />
            )}
          </div>
        </div>
      );
    },
    deprecated: [
      {
        attributes: bannerAttrs,
        save: props => {
          const {
            id,
            imageURL,
            title,
            titleTag,
            desc,
            contentAlign,
            effect,
            hoverEffect,
            height,
            minHeight,
            verAlign,
            hovered,
            responsive,
            background,
            opacity,
            borderType,
            borderWidth,
            borderRadius,
            borderColor,
            titleColor,
            titleBack,
            titleSize,
            titleWeight,
            titleLine,
            descColor,
            descSize,
            descWeight,
            descLine,
            urlCheck,
            url,
            target,
            sepColor
          } = props.attributes;
          return (
            <div
              id={`premium-banner-${id}`}
              className={`${className} ${className}__responsive_${responsive}`}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: [
                    `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                    `background: ${sepColor}`,
                    "}",
                    `#premium-banner-${id} .premium-banner__inner {`,
                    `background: ${background}`,
                    "}",
                    `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                    `opacity: ${opacity / 100} `,
                    "}"
                  ].join("\n")
                }}
              />
              <div
                className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                style={{
                  border: borderType,
                  borderWidth: borderWidth + "px",
                  borderRadius: borderRadius + "px",
                  borderColor: borderColor
                }}
              >
                <div
                  className={`${className}__img_wrap ${className}__${height}`}
                  style={{
                    minHeight: minHeight,
                    alignItems: verAlign
                  }}
                >
                  <img
                    className={`${className}__img`}
                    alt="Banner Image"
                    src={imageURL}
                  />
                </div>

                <div
                  className={`${className}__content`}
                  style={{
                    background: "effect2" == effect ? titleBack : "transparent"
                  }}
                >
                  <div
                    className={`${className}__title_wrap`}
                    style={{
                      textAlign: contentAlign
                    }}
                  >
                    <RichText.Content
                      tagName={titleTag.toLowerCase()}
                      className={`${className}__title`}
                      value={title}
                      style={{
                        color: titleColor,
                        fontSize: titleSize + "px",
                        fontWeight: titleWeight,
                        lineHeight: titleLine + "px"
                      }}
                    />
                  </div>
                  <div
                    className={`${className}__desc_wrap`}
                    style={{
                      textAlign: contentAlign
                    }}
                  >
                    <RichText.Content
                      tagName="p"
                      className={`${className}__desc`}
                      value={desc}
                      style={{
                        color: descColor,
                        fontSize: descSize + "px",
                        fontWeight: descWeight,
                        lineHeight: descLine + "px"
                      }}
                    />
                  </div>
                </div>
                {urlCheck && "" !== url && (
                  <a
                    className={`${className}__link`}
                    href={url}
                    target={target && "_blank"}
                  />
                )}
              </div>
            </div>
          );
        }
      }
    ]
  });
}
