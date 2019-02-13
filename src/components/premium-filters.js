const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { RangeControl } = wp.components;

export default function PremiumFilters(props) {
  const {
    blur,
    bright,
    contrast,
    saturation,
    hue,
    onChangeBlur = () => {},
    onChangeBright = () => {},
    onChangeContrast = () => {},
    onChangeSat = () => {},
    onChangeHue = () => {}
  } = props;

  return (
    <Fragment>
      <RangeControl
        label={__("Blur")}
        min="0"
        max="10"
        step="0.1"
        initialPosition={"0"}
        value={blur}
        onChange={onChangeBlur}
        allowReset={true}
      />
      <RangeControl
        label={__("Brightness")}
        min="0"
        max="200"
        initialPosition={100}
        value={bright}
        onChange={onChangeBright}
        allowReset={true}
      />
      <RangeControl
        label={__("Contrast")}
        min="0"
        max="200"
        initialPosition={100}
        value={contrast}
        onChange={onChangeContrast}
        allowReset={true}
      />
      <RangeControl
        label={__("Saturation")}
        min="0"
        max="200"
        initialPosition={100}
        value={saturation}
        onChange={onChangeSat}
        allowReset={true}
      />
      <RangeControl
        label={__("Hue")}
        min="0"
        max="360"
        initialPosition={"0"}
        value={hue}
        onChange={onChangeHue}
        allowReset={true}
      />
    </Fragment>
  );
}
