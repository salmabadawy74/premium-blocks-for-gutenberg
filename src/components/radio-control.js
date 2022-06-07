
const { useState, Fragment } = wp.element;
const { __ } = wp.i18n;
const { ButtonGroup, Button } = wp.components;

const RadioComponent = ({ value, onChange, label, choices, showIcons = false }) => {
    const HandleChange = (newVal) => {
        setState(newVal);
        onChange(newVal);

    };

    let defaultVal = '';
    value = value ? value : defaultVal;
    const [state, setState] = useState(value);
    const renderButtons = () => {
        return <Fragment>
            {choices.map((choice) => {

                return <Button
                    isTertiary
                    className={choice.value === value ? 'active-radio' : ''}
                    onClick={() => {
                        HandleChange(choice.value)
                    }}
                >
                    {showIcons ? choice.icon : choice.label}
                </Button>
            })}
        </Fragment>
    }
    return <div className={`premium-blocks__base-control`}>
        {label && <span className="customize-control-title premium-control-title">{label}</span>}
        <ButtonGroup className="premium-radio-container-control">
            {renderButtons()}
        </ButtonGroup>
    </div>
}

export default React.memo(RadioComponent);