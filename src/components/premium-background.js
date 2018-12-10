const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { SelectControl, IconButton, ToggleControl } = wp.components;
const { MediaUpload } = wp.editor;

export default function PremiumBackground(props) {
  const {
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
    onChangeFixed = () => {}
  } = props;

  const POSITION = [
    {
      value: "top left",
      label: __("Top Left")
    },
    {
      value: "top center",
      label: __("Top Center")
    },
    {
      value: "top right",
      label: __("Top Right")
    },
    {
      value: "center left",
      label: __("Center Left")
    },
    {
      value: "center center",
      label: __("Center Center")
    },
    {
      value: "center right",
      label: __("Center Right")
    },
    {
      value: "bottom left",
      label: __("Bottom Left")
    },
    {
      value: "bottom center",
      label: __("Bottom Center")
    },
    {
      value: "bottom right",
      label: __("Bottom Right")
    }
  ];
  const REPEAT = [
    {
      value: "no-repeat",
      label: __("No Repeat")
    },
    {
      value: "repeat",
      label: __("Repeat")
    },
    {
      value: "repeat-x",
      label: __("Repeat Horizontally")
    },
    {
      value: "repeat-y",
      label: __("Repeat Vertically")
    }
  ];
  const SIZE = [
    {
      value: "auto",
      label: __("Auto")
    },
    {
      value: "cover",
      label: __("Cover")
    },
    {
      value: "contain",
      label: __("Contain")
    }
  ];
  return (
    <Fragment>
      <MediaUpload
        allowedTypes={["image"]}
        onSelect={onSelectMedia}
        type="image"
        value={imageID}
        render={({ open }) => (
          <Fragment>
            {!imageURL && (
              <IconButton label={__("Change Image")} icon="edit" onClick={open}>
                {__("Change Image")}
              </IconButton>
            )}
            {imageURL && (
              <IconButton
                label={__("Remove Image")}
                icon="no"
                onClick={onRemoveImage}
              >
                {__("Remove Image")}
              </IconButton>
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
