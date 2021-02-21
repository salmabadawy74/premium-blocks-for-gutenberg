const { __ } = wp.i18n;
const { RangeControl, Dropdown, Button, ColorPicker } = wp.components;
const { Fragment } = wp.element;
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
                        <RangeControl
                            label={__("Blur")}
                            value={blur}
                            onChange={onChangeBlur}
                            onResetClick={onResetClick}
                        />
                        <RangeControl
                            label={__("Horizontal")}
                            value={horizontal}
                            onChange={onChangehHorizontal}
                            onResetClick={onResetClick}
                        />
                        <RangeControl
                            label={__("Vertical")}
                            value={vertical}
                            onChange={onChangeVertical}
                            onResetClick={onResetClick}
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