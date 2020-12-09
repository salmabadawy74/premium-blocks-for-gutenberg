import PremiumBorder from "../../components/premium-border";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";

const { __ } = wp.i18n;

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

function edit(props) {
  const { setAttributes, isSelected, clientId: blockID } = props;
  const {
    id,

    imageURL,
    imageID,
    imageHeight,
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
    width,
    imageWidth,
  } = props.attributes;

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
  const ALIGNS = [
    {
      value: "flex-start",
      label: __("Top"),
    },
    {
      value: "center",
      label: __("Middle"),
    },
    {
      value: "flex-end",
      label: __("Bottom"),
    },
    {
      value: "inherit",
      label: __("Full"),
    },
  ];

  const onFileSelect = (img) => {
    setAttributes({
      imageURL: img.url,
      imageID: img.id,
      imageHeight: img.height,
      imageWidth: img.width,
    });
  };

  const onChangeDirection = (newDir) => {
    effectDir === "vertical" ? (newDir = "horizontal") : (newDir = "vertical");
    setAttributes({ effectDir: newDir, reverse: !reverse });
  };
  var transformOffset = imageHeight - height;

  const setTransform = (e) => {
    var imageitem = e.target;
    if (effectDir === "vertical" && hoverEffect === "hover") {
      console.log(imageitem.clientHeight - height);
      var transformOffset = imageitem.clientHeight - height;
      console.log(transformOffset);

      imageitem.style.cssText = `transform:translateY(-${transformOffset}px);`;
    } else if (effectDir === "horizontal" && hoverEffect === "hover") {
      var transformOffset = 479 - imageitem.clientWidth;
      imageitem.style.cssText = `transform:translateX(${transformOffset}px);`;
    }
  };
  const endTransform = (e) => {
    const scrollElement = document.querySelector(
      ".premium-image-scroll-container"
    );
    const scrollOverlay = document.querySelector(
      ".premium-image-scroll-overlay"
    );
    var imageitem = e.target;
    if (effectDir === "vertical" && hoverEffect === "hover") {
      var imageitem = e.target;
      imageitem.style.cssText = `transform:translateY(0px);`;
    } else if (effectDir === "horizontal" && hoverEffect === "hover") {
      var transformOffset = 479 - imageitem.clientWidth;
      imageitem.style.cssText = `transform:translateX(0px);`;
    }
    console.log(imageitem.clientWidth);
  };

  return [
    isSelected && (
      <InspectorControls style={{ marginBottom: "40px" }} key="setting">
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
            onChange={onChangeDirection}
          />

          <SelectControl
            label={__("Trigger")}
            options={trigger}
            value={hoverEffect}
            onChange={(newEffect) => setAttributes({ hoverEffect: newEffect })}
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
                  background: newValue === undefined ? "transparent" : newValue,
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
          className={`premium-image-scroll-container  premium-image-${effectDir}-${hoverEffect}-container `}
          style={{
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            minHeight: minHeight,
            height: height,
          }}
        >
          <div
            className={`premium-image-scroll-${effectDir} premium-image-scroll-${effectDir}`}
          >
            <div
              className="premium-image-scroll-overlay"
              style={{ backgroundColor: background }}
            ></div>
            <img
              alt="scroll Image"
              src={imageURL}
              style={{
                filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
              }}
              onMouseEnter={(e) => setTransform(e)}
              onMouseLeave={(e) => endTransform(e)}
            />
          </div>
        </div>
      )}
    </div>,
  ];
}

export default edit;
