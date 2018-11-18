const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { RangeControl } = wp.components;

export default function PremiumPadding(props) {
  const {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    onChangePadTop = () => {},
    onChangePadRight = () => {},
    onChangePadBottom = () => {},
    onChangePadLeft = () => {}
  } = props;
  return (
    <Fragment>
      <RangeControl
        label={__("Padding Top (PX)")}
        value={paddingTop}
        min="0"
        max="150"
        onChange={onChangePadTop}
      />
      <RangeControl
        label={__("Padding Right (PX)")}
        value={paddingRight}
        min="0"
        max="150"
        onChange={onChangePadRight}
      />
      <RangeControl
        label={__("Padding Bottom (PX)")}
        value={paddingBottom}
        min="0"
        max="150"
        onChange={onChangePadBottom}
      />
      <RangeControl
        label={__("Padding Left (PX)")}
        value={paddingLeft}
        min="0"
        max="150"
        onChange={onChangePadLeft}
      />
    </Fragment>
  );
}
