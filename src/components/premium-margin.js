import PremiumSizeUnits from "./premium-size-units";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { RangeControl, Dropdown, Button } = wp.components;

export default function PremiumMargin(props) {
    const {
        directions,
        showUnits,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        onChangeMarTop = () => { },
        onChangeMarRight = () => { },
        onChangeMarBottom = () => { },
        onChangeMarLeft = () => { },
        onChangeMarSizeUnit = () => { }
    } = props;
    return (
        <div className="premium-control-toggle">
            <strong>{__("Margin")}</strong>
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
                        {showUnits && (
                            <PremiumSizeUnits onChangeSizeUnit={onChangeMarSizeUnit} />
                        )}
                        {(directions.includes("all") || directions.includes("top")) && (
                            <RangeControl
                                label={__("Margin Top (PX)")}
                                value={marginTop}
                                min="0"
                                max="150"
                                onChange={onChangeMarTop}
                            />
                        )}
                        {(directions.includes("all") || directions.includes("right")) && (
                            <RangeControl
                                label={__("Margin Right (PX)")}
                                value={marginRight}
                                min="0"
                                max="150"
                                onChange={onChangeMarRight}
                            />
                        )}
                        {(directions.includes("all") || directions.includes("bottom")) && (
                            <RangeControl
                                label={__("Margin Bottom (PX)")}
                                value={marginBottom}
                                min="0"
                                max="150"
                                onChange={onChangeMarBottom}
                            />
                        )}
                        {(directions.includes("all") || directions.includes("left")) && (
                            <RangeControl
                                label={__("Margin Left (PX)")}
                                value={marginLeft}
                                min="0"
                                max="150"
                                onChange={onChangeMarLeft}
                            />
                        )}
                    </Fragment>
                )}
            />
        </div>
    );
}
