const PremiumToggle = props => {
    const { value, options, onChange } = props;
    const checkedClass = value === options.second.value ? ' checked' : '';
    const handleToggleChange = () => {
        const newValue = value === options.first.value ? options.second.value : options.first.value;
        onChange(newValue);
    }
    return <div className={`premium-blocks__base-control`}>
        <div className="pbg-toggle-control">
            <div className="pbg-toggle-first-label">{options.first.label}</div>
            <div className="pbg-toggle">
                <span className={`pbg-toggle-slider${checkedClass}`} onClick={handleToggleChange}></span>
            </div>
            <div className="pbg-toggle-second-label">{options.second.label}</div>
        </div>
    </div>
}

export default PremiumToggle;