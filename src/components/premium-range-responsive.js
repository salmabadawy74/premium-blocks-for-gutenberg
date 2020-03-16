import PremiumResponsive from "./premium-responsive"

const { __ } = wp.i18n;
const {
    Component
} = wp.element;

export default class PremiumRange extends Component {

    constructor() {
        super(...arguments)
        this.onAdvancedControlReset = this.onAdvancedControlReset.bind(this)
    }

    onAdvancedControlReset() {

        const { setAttributes } = this.props

        setAttributes({ [this.props.range.label]: "" })
        setAttributes({ [this.props.rangeType.label]: "px" })
        setAttributes({ [this.props.rangeMobile.label]: "" })
        setAttributes({ [this.props.rangeTablet.label]: "" })
    }

    render() {
        return (
            <div className="premium-control-toggle">
                <PremiumResponsive
                    type={this.props.rangeType}
                    typeLabel={this.props.rangeType.label}
                    sizeMobile={this.props.rangeMobile}
                    sizeMobileLabel={this.props.rangeMobile.label}
                    sizeTablet={this.props.rangeTablet}
                    sizeTabletLabel={this.props.rangeTablet.label}
                    size={this.props.range}
                    sizeLabel={this.props.range.label}
                    sizeMobileText={
                        (!this.props.rangeLabel) ? __("Range") : this.props.rangeLabel
                    }
                    sizeTabletText={
                        (!this.props.rangeLabel) ? __("Range") : this.props.rangeLabel
                    }
                    sizeText={
                        (!this.props.rangeLabel) ? __("Range") : this.props.rangeLabel
                    }
                    steps={0.1}
                    min={this.props.min}
                    max={this.props.max}
                    {...this.props}
                />
            </div>
        );
    }
}
