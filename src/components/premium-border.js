const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { SelectControl, RangeControl } = wp.components;
const { ColorPalette } = wp.editor;
export default function PremiumBorder(props) {
  const {
    borderType,
    borderWidth,
    borderColor,
    borderRadius,
    onChangeType = () => {},
    onChangeWidth = () => {},
    onChangeColor = () => {},
    onChangeRadius = () => {}
  } = props;
  const BORDER = [
    {
      value: "none",
      label: "None"
    },
    {
      value: "solid",
      label: "Solid"
    },
    {
      value: "double",
      label: "Double"
    },
    {
      value: "dotted",
      label: "Dotted"
    },
    {
      value: "dashed",
      label: "Dashed"
    },
    {
      value: "groove",
      label: "Groove"
    }
  ];
  return (
    <Fragment>
      <SelectControl
        label={__("Border Type")}
        options={BORDER}
        value={borderType}
        onChange={onChangeType}
      />
      {"none" != borderType && (
        <RangeControl
          label={__("Border Width")}
          value={borderWidth}
          min="0"
          max="50"
          onChange={onChangeWidth}
        />
      )}
      {"none" != borderType && (
        <Fragment>
          <p>{__("Border Color")}</p>
          <ColorPalette
            value={borderColor}
            onChange={onChangeColor}
            allowReset={true}
          />
        </Fragment>
      )}
      <RangeControl
        label={__("Border Radius")}
        value={borderRadius}
        min="0"
        max="150"
        onChange={onChangeRadius}
      />
    </Fragment>
  );
}
