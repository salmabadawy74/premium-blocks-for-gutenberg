const { __ } = wp.i18n;
const { Fragment } = wp.element;
const {
  SelectControl,
  RangeControl,
  Dropdown,
  Button,
  ColorPicker
} = wp.components;

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
    <div className="premium-control-toggle">
      <strong>{__("Border")}</strong>
      <Dropdown
        className="premium-control-toggle-btn"
        contentClassName="premium-control-toggle-content"
        position="bottom right"
        renderToggle={({ isOpen, onToggle }) => (
          <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
            <i className="dashicons dashicons-edit" />
          </Button>
        )}
        renderContent={() => (
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
                <ColorPicker
                  color={borderColor}
                  onChangeComplete={onChangeColor}
                  disableAlpha
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
        )}
      />
    </div>
  );
}
