const { __ } = wp.i18n;
const { Dropdown, Button, ColorPicker } = wp.components;
const { Fragment } = wp.element;
import PremiumRangeControl from './premium-range-control';

export default function PremiumTextShadow(props) {
    const {
        label,
        color,
        blur,
        horizontal,
        vertical,
        onChangeColor = () => { },
        onChangeBlur = () => { },
        onChangehHorizontal = () => { },
        onChangeVertical = () => { },
        onResetClick = () => { }
    } = props;

    return (
        <div className="premium-control-toggle">
            <strong>{__(label || "Text Shadow")}</strong>
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
                                disableAlpha
                                onResetClick={onResetClick}
                            />
                        </Fragment>
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
                            label={__("Horizontal")}
                            min="0"
                            max="10"
                            step="0.1"
                            value={horizontal}
                            onChange={onChangehHorizontal}
                            showUnit={false}
                            defaultValue={''}
                        />
                        <PremiumRangeControl
                            label={__("Vertical")}
                            min="0"
                            max="10"
                            step="0.1"
                            value={vertical}
                            onChange={onChangeVertical}
                            showUnit={false}
                            defaultValue={''}
                        />
                    </Fragment>
                )}
            />
            {/* <Button
                className="premium-control-toggle-btn reset-btn"
                contentClassName="premium-control-toggle-content"
                isSmall
                onClick={onResetClick}
            ><i className="premium-control-reset dashicons dashicons-image-rotate" /></Button> */}
        </div>
    );
}