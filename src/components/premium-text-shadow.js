const { __ } = wp.i18n;
const { RangeControl, Dropdown, Button, ColorPicker } = wp.components;
const { Fragment } = wp.element;
const { ColorPalette } = wp.editor;
export default function PremiumTextShadow(props) {
    const {
        label,
        color,
        blur,
        horizontal,
        vertical,
        onChangeColor = () => {},
        onChangeBlur = () => {},
        onChangehHorizontal = () => {},
        onChangeVertical = () => {}
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
                                color={borderColor}
                                onChangeComplete={onChangeColor}
                                disableAlpha
                            />
                        </Fragment>
                        <RangeControl
                            label={__("Blur")}
                            value={blur}
                            onChange={onChangeBlur}
                        />
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
                    </Fragment>
                )}
            />
        </div>
    );
}
