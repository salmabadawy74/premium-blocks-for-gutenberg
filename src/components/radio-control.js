
const { useState, Fragment } = wp.element;
const { __ } = wp.i18n;
const { ButtonGroup, Button } = wp.components;

const RadioComponent = ({ value, onChange, label, choices }) => {
    const HandleChange = (newVal) => {
        onChange(newVal);
        setState(newVal);
    };
    let defaultVal = '';
    value = value ? value : defaultVal;
    const [state, setState] = useState(value);
    const renderButtons = () => {
        let currentChoices = choices
        return <Fragment>
            {currentChoices.map((choice) => {
                const currentValue = state
                return <Button
                    isTertiary
                    className={choice === currentValue ? 'active-radio' : ''}
                    onClick={() => {
                        HandleChange(choice)
                    }}
                >
                    {choice}
                </Button>
            })}
        </Fragment>
    }
    return <div className={`premium-blocks-field`}>
        <span className="customize-control-title premium-control-title">{label}</span>
        <ButtonGroup className="premium-radio-container-control">
            {renderButtons()}
        </ButtonGroup>
    </div>
}

export default React.memo(RadioComponent);