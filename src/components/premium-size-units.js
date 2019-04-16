const { ButtonGroup, Button } = wp.components;

export default function PremiumSizeUnits(props) {
  const { onChangeSizeUnit = unit => {} } = props;
  return (
    <ButtonGroup className="premium-unit-control">
      {["px", "em", "%"].map((unit, index) => (
        <Button
          isSmall
          isDefault
          className="premium-unit-control-btn"
          onClick={() => onChangeSizeUnit(unit)}
        >
          {unit}
        </Button>
      ))}
    </ButtonGroup>
  );
}
