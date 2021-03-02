const { __ } = wp.i18n;
const { Fragment } = wp.element;
const {
  SelectControl,
  ToggleControl,
  Tooltip,
  Dashicon,
  RangeControl,
} = wp.components;
const { MediaUpload, ColorPalette } = wp.blockEditor;

export default function PremiumBackground(props) {
  const hexToRgb = (colorValue) => {
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/gi.test(colorValue)) {
      var hex = colorValue.substr(1);
      hex = hex.length == 3 ? hex.replace(/(.)/g, "$1$1") : hex;
      let rgb = parseInt(hex, 16);
      let colorRGB = [(rgb >> 16) & 255, (rgb >> 8) & 255, rgb & 255].join(",");
      props.onChangeColor(colorRGB);
    }
    return false;
  };

  const {
    type,
    colorValue,
    opacityValue,
    onChangeOpacity = () => {},
    imageID,
    imageURL,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    fixed,
    onSelectMedia = () => {},
    onRemoveImage = () => {},
    onChangeBackPos = () => {},
    onchangeBackRepeat = () => {},
    onChangeBackSize = () => {},
    onChangeFixed = () => {},
  } = props;

  const POSITION = [
    {
      value: "top left",
      label: __("Top Left"),
    },
    {
      value: "top center",
      label: __("Top Center"),
    },
    {
      value: "top right",
      label: __("Top Right"),
    },
    {
      value: "center left",
      label: __("Center Left"),
    },
    {
      value: "center center",
      label: __("Center Center"),
    },
    {
      value: "center right",
      label: __("Center Right"),
    },
    {
      value: "bottom left",
      label: __("Bottom Left"),
    },
    {
      value: "bottom center",
      label: __("Bottom Center"),
    },
    {
      value: "bottom right",
      label: __("Bottom Right"),
    },
  ];
  const REPEAT = [
    {
      value: "no-repeat",
      label: __("No Repeat"),
    },
    {
      value: "repeat",
      label: __("Repeat"),
    },
    {
      value: "repeat-x",
      label: __("Repeat Horizontally"),
    },
    {
      value: "repeat-y",
      label: __("Repeat Vertically"),
    },
  ];
  const SIZE = [
    {
      value: "auto",
      label: __("Auto"),
    },
    {
      value: "cover",
      label: __("Cover"),
    },
    {
      value: "contain",
      label: __("Contain"),
    },
  ];
  return type === "color" ? (
    <Fragment>
      <ColorPalette value={colorValue} onChange={hexToRgb} allowReset={true} />
      <RangeControl
        label={__(`Background Opacity`)}
        value={opacityValue}
        onChange={onChangeOpacity}
        max={1}
        min={0}
        step={0.1}
      />
    </Fragment>
  ) : (
    <Fragment>
      <MediaUpload
        allowedTypes={["image"]}
        onSelect={onSelectMedia}
        type="image"
        value={imageID}
        render={({ open }) => (
          <Fragment>
            {imageURL && (
              <span className="premium-image-media">
                <img src={imageURL} className="premium-image-upload" />
                <div className="premium-image-actions">
                  <Tooltip text={__("Edit")}>
                    <button
                      className="premium-image-button"
                      aria-label={__("Edit")}
                      onClick={open}
                      role="button"
                    >
                      <span aria-label={__("Edit")} className="fa fa-pencil" />
                    </button>
                  </Tooltip>
                  <Tooltip text={__("Remove")}>
                    <button
                      className="premium-image-button"
                      aria-label={__("Remove")}
                      onClick={onRemoveImage}
                      role="button"
                    >
                      <span
                        aria-label={__("Close")}
                        className="fa fa-trash-o"
                      />
                    </button>
                  </Tooltip>
                </div>
              </span>
            )}
            {!imageURL && (
              <div onClick={open} className={"premium-placeholder-image"}>
                <Dashicon icon="insert" />
                <span>{__("Insert Background ")}</span>
              </div>
            )}
          </Fragment>
        )}
      />
      {imageURL && (
        <Fragment>
          <SelectControl
            label={__("Position")}
            options={POSITION}
            value={backgroundPosition}
            onChange={onChangeBackPos}
          />
          <SelectControl
            label={__("Repeat")}
            options={REPEAT}
            value={backgroundRepeat}
            onChange={onchangeBackRepeat}
          />
          <SelectControl
            label={__("Size")}
            options={SIZE}
            value={backgroundSize}
            onChange={onChangeBackSize}
          />
          <ToggleControl
            label={__("Fixed Background")}
            checked={fixed}
            onChange={onChangeFixed}
          />
        </Fragment>
      )}
    </Fragment>
  );
}
