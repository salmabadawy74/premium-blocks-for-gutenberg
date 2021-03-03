const { __ } = wp.i18n;
const {
    RangeControl,
    SelectControl,
    Dropdown,
    Button,
    ColorPicker,
} = wp.components;
const { Fragment } = wp.element;

export default function PremiumBoxShadow(props) {
    const {
        inner,
        label,
        color,
        blur,
        horizontal,
        vertical,
        position,
        onChangeColor = () => {},
        onChangeBlur = () => {},
        onChangehHorizontal = () => {},
        onChangeVertical = () => {},
        onChangePosition = () => {},
    } = props;

    const POSITION = [
        {
            value: "inset",
            label: __("Inset"),
        },
        {
            value: "",
            label: __("Outline"),
        },
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
                                disableAlpha
                            />
                        </Fragment>
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
    );
}
