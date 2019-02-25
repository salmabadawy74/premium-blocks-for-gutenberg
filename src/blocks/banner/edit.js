import PremiumBorder from "../../components/premium-border";
import PremiumTypo from "../../components/premium-typo";
import PremiumTextShadow from "../../components/premium-text-shadow";
import PremiumFilters from "../../components/premium-filters";

const className = "premium-banner";

const { __ } = wp.i18n;

const { Fragment } = wp.element;

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
  ColorPalette,
  RichText,
  MediaUpload
} = wp.editor;

const edit = props => {
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
    sepColor,
    blur,
    bright,
    contrast,
    saturation,
    hue
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
              setAttributes({ imageURL: media.url, imageID: media.id });
            }}
            type="image"
            value={imageID}
            render={({ open }) => (
              <IconButton label={__("Change Image")} icon="edit" onClick={open}>
                {__("Change Image")}
              </IconButton>
            )}
          />
          <PremiumFilters
            blur={blur}
            bright={bright}
            contrast={contrast}
            saturation={saturation}
            hue={hue}
            onChangeBlur={value => setAttributes({ blur: value })}
            onChangeBright={value => setAttributes({ bright: value })}
            onChangeContrast={value => setAttributes({ contrast: value })}
            onChangeSat={value => setAttributes({ saturation: value })}
            onChangeHue={value => setAttributes({ hue: value })}
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
            onChange={newEffect => setAttributes({ hoverEffect: newEffect })}
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
          <Fragment>
            <p>{__("Overlay")}</p>
            <ColorPalette
              value={background}
              onChange={newValue =>
                setAttributes({
                  background: newValue === undefined ? "transparent" : newValue
                })
              }
              allowReset={true}
            />
          </Fragment>
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
            onChangeSize={newSize => setAttributes({ titleSize: newSize })}
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

          <Fragment>
            <p>{__("Text Color")}</p>
            <ColorPalette
              value={titleColor}
              onChange={newValue =>
                setAttributes({
                  titleColor: newValue === undefined ? "transparent" : newValue
                })
              }
              allowReset={true}
            />
          </Fragment>
          {"effect3" === effect && (
            <Fragment>
              <p>{__("Separator Color")}</p>
              <ColorPalette
                value={sepColor}
                onChange={newValue =>
                  setAttributes({
                    sepColor: newValue === undefined ? "transparent" : newValue
                  })
                }
                allowReset={true}
              />
            </Fragment>
          )}
          {"effect2" === effect && (
            <Fragment>
              <p>{__("Background Color")}</p>
              <ColorPalette
                value={titleBack}
                onChange={newValue =>
                  setAttributes({
                    titleBack: newValue === undefined ? "transparent" : newValue
                  })
                }
                allowReset={true}
              />
            </Fragment>
          )}
          <PremiumTextShadow
            color={shadowColor}
            blur={shadowBlur}
            horizontal={shadowHorizontal}
            vertical={shadowVertical}
            onChangeColor={newColor =>
              setAttributes({
                shadowColor: newColor === undefined ? "transparent" : newColor
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
          <Fragment>
            <p>{__("Text Color")}</p>
            <ColorPalette
              value={descColor}
              onChange={newValue =>
                setAttributes({
                  descColor: newValue === undefined ? "transparent" : newValue
                })
              }
              allowReset={true}
            />
          </Fragment>
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
              style={{
                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`
              }}
            />
          </div>

          <div
            className={`${className}__content`}
            style={{
              background: "effect2" === effect ? titleBack : "transparent"
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
};
export default edit;
