const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { RangeControl, Dropdown, Button } = wp.components;

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
    onChangeHue = () => {},
    onResetClick = () => {}
  } = props;

  return (
    <div className="premium-control-toggle">
      <strong>{__("CSS Filters")}</strong>
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
            <RangeControl
              label={__("Blur")}
              min="0"
              max="10"
              step="0.1"
              initialPosition={"0"}
              value={blur}
              onChange={onChangeBlur}
              allowReset={true}
              onResetClick={onResetClick}
            />
            <RangeControl
              label={__("Brightness")}
              min="0"
              max="200"
              initialPosition={100}
              value={bright}
              onChange={onChangeBright}
              allowReset={true}
              onResetClick={onResetClick}
            />
            <RangeControl
              label={__("Contrast")}
              min="0"
              max="200"
              initialPosition={100}
              value={contrast}
              onChange={onChangeContrast}
              allowReset={true}
              onResetClick={onResetClick}
            />
            <RangeControl
              label={__("Saturation")}
              min="0"
              max="200"
              initialPosition={100}
              value={saturation}
              onChange={onChangeSat}
              allowReset={true}
              onResetClick={onResetClick}
            />
            <RangeControl
              label={__("Hue")}
              min="0"
              max="360"
              initialPosition={"0"}
              value={hue}
              onChange={onChangeHue}
              allowReset={true}
              onResetClick={onResetClick}
            />
          </Fragment>
        )}
      />
      <Button
          className="premium-control-toggle-btn"
          contentClassName="premium-control-toggle-content"
          isSmall
          onClick={onResetClick}
        ><i className="premium-control-reset dashicons dashicons-image-rotate" /></Button>
    </div>
  );
}
