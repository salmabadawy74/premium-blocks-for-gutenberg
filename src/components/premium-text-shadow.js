const { __ } = wp.i18n;
const { Dropdown, Button, ColorPicker } = wp.components;
const { Fragment } = wp.element;
import ResponsiveSingleRangeControl from "./RangeControl /single-range-control";
import AdvancedColorControl from './Color Control/ColorComponent'

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
        <div className="premium-control-toggle premium-shadow-control__container">
            <strong>{__(label || "Text Shadow")}</strong>
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
                            {/* <Fragment>
                                <p>{__("Shadow Color")}</p>
                                <ColorPicker
                                    color={color}
                                    onChangeComplete={onChangeColor}
                                    disableAlpha
                                    onResetClick={onResetClick}
                                />
                            </Fragment> */}
                            <ResponsiveSingleRangeControl
                                label={__("Blur")}
                                value={blur}
                                onChange={onChangeBlur}
                                showUnit={false}
                                defaultValue={0}
                            />
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
                        </Fragment>
                    )}
                />
            </div>
            {/* <Button
                className="premium-control-toggle-btn reset-btn"
                contentClassName="premium-control-toggle-content"
                isSmall
                onClick={onResetClick}
            ><i className="premium-control-reset dashicons dashicons-image-rotate" /></Button> */}
        </div>
    );
}