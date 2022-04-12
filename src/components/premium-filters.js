const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Dropdown, Button } = wp.components;
import ResponsiveSingleRangeControl from './RangeControl/single-range-control';
export default function PremiumFilters(props) {
    const {
        label,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        onChangeBlur = () => { },
        onChangeBright = () => { },
        onChangeContrast = () => { },
        onChangeSat = () => { },
        onChangeHue = () => { }
    } = props;
    return (
        <div className="premium-control-toggle">
            <strong>{__(label || "CSS Filters")}</strong>
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
                            onChange={onChangeBlur}
                            showUnit={false}
                            defaultValue={0}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Brightness")}
                            min="0"
                            max="200"
                            value={bright}
                            onChange={onChangeBright}
                            showUnit={false}
                            defaultValue={100}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Contrast")}
                            min="0"
                            max="200"
                            value={contrast}
                            onChange={onChangeContrast}
                            showUnit={false}
                            defaultValue={100}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Saturation")}
                            min="0"
                            max="200"
                            value={saturation}
                            onChange={onChangeSat}
                            showUnit={false}
                            defaultValue={100}
                        />
                        <ResponsiveSingleRangeControl
                            label={__("Hue")}
                            min="0"
                            max="360"
                            value={hue}
                            onChange={onChangeHue}
                            showUnit={false}
                            defaultValue={0}
                        />
                    </Fragment>
                )}
            />
        </div>
    );
}