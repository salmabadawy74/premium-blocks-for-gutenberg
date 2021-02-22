const { __ } = wp.i18n;
const { Fragment } = wp.element;
const {
  SelectControl,
  RangeControl,
  Dropdown,
  Button,
  ColorPicker,
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
    onChangeRadius = () => {},
  } = props;
  const BORDER = [
    {
      value: "none",
      label: "None",
    },
    {
      value: "solid",
      label: "Solid",
    },
    {
      value: "double",
      label: "Double",
    },
    {
      value: "dotted",
      label: "Dotted",
    },
    {
      value: "dashed",
      label: "Dashed",
    },
    {
      value: "groove",
      label: "Groove",
    },
  ];
  return (
    <div className="premium-control-toggle">
      <strong>{__("Border")}</strong>

      <Fragment>
        <SelectControl
          label={__("Border Type")}
          options={BORDER}
          value={borderType}
          onChange={onChangeType}
        />
        {"none" != borderType && (
          <div className={`premium-control-group`}>
            <div className="premium-control-label-container">
              <div className={`premium-control-label`}>
                <strong>{__("Border Width ")}</strong>
              </div>
            </div>
            <div className={`premium-controls-container`}>
              <div className={`premium-control-wrapper`}>
                <input
                  type="number"
                  name="top"
                  value={borderWidth}
                  onChange={onChangeWidth}
                />
                <label className={`premium-control-label`}>Top</label>
              </div>

              <div className={`premium-control-wrapper`}>
                <input
                  type="number"
                  name="right"
                  value={borderWidth}
                  onChange={onChangeWidth}
                />
                <label className={`premium-control-label`}>Right</label>
              </div>

              <div className={`premium-control-wrapper`}>
                <input
                  type="number"
                  name="bottom"
                  value={borderWidth}
                  onChange={onChangeWidth}
                />
                <label className={`premium-control-label`}>Bottom</label>
              </div>

              <div className={`premium-control-wrapper`}>
                <input
                  type="number"
                  name="left"
                  value={borderWidth}
                  onChange={onChangeWidth}
                />
                <label className={`premium-control-label`}>Left</label>
              </div>

              <div>
                <button
                  className={`linked-btn 
                                  }`}
                  onClick={onChangeWidth}
                />
              </div>
            </div>
          </div>
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
    </div>
  );
}
