
const { useState, Fragment } = wp.element;
const { __ } = wp.i18n;
const { ButtonGroup, Button } = wp.components;

const RadioComponent = ({ value, onChange, label, choices }) => {

    const HandleChange = (newVal) => {
        console.log(newVal)
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
    return <Fragment>
        <span className="customize-control-title kmt-control-title">{label}</span>
        <ButtonGroup className="kmt-radio-container-control">
            {renderButtons()}
        </ButtonGroup>
    </Fragment>
}

export default React.memo(RadioComponent);