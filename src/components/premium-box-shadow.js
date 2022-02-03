const { __ } = wp.i18n;
const {
    RangeControl,
    SelectControl,
    Dropdown,
    Button,
    ColorPicker
} = wp.components;
const { Fragment } = wp.element;
import AdvancedColorControl from './premium-color-control'

export default function PremiumBoxShadow(props) {
    const {
        inner,
        withAlpha,
        label,
        color,
        blur,
        horizontal,
        vertical,
        position,
        onChangeColor = () => { },
        onChangeBlur = () => { },
        onChangehHorizontal = () => { },
        onChangeVertical = () => { },
        onChangePosition = () => { },
    } = props;

    const POSITION = [
        {
            value: "inset",
            label: __("Inset")
        },
        {
            value: "",
            label: __("Outline")
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
                            <RangeControl
                                label={__("Horizontal")}
                                value={horizontal}
                                onChange={onChangehHorizontal}
                            />
                            <RangeControl
                                label={__("Vertical")}
                                value={vertical}
                                onChange={onChangeVertical}
                            />
                            <RangeControl
                                label={__("Blur")}
                                value={blur}
                                onChange={onChangeBlur}
                            />
                            <SelectControl
                                label={__("Position")}
                                options={POSITION}
                                value={position}
                                onChange={onChangePosition}
                            />
                        </Fragment>
                    )}
                />
            </div>
        </div>
    );
}
