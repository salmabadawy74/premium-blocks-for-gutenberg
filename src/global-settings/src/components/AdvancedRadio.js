import { ButtonGroup, Button } from '@wordpress/components';
import ReactTooltip from 'react-tooltip';
import classnames from "classnames";

const AdvancedRadio = ({ value, onChange, label, choices }) => {
    let defaultVal = '';
    value = value ? value : defaultVal;
    const { first, second } = choices;
    return <div className={`premium-blocks__base-control pbg-advanced-radio-control`}>
        <ReactTooltip place='left' effect="solid" id='pbg-toggle' getContent={(dataTip) => {
            return <div style={{ width: '200px' }}>{dataTip}</div>
        }} />
        {label && <span className="customize-control-title premium-control-title" style={{
            fontStyle: 'italic'
        }}>{label}</span>}
        <ButtonGroup className="premium-radio-container-control">
            <Button
                isTertiary
                className={classnames(`pbg-advanced-radio-button first`, { 'active-radio': first.value === value })}
                onClick={() => {
                    onChange(first.value)
                }}
                data-for='pbg-toggle'
                data-tip={first.help}
            >
                {first.label}
            </Button>
            <Button
                isTertiary
                className={classnames(`pbg-advanced-radio-button second`, { 'active-radio': second.value === value })}
                onClick={() => {
                    onChange(second.value)
                }}
                data-for='pbg-toggle'
                data-tip={second.help}
            >
                {second.label}
            </Button>
        </ButtonGroup>
    </div>
}

export default AdvancedRadio;