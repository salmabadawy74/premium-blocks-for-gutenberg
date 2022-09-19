import SingleOption from "./common/SingleOption";

const OptionsComponent = ({ options, onChange, values }) => {
    return Object.keys(options).map((optionId) => {
        let value = values[optionId];
        let option = options[optionId];

        return (
            <SingleOption
                value={value}
                optionId={optionId}
                params={option}
                onChange={(newVal) => {
                    onChange(newVal, optionId);
                }}
                key={optionId}
            />
        );
    });
};

export default OptionsComponent;
