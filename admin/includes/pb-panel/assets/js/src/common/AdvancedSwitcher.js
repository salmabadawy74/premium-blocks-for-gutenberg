import { ToggleControl, CheckboxControl } from "@wordpress/components";

const AdvancedSwitcher = (props) => {
    const { label, description, onChange, checked = true, style, childOption } = props;

    return (
        <div className="pb-advanced-switcher" style={style}>
            <div className="pb-title">
                <h2 className="pb-swticher-label">{label}</h2>
                {description}{" "}
                {childOption && (
                    <div className={`pbg-checkbox`}>
                        <input type={'checkbox'} value={childOption.checked} checked={childOption.checked} />
                        <label className="pbg-checkbox-input" onClick={() => childOption.onChange(!childOption.checked)}></label>
                        <span className="pbg-checkbox-label">{childOption.label}</span>
                    </div>
                )}
            </div>
            <div className="pb-switcher">
                <ToggleControl checked={checked} onChange={onChange} />
            </div>
        </div>
    );
};

export default AdvancedSwitcher;
