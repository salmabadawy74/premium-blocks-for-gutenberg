import { ToggleControl, CheckboxControl } from "@wordpress/components";
import CheckBox from "./checkBox";

const AdvancedSwitcher = (props) => {
    const { label, description, onChange, checked = true, style, childOption } = props;
    const styleObj = {
        margin: '0',
        padding: '0',
        border: '0'
    };
    return (
        <>
            <div className="pb-advanced-switcher" style={childOption ? { ...styleObj, ...style } : style}>
                <div className="pb-title">
                    <h2 className="pb-swticher-label">{label}</h2>
                    {description}{" "}
                </div>
                <div className="pb-switcher">
                    <ToggleControl checked={checked} onChange={onChange} />
                </div>
            </div>
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
        </>
    );
};

export default AdvancedSwitcher;
