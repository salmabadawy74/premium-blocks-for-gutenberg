import { __ } from '@wordpress/i18n';
import Slider, { SliderTooltip } from 'rc-slider';
import './slider.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <SliderTooltip
            prefixCls="rc-slider-tooltip"
            overlay={`${value} %`}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </SliderTooltip>
    );
};

export default function AdvancedRangeControl({
    label,
    labels = [__("From", 'premium-blocks-for-gutenberg'), __("To", 'premium-blocks-for-gutenberg')],
    onChange,
    step = 1,
    max = 100,
    min = 0,
    value,
    unit = 'px'
}) {
    const format = {
        to: function (value) {
            return Number(value);
        },
        from: function (value) {
            return Number(value);
        }
    };
    const tooltipsFormat = {
        to: function (value) {
            return `${value}${unit}`;
        },
        from: function (value) {
            return `${value}${unit}`;
        }
    };
    const changeHandler = (newValue) => {
        onChange({ ...value, from: newValue[0], to: newValue[1] });
    };

    return <div className={`premium-blocks-advanced-range-control premium-blocks__base-control`}>
        <header>
            {label && (
                <div className="premium-slider-title-wrap">
                    <span className='premium-control-title'>{label}</span>
                </div>
            )}
            <div className={`premium-slider-labels-wrap`} style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', color: "#c2cbd2", margin: "5px 0" }}>
                {labels.length > 0 && labels.map(label => {
                    return <span className='premium-control-title'>{label}</span>
                })}
                <div className="scales">
                    <div className="scale"></div>
                </div>
            </div>
        </header>
        <Range
            value={[value.from, value.to]}
            onChange={changeHandler}
            min={min}
            max={max}
            step={step}
            handle={handle}
            tipFormatter={val => `${val}${value.unit}`}
        />
    </div>;
}