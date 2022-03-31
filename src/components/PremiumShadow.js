const { __ } = wp.i18n;
const { SelectControl, Dropdown, Button, ColorPicker } = wp.components;
const { Fragment } = wp.element;
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
import AdvancedColorControl from './Color Control/ColorComponent'

export default function PremiumShadow(props) {
    const {
        label,
        color,
        blur,
        horizontal,
        vertical,
        position = "outline",
        onChangeColor = () => { },
        onChangeBlur = () => { },
        onChangehHorizontal = () => { },
        onChangeVertical = () => { },
        onChangePosition = () => { },
        boxShadow = false
    } = props;

    const POSITION = [
        {
            value: "inset",
            label: __("Inset", 'premium-blocks-for-gutenberg')
        },
        {
            value: "",
            label: __("Outline", 'premium-blocks-for-gutenberg')
        }
    ];

    return (
        <div className="premium-control-toggle premium-shadow-control__container">
            <strong>{__(label || "Box Shadow")}</strong>
            <div className={`premium-shadow-control__wrapper`}>
                <AdvancedColorControl
                    colorValue={color}
                    colorDefault={''}
                    onColorChange={onChangeColor}
                    disableReset={true}
                />
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
                            <ResponsiveSingleRangeControl
                                label={__("Horizontal")}
                                value={horizontal}
                                onChange={onChangehHorizontal}
                                showUnit={false}
                                defaultValue={0}
                                min={-100}
                                max={100}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Vertical")}
                                value={vertical}
                                onChange={onChangeVertical}
                                showUnit={false}
                                defaultValue={0}
                                min={-100}
                                max={100}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Blur")}
                                value={blur}
                                onChange={onChangeBlur}
                                showUnit={false}
                                defaultValue={0}
                            />
                            {boxShadow && <SelectControl
                                label={__("Position")}
                                options={POSITION}
                                value={position}
                                onChange={onChangePosition}
                            />}
                        </Fragment>
                    )}
                />
            </div>
        </div>
    );
}
