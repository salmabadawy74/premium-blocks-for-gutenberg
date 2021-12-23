

export default function PremiumSizeUnits(props) {
    const { activeUnit, units, onChangeSizeUnit = unit => { } } = props;

    let sizeUnits = ["px", "em", "%"];

    if (undefined !== units) {
        sizeUnits = units;
    }

    return (
        <ul className="kmt-slider-units">
            {sizeUnits.map((unit, index) => (
                <li

                    className={
                        "single-unit " +
                        (unit === activeUnit &&
                            "active")
                    }
                    onClick={() => onChangeSizeUnit(unit)}
                >
                    <span className={`unit-text`}> {unit}</span>
                </li>
            ))}
        </ul>
    );
}
