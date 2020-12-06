import PremiumBorder from "../../components/premium-border";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";

const { __ } = wp.i18n;

const { Fragment } = wp.element;

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
  const { isSelected, setAttributes, className, clientId: blockID } = props;
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
    verAlign,
  } = props.attributes;

  const HOVER = [
    {
      value: "Vertical",
      label: __("Vertical"),
    },
    {
      value: "Horizontal",
      label: __("Horizontal"),
    },
  ];
  const TRIGGER = [
    {
      value: "Hover",
      label: __("Hover"),
    },
    {
      value: "Mouse Scroll",
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
    });
  };
  const onChangeDirection = (newDir) => {
    HOVER.value === "Vertical"
      ? (newDir = "Horizontal")
      : (newDir = "Vertical");
    setAttributes({ effectDir: newDir });
  };

  return [
    <InspectorControls style={{ marginBottom: "40px" }}>
      <PanelBody>
        <p>
          <strong>Image Setting</strong>
        </p>
        {imageURL && <img src={imageURL} width="100%" height="auto" />}
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
          <strong>Advance Setting</strong>
        </p>
        <SelectControl
          label={__("Direction")}
          options={HOVER}
          value={effectDir}
          onChange={(newEffect) => setAttributes({ effectDir: newEffect })}
        />
        <ToggleControl
          label={__("Reverse Direction")}
          checked={target}
          onChange={onChangeDirection}
        />
        <SelectControl
          label={__("Image Hover Effect")}
          options={TRIGGER}
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
    </InspectorControls>,
    <div
      className=".premium-image-scroll-overlay"
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        backgroundColor: `${background}`,
      }}
    ></div>,
    <div
      id={`premium-scroll-${id}`}
      className={`premium-image-scroll-section`}
      style={{
        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
      }}
    >
      <div
        className={`premium-image-scroll-container`}
        style={{
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
          minHeight: minHeight,
        }}
      >
        <div
          className={` premium-image-scroll-${effectDir}  `}
          style={{
            alignItems: verAlign,
            height: height,
          }}
        >
          <img
            className={`premium-scroll__img`}
            alt="scroll Image"
            src={imageURL}
            style={{
              filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
            }}
          />
        </div>
      </div>
    </div>,
  ];
}

export default edit;
