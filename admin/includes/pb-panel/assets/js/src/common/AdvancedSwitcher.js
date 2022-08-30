import { ToggleControl } from "@wordpress/components";

const AdvancedSwitcher = props => {
    const { label, description, onChange, checked = true } = props;

    return <div className="pb-advanced-switcher">
        <div className="pb-swticher-label">
            {label}
        </div>
        <div className="pb-switcher">
            <ToggleControl
                checked={checked}
                onChange={onChange}
            />
        </div>
    </div>
}

export default AdvancedSwitcher