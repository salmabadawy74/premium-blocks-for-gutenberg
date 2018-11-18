const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { RangeControl } = wp.components;
export default function PremiumMargin(props) {
  const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    onChangeMarTop = () => {},
    onChangeMarRight = () => {},
    onChangeMarBottom = () => {},
    onChangeMarLeft = () => {}
  } = props;
  return (
    <Fragment>
      <RangeControl
        label={__("Margin Top (PX)")}
        value={marginTop}
        min="0"
        max="150"
        onChange={onChangeMarTop}
      />
      <RangeControl
        label={__("Margin Right (PX)")}
        value={marginRight}
        min="0"
        max="150"
        onChange={onChangeMarRight}
      />
      <RangeControl
        label={__("Margin Bottom (PX)")}
        value={marginBottom}
        min="0"
        max="150"
        onChange={onChangeMarBottom}
      />
      <RangeControl
        label={__("Margin Left (PX)")}
        value={marginLeft}
        min="0"
        max="150"
        onChange={onChangeMarLeft}
      />
    </Fragment>
  );
}
