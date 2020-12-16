import PremiumBorder from "../../components/premium-border";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";

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

const {
  InspectorControls,

  ColorPalette,

  MediaUpload,
} = wp.editor;
let scrollElement, imageScroll;
let transformOffset = null;

class edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    const { setAttributes, clientId } = this.props;
    setAttributes({ blockID: clientId });

    console.log(clientId);
  }

  componentDidUpdate() {
    setImmediate(() => {
      scrollElement = document.querySelector(
        `.premium-scroll-${this.props.clientId}`
      );

      imageScroll = scrollElement.querySelector(".premium-img-scroll");
    }, 10);
  }

  render() {
    const {
      setAttributes,

      isSelected,
      clientId: blockID,
    } = this.props;
    const {
      imageURL,
      imageID,
      imageAlt,
      url,
      target,
      urlCheck,
      height,
      minHeight,
      effectDir,

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
        }(${transformOffset}px);`;
    };

    const endTransform = () => {
      imageScroll.style.cssText = `transform:${
        effectDir === "vertical" ? "translateY" : "translateX"
      }(0px);`;
    };

    const setTransform = () => {
      if (effectDir === "vertical" && hoverEffect === "hover") {
        transformOffset = scrollElement.clientHeight - imageScroll.clientHeight;
      } else if (effectDir === "horizontal" && hoverEffect === "hover") {
        transformOffset = scrollElement.clientWidth - imageScroll.clientWidth;
      }
      if (hoverEffect === "mouse-scroll") {
        transformOffset = null;
      }
    };

    const mouseenter = () => {
      scrollElement = document.getElementById(`premium-scroll-${blockID}`);
      imageScroll = scrollElement.querySelector(".premium-img-scroll");

      setTransform();
      reverse ? endTransform() : startTransform();
    };

    const mouseleave = () => {
      reverse ? startTransform() : endTransform();
    };

    return [
      isSelected && (
        <InspectorControls style={{ marginBottom: "40px" }}>
          <PanelBody>
            <p>
              <strong>Image Setting</strong>
            </p>
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
            <RangeControl
              label="Height"
              value={minHeight}
              onChange={(newHeight) => {
                setAttributes({ height: newHeight });
              }}
              min={200}
              max={800}
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
          <PanelBody>
            <p>
              <strong>Advanced Setting</strong>
            </p>
            <SelectControl
              label={__("Direction")}
              options={hover}
              value={effectDir}
              onChange={(newEffect) => setAttributes({ effectDir: newEffect })}
            />

            <ToggleControl
              label={__("Reverse")}
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
          </PanelBody>

          <PanelBody>
            <p>
              <strong>Image Style</strong>
            </p>
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
          <PanelBody>
            <p>
              <strong>Container Style</strong>
            </p>
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
        id={`premium-scroll-${blockID}`}
        data-direction={effectDir}
        data-effect={hoverEffect}
        data-reverse={reverse}
        className={`premium-img-scroll-container premium-scroll-${this.props.clientId}`}
        style={{
          height: height,
          boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
        }}
        onMouseEnter={mouseenter}
        onMouseLeave={mouseleave}
      >
        {imageURL && (
          <div
            className={` premium-img-scroll-wrap } ${containerClasses} ${reverseClasses} `}
            style={{
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor,
              minHeight: minHeight,
              height: height,
            }}
          >
            {urlCheck && (
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
                  className="premium-img-scroll-overlay"
                  style={{ backgroundColor: background }}
                ></div>
              )}
              <img
                className={`premium-img-scroll`}
                alt={imageAlt}
                src={imageURL}
                style={{
                  filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                }}
              />
            </div>
          </div>
        )}
      </div>,
    ];
  }
}

export default edit;
