const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Dropdown, Button } = wp.components;
import PremiumRangeControl from './premium-range-control';

export default function PremiumFilters(props) {
    const {
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
            <strong>{__("CSS Filters")}</strong>
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
                        <PremiumRangeControl
                            label={__("Blur")}
                            min="0"
                            max="10"
                            step="0.1"
                            value={blur}
                            onChange={onChangeBlur}
                            showUnit={false}
                            defaultValue={''}
                        />
                        <PremiumRangeControl
                            label={__("Brightness")}
                            min="0"
                            max="200"
                            value={bright}
                            onChange={onChangeBright}
                            showUnit={false}
                            defaultValue={''}
                        />
                        <PremiumRangeControl
                            label={__("Contrast")}
                            min="0"
                            max="200"
                            value={contrast}
                            onChange={onChangeContrast}
                            showUnit={false}
                            defaultValue={''}
                        />
                        <PremiumRangeControl
                            label={__("Saturation")}
                            min="0"
                            max="200"
                            value={saturation}
                            onChange={onChangeSat}
                            showUnit={false}
                            defaultValue={''}
                        />
                        <PremiumRangeControl
                            label={__("Hue")}
                            min="0"
                            max="360"
                            value={hue}
                            onChange={onChangeHue}
                            showUnit={false}
                            defaultValue={''}
                        />
                    </Fragment>
                )}
            />
        </div>
    );
}
