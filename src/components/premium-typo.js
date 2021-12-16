import PremiumResponsive from "./premium-responsive";
import FONTS from "./premium-fonts";
import WebFont from 'webfontloader';

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const {
    SelectControl,
    RangeControl,
    ToggleControl,
    Dropdown,
    Button,
} = wp.components;

export default class PremiumTypo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fontFamily: this.props.fontFamily
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.fontFamily !== this.state.fontFamily) {
            WebFont.load({
                google: {
                    families: this.state.fontFamily
                }
            });
        }
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
            onChangeFamily = () => { },
            onChangeSize = () => { },
            onChangeWeight = () => { },
            onChangeStyle = () => { },
            onChangeSpacing = () => { },
            onChangeLine = () => { },
            onChangeUpper = () => { },
            onResetClick = () => { },
        } = this.props;
        const { fontFamily } = this.state;

        const STYLE = [
            {
                value: "normal",
                label: "Normal",
            },
            {
                value: "italic",
                label: "Italic",
            },
            {
                value: "oblique",
                label: "Oblique",
            },
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
                                    sizeMobileText={
                                        !this.props.fontSizeLabel
                                            ? __("Font Size")
                                            : this.props.fontSizeLabel
                                    }
                                    sizeTabletText={
                                        !this.props.fontSizeLabel
                                            ? __("Font Size")
                                            : this.props.fontSizeLabel
                                    }
                                    sizeText={
                                        !this.props.fontSizeLabel
                                            ? __("Font Size")
                                            : this.props.fontSizeLabel
                                    }
                                    steps={0.1}
                                    onResetClick={onResetClick}
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
                                    onResetClick={onResetClick}
                                />
                            )}
                            {components.includes("style") && (
                                <SelectControl
                                    label={__("Style")}
                                    options={STYLE}
                                    value={style}
                                    onChange={onChangeStyle}
                                    onResetClick={onResetClick}
                                />
                            )}
                            {components.includes("upper") && (
                                <ToggleControl
                                    label={__("Uppercase")}
                                    checked={upper}
                                    onChange={onChangeUpper}
                                    onResetClick={onResetClick}
                                />
                            )}
                            {components.includes("spacing") && (
                                <RangeControl
                                    label={__("Letter Spacing (PX)")}
                                    value={spacing}
                                    onChange={onChangeSpacing}
                                    onResetClick={onResetClick}
                                />
                            )}
                            {components.includes("line") && (
                                <RangeControl
                                    label={__("Line Height (PX)")}
                                    value={line}
                                    onChange={onChangeLine}
                                    onResetClick={onResetClick}
                                />
                            )}
                            {components.includes('family') && (
                                <SelectControl
                                    label={__("Font Family")}
                                    value={fontFamily}
                                    options={FONTS}
                                    onChange={onChangeFamily}
                                />
                            )}
                        </Fragment>
                    )}
                />
            </div>
        );
    }
}
