const { ButtonGroup, Button } = wp.components;

export default function PremiumSizeUnits(props) {
  const { activeUnit, units, onChangeSizeUnit = (unit) => {} } = props;

  let sizeUnits = ["px", "em", "%"];

  if (undefined !== units) {
    sizeUnits = units;
  }

  return (
    <ButtonGroup className="premium-unit-control">
      {sizeUnits.map((unit, index) => {
        return (
          <Button
            isSmall
            isDefault
            className={
              "premium-unit-control-btn " +
              (unit === activeUnit && "premium-unit-control-active-btn")
            }
            onClick={() => onChangeSizeUnit(unit)}
          >
            {unit}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
