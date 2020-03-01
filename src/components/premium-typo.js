import PremiumResponsive from "./premium-responsive"

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const {
  SelectControl,
  RangeControl,
  ToggleControl,
  Dropdown,
  Button
} = wp.components;

export default class PremiumTypo extends Component {

  constructor() {
    super(...arguments)
    this.onAdvancedControlReset = this.onAdvancedControlReset.bind(this)
  }

  onAdvancedControlReset() {

    const { setAttributes } = this.props
    // Reset Font Size to default.
    setAttributes({ [this.props.fontSize.label]: "" })
    setAttributes({ [this.props.fontSizeType.label]: "px" })
    setAttributes({ [this.props.fontSizeMobile.label]: "" })
    setAttributes({ [this.props.fontSizeTablet.label]: "" })
  }

  render() {
    const {
      components,
      size,
      weight,
      style,
      spacing,
      line,
      upper,
      onChangeSize = () => { },
      onChangeWeight = () => { },
      onChangeStyle = () => { },
      onChangeSpacing = () => { },
      onChangeLine = () => { },
      onChangeUpper = () => { }
    } = this.props;

    const STYLE = [
      {
        value: "normal",
        label: "Normal"
      },
      {
        value: "italic",
        label: "Italic"
      }
    ];

    return (
      <div className="premium-control-toggle">
        <strong>{__("Typography")}</strong>
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
              {components.includes("size") && (
                <RangeControl
                  label={__("Font Size (PX)")}
                  value={size}
                  min="10"
                  max="80"
                  onChange={onChangeSize}
                />
              )}
              {components.includes("responsiveSize") && (
                <PremiumResponsive
                type={this.props.fontSizeType}
                typeLabel={this.props.fontSizeType.label}
                sizeMobile={this.props.fontSizeMobile}
                sizeMobileLabel={this.props.fontSizeMobile.label}
                sizeTablet={this.props.fontSizeTablet}
                sizeTabletLabel={this.props.fontSizeTablet.label}
                size={this.props.fontSize}
                sizeLabel={this.props.fontSize.label}
                sizeMobileText={(!this.props.fontSizeLabel) ? __("Font Size") : this.props.fontSizeLabel}
                sizeTabletText={(!this.props.fontSizeLabel) ? __("Font Size") : this.props.fontSizeLabel}
                sizeText={(!this.props.fontSizeLabel) ? __("Font Size") : this.props.fontSizeLabel}
                steps={0.1}
                {...this.props}
            />
              )}
              {components.includes("weight") && (
                <RangeControl
                  label={__("Font Weight")}
                  min="100"
                  max="900"
                  step="100"
                  value={weight}
                  onChange={onChangeWeight}
                />
              )}
              {components.includes("style") && (
                <SelectControl
                  label={__("Style")}
                  options={STYLE}
                  value={style}
                  onChange={onChangeStyle}
                />
              )}
              {components.includes("upper") && (
                <ToggleControl
                  label={__("Uppercase")}
                  checked={upper}
                  onChange={onChangeUpper}
                />
              )}
              {components.includes("spacing") && (
                <RangeControl
                  label={__("Letter Spacing (PX)")}
                  value={spacing}
                  onChange={onChangeSpacing}
                />
              )}
              {components.includes("line") && (
                <RangeControl
                  label={__("Line Height (PX)")}
                  value={line}
                  onChange={onChangeLine}
                />
              )}
            </Fragment>
          )}
        />
      </div>
    );
  }
}
