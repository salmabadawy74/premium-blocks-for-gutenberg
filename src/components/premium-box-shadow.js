const { __ } = wp.i18n;
const { PanelBody, RangeControl, SelectControl } = wp.components;
const { PanelColorSettings } = wp.editor;
export default function PremiumBoxShadow(props) {
  const {
    inner,
    label,
    color,
    blur,
    horizontal,
    vertical,
    position,
    onChangeColor = () => {},
    onChangeBlur = () => {},
    onChangehHorizontal = () => {},
    onChangeVertical = () => {},
    onChangePosition = () => {}
  } = props;

  const POSITION = [
    {
      value: "inset",
      label: __("Inset")
    },
    {
      value: "",
      label: __("Outline")
    }
  ];

  return (
    <PanelBody
      title={__(label || "Box Shadow")}
      className={`premium-panel-body premium-panel-body-${inner && "inner"}`}
      initialOpen={false}
    >
      <PanelColorSettings
        title={__("Colors")}
        colorSettings={[
          {
            label: __("Color"),
            value: color,
            onChange: onChangeColor
          }
        ]}
      />
      <RangeControl
        label={__("Horizontal")}
        value={horizontal}
        onChange={onChangehHorizontal}
      />
      <RangeControl
        label={__("Vertical")}
        value={vertical}
        onChange={onChangeVertical}
      />
      <RangeControl label={__("Blur")} value={blur} onChange={onChangeBlur} />
      <SelectControl
        label={__("Position")}
        options={POSITION}
        value={position}
        onChange={onChangePosition}
      />
    </PanelBody>
  );
}
