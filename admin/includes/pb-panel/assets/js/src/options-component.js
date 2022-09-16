import SingleOption from "./common/SingleOption";

const SingleOptionComponent = ({ value, optionId, option, onChange }) => {
    return (
        <SingleOption
            id={optionId}
            value={value}
            params={option}
            onChange={onChange}
        />
    );
};

const OptionsComponent = ({ options, onChange, values }) => {
    return Object.keys(options).map((optionId) => {
        let value = values[optionId];
        let option = options[optionId];

        return (
            <SingleOptionComponent
                value={value}
                optionId={optionId}
                option={option}
                onChange={(newVal) => {
                    onChange(newVal, optionId);
                }}
                key={optionId}
            />
        );
    });
};

export default OptionsComponent;
