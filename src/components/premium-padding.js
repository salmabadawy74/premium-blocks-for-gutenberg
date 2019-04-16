import PremiumSizeUnits from "./premium-size-units";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { RangeControl, Dropdown, Button } = wp.components;

export default function PremiumPadding(props) {
  const {
    showUnits,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    onChangePadTop = () => {},
    onChangePadRight = () => {},
    onChangePadBottom = () => {},
    onChangePadLeft = () => {},
    onChangePadSizeUnit = () => {}
  } = props;
  return (
    <div className="premium-control-toggle">
      <strong>{__("Padding")}</strong>
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
            {showUnits && (
              <PremiumSizeUnits onChangeSizeUnit={onChangePadSizeUnit} />
            )}
            <RangeControl
              label={__("Padding Top")}
              value={paddingTop}
              min="0"
              max="150"
              onChange={onChangePadTop}
            />
            <RangeControl
              label={__("Padding Right")}
              value={paddingRight}
              min="0"
              max="150"
              onChange={onChangePadRight}
            />
            <RangeControl
              label={__("Padding Bottom")}
              value={paddingBottom}
              min="0"
              max="150"
              onChange={onChangePadBottom}
            />
            <RangeControl
              label={__("Padding Left")}
              value={paddingLeft}
              min="0"
              max="150"
              onChange={onChangePadLeft}
            />
          </Fragment>
        )}
      />
    </div>
  );
}
