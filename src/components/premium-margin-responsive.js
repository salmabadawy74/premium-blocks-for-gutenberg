import PremiumSizeUnits from "./premium-size-units";

import PremiumResponsive from "./premium-responsive";

const { __ } = wp.i18n;

const { Fragment, Component } = wp.element;

const { RangeControl, Dropdown, Button } = wp.components;

export default class PremiumMarginR extends Component {
  constructor() {
    super(...arguments);
    this.onAdvancedControlReset = this.onAdvancedControlReset.bind(this);
  }

  onAdvancedControlReset ()
  {
  const {
      setAttributes,
      marginTop,
      marginTopType,
      marginTopMobile,
      marginTopTablet,
      marginRight,
      marginRightType,
      marginRightMobile,
      marginRightTablet,
      marginBottom,
      marginBottomType,
      marginBottomMobile,
      marginBottomTablet,
      marginLeft,
      marginLeftType,
      marginLeftMobile,
      marginLeftTablet,
    } = this.props;
    // Reset Margin to default.

    setAttributes({
      [marginTop.label]: "",
      [marginTopType.label]: "px",
      [marginTopMobile.label]: "",
      [marginTopTablet.label]: "",
      [marginRight.label]: "",
      [marginRightType.label]: "px",
      [marginRightMobile.label]: "",
      [marginRightTablet.label]: "",
      [marginBottom.label]: "",

      [marginBottomType.label]: "px",
      [marginBottomMobile.label]: "",
      [marginBottomTablet.label]: "",

      [marginLeft.label]: "",
      [marginLeftType.label]: "px",
      [marginLeftMobile.label]: "",
      [marginLeftTablet.label]: "",
    });
  }

  render() {
    const {
      directions,
      showUnits,
      onChangeMarSizeUnit = () => {},
      marginTopType,
      marginTopMobile,
      marginTopTablet,
      marginTop,
      marginRightType,
      marginRightMobile,
      marginRightTablet,
      marginRight,
      marginBottomType,
      marginBottomMobile,
      marginBottomTablet,
      marginBottom,
      marginLeftType,
      marginLeftMobile,
      marginLeftTablet,
      marginLeft,
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
                  type={marginTopType}
                  typeLabel={marginTopType.label}
                  sizeMobile={marginTopMobile.value}
                  sizeMobileLabel={marginTopMobile.label}
                  sizeTablet={marginTopTablet.value}
                  sizeTabletLabel={marginTopTablet.label}
                  size={marginTop.value}
                  sizeLabel={marginTop.label}
                  sizeMobileText={
                    !marginTop.label ? __("Margin Top") : marginTop.label
                  }
                  sizeTabletText={
                    !marginTop.label ? __("Margin Top") : marginTop.label
                  }
                  sizeText={
                    !marginTop.label ? __("Margin Top") : marginTop.label
                  }
                  steps={0.1}
                  {...this.props}
                />
              )}
              {(directions.includes("all") || directions.includes("right")) && (
                <PremiumResponsive
                  type={marginRightType}
                  typeLabel={marginRightType.label}
                  sizeMobile={marginRightMobile.value}
                  sizeMobileLabel={marginRightMobile.value}
                  sizeTablet={marginRightTablet.value}
                  sizeTabletLabel={marginRightTablet.value}
                  size={marginRight.value}
                  sizeLabel={marginRight.label}
                  sizeMobileText={
                    !marginRight.label ? __("Margin Right") : marginRight.label
                  }
                  sizeTabletText={
                    !marginRight.label ? __("Margin Right") : marginRight.label
                  }
                  sizeText={
                    !marginRight.label ? __("Margin Right") : marginRight.label
                  }
                  steps={0.1}
                  {...this.props}
                />
              )}
              {(directions.includes("all") ||
                directions.includes("bottom")) && (
                <PremiumResponsive
                  type={marginBottomType}
                  typeLabel={marginBottomType.label}
                  sizeMobile={marginBottomMobile.value}
                  sizeMobileLabel={marginBottomMobile.value}
                  sizeTablet={marginBottomTablet.value}
                  sizeTabletLabel={marginBottomTablet.value}
                  size={marginBottom.value}
                  sizeLabel={marginBottom.label}
                  sizeMobileText={
                    !marginBottom.label
                      ? __("Margin Bottom")
                      : marginBottom.label
                  }
                  sizeTabletText={
                    !marginBottom.label
                      ? __("Margin Bottom")
                      : marginBottom.label
                  }
                  sizeText={
                    !marginBottom.label
                      ? __("Margin Bottom")
                      : marginBottom.label
                  }
                  steps={0.1}
                  {...this.props}
                />
              )}
              {(directions.includes("all") || directions.includes("left")) && (
                <PremiumResponsive
                  type={marginLeftType}
                  typeLabel={marginLeftType.label}
                  sizeMobile={marginLeftMobile.value}
                  sizeMobileLabel={marginLeftMobile.value}
                  sizeTablet={marginLeftTablet.value}
                  sizeTabletLabel={marginLeftTablet.value}
                  size={marginLeft.value}
                  sizeLabel={marginLeft.label}
                  sizeMobileText={
                    !marginLeft.label ? __("Margin Left") : marginLeft.label
                  }
                  sizeTabletText={
                    !marginLeft.label ? __("Margin Left") : marginLeft.label
                  }
                  sizeText={
                    !marginLeft.label ? __("Margin Left") : marginLeft.label
                  }
                  steps={0.1}
                  {...this.props}
                />
              )}
            </Fragment>
          )}
        />
      </div>
    );
  }
}
