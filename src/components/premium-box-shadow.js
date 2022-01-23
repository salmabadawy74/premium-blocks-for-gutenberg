const { __ } = wp.i18n;
const { SelectControl, Dropdown, Button, ColorPicker } = wp.components;
const { Fragment } = wp.element;
import PremiumRangeControl from './premium-range-control';

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
        <div className="premium-control-toggle">
            <strong>{__(label || "Box Shadow")}</strong>
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
                        <Fragment>
                            <p>{__("Shadow Color")}</p>
                            <ColorPicker
                                color={color}
                                onChangeComplete={onChangeColor}
                                disableAlpha={withAlpha ? false : true}
                            />
                        </Fragment>
                        <PremiumRangeControl
                            label={__("Horizontal")}
                            value={horizontal}
                            onChange={onChangehHorizontal}
                            showUnit={false}
                            defaultValue={0}
                            min={-100}
                            max={100}
                        />
                        <PremiumRangeControl
                            label={__("Vertical")}
                            value={vertical}
                            onChange={onChangeVertical}
                            showUnit={false}
                            defaultValue={0}
                            min={-100}
                            max={100}
                        />
                        <PremiumRangeControl
                            label={__("Blur")}
                            value={blur}
                            onChange={onChangeBlur}
                            showUnit={false}
                            defaultValue={0}
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
    );
}
