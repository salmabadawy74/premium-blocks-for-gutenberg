const { __ } = wp.i18n;
const { PanelBody, RangeControl } = wp.components;
const { Fragment } = wp.element;
const { ColorPalette } = wp.editor;
export default function PremiumTextShadow(props) {
  const {
    label,
    color,
    blur,
    horizontal,
    vertical,
    onChangeColor = () => {},
    onChangeBlur = () => {},
    onChangehHorizontal = () => {},
    onChangeVertical = () => {}
  } = props;

  return (
    <PanelBody
      title={__(label || "Text Shadow")}
      className="premium-panel-body premium-panel-body-inner"
      initialOpen={false}
    >
      <Fragment>
        <p>{__("Shadow Color")}</p>
        <ColorPalette
          value={color}
          onChange={onChangeColor}
          allowReset={true}
        />
      </Fragment>
      <RangeControl label={__("Blur")} value={blur} onChange={onChangeBlur} />
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
    </PanelBody>
  );
}
