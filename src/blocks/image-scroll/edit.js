import PremiumBorder from "../../components/premium-border";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";
import PremiumSizeUnits from "../../components/premium-size-units";
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  IconButton,
  PanelBody,
  SelectControl,
  RangeControl,
  TextControl,
  ToggleControl,
} = wp.components;

const { InspectorControls, ColorPalette, MediaUpload } = wp.editor;
let scrollElement, imageScroll, scrollOverlay;
let transformOffset = null;
class edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    const { setAttributes, clientId } = this.props;
    setAttributes({ blockID: clientId });
  }

  render() {
    const { setAttributes, isSelected, clientId: blockID } = this.props;
    const {
      imageURL,
      imageID,
      imageAlt,
      imageWidth,
      imageHeight,
      url,
      target,
      urlCheck,
      height,
      effectDir,
      HeightU,
      background,
      targetOverlay,
      hoverEffect,
      blur,
      bright,
      contrast,
      saturation,
      hue,
      borderType,
      borderWidth,
      borderRadius,
      borderColor,
      containerShadowColor,
      containerShadowBlur,
      containerShadowHorizontal,
      containerShadowVertical,
      containerShadowPosition,
      reverse,
    } = this.props.attributes;
    const hover = [
      {
        value: "vertical",
        label: __("Vertical"),
      },
      {
        value: "horizontal",
        label: __("Horizontal"),
      },
    ];
    const trigger = [
      {
        value: "hover",
        label: __("Hover"),
      },
      {
        value: "mouse-scroll",
        label: __("Mouse Scroll"),
      },
    ];
    const classVertical = `${
      effectDir === "vertical" && hoverEffect === "mouse-scroll"
        ? "premium-img-scroll-ver "
        : ""
    }`;
    const reverseClasses = `${
      reverse && effectDir === "vertical"
        ? "premium-container-scroll-instant"
        : ""
    }`;
    const classHorizontal = `${
      effectDir === "horizontal" && hoverEffect === "hover"
        ? "img-scroll-horizontal "
        : ""
    }`;
    const containerClasses = `${
      hoverEffect === "mouse-scroll" ? "premium-container-scroll" : ""
    }`;
    const overlayClasses = `${
      targetOverlay &&
      hoverEffect === "mouse-scroll" &&
      effectDir === "horizontal"
        ? "premium-img-scroll-horizontal-overlay"
        : ""
    }`;
    const onFileSelect = (img) => {
      setAttributes({
        imageURL: img.url,
        imageID: img.id,
        imageHeight: img.height,
        imageWidth: img.width,
        imageAlt: img.alt,
      });
    };
    const startTransform = () => {
      imageScroll.style.cssText = `
	transform:${
    effectDir === "vertical" ? "translateY" : "translateX"
  }(-${transformOffset}px);`;
    };
    const endTransform = () => {
      imageScroll.style.cssText = `transform:${
        effectDir === "vertical" ? "translateY" : "translateX"
      }(0px);`;
    };
    const setTransform = () => {
      if ("vertical" === effectDir) {
        transformOffset = imageScroll.clientHeight - scrollElement.clientHeight;
      } else {
        if ("hover" === hoverEffect) {
          transformOffset = imageScroll.clientWidth - scrollElement.clientWidth;
        }
      }
      if ("mouse-scroll" === hoverEffect) {
        transformOffset = null;
      }
    };

    const mouseenter = () => {
      scrollElement = document.getElementById(`premium-scroll-${blockID}`);
      imageScroll = scrollElement.querySelector(".premium-img-scroll");
      scrollOverlay = scrollElement.querySelector(
        ".premium-img-scroll-overlay"
      );

      setTransform();
      reverse ? endTransform() : startTransform();
    };

    const mouseleave = () => {
      reverse ? startTransform() : endTransform();
    };
    const onChangeHeight = (newHeight) => {
      if ("em" === HeightU && newHeight > 50) return 50;

      setAttributes({ height: newHeight });
    };
    return [
      isSelected && (
        <InspectorControls>
          <PanelBody
            title={__("Image Settings")}
            className="premium-panel-body"
            initialOpen={true}
          >
            {imageURL && <img src={imageURL} />}
            <MediaUpload
              onSelect={onFileSelect}
              value={imageID}
              render={({ open }) => (
                <IconButton
                  className="premium-media-uplpad-btn"
                  label={__("Change Image")}
                  icon="edit"
                  onClick={open}
                >
                  {__("Change Image")}
                </IconButton>
              )}
            />
            <PremiumSizeUnits
              units={["px", "em"]}
              onChangeSizeUnit={(newValue) => {
                setAttributes({ HeightU: newValue });
              }}
            />
            <RangeControl
              label={__("Height")}
              value={height}
              onChange={onChangeHeight}
              max={HeightU === "em" ? 50 : 800}
            />
            <ToggleControl
              label={__("Link")}
              checked={urlCheck}
              onChange={(newCheck) => setAttributes({ urlCheck: newCheck })}
            />
            {urlCheck && (
              <TextControl
                label={__("URL")}
                value={url}
                onChange={(newURL) => setAttributes({ url: newURL })}
              />
            )}
            {urlCheck && (
              <ToggleControl
                label={__("Open link in new tab")}
                checked={target}
                onChange={(newValue) => setAttributes({ target: newValue })}
              />
            )}
          </PanelBody>
          <PanelBody
            title={__("Advanced Settings")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <SelectControl
              label={__("Direction")}
              options={hover}
              value={effectDir}
              onChange={(newEffect) => setAttributes({ effectDir: newEffect })}
            />

            <ToggleControl
              label={__("Reverse Direction")}
              checked={reverse}
              onChange={(value) => setAttributes({ reverse: value })}
            />

            <SelectControl
              label={__("Trigger")}
              options={trigger}
              value={hoverEffect}
              onChange={(newEffect) =>
                setAttributes({ hoverEffect: newEffect })
              }
            />
          </PanelBody>
          <PanelBody
            title={__("Image Style")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <ToggleControl
              label={__("Overlay")}
              checked={targetOverlay}
              onChange={(Overlay) => setAttributes({ targetOverlay: Overlay })}
            />
            {targetOverlay && (
              <ColorPalette
                value={background}
                onChange={(newValue) =>
                  setAttributes({
                    background:
                      newValue === undefined ? "transparent" : newValue,
                  })
                }
                allowReset={true}
              />
            )}
            <PremiumFilters
              blur={blur}
              bright={bright}
              contrast={contrast}
              saturation={saturation}
              hue={hue}
              onChangeBlur={(value) => setAttributes({ blur: value })}
              onChangeBright={(value) => setAttributes({ bright: value })}
              onChangeContrast={(value) => setAttributes({ contrast: value })}
              onChangeSat={(value) => setAttributes({ saturation: value })}
              onChangeHue={(value) => setAttributes({ hue: value })}
            />
          </PanelBody>
          <PanelBody
            title={__("Container Style")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <PremiumBorder
              borderType={borderType}
              borderWidth={borderWidth}
              borderColor={borderColor}
              borderRadius={borderRadius}
              onChangeType={(newType) => setAttributes({ borderType: newType })}
              onChangeWidth={(newWidth) =>
                setAttributes({
                  borderWidth: newWidth === undefined ? 0 : newWidth,
                })
              }
              onChangeColor={(colorValue) =>
                setAttributes({
                  borderColor:
                    colorValue === undefined ? "transparent" : colorValue.hex,
                })
              }
              onChangeRadius={(newRadius) =>
                setAttributes({
                  borderRadius: newRadius === undefined ? 0 : newRadius,
                })
              }
            />
            <PremiumBoxShadow
              inner={true}
              color={containerShadowColor}
              blur={containerShadowBlur}
              horizontal={containerShadowHorizontal}
              vertical={containerShadowVertical}
              position={containerShadowPosition}
              onChangeColor={(newColor) =>
                setAttributes({
                  containerShadowColor: newColor.hex,
                })
              }
              onChangeBlur={(newBlur) =>
                setAttributes({
                  containerShadowBlur: newBlur,
                })
              }
              onChangehHorizontal={(newValue) =>
                setAttributes({
                  containerShadowHorizontal: newValue,
                })
              }
              onChangeVertical={(newValue) =>
                setAttributes({
                  containerShadowVertical: newValue,
                })
              }
              onChangePosition={(newValue) =>
                setAttributes({
                  containerShadowPosition: newValue,
                })
              }
            />
          </PanelBody>
        </InspectorControls>
      ),
      <div
        className={`premium-img-scroll-container  ${containerClasses} `}
        style={{
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
          boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
        }}
        onMouseEnter={mouseenter}
        onMouseLeave={mouseleave}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `.premium-img-scroll-overlay{`,
              `background: ${background};`,
              "}",
              `.premium-img-scroll-horizontal-overlay{`,
              `   width:${imageWidth}px;`,
              "}",
              `#premium-img-scroll-${blockID} {`,
              `filter: brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
              "}",
            ].join("\n"),
          }}
        />
        {imageURL && (
          <div
            data-direction={effectDir}
            data-effect={hoverEffect}
            data-reverse={reverse}
            id={`premium-scroll-${blockID}`}
            className={` premium-img-scroll-wrap ${reverseClasses} `}
            style={{
              height: height + HeightU,
            }}
          >
            {urlCheck && "" !== url && (
              <a
                className="premium-img-scroll-link"
                target={`${target ? "_blank" : "_self"}`}
                href={url}
              ></a>
            )}
            <div
              className={` premium-img-scroll-${effectDir}  ${classHorizontal} ${classVertical} `}
            >
              {targetOverlay && (
                <div
                  className={`premium-img-scroll-overlay ${overlayClasses}`}
                ></div>
              )}
              <img
                id={`premium-img-scroll-${blockID}`}
                className={`premium-img-scroll`}
                alt={imageAlt}
                src={imageURL}
                width={imageWidth}
                height={imageHeight}
              />
            </div>
          </div>
        )}
      </div>,
    ];
  }
}

export default edit;
