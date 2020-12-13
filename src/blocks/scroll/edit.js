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
let scrollElement, scrollOverlay, scrollVertical, imageScroll;
let transformOffset = null;

class edit extends Component {

  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    const { attributes, setAttributes, clientId } = this.props;
    setAttributes({ id: clientId });

    console.log(clientId);
  }

  componentDidUpdate() {
    setImmediate(() => {

      scrollElement = document.getElementById(`${this.props.clientId}`);

      scrollOverlay = scrollElement.querySelector(
        ".premium-image-scroll-overlay"
      );
      scrollVertical = scrollElement.querySelector(
        ".premium-image-scroll-vertical"
      );
      imageScroll = scrollElement.querySelector(".image-scroll");
    }, 10);
  }

  render() {
    const {
      setAttributes,
      attributes,
      isSelected,
      clientId: blockID,
    } = this.props;
    const {
      id,

      imageURL,
      imageID,

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
    } = attributes;

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
        value: "mouse",
        label: __("Mouse Scroll"),
      },
    ];

    const classVertical = `${
      effectDir === "vertical" && hoverEffect === "mouse"
        ? "premium-image-scroll-ver "
        : ""
    }`;

    const reverseClasses = `${
      reverse && effectDir === "vertical"
        ? "premium-container-scroll-instant"
        : ""
    }`;

    const classHorizontal = `${
      effectDir === "horizontal" && hoverEffect === "hover"
        ? "image-scroll-horizontal "
        : ""
    }`;
    
    const contrainerClasses = `${
      hoverEffect === "mouse" ? "premium-container-scroll" : ""
    }`;

    const onFileSelect = (img) => {
      setAttributes({
        imageURL: img.url,
        imageID: img.id,
        imageHeight: img.height,
        imageWidth: img.width,
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
      if (hoverEffect === "mouse") {
        transformOffset = null;
      }
    };

    const mouseenter = () => {
      // if (effectDir === "vertical" && hoverEffect === "hover") {
      //   transformOffset = imageScroll.clientHeight - scrollElement.clientHeight;
      //   imageScroll.style.cssText = `transform:translateY(-${transformOffset}px);`;
      // } else if (effectDir === "horizontal" && hoverEffect === "hover") {
      //   transformOffset = scrollElement.clientWidth - imageScroll.clientWidth;
      //   imageScroll.style.cssText = `transform:translateX(${transformOffset}px);`;
      // }

      setTransform();
      reverse ? endTransform() : startTransform();
    };

    const mouserleave = () => {
      // if (effectDir === "vertical" && hoverEffect === "hover") {
      //   imageScroll.style.cssText = `transform:translateY(0px);`;
      // } else if (effectDir === "horizontal" && hoverEffect === "hover") {
      //   imageScroll.style.cssText = `transform:translateX(0px);`;
      // }
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
        id={`premium-scroll-${id}`}
        className={`premium-image-scroll-section`}
        style={{
          boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
        }}
      >
        {imageURL && (
          <div
            id={this.props.clientId}
            className={` premium-image-scroll-container  ${contrainerClasses} ${reverseClasses} `}
            style={{
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor,
              minHeight: minHeight,
              height: height,
            }}
            onMouseEnter={mouseenter}
            onMouseLeave={mouserleave}
          >
            {urlCheck && (
              <a
                className="premium-image-scroll-link"
                target={`${target ? "_blank" : "_self"}`}
                href={url}
              ></a>
            )}
            <div
              className={` premium-image-scroll-${effectDir}  ${classHorizontal} ${classVertical} `}
            >
              {targetOverlay && (
                <div
                  className="premium-image-scroll-overlay"
                  style={{ backgroundColor: background }}
                ></div>
              )}
              <img
                className={`image-scroll`}
                alt="scroll Image"
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
