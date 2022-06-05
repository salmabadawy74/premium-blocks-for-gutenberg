const { __ } = wp.i18n;
const { SelectControl, Dropdown, Button, ColorPicker } = wp.components;
const { Fragment, useState } = wp.element;
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
import AdvancedColorControl from './Color Control/ColorComponent';

export default function PremiumShadow({ label, value, onChange, boxShadow = false }) {
    let defaultValues = {
        'color': '',
        'blur': '',
        'horizontal': '',
        'vertical': '',
        'position': ''
    }
    value = value ? { ...defaultValues, ...value } : defaultValues;
    const [state, setState] = useState(value);

    const onChangeShadow = (item, value) => {
        const updatedState = { ...state };
        updatedState[item] = value;
        setState(updatedState)
        onChange(updatedState)
    }

    const POSITION = [
        { value: "inset", label: __("Inset", 'premium-blocks-for-gutenberg') },
        { value: "", label: __("Outline", 'premium-blocks-for-gutenberg') }
    ];

    const { color, blur, horizontal, vertical, position } = state

    return (
        <div className=" premium-shadow-control__container premium-blocks-field">
            <p>{__(label || "Box Shadow")}</p>
            <div className={`premium-shadow-control__wrapper`}>
                <AdvancedColorControl
                    colorValue={color}
                    colorDefault={''}
                    onColorChange={value => onChangeShadow('color', value)}
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
                                onChange={value => onChangeShadow('horizontal', value)}
                                showUnit={false}
                                defaultValue={0}
                                min={-100}
                                max={100}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Vertical")}
                                value={vertical}
                                onChange={value => onChangeShadow('vertical', value)}
                                showUnit={false}
                                defaultValue={0}
                                min={-100}
                                max={100}
                            />
                            <ResponsiveSingleRangeControl
                                label={__("Blur")}
                                value={blur}
                                onChange={value => onChangeShadow('blur', value)}
                                showUnit={false}
                                defaultValue={0}
                            />
                            {boxShadow && <SelectControl
                                label={__("Position")}
                                options={POSITION}
                                value={position}
                                onChange={value => onChangeShadow('position', value)}
                            />}
                        </Fragment>
                    )}
                />
            </div>
        </div>
    );
}