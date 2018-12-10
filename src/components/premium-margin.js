const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { RangeControl } = wp.components;
export default function PremiumMargin(props) {
  const {
    directions,
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
      {(directions.includes("all") || directions.includes("top")) && (
        <RangeControl
          label={__("Margin Top (PX)")}
          value={marginTop}
          min="0"
          max="150"
          onChange={onChangeMarTop}
        />
      )}
      {(directions.includes("all") || directions.includes("right")) && (
        <RangeControl
          label={__("Margin Right (PX)")}
          value={marginRight}
          min="0"
          max="150"
          onChange={onChangeMarRight}
        />
      )}
      {(directions.includes("all") || directions.includes("bottom")) && (
        <RangeControl
          label={__("Margin Bottom (PX)")}
          value={marginBottom}
          min="0"
          max="150"
          onChange={onChangeMarBottom}
        />
      )}
      {(directions.includes("all") || directions.includes("left")) && (
        <RangeControl
          label={__("Margin Left (PX)")}
          value={marginLeft}
          min="0"
          max="150"
          onChange={onChangeMarLeft}
        />
      )}
    </Fragment>
  );
}
