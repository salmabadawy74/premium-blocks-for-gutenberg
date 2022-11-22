import ReactTooltip from 'react-tooltip';

const PremiumToggle = props => {
    const { value, options, onChange } = props;
    const checkedClass = value === options.second.value ? ' checked' : '';
    const handleToggleChange = () => {
        const newValue = value === options.first.value ? options.second.value : options.first.value;
        onChange(newValue);
    }
    return <div className={`premium-blocks__base-control`}>
        <ReactTooltip place='left' effect="solid" id='pbg-toggle' globalEventOff='click' getContent={(dataTip) => {
            return <div style={{ width: '200px' }}>{dataTip}</div>
        }} />
        <div className="pbg-toggle-control">
            <div className="pbg-toggle-first-label">
                {options.first.help && (
                    <span class="dashicons dashicons-warning" data-event="click" data-for='pbg-toggle' data-tip={options.first.help}></span>
                )}
                {options.first.label}
            </div>
            <div className="pbg-toggle">
                <span className={`pbg-toggle-slider${checkedClass}`} onClick={handleToggleChange}></span>
            </div>
            <div className="pbg-toggle-second-label">
                {options.second.label}
                {options.second.help && (
                    <span class="dashicons dashicons-warning" data-event="click" data-for='pbg-toggle' data-tip={options.second.help}></span>
                )}
            </div>
        </div>
    </div>
}

export default PremiumToggle;