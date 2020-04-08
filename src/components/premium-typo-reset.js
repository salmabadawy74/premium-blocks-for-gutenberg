import PremiumResponsive from "./premium-responsive"
import PremiumReset from "./premium-range-reset"
import PremiumSelectReset from './premium-select-reset'
import PremiumToggleReset from './premium-toggle-reset'

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const {
  RangeControl,
  Dropdown,
  Button
} = wp.components;

export default class PremiumTypoReset extends Component {

  constructor() {
    super(...arguments)
    this.onAdvancedControlReset = this.onAdvancedControlReset.bind(this)
  }

  onAdvancedControlReset() {

    const { setAttributes } = this.props
    // Reset Font Size to default.
    this.props.components.includes("responsiveSize") &&setAttributes({ [this.props.fontSize.label]: this.props.fontSize.default })
    this.props.components.includes("responsiveSize") &&setAttributes({ [this.props.fontSizeType.label]: this.props.fontSizeType.default })
    this.props.components.includes("responsiveSize") &&setAttributes({ [this.props.fontSizeMobile.label]:this.props.fontSizeMobile.default })
    this.props.components.includes("responsiveSize") &&setAttributes({ [this.props.fontSizeTablet.label]: this.props.fontSizeTablet.default })

    // Reset Line Height to default.
    this.props.components.includes("line") && setAttributes({ [this.props.lineHeight.label]: this.props.lineHeight.default })
    this.props.components.includes("line") && setAttributes({ [this.props.lineHeightType.label]: this.props.lineHeightType.default })
    this.props.components.includes("line") && setAttributes({ [this.props.lineHeightMobile.label]:this.props.lineHeightMobile.default })
    this.props.components.includes("line") && setAttributes({ [this.props.lineHeightTablet.label]: this.props.lineHeightTablet.default })

    this.props.components.includes("weight") &&setAttributes({ [this.props.weight.label]: this.props.weight.default })
    this.props.components.includes("spacing") &&setAttributes({ [this.props.spacing.label]: this.props.spacing.default })
    this.props.components.includes("style") &&setAttributes({ [this.props.style.label]: this.props.style.default })
    this.props.components.includes("upper") &&setAttributes({ [this.props.upper.label]: this.props.upper.default })

  }

  render() {
    const {
      components,
      size,
      onChangeSize = () => { },
    } = this.props;

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
                <PremiumReset
                    size={this.props.weight}
                    Label={this.props.weight.label}
                    Text={__("Font Weight")}
                    {...this.props}
                    min="100"
                    max="900"
                    step="100"
                />
              )}
              {components.includes("style") && (
                <PremiumSelectReset
                  size={this.props.style}
                  Label={this.props.style.label}
                  Text={__("Style")}
                  {...this.props}
                />
              )}
              {components.includes("upper") && (
                <PremiumToggleReset
                  size={this.props.upper}
                  Label={this.props.upper.label}
                  Text={__("Uppercase")}
                  {...this.props}
                />
              )}
              {components.includes("spacing") && (
                <PremiumReset
                  size={this.props.spacing}
                  Label={this.props.spacing.label}
                  Text={__("Letter Spacing (PX)")}
                  steps={0.1}
                  {...this.props}
                />
              )}
              {components.includes("line") && (
                <PremiumResponsive
                type={this.props.lineHeightType}
                typeLabel={this.props.lineHeightType.label}
                sizeMobile={this.props.lineHeightMobile}
                sizeMobileLabel={this.props.lineHeightMobile.label}
                sizeTablet={this.props.lineHeightTablet}
                sizeTabletLabel={this.props.lineHeightTablet.label}
                size={this.props.lineHeight}
                sizeLabel={this.props.lineHeight.label}
                sizeMobileText={(!this.props.lineHeightLabel) ? __("Line Height") : this.props.lineHeightLabel}
                sizeTabletText={(!this.props.lineHeightLabel) ? __("Line Height") : this.props.lineHeightLabel}
                sizeText={(!this.props.lineHeightLabel) ? __("Line Height") : this.props.lineHeightLabel}
                steps={0.1}
                {...this.props}
            />
              )}
            </Fragment>
          )}
        />
        <Button
          className="premium-control-reset-btn"
          isSmall
          aria-pressed={ ( this.state !== null ) }
          onClick={ this.onAdvancedControlReset }
        ><i className="premium-control-reset dashicons dashicons-image-rotate" /></Button>
      </div>
    );
  }
}
