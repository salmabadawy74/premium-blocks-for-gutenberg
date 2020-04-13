import PremiumSizeUnits from "./premium-size-units";
import PremiumResponsive from "./premium-responsive"

const { __ } = wp.i18n;
const {
  Fragment,
  Component
} = wp.element;
const { RangeControl, Dropdown, Button } = wp.components;

export default class PremiumMarginResponsive extends Component {

  constructor() {
    super(...arguments)
  }

  render() {
    const {
      directions,
      showUnits,
      onChangeMarSizeUnit = () => { },
      onResetClick = () => {}
    } = this.props;
    return (
      <div className="premium-control-toggle">
        <strong>{__("Margin")}</strong>
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
                <PremiumSizeUnits onChangeSizeUnit={onChangeMarSizeUnit} />
              )}
              {(directions.includes("all") || directions.includes("top")) && (
                <PremiumResponsive
                  type={this.props.marginTopType}
                  typeLabel={this.props.marginTopType.label}
                  sizeMobile={this.props.marginTopMobile}
                  sizeMobileLabel={this.props.marginTopMobile.label}
                  sizeTablet={this.props.marginTopTablet}
                  sizeTabletLabel={this.props.marginTopTablet.label}
                  size={this.props.marginTop}
                  sizeLabel={this.props.marginTop.label}
                  sizeMobileText={
                    (!this.props.marginTopLabel) ? __("Margin Top") : this.props.marginTopLabel
                  }
                  sizeTabletText={
                    (!this.props.marginTopLabel) ? __("Margin Top") : this.props.marginTopLabel
                  }
                  sizeText={
                    (!this.props.marginTopLabel) ? __("Margin Top") : this.props.marginTopLabel
                  }
                  onResetClick={onResetClick}
                  steps={0.1}
                  {...this.props}
                />
              )}
              {(directions.includes("all") || directions.includes("right")) && (
                <PremiumResponsive
                  type={this.props.marginRightType}
                  typeLabel={this.props.marginRightType.label}
                  sizeMobile={this.props.marginRightMobile}
                  sizeMobileLabel={this.props.marginRightMobile.label}
                  sizeTablet={this.props.marginRightTablet}
                  sizeTabletLabel={this.props.marginRightTablet.label}
                  size={this.props.marginRight}
                  sizeLabel={this.props.marginRight.label}
                  sizeMobileText={
                    (!this.props.marginRightLabel) ? __("Margin Right") : this.props.marginTRightLabel
                  }
                  sizeTabletText={
                    (!this.props.marginRightLabel) ? __("Margin Right") : this.props.marginRightLabel
                  }
                  sizeText={
                    (!this.props.marginRightLabel) ? __("Margin Right") : this.props.marginRightLabel
                  }
                  onResetClick={onResetClick}
                  steps={0.1}
                  {...this.props}
                />
              )}
              {(directions.includes("all") || directions.includes("bottom")) && (
                <PremiumResponsive
                  type={this.props.marginBottomType}
                  typeLabel={this.props.marginBottomType.label}
                  sizeMobile={this.props.marginBottomMobile}
                  sizeMobileLabel={this.props.marginBottomMobile.label}
                  sizeTablet={this.props.marginBottomTablet}
                  sizeTabletLabel={this.props.marginBottomTablet.label}
                  size={this.props.marginBottom}
                  sizeLabel={this.props.marginBottom.label}
                  sizeMobileText={
                    (!this.props.marginBottomLabel) ? __("Margin Bottom") : this.props.marginBottomLabel
                  }
                  sizeTabletText={
                    (!this.props.marginBottomLabel) ? __("Margin Bottom") : this.props.marginBottomLabel
                  }
                  sizeText={
                    (!this.props.marginBottomLabel) ? __("Margin Bottom") : this.props.marginBottomLabel
                  }
                  onResetClick={onResetClick}
                  steps={0.1}
                  {...this.props}
                />
              )}
              {(directions.includes("all") || directions.includes("left")) && (
                <PremiumResponsive
                  type={this.props.marginLeftType}
                  typeLabel={this.props.marginLeftType.label}
                  sizeMobile={this.props.marginLeftMobile}
                  sizeMobileLabel={this.props.marginLeftMobile.label}
                  sizeTablet={this.props.marginLeftTablet}
                  sizeTabletLabel={this.props.marginLeftTablet.label}
                  size={this.props.marginLeft}
                  sizeLabel={this.props.marginLeft.label}
                  sizeMobileText={
                    (!this.props.marginLeftLabel) ? __("Margin Left") : this.props.marginLeftLabel
                  }
                  sizeTabletText={
                    (!this.props.marginLeftLabel) ? __("Margin Left") : this.props.marginLeftLabel
                  }
                  sizeText={
                    (!this.props.marginLeftLabel) ? __("Margin Left") : this.props.marginLeftLabel
                  }
                  onResetClick={onResetClick}
                  steps={0.1}
                  {...this.props}
                />
              )}
            </Fragment>
          )}
        />
        <Button
          className="premium-control-toggle-btn reset-btn"
          contentClassName="premium-control-toggle-content"
          isSmall
          onClick={onResetClick}
        ><i className="premium-control-reset dashicons dashicons-image-rotate" /></Button>
      </div>
    );
  }
}
