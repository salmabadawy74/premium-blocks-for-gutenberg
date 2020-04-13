import PremiumSizeUnits from "./premium-size-units";
import PremiumResponsive from "./premium-responsive"

const { __ } = wp.i18n;
const {
    Fragment,
    Component
} = wp.element;
const { Dropdown, Button } = wp.components;

export default class PremiumPaddingResponsive extends Component {

    constructor() {
        super(...arguments)
    }

    render() {
        const {
            showUnits,
            onChangePadSizeUnit = () => { },
            onResetClick = () => { }
        } = this.props;
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
                            <PremiumResponsive
                                type={this.props.paddingTopType}
                                typeLabel={this.props.paddingTopType.label}
                                sizeMobile={this.props.paddingTopMobile}
                                sizeMobileLabel={this.props.paddingTopMobile.label}
                                sizeTablet={this.props.paddingTopTablet}
                                sizeTabletLabel={this.props.paddingTopTablet.label}
                                size={this.props.paddingTop}
                                sizeLabel={this.props.paddingTop.label}
                                sizeMobileText={
                                    (!this.props.paddingTopLabel) ? __("padding Top") : this.props.paddingTopLabel
                                }
                                sizeTabletText={
                                    (!this.props.paddingTopLabel) ? __("padding Top") : this.props.paddingTopLabel
                                }
                                sizeText={
                                    (!this.props.paddingTopLabel) ? __("padding Top") : this.props.paddingTopLabel
                                }
                                onResetClick={onResetClick}
                                steps={0.1}
                                {...this.props}
                            />
                            <PremiumResponsive
                                type={this.props.paddingRightType}
                                typeLabel={this.props.paddingRightType.label}
                                sizeMobile={this.props.paddingRightMobile}
                                sizeMobileLabel={this.props.paddingRightMobile.label}
                                sizeTablet={this.props.paddingRightTablet}
                                sizeTabletLabel={this.props.paddingRightTablet.label}
                                size={this.props.paddingRight}
                                sizeLabel={this.props.paddingRight.label}
                                sizeMobileText={
                                    (!this.props.paddingRightLabel) ? __("padding Right") : this.props.paddingTRightLabel
                                }
                                sizeTabletText={
                                    (!this.props.paddingRightLabel) ? __("padding Right") : this.props.paddingRightLabel
                                }
                                sizeText={
                                    (!this.props.paddingRightLabel) ? __("padding Right") : this.props.paddingRightLabel
                                }
                                onResetClick={onResetClick}
                                steps={0.1}
                                {...this.props}
                            />
                            <PremiumResponsive
                                type={this.props.paddingBottomType}
                                typeLabel={this.props.paddingBottomType.label}
                                sizeMobile={this.props.paddingBottomMobile}
                                sizeMobileLabel={this.props.paddingBottomMobile.label}
                                sizeTablet={this.props.paddingBottomTablet}
                                sizeTabletLabel={this.props.paddingBottomTablet.label}
                                size={this.props.paddingBottom}
                                sizeLabel={this.props.paddingBottom.label}
                                sizeMobileText={
                                    (!this.props.paddingBottomLabel) ? __("padding Bottom") : this.props.paddingBottomLabel
                                }
                                sizeTabletText={
                                    (!this.props.paddingBottomLabel) ? __("padding Bottom") : this.props.paddingBottomLabel
                                }
                                sizeText={
                                    (!this.props.paddingBottomLabel) ? __("padding Bottom") : this.props.paddingBottomLabel
                                }
                                onResetClick={onResetClick}
                                steps={0.1}
                                {...this.props}
                            />
                            <PremiumResponsive
                                type={this.props.paddingLeftType}
                                typeLabel={this.props.paddingLeftType.label}
                                sizeMobile={this.props.paddingLeftMobile}
                                sizeMobileLabel={this.props.paddingLeftMobile.label}
                                sizeTablet={this.props.paddingLeftTablet}
                                sizeTabletLabel={this.props.paddingLeftTablet.label}
                                size={this.props.paddingLeft}
                                sizeLabel={this.props.paddingLeft.label}
                                sizeMobileText={
                                    (!this.props.paddingLeftLabel) ? __("padding Left") : this.props.paddingLeftLabel
                                }
                                sizeTabletText={
                                    (!this.props.paddingLeftLabel) ? __("padding Left") : this.props.paddingLeftLabel
                                }
                                sizeText={
                                    (!this.props.paddingLeftLabel) ? __("padding Left") : this.props.paddingLeftLabel
                                }
                                onResetClick={onResetClick}
                                steps={0.1}
                                {...this.props}
                            />
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
