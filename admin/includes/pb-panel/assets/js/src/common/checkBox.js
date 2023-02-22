import { CheckboxControl } from "@wordpress/components";

const CheckBox = (props) => {
    const { label, description, onChange, checked = true, style } = props;

    return (
        <div className="pb-advanced-check-box" style={style}>
            <div className="pb-checkbox">
                <CheckboxControl
                    label={label}
                    help={description}
                    checked={checked}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default CheckBox;