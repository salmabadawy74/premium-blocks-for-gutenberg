const { __ } = wp.i18n;
const { Fragment, useState } = wp.element;
const { Dropdown, Button } = wp.components;
import ResponsiveSingleRangeControl from "./RangeControl/single-range-control";
export default function PremiumFilters({ label, value, onChange }) {

    let defaultValues = {
        'contrast': '100',
        'blur': '0',
        'bright': '100',
        'saturation': '100',
        'hue': '0'
    }
    value = value ? { ...defaultValues, ...value } : defaultValues;
    const [state, setState] = useState(value);

    const onChangeFilter = (item, value) => {
        const updatedState = { ...state };
        updatedState[item] = value;
        setState(updatedState)
        onChange(updatedState)
    }
    const { contrast, blur, bright, saturation, hue } = state


    return (
        <div className="premium-filter__container premium-blocks__base-control">
            <span>{__(label || "CSS Filters")}</span>
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
                            label={__("Blur")}
                            value={blur}
                            onChange={value => onChangeFilter('blur', value)}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Brightness")}
                            min="0"
                            max="200"
                            value={bright}
                            onChange={value => onChangeFilter('bright', value)}
                            showUnit={false}
                            defaultValue={100}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Contrast")}
                            min="0"
                            max="200"
                            value={contrast}
                            onChange={value => onChangeFilter('contrast', value)}
                            showUnit={false}
                            defaultValue={100}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Saturation")}
                            min="0"
                            max="200"
                            value={saturation}
                            onChange={value => onChangeFilter('saturation', value)}
                            showUnit={false}
                            defaultValue={100}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Hue")}
                            min="0"
                            max="360"
                            value={hue}
                            onChange={value => onChangeFilter('hue', value)}
                            showUnit={false}
                            defaultValue={0}
                        />
                    </Fragment>
                )}
            />
        </div>
    );
}
