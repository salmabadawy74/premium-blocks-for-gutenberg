import { ToggleControl, CheckboxControl } from "@wordpress/components";
import CheckBox from "./checkBox";

const AdvancedSwitcher = (props) => {
    const { label, description, onChange, checked = true, style, childOption } = props;

    return (
        <div className="pb-advanced-switcher" style={style}>
            <div className="pb-title">
                <h2 className="pb-swticher-label">{label}</h2>
                {description}{" "}
                {childOption && (
                    <div className="pb-advanced-input-subTitle">
                        <CheckBox
                            label={childOption.label}
                            onChange={childOption.onChange}
                            checked={childOption.checked}
                            description={childOption.description}
                        />
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
